import { IconButton } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import "./Header.css"

function Header() {
    const history = useHistory()
    const [search, setSearch] = useState("")

    const handleChange = e => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(!search) return

        history.push({
            pathname: `/country/${search.split(' ').map(val => val[0].toUpperCase()+val.slice(1)).join(' ')}` // Mettre la premiere lettre de chaque mot en majuscule
        })
        setSearch("")
    }

    return (
        <div className="header">
            <div className="header__title">
                <h1 onClick={( e => history.push({ pathname: "/" }) )}>Country App</h1>
                <h4>A wiki of all country in the world</h4>
                <div className="header-searchbar">
                    <form onSubmit={ e => handleSubmit(e)}>
                        <IconButton onClick={ e => handleSubmit(e)}>
                            <Search />
                        </IconButton>
                        <input type="text" placeholder="Search a country..." value={search} onChange={e => handleChange(e)}/>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Header
