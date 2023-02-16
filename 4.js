let weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let DaysArray = [];
let firstDayJanuary = 'Среда';
let indexWeekDays = weekDays.indexOf(firstDayJanuary);

for (let i = 1; i < 32; i++) {
    DaysArray.push(i);
}

for (let i = 0; i < weekDays.length; i++) {
    if (weekDays[i] === firstDayJanuary) {
        indexWeekDays = i;
    }
}
for (let i = 1; i < DaysArray.length + 1; i++) {
    const SerialNumber = (indexWeekDays + i - 1) % 7;
    console.log(`${i} января, ${weekDays[SerialNumber]}`);
}