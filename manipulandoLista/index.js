function addItem(){
    var item = document.getElementById("item").value;
    var todoList = document.getElementById("todoList").innerHTML;

    todoList = todoList + "<li>"+ item +"</li>";
    document.getElementById("todoList").innerHTML = todoList;

}

function updateitem(){

}

function removeItem(){

}
