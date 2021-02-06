import {
   logIn
} from './logIn.js'
const backToSignIn = () => {
   const signIn__heading = document.querySelector('.signIn__heading');
   signIn__heading.textContent = 'Sign Up';

   const signIn__member = document.querySelector('.signIn__member');
   signIn__member.textContent = ' Already a member? ';

   const signIn__member_link = document.createElement('div');
   signIn__member_link.classList.add('signIn__member_link');
   signIn__member_link.textContent = ' Log In ';
   signIn__member.appendChild(signIn__member_link);
   signIn__member_link.addEventListener('click', () => {
      logIn()
   });

   const signIn__button_1_text = document.querySelector('.signIn__button_1_text');
   signIn__button_1_text.textContent = 'Sign up with Facebook';

   const signIn__button_2_text = document.querySelector('.signIn__button_2_text');
   signIn__button_2_text.textContent = 'Sign up with Google';

   const signIn__rules = document.querySelector('.signIn__rules');
   signIn__rules.style.opacity = '1';
   signIn__rules.style.visibility = 'visible';
}
export {
   backToSignIn
};