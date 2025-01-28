// imageLoader.js
import magnifyingGlass from '../assets/search.svg';

export function loadImage() {
  const button = document.querySelector('submit');
  const img = document.createElement('img');
  img.src = magnifyingGlassIcon;
  img.alt = "icon of magnifying glass";
  button.appendChild(img);
}
