import React from 'react'
import "./IconCountry.css"


function IconCountry({ country, history, flag }) {
    return (
        <div className="country__icon"
            onClick={() => history.push({
                pathname: `/country/${country}`
            })}>
            <div className="country__icon-img">
                <img src={flag} />
            </div>
            <div className="country__name">
                <span>{country}</span>
            </div>
        </div>
    )
}

export default IconCountry
