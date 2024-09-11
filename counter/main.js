const text = document.getElementById('text');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const resetBtn = document.getElementById('reset');

addBtn.addEventListener('click',function(){
    text.innerHTML ++;
    text.style.color = 'green';
});
subBtn.addEventListener('click',function(){
    text.innerHTML --;
    text.style.color = 'red';
});
resetBtn.addEventListener('click',function(){
    text.innerHTML = 0;
    text.style.color = 'black';
});
 



