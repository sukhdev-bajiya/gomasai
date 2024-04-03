import React from 'react'
import "./Home.css"
import GoMasaiLogo from "../../assets/images/gomasai.png";
// import GoMasaiLogo from "../../assets/images/gomasaiLogo.png";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setSearchinput } from "../../Redux/action";

function Home() {
    const { navbar_searchValur } = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [searchValue, setSearchValue] = React.useState(navbar_searchValur);

    const searchResult = (event) => {
        event.preventDefault();
        dispatch(setSearchinput(searchValue))
        navigate("/result")
    }


    return (
        <>
            <div className='home__navbar'>
                <a target="_blank" rel="noreferrer" href="https://mail.google.com/">Gmail</a>
                <Link to="/images">Images</Link>
            </div>
            <div className="home__gomasaiSection">
                <form onSubmit={searchResult}>
                    <input type="text" placeholder="Search or type a URL" className="home__searchAnythingForm" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    <input type="submit" value="&#9740;" />
                    <img src={GoMasaiLogo} className="home__backGroundIcon" alt="" />
                </form>
            </div>
            <div className='home__mayIHelpYou'>
                <img src="https://gold-ca-api.blallab.com/public/uploads/core_values/1658824503393.png" alt="" />

                <p className='home__mayihelpyouText'>May I Help You!</p>
                <div className='home__mayihelpyouMessengerBox'>
                </div>
            </div>
        </>
    )
}

export default Home