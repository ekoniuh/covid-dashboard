// import CasesTableView from './tableView';
import { sortData, addFieldPerOneHundredThousand } from '../../utils';
import stateGlobalTable from '../../state';

export default class CasesCountryModel {
  constructor() {
    this.globalCasesData = [];
    this.init();
  }

  async init() {
    await this.fetchGlobalData();
    //  console.log(this.globalCasesData);
    // if (this.view) {
    //   // this.sortData();
    //   this.view.render();
    // }
  }

  // getCountriesData() {
  //   return this.globalCasesData;
  // }

  async fetchGlobalData() {
    try {
      const globalDataResponse = await fetch(
        'https://disease.sh/v3/covid-19/all'
      );
      this.globalCasesData[0] = await globalDataResponse.json();
      // this.globalData.push(this.globalDataObj);

      // console.log(this.globalCasesData);
      addFieldPerOneHundredThousand(this.globalCasesData);
    } catch (error) {
      console.log(error);
    }
  }

}
