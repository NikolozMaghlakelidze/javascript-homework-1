console.log(`hello world`)

// 1
let number1 = 100;
    if (number1 < 50) {
        console.log("რიცხვი ნაკლებია 50ზე");
    }
     else if  (number1 > 20) {
        console.log("რიცხვი მეტია 20ზე");
    }
     else {
        console.log("შეცდომა");
    }
// 2
    let name1 = "მარიამ"

if (name1 === "მარიამ"){
    console.log("true")
}
else {
    console.log("false")
}
// 3
let name2 = "მარიამ"
switch(name2){
    case "მარიამ":
    console.log('true')
    break;
    default:
        console.log('false')
        break;
}
// 4
let stringname = "ნიკოლოზი"
console.log( typeof stringname)
// 5 
let number2 = 10;
console.log( +number2)
// ან
console.log(Number(number2))
