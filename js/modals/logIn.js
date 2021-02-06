import {
   backToSignIn
} from './backToSignIn.js'
const logIn = () => {
   const signIn__heading = document.querySelector('.signIn__heading');
   signIn__heading.textContent = 'Log In';

   const signIn__member = document.querySelector('.signIn__member');
   signIn__member.textContent = ' New to this site? ';

   const signIn__member_link = document.createElement('div');
   signIn__member_link.classList.add('signIn__member_link');
   signIn__member_link.textContent = ' Sign Up ';
   signIn__member.appendChild(signIn__member_link);
   signIn__member_link.addEventListener('click', () => {
      backToSignIn();
   });

   const signIn__button_1_text = document.querySelector('.signIn__button_1_text');
   signIn__button_1_text.textContent = 'Log in with Facebook';

   const signIn__button_2_text = document.querySelector('.signIn__button_2_text');
   signIn__button_2_text.textContent = 'Log in with Google';

   const signIn__rules = document.querySelector('.signIn__rules');
   signIn__rules.style.opacity = '0';
   signIn__rules.style.visibility = 'hidden';


}
export {
   logIn
};