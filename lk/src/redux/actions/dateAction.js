import axios from 'axios'


export const fetchDate = () => dispatch => {
        
    axios.get(`http://localhost:3001/dataRecords`).then(({ data }) => {
        dispatch(dateAction(data));
    })

}



export const dateAction = item => {
    return {
        type: "SET_DATE",
        payload: item
    }
}


export const sortArrAction = (arr, calendary, currentMonth, currentYear) => {

    let arrDays = arr.date && arr.date
    //console.log('arrDaysre', arrDays)

    // Массив в котором ключ/день, а значение/счётчик(cnt)
    let sortArr = []
    for (let i = 0; i <= 35; i++) {
        sortArr.push(-1)
    }

    // Текущий месяц
    let month = calendary[currentYear].months[currentMonth].month
    let year = calendary[currentYear].year


    // Массив только с днями в которые есть счётчик
    let arrDaysActive = [];
    // Создали массив с объектами {день: число записей} - текущего месяца
    for (let i = 0; i < arrDays.length; i++) {
        let arr = arrDays[i][0] === month && arrDays[i][2] === year ? arrDays[i][1] : null

        if ( arr && arr.length ) {
            arr.forEach(el => arrDaysActive.push(el))
        }
    }

    // Кладём в массив  ключ/день, а значение/счётчик(cnt)
    (function(){
        for(let i = 0; i < arrDaysActive.length; i++) {
            sortArr.splice(arrDaysActive[i].day, 0, arrDaysActive[i].cnt)
        }
    })()

    console.log('sortArr1', sortArr)

    return {
        type: 'ARR_DAYS',
        payload: sortArr
    }
}
