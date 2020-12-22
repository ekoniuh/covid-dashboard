// import { stateCountryTable } from '../../state';

export default class CasesCountryView {
  constructor(data, key) {
    // this.globalModel.view = this;
    // // [this.casesData] = [casesData[0]];

    this.data = data;
    this.key = key;

    this.viewWrapper = document.createElement('tbody');

    // this.init();
    // this.viewWrapper.className = 'stat-table table';
  }

  // init() {
  //   this.render(this.data, this.key);
  // }

  render(casesData, key) {
    // console.log(this.casesData);
    // FIX мне не нравится передавать импортированные данные

    this.viewWrapper.innerHTML = this.buildList(casesData, key);
    return this.viewWrapper;
    // ${this.buildModeButtons()}
  }

  buildList(casesData, key) {
    return `${
      casesData.countryInfo
        ? this.buildImg(casesData.countryInfo, casesData.country)
        : ''
    }
            <tbody>
               <tr>
									<td class="cases-info">${casesData[`cases${key}`]}</td>
									<td class="cases-info">${casesData[`deaths${key}`]}</td>
									<td class="cases-info">${casesData[`recovered${key}`]}</td>
								</tr>
            </tbody>`;
  }

  buildImg(countryInfo, country) {
    return `<div class="country-info">
               <img src="${countryInfo.flag}" alt="">
               <h3>${country}</h3>
            </div>`;
  }
  // buildRow() {
  //   return `
  // 						${this.}
  // 						 ${this.build}
  // 				 >`;
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
