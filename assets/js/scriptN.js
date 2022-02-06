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
	  

	  var cardsContainerEl = document.querySelector("#random-recipes");
	  

	  for (var i = 0; i < data.meals.length; i++) {
		  

		var cardContainer = document.createElement("div");
		  cardContainer.setAttribute('class',"card column is-3-desktop is-4-tablet is")
      cardsContainerEl.append(cardContainer);
      console.log (cardContainer)
    
      //need right tags
      var strMealThumb = data.meals[i].strMealThumb;
      var strMeal = data.meals[i].strMeal;
      var strCategory = data.meals[i].strCategory;
      var strSource = data.meals[i].strSource;
      var strTags = data.meals[i].strTags;
      
      // Card Big Image
      var cardImg = document.createElement("div");
        cardImg.setAttribute ("class", "card-image is-hidden-mobile");
        cardImg.innerHTML = "<figure class='image is-1by1'><img src="+strMealThumb+" alt='image of " + strMeal +"'></figure>";
        cardContainer.appendChild(cardImg);
      console.log(cardImg)

      //Card Content
      var cardContent = document.createElement("div");
        cardContent.setAttribute ("class", "media-left ");
        cardContainer.appendChild(cardContent);
        
      
        //Recipe Small Image
        var cardSmallImg = document.createElement("div");
          cardSmallImg.setAttribute ("class", "image is-96x96 is-hidden-tablet");
          cardSmallImg.innerHTML = "<figure class='image is-96x96'><img src="+strMealThumb+" alt='image of "+strMeal+"'></figure>";
          cardContent.appendChild(cardSmallImg);

        //Recipe Title and Category
        var recipeName = document.createElement("div");
          recipeName.setAttribute ("class", "media-content");
          recipeName.innerHTML = "<h4 class='title is-3'>"+strMeal+"</h4><p class='subtitle is-6'>Catagory: "+strCategory+"</p>";
          cardContent.appendChild(recipeName);
      
      //Tags and Button
      var recipeButton = document.createElement("div");
      recipeButton.setAttribute ("class", "content");
      recipeButton.innerHTML = "Recipe Tags <a>"+strTags+"</a>.<br><button href="+strSource+" class='button is-dark is-rounded'>View Recipe</button>";
      cardContainer.appendChild(recipeButton);
      
    }
	});
  
  
