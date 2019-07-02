import React, {Suspense, lazy} from 'react';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import reducers from 'reducers';
import Spinner from 'containers/Spinner';
import DefaultLayout from 'layouts/DefaultLayout';
import './App.scss';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
const SpinnerController = lazy(() => import('containers/SpinnerController'));
const List = lazy(() => import('containers/List'));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Spinner/>}>
          <Switch>
            <Route exact path={'/'}>
              <DefaultLayout>
                <SpinnerController/>
                <Spinner/>
              </DefaultLayout>
            </Route>
            <Route exact path={'/list'}>
              <DefaultLayout>
                <List/>
              </DefaultLayout>
            </Route>
            <Route path={'*'}>
              <Redirect to={'/'}/>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
