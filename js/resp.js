burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');

burger.addEventListener('click',()=>{
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

navlist.addEventListener('click',()=>{
  navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

var loader = document.getElementById("preloader");

window.addEventListener("load", setTimeout(function(){
  
  loader.style.display="none";         
},5000) )


