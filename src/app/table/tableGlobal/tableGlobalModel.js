// import CasesTableView from './tableView';
import { setPerOneHundredThousand, sortData } from '../../utils';
import state from '../../state';

export default class CasesGlobalModel {
  constructor() {
    // this.mode = CasesTable.MODES.ALL;
    // todo работать лучше с data где всё
    // todo лежит или подоставать оттуда инфу ?

    this.countries = [];
    this.countriesName = [];
    this.countriesData = [];
    this.cases = [];
    this.nameOfFlags = [];
    this.TotalConfirmedCountry = [];
    this.globalData = {};
    this.init();

    // this.TableView = new TableView();
  }

  // static MODES = {
  //   BY_DAY: 'by_day',
  //   ALL: 'all',
  // };
  async init() {
    await this.fetchCountries();
    if (this.view) {
      // this.sortData();
      this.view.render();
    }
  }

  getCountriesData() {
    if (this.countriesData) {
      sortData(this.countriesData, state.keyValue);
      console.log(this.countriesData);
    }
    return this.countriesData.filter((item) => {
      if (item.country === 'MS Zaandam') {
        return false;
      }
      if (item.country === 'Diamond Princess') {
        return false;
      }
      return true;
    });
  }

  async fetchCountries() {
    try {
      // const globalDataResponse = await fetch(
      //   'https://api.covid19api.com/summary'
      // );
      // this.globalData = await globalDataResponse.json();
      const countriesData = await fetch(
        'https://disease.sh/v3/covid-19/countries'
      );
      this.countriesData = await countriesData.json();

      setPerOneHundredThousand(this.countriesData);
      // console.log(this.countriesData);

      // this.countriesData = this.data.Countries;
      // this.countriesName = this.data.Countries.map((item) => item.Country);
      // this.TotalConfirmedCountry = this.data.Countries.map(
      //   (item) => item.TotalConfirmed
      // );
      // this.globalData = this.data.Global;
      // this.nameOfFlags = this.data.Countries.map((item) =>
      //   item.CountryCode.toLowerCase()
      // );
    } catch (error) {
      console.log(error);
    }
  }

  // async fetchCases() {
  //   try {
  //     this.cases = await fetch('https://covid19-api.org/api/timeline');
  //   } catch (er) {
  //     console.log(er);
  //   }
  // }

  // changeSort() {
  //   this.countries.sort();
  // }
}
