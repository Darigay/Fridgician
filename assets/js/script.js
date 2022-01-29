const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");
const mealDetailsContent = document.getElementById(".meal-details-content");
const recipeCloseBtn = document.getElementById("recipe-close-btn");

// Event listener
searchBtn.addEventListener('click', getMealList);

//function getMealList - to get matching recipes with ingredients
function getMealList(){
    let searchInputText = document.getElementById("input").value.trim();
    console.log("Me");
   
}
 
 