// let mortAmount = document.getElementById('m-amount')
// let mortTerm = document.getElementById('m-term')
// let mortRate = document.getElementById('m-rate')
// let form = document.querySelector('form')

// //window.alert('pls input the appropriate info below!')

// // const calculation = mortAmountmortTerm, mortRate
// //console.log(mortAmount, mortRate, mortTerm,form)


// form.addEventListener('submit',function(event){
   
//     event.preventDefault();
 
//     const inputedAmount = mortAmount.value;
//     const inputedRate = mortRate.value;
//     const inputedTerm = mortTerm.value;

   



//    const result= interestIncluded(inputedAmount,inputedRate,inputedTerm)
//    message(result)
//     //const myInterestEquation = finalCalc;

//     //console.log(myInterestEquation)
//     // const nonInterest = (amount, term)=>{
//     //     const myEquation = amount/term ;
//     //     return myEquation
//     // }
//      //console.log(nonInterest(inputedAmount, inputedTerm))

//      //image.style.display = 'none'
// })

//  const interestIncluded = (inputedAmount,  inputedRate, inputedTerm)=>{
//         const i = inputedRate / 12;
//         const added = 1 + i;
//         const secondI = i * added;
//         const power = secondI ** inputedTerm;
//         const numerator = inputedAmount * power;
//         const denominator = added ** inputedTerm - 1;
//         const finalCalc = numerator / denominator;
//         const myInterestEquation = finalCalc;
       
//         return myInterestEquation
//     }

//     const message=(result)=>{
//         console.info(`This is your ${result}`)
//     }


const amount = document.querySelector('#m-amount')
const rate = document.querySelector('#m-rate')
const term = document.querySelector('#m-term')
const form = document.querySelector('form')
const img = document.querySelector('#image')
const txt = document.querySelector('#txt')
const none = document.querySelectorAll('.none'); 
const monthly = document.querySelector('.monthly')
const total = document.querySelector('.total')
const resultContainer = document.querySelector('.result');
const secondMain = document.querySelector('.second-main')
console.log(none)

console.log(monthly)
console.log(total)

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const inputedAmount = amount.value;
    const inputedRate = rate.value;
    const inputedTerm = term.value;
    

    function formula(a, r, t){
        const convR = r/100;
        const newR = convR/12;
        const n = t * 12
        const onePlusRate = 1 + newR
        const rateN = onePlusRate**n
        const topFormula = newR * rateN
        const botFormula = rateN - 1
        const preFormula = topFormula/ botFormula
        const finalFormula = a * preFormula
    
        return(finalFormula);
    }

    function totalPayment(a, r, t){
          const convR = r/100;
        const newR = convR/12;
        const n = t * 12
        const onePlusRate = 1 + newR
        const rateN = onePlusRate**n
        const topFormula = newR * rateN
        const botFormula = rateN - 1
        const preFormula = topFormula/ botFormula
        const finalFormula = a * preFormula

        const total = finalFormula * n
        return(total)
    }
    
    img.style.display = 'none';
    txt.style.display = 'none';
    
    for(var i = 0; i < none.length; i++ ){
        none[i].style.display = 'block';
    }
    if(document.querySelector('#repayment').checked === true){
        monthly.innerText = formula(inputedAmount, inputedRate, inputedTerm).toFixed(2);
    total.innerHTML = totalPayment(inputedAmount, inputedRate, inputedTerm).toFixed(2);
    }
    else{
        resultContainer.textContent = "Please check repayment or interest only "
        resultContainer.style.color = 'red'
    }
    

    resultContainer.style.display= 'block';
    secondMain.style.width = '50%'

    
})


//const numbers = [2, 3 , 4, 5];

// number.forEach((number)=>{
//     console.log(number+3)
// })


// for(var i = 0; i < numbers.length; i++){
//     console.log(numbers[i]+3)
// }

//numbers.splice(1,0,'name')
//console.log(numbers);