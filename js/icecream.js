'use strict'



function calculateCost() {
    const scoops = parseInt(document.getElementById('scoops').value);
    const checkboxes = document.querySelectorAll('input[name="topping"]:checked');
    let basePrice = scoops * 1.50; // Base cost per scoop is $1.50
    let tax = basePrice * 0.1; // Assuming 10% tax
    let totalDue = basePrice + tax;

    checkboxes.forEach(checkbox => {
        basePrice += parseFloat(checkbox.value);
        tax += (parseFloat(checkbox.value) * 0.1); // Adding 10% tax for each topping
    });

    document.getElementById('base-price').textContent = `$${basePrice.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total-due').textContent = `$${totalDue.toFixed(2)}`;
}




function SelectedaTopping(){
    let selectedOption = document.querySelector("input[name='topping']:checked").value;
    
    if(selectedOption == "1") {

        alert("Good Choice");
    }
    else if (selectedOption == "2"){
        alert("Excellent Choice");
    }
    else if (selectedOption == "1" + "2"){
        alert("Nothing but Jimmies, nice.");
    }
    else if (selectedOption == "3"){
        alert("Praying for your stomach");
    }
    else if (selectedOption == "4"){
        alert("");
    }
}

function SelectedaCone()
{
    let selectedOption = document.querySelector("input[name='cone']:checked").value;
//    alert(selectedOption);
    if(selectedOption == "W") {
        alert("(+$1.50) Ol' faithful.");
    }
    else if(selectedOption == "S") {
        alert("(+$1.50) Not a bad choice, but it's no Waffle cone.");
    }
    else if (selectedOption == "CD") {
        alert("(+$2.00) I see you are a fellow man of culture.");
    }
}
// ending on an else breaks this ^ 