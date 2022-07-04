import React from 'react'
import './Main.css'
import img1 from '../../assets/dokon1.png'
import Carusel from '../carusel/Carusel';

function Main() {
  return (
    <div className='container'>
      <main className="main">
          <div className="main__content">
              <h1 className="main__head">Techno City</h1>
              <h4 className="main__title">Xush Kelibsiz!</h4>
              <p className="main__info">Techno City kompaniyasi o'z xaridorlariga yengil konstruksiyadan yasalgan turli xil do'konlarni taklif qiladi. Bizning kompaniya yordamida siz bo'lajak biznesingiz uchun qulay sharoitga ega va zamon standartlariga mos do'kon egasi bo'lishingiz mumkin. Xoziroq o'z do'koningizni xarid qiling va bisnesingizga ega bo'ling.</p>
          <button className="main__btn">
            Buyurtma berish
              </button>
          </div>
          <img src={img1} alt="" className='main__img' />
      </main>
      <div className="carusel">
        <Carusel/>
      </div>
    </div>
  )
}

export default Main