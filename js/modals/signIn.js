import {
   logIn
} from './logIn.js';
const signIn = (root = document.querySelector('.page')) => {
   const body = document.querySelector('body');
   body.style.overflow = 'hidden';
   const modal = document.createElement('div');
   modal.classList.add('sighInWrapper');
   const template = `
   <div class="sighIn">
        <p class="signIn__close">+</p>
        <h2 class="signIn__heading">Sign Up</h2>
        <p class="signIn__member">Already a member? <span class="signIn__member_link">Log In</span></p>
        <button class="signIn__button signIn__button_1">
        <img src="./assets/social/facebook_footer.png" class="signIn__button_image"/>
        <span class="signIn__button_1_text">Sign up with Facebook</span></button>
        <button class="signIn__button signIn__button_2">
        <img src="./assets/social/google.png" class="signIn__button_image signIn__button_image_google"/>
        
        <span class="signIn__button_2_text">Sign up with Google</span></button>
        <p class="signIn__line"> <span class="signIn__line_text">or</span></p>
        <button class="signIn__button signIn__button_3">Sign up with email</button>
        <div class="signIn__rules">
            <input type="checkbox" checked="checked" class="signIn__rules_check"></input>
            <p class="signIn__rules_text">Join this site’s community. <span class="signIn__rules_link">Read more</span></p>
        </div>
        <p class="info_text"></p>
    </div>
   `;
   modal.innerHTML = template;
   root.appendChild(modal);

   const login_link = document.querySelector('.signIn__member_link');
   login_link.addEventListener('click', () => {
      logIn();
   });

   const navigation = document.querySelector('.navigation');
   navigation.style.display = "none";

   const read_link = document.querySelector('.signIn__rules_link');
   const read_text = document.querySelector('.info_text');
   read_link.addEventListener('click', () => {
      if (read_link.textContent === 'Read more') {
         read_link.textContent = 'Read less';
         read_text.textContent = 'Connect with members of our site. Leave comments, follow people and more. Your nickname, profile image, and public activity will be visible on our site.'
      } else {
         read_link.textContent = 'Read more';
         read_text.textContent = '';
      }
   });

   const close = document.querySelector('.signIn__close');
   close.addEventListener('click', () => {
      navigation.style.display = "flex";
      body.style.overflow = 'scroll';
      root.removeChild(modal);
   })
}
export {
   signIn
};