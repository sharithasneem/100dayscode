const input1 = document.querySelector(".input");
const MainBody = document.querySelector("body");
let temp = 0;
input1.checked = JSON.parse(localStorage.getItem("mode"));
updated();
function updated() {
	if (input1.checked) {
		MainBody.style.backgroundColor = "black";
	} else {
		MainBody.style.backgroundColor = "white";
	}
}
input1.addEventListener("input", () => {
	updated();
	localStorage.setItem("mode", JSON.stringify(input1.checked));
});
