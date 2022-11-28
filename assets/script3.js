const checkbox = document.querySelector("checkbox");
const html = document.querySelector("html");

const toggleDarkMode = function () {
  checkbox.check
  ? html.classList.add("dark")
  : html.classList.remove("dark");
  console.log("hello")
}

//calling the function directly

   toggleDarkMode();
  checkbox.addEventListener("click",toggleDarkMode);