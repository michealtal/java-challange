function changeCase (fedinString) {
    let upperCase = 0;
    let lowerCase = 0;

    for(let i= 0; i < fedinString.length;i++){
      // /[A-Z]/.test(fedinString[i]) here we use ragex but we commented it out but if you use it it will still work
        if(/[A-Z]/.test(fedinString[i])){
            upperCase ++
        }else{
            lowerCase ++
        }
        }

        if(upperCase > lowerCase){
            return fedinString.toUpperCase();
        } else{
            return fedinString.toLowerCase();
        }
    }
    console.log(changeCase("CHAirs"))

    let toDO =  [
   {    
       userName:'mary',
        tax:'to meet the boss',
        isCompleted:"completed",

    },
   {    
       userName:'felix ',
        tax:'to clean the meeting office',
        isCompleted:"not completed"

    },
   {    
       userName:'john',
        tax:'to finish a web project',
        isCompleted:"completed"

    }
    ];

    toDO.forEach(tax => {
       console.log(tax.tax);
    });

    // const toDOText =toDO.map(function(toDO){
    //     return toDO.tax
    // })
    // console.log(toDOText)
    const toDOText =toDO.filter(function(toDO){
        return toDO.isCompleted==="completed"
    }).map(function(toDOText){
        return toDOText.userName
    })
    console.log(toDOText)
    console.log(toDO)

    function myPeps (name) {
        if(name.charAt(0) == "a" && name.charAt(name.length-1 =="a")){
            return name.substring (1,name.length -1)
        }else{
            return name;
        }
     
    }

    console.log(myPeps('annabella'))

    const evenNum = [1,2,3,4,5,6,7,8,9]
    const newNum = []
        for(let i = 0; i<evenNum.length; i++){
            let result = evenNum[i]
            if(result %2 == 0){ 
            newNum.push(result)
        }
    }
    console.log(newNum)


    const votersAge = (age) => {
        if(age >= 18 && age < 60){
            console.log("you are aligble to vote ")
        }else {
           console.log("you are not aligible to vote" )
           return age
        }
    }
    votersAge(18);

    const leapYear =(year) =>{
        year % 100 !== 0 && year % 4 === 0 ?
            console.log(`${year}  is a leap year `) :
        
            console.log(` ${year} is not a leap year `) 
        
        return year 
    }

leapYear(2028)

function getAge(){

}


const date = new Date()
const year = date.getMonth()
console.log(year,"year")



const person = {
    firstName:"Bayo",
    lastName:"Raji",
   
    // fullName: function(){
    //     return `${this.firsName} ${this.lastName}`
    // }

}

const {firstName:names, lastName} = person

console.log(names,"name")

// console.log(person.fullName())

   
// const anotherPerson = Object.assign({},person)
//         anotherPerson.firstName ="Chinedu"
// console.log(anotherPerson,"another")
// console.log(Object.values(person,"keys"))

// if(person.hasOwnProperty("Name")===true){
//     console.log("yes i'm present")
// }else{
//     console.log("the value does not exist")
// }

for(let i = 0 ; i <= 100 ; i++){
    if(i % 2 === 0 ){
        console.log("fizz")
    }
    if(i % 3 === 0){
        console.log("buzz")
    }
    if(i % 5 === 0){
        console.log("fizzBuzz")
    }
   
}

const state = {
   abia:"umaya",
   adamawa:"yola",
    akwaibom:"uyo",
    anabra:"awka"   
}
for(let x in state){
 console.log(state[x])
}







