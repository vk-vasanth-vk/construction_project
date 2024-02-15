document.addEventListener("DOMContentLoaded", function () {

var title = document.getElementById("title");
var srh = document.getElementById("searchBtn");
var inpt = document.getElementById("inputBox");

function show() {
    title.classList.remove("head");
    srh.classList.remove("srh");
    inpt.classList.remove("ip");
    inpt.style.opacity = 0.7;
}

setTimeout(show,7200);

var li = document.querySelector('.list');
var hamMenu = document.getElementById("hambMenu");
hamMenu.addEventListener('click',()=> {
    li.style.visibility = (li.style.visibility === 'visible') ? 'hidden' : 'visible';
});

});