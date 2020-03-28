function _createModal(options){
  const DEFAULT_WIDTH = '400px'
  const modal = document.createElement('div');
  modal.classList.add('vmodal');
  modal.insertAdjacentHTML('afterbegin', `
   <div class="modal-overlay" data-close='true'>
     <div class="modal-window" style='width: ${options.width||DEFAULT_WIDTH}'>
       <div class="modal-header">
         <span class="modal-title">${options.title|| 'Window'}</span>
         ${(options.closable)? `<span class="modal-close" data-close='true'>&times; </span>` : ''}
       </div>
       <div class="modal-body" data-content>
         ${options.content || ''}
       </div>
     </div>
   </div>
  `);
  const footer = _createModalFooter(options.footerButtons);
  modal.querySelector('[data-content]').after(footer);
  return modal;
};

function noop (){};
function _createModalFooter(buttons){
  const wrap = document.createElement('div');
  if (!buttons.length) {return wrap};
  wrap.classList.add('modal-footer')

  buttons.forEach(button=>{
    const $btn = document.createElement('button');
    $btn.innerText = button.text;
    $btn.classList.add('btn');
    $btn.classList.add(`btn-${button.type || 'secondary'}`);
    $btn.onclick = button.handler || noop;
    wrap.append($btn);
  });

  return wrap
};

$.modal = function(options){
  // console.log(options);
  const ANIMATION_SPEED = 200;
  const $modal = _createModal(options);
  let closing = false;
  let modal = {
    test(){console.log('test');},
    open(){
      console.log('open');
      $modal.addEventListener('click', listenForClose);
      document.body.prepend($modal);
      !closing && $modal.classList.add('open')
    },
    close(){
      console.log('close');
      closing = true;
      $modal.classList.remove('open');
      $modal.classList.add('hide');
      setTimeout(()=>{$modal.classList.remove('hide')},
      ANIMATION_SPEED);
      closing = false;
      // modal.destroy()
      // console.log($modal);
    }
  }
  const listenForClose = e =>{
    if(e.target.dataset.close) modal.close();
  };

  // function fnClose() {
  return Object.assign(modal, {
    destroy(){
      $modal.remove();
      $modal.removeEventListener('click', listenForClose);
      console.log('removed');
      // document.removeEventListener('keydown', APP.SCRIPTS.alt_S);
    },
    setContent(html){
      $modal.querySelector('[data-content]').innerHTML = html;
    }
  })
}
