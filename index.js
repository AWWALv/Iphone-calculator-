const outputScreen = document.getElementById('output');
const clearBtn = document.querySelector(".clear")


function Display(num){
    outputScreen.value += num;
    clearBtn.textContent = 'C';
  
}

function Calculate(){
    try{
        let result = eval(outputScreen.value);
        if (result < 1) {
            result = Math.round(result * 1000) / 1000;
        }
        outputScreen.value = result;
    }
    catch(err){
        alert("invalid")
    }
}


function clearDisplay() {
    if (outputScreen.value.length > 0) {
      // There is at least one character in the display, so remove the last one
      outputScreen.value = outputScreen.value.slice(0, -1);
    } else {
      // There are no characters in the display, so clear the entire display
      outputScreen.value = "";
      clearBtn.textContent = 'AC';

    }
  }
  