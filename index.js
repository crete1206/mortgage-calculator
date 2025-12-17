let mortAmount = document.getElementById('m-amount')
let mortTerm = document.getElementById('m-term')
let mortRate = document.getElementById('m-rate')
let form = document.querySelector('form')

// const calculation = mortAmountmortTerm, mortRate
console.log(mortAmount, mortRate, mortTerm,form)


form.addEventListener('submit',function(event){
    event.preventDefault();
    const inputedAmount = mortAmount.value;
    const inputedRate = mortRate.value;
    const inputedTerm = mortTerm.value;

    const interestIncluded = (amount, rate , term)=>{
        const myInterestEquation = amount/term * rate;
        return myInterestEquation
    }
    const nonInterest = (amount, term)=>{
        const myEquation = amount/term ;
        return myEquation
    }
     console.log(nonInterest(inputedAmount, inputedTerm))

     image.style.display = 'none'

})