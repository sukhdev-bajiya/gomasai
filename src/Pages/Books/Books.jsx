import React from 'react'
import './Books.css'
import activePage from '../../Compenent/ActivePage/ActivePage'

function Books() {
    React.useEffect(() => {
        activePage("books__page")
    }, []);
    return (
        <div className='books__page'>Books</div>
    )
}

export default Books