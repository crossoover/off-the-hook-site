import {
   postsData
} from './postsData.js';

const like = () => {
   const like = document.querySelectorAll('.post__content_bottom_likes_heart_svg');
   const number = document.querySelectorAll('.post__content_bottom_likes_number');
   const toggler = document.querySelectorAll('.post__content_bottom_likes');
   for (let i = 0; i < like.length; i++) {
      let oldNumber = Number(postsData[i].likeQuantity);
      toggler[i].addEventListener('click', () => {
         if (number[i].textContent == oldNumber) {
            like[i].setAttribute("style", "fill:crimson; transition: 0.2s;");
            number[i].textContent = oldNumber + 1;
         } else if (number[i].textContent > oldNumber) {
            like[i].setAttribute("style", "fill:white; transition: 0.2s;");
            number[i].textContent = oldNumber;
         }
      });
   }
}
export {
   like
};