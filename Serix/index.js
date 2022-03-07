function playMusic(){
  var music = new Audio('click.mp3');
music.play();
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

document.getElementById('username')
 .insertAdjacentHTML('beforeBegin', '<label for="username">Username:</label>');
document.getElementById('password')
 .insertAdjacentHTML('beforeBegin', '<label for="password">Password:</label>');
document.getElementById('confirmPassword')
 .insertAdjacentHTML('beforeBegin', '<label for="confirmPassword">Confirm Password:</label>');

const checkInput = (event) => {
  const errorElement = Array.from(event.target.parentNode.querySelectorAll('span'));
  if (event.target.value === '' && !errorElement.length) {
    event.target.insertAdjacentHTML('afterEnd', '<span class="text-dark">Required</span>');
  }
  if (errorElement && event.target.value !== ''){
    errorElement.forEach(elem =>elem.remove());
  }
};

document.getElementById('username')
.addEventListener('blur', checkInput);
document.getElementById('password')
.addEventListener('blur', checkInput);
document.getElementById('confirmPassword')
.addEventListener('blur', checkInput);

document.getElementById('confirmPassword')
.addEventListener('blur', (event) => {
  if (event.target.value !== document.getElementById('password').value) {
    event.target.insertAdjacentHTML('afterEnd', '<span class="text-dark">Passwords Should Match</span>');
  }
});

const btn = document.querySelector('button');
btn.setAttribute('disabled', 'disabled');
document.getElementById('registrationForm')
.addEventListener('change', (event)=>{
  const formIsFilled = Array.from(document.querySelectorAll('input'))
  .every(input => input.value);
  if(formIsFilled){
    btn.removeAttribute('disabled');
  }
  else{
    btn.setAttribute('disabled','disabled');
  }
});


const form = document.getElementById('registrationForm');

form.addEventListener('sumbit', (event)=> {
  event.preventDefault();
  const alert = document.createElement('div');
  alert.classList.add('alert', 'alert-success');
  alert.innerText = 'You registered successfully';
  form.prepand(alert);
});
