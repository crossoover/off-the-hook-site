const searchRules = () => {
   const input = document.querySelector('.rules__section_2_search_input');
   const close = document.querySelector('.rules__section_2_search_close-button');
   const search = document.querySelector('.rules__section_2_search_google_icon');
   const text = document.querySelector('.rules__section_2_description');
   text.classList.add('rules__section_2_description_closed');

   close.addEventListener('click', () => {
      text.classList.remove('rules__section_2_description_closed');
      input.classList.add('rules__section_2_search_input_closed');
      close.classList.add('rules__section_2_search_close-button_closed');
      search.classList.add('rules__section_2_search_google_icon_closed');
   });

   search.addEventListener('click', () => {
      text.classList.add('rules__section_2_description_closed');
      input.classList.remove('rules__section_2_search_input_closed');
      close.classList.remove('rules__section_2_search_close-button_closed');
      search.classList.remove('rules__section_2_search_google_icon_closed');
   });
}
export {
   searchRules
};