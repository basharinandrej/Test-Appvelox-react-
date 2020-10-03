$( document ).ready(function() {
    
    $('.burger-js').on('click', ()=>{
        $('.main-aside').addClass('translateX')
        $('.content__overflow').show()
        $('body').css('overflow', 'hidden')
    })

    $('.content__overflow').click( ()=> {
        $('.main-aside').removeClass('translateX')
        $('.content__overflow').hide()
        $('body').css('overflow', 'auto')
    })


    // Calendary
    const calendaryData = {
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        daysWeek: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
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


    // Генерация месяцев
    const generationMonts = (year) => {
        let monthObj = [];
        let leapYear = onLeapYear(year)


        for(let i = 0; i < calendaryData.months.length; i++) {
            monthObj[i] = {}

            monthObj[i]['month'] = calendaryData.months[i],
            monthObj[i]['days'] = ''
                    
            // TODO подумать как переделать !
            if (calendaryData.months[i] === "Январь") {
                monthObj[i]['days'] = generationDays(31)
            } else if (calendaryData.months[i] === "Февраль") {
                leapYear ? monthObj[i]['days'] = generationDays(29) : monthObj[i]['days'] = generationDays(28)
            } else if (calendaryData.months[i] === "Март") {
                monthObj[i]['days'] = generationDays(31)
            } else if (calendaryData.months[i] === "Апрель") {
                monthObj[i]['days'] = generationDays(30)
            } else if (calendaryData.months[i] === "Май") {
                monthObj[i]['days'] = generationDays(31)
            } else if (calendaryData.months[i] === "Июнь") {
                monthObj[i]['days'] = generationDays(30)
            } else if (calendaryData.months[i] === "Июль") {
                monthObj[i]['days'] = generationDays(31)
            } else if (calendaryData.months[i] === "Август") {
                monthObj[i]['days'] = generationDays(31)
            } else if (calendaryData.months[i] === "Сентябрь") {
                monthObj[i]['days'] = generationDays(30)
            } else if (calendaryData.months[i] === "Октябрь") {
                monthObj[i]['days'] = generationDays(31)
            } else if (calendaryData.months[i] === "Ноябрь") {
                monthObj[i]['days'] = generationDays(30)
            } else if (calendaryData.months[i] === "Декабрь") {
                monthObj[i]['days'] = generationDays(31)
            }
        }


        return monthObj
    }


    // Генерация годов
    for( let i = 2020; i <= 2030; i++) {
        renderObjYear(i)
    }



    console.log('calendary', calendary)
});