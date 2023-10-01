import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { refs } from './refs';
import { fetchBySearch } from './api';
import { createMarkup } from './createMarkup';

refs.searchForm.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
    event.preventDefault();

    try {
    const formElement = event.currentTarget.elements;
    const search = formElement.searchQuery.value;
    console.log(search);

    const response = await fetchBySearch(search);
    const cards = response.hits;
        
    if (cards.length > 0) {
        const markup = await createMarkup(cards);

        refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
    } else {
        Notify.failure("Sorry, there are no images matching your search query. Please try again.", error);
        console.log("Sorry, there are no images matching your search query. Please try again.");
        
        }
    
    
    } catch (error) {
        console.log("Sorry, there are no images matching your search query. Please try again.");
        Notify.failure("Sorry, there are no images matching your search query. Please try again.", error);
    }

    
    
}
