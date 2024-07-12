document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  const btnEye = document.querySelectorAll('.btn-eye');
  const passwordInputs = document.querySelectorAll('input[type="email"]');

  btnEye.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const password = btn.previousElementSibling;
      const eyeClose = btn.querySelector('.eye-close');
      const eyeOpen = btn.querySelector('.eye-open');

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
  });

  passwordInputs.forEach((input) => {
    const inputBlock = input.closest('.input-block');

    input.addEventListener('blur', (e) => {
      if (input.value !== '' && !input.checkValidity()) {
        if (inputBlock) addStyleInputInvalid(inputBlock, 'Некорректный ввод');
      }
    });
  });

  forms.forEach((form) => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const inputs = form.querySelectorAll('.require-input');

      inputs.forEach((input) => {
        if (input.value === '') {
          const inputBlock = input.closest('.input-block');
          addStyleInputInvalid(inputBlock, 'Обязательно поле');

          return;
        }
      });
    });
  });
});

function addStyleInputInvalid(input, text) {
  input.querySelector('fieldset').classList.add('border-danger', 'bg-white');
  input.querySelector('.error-text').textContent = text;
  input.querySelector('.error-text').classList.remove('hidden');
}
