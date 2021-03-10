var header = document.querySelector('header');
var checkBox = document.getElementsByClassName('nb-toggle')[0];
window.addEventListener('scroll', function(){
    if(!checkBox.checked)
    header.classList.toggle('scrolled', window.scrollY > 400);
});

checkBox.addEventListener('click', function(){
    
    if(window.scrollY < 400)
    header.classList.toggle('scrolled');
});

window.addEventListener('scroll', reveal)
function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for( var i=0; i < reveals.length; i++)
    {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().y;
        if(revealTop < windowHeight - 90)
        reveals[i].classList.add('revealed');
        else
        reveals[i].classList.remove('revealed');
    }
}

