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
    let val = localStorage.getItem("searchValue");
    let res = await fetch(
      `https://gomasai.herokuapp.com/gomasai?q=${val}&_page=${1}&_limit=${15}`
    );
    let data = await res.json();
    document.getElementById("showSearchDataSection").innerHTML = `
    <div id="searchItemsList"></div>
    `;
    /* 
  if(data.length > 15){
    extArr -- fix
    for(let i=0; i<(15-data.length); i++){
      data.push(extArr);
    }
  }
*/

    data.forEach((element) => {
      let div = document.createElement("div");
      div.innerHTML = `
      <div>
          <a href="${element.wesiteUrl}" target="_blank" id="searchUrl">${
        element.urlLinkPath
      }</a>
          <a href="${element.wesiteUrl}" target="_blank" id="searchTitel">${
        element.titel
      }</a>
          <p id="searchDescription">${element.description.slice(0, 150)}...</p>
          <p id="searchDescription">${element.subDescription.slice(0, 150)}</p>
      </div>
      `;

      document.getElementById("searchItemsList").append(div);
    });
  } catch (error) {
    console.log(error);
  }
}
