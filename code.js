let principal = document.getElementById("Principal");
let interestRate = document.getElementById("InterestRate");
let time = document.getElementById("Time");
let result = document.getElementById("Result");
const calculateButton = document.getElementById("Submit"); 

calculateButton.addEventListener( "click", () =>{
    result.innerHTML = principal.value*(1+(interestRate.value*time.value));
})