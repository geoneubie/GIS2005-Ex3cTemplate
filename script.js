// Initialize your map here
mapboxgl.accessToken = '';
var map = new mapboxgl.Map({
  container: 'map',
  style: '',
  center: [-104.9,39.8],
  zoom: 8
});

function parseSourceParam() {

  const locString = window.location;
  console.log("locString=" + locString);
  
  const urlParams = new URLSearchParams(locString.search);
  var source = urlParams.get("source");
  console.log(source);

  // Add conditionals
  if (source == "winterpark") { 
    // Set the Center of the map to - [-105.7748,39.8473]
    
    // Set the zoom level to 9


    // Get Element by Id and update the inner HTML
    
  }

  // Do vail next...

  
}
