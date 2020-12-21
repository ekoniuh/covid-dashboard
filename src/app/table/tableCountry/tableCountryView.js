export default class CasesCountryView {
  // constructor(globalModel) {
  //   this.globalModel = globalModel;
  //   this.globalModel.view = this;
  //   this.viewWrapper = document.createElement('table');
  //   this.viewWrapper.classList.add('table');
  // }
  constructor(countriesData) {
    this.countriesData = countriesData;
  }

  render() {
    this.viewWrapper.innerHTML = this.buildList();
    return this.viewWrapper;
    // ${this.buildModeButtons()}
  }

  buildList() {
    return `<tbody>
            ${this.globalModel
              .getCountriesData()
              .map((item) => this.buildRow(item))}
            </tbody>`;
  }

  buildRow({ cases, countryInfo, country }) {
    return `<tr>
							${this.buildImg(countryInfo, country)}
							 ${this.buildTotalConfirmed(cases)}
					  </tr>`;
  }

  buildImg(CountryCode, country) {
    return `<td><img src="${countryInfo.flag}">${country}</td>`;
  }

  buildTotalConfirmed(total) {
    return `<td>
              ${total}
            </td>`;
  }
  // buildModeButtons() {
  //   return `<button onclick={() => {sort()}}>a</button>
  // 	<button>a</button><button>a</button>`;
  // }

  // updateList(data) {
  //   this.list;
  // }
}
