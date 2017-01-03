import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
    render () {
        return (
            <div>
                <div>Welcome to the homepage</div>
                <Link to="/results">Go get some Results</Link>
            </div>
        );
    }
}
