const btn = document.querySelector('#btn');
const colorCode = document.querySelector('.color-code');



btn.addEventListener('click',function(){
  const random = Math.floor(Math.random()*darkColorsArr.length);
    document.body.style.backgroundColor = darkColorsArr[random];
    colorCode.innerText = darkColorsArr[random];
})




const darkColorsArr = [
    'violet',
    'green',
    "red",
    "blue",
    'rgb(150,22,80)',
    'rgb(33,22,80)',
    'rgb(22,22,80)',
  ];
  