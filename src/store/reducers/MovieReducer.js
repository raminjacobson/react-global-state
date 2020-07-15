export default function movieReducer(state, action) {
    switch (action.type) {
        case 'SET_MOVIES':
            const movies = action.payload;
            return {
                ...state,
                movies: movies
            };

        case 'ADD_MOVIE':
            const movie = action.payload;
            return {
                ...state,
                movies: state.movies.concat(movie)
            };
        case 'REMOVE_MOVIE':
            const title = action.payload;
            return {
                ...state,
                movies: state.movies.filter(movie => movie.title !== title)
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
