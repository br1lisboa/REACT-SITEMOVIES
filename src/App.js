import { Routes, Route } from 'react-router-dom';
import Listado from './components/Listado';
import Login from './components/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/listado' element={<Listado />} /> {/* En path yo le dire CUANDO se cargara el componente. */}  
      </Routes>
    </>
  );
}

export default App;
