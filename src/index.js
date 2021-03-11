const containerForm = document.querySelector('[container-form]');
const userEntry = document.querySelector('[new-entry]');
let input = 'Dhaka'

containerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    input = userEntry.value;
    console.log(input);
    userEntry.value = '';
  
})