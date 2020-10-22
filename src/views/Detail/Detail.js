import React from 'react'
import { withRouter, useLocation, useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client'
import "./Detail.css"

function Detail({ history }) {
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
    if (error) console.log("Error ", error)
    return (
        <div className="detail">
            <div className="detail-title">
                <div className="detail-back" onClick={() => history.push({
                    pathname: `/`
                })}>
                    back
                </div>
                <span>Details of {name}</span>
            </div>
            <div className="detail__container">
                <div className="detail__left">
                    <img src={flag} width="250px" />
                    <h1>{name}</h1>
                    <h5>id: {id}</h5>
                </div>
                <div className="detail__descr">
                    <div className="detail__descr-item">
                        <b>Native name</b> <span>{data.Country[0].nativeName}</span>
                    </div>
                    <div className="detail__descr-item">
                        <b>Official languages</b> <span>{data.Country[0].officialLanguages.map(val => {
                            return <span key={val.name}>{val.name}</span>
                        })}</span>
                    </div>
                    <div className="detail__descr-item">
                        <b>Demonym</b> <span>{data.Country[0].demonym}</span>
                    </div>
                    <div className="detail__descr-item">
                        <b>Capital</b> <span>{data.Country[0].capital}</span>
                    </div>
                    <div className="detail__descr-item">
                        <b>Regional blocs</b> <span>{data.Country[0].regionalBlocs.map(val => {
                            return <span key={val.name}>{val.name}</span>
                        })}</span>
                    </div>
                    <div className="detail__descr-item">
                        <b>Area</b> <span>{data.Country[0].area + ""}</span>
                    </div>
                    <div className="detail__descr-item">
                        <b>Timezones</b> <span>{data.Country[0].timezones.map(val => {
                            return <span key={val.name}>{val.name}</span>
                        })}</span>
                    </div>
                    <div className="detail__descr-item">
                        <b>Currencies</b> <span>{data.Country[0].currencies.map(val => {
                            return <span key={val.name}>{val.name} ({val.symbol})</span>
                        })}</span>
                    </div>
                    <div className="detail__descr-item">
                        <b>Population</b> <span>{data.Country[0].population} personne{data.Country[0].population < 2 ? "" : "s"}</span>
                    </div>
                    <div className="detail__descr-item">
                        <b>Borders country</b> <span>{data.Country[0].borders.length > 0 ? data.Country[0].borders.map(val => {
                            return <span key={val.name}>{val.name}</span>
                        }) : "none"}</span>
                    </div>
                    <div className="detail__descr-item">
                        <b>Subregion</b> <span>{data.Country[0].subregion.name}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Detail)
