import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './Components/SearchPage/SearchPage';


function App() {

  return (
    <div className='app'>
      <Router>
        <Header />
        <Switch>
          <Route  exact path='/' component={Home}/>
          <Route  exact path='/search' component={SearchPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;