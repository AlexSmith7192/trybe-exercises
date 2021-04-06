const header = document.getElementById('header-container');
const emergencyTasks = document.getElementsByClassName('emergency-tasks');
const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks');
const h3EmergencyTasks = document.querySelectorAll('.emergency-tasks h3');
const h3NoEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
const footer = document.getElementById('footer-container');

header.style.backgroundColor = 'green';

emergencyTasks[0].style.backgroundColor = 'pink';

noEmergencyTasks[0].style.backgroundColor = 'orange';

for (let indexE = 0; indexE < h3EmergencyTasks.length; indexE += 1) {
  h3EmergencyTasks[indexE].style.backgroundColor = 'brown';
}

for (let indexN = 0; indexN < h3NoEmergencyTasks.length; indexN += 1) {
  h3NoEmergencyTasks[indexN].style.backgroundColor = 'black';
}

footer.style.backgroundColor = 'green';
