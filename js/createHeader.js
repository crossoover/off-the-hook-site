import {
   signIn
} from './modals/signIn.js';

const createHeader = (root = document.querySelector('body')) => {
   const navigation = document.createElement('nav');
   navigation.classList.add('navigation');
   const template = `
<div class="navigation__section navigation__section_1">
<img class="navigation__section_logo " src="./assets/social/main_logo.png" alt="Main logo">
<a class="navigation__section_main-link" href="#">off the hook</a>
<div class="navigation__section_button">
   <div class="navigation__section_button_close navigation__section_button_close_1"></div>
   <div class="navigation__section_button_close navigation__section_button_close_2"></div>
   <div class="navigation__section_button_close navigation__section_button_close_3"></div>
</div>
</div>
<div class="navigation__wrapper_mobile navigation__wrapper_mobile_active">
<div class="navigation__section navigation__section_2">
<a class="navigation__section_link nav_home" href="./home.html">Home</a>
<a class="navigation__section_link nav_blog" href="./blog.html">Blog</a>
<a class="navigation__section_link nav_contact" href="./contact.html">Contact</a>

</div>
<div class="navigation__section navigation__section_3">
<a href="#" class="navigation__section_login">
   <img class="navigation__section_login-picture" src="./assets/icons/login.png" alt="login">
   <p class="navigation__section_link">Log In</p>
</a>
<a target="_blank" href="https://www.facebook.com/profile.php?id=100012281733905" class="navigation__section_social navigation__section_social_1">
   <img class="navigation__section_social-picture" src="./assets/social/facebook.svg" alt="">
</a>
<a target="_blank" href="https://www.youtube.com/" class="navigation__section_social">
   <img class="navigation__section_social-picture" src="./assets/social/youtube.png" alt="">
</a>
<a target="_blank" href="https://www.instagram.com/crossoover/" class="navigation__section_social">
   <img class="navigation__section_social-picture" src="./assets/social/instagram.png" alt="">
</a>
</div>
</div>
`;
   navigation.innerHTML = template;
   root.appendChild(navigation);

   const home_link = document.querySelector('.nav_home');
   const blog_link = document.querySelector('.nav_blog');
   const contact_link = document.querySelector('.nav_contact');
   const body2 = document.querySelector('.body');

   home_link.addEventListener('click', () => {
      body2.classList.remove('body__block-scroll');
   });
   blog_link.addEventListener('click', () => {
      body2.classList.remove('body__block-scroll');
   });
   contact_link.addEventListener('click', () => {
      body2.classList.remove('body__block-scroll');
   });

   document.querySelector('.navigation__section_login').addEventListener('click', () => {
      signIn();
   });


   const menuButton = document.querySelector('.navigation__section_button');
   const navigationMenu = document.querySelector('.navigation__wrapper_mobile');
   const logo = document.querySelector('.navigation__section_logo');
   const link = document.querySelector('.navigation__section_main-link');
   const btn1 = document.querySelector('.navigation__section_button_close_1');
   const btn2 = document.querySelector('.navigation__section_button_close_2');
   const btn3 = document.querySelector('.navigation__section_button_close_3');
   menuButton.addEventListener('click', () => {
      body2.classList.toggle('body__block-scroll');
      navigationMenu.classList.toggle('navigation__wrapper_mobile_active');
      logo.classList.toggle('navigation__section_logo_active');
      link.classList.toggle('navigation__section_main-link_active');
      btn1.classList.toggle('navigation__section_button_close_1_active');
      btn2.classList.toggle('navigation__section_button_close_2_active');
      btn3.classList.toggle('navigation__section_button_close_3_active');
   });


   const nav_link = document.querySelectorAll('.navigation__section_link');
   for (let i = 0; i < nav_link.length; i++) {
      nav_link[i].addEventListener('click', () => {
         navigationMenu.classList.toggle('navigation__wrapper_mobile_active');
         logo.classList.toggle('navigation__section_logo_active');
         link.classList.toggle('navigation__section_main-link_active');
         btn1.classList.toggle('navigation__section_button_close_1_active');
         btn2.classList.toggle('navigation__section_button_close_2_active');
         btn3.classList.toggle('navigation__section_button_close_3_active');
      });
   }

}
export {
   createHeader
};