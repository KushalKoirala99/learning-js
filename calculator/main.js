const display = document.querySelector('#display');
const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#sub');
const divBtn = document.querySelector('#div');
const mulBtn = document.querySelector('#mul');
const equalBtn = document.querySelector('#equal-btn');



//make text display
function appendValue(value){
    display.value += value;
}

//clear btn
function clearDisplay(){
    display.value = "";
}


//add btn
addBtn.addEventListener('click',function(){
  appendValue('+');
});

//sub
subBtn.addEventListener('click',function(){
  appendValue('-');
}); 

//mul
mulBtn.addEventListener('click',function(){
  appendValue('*');
}); 

//div
divBtn.addEventListener('click',function(){
  appendValue('/');
}); 


//equalBtn 
equalBtn.addEventListener('click',function(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error';
    }

});