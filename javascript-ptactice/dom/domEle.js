console.log("HI DOM");

//creating variable for accessing elements
let iNumber = document.getElementById("iNumber")
let btnFact = document.getElementById("btnFact")
let hAnswer = document.getElementById("hAnswer")

btnFact.addEventListener("click", () => {
    let num = Number(iNumber.value)
    
    let factAns = 1
    for (let i = 1; i <= num; i++) {
        factAns *= i
    }
    hAnswer.innerText = factAns
})

// function calculateFact() {
//     hAnswer.innerText =  document.getElementById("iNumber").value
// }