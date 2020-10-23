import React from 'react'
import { withRouter, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client'
import "./Detail.css"
import { ArrowBack } from '@material-ui/icons'
import { IconButton } from '@material-ui/core';
import GET_DETAILS from '../../services/query/getDetails'
import DetailItem from '../../components/DetailItem';

function Detail({ history }) {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_DETAILS, {
        variables: { name: id },
    })

    if (loading) return <div className="detail">Loading details...</div>
    if (error) console.log("Error ", error)
    return (
        <div className="detail">
            <div className="detail-title">
                <IconButton onClick={() => history.push({
                    pathname: `/`
                })}>
                    <ArrowBack />
                </IconButton>
                <span>Details of {id}</span>
            </div>
            <div className="detail__container">
                <div className="detail__top">
                    <img src={data.Country[0].flag.svgFile} width="250px" />
                    <h1>{id}</h1>
                    <h5>id: {data.Country[0]._id}</h5>
                </div>
                <div className="detail__descr">
                    <DetailItem itemName={"Native name"} data={data.Country[0].nativeName} />
                    <DetailItem itemName={"Official languages"} data={
                        data.Country[0].officialLanguages.map(val => {
                            return <div className="detail__list-item" key={val.name}>{val.name} </div>
                        })} />
                    <DetailItem itemName={"Demonym"} data={data.Country[0].demonym} />
                    <DetailItem itemName={"Capital"} data={data.Country[0].capital} />
                    <DetailItem itemName={"Regional blocs"} data={ data.Country[0].regionalBlocs?
                        data.Country[0].regionalBlocs.map(val => { 
                            return <div className="detail__list-item" key={val.name}>{val.name}</div>
                        }):"none"} />
                    <DetailItem itemName={"Area"} data={data.Country[0].area + ""} />
                    <DetailItem itemName={"Timezones"} data={
                        data.Country[0].timezones.map(val => {
                            return <div className="detail__list-item" key={val.name}>{val.name}</div>
                        })} />
                    <DetailItem itemName={"Currencies"} data={
                        data.Country[0].currencies.map(val => {
                            return <div className="detail__list-item" key={val.name}>{val.name} ({val.symbol})</div>
                        })} />
                    <DetailItem itemName={"Population"} data={data.Country[0].population + " personne" + (data.Country[0].population < 2 ? "" : "s")} />
                    <DetailItem itemName={"Borders country"} data={
                        data.Country[0].borders.length > 0 ? data.Country[0].borders.map(val => {
                            return <div className="detail__list-item" key={val.name}>{val.name}</div>
                        }) : "none"} />
                    <DetailItem itemName={"Subregion"} data={data.Country[0].subregion.name} />
                </div>
            </div>
        </div>
    )
}

export default withRouter(Detail)
