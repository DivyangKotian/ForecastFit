//image loader functions
import magnifyingGlass from '../assets/search.svg';

export function loadImage() {
  const button = document.querySelector('.submit'); 
  if (!button) return; // Prevents errors if no btn

  let img = button.querySelector('img'); // Find existing image inside button
  if (!img) {
    img = document.createElement('img');
    img.classList.add('search-icon')
    button.appendChild(img);
  }

  img.src = magnifyingGlass; // Correct image source
  img.alt = "icon of magnifying glass";
}
