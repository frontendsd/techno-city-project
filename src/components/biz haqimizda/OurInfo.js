import React from "react";
import OurImage from "../../assets/bizhaqimizda.png";
import img from "../../assets/dokon2.png";
import save from "../../assets/save.svg";
import parametr from "../../assets/tool.svg";
import ourLogo from "../../assets/certificate.svg";
import ourFree from "../../assets/free.svg";

import { Link } from "react-router-dom";
import "./OurInfo.css";


const OurInfo = () => {
  return (
    <div className="outSection">
      <div className="ourSection-container container">
        <div className="ourSection-content">
          <h2 className="ourSection-content-title">Techno City</h2>
          <p className="ourSection-content-text">zamon bilan ham nafas</p>
          <img src={OurImage} alt="" className="ourSection-image"/>
        </div>
        <div className="ourInfo-resume">
          <div className="ourInfo-resume_item">
            <h3 className="ourInfo-resume-title">Biz haqimizda</h3>
            <p className="ourInfo-resume-text">
              Techno City kompaniyasi o'z xaridorlariga yengil konstruksiyadan
              yasalgan turli xil do'konlarimizni taklif qiladi. Bizning
              kompaniya yordamida siz bo'lajak biznesingiz uchun qulay sharoitga
              ega va zamon standartlariga mos do'kon egasi bo'lishingiz mumkin.
              Bizning maxsulotimizni boshqalardan ustun tomoni uni xamyonbob
              narxi, yuqori sifatda tayorlanganligi va istalgan vaqtda istalgan
              joyga ko'chirib o'takaza olish imkoniyatiga ega. Undan tashqari
              xaridorlarimizga do'konlarimizni yetkazib berish xizmati, 3yillik
              kafolat va 1yillik bepul serviz xizmatini taklif etadi. Xoziroq
              o'z do'koningizni xarid qiling va bisnesingizga ega bo'ling
            </p>
          </div>
          <div className="ourInfo-resume_item">
            <h3 className="ourInfo-resume-title">Mahsulotlarimiz haqida</h3>
            <p className="ourInfo-resume-text">
              Techno City kompaniyasi o'z xaridorlariga yengil konstruksiyadan
              yasalgan turli xil do'konlarimizni taklif qiladi. Bizning
              kompaniya yordamida siz bo'lajak biznesingiz uchun qulay sharoitga
              ega va zamon standartlariga mos do'kon egasi bo'lishingiz mumkin.
              Bizning maxsulotimizni boshqalardan ustun tomoni uni xamyonbob
              narxi, yuqori sifatda tayorlanganligi va istalgan vaqtda istalgan
              joyga ko'chirib o'takaza olish imkoniyatiga ega. Undan tashqari
              xaridorlarimizga do'konlarimizni yetkazib berish xizmati, 3yillik
              kafolat va 1yillik bepul serviz xizmatini taklif etadi. Xoziroq
              o'z do'koningizni xarid qiling va bisnesingizga ega bo'ling
            </p>
          </div>
        </div>
{/* our info present */}
        <div className="ourInfo-present">
          <div className="ourInfo-present-content">
            <h3 className="ourInfo-resume-title">Mahsulotlarimiz turlari</h3>
            <p className="ourInfo-present-Text">
              Techno City kompaniyasi o'z xaridorlariga yengil konstruksiyadan
              yasalgan turli xil ko'chma do'konlarini taklif qiladi.
            </p>
          </div>
          <ul className="ourInfo-present-card">
            <li className="components__item">
              <img src={img} alt={img} className="components__img" />
              <div className="components__info">
                <div className="components__info-text">
                  <h3 className="components__name">Pizza do'koni 6m²</h3>
                  <h3 className="components__currency">33 000 000 uzs</h3>
                </div>
                <img src={save} alt={save} />
              </div>
              <Link to="/Batafsil">
                <button className="components__btn">Batafsil</button>
              </Link>
            </li>
            <li className="components__item">
              <img src={img} alt={img} className="components__img" />
              <div className="components__info">
                <div className="components__info-text">
                  <h3 className="components__name">Pizza do'koni 6m²</h3>
                  <h3 className="components__currency">33 000 000 uzs</h3>
                </div>
                <img src={save} alt={save} />
              </div>
              <Link to="/Batafsil">
                <button className="components__btn">Batafsil</button>
              </Link>
            </li>
            <li className="components__item">
              <img src={img} alt={img} className="components__img" />
              <div className="components__info">
                <div className="components__info-text">
                  <h3 className="components__name">Pizza do'koni 6m²</h3>
                  <h3 className="components__currency">33 000 000 uzs</h3>
                </div>
                <img src={save} alt={save} />
              </div>
              <Link to="/Batafsil">
                <button className="components__btn">Batafsil</button>
              </Link>
            </li>
            <li className="components__item">
              <img src={img} alt={img} className="components__img" />
              <div className="components__info">
                <div className="components__info-text">
                  <h3 className="components__name">Pizza do'koni 6m²</h3>
                  <h3 className="components__currency">33 000 000 uzs</h3>
                </div>
                <img src={save} alt={save} />
              </div>
              <Link to="/Batafsil">
                <button className="components__btn">Batafsil</button>
              </Link>
            </li>
            <li className="components__item">
              <img src={img} alt={img} className="components__img" />
              <div className="components__info">
                <div className="components__info-text">
                  <h3 className="components__name">Pizza do'koni 6m²</h3>
                  <h3 className="components__currency">33 000 000 uzs</h3>
                </div>
                <img src={save} alt={save} />
              </div>
              <Link to="/Batafsil">
                <button className="components__btn">Batafsil</button>
              </Link>
            </li>
          </ul>
        </div>
{/* our info logos */}
        <div className="ourInfo-logos">
            <div className="ourInfo-logos_item">
                <img src={parametr} alt="" />
                <h4>1 yillik bepul
servis xizmati</h4>
            </div>
            <div className="ourInfo-logos_item">
                <img src={ourLogo} alt="" />
                <h4>3 yillik kafolat</h4>
            </div>
            <div className="ourInfo-logos_item">
                <img src={ourFree} alt="" />
                <h4>O'zbekiston bo'ylab bepul yetkazib berish</h4>
            </div>
        </div>
{/* our info map carte */}
        <div className="ourInfo-map">
          <h2>O’zbekiston bo’ylab filiallarimiz</h2>
          <div className="map">
                  <div style={{position:"relative", height:"600px",width:"900px"}} class="mapouter"><div style={{overflow:"hidden", background:"none!important", height:"600px", width:"900px"}} class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Fergana%20Tadbirkorlar%20146&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net"></a></div></div>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default OurInfo;
