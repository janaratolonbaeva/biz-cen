document.addEventListener('DOMContentLoaded', () => {
  // POPUP
  const openPopups = document.querySelectorAll('.open-popup');
  const closePopups = document.querySelectorAll('.close-popup');
  const modals = document.querySelectorAll('.modal');
  const main = document.querySelector('.main');

  openPopups.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-open-popup');
      const popup = document.querySelector(`#${id}`);

      popup.style.display = 'flex';

      setTimeout(() => {
        popup.classList.add('show');
        document.body.style.overflow = 'hidden';
        main.classList.add('blur-[2px]');
      }, 10);
    });
  });

  closePopups.forEach((closePopup) => {
    closePopup.addEventListener('click', () => {
      const popup = closePopup.closest('.modal');
      popup.classList.remove('show');
      document.body.style.overflow = '';
      main.classList.remove('blur-[2px]');

      setTimeout(() => {
        popup.style.display = 'none';
      }, 300);
    });
  });

  window.addEventListener('click', (event) => {
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
        main.classList.remove('blur-[2px]');

        setTimeout(() => {
          modal.style.display = 'none';
        }, 300);
      }
    });
  });

  const rewardNumber = document.querySelector('#reward-number');
  const footageInput = document.querySelector('#footage');
  const budgetInput = document.querySelector('#budget');
  const budgetBlock = document.querySelector('#budget-block');
  const percentRewardInput = document.querySelector('#percent-reward');
  const formSendClient = document.querySelector('#send-client-form');

  formSendClient.querySelectorAll('input').forEach((input) => {
    input.addEventListener('focus', () => {
      formSendClient.querySelectorAll('.error-text').forEach((text) => {
        if (!text.classList.contains('hidden')) text.classList.add('hidden');
      });
    });
  });

  const moreMaxFootage = 100;
  const numberMoreMaxFootage = 3000;
  const numberMoreMinFootage = 1000;

  footageInput.addEventListener('input', function () {
    if (+this.value >= moreMaxFootage) {
      rewardNumber.textContent = numberMoreMaxFootage;
    } else {
      rewardNumber.textContent = numberMoreMinFootage;
    }
  });

  percentRewardInput.addEventListener('click', function (e) {
    if (budgetInput.value === '') {
      budgetBlock.querySelector('.error-text').textContent = 'Бюджет сделки должен быть более 100 000 ₽';
      budgetBlock.querySelector('.error-text').classList.remove('hidden');

      e.preventDefault();
    }
  });

  const minSumForPercentReward = 100000;

  budgetInput.addEventListener('blur', function (e) {
    if (budgetInput.value !== '' && budgetInput.value < minSumForPercentReward) {
      percentRewardInput.disabled = true;

      return;
    }

    percentRewardInput.disabled = false;
  });

  // DROPDOWN USER
  const btnsOfUserDropdown = document.querySelectorAll('.open-dropdown');
  const dropdownContents = document.querySelectorAll('.dropdown-content');

  btnsOfUserDropdown.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();

      const id = btn.getAttribute('data-dropdown');
      const dropdown = document.querySelector(`#${id}`);
      const items = dropdown.querySelectorAll('li');

      items.forEach((item) => {
        if (item.classList.contains('dropdown-option')) {
          if (btn.querySelector('.selected-text').textContent === item.textContent) {
            item.classList.add('text-primary');
          } else {
            item.classList.remove('text-primary');
          }
        }
      });

      btn.classList.toggle('active');
      dropdown.classList.toggle('show');
    });
  });

  window.addEventListener('click', (event) => {
    dropdownContents.forEach((dropdown) => {
      const items = dropdown.querySelectorAll('li');

      items.forEach((item) => {
        if (item.contains(event.target)) {
          dropdown.classList.remove('show');

          dropdown.closest('.dropdown').querySelector('.open-dropdown').classList.remove('active');

          if (dropdown.hasAttribute('id') && dropdown.getAttribute('id') === 'user-dropdown') {
            document.querySelector('[data-dropdown="user-dropdown"]').classList.remove('active');
          }

          if (item.classList.contains('dropdown-option')) {
            const textSpan = item.closest('.dropdown').querySelector('.selected-text');
            const id = item.getAttribute('data-value');

            textSpan.classList.remove('no-select');
            textSpan.textContent = item.textContent;
            textSpan.setAttribute('id', id);
          }

          return;
        }
      });

      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('show');

        if (dropdown.hasAttribute('id') && dropdown.getAttribute('id') === 'user-dropdown') {
          document.querySelector('[data-dropdown="user-dropdown"]').classList.remove('active');
        }
      }

      dropdown.closest('.dropdown').querySelector('.open-dropdown').classList.remove('active');
    });
  });

  // event focus on all inputs
  const allInputs = document.querySelectorAll('input[type="number"]');

  allInputs.forEach((input) => {
    input.addEventListener('input', function (e) {
      input.value = input.value.replace(/[^0-9]/g, '');
    });
  });
});
