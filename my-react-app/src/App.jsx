import { useState } from 'react'
import './App.css'
import backgroundImage from './assets/backgroundimg.jpg';

function App() {
  const [count, setCount] = useState(0)

  const App = () => {
    return (
      <div>
        <Navbar />
        <div className="landing-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="content">
            <h1>Welcome to Our Website</h1>
            <p>Your journey starts here</p>
            <button className="join-us">Join Us</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default App;
  