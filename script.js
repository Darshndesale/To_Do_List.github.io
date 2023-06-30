const inputbox = document.getElementById("input-box")

const listContainer = document.getElementById("list-container")
//add task feature
function addTask(){
    if(inputbox.value === "")
    {
        alert('You must write something!')
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    savedata();
}

//cheked ticked item feature
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("cheked")
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);


//we have save the data enter by user

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showlist(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showlist();


