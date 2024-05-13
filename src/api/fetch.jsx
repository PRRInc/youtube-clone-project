// const URL = "https://www.googleapis.com/youtube/v3/";
// const API_KEY = "AIzaSyDezGTQ5srXrExqn3CiM0pTVaSB4zoJdmQ";
const URL = import.meta.env.VITE_MY_URL;
const API_KEY = import.meta.env.VITE_API_KEY;




export function getAllVideos(search) {
    // return fetch(`${URL}/search?key=${API_KEY}&q=messi&part=snippet`).then((response) => response.json())
    return fetch(`${URL}/search?part=snippet&q=${search}&type=video&key=${API_KEY}`).then((response) => response.json())
}
