let inputNumber = document.getElementById("inp")
let btnPlus = document.getElementById("btn-plus")
let btnDicition = document.getElementById("btn-divition")
let btnResult = document.getElementById("btn-result")
let btnMulti = document.getElementById("btn-multi")
let btnClear = document.getElementById("btn-clear")
let btnMines = document.getElementById("btn-mines")
let btnBeckspace = document.getElementById("btn-backspace")
let btnAbu = document.getElementById("btn-abu")
let btnFactor = document.getElementById("btn-factor")
let allNumbers = document.querySelectorAll(".number")
let allButtons = document.querySelectorAll(".a")
let sum = document.getElementById("sum")
let num1, num2;
let conditional = true;
let operation = false;

allNumbers.forEach(eAb => {
    eAb.addEventListener("click", eButton => {
        if (eButton.target.textContent !== '.') {
            if (inputNumber.textContent == "0.0") {
                if (eButton.target.textContent != "0") {
                    inputNumber.textContent = eButton.target.textContent;
                } else {
                    inputNumber.textContent = "0.0";
                }
            } else {
                inputNumber.textContent += eButton.target.textContent;
            }

        } else {
            if (conditional && inputNumber.textContent != "0.0") {
                inputNumber.textContent += ".";
                conditional = false
            }
        }

    })
})

btnClear.addEventListener("click", eC => {
    inputNumber.textContent = "0.0"
    sum.innerText = "";
    num1 = undefined;
    num2 = undefined;
})

btnBeckspace.addEventListener("click", eback => {
    let len = inputNumber.textContent.length;
    inputNumber.textContent = inputNumber.textContent.substr(0, len - 1)

    if (inputNumber.textContent.includes(".")) {
        conditional = true;
    }

    if (inputNumber.textContent.length == 0) {
        inputNumber.textContent = "0.0";
    }
})

btnClear.addEventListener("click", eButtonClear => {
    inputNumber.textContent = "0.0"
    conditional = true;
})

btnPlus.addEventListener("click", eP => {
    num1 = Number(inputNumber.textContent)
    sum.innerHTML = `<strong>${num1}</strong>`
    inputNumber.textContent = "0.0";
    conditional = true;
    operation = "+";
    sum.textContent += " " + operation
})

btnDicition.addEventListener("click", eD => {
    num1 = Number(inputNumber.textContent)
    sum.innerHTML = `<strong>${num1}</strong>`
    inputNumber.textContent = "0.0";
    conditional = true;
    operation = "/";
    sum.textContent += " " + operation
})

btnMines.addEventListener("click", eM => {
    num1 = Number(inputNumber.textContent)
    sum.innerHTML = `<strong>${num1}</strong>`
    inputNumber.textContent = "0.0";
    conditional = true;
    operation = "-";
    sum.textContent += " " + operation
})

btnMulti.addEventListener("click", eMu => {
    num1 = Number(inputNumber.textContent)
    sum.innerHTML = `<strong>${num1}</strong>`
    inputNumber.textContent = "0.0";
    conditional = true;
    operation = "*";
    sum.textContent += " " + operation
})

btnAbu.addEventListener("click", eA => {
    num1 = Number(inputNumber.textContent)
    sum.innerHTML = `<strong>${num1}</strong>`
    inputNumber.textContent = "0.0";
    conditional = true;
    operation = "+-";
    sum.textContent += " " + operation
})

btnFactor.addEventListener("click", eF => {
    num1 = Number(inputNumber.textContent)
    sum.innerHTML = `<strong>${num1}</strong>`
    inputNumber.textContent = "0.0";
    conditional = true;
    operation = "F^";
    sum.textContent += " " + operation
})

btnResult.addEventListener("click", eR => {
    num2 = Number(inputNumber.textContent)
    sum.innerHTML += " " + `<strong>${num2}</strong>`;
    if (num1 == undefined && num2 == undefined) {
        alert("please first choose your operator OR inter give second number")
        window.location.reload()
    }
    let result = sendTypeOperation(operation)
    inputNumber.textContent = result;
    sum.textContent += " = " + result
    inputNumber = undefined;
    rest();
    btnClear.style.backgroundColor = "springgreen";
    btnClear.addEventListener("click", eR => {
            window.location.reload();
        }
    )

    allButtons.forEach(eAll => {
        if (eAll.textContent != "C"){
            eAll.style.cursor = "context-menu";
        }
    })
})

let sendTypeOperation = e => {
    let type;
    switch (e) {
        case "+":
            type = num1 + num2;
            break;
        case "-":
            type = num1 - num2;
            break;
        case "/":
            type = num1 / num2;
            break;
        case "*":
            type = num1 * num2;
            break;
    }
    return type;
}

let rest = e => {
    console.log("hello world")
}