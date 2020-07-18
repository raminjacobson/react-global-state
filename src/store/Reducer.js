import postsReducer from './reducers/postsReducer';
import movieReducer from './reducers/MovieReducer';

const ReducerType = {
    POST: 'POST',
    MOVIE: 'MOVIE'
}

const reducerMap = {
    [ReducerType.MOVIE]: movieReducer,
    [ReducerType.POST]: postsReducer,
}

const Reducer = (state, action) => {
    const reducer = reducerMap[action.reducer];
    if (reducer) {
        return reducer.call(null, state, action);
    } else {
        return state;
    }
    // switch (action.reducer) {
    //     case ReducerType.POST:
    //         return postsReducer.call(null, state, action);

    //     case ReducerType.MOVIE:
    //         return movieReducer.call(null, state, action);

    //     default:
    //         return state;
    // }
};

export { Reducer, ReducerType };