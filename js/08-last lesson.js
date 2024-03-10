console.log(true && 3); // 3
console.log(false && 3); // false
console.log(true && 4 && "kiwi"); //kiwi
console.log(true && 0 && "kiwi"); // 0
console.log(true || 3); //true
console.log(true || 3 || 4); // true
console.log(true || false || 7); // true
console.log(1 && null && 2); // null
console.log((1 && null && 2)> 0) ; // false
console.log(null || (2 && 3) || 4); // 3

//===============================================================

function logItems(arr) {
       for(let i = 0; i < arr.length; i++) {
        console.log(`${i + 1} - ${arr[i]}`);
          }
}
logItems(["Mango", "Polly"])

//================================================================

function printInfo(names, phones) {
    const arrNames = names.split(",")
    const arrPhones = phones.split(",")
    console.log(arrNames);
    console.log(arrPhones);
    for (let i = 0; i < arrNames.length; i++){
         console.log(`Name: ${arrNames[i]}, phone number: ${arrPhones[i]}`)
        }
    }
printInfo("Jacob,William,Artemis", "07748300640,07748300641,07748300642")  

//=================================================================
let min = 0;
    let hours = 0;
    
function formatTime(minutes) {
    hours = String(Math.floor(minutes / 60)).padStart(2, 0);
    min = String(minutes % 60).padStart(2, 0);
    return `${hours}:${min}`;
}
    

console.log(formatTime(70))
console.log(formatTime(450))
console.log(formatTime(1441))

//=================================================================

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function getCombination(arr, num) {
    const res = [];
    for (let i = 0; i < arr.length; i += num){
        console.log(i);
        const comb = arr.slice(i, i + num)
        res.push(comb)
    }
    return res;
}

console.log(getCombination(data, 3))