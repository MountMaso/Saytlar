const icon=document.querySelector('.icon');
const nav=document.querySelector('nav');

icon.addEventListener('click',toogleFunction);

function toogleFunction(){
    icon.classList.toggle('close');
    nav.classList.toggle('show');
}