const searchInput = () => {
   const input = document.querySelector('.blog__search_input');
   const close = document.querySelector('.blog__search_close-button');
   const search = document.querySelector('.blog__search_google_icon');

   close.addEventListener('click', () => {
      input.classList.add('blog__search_input_closed');
      close.classList.add('blog__search_close-button_closed')
      search.classList.add('blog__search_google_icon_closed')
   });

   search.addEventListener('click', () => {
      input.classList.remove('blog__search_input_closed');
      close.classList.remove('blog__search_close-button_closed')
      search.classList.remove('blog__search_google_icon_closed')
   });
};
export {
   searchInput
};