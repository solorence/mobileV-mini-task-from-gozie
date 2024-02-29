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



function errorMarker(item) {
  
  if (!item.className.includes('redborder')) {
    item.className += ' redborder';
  }

}


function errorSignal(item){
  
  switch(item.id){
    case 'firstname': errorMarker(item);
      break;
      
    case 'lastname': errorMarker(item);
      break;
      
    case 'email':errorMarker(item);
      break;
    
    case 'number':errorMarker(item);
      break;
    
    case 'message': errorMarker(item); 
      
  }
  
}


function formValidation(event){
  event.preventDefault();
  
  for (let item of inputContainer ) {
     
      if (item.value == "") {
        errorSignal(item);
      }
      else if(item.className.includes('redborder')) {
      item.classList.remove('redborder'); 
      } 
   
    }

} 
