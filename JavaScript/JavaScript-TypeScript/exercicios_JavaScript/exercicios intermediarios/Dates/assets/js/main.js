/*const h1 = document.querySelector('.container h1');
const data = new Date();

function getWeekDay(numberWeek)
{
    let weekDay = '';

    switch(numberWeek){
        case 0:
            weekDay = 'domingo';
            break;
        case 1:
            weekDay = 'segunda-feira';
            break;
        case 2:
            weekDay = 'terça-feira';
            break;
        case 3:
            weekDay = 'quarta-feira';
            break;
        case 4:
            weekDay = 'quinta-feira';
            break;
        case 5:
            weekDay = 'sexta-feira';
            break;
        case 6:
            weekDay = 'sabado';
            break;
        default:
            weekDay = '';
            break;
    }

    return weekDay;
}

function getMonthDay(numberMonth)
{
    let month = '';

    switch(numberMonth){
        case 0:
            month = 'janeiro';
            break;
        case 1:
            month = 'fevereiro';
            break;
        case 2:
            month = 'março';
            break;
        case 3:
            month = 'abril';
            break;
        case 4:
            month = 'maio';
            break;
        case 5:
            month = 'junho';
            break;
        case 6:
            month = 'julho';
            break;
        case 7:
            month = 'agosto';
            break;
        case 8:
            month = 'setembro';
            break;
        case 9:
            month = 'outubro';
            break;
        case 10:
            month = 'novembro';
            break;
        case 11:
            month = 'dezembro';
                break;
        default:
            month = '';
            break;
    }

    return month;
}

function leftZero(num){
    return num >= 10 ? num: `0${num}`;
}

function createDate(data){
    const weekDay = data.getDay();
    const monthNumber = data.getMonth();

    const dayName = getWeekDay(weekDay);
    const monthName = getMonthDay(monthNumber);

    return (`${dayName}, ${data.getDate()} de ${monthName} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`);
}

h1.innerHTML = createDate(data);*/

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-PT', { dateStyle: 'full', timeStyle: 'short' }); 
