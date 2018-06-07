'use strict';
(function () {
  var rateForm = document.querySelector('.rate') // stars field
  var stars = rateForm.querySelectorAll('input[name="rate"]');
  var message = document.querySelector('.rate__text'); // paragraph

  // Rate field listener, to show paragraph with subtext
  rateForm.addEventListener('change', function () {
    stars.forEach(function (el) {
      if (el.checked === false) {
        return
      } switch (el.value) {
        case '5':
          message.textContent = 'Excelent!';
          break;
        case '4':
          message.textContent = 'Well done!';
          break;
        case '3':
          message.textContent = 'Could be better...';
          break;
        case '2':
          message.textContent = 'Bad';
          break;
        case '1':
          message.textContent = 'Piece of shit';
          break;
      }
    })
  });
})();
