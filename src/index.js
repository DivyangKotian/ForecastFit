
import './css/styles.css'
import { handleUserSubmit } from './handlers/userInputHandlers';
import { loadImage } from './utils/imageLoader';

document.addEventListener('DOMContentLoaded', () => {
  loadImage(); // This will add the image to the button when the page loads
});

document.querySelector('.submit').addEventListener('click', handleUserSubmit);
document.querySelector('.user-input').addEventListener('keydown', (e) =>{
  if(e.key === 'Enter'){
    handleUserSubmit();
  }
})
