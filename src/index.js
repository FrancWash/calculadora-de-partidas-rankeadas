//Função vencer ou perder/ com retorno em uma variavel
function winOrLose(wins, lose = "Esse herói não sabe oque é perder"){
    let winningBalance = wins - lose
    console.log("O saldo de vitória do herói é de: " + winningBalance)
    console.log("Quantidade de vitórias do herói: " + wins)
    console.log("Quantidade de derrotas do herói: " + lose)

    //Estruturas de decisão, achando o level do herói

    let level;
    if (winningBalance < 10) {
        level = "Ferro";
    } else if (wins >= 10 && wins <= 20) {
        level = "Bronze";
    } else if (wins >= 21 && wins <= 50) {
        level = "Prata";
    } else if (wins >= 51 && wins <= 80) {
        level = "Ouro";
    } else if (wins >= 81 && wins <= 90) {
        level = "Diamante";
    } else if (wins >= 91 && wins <= 100) {
        level = "Lendário";
    } else {
        level = "Imortal";
    }
    
    return { winningBalance, level };

}
//exibindo menssagem concatenando as variaveis de números de vitórias/ derrotas e saldo de vitória mais levl do herói
let resultado = winOrLose(210, 95);
console.log("O Herói tem um saldo de " + resultado.winningBalance + " e está no nível de " + resultado.level + ".");
