import weddingLogo2 from './weddingLogo2.png';
import './App.css';
import { Link } from 'react-router-dom';


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={weddingLogo2} className="wedding-logo" alt="weddinglogo" height='50%' />
        <Link to="pages/weddingInfo">Come celebrate the marriage of Russell and Grace</Link>
      </header>
    </div>
  );
}