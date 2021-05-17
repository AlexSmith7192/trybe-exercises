const createJoke = (joke) => {
  const jokeContainer = document.getElementById('jokeContainer');
  const p = document.createElement('p');
  p.innerText = joke;
  jokeContainer.appendChild(p);

}

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  return fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => createJoke(data.joke));
};

window.onload = () => {
  for (let i = 1; i < 11; i += 1) {
    fetchJoke()
  }
};