const URL = import.meta.env.VITE_MY_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export function getAllResults(search) {
    return fetch(`${URL}/search?key=${API_KEY}&q=${search}&part=snippet&type=video`).then((response) => response.json())
}