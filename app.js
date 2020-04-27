function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit',event => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //creat a new list
    let newLi=document.createElement('li');

    //create a checkbox
    let checkbox =document.createElement('input');
    checkbox.type = "checkbox";

    //set the newli text and append checkbox
    newLi.textContent =title;
    newLi.appendChild(checkbox);

    //append newli to to-do toDoList
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value ="";

  });
}

window.onload=function(){
  onReady();
}
