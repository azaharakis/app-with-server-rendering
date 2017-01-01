// @flow

import React from 'react';
import './main.css';
import type { Property } from '../../types/Property';

export default ({image, address, type}: Property) => (
    <div className="property-card">
        <img className="property-card__image" src={image} />
        <div className="property-card__content">
            <span>{type}</span>
            <p className="property-card__address">{address}</p>
        </div>
    </div>
)