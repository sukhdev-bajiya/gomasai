import React from 'react'
import "./News.css"
import GoMasaiLogo from "../../assets/images/gomasai.png";
import activePage from '../../compenent/ActivePage/ActivePage'
import { useDispatch, useSelector } from 'react-redux';
import { setLoaderspinner } from '../../Redux/action';
import loaderspinnergif from '../../assets/gif/loaderspinnergif.gif'
import NewsItemsList from './NewsList'


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
    const [imageData, setImageData] = React.useState({ articles: NewsItemsList() });

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


