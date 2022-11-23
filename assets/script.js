var ytUrl =
  "https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyAHEGZXjoIAQqhuRGwRo0koBdvnGGIPul0&q=";

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
    });
}

btn.addEventListener("click", getInput);
