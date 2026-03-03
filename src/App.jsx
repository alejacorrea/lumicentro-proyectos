import { Routes, Route } from 'react-router-dom'
import Proyectos from './pages/Proyectos.jsx'
import ProyectosInsignia from './pages/ProyectosInsignia.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Proyectos />} />
      <Route path="/proyectos-insignia" element={<ProyectosInsignia />} />
    </Routes>
  )
}