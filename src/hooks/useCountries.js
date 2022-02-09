import React, { useState, useEffect } from 'react';

import { getCountries, getCitiesByCountry } from '../api/countries.js';
import Dropdown from '../components/container/Dropdown.jsx';
import { capitalize } from '../utils/capitalize.js';


function useCountries() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const countriesOptions = countries.map(c => ({ value: c, label: c.country }));
  const citiesOptions = selectedCountry?.value?.cities?.map(c => ({ value: c, label: capitalize(c) })) ?? [];

  useEffect(() => {
    getCountries().then(countries => {
      setCountries(countries);
    });
  }, []);

  const onChangeCountrySelect = (opt, action) => {
    setSelectedCountry(opt);
    setSelectedCity(null);
  };

  const onChangeCitySelect = (opt, action) => {
    setSelectedCity(opt);
  };

  const setCountryAndCity = (country, city) => {
    setSelectedCountry({ value: { country, cities: undefined }, label: country });
    setSelectedCity({ value: city, label: city });
    getCitiesByCountry(country)
      .then(cities => setSelectedCountry({ label: country, value: { country, cities } }));
  };

  const countriesDropdown = (
    <Dropdown
      title="País"
      value={selectedCountry}
      isSearchable={false}
      isLoading={countries.length === 0 || countries.cities ? true : false}
      placeholder="Selecciona un país"
      options={countriesOptions}
      onChange={onChangeCountrySelect}
    />
  );

  const cittiesDropdown = (
    <Dropdown
      title="Ciudad"
      value={selectedCity}
      placeholder="Selecciona una ciudad"
      isLoading={ !selectedCountry?.value?.cities ? true : false}
      isDisabled={selectedCountry ? false : true}
      options={citiesOptions}
      onChange={onChangeCitySelect}
    />
  );

  return { countries, countriesDropdown, cittiesDropdown, setCountryAndCity, selectedCity, selectedCountry };
}

export default useCountries;