// Add imports above this line
import SimpleLightbox from 'simplelightbox';

import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const createRenderGallery = renderGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', createRenderGallery);


function renderGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class='gallery__item'>
      <a class='gallery__link' href='${original}'>
      <img
        class='gallery__image'
        src='${preview}'
        data-source='${original}'
        alt='${description}'/>
      </a>
      </li>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  caption: true,
  captionPosition: 'bottom',
  captionDelay: 250,
});

galleryContainer.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;    
    lightbox.show();
  }
})
