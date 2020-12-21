

export default class GraphModel {
  constructor () {
    this.x = [];
    this.y = [];
    this.apiAnswer = {};
    this.fetchData();
  }

  async fetchData () {
    const link = 'https://disease.sh/v3/covid-19/historical/all?lastdays=90';
    try {
      const summaryPerDate = await fetch(link);
      this.apiAnswer = await countriesData.json();
    } catch (error) {
      console.log(error);
    }
  }

  getData () {

  }


}
