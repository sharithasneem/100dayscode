document.addEventListener("DOMContentLoaded", () => {
	const apiKey = "18a0aaa076f431e0488486d6a38de677";
	const apiId = "b9942cbd";
	const query = "chicken";
	const baseUrl = " https://api.edamam.com/search";
	const apiUrl = `${baseUrl}?q=${query}&app_id=${apiId}&app_key=${apiKey}`;
	const mainImage = document.querySelector("#food1");
	const mainImageside1 = document.querySelector(".sideFood1");
	const mainImageside2 = document.querySelector(".sideFood2");
	const mainImageside3 = document.querySelector(".sideFood3");

	console.log(apiUrl);
	fetch(apiUrl)
		.then((response) => {
			return response.json().then((data) => {
				console.log(data);
				const recipe1 = data.hits[0];
				const recipeside1 = data.hits[1];
				const recipeside2 = data.hits[2];
				const recipeside3 = data.hits[3];
				const recipe1Name = data.hits[0].recipe.label;
				const recipeside1Name = data.hits[1].recipe.label;
				const recipeside2Name = data.hits[2].recipe.label;
				const recipeside3Name = data.hits[3].recipe.label;
				document.querySelector(".btn").innerHTML = recipe1Name;
				document.querySelector(".btn1").innerHTML = recipeside1Name;
				document.querySelector(".btn2").innerHTML = recipeside2Name;
				document.querySelector(".btn3").innerHTML = recipeside3Name;
				mainImage.src = `${data.hits[0].recipe.image}`;
				mainImageside1.src = `${data.hits[1].recipe.image}`;
				mainImageside2.src = `${data.hits[2].recipe.image}`;
				mainImageside3.src = `${data.hits[3].recipe.image}`;

				console.log("hel");
			});
		})
		.catch((error) => console.log("Error", error));
});
