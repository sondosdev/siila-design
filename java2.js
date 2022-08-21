let stars = document.getElementById('stars');
let moon2 = document.getElementById('moon');
let mountains3 = document.getElementById('mountains');
let mountains4 = document.getElementById('mountains');
let river5 = document.getElementById('river');
let boat6 = document.getElementById('boat');
let mountains7 = document.getElementById('mountains');
let sondos = document.querySelector('.sondos');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value + 3 + 'px';
  mountains3.style.top = value + 2 + 'px';
    mountains4.style.top = value + 1.5 + 'px';
    river5.style.top = value + 'px';
    boat6.style.left = value + 3 + 'px';
    boat6.style.top = value + 'px';
    sondos.style.fontsize = value + 'px';
    if ( screenY >= 67){
    sondos.style.fontsize = 67 + 'px';
   }
}

        

    




