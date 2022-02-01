const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");


const detailModelEl = document.getElementById("detail-model");
const recipeCloseBtn = document.getElementById("recipe-close-btn");
const mealDetailsContent = document.getElementById("meal-details-content");

const recipeTitleEl = document.getElementById("recipe-title");
const recipeSourceEl = document.getElementById("recipe-source");
const recipeInstructionsEl = document.getElementById("recipe-instructions");
const recipeImgEl = document.getElementById("recipe-meal-img");






// Event listener
searchBtn.addEventListener('click', getMealList);

//function getMealList - to get matching recipes with ingredients
function getMealList() {
  let searchInputText = document.getElementById("input").value.trim();
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

      for (var i = 0; i < data.hits.length; i++) {

        const divEl = document.createElement("div");
        divEl.style.border = "2px solid red";
        divEl.style.padding = "20px";

        // mealList[i].innerHTML="";
        const headEl = document.createElement("p");
        headEl.innerHTML = data.hits[i].recipe.label;
        divEl.append(headEl);

        const recipeEl = document.createElement("a");
        recipeEl.innerHTML = data.hits[i].recipe.url;
        divEl.append(recipeEl);

        recipeEl.addEventListener("click", function () {

          console.log("i am sure this button works");
          console.log(i);

          detailModelEl.classList.remove("is-hidden");


          recipeTitleEl.textContent = data.hits[i].recipe.label;

          recipeSourceEl.textContent = data.hits[i].recipe.source;
          recipeInstructionsEl.textContent = data.hits[i].recipe.uri;
          //recipeImgEl.textContent =  data.hits[].recipe.image;


        }

        )


        var imgEl = document.createElement("img");
        imgEl.setAttribute("src", data.hits[i].recipe.image)
        divEl.append(imgEl);

        mealList.appendChild(divEl);





      }
    })







  /*    .catch(err => {
       console.error(err);
     });       */

}

       //  mealList.innerHTML = html;



