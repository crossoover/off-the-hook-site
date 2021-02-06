import {
   createSliderForModal
} from '../createSliderForModal.js';
const createSliderModal = (root = document.querySelector('.page'), imageSource) => {
   const modal = document.createElement('div');
   const body = document.querySelector('body');
   modal.classList.add('sliderModal');
   const template = `
   <button class="sliderModal__close">+</button>
   <button class="sliderModal__previous">
      <img class="sliderModal__previous_image" src="../assets/icons/arrow_dark.svg"/>
   </button>

   <div id="slider">
      <ul>
         <li>
            <img src="../assets/pictures/slider_2.jpg"/>
         </li>
         <li>
            <img src="../assets/pictures/slider_1.jpg"/>
         </li>
         <li>
            <img src="../assets/pictures/slider_3.jpg"/>
         </li>
         <li>
            <img src="../assets/pictures/slider_4.jpg"/>
         </li>
         <li>
            <img src="../assets/pictures/slider_5.jpg"/>
         </li>
         <li>
            <img src="../assets/pictures/slider_6.jpg"/>
         </li>
         <li>
            <img src="../assets/pictures/slider_7.jpg"/>
         </li>
         <li>
            <img src="../assets/pictures/slider_8.jpg"/>
         </li>
         <li>
            <img src="../assets/pictures/slider_9.jpg"/>
         </li>
         <li>
            <img src="../assets/pictures/slider_10.jpg"/>
         </li>
      </ul>  
   </div>

   <div class="sliderModal__info">
      <div class="sliderModal__info_content">
         <p class="sliderModal__info_content_text">Illustration of fishing</p>
         <img class="sliderModal__info_content_instagram" src="../assets/social/instagram.png"/>
      </div>
   </div>
   <button class="sliderModal__next">
      <img class="sliderModal__next_image" src="../assets/icons/arrow_dark.svg"/>
   </button>

`;
   modal.innerHTML = template;
   root.appendChild(modal);
   body.style.overflowY = 'hidden';
   const close = document.querySelector('.sliderModal__close');
   const imageModal = document.querySelector('.sliderModal');
   createSliderForModal();

   close.addEventListener('click', () => {
      root.removeChild(imageModal);
      body.style.overflowY = 'scroll';
   });
}

export {
   createSliderModal
};