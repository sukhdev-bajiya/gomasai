import React from 'react'
import "./News.css"
import activePage from '../../compenent/ActivePage/ActivePage'

function News() {
    React.useEffect(() => {
        activePage("news__page")
    }, []);

    return (
        <div className='news__page'>News</div>
    )
}

export default News