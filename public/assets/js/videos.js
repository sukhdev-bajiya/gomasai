document.getElementById("videosNavbarIten").style.fill = "#e31b46";

let inputValFromHomePage;
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  inputValFromHomePage = document.getElementById("searchInputOfView").value;

  // console.log(inputValFromHomePage);
  localStorage.setItem("searchValue", inputValFromHomePage);
  document.getElementById("searchInputOfView").value =
    localStorage.getItem("searchValue");

  getMyDataFromApi(document.getElementById("searchInputOfView").value);
});

getMyDataFromApi(document.getElementById("searchInputOfView").value);
async function getMyDataFromApi(titleValue) {
  try {
    let key = "AIzaSyBgZZ0wK_-4WDNTaYJLOlDQDFN-CMdpJ_Q";
    let url = ` https://youtube.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=12&q=${titleValue}&key=${key}`;
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    displayonData(data.items);
  } catch (err) {
    console.log(err);
  }
}

function displayonData(items) {
  document.getElementById("youtubeVideoList").innerHTML = "";
  items.map((ele) => {
    let ImgUrl = ele.snippet.thumbnails.high.url;
    let VideoTitle = ele.snippet.title;
    const viewData = `
      <img src="${ImgUrl}" alt="">
      <div>
        <h1>${VideoTitle}...</h1>
          <p>${ele.snippet.channelTitle}</p>
          <p>${ele.snippet.publishTime}</p>
      </div>
  `;
    let div = document.createElement("div");
    div.setAttribute("class", "videoItemsCard");
    div.setAttribute("onclick", `displayMyVideo('${ele.id.videoId}')`);
    div.innerHTML = viewData;
    document.getElementById("youtubeVideoList").append(div);
  });
}

function displayMyVideo(videoNameId) {
  document.getElementById("youtubeVideoPlayer").style.display = "block";
  document
    .getElementById("myPlayVideo")
    .setAttribute("src", `https://www.youtube.com/embed/${videoNameId}`);
}

function closePlayVideo() {
  document.getElementById("youtubeVideoPlayer").style.display = "none";
  document.getElementById("myPlayVideo").setAttribute("src", "");
}
