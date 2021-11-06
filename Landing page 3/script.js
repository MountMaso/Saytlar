let one1=document.getElementById('one1');
let one2=document.getElementById('one2');
let one3=document.getElementById('one3');

one1.addEventListener('click', ()=>{
    console.log('SCCES');
    one1.style.backgroundColor="red";
});

one2.addEventListener('click', onefunction);

function onefunction(e){
    console.log('click');
    one2.style.backgroundColor='red';
}

one3.addEventListener('click', one3function);

function one3function(e){
    console.log('click');
    one3.style.backgroundColor='red';
}