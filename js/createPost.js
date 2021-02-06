import {
   createFooter
} from './createFooter.js';
import {
   searchInput
} from './search.js';
import {
   createBlog
} from './createBlog.js';
import {
   signIn
} from './modals/signIn.js';
import {
   logIn
} from './modals/logIn.js';
import {
   postsData
} from './postsData.js';
import {
   createImagePostModal
} from './modals/imagePostModal.js';
import {
   likeforPost
} from './likeForPost.js';

const createPost = (root = document.querySelector('.page'), imageSource, title, userName, date, readingTime, likeQuantity, viewsQuantity) => {
   root.innerHTML = '';

   const post = document.createElement('div');
   post.classList.add('post-modal');
   const template = `
   <div class="post-wrapper">
   <div class="blog__search">
   <a href="#" class="blog__search_posts">All Posts</a>
      <div>
         <a href="#" class="blog__search_google"><img class="blog__search_google_icon"
            src="./assets/icons/search.png" alt="search"></a>
         <input class="blog__search_input " type="text" placeholder="Search">
         <button class="blog__search_close-button ">+</button>
      </div>
   </div>
         <div class="post">
            <div class="post__user">
               <div class="post__user_image">S</div>
               <div class="post__user_info">
                  <div class="post__user_info_name">
                     <p class="post__user_name">${userName}</p>
                     <p class="post__user_date">· ${date} · ${readingTime}</p>
                  </div>
                  <div class="post__user_share">...</div>
               </div>
            </div>
            <div class="post__content">
               <h2 class="post__content_heading">${title}</h2>
               <div class="post__content_info">
                  Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices
                  your audience to continue reading.
                  <div class="post__content_info_options post__content_info_options_active">
                     <a target="_blank" href="https://www.pinterest.com/" class="post__content_info_options_pinterest">
                        <img class="post__content_info_options_pinterest_image" src="./assets/social/pinterest.png"/>
                        Save  
                     </a>
                     <div class="post__content_info_options_extend">
                        <img class="post__content_info_options_extend_image" src="./assets/icons/extend.png"/>
                     </div>
                  </div>
                  <img class="post__content_info_image" src="${imageSource}" alt="">
                  Welcome to your blog post. Use this space to connect with your
                  readers and potential customers in a way that’s current and interesting. Think of it as an ongoing
                  conversation where you can share updates about business, trends, news, and more.
                  <br>
                  <div class="post__content_info_additional">“Do you have a design in mind for your blog?
                     Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s
                     a stunning layout for everyone.”</div>
                  <br>
                  You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories
                  that also allow visitors to explore more of what interests them.
               </div>
               <h2 class="post__content_heading">Create Relevant Content</h2>
               <div class="post__content_info">
                  Writing a blog is a great way to position yourself as an authority in your field and captivate your
                  readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on
                  relevant keywords and relate back to your website or business. You can also add hashtags
                  (<span class="post__content_info_hashtag">#vacation</span>
                  <span class="post__content_info_hashtag">#dream</span>
                  <span class="post__content_info_hashtag">#summer</span>) throughout your posts to reach more people,
                  and
                  help visitors search for relevant
                  content.
                  <br><br>
                  Blogging gives your site a voice, so let your business’ personality shine through. Choose a great
                  image
                  to feature in your post or add a video for extra engagement. Are you ready to get started? Simply
                  create
                  a new post now.
               </div>
            </div>
            <div class="post__links">
               <img class="post__links_image" src="./assets/social/facebook.svg" alt="facebook">
               <img class="post__links_image" src="./assets/social/twitter.svg" alt="twitter">
               <img class="post__links_image" src="./assets/social/linkedin.svg" alt="linkedin">
               <img class="post__links_image" src="./assets/icons/hyperlink_black.png" alt="hyperlink">
            </div>
            <div class="post__bottom">
               <div class="post__bottom_stats">
                  <p class="post__bottom_stats_views">${viewsQuantity} views</p>
                  <p class="post__bottom_stats_comments">0 comments</p>
               </div>
               <div class="post__bottom_like">
                  <p class="post__bottom_like_number">${likeQuantity}</p>
                  <svg class="post__bottom_like_heart" width="1000" height="20" xmlns="http://www.w3.org/2000/svg"
                     fill-rule="nonzero" clip-rule="evenodd">
                     <path class="post__bottom_like_heart_svg"
                        d="M100 34.976c0 8.434-3.635 16.019-9.423 21.274h0.048l-31.25 31.25c-3.125 3.125-6.25 6.25-9.375 6.25s-6.25-3.125-9.375-6.25l-31.202-31.25c-5.788-5.255-9.423-12.84-9.423-21.274 0-15.865 12.861-28.726 28.726-28.726 8.434 0 16.019 3.635 21.274 9.423 5.255-5.788 12.84-9.423 21.274-9.423 15.865 0 28.726 12.861 28.726 28.726z" />
                  </svg>
               </div>
            </div>
         </div>
      </div>
      <div class="recent-wrapper">
         <div class="recent__top">
            <p class="recent__top_heading">Recent Posts</p>
            <p class="recent__top_all">See All</p>
         </div>
         <div class="recent">
            <div class="recent__post">
               <img class="recent__post_illustration recent__post_illustration_1" src="./assets/pictures/base_1.png" alt="">
               <div class="recent__post_bottom">
                  <h3 class="recent__post_heading recent__post_heading_1">How to create your own bait</h3>
                  <div class="recent__post_stats">
                     <div class="recent__post_stats_section_1">
                        <div class="recent__post_stats_section_1_views">
                           <img class="recent__post_stats_section_1_views_image" src="./assets/icons/views.svg"
                              alt="views">
                           16
                        </div>
                        <div class="recent__post_stats_section_1_comments">
                           <img class="recent__post_stats_section_1_comments_image" src="./assets/icons/comments.svg"
                              alt="comments">
                           0
                        </div>
                     </div>
                     <div class="recent__post_stats_like">
                        <p class="recent__post_stats_like_number">1</p>
                        <svg class="recent__post_stats_like_heart" width="1000" height="20"
                           xmlns="http://www.w3.org/2000/svg" fill-rule="nonzero" clip-rule="evenodd">
                           <path class="recent__post_stats_like_heart_svg"
                              d="M100 34.976c0 8.434-3.635 16.019-9.423 21.274h0.048l-31.25 31.25c-3.125 3.125-6.25 6.25-9.375 6.25s-6.25-3.125-9.375-6.25l-31.202-31.25c-5.788-5.255-9.423-12.84-9.423-21.274 0-15.865 12.861-28.726 28.726-28.726 8.434 0 16.019 3.635 21.274 9.423 5.255-5.788 12.84-9.423 21.274-9.423 15.865 0 28.726 12.861 28.726 28.726z" />
                        </svg>
                     </div>
                  </div>
               </div>
            </div>
            <div class="recent__post">
               <div class="recent__post_bottom">
                  <h3 class="recent__post_heading recent__post_heading_2">5 Fishing tour companies to know about</h3>
                  <p class="recent__post_info recent__post_info_2">Create a blog post subtitle that summarizes your post in a few short,
                     punchy
                     sentences and entices your audience to continue..</p>
                  <div class="recent__post_stats">
                     <div class="recent__post_stats_section_1">
                        <div class="recent__post_stats_section_1_views">
                           <img class="recent__post_stats_section_1_views_image" src="./assets/icons/views.svg"
                              alt="views">
                           78
                        </div>
                        <div class="recent__post_stats_section_1_comments">
                           <img class="recent__post_stats_section_1_comments_image" src="./assets/icons/comments.svg"
                              alt="comments">
                           0
                        </div>
                     </div>

                     <div class="recent__post_stats_like">
                        <p class="recent__post_stats_like_number">23</p>

                        <svg class="recent__post_stats_like_heart" width="1000" height="20"
                           xmlns="http://www.w3.org/2000/svg" fill-rule="nonzero" clip-rule="evenodd">
                           <path class="recent__post_stats_like_heart_svg"
                              d="M100 34.976c0 8.434-3.635 16.019-9.423 21.274h0.048l-31.25 31.25c-3.125 3.125-6.25 6.25-9.375 6.25s-6.25-3.125-9.375-6.25l-31.202-31.25c-5.788-5.255-9.423-12.84-9.423-21.274 0-15.865 12.861-28.726 28.726-28.726 8.434 0 16.019 3.635 21.274 9.423 5.255-5.788 12.84-9.423 21.274-9.423 15.865 0 28.726 12.861 28.726 28.726z" />
                        </svg>
                     </div>
                  </div>
               </div>
            </div>
            <div class="recent__post">
               <img class="recent__post_illustration recent__post_illustration_3" src="./assets/pictures/base_3.png" alt="">
               <div class="recent__post_bottom">
                  <h3 class="recent__post_heading recent__post_heading_3">Halibut season is here</h3>
                  <div class="recent__post_stats">
                     <div class="recent__post_stats_section_1">
                        <div class="recent__post_stats_section_1_views">
                           <img class="recent__post_stats_section_1_views_image" src="./assets/icons/views.svg"
                              alt="views">
                           482
                        </div>
                        <div class="recent__post_stats_section_1_comments">
                           <img class="recent__post_stats_section_1_comments_image" src="./assets/icons/comments.svg"
                              alt="comments">
                           0
                        </div>
                     </div>

                     <div class="recent__post_stats_like">
                        <p class="recent__post_stats_like_number">45</p>

                        <svg class="recent__post_stats_like_heart" width="1000" height="20"
                           xmlns="http://www.w3.org/2000/svg" fill-rule="nonzero" clip-rule="evenodd">
                           <path class="recent__post_stats_like_heart_svg"
                              d="M100 34.976c0 8.434-3.635 16.019-9.423 21.274h0.048l-31.25 31.25c-3.125 3.125-6.25 6.25-9.375 6.25s-6.25-3.125-9.375-6.25l-31.202-31.25c-5.788-5.255-9.423-12.84-9.423-21.274 0-15.865 12.861-28.726 28.726-28.726 8.434 0 16.019 3.635 21.274 9.423 5.255-5.788 12.84-9.423 21.274-9.423 15.865 0 28.726 12.861 28.726 28.726z" />
                        </svg>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <a href="#" class="post-login">
         <p class="post-login__text">
            <span class="post-login__text_login">Log in </span>to leave a comment.
         </p>
      </a>
`;
   post.innerHTML = template;
   root.appendChild(post);
   searchInput();
   createFooter();

   const allPosts1 = document.querySelector('.blog__search_posts');
   const allPosts2 = document.querySelector('.recent__top_all');
   const login_btn = document.querySelector('.post-login');
   allPosts1.addEventListener('click', () => {
      createBlog();
   });
   allPosts2.addEventListener('click', () => {
      createBlog();
   });
   login_btn.addEventListener('click', () => {
      signIn();
      logIn();
   });
   setTimeout(() => {
      window.scrollTo(top);
   }, 500);


   document.querySelector('.recent__post_illustration_1').addEventListener('click', () => {
      createPost(root, postsData[0].imageSource, postsData[0].title, postsData[0].userName, postsData[0].date, postsData[0].readingTime,
         postsData[0].likeQuantity, postsData[0].viewsQuantity);
   });
   document.querySelector('.recent__post_info_2').addEventListener('click', () => {
      createPost(root, postsData[1].imageSource, postsData[1].title, postsData[1].userName, postsData[1].date, postsData[1].readingTime,
         postsData[1].likeQuantity, postsData[1].viewsQuantity);
   });
   document.querySelector('.recent__post_illustration_3').addEventListener('click', () => {
      createPost(root, postsData[2].imageSource, postsData[2].title, postsData[2].userName, postsData[2].date, postsData[2].readingTime,
         postsData[2].likeQuantity, postsData[2].viewsQuantity);
   });
   document.querySelector('.recent__post_heading_1').addEventListener('click', () => {
      createPost(root, postsData[0].imageSource, postsData[0].title, postsData[0].userName, postsData[0].date, postsData[0].readingTime,
         postsData[0].likeQuantity, postsData[0].viewsQuantity);
   });
   document.querySelector('.recent__post_heading_2').addEventListener('click', () => {
      createPost(root, postsData[1].imageSource, postsData[1].title, postsData[1].userName, postsData[1].date, postsData[1].readingTime,
         postsData[1].likeQuantity, postsData[1].viewsQuantity);
   });
   document.querySelector('.recent__post_heading_3').addEventListener('click', () => {
      createPost(root, postsData[2].imageSource, postsData[2].title, postsData[2].userName, postsData[2].date, postsData[2].readingTime,
         postsData[2].likeQuantity, postsData[2].viewsQuantity);
   });

   const body = document.querySelector('body');
   const image = document.querySelector('.post__content_info_image');
   const image_controllers = document.querySelector('.post__content_info_options');
   const extend = document.querySelector('.post__content_info_options_extend');

   image.addEventListener('mouseover', () => {
      image_controllers.classList.remove('post__content_info_options_active')
   });
   image.addEventListener('mouseout', () => {
      image_controllers.classList.add('post__content_info_options_active');
   });

   image.addEventListener('click', () => {
      createImagePostModal(document.querySelector('.page'), imageSource);
      body.style.overflow = 'hidden';
   });
   extend.addEventListener('click', () => {
      createImagePostModal(document.querySelector('.page'), imageSource);
      body.style.overflow = 'hidden';
   });
   likeforPost();
}
export {
   createPost
};