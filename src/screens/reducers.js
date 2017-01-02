/*
    http://redux.js.org/docs/recipes/reducers/UsingCombineReducers.html
*/
import { combineReducers } from 'redux'
import { reducer as apiData } from './app';

export default combineReducers({ apiData });
