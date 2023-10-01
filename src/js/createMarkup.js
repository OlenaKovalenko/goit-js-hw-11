export async function createMarkup(arr) {
    return arr.map(cardData => {
        const { webformatURL, largeImageUR, tags, likes, views, comments, downloads } = cardData;
        return `<a class="gallery__link" href="${largeImageUR}">
        <div class="photo-card">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
                <p class="info-item">
                <b>Likes: ${likes}</b>
                </p>
                <p class="info-item">
                <b>Views: ${views}</b>
                </p>
                <p class="info-item">
                <b>Comments: ${comments}</b>
                </p>
                <p class="info-item">
                <b>Downloads: ${downloads}</b>
                </p>
            </div>
        </div>
        </a>`
    }).join('');
}