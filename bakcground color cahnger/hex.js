const btn = document.querySelector('#btn');
const colorCode = document.querySelector('.color-code');

const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

btn.addEventListener('click',function(){
  let hexColor = '#';
 
  for(let i= 1; i<=6 ; i++){
    let random = Math.floor(Math.random()*hex.length);
    hexColor += hex[random];
  }
 document.body.style.backgroundColor = hexColor;
 colorCode.innerText = hexColor;

});