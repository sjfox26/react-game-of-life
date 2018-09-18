import * as actionTypes from './actions';

const initialState = {
    test: 'testing'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PRINT_TEST:
            return {
                ...state,
                test: 'hello from the reducer'
            };
        default:
            return state;
    }
};

export default reducer;