document.getElementById("navbarSection").innerHTML = `
    <div id="navbarTopPart">
        <img src="./assets/img/navbarlogo.png" alt="">
        <div id="navlogopart">
          <img src="./assets/img/09.png" alt="" />
          <img src="./assets/img/navbarlogo.png" alt="" />
        </div>
        <form action="">
            <input type="text" id="searchInputOfView" placeholder="Search...">
            <img src="./assets/img/micicon.png" id="miciconNavbarPart" alt="" onclick="runSpeechRecognition()">
            <input type="submit" value="&#9740;">
        </form>
    </div>
    <div id="navbarBottomPart">
        <a href="./view.html"> <svg focusable="false" id="allNavbarIten" viewBox="0 0 24 24">
                <path d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"></path>
                <path d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"></path>
                <path d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"></path>
                <path
                    d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59">
                </path>
            </svg> All</a>
        <a href="./news.html"> <svg focusable="false" id="newsNavbarIten" viewBox="0 0 24 24">
                <path
                    d="M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.25-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.64 0 3 1.25 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12zM12 9h6V7h-6v2">
                </path>
            </svg> News</a>
        <a href="./images.html"> <svg focusable="false" id="imagesNavbarIten" viewBox="0 0 24 24">
                <path
                    d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5">
                </path>
            </svg> Images</a>
        <a href="./maps.html"> <svg focusable="false" id="mapsNavbarIten" viewBox="0 0 16 16">
                <path
                    d="M7.503 0c3.09 0 5.502 2.487 5.502 5.427 0 2.337-1.13 3.694-2.26 5.05-.454.528-.906 1.13-1.358 1.734-.452.603-.754 1.508-.98 1.96-.226.452-.377.829-.904.829-.528 0-.678-.377-.905-.83-.226-.451-.527-1.356-.98-1.959-.452-.603-.904-1.206-1.356-1.734C3.132 9.121 2 7.764 2 5.427 2 2.487 4.412 0 7.503 0zm0 1.364c-2.283 0-4.14 1.822-4.14 4.063 0 1.843.86 2.873 1.946 4.177.468.547.942 1.178 1.4 1.79.34.452.596.99.794 1.444.198-.455.453-.992.793-1.445.459-.61.931-1.242 1.413-1.803 1.074-1.29 1.933-2.32 1.933-4.163 0-2.24-1.858-4.063-4.139-4.063zm0 2.734a1.33 1.33 0 11-.001 2.658 1.33 1.33 0 010-2.658">
                </path>
            </svg> Maps</a>
        <a href="./videos.html"> <svg focusable="false" id="videosNavbarIten" viewBox="0 0 24 24">
                <path
                    d="M10 16.5l6-4.5-6-4.5v9zM5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm14.5 2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2h15.2A2.4 2.4 0 0 1 22 4.4v15.1a2.5 2.5 0 0 1-2.5 2.5">
                </path>
            </svg> Videos</a>
        <a href="./translate.html"> <svg xmlns="http://www.w3.org/2000/svg" id="translateNavbarIten" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M448 164C459 164 468 172.1 468 184V188H528C539 188 548 196.1 548 208C548 219 539 228 528 228H526L524.4 232.5C515.5 256.1 501.9 279.1 484.7 297.9C485.6 298.4 486.5 298.1 487.4 299.5L506.3 310.8C515.8 316.5 518.8 328.8 513.1 338.3C507.5 347.8 495.2 350.8 485.7 345.1L466.8 333.8C462.4 331.1 457.1 328.3 453.7 325.3C443.2 332.8 431.8 339.3 419.8 344.7L416.1 346.3C406 350.8 394.2 346.2 389.7 336.1C385.2 326 389.8 314.2 399.9 309.7L403.5 308.1C409.9 305.2 416.1 301.1 422 298.3L409.9 286.1C402 278.3 402 265.7 409.9 257.9C417.7 250 430.3 250 438.1 257.9L452.7 272.4L453.3 272.1C465.7 259.9 475.8 244.7 483.1 227.1H376C364.1 227.1 356 219 356 207.1C356 196.1 364.1 187.1 376 187.1H428V183.1C428 172.1 436.1 163.1 448 163.1L448 164zM160 233.2L179 276H140.1L160 233.2zM0 128C0 92.65 28.65 64 64 64H576C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H64C28.65 448 0 419.3 0 384V128zM320 384H576V128H320V384zM178.3 175.9C175.1 168.7 167.9 164 160 164C152.1 164 144.9 168.7 141.7 175.9L77.72 319.9C73.24 329.1 77.78 341.8 87.88 346.3C97.97 350.8 109.8 346.2 114.3 336.1L123.2 315.1H196.8L205.7 336.1C210.2 346.2 222 350.8 232.1 346.3C242.2 341.8 246.8 329.1 242.3 319.9L178.3 175.9z"/></svg> Translate</a>
    </div>
    `;

function runSpeechRecognition() {
  var output = document.getElementById("searchInputOfView");
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var recognition = new SpeechRecognition();

  recognition.onstart = function () {
    document.getElementById("miciconNavbarPart").src =
      "./assets/img/miciconon.png";
  };

  recognition.onspeechend = function () {
    document.getElementById("miciconNavbarPart").src =
      "./assets/img/micicon.png";
    recognition.stop();
  };

  recognition.onresult = function (event) {
    var transcript = event.results[0][0].transcript;
    output.value = transcript;
  };

  recognition.start();
}

document.getElementById("searchInputOfView").value =
  localStorage.getItem("searchValue");
