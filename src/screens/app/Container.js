// @flow

import './main.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropertyCard from '../../components/property-card';
import type { Property } from '../../types/Property';
import type { Fetch } from 'isomorphic-fetch';

class App extends Component {
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

/*
    Connecting to the Redux store:
    http://redux.js.org/docs/basics/UsageWithReact.html#implementing-container-components
*/

const mapStateToProps = ({ apiData }) => ({ data: apiData });

export default connect(mapStateToProps)(App);
