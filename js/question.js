const createQuestion = (root = document.querySelector('.rules__section_2'), questionText = 'How do I add a new question?', answerText = ' To add a new question go to app settings and press "Manage Questions" button.') => {
   const question = document.createElement('div');
   question.classList.add('rules__section_2_question');
   const template = `
   <h3 class="panel-title">${questionText}</h3>
   <div class="panel-body">
         ${answerText} 
      <img class="panel-body_link" src="./assets/social/twitter.svg"/>
   </div>
   `;
   question.innerHTML = template;
   root.appendChild(question);

   let panelItem = document.querySelectorAll('.panel-title'),
      bodyItem = document.querySelectorAll('.panel-body');
   panelItem.__proto__.forEach = [].__proto__.forEach;

   let activePanel;
   panelItem.forEach(function (item, i, panelItem) {
      item.addEventListener('click', function (e) {
         //show new thingy;
         this.classList.add('panel-active');
         this.nextElementSibling.classList.add('active');
         //hide old thingy
         if (activePanel) {
            activePanel.classList.remove('panel-active');
            activePanel.nextElementSibling.classList.remove('active');
         }
         //update thingy
         activePanel = (activePanel === this) ? 0 : this;
      });
   });
};

export {
   createQuestion
};