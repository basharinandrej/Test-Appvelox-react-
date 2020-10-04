import React from 'react'
import img from '../../img/avatar.jpg'
import { Link } from 'react-router-dom'

import { Fragment } from 'react'
import CardStaff from '../../components/CardStaff'
import CardInfo from '../../components/CardInfo'



const MyProfilePage = () => {



    return(
        <Fragment>
            <section className="main-main__reception reception">
                <div className="reception__wrapper-breadcrumbs">
                    <nav className="reception__breadcrumbs breadcrumbs">
                        <ul className="breadcrumbs__alist">
                            <a href="#" className="breadcrumbs__link">
                                
                            </a>
                        </ul>
                    </nav>
                    <h3 className="reception__title title">
                        Записи на прием
                    </h3>
                </div>

                <div className="reception__wrapper">
                    
                    <CardStaff />
                    <CardStaff />

                    

                    <Link to="/calendary" className="reception__details">
                            Еще 3 записи
                            <span>Подробнее</span>
                    </Link>
                </div>
            </section>


            <section className="main-main__electronic-card electronic-card">
                <h3 className="electronic-card__title title">
                    Электронная карта
                </h3>

                <div className="electronic-card__wrapper">

                    <CardInfo />
                    <CardInfo />
                    <CardInfo />
                    <CardInfo />

                    {/* <a href="#" className="electronic-card__card-info card-info">
                        <div className="card-info__img">
                            <svg width="50" height="50" role="img" >
                                <use xlinkHref="img/sprite.svg#icon-info"/>
                            </svg>
                        </div>

                        <div className="card-info__wrapper">
                            <h2 className="card-info__title title">
                                Информация о пациенте
                            </h2>

                            <ul className="card-info__dots-alist dots-alist">
                                <li className="dots-alist__item">
                                    Ваши личные данные
                                </li>
                                <li className="dots-alist__item">
                                    Рекомендации врачей
                                </li>
                                <li className="dots-alist__item">
                                    История болезней
                                </li>
                            </ul>
                        </div>
                    </a>

                    <a href="#" className="electronic-card__card-info card-info">
                        <div className="card-info__img">
                            <svg width="50" height="50" role="img" >
                                <use xlinkHref="img/sprite.svg#icon-lab"/>
                            </svg>
                        </div>

                        <div className="card-info__wrapper">
                            <h2 className="card-info__title title">
                                Результаты анализов
                            </h2>

                            <p className="card-info__paragraph">
                                Вы можете узнать здесь результаты своих анализов
                            </p>
                        </div>
                    </a>

                    <a href="#" className="electronic-card__card-info card-info">
                        <div className="card-info__img">
                            <svg width="50" height="50" role="img" >
                                <use xlinkHref="img/sprite.svg#icon-add-info"/>
                            </svg>
                        </div>

                        <div className="card-info__wrapper">
                            <h2 className="card-info__title title">
                                Добавить  информацию
                            </h2>

                            <p className="card-info__paragraph">
                                Добавляйте в свою электронную медицинскую карту новые данные
                            </p>
                        </div>
                        
                    </a>

                    <a href="#" className="electronic-card__card-info card-info">
                        <div className="card-info__img">
                            <svg width="50" height="50" role="img" >
                                <use xlinkHref="img/sprite.svg#icon-oclock"/>
                            </svg>
                        </div>

                        <div className="card-info__wrapper">
                            <h2 className="card-info__title title">
                                История приемов
                            </h2>

                            <p className="card-info__paragraph">
                                Вся информация о полученных услугах за все время хранится здесь
                            </p>
                        </div>
                        
                    </a> */}
                </div>
            
            </section>
        </Fragment>
    )
}

export default MyProfilePage