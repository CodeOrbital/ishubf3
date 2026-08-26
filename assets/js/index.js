function showp(){
  let demoin = document.getElementById('demoin').value;
  let demop = document.getElementById('demop')
  demop.style.display='block'
  if (demoin==''){
    demop.style.color='black';
    demop.style.borderColor='red';
    demop.textContent='Please, Insert a text';
  }
  else{
    demop.style.color='black';
    demop.style.borderColor='dodgerblue';
    demop.textContent=demoin;
  }
}
function tohello() {
  let demoin = document.getElementById('demoin').value;
  let demop = document.getElementById('demop')
  demop.style.display='block';
  if (demoin == '') {
    demop.style.borderColor = 'red';
    demop.textContent = 'Please, Insert a text';
  }
  else {
    demop.textContent = 'Hello';
  }
}
function tored() {
  let demoin = document.getElementById('demoin').value;
  let demop = document.getElementById('demop')
  demop.style.display='block';
  if (demoin == '') {
    demop.style.borderColor = 'red';
    demop.textContent = 'Please, Insert a text';
  }
  else {
    demop.style.color = 'red';
  }
}
function toin() {
  let demoin= document.getElementById('demoin').value;
  let demop = document.getElementById('demop');
  demop.style.display='block';
  if (demoin == '') {
    demop.style.borderColor = 'red';
    demop.textContent = 'Please, Insert a text';
  }
  else {
    demop.textContent = demoin;
  }
}
function toblack() {
  let demop = document.getElementById('demop')
  demop.style.display='block';
  if (demoin == '') {
    demop.style.borderColor = 'red';
    demop.textContent = 'Please, Insert a text';
  }
  else {
    demop.style.color = 'black';
  }
}
