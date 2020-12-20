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
