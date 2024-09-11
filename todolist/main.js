const input = document.querySelector('#todoInput');
const addBtn = document.querySelector('#addBtn');
const ul = document.querySelector('#todoList');



// add the items to list
addBtn.addEventListener('click',function(){
    let userInput = input.value ;
    console.log(userInput);


    if (userInput){
        const li = document.createElement('li');
        ul.append(li);
        li.innerHTML = userInput;


        const span = document.createElement('span');
        span.innerHTML = '\u00d7';//cross mark
        li.append(span);
    }
    input.value ='';
    
});
 


// removing the element or marking it checked;
ul.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        if(e.target.style.textDecoration === 'line-through'){
            e.target.style.textDecoration = '';
        }
        else{
         e.target.style.textDecoration = 'line-through';
         }
        }
    else  if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
   
});


