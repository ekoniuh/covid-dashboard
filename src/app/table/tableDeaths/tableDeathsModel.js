// import CasesTableView from './tableView';
import { sortData } from '../../utils';
import state from '../../state';

export default class CasesDeathsModel {
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
    this.data = {};
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
    }
    return this.countriesData;
  }

  async fetchCountries() {
    try {
      const response = await fetch('https://api.covid19api.com/summary');
      this.data = await response.json();
      // console.log(this.data);
      // this.sortData();

      // TODO мне здесь данные брать сразу?
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

  // sortData() {
  //   // this.stats.sort((a, b) => (a[`${word}`] < b[`${word}`] ? 1 : -1));
  //   this.data.sort((a, b) =>
  //     a.Countries.TotalConfirmed < b.Countries.TotalConfirmed ? 1 : -1
  //   );
  //   console.log('this.data', this.data);
  // }
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
