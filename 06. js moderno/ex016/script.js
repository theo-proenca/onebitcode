const dayjs = require("dayjs")

function birthday(date){
    const birthday = dayjs(date)
    const today = dayjs()
    
    const diff = today.diff(birthday, 'year')
    const next = birthday.add(diff + 1, 'year').format('DD/MM/YYYY')
    const nextDiff = dayjs(next).diff(dayjs(), 'day') + 1

    console.log(`Você tem ${diff} anos, seu próximo aniversário é em ${next} e faltam ${nextDiff} dias.`)
}


birthday("1997-11-10")
