import { withRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_COUNTRY } from '../../services/query/getAllCountry'

import './Home.css'
import IconCountry from '../../components/IconCountry/IconCountry';

function Home({ history }) {
    const [offset, setOffset] = useState(0)
    const { loading, error, data } = useQuery(GET_COUNTRY,
        {
            variables: {
                first: 50,
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
        setOffset(offset - 20)
    }
    const getNext = (e) => {
        e.preventDefault()
        setOffset(offset + 20)
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
                    <div className="home__title-btn">
                        {offset <= 0 ? "" : <button onClick={getPrev}>prev</button>}
                        {offset >= 250-50 ? "" : <button onClick={getNext}>next</button>}
                    </div>
                </div>
                <div className="home__country-grid">
                    {countries}
                </div>

                <div className="home__foot-btn">
                    {offset <= 0 ? "" : <button onClick={getPrev}>prev</button>}
                    {offset >= 250-50 ? "" : <button onClick={getNext}>next</button>}
                </div>
            </div>
        </div>
    )
}

export default withRouter(Home);
