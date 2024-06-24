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
import Footer from './components/Footer/footer';
import TermsAndConditions from './components/PolicyAndTermsConditions/TermsAndConditions';
import Policy from './components/PolicyAndTermsConditions/Policy';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/housefindings" element={<HouseFindings />} />
            <Route path="/services/mortgages" element={<Mortgages />} />
            <Route path="/services/lettings" element={<Lettings />} />
            <Route path="/services/solicitor" element={<Solicitor />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;