const sharePost = () => {
   const option = document.querySelectorAll('.post__content_user_info_share');
   const body = document.querySelector('body');
   const modal = document.querySelectorAll('.post__content_user_info_block');
   const window = document.querySelector('.shareModal');

   for (let i = 0; i < option.length; i++) {
      option[i].addEventListener("click", () => {
         modal.forEach(element => {
            element.classList.add('post__content_user_info_block_active');
         });
         modal[i].classList.remove('post__content_user_info_block_active');
         modal[i].addEventListener('click', () => {
            body.style.overflow = 'hidden';
            window.classList.remove('shareModal_active');
            modal[i].classList.add('post__content_user_info_block_active');
         });
      });
   };
};
export {
   sharePost
};