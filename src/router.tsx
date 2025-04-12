import { Route, Router } from 'preact-iso'
import HomeRoute from '~/routes/home'
import NotFoundRoute from '~/routes/_404'

export default function DefaultRouter() {
  return (
    <Router>
      <Route path="/" component={HomeRoute} />
      <Route default component={NotFoundRoute} />
    </Router>
  )
}
