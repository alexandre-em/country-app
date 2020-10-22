import React from 'react'
import "./IconCountry.css"


function IconCountry({ country, history, flag, idCountry }) {
    return (
        <div className="country__icon"
            onClick={() => history.push({
                pathname: `/country/${idCountry}`,
                state: {
                    name: country,
                    flag: flag
                }
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
