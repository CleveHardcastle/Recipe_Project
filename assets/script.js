var ytUrl =
  "https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyAHEGZXjoIAQqhuRGwRo0koBdvnGGIPul0&q=";



var foodName = document.querySelector(".input");
var btn = document.querySelector(".button");
var player = document.getElementById("player");

var recipeText = document.getElementById("embed-containers");

player.style.display = "none";
recipeText.style.display = "none";

function getInput(event) {
  event.preventDefault();
  userInput = foodName.value.replace(/\s/g, "+");
  ytSearch = ytUrl + userInput + "recipe";
  setUrl();
}

function setUrl() {
  fetch(ytSearch)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      player.style.display = "flex";
      recipeText.style.display = "flex";

      videoId = data.items[0].id.videoId;
      ytEndUrl = "https://www.youtube.com/embed/" + videoId;
      console.log(ytEndUrl);
      document.getElementById("player").setAttribute("src", ytEndUrl);
    });
}

btn.addEventListener("click", getInput);

// meow
