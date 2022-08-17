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
async function findSearchImages() {
  try {
    let res = await fetch("https://api.pexels.com/v1/search?query=people", {
      method: "GET",
      headers: {
        Authorization:
          "563492ad6f9170000100000192f32b8405cf4c8892a5a9150ee529f9",
      },
    });
    let data = await res.json();
    dishplayData(data.photos);
  } catch (error) {
    console.log(error);
  }
}

function dishplayData(array) {
  document.getElementById("showSearchDataSection").innerHTML = "";
  array.forEach((data) => {
    let val = `
      <img src="${data.src.original}" alt="">
      <div>
        <h1>${data.alt}</h1>
        <p><span>Id : ${data.photographer_id}</span> <span>PG : ${data.photographer}</span></p>
      </div>
    `;
    let div = document.createElement("div");
    div.innerHTML = val;
    document.getElementById("showSearchDataSection").append(div);
  });
}

// 563492ad6f9170000100000192f32b8405cf4c8892a5a9150ee529f9
