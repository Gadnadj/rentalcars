export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '284a29e649mshd3a9e5df1e7facfp19d5bdjsn64333d2862a9',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    { headers: headers }
  );

  const result = await response.json();

  return result;
}
