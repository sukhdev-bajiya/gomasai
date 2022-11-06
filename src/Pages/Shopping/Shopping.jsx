import React from 'react'
import './Shopping.css'
import activePage from '../../compenent/ActivePage/ActivePage'


function Shopping() {


    React.useEffect(() => {
        activePage("shopping__page")
    }, []);

    return (
        <div className='shopping__page'>Shopping</div>
    )
}

export default Shopping