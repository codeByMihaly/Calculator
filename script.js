let op1 = document.getElementById("op1");
let op2 = document.getElementById("op2");
let operator = document.getElementById("operator");
let even = document.getElementById("even");
let result = document.getElementById("result");
let opPlus = document.getElementById("opPlus");
let opMinus = document.getElementById("opMinus");
let opMult = document.getElementById("opMult");
let opDiv = document.getElementById("opDiv");
let opEven = document.getElementById("opEven");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let num6 = document.getElementById("num6");
let num7 = document.getElementById("num7");
let num8 = document.getElementById("num8");
let num9 = document.getElementById("num9");
let num0 = document.getElementById("num0");
let numP = document.getElementById("numP");
let numBack = document.getElementById("numBack");


// add number function to the calculator

function addNumber(plusDigit) {
  if (operator.textContent === "") {
    op1.textContent += plusDigit;
  } else {
    op2.textContent += plusDigit;
  };
};

// add operator functions to the calculator

opEven.addEventListener("click", function (){
  let num1 = Number(op1.textContent);
  let num2 = Number(op2.textContent);

  // Must put all values in the calculator

  if (op2.textContent.trim() === "" || isNaN(num1) || isNaN(num2)) {
    result.textContent = "Missing input value";
    op1.textContent = "";
    operator.textContent = "";
    return;

    // operator functions
  } else {
   if (operator.textContent === "+") {
      if (even.textContent = "=") {
        result.textContent = num1 + num2;
      } else if (even.textContent = ["+", "-", "*", "/"]) {
        result.textContent = num1 + num2;
      };
   } else if (operator.textContent === "-") {
      even.textContent = "=";
      result.textContent = num1 - num2;
   } else if (operator.textContent === "*") {
      even.textContent = "=";
      result.textContent = num1 * num2;
   } else if (operator.textContent === "/" && num2 !== 0) {
      even.textContent = "=";
      result.textContent = num1 / num2;

      // Can't divide with 0

   } else if (operator.textContent === "/" && num2 === 0) {
      even.textContent = "=";
      op1.textContent = "";
      operator.textContent = "";
      op2.textContent = "";
      even.textContent = "";
      result.textContent = "NaN";
   }
 }
});

// Every number addEventListener

num1.addEventListener("click", function () {
  addNumber("1");
});

num2.addEventListener("click", function () {
  addNumber("2");
});

num3.addEventListener("click", function () {
  addNumber("3");
});

num4.addEventListener("click", function () {
  addNumber("4");
});

num5.addEventListener("click", function () {
  addNumber("5");
});

num6.addEventListener("click", function () {
  addNumber("6");
});

num7.addEventListener("click", function () {
  addNumber("7");
});

num8.addEventListener("click", function () {
  addNumber("8");
});

num9.addEventListener("click", function () {
  addNumber("9");
});

num0.addEventListener("click", function () {
  addNumber("0");
});

// Every operator addEventListener

function addOperate(addOp) {
  operator.textContent += addOp;
};

opPlus.addEventListener("click", function () {
  if (operator.textContent === "") {
      let operator1 = operator.textContent;
      if (operator1.indexOf("+") !== 0 && !operator1.includes("+")) {
       addOperate("+");
      }
  }
});

opMinus.addEventListener("click", function () {
  if (operator.textContent === "") {
      let operator1 = operator.textContent;
      if (operator1.indexOf("-") !== 0 && !operator1.includes("-")) {
      addOperate("-");
      }
  }
});

opMult.addEventListener("click", function () {
  if (operator.textContent === "") {
      let operator1 = operator.textContent;
      if (operator1.indexOf("*") !== 0 && !operator1.includes("*")) {
      addOperate("*");
      }
  }
});

opDiv.addEventListener("click", function () {
  if (operator.textContent === "") {
      let operator1 = operator.textContent;
      if (operator1.indexOf("/") !== 0 && !operator1.includes("/")) {
      addOperate("/");
      }
  }
});


// Clear function

let clear = opClear.addEventListener("click", function() {
  op1.textContent = "";
  operator.textContent = "";
  op2.textContent = "";
  even.textContent = "";
  result.textContent = "";
});


// Delete function to delete the last digit or operator

numBack.addEventListener("click", function () {
  if (result.textContent.length > 0) {
      op2.textContent = "";
      op1.textContent = "";
      operator.textContent = "";
      even.textContent = "";
      result.textContent = "";
  } else if (op2.textContent.length > 0) {
      op2.textContent = op2.textContent.slice(0, -1);
  }
  else if (operator.textContent.length > 0) {
     operator.textContent = operator.textContent.slice(0, -1);
  }
  else if (op1.textContent.length > 0) {
     op1.textContent = op1.textContent.slice(0, -1);
  }
});

// Keydown function

document.addEventListener("keydown", function(event) {
  // keydown function to numbers 0-9
  if (event.key >= "0" && event.key <= "9") {
    addNumber(event.key);

  /* dont function :
     - Can't be more than one dot
     - Can't start with dot
  */
  // keydown function to dot

  } else if (event.key === ".") {
    if (operator.textContent === "") {
      let dot1 = op1.textContent;
      if (dot1.length > 0 && dot1.indexOf(".") !== 0 && !dot1.includes(".")) {
        addNumber(".");
      }
    } else {
      let dot2 = op2.textContent;
      if (dot2.length > 0 && dot2.indexOf(".") !== 0 && !dot2.includes(".")) {
        addNumber(".");
      }
    }
  }

  // Operator keys can't be more than once
  // keydown function to operators
  if (["+", "-", "*", "/"].includes(event.key)) {
     if (operator.textContent === "") {
      let operator1 = operator.textContent;
      if (operator1.indexOf["+", "-", "*", "/"] !== 0 && !operator1.includes["+", "-", "*", "/"]) {
        addOperate(event.key);
      }
    }     
  } 
  // keydown function to Backspace

  if (event.key === "Backspace") {
    numBack.click();
  }

  // keydown function to Enter

  if (event.key === "Enter") {
    opEven.click();
  }
});