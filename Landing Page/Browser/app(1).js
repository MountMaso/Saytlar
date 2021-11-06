let kg=document.getElementById('kg');
let kgLabel=document.getElementById('kgLabel');
let tonnaLabel=document.getElementById('tonnaLabel');
let tonna=document.getElementById('tonna');
let swap=document.getElementById('swap');

kg.addEventListener('input',calculate);

function calculate(e){
    let kgInput=e.target.value;
    tonna.value=kgInput/1000;
    if(kg.classList.contains('kg')){
        tonna.value=kgInput/1000;
    }
    else{
        tonna.value=kgInput*1000;
    }
}

swap.addEventListener('click',swapFunction);
function swapFunction(e){
    e.preventDefault();
    const temp=kg.value;
    kg.value=tonna.value;
    tonna.value=temp;
    if(kg.classList.contains('kg')){
        kg.classList.remove('kg');
        kgLabel.textContent='tonna';
        tonnaLabel.textContent='kg';
    }
    else{
        kg.classList.add('kg');
        kgLabel.textContent='kg';
        tonnaLabel.textContent='tonna';
    }
}