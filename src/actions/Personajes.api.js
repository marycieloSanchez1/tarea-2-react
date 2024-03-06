const url = "https://rickandmortyapi.com/api/character";

export const getAllPersonajes = async () => {
  const response = await fetch(`${url}?page=1`);
  const data = await response.json();
  const promises = data.results.map(async (personaje) => {
    const res = await fetch(personaje.url);
    const results = await res.json();
    return results;
  });
  const results = await Promise.all(promises);
  return results;
};

export const getPersonajesId = async (id) => {
  const response = await fetch(`${url}/${id}`);
  const data = await response.json();
  return data;
};

