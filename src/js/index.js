import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';


const API_KEY = '39708192-1d0c61ff60ff411770af0a0fc';
const BASE_URL = 'https://pixabay.com/api/';

refs.searchForm.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
    event.preventDefault();

    const formElement = event.currentTarget.elements;
    const search = formElement.searchQuery.value;
    console.log(search);

    const searchParams = new URLSearchParams({
        image_type: "photo",
        orientation: "horizontale",
        safesearch: "true",
});

    const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${search}&${searchParams}`);


    
}
