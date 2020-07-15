import postsReducer from './reducers/postsReducer';
import movieReducer from './reducers/MovieReducer';

const ReducerType = {
    POST: 'POST',
    MOVIE: 'MOVIE'
}

const Reducer = (state, action) => {
    switch (action.reducer) {
        case ReducerType.POST:
            return postsReducer.call(null, state, action);

        case ReducerType.MOVIE:
            return movieReducer.call(null, state, action);

        default:
            return state;
    }
};

export { Reducer, ReducerType };