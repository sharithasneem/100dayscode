const bgImg = document.querySelector(".image");
console.log(window.pageXOffset);
window.addEventListener("scroll", () => {
	updatedImage();
});

function updatedImage() {
	bgImg.style.opacity = 1 - window.pageYOffset / 900;
	bgImg.style.backgroundSize = 100 - window.pageYOffset / 100 + "%";
}
