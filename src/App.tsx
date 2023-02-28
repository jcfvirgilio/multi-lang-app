import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './components/Menu/Menu';
import { About } from './pages/About';
import { Home } from './pages/Home';
import './App.css'


function App() {

  return (
    <div className='app-central'>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
