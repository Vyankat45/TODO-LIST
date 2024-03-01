const inputbox = document.getElementById("inputbox");
const listcontainer = document.querySelector(".list-container");

const STORE_NAME = 'tasklist';

const taskList = getTasklistFromMemory();

function addTask() {
    if (inputbox.value === '') {
        alert("You must write something");
    } 
    else {

        
        //creatingg a new list
        let li = document.createElement("li");
        //set a value
        li.textContent = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        span.addEventListener('click', function () {
            li.remove();
        });
    }
    inputbox.value = '';
    storeInMemory();
}

function storeInMemory() {
    localStorage.setItem(STORE_NAME,taskList);
}

function getTasklistFromMemory() {
    const storedList = localStorage.getItem(STORE_NAME);
    return storedList ? storedList.split(',') : [];
}