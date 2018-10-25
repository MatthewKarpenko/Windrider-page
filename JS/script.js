




/* Ответы на вопросы */
let header = document.querySelector(".collapsible-header");
let main = document.querySelector(".collapsible");

if ( main ) {
	
	main.childNodes.forEach(function(li){
		li.addEventListener('click', showAnswer);
	});

};

function showAnswer(event) {
	console.log(event);
	let li = event.currentTarget;
	let currentAnswer = li.querySelector(".answers");
	let answer = document.querySelector(".answers:not(.hidden)");
	let activeLi = document.querySelector(".collapsible li.active");


	if ( answer ) answer.classList.toggle("hidden");

	if ( activeLi ) activeLi.classList.toggle("active");

	li.classList.toggle("active");
	currentAnswer.classList.toggle("hidden");
};


/*Main menu*/
setTimeout(function(){

let menuImage = document.getElementById("menuImage");
let menu = document.getElementById("mobileMenu");
let menuElement = document.getElementsByClassName("mobileMenuElement");

menuImage.addEventListener("click",moveMenu);
	function moveMenu(event) {if (menu.classList.contains("openMenu")){
		menu.style.right = "469px";
		menu.style.opacity = "0";
		menu.classList.remove("openMenu");
	}else{
		menu.classList.add("openMenu")
		menu.style.right = "0px"
		menu.style.opacity = "0.9"
	} 

	}
}, 500);