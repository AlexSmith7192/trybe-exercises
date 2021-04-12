function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDaysMoth() {
  const days = document.getElementById('days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let indexDays = 0; indexDays < dezDaysList.length; indexDays += 1) {
    const liDay = document.createElement('li');
    liDay.className = 'day';
    liDay.innerHTML = dezDaysList[indexDays];
    
    if (dezDaysList[indexDays] === 25) {
      liDay.classList.add('holiday', 'friday');
    } else if (dezDaysList[indexDays] === 24 || dezDaysList[indexDays] === 31) {
      liDay.classList.add('holiday');
    } else if (dezDaysList[indexDays] === 4 || dezDaysList[indexDays] === 11 || dezDaysList[indexDays] === 18) {
      liDay.classList.add('friday');
    }
    
    days.appendChild(liDay);
  }
}

createDaysMoth();
