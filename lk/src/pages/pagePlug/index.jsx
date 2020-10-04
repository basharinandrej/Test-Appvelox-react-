import React, { Fragment } from 'react'


import Button from '../../components/UI/Button'
import { Link } from 'react-router-dom'

const PagePlug = () => {

    return(
        <div className="main-head__main-plug main-plug">
            <h1 className="main-plug__title title title--accent-color title--plug">
                Раздел находится в разработке
            </h1>
            
            <Link to="/">
                <Button classElement="main-plug__">
                    Вернуться позже
                </Button>
            </Link>
        </div>
    )
}

export default PagePlug