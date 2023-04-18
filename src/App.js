import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services';

import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
