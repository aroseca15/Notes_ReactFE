import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/NotesPage';
// import Login from './pages/Login';
// const Route = require("react-router-dom").Route;
// const Router = require("react-router-dom").BrowserRouter;
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path='/login'><Login /></Route> */}
          <Route path='/notes'><Notes /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
