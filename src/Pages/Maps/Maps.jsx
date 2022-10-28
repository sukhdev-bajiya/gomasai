import React from 'react'
import "./Maps.css"
import activePage from '../../Compenent/ActivePage/ActivePage'

function Maps() {

    React.useEffect(() => {
        activePage("maps__page")
    }, []);

    return (
        <div className='maps__page'>Maps</div>
    )
}

export default Maps