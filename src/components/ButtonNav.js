import React from 'react'
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

function Button({ classN, offset, getPrev, getNext, totalCountryPage, totalCountry}) {
    return (
        <div className={classN}>
            {offset <= 0 ?
                <IconButton>
                    <ArrowBack color="disabled" />
                </IconButton> :
                <IconButton onClick={getPrev}>
                    <ArrowBack color="primary" />
                </IconButton>}
            <span>{(offset / totalCountryPage) + 1}</span>
            {offset >= (totalCountry - totalCountryPage) ?
                <IconButton>
                    <ArrowForward color="disabled" />
                </IconButton> :
                <IconButton onClick={getNext}>
                    <ArrowForward color="primary"/>
                </IconButton>}
        </div>
    )
}

export default Button
