import axios from 'axios';

export async function fetchBySearch(searchWord) {
    try {
    const API_KEY = '39708192-1d0c61ff60ff411770af0a0fc';
    const BASE_URL = 'https://pixabay.com/api/';
        
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: searchWord,
        image_type: "photo",
        orientation: "horizontale",
        safesearch: true,
    });
        
    const response = await axios.get(`${BASE_URL}?${searchParams}`);
    return response.data;
   
        
    const response = await axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`);
    return response.data;
  }
  catch (error) {
    throw error;
  }
}