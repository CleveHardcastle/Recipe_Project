var randomUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

// function getRandom() {
//   fetch(randomUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       return data;
//     });
// }

function setRandom1() {
  var img = document.getElementById("img1");
  var link = document.getElementById("link1");
  var name = document.getElementById("name1");
  fetch(randomUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      name.innerHTML = data.meals[0].strMeal;
      img.src = data.meals[0].strMealThumb;
      link.href = data.meals[0].strSource;
    });
}
function setRandom2() {
  var img = document.getElementById("img2");
  var link = document.getElementById("link2");
  var name = document.getElementById("name2");
  fetch(randomUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      name.innerHTML = data.meals[0].strMeal;
      img.src = data.meals[0].strMealThumb;
      link.href = data.meals[0].strSource;
    });
}
function setRandom3() {
  var img = document.getElementById("img3");
  var link = document.getElementById("link3");
  var name = document.getElementById("name3");
  fetch(randomUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      name.innerHTML = data.meals[0].strMeal;
      img.src = data.meals[0].strMealThumb;
      link.href = data.meals[0].strSource;
    });
}
function setRandom4() {
  var img = document.getElementById("img4");
  var link = document.getElementById("link4");
  var name = document.getElementById("name4");
  fetch(randomUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      name.innerHTML = data.meals[0].strMeal;
      img.src = data.meals[0].strMealThumb;
      link.href = data.meals[0].strSource;
    });
}
function setRandom5() {
  var img = document.getElementById("img5");
  var link = document.getElementById("link5");
  var name = document.getElementById("name5");
  fetch(randomUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      name.innerHTML = data.meals[0].strMeal;
      img.src = data.meals[0].strMealThumb;
      link.href = data.meals[0].strSource;
    });
}
function setRandom6() {
  var img = document.getElementById("img6");
  var link = document.getElementById("link6");
  var name = document.getElementById("name6");
  fetch(randomUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      name.innerHTML = data.meals[0].strMeal;
      img.src = data.meals[0].strMealThumb;
      link.href = data.meals[0].strSource;
    });
}
function setRandom7() {
  var img = document.getElementById("img7");
  var link = document.getElementById("link7");
  var name = document.getElementById("name7");
  fetch(randomUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      name.innerHTML = data.meals[0].strMeal;
      img.src = data.meals[0].strMealThumb;
      link.href = data.meals[0].strSource;
    });
}
function setRandom8() {
  var img = document.getElementById("img8");
  var link = document.getElementById("link8");
  var name = document.getElementById("name8");
  fetch(randomUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      name.innerHTML = data.meals[0].strMeal;
      img.src = data.meals[0].strMealThumb;
      link.href = data.meals[0].strSource;
    });
}

setRandom1();
setRandom2();
setRandom3();
setRandom4();
setRandom5();
setRandom6();
setRandom7();
setRandom8();
