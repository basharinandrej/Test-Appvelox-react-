import React from 'react'


const Button = ({children, classElement}) => {


    return(
        <button href="#" className={`${classElement}main-btn main-btn`}>
            {children}
        </button>
    )
}

export default Button