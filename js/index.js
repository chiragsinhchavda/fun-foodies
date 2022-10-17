const innerHeight = window.innerHeight;
const menu = document.getElementById('menu');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const home = document.getElementById('home');
const menuBar = document.getElementById('bar');
const menuDiv = document.getElementById('links');
//window.addEventListener('scroll', changeHeaderColor);


function showMenu() {
	console.log("hey i am showing menu,,,you like to see??")
	if (header.style.backgroundColor == "transparent" &&
	menuDiv.style.display == "none") {
		header.style.backgroundColor = "white";
		menuDiv.style.display = "flex";
	} else {
		header.style.backgroundColor = "transparent";
		menuDiv.style.display = "none";
	}
}

window.onscroll = hideHeader;
function hideHeader() {
	console.log("iamscrolling...")
	let width = window.innerWidth;
	console.log(width)
	if(width <= 768){
		header.style.height = "auto"
		//header.style.backgroundColor = "transparent";
		menuDiv.style.display = "none";
	}else{
		menuDiv.style.display = "flex";	
	}
	}

//}

const labels = document.querySelectorAll(".contactForm label");

labels.forEach(function (label) {
	console.log("logged")
	label.innerHTML = label.innerText
		.split("")
		.map(function (letter, idx) {
			return `<span style='transition-delay:${idx * 80}ms'>${letter}</span>`
		})
		.join("");
});

function orderNow() {
	console.log('show')
	let order = document.getElementById('order');
	order.style.display = "inline"
}

function Close() {
	console.log('close')
	let order = document.getElementById('order');
	order.style.display = "none"
}