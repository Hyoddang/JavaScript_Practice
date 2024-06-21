function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(lat, lon)
}

function onGeoFail() {
  alert("We don't find your location.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail)