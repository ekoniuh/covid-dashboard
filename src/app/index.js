import '../styles/style.scss';
import CasesGlobalModel from './table/tableGlobal/tableGlobalModel';
import CasesGlobalModelView from './table/tableGlobal/tableGlobalView';
import state from './state';
import { sortData } from './utils';

const casesGlobalModel = new CasesGlobalModel();
const casesGlobalModelView = new CasesGlobalModelView(casesGlobalModel);

document.querySelector('.country-wrap').append(casesGlobalModelView.render());
// document.querySelector('.country-wrap').append(casesGlobalModelView.render());

function changeTotal(key) {
  [...document.querySelectorAll('.cases-total')].forEach((total, index) => {
    total.textContent = casesGlobalModel.countriesData[index][key];
  });
}

function getKeyTotal(statePeople, period, valueAbsolute) {
  if (statePeople === 'cases') {
    if (period === true && valueAbsolute === true) {
      state.keyValue = 'casesTodayPerOneHundredThousand';
    }
    if (period === false && valueAbsolute === false) {
      state.keyValue = 'cases';
    }
    if (period === true && valueAbsolute === false) {
      state.keyValue = 'todayCases';
    }
    if (period === false && valueAbsolute === true) {
      state.keyValue = 'casesPerOneHundredThousand';
    }
  }

  if (statePeople === 'deaths') {
    if (period === true && valueAbsolute === true) {
      state.keyValue = 'deathsTodayPerOneHundredThousand';
    }
    if (period === false && valueAbsolute === false) {
      state.keyValue = 'deaths';
    }
    if (period === true && valueAbsolute === false) {
      state.keyValue = 'todayDeaths';
    }
    if (period === false && valueAbsolute === true) {
      state.keyValue = 'deathsPerOneHundredThousand';
    }
  }

  if (statePeople === 'recovered') {
    if (period === true && valueAbsolute === true) {
      state.keyValue = 'recoveredTodayPerOneHundredThousand';
    }
    if (period === false && valueAbsolute === false) {
      state.keyValue = 'recovered';
    }
    if (period === true && valueAbsolute === false) {
      state.keyValue = 'todayRecovered';
    }
    if (period === false && valueAbsolute === true) {
      state.keyValue = 'recoveredPerOneHundredThousand';
    }
  }
  //
  sortData(casesGlobalModel.countriesData, state.keyValue);
  return state.keyValue;
}

document
  .querySelector('.select-parameter')
  .addEventListener('change', ({ target }) => {
    state.switchParameterState = target.value;
    changeTotal(
      getKeyTotal(
        state.switchParameterState,
        state.isSwitchParameterPeriod,
        state.isSwitchParameterValue
      )
    );
  });

function changeCaseSwitch(target) {
  const switchItem = target.closest('.switch-change');
  const dataSwitch = switchItem.dataset.switch;
  const isSwitchActive = switchItem.dataset.active;
  switch (dataSwitch) {
    case 'time-all':
      if (isSwitchActive === 'true') {
        state.isSwitchParameterPeriod = false;
        switchItem.dataset.active = 'false';
      } else {
        state.isSwitchParameterPeriod = true;
        switchItem.dataset.active = 'true';
      }
      break;

    case 'absolute-value':
      if (isSwitchActive === 'true') {
        state.isSwitchParameterValue = false;
        switchItem.dataset.active = 'false';
      } else {
        state.isSwitchParameterValue = true;
        switchItem.dataset.active = 'true';
      }
      break;
    default:
  }

  changeTotal(
    getKeyTotal(
      state.switchParameterState,
      state.isSwitchParameterPeriod,
      state.isSwitchParameterValue
    )
  );
}

[...document.querySelectorAll('.switch-change')].forEach((item) => {
  item.addEventListener('change', ({ target }) => {
    changeCaseSwitch(target);
  });
});
// document
//   .querySelector('.right-container')
//   .append(casesGlobalModelView.render());

[...document.querySelectorAll('.full-screen__btn')].forEach((item) => {
  item.addEventListener('click', ({ target }) => {
    target.closest('.box-shadow').classList.toggle('full-screen__active');
  });
});

// tableView.render();
