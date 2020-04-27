function onReady(){
  let id=0;
  let toDos=[];
  if(localStorage.getItem('user')){
    toDos=JSON.parse(localStorage.getItem('user'));
  }

  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo(){
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value){return;}

    toDos.push(
      {title:newToDoText.value,
        complete:false,
        id:id,
      }
    );
    newToDoText.value = '';
    id++;

    localStorage.setItem('user',JSON.stringify(toDos));
    renderTheUI();
  }


  function renderTheUI(){
    const toDoList=document.getElementById('toDoList');

    toDoList.textContent='';

    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type='checkbox';

      checkbox.addEventListener('change',function(event){
        if(this.checked){

          toDo.complete=true;
        }else{
          toDo.complete=false;
        };
        console.log(toDos);
        localStorage.setItem('user',JSON.stringify(toDos));
      });

      const dltButton=document.createElement('button');
      dltButton.textContent='delete';

      dltButton.addEventListener('click',event=>{
        let newToDos=toDos.filter(item => item.id !=toDo.id);
        toDos=newToDos;
        localStorage.setItem('user',JSON.stringify(toDos));
        renderTheUI();
      });

      newLi.textContent =toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(dltButton);
    });

    console.log(toDos);
  }



  addToDoForm.addEventListener('submit',event =>{
    event.preventDefault();
    createNewToDo();
  });


  renderTheUI();
}

window.onload=function(){
  onReady();
}
