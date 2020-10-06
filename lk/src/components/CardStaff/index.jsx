import React from 'react'
import Button from '../UI/Button/index'
import src from '../../img/avatar.jpg'





const CardStaff = ({ id, name, post, date, time, organization, address, imageUrl, isArchive, onClick }) => {
    


    return(
        !isArchive ?
            <div className="reception__card-staff card-staff">
            <h3 className="card-staff__title title">
                <b> { date } | { time } </b>   
            </h3>
            <p className="card-staff__paragraph">
                { organization }, { address }
            </p>

            <div className="card-staff__wrapper">
                <div className="card-staff__info-person info-person">
                    <a href={src}  data-fancybox="gallery" className="info-person__avatar">
                        <img    src={imageUrl}
                                className="info-person__img-avatar"
                                alt="avatar-doctor1"/>
                    </a>

                    <div className="info-person__info">
                        <p className="info-person__name">
                            { name }
                        </p>
                        <p className="info-person-post">
                            { post }
                        </p>
                    </div>
                </div>

                <Button
                    classElement="card-staff__"
                    onClick={() => onClick(id)}
                >
                    Отменить
                </Button>
            </div>
        </div> : null
    )
}

export default CardStaff