const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");

const checkButton = document.querySelector("#check-btn");
const msgDisplay = document.querySelector("#msg-display");

const nextButton = document.querySelector("#next-btn");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const returnChangeDiv = document.querySelector("#returnChangeDiv");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nextButton.addEventListener("click", function nextButtonJob() {
    hideMessage();
    if (billAmount.value > 0) {
        cashGivenDiv.style.display = "block";
        nextButton.style.display = "none";
    } else if (billAmount.value <= 0) {
        hideall();
        showMessage("Enter Valid Bill");
    }
   
});

function minimiseReturnAmount(returnAmount) {
    returnChangeDiv.style.display = "block";
    for (i = 0; i < availableNotes.length; ++i) {
        const minNote = Math.trunc(returnAmount / availableNotes[i]);
        noOfNotes[i].innerText = minNote;
        console.log(minNote);
        returnAmount = returnAmount % availableNotes[i];

    }
}

checkButton.addEventListener("click", function validateCashandBill() {
    hideMessage();
    if(billAmount.value > 0 && cashGiven.value >0)
    { 
        if( Number(cashGiven.value) > Number(billAmount.value) ) {
        const returnAmount = cashGiven.value - billAmount.value;
        minimiseReturnAmount(returnAmount);
        console.log(returnAmount);
    }
    else if(Number(cashGiven.value) === Number(billAmount.value)){
        returnChangeDiv.style.display ="none";
        showMessage("That's a perfect bill !!!! ");
    }
    else if (Number(cashGiven.value) <= 0) {
        showMessage("Thanks for the Imaginary currency but we don't do that here ")
} 
    else{ 
        returnChangeDiv.style.display = "none";
        showMessage("Congratulations for becoming DishWasher today, #HappyOnboarding");
    }

    }//end of main if
    else{
        returnChangeDiv.style.display ="none";
        showMessage("Enter valid amounts in both field");
    }
});

function showMessage(msg) {
    msgDisplay.style.display = "block";
    msgDisplay.innerText = msg;
}

function hideMessage() {
    msgDisplay.style.display = "none";
}

function hideall(){
    cashGivenDiv.style.display = "none";
    returnChangeDiv.style.display = "none";
}