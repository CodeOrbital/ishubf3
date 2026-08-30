var current = 0;
let cnum=document.getElementById('cnum');
let warning= document.getElementById('warning');

let rbtn=document.querySelector('#reset');
rbtn.addEventListener('click',restart)
rbtn.style.display='none';

function restart(){
  current= 0;
  cnum.textContent= current;
  warning.style.display= "none";
  cnum.style.borderColor= 'dodgerblue';
}
function increment(){
  current= current + 1;
  cnum.textContent=current;
  warning.style.display= "none";
  cnum.style.borderColor= 'dodgerblue';
  rbtn.style.display = 'block'
  rbtn.style.marginLeft = 'auto';
  rbtn.style.margin = 'auto';
}
function decrement(){
  if (current >=1) {
    current = current - 1;
    cnum.textContent = current;
  } else {
    warning.style.display= "block";
    cnum.style.borderColor= 'red';
  }
  if (current === 0 || warning.style.display != "none") {
    rbtn.style.display = 'none';
  } else {
    rbtn.style.display = 'block'
    rbtn.style.marginLeft='auto';
    rbtn.style.margin='auto';
  }
}
