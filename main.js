/* პირველი დავალება */ ///////////////////////////////////////////////////

let string = "მე ვსწავლობ ჯავასკრიპტს სქილვილში";
let valueToReplace = "ჯავასკრიპტს";
let valueToReplaceWith = "რეაქთს";

const replaceFunc = (string, valueToReplace, valueToReplaceWith) => {
  let finalValue = "";

  for (let i = 0; i < string.length; i++) {
    if (string.slice(i, i + valueToReplace.length) === valueToReplace) {
      finalValue += valueToReplaceWith;
      i += valueToReplace.length - 1;
    } else {
      finalValue += string[i];
    }
  }

  return finalValue;
};

const replacedString = replaceFunc(string, valueToReplace, valueToReplaceWith);

console.log("საწყისი ტექსტი:", string);

console.log("შეცვლილი ტექსტი:", replacedString);

/*მეორე დავალება*/ /////////////////////////////////////////////////

let text = "hello world, I m Konstantine kakuchaia and I'm learning react";
console.log(text);
console.log(text.toUpperCase());

/* მესამე დავალება */ ///////////////////////////////////////////////

const data = [
  { name: "Lasha", age: 30 },
  { name: "Saba", age: 20 },
];

const filteredData = data.sort((a, b) => a.age - b.age);

console.log(filteredData);
