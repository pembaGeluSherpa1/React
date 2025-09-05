import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddUsers from './Users/AddUsers'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/addUser' element={<AddUsers/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
