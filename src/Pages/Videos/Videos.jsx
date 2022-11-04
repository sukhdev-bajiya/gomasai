import React from 'react'
import "./Videos.css"
import activePage from '../../compenent/ActivePage/ActivePage'

function Videos() {

    React.useEffect(() => {
        activePage("videos__page")
    }, []);

    return (
        <div className='videos__page'>Videos</div>
    )
}

export default Videos