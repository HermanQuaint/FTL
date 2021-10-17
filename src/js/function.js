const checkSelectNone = (event) => {
  if (event.target.value !== 'none' && event.target.getAttribute('data-selected') !== true) {
    event.target.setAttribute('data-selected', true);
  }
};

const cargoDanger = document.querySelector('.cargo__danger');
const cargoType = document.querySelector('#cargo-type');
const cargoTypeSelect = document.querySelector('.cargo__type__select');
const cargoWrapper = document.querySelector('.cargo__wrapper');
const cargoTempRegimeInput = document.querySelector('.cargo__temp-regime__input');
const tempWrapper = document.querySelector('.temp__wrapper');


document.querySelector('#carrying').addEventListener('click', checkSelectNone);
cargoType.addEventListener('click', checkSelectNone);

cargoTypeSelect.addEventListener('change', () => {
  if (cargoTypeSelect.value === 'dangerous') {
    cargoDanger.classList.remove('cargo__danger--none');
    cargoType.classList.remove('input--sm');
    cargoType.classList.add('input--bg');
    cargoWrapper.classList.add('cargo__wrapper--danger');
  }
  if (cargoTypeSelect.value !== 'dangerous') {
    cargoDanger.classList.add('cargo__danger--none');
    cargoType.classList.add('input--sm');
    cargoType.classList.remove('input--bg');
    cargoWrapper.classList.remove('cargo__wrapper--danger');
  }
});


const checked = () => {
  if(cargoTempRegimeInput.checked) {
    tempWrapper.classList.remove('temp__wrapper--none');
  } else {
    tempWrapper.classList.add('temp__wrapper--none');
  }
}

checked();
cargoTempRegimeInput.addEventListener('click', () => {
  checked();
});
