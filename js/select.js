document.addEventListener('DOMContentLoaded', () => {
  const selectWrappers = document.querySelectorAll('.custom-select-wrapper');

  selectWrappers.forEach(wrapper => {
    const trigger = wrapper.querySelector('.custom-select__trigger');
    trigger.addEventListener('click', () => {
      // Закрытие всех select, кроме текущего
      selectWrappers.forEach(otherWrapper => {
        if (otherWrapper !== wrapper) {
          otherWrapper.querySelector('.custom-select').classList.remove('open');
        }
      });

      // Переключение состояния текущего select
      wrapper.querySelector('.custom-select').classList.toggle('open');
    });
  });

  document.addEventListener('click', (e) => {
    const isSelect = e.target.matches('.custom-select, .custom-select *');
    if (!isSelect) {
      selectWrappers.forEach(wrapper => {
        wrapper.querySelector('.custom-select').classList.remove('open');
      });
    }
  });

  document.querySelectorAll('.custom-option').forEach(option => {
    option.addEventListener('click', function () {
      const select = this.closest('.custom-select');
      select.querySelector('.custom-select__trigger span').textContent = this.textContent;
      select.classList.remove('open');
      const value = this.getAttribute('data-value');
      if (value === 'international') {
        document.getElementById('payment').textContent = 'Передоплата (за реквізитами)';
      }
    });
  });
});



document.addEventListener('DOMContentLoaded', function () {
    var selectOptions = document.querySelectorAll('.custom-option');
    var departmentInputWrap = document.querySelector('.input-wrap--department');
    var townInputWrap = document.querySelector('.input-wrap--town');
    var countryInputWrap = document.querySelector('.input-wrap--country');
    var regionInputWrap = document.querySelector('.input-wrap--region');
    var indexInputWrap = document.querySelector('.input-wrap--index');
    var paymentInputWrap = document.querySelector('.input-wrap--payment');

    if (paymentInputWrap) paymentInputWrap.style.display = 'none';
    if (departmentInputWrap) departmentInputWrap.style.display = 'none';
    if (townInputWrap) townInputWrap.style.display = 'none';
    if (countryInputWrap) countryInputWrap.style.display = 'none';
    if (regionInputWrap) regionInputWrap.style.display = 'none';
    if (indexInputWrap) indexInputWrap.style.display = 'none';

    selectOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            var value = this.getAttribute('data-value');
            if (value === 'pickup') {
                // Если выбран Самовивіз, скрываем элементы
                if (departmentInputWrap) departmentInputWrap.style.display = 'none';
                if (townInputWrap) townInputWrap.style.display = 'none';
                if (countryInputWrap) countryInputWrap.style.display = 'none';
                if (regionInputWrap) regionInputWrap.style.display = 'none';
                if (indexInputWrap) indexInputWrap.style.display = 'none';
                if (paymentInputWrap) paymentInputWrap.style.display = '';
            } else if (value === 'nova_poshta') {
                // В других случаях показываем элементы
                if (departmentInputWrap) departmentInputWrap.style.display = '';
                if (townInputWrap) townInputWrap.style.display = '';
                if (paymentInputWrap) paymentInputWrap.style.display = '';
                if (countryInputWrap) countryInputWrap.style.display = 'none';
                if (regionInputWrap) regionInputWrap.style.display = 'none';
                if (indexInputWrap) indexInputWrap.style.display = 'none';
            } else if (value === 'international') {
              if (departmentInputWrap) departmentInputWrap.style.display = '';
              if (countryInputWrap) countryInputWrap.style.display = '';
              if (regionInputWrap) regionInputWrap.style.display = '';
              if (indexInputWrap) indexInputWrap.style.display = '';
            }
        });
    });
});


