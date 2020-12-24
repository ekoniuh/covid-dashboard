// import dataGraph from '../../data/objectDataWorld';
import { addFieldCountryDailyDataGraph } from '../utils';

export default class GraphModel {
  constructor(dataGraph) {
    this.dataGraph = dataGraph;
    // console.log('object', this.dataGraph);
    this.apiAnswer = {};
    this.dataTimeAll = null;
    this.loadingData = this.initData();
    // this.loadingDataCountry = this.initDataCountry();
  }

  async initData() {
    await this.fetchDataGraph();
  }

  // async initDataCountry() {
  //   await this.fetchDataCountry();
  // }

  async fetchDataGraph() {
    const link = 'https://disease.sh/v3/covid-19/historical/all?lastdays=300';

    try {
      const summaryPerDate = await fetch(link);
      this.apiAnswer = await summaryPerDate.json();
      this.getDataWorld(this.apiAnswer);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchDataCountry(nameCountry) {
    const urlTimeAll = `https://disease.sh/v3/covid-19/historical/${nameCountry}?lastdays=366`;
    // const urlDaily = `https://disease.sh/v3/covid-19/historical/${nameCountry}?lastdays=366`;
    try {
      const dataTimeAll = await fetch(urlTimeAll);
      this.dataTimeAll = await dataTimeAll.json();

      // const dataDaily = await fetch(urlDaily);
      // this.dataDaily = await dataDaily.json();
      // this.countryBel = this.countriesData.filter(
      //   (item) => item.country === 'Belarus'
      // )[0].population;
      // console.log('this.countryBel', this.countryBel);

      // console.log('apiAnswer', this.dataTimeAll.timelines);
      // console.log('dataTimeAll', this.dataTimeAll);
      this.getDataWorld(this.dataTimeAll.timeline);

      // console.log('addFieldCountryDailyDataGraph', this.dataGraph);
      // addFieldCountryDailyDataGraph(this.dataGraph);
      // console.log('после', this.dataGraph);
    } catch (error) {
      console.log(error);
    }
  }

  getDataWorld(data) {
    this.dataGraph.cases.value = Object.values(data.cases);
    this.dataGraph.cases.date = Object.keys(data.cases);

    this.dataGraph.deaths.value = Object.values(data.deaths);
    this.dataGraph.deaths.date = Object.keys(data.deaths);

    this.dataGraph.recovered.value = Object.values(data.recovered);
    this.dataGraph.recovered.date = Object.keys(data.recovered);
  }
}
