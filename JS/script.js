




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
let userWidth = document.documentElement.clientWidth;
let linkToKite = document.getElementById("linkToKite");
let linkToWake = document.getElementById("linkToWake");
let linkToMainPage = document.getElementById("linkToMainPage");
let mainLogo = document.getElementById("logo");
let linkToSchool = document.getElementById("linkToSchool");

function hideElement(element1,element2,element3,element4){
	if (userWidth < 568) {
		element1.style.display = "none"
	};
	if (userWidth < 532){
		element2.style.display = "none";
		element3.style.display = "none";
		element1.style.display = "none";
		element4.classList.remove("hidden");
		element4.classList.add("active");
	}
};

hideElement(linkToMainPage,linkToKite,linkToWake,linkToSchool);

function showElement(element1,element2,element3){

};

showElement(linkToMainPage,linkToKite,linkToWake);	 	

function moveLogo(logo){
	if (userWidth < 1128){
		logo.classList.remove("center");
		logo.classList.add("left");
		logo.style.marginLeft = "20px"
	};
};
moveLogo(mainLogo);
