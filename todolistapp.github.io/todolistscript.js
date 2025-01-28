const inputBox = document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

 /*without pass empty*/              
function addTask() {
    if(inputBox.value ===''){
        alert("You must write something!");
    } 
    /*list point*/
    else {
        let li = document.createElement ("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement ("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
/*empty box after write*/
    inputBox.value = "";
    saveData ();
    
 
    /*click function*/
    }
    listContainer.addEventListener("click",function (e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
        }
    else if (e.target.tagName ==="SPAN") {
        e.target.parentElement.remove();
        saveData();
        } 
    }, false);
    /*after refresh don't lose data*/
    
    function saveData() {
        localStorage.setItem("data", listContainer.innerHTML);
    }
    /*Whenever open the website again save data*/
    
    
        function showTask(){
            listContainer.innerHTML = localStorage.getItem ("data");
        }
    
    showTask();
    