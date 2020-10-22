import React from 'react'
import { withRouter, useLocation } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client'

function Detail() {
    const { state } = useLocation();
    const { name, flag } = state

    const GET_DETAILS = gql`
        query GetFlag($name: String!) {
            Country(filter: {
                name: $name
            }) {
                capital,
                area,
                population,
                nativeName
            }
        }
`
    const { loading, error, data } = useQuery(GET_DETAILS, {
        variables: { name: name },
    })
    console.log(flag)

    if (loading) return <p>Loading details...</p>
    if (data) console.log(data.Country) 
    return (
        <div>
            detail de {name}
            <img src={flag} width="100px" />
            {data.Country[0].capital}
            {data.Country[0].area}
            {data.Country[0].population} personnes
            {data.Country[0].nativeName}
        </div>
    )
}

export default withRouter(Detail)
