const btnLeft = document.querySelector(".Left");
const btnRight = document.querySelector(".Right");
const precentage = document.querySelector(".precentage");
const FrontBar = document.querySelector(".FrontProgressBar");
const icon = document.querySelector(".icon2");
const icon2 = document.querySelector(".icon3");
const icon3 = document.querySelector(".icon4");
const icon4 = document.querySelector(".icon5");

let current;
console.log(btnLeft);
btnLeft.addEventListener("click", function () {
	BackwardBar();
	if (current <= 100 && current > 0) {
		current -= 25;
	}
	precentage.innerHTML = `${current}%`;
});
btnRight.addEventListener("click", function () {
	current = precentage.innerHTML;
	current = parseInt(current.slice(0, -1));
	current < 100 ? (current += 25) : (current = 100);
	precentage.innerHTML = `${current}%`;
	ForwardBar();
});

function ForwardBar() {
	if (current == 25) {
		FrontBar.style.width = "20%";
		FrontBar.style.right = "120px";
		icon.style.borderColor = "rgb(67, 78, 143)";
	} else if (current == 50) {
		FrontBar.style.width = "40%";
		FrontBar.style.right = "100px";
		icon2.style.borderColor = "rgb(67, 78, 143)";
	} else if (current == 75) {
		FrontBar.style.width = "60%";
		FrontBar.style.right = "50px";
		icon3.style.borderColor = "rgb(67, 78, 143)";
	} else if (current == 100) {
		FrontBar.style.width = "80%";
		FrontBar.style.right = "0px";
		icon4.style.borderColor = "rgb(67, 78, 143)";
	}
}
function BackwardBar() {
	console.log(current);

	if (current == 100) {
		FrontBar.style.width = "60%";
		FrontBar.style.right = "50px";
		icon4.style.borderColor = "rgb(185, 186, 189)";
	} else if (current == 75) {
		FrontBar.style.width = "40%";
		FrontBar.style.right = "100px";
		icon3.style.borderColor = "rgb(185, 186, 189)";
	} else if (current == 50) {
		FrontBar.style.width = "20%";
		FrontBar.style.right = "120px";
		icon2.style.borderColor = "rgb(185, 186, 189)";
	} else if (current == 25) {
		FrontBar.style.width = "0%";
		FrontBar.style.right = "200px";
		icon.style.borderColor = "rgb(185, 186, 189)";
	}
}
