import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { refs } from './refs';
import { fetchBySearch } from './api';

refs.searchForm.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
    event.preventDefault();

    const formElement = event.currentTarget.elements;
    const search = formElement.searchQuery.value;
    console.log(search);

    await fetchBySearch(search);
    
}
