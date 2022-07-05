import React from 'react'
import './buyurtma.css';
import buyurtmaImg from '../../assets/34.png'
import { Link } from 'react-router-dom';

function Buyurtma() {
  return (
    <div className='buyurtma container'>
        <div className='buyurtma-container'>
          <div className='buyurtma-grid-container grid1'>
          <h1 className='buyurtma-sarlavha'>Sotib olish</h1>
                <form action="">
                  <label className='buyurtma-label-style' htmlFor="manzil">Manzil</label>
                  <input className='buyurtma-input-style' id='manzil' type="text" placeholder='Farg’ona vil. Farg’ona sh. Qomus 00'/>

                  <label className='buyurtma-label-style' htmlFor="ism">Ism va Familiya</label>
                  <input className='buyurtma-input-style' id='ism' type="text" placeholder='FIO'/>
                </form>


                <form action="">
                  <h2 className='tolov-sarlava'>To’lov</h2>

                  <label className='buyurtma-label-style' htmlFor="karta-raqam">Karta raqam</label>
                  <input className='buyurtma-input-style' id='karta-raqam' type="text" />

                  <label className='buyurtma-label-style' htmlFor="sana">Sana</label>
                  <div className='tolash-container'>
                  <input className='plastik-karta' id='sana' type="date" />
                  <button className='tolash-button'>To'lash</button>
                  </div>
                </form>

                <p className='tolash-bottom-text'>*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur vestibulum purus in tincidunt in cursus cum nec. Habitasse sed posuere aliquam id. Leo, imperdiet eu fringilla vehicula sapien, accumsan. Felis, blandit diam, ipsum sit. Justo, malesuada proin et, mattis.</p>
          </div>

          <div className='buyurtma-grid-container grid2'>
            <h2 className='buyurtma-sarlavha buyurtma-sarlavha2'>Buyurtmangiz</h2>
              <div className='buyurtma-img-container'>
              <img className='buyurtma-img' src={buyurtmaImg} alt="" width={700}/>
              </div>
            <div className='buyurtmangiz'>
              <h1 className='buyurtmangiz-sarlavha'>Mahsus furgon</h1>
              <p className='buyurtmangiz-text'>Yuzasi: 6m2</p>
            </div>

            <p className='buyurtmangiz-bottom-text tolash-bottom-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id viverra blandit suspendisse amet leo, dui. Turpis feugiat turpis eget faucibus id sed mattis velit dictum. Diam quam quis urna at viverra lacinia enim massa. Porttitor sit pretium feugiat ultrices morbi luctus egestas sit. Blandit viverra blandit ullamcorper adipiscing posuere hac. </p>

            <div className='buyurtma-bottom-container'>
            <Link to='/Batafsil'>
              <button className='buyurtma-bottom-btn'>Batafsil</button>
            </Link>
              <p className='buyurtma-bottom-text'>Narxi: 33 000 000</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Buyurtma;