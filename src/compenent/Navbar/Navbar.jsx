import React from "react";
import "./Navbar.css";
import GoMasai from "../../assets/images/navbarlogo.png";
import MicOnIcon from '../../assets/images/miciconon.png'
import MicOffIcon from '../../assets/images/micicon.png'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchinput } from "../../Redux/action";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Navbar = () => {
  const { navbar_searchValur } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = React.useState(navbar_searchValur);

  const searchResult = (event) => {
    event.preventDefault();
    dispatch(setSearchinput(searchValue))
  }

  const {
    finalTranscript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  React.useEffect(() => {
    let val = "";
    if (searchValue === "" && finalTranscript !== "") {
      val = finalTranscript;
    } else if (searchValue !== "" && finalTranscript === "") {
      val = searchValue;
    } else if (searchValue !== "" && finalTranscript !== "") {
      val = searchValue + " " + finalTranscript;
    }
    setSearchValue(val);
  }, [finalTranscript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const navbar_speechRecognitionStartListening = () => {
    SpeechRecognition.startListening();
  }
  const navbar_speechRecognitionStopListening = () => {
    SpeechRecognition.stopListening();
  }

  return (
    <>
      <div className="NavBarMainContainer">
        <div className="NavBarSearchDiv">
          <img src={GoMasai} alt="GoMasai"></img>
          <form onSubmit={searchResult} id="navbar__inputform">
            <input type="text" placeholder="Search..." value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} />
            {listening ?
              <img onClick={() => { navbar_speechRecognitionStopListening() }} src={MicOnIcon} alt="" />
              :
              <img onClick={() => { navbar_speechRecognitionStartListening() }} src={MicOffIcon} alt="" />
            }
            <input type="submit" value="&#9740;" />
          </form>
        </div>
        <div id="navbarBottomPart">
          <Link to="/result" id="result__page">
            <svg focusable="false" id="allNavbarIten" viewBox="0 0 24 24">
              <path d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"></path>
              <path d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"></path>
              <path d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"></path>
              <path d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"></path>
            </svg>
            All
          </Link>

          <Link to="/images" id="images__page">
            <svg focusable="false" id="imagesNavbarIten" viewBox="0 0 24 24">
              <path d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5"></path>
            </svg>
            Images
          </Link>

          <Link to="/videos" id="videos__page">
            <svg focusable="false" id="videosNavbarIten" viewBox="0 0 24 24">
              <path d="M10 16.5l6-4.5-6-4.5v9zM5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm14.5 2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2h15.2A2.4 2.4 0 0 1 22 4.4v15.1a2.5 2.5 0 0 1-2.5 2.5"></path>
            </svg>
            Videos
          </Link>

          <Link to="/news" id="news__page">
            <svg focusable="false" id="newsNavbarIten" viewBox="0 0 24 24">
              <path d="M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.25-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.64 0 3 1.25 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12zM12 9h6V7h-6v2"></path>
            </svg>
            News
          </Link>

          <span id="more__page">
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
            More
            <div>
              <Link to="/maps" id="maps__page">
                <svg focusable="false" id="mapsNavbarIten" viewBox="0 0 16 16">
                  <path d="M7.503 0c3.09 0 5.502 2.487 5.502 5.427 0 2.337-1.13 3.694-2.26 5.05-.454.528-.906 1.13-1.358 1.734-.452.603-.754 1.508-.98 1.96-.226.452-.377.829-.904.829-.528 0-.678-.377-.905-.83-.226-.451-.527-1.356-.98-1.959-.452-.603-.904-1.206-1.356-1.734C3.132 9.121 2 7.764 2 5.427 2 2.487 4.412 0 7.503 0zm0 1.364c-2.283 0-4.14 1.822-4.14 4.063 0 1.843.86 2.873 1.946 4.177.468.547.942 1.178 1.4 1.79.34.452.596.99.794 1.444.198-.455.453-.992.793-1.445.459-.61.931-1.242 1.413-1.803 1.074-1.29 1.933-2.32 1.933-4.163 0-2.24-1.858-4.063-4.139-4.063zm0 2.734a1.33 1.33 0 11-.001 2.658 1.33 1.33 0 010-2.658"></path>
                </svg>
                Maps
              </Link>
              <Link to="/translate" id="translate__page">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16" fill="currentColor" className="bi bi-translate">
                  <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                  <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                </svg>
                Translate
              </Link>
              <Link to="/books" id="books__page">
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" space="preserve">
                  <g id="Books_1_">
                    <path d="M62.9994125,39.4741516h-1.9568176c-2.3530006-5.0440025-2.3532982-9.9673023,0-15.0459023h1.9568176   c0.5526848,0,1-0.4477997,1-1c0-0.5522995-0.4473152-1-1-1H25.8977966v-0.7432003h31.9053001c0.5527,0,1-0.4476986,1-1   c0-0.5521984-0.4473-1-1-1h-1.9568024c-2.3532982-5.0436993-2.3522987-9.9664993,0.0003014-15.0463991h1.956501   c0.5527,0,1-0.4477,1-1c0-0.5521998-0.4473-1-1-1H5.2444973c-0.3632998,0-0.6981997,0.1973-0.875,0.5152001   C0.7366974,9.70895,0.7522975,15.7949495,4.414412,21.2431507c0.1855855,0.2763996,0.4970856,0.4418983,0.8300853,0.4418983   h10.1299143v0.7432003h-4.9336147c-0.3632994,0-0.6981993,0.1972008-0.875,0.5151005   C5.9319973,29.4980507,5.9475975,35.58395,9.6106968,41.0322495c0.1856003,0.2763023,0.4971008,0.4419022,0.8301001,0.4419022   h52.5586166c0.5526848,0,1-0.4478035,1-1C63.9994125,39.9218483,63.5520973,39.4741516,62.9994125,39.4741516z    M17.3744125,11.6435499h6.5233841v17.3358994l-2.8486004-1.2915001c-0.2636986-0.1191006-0.5625-0.1191006-0.8261986,0   l-2.8485851,1.2915001V11.6435499z M5.7874975,19.6850491c-2.875-4.5765991-2.8574002-9.5087986,0.0537-15.0463991h47.8217964   c-2.0849991,5.0116997-2.0861969,10.0642004-0.0029984,15.0463991H25.8977966v-8.0414991h16.0458984c0.552803,0,1-0.4476995,1-1   c0-0.5522003-0.447197-1-1-1H12.1126976c-0.5528002,0-1,0.4477997-1,1c0,0.5523005,0.4471998,1,1,1h3.261714v8.0414991H5.7874975z    M11.0374975,24.4282494h4.3369141v6.1025009c0,0.3398991,0.1727858,0.6562996,0.4580002,0.8402996   c0.2860861,0.1846008,0.6464853,0.2115002,0.9550848,0.0704002l3.8486004-1.7446995l3.8486004,1.7446995   c0.1318989,0.0599995,0.2724991,0.0893002,0.4130993,0.0893002c0.1895008,0,0.3780003-0.0536995,0.5419998-0.1597004   c0.2852001-0.184,0.4580002-0.5004005,0.4580002-0.8402996v-6.1025009h32.9612007   c-2.085701,5.0107002-2.0862007,10.0629997-0.0023994,15.0459023H10.9827976   C8.1077976,34.8974495,8.125412,29.9658508,11.0374975,24.4282494z" />
                    <path d="M54.1919975,44.3154488h1.9567986c0.5527,0,1-0.4477997,1-1c0-0.5522995-0.4473-1-1-1H3.5901973   c-0.3632998,0-0.6982,0.1972008-0.875,0.5151024c-3.6346998,6.5546989-3.6190999,12.6405983,0.0449002,18.0888977   c0.1866,0.2764015,0.4970999,0.4419022,0.8300998,0.4419022h52.5585976c0.5527,0,1-0.4477997,1-1c0-0.5522995-0.4473-1-1-1   h-1.9567986C51.8389969,54.3168488,51.8387947,49.3940506,54.1919975,44.3154488z M4.1321974,59.361351   c-2.8759999-4.5767021-2.8583999-9.5088005,0.0546999-15.0459023h47.8215141   c-2.0857162,5.0107002-2.0859146,10.0627022-0.0024147,15.0459023H4.1321974z" />
                  </g>
                </svg>
                Books
              </Link>

            </div>
          </span>
        </div>
      </div>
      <div className="navbar__bottom"></div>
    </>
  );
};
export default Navbar;
