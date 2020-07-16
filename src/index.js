import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Store from './store/Store';
import './index.css';
import App from './App';
import MovieList from './components/Movie/MovieList';
import PostList from './components/Post/PostList';
import * as serviceWorker from './serviceWorker';

const routing = (
  <React.StrictMode>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
        <Store>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/movies" component={MovieList} />
            <Route path="/posts" component={PostList} />
            {/* <Route component={Notfound} /> */}
          </Switch>
        </Store>
      </div>
    </Router>
  </React.StrictMode>
)
ReactDOM.render(routing, document.getElementById('root'))


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
