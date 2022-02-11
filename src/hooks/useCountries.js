import React, { useState, useEffect } from 'react';

import { getCountries, getCitiesByCountry } from '../api/countriesAPI.js';
import Dropdown from '../components/container/Dropdown.jsx';
import { capitalize } from '../utils/capitalize.js';


function useCountries() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [countriesOptions, setCountriesOptions] = useState([]);
  const [citiesOptions, setCitiesOptions] = useState([]);

  useEffect(() => {
    setCitiesOptions(selectedCountry?.value?.cities?.map(c => ({ value: c, label: capitalize(c) })));
  }, [selectedCountry]);

  useEffect(() => {
    setCountriesOptions(countries.map(c => ({ value: c, label: c.country })));
  }, [countries]);

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
      .then(cities => {
        setSelectedCountry({ label: country, value: { country, cities } });
        setSelectedCity({ value: city, label: city });

      });
  };

  const clearSelectedCityAndCountry = () => {
    setSelectedCountry(null);
  };


  const countriesDropdown = (
    <Dropdown
      title="País"
      value={selectedCountry}
      isSearchable={true}
      isLoading={countries.length === 0 || countries.cities ? true : false}
      placeholder="Elige un país"
      options={countriesOptions}
      onChange={onChangeCountrySelect}
    />
  );

  const cittiesDropdown = (
    <Dropdown
      title="Ciudad"
      value={selectedCity}
      placeholder="Elige una ciudad"
      options={citiesOptions}
      onChange={onChangeCitySelect}
    />
  );

  return {
    countries, countriesDropdown, cittiesDropdown, setCountryAndCity, selectedCity, selectedCountry,
    clearSelectedCityAndCountry
  };
}

export default useCountries;