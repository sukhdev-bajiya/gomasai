import React from 'react'
import activePage from '../../Compenent/ActivePage/ActivePage';
import "./Images.css"
function Images() {
    React.useEffect(() => {
        activePage("images__page")
    }, []);

    return (
        <div className='images__page'>Images</div>
    )
}

export default Images