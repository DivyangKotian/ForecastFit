//image loader functions
import magnifyingGlass from '../assets/search.svg'; // Ensure path is correct

export function loadImage() {
  const button = document.querySelector('.submit'); // Correct class selector
  if (!button) return; // Prevents errors if button isn't found

  let img = button.querySelector('img'); // Find existing image inside button
  if (!img) {
    img = document.createElement('img');
    button.appendChild(img);
  }

  img.src = magnifyingGlass; // Correct image source
  img.alt = "icon of magnifying glass";
}
