let rock = document.querySelector(".set1");
let paper = document.querySelector(".set2");
let scissor = document.querySelector(".set3");
let display = document.querySelector(".you");
let clickableImg = document.querySelectorAll(".set");
let player2 = document.querySelector("p");
let score = 0;
let score2 = 0;
let imageId;
clickableImg.forEach((image) => {
	image.addEventListener("click", handleImageClick);
});
function handleImageClick(event) {
	const clickedImage = event.target;
	imageId = clickedImage.getAttribute("id");
	console.log(clickedImage);
	stonePaperScissor();
}

function stonePaperScissor() {
	let result = Math.floor(Math.random() * 3) + 1;
	if (score === 5 || score2 === 5) {
		if (score === 5) {
			document.querySelector(".gameover").style.display = "grid";
		} else {
			document.querySelector(".gameover").style.backgroundColor = "red";
			document.querySelector(".gameover").innerHTML =
				"better luck next time 😥";
			document.querySelector(".gameover").style.display = "grid";
		}
	} else if (imageId == result && score < 5) {
		score += 1;
		display.innerHTML = "Score:" + score;
	} else if (imageId !== result && score2 < 5) {
		score2 += 1;
		player2.textContent = "Computer score : " + score2;
		console.log(player2);
	}
	console.log(imageId);
	console.log(result);
}
