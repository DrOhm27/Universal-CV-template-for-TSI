//ne dirati------------------------------------------------
if (localStorage) {
    // Cache API is supported
    console.log("localStorage supported!")
    //You can add your code her
} else {
    // Cache API is not supported
    console.log("localStorage not supported!!! Use another browser version!")
}
//ne dirati-----------------------------------------------------------------



let infoP = document.getElementById("info")//za selektovan jezik C
let radioValue = document.getElementById("radio-value")//za selektovan region of birth



infoP.innerText = localStorage.getItem("language") //za selektovan jezik C
radioValue.innerText = localStorage.getItem("radio")// za selektovan region of birth
