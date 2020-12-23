import '../styles/style.scss';
import CasesGlobalModel from './table/tableGlobal/tableGlobalModel';
import CasesGlobalModelView from './table/tableGlobal/tableGlobalView';
import CasesCountryModel from './table/tableCountry/tableCountryModel';
import CasesCountryView from './table/tableCountry/tableCountryView';
import GraphView from './graph/graphView';
import GraphModel from './graph/graphModel';
import { stateGlobalTable, stateCountryTable } from './state';
import Keyboard from './virtualKeyBoard/virtualKeyBoard';
import {
  getKeyTotal,
  changeCaseSwitch,
  sortData,
  searchCountry,
} from './utils';
import dataGraph from '../data/objectDataWorld';

// console.log(dataGraph, 'dataGraphFETCH');
// const graphView = new GraphView();
// console.log(graphView.apiAnswer);
const popCanvas = document.getElementById('popChart');

const casesGlobalModel = new CasesGlobalModel();
const casesGlobalModelView = new CasesGlobalModelView(casesGlobalModel);

const casesCountryModel = new CasesCountryModel();
const casesCountryView = new CasesCountryView();

const keyBoard = new Keyboard();

function updateTableGlobal() {
  document.querySelector('.country-wrap').append(casesGlobalModelView.render());
}

const graphModel = new GraphModel();
const graphView = new GraphView(popCanvas, dataGraph);

graphModel.loadingData.then(() =>
  graphView.render(stateGlobalTable.switchParameterState)
);

casesCountryModel.loadingData.then(() => {
  document
    .querySelector('.global-info')
    .append(
      casesCountryView.render(
        casesCountryModel.globalCasesData[0],
        stateCountryTable.keyView
      )
    );
});

function updateTableCountry(data, key) {
  document
    .querySelector('.global-info')
    .append(casesCountryView.render(data, key));
}

updateTableGlobal();

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

[...document.querySelectorAll('.global-info__switch')].forEach(
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

      if (stateGlobalTable.isClickCountry) {
        updateTableCountry(
          stateCountryTable.countryData,
          stateCountryTable.keyView
        );
      } else {
        updateTableCountry(
          casesCountryModel.globalCasesData[0],
          stateCountryTable.keyView
        );
      }
    });
  }
);

[...document.querySelectorAll('.full-screen__btn')].forEach((item) => {
  item.addEventListener('click', ({ target }) => {
    target.closest('.box-shadow').classList.toggle('full-screen__active');
  });
});

[...document.querySelectorAll('.country-info__switch')].forEach(
  (item) => {
    item.addEventListener('change', ({ target }) => {
      changeCaseSwitch(target, stateCountryTable);

      getKeyTotal(
        stateCountryTable.switchParameterState,
        stateCountryTable.isSwitchParameterPeriod,
        stateCountryTable.isSwitchParameterValue
      );

      if (stateGlobalTable.isClickCountry) {
        updateTableCountry(
          stateCountryTable.countryData,
          stateCountryTable.keyView
        );
      } else {
        updateTableCountry(
          casesCountryModel.globalCasesData[0],
          stateCountryTable.keyView
        );
      }
    });
  }
);

document
  .querySelector('.global-table')
  .addEventListener('click', ({ target }) => {
    const countryItem = target.closest('.country-item');
    const countryName = countryItem.querySelector('.country-name').textContent;

    stateCountryTable.countryData = casesGlobalModel.countriesData.find(
      (item) => item.country === countryName
    );

    stateGlobalTable.isClickCountry = true;
    updateTableCountry(
      stateCountryTable.countryData,
      stateCountryTable.keyView
    );
  });

document
  .getElementById('input-search')
  .addEventListener('keyup', () => searchCountry());

window.addEventListener('DOMContentLoaded', () => {
  keyBoard.init();
});

// Chart.defaults.global.defaultFontColor = 'blue';
// Chart.defaults.global.defaultBackGroundColor = 'blue';
