import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/header';
import Home from './components/Home/home';
import About from './components/About/about';
import HouseFindings from './components/Services/HouseFindings/housefindings';
import Lettings from './components/Services/Lettings/lettings';
import Mortgages from './components/Services/Mortgages/mortgages';
import Solicitor from './components/Services/Solicitor/solicitor';
import Contact from './components/Contact/contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services/housefindings" component={HouseFindings} />
        <Route path="/services/mortgages" component={Mortgages} />
        <Route path="/services/lettings" component={Lettings} />
        <Route path="/services/solicitor" component={Solicitor} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;