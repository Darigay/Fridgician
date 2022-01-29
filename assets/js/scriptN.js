/*var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  // Replace `old list with new one upon reload` with anyone else's GitHub username
  var requestUrl = 'https://themealdb.p.rapidapi.com/randomselection.php';*/


const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://themealdb.p.rapidapi.com/randomselection.php",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "themealdb.p.rapidapi.com",
		"x-rapidapi-key": "74b0896eedmsha54b2117250ace6p1d5405jsn0bb56ec209ae"
	}
};

/*Code Snippets
Example 
Results*/
fetch("https://themealdb.p.rapidapi.com/randomselection.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "themealdb.p.rapidapi.com",
		"x-rapidapi-key": "74b0896eedmsha54b2117250ace6p1d5405jsn0bb56ec209ae"
	}
})
.then(function (response) {
	if (response.ok) {
		return response.json()
	}
})
.then(function (data) {
	//randomMeal (data.meals)
	console.log(data.meals)
});
//var randomMeal = function(data.meals){
	//for (let i = 0; i < choices.length; i++)

//}
//