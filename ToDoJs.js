function showAdd(){
    document.getElementById("addMenu").classList.toggle("show");
}

function cutTaskFn(event){
    event.target.nextElementSibling.classList.toggle("cutTask");
}

//To add new list item by creating them ONE BY ONE
function addFn(){
    var aTT=  document.getElementById("addTaskText");

    var newDiv= document.createElement("div");
    newDiv.className="list";
    document.getElementById("listContainer").appendChild(newDiv);

    var checkB= document.createElement("input");
    checkB.type="checkbox";
    checkB.onclick=cutTaskFn;
    newDiv.appendChild(checkB);

    var textB= document.createElement("input");
    textB.type="text";
    textB.size="50";
    textB.value=aTT.value;
    aTT.value="";
    newDiv.appendChild(textB);

    var delB= document.createElement("img");
    delB.src="delBtn.png";
    delB.onclick=delTask;
    newDiv.appendChild(delB);

}

function delTask(event) {
    event.target.parentNode.remove();
}
