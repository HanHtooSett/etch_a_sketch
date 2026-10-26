let mainDiv = document.querySelector(".main")
let size = 16

let btn = document.createElement("button");
btn.textContent = "New Grid";
document.body.appendChild(btn);

btn.addEventListener('click', ()=> {
    let input = prompt("Enter the number of square of the new grid")
    newSize = Number(input);

    if (input === null) return;
    if (!Number.isInteger(newSize) || newSize < 1 || newSize > 100) {
        alert("Please enter whole number from 1 to 100");
        return
    }
     size = newSize;
     createGrid(size);
});

function createGrid(size) {
    mainDiv.replaceChildren();

    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < size; j++) {
            let box = document.createElement("div");
            row.appendChild(box);
            box.classList.add("box");
            box.addEventListener("mouseover", ()=> {
                box.style.backgroundColor = "black"
            })
        }

        mainDiv.appendChild(row);
    }
}

createGrid(size)