import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';

import { Header } from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';

import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/ScrollUp/ScrollUp';


function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <AboutUs/>
      <Experience/>
      <Services/>
      <Portfolio/>
      
      <ContactUs/>
      <Footer/>
      {/* <ScrollUp/> */}

    </div>
  );
}

export default App;
