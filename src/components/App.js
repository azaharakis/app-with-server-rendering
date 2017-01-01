// @flow

import './main.css';
import React, { Component } from 'react';
import PropertyCard from './property-card';
import type { Property } from '../types/Property';

export default class App extends Component {
    state: {
        loading: boolean,
        properties: Array<Property>
    }

    constructor () {
        super();
        this.state = {
            loading: true,
            properties: []
        }
    }

    componentDidMount () {
        fetch('http://localhost:3001/api')
            .then(response => response.json())
            .then(properties => {
                this.setState({
                    loading: false,
                    properties
                })
            });
    }

    renderProperties () {
        return this.state.properties.map((property: Property, key) => <PropertyCard key={key} {...property} />)
    }

    render () {
        return (
            <div>
                { this.state.loading ? 'Loading...' : this.renderProperties() }
            </div>
        );
    }
}
