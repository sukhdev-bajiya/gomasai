import React from 'react'
import "./Result.css"
import activePage from '../../Compenent/ActivePage/ActivePage'

function Result() {

    React.useEffect(() => {
        activePage("result__page")
    }, []);

    return (
        <div className='result__page'>Result</div>
    )
}

export default Result