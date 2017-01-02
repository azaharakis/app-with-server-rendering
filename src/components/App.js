// @flow

import './main.css';
import React, { Component } from 'react';
import PropertyCard from './property-card';
import type { Property } from '../types/Property';
import type { Fetch } from 'isomorphic-fetch';

export default class App extends Component {
    props: {
        data: Array<Property>
    }

    static fetchData (): Fetch {
        return fetch('http://localhost:3001/api')
            .then(response => response.json())
            .then(properties => properties);
    }

    renderProperties () {
        return this.props.data.map((property: Property, key) => <PropertyCard key={key} {...property} />)
    }

    render () {
        return (
            <div>
                { this.renderProperties() }
            </div>
        );
    }
}
