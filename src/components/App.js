import './main.css';
import React from 'react';
import PropertyCard from './property-card';
import mockData from '../server/mockData.json'

export default () => {
    return (
        <div>
            {mockData.map((property, key) => <PropertyCard key={key} {...property} />)}
        </div>
    );
}
