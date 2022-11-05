import React from 'react'
import "./Videos.css"
import activePage from '../../compenent/ActivePage/ActivePage'
import { setLoaderspinner } from '../../Redux/action';
import { useDispatch, useSelector } from 'react-redux';
import loaderspinnergif from '../../assets/gif/loaderspinnergif.gif'

function Videos() {

    const { loaderspinner, navbar_searchValur } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [videoData, setVideoData] = React.useState({ items: itemsList });

    React.useEffect(() => {
        activePage("videos__page")
    }, []);

    React.useEffect(() => {

        if (navbar_searchValur !== "") {
            dispatch(setLoaderspinner(true))
            fetch(`https://youtube.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=50&q=${navbar_searchValur}&key=${process.env.REACT_APP_VIDEO_API_KEY}`)
                .then((res) => res.json())
                .then((data) => { return setVideoData(data), dispatch(setLoaderspinner(false)) })
                .catch((err) => console.log(err))
        }
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
                            <button onClick={() => { return document.getElementById("videos__videoPlay").setAttribute("src", `https://www.youtube.com/embed/${data.id.videoId}`), document.getElementById("videos__videosPlayerPart").style.display = "grid" }}>Play Video</button>
                        </div>
                    ) : <p>Video for "{navbar_searchValur}" not found</p>}
                </div>
            }

            <div className='videos__videosPlayerPart' id='videos__videosPlayerPart'>
                <span className='videos__videoscloseRed'>
                    <img onClick={() => { return document.getElementById("videos__videosPlayerPart").style.display = "none", document.getElementById("videos__videoPlay").removeAttribute("src") }} src="https://img.icons8.com/color/344/close-window.png" alt="" />
                </span>
                <iframe id="videos__videoPlay" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

        </div>
    )
}

export default Videos


// <iframe id="myPlayVideo" title="YouTube video player" src=`https://www.youtube.com/embed/${data.id.videoId}` frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


const itemsList = [
    {
        "kind": "youtube#searchResult",
        "etag": "Wdr3AC2eVFDnEZ2-sJb5BfdAUG8",
        "id": {
            "kind": "youtube#video",
            "videoId": "3t5M10gBVCc"
        },
        "snippet": {
            "publishedAt": "2015-08-15T09:41:54Z",
            "channelId": "UCvfH3RaugUbIqY-80iOED4Q",
            "title": "Indian Army : A Life Less Ordinary",
            "description": "Life In the Indian Army is not an ordinary life. It is full of challenges and opportunities and a chance to serve the motherland.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/3t5M10gBVCc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/3t5M10gBVCc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/3t5M10gBVCc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "ADGPI-INDIAN ARMY",
            "liveBroadcastContent": "none",
            "publishTime": "2015-08-15T09:41:54Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "MGvAmNw9KI8rdsAQv0PLdfa281s",
        "id": {
            "kind": "youtube#video",
            "videoId": "nUrF_I84eaw"
        },
        "snippet": {
            "publishedAt": "2021-08-10T15:55:14Z",
            "channelId": "UCPxMZIFE856tbTfdkdjzTSQ",
            "title": "Real STORIES From Special Forces Of The Indian Army ft. Colonel Subin | The Ranveer Show 132",
            "description": "Follow Col. Subin Balakrishnan's Social Media Handles:- Twitter: https://twitter.com/beesubin LinkedIn: ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/nUrF_I84eaw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/nUrF_I84eaw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/nUrF_I84eaw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "BeerBiceps",
            "liveBroadcastContent": "none",
            "publishTime": "2021-08-10T15:55:14Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "w1kAyONjh6epy3EER8VcqgiqS34",
        "id": {
            "kind": "youtube#video",
            "videoId": "rCdCX2TexZY"
        },
        "snippet": {
            "publishedAt": "2022-10-31T14:00:11Z",
            "channelId": "UCsNdeLwEZf86swPD3qJJ7Dw",
            "title": "Indian Army की तैयारी POK पर फतह की बारी | Border Report | India Vs China | India vs Pak",
            "description": "explainer #Madhurendrakumar #IndianArmy # IndPak border #loc Madhurendra kumar, Editor @madhurendra13 बॉर्डर ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/rCdCX2TexZY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/rCdCX2TexZY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/rCdCX2TexZY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "News Nation",
            "liveBroadcastContent": "none",
            "publishTime": "2022-10-31T14:00:11Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "X2EqRLsUy2UB00GHIAFR7htWers",
        "id": {
            "kind": "youtube#video",
            "videoId": "IcWSqVLl06w"
        },
        "snippet": {
            "publishedAt": "2019-08-14T04:30:00Z",
            "channelId": "UCwBlZvRTu3vasTWUE9U5wPw",
            "title": "FEELING PROUD INDIAN ARMY - ARTICLE 370 SPECIAL || Rachit Rojha",
            "description": "DEDICATED TO INDIAN ARMY ARTICLE 370 SPECIAL VIDEO ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/IcWSqVLl06w/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/IcWSqVLl06w/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/IcWSqVLl06w/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Rachit Rojha",
            "liveBroadcastContent": "none",
            "publishTime": "2019-08-14T04:30:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "ldWbSUWgcMnaROs6zNSWd0Jtock",
        "id": {
            "kind": "youtube#video",
            "videoId": "_6MAHIhi2WE"
        },
        "snippet": {
            "publishedAt": "2022-03-08T07:30:05Z",
            "channelId": "UCuyRsHZILrU7ZDIAbGASHdA",
            "title": "&#39;This uniform is my dream&#39; — hear what women officers of Indian Army have to say on Women’s Day",
            "description": "On the occasion of International Women's Day, hear what seven women officers of the Indian Army have to say about their ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/_6MAHIhi2WE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/_6MAHIhi2WE/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/_6MAHIhi2WE/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "ThePrint",
            "liveBroadcastContent": "none",
            "publishTime": "2022-03-08T07:30:05Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "HvCdiRohs1LhK2bFLIBJ-Jq8tYU",
        "id": {
            "kind": "youtube#video",
            "videoId": "j76hz_Vh9fM"
        },
        "snippet": {
            "publishedAt": "2021-08-11T12:12:59Z",
            "channelId": "UC16_PbAgvZWV4E15xsAYTiQ",
            "title": "Neeraj Chopra | We Proud to Indian Army | Happy Independence Day | YouTube Shorts | Short Video",
            "description": "Neeraj Chopra - We Proud to Indian Army - Happy Independence Day #MusicIndiaEntertainment.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/j76hz_Vh9fM/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/j76hz_Vh9fM/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/j76hz_Vh9fM/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Music India Entertainment",
            "liveBroadcastContent": "none",
            "publishTime": "2021-08-11T12:12:59Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "QeL5mxSQQZJNIVHYQhy7-Nu8Csg",
        "id": {
            "kind": "youtube#video",
            "videoId": "EjTUP0w0W5c"
        },
        "snippet": {
            "publishedAt": "2022-03-09T06:20:54Z",
            "channelId": "UC4DLvb5xZ9OLcVM1KC_R97g",
            "title": "Indian army ke liye ek like toh banta hai🇮🇳🥺❤️ #shorts #army",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/EjTUP0w0W5c/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/EjTUP0w0W5c/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/EjTUP0w0W5c/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "unknown boy varun",
            "liveBroadcastContent": "none",
            "publishTime": "2022-03-09T06:20:54Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "4Tv8Dbwkym7SIjVDsgMuIP18cRg",
        "id": {
            "kind": "youtube#video",
            "videoId": "07vxbbSw3jY"
        },
        "snippet": {
            "publishedAt": "2022-02-09T13:15:11Z",
            "channelId": "UCrC8mOqJQpoB7NuIMKIS6rQ",
            "title": "Indian Army JAG 29 Course Recruitment 2022 | Eligibility, Exam Dates, Syllabus | Join Indian Army",
            "description": "Enrol to StudyIQ's Flagship UPSC IAS (Pre + Mains) LIVE Foundation Batch 8. Batch Started on on 14 November'22 | 6:00 PM ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/07vxbbSw3jY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/07vxbbSw3jY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/07vxbbSw3jY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "StudyIQ IAS",
            "liveBroadcastContent": "none",
            "publishTime": "2022-02-09T13:15:11Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "CO3q7n1eDQPy6_EBI2kwEco1MNI",
        "id": {
            "kind": "youtube#video",
            "videoId": "e-mlFTcHglU"
        },
        "snippet": {
            "publishedAt": "2022-10-02T15:01:11Z",
            "channelId": "UCISgnSNwqQ2i8lhCun3KtQg",
            "title": "Sansad TV Special Report: Making of Indian Army Commando | 02 October, 2022",
            "description": "Commando School Belgaum is one of the premier training institutes of the Indian Army. It is here that the advanced lessons in ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/e-mlFTcHglU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/e-mlFTcHglU/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/e-mlFTcHglU/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Sansad TV",
            "liveBroadcastContent": "none",
            "publishTime": "2022-10-02T15:01:11Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "yj5bqnaaYGz1JCCkEXNROOEasUE",
        "id": {
            "kind": "youtube#video",
            "videoId": "aOOmLTV_Oz8"
        },
        "snippet": {
            "publishedAt": "2018-11-02T12:30:00Z",
            "channelId": "UCAkYgW-5XG5uPyaO9PD_I5A",
            "title": "Mountain Survival Training for Indian Army Soldiers | HAWS E1P2 | Veer by Discovery",
            "description": "Watch Indian Army soldiers training for mountain survival skills at a height of 10500 feet. Check out full episodes of Breaking Point ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/aOOmLTV_Oz8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/aOOmLTV_Oz8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/aOOmLTV_Oz8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Veer by Discovery",
            "liveBroadcastContent": "none",
            "publishTime": "2018-11-02T12:30:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "FNPjRiP5i8sGKroFEkxRPY6d9YI",
        "id": {
            "kind": "youtube#video",
            "videoId": "nxWog4lrlDA"
        },
        "snippet": {
            "publishedAt": "2022-07-22T13:43:19Z",
            "channelId": "UCz4a7agVFr1TxU-mpAP8hkw",
            "title": "Why are Gujaratis NOT in the Indian Army? | Problems of Young Indians Ep1",
            "description": "Get real skills to create a remarkable impact. Check Out: https://bit.ly/SCALER_Mohak #SCALER #CREATEIMPACT ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/nxWog4lrlDA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/nxWog4lrlDA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/nxWog4lrlDA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Soch by Mohak Mangal",
            "liveBroadcastContent": "none",
            "publishTime": "2022-07-22T13:43:19Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "fFJwODqg1kCuNVgBXdd9R2nYtJY",
        "id": {
            "kind": "youtube#video",
            "videoId": "r3TqZmKmwW0"
        },
        "snippet": {
            "publishedAt": "2022-06-19T10:00:31Z",
            "channelId": "UCN7B-QD0Qgn2boVH5Q0pOWg",
            "title": "Agnipath Scheme : Indian Army, Navy, Air Force तीनों सेनाओं की Press Conference Live (BBC Hindi)",
            "description": "भारतीय सेना में भर्ती की अग्निपथ योजना के ख़िलाफ़ देश के अलग-अलग ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/r3TqZmKmwW0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/r3TqZmKmwW0/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/r3TqZmKmwW0/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "BBC News Hindi",
            "liveBroadcastContent": "none",
            "publishTime": "2022-06-19T10:00:31Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "S1q3RD8fgZS8O0jkVAn34m1ggWQ",
        "id": {
            "kind": "youtube#video",
            "videoId": "xYvueHK0_zs"
        },
        "snippet": {
            "publishedAt": "2021-01-22T17:28:02Z",
            "channelId": "UCP4JX0XS64fmC_wnITdPuow",
            "title": "shorts |Indian army drawing | painting",
            "description": "indianarmy #drawing.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/xYvueHK0_zs/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/xYvueHK0_zs/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/xYvueHK0_zs/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Aryan verma studios",
            "liveBroadcastContent": "none",
            "publishTime": "2021-01-22T17:28:02Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "Ts7HFkjolWj7SDQbq2mcYThRFXs",
        "id": {
            "kind": "youtube#video",
            "videoId": "KXkJN0-Sx7M"
        },
        "snippet": {
            "publishedAt": "2022-10-22T17:45:09Z",
            "channelId": "UCt4t-jeY85JegMlZ-E5UWtA",
            "title": "Diwali 2022: दिवाली पर आजतक की खास पेशकश | Indian Army Celebrates Diwali | Diwali Celebration",
            "description": "EXCLUSIVE Indian Army Celebrates Diwali: देशभर में दिवाली की धूम है, हर कोई दिवाली ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/KXkJN0-Sx7M/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/KXkJN0-Sx7M/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/KXkJN0-Sx7M/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Aaj Tak",
            "liveBroadcastContent": "none",
            "publishTime": "2022-10-22T17:45:09Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "ioB5cXgworiQZk3psAPkqo7cPVQ",
        "id": {
            "kind": "youtube#video",
            "videoId": "zEywqOt8gMc"
        },
        "snippet": {
            "publishedAt": "2022-06-10T05:30:07Z",
            "channelId": "UCh0Ob3N4miyi773toqSYj-A",
            "title": "The Great Guns | Indian Army",
            "description": "The #MakeInIndia Medium Machine Guns (MMG) and Automatic Grenade Launchers (AGL) strike terror in the heart of the enemy.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/zEywqOt8gMc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/zEywqOt8gMc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/zEywqOt8gMc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "HISTORY TV18",
            "liveBroadcastContent": "none",
            "publishTime": "2022-06-10T05:30:07Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "M6ZarWTM7Hlgq4fAc9pmkXcJ0pE",
        "id": {
            "kind": "youtube#video",
            "videoId": "zaU3o63huGc"
        },
        "snippet": {
            "publishedAt": "2022-09-30T06:52:54Z",
            "channelId": "UCBQGBSgz-FlbQu15-A0_YTg",
            "title": "Indian Army Agniveer//Army Successful Story//Heart touching Army Story //By Little Flower",
            "description": "Hellow friends..Here is a new Indian Army Story video for you ..Hope you enjoy Director and Producer =Kripanath Roy Story and ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/zaU3o63huGc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/zaU3o63huGc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/zaU3o63huGc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Little Flower",
            "liveBroadcastContent": "none",
            "publishTime": "2022-09-30T06:52:54Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "8wID8eyLNas8s0N0004JVnKZLj4",
        "id": {
            "kind": "youtube#video",
            "videoId": "FoykgiUvtiE"
        },
        "snippet": {
            "publishedAt": "2020-09-02T22:20:21Z",
            "channelId": "UC16niRr50-MSBwiO3YDb3RA",
            "title": "Vital role of Indian Army in Second World War highlighted  - BBC News",
            "description": "This week marks the 75th anniversary of the formal end of the Second World War. Mishal Husain looks at her grandfather's role ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/FoykgiUvtiE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/FoykgiUvtiE/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/FoykgiUvtiE/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "BBC News",
            "liveBroadcastContent": "none",
            "publishTime": "2020-09-02T22:20:21Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "jCR-DdC5NDf-OGDjW5AFfc4RF0A",
        "id": {
            "kind": "youtube#video",
            "videoId": "gkrtjnAn1Oc"
        },
        "snippet": {
            "publishedAt": "2022-08-15T08:22:07Z",
            "channelId": "UCNSdjX4ry9fICqeObdZPAZQ",
            "title": "Independence Day with Indian Army",
            "description": "Vlog # 200 This video was made possible with the help of team Zomato. Thank you for your support for this wonderful initiative.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/gkrtjnAn1Oc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/gkrtjnAn1Oc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/gkrtjnAn1Oc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Flying Beast",
            "liveBroadcastContent": "none",
            "publishTime": "2022-08-15T08:22:07Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "EVhkjRVXvcLepf56eGoZdbfjdWg",
        "id": {
            "kind": "youtube#video",
            "videoId": "KDwduuyh2bU"
        },
        "snippet": {
            "publishedAt": "2022-02-23T15:30:40Z",
            "channelId": "UCneyi-aYq4VIBYIAQgWmk_w",
            "title": "Witness Of Terrorism In KASHMIR &amp; Indian Army Life ft. Maj. S. Poonia | The Ranveer Show हिंदी 76",
            "description": "Indian Army Aur Veerta ki Kahaniyan - Major General GD Bakshi Ke Saath - https://youtu.be/rFb-kNiaTuA Maj. Dr. Surendra ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/KDwduuyh2bU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/KDwduuyh2bU/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/KDwduuyh2bU/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Ranveer Allahbadia",
            "liveBroadcastContent": "none",
            "publishTime": "2022-02-23T15:30:40Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "VvmCOhgoTwKZWIxYYV7NqOJcMl8",
        "id": {
            "kind": "youtube#video",
            "videoId": "n96y_PDD5-k"
        },
        "snippet": {
            "publishedAt": "2021-02-13T14:14:56Z",
            "channelId": "UCE6R2gs53yITbtaFUciKUpQ",
            "title": "Tribute to indian army🥺🇮🇳 #army #indianarmy #lokartist #art #artist #drawing #shorts",
            "description": "I salute to the great Indian army Reverse painting by Lokartist(LokeshYadav) ==================================== if ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/n96y_PDD5-k/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/n96y_PDD5-k/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/n96y_PDD5-k/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "LokArtist Lokesh Yadav",
            "liveBroadcastContent": "none",
            "publishTime": "2021-02-13T14:14:56Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "LCK53m_SaONqr4Z4F2_meH6pdWM",
        "id": {
            "kind": "youtube#video",
            "videoId": "nyK8YNFUueI"
        },
        "snippet": {
            "publishedAt": "2022-07-14T04:53:09Z",
            "channelId": "UC1jvizX8dvqbila8WdRtaIg",
            "title": "गरीब भिखारी बना इंडियन आर्मी || Bhikari Bana Indian Army || Dooars Films Vlog",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/nyK8YNFUueI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/nyK8YNFUueI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/nyK8YNFUueI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Dooars Films Vlog",
            "liveBroadcastContent": "none",
            "publishTime": "2022-07-14T04:53:09Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "Rw9TaJACJ8nlYrjpQwd06heCJaM",
        "id": {
            "kind": "youtube#video",
            "videoId": "SEpTl9hlyq8"
        },
        "snippet": {
            "publishedAt": "2019-03-07T04:30:00Z",
            "channelId": "UCFQ9AY7oyEqRS7iVXJLNSmw",
            "title": "SUMIT GOSWAMI - ARMY (GANGWAR 2) | SHANKY GOSWAMI | New Haryanvi Songs Haryanavi | SONOTEK",
            "description": "ARMY (GANGWAR 2) New Most Popular Haryanvi Songs Haryanavi 2019. Starring with SUMIT GOSWAMI , SHANKY GOSWAMI ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/SEpTl9hlyq8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/SEpTl9hlyq8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/SEpTl9hlyq8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Sonotek Music",
            "liveBroadcastContent": "none",
            "publishTime": "2019-03-07T04:30:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "Kz8yKDULzSAYxvAq1yF4VapIKWI",
        "id": {
            "kind": "youtube#video",
            "videoId": "oxbjRSpDDqk"
        },
        "snippet": {
            "publishedAt": "2022-04-01T04:30:53Z",
            "channelId": "UCsdV6CgtfYcaWykzeCgoKMw",
            "title": "Kashmiri Militant Found &amp; Shot By The Indian Army | Short Film Do&#39;nt Miss The End | Kashmir Stories",
            "description": "TheKashmirFiles #ShortFilm #TheShortCuts In one of the search and cordon situations in Pulwama - Kashmir, an Indian army ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/oxbjRSpDDqk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/oxbjRSpDDqk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/oxbjRSpDDqk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "The Short Cuts",
            "liveBroadcastContent": "none",
            "publishTime": "2022-04-01T04:30:53Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "WBLzk7L1Qe_NYw9BRb2sm9Ric_Q",
        "id": {
            "kind": "youtube#video",
            "videoId": "II1rD5ZtRss"
        },
        "snippet": {
            "publishedAt": "2019-07-23T06:41:08Z",
            "channelId": "UCN7B-QD0Qgn2boVH5Q0pOWg",
            "title": "Pakistan Army का वो कैप्टन जिसे Indian Army के कहने पर मिला वीरता सम्मान (BBC Hindi)",
            "description": "युद्ध के मैदान में ऐसे मौके कम आते हैं जब विपक्षी सेना किसी सैनिक की ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/II1rD5ZtRss/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/II1rD5ZtRss/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/II1rD5ZtRss/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "BBC News Hindi",
            "liveBroadcastContent": "none",
            "publishTime": "2019-07-23T06:41:08Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "RAGcYSPbqHw8XWwXzcWohY9119k",
        "id": {
            "kind": "youtube#video",
            "videoId": "eR3lylAnauo"
        },
        "snippet": {
            "publishedAt": "2020-06-12T17:00:12Z",
            "channelId": "UCrC8mOqJQpoB7NuIMKIS6rQ",
            "title": "Caste based REGIMENTS in Indian Army - Know history behind it, Should Army remove such regiments?",
            "description": "Enrol to StudyIQ's Flagship UPSC IAS (Pre + Mains) LIVE Foundation Batch 8. Batch Started on on 14 November'22 | 6:00 PM ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/eR3lylAnauo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/eR3lylAnauo/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/eR3lylAnauo/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "StudyIQ IAS",
            "liveBroadcastContent": "none",
            "publishTime": "2020-06-12T17:00:12Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "NGrsTrOUv6ncUoC7M_aCO2nH-Sw",
        "id": {
            "kind": "youtube#video",
            "videoId": "ovXLPF5cikg"
        },
        "snippet": {
            "publishedAt": "2022-08-13T15:05:36Z",
            "channelId": "UC4WkXgiK6VxAri_R_qmIFvQ",
            "title": "Respect Indian Army 🇮🇳🙏 | Army Story | #shorts #motivational #indianarmy #deshbhakti #inspirational",
            "description": "Hope you like this video and please don't forget to subscribe channel. Follow My Instagram Instagram ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/ovXLPF5cikg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/ovXLPF5cikg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/ovXLPF5cikg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Samayra Narula Official",
            "liveBroadcastContent": "none",
            "publishTime": "2022-08-13T15:05:36Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "TxqzxQIzwyTdXEliz0_MA3rOmGA",
        "id": {
            "kind": "youtube#video",
            "videoId": "TVFJHX2C0SA"
        },
        "snippet": {
            "publishedAt": "2019-10-30T13:45:14Z",
            "channelId": "UCkohb3LG4GCKyK-jSd55Bww",
            "title": "Indian army selection",
            "description": "PLAN B TAMIL INDIAN ARMY PHYSICAL SELECTION IN TAMILNADU, CUDDALORE army selection army selection army ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/TVFJHX2C0SA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/TVFJHX2C0SA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/TVFJHX2C0SA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "PLAN B TAMIL",
            "liveBroadcastContent": "none",
            "publishTime": "2019-10-30T13:45:14Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "e7bVsR1Mjl1bttJPDLyFwjTbcQE",
        "id": {
            "kind": "youtube#video",
            "videoId": "GsSQOi_b2R0"
        },
        "snippet": {
            "publishedAt": "2022-06-15T08:30:08Z",
            "channelId": "UCh0Ob3N4miyi773toqSYj-A",
            "title": "Siachen Warriors | Indian Army",
            "description": "Imagine what it is like to protect the world's highest battlefield. #FIREPOWERDefendingIndia #IndianArmy For more videos, ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/GsSQOi_b2R0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/GsSQOi_b2R0/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/GsSQOi_b2R0/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "HISTORY TV18",
            "liveBroadcastContent": "none",
            "publishTime": "2022-06-15T08:30:08Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "JhvNc1oloJCzbOYadCoUuoiw45Y",
        "id": {
            "kind": "youtube#video",
            "videoId": "Rj_Qqj45PjQ"
        },
        "snippet": {
            "publishedAt": "2021-11-03T15:02:14Z",
            "channelId": "UCRgMIwmmh1-2k5HeTQ2cdkQ",
            "title": "SIACHEN में INDIAN फौजी कैसे रहतें है? | Indian Army Life in Siachen Glaciers",
            "description": "For Binomo Education, Click http://bit.ly/getsetflyFACT and get Rs.65000 for Binomo tutorial. Use DHURRA1 promo code for ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Rj_Qqj45PjQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Rj_Qqj45PjQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Rj_Qqj45PjQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "GetsetflyFACT",
            "liveBroadcastContent": "none",
            "publishTime": "2021-11-03T15:02:14Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "RR6JEDJW13_dkxKbFKJJUo6m05Q",
        "id": {
            "kind": "youtube#video",
            "videoId": "a5AglCjWnis"
        },
        "snippet": {
            "publishedAt": "2020-08-10T05:47:06Z",
            "channelId": "UCPTj9IAFFR8mAiI2-O2H8bg",
            "title": "Feeling Proud Indian Army | Sumit Goswami | Parmish Verma | New Haryanvi Songs Haryanavi 2020",
            "description": "Feeling Proud Indian Army | Sumit Goswami | Parmish Verma | New Haryanvi Songs Haryanavi 2020 feeling proud indian army ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/a5AglCjWnis/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/a5AglCjWnis/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/a5AglCjWnis/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Funi Fugal",
            "liveBroadcastContent": "none",
            "publishTime": "2020-08-10T05:47:06Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "4txomAyzDIS6oZW5SUVlIJlkwgo",
        "id": {
            "kind": "youtube#video",
            "videoId": "J7PfTY1miyI"
        },
        "snippet": {
            "publishedAt": "2020-02-09T15:45:37Z",
            "channelId": "UCIvaYmXn910QMdemBG3v1pQ",
            "title": "Regiment में आज Gorkha Rifles की गौरव गाथा | Indian Army | Zee News",
            "description": "Zee News की नई पेशकश REGIMENT, जानें भारतीय सेना की हर रेजिमेंट की पूरी ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/J7PfTY1miyI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/J7PfTY1miyI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/J7PfTY1miyI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Zee News",
            "liveBroadcastContent": "none",
            "publishTime": "2020-02-09T15:45:37Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "sIqoilTwQSBn1uIRsS0S6FLl068",
        "id": {
            "kind": "youtube#video",
            "videoId": "pU4GtCrgRrs"
        },
        "snippet": {
            "publishedAt": "2020-07-23T12:44:48Z",
            "channelId": "UCnH5fsDRMpuxWZZbP-PmcNw",
            "title": "6 Ways To Become Indian Army Officer Without Written Exams",
            "description": "Download App: https://linktr.ee/ssbcrackexams SSB Coaching: https://bit.ly/SSB-Coaching Join our Telegram Group: ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/pU4GtCrgRrs/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/pU4GtCrgRrs/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/pU4GtCrgRrs/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "SSBCrackExams",
            "liveBroadcastContent": "none",
            "publishTime": "2020-07-23T12:44:48Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "ozwBoV-OVsPNQ3LDYv6jy8Xm120",
        "id": {
            "kind": "youtube#video",
            "videoId": "oPRBRvjJbOg"
        },
        "snippet": {
            "publishedAt": "2022-08-16T14:00:16Z",
            "channelId": "UCIvaYmXn910QMdemBG3v1pQ",
            "title": "LAC पर अचानक भारतीय सैनिकों ने मचाया तहलका, चीन में भगदड़|Indian Army| Rajnath Singh| LAC News",
            "description": "LAC पर अचानक भारतीय सैनिकों ने मचाया तहलका, चीन में भगदड़|Indian Army| Rajnath ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/oPRBRvjJbOg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/oPRBRvjJbOg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/oPRBRvjJbOg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Zee News",
            "liveBroadcastContent": "none",
            "publishTime": "2022-08-16T14:00:16Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "JnNjf89isPg0wEaXXXp9H-uLY9U",
        "id": {
            "kind": "youtube#video",
            "videoId": "rmvP0DQfQmk"
        },
        "snippet": {
            "publishedAt": "2020-07-24T12:54:37Z",
            "channelId": "UC1jvizX8dvqbila8WdRtaIg",
            "title": "Army Successful Story | Dil De Diya Hai Jaan Tumhe Denge | Indian Army Real Story| Dooars Films Vlog",
            "description": "Army Successful Story | Dil De Diya Hai Jaan Tumhe Denge | Indian Army Real Story| Dooars Films Vlog For Business Enquiry- ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/rmvP0DQfQmk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/rmvP0DQfQmk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/rmvP0DQfQmk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Dooars Films Vlog",
            "liveBroadcastContent": "none",
            "publishTime": "2020-07-24T12:54:37Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "UiHYsF4UVbNh-pemYpp33iOXWCg",
        "id": {
            "kind": "youtube#video",
            "videoId": "7Tli1P7G6Tk"
        },
        "snippet": {
            "publishedAt": "2021-12-09T17:54:43Z",
            "channelId": "UCvVEcGPPEkn3zSdc-rniGMg",
            "title": "Feeling Proud Indian Army || Family Fitness #shorts",
            "description": "Follow Us On Instagram for Live Updates: Kritika Malik - https://instagram.com/kritika_malik_9 Payal Malik ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/7Tli1P7G6Tk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/7Tli1P7G6Tk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/7Tli1P7G6Tk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Family Fitness",
            "liveBroadcastContent": "none",
            "publishTime": "2021-12-09T17:54:43Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "mYm1dvHiTgnAV9CoEnKva3b-x_E",
        "id": {
            "kind": "youtube#video",
            "videoId": "iVK1_YGmugw"
        },
        "snippet": {
            "publishedAt": "2020-09-14T15:12:25Z",
            "channelId": "UCnH5fsDRMpuxWZZbP-PmcNw",
            "title": "Officer Ranks In Indian Army | Indian Army Ranks, Insignia And Hierarchy Explained (Hindi)",
            "description": "Download App: https://linktr.ee/ssbcrackexams SSB Coaching: https://bit.ly/SSB-Coaching Join our Telegram Group: ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/iVK1_YGmugw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/iVK1_YGmugw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/iVK1_YGmugw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "SSBCrackExams",
            "liveBroadcastContent": "none",
            "publishTime": "2020-09-14T15:12:25Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "IVX51PpdC7CWntWvzfArwPrPv7k",
        "id": {
            "kind": "youtube#video",
            "videoId": "DXRhsS8Cpk0"
        },
        "snippet": {
            "publishedAt": "2022-08-29T15:38:38Z",
            "channelId": "UCZFMm1mMw0F81Z37aaEzTUA",
            "title": "The Women Of The Indian Army: An NDTV Exclusive",
            "description": "A special show with members of the first batch of women to join the Indian Army in the Corps of Military Police. The women jawans ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/DXRhsS8Cpk0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/DXRhsS8Cpk0/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/DXRhsS8Cpk0/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "NDTV",
            "liveBroadcastContent": "none",
            "publishTime": "2022-08-29T15:38:38Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "m2FjinodtjyLoO3gF06VYhMCXR0",
        "id": {
            "kind": "youtube#video",
            "videoId": "9-7mhobF7RY"
        },
        "snippet": {
            "publishedAt": "2022-01-15T15:00:10Z",
            "channelId": "UCsDTy8jvHcwMvSZf_JGi-FA",
            "title": "Shocking achievements of Indian Army | Indian Army Facts | Abhi and Niyu",
            "description": "Join this channel to get access to perks: https://www.youtube.com/channel/UCsDTy8jvHcwMvSZf_JGi-FA/join In this video, Abhi ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/9-7mhobF7RY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/9-7mhobF7RY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/9-7mhobF7RY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Abhi and Niyu",
            "liveBroadcastContent": "none",
            "publishTime": "2022-01-15T15:00:10Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "RaGvyt73BmaZqdFgFG1W9_4th-o",
        "id": {
            "kind": "youtube#video",
            "videoId": "QxKdIEcqgWw"
        },
        "snippet": {
            "publishedAt": "2017-09-27T17:02:27Z",
            "channelId": "UCQRIKdVEcMTIBaoHLMEN5uA",
            "title": "3 Ways To Join Indian Army After 10+2 As An Officer/Soldier - भारतीय सेना कैसे ज्वाइन करें? (Hindi)",
            "description": "How To Join Indian Army? Here Are 3 Ways To Join Indian Army After 10+2 As An Officer/Soldier. After 10+2, almost every ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/QxKdIEcqgWw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/QxKdIEcqgWw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/QxKdIEcqgWw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Defence Squad",
            "liveBroadcastContent": "none",
            "publishTime": "2017-09-27T17:02:27Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "GXkIbGrpthv77wWOvU_wa0KB-ns",
        "id": {
            "kind": "youtube#video",
            "videoId": "lFx130gtBtg"
        },
        "snippet": {
            "publishedAt": "2022-07-13T14:36:01Z",
            "channelId": "UCCgQaXjsJ6EdFPZeTFQoSyw",
            "title": "Indian Army personnel constructed a new track overnight for devotees visiting the Amarnath shrine.",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/lFx130gtBtg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/lFx130gtBtg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/lFx130gtBtg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Brut India",
            "liveBroadcastContent": "none",
            "publishTime": "2022-07-13T14:36:01Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "S3qJiUjA7XimGn_9GRTkSkqJqYQ",
        "id": {
            "kind": "youtube#video",
            "videoId": "zsG98KbiF-k"
        },
        "snippet": {
            "publishedAt": "2022-06-24T13:09:53Z",
            "channelId": "UCq0Gj5tEf6xwvPTzx0ZxABQ",
            "title": "Indian Army with the Ola S1 Pro ⚡",
            "description": "The Ola S1 Pro along with the Indian Army, cruised through tough terrains, breathtaking valleys a couple of weeks ago and the ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/zsG98KbiF-k/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/zsG98KbiF-k/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/zsG98KbiF-k/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Ola Electric",
            "liveBroadcastContent": "none",
            "publishTime": "2022-06-24T13:09:53Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "SwBsV2YRKeatLSkIAsd2JJ39Zr8",
        "id": {
            "kind": "youtube#video",
            "videoId": "-W0akc4ips4"
        },
        "snippet": {
            "publishedAt": "2021-08-06T08:30:11Z",
            "channelId": "UCeNXscYA8EbUpzb4v4h3P0Q",
            "title": "Indian Army untold story || Independence day special || Krishan yadav",
            "description": "indianarmy #krishan_yadav .................................................................... Director- Dark_ yashh .",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/-W0akc4ips4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/-W0akc4ips4/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/-W0akc4ips4/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Krishan yadav",
            "liveBroadcastContent": "none",
            "publishTime": "2021-08-06T08:30:11Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "lSt8nA12rM9VUqZ1OSwuLjM-OB4",
        "id": {
            "kind": "youtube#video",
            "videoId": "VUV52ycg2ZY"
        },
        "snippet": {
            "publishedAt": "2022-05-28T10:00:27Z",
            "channelId": "UCSKgOW8Pg_eZymYJyJc432g",
            "title": "Indian Army Jobs: 4 साल की नौकरी के बाद सभी सैनिक होंगे रिटायर, सिर्फ 25% की होगी वापसी",
            "description": "IndianArmyJobs #TourofDuty #IndianArmy Indian Army Jobs: देश की सेवा करना हर नागरिक का सपना ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/VUV52ycg2ZY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/VUV52ycg2ZY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/VUV52ycg2ZY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Dainik Jagran - दैनिक जागरण",
            "liveBroadcastContent": "none",
            "publishTime": "2022-05-28T10:00:27Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "kB8IylS3TAjGUWuUu74OO6E2mcw",
        "id": {
            "kind": "youtube#video",
            "videoId": "hL2AJRzWBCo"
        },
        "snippet": {
            "publishedAt": "2022-05-31T10:39:39Z",
            "channelId": "UCVcAmKt8fBEbF8AyzwEkGAQ",
            "title": "Salute to Indian Army #army #shorts",
            "description": "How to draw Indian army drawing | Indian army drawing | easy Indian army drawing with oil pastels for beginners. Plzz subscribe ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/hL2AJRzWBCo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/hL2AJRzWBCo/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/hL2AJRzWBCo/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Poonam love art",
            "liveBroadcastContent": "none",
            "publishTime": "2022-05-31T10:39:39Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "JahtZpyHQ7s37Q2Yn-fmfqJ5Xv0",
        "id": {
            "kind": "youtube#video",
            "videoId": "ul0D92cCd-k"
        },
        "snippet": {
            "publishedAt": "2021-07-13T11:30:32Z",
            "channelId": "UCQRIKdVEcMTIBaoHLMEN5uA",
            "title": "Future Of The Indian Army - How Does The Indian Army Will look Like In 2030?",
            "description": "Here is a video about Future Of the Indian Army - How Will The Indian Army Be In 2030? Indian Army Future | Future Army Of India ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/ul0D92cCd-k/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/ul0D92cCd-k/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/ul0D92cCd-k/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Defence Squad",
            "liveBroadcastContent": "none",
            "publishTime": "2021-07-13T11:30:32Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "eWcVNMAAv0uhg9NkOHCJeOYWUBc",
        "id": {
            "kind": "youtube#video",
            "videoId": "XRQuZfvAHPw"
        },
        "snippet": {
            "publishedAt": "2017-07-25T16:25:30Z",
            "channelId": "UCGYlNGlloLLZiAL3zBgbMgQ",
            "title": "Capt. Raghu Raman |  🇮🇳 5 Life Lessons from the Indian Army Life 🇮🇳 | Josh Talks",
            "description": "Do You Have Big Dreams & Want To Succeed In Life? ⭐ Josh wants to help you achieve these dreams with our brand new ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/XRQuZfvAHPw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/XRQuZfvAHPw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/XRQuZfvAHPw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Josh Talks",
            "liveBroadcastContent": "none",
            "publishTime": "2017-07-25T16:25:30Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "q_eLaAR4Tzb8xu2x3Lc7KT33G3Y",
        "id": {
            "kind": "youtube#video",
            "videoId": "vrPifIZ_0Qg"
        },
        "snippet": {
            "publishedAt": "2022-10-11T09:04:08Z",
            "channelId": "UC6RJ7-PaXg6TIH2BzZfTV7w",
            "title": "After Two Gunshots, Indian Army Dog Zoom Fights Terrorists In J&amp;K | #shorts",
            "description": "Times Now - Times Now News channel examines news with in-depth analysis. We provide much more than the latest news and ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/vrPifIZ_0Qg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/vrPifIZ_0Qg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/vrPifIZ_0Qg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "TIMES NOW",
            "liveBroadcastContent": "none",
            "publishTime": "2022-10-11T09:04:08Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "xRw6L462LGrOoMAyeISAfUd4RNA",
        "id": {
            "kind": "youtube#video",
            "videoId": "vg7IhR3BtuM"
        },
        "snippet": {
            "publishedAt": "2016-10-10T05:21:24Z",
            "channelId": "UCt4t-jeY85JegMlZ-E5UWtA",
            "title": "Indian Army&#39;s Daring Surgical Strikes Against Pakistan",
            "description": "On the moonless night (Sept 26), Operation Surgical Strikes took off after the midnight hour. Follow us: YouTube: ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/vg7IhR3BtuM/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/vg7IhR3BtuM/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/vg7IhR3BtuM/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Aaj Tak",
            "liveBroadcastContent": "none",
            "publishTime": "2016-10-10T05:21:24Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "x2EPx5AkTfjr9h_PDFXcdlqqsts",
        "id": {
            "kind": "youtube#video",
            "videoId": "YDwneCXmPBY"
        },
        "snippet": {
            "publishedAt": "2022-06-14T12:35:46Z",
            "channelId": "UCOjgc1p2hJ4GZi6pQQoXWYQ",
            "title": "Agneepath Recruitment: Indian Army में भर्ती होने की नई प्रक्रिया को जानें | वनइंडिया हिंदी । *news",
            "description": "Defense Minister Rajnath Singh announced the Agneepath scheme today in the presence of the chiefs of the three services.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/YDwneCXmPBY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/YDwneCXmPBY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/YDwneCXmPBY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Oneindia Hindi | वनइंडिया हिंदी",
            "liveBroadcastContent": "none",
            "publishTime": "2022-06-14T12:35:46Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "IaQ6LiW3o5MZwemPAPjieIlbESI",
        "id": {
            "kind": "youtube#video",
            "videoId": "I9ymvhRAa94"
        },
        "snippet": {
            "publishedAt": "2022-06-16T02:30:07Z",
            "channelId": "UCN7B-QD0Qgn2boVH5Q0pOWg",
            "title": "Agnipath Scheme : Indian Army में भर्ती की इस नई योजना पर क्यों उठ रहे सवाल? (BBC Hindi)",
            "description": "मंगलवार को केंद्र की नरेंद्र मोदी सरकार ने भारतीय सेना में 'अग्निपथ' ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/I9ymvhRAa94/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/I9ymvhRAa94/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/I9ymvhRAa94/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "BBC News Hindi",
            "liveBroadcastContent": "none",
            "publishTime": "2022-06-16T02:30:07Z"
        }
    }
]