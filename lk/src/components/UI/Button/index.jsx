import React from 'react'


const Button = ({children, classElement, onClick}) => {


    return(
        <button href="#" 
                className={`${classElement}main-btn main-btn`}
                onClick={onClick}    
                >
            {children}
        </button>
    )
}

export default Button