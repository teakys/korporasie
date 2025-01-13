





let answer;

const cardNumber = document.getElementById("format");

cardNumber.oninput = (e) => {
  let cursorPos = e.target.selectionStart
  let currentValue = e.target.value
  let cleanValue = currentValue.replace(/\D/g, "");
  let formatInput = patternMatch({
      input: cleanValue,
      template: "xxx.xxx.xxx-xx"
   });
  
  e.target.value = formatInput
  
  let isBackspace = (e?.data==null) ? true: false
  let nextCusPos = nextDigit(formatInput, cursorPos, isBackspace)
  
  cardNumber.setSelectionRange(nextCusPos+1, nextCusPos+1);
};

function nextDigit(input, cursorpos, isBackspace) {
  if (isBackspace){
    for (let i = cursorpos-1; i > 0; i--) {
    if(/\d/.test(input[i])){
      return i
    }
  }
  }else{
    for (let i = cursorpos-1; i < input.length; i++) {
    if(/\d/.test(input[i])){
      return i
    }
  }
  }
  
  return cursorpos
}

function patternMatch({
  input,
  template
}) {
  try {

    let j = 0;
    let plaintext = "";
    let countj = 0;
    while (j < template.length) {
      // code block to be
      
      if (countj > input.length - 1) {
        template = template.substring(0, j);
        break;
      }

      if (template[j] == input[j]) {
        j++;
        countj++;
        continue;
      }

      if (template[j] == "x") {
        template = template.substring(0, j) + input[countj] + template.substring(j + 1);
        plaintext = plaintext + input[countj];
        countj++;
      }
      j++;
    }

    return template
 
  } catch {
    return ""
  }
}

const btn = document.querySelector('#btn'); 
const radioButtons = document.querySelectorAll('input[name="user"]');
btn.addEventListener("click", () => {
    let selectedSize;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            answer = radioButton.value;
            break;
        }
    }
    if (answer == 'associado') {
      document.getElementById('hahaha').style.display='none';
      document.getElementById('contato-delete').style.display='none';
      document.getElementById("admin-container").style.display="none";
      document.getElementById('entidade-change').textContent = document.getElementById('entidade-change').textContent.replace('ENTIDADE', 'ASSOCIAÇÃO');
    } else if (answer == 'entidade') {
      document.getElementById('hahaha').style.display='none';
      document.getElementById('contato-delete').style.display='none';
      document.getElementById("admin-container").style.display='none';
      document.getElementById('entidade-change').textContent = document.getElementById('entidade-change').textContent.replace('ASSOCIAÇÃO', 'ENTIDADE');
    } else {
      document.getElementById('hahaha').style.display='flex';
      document.getElementById('contato-delete').style.display='flex';
      document.getElementById("admin-container").style.display='flex';
      document.getElementById('entidade-change').textContent = document.getElementById('entidade-change').textContent.replace('ASSOCIAÇÃO', 'ENTIDADE');
    }
});



if (answer == 'associado') {
  document.getElementById('hahaha').style.display='none';
  document.getElementById('contato-delete').style.display='none';
  document.getElementById("admin-container").style.display="none";
}