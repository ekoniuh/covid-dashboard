import state from '../../state';

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

  buildRow(item) {
    return `<tr>
							${this.buildImg(item.countryInfo, item.country)}
							 ${this.buildTotalConfirmed(item[state.keyValue])}
					  </tr>`;
  }

  buildImg(countryInfo, country) {
    return `<td><img src="${countryInfo.flag}">${country}</td>`;
  }

  buildTotalConfirmed(keyValue) {
    return `<td class="cases-total">
              ${keyValue}
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
