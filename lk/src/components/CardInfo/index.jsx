import React from 'react'



const CardInfo = ({ icon, title, content }) => {



    return(
        
        <a href="#" className="electronic-card__card-info card-info">
            <div className="card-info__img">
                { icon }
            </div>

            <div className="card-info__wrapper">
                <h2 className="card-info__title title">
                   { title }
                </h2>

                { content }
            </div>
        </a>

    )
}

export default CardInfo