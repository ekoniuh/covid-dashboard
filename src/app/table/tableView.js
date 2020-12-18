export default class CasesTableView {
  constructor(data) {
    this.data = data;
  }
  // constructor(countriesName, nameOfFlags, cases) {
  //   this.cases = cases;
  //   this.countries = countriesName;
  //   this.nameOfFlags = nameOfFlags;
  // }

	// list = null;
	buildImg() {
		return `<td><img src="https://disease.sh/assets/img/flags/${}.png">${}</td>`
	}

  buildRow(country) {
    return `<tr>
							${this.buildImg}
							<td>${country}</td>
					</tr>`;
  }

  buildList() {
    return `<table class="table">
							<tbody>
						
									${this.data.Countries.map((item) => this.buildRow(item.Country))}
							</tbody>
						</table>`;
  }

  buildModeButtons() {
    return `<button onclick={() => {sort()}}>a</button>
		<button>a</button><button>a</button>`;
  }

  // updateList(data) {
  //   this.list;
  // }

  render() {
    return `<div>
							${this.buildList()}
					</div>`;
    // ${this.buildModeButtons()}
  }
}
