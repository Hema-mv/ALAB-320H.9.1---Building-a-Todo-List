export async function getAllStarships() {
    const response = await fetch('https://swapi.dev/api/starships/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
  