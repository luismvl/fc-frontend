async function getCountries() {
  try {
    const res = await fetch("https://countriesnow.space/api/v0.1/countries", { method: 'GET' });
    const json = await res.json();
    return json.data.map(({ country, cities }) => ({ country, cities }));
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function getCitiesByCountry(country) {
  try {
    const res = await fetch('https://countriesnow.space/api/v0.1/countries/cities',
      {
        method: 'POST',
        body: JSON.stringify({ country }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { getCountries, getCitiesByCountry };