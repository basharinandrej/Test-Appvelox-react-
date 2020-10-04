import React from 'react'
import CardStaff from '../CardStaff'



const CardInfo = () => {



    return(
        
        <a href="#" className="electronic-card__card-info card-info">
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

    )
}

export default CardInfo