import React from 'react'
import "./Videos.css"
import activePage from '../../compenent/ActivePage/ActivePage'
import { setLoaderspinner } from '../../Redux/action';
import { useDispatch, useSelector } from 'react-redux';
import loaderspinnergif from '../../assets/gif/loaderspinnergif.gif'
import itemsList from './VideoList'

function Videos() {

    const { loaderspinner, navbar_searchValur } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [videoData, setVideoData] = React.useState({ items: itemsList() });

    React.useEffect(() => {
        activePage("videos__page")
    }, []);

    React.useEffect(() => {

        if (navbar_searchValur !== "") {
            dispatch(setLoaderspinner(true))
            fetch(`https://youtube.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=50&q=${navbar_searchValur}&key=${process.env.REACT_APP_VIDEO_API_KEY}`)
                .then((res) => res.json())
                .then((data) => { return (setVideoData(data), dispatch(setLoaderspinner(false))) })
                .catch((err) => console.log(err))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navbar_searchValur]);

    return (
        <div className='videos__page'>
            {
                loaderspinner ? <span className='data__loader'><img className='data__loaderspinner' src={loaderspinnergif} alt="" /></span> : <div className='videos__videosDataPart'>
                    {videoData.items.length > 0 ? videoData.items.map(data =>
                        <div key={data.snippet.publishTime} className='videos__videosItem'>
                            <div className='videos__videosItemImage'>
                                <img src={data.snippet.thumbnails.high.url} alt="" />
                            </div>
                            <div className='videos__videosItemInfo'>
                                <p>{data.snippet.title}</p>
                                <p>{data.snippet.channelTitle}</p>
                                {/* <p>{data.snippet.publishTime}</p> */}
                            </div>
                            <button onClick={() => { return (document.getElementById("videos__videoPlay").setAttribute("src", `https://www.youtube.com/embed/${data.id.videoId}`), document.getElementById("videos__videosPlayerPart").style.display = "grid") }}>Play Video</button>
                        </div>
                    ) : <p>Video for "{navbar_searchValur}" not found</p>}
                </div>
            }

            <div className='videos__videosPlayerPart' id='videos__videosPlayerPart'>
                <span className='videos__videoscloseRed'>
                    <img onClick={() => { return (document.getElementById("videos__videosPlayerPart").style.display = "none", document.getElementById("videos__videoPlay").removeAttribute("src")) }} src="https://img.icons8.com/color/344/close-window.png" alt="" />
                </span>
                <iframe id="videos__videoPlay" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

        </div>
    )
}

export default Videos


// <iframe id="myPlayVideo" title="YouTube video player" src=`https://www.youtube.com/embed/${data.id.videoId}` frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


