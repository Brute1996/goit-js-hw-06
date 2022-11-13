const inputTextEl = document.querySelector('#validation-input')

const inputTextElBlurVaidation = (event) => {
    const validInputLength = parseInt(inputTextEl.dataset.length);
    let inputLength = event.currentTarget.value.length;

    inputTextEl.classList.add('invalid')

    if (inputLength === validInputLength) {
        inputTextEl.classList.replace('invalid', 'valid')
    } else if (inputLength === 0) {
        inputTextEl.classList.remove('invalid')
    }
        else inputTextEl.classList.remove('valid')

    
}

inputTextEl.addEventListener('blur', inputTextElBlurVaidation)