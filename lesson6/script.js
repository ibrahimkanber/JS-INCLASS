class Calculator{
    constructor(prevOperand,currentOperand){
            this.prevOperandEl=prevOperand;
            this.currentOperandEl=currentOperand;
    }
    
    clear(){

    }

    delete(){

    }

    appendNumber(){
        
    }

    chooseOperation(){

    }

    compute(){

    }

    getDisplayNumber(){

    }

    updateDisplay(){

    }

}





const numberButtons=document.querySelectorAll("[data-number]");
console.log("numberButtons", numberButtons);
const dataOperation=document.querySelectorAll("[data-operation]");

const equalsButton=document.querySelector("[data-equals]");
const deleteButton=document.querySelector("[data-delete]");
const allClearButton=document.querySelector("[data-all-clear]");

const previousOperandTextEl=document.querySelector("[data-previous-operan]");

const currentOperandTextEl=document.querySelector("[data-current-operand]")


const calculator=new Calculator(previousOperandTextEl,currentOperandTextEl)

numberButtons.forEach(button=>{
    button.addEventListener("click",function(){
        calculator.appendNumber(button.innerText)
    })
})