import { Routes, Route } from 'react-router-dom'
import Marcas from "./pages/Marcas.jsx";
import Proyectos from './pages/Proyectos.jsx'
import ProyectosInsignia from './pages/ProyectosInsignia.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/marcas" element={<Marcas />} />
      <Route path="/" element={<Proyectos />} />
      <Route path="/proyectos-insignia" element={<ProyectosInsignia />} />
    </Routes>
  )
}