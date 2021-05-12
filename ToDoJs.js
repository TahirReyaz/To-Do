function showAdd(){
    document.getElementById("addMenu").classList.toggle("show");
}

function cutTaskFn(event){
    event.target.nextElementSibling.classList.toggle("cutTask");
}

//To add new list item by creating them ONE BY ONE
function addFn(){
    var aTT=  document.getElementById("addTaskText");
    localStorage.setItem("task1",aTT.value);

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
    textB.size="50";
    textB.value= localStorage.getItem("task1");
    aTT.value="";
    newDiv.appendChild(textB);

    // The new delete button
    var delB= document.createElement("img");
    delB.src="delBtn.png";
    delB.onclick=delTask;
    newDiv.appendChild(delB);

}

function delTask(event) {
    event.target.parentNode.remove();
}
