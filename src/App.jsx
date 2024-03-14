import './bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import History from './pages/History'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/dash' element={<Dashboard />} />
        <Route path='/history' element={<History />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
