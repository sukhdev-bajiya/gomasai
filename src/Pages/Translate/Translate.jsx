import React from 'react'
import './Translate.css'
import activePage from '../../Compenent/ActivePage/ActivePage'
import MicOnIcon from '../../assets/images/miciconon.png'
import MicOffIcon from '../../assets/images/micicon.png'
import SpeakerOnIcon from '../../assets/images/sound02.png'
import SpeakerOffIcon from '../../assets/images/sound01.png'


function Translate() {
    React.useEffect(() => {
        activePage("translate__page")
    }, []);

    return (
        <div className="translate__page">
            <div className='translate__buttons'>
                <button>History</button>
                <button>Save Text</button>
                <button>Convert Text</button>
            </div>
            <div className='translate__part'>
                <div className='translate__input'>
                    <select name="" id="translate__inputLuc">
                        <option value="en">English</option>
                    </select>

                    <div className='translate__textareaandicon'>
                        <textarea name="" id="translate__inputtextarea" cols="50" rows="10"></textarea>
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
                    <select name="" id="translate__outputLuc">
                        <option value="en">English</option>
                    </select>
                    <div className='translate__textareaandicon'>
                        <textarea name="" id="translate__inputtextarea" cols="50" rows="10" disabled></textarea>
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