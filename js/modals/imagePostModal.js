const createImagePostModal = (root = document.querySelector('.page'), imageSource) => {

   const body = document.querySelector('body');

   const navigation = document.querySelector('.navigation');
   navigation.style.display = "none";

   const modal = document.createElement('div');
   modal.classList.add('imagePostModal');
   const template = `
   <p class="imagePostModal__close">+</p>
   <img class="imagePostModal__image" src=${imageSource}/>
`;
   modal.innerHTML = template;
   root.appendChild(modal);

   const close = document.querySelector('.imagePostModal__close');
   const imageModal = document.querySelector('.imagePostModal');
   window.scrollTo(0, 0);
   close.addEventListener('click', () => {
      navigation.style.display = "flex";
      root.removeChild(imageModal);
      body.style.overflowY = 'scroll';
   });
}

export {
   createImagePostModal
};