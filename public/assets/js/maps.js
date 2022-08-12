document.getElementById("mapsNavbarIten").style.fill = "#e31b46";

let inputValFromHomePage;
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  inputValFromHomePage = document.getElementById("searchInputOfView").value;

  // console.log(inputValFromHomePage);
  localStorage.setItem("searchValue", inputValFromHomePage);
  document.getElementById("searchInputOfView").value =
    localStorage.getItem("searchValue");
  dataShow(inputValFromHomePage);
});

// https://maps.google.com/maps?q=${cityName}&t=&z=13&ie=UTF8&iwloc=&output=embed

dataShow(localStorage.getItem("searchValue"));

function dataShow(val) {
  document.getElementById(
    "showMapSection"
  ).innerHTML = `<iframe src="https://maps.google.com/maps?q=${val}&t=&z=13&ie=UTF8&iwloc=&output=embed" ></iframe>`;
}
