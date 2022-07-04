import React from 'react'
import image from '../../assets/image.png'
import bank from '../../assets/bank.jpg'
import './kredit.css';
import Carusel from '../carusel/Carusel'
import { Link } from 'react-router-dom';


function Kredit() {
  return (
    <div className="container">
      <div className='kredit'>
     <section className='kredit-container container'>
        <div className='kredit-item kredit-item1'>
          <h1 className='kredit-title'>Kredit orqali to’lovni amalga oshiring!</h1>
          <button className='kredit-button'>Biz bilan bog’laning</button>
        </div>
        <div className='kredit-item kredit-item-img'>
            <img className='kredit-img' src={image} alt="" width={900}/>
        </div>
       </section> 

       <section className='qadamlar'>
           <div className='qadamlar-container container'>
                  <h2 className='qadamlar-sarlavha'>1-qadam</h2>
                  <p className='qadamlar-title'>Bank bilan shartnoma tuzing</p>
                  <p className='qadamlar-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel semper sollicitudin purus sit nunc, etiam a metus, nisi. Elementum in at amet amet eu convallis mauris blandit urna. Feugiat ullamcorper tempor viverra est. Aliquet tincidunt neque viverra nulla ac duis malesuada eget etiam. Viverra ultrices nisl laoreet fringilla. Sed suspendisse odio purus lacus, pharetra dapibus. Quis magna porta egestas amet est id justo cursus morbi. Aenean arcu, nulla nunc vitae elementum vel. Elementum turpis pellentesque turpis adipiscing blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel semper sollicitudin purus sit nunc, etiam a metus, nisi. Elementum in at amet amet eu convallis mauris blandit urna. Feugiat ullamcorper tempor viverra est. Aliquet tincidunt neque viverra nulla ac duis malesuada eget etiam. Viverra ultrices nisl laoreet fringilla. Sed suspendisse odio purus lacus, pharetra dapibus. Quis magna porta egestas amet est id justo cursus morbi. Aenean arcu, nulla nunc vitae elementum vel. Elementum turpis pellentesque turpis adipiscing blandit.</p>
            </div>

            <div className='qadamlar-container container'>
                  <h2 className='qadamlar-sarlavha'>1-qadam</h2>
                  <p className='qadamlar-title'>Bank bilan shartnoma tuzing</p>
                  <p className='qadamlar-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel semper sollicitudin purus sit nunc, etiam a metus, nisi. Elementum in at amet amet eu convallis mauris blandit urna. Feugiat ullamcorper tempor viverra est. Aliquet tincidunt neque viverra nulla ac duis malesuada eget etiam. Viverra ultrices nisl laoreet fringilla. Sed suspendisse odio purus lacus, pharetra dapibus. Quis magna porta egestas amet est id justo cursus morbi. Aenean arcu, nulla nunc vitae elementum vel. Elementum turpis pellentesque turpis adipiscing blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel semper sollicitudin purus sit nunc, etiam a metus, nisi. Elementum in at amet amet eu convallis mauris blandit urna. Feugiat ullamcorper tempor viverra est. Aliquet tincidunt neque viverra nulla ac duis malesuada eget etiam. Viverra ultrices nisl laoreet fringilla. Sed suspendisse odio purus lacus, pharetra dapibus. Quis magna porta egestas amet est id justo cursus morbi. Aenean arcu, nulla nunc vitae elementum vel. Elementum turpis pellentesque turpis adipiscing blandit.</p>
            </div>

            <div className='qadamlar-container container'>
                  <h2 className='qadamlar-sarlavha'>1-qadam</h2>
                  <p className='qadamlar-title'>Bank bilan shartnoma tuzing</p>
                  <p className='qadamlar-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel semper sollicitudin purus sit nunc, etiam a metus, nisi. Elementum in at amet amet eu convallis mauris blandit urna. Feugiat ullamcorper tempor viverra est. Aliquet tincidunt neque viverra nulla ac duis malesuada eget etiam. Viverra ultrices nisl laoreet fringilla. Sed suspendisse odio purus lacus, pharetra dapibus. Quis magna porta egestas amet est id justo cursus morbi. Aenean arcu, nulla nunc vitae elementum vel. Elementum turpis pellentesque turpis adipiscing blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel semper sollicitudin purus sit nunc, etiam a metus, nisi. Elementum in at amet amet eu convallis mauris blandit urna. Feugiat ullamcorper tempor viverra est. Aliquet tincidunt neque viverra nulla ac duis malesuada eget etiam. Viverra ultrices nisl laoreet fringilla. Sed suspendisse odio purus lacus, pharetra dapibus. Quis magna porta egestas amet est id justo cursus morbi. Aenean arcu, nulla nunc vitae elementum vel. Elementum turpis pellentesque turpis adipiscing blandit.</p>
            </div>
        </section>

      {/* KARUSEL */}
      <Carusel/>
      {/* KARUSEL */}

      <div className='qadamlar-container container'>
                  <p className='qadamlar-title qadamlar-title-style' >Asl narxi 33 000 00 uzs</p>
                  <p className='qadamlar-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel semper sollicitudin purus sit nunc, etiam a metus, nisi. Elementum in at amet amet eu convallis mauris blandit urna. Feugiat ullamcorper tempor viverra est. Aliquet tincidunt neque viverra nulla ac duis malesuada eget etiam. Viverra ultrices nisl laoreet fringilla. Sed suspendisse odio purus lacus, pharetra dapibus. Quis magna porta egestas amet est id justo cursus morbi. Aenean arcu, nulla nunc vitae elementum vel. Elementum turpis pellentesque turpis adipiscing blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel semper sollicitudin purus sit nunc, etiam a metus, nisi. Elementum in at amet amet eu convallis mauris blandit urna. Feugiat ullamcorper tempor viverra est. Aliquet tincidunt neque viverra nulla ac duis malesuada eget etiam. Viverra ultrices nisl laoreet fringilla. Sed suspendisse odio purus lacus, pharetra dapibus. Quis magna porta egestas amet est id justo cursus morbi. Aenean arcu, nulla nunc vitae elementum vel. Elementum turpis pellentesque turpis adipiscing blandit.</p>
            </div>


            <div className='boglanish'>
                <div className='boglanish-container container'>
                <h1 className='boglanish-sarlavha'>Biz bilan bog’lanish uchun</h1>

                <div>
                  <form className='boglanish-form' action="">
                    <div className='boglanish-form-container'>
                      <input className='boglanish-input-style boglanish-input-style1' type="text" placeholder='Ism va Familiya'/>
                      <input className='boglanish-input-style boglanish-input-style2' type="text" placeholder='Telefon raqam'/>
                    </div>


                    <div className='boglanish-form-container'>
                      <input className='boglanish-input-style boglanish-input-style1' type="text" placeholder='Yashash manzili'/>
                      <button className='boglanish-form-button'>Buyurtma berish</button>
                    </div>
                  </form>
                </div>
                </div>
            </div>

            <div className='hamkorlar'>
              <h1 className='hamkorlar-sarlavha'>Bizning hamkorlarimiz</h1>
              <div className='hamkorlar-container'>
               <Link to="/" className='hamkorlar-link'><img src={bank} alt="" width={230}/></Link>
                <Link to="/" className='hamkorlar-link'><img src={bank} alt="" width={230}/></Link>
                <Link to="/" className='hamkorlar-link'><img src={bank} alt="" width={230}/></Link>
              </div>
            </div>
    </div>
    </div>
  )
}

export default Kredit;