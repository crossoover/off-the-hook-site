const prompt = () => {
   const crown = document.querySelectorAll('.post__content_user_info_name_crown');
   const prompt = document.querySelectorAll('.prompt');

   for (let i = 0; i < crown.length; i++) {
      crown[i].addEventListener('mouseover', () => {
         prompt[i].classList.remove('prompt__active');
      });
      crown[i].addEventListener('mouseout', () => {
         prompt[i].classList.add('prompt__active');
      });
   }
}
export {
   prompt
};