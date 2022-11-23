var ytUrl =
  "https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyAHEGZXjoIAQqhuRGwRo0koBdvnGGIPul0&q=";

var randomUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

fetch(randomUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.meals[0].strMeal);
  });

var btn = document.getElementById("btn");
var query = document.getElementById("query");

function getInput(event) {
  event.preventDefault();
  userInput = query.value.replace(/\s/g, "+");
  ytSearch = ytUrl + userInput + "recipe";
  fetch(ytSearch)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      videoId = data.items[0].id.videoId;
      ytEndUrl = "https://www.youtube.com/watch?v=" + videoId;
      console.log(ytEndUrl);
    });
}

btn.addEventListener("click", getInput);
