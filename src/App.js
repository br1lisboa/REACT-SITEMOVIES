//Libreries
import { Routes, Route } from 'react-router-dom';
//Components
import Listado from './components/Listado';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Detalle from './components/Detalle';
import Resultados from './components/Resultados';
//Estilos
import './app.css'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/listado' element={<Listado />} /> {/* En path yo le dire CUANDO se cargara el componente. */}
        <Route path='/detalle' element={<Detalle />} />
        <Route path='/resultado' element={<Resultados />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
