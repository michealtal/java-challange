function celcius(F){

    return  5/9 * (F-32)
 }
 
 console.log(celcius(20))
 
 
 
  function fullName(firstName, lastName){
     return (` My Name is ${firstName} ${lastName}`)
 }
 
 console.log(fullName("Micheal", "Soetan"))
 
 // const num = [1,2,3,4,5,6,7,8,9]
 
 // const result = num.price.reduce((x,y)=> x+y,0)
 
 // console.log(result)
 
 
//  const num = [1,2,3,4,5,6,7,8,9,20,13,17,30,50]
//  let finalResult = []
//  for(let i = 0 ; i < num.length; i++ ){
//      let result = num[i]
//      if(result % 2 !== 0){
//          finalResult.push(result)
        
//      }
     
//  }
//  console.log(finalResult)
 
 
//  function* simpleGenerator(){
//  let id =1
//  while(true){
//  yield id
//     id++
//  }
//  }
function* simpleGenerator(){
    let id= 1
    while(true){
    const increment = yield id;
    if(increment != null){
    id +=increment
    }else{
        id++
    }
 }
}
 const generatorObject = simpleGenerator();
 console.log(generatorObject.next())
 console.log(generatorObject.next(4))
 console.log(generatorObject.next())
 console.log(generatorObject.next())
 console.log(generatorObject.next())

function* nextGenerator(){
    let i = 0
    while(true){
        i++;
       yield i*i
    }
}
// you can also call a for loop on it 
// for (const i of nextGenerator(the value you want it to stop e.g any number)){
//    console.log (i)
// }
const people = nextGenerator();
console.log(people.next().value)
console.log(people.next().value)
console.log(people.next().value)
console.log(people.next().value)



const myName ={
    firstName:"micheal",
    lastName:"talabi",
    code:"112121",
    fullName: function(){
        return[`${this.firstName}  ${this.lastName}`]
    }
}
console.log(myName)
console.log(myName.fullName())

let str = "Apple, Banana, Kiwi";
 console.log(str.substr(7))

//  async function
let a = 1
let b = 2

setTimeout(function(){
    console.log('asynce')
},1000)
console.log(a)
console.log(b)

const num = [1,2,3,4,5,6,7,8,9,10]
let evenNum = []

for (let i = 0; i < num.length;i++){
   let result = num[i]
   if(result % 2 == 0){
    evenNum.push(result)
   }
}
console.log(evenNum)

const namePeps = (myLetter) => {
    if( myLetter .charAt(0)=="a" || myLetter.charAt(myLetter.length - 1) == 'a' ){
   return myLetter.substring(1,myLetter.length -1);
    } else {
         return myLetter;
    }
 }
// function modifyWord(word) {
//     if (word.charAt(0) === 'a' && word.charAt(word.length - 1) === 'a') {
//         return word.substring(1, word.length - 1);
//     } else {
//         return word;
//     }
// }
console.log(namePeps('annastatia'))
console.log(namePeps('Alpha'))
console.log(namePeps('peter'))
// diving assignment 

// function swapLetter(text){
//     let s = text.split("")

//     for(let i = 0; i< s.length; i++) {
//         switch(s[i]) {
//             case " ":
//             break;
//           case "z":
//             s[i] = "a";
//             break;
//             case "Z":
//              s[i] = "A";
//              break;
//              default:
//                 s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));   
//         }
//     }
//     return s.join('');
// }
// console.log(swapLetter("zoology"));

// switch (s[i]){
//   case "a":
//     case "e":
// case "i":
//     case "o":
//     case "u":

//     s[i] = s [i].toUppercase()
// }





