const notesdivcontainer = document.querySelector(".notes-container")
const createbtn = document.querySelector(".btn")


function shownotes() {
    notesdivcontainer.innerHTML = localStorage.getItem("notes")
}
shownotes()
function updatestorage() {
    localStorage.setItem("notes", notesdivcontainer.innerHTML)
}

createbtn.addEventListener("click", () => {
    let inputBox = document.createElement("p")
    let img = document.createElement("img")
    inputBox.className = "input-box"
    inputBox.setAttribute("contenteditable", "true")
    console.log(inputBox);
    img.src = "images/delete.png"
    notesdivcontainer.appendChild(inputBox).appendChild(img)

})

notesdivcontainer.addEventListener("click", (e) => {
    console.log("Target: ", e.target);
    console.log(notesdivcontainer);
    console.log(e.target.parentElement);
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove()
        updatestorage()
    }

    else if (e.target.tagName === "P") {
        let notes = document.querySelectorAll(".input-box")
        notes.forEach(nt => {
            console.log("nt node listened");
            nt.onkeyup = () => {  //after each character typed and released the key, this event will be ccalled
                console.log("character stored");
                updatestorage()
            }
        })
    }
})