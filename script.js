// 1 -> Sciviamo una funzione che accetta due parametri e torna la somma di entrambi

const sumFunction = function (a, b) {
  return `Hai fatto la somma di ${a} + ${b}. Il risultato è ${a + b}`;
};

console.log(sumFunction(4, 4));

// 2 -> Scriviamo una versione migliorata della prima che controlla l'esistenza dei due parametri e che siano numeri, altrimenti Errore in console che spiega cosa non va

// SOMMA

const betterSumFunction = function (a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return `Hai fatto la somma di ${a} + ${b}. Il risultato è ${a + b}`;
  } else {
    console.error("Non hai inserito entrambi i numeri!");
  }
};

console.log(betterSumFunction(2, 2));
console.log(betterSumFunction(2, "stringa"));
console.log(betterSumFunction(2));

// 3 -> Scriviamo come per il punto due, anche per moltiplicazione, divisione, e sottrazione. Il programma di deve dire che non posso dividere per 0

// SOTTRAZIONE

const betterSubFunction = function (a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return `Hai sottratto ${b} a ${a}. Il risultato è ${a - b}`;
  } else {
    console.error("Non hai inserito entrambi i numeri!");
  }
};

console.log(betterSubFunction(6, 2));

// MOLTIPLICAZIONE

const betterMultFunction = function (a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return `Se moltiplichi ${a} x ${b} => ${a} * ${b} = ${a * b}`;
  } else {
    console.error("Non hai inserito entrambi i numeri!");
  }
};

console.log(betterMultFunction(2, 4));

// DIVISIONE

const betterDivisionFunction = function (a, b) {
  if (typeof a === "number" && typeof b === "number" && b != 0) {
    return `Se dividi ${a} per ${b} ottieni ${a / b}.`;
  } else if (b === 0) {
    console.log(
      `Hai provato a dividere ${a} per ${b}. Non posso farlo, sorry.`
    );
  } else {
    console.error("Non hai inserito entrambi i numeri!");
  }
};

console.log(betterDivisionFunction(100, 2));
console.log(betterDivisionFunction(8, 0));

// 4 -> Scriviamo una funzione che possa eseguire le 4 precedenti

const performOperation = function (fn, a, b) {
  return fn(a, b);
};

console.log(performOperation(betterSumFunction, 11, 7));
console.log(performOperation(betterSubFunction, 40, 4));
console.log(performOperation(betterMultFunction, 10, 8));
console.log(performOperation(betterDivisionFunction, 30, 2));
console.log(performOperation(betterDivisionFunction, 30, 0));

const performOperationInDifferentWay = function (fn) {
  return fn;
};

console.log(performOperationInDifferentWay(betterSumFunction(10, 10)));
console.log(performOperationInDifferentWay(betterSubFunction(90, 2)));
