import './App.css';
import LandingPage from './pages/LandingPage/LandingPage.js'
import NotFound from './pages/404/NotFound.js'
import Dashboard from './pages/Dashboard/Dashboard.js'
import { UserContextProvider } from './context/UserContext.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <UserContextProvider>
      <Router>
          <div className="App">

              <Switch>

                  <Route exact path='/' component={LandingPage}/>

                  <Route path='/dashboard' component={Dashboard}/>

                  <Route path='*' component={NotFound}/>

              </Switch>

          </div>
      </Router>
    </UserContextProvider>
  )
}

export default App
