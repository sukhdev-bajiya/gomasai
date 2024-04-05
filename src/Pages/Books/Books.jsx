import React from 'react'
import './Books.css'
import activePage from '../../compenent/ActivePage/ActivePage'
import BooksList from './BooksList.js'


function Books() {
    const [booksListData, setBooksListData] = React.useState([])
    const [pageNumber, setpageNumber] = React.useState(0)

    React.useEffect(() => {
        activePage("books__page")
        setBooksListData(BooksList())
    }, []);



    return (
        <div className='books__page'>
            <div className="books__booksListPart">
                {booksListData.map((data, index) => {
                    return <div key={index} className='books__bookItem'>
                        <div className='books__bookItemImage'>
                            <img src={data.product_img_url} alt="" />
                        </div>
                        {/* <div className='books__bookItemInfo'>
                            <p>{data.product_name}</p>
                        </div> */}
                    </div>
                })}
            </div>
            <div className='books__bookPagination'>
                {/* PREVIOUS PAGE */}
                <button disabled={pageNumber <= 0 ? true : false} onClick={() => setpageNumber(pageNumber - 1)}> &#8612;</button>
                <span>{pageNumber + 1}</span>
                {/* NEXT PAGE */}
                <button disabled={Math.floor(booksListData / 60) < pageNumber ? true : false} onClick={() => setpageNumber(pageNumber + 1)}> &#8614;</button>
            </div>
        </div>
    )
}

export default Books