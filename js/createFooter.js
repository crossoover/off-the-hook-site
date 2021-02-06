import {
   createFAQ
} from './createFAQ.js';

const createFooter = (root = document.querySelector('.page')) => {
   const footer = document.createElement('footer');
   const body = document.querySelector('body');
   footer.classList.add('footer');
   const template = `
   <div class="footer__section footer__section_1">
   <p class="footer__section_text">Find Us On</p>
   <div class="footer__section_social">
      <a target="_blank" class="footer__section_social_icon footer__section_social_icon_facebook" href="https://www.facebook.com/profile.php?id=100012281733905"><img
            class="footer__section_social_icon_picture" src="./assets/social/facebook_footer.png"
            alt="facebook"></a>
      <a target="_blank" class="footer__section_social_icon footer__section_social_icon_youtube" href="https://www.youtube.com/"><img
            class="footer__section_social_icon_picture" src="./assets/social/youtube_footer.png"
            alt="youtube"></a>
      <a target="_blank" class="footer__section_social_icon footer__section_social_icon_instagram" href="https://www.instagram.com/crossoover/"><img
            class="footer__section_social_icon_picture" src="./assets/social/instagram_footer.png"
            alt="instagram"></a>
   </div>
   <div class="footer__instagram">
      <p class="footer__instagram_text">Follow Us on Instagram:</p>
      <p class="footer__instagram_profile">@oth_fishingforum</p>
   </div>
</div>
<div class="footer__last-row">
   <div class="footer__section footer__section_2">
      <a class="footer__creator-link" href="https://www.linkedin.com/in/%D0%B2%D1%8F%D1%87%D0%B5%D1%81%D0%BB%D0%B0%D0%B2-%D1%81%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D1%8C%D0%BA%D0%B8%D0%B9-1142a61bb/">©2023 by <span
            class="footer__creator-link_crossoover">Viaheslav Savratsky</span>.</a>
      <br>
      Proudly created with HTML/CSS/JS
   </div>
   <div class="footer__section footer__section_3">
      <a class="footer__section_3_link footer__section_rules" href="./faq.html">Site Rules</a>
      <a class="footer__section_3_link footer__section_faq" href="./faq.html">FAQ</a>
   </div>
   <div class="footer__section footer__section_4">
      <p class="footer__section_4_phone">Tel: 123-456-7890</p>
      <p class="footer__section_4_email">info@mysite.com</p>
   </div>
</div>

<div class="mobile__footer">
   <div class="footer__mobile_section footer__mobile_section_1">
      <p class="footer__mobile_section_1_follow">Follow Us on Instagram:</p>
      <p class="footer__mobile_section_1_inst">@oth_fishingforum</p>
   </div>
   <div class="footer__mobile_section footer__mobile_section_2">
   <p class="footer__mobile_section_2_text">Find Us On</p>
      <div class="footer__mobile_section_2_social">
         <a target="_blank" class="footer__mobile_section_2_social_icon footer__mobile_section_2_social_icon_facebook" href="https://www.facebook.com/profile.php?id=100012281733905"><img
               class="footer__section_social_icon_picture" src="./assets/social/facebook_footer.png"
               alt="facebook"></a>
         <a target="_blank" class="footer__mobile_section_2_social_icon footer__mobile_section_2_social_icon_youtube" href="https://www.youtube.com/"><img
               class="footer__section_social_icon_picture" src="./assets/social/youtube_footer.png"
               alt="youtube"></a>
         <a target="_blank" class="footer__mobile_section_2_social_icon footer__mobile_section_2_social_icon_instagram" href="https://www.instagram.com/crossoover/"><img
               class="footer__section_social_icon_picture" src="./assets/social/instagram_footer.png"
               alt="instagram"></a>
      </div>   
   </div>
   <div class="footer__mobile_section footer__mobile_section_3">
       <a class="footer__section_3_link footer__section_rules" href="./faq.html">Site Rules</a>
       <a class="footer__section_3_link footer__section_faq" href="./faq.html">FAQ</a>
   </div>
   <div class="footer__mobile_section footer__mobile_section_4">
      <p class="footer__section_4_phone">Tel: 123-456-7890</p>
      <p class="footer__section_4_email">info@mysite.com</p>
      <a class="footer__creator-link" href="https://www.linkedin.com/in/%D0%B2%D1%8F%D1%87%D0%B5%D1%81%D0%BB%D0%B0%D0%B2-%D1%81%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D1%8C%D0%BA%D0%B8%D0%B9-1142a61bb/">©2023 by <span
      class="footer__creator-link_crossoover">Viacheslav Savratsky</span>.</a>
      <br>
      Proudly created with HTML/CSS/JS
   </div>
</div>
`;
   footer.innerHTML = template;
   root.appendChild(footer);
   body.style.overflowX = 'hidden';
   const rules = document.querySelectorAll('.footer__section_rules');
   const faq = document.querySelectorAll('.footer__section_faq');
   for (let i = 0; i < rules.length; i++) {
      faq[i].addEventListener('click', () => {

         setTimeout(() => {
            createFAQ();
            window.scrollBy(0, 800);
         }, 1000)
      });

      rules[i].addEventListener('click', () => {

         setTimeout(() => {
            createFAQ();
            window.scrollBy(0, 100);
         }, 1000)
      });
   }
}
export {
   createFooter
};