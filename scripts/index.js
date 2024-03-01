let home = document.querySelector('#home');

let about = document.querySelector('#about');

let contactus = document.querySelector('#contact');

let homeLink ='../index.html';

let aboutLink ='../about.html';

let contactLink ='../find.html';


home.addEventListener('click', toHome);

about.addEventListener('click', toAbout);

contactus.addEventListener('click', toContactus);


function toHome () {
  location.href = homeLink;
}

function toAbout() {
  location.href = aboutLink;
}

function toContactus() {
  location.href = contactLink;
}


function homeLoad() {
  console.log ('homeload class added')
  home.classList.add('homeload');
}

window.addEventListener("DOMContentLoaded", homeLoad);