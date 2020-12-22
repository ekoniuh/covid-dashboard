// import { stateCountryTable } from '../../state';

export default class CasesCountryView {
  constructor(globalModel) {
    // this.globalModel.view = this;
    // // [this.casesData] = [casesData[0]];

    // this.casesData = globalModel.getCountriesData();
    this.viewWrapper = document.createElement('table');
    this.viewWrapper.className = 'stat-table table';
  }

  render(casesData, key) {
    // console.log(this.casesData);
    // FIX мне не нравится передавать импортированные данные
    this.viewWrapper.innerHTML = this.buildList(casesData, key);
    return this.viewWrapper;
    // ${this.buildModeButtons()}
  }

  buildList(casesData, key) {
    return `<tbody>
               <tr>
									<td class="cases-info">${casesData[`cases${key}`]}</td>
									<td class="cases-info">${casesData[`deaths${key}`]}</td>
									<td class="cases-info">${casesData[`recovered${key}`]}</td>
								</tr>
            </tbody>`;
  }

  // buildRow() {
  //   return `
  // 						${this.}
  // 						 ${this.build}
  // 				 >`;
  // }

  // buildImg() {
  //   return ``;
  // }

  // buildTotalConfirmed(total) {
  //   return ``;
  // }
  // buildModeButtons() {
  //   return `<button onclick={() => {sort()}}>a</button>
  // 	<button>a</button><button>a</button>`;
  // }

  // updateList(data) {
  //   this.list;
  // }
}
