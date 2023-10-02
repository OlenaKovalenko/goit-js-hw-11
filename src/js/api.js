import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { page } from './index';


export async function fetchBySearch(searchWord) {
    try {
    const API_KEY = '39708192-1d0c61ff60ff411770af0a0fc';
    const BASE_URL = 'https://pixabay.com/api/';
    const perPage = 40;
        
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: searchWord,
        image_type: "photo",
        orientation: "horizontale",
        safesearch: true,
        page: page,
        per_page: perPage,
    });
        
    const response = await axios.get(`${BASE_URL}?${searchParams}`);
    return response.data;
  
  }
    catch (error) {
      Report.failure(
'Notiflix Failure',
'Error fetching cards info',
'Ok',
);
    throw error;
    
  }
}


// let searchWord = '';

// export async function fetchBySearch(searchWord, page = 1) {
  
//     const API_KEY = '39706325-fc42f933f9753c8c7490c2cf4';
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
