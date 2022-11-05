import React from 'react'
import "./News.css"
import GoMasaiLogo from "../../assets/images/gomasai.png";
import activePage from '../../compenent/ActivePage/ActivePage'
import { useDispatch, useSelector } from 'react-redux';
import { setLoaderspinner } from '../../Redux/action';
import loaderspinnergif from '../../assets/gif/loaderspinnergif.gif'

function News() {

    const { loaderspinner } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [queryForFilter, setQueryForFilter] = React.useState("");
    const [fromDateForFilter, setFromDateForFilter] = React.useState("");
    const [toDateForFilter, setToDateForFilter] = React.useState("");
    const [categoryForFilter, setCategoryForFilter] = React.useState("");
    const [countryForFilter, setCountryForFilter] = React.useState("");
    const [showsingledata, setShowsingledata] = React.useState(0);

    // const [pageNumber, setpageNumber] = React.useState(1);
    const [imageData, setImageData] = React.useState({ articles: articlesDataLidt });

    React.useEffect(() => {
        activePage("news__page")
    }, []);

    let news_searchShowFormFlag = true;

    const news_searchShowForm = () => {
        if (news_searchShowFormFlag) {
            document.getElementById("news__searchPart").style.left = "5%"
            news_searchShowFormFlag = false
        } else {
            document.getElementById("news__searchPart").style.left = "105%"
            news_searchShowFormFlag = true
        }
    }

    const searchNewsData = async () => {
        try {
            dispatch(setLoaderspinner(true))

            let url = `https://gnews.io/api/v4/search?&token=${process.env.REACT_APP_NEWS_API_KEY}&nullable=title,description,content`;

            if (queryForFilter !== "") {
                url += "&q=" + queryForFilter
            } else {
                url += "&q=all"
            }
            if (fromDateForFilter !== "") {
                url += "&from=" + fromDateForFilter
            }
            if (toDateForFilter !== "") {
                url += "&to=" + toDateForFilter
            }
            if (categoryForFilter !== "") {
                url += "&topic=" + categoryForFilter
            }
            if (countryForFilter !== "") {
                url += "&country=" + countryForFilter
            } else {
                url += "&country=in"
            }

            let res = await fetch(url);
            let data = await res.json();
            setImageData(data);

        } catch (error) {
            console.log(error)
        }
        dispatch(setLoaderspinner(false))
        document.getElementById("news__searchPart").style.left = "105%"
    }


    return (
        <div className='news__page'>
            <div id='news__searchPart' className='news__searchPart'>
                <div className='news__searchForm' >

                    <label htmlFor="" id="ShowErrorMessage">QUERY</label>
                    <input type="text" value={queryForFilter} onChange={(e) => setQueryForFilter(e.target.value)} />

                    <label htmlFor="">FROM</label>
                    <input type="date" value={fromDateForFilter} onChange={(e) => setFromDateForFilter(e.target.value)} />

                    <label htmlFor="">TO</label>
                    <input type="date" value={toDateForFilter} onChange={(e) => setToDateForFilter(e.target.value)} />

                    <label htmlFor="">CATEGORY</label>
                    <select name="" value={categoryForFilter} onChange={(e) => setCategoryForFilter(e.target.value)}>
                        <option value="">All</option>
                        <option value="sport">Sport</option>
                        <option value="tech">Technology</option>
                        <option value="world">World</option>
                        <option value="finance">Finance</option>
                        <option value="politics">Politics</option>
                        <option value="business">Business</option>
                        <option value="economics">Economics</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="beauty">Beauty</option>
                        <option value="travel">Travel</option>
                        <option value="music">Music</option>
                        <option value="food">Food</option>
                        <option value="science">Science</option>
                        <option value="gaming">Gaming</option>
                        <option value="energy">Energy</option>
                    </select>

                    <label htmlFor="">COUNTRY</label>
                    <select name="" value={countryForFilter} onChange={(e) => setCountryForFilter(e.target.value)}>
                        <option value="">All</option>
                        <option value="in">India</option>
                        <option value="au">Australia</option>
                        <option value="br">Brazil</option>
                        <option value="ca">Canada</option>
                        <option value="ch">Switzerland</option>
                        <option value="cn">China</option>
                        <option value="de">Germany</option>
                        <option value="eg">Egypt</option>
                        <option value="es">Spain</option>
                        <option value="fr">France</option>
                        <option value="gb">United Kingdom</option>
                        <option value="gr">Greece</option>
                        <option value="hk">Hong Kong</option>
                        <option value="ie">Ireland</option>
                        <option value="il">Israel</option>
                        <option value="it">Italy</option>
                        <option value="jp">Japan</option>
                        <option value="nl">Netherlands</option>
                        <option value="no">Norway</option>
                        <option value="pe">Peru</option>
                        <option value="ph">Philippines</option>
                        <option value="pk">Pakistan</option>
                        <option value="pt">Portugal</option>
                        <option value="ro">Romania</option>
                        <option value="ru">Russian Federation</option>
                        <option value="se">Sweden</option>
                        <option value="sg">Singapore</option>
                        <option value="tw">Taiwan, Province of China</option>
                        <option value="ua">Ukraine</option>
                        <option value="us">United States</option>
                    </select>
                    <input type="submit" defaultValue="SUBMIT" onClick={searchNewsData} />
                </div>
                <div className='news__searchIcon'>
                    <svg onClick={() => news_searchShowForm()} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="122.879px" height="119.799px" viewBox="0 0 122.879 119.799" space="preserve"><g><path d="M49.988,0h0.016v0.007C63.803,0.011,76.298,5.608,85.34,14.652c9.027,9.031,14.619,21.515,14.628,35.303h0.007v0.033v0.04 h-0.007c-0.005,5.557-0.917,10.905-2.594,15.892c-0.281,0.837-0.575,1.641-0.877,2.409v0.007c-1.446,3.66-3.315,7.12-5.547,10.307 l29.082,26.139l0.018,0.016l0.157,0.146l0.011,0.011c1.642,1.563,2.536,3.656,2.649,5.78c0.11,2.1-0.543,4.248-1.979,5.971 l-0.011,0.016l-0.175,0.203l-0.035,0.035l-0.146,0.16l-0.016,0.021c-1.565,1.642-3.654,2.534-5.78,2.646 c-2.097,0.111-4.247-0.54-5.971-1.978l-0.015-0.011l-0.204-0.175l-0.029-0.024L78.761,90.865c-0.88,0.62-1.778,1.209-2.687,1.765 c-1.233,0.755-2.51,1.466-3.813,2.115c-6.699,3.342-14.269,5.222-22.272,5.222v0.007h-0.016v-0.007 c-13.799-0.004-26.296-5.601-35.338-14.645C5.605,76.291,0.016,63.805,0.007,50.021H0v-0.033v-0.016h0.007 c0.004-13.799,5.601-26.296,14.645-35.338C23.683,5.608,36.167,0.016,49.955,0.007V0H49.988L49.988,0z M50.004,11.21v0.007h-0.016 h-0.033V11.21c-10.686,0.007-20.372,4.35-27.384,11.359C15.56,29.578,11.213,39.274,11.21,49.973h0.007v0.016v0.033H11.21 c0.007,10.686,4.347,20.367,11.359,27.381c7.009,7.012,16.705,11.359,27.403,11.361v-0.007h0.016h0.033v0.007 c10.686-0.007,20.368-4.348,27.382-11.359c7.011-7.009,11.358-16.702,11.36-27.4h-0.006v-0.016v-0.033h0.006 c-0.006-10.686-4.35-20.372-11.358-27.384C70.396,15.56,60.703,11.213,50.004,11.21L50.004,11.21z" /></g></svg>
                </div>
            </div>

            <div className='news__newsDataShow'>
                <h1 style={{ textAlign: "center", margin: "15px 0" }}>Top {imageData.articles.length} News</h1>
                {
                    loaderspinner ? loaderspinnergif : (imageData.articles.length >= 1 ? <div className='news__newsData'>
                        {
                            imageData.articles.map((data, ind) => <div key={data.publishedAt} className='news__newsItem'>
                                <div className='news__newsItemImage'>
                                    <img src={data.image || GoMasaiLogo} alt={data.title} />
                                </div>
                                <div className='news__newsItemInfo'>
                                    <span>{data.title}</span>
                                    <span>{data.publishedAt}</span>
                                    <span><span>{data.source.name || "Go Masai"}</span><span onClick={() => (setShowsingledata(ind), document.getElementById("news__newsfullData").style.display = "grid")}>Read more...</span></span>
                                </div>


                            </div>)
                        }
                    </div> : (<p>Image for "{queryForFilter}" not found</p>))
                }
                <div className='news__newsfullData' id='news__newsfullData'>
                    <span className='news__closeRed'>
                        <img onClick={() => document.getElementById("news__newsfullData").style.display = "none"} src="https://img.icons8.com/color/344/close-window.png" alt="" />
                    </span>

                    <div className='news__newsfullIteamData'>
                        <img src={imageData.articles[showsingledata].image} alt={imageData.articles[showsingledata].title} />
                        <p>{imageData.articles[showsingledata].title}</p>
                        <p>{imageData.articles[showsingledata].content}</p>
                        <p>{imageData.articles[showsingledata].description}</p>

                        <p>
                            <a href={imageData.articles[showsingledata].url} rel="noreferrer" target="_blank">Read more...</a>
                            <span>{imageData.articles[showsingledata].publishedAt}</span>
                            <a href={imageData.articles[showsingledata].source.url} rel="noreferrer" target="_blank">{imageData.articles[showsingledata].source.name}</a>
                        </p>

                    </div>
                </div>
            </div>

            {/* <div className='news__imagePagination'>

                <button disabled={pageNumber <= 1 ? true : false} onClick={() => { return setpageNumber(pageNumber - 1), searchNewsData() }}> &#8612;</button>
                <span>{pageNumber}</span>

                <button disabled={Math.floor(imageData.totalArticles / 10) < pageNumber ? true : false} onClick={() => { return setpageNumber(pageNumber + 1), searchNewsData() }}> &#8614;</button>
            </div> */}
        </div>
    )
}

