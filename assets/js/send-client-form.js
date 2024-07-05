document.addEventListener('DOMContentLoaded', () => {
  const openPopups = document.querySelectorAll('.open-popup');
  const closePopups = document.querySelectorAll('.close-popup');
  const modals = document.querySelectorAll('.modal');

  openPopups.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-open-popup');
      const popup = document.querySelector(`#${id}`);

      popup.style.display = 'flex';

      setTimeout(() => {
        popup.classList.add('show');
        document.body.style.overflow = 'hidden';
      }, 10);
    });
  });

  closePopups.forEach((closePopup) => {
    closePopup.addEventListener('click', () => {
      const popup = closePopup.closest('.modal');
      popup.classList.remove('show');
      document.body.style.overflow = '';

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
});
