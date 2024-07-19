document.addEventListener('DOMContentLoaded', () => {

    // input field state changes

    const inputBox = document.querySelector('.input');
    const inputField = document.getElementById('inputField');
    const userIcon = document.querySelector('#user-icon')

    // for focus state

    inputField.addEventListener('focus', () => {
        inputBox.classList.add('input-focused');
    })

    inputField.addEventListener('blur', () => {
        inputBox.classList.remove('input-focused');
    });

    //for filled state

    function checkInput() {
        if (inputField.value.trim() !== '') {
            inputField.classList.add('input-filled');
            inputField.classList.remove('input-default');
        } else {
            inputField.classList.remove('input-filled');
            inputField.classList.add('input-default');
        }
    }

    // Initial check
    checkInput();

    // Check on input event
    inputField.addEventListener('input', checkInput);


    // submit button different states

    const submitButton = document.querySelector('.button');
    const loadingIcon = document.querySelector('#loading-icon');



    //pressed state

    submitButton.addEventListener('mousedown', () => {
        submitButton.classList.add('button-primary-pressed')

    })

    //clicked state loading then disabled

    submitButton.addEventListener('click', () => {
        submitButton.classList.remove('button-primary-pressed');

        // check if all required elements are filled and form is valid or not


        const form = document.getElementById('my-form');
        if (!form.checkValidity()) {
            console.log('Form invalid');

            return;
        }


        // Change button state to loading

        submitButton.classList.add('button-primary-loading');
        loadingIcon.classList.add('loading-icon');

        inputField.setAttribute('disabled', 'true');
        submitButton.setAttribute('disabled', 'true');


        // Simulate loading time (2 seconds)
        setTimeout(() => {
            // Revert button state to default
            submitButton.classList.remove('button-primary-loading');
            loadingIcon.classList.remove('loading-icon');
            submitButton.classList.add('button-primary-disabled');
            inputField.classList.add('input-disabled');
            inputBox.classList.add('input-disabled');
            userIcon.querySelector('path').style.fill = 'var(--gray-6)'

        }, 2000);
    });
});


