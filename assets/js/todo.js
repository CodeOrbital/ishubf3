let plus= document.getElementById('plus');
let addBtn= document.querySelector('#taskIn > button');                                     
let taskList= document.querySelector('#taskList');
let count=0;
let touchnum=0;
function addTask(){
  const p = document.createElement('p');
  const checkbox = document.createElement('input');
  checkbox.type='checkbox';
  const pspan = document.createElement('span');
  const deletebtn = document.createElement('button');
  deletebtn.type='button';
  deletebtn.classList.add('deletebtn');
  deletebtn.textContent='Remove'
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
  //let tasknum= taskList.childElementCount();
  //let childspan= document.querySelectorAll('span')[count-1];
  //childsapn.textContent= taskdata;
}
//addBtn.addEventListener('click',addTask);
