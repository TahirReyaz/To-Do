var taskCount, i;

// Check if there are no previous tasks
if(localStorage.getItem("taskCount") == null)
{
    localStorage.setItem("taskCount", "0");
}
taskCount = Number(localStorage.getItem("taskCount"));

// For loading all previous tasks
for(i=0; i<taskCount; i++)
{
    if(localStorage.getItem("task" + i) != null)
    {
    // Take the text from the add task textBox
    var aTT=  localStorage.getItem("task" + i);
    
    // The container for the new elements
    var newDiv= document.createElement("div");
    newDiv.className="list";
    document.getElementById("listContainer").appendChild(newDiv);

    // The new checkbox
    var checkB= document.createElement("input");
    checkB.type="checkbox";
    checkB.onclick=cutTaskFn;
    newDiv.appendChild(checkB);

    // The new textbox
    var textB= document.createElement("input");
    textB.type="text";
    textB.id = "text" + i;
    textB.value= aTT;
    newDiv.appendChild(textB);

    // The new delete button
    var delB= document.createElement("img");
    delB.src="delBtn.png";
    delB.onclick=delTask;
    newDiv.appendChild(delB);  

    document.getElementById("delAllBtn").style.display = "block";
    }
}

function showAdd(){
    document.getElementById("addMenu").classList.toggle("show");
}

function cutTaskFn(event){
    event.target.nextElementSibling.classList.toggle("cutTask");
}

//To add new list item by creating them ONE BY ONE
function addFn(){
    // Take the text from the add task textBox
    var aTT=  document.getElementById("addTaskText");
    localStorage.setItem("task" + taskCount,aTT.value);
    // Empty the add text textBox
    aTT.value="";

    // The container for the new elements
    var newDiv= document.createElement("div");
    newDiv.className="list";
    document.getElementById("listContainer").appendChild(newDiv);

    // The new checkbox
    var checkB= document.createElement("input");
    checkB.type="checkbox";
    checkB.onclick=cutTaskFn;
    newDiv.appendChild(checkB);

    // The new textbox
    var textB= document.createElement("input");
    textB.type="text";
    textB.id = "text" + taskCount;
    textB.value= localStorage.getItem("task" + taskCount);
    newDiv.appendChild(textB);

    // The new delete button
    var delB= document.createElement("img");
    delB.src="delBtn.png";
    delB.onclick=delTask;
    newDiv.appendChild(delB);

    taskCount++;
    localStorage.setItem("taskCount", taskCount);
    document.getElementById("delAllBtn").style.display = "block";
}

function textEnter(event) {
    if(event.key === 'Enter' || event.keyCode === 13)
        addFn();
}

function delTask(event) {
    event.target.parentNode.remove();
    var delTaskNum = event.target.previousElementSibling.id[4];
    localStorage.removeItem("task" + delTaskNum);
}

function delAllTask() {
    localStorage.clear();
    window.open(" ", "_self");
}