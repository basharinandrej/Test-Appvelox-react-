import React from 'react'
import ItemNavigation from './ItemNavigation'



const Navigation = ({links, arrIcons, url, onClick, activeItemMenu}) => {


    return(
        <nav className="main-aside__nav-menu nav-menu">
            <ul className="nav-menu__alist">

                <ItemNavigation     links={links}
                                    arrIcons={arrIcons} 
                                    url={url} 
                                    onClick={onClick}
                                    activeItemMenu={activeItemMenu}
                />
                
            </ul>
        </nav>
    )
}

export default Navigation