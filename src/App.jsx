
import { Routes, Route } from 'react-router-dom'


import Home from './pages/Home.jsx'
import Directorio from './pages/Directorio.jsx'
import DirectorioFuturo from './pages/DirectorioFuturo.jsx'
import Anime from './pages/Anime.jsx'
import Ver from './pages/Ver.jsx'
import Search from './pages/Search.jsx'

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/directorio" element={<Directorio />} />
      <Route path="/directorio/futuro" element={<DirectorioFuturo />} />
      <Route path="/anime/:id" element={<Anime />} />
      <Route path="/ver/:episodio" element={<Ver />} />
      <Route path="/search/:query" element={<Search />} />
    </Routes>
  )
}

export default App
