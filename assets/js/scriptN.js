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
		var cardCont = document.createElement("div");
		  cardCont.setAttribute('class',"card-columns is-3")
    
      
      //need right tags
      var strMealThumb = data.meals[i].strMealThumb ;
      var strMeal = data.meals[i].strMeal;
      var strCategory = data.meals[i].strCategory;
      var strSource = data.meals[i].strSource;
      
      console.log (strMeal, strMealThumb, strCategory, strSource)

      var cardImg = document.createElement("div");
        cardImg.setAttribute ("class", "card-image");
        cardImg.innerHTML = "<figure class='image is-1by1'><img src="+strMealThumb+" alt='image of " + strMeal +"'></figure>";
        cardImg.appendChild(cardCont);
        console.log (strMealThumb)


    //divEl.innerHTML = "<div class='card-content'><div class='media'><div class='media-content'><p class='title is-3'>" + strMeal + "</p><p class='subtitle is-6'>" + strCategory + "</p></div></div><div class='content'><a>@bulmaio</a>.<a href='#''>#css</a> <a href='#''>#responsive</a><br><time datetime='2016-1-1'>11:09 PM - 1 Jan 2016</time></div></div>";
    
    
		//cardsContainerEl.appendChild(divEl);
  }
	});
