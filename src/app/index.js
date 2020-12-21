import '../styles/style.scss';
import CasesGlobalModel from './table/tableGlobal/tableGlobalModel';
import CasesGlobalModelView from './table/tableGlobal/tableGlobalView';
import state from './state';
import { getKeyTotal, changeCaseSwitch } from './utils';

const casesGlobalModel = new CasesGlobalModel();
const casesGlobalModelView = new CasesGlobalModelView(casesGlobalModel);

function updateWrapTable() {
  document.querySelector('.country-wrap').append(casesGlobalModelView.render());
}

updateWrapTable();

document
  .querySelector('.select-parameter')
  .addEventListener('change', ({ target }) => {
    state.switchParameterState = target.value;

    getKeyTotal(
      state.switchParameterState,
      state.isSwitchParameterPeriod,
      state.isSwitchParameterValue,
      casesGlobalModel.countriesData
    );
    updateWrapTable();
  });

[...document.querySelectorAll('.switch-change')].forEach((item) => {
  item.addEventListener('change', ({ target }) => {
    changeCaseSwitch(target, casesGlobalModel.countriesData);
    updateWrapTable();
  });
});

[...document.querySelectorAll('.full-screen__btn')].forEach((item) => {
  item.addEventListener('click', ({ target }) => {
    target.closest('.box-shadow').classList.toggle('full-screen__active');
  });
});


