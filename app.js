const billAmount = document.querySelector("#bill-amount");
const cashGiven =  document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const msgDisplay = document.querySelector("#msg-display");

const noOfNotes = document.querySelectorAll("#no-of-notes");

const availableNotes = [2000,500,100,20,10,5,1];

function minimiseReturnAmount(returnAmount){
    for(i=0;i<availableNotes.length;++i){
        const minNote = Math.trunc(returnAmount / availableNotes[i]);
        noOfNotes.innerText = minNote;
        console.log(minNote);
        returnAmount = returnAmount % availableNotes[i];
        
    }
}

 checkButton.addEventListener("click", function validateCashandBill(){
    hideMessage();
    if(billAmount.value>0){ 
            if(cashGiven.value >= billAmount.value ){
                const returnAmount = cashGiven.value - billAmount.value;
                minimiseReturnAmount(returnAmount);
            }
    } else{
         if(billAmount.value<=0){ 
            showMessage("Invalid BILL, Please Enter value Greater than 0");
         } 
         else if(isNaN(billAmount.value))
            showMessage("The i/p is Not a Number");
         else if(cashGiven.value<billAmount.value){
                showMessage("Congratulations for becoming DishWasher today, #HappyOnboarding");
            }
     }
 });

 function showMessage(msg){
    msgDisplay.style.display = "block";
    msgDisplay.innerText= msg;
 }

 function hideMessage(){
     msgDisplay.style.display = "none";
 }