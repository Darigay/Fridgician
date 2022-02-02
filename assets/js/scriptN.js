const settings = {
	async: true,
	crossDomain: true,
	url: "https://themealdb.p.rapidapi.com/randomselection.php",
	method: "GET",
	headers: {
	  "x-rapidapi-host": "themealdb.p.rapidapi.com",
	  "x-rapidapi-key": "74b0896eedmsha54b2117250ace6p1d5405jsn0bb56ec209ae",
	},
  };
  
  fetch("https://themealdb.p.rapidapi.com/randomselection.php", {
	method: "GET",
	headers: {
	  "x-rapidapi-host": "themealdb.p.rapidapi.com",
	  "x-rapidapi-key": "74b0896eedmsha54b2117250ace6p1d5405jsn0bb56ec209ae",
	},
  })
	.then(function (response) {
	  if (response.ok) {
		return response.json();
	  }
	})
	.then(function (data) {
	  //randomMeal (data.meals)
	  console.log(data.meals);
	  const cardsContainerEl = document.querySelector(".cards-container");
	  console.log(cardsContainerEl);
	  for (var i = 0; i < data.meals.length; i++) {
		  console.log("test");
		var divEl = document.createElement("div");
		  divEl.setAttribute('class',"card-columns is-3")
		//need right tags
		var strMealThumb = document.createElement("img");
		var strMeal = document.createElement("p");
		var strCategory = document.createElement("p");
		var strSource = document.createElement("div");
		var strTags = document.createElement("a");
  
		//Setting the text of the h3 element and p element.
		strMealThumb.textContent = data.meals[i].strMealThumb;
		strMeal.textContent = data.meals[i].strMeal;
		strCategory.textContent = data.meals[i].strCategory;
		strSource.textContent = data.meals[i].strSource;
		strTags.textContent = data.meals[i].strTags;
  
		divEl.append(strMealThumb);
		divEl.append(strMeal);
		divEl.append(strCategory);
		divEl.append(strSource);
		divEl.append(strTags);
  
		cardsContainerEl.append(divEl);
	  }
	});
