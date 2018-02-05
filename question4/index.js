var blue = document.querySelector('.blue');
blue.onclick = function () {
    blue.classList.add('active');
    red.classList.remove('active');
};
var red = document.querySelector('.red');
red.onclick = function () {
    red.classList.add('active');
    blue.classList.remove('active');
};
var text1 = document.querySelector('text1');

var text2 = document.querySelector('text2');
