window.addEventListener("scroll", function(){
	var header =document.querySelector("header");
		header.classList.toggle("sticky", window.scrollY > 0);
})
 
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const nav2 = document.querySelector(".nav2");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	nav.classList.toggle("active");
})
hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	nav2.classList.toggle("active");
})

