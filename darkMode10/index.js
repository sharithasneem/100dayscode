const input1 = document.querySelector(".input");
const MainBody = document.querySelector("body");
let temp = 0;
input1.addEventListener("input", () => {
	if (temp == 0) {
		MainBody.style.backgroundColor = "black";
		temp = 1;
	} else {
		MainBody.style.backgroundColor = "white";
		temp = 0;
	}
});
