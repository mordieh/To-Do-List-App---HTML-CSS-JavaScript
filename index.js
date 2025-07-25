let addBtn = document.querySelector(".add-btn");
let input = document.querySelector("#input-box");
let listContainer = document.querySelector(".list-container");


addBtn.onclick = function addfun() {
    if(input.value !== ""){

        // create ul and li for tasks
        let liElement = document.createElement("li");

        liElement.innerHTML = input.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        liElement.appendChild(span);

        listContainer.appendChild(liElement);

    }else {
        alert("Pleas Add Your Text !");
    }

    input.value = "";
    saveData();

}


listContainer.addEventListener('click', function (e) {

    if(e.target.tagName === 'LI'){

        e.target.classList.toggle("checked");
        saveData()

    }else if(e.target.tagName === "SPAN"){

        e.target.parentElement.remove();
        saveData()

    }

    
},false);


// clear btn
let clearBtn = document.querySelector(".clearbtn");

clearBtn.addEventListener('click', function () {

    listContainer.innerHTML= '';
    localStorage.removeItem('data');
})

//edet task

listContainer.addEventListener('dblclick', function (e) {
    if(e.target.tagName =='LI'){
        let curretnText = e.target.firstChild.textContent;

        let inputEdit = document.createElement('input');
        inputEdit.type = 'text';
        inputEdit.value = curretnText;
        inputEdit.className = 'input-edit';

        e.target.innerHTML = ''
        e.target.appendChild(inputEdit);
        inputEdit.focus();

        inputEdit.addEventListener('keydown', function (event) {
            if(event.key === 'Enter'){
                if(inputEdit.value.trim() !== ''){
                    e.target.innerHTML = inputEdit.value;

                    let span = document.createElement('span');
                    span.innerHTML = "\u00D7";
                    e.target.appendChild(span);
                    saveData();
                }
            }
        })
    }
})

// save data
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
};


//show item
function showItem() {
    listContainer.innerHTML = localStorage.getItem('data');
};

showItem()
window.onload = showItem;











