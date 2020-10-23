import React from 'react'

function DetailItem({ itemName, data }) {
    return (
        <div className="detail__descr-item">
            <b>{itemName}</b> <span>{data? data: "none"}</span>
        </div>
    )
}

export default DetailItem
