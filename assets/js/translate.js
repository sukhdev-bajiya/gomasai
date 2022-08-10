document.getElementById("translateNavbarIten").style.fill = "#e31b46";

document.getElementById("searchInputOfView").value = "";

function translateInputStart() {
  var output = document.getElementById("noteInput_textarea");
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var recognition = new SpeechRecognition();

  recognition.onstart = function () {
    document.getElementById("noteInput_textarea_Img").src =
      "./assets/img/miciconon.png";
  };

  recognition.onspeechend = function () {
    document.getElementById("noteInput_textarea_Img").src =
      "./assets/img/micicon.png";
    recognition.stop();
  };

  recognition.onresult = function (event) {
    var transcript = event.results[0][0].transcript;
    output.value += transcript + " ";
  };

  recognition.start();
}

function translateInputPlayStart() {
  document.getElementById("notePlay_textarea_Img").src =
    "./assets/img/sound02.png";
}
// function translateOutputPlayStart() {
//   document.getElementById("noteClonePlay_textarea_Img").src =
//     "./assets/img/sound02.png";
// }

var txtInput = document.querySelector("#noteInput_textarea");
var voiceList = document.querySelector("#voiceList");
var btnSpeak = document.querySelector("#notePlay_textarea_Img");
var synth = window.speechSynthesis;
var voices = [];

PopulateVoices();
if (speechSynthesis !== undefined) {
  speechSynthesis.onvoiceschanged = PopulateVoices;
}

btnSpeak.addEventListener("click", () => {
  var toSpeak = new SpeechSynthesisUtterance(txtInput.value);
  var selectedVoiceName =
    voiceList.selectedOptions[0].getAttribute("data-name");
  voices.forEach((voice) => {
    if (voice.name === selectedVoiceName) {
      toSpeak.voice = voice;
    }
  });
  synth.speak(toSpeak);
});

function PopulateVoices() {
  voices = synth.getVoices();
  var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
  voiceList.innerHTML = "";
  voices.forEach((voice) => {
    var listItem = document.createElement("option");
    listItem.textContent = voice.name;
    listItem.setAttribute("data-lang", voice.lang);
    listItem.setAttribute("data-name", voice.name);
    voiceList.appendChild(listItem);
  });

  voiceList.selectedIndex = selectedIndex;
}
