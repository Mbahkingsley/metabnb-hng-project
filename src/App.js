import './App.css';
import Home from './pages/Home'
import Card from './components/Card';
import frame3 from "./images/frame3.png";


function App() {
  return (
    <div>
      <Home />
      <Card name={frame3} />

    </div>
  );
}

export default App;
