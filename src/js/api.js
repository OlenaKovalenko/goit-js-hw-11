import axios from 'axios';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

export const perPage = 40;

export async function fetchBySearch(searchWord, page = 1) {
    try {
    const API_KEY = '39708192-1d0c61ff60ff411770af0a0fc';
    const BASE_URL = 'https://pixabay.111com/api/';
            
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
    const { hits, totalHits } = response.data;
    return { hits, totalHits };
  
  } catch (error) {
      Report.failure(
'Notiflix Failure',
'Error fetching cards info',
'Ok',
);
    throw error;
    
  }
}
