document.querySelector('.information').addEventListener('click', function(){
    document.querySelector('.display-information').style.display = 'flex';
}) ;

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.display-information').style.display = 'none';
}) ;

document.querySelector('.howTo').addEventListener('click', function(){
    document.querySelector('.display-howTo').style.display = 'flex';
}) ;

document.querySelector('.close-howTo').addEventListener('click', function(){
    document.querySelector('.display-howTo').style.display = 'none';
}) ;