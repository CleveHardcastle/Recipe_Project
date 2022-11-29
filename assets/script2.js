var display = document.querySelector("#recipe-content");
var foodName = document.querySelector(".input");
var btn = document.querySelector(".button");
var title = document.querySelector("#recipe-title");

fetch(localStorage.getItem("text"))
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    display.innerHTML = "";
    title.textContent = data.hits[0].recipe.label;
    for (i = 0; i < data.hits[0].recipe.ingredients.length; i++) {
      var div = document.createElement("div");
      div.textContent = data.hits[0].recipe.ingredients[i].text;
      display.append(div);
    }
  });

btn.addEventListener("click", function (event) {
  event.preventDefault();
  var url =
    "https://api.edamam.com/api/recipes/v2?type=public&q=" +
    foodName.value +
    "&app_id=bf5fea3c&app_key=%20d9ae7b34bda1546d69db3b5252dc39a2";
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      display.innerHTML = "";
      title.textContent = data.hits[0].recipe.label;
      for (i = 0; i < data.hits[0].recipe.ingredients.length; i++) {
        var div = document.createElement("div");
        div.textContent = data.hits[0].recipe.ingredients[i].text;
        display.append(div);
        localStorage.setItem("text", url);
      }
    });
});
