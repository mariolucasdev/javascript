function resetInput(){
    document.getElementById("item").value = "";
}

function addItem(){
    var item = document.getElementById("item").value;
    var todoList = document.getElementById("todoList").innerHTML;

    todoList = todoList + "<li>"+ item +" - <button class='removeItem'>excluir</button></li>";
    document.getElementById("todoList").innerHTML = todoList;

    resetInput();
}

function updateitem(){

}

function removeItem(){

}
