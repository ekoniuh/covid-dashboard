// class CasesTable {
//   constructor() {
//     this.mode = CasesTable.MODES.ALL;
//     this.countries = [];
//     this.cases = [];
//     this.view = new View();
//   }

//   static MODES = {
//     BY_DAY: 'by_day',
//     ALL: 'all',
//   };

//   async fetchCountries() {
//     try {
//       this.countries = await fetch('endpoint');
//     } catch (er) {
//       console.log(er);
//     }
//   }

//   async fetchCases() {
//     try {
//       this.cases = await fetch('endpoint');
//     } catch (er) {
//       console.log(er);
//     }
//   }

//   changeSort() {
//     this.countries.sort();
//   }
// }
