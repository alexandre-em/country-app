import React from 'react'


function IconCountry({ country, history, flag }) {
    return (
        <div>
            <img src={flag} width="100px" onClick={() => history.push({
                pathname: '/country',
                state: {
                    name: country,
                    flag: flag
                }
            })} />
            <span>{country}</span>
        </div>
    )
}

export default IconCountry
