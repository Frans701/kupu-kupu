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