import types from 'constants/ActionTypes';

export default function visibilityFilter(state = 'all', action) {
    if (handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action);
    } else {
        return state;
    }
}

const handlers = {
    [types.SET_VISIBILITY_FILTER](state, action) {
        return action.filter;
    }
};
