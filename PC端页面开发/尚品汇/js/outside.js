const outside = document.getElementById("outside");
const outsideTop = outside.querySelector(".outside-top");


outsideTop.addEventListener("click",function(){
    outsideTop.classList.toggle("bg-active");
    outside.classList.toggle("outside-active");
},false);