function computeLoan() {
    //The global constants of some class functions(value) are determined using the following three line codes
    const amount = document.querySelector('#amount').value;
    const interest_rate = document.querySelector('#interest_rate').value;
    const months = document.querySelector('#months').value;


    const interest = (amount * (interest_rate * 0.01)) / months;

    
    let payment = ((amount / months) + interest).toFixed(2);

    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    //With the help of innerHTML, the information stored in the "payment" is displayed on the webpage.
    document.querySelector('#payment').innerHTML = `Monthly Payment = ${payment}`
}