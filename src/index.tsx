import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

import rootReducer from './reducers';
import './index.css';

import routes from './routes';

const store = createStore(rootReducer);

ReactDOM.render(
  <Router>
    <Provider store={store} >
      <React.StrictMode>
        <Switch>
          {
            routes.map( (route) => {
              return (
                <Route 
                  key={`${route.route}`}
                  path={`${route.route}`} >
                  { <route.component />}
                </Route>
              );
            })
          }
        </Switch>
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById('root')
);
