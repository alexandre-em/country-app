import React from 'react'
import "./Header.css"

function Header() {
    // photo by Daniel Leone
    return (
        <div className="header">
            <div className="header__title">
                <h1>Country App</h1>
                <h6>A wiki of all country in the world</h6>
                <div className="header-searchbar">
                    <input type="text"/>
                </div>
            </div>
        </div>
    )
}

export default Header
