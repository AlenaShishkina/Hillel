const url = "https://rickandmortyapi.com/api/character/?page=";
let count = 1;

function createBtn(className) {
    const btn = document.createElement("button");
    btn.className = className;
    btn.innerText = "Get data";
    return btn;
}

function createList(className) {
    const list = document.createElement("ul");
    list.className = className;
    return list;
}

const getDataBtn = createBtn("btn");
getDataBtn.addEventListener("click", (event) => {
    event.target.innerText = "Getting data";
    event.target.setAttribute("disabled", "disabled");
    getData("GET", url + count++);
})

document.body.appendChild(createList("list"));
document.body.appendChild(getDataBtn);
