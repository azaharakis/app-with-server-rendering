import React from 'react';
import './main.css';

export default ({image, address, type}) => (
    <div className="property-card">
        <img className="property-card__image" src={image} />
        <div className="property-card__content">
            <span>{type}</span>
            <p className="property-card__address">{address}</p>
        </div>
    </div>
)