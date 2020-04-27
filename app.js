function onReady(){

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');


  addToDoForm.addEventListener('submit',function(event) {
    event.preventDefault();


    //get the text
    let title = newToDoText.value;

    //creat a new list
    let newLi=document.createElement('li');

    //create a checkbox
    let checkbox =document.createElement('input');
    checkbox.type = "checkbox";



    let dltbutton=document.createElement('button');
    dltbutton.textContent = 'delete';

    dltbutton.addEventListener('click',function(event){
      toDoList.removeChild(this.parentElement);
    });



    //set the newli text and append checkbox
    newLi.textContent =title;
    newLi.appendChild(checkbox);
    newLi.appendChild(dltbutton);

    //append newli to to-do toDoList
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value ="";

  });
  //delete all checked when press dltbutton


}

window.onload=function(){
  onReady();
}
