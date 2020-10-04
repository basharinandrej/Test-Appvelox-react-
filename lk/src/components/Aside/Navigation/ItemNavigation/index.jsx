import React from 'react'
import classNames from "classnames"

import { Link } from 'react-router-dom'



const ItemNavigation = ({ links, arrIcons, url, onClick, activeItemMenu }) => {

    return(
        links && links.map((item, index) => {
            return <li  key={index + item} 
                        className={classNames({
                            active: index + 1 === activeItemMenu,
                        }, 'nav-menu__item')}
                        onClick={() => onClick(item.id)}    
                    >
                        
                <Link to={url[index]} className="nav-menu__link">
                    {arrIcons[index]}
                    {item.content}
                </Link>
            </li>
        })
    )
}

export default ItemNavigation