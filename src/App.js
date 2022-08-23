import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Services from './Components/Services'
import Hero from './Components/Hero'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/App.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/services" element={<Services />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
