import React from 'react'
import activePage from '../../Compenent/ActivePage/ActivePage';
import "./Images.css"
import { useDispatch, useSelector } from 'react-redux';
import { setLoaderspinner } from '../../Redux/action';
import loaderspinnergif from '../../assets/gif/loaderspinnergif.gif'

function Images() {

    const { loaderspinner, navbar_searchValur } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [pageNumber, setpageNumber] = React.useState(1);
    const [imageData, setImageData] = React.useState({ photos: [] });

    React.useEffect(() => {
        activePage("images__page")
    }, []);

    React.useEffect(() => {

        if (navbar_searchValur !== "") {
            dispatch(setLoaderspinner(true))

            fetch(`https://api.pexels.com/v1/search?query=${navbar_searchValur}&per_page=28&page=${pageNumber}`, {
                method: "GET",
                headers: { "Authorization": "563492ad6f9170000100000192f32b8405cf4c8892a5a9150ee529f9" }
            })
                .then((res) => res.json())
                .then((data) => { return setImageData(data), dispatch(setLoaderspinner(false)) })
                .catch((err) => console.log(err))
        }
        console.log(imageData)
    }, [navbar_searchValur, pageNumber]);

    return (
        <div className='images__page'>

            {loaderspinner ? <span className='data__loader'>
                <img className='data__loaderspinner' src={loaderspinnergif} alt="" />
            </span> :
                <div className='images__imageDataPart'>
                    <div className='images__imageData'>
                        {imageData.photos.map((data) => <img key={data.id} src={data.src.original} alt={data.alt} />)}
                    </div>

                    <div className='images__imagePagination'>
                        {/* PREVIOUS PAGE */}
                        <button disabled={pageNumber <= 1 ? true : false} onClick={() => setpageNumber(pageNumber - 1)}> &#8612;</button>
                        <span>{pageNumber}</span>
                        {/* NEXT PAGE */}
                        <button disabled={Math.floor(imageData.total_results / 28) < pageNumber ? true : false} onClick={() => setpageNumber(pageNumber + 1)}> &#8614;</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Images