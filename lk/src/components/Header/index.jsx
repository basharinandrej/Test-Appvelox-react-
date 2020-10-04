import React from 'react'
import Burger from '../UI/Burger/index'
import img from '../../img/avatar.jpg'

const arrIcons = [
    <svg width="18" height="18">
        <path d="M10.6172 0C6.54631 0 3.23438 3.31193 3.23438 7.38281C3.23438 9.17381 3.87542 10.8179 4.94013 12.0977L0.207637 16.798C-0.0678826 17.0717 -0.0693943 17.5168 0.204227 17.7924C0.341688 17.9307 0.522391 18 0.703129 18C0.88225 18 1.06144 17.9319 1.19859 17.7957L5.93754 13.089C7.21224 14.1363 8.84261 14.7656 10.6172 14.7656C11.8837 14.7656 13.1335 14.4393 14.2314 13.8218C14.5699 13.6315 14.6899 13.2028 14.4996 12.8643C14.3092 12.5259 13.8805 12.4057 13.5421 12.5961C12.6542 13.0955 11.6428 13.3594 10.6172 13.3594C7.32172 13.3594 4.64063 10.6783 4.64063 7.38281C4.64063 4.08734 7.32172 1.40625 10.6172 1.40625C13.9127 1.40625 16.5938 4.08734 16.5938 7.38281C16.5938 8.42101 16.3236 9.44328 15.8127 10.3391C15.6203 10.6765 15.7378 11.1059 16.0751 11.2983C16.4124 11.4906 16.8418 11.3732 17.0342 11.0359C17.666 9.92813 18 8.66493 18 7.38281C18 3.31193 14.6881 0 10.6172 0Z" />
    </svg>,

    <svg width="18" height="18">
        <path d="M16.41 13.3914C16.3385 13.0097 15.9711 12.7582 15.5894 12.8298C15.2077 12.9013 14.9562 13.2687 15.0277 13.6504C15.0808 13.9335 14.9563 14.1353 14.8774 14.2304C14.7987 14.3253 14.6238 14.4844 14.3367 14.4844H3.66358C3.37653 14.4844 3.20159 14.3253 3.12288 14.2304C3.04399 14.1353 2.9195 13.9335 2.97259 13.6504C3.17203 12.5861 3.57221 11.8861 3.95921 11.2091C4.42921 10.3871 4.91521 9.53694 4.91521 8.22653V7.17184C4.91521 4.95464 6.71743 3.12634 8.93364 3.09417H9.06657C11.2753 3.12627 13.0715 4.95457 13.0715 7.17188V8.22656C13.0715 9.34182 13.4363 10.1093 13.7783 10.741C13.9055 10.9762 14.1474 11.1096 14.3972 11.1096C14.5103 11.1096 14.6249 11.0823 14.7313 11.0247C15.0728 10.8399 15.1998 10.4132 15.015 10.0717C14.6747 9.44304 14.4777 8.93957 14.4777 8.22656V7.17188C14.4777 5.72481 13.9173 4.35807 12.8994 3.32346C12.0272 2.43678 10.9072 1.88346 9.6965 1.73074V0.703125C9.6965 0.314789 9.38171 0 8.99337 0C8.60504 0 8.29025 0.314789 8.29025 0.703125V1.73282C5.60227 2.08157 3.509 4.40089 3.509 7.17188V8.22656C3.509 9.16337 3.16893 9.75818 2.73841 10.5112C2.31428 11.2532 1.83352 12.0941 1.59038 13.3914C1.47433 14.0107 1.63851 14.6438 2.04084 15.1286C2.44278 15.6129 3.03428 15.8906 3.66358 15.8906H6.89757C6.89757 17.0537 7.84383 18 9.00694 18C10.1701 18 11.1163 17.0537 11.1163 15.8906H14.3367C14.966 15.8906 15.5575 15.6129 15.9595 15.1286C16.3618 14.6439 16.526 14.0107 16.41 13.3914ZM9.00694 16.5938C8.61924 16.5938 8.30382 16.2783 8.30382 15.8906H9.71007C9.71007 16.2783 9.39468 16.5938 9.00694 16.5938Z" />
    </svg>,

    <svg width="18" height="18">
        <g clipPath="url(#clip0)">
            <path d="M9.03586 10.371C9.79308 10.371 10.4069 9.75719 10.4069 8.99997C10.4069 8.24275 9.79308 7.62891 9.03586 7.62891C8.27864 7.62891 7.66479 8.24275 7.66479 8.99997C7.66479 9.75719 8.27864 10.371 9.03586 10.371Z" />
            <path d="M9.03555 4.99219C6.82569 4.99219 5.02783 6.79005 5.02783 8.99992C5.02783 11.2098 6.82569 13.0076 9.03555 13.0076C11.2454 13.0076 13.0433 11.2098 13.0433 8.99992C13.0433 6.79005 11.2454 4.99219 9.03555 4.99219ZM9.03555 11.6014C7.60107 11.6014 6.43405 10.4344 6.43405 8.99992C6.43405 7.56543 7.60107 6.39841 9.03555 6.39841C10.47 6.39841 11.6371 7.56543 11.6371 8.99992C11.6371 10.4344 10.47 11.6014 9.03555 11.6014Z" />
            <path d="M17.5447 7.46517C17.1714 6.89191 16.118 5.42023 14.4034 4.13821C12.6653 2.83866 10.8527 2.17969 9.01579 2.17969C7.18151 2.17969 5.3673 2.83687 3.62354 4.13291C1.9013 5.41295 0.839473 6.8828 0.462878 7.45533C-0.154293 8.39361 -0.154293 9.60612 0.462878 10.5444C0.839473 11.117 1.9013 12.5868 3.62354 13.8669C5.3673 15.1629 7.18148 15.8201 9.01579 15.8201C11.8397 15.8201 14.1106 14.2455 15.5182 12.9246C15.8014 12.6589 15.8156 12.214 15.5499 11.9308C15.2841 11.6476 14.8392 11.6335 14.556 11.8992C13.3334 13.0464 11.3797 14.4139 9.01573 14.4139C5.6019 14.4139 2.77174 11.4959 1.63763 9.77167C1.32924 9.30283 1.32924 8.69701 1.63763 8.22817C2.77174 6.50396 5.6019 3.58598 9.01573 3.58598C12.4294 3.58598 15.2423 6.50677 16.3663 8.2326C16.6698 8.69874 16.6698 9.30111 16.3663 9.76724C16.1544 10.0927 16.2464 10.5282 16.5718 10.7401C16.8972 10.952 17.3328 10.86 17.5447 10.5346C18.1518 9.60229 18.1518 8.39745 17.5447 7.46517Z" />
        </g>
        <defs>
        <clipPath id="clip0">
        <rect width="18" height="18" />
        </clipPath>
        </defs>
    </svg>,

    <img    src={img} 
            alt="avatar-user"
            className="avatar-user__img-avatar"/>,
    

    <svg width="16" height="16">
        <rect width="16" height="16" rx="5" />
        <g clipPath="url(#clip0)">
        <path d="M8.00187 10.1996L4.63147 6.8292L4.63147 6.8292C4.45269 6.65044 4.16285 6.65044 3.98407 6.8292L3.98403 6.82923C3.80533 7.00802 3.80531 7.29782 3.98404 7.4766L3.98406 7.47662L7.67816 11.1707L7.67818 11.1707C7.85695 11.3495 8.14678 11.3495 8.32556 11.1707L8.32557 11.1707L12.0197 7.47662L12.0197 7.47664L12.0215 7.47476C12.1972 7.29287 12.1921 7.00303 12.0102 6.82737L12.0102 6.82737C11.8328 6.65603 11.5515 6.65602 11.3741 6.82738L11.3741 6.82736L11.3723 6.8292L8.00187 10.1996Z" fill="transparent" stroke="#50CAFF" />
        </g>
        <defs>
        <clipPath id="clip0">
        <rect width="10" height="10"  transform="translate(3 14) rotate(-90)"/>
        </clipPath>
        </defs>
    </svg>
]



const Header = () => {



    return(
        <header className="main-main__main-head main-head">
            <Burger />

            <h1 className="main-head__title title">
                Мой профиль
            </h1>

            <div className="main-head__box-btn">

                <ul className="main-head__alist-icons alist-icons">
                    {
                        arrIcons.map((item, index) => {
                            return  <li className="alist-icons__item" key={item + index}>
                                    <a href="#" className="alist-icons__link">
                                        {item}
                                    </a>
                                </li> 
                        })
                    }
                </ul>

            </div>
        </header>
    )
}

export default Header;