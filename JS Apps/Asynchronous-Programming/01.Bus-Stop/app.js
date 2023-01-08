function getInfo() {
    let originalUrl = `http://localhost:3030/jsonstore/bus/businfo`;
    let busIDEl = document.getElementById('stopId');
    let busID = busIDEl.value;
    let ul = document.getElementById('buses');
    Array.from(ul.querySelectorAll('li')).forEach(li => li.remove());



    fetch(`${originalUrl}/${busID}`)
        .then(res => res.json())
        .then((stopID) => {
            document.getElementById('stopName').textContent = stopID.name;
            for (const key in stopID.buses) {

                let divElement = document.createElement('li');
                divElement.textContent = `Bus ${key} arrives in ${stopID.buses[key]}`
                ul.appendChild(divElement);

            }
        })
        .catch(err => {
            document.getElementById('stopName').textContent = 'error'
            let ul = document.getElementById('buses');
            Array.from(ul.querySelectorAll('li')).forEach(li => li.remove());
        })

    busIDEl.value = '';

}