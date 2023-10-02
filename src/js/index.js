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
let searchQuery = '';


async function onFormSubmit(event) {
    event.preventDefault();
    refs.galleryContainer.innerHTML = '';

    try {
    const formElement = event.currentTarget.elements;
    searchQuery = formElement.searchQuery.value.trim();
    
    const response = await fetchBySearch(searchQuery);
    const totalHits = response.totalHits;
    const cards = response.hits;
        
        if (searchQuery.length === 0) {
            Notify.warning('Please fill out the search field!');
            return;
        }

        if (cards.length === 0) {
        refs.galleryContainer.innerHTML = '';
        refs.loadMore.classList.add('visually-hidden');
        refs.loadMore.style.display = 'none';
        Notify.failure("Sorry, there are no images matching your search query. Please try again.", error);
        return;
        }

        if (cards.length > 0 && searchQuery.length > 0) {
            const markup = await createMarkup(cards);
            Notify.success(`Hooray! We found ${totalHits} images`);

            refs.galleryContainer.insertAdjacentHTML('beforeend', markup);

            refs.loadMore.classList.remove('visually-hidden');
            refs.loadMore.style.display = 'block';

            const simplelightbox = new SimpleLightbox('.gallery a').refresh();
        }

    } catch (error) {
        Notify.failure("Sorry, there are no images matching your search query. Please try again.", error);
       console.log(error);
    } finally {
        refs.searchForm.reset();
}
}


async function onLoadMore() {
    page += 1;
    try {
        const response = await fetchBySearch(searchQuery);
        const markup = createMarkup(response.hits);
        refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
        // if ()
    }
    catch (error) {
        console.log(error);
    } 
}
