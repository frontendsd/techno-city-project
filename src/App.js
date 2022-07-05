import './App.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Kredit from './components/kredit/Kredit';
import Repos from './components/repos/Repos'
import Footer from './components/footer/Footer';
import Batafsil from './components/batafsil/Batafsil'
import OurInfo from './components/biz haqimizda/OurInfo';
import Save from './components/save/Save';
import Home from './components/Home';
import BizningMaxsulotlar from './components/bizning_mahsulotlar/BizningMaxsulotlar';
import Buyurtma from './components/buyurtma/Buyurtma';

function App() {
  return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Kredit' element={<Kredit />} />
            <Route path='/Repos' element={<Repos />} />
            <Route path='/Batafsil' element={<Batafsil />} />
            <Route path='/BizHaqimizda' element={<OurInfo />} />
            <Route path='/Save' element={<Save />} />
          <Route path='/BizningMaxsulotlar' element={<BizningMaxsulotlar />} />
          <Route path='/Buyurtma' element={ <Buyurtma/>}/>
          </Routes>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;
