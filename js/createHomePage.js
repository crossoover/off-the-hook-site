import {
   createSlider
} from './createSlider.js';
import {
   createFooter
} from './createFooter.js';
import {
   createSliderModal
} from './modals/sliderModal.js';
const createHomePage = (root = document.querySelector('.page')) => {
   root.innerHTML = '';
   const homePage = document.createElement('div');
   homePage.classList.add('home');
   const template = `
<div class="home__illustration home__illustration_1">
   <img class="home__illustration_1_picture" src="./assets/pictures/home_1.jpg" alt="Illustration">
   <img class="home__illustration_1_picture_mobile" src="./assets/pictures/home_1_mobile.jpg" alt="Illustration">
   <div class="home__illustration_1_text">
      <p class="home__illustration_1_text-main">off the hook</p>
      <p class="home__illustration_1_text-secondary">Fishing Forum & Blog</p>
   </div>
</div>
<div class="home__illustration home__illustration_2">
   <img class="home__illustration_2_picture" src="./assets/pictures/home_2.png" alt="Illustration">
   <div class="home__illustration_number home__illustration_2_number">01</div>
</div>

<div class="home__illustration_post home__illustration_1_post">
   <h2 class="home__illustration_post-heading">Explore The Forum</h2>
   <p class="home__illustration_post-description">I'm a paragraph. Click here to add your own text and edit me.
      It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the
      font.</p>
   <button class="home__illustration_post-button home__illustration_1_post-button">Discuss Fishing</button>
</div>

<div class="home__illustration_post home__illustration_2_post">
   <h2 class="home__illustration_post-heading">Read Our Blog</h2>
   <p class="home__illustration_post-description">I'm a paragraph. Click here to add your own text and edit me.
      It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the
      font.</p>
   <button class="home__illustration_post-button home__illustration_2_post-button"> <a class="home__illustration_2_post-button_link" href="./blog.html">Discover More</a></button>
</div>

<div class="home__illustration home__illustration_3">
   <div class="home__illustration_number home__illustration_3_number">02</div>
   <img class="home__illustration_3_picture" src="./assets/pictures/home_3.png" alt="Illustration">
   <img class="home__illustration_3_picture_mobile" src="./assets/pictures/home_3_mobile.png" alt="Illustration">
</div>
<div class="home__illustration home__illustration_4">
   <div class="home__illustration_number home__illustration_4_number">03</div>
   <img class="home__illustration_4_picture" src="./assets/pictures/home_4.png" alt="Illustration">
</div>
<div class="home__illustration_post home__illustration_3_post">
   <h2 class="home__illustration_post-heading home__illustration_3_post-heading">Stay In Touch</h2>
   <p class="home__illustration_post-description home__illustration_3_post-description">I'm a paragraph. Click here to add your own text and edit me.
      It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the
      font.</p>
</div>
<form class="home__illustration_form">
   <input class="home__illustration_form_input" type="text" placeholder="Name">
   <input class="home__illustration_form_input" type="email" placeholder="Email">
   <input class="home__illustration_form_input" type="tel" placeholder="Phone">
   <textarea class="home__illustration_form_input home__illustration_form_input_textarea" type="textarea"
      placeholder="Type your message here..."></textarea>
   <button class="home__illustration_form_button" type="submit">Submit</button>
</form>

<div class="home__instagram">
   <p class="home__instagram_text">Follow Us on Instagram:</p>
   <p class="home__instagram_profile">@oth_fishingforum</p>
</div>

<div class="home__slider">
   <div class="slider">
      <div class="slider__item">
         <img src="assets/pictures/slider_1.jpg" alt="">
      </div>
      <div class="slider__item">
         <img src="assets/pictures/slider_2.jpg" alt="">
      </div>
      <div class="slider__item">
         <img src="assets/pictures/slider_3.jpg" alt="">
      </div>
      <div class="slider__item">
         <img src="assets/pictures/slider_4.jpg" alt="">
      </div>
      <div class="slider__item">
         <img src="assets/pictures/slider_5.jpg" alt="">
      </div>
      <div class="slider__item">
         <img src="assets/pictures/slider_6.jpg" alt="">
      </div>
      <div class="slider__item">
         <img src="assets/pictures/slider_7.jpg" alt="">
      </div>
      <div class="slider__item">
         <img src="assets/pictures/slider_8.jpg" alt="">
      </div>
      <div class="slider__item">
         <img src="assets/pictures/slider_9.jpg" alt="">
      </div>
      <div class="slider__item">
         <img src="assets/pictures/slider_10.jpg" alt="">
      </div>
   </div>
</div>

<div class="home__slider_mobile">
   <div class="slider__mobile">
      <div class="slider__mobile__item">
         <img src="assets/pictures/slider_1.jpg" alt="">
      </div>
      <div class="slider__mobile__item">
         <img src="assets/pictures/slider_2.jpg" alt="">
      </div>
      <div class="slider__mobile__item">
         <img src="assets/pictures/slider_3.jpg" alt="">
      </div>
      <div class="slider__mobile__item">
         <img src="assets/pictures/slider_4.jpg" alt="">
      </div>
   </div>
</div>

<div class="home__subscribe">
   <label class="home__subscribe_heading" for="email-input">
      Never Miss a Thread</label>
   <input id="email-input" class="home__subscribe_email-input" type="email"
      placeholder="Enter your email here*">
   <button class="home__subscribe_button" type="submit">Subscribe</button>
</div>
`;
   homePage.innerHTML = template;
   root.appendChild(homePage);
   createSlider();
   createFooter();


   setTimeout(() => {
      window.scrollTo(top);
   }, 500);

   const slider__item = document.querySelectorAll('.slider__item');

   for (let i = 0; i < slider__item.length; i++) {
      slider__item[i].addEventListener('click', () => {
         createSliderModal(document.querySelector('.page'), './assets/pictures/slider_1.jpg');
      });
   }
}
export {
   createHomePage
};