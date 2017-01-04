// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from './loading';

type props = {
    apiData: {
        data: any,
        fetchingData: string
    }
}

export class App extends Component {
    shouldComponentUpdate (nextProps: props) {
        return !nextProps.apiData.fetchingData;
    }

    render () {
        return (
            <div>
                <Loader/>
                { React.cloneElement(this.props.children, { data: this.props.apiData.data }) }
            </div>
        );
    }
}

/*
    Connecting to the Redux store:
    http://redux.js.org/docs/basics/UsageWithReact.html#implementing-container-components
*/

const mapStateToProps = ({ apiData }) => ({ apiData });

export default connect(mapStateToProps)(App);
