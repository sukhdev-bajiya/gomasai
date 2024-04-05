import React from 'react'
import './Translate.css'
import activePage from '../../compenent/ActivePage/ActivePage'
import MicOnIcon from '../../assets/images/miciconon.png'
import MicOffIcon from '../../assets/images/micicon.png'
import SpeakerOnIcon from '../../assets/images/sound02.png'
import SpeakerOffIcon from '../../assets/images/sound01.png'
import { useSelector, useDispatch } from "react-redux";
import { setTranslate } from "../../Redux/action";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useSpeechSynthesis } from 'react-speech-kit';


function Translate() {
    const { translate } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [inputLanguage, setInputLanguage] = React.useState("en")
    const [outputLanguage, setOutputLanguage] = React.useState("hi")
    const [inputData, setInputData] = React.useState("")
    const [outputData, setOutputData] = React.useState("")
    const [historyShow, setHistoryShow] = React.useState(false)

    const { speak } = useSpeechSynthesis();

    React.useEffect(() => {
        activePage("translate__page");
    }, []);

    const convertText = async () => {
        try {
            const res = await fetch(process.env.REACT_APP_TRANSLATE_URL, {
                method: "POST",
                body: JSON.stringify({
                    q: inputData,
                    source: inputLanguage,
                    target: outputLanguage,
                    format: "text",
                }),
                headers: { "Content-Type": "application/json" },
            });
            let outputText = await res.json();
            setOutputData(outputText.translatedText);
        } catch (err) {
            console.log(err);
        }

    }

    const resetText = () => {
        setOutputData("");
        setInputData("")
    }

    const saveText = () => {
        translate.push([inputData, outputData])
        dispatch(setTranslate(translate))
        resetText()
    }

    const historyText = () => {
        setHistoryShow(!historyShow)
    }

    const editText = (id) => {
        setInputData(translate[id][0])
        setOutputData(translate[id][1])
    }

    const deleteText = (id) => {
        translate.splice(id, 1)
        dispatch(setTranslate(translate))
    }

    const {
        transcript,
        resetTranscript,
        listening,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    const speechRecognitionStartListening = () => {
        SpeechRecognition.startListening();
    }
    const speechRecognitionStopListening = () => {
        SpeechRecognition.stopListening();
    }
    const addText = () => {
        setInputData(inputData + " " + transcript);
        resetTranscript();
    }

    return (
        <div className="translate__page">
            <div className='translate__buttons'>
                <button onClick={historyText}>{!historyShow ? "Show History" : "Hide History"}</button>
                <button onClick={saveText}>Save Text</button>
                <button onClick={convertText}>Convert Text</button>
                <button onClick={resetText}>Reset Text</button>
            </div>
            <div className='translate__part'>
                <div className='translate__input'>
                    <select name="inputLanguage" value={inputLanguage} onChange={(e) => setInputLanguage(e.target.value)}>
                        <option value="en">English</option>
                        <option value="ar">Arabic</option>
                        <option value="zh">Chinese</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="hi">Hindi</option>
                        <option value="id">Indonesian</option>
                        <option value="ga">Irish</option>
                        <option value="it">Italian</option>
                        <option value="ja">Japanese</option>
                        <option value="ko">Korean</option>
                        <option value="pl">Polish</option>
                        <option value="pt">Portuguese</option>
                        <option value="ru">Russian</option>
                        <option value="es">Spanish</option>
                        <option value="tr">Turkish</option>
                        <option value="vi">Vietnamese</option>
                        <option value="auto">Auto Detect (Experimental)</option>
                    </select>

                    <div className='translate__textareaandicon'>
                        <textarea name="" id="translate__inputtextarea" value={inputData} cols="50" rows="10" onChange={(e) => setInputData(e.target.value)}></textarea>
                        <div>
                            {listening ?
                                <img onClick={() => { speechRecognitionStopListening() }} src={MicOnIcon} alt="" />
                                :
                                <img onClick={() => { speechRecognitionStartListening() }} src={MicOffIcon} alt="" />
                            }

                            {true ?
                                <img onClick={() => speak({ text: inputData })} src={SpeakerOnIcon} alt="" />
                                :
                                <img src={SpeakerOffIcon} alt="" />
                            }
                        </div>
                    </div>
                    <div className='translate__microphone'>
                        <button onClick={addText}> Add Text </button>
                        {transcript !== "" ? <button onClick={resetTranscript}>Reset</button> : ""}
                        <p>{transcript}</p>
                    </div>
                </div>

                <p className='translate__liftright'> &#x21cc;</p>

                <div className='translate__output'>
                    <select name="outputLanguage" value={outputLanguage} onChange={(e) => setOutputLanguage(e.target.value)}>
                        <option value="en">English</option>
                        <option value="ar">Arabic</option>
                        <option value="zh">Chinese</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="hi">Hindi</option>
                        <option value="id">Indonesian</option>
                        <option value="ga">Irish</option>
                        <option value="it">Italian</option>
                        <option value="ja">Japanese</option>
                        <option value="ko">Korean</option>
                        <option value="pl">Polish</option>
                        <option value="pt">Portuguese</option>
                        <option value="ru">Russian</option>
                        <option value="es">Spanish</option>
                        <option value="tr">Turkish</option>
                        <option value="vi">Vietnamese</option>
                    </select>
                    <div className='translate__textareaandicon'>
                        <textarea name="" id="translate__outputtextarea" cols="50" rows="10" value={outputData} disabled></textarea>
                        <div>
                            {true ?
                                <img onClick={() => speak({ text: outputData })} src={SpeakerOnIcon} alt="" />
                                :
                                <img src={SpeakerOffIcon} alt="" />
                            }
                        </div>
                    </div>
                </div>
            </div>

            {historyShow ? <div className='translate__historyData'>
                <table className='translate__historyDataTable'>
                    <thead>
                        <tr>
                            <th>Input Text</th>
                            <th>Output Text</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            translate.map((data, index) => {
                                return <tr key={index}>
                                    <td>{data[0]}</td>
                                    <td>{data[1]}</td>
                                    <td>
                                        <svg onClick={() => editText(index)} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 194.436 194.436" space="preserve" >
                                            <g>
                                                <path d="M192.238,34.545L159.894,2.197C158.487,0.79,156.579,0,154.59,0c-1.989,0-3.897,0.79-5.303,2.196l-32.35,32.35   c-0.004,0.004-0.008,0.01-0.013,0.014L54.876,96.608c-1.351,1.352-2.135,3.166-2.193,5.076l-1.015,33.361   c-0.063,2.067,0.731,4.068,2.193,5.531c1.409,1.408,3.317,2.196,5.303,2.196c0.076,0,0.153-0.001,0.229-0.004l33.36-1.018   c1.909-0.058,3.724-0.842,5.075-2.192l94.41-94.408C195.167,42.223,195.167,37.474,192.238,34.545z M154.587,61.587L132.847,39.85   l21.743-21.743l21.738,21.741L154.587,61.587z M89.324,126.85l-22.421,0.685l0.682-22.422l54.655-54.656l21.741,21.738   L89.324,126.85z" />
                                                <path d="M132.189,117.092c-4.142,0-7.5,3.357-7.5,7.5v54.844H15.001V69.748h54.844c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5   H7.501c-4.142,0-7.5,3.357-7.5,7.5v124.687c0,4.143,3.358,7.5,7.5,7.5h124.687c4.142,0,7.5-3.357,7.5-7.5v-62.344   C139.689,120.449,136.331,117.092,132.189,117.092z" />
                                            </g></svg></td>
                                    <td>
                                        <svg onClick={() => deleteText(index)} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 354.319 354.319" space="preserve">
                                            <path id="XMLID_2_" d="M293.765,125.461l-41.574-17.221l17.221-41.574c3.17-7.654-0.464-16.428-8.118-19.599L150.428,1.146  C142.775-2.024,134,1.61,130.83,9.264l-17.221,41.574L72.035,33.617c-7.654-3.17-16.428,0.464-19.599,8.118  c-3.17,7.654,0.464,16.428,8.118,19.599l55.433,22.961l96.628,40.024H87.16c-8.284,0-15,6.716-15,15v200c0,8.284,6.716,15,15,15h180  c8.284,0,15-6.716,15-15V153.126l0.125,0.052c1.877,0.777,3.821,1.146,5.734,1.146c5.886,0,11.472-3.487,13.864-9.264  C305.053,137.406,301.419,128.631,293.765,125.461z M141.326,62.318l11.48-27.716l83.148,34.441l-11.48,27.716L182.9,79.539  L141.326,62.318z" /></svg>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div> : <div></div>}
        </div>

    )
}

export default Translate