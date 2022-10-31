import React from 'react'
import "./Home.css"
import GoMasaiLogo from "../../assets/images/gomasai.png";
// import GoMasaiLogo from "../../assets/images/gomasaiLogo.png";
import { Link } from 'react-router-dom';
import { auth, provider } from '../../Redux/Firebase'
import { useSelector, useDispatch } from "react-redux";
import { setSearchinput, setUserlog } from "../../Redux/action";

function Home() {
    const { navbar_searchValur } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = React.useState(navbar_searchValur);

    const searchResult = (event) => {
        event.preventDefault();
        dispatch(setSearchinput(searchValue))
    }

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(res => userDataAddInDatabase(res.user.multiFactor.user))
            .catch(err => alert(err));
    }


    const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('userlogindata')) || {
        userauth: false,
        name: "",
        email: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"
    })

    function userDataAddInDatabase(data) {

        let userObject = {
            userauth: true,
            name: data.displayName,
            email: data.email,
            photo: data.photoURL
        }

        dispatch(setUserlog(data))

        localStorage.setItem('userlogindata', JSON.stringify(userObject))
        setUser(userObject)
    }

    return (
        <>
            <div className='home__navbar'>
                <a target="_blank" rel="noreferrer" href="https://mail.google.com/">Gmail</a>
                <Link to="/images">Images</Link>
                <div className='home__navbarAppPart'>
                    <svg className="gb_Ve" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                    </svg>

                    <div className='home__navbarAppList'>

                        {user.userauth ?
                            <Link to={"/account"}>
                                <img src={user.photo} alt="" />
                                <p>Account</p>
                            </Link>
                            :
                            <div onClick={signIn}>
                                <img src={user.photo} alt="" />
                                <p>Account</p>
                            </div>
                        }

                        <Link to={"/"}>
                            <img src="https://lh3.googleusercontent.com/WdC-o7ZcZL5WALPSmfUC8H4oYhlhqm1DV45CtHqV06DTRR0rE_P9JXi-J2KXLd9CTyHt_t3ehUm1o_AMltgfAGbvQDku8jsZt0kBSA=h120" alt="" />
                            <p>Search</p>
                        </Link>
                        <Link to={"/maps"}>
                            <img src="https://lh3.googleusercontent.com/9NuRdiRepVI3n1txfg7Ky2wWzB3DvXkWABXeFMSn2tzDYYkv8T_RMA9R17fWi0ziUDIDTVJx0JruCzOev37c4dkK9Wrgkeyam3pM8lI=h120" alt="" />
                            <p>Maps</p>
                        </Link>
                        <Link to={"/videos"}>
                            <img src="https://lh3.googleusercontent.com/I95wjYii8vhFSSx-aSYdh2hPAMjgZkA9yjarSQoOd98COwOxkAVn_dulBcTcfbsa7Limy6IKX6G95ep6OB6y2yMLMiX0YEqFx3KQHQ=h120" alt="" />
                            <p>YouTube</p>
                        </Link>

                        <Link to={"/news"}>
                            <img src="https://lh3.googleusercontent.com/u2XGSr0jis3w5sLeuh8UMqGHgtdqPVPi77xYhPJdMO9C41wYUue3EKPJvwp-ovAlTzt3Ux3R4Mww2HlJ31UKre8vz1Cnno-3MxvWtA=h120" alt="" />
                            <p>News</p>
                        </Link>

                        <Link to={"/translate"}>
                            <img src="https://lh3.googleusercontent.com/vNgpLTvnDUr6-QM8s4OuuESGDXs_brbGoPR-7vfwdxQI7M4MVFV0CC_Hil4qRDSp4P66ik85fdv09jKn89kDAJVknIbd6wkl0zGQJQ=h120" alt="" />
                            <p>Translate</p>
                        </Link>
                        <Link to={"/books"}>
                            <img src="https://lh3.googleusercontent.com/nDCFKerWuvJvG26AZOPsWYFPiw3MRFDYqVJcHzQzK6AgY96TXH50bpQ1IE__BdBxxcXm8ZTaQ6OuJ4pbYF1c-ugOTfOmjhffJXEvJQ=h120" alt="" />
                            <p>Books</p>
                        </Link>
                        <Link to={"/shopping"}>
                            <img src="https://lh3.googleusercontent.com/UqZcYFgfFclRU46MshhuCQD79idBZ8hyIe5WkQ1VLzG47w-Mgu6yGriGkL_YiYF2qau5jrufzTNwFp84tw7Lm-f9t2vQLkrECfur=h120" alt="" />
                            <p>Shopping</p>
                        </Link>


                    </div>
                </div>
                {
                    user.userauth ? <div className='home__navbarLoginPart'>
                        <div className='home__navbarLoginPartImg'>
                            <img src={user.photo} alt="" />
                        </div>
                        <div className='home__navbarLoginPartData'>
                            <p>Google Account</p>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </div>
                    </div>
                        :
                        <div className='home__navbarLoginPart'>
                            <div className='home__navbarLoginPartImg'>
                                <img src={user.photo} alt="" onClick={signIn} />
                            </div>
                            <div className='home__navbarLoginPartData'><p>Sign In</p></div>
                        </div>
                }
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