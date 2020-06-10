import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomeRoute from './routes/HomeRoute'
import SampleRoute from './routes/SampleRoute'

import {
  HOME_ROUTE_PATH,
  SAMPLE_ROUTE_PATH
} from './constants/NavigationConstants'

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path={SAMPLE_ROUTE_PATH}>
          <SampleRoute />
        </Route>
        <Route path={HOME_ROUTE_PATH}>
          <HomeRoute />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
