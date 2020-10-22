import React from 'react'
import { withRouter, useLocation, useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client'
import "./Detail.css"

function Detail() {
    const { state } = useLocation();
    const { name, flag } = state;
    const { id } = useParams();

    const GET_DETAILS = gql`
        query GetFlag($name: String!) {
            Country(filter: {
                name: $name
            }) {
                capital,
                area,
                population,
                nativeName,

                demonym,
                timezones{
                    name
                },
                borders{
                    name
                },
                subregion{
                    name
                },
                officialLanguages{
                    name
                },
                currencies{
                    name,
                    symbol
                },
                regionalBlocs{
                    name
                }
            }
        }
`
    const { loading, error, data } = useQuery(GET_DETAILS, {
        variables: { name: name },
    })

    if (loading) return <p>Loading details...</p>
    if (data) console.log(data.Country)
    return (
        <div className="detail">
            <div className="detail-title">
                <span>back</span>
                <span>detail de {name}</span>
            </div>
            <div className="detail__container">
                <div className="detail__left">
                    <img src={flag} width="250px" />
                    <h1>{name}</h1>
                    <h5>id: {id}</h5>
                </div>
                <div className="detail__descr">
                    <p> <b>Capital</b>: {data.Country[0].capital}</p>
                    <p> <b>Area</b>: {data.Country[0].area+""}</p>
                    <p> <b>Population</b>: {data.Country[0].population} personne{data.Country[0].population > 1 ? "" : "s"}</p>
                    <p> <b>Native name</b>: {data.Country[0].nativeName}</p>
                    <p> <b>Demonym</b>: {data.Country[0].demonym} </p>
                    <p> <b>Borders country</b>: {data.Country[0].borders} </p>
                    <p> <b>Subregion</b>: {data.Country[0].subregion} </p>
                    <p> <b>Regional blocs</b>: {data.Country[0].regionalBlocs} </p>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Detail)
