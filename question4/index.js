var blue = document.querySelector('.blue');
blue.onclick = function () {
    blue.classList.add('active');
    red.classList.remove('active');
    text1.classList.add('visible');
    text1.classList.remove('text');
    text2.classList.remove('visible');
    text2.classList.add('text');
};
var red = document.querySelector('.red');
red.onclick = function () {
    red.classList.add('active');
    blue.classList.remove('active');
    text2.classList.add('visible');
    text2.classList.remove('text');
    text1.classList.remove('visible');
    text1.classList.add('text');
};
var text1 = document.getElementById('text1');

var text2 = document.getElementById('text2');
