let input = document.querySelector(".entered-list");
let addBtn = document.querySelector(".add-list");
let tasks = document.querySelector(".tasks");

// add btn disabled

input.addEventListener("keyup",function(event){
  event.preventDefault();
  if(event.keyCode === 13){
    addBtn.click();
  }
    if (input.value.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
})

// add new tasks

addBtn.addEventListener("click", () => {
  if (input.value.trim() != 0) {
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    let itemContent = document.createElement("p");
    itemContent.classList.add("item-content");

    let itemBtn = document.createElement("div");
    itemBtn.classList.add("item-btn");
    let btn1 = document.createElement("i");
    btn1.classList.add("fa");
    btn1.classList.add("fa-check");

    let btn2 = document.createElement("i");
    btn2.classList.add("fa-solid");
    btn2.classList.add("fa-xmark");

    itemContent.textContent = input.value;
    newItem.appendChild(itemContent);
    itemBtn.appendChild(btn1);
    itemBtn.appendChild(btn2);
    newItem.appendChild(itemBtn);

    tasks.appendChild(newItem);
    input.value = "";
  } else {
    alert("Please enter a task");
  }
});

// delete irem from list

tasks.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
    }
})


// mark item as completed

tasks.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-check')){
        e.target.parentElement.parentElement.classList.toggle('completed')

    }
})

