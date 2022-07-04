// import './App.css';
import './App.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';
import Kredit from './components/kredit/Kredit';
import Repos from './components/repos/Repos'
import Footer from './components/footer/Footer';

function App() {
  return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Kredit' element={<Kredit />} />
            <Route path='/Repos' element={ <Repos/>}/>
          </Routes>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;
