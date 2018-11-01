




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
	
let proriderInfoBlock = document.getElementById("smallDevInfo");
let infoBlock = document.getElementById("hiddenInfoForSmallDev");
let details = document.getElementById("detailsOfProrider");
let proRiderImage = document.getElementsByClassName("mainPhotoOfProrider");
let proRiderLinks = document.getElementsByClassName("proridersSocialLinksB");
let procent = 10;
let inputField = document.getElementById("postText");


if (proriderInfoBlock) {

proriderInfoBlock.addEventListener("click",openInfo);
	function openInfo(event) {if (infoBlock.classList.contains("openMenu")){
		infoBlock.style.opacity = "1";
		details.classList.add("rotateItem");
		infoBlock.classList.remove("hidden");
		infoBlock.classList.remove("openMenu");
	}else{
		details.classList.remove("rotateItem");
		infoBlock.classList.add("openMenu")
		infoBlock.classList.add("hidden")
		infoBlock.style.opacity = "0"

	} 

	}

inputField.addEventListener("focus",function(event){
	if (this.value === "Что у вас нового ?"){
		this.value = "";
	}
	

})
inputField.addEventListener("focusout",function(event){
	if (this.value === ""){
	this.value = "Что у вас нового ?"
}
})

}



/*
 let intervalAnimation = setInterval(function linkAnimation() {
		if (procent === -3) {
			cleanInterval();
		}else{
		proRiderLinks.style.paddingLeft = procent + "%"
		procent - 1;
	}

	},100);

	
	
	function cleanInterval() {
		clearInterval(intervalAnimation)
	};

}
*/
