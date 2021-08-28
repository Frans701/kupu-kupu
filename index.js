document.querySelector('.information').addEventListener('click', function(){
    document.querySelector('.display-information').style.display = 'flex';
}) ;

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.display-information').style.display = 'none';
}) ;