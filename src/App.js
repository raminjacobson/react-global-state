import React from 'react';
import Store from './store/Store';
import Blog from './components/Blog/Blog';
import MovieList from './components/Movie/MovieList';


const App = () => {
  return (
    <Store>
      <Blog />
      <MovieList />
    </Store>
  );
};

export default App;
