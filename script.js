function Scrolldown() {
     window.scroll(0,1); 
}

window.onload = Scrolldown;


const ham = document.querySelector('.ham'),
      navul = document.querySelector('.navul'),
      backblack = document.querySelector('.backblack'),
      navsocial = document.querySelector('.navsocial');


      ham.addEventListener('click',()=>{
       navul.classList.toggle('navulshow');
       backblack.classList.toggle('backblackshow');
       navsocial.classList.toggle('navsocialshow');
      });