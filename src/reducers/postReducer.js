import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
};

const postReducer = (state = initialState, action) => {
    if (action.type === FETCH_POSTS) {
        return {
            ...state,
            items: action.payload,
        }
    }

    if (action.type === NEW_POST) {
        return {
            ...state,
            item: action.payload,
        }
    }

    return state;
};

export default postReducer;
