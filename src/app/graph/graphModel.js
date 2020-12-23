import dataGraph from '../../data/objectDataWorld';

export default class GraphModel {
  constructor(dataGraph) {
    // this.dataGraph = dataGraph;
    this.apiAnswer = {};
    this.loadingData = this.init();
  }

  async init() {
    await this.fetchDataGraph();
  }

  async fetchDataGraph() {
    const link = 'https://disease.sh/v3/covid-19/historical/all?lastdays=100';
    try {
      const summaryPerDate = await fetch(link);
      this.apiAnswer = await summaryPerDate.json();
      console.log(this.apiAnswer.cases);
      this.getDataWorld(this.apiAnswer);
      // console.log('apiAnswer', this.apiAnswer);
      console.log('dataGraph- ', dataGraph);
    } catch (error) {
      console.log(error);
    }
  }

  getDataWorld(data) {
    dataGraph.cases.value = Object.values(data.cases);
    dataGraph.cases.date = Object.keys(data.cases);

    dataGraph.deaths.value = Object.values(data.deaths);
    dataGraph.deaths.date = Object.keys(data.deaths);

    dataGraph.recovered.value = Object.values(data.recovered);
    dataGraph.recovered.date = Object.keys(data.recovered);
  }
  // getData () {

  // }
}
