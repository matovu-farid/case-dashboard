const addValidation=()=>{
    const inputs  = document.querySelectorAll('input');
    inputs.forEach(input=>{
        input.addEventListener('input',()=>{

            const errorDiv = document.querySelector(`#${input.id}-error`)
            if(input.validity.patternMismatch){
                errorDiv.textContent = `Please enter a valid ${input.id}`;
                input.classList.add('invalid')
                
            }else {
                errorDiv.textContent = '';
               input.classList.add('valid')
            }
        })
    })
}

addValidation();

const addSubmitValidation = ()=>{
    const form = document.querySelector('form');
    form.addEventListener('submit',()=>{

    })
}

