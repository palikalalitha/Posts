import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'

import HomeRoute from './routes/HomeRoute'
import SampleRoute from './routes/SampleRoute'
import RemoteTodosRoute from './routes/RemoteTodosRoute'

import stores from './stores'

import {
  HOME_ROUTE_PATH,
  SAMPLE_ROUTE_PATH,
  REMOTE_TODOS_ROUTE_PATH
} from './constants/NavigationConstants'

const App = () => {
  return (
    <Provider {...stores}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path={SAMPLE_ROUTE_PATH}>
            <SampleRoute />
          </Route>
          <Route exact path={REMOTE_TODOS_ROUTE_PATH}>
            <RemoteTodosRoute />
          </Route>
          <Route path={HOME_ROUTE_PATH}>
            <HomeRoute />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
