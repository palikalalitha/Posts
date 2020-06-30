import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { I18nextProvider } from 'react-i18next'

import HomeRoute from './routes/HomeRoute'
import SampleRoute from './routes/SampleRoute'

import stores from './stores'
import { postStores } from './PostAPP/stores/index'
import {
  HOME_ROUTE_PATH,
  SAMPLE_ROUTE_PATH,
  TODOS_ROUTE_PATH
} from './constants/NavigationConstants'

const TodosRoute = lazy(() => import('./routes/TodosRoute'))

import i18n from './i18n'

const App = () => {
  return (
    <Provider {...stores}>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<div />}>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path={SAMPLE_ROUTE_PATH}>
                <SampleRoute />
              </Route>
              <Route exact path={TODOS_ROUTE_PATH}>
                <TodosRoute />
              </Route>
              <Route path={HOME_ROUTE_PATH}>
                <HomeRoute />
              </Route>
            </Switch>
          </Router>
        </Suspense>
      </I18nextProvider>
    </Provider>
  )
}

export default App
