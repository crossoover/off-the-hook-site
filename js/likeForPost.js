const likeforPost = () => {
   const like = document.querySelector('.post__bottom_like_heart_svg');
   const number = document.querySelector('.post__bottom_like_number');
   const toggler = document.querySelector('.post__bottom_like');

   let oldNumber = Number(number.textContent);
   toggler.addEventListener('click', () => {
      if (number.textContent == oldNumber) {
         like.setAttribute("style", "fill:crimson; transition: 0.2s;");
         number.textContent = oldNumber + 1;
      } else if (number.textContent > oldNumber) {
         like.setAttribute("style", "fill:white; transition: 0.2s;");
         number.textContent = oldNumber;
      }
   });



   const recent_like = document.querySelectorAll('.recent__post_stats_like_heart_svg');
   const recent_number = document.querySelectorAll('.recent__post_stats_like_number');
   const recent_toggler = document.querySelectorAll('.recent__post_stats_like');
   for (let i = 0; i < recent_like.length; i++) {
      let recent_oldNumber = Number(recent_number[i].textContent);
      recent_toggler[i].addEventListener('click', () => {
         if (recent_number[i].textContent == recent_oldNumber) {
            recent_like[i].setAttribute("style", "fill:crimson; transition: 0.2s;");
            recent_number[i].textContent = recent_oldNumber + 1;
         } else if (recent_number[i].textContent > recent_oldNumber) {
            recent_like[i].setAttribute("style", "fill:white; transition: 0.2s;");
            recent_number[i].textContent = recent_oldNumber;
         }
      });
   }
}
export {
   likeforPost
};