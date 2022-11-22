url =
  "https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyAHEGZXjoIAQqhuRGwRo0koBdvnGGIPul0&q=surfing";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
