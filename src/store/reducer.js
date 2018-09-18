import * as actionTypes from './actions';

const initialState = {
    test: 'testing',
    pentPattern: [
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false ],
        [false, false, false, false, false, false, false, false, true, true, true, false, false, false, false, false, false, false, false, false ],
        [false, false, false, false, false, false, false, true, true, true, true, true, false, false, false, false, false, false, false, false ],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, true, true, true, true, true, false, false, false, false, false, false, false, false ],
        [false, false, false, false, false, false, false, false, true, true, true, false, false, false, false, false, false, false, false, false ],
        [false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false ],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    ],
    pulsPattern: [
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, true, true, true, false, false, false, true, true, true, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
        [false, false, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, false, false, false ],
        [false, false, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, false, false, false ],
        [false, false, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, false, false, false],
        [false, false, false, false, false, true, true, true, false, false, false, true, true, true, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, true, true, true, false, false, false, true, true, true, false, false, false, false, false, false],
        [false, false, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, false, false, false],
        [false, false, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, false, false, false],
        [false, false, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, false, false, false ],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, true, true, true, false, false, false, true, true, true, false, false, false, false, false, false ],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    ]
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