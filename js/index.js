const innerHeight = window.innerHeight;
const menu = document.getElementById('menu');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const home = document.getElementById('home');
window.addEventListener('scroll', changeHeaderColor);

function changeHeaderColor() {
	let footerTopPosition = footer.getBoundingClientRect().top;
	let footerBottomPosition = footer.getBoundingClientRect().bottom;
	let menuTopPosition = menu.getBoundingClientRect().top;
	let menuBottomPosition = menu.getBoundingClientRect().bottom;

	if (menuTopPosition <= 10 & menuBottomPosition >= 10 || footerTopPosition <= 10 & footerBottomPosition >= 10) {
		header.style.display = 'block';
		header.style.backgroundColor = "black";
		header.style.color = "white";
		header.style.borderBottomColor = "white";

		let headerAnchorTags = header.getElementsByTagName('a');
		for (var i = 0; i < headerAnchorTags.length; i++) {
			headerAnchorTags[i].style.color = "white";
			headerAnchorTags[i].style.borderBottomColor = "white";
		}
	}
	else {
		header.style.backgroundColor = "white";
		header.style.color = "black";
		header.style.borderBottomColor = "black";

		let headerAnchorTags = header.getElementsByTagName('a');
		for (var i = 0; i < headerAnchorTags.length; i++) {
			headerAnchorTags[i].style.color = "black";
			headerAnchorTags[i].style.borderBottomColor = "black";
		}
	}

}

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