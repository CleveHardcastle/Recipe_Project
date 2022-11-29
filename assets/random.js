var randomUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

function getRandom() {
  fetch(randomUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.meals[0].strMeal);
      console.log(data.meals[0].strMealThumb);
      console.log(data.meals[0].strSource);
    });
}

getRandom();
getRandom();
getRandom();
getRandom();
getRandom();
getRandom();
getRandom();
getRandom();
