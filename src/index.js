//Função vencer ou perder
let esultado = winOrLose (210, 95)

function winOrLose(wins, lose = "Esse herói não sabe oque é perder"){
    let winningBalance = wins - lose
    console.log("O saldo de vitória do herói é de: " + winningBalance)
    console.log("Quantidade de vitórias do herói: " + wins)
    console.log("Quantidade de derrotas do herói: " + lose)
    return winningBalance 
}

