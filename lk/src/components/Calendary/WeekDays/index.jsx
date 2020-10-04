import React from 'react'



const WeekDays = () => {
    const arrWeekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

    return arrWeekDays.map((item, index) => {
                return <p key={item + index} className="body-calendary__week-days">{item}</p>
            })
        
    
}

export default WeekDays