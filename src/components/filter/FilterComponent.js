import React from 'react'
import './FilterComponent.css'
import logo1 from '../../assets/logo1.svg'
import img from '../../assets/dokon2.png'
import save from '../../assets/save.svg'
import { Link } from 'react-router-dom'
// import Repos from '../repos/Repos'
// import Btn from '../button/Btn'

function FilterComponent() {
  return (
      <div className="container">
        <div className='filter__component'>
        <h1 className="filter__title">Siz xohlagan konstruksiya bizda mavjud!</h1>
          
          <div className="components">
                  <div className="filter">
                      <form action="" className='form__control'>
                          <input type="text" placeholder='Maydon m²'/>
                          <input type="text" placeholder='Konstruksiya turi'/>
                          <input type="text" placeholder='Min narx'/>
                          <input type="text" placeholder='Max narx'/>
                          <select name="" id="">
                              <option value="1">Yetkazish</option>
                              <option value="1">1</option>
                              <option value="1">1</option>
                              <option value="1">1</option>
                              <option value="1">1</option>
                          </select>
                      </form>
                      <div className="filter__link">
                        <Link to='/'>
                            <img src={logo1} alt="" className='filter__logo'/>
                        </Link>
                        <Link to='/repos' className='filter__btn'>
                            Topish
                        </Link>
                      </div>
                  </div>
                  <h1 className="components__title">Bizning mahsulotlar</h1>
                  <ul className="components__list">
                      <li className="components__item">
                          <img src={img} alt={img} className="components__img"/>
                          <div className="components__info">
                              <div className="components__info-text">
                                  <h3 className="components__name">Pizza do'koni   6m²</h3>
                                  <h3 className="components__currency">33 000 000 uzs</h3>
                              </div>
                              <img src={save} alt={save}/>
                          </div>
                          <button className="components__btn">Batafsil</button>

                      </li>
                      <li className="components__item">
                          <img src={img} alt={img} className="components__img" />
                          <div className="components__info">
                              <div className="components__info-text">
                                  <h3 className="components__name">Pizza do'koni   6m²</h3>
                                  <h3 className="components__currency">33 000 000 uzs</h3>
                              </div>
                              <img src={save} alt={save}/>
                          </div>
                          <button className="components__btn">Batafsil</button>
                      </li>
                      <li className="components__item">
                          <img src={img} alt={img} className="components__img" />
                          <div className="components__info">
                              <div className="components__info-text">
                                  <h3 className="components__name">Pizza do'koni   6m²</h3>
                                  <h3 className="components__currency">33 000 000 uzs</h3>
                              </div>
                              <img src={save} alt={save}/>
                          </div>
                          <button className="components__btn">Batafsil</button>
                      </li>
                      <li className="components__item">
                          <img src={img} alt={img} className="components__img" />
                          <div className="components__info">
                              <div className="components__info-text">
                                  <h3 className="components__name">Pizza do'koni   6m²</h3>
                                  <h3 className="components__currency">33 000 000 uzs</h3>
                              </div>
                              <img src={save} alt={save}/>
                          </div>
                          <button className="components__btn">Batafsil</button>
                      </li>
                      <li className="components__item">
                          <img src={img} alt={img} className="components__img" />
                          <div className="components__info">
                              <div className="components__info-text">
                                  <h3 className="components__name">Pizza do'koni   6m²</h3>
                                  <h3 className="components__currency">33 000 000 uzs</h3>
                              </div>
                              <img src={save} alt={save}/>
                          </div>
                          <button className="components__btn">Batafsil</button>
                  </li>
                  <li className="components__item">
                          <img src={img} alt={img} className="components__img" />
                          <div className="components__info">
                              <div className="components__info-text">
                                  <h3 className="components__name">Pizza do'koni   6m²</h3>
                                  <h3 className="components__currency">33 000 000 uzs</h3>
                              </div>
                              <img src={save} alt={save}/>
                          </div>
                          <button className="components__btn">Batafsil</button>
                  </li>
                  <li className="components__item">
                          <img src={img} alt={img} className="components__img" />
                          <div className="components__info">
                              <div className="components__info-text">
                                  <h3 className="components__name">Pizza do'koni   6m²</h3>
                                  <h3 className="components__currency">33 000 000 uzs</h3>
                              </div>
                              <img src={save} alt={save}/>
                          </div>
                          <button className="components__btn">Batafsil</button>
                  </li>
                  <li className="components__item">
                          <img src={img} alt={img} className="components__img" />
                          <div className="components__info">
                              <div className="components__info-text">
                                  <h3 className="components__name">Pizza do'koni   6m²</h3>
                                  <h3 className="components__currency">33 000 000 uzs</h3>
                              </div>
                              <img src={save} alt={save}/>
                          </div>
                          <button className="components__btn">Batafsil</button>
                  </li>
                  <li className="components__item">
                          <img src={img} alt={img} className="components__img" />
                          <div className="components__info">
                              <div className="components__info-text">
                                  <h3 className="components__name">Pizza do'koni   6m²</h3>
                                  <h3 className="components__currency">33 000 000 uzs</h3>
                              </div>
                              <img src={save} alt={save}/>
                          </div>
                          <button className="components__btn">Batafsil</button>
                  </li>
                  <li className="components__item">
                          <img src={img} alt={img} className="components__img" />
                          <div className="components__info">
                              <div className="components__info-text">
                                  <h3 className="components__name">Pizza do'koni   6m²</h3>
                                  <h3 className="components__currency">33 000 000 uzs</h3>
                              </div>
                              <img src={save} alt={save}/>
                          </div>
                          <button className="components__btn">Batafsil</button>
                  </li>
                  <li className="components__item">
                          <img src={img} alt={img} className="components__img" />
                          <div className="components__info">
                              <div className="components__info-text">
                                  <h3 className="components__name">Pizza do'koni   6m²</h3>
                                  <h3 className="components__currency">33 000 000 uzs</h3>
                              </div>
                              <img src={save} alt={save}/>
                          </div>
                          <button className="components__btn">Batafsil</button>
                  </li>
                  <li className="components__item">
                          <img src={img} alt={img} className="components__img" />
                          <div className="components__info">
                              <div className="components__info-text">
                                  <h3 className="components__name">Pizza do'koni   6m²</h3>
                                  <h3 className="components__currency">33 000 000 uzs</h3>
                              </div>
                              <img src={save} alt={save}/>
                          </div>
                          <button className="components__btn">Batafsil</button>
                  </li>
                  <li className="components__item">
                          <img src={img} alt={img} className="components__img" />
                          <div className="components__info">
                              <div className="components__info-text">
                                  <h3 className="components__name">Pizza do'koni   6m²</h3>
                                  <h3 className="components__currency">33 000 000 uzs</h3>
                              </div>
                              <img src={save} alt={save}/>
                          </div>
                          <button className="components__btn">Batafsil</button>
                  </li>
                  <li className="components__item">
                          <img src={img} alt={img} className="components__img" />
                          <div className="components__info">
                              <div className="components__info-text">
                                  <h3 className="components__name">Pizza do'koni   6m²</h3>
                                  <h3 className="components__currency">33 000 000 uzs</h3>
                              </div>
                              <img src={save} alt={save}/>
                          </div>
                          <button className="components__btn">Batafsil</button>
                  </li>
                  <li className="components__item">
                          <img src={img} alt={img} className="components__img" />
                          <div className="components__info">
                              <div className="components__info-text">
                                  <h3 className="components__name">Pizza do'koni   6m²</h3>
                                  <h3 className="components__currency">33 000 000 uzs</h3>
                              </div>
                              <img src={save} alt={save}/>
                          </div>
                          <button className="components__btn">Batafsil</button>
                      </li>
                  </ul>                  
          </div>

          <div className='filter__bottom'>
                <h1 className='filter__title'>Biz bilan bog’lanish uchun</h1>
                <form action="" className='filter__bottom-form'>
                    <div className="filter__bottom-form-top">
                        <input className='filter__bottom-name' type="text" placeholder='Ism va Familiya'/>
                        <input className='filter__bottom-number' type="text" placeholder='Telefon raqam' />
                    </div>
                    <div className="filter__bottom-bottom">
                        <input className='filter__bottom-address' type="text" placeholder='Yashash manzili'/>
                        <button className="filter__bottom-btn">
                            Buyurtma berish
                        </button>
                    </div>
                </form>
          </div>
    </div>
   </div>
  )
}

export default FilterComponent