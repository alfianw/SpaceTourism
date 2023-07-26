import './App.css'
import Home from './pages/Home'
import Data from './Data.json';

function App() {
  // const [items, setItems] = useState(Data);
  return (
    <Home items={Data.destinations}/>
  )
}

export default App
