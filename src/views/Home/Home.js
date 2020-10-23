import { withRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_COUNTRY } from '../../services/query/getAllCountry'

import './Home.css'
import IconCountry from '../../components/IconCountry/IconCountry';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import ButtonNav from '../../components/ButtonNav';

function Home({ history }) {
    const totalCountryPage = 50
    const totalCountry = 250
    const [offset, setOffset] = useState(0)
    const { loading, error, data } = useQuery(GET_COUNTRY,
        {
            variables: {
                first: totalCountryPage,
                offset: offset
            }
        });
    const [countries, setCountries] = useState([])

    useEffect(() => {
        if (data) {
            setCountries(data.Country.map(country => {
                return <IconCountry country={country.name} flag={country.flag.svgFile} idCountry={country._id} history={history} />
            }))
        }

    }, [data])

    const getPrev = (e) => {
        e.preventDefault()
        setOffset(offset - totalCountryPage)
    }
    const getNext = (e) => {
        e.preventDefault()
        setOffset(offset + totalCountryPage)
    }

    if (loading)
        return (
            <div className="home loading">
                <h1>Loading...</h1>
            </div>
        )
    if (error) console.log("Error ", error)
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__title">
                    <h1>Country</h1>
                    <ButtonNav classN="home__title-btn" offset={offset} getNext={getNext} getPrev={getPrev} totalCountryPage={totalCountryPage} totalCountry={totalCountry} />
                </div>
                <div className="home__country-grid">
                    {countries}
                </div>
                <ButtonNav classN="home__foot-btn" offset={offset} getNext={getNext} getPrev={getPrev} totalCountryPage={totalCountryPage} totalCountry={totalCountry} />

            </div>
        </div>
    )
}

export default withRouter(Home);
