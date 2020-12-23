export default class GraphView {
  constructor(canvas, data, dataStyle) {
    this.canvas = canvas;
    this.dataGraph = data;
    this.dataStyle = dataStyle;
  }

  render(key) {
    document.querySelector('.canvas-container').innerHTML = '';
    const canvas = document.createElement('canvas');
    canvas.className = 'canvas-graph popChart';
    document.querySelector('.canvas-container').append(canvas);
    // const popCanvas = document.getElementById('popChart');

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
    // console.log('this.dataGraph[${key}].value', this.dataGraph[`${key}`].value);
    styleData.data.datasets[0].data = this.dataGraph[`${key}`].value;
    const barChart = new Chart(canvas, styleData);

    // objdata.data.labels = dataGraph.cases.value;
    // objdata.data.datasets.data = dataGraph.cases.date;
    // Chart.defaults.global.defaultBackgroundColor = 'blue';
    // console.log('dataGraph.cases', dataGraph.cases);
    // console.log('dataGraph.cases.value', dataGraph.cases.value);
    // const datat = dataGraph.cases;
    // console.log('datat:', datat);
    // console.log('dataGraph.cases.date', dataGraph.cases.date);
  }
}
