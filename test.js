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



function formValidation(event) {
  event.preventDefault();

  for (let item of inputContainer) {

    if (item.value == "") {
      errorMarker(item);
    }
    else {
      errorMarkRemover(item);
      
    }
  }
}



function errorMarker(item){
  
  switch(item.id){
    case 'firstname': markBorder(item);
      break;
      
    case 'lastname': markBorder(item);
      break;
      
    case 'email':markBorder(item);
      break;
    
    case 'number':markBorder(item);
      break;
    
    case 'message': markBorder(item); 
      
  }
  
}


function markBorder(item) {
  
  if (!item.className.includes('redborder')) {
    item.className += ' redborder';
  }

}

function writeError(item) {

  if (!item.className.includes('redborder')) {
    item.className += ' redborder';
  }

}




function errorMarkRemover(item) {
  if (item.className.includes('redborder')) {
    item.classList.remove('redborder');
  }

}




