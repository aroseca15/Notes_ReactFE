import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes';
import NotesGreet from './pages/NotesGreet';
import Header from './components/Header';
import Login from './pages/Login';
import DetailsCard from './pages/DetailsCard';
// const Route = require("react-router-dom").Route;
// const Router = require("react-router-dom").BrowserRouter;
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path='/' exact component={NotesGreet}/> 
          <Route path='/login' component= {Login} />
          <Route path='/notes' component={Notes} />
          <Route path='/notes/:id' component={DetailsCard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
