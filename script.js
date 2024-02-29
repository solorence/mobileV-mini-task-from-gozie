let inputContainer = [];

let firstname = document.querySelector('#firstname');
inputContainer.push(firstname);

let lastname = document.querySelector('#lastname');
inputContainer.push(lastname);

let email = document.querySelector('#email');
inputContainer.push(email);

let number = document.querySelector('#number');
inputContainer.push(number);

let message = document.querySelector('#message');
inputContainer.push(message);

let submit = document.querySelector('#submit');
submit.addEventListener('click', formValidation );

let form = document.querySelector ('form');
form.addEventListener('blur', ipt);


function ipt (event){
  event.preventDefault();
}



function fnamemarker(item) {
  
  if (!item.className.includes('redborder')) {
    item.className += ' redborder';
  }

}


function errorSignal(item){
  
  switch(item.id){
    case 'firstname': fnamemarker(item);
      break;
      
    case 'lastname': fnamemarker(item);
      break;
      
    case 'email':fnamemarker(item);
      break;
    
    case 'number':fnamemarker(item);
      break;
    
    case 'message': fnamemarker(item); 
      
  }
  
}


function formValidation(event){
  event.preventDefault();
  
  for (let item of inputContainer ) {
  
    if (item.id == 'message') {
     
      if (item.value == "") {
        errorSignal(item);
        console.log ('textarea no content value =' + item.value);
      }
      else if(item.className.includes('redborder')) {
      console.log ('textarea with content value = '+ item.value);
      item.classList.remove('redborder'); 
      } 
   
    } 
    
    else{ 
        if(item.value == ""){
          errorSignal(item);
        }
        else if (item.className.includes('redborder')) {
          item.classList.remove('redborder');
        }
      } 
  }

} 
