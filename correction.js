const noa = (srt) => {
     let start_pos = 0;
     let end_pos = srt.length;
    
     if(srt.length > 0 && srt.charAt(0) === "A"){
        start_pos = 1;
     }
    
     if(srt.length > 1 && srt.charAt(-1)==="A"){
        end_pos--;
     }
     return srt.substring(start_pos, end_pos);
    }
    // call the function with sample 

    console.log(noa("Aplana"));
    console.log(noa("Anthra"));
    console.log(noa("JavaScript"));

//      Array1;
//      Array2;
//      const VerifyArray = (Array1,Array2) =>{
//         for(let i =0;i< Array1.length;i++){
//             // nested loop to start from i to compare diff combination of element
//          for(let j = 0; i < Array1.length;j++){
//            let result = true;
//            temp = Array1[i];
//            Array1[i] = temp;
//            Array1[j] = Array2[j];
//            Array1[j] = temp;
//         //    we can check if combination is to the second array2
//         for (let k = 0; k < Array1.length; k++){
//             if (Array1[k] !== Array2[k]){
//                 result = false;
//                 break;
//             }
//         }
//     // now we should do something to get true if the combination match
//     if (result){
//         return true;
//     }
//     // making a swap of element back to their original position
//     Array1[j] = Array1[i];
//     Array1[i] = temp;
//          }
//         }
//      }
// console.log ([1,2,3,4,] , [2,2,2,2,2])

const d = new Date();
console.log( d.getFullYear())

for(i = 0 ; i <= 100 ; i ++){
   
   console.log(`${i} * ${i} = `, i*i )
}

// let numOfCars = 100;
// let numOfHonders = 0;
// const totalNumbersOfCars =() =>{
//    if(numOfHonders % numOfCars === 0){
//       console.log(`number of Honders are ${numOfHonders}`)
//    }else{
//       console.log("no honder passed ")
//    }
// }
// console.log(totalNumbersOfCars(numOfHonders))


function findingHonda(totalNumCar, notHonda){
   const HondaBrand = totalNumCar - notHonda;
   return HondaBrand

}

console.log(findingHonda(400,100))