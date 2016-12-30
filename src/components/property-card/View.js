import React from 'react';

export default ({image, address, type}) => (
    <div>
        <img src={image} />
        <span>{type}</span>
        <p>{address}</p>
    </div>
)