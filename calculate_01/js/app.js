// Dom
// inputs #
let firstInput = document.querySelector("#first-input"),
    secondInput = document.querySelector("#second-input"),
    resultInput = document.querySelector("#result-input"),

    // count.
    countBtn = document.querySelectorAll(".count"),

    // number
    numbersBtn = document.querySelectorAll(".number");


let status = false;
let delBtn = document.querySelector("#del")

firstInput.addEventListener("click",() => {
    status = true
})

secondInput.addEventListener("click",()=>{
    status = false
})

function removeNumbersClass(){
    numbersBtn.forEach(itm => {
        itm.classList.remove("number-active")
    })
}

function numb() {
    numbersBtn.forEach(key => {
        key.addEventListener("click",() => {
            removeNumbersClass();
            key.classList.add("number-active")
            if (status === true){
                firstInput.value += key.value
            }else{
                secondInput.value += key.value
            }
        })
    })
}



function countBtnRemove(){
    countBtn.forEach(item => {
        item.classList.remove("count-active")
    })
}

function mathNumbers(){
    countBtn.forEach(count => {
        count.addEventListener("click",() => {
            countBtnRemove();
            if (count.value === "+"){
              resultInput.value = parseFloat(firstInput.value) + parseFloat(secondInput.value)
            }else if(count.value === "-"){
              resultInput.value = parseFloat(firstInput.value) - parseFloat(secondInput.value)
            }else if(count.value === "%"){
              resultInput.value = parseFloat(firstInput.value) / parseFloat(secondInput.value)
            }else if(count.value === "x"){
              resultInput.value = parseFloat(firstInput.value) * parseFloat(secondInput.value)
            }else if(count.value === "C"){
              resultInput.value = ""
              firstInput.value = "";
              secondInput.value = "";
            }
        })
    })
}



function del(){
    delBtn.addEventListener("click",() => {
        if(status === true) {
            let str = firstInput.value;
            str = str.substring(0, str.length-1);
            firstInput.value = str;
        } else{
            let str = secondInput.value;
            str = str.substring(0, str.length-1);
            secondInput.value = str;
        }
    })
}


// functions
numb()
mathNumbers()
del();
