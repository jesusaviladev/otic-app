import './App.css';
import LandingPage from './pages/LandingPage/LandingPage.js'
import NotFound from './pages/404/NotFound.js'
import Dashboard from './pages/Dashboard/Dashboard.js'
import { UserContextProvider } from './context/UserContext.js'
import { Switch, Route } from 'wouter'

function App() {
  return (
      <UserContextProvider>
      
          <div className="App">

              <Switch>

                  <Route path='/' component={LandingPage}/>

                  <Route path='/dashboard' component={Dashboard}/>

                  <Route path='/:rest' component={NotFound}/>

              </Switch>

          </div>

      </UserContextProvider>
  )
}

export default App
