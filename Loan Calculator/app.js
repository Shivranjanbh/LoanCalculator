document.getElementById('loan-form').addEventListener('submit',function(e){
    document.getElementById('results').style.display = "none";
    document.getElementById('loading').style.display ="block";
    setTimeout(calculate ,1500);
    e.preventDefault();
});
function calculate(e){
    const amount = document.getElementById('loan-amount');
    const intrest = document.getElementById('intrest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalAmount = document.getElementById('total-amount');
    const totalIntrest = document.getElementById('total-intrest');
    
    const principal = parseFloat(amount.value);
    const calculatedIntrest = parseFloat(intrest.value)/100/12;
    const calculatedPayments = parseFloat(years.value)*12;
    const x = Math.pow(1 + calculatedIntrest, calculatedPayments);
    const monthly = (principal * x * calculatedIntrest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalAmount.value = (monthly * calculatedPayments).toFixed(2);
        totalIntrest.value = (monthly * calculatedPayments - principal).toFixed(2);

        document.getElementById('results').style.display = "block";
        document.getElementById('loading').style.display ="none";
    }
    else{
        showAlert('Please enter the values');
    }
}

function showAlert(error){
    const errorDiv = document.createElement('div');
    errorDiv.className = "alert alert-danger";
    errorDiv.appendChild(document.createTextNode(error));
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    card.insertBefore(errorDiv, heading);
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);
}
