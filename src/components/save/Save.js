import React, { useState } from "react";
import {Link} from 'react-router-dom'
import Vector from "../../assets/vector.svg";
import Kubic from "../../assets/kubic.svg";
import Bars from "../../assets/bars.svg";
import img from "../../assets/dokon2.png";
import save from "../../assets/vector-2.svg";
import './Save.css'

const Save = () => {
    // const [card ,setCard] = useState([
    //     {img1:{img}, img2:{save}},
    //     {img1:{img}, img2:{save}},
    //     {img1:{img}, img2:{save}},
    //     {img1:{img}, img2:{save}},
    //     {img1:{img}, img2:{save}},
    //     {img1:{img}, img2:{save}},
    //     {img1:{img}, img2:{save}},
    //     {img1:{img}, img2:{save}},
    //     {img1:{img}, img2:{save}},
    //     {img1:{img}, img2:{save}},
    // ])
  return (
    <div className="save container">
      <div className="save-content">
        <h2>Saqlanganlar</h2>
        <div className="save-icons">
          <img src={Bars} alt="Bars-icon" className="save-icons_item" />
          <img src={Kubic} alt="kubic-icons" className="save-icons_item" />
          <img src={Vector} alt="" className="save-icons_item" />
        </div>
      </div>

      <ul className="save-card">
          {/* {card.map((item, index) => {
            return(
                <li className="components__item" key={index}>
                          <img src={item.img1} alt={item.img1} className="components__img"/>
                          <div className="components__info">
                              <div className="components__info-text">
                                  <h3 className="components__name">Pizza do'koni   6m²</h3>
                                  <h3 className="components__currency">33 000 000 uzs</h3>
                              </div>
                              <img src={item.img2} alt={item.img2}/>
                          </div>
                          <Link to='/Batafsil'>
                            <button className="components__btn">Batafsil</button>
                          </Link>
                      </li>
            )
          })} */}
          <li className="components__item">
                          <img src={img} alt={img} className="components__img"/>
                          <div className="components__info">
                              <div className="components__info-text">
                                  <h3 className="components__name">Pizza do'koni   6m²</h3>
                                  <h3 className="components__currency">33 000 000 uzs</h3>
                              </div>
                              <img src={save} alt={save}/>
                          </div>
                          <Link to='/Batafsil'>
                            <button className="components__btn">Batafsil</button>
                          </Link>
                      </li>
      </ul>
    </div>
  );
};

export default Save;
