const btnContainer = document.getElementsByClassName('buttons-container');

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

function holidays(name) {
  const holiday = document.createElement('button');
  holiday.innerText = name;
  holiday.id = 'btn-holiday';
  btnContainer[0].appendChild(holiday);
}

holidays('Feriados');

function clickHoliday() {
  const btnHoliday = document.getElementById('btn-holiday');
  const holidays = document.getElementsByClassName('holiday');
  btnHoliday.addEventListener('click', () => {
    for (let indexH = 0; indexH < holidays.length; indexH += 1) {
      holidays[indexH].style.backgroundColor = 'rgb(255,255,255)';
    }
  })
}

clickHoliday();

function createFriday(name) {
  const holiday = document.createElement('button');
  holiday.innerText = name;
  holiday.id = 'btn-friday';
  btnContainer[0].appendChild(holiday);
}

createFriday('Sexta-feira');

function clickFriday() {
  const btnFriday = document.getElementById('btn-friday');
  const fridays = document.getElementsByClassName('friday');
  btnFriday.addEventListener('click', (e) => {
    for (let indexF = 0; indexF < fridays.length; indexF += 1) {
      fridays[indexF].innerText = 'SEXTOU!';
    }
  })
}

clickFriday();
