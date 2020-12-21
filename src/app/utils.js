import state from './state';

const ONE_HUNDRED_THOUSAND = 100000;
export function setPerOneHundredThousand(data) {
  data.forEach((country) => {
    country.casesPerOneHundredThousand = Number(
      Math.round((country.cases / country.population) * ONE_HUNDRED_THOUSAND)
    );
    country.casesTodayPerOneHundredThousand = Number(
      (
        (country.todayCases / country.population) *
        ONE_HUNDRED_THOUSAND
      ).toFixed(3)
    );
    country.deathsPerOneHundredThousand = Number(
      Math.round((country.deaths / country.population) * ONE_HUNDRED_THOUSAND)
    );
    country.deathsTodayPerOneHundredThousand = Number(
      (
        (country.todayDeaths / country.population) *
        ONE_HUNDRED_THOUSAND
      ).toFixed(3)
    );
    country.recoveredPerOneHundredThousand = Number(
      Math.round(
        (country.recovered / country.population) * ONE_HUNDRED_THOUSAND
      )
    );
    country.recoveredTodayPerOneHundredThousand = Number(
      (
        (country.todayRecovered / country.population) *
        ONE_HUNDRED_THOUSAND
      ).toFixed(3)
    );
  });
}

export function sortData(data, key) {
  data.sort((a, b) => (a[key] < b[key] ? 1 : -1));
}

function setKeyValue(statePeople, period, valueAbsolute) {
  if (period === true && valueAbsolute === true) {
    state.keyValue = `${statePeople}TodayPerOneHundredThousand`;
    console.log('state.keyValue', state.keyValue);
  }
  if (period === false && valueAbsolute === false) {
    state.keyValue = `${statePeople}`;
  }
  if (period === true && valueAbsolute === false) {
    state.keyValue = `today${
      statePeople[0].toUpperCase() + statePeople.slice(1)
    }`;
    // console.log('state.keyValue', state.keyValue);
  }
  if (period === false && valueAbsolute === true) {
    state.keyValue = `${statePeople}PerOneHundredThousand`;
  }
}

export function getKeyTotal(statePeople, period, valueAbsolute, countriesData) {
  if (statePeople === 'cases') {
    setKeyValue(statePeople, period, valueAbsolute);
  }

  if (statePeople === 'deaths') {
    setKeyValue(statePeople, period, valueAbsolute);
  }

  if (statePeople === 'recovered') {
    setKeyValue(statePeople, period, valueAbsolute);
  }

  sortData(countriesData, state.keyValue);
  return state.keyValue;
}

export function changeCaseSwitch(target, countriesData) {
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

  getKeyTotal(
    state.switchParameterState,
    state.isSwitchParameterPeriod,
    state.isSwitchParameterValue,
    countriesData
  );
}
