const shareModal = (root = document.querySelector('body')) => {
   const modal = document.createElement('div');
   modal.classList.add('shareModal');
   modal.classList.add('shareModal_active');
   const template = `
   <div class="shareModal__close">+</div>
   <div class="shareModal__content">
        <p class="shareModal__content_heading">Share Post</p>
        <div class="shareModal__content_links">
            <a target="_blank" href="https://www.facebook.com/"><img class="shareModal__content_links_image shareModal__content_links_image_1" src="../assets/social/white_facebook.png"/></a>
            <a target="_blank" href="https://www.linkedin.com/"><img class="shareModal__content_links_image shareModal__content_links_image_2" src="../assets/social/white_linkedin.jpg"/></a>
            <a target="_blank" href="https://twitter.com/"><img class="shareModal__content_links_image shareModal__content_links_image_3" src="../assets/social/white_twitter.jpg"/></a>
            <a href="#"><img class="shareModal__content_links_image shareModal__content_links_image_4" src="../assets/social/white_hyperlink.png"/></a>
         </div>
    </div>
   `;
   modal.innerHTML = template;
   root.appendChild(modal);
   const close = document.querySelector('.shareModal__close');
   close.addEventListener('click', () => {
      root.style.overflowY = 'scroll';
      modal.classList.add('shareModal_active');
   });
}


export {
   shareModal
};