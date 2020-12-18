// import TableView from './tableView';

export default class CasesTable {
  constructor() {
    // this.mode = CasesTable.MODES.ALL;
    // todo работать лучше с data где всё
    // todo лежит или подоставать оттуда инфу ?

    this.countries = [];
    this.countriesName = [];
    this.cases = [];
    this.nameOfFlags = [];
    this.TotalConfirmedCountry = [];
    this.data = {};
    // this.TableView = new TableView();
  }

  // static MODES = {
  //   BY_DAY: 'by_day',
  //   ALL: 'all',
  // };

  async fetchCountries() {
    try {
      const response = await fetch('https://api.covid19api.com/summary');
      this.data = await response.json();

      // TODO мне здесь данные брать сразу?
      this.countriesData = this.data.Countries;
      this.countriesName = this.data.Countries.map((item) => item.Country);
      this.TotalConfirmedCountry = this.data.Countries.map(
        (item) => item.TotalConfirmed
      );
      this.globalData = this.data.Global;
      this.nameOfFlags = this.data.Countries.map((item) =>
        item.CountryCode.toLowerCase()
      );
      // console.log('this.countries', this.data.Countries);
      // console.log('this.countries', this.nameOfFlags);
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
