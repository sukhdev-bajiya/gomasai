import React from 'react'
import "./Home.css"
import GoMasaiLogo from "../../assets/images/gomasai.png";
// import GoMasaiLogo from "../../assets/images/gomasaiLogo.png";
import { Link } from 'react-router-dom';
import { auth, provider } from '../../Redux/Firebase'
import { useDispatch } from "react-redux";
// import { useSelector, useDispatch } from "react-redux";
import { setUserlog } from "../../Redux/action";

function Home() {
    // const { userlog } = useSelector((state) => state);
    const dispatch = useDispatch();
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

    const [searchValue, setSearchValue] = React.useState("");

    const searchResult = (event) => {
        event.preventDefault();
        console.log(searchValue)
        setSearchValue("")
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
                            <a target="_blank" rel="noreferrer" href="https://myaccount.google.com/">
                                <img src={user.photo} alt="" />
                                <p>Account</p>
                            </a>
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
                        <a target="_blank" rel="noreferrer" href="https://play.google.com/">
                            <img src="https://lh3.googleusercontent.com/vWJNEFxN3WY5PYAYjwZ9ycEXMCCiB8EbcFXZxfSv5xkKLw67C2J5qXJTBL9KSPldWmLpVMnucrsDBmPlrf9tMiEJpYNZNcTw_ymlxgc=h120" alt="" />
                            <p>Play</p>
                        </a>
                        <Link to={"/news"}>
                            <img src="https://lh3.googleusercontent.com/u2XGSr0jis3w5sLeuh8UMqGHgtdqPVPi77xYhPJdMO9C41wYUue3EKPJvwp-ovAlTzt3Ux3R4Mww2HlJ31UKre8vz1Cnno-3MxvWtA=h120" alt="" />
                            <p>News</p>
                        </Link>
                        <a target="_blank" rel="noreferrer" href={"https://mail.google.com/mail"}>
                            <img src="https://lh3.googleusercontent.com/mK6uPlO8TKCVSU8TsniV0pOUB0SSETbAPB_QUaaJ96qbBdZwaygmzf_bWRTIHmCNKgJ2hhn86KSfEAHvHN-P2EjFWAxPd77ob_2k8ew=h120" alt="" />
                            <p>Gmail</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href={"https://meet.google.com/"}>
                            <img src="https://lh3.googleusercontent.com/5CsRqfMEP1Rv-PPv9G4962lyEuvb4roSLJHJQWPbmCa51AmvynfoGfoKsKiS87QhX07xQMZAeLp8qoSy7CjVZkXJ1WapQiJkroCeJw=h120" alt="" />
                            <p>Meet</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href={"https://mail.google.com/chat"}>
                            <img src="https://lh3.googleusercontent.com/z3dgQsXgGqfadzIUmpGI_ppolUy7H6fgqIbtW_qzLXcBww0nOby8TEE3e_fW84Qa7zeAwe339f5VLkqRD6jk7Z9sEaVh5Y_yaPG9nw=h120" alt="" />
                            <p>Chat</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href={"https://contacts.google.com/"}>
                            <img src="https://lh3.googleusercontent.com/m5HIvqrNJHr2w5VXuNapBWKSx6YZTU7lIhffkIgDQU_VbpYAfkgXt2Un2ks_wzTn7vrfkyllWMLouCcOcBwfakYylBMe_9PwYm7_=h120" alt="" />
                            <p>Contacts</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href={"https://drive.google.com/"}>
                            <img src="https://lh3.googleusercontent.com/AGsg9hOAylBkWuFrfSgOt8psYWcr3b-vZcmIVk0ocwx7KAVSu--tg1ZIAUSL7nAbORTHI5eZaweHYVPMJu5ac8Xw7GP_WiCs1w60=h120" alt="" />
                            <p>Drive</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href={"https://calendar.google.com/"}>
                            <img src="https://lh3.googleusercontent.com/DaaQa-Y-b3_IAhu6SBFb2vRl8PFR5iuCLwLszc16_OTlLrEFvFF9P4CS0ui-414nG9016ul3dQD1R3mHtmMx4P1bIA-zRXuPpFN4yw=h120" alt="" />
                            <p>Calendar</p>
                        </a>
                        <Link to={"/translate"}>
                            <img src="https://lh3.googleusercontent.com/vNgpLTvnDUr6-QM8s4OuuESGDXs_brbGoPR-7vfwdxQI7M4MVFV0CC_Hil4qRDSp4P66ik85fdv09jKn89kDAJVknIbd6wkl0zGQJQ=h120" alt="" />
                            <p>Translate</p>
                        </Link>
                        <a target="_blank" rel="noreferrer" href={"https://photos.google.com/"}>
                            <img src="https://lh3.googleusercontent.com/RwVe2Cm1EjeDmYhdTzr179G0ovq_PCxgPzQ92PO-YxTBEFTHWh0L6Ev8FFDWRgRGrE81vwn95tyg9Ey189OO4kllhhpLAMIsGFZ-UKA=h120" alt="" />
                            <p>Photos</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href={"https://duo.google.com/"}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Google_Duo_icon.svg/2048px-Google_Duo_icon.svg.png" alt="" />
                            <p>Duo</p>
                        </a>
                        <Link to={"/shopping"}>
                            <img src="https://lh3.googleusercontent.com/UqZcYFgfFclRU46MshhuCQD79idBZ8hyIe5WkQ1VLzG47w-Mgu6yGriGkL_YiYF2qau5jrufzTNwFp84tw7Lm-f9t2vQLkrECfur=h120" alt="" />
                            <p>Shopping</p>
                        </Link>




                        <Link to={""}></Link>
                        <Link to={""}></Link>


                        <a target="_blank" rel="noreferrer" href={"https://www.google.com/finance"}>
                            <img src="https://lh3.googleusercontent.com/v58NX5Yjsfo7e9kmvZYz-UpgxiBwecURTpNGU7dQ9CDZLnQaxf5dKsWQDUPxO91gZX-_BGEGd-HvLLXIjrzfOQw-NrQfqlxKLEFF1g=h120" alt="" />
                            <p>Finance</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href={"https://docs.google.com/document"}>
                            <img src="https://lh3.googleusercontent.com/Ac9zapU8rN332VMysmJIaTk1Nk-3IGzqCwFS-6PwDFUFpEzEBKPTGWfIFN4BXL3eHP5s1DJP2tyh8NTS8_LjvXHzpkyZC2fu58Ov=h120" alt="" />
                            <p>Docs</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href={"https://docs.google.com/spreadsheets"}>
                            <img src="https://lh3.googleusercontent.com/tvQvvubDZ2r6Ou8zxkVzkIvddC1snCCq4xD4dhafjAJhHLDsEvHDEUms9RyVH_g-nI_8yTyeahZshZqwMV0NdHxD-K9v-Zbm4DF2vds=h120" alt="" />
                            <p>Sheets</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href='https://docs.google.com/presentation'>
                            <img src="https://lh3.googleusercontent.com/aD5GNhlaU2d70gmSy5ioL1dMSUZN9cHDWPLkIBLhCsJ-BgcGUm-PD6o8XExZcx1i2iZV6PH0P8v3ceg0x7Tzd_OZ5FV0nXs5mX15sgA=h120" alt="" />
                            <p>Slides</p>
                        </a>
                        <Link to={"/books"}>
                            <img src="https://lh3.googleusercontent.com/nDCFKerWuvJvG26AZOPsWYFPiw3MRFDYqVJcHzQzK6AgY96TXH50bpQ1IE__BdBxxcXm8ZTaQ6OuJ4pbYF1c-ugOTfOmjhffJXEvJQ=h120" alt="" />
                            <p>Books</p>
                        </Link>
                        <a target="_blank" rel="noreferrer" href='https://www.blogger.com/'>
                            <img src="https://lh3.googleusercontent.com/JtYUq9HfkkOryxudgp34oqI8qFu9a6mmL64OXjcDX7mfEwcX_pxmTdurvxssofY4swTY2c_M1Kk5o1a863CGTiBZkxxuYXfjiNgz=h120" alt="" />
                            <p>Blogger</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href='https://hangouts.google.com/'>
                            <img src="https://lh3.googleusercontent.com/9Got_n_XDxEp29d_DNM9hL8pBcrHwaxjHasHmBZeRN7koFtye9m9aZb6LAnpyGbe8sKjvXUr1bAieve6M1Cf9cOl7londmukWiFWTA=h120" alt="" />
                            <p>Hangouts</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href='https://keep.google.com/'>
                            <img src="https://lh3.googleusercontent.com/9TzWtxtT-9Vrlwa8SXTSKhfl91Ndy4hU-1uLE9-hFsVSHARAOlFEdFExVR4QCegJ-KUBTSlJm3DZY6g31sbVrUT_HfxQvX_7WgLp=h120" alt="" />
                            <p>Keep</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href='https://jamboard.google.com/'>
                            <img src="https://cdn-icons-png.flaticon.com/512/2965/2965289.png" alt="" />
                            <p>Jamboard</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href='https://classroom.google.com/'>
                            <img src="https://lh3.googleusercontent.com/Qvc6rWiGG_a6LNQ7Yx5vMmve_5ku8TG7z4vmWG7VBkbcOQfOSE2BS7eBcD1NUOWTsbs9A_Vh-mJpKtsGtG_0f7sIGFy5LwhdOLRg4w=h120" alt="" />
                            <p>Classroom</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href='https://earth.google.com/'>
                            <img src="https://lh3.googleusercontent.com/HWgUyUNqdsifoczBOT-DYy-hV_ldW-cwWkz3tvlY0eQysaY1ra4D1bkfE-0BVFUlk5wComQdca8g-fwiPcOhdMHoMjqiiNh2TD2b=h120" alt="" />
                            <p>Earth</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href='https://www.google.co.in/save'>
                            <img src="https://cdn.worldvectorlogo.com/logos/google-collections.svg" alt="" />
                            <p>Collections</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href='https://artsandculture.google.com/'>
                            <img src="https://lh3.googleusercontent.com/yfNHOIqQb-_BbTsGZle4fmncMyM2kTjYQzub_Hucf27LCQPNwJiqiOMr39an6X_yB3gCKVExXGgtYm1morm8jkXY53W8h75Z0nUepg=h120" alt="" />
                            <p>Arts and Culture</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href='https://ads.google.com/'>
                            <img src="https://lh3.googleusercontent.com/mXJcrB99dv3D2R3626qv23yNzcp64hKW1n7cx78DQmybiBB-radVYvRguIs-lfQz1oYh72Oq_5Tk51U6fAqzzJb95vww5cyi79Wk0g=h120" alt="" />
                            <p>Google Ads</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href='https://podcasts.google.com/'>
                            <img src="https://lh3.googleusercontent.com/vnSr97Bu2sI2_h334BHmEn1zTPrtv0hM9MLn3YxkN6JVzmir_VH62GiPIKfwtPBTOQ8xH0XNI40xfPAYbwbJEU-1jG09ovlU0f4S1Q=h120" alt="" />
                            <p>Podcasts</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href='https://one.google.com/'>
                            <img src="https://lh3.googleusercontent.com/wbRbWxRbQyojtDDUj_ITsoMZNbSAnroic0AYABmbab8qE-sgODk26wLCYUcJrqW11-I50N3GE6iTCY_Sfa7ud4vMa9fig4YdinEa9w=h120" alt="" />
                            <p>Google One</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href='https://www.google.com/travel/'>
                            <img src="https://lh3.googleusercontent.com/QsFLnA2p7QlFCy4Rk-TH0XoaWFilCOzzt8FPO58nI_FXh5wQkjWEMpBKMkJxQJMZio9t6kDMpniv3WrWH7Slxe8BrbMvklg-Ht53iw=h120" alt="" />
                            <p>Travel</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href='https://docs.google.com/forms'>
                            <img src="https://lh3.googleusercontent.com/p5lVJAicHuI6Ra6jtpYimNt53JZQNCcN06a-Q4fUaNVFo3cjVisZMY_UwBTg5fv2MUkrbwbfTw70N9-bbTfejp9S8rUNadIhWiqh=h120" alt="" />
                            <p>Forms</p>
                        </a>
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