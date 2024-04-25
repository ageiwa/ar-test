// el.addEventListener("gps-camera-update-position", e => {
//     if (!testEntityAdded) {
//         alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
//         // Add a box to the north of the initial GPS position
//         const entity = document.createElement("a-box");
//         entity.setAttribute("scale", {
//             x: 20,
//             y: 20,
//             z: 20
//         });
//         entity.setAttribute('material', { color: 'red' });
// entity.setAttribute('gps-new-entity-place', {
//     latitude: e.detail.position.latitude + 0.001,
//     longitude: e.detail.position.longitude
// });

//         posBlock.innerHTML = `Block:<br>latitude: ${e.detail.position.latitude + 0.001}<br>longitude: ${e.detail.position.longitude}`

//         document.querySelector("a-scene").appendChild(entity);

//     }
//     testEntityAdded = true;

//     posCamera.innerHTML = `Camera:<br>latitude: ${e.detail.position.latitude}<br>longitude: ${e.detail.position.longitude}`
// });

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

const el = document.querySelector('[gps-new-camera]')
const posBlock = document.querySelector('.pos-block')
const posCamera = document.querySelector('.pos-camera')
const posGps = document.querySelector('.pos-gps')

const urlParams = new URLSearchParams(window.location.search)
const latitude = urlParams.get('latitude')
const longitude = urlParams.get('longitude')

console.log(latitude, longitude)

alert(`${latitude} ${longitude}`)

if (latitude !== null && longitude !== null) {
    createBox(
        parseFloat(latitude),
        parseFloat(longitude)
    )
}

function createBox(latitude, longitude) {
    const entity = document.createElement('a-box')

    entity.setAttribute('material', {
        color: 'red'
    })

    entity.setAttribute('scale', {
        x: 20,
        y: 20,
        z: 20
    })

    entity.setAttribute('gps-new-entity-place', {
        latitude: latitude,
        longitude: longitude
    })

    document.querySelector('a-scene').appendChild(entity)

    posBlock.innerHTML = `Block:<br>latitude: ${latitude}<br>longitude: ${longitude}`
}

function getPosition() {
    navigator.geolocation.getCurrentPosition(
        success,
        error,
        options
    )
}

function success(pos) {
    const crd = pos.coords

    posGps.innerHTML = `Your current position:<br>latitude: ${crd.latitude}<br>longitude: ${crd.longitude}<br>accuracy: ${crd.accuracy}`

    el.setAttribute('gps-new-entity-place', {
        latitude: crd.latitude,
        longitude: crd.longitude
    })

    alert(`${crd.latitude} ${crd.longitude}`)

    setTimeout(getPosition, 5000)
}

function error() {
    alert('error')

    setTimeout(getPosition, 5000)
}

getPosition()