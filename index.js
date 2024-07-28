const signInButton =document.querySelector('.js-signin-button')
      const signUpButton = document.querySelector('.js-signup-button')
      const nameField =document.querySelector('.js-input-name')
      const title =document.querySelector('.title')

signInButton.addEventListener('click',() =>{
   nameField.style.maxHeight='0'
   title.innerHTML='Sign In'
   signUpButton.classList.add('disabled');
   signInButton.classList.remove('disabled');

})
signUpButton.addEventListener('click', () =>{
   nameField.style.maxHeight='65px';
   title.innerHTML='Sign Up'
   signInButton.classList.add('disabled');
   signUpButton.classList.remove('disabled');

})