document.getElementById("allNavbarIten").style.fill = "#e31b46";

let inputValFromHomePage;
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  inputValFromHomePage = document.getElementById("searchInputOfView").value;

  // console.log(inputValFromHomePage);
  localStorage.setItem("searchValue", inputValFromHomePage);
  document.getElementById("searchInputOfView").value =
    localStorage.getItem("searchValue");
  displayData();
});

displayData();

async function displayData() {
  try {
    // let res = await fetch("https://jsonservermasai.herokuapp.com/brands/1");
    let key = "AIzaSyCQqAYLecU4cYJO0lmlbVUGosxgypW-yO4";
    let cxEng = "f445f901939ce4ad1";
    let val = localStorage.getItem("searchValue");
    let res = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cxEng}&q=${val}`
    );
    let data = await res.json();
    document.getElementById("showSearchDataSection").innerHTML = `
    <div id="showrequestDataCount">About <span>${data.searchInformation.formattedTotalResults}</span> results (<span>${data.searchInformation.formattedSearchTime}</span> seconds)</div>
    <div id="searchItemsList"></div>
    `;
    data.items.forEach((element) => {
      let div = document.createElement("div");
      let urlPart = element.link.length - 1;

      let picUrl = "./assets/img/masai.jpg";

      if (element.pagemap.cse_thumbnail != undefined) {
        picUrl = element.pagemap.cse_thumbnail[0].src;
      }
      div.innerHTML = `
      <div>
          <a href="${element.link.slice(
            0,
            urlPart
          )}" target="_blank" id="searchUrl">${element.displayLink}</a>
          <a href="${element.link.slice(
            0,
            urlPart
          )}" target="_blank" id="searchTitel">${element.htmlTitle}</a>
          <p id="searchDescription">${element.htmlSnippet}...</p>
      </div>
      <img src="${picUrl}"alt="">
      `;

      document.getElementById("searchItemsList").append(div);
    });
  } catch (error) {
    console.log(error);
  }
}
