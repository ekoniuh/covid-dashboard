// export default class CasesTableView {
//   constructor({ countries, cases }) {
//     this.cases = cases;
//   }

//   list = null;

//   _buildRow(data) {
//     return `<li>${data}</li>`;
//   }

//   _buildList(rows) {
//     return `<ul>
// ${rows.map((rowDada) => this._buildRow(rowDada))}
// </ul>`;
//   }

//   _buildModeButtons() {
//     return `<button onclick={() => {sort()}}>a</button><button>a</button><button>a</button>`;
//   }

//   updateList(data) {
//     this.list;
//   }

//   render(data) {
//     return `<div>
// ${this._buildList(this.countries)}
// ${this._buildModeButtons()}
// </div>`;
//   }
// }