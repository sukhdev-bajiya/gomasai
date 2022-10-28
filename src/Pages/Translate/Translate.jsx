import React from 'react'
import './Translate.css'
import activePage from '../../Compenent/ActivePage/ActivePage'
import MicOnIcon from '../../assets/images/miciconon.png'
import MicOffIcon from '../../assets/images/micicon.png'
import SpeakerOnIcon from '../../assets/images/sound02.png'
import SpeakerOffIcon from '../../assets/images/sound01.png'


function Translate() {
    const [inputLanguage, setInputLanguage] = React.useState("en")
    const [outputLanguage, setOutputLanguage] = React.useState("hi")
    const [inputData, setInputData] = React.useState("")
    const [outputData, setOutputData] = React.useState("")

    React.useEffect(() => {
        activePage("translate__page")
    }, []);

    const convertText = async () => {
        try {
            const res = await fetch("https://translate.argosopentech.com/translate", {
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

    return (
        <div className="translate__page">
            <div className='translate__buttons'>
                <button>History</button>
                <button>Save Text</button>
                <button onClick={convertText}>Convert Text</button>
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
                            {false ?
                                <img src={MicOnIcon} alt="" />
                                :
                                <img src={MicOffIcon} alt="" />
                            }

                            {true ?
                                <img src={SpeakerOnIcon} alt="" />
                                :
                                <img src={SpeakerOffIcon} alt="" />
                            }
                        </div>
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
                                <img src={SpeakerOnIcon} alt="" />
                                :
                                <img src={SpeakerOffIcon} alt="" />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Translate