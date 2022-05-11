let itemsValue= document.querySelector('#num-items');
let itemsContainer= document.querySelector('.item-container')


itemsValue.addEventListener('keypress', function (event) {
  if (event.keyCode === 13 || e.which === 13) {
      
      itemsContainer.innerHTML='';
      let numofItems= parseInt(event.target.value)
      if(numofItems>0){
        let flg= 1;
        
  
        for(let i=0; i < numofItems; i++) { 
          let itm= document.createElement('div');
          itm.classList.add('item');
          itm.innerHTML= `<div class="round-number">${flg}</div></div>`
          itemsContainer.appendChild(itm)
          flg= flg+1;
        }
      }
      event.preventDefault();
  }
  
});