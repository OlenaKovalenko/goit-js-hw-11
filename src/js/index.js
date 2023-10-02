import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { refs } from './refs';
import { fetchBySearch } from './api';
import { createMarkup } from './createMarkup';

refs.searchForm.addEventListener('submit', onFormSubmit);
refs.loadMore.addEventListener('click', onLoadMore);
refs.loadMore.style.display = 'none';

export let page = 1;  

async function onFormSubmit(event) {
    event.preventDefault();
    refs.galleryContainer.innerHTML = '';

    try {
    const formElement = event.currentTarget.elements;
    const searchQuery = formElement.searchQuery.value.trim();
    
    const response = await fetchBySearch(searchQuery);
    const totalHits = response.totalHits;
    const cards = response.hits;
        
    if (cards.length > 0) {
        const markup = await createMarkup(cards);
        Notify.success(`Hooray! We found ${totalHits} images`);

        refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
        refs.loadMore.classList.remove('visually-hidden');

        const simplelightbox = new SimpleLightbox('.gallery a').refresh();
        
    } else {
        refs.galleryContainer.innerHTML = '';
        Notify.failure("Sorry, there are no images matching your search query. Please try again.", error);
        }
    
    } catch (error) {
        Notify.failure("Sorry, there are no images matching your search query. Please try again.", error);
    } finally {   
        refs.searchForm.reset();  
}
}



// async function onLoadMore() {
//     page += 1;
//     fetchBySearch(page)
//         .then(result => {
//             const markup = createMarkup(result.hits);
//             refs.galleryContainer.insertAdjacentHTML('beforeend', markup);

//     })
// }
