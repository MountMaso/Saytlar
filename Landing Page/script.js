let menu=document.querySelector('.menu');
menu.addEventListener('click', beginner);
function beginner(e){
    e.preventSefult();
    menu.classList.contains('menu');
    menu.classList.remove('menu');
    menu.classList.add('menues')
    console.log("OK")
}




let countdown=document.getElementById('countdown');
        let counTiDown=function(){
            // console.log(typeof(countdown.textContent));
            let currenTime=Number(countdown.textContent);
            if(currenTime>0){
            countdown.textContent=currenTime+1;
            }
            else{
                clearInterval(timer);
            }
            // console.log(countdown.textContent);
        }
        setInterval(counTiDown, 10);

let but=document.querySelector('.but');
but.addEventListener('click', ()=>{
    alert('Hammasi saqlanishini hohlaysizmi?');
    console.log(alert);
})



let rem=document.querySelector('.rem')
let clon2=document.querySelector('.clon2')
let clon=document.querySelector('.clon');

clon.addEventListener('click', addFunction);

function addFunction(){
    console.log('OK');
    clon.classList.contains('rem');
    clon.classList.toggle('clon');
    clon.classList.add('clone');
    clon2.classList.remove('clones2');
    clon2.classList.add('clon2');
}
clon2.addEventListener('click', ()=>{
    console.log('false');
    clon2.classList.contains('rem');
    clon2.classList.toggle('clon2');
    clon2.classList.add('clones2');
    clon.classList.remove('clone');
    clon.classList.add('clon');
})







let ron=document.querySelector('.ron')
let scr2=document.querySelector('.scr2')
let scr=document.querySelector('.scr');

scr.addEventListener('click', runFunction);

function runFunction(){
    console.log('OK');
    scr.classList.contains('ron');
    scr.classList.toggle('scr');
    scr.classList.add('scre');
    scr2.classList.remove('scres2');
    scr2.classList.add('scr2');
}
scr2.addEventListener('click', ()=>{
    console.log('false');
    scr2.classList.contains('ron');
    scr2.classList.toggle('scr2');
    scr2.classList.add('scres2');
    scr.classList.remove('scre');
    scr.classList.add('scr');
})




let design=document.querySelector('.design')
let web2=document.querySelector('.web2')
let web=document.querySelector('.web');

web.addEventListener('click', designFunction);

function designFunction(){
    console.log('OK');
    web.classList.contains('design');
    web.classList.toggle('web');
    web.classList.add('webe');
    web2.classList.remove('webes2');
    web2.classList.add('web2');
}
web2.addEventListener('click', ()=>{
    console.log('false');
    web2.classList.contains('design');
    web2.classList.toggle('web2');
    web2.classList.add('webes2');
    web.classList.remove('webe');
    web.classList.add('web');
})




