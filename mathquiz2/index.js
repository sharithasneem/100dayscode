let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let result = document.querySelector(".result");

console.log(document.querySelector(".stopwatch").textContent);

document.querySelector(".btn").addEventListener("click", function () {
	var userInputValue1 = parseInt(document.querySelector(".input1").value, 10);
	var userInputValue2 = parseInt(document.querySelector(".input2").value, 10);

	if (!isNaN(userInputValue1) && !isNaN(userInputValue2)) {
		var sum = userInputValue1 + userInputValue2;
		num1.innerHTML = userInputValue1;
		num2.innerHTML = userInputValue2;
		result.innerHTML = sum;
		console.log("Sum:", sum);
	} else {
		console.log("Invalid input. Please enter valid numbers.");
	}
});
