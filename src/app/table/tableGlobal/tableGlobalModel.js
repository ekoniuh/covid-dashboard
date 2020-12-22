// import CasesTableView from './tableView';
import { addFieldPerOneHundredThousand, sortData } from '../../utils';
import { stateGlobalTable } from '../../state';

export default class CasesGlobalModel {
  constructor() {
    this.countriesData = [];
    this.TotalConfirmedCountry = [];
    this.globalData = [];
    this.init();

    // this.countries = [];
    // this.mode = CasesTable.MODES.ALL;
    // this.countriesName = [];
    // this.cases = [];
    // this.nameOfFlags = [];
    // this.TableView = new TableView();
  }

  // static MODES = {
  //   BY_DAY: 'by_day',
  //   ALL: 'all',
  // };
  async init() {
    await this.fetchCountries();
    if (this.view) {
      this.view.render();
    }
  }

  getCountriesData() {
    if (this.countriesData) {
      sortData(this.countriesData, stateGlobalTable.keyValue);
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

      addFieldPerOneHundredThousand(this.countriesData);
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

  // async fetchGlobalData() {
  //   try {
  //     const globalDataResponse = await fetch(
  //       'https://disease.sh/v3/covid-19/all'
  //     );
  //     this.globalData[0] = await globalDataResponse.json();
  //     // this.globalData.push(this.globalDataObj);

  //     console.log(this.globalData);
  //     addFieldPerOneHundredThousand(this.globalData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
