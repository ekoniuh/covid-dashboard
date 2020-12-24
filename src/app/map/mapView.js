export default class MapModel {
  constructor() {}

  render() {
    var mapOptions = {
      center: [52.721219, 41.452274],
      zoom: 4,
      worldCopyJump: true,
    };

    // Creating a map object
    var map = new L.map('sample', mapOptions);

    // Creating a Layer object
    var layer = new L.TileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    );
    // const circle = new L.circle([51.508, -0.11], {
    //   color: 'red',
    //   fillColor: '#f03',
    //   fillOpacity: 0.5,
    //   radius: 500,
    // });
    // Adding layer to the map
    map.addLayer(layer);
    // map.addLayer(circle);
  }
}
