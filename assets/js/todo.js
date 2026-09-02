const plus= document.getElementById('plus');
const addBtn= document.querySelector('#taskIn > button'); 
const form0 = document.querySelector('form');
let taskList= document.querySelector('#taskList');
let count=0;
function addTask(e){
  e.preventDefault();
  const p = document.createElement('p');
  const checkbox = document.createElement('input');
  checkbox.type='checkbox';
  const pspan = document.createElement('span');
  const deletebtn = document.createElement('button');
  let touchnum=0;
  deletebtn.type='button';
  deletebtn.classList.add('deletebtn');
  deletebtn.textContent='Remove';
  deletebtn.addEventListener('click',
    function(event){
      let toRemove=confirm('Do you want to remove the task?');
      let targetp= event.currentTarget.parentElement;
      if (toRemove==true){
        targetp.remove();
      }else{
        touchnum++;
        targetp.children[1].classList.toggle('done')
      }
    } 
  );
  let taskdata= document.querySelector('#taskdata').value;
  pspan.textContent=taskdata;
  pspan.classList.add('pspan');
  count++;
  let pId='task'+count;
  p.appendChild(checkbox);
  p.appendChild(pspan);
  p.appendChild(deletebtn);
  p.classList.add('taskitem')
  p.id=pId;
  p.addEventListener('click', 
    function(e) {
      touchnum++;
      let targSpan= e.currentTarget.children[1];
      targSpan.classList.toggle('done');
      if (touchnum % 2 == 0) {
        checkbox.checked=false;
      } else {
        checkbox.checked=true;
      }
    }
  );
  taskList.appendChild(p);
  taskList.style.borderStyle='solid'
  taskList.style.borderWidth='1px'
  taskList.style.borderColor='white';
}

form0.addEventListener('submit', addTask)

function show(){
  let taskBox = document.querySelector('#taskBox');
  taskBox.style.display='block';
  let placehold= document.querySelector('#placehold');
  placehold.style.display='none';
  let plus= document.querySelector('#plus');
  plus.style.display='none'
}

plus.addEventListener('click', show)