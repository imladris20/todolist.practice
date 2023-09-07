// Using the Shopping List files from the previous videos update the shopping list app to do the following:

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var unorderedList = document.querySelector("ul");
var listElement = document.querySelectorAll("span");
var checkButton = document.querySelectorAll(".list_button")

function inputLength() {
	return input.value.length;
}

function createListElement() {
    
    let li = document.createElement("li");
    let newSpan = document.createElement("span");
    let newListButton = document.createElement("button");

    // 新加入的元素要記得加入EventListener，不然對它動作會沒反應。 
    newSpan.appendChild(document.createTextNode(input.value));
    newSpan.addEventListener("click", checkList);

    newListButton.appendChild(document.createTextNode("CHECKED!!"));
    newListButton.classList.add("list_button");
    newListButton.addEventListener("click", checkListByButton);

    li.appendChild(newSpan);
    li.appendChild(newListButton);

    unorderedList.appendChild(li);

    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterEnter(event) {
    if (inputLength() > 0 && event.code === "Enter") {
        createListElement();
    }
}

function checkList(event) {
    // 要用event.target 才知道是要針對被傳入的event所指元素做動作
    event.target.classList.toggle("done");
}

function checkListByButton(event) {
    event.target.parentElement.children[0].classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);

/*  Mission 1: If you click on the list item, it toggles the .done  class on and off.
  因為listElement是一個陣列，所以要用forEach    */
listElement.forEach( function (element){
    element.addEventListener("click", checkList);
});

/*  Mission 2: Add buttons next to each list item to delete the item when clicked on its corresponding delete button.   */
/*  Mission 3: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)     */
checkButton.forEach( function (element){
    element.addEventListener("click", checkListByButton);
});

