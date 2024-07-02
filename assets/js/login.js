document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  const btnEye = document.querySelectorAll('.btn-eye');

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

  forms.forEach((form) => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const inputs = form.querySelectorAll('.require-input');

      inputs.forEach((input) => {
        if (input.value === '') {
          const inputBlock = input.closest('.input-block');
          addStyleInputEmpty(inputBlock);

          return;
        }
      });
    });
  });
});

function addStyleInputEmpty(input) {
  input.querySelector('fieldset').classList.add('border-danger', 'bg-white');
  input.querySelector('.error-text').textContent = 'Обязательно поле';
  input.querySelector('.error-text').classList.remove('hidden');
}
