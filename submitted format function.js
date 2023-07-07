
//ne dirati-------------------------------------------------------
if (localStorage) {
    console.log("localStorage Supported.")
} else {
    console.error("localStorage not supported. use another browser version.")
}
//ne dirati--------------------------------------------------------------------

//instructions: napraviti novu varijablu za svaki novi print out na submitanom html fajlu
let checkboxC = document.getElementById("checkbox1");// za  selektovan jezik C-a
let radiobuttonROB = document.getElementById("radiobutton1");// za selektovan region of birth


//checkbox for selected lang C
checkboxC.addEventListener("click", (e) => {
    console.log("checkbox clicked!")
    localStorage.setItem("language", "C")
})

// Radion button for selected ROB
radiobuttonROB.addEventListener("click", (e) => {
    console.log("radiobutton clicked!")
    localStorage.setItem("radio", "Region of Birth")
})


