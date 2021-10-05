const papilionidae_new = document.querySelector('.papilionidae-new');
const papilionidae_preview = document.querySelector('.papilionidae-preview');


document.querySelector('.information').addEventListener('click', function(){
    document.querySelector('.display-information').style.display = 'flex';
    document.querySelector('.main-page').style.position = 'fixed';
}) ;

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.display-information').style.display = 'none';
    document.querySelector('.main-page').style.position = 'static';
}) ;

document.querySelector('.howTo').addEventListener('click', function(){
    document.querySelector('.display-howTo').style.display = 'flex';
    document.querySelector('.main-page').style.position = 'fixed';
}) ;

document.querySelector('.close-howTo').addEventListener('click', function(){
    document.querySelector('.display-howTo').style.display = 'none';
    document.querySelector('.main-page').style.position = 'static';
}) ;

document.querySelector('.payment-method').addEventListener('click', function(){
    document.querySelector('.display-payment').style.display = 'flex';
    document.querySelector('.main-page').style.position = 'fixed';
}) ;

document.querySelector('.close-payment').addEventListener('click', function(){
    document.querySelector('.display-payment').style.display = 'none';
    document.querySelector('.main-page').style.position = 'static';
}) ;

papilionidae_preview.style.display = 'none';

papilionidae_new.addEventListener('mouseover', () =>{
    papilionidae_preview.style.display = 'block';
})

document.querySelector('.new').addEventListener('mouseover', function(){
    papilionidae_preview.style.display = 'none';
}) ;



