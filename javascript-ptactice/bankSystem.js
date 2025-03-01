let bankAcc = {
    accName: "AAhish",
    accType: "Saving",
    accBalance: 4343
}

let checkBalance = () => {
    console.log("Balance", bankAcc.accBalance);
}


let withodrawAmt = (amount) => {
    bankAcc.accBalance -= amount
    console.log("Current Balance", bankAcc.accBalance);
}


let depositeAmt = (amount) => {
    bankAcc.accBalance += amount
    console.log("Current Balance", bankAcc.accBalance);
}

export { checkBalance, withodrawAmt, depositeAmt }