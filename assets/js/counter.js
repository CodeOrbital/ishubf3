let current = 0;
let cnum=document.getElementById('cnum');
let warning= document.getElementById('warning');
function increment(){
  current= current + 1;
  cnum.textContent=current;
  warning.style.display= "none";
  cnum.style.borderColor= 'dodgerblue';
}
function decrement() {
  if (current >=1) {
    current = current - 1;
    cnum.textContent = current;
  } else {
    warning.style.display= "block";
    cnum.style.borderColor= 'red';
  }
}