import { withRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_COUNTRY } from '../../services/query/getAllCountry'

import './Home.css'
import IconCountry from '../../components/IconCountry';

function Home({ history }) {
    const { loading, error, data } = useQuery(GET_COUNTRY);
    const [countries, setCountries] = useState([])

    useEffect(() => {
        if (data) {
            setCountries(data.Country.map(country => {
                return <IconCountry country={country.name} flag={country.flag.svgFile} history={history} />
            }))
        }

    }, [data])

    if (loading) return <div>loading</div>
    if (error) console.log("erreur ", error)
    if (data)
        console.log(data.Country[0].flag.svgFile)
    return (
        <div>
            <h1>Pays</h1>
            <div className="country__grid">
                {countries}
            </div>
        </div>
    )
}

export default withRouter(Home);
