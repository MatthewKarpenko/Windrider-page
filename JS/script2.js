let block = document.querySelector(".block");

block.addEventListener("click",enable);

function enable(event) {
	block = event.currentTarget
	let hidden = document.querySelector(".hidden")
	hidden.classList.toggle("active")
}

