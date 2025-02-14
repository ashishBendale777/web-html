let names = ["ASh", "Kom", "Gops", "Gau", "Chet", 'Gay']

let hAnswer = document.getElementById("hAnswer")

let i = 0
setInterval(() => 
    {
     hAnswer.innerText = names[i]
    i++
}, 2000)