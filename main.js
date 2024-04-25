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