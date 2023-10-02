import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// export async function fetchBySearch(searchWord, page = 1) {
//     try {
//     const API_KEY = '39708192-1d0c61ff60ff411770af0a0fc';
//     const BASE_URL = 'https://pixabay.com/api/';
        
//     const searchParams = new URLSearchParams({
//         key: API_KEY,
//         q: searchWord,
//         image_type: "photo",
//         orientation: "horizontale",
//         safesearch: true,
//         per_page: 40,
//     });
        
//     const response = await axios.get(`${BASE_URL}?${searchParams}&page=${page}`);
//     return response.data;
  
//   }
//   catch (error) {
//     throw error;
//   }
// }


let searchWord = '';

export async function fetchBySearch(searchWord, page = 1) {
  
    const API_KEY = '39708192-1d0c61ff60ff411770af0a0fc';
    const BASE_URL = 'https://pixabay.com/api/';
        
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: searchWord,
        image_type: "photo",
        orientation: "horizontale",
        safesearch: true,
        per_page: 40,
    });
        
  return await axios.get(`${BASE_URL}?${searchParams}&page=${page}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      Notify.failure('Error fetching cards info', error);

    })
 
}


// export async function fetchBySearch(page = 1) {
  
//     const API_KEY = '39708192-1d0c61ff60ff411770af0a0fc';
//     const BASE_URL = 'https://pixabay.com/api/';
        
//     const searchParams = new URLSearchParams({
//         key: API_KEY,
//         q: searchWord,
//         image_type: "photo",
//         orientation: "horizontale",
//         safesearch: true,
//         per_page: 40,
//     });
        
//   return await axios.get(`${BASE_URL}?${searchParams}&page=${page}`)
//     .then(response => { 
//       return response.data;
//     })
//     .catch(error => {
//       Notify.failure('Error fetching cards info', error);

//     })
 
// }
