document.getElementById("newsNavbarIten").style.fill = "#e31b46";
document.getElementById("queryForFilter").value =
  localStorage.getItem("searchValue");
document.getElementById("searchInputOfView").value = "";
let inputValFromHomePage;
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  inputValFromHomePage = document.getElementById("searchInputOfView").value;

  // console.log(inputValFromHomePage);
  localStorage.setItem("searchValue", inputValFromHomePage);
  document.getElementById("searchInputOfView").value =
    localStorage.getItem("searchValue");
  document.getElementById("queryForFilter").value =
    localStorage.getItem("searchValue");
});

showAllTime();

function showAllTime() {
  let val = document.getElementById("queryForFilter").value;
  let from = document.getElementById("fromDateForFilter").value;
  let to = document.getElementById("toDateForFilter").value;
  let url = `/everything?q=${val}&from=${from}&to=${to}&sortBy=popularity&apiKey=aad0e1b4deab4ca4b409f7e74658e3cf`;
  displayData(url);
}

function showAllFiliterData() {
  let val = document.getElementById("countryForFilter").value;
  let from = document.getElementById("categoryForFilter").value;
  let to = document.getElementById("languageForFilter").value;
  let url = `/top-headlines?country=${val}&category=${from}&language=${to}&apiKey=aad0e1b4deab4ca4b409f7e74658e3cf`;
  displayData(url);
}

async function displayData(val) {
  try {
    let key = "aad0e1b4deab4ca4b409f7e74658e3cf";
    let res = await fetch(`https://newsapi.org/v2${val}`);
    let data = await res.json();
    document.getElementById("showSearchNewsData").innerHTML = "";
    data.articles.forEach((element) => {
      let atho;
      if (element.author != null) {
        atho = element.author.slice(0, 30) + "...";
      } else {
        atho = "gomasai";
      }

      let div = document.createElement("div");
      div.addEventListener("click", () => {
        document.getElementById("showNewsOneINOneSection").style.display =
          "block";
        document.getElementById("showNewsOneINOneDiv").innerHTML = `
        <img src="${
          element.urlToImage || "./assets/img/masai.jpg"
        }" alt="urlToImage">
        <div>
            <h1>${element.title}</h1>
            <p>${element.description}</p>

            <h2>${atho}</h2>
            <h3>${element.publishedAt}</h3>
        </div>
        `;
      });
      div.innerHTML = `
      <img src="${
        element.urlToImage || "./assets/img/masai.jpg"
      }" alt="urlToImage">
      <div>
          <h2>${element.title.slice(0, 70)}...</h2>
          <p>${element.publishedAt}</p>
      </div>
      <span>${atho}</span>
      `;

      document.getElementById("showSearchNewsData").append(div);
    });
  } catch (err) {
    console.log(err);
  }
}

function closePlayVideo() {
  document.getElementById("showNewsOneINOneSection").style.display = "none";
}
