
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Sobre from './components/sobre/Sobre';
import Parceiros from './components/parceiros/Parceiros';
import Contato from './components/contato/Contato';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Main />}></Route>
          <Route path='/Sobre' element={<Sobre />}></Route>
          <Route path='/Parceiros' element={<Parceiros />}></Route>
          <Route path='/Contato' element={<Contato />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
