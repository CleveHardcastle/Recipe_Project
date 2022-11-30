// var ytUrl =
//   "https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyAzn--DVzIXyECqbZJsexiAWQOYzZLf0sA&q=";

var foodName = document.querySelector(".input");
var btn = document.querySelector(".button");
var player = document.getElementById("player");
var recipeText = document.getElementById("embed-containers");

fetch(localStorage.getItem("video"))
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    videoId = data.items[0].id.videoId;
    ytEndUrl = "https://www.youtube.com/embed/" + videoId;
    document.getElementById("player").setAttribute("src", ytEndUrl);
  });

function getInput(event) {
  event.preventDefault();
  userInput = foodName.value.replace(/\s/g, "+");
  ytSearch = ytUrl + userInput + "recipe";
  console.log(ytSearch);
  setUrl();
}

function setUrl() {
  fetch(ytSearch)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      videoId = data.items[0].id.videoId;
      ytEndUrl = "https://www.youtube.com/embed/" + videoId;
      console.log(ytEndUrl);
      document.getElementById("player").setAttribute("src", ytEndUrl);
      localStorage.setItem("video", ytSearch);
    });
}

btn.addEventListener("click", getInput);

// meow
