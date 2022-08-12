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
  let val = `https://gnews.io/api/v4/top-headlines?&token=169817000b938e4a84d28a8d84a20e79&country=in`;
  displayData(val);
}

function showAllFiliterData() {
  let val = document.getElementById("queryForFilter").value;
  let ext = document.getElementById("ShowErrorMessage");
  if (val == "") {
    ext.innerHTML = "The query is required";
    ext.style.color = "red";
  } else {
    ext.innerHTML = "Query";
    ext.style.color = "black";
    let from = document.getElementById("fromDateForFilter").value;
    let to = document.getElementById("toDateForFilter").value;
    let cou = document.getElementById("countryForFilter").value;
    let cat = document.getElementById("categoryForFilter").value;
    let lan = document.getElementById("languageForFilter").value;
    let url =
      "https://gnews.io/api/v4/search?token=169817000b938e4a84d28a8d84a20e79";
    if (val != "") {
      url += `&q=${val}`;
    }
    if (from != "") {
      url += `&from=${from}`;
    }
    if (to != "") {
      url += `&to=${to}`;
    }
    if (cou != "") {
      url += `&country=${cou}`;
    }
    if (cat != "") {
      url += `&to=${cat}`;
    }
    if (lan != "") {
      url += `&lang=${lan}`;
    }

    displayData(url);
  }
}

async function displayData(val) {
  try {
    let res = await fetch(`${val}`);
    let data = await res.json();
    console.log(data);
    document.getElementById("showSearchNewsData").innerHTML = "";
    data.articles.forEach((element) => {
      let div = document.createElement("div");
      div.addEventListener("click", () => {
        document.getElementById("showNewsOneINOneSection").style.display =
          "block";
        document.getElementById("showNewsOneINOneDiv").innerHTML = `
          <img src="${
            element.image || "./assets/img/masai.jpg"
          }" alt="urlToImage">
          <div>
              <h1>${element.title}</h1>
              <p>${element.content}</p>
              <h3>${element.publishedAt}</h3>
              <a href="${element.url}">Go to news page</a>
          </div>

          
          `;
      });
      div.innerHTML = `
        <img src="${
          element.image || "./assets/img/masai.jpg"
        }" alt="urlToImage">
        <div>
            <h2>${element.title.slice(0, 70)}...</h2>
            <p>${element.publishedAt}</p>
        </div>
        <span>gnews</span>
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
