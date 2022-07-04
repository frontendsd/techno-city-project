import React, { Component } from "react";
import Slider from "react-slick";
import "./Carusel.css";
import img1 from '../../assets/dokon3.jpg'
import img2 from '../../assets/dokon4.jpg'
import img3 from '../../assets/dokon5.jpg'
import img4 from '../../assets/dokon6.jpg'
import img5 from '../../assets/dokon7.jpg'
import img6 from '../../assets/dokon8.jpg'
import img7 from '../../assets/dokon9.jpg'

export default class AdaptiveHeight extends Component {
  render() {
    var settings = {
      className: "",
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      // adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2500,
    };
    return (
      <div className="Carusel">
        <h1 className="Carusel__head">Tavsiya qilamiz!</h1>
        <Slider {...settings}>
          
          <div className="img">
            <img src={img1} alt="" />
            <h2 className="Carusel__title">Mahsus furgon</h2>
            <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id viverra blandit suspendisse amet leo, dui. Turpis feugiat turpis eget faucibus id sed mattis velit dictum. Diam quam quis urna at viverra lacinia enim massa. Porttitor sit pretium feugiat ultrices morbi luctus egestas sit. 
            </p>
          </div>
          <div className="img">
            <img src={img2} alt="" />
            <h2 className="Carusel__title">Mahsus furgon</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id viverra blandit suspendisse amet leo, dui. Turpis feugiat turpis eget faucibus id sed mattis velit dictum. Diam quam quis urna at viverra lacinia enim massa. Porttitor sit pretium feugiat ultrices morbi luctus egestas sit. 
            </p>
          </div>
          <div className="img">
            <img src={img3} alt="" />
            <h2 className="Carusel__title">Mahsus furgon</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id viverra blandit suspendisse amet leo, dui. Turpis feugiat turpis eget faucibus id sed mattis velit dictum. Diam quam quis urna at viverra lacinia enim massa. Porttitor sit pretium feugiat ultrices morbi luctus egestas sit. 
            </p>
          </div>
          <div className="img">
            <img src={img4} alt="" />
            <h2 className="Carusel__title">Mahsus furgon</h2>
            <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id viverra blandit suspendisse amet leo, dui. Turpis feugiat turpis eget faucibus id sed mattis velit dictum. Diam quam quis urna at viverra lacinia enim massa. Porttitor sit pretium feugiat ultrices morbi luctus egestas sit. 
            </p>
          </div>
          <div className="img">
            <img src={img5} alt="" />
            <h2 className="Carusel__title">Mahsus furgon</h2>
            <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id viverra blandit suspendisse amet leo, dui. Turpis feugiat turpis eget faucibus id sed mattis velit dictum. Diam quam quis urna at viverra lacinia enim massa. Porttitor sit pretium feugiat ultrices morbi luctus egestas sit. 
            </p>
          </div>
          <div className="img">
            <img src={img6} alt="" />
            <h2 className="Carusel__title">Mahsus furgon</h2>
            <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id viverra blandit suspendisse amet leo, dui. Turpis feugiat turpis eget faucibus id sed mattis velit dictum. Diam quam quis urna at viverra lacinia enim massa. Porttitor sit pretium feugiat ultrices morbi luctus egestas sit. 
            </p>
          </div>
          <div className="img">
            <img src={img7} alt="" />
            <h2 className="Carusel__title">Mahsus furgon</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id viverra blandit suspendisse amet leo, dui. Turpis feugiat turpis eget faucibus id sed mattis velit dictum. Diam quam quis urna at viverra lacinia enim massa. Porttitor sit pretium feugiat ultrices morbi luctus egestas sit. 
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}
