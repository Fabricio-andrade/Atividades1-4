// Atividade 1
const arrayNum = [5,6,1,2,4,9,3,7,8];

function crescente() {
    arrayNum.sort((a, b) => {
        if (a < b){
            return -1;
        }
    }) 
    console.table(arrayNum);
}
function decrescente() {
    arrayNum.sort((a, b) => {
        if (a > b){
            return -1;
        }
    }) 
    console.table(arrayNum);
}

// Atividade 2
const arrayNum2 = [1,3,5,7,9];
const arrayNumAux = [2,4,6,8];
let arrayFull = [];

function juntarOrdenar() {
    arrayFull = arrayNumAux.concat(arrayNum2);
    arrayFull.sort((a, b) => {
        if (a < b) {
            return -1;
        }
    })
    console.log(arrayFull);
}

// Atividade 3
const arrayRound = ["A", "B", "C", "D", "E"];

function roundRobin() {
    console.log(arrayRound);
    arrayRound.push(arrayRound.shift());
    console.log(arrayRound);
}

// Atividade 4
const arrayDivisor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let arrayDividido = [];
let aux = 0;

function dividir() {
    for (let i = 0; i < 5; i++) {
        arrayDividido[i] = [];
        for (let j = 0; j < 3; j++) {
            arrayDividido[i][j] = arrayDivisor[aux++]
        }
    }
    console.log(arrayDividido);
}