
// Efetue uma definição recursiva de uma sequência numérica cujos elementos são obtidos 
// multiplicando-se, a partir do segundo elemento, o elemento anterior por 3. Considere que o 
// primeiro elemento vale 2. 

function seqRec(n: number): number {
    if (n === 1) {
        return 2; 
    }
    return seqRec(n - 1) * 3; 
}

for (let i = 1; i <= 10; i++) {
    console.log(`elemento ${i}: ${seqRec(i)}`);
}


// codigo fonte - ts-node .\src\exe01

// 1º elemento: 2 (dado)
// 2º elemento: 2 * 3 = 6
// 3º elemento: 6 * 3 = 18
// 4º elemento: 18 * 3 = 54
// 5º elemento: 54 * 3 = 162

