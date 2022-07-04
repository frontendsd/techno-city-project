import React from 'react'
import Vector from '../../assets/vector.svg'
import Kubic from '../../assets/kubic.svg'
import Bars from '../../assets/bars.svg'
import './Repos.css'
import Image from '../../assets/image-d.png'
import Vector2 from '../../assets/vector-2.svg'

const Repos = () => {
  return (
    <main className='results'>
       <div className="container results-body">
            
           <div className="results-content">
            <h2 className='results-title'>
              Natijalar
            </h2>
            <div className="results-icons">
              <img src={Bars} alt="Bars-icon" className="results-icons_item" />
              <img src={Kubic} alt="kubic-icons" className="results-icons_item" />
              <img src={Vector} alt="" className="results-icons_item" />
            </div>
           </div>

            <div className="results-card">
              <div className="results-card-item">
                  <img src={Image} alt="" className='card-image'/>
                  <div className="results-card-body">
                    <div className="results-card-content">
                      <h4 className='results-content-title'>Furgon    6m² </h4>
                      <h4 className='results-content-value'>26 000 000 uzs</h4>
                    </div>
                    <p className='results-card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus quam nec et at nibh gravida cras. Mollis sed facilisis tellus mauris, quis sed odio. Pharetra eget cras semper eget. Arcu lacus nunc arcu duis urna ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus quam nec et at nibh gravida cras......</p>
                    <img src={Vector2} alt="" className='vector' />
                  </div>
              </div>
            </div>
            
    
       </div>
    </main>
  )
}

export default Repos