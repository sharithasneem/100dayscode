const apiKey = "ELBq58grEf6Svmttp0piTPFAiwatdQUMIwJ08rxdvU8";
page = 1;
inputData = "cat";

const apiUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`;
console.log(apiUrl);
