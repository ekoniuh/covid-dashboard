import '../styles/style.scss';
import CasesGlobalModel from './table/tableGlobal/tableGlobalModel';
import CasesGlobalModelView from './table/tableGlobal/tableGlobalView';
import CasesCountryModel from './table/tableCountry/tableCountryModel';
import CasesCountryView from './table/tableCountry/tableCountryView';
import { stateGlobalTable, stateCountryTable } from './state';
import {
  getKeyTotal,
  changeCaseSwitch,
  sortData,
  searchCountry,
} from './utils';

const casesGlobalModel = new CasesGlobalModel();
const casesGlobalModelView = new CasesGlobalModelView(casesGlobalModel);

const casesCountryModel = new CasesCountryModel();
const casesCountryView = new CasesCountryView(casesCountryModel);
// stateCountryTable.defaultDataGlobal = casesCountryModel.globalCasesData;
// console.log(
//   'stateCountryTable.defaultDataGlobal',
//   stateCountryTable.defaultDataGlobal
// );

function updateTableGlobal() {
  document.querySelector('.country-wrap').append(casesGlobalModelView.render());
}

function updateTableCountry(data, key) {
  console.log(
    'stateCountryTable.defaultDataGlobal',
    stateCountryTable.defaultDataGlobal
  );
  document
    .querySelector('.cases-wrap')
    .append(casesCountryView.render(data, key));
}

updateTableGlobal();
// updateTableCountry();

document
  .querySelector('.left-container .select-parameter')
  .addEventListener('change', ({ target }) => {
    stateGlobalTable.switchParameterState = target.value;

    stateGlobalTable.keyValue = getKeyTotal(
      stateGlobalTable.switchParameterState,
      stateGlobalTable.isSwitchParameterPeriod,
      stateGlobalTable.isSwitchParameterValue
    );
    updateTableGlobal();
  });

[...document.querySelectorAll('.left-container .switch-change')].forEach(
  (item) => {
    item.addEventListener('change', ({ target }) => {
      changeCaseSwitch(target, stateGlobalTable);

      stateGlobalTable.keyValue = getKeyTotal(
        stateGlobalTable.switchParameterState,
        stateGlobalTable.isSwitchParameterPeriod,
        stateGlobalTable.isSwitchParameterValue
      );

      sortData(casesGlobalModel.countriesData, stateGlobalTable.keyValue);
      updateTableGlobal();
    });
  }
);

[...document.querySelectorAll('.full-screen__btn')].forEach((item) => {
  item.addEventListener('click', ({ target }) => {
    target.closest('.box-shadow').classList.toggle('full-screen__active');
  });
});

[...document.querySelectorAll('.right-container .switch-change')].forEach(
  (item) => {
    item.addEventListener('change', ({ target }) => {
      // changeCaseSwitch(target, casesGlobalModel.countriesData);
      // updateTableCountry();
    });
  }
);

document
  .querySelector('.global-table')
  .addEventListener('click', ({ target }) => {
    const countryItem = target.closest('.country-item');
    const countryName = countryItem.querySelector('.country-name').textContent;
    const countryData = casesGlobalModel.countriesData.find(
      (item) => item.country === countryName
    );
    console.log('stateCountryTable.keyView', stateCountryTable.keyView);
    updateTableCountry(countryData, stateCountryTable.keyView);
  });

document
  .getElementById('input-search')
  .addEventListener('keyup', () => searchCountry());
