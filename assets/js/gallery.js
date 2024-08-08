//animate
const show = {
    opacity: [0, 1],
    visibility: 'visible',
  };
  const showRotate = {
    rotate: ['360deg', '-360deg'],
    scale: ['1.5 1.5', '1 1'],
  };
  const hidden = {
    opacity: [1, 0],
    visibility: 'hidden',
  };
  const options = {
    duration: 500,
    easing: 'ease-in',
    fill: 'forwards',
  };
  const options2 = {
    duration: 800,
    easing: 'ease-out',
    fill: 'forwards',
  };
  
  //open
  const openModal = (modalWrap, modal) => {
    modalWrap.animate(show, options);
    //modal.animate(showRotate, options2); // 普通のfadeinでいいなら不要
    document.body.style.overflow = 'hidden';
  };
  //close
  const closeModal = (modalWrap) => {
    modalWrap.animate(hidden, options);
    document.body.style.overflow = 'visible';
  };
  
  window.addEventListener('DOMContentLoaded',() => {
    
    //modal要素を生成
    const modalPopup = document.createElement('div');
    modalPopup.className = 'modal_popup';
    const modalAreaWrap = document.createElement('div');
    modalAreaWrap.className = 'modal_Area_wrap';
    modalPopup.appendChild(modalAreaWrap);
  
    const modalArea = document.createElement('div');
    modalArea.className = 'modal_Area';
    modalAreaWrap.appendChild(modalArea);
    const modalScrollArea = document.createElement('div');
    modalScrollArea.className = 'modal_scroll_area';
    modalArea.appendChild(modalScrollArea);
  
    const modalCaption = document.createElement('p');
    modalCaption.className = 'modal_caption';
    modalScrollArea.appendChild(modalCaption);
    
    //img生成
    const img = document.createElement('img');
    modalScrollArea.prepend(img);
    
    //closeボタン生成
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('modal_close_btn');
    modalArea.appendChild(closeBtn);
    
    //ここまで
    
    // 作成した要素をDOMに追加
    document.querySelector('#container').appendChild(modalPopup);
  
    // 各modal_btnにクリックイベントを追加
    document.querySelectorAll('.modal_btn').forEach(btn => {
      btn.addEventListener('click', () => {
  
        //imgの変更
        //img.src = btn.querySelector('img').src; //どっちでもそんなに変わらない
        img.setAttribute('src', btn.querySelector('img').src);
        //captionの変更（figucaptionから持ってくる）
        const cap = btn.querySelector('.btn_caption').innerHTML;
        modalCaption.innerHTML = cap;
            
        openModal(modalAreaWrap, modalArea);
        closeBtn.addEventListener('click', () => {
          closeModal(modalAreaWrap);
        });
        
        // modalAreaWrap以外の部分をクリックで閉じるイベントリスナーを追加
        modalAreaWrap.addEventListener('click', (e) => {
          if (e.target === modalAreaWrap) {
            closeModal(modalAreaWrap);
          }
        });
        
      });
    });
  });