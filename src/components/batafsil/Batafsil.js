import React from 'react'
import './Batafsil.css';
import RejaImg from '../../assets/reja.png'
import RejaImg2 from '../../assets/reja1.png'
import Carusel from '../carusel/Carusel'
import { Link } from 'react-router-dom';


function Batafsil() {
  return (
    <div className='batafsil container'>
        <div className='batafsil-container'> 
        {/* KARUSEL */}
            <Carusel/>
            {/* KARUSEL */}

            <div className='maxsus-furgon'>
                    <h1 className='maxsus-furgon-sarlavha'>Mahsus furgon</h1>
                    <p className='maxsus-furgon-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id viverra blandit suspendisse amet leo, dui. Turpis feugiat turpis eget faucibus id sed mattis velit dictum. Diam quam quis urna at viverra lacinia enim massa. Porttitor sit pretium feugiat ultrices morbi luctus egestas sit. Blandit viverra blandit ullamcorper adipiscing posuere hac. Platea purus senectus nisi, sed nibh id nunc. Quis ultrices enim at imperdiet quis cras justo sed fringilla. Aliquet nisl mormaxsus-furgon-textbi tincidunt bibendum viverra in suscipit. Maecenas tincidunt ornare sed ut .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id viverra blandit suspendisse amet leo, dui. Turpis feugiat turpis eget faucibus id sed mattis velit dictum. Diam quam quis urna at viverra lacinia enim massa. Aliquet nisl morbi tincidunt bibendum viverra in suscipit. Maecenas tincidunt ornare sed ut .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id viverra blandit suspendisse amet leo, dui. Turpis feugiat turpis eget faucibus id sed mattis velit dictum. Diam quam quis urna at viverra lacinia enim massa.
                    </p>
            </div>

            <div className='reja-container'>
                <h1 className='maxsus-furgon-sarlavha'>Mahsus furgon: Rejasi</h1>
               <div className='batafsil-img-container'>
               <img className='batafsil-img' src={RejaImg} alt="" width={1100}/>
               </div>
                <p className='maxsus-furgon-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id viverra blandit suspendisse amet leo, dui. Turpis feugiat turpis eget faucibus id sed mattis velit dictum. Diam quam quis urna at viverra lacinia enim massa. Porttitor sit pretium feugiat ultrices morbi luctus egestas sit. Blandit viverra blandit ullamcorper adipiscing posuere hac. </p>
                    <div className='batafsil-img-container'>
                    <img className='batafsil-img' src={RejaImg2} alt="" width={1100}/>

                    </div>
                    <p className='maxsus-furgon-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id viverra blandit suspendisse amet leo, dui. Turpis feugiat turpis eget faucibus id sed mattis velit dictum. Diam quam quis urna at viverra lacinia enim massa. Porttitor sit pretium feugiat ultrices morbi luctus egestas sit. Blandit viverra blandit ullamcorper adipiscing posuere hac. </p>
            </div>  
      </div>
      <Link to="/Buyurtma">
        <button className="batafsil__btn">Sotib olish</button>
      </Link>
    </div>
  )
}

export default Batafsil;