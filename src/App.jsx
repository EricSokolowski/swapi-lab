import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipPage from './pages/StarshipPage/StarshipPage'

function App() {
  return (
  <>
    <div class='app'>
      <NavBar />
      <Routes>
        <Route path='/' element={<StarshipList />} />
        <Route path='/starship' element={<StarshipPage />} />
      </Routes>
    </div>
  </>
  )
}

export default App;
