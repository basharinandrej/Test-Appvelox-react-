import React, { useState } from 'react'
import WeekDays from './WeekDays'
import {calendary as coreCalendary} from './coreCalendary/index'


// API My Calendary
const maxYear = 2022
const calendary = coreCalendary(maxYear)

const Calendary = () => {
    const [currentMonth, toggleMounth] = useState(9)
    const [currentYear, toggleYear] = useState(0)

    const nextMontsHandler = () => {
        if (currentYear >= maxYear - 2020) {
            return alert('Это крайнее максимальное значение года. Добавьте новое значение в переменную maxYear, чтобы расширить диапазон')
        } else if( currentMonth >= 11 ){
            toggleYear( currentYear + 1 )
            toggleMounth( 0 )
        } else {
            toggleMounth( currentMonth + 1 )
        }
    }

    const prevMontsHandler = () => {
        if (currentYear === 0 && currentMonth <= 0) {
            return alert('Это крайнее значение года. В папке coreCalendary/index можно увеличть диапозон годов')
        } else if(currentMonth <= 0){
            toggleYear( currentYear - 1 )
            toggleMounth( 11 )
        } else {
            toggleMounth( currentMonth - 1 )
        }

    }


    const renderDaysHandler = () => {
        // TODO сократить if'ы

        if (calendary[currentYear].months[currentMonth].dayWeek[0] === 'Пн') {

            let clnArr = calendary[0].months[currentMonth].days.filter(el => el != '')
            clnArr.unshift()

            return clnArr.map((day, index)=> {
                return <p key={day+index}>{day}</p>
            })

        } else if(calendary[currentYear].months[currentMonth].dayWeek[0] === 'Вт') {

            let clnArr = calendary[currentYear].months[currentMonth].days.filter(el => el != '')
            clnArr.unshift('')

            return clnArr.map((day, index)=> {
                return <p key={day+index}>{day}</p>
            })

        } else if(calendary[currentYear].months[currentMonth].dayWeek[0] === 'Ср') {

            let clnArr = calendary[currentYear].months[currentMonth].days.filter(el => el != '')
            clnArr.unshift('', '')

            return clnArr.map((day, index)=> {
                return <p key={day+index}>{day}</p>
            })

        } else if(calendary[currentYear].months[currentMonth].dayWeek[0] === 'Чт') {

            let clnArr = calendary[currentYear].months[currentMonth].days.filter(el => el != '')
            clnArr.unshift('', '', '')

            return clnArr.map((day, index)=> {
                return <p key={day+index}>{day}</p>
            })

        } else if(calendary[currentYear].months[currentMonth].dayWeek[0] === 'Пт') {

            let clnArr = calendary[currentYear].months[currentMonth].days.filter(el => el != '')
            clnArr.unshift('', '', '', '')

            return clnArr.map((day, index)=> {
                return <p key={day+index}>{day}</p>
            })

        } else if(calendary[currentYear].months[currentMonth].dayWeek[0] === 'Сб') {

            let clnArr = calendary[currentYear].months[currentMonth].days.filter(el => el != '')
            clnArr.unshift('', '', '', '', '')

            return clnArr.map((day, index)=> {
                return <p key={day+index}>{day}</p>
            })

        } else if(calendary[currentYear].months[currentMonth].dayWeek[0] === 'Вс') {

            let clnArr = calendary[currentYear].months[currentMonth].days.filter(el => el != '')
            clnArr.unshift('', '', '', '', '', '')

            return clnArr.map((day, index)=> {
                return <p key={day+index}>{day}</p>
            })
        }
    }
    

    return(
        <div className="reception__calendary calendary">
            <div className="calendary__calendary-head calendary-head">
                <span onClick={prevMontsHandler} className="calendary-head__link">
                    <svg width="14" height="14" className="calendary-head__arrow calendary-head__arrow--prev">
                        <g clipPath="url(#clip0)">
                        <path d="M4.52934 7.00324L10.6131 0.91946C10.8234 0.709107 10.8234 0.368071 10.6131 0.157718C10.4027 -0.0525726 10.0617 -0.0525726 9.85138 0.157718L3.38672 6.62236C3.17643 6.83272 3.17643 7.17375 3.38672 7.38411L9.85138 13.8488C10.0654 14.0554 10.4064 14.0495 10.6131 13.8355C10.8147 13.6267 10.8147 13.2958 10.6131 13.087L4.52934 7.00324Z" />
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="14" height="14" />
                        </clipPath>
                        </defs>
                    </svg>
                </span>

                <p className="calendary__paragraph">
                    {calendary[currentYear].months[currentMonth].month}, {calendary[currentYear].year}
                </p>

                <span  onClick={nextMontsHandler} className="calendary-head__link">
                    <svg width="14" height="14" 
                        className="calendary-head__arrow calendary-head__arrow--next">
                        <g clipPath="url(#clip0)">
                        <path d="M4.52934 7.00324L10.6131 0.91946C10.8234 0.709107 10.8234 0.368071 10.6131 0.157718C10.4027 -0.0525726 10.0617 -0.0525726 9.85138 0.157718L3.38672 6.62236C3.17643 6.83272 3.17643 7.17375 3.38672 7.38411L9.85138 13.8488C10.0654 14.0554 10.4064 14.0495 10.6131 13.8355C10.8147 13.6267 10.8147 13.2958 10.6131 13.087L4.52934 7.00324Z" />
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="14" height="14" />
                        </clipPath>
                        </defs>
                    </svg>

                </span>
            </div>

            <div className="calendary__body-calendary body-calendary">
                <div className="body-calendary__week-days-box">
                    <WeekDays />
                </div>                

                <div className="body-calendary__table-days table-days">
                    
                    { renderDaysHandler() }







                    {/* <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p className="table-days__paragraph--background">5</p>
                    <p className="table-days__paragraph--background">6</p>
                    <p className="table-days__paragraph--background">7</p>
                    <p className="table-days__paragraph--background">8</p>
                    <p className="table-days__paragraph--background">9</p>
                    <p className="table-days__paragraph--background">10</p>
                    <p className="table-days__paragraph--background">11</p>
                    <p className="table-days__paragraph--background">12</p>
                    <p className="table-days__paragraph--background">13</p>
                    <p className="table-days__paragraph--background">14</p>
                    <p className="table-days__paragraph--background active">15
                        <span className="table-days__count">3</span>
                    </p>
                    <p className="table-days__paragraph--background">16</p>
                    <p className="table-days__paragraph--background">17</p>
                    <p className="table-days__paragraph--background">18</p>
                    <p className="table-days__paragraph--background">19</p>
                    <p className="table-days__paragraph--background">20</p>
                    <p className="table-days__paragraph--background">21</p>
                    <p className="table-days__paragraph--background">22</p>
                    <p className="table-days__paragraph--background">23</p>
                    <p className="table-days__paragraph--background">24</p>
                    <p className="table-days__paragraph--background">25</p>
                    <p className="table-days__paragraph--background">26</p>
                    <p className="table-days__paragraph--background">27</p>
                    <p className="table-days__paragraph--background">28</p>
                    <p className="table-days__paragraph--background">29</p>
                    <p className="table-days__paragraph--background">30 
                        <span className="table-days__count">1</span>
                    </p>
                    <p>31</p> */}
                </div>
            </div>
        </div>
                

    )
}

export default Calendary