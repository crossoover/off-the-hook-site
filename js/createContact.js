import {
   createFooter
} from './createFooter.js';

const createContact = (root = document.querySelector('.page')) => {
   root.innerHTML = '';
   const contactPage = document.createElement('div');
   contactPage.classList.add('contact');
   const template = `
      <div class="contact__info-block">
         <h2 class="contact__info-block_heading">Stay in Touch</h2>
         <p class="contact__info-block_description">I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a
            great place for you to tell a story and let your users know a little more about you.</p>
      </div>
      <img class="contact__illustration" src="./assets/pictures/contact_1.png" alt="Illustration">

      <form class="contact__form">
         <input class="contact__form_input" type="text" placeholder="Name">
         <input class="contact__form_input" type="email" placeholder="Email">
         <input class="contact__form_input" type="tel" placeholder="Phone">
         <textarea class="contact__form_input contact__form_input_textarea" type="textarea"
            placeholder="Type your message here..."></textarea>
         <button class="contact__form_button" type="submit">Submit</button>
      </form>

      <p class="contact__text">I'm a paragraph. Click here to add your own text and edit me. It’s
      easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a
      great place for you to tell a story and let your users know a little more about you.</p>
`;
   contactPage.innerHTML = template;
   root.appendChild(contactPage);

   createFooter();

   setTimeout(() => {
      window.scrollTo(top);
   }, 500);


}
export {
   createContact
};