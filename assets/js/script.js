const searchBtn = document.getElementById("searchForm");
const mealList = document.getElementById("meal");

const detailModelEl = document.getElementById("detail-model");
const recipeCloseBtn = document.getElementById("recipe-close-btn");
const mealDetailsContent = document.getElementById("meal-details-content");

const recipeTitleEl = document.getElementById("recipe-title");
const recipeSourceEl = document.getElementById("recipe-source");
const recipeInstructionsEl = document.getElementById("recipe-instructions");
const recipeCuisineEl = document.getElementById("recipe-cuisine");
const recipeMealTypeEl = document.getElementById("recipe-mealtype");
const recipeDishTypeEl = document.getElementById("recipe-dishtype");
const recipeCaloriesEl = document.getElementById("recipe-calories");
const recipeUrlEl = document.getElementById("recipe-url");



const recipeImgEl = document.getElementById("recipe-meal-img");
var recipeimgEl = document.createElement("img");


// Event listener
searchBtn.addEventListener('submit', getMealList);

recipeCloseBtn.addEventListener("click", function () {
  detailModelEl.classList.add("is-hidden");

})


//function getMealList - to get matching recipes with ingredients
function getMealList(event) {
  event.preventDefault();
  let searchInputText = document.getElementById("input").value.trim();

  if (!searchInputText) {
    window.alert('Enter an Ingredient,Try Again!');
  }



  fetch("https://edamam-recipe-search.p.rapidapi.com/search?q=" + searchInputText, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
      "x-rapidapi-key": "788326401dmshab08cd71acc1159p14a13djsncf6094720857"
    }
  })

    .then(response => response.json())

    .then(data => {
      console.log(data);
      mealList.innerHTML = "";

      if (data.hits.length == 0) {
        window.alert("Ingredient Not Found");
        return;
      }


      for (var i = 0; i < data.hits.length; i++) {

        const divEl = document.createElement("div");
        divEl.classList.add("card", "column", "is-3-desktop", "is-4-tablet");
        
        // divEl.className = "meal"+ i ;
        // divEl.style.border = "5px solid black";
        // divEl.style.padding = "20px";
        // divEl.style.backgroundColor = "beige"

        // mealList[i].innerHTML="";

        const imgDiv = document.createElement("div");
        imgDiv.classList.add("card-image", "is-hidden-mobile");

        const imgFigure = document.createElement("figure");
        imgFigure.classList.add("image", "is-1by1");
        var imgEl = document.createElement("img");
        imgEl.setAttribute("src", data.hits[i].recipe.image)

        divEl.append(imgDiv);
        imgDiv.append(imgFigure);
        imgFigure.append(imgEl)

        //Card Content
      var cardContent = document.createElement("div");
      cardContent.setAttribute ("class", "media-left ");
      divEl.appendChild(cardContent);
        
        //Recipe Small Image
        var cardSmallImg = document.createElement("div");
          cardSmallImg.setAttribute ("class", "image is-96x96 is-hidden-tablet");
          cardSmallImg.innerHTML = "<figure class='image is-96x96'><img src="+data.hits[i].recipe.image+" alt='image of "+data.hits[i].recipe.label+"'></figure>";
          cardContent.appendChild(cardSmallImg); 

        const conDiv = document.createElement("div");
        conDiv.classList.add("media-content");
        conDiv.innerHTML = "<h4 class='title is-3'>"+data.hits[i].recipe.label+"</h4>";

        const btnEl = document.createElement("button");
        btnEl.classList.add("button", "content", "is-dark", "is-rounded", "is-block");
        btnEl.textContent = "View Recipe";
        // btnEl.setAttribute("href", "#");
        btnEl.setAttribute("data-id", i);

        //conDiv.textContent = data.hits[i].recipe.label;
        cardContent.append(conDiv);
        cardContent.append(btnEl);


        //  const headEl = document.createElement("p");
        //   headEl.innerHTML = data.hits[i].recipe.label;
        //   divEl.append(headEl);

        //  const recipeEl = document.createElement("a");
        //   recipeEl.innerHTML = data.hits[i].recipe.url;
        //   divEl.append(recipeEl);
        //   recipeEl.setAttribute("data-id", i)

        mealList.appendChild(divEl);


        btnEl.addEventListener("click", function () {

          // console.log("i am sure this button works");
          //  console.log(i);

          detailModelEl.classList.remove("is-hidden");
          var id = btnEl.getAttribute("data-id");

          recipeTitleEl.textContent = "Meal Name: " + data.hits[id].recipe.label;
          recipeSourceEl.textContent = "Source of the Recipe : " + data.hits[id].recipe.source;
          recipeInstructionsEl.textContent = "Ingredients: " + data.hits[id].recipe.ingredientLines;
          recipeCuisineEl.textContent = "Cuisine: " + data.hits[id].recipe.cuisineType;
          recipeMealTypeEl.textContent = "Meal Type : " + data.hits[id].recipe.mealType;
          recipeDishTypeEl.textContent = "Dish Type: " + data.hits[id].recipe.dishType;
          recipeCaloriesEl.textContent = "Calories: " + data.hits[id].recipe.calories;

          recipeimgEl.setAttribute("src", data.hits[id].recipe.image);
          detailModelEl.append(recipeimgEl);

          recipeUrlEl.textContent = "Recipe Link : " + data.hits[id].recipe.url;

          // opens a window to display the complete recipe website

          recipeUrlEl.addEventListener("click", function () {
            window.open(data.hits[id].recipe.url);

          })

        })

      }


      console.log(mealList);
    })


    .catch(err => {
      console.log("catch");

      console.error('Error', err);
      window.alert('Something Went Wrong, Try Again!');

    });

}
recipeCloseBtn.addEventListener("click", function () {
  detailModelEl.classList.add("is-hidden");
  detailModelEl.removeChild(recipeimgEl);


})

