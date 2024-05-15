const URL = import.meta.env.VITE_MY_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const COMMENTS_URL = import.meta.env.VITE_LOCAL_USER_ACTIVITY_BASE_URL;

export function getAllResults(search) {
    return fetch(`${URL}search?key=${API_KEY}&q=${search}&part=snippet&type=video`).then((response) => response.json())
}

export function getVideo(videoLinkId) {
    return fetch(`${URL}videos?part=snippet%2C%20contentDetails%2C%20statistics&id=${videoLinkId}&key=${API_KEY}`).then((response) => response.json())
}

// Create
export function createComment(comment) {
    const options = {
      method: "POST",
      body: JSON.stringify(comment),
      headers: { "Content-Type": "application/json" },
    };
    return fetch(`${COMMENTS_URL}/comments`, options).then((response) => {
      return response.json();
    });
  }
  
  // Delete
  export function destroyComment(id) {
    const options = { method: "DELETE" };
    return fetch(`${COMMENTS_URL}/comments/${id}`, options);
  }
  
  // Index/Get all
  export function getAllComments() {
    return fetch(`${COMMENTS_URL}/comments`).then((response) => response.json());
  }
  
  // Comment/Get one
  export function getOneComment(id) {
    return fetch(`${COMMENTS_URL}/comments/${id}`).then((response) => response.json());
  }
  
  // Update
  export function updateComment(id, comment) {
    const options = {
      method: "PUT",
      body: JSON.stringify(comment),
      headers: { "Content-Type": "application/json" },
    };
    return fetch(`${COMMENTS_URL}/comments/${id}`, options).then((response) => {
      return response.json();
    });
  }