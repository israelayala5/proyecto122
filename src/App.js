import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Inicio from './paginas/Inicio';
import Creditos from './paginas/Creditos';
import Pje0 from './paginas/Pje0';
import Pje1 from './paginas/Pje1';
import Pje2 from './paginas/Pje2';
import Pje3 from './paginas/Pje3';
import Pje4 from './paginas/Pje4';
import Pje5 from './paginas/Pje5';
import Pje6 from './paginas/Pje6';
import Pje7 from './paginas/Pje7';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/creditos" element={<Creditos />} />
        <Route path="/pje0" element={<Pje0 />} />
        <Route path="/pje1" element={<Pje1 />} />
        <Route path="/pje2" element={<Pje2 />} />
        <Route path="/pje3" element={<Pje3 />} />
        <Route path="/pje4" element={<Pje4 />} />
        <Route path="/pje5" element={<Pje5 />} />
        <Route path="/pje6" element={<Pje6 />} />
        <Route path="/pje7" element={<Pje7 />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
