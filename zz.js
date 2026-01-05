const form = document.querySelector('form');
const mAmount = document.querySelector('#m-amount');
const mRate = document.querySelector('#m-rate');
const mTerm = document.querySelector('#m-term');
const repayment = document.getElementById('repayment')
const interest = document.getElementById('interest')



form.addEventListener('submit', function(event){
    event.preventDefault();
    const inputedAmount = mAmount.value;
    const inputedRate = mRate.value ;
    const inputedTerm = mTerm.value;

    const interestIncluded = (amount, rate , term)=>{
        const myInterestEquation = amount/term * rate;
        return myInterestEquation;
    }
    const nonInterest = (amount, term)=>{
        const myEquation = amount/term ;
        return myEquation;    
    }
    if(repayment.checked === true){
        if(inputedRate > 0 ){
            alert('interest will not be calculated')
        }
       nonInterest(inputedAmount, inputedTerm)
        
    }
    if(interest.checked === true){
        interestIncluded(inputedAmount, inputedRate, inputedTerm)
        
    }M = P/ r(1+r)^n/(1+r)^n - 1;
    
const rateWithTerm = inputedRate/100;
const r = preR/12;
const n = inputedTerm * 12
  const onePlusRate = 1 + r
  const raceN = onePlusRate**n
 const topF = r * raceN
    const botF = raceN -1
    const preF = topF/ botF
    const finalF = inputedAmount * preF
    console.log(finalF)
} )