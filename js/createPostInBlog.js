import {
   createPost
} from './createPost.js';
import {
   postsData
} from './postsData.js';

const createPostInBlog = (imageSource, title, description, userName, role, date, readingTime, likeQuantity, viewsQuantity) => {
   const root_blog = document.querySelector('.blog__post_wrapper');
   const post = document.createElement('div');
   post.classList.add('blog__post_wrapper_post');
   const template = `
  <img class="post__image" src="${imageSource}" alt="Illustration">
   <div class="post__content">
      <div class="post__content_user">
         <div class="post__content_user_illustration">
            S
         </div>
         <div class="post__content_user_info">
            <a href="#" class="post__content_user_info_name" >
               ${userName}

               <div class="prompt prompt__active">${role}
                  <div class="prompt__triangle"></div>
               </div>
               <img class="post__content_user_info_name_crown" src="./assets/icons/crown.png" alt="status">
            </a>

            <p class="post__content_user_info_date">
            ${date} <span class="post__content_user_info_date_pointer">·</span>${readingTime}
            </p>
            <p class="post__content_user_info_share">...</p>
               <a href="#" class="post__content_user_info_block post__content_user_info_block_active">
                  <img class="post__content_user_info_block_image" src="./assets/icons/share.png"/>
                  <p class="post__content_user_info_block_text">Share Post</p>
               </a>
         </div>
      </div>
      <div class="post__content_text">
         <h2 class="post__content_text_heading">${title}</h2>
         <p class="post__content_text_description">${description}</p>
      </div>
      <div class="post__content_bottom">
         <div class="post__content_bottom_stats">
            <p class="post__content_bottom_stats_views">${viewsQuantity} views</p>
            <p class="post__content_bottom_stats_comments">0 comments</p>
         </div>
         <div class="post__content_bottom_likes">
            <p class="post__content_bottom_likes_number">${likeQuantity}</p>
            <svg class="post__content_bottom_likes_heart" width="1000" height="20"
               xmlns="http://www.w3.org/2000/svg" fill-rule="nonzero" clip-rule="evenodd">
               <path class="post__content_bottom_likes_heart_svg"
                  d="M100 34.976c0 8.434-3.635 16.019-9.423 21.274h0.048l-31.25 31.25c-3.125 3.125-6.25 6.25-9.375 6.25s-6.25-3.125-9.375-6.25l-31.202-31.25c-5.788-5.255-9.423-12.84-9.423-21.274 0-15.865 12.861-28.726 28.726-28.726 8.434 0 16.019 3.635 21.274 9.423 5.255-5.788 12.84-9.423 21.274-9.423 15.865 0 28.726 12.861 28.726 28.726z" />
            </svg>
         </div>
      </div>
   </div>
`;
   post.innerHTML = template;
   root_blog.appendChild(post);

   const root = document.querySelector('.page');
   const imageArray = document.querySelectorAll('.post__image');
   const infoArray = document.querySelectorAll('.post__content_text');

   for (let i = 0; i < imageArray.length; i++) {
      imageArray[i].addEventListener('click', () => {
         createPost(root, postsData[i].imageSource, postsData[i].title, postsData[i].userName, postsData[i].date, postsData[i].readingTime,
            postsData[i].likeQuantity, postsData[i].viewsQuantity);
      });
      infoArray[i].addEventListener('click', () => {
         createPost(root, postsData[i].imageSource, postsData[i].title, postsData[i].userName, postsData[i].date, postsData[i].readingTime,
            postsData[i].likeQuantity, postsData[i].viewsQuantity);
      });
   }
}
export {
   createPostInBlog
};