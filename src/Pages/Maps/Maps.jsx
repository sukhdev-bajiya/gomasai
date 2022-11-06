import React from 'react'
import "./Maps.css"
import activePage from '../../compenent/ActivePage/ActivePage'
import { useSelector } from 'react-redux';

function Maps() {
    const { navbar_searchValur } = useSelector((state) => state);

    React.useEffect(() => {
        activePage("maps__page")
    }, []);

    return (
        <div className='maps__page'>
            <iframe title="Go Masai Map" src={`https://maps.google.com/maps?q=${navbar_searchValur}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameBorder="0"></iframe>
            <span>Welcome to Go Masai Map, Search any location... </span>
        </div>
    )
}

export default Maps