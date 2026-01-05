let mortAmount = document.getElementById('m-amount')
let mortTerm = document.getElementById('m-term')
let mortRate = document.getElementById('m-rate')
let form = document.querySelector('form')

//window.alert('pls input the appropriate info below!')

// const calculation = mortAmountmortTerm, mortRate
//console.log(mortAmount, mortRate, mortTerm,form)


form.addEventListener('submit',function(event){
   
    event.preventDefault();
 
    const inputedAmount = mortAmount.value;
    const inputedRate = mortRate.value;
    const inputedTerm = mortTerm.value;

   



   const result= interestIncluded(inputedAmount,inputedRate,inputedTerm)
   message(result)
    //const myInterestEquation = finalCalc;

    //console.log(myInterestEquation)
    // const nonInterest = (amount, term)=>{
    //     const myEquation = amount/term ;
    //     return myEquation
    // }
     //console.log(nonInterest(inputedAmount, inputedTerm))

     //image.style.display = 'none'
})

 const interestIncluded = (inputedAmount,  inputedRate, inputedTerm)=>{
        const i = inputedRate / 12;
        const added = 1 + i;
        const secondI = i * added;
        const power = secondI ** inputedTerm;
        const numerator = inputedAmount * power;
        const denominator = added ** inputedTerm - 1;
        const finalCalc = numerator / denominator;
        const myInterestEquation = finalCalc;
       
        return myInterestEquation
    }

    const message=(result)=>{
        console.info(`This is your ${result}`)
    }