import React from 'react';
import Blog from './components/Blog/Blog';
import Store from './store/Store';

const App = () => {
  return (
    <Store>
      <Blog />
    </Store>
  );
};

export default App;
