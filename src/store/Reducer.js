import postsReducer from './reducers/postsReducer';

const ReducerType = {
    POST: 'POST'
}

const Reducer = (state, action) => {
    switch (action.reducer) {
        case ReducerType.POST:
            return postsReducer.call(null, state, action);

        default:
            return state;
    }
};

export { Reducer, ReducerType };