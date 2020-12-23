export default class GraphView {
  constructor(canvas, data, dataStyle) {
    this.canvas = canvas;
    this.dataGraph = data;
    this.dataStyle = dataStyle;
  }

  render(key) {
    const styleData = {
      type: 'bar',
      backgroundColor: 'red',
      clip: { left: 50, top: false, right: -2, bottom: 0 },

      data: {
        labels: [],
        datasets: [
          {
            data: [], 
            backgroundColor: '#5bfff7',
          },
        ],
      },
    };
    styleData.data.labels = this.dataGraph[`${key}`].date;
    console.log('this.dataGraph[${key}].value', this.dataGraph[`${key}`].value);
    styleData.data.datasets[0].data = this.dataGraph[`${key}`].value;

    // objdata.data.labels = dataGraph.cases.value;
    // objdata.data.datasets.data = dataGraph.cases.date;
    // Chart.defaults.global.defaultBackgroundColor = 'blue';
    const barChart = new Chart(this.canvas, styleData);
    // console.log('dataGraph.cases', dataGraph.cases);
    // console.log('dataGraph.cases.value', dataGraph.cases.value);
    // const datat = dataGraph.cases;
    // console.log('datat:', datat);
    // console.log('dataGraph.cases.date', dataGraph.cases.date);
  }
}

// const objsadasd = new Chart(popCanvas,{
// type: 'bar',
// data: {
//   labels: [
//     'China',
//     'India',
//     'United States',
//     'Indonesia',
//     'Brazil',
//     'Pakistan',
//     'Nigeria',
//     'Bangladesh',
//     'Russia',
//     'Japan',
//   ],
//   datasets: [
//     {
//       data: [
//         1379302771,
//         1281935911,
//         326625791,
//         260580739,
//         207353391,
//         204924861,
//         190632261,
//         157826578,
//         142257519,
//         126451398,
//       ],
//     },
//   ],
// }}
