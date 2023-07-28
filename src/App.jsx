import './App.css'
import Home from './pages/Home'
import Data from './Data.json';
import Navbar from './component/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Destination from './pages/Destination';
import DestinationMoon from './component/DestinationMoon';
import DestinationMars from './component/DestinationMars';
import DestinationEuropa from './component/DestinationEuropa';
import DestinationTitan from './component/DestinationTitan';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='destination' element={<Destination />}>
          <Route path='moon' element={<DestinationMoon data = {Data.destinations} />}/>
          <Route path='mars' element={<DestinationMars data = {Data.destinations} />}/>
          <Route path='europa' element={<DestinationEuropa data = {Data.destinations} />}/>
          <Route path='titan' element={<DestinationTitan data = {Data.destinations} />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
