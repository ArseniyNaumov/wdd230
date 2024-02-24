const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

function handleDragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.dataset.index);
}


function handleDragOver(e) {
    e.preventDefault();
}


function handleDrop(e) {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    const targetIndex = parseInt(e.target.dataset.index, 10);

    if (isNaN(targetIndex) || sourceIndex === targetIndex) {
        return;
    }

    const listItems = Array.from(document.querySelectorAll("ul li"));
    const sourceItem = listItems[sourceIndex];
    const targetItem = listItems[targetIndex];

    const parent = sourceItem.parentNode;
    const boundingRect = targetItem.getBoundingClientRect();
    const offset = e.clientY - boundingRect.top;

    if (offset > targetItem.clientHeight / 2 && sourceIndex < targetIndex) {
        parent.insertBefore(sourceItem, targetItem.nextSibling);
    } else {
        parent.insertBefore(sourceItem, targetItem);
    }


    document.querySelectorAll("ul li").forEach((item, index) => {
        item.dataset.index = index;
    });
}


list.addEventListener("dragstart", handleDragStart);
list.addEventListener("dragover", handleDragOver);
list.addEventListener("drop", handleDrop);


button.addEventListener("click", function () {
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        li.append(deleteButton);
        li.draggable = true;
        list.append(li);
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
            updateDataIndex();
        });
        input.focus();
        input.value = "";
        updateDataIndex();
    } else {
        console.log("Input is blank. Please enter a value.");
        input.focus();
    }
});

function updateDataIndex() {
    document.querySelectorAll("ul li").forEach((item, index) => {
        item.dataset.index = index;
    });
}

// LOCAL STORAGE
let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });

}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}