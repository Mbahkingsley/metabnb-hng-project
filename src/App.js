import './App.css';
import Home from './pages/Home'
import Card from './components/Card';
import Bottomsection from './components/Bottomsection';
import frame3 from "./images/frame3.png";
import frame4 from "./images/frame4.png";
import frame5 from "./images/frame5.png";
import frame6 from "./images/frame6.png";
import frame7 from "./images/frame7.png";
import frame8 from "./images/frame8.png";
import frame9 from "./images/frame9.png";
import frame10 from "./images/frame10.png";


function App() {
  return (
    <div>
      <Home />
      <div className='d-flex flex-wrap justify-content-center'>
          <Card name={frame10} />
          <Card name={frame3} />
          <Card name={frame4} />
          <Card name={frame5} />
          <Card name={frame6} />
          <Card name={frame7} />
          <Card name={frame8} />
          <Card name={frame9} />
      </div>
      <Bottomsection />
    </div>
  );
}

export default App;
