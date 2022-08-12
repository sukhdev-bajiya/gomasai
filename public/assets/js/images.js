document.getElementById("imagesNavbarIten").style.fill = "#e31b46";

let inputValFromHomePage;
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  inputValFromHomePage = document.getElementById("searchInputOfView").value;

  // console.log(inputValFromHomePage);
  localStorage.setItem("searchValue", inputValFromHomePage);
  document.getElementById("searchInputOfView").value =
    localStorage.getItem("searchValue");
  findSearchImages();
});
findSearchImages();
async function findSearchImages(event) {
  try {
    let res = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=cLzf06En9a0VRkGQLH54-V1I_ga2FTLXkR0XIsYatko&query=${inputValFromHomePage}`
    );
    let data = await res.json();
    dishplayData(data.results);
  } catch (error) {
    console.log(error);
  }
}

function dishplayData(array) {
  document.getElementById("showSearchDataSection").innerHTML = "";
  array.forEach((data) => {
    let val = `
      <img src="${data.urls.small}" alt="">
      <div>
        <h1>${data.user.name}</h1>
        <p><span>Id : ${data.id}</span> <span>Likes : ${data.likes}</span></p>
      </div>
    `;
    let div = document.createElement("div");
    div.innerHTML = val;
    document.getElementById("showSearchDataSection").append(div);
  });
}
