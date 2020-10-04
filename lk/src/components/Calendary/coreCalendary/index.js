
export const calendary = endYear => {
    //1 января 2020 - среда

    // Calendary
    const calendaryData = {
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    }

    const calendary = []

    // Проверка високосного года
    const onLeapYear = year => {
        let leapYear;

        if (year % 4 === 0) {
            leapYear = true
        } else if(year % 100 && year % 400 === 0) {
            leapYear = true
        } else {
            leapYear = false
        }

        return leapYear
    }


    // Создание шаблона года
    const renderObjYear = year => {
        
        const templateYear = {
            year,
            leapYear: onLeapYear(year),
            months: generationMonts(year)
        }

        calendary.push(templateYear)
    }


    // Генерация дней
    const generationDays = maxDay => {
        let arrDays = []

        for (let i = 1; i <= maxDay; i++) {
            arrDays.push(i)
        }
        return arrDays
    }

    // Генерация дней недели
    const generationWeekDays = (month, year, maxDay) => {
        

        let days = [
                    'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 
                    'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 
                    'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 
                    'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 
                    'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб',
                    'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'
                    ];

        function getWeekDay(date) {
            return days[date.getDay()];
        }


        // Определяем первый день недели любого месяца 
        // (Год, месяц, первый день)
        let week = new Date(year, month, 1)

        let inxDayOfArr = days.indexOf(getWeekDay(week))


        let days31 = []
        for(let i = 1; i <= maxDay; i++) {
            days31.push(i)
        }
        
        
        let weekDays = days31.map((day, index) => {
            inxDayOfArr += 1
            return days[inxDayOfArr - 1]
            
        })
        return weekDays
    }


    // Генерация месяцев
    const generationMonts = year=> {
        let monthObj = [];
        let leapYear = onLeapYear(year)


        for(let i = 0; i < calendaryData.months.length; i++) {
            monthObj[i] = {}

            monthObj[i]['month'] = calendaryData.months[i]
            monthObj[i]['days'] = ''
            monthObj[i]['dayWeek'] = ''        
            
            

            // TODO подумать как переделать !
            if (calendaryData.months[i] === "Январь") {
                monthObj[i]['days'] = generationDays(31)
                monthObj[i]['dayWeek'] = generationWeekDays(i, year, 31)
            } else if (calendaryData.months[i] === "Февраль") {
                leapYear ? monthObj[i]['days'] = generationDays(29) : monthObj[i]['days'] = generationDays(28)
                leapYear ? monthObj[i]['dayWeek'] = generationWeekDays(i, year, 29) : monthObj[i]['dayWeek'] = generationWeekDays(i, year, 28)
            } else if (calendaryData.months[i] === "Март") {
                monthObj[i]['days'] = generationDays(31)
                monthObj[i]['dayWeek'] = generationWeekDays(i, year, 31)
            } else if (calendaryData.months[i] === "Апрель") {
                monthObj[i]['days'] = generationDays(30)
                monthObj[i]['dayWeek'] = generationWeekDays(i, year, 30)
            } else if (calendaryData.months[i] === "Май") {
                monthObj[i]['days'] = generationDays(31)
                monthObj[i]['dayWeek'] = generationWeekDays(i, year, 31)
            } else if (calendaryData.months[i] === "Июнь") {
                monthObj[i]['days'] = generationDays(30)
                monthObj[i]['dayWeek'] = generationWeekDays(i, year, 30)
            } else if (calendaryData.months[i] === "Июль") {
                monthObj[i]['days'] = generationDays(31)
                monthObj[i]['dayWeek'] = generationWeekDays(i, year, 31)
            } else if (calendaryData.months[i] === "Август") {
                monthObj[i]['days'] = generationDays(31)
                monthObj[i]['dayWeek'] = generationWeekDays(i, year, 31)
            } else if (calendaryData.months[i] === "Сентябрь") {
                monthObj[i]['days'] = generationDays(30)
                monthObj[i]['dayWeek'] = generationWeekDays(i, year, 30)
            } else if (calendaryData.months[i] === "Октябрь") {
                monthObj[i]['days'] = generationDays(31)
                monthObj[i]['dayWeek'] = generationWeekDays(i, year, 31)
            } else if (calendaryData.months[i] === "Ноябрь") {
                monthObj[i]['days'] = generationDays(30)
                monthObj[i]['dayWeek'] = generationWeekDays(i, year, 30)
            } else if (calendaryData.months[i] === "Декабрь") {
                monthObj[i]['days'] = generationDays(31)
                monthObj[i]['dayWeek'] = generationWeekDays(i, year, 31)
            }
        }


        return monthObj
    }


    // Генерация годов
    for( let i = 2020; i <= endYear; i++) {
        renderObjYear(i)
 
    }

    return calendary
}
