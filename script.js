const currentUnit = document.querySelector("#currentUnit");
const kgConverter = document.querySelector("#kgConverter");
const gConverter = document.querySelector("#gConverter");
const submitButton = document.querySelector(".submitButton");
const endResult = document.querySelector(".endResult");
let finalResult;

function convert(){
    if(kgConverter.checked){
        finalResult = Number(currentUnit.value)
        finalResult = finalResult * 1000
        endResult.textContent = `The answer is ${finalResult}g`
    }
    else if(gConverter.checked){
        finalResult = Number(currentUnit.value)
        finalResult = finalResult/1000
        endResult.textContent = `The answer is ${finalResult}kg`
    }
    else{
        endResult.textContent = `No conversion was checked!`
        
    }
}

function sumNumbers(...allNumbers){
    let result = 0;
    for (let number of allNumbers){
        result += number;
    }
    console.log(result)
}
sumNumbers(1,6)
