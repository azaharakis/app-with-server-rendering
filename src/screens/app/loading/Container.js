// @flow

import React from 'react';
import { connect } from 'react-redux';
import View from './View';

export const Container = ({fetchingData}: {fetchingData: boolean}) => {
    return fetchingData ? <View /> : null;
};

const mapStateToProps = ({apiData}) => {
    return { fetchingData: apiData.fetchingData }
};

export default connect(mapStateToProps)(Container);
