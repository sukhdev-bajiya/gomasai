import React from 'react'
import "./Result.css"
import activePage from '../../compenent/ActivePage/ActivePage'
import { useDispatch, useSelector } from 'react-redux';
import { setLoaderspinner } from '../../Redux/action';
import loaderspinnergif from '../../assets/gif/loaderspinnergif.gif'

function Result() {
    const { loaderspinner } = useSelector((state) => state);
    const dispatch = useDispatch();

    React.useEffect(() => {
        activePage("result__page")


        dispatch(setLoaderspinner(true))

        setTimeout(() => {
            dispatch(setLoaderspinner(false))
        }, 5000);


    }, []);

    return (
        <div className='result__page'>

            {loaderspinner ? <span className='data__loader'>
                <img className='data__loaderspinner' src={loaderspinnergif} alt="" />
            </span> : ""}

        </div>
    )
}

export default Result