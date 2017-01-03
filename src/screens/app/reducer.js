import { DATA_LOADED, DATA_FETCHING } from './actions';

export default (state = {}, action) => {
    switch (action.type) {
        case DATA_FETCHING: {
            return { ...state, fetchingData: true };
        }

        case DATA_LOADED: {
            const { data } = action;

            return { ...state, data, fetchingData: false };
        }

        default: {
            return state;
        }
    }
};
