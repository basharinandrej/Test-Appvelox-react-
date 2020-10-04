import React from 'react'
import Button from '../UI/Button/index'
import src from '../../img/avatar.jpg'




const CardStaff = () => {



    return(
        <div className="reception__card-staff card-staff">
            <h3 className="card-staff__title title">
                <b>Понедельник 15.06.20 | 15:30 </b>   
            </h3>
            <p className="card-staff__paragraph">
                СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А
            </p>

            <div className="card-staff__wrapper">
                <div className="card-staff__info-person info-person">
                    <a href={src}  data-fancybox="gallery" className="info-person__avatar">
                        <img    src={src}
                                className="info-person__img-avatar"
                                alt="avatar-doctor1"/>
                    </a>

                    <div className="info-person__info">
                        <p className="info-person__name">
                            Малушко Т. Н.
                        </p>
                        <p className="info-person-post">
                            Хирургия
                        </p>
                    </div>
                </div>

                <Button
                    classElement="card-staff__"
                >
                    Отменить
                </Button>
            </div>
        </div>
    )
}

export default CardStaff