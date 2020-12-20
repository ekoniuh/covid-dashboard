export default class CasesGlobalModelView {
  constructor(globalModel) {
    this.globalModel = globalModel;
    this.globalModel.view = this;
    this.viewWrapper = document.createElement('table');
    this.viewWrapper.classList.add('table');
  }

  // list = null;

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

  buildRow({ TotalConfirmed, CountryCode, Country }) {
    return `<tr>
							${this.buildImg(CountryCode, Country)}
							<td>${TotalConfirmed}</td>
					  </tr>`;
  }

  buildImg(CountryCode, Country) {
    return `<td><img src="https://disease.sh/assets/img/flags/${CountryCode.toLowerCase()}.png">${Country}</td>`;
  }

  // buildModeButtons() {
  //   return `<button onclick={() => {sort()}}>a</button>
  // 	<button>a</button><button>a</button>`;
  // }

  // updateList(data) {
  //   this.list;
  // }
}
