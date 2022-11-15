
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Sobre from './components/sobre/Sobre';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path = "/Sobre" element = {<Sobre />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
