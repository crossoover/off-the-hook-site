import {
   createPostInBlog
} from './createPostInBlog.js';
import {
   searchInput
} from './search.js';
import {
   createFooter
} from './createFooter.js';
import {
   sharePost
} from './sharePost.js';
import {
   prompt
} from './prompt.js';
import {
   postsData
} from './postsData.js';
import {
   like
} from './like.js';

const createBlog = (root = document.querySelector('.page')) => {
   root.innerHTML = ''; /*cleaning DOM!!!!*/ /*cleaning DOM!!!!*/ /*cleaning DOM!!!!*/ /*cleaning DOM!!!!*/ /*cleaning DOM!!!!*/
   const blog = document.createElement('div');
   blog.classList.add('blog');

   const template = `
   <div class="blog__search">
   <a href="#" class="blog__search_posts">All Posts</a>
      <div>
         <a href="#" class="blog__search_google"><img class="blog__search_google_icon"
            src="./assets/icons/search.png" alt="search"></a>
         <input class="blog__search_input " type="text" placeholder="Search">
         <button class="blog__search_close-button ">+</button>
      </div>
   </div>
   <div class="blog__post_wrapper"></div>
`;
   blog.innerHTML = template;
   root.appendChild(blog);

   searchInput();

   // параметры
   // imageSource, title, description, userName, role, date, readingTime
   createPostInBlog(postsData[0].imageSource, postsData[0].title, postsData[0].description, postsData[0].userName, postsData[0].role, postsData[0].date, postsData[0].readingTime,
      postsData[0].likeQuantity, postsData[0].viewsQuantity);
   createPostInBlog(postsData[1].imageSource, postsData[1].title, postsData[1].description, postsData[1].userName, postsData[1].role, postsData[1].date, postsData[1].readingTime,
      postsData[1].likeQuantity, postsData[1].viewsQuantity);
   createPostInBlog(postsData[2].imageSource, postsData[2].title, postsData[2].description, postsData[2].userName, postsData[2].role, postsData[2].date, postsData[2].readingTime,
      postsData[2].likeQuantity, postsData[2].viewsQuantity);
   createPostInBlog(postsData[3].imageSource, postsData[3].title, postsData[3].description, postsData[3].userName, postsData[3].role, postsData[3].date, postsData[3].readingTime,
      postsData[3].likeQuantity, postsData[3].viewsQuantity);
   createPostInBlog(postsData[4].imageSource, postsData[4].title, postsData[4].description, postsData[4].userName, postsData[4].role, postsData[4].date, postsData[4].readingTime,
      postsData[4].likeQuantity, postsData[4].viewsQuantity);
   createPostInBlog(postsData[5].imageSource, postsData[5].title, postsData[5].description, postsData[5].userName, postsData[5].role, postsData[5].date, postsData[5].readingTime,
      postsData[5].likeQuantity, postsData[5].viewsQuantity);
   createFooter();
   sharePost();
   prompt();
   like();
}

export {
   createBlog
};