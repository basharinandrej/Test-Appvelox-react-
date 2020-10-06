import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'
import { burgerOpen } from '../../../redux/actions/burder'


const Backdrop = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const onClickBackdropHandler = () => {
        dispatch(burgerOpen())
    }
    

    return <div onClick={onClickBackdropHandler} 
                className={classNames(
                    {"show": state.burger.open}, "content__overflow"
                )}>

            </div>
}


export default Backdrop