import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Header from './components/Header';

import "./styles/app.scss";
import "./styles/header.scss";


function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
