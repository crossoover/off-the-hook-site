import {
   createQuestion
} from './question.js';
import {
   createFooter
} from './createFooter.js';
import {
   searchRules
} from './search_rules.js';

const createFAQ = (root = document.querySelector('.page')) => {
   root.innerHTML = ''; /*cleaning DOM!!!!*/ /*cleaning DOM!!!!*/ /*cleaning DOM!!!!*/ /*cleaning DOM!!!!*/ /*cleaning DOM!!!!*/
   const faq = document.createElement('div');
   faq.classList.add('rules');

   const template = `
   <div class="rules__section_1">
         <div class="rules__section_1_illustration"> <img class="rules__section_1_illustration_image"
               src="./assets/pictures/rules.webp" alt="Forest">
         </div>
         <div class="rules__section_1_text">
            <h2 class="rules__section_1_text_heading">
               Site Rules</h2>
            <p class="rules__section_1_text_description">No offensive content</p>
            <p class="rules__section_1_text_description rules__section_1_text_description_middle">-</p>
            <p class="rules__section_1_text_description">No spreading of any copyrighted material</p>
            <p class="rules__section_1_text_description rules__section_1_text_description_middle">-</p>
            <p class="rules__section_1_text_description">No spamming or advertising</p>
            <p class="rules__section_1_text_description rules__section_1_text_description_middle">-</p>
            <p class="rules__section_1_text_description">Admin decisions are final</p>
            <p class="rules__section_1_text_description rules__section_1_text_description_middle">-</p>
            <p class="rules__section_1_text_description">Please be nice</p>
         </div>
      </div>
      <div class="rules__section_2">
         <h2 class="rules__section_2_heading">FAQ</h2>
         <p class="rules__section_2_description">Frequently asked questions</p>
         <div class="rules__section_2_search">
            <div class="rules__section_2_search_google"><img class="rules__section_2_search_google_icon"
                  src="./assets/icons/search.png" alt="search"></div>
            <input class="rules__section_2_search_input " type="text" placeholder="Looking for something?">
            <button class="rules__section_2_search_close-button ">+</button>
         </div>
      </div>
      `;
   faq.innerHTML = template;
   root.appendChild(faq);
   searchRules();
   createQuestion(root = document.querySelector('.rules__section_2'), 'How do I add a new question?', 'To add a new question go to app settings and press "Manage Questions" button.');
   createQuestion(root = document.querySelector('.rules__section_2'), 'Can I insert pictures in my FAQ?', 'Yes! To add a picture follow these simple steps: <br>1.Enter App Settings <br>2.Click the Manage Questions button  <br>3.Click on the question you would like to attach a picture to  <br>4.When editing your answer, click on the picture icon and then add an image from your library');
   createQuestion(root = document.querySelector('.rules__section_2'), 'Can I insert a video in my FAQ?', 'Yes! Users can add video from YouTube or Vimeo with ease:  <br>1. Enter App Settings  <br>2. Click the "Manage Questions" button  <br>3. Click on the question you would like to attach a video to  <br>4. When editing your answer, click on the video icon and then paste the YouTube or Vimeo video URL  <br>5. Thats it!A thumbnail of your video will appear in answer text box ');
   createQuestion(root = document.querySelector('.rules__section_2'), 'How do I edit or remove the "FAQ" title?', 'The FAQ title can be adjusted in the settings tab of the App Settings. You can also remove the title by unchecking its checkbox in the settings tab.');
   createFooter();
}

export {
   createFAQ
};