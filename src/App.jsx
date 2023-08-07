import './App.css'
import Home from './pages/Home'
import Data from './Data.json';
import Navbar from './component/navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Destination from './pages/Destination';
import DestinationMoon from './component/DestinationMoon';
import DestinationMars from './component/DestinationMars';
import DestinationEuropa from './component/DestinationEuropa';
import DestinationTitan from './component/DestinationTitan';
import Crew from './pages/Crew';
import ContentCrew1 from './component/ContentCrew1';
import ContentCrew2 from './component/ContentCrew2';
import ContentCrew4 from './component/ContentCrew4';
import ContentCrew3 from './component/ContentCrew3';
import Tecnology from './pages/Tecnology';
import ComponentTecnology1 from './component/ComponentTecnology1';
import ComponentTecnology2 from './component/ConponentTecnology2';
import ComponentTecnology3 from './component/ComponentTecnology3';




function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='destination' element={<Destination />}>
          <Route path='moon' element={<DestinationMoon data = {Data.destinations} />}/>
          <Route path='mars' element={<DestinationMars data = {Data.destinations} />}/>
          <Route path='europa' element={<DestinationEuropa data = {Data.destinations} />}/>
          <Route path='titan' element={<DestinationTitan data = {Data.destinations} />}/>
        </Route>
        <Route path='crew' element={<Crew/>}>
          <Route path='crew1' element={<ContentCrew1 data={Data.crew}/>}/>
          <Route path='crew2' element={<ContentCrew2 data={Data.crew}/>}/>
          <Route path='crew3' element={<ContentCrew3 data={Data.crew}/>}/>
          <Route path='crew4' element={<ContentCrew4 data={Data.crew}/>}/>
        </Route>
        <Route path='tecnology' element={<Tecnology/>}>
          <Route path='vehicle' element={<ComponentTecnology1 data={Data.technology} />}/>
          <Route path='port' element={<ComponentTecnology2 data={Data.technology}/>}/>
          <Route path='capsul' element={<ComponentTecnology3 data={Data.technology}/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
