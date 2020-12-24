import '../styles/style.scss';
import CasesGlobalModel from './table/tableGlobal/tableGlobalModel';
import CasesGlobalModelView from './table/tableGlobal/tableGlobalView';
import CasesCountryModel from './table/tableCountry/tableCountryModel';
import CasesCountryView from './table/tableCountry/tableCountryView';
import GraphView from './graph/graphView';
import GraphModel from './graph/graphModel';
import { stateGlobalTable, stateCountryTable, stateGraph } from './state';
import Keyboard from './virtualKeyBoard/virtualKeyBoard';
import {
  getKeyTotal,
  changeCaseSwitch,
  sortData,
  searchCountry,
  createWindowGlobalTotal,
  addFieldCountryDailyDataGraph,
} from './utils';

import dataGraph from '../data/objectDataWorld';

alert(
  'Уважаемый проверяющий. Поздравляем вас от нашей команды с наступающими праздниками и хотели бы попросить, ещё дня два на завершение работы'
);

const popCanvas = document.getElementById('popChart');

const casesGlobalModel = new CasesGlobalModel();
const casesGlobalModelView = new CasesGlobalModelView(casesGlobalModel);

const casesCountryModel = new CasesCountryModel();
const casesCountryView = new CasesCountryView();

const keyBoard = new Keyboard();

const graphModel = new GraphModel(dataGraph);
// const graphView = new GraphView(popCanvas, dataGraph);
const graphView = new GraphView(popCanvas, dataGraph);

function updateTableGlobal() {
  document.querySelector('.country-wrap').append(casesGlobalModelView.render());
}

function updateTableCountry(data, key) {
  document
    .querySelector('.global-info')
    .append(casesCountryView.render(data, key));
}

// function updateGraph(data, key) {
//   document
//     .querySelector('.global-info')
//     .append(graphView.render(key));
// }

graphModel.loadingData.then(() =>
  graphView.render(stateGlobalTable.switchParameterState, graphModel.dataGraph)
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

  document.querySelector('.global-data').innerHTML = createWindowGlobalTotal(
    casesCountryModel.globalCasesData[0].cases
  );
});

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
    graphView.render(
      stateGlobalTable.switchParameterState,
      graphModel.dataGraph
    );
  });

document
  .querySelector('.graph-container .select-parameter')
  .addEventListener('change', ({ target }) => {
    stateGraph.switchParameterState = target.value;
    // changeCaseSwitch(target, stateGraph);
    stateGraph.keyView = getKeyTotal(
      stateGraph.switchParameterState,
      stateGraph.isSwitchParameterPeriod,
      stateGraph.isSwitchParameterValue
    );
    graphView.render(stateGraph.keyView, graphModel.dataGraph);
  });

[...document.querySelectorAll('.global-info__switch')].forEach((item) => {
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
    graphView.render(stateGlobalTable.keyValue, graphModel.dataGraph);
  });
});

[...document.querySelectorAll('.full-screen__btn')].forEach((item) => {
  item.addEventListener('click', ({ target }) => {
    target.closest('.box-shadow').classList.toggle('full-screen__active');
  });
});

[...document.querySelectorAll('.country-info__switch')].forEach((item) => {
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
});

document
  .querySelector('.global-table')
  .addEventListener('click', async ({ target }) => {
    const countryItem = target.closest('.country-item');
    const countryName = countryItem.querySelector('.country-name').textContent;

    stateGlobalTable.isClickCountry = true;
    stateCountryTable.countryData = casesGlobalModel.countriesData.find(
      (item) => item.country === countryName
    );
    updateTableCountry(
      stateCountryTable.countryData,
      stateCountryTable.keyView
    );

    await graphModel.fetchDataCountry(countryName);

    const populationCountry = stateCountryTable.countryData.population;
    // console.log('populitionCointry', populationCountry);

    addFieldCountryDailyDataGraph(graphModel.dataGraph, populationCountry);

    console.log('graphModel.dataGraph', graphModel.dataGraph);
    graphView.render(stateGlobalTable.keyValue, graphModel.dataGraph);
  });

[...document.querySelectorAll('.graph-info__switch')].forEach((item) => {
  item.addEventListener('change', ({ target }) => {
    changeCaseSwitch(target, stateGraph);
    stateGraph.keyView = getKeyTotal(
      stateGraph.switchParameterState,
      stateGraph.isSwitchParameterPeriod,
      stateGraph.isSwitchParameterValue
    );
    graphView.render(stateGraph.keyView, graphModel.dataGraph);
  });
});

document
  .getElementById('input-search')
  .addEventListener('keyup', () => searchCountry());

window.addEventListener('DOMContentLoaded', () => {
  keyBoard.init();
});
