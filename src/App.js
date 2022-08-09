//Libreries
import { Routes, Route } from 'react-router-dom';
//Components
import Listado from './components/Listado';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>  
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/listado' element={<Listado />} /> {/* En path yo le dire CUANDO se cargara el componente. */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
