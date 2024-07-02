document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signup-form');
  const inputs = signupForm.querySelectorAll('input');
  const password = document.getElementById('password');
  const emailBlock = document.getElementById('email-block');
  const passwordBlock = document.getElementById('password-block');
  const btnEye = document.querySelector('.btn-eye');
  const eyeClose = document.querySelector('.eye-close');
  const eyeOpen = document.querySelector('.eye-open');

  btnEye.addEventListener('click', (e) => {
    if (password.type === 'password') {
      password.type = 'text';
      eyeClose.classList.add('hidden');
      eyeOpen.classList.remove('hidden');
    } else {
      password.type = 'password';
      eyeOpen.classList.add('hidden');
      eyeClose.classList.remove('hidden');
    }
  });

  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    inputs.forEach((input) => {
      if (input.value === '') {
        addStyleInputEmpty(emailBlock);
        addStyleInputEmpty(passwordBlock);

        return;
      }
    });
  });
});

function addStyleInputEmpty(input) {
  input.querySelector('fieldset').classList.add('border-danger', 'bg-white');
  input.querySelector('.error-text').textContent = 'Обязательно поле';
  input.querySelector('.error-text').classList.remove('hidden');
}
