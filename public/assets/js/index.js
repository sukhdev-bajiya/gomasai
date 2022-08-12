let inputValFromHomePage;
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  inputValFromHomePage = document.getElementById("searchAnythingForm").value;

  // console.log(inputValFromHomePage);
  localStorage.setItem("searchValue", inputValFromHomePage);
  document.getElementById("searchAnythingForm").value = "";
  window.open("./view.html", "_Self");
});

// fetch("https://jsonservermasai.herokuapp.com/brands", {
//   method: "POST",
//   body: JSON.stringify({
//   data:"myData"
// }),
//   headers: { "Content-Type": "application/json" },
// });