export default News


const articlesDataLidt = [
    {
        "title": "Google to discontinue Street View app next year",
        "description": "Google has announced plans to discontinue its dedicated Street View app on Android next year. According to 9To5Google, the tech giant has prepared a number",
        "content": "Google\nStreet View app\nAndroid\nAdvertisement\nComplimentary Tech Event Discover the future of SaaS in India The 6-part video series will capture the vision of Indian SaaS leaders and highlight the potential for the sector in the decades to come. Regis... [1103 chars]",
        "url": "https://www.businessinsider.in/tech/news/google-to-discontinue-street-view-app-next-year/articleshow/95245351.cms",
        "image": "https://www.businessinsider.in/photo/95245351/google-to-discontinue-street-view-app-next-year.jpg?imgsize=20226",
        "publishedAt": "2022",
        "source": {
            "name": "Business Insider India",
            "url": "https://www.businessinsider.in"
        }
    },
    {
        "title": "Google Welcomes Day of the Dead With Sugar Skulls Doodle",
        "description": "A key symbol of this ancient holiday is the sugar skull, and Google used real sugar in its creation.",
        "content": "Wednesday is Day of the Dead, or Día de Los Muertos, an ancient holiday celebrated in Mexico for centuries that celebrates death as a part of the cycle of life, rather than something to be feared.\nObserved every Nov. 2, the holiday gives the living a... [1528 chars]",
        "url": "https://www.cnet.com/culture/internet/google-welcomes-day-of-the-dead-with-sugar-skulls-doodle/",
        "image": "https://www.cnet.com/a/img/resize/0ab65d259ee39073a9bed6eca8f8d26fb8fd6d10/hub/2022/11/02/38030c60-b077-42f8-bc02-a2a5e644ad6d/google-doodle-day-of-the-dead-2022.jpg?auto=webp&fit=crop&height=630&width=1200",
        "publishedAt": "2022",
        "source": {
            "name": "CNET",
            "url": "https://www.cnet.com"
        }
    },
    {
        "title": "Amazon Has Frozen Headcount at Its Growing Advertising Business",
        "description": "Amazon is the third largest digital advertising platform in the US by revenue, after Google and Meta.",
        "content": "Amazon has frozen headcount at its growing advertising business, Bloomberg reported on Tuesday.\nThis came days after Amazon projected its slowest four-quarter growth ever.\nAmazon is the third-largest digital advertising platform in the US by revenue,... [2749 chars]",
        "url": "https://markets.businessinsider.com/news/stocks/amazon-frozen-headcount-growing-advertising-business-slowing-sales-2022-11",
        "image": "https://i.insider.com/6361d2f5ade71a00193decea?width=1200&format=jpeg",
        "publishedAt": "2022",
        "source": {
            "name": "Business Insider",
            "url": "https://markets.businessinsider.com"
        }
    },
    {
        "title": "Air India Ordered to Refund Cancellation Fee to Passenger During Covid in 2020",
        "description": "While refunding the Rs 1,35,143 ticket price to the passenger Milin Jagdishbhai Parekh, the airlines deducted Rs 44,029 as a 'cancellation fee'",
        "content": "The Second Additional District Consumer Disputes Redressal Commission in Bengaluru has directed Air India to refund Rs 44,029 to a passenger whose flight from Bengaluru to London was canceled due to the COVID-19 lockdown.\nWhile refunding the Rs 1,35,... [1404 chars]",
        "url": "https://www.news18.com/news/auto/air-india-ordered-to-refund-cancellation-fee-to-passenger-during-covid-in-2020-6290491.html",
        "image": "https://images.news18.com/ibnlive/uploads/2022/09/feature-image-11-166736880816x9.jpg",
        "publishedAt": "2022",
        "source": {
            "name": "News18",
            "url": "https://www.news18.com"
        }
    },
    {
        "title": "India Lockdown OTT Release Date: When And Where To Watch Madhur Bhandarkar's Upcoming Film",
        "description": "India Lockdown stars Shweta Basu Prasad, Aahana Kumra, Prateik Babbar, Sai Tamhankar and Prakash Belawadi.",
        "content": "FILMMAKER Madhur Bhandarkar is all set to return with another OTT release 'India Lockdown', which will portray the lives of four different people during the COVID-19 lockdown. The movie stars Shweta Basu Prasad, Aahana Kumra, Prateik Babbar, Sai Tamh... [1613 chars]",
        "url": "https://english.jagran.com/entertainment/india-lockdown-ott-release-date-when-and-where-to-watch-madhur-bhandarkar-upcoming-film-10053200",
        "image": "https://imgeng.jagran.com/images/2022/nov/IndianLockdownReleaseDate1667369026384.jpg",
        "publishedAt": "2022",
        "source": {
            "name": "Jagran English",
            "url": "https://english.jagran.com"
        }
    },
    {
        "title": "New India focusing on bold reforms, big infra & best talent: PM Modi",
        "description": "Delivering inaugural address at the three-day Global Investors' Meet, 'Invest Karnataka 2022', via video conferencing, he said at this time of global economic uncertainty, the whole world is confident that the Indian economy's fundamentals are strong.",
        "content": "New India is focusing on bold reforms, big infrastructure, and best talent, Prime Minister Narendra Modi said on Wednesday.\nDelivering inaugural address at the three-day Global Investors’ Meet, ‘Invest Karnataka 2022′, via video conferencing, he said... [981 chars]",
        "url": "https://indianexpress.com/article/cities/bangalore/new-india-focusing-on-bold-reforms-big-infra-best-talent-pm-modi-8244181/",
        "image": "https://images.indianexpress.com/2022/11/modi-3.jpg",
        "publishedAt": "2022",
        "source": {
            "name": "The Indian Express",
            "url": "https://indianexpress.com"
        }
    }, {
        "title": "The mother of a 13-year-old gymnast: 'Sport does not destroy'",
        "description": "The dream of gymnastics was shattered, at the age of thirteen, against humiliations and mortifications, even public ones. \"As I created you, I destroy you\",",
        "content": "The dream of gymnastics was shattered, at the age of thirteen, against humiliations and mortifications, even public ones. “As I created you, I destroy you”, said his instructor. This is the story told by the mother of a ‘butterfly’ to ChangeTheGame, ... [2047 chars]",
        "url": "https://sparkchronicles.com/the-mother-of-a-13-year-old-gymnast-sport-does-not-destroy-sport-2/",
        "image": "https://www.ansa.it/sito/img/ico/ansa-700x366-precomposed.png",
        "publishedAt": "2022",
        "source": {
            "name": "Spark Chronicles",
            "url": "https://sparkchronicles.com"
        }
    },
    {
        "title": "Why some are saying no to sports betting and its ad dollars",
        "description": "A growing resistance to sponsorship dollars from bookmakers is highlighting a growing tension within Australian sport about the normalisation of wagering.",
        "content": "Australia's most-prominent athletes have spoken up in recent weeks against companies sponsoring their sporting organisations, citing concerns around climate change and racism.\nKey points: The federal government has admitted current requirements for g... [8472 chars]",
        "url": "https://www.abc.net.au/news/2022-11-02/sports-betting-advertising-gambling-wagering-max-rushden/101607084",
        "image": "https://live-production.wcms.abc-cdn.net.au/dea132afa1bf9bf708bec0c905493a83?impolicy=wcms_crop_resize&cropH=1166&cropW=2073&xPos=59&yPos=0&width=862&height=485",
        "publishedAt": "2022",
        "source": {
            "name": "ABC News",
            "url": "https://www.abc.net.au"
        }
    },
    {
        "title": "Hyundai recalls 44,000 SUVs over computer fire risk",
        "description": "The issue affects 2018 Santa Fe Sport models’ anti-lock brake system, which can malfunction, cause an electrical surge and start a fire, even if the engine is turned off.",
        "content": "Hyundai is recalling more than 44,000 vehicles and warning drivers to park them outside because of a fire risk caused by the computer system.\nThe issue affects 2018 Santa Fe Sport models’ anti-lock brake system, which can malfunction, cause an electr... [455 chars]",
        "url": "https://www.nydailynews.com/news/national/ny-hyundai-suv-recall-santa-fe-computer-fire-risk-park-outside-20221102-6r4qpnc43fbz5maitilj2qzgla-story.html",
        "image": "https://www.nydailynews.com/resizer/FFVwkkzVUNJjWLVwKAEFmVoiwQk=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/tronc/UX53NZ7IQFGJHCLRFNSCAQHL2Q.jpg",
        "publishedAt": "2022",
        "source": {
            "name": "New York Daily News",
            "url": "https://www.nydailynews.com"
        }
    },
    {
        "title": "'The worst is behind us': Hong Kong kicks off its finance summit with top global bankers",
        "description": "Hong Kong leader John Lee sought to drum up confidence in the city's future as a global financial hub on Wednesday, as he welcomed some of Wall Street's top executives to its biggest international event in years.",
        "content": "Hong Kong CNN Business —\nHong Kong leader John Lee sought to drum up confidence in the city’s future as a global financial hub on Wednesday, as he welcomed some of Wall Street’s top executives to its biggest international event in years.\nSpeaking at ... [1871 chars]",
        "url": "https://edition.cnn.com/2022/11/02/business/hong-kong-finance-summit-john-lee-intl-hnk/index.html",
        "image": "https://media.cnn.com/api/v1/images/stellar/prod/221102131631-john-lee-summit-110222.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2022",
        "source": {
            "name": "Cable News Network",
            "url": "https://edition.cnn.com"
        }
    },
    {
        "title": "Shah Rukh Khan Birthday: Fans Host a Special Party as the Pathaan Actor Turns 57",
        "description": "Ahead of Shah Rukh Khan's 57th birthday, a few of his fans who came from as far as France and Egypt, held an event to celebrate their favourite star's birthday.",
        "content": "It is not for nothing that superstar Shah Rukh Khan is called the King of Bollywood. Every year on November 2, thousands of people gather outside his bungalow, Mannat, in Bandra to get a glimpse of the actor and wish him a happy birthday. The Pathaan... [2848 chars]",
        "url": "https://www.news18.com/news/movies/shah-rukh-khan-birthday-fans-host-a-special-party-as-the-pathaan-actor-turns-57-6289969.html",
        "image": "https://images.news18.com/ibnlive/uploads/2022/11/srk-fans-166736590816x9.jpg",
        "publishedAt": "2022",
        "source": {
            "name": "News18",
            "url": "https://www.news18.com"
        }
    },
    {
        "title": "Plymouth car meet collecting donations for food bank",
        "description": "Police have been informed about the invite-only event",
        "content": "Get the stories that matter to our community straight to your inbox with our Daily Newsletter\nCar meets often get a bad rep but one Plymouth woman is looking to change that. Charlotte Adams runs two car groups in the city and is teaming up with other... [3319 chars]",
        "url": "https://www.plymouthherald.co.uk/news/plymouth-news/plymouth-car-meet-collecting-donations-7767119",
        "image": "https://i2-prod.plymouthherald.co.uk/incoming/article7772318.ece/ALTERNATES/s1200/0_AE_DCM_01_11_2022_carmeetjpeg.jpg",
        "publishedAt": "2022",
        "source": {
            "name": "Plymouth Live",
            "url": "https://www.plymouthherald.co.uk"
        }
    },
    {
        "title": "Choose Ayurvedic goodness this festive season",
        "description": "The festivals come in October-November, and the indulgence in food and looking at your best increases drastically. Insufficient sleep, oily food, and",
        "content": "The festivals come in October-November, and the indulgence in food and looking at your best increases drastically. Insufficient sleep, oily food, and makeup for hours result in skin problems like pimples and dryness.The best natural way to maintain c... [1220 chars]",
        "url": "https://timesofindia.indiatimes.com/life-style/beauty/choose-ayurvedic-goodness-this-festive-season/articleshow/95235164.cms",
        "image": "https://static.toiimg.com/thumb/msid-95235164,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-88716/95235164.jpg",
        "publishedAt": "2022",
        "source": {
            "name": "Times of India",
            "url": "https://timesofindia.indiatimes.com"
        }
    },
    {
        "title": "The best winter activities to enjoy this holiday season in the Township of Langley",
        "description": "From arts and culture, to live music, food festivals, farm experiences, sporting events, and the largest Christmas event in Canada, you’ll be able to check everything off your winter wishlist this season in the Township of Langley",
        "content": "From arts and culture, to live music, food festivals, farm experiences, sporting events, and the largest Christmas event in Canada, you’ll be able to check everything off your winter wishlist this season in the Township of Langley\nEvery year locals f... [4640 chars]",
        "url": "https://www.vancouverisawesome.com/sponsored/township-of-langley-winter-activities-holiday-season-2022-6032452",
        "image": "https://www.vmcdn.ca/f/files/via/images/sponsored-content-images/tourism-langley-niche-boutique-florals.jpg;w=1200;h=800;mode=crop",
        "publishedAt": "2022",
        "source": {
            "name": "Vancouver Is Awesome",
            "url": "https://www.vancouverisawesome.com"
        }
    },
    {
        "title": "Chandannagar, ‘City of Lights’ Shines for Jagadhatri Puja as Bengal Soaks in Festive Spirit",
        "description": "Celebration through lights is common in festivals across religions but, Chandannagar takes the top spot when it comes to light decorations for a festival",
        "content": "Chin up, Bengalis! Jagadhatri Puja is here to keep your festive spirit alive and how. Chandannagar in West Bengal is famous for the celebration of the festival for its elaborate light decoration on the streets and grand pandals for the goddess, who i... [2373 chars]",
        "url": "https://www.news18.com/news/india/chandannagar-city-of-lights-shines-for-jagadhatri-puja-as-bengal-soaks-in-more-festive-spirit-6287431.html",
        "image": "https://images.news18.com/ibnlive/uploads/2022/11/untitled-design-2022-11-01t191316.632-166731036216x9.jpg",
        "publishedAt": "2022",
        "source": {
            "name": "News18",
            "url": "https://www.news18.com"
        }
    }
]