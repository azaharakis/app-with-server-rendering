// @flow

import './main.css';
import React from 'react';
import PropertyCard from './property-card';
import mockData from '../server/mockData.json'
import type { Property } from '../types/Property';

export default () => {
    return (
        <div>
            {mockData.map((property: Property, key) => <PropertyCard key={key} {...property} />)}
        </div>
    );
}
