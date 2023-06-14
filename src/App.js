import './CSS/main.css'
import NavBar from './components/navBar'
import {Redirect, Route, Switch} from 'react-router-dom'
import Skills from './components/pages/skills'
import Contacts from './components/pages/contacts'
import Project from './components/project'
import Footer from './components/footer'

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Switch>
        <Route path='/skills' component={Skills}/>
        <Route path='/contacts' component={Contacts}/>
        <Route path='/:projectId?' component={Project}/>
        <Redirect to="/"/>
      </Switch>
      <Footer/>
    </div>
  )
}

export default App