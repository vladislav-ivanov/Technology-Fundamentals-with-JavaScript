function flightSchedule(param) {
    let flights = [];
    let initialData = param[0];
    for (let data of initialData) {
        let tokens = data.split(' ');
        let sector = tokens[0];
        let destinnation = tokens.slice(1).join(' ');

        let currentFlight = {
            sector,
            destinnation,
            status: "Ready to fly"
        };
        flights.push(currentFlight);
    }

    let changedStatuses = param[1];
    for (let data of changedStatuses) {
        let tokens = data.split(' ');
        let sector = tokens[0];
        let status = tokens[1];
        for (let flight of flights) {
            if (flight.sector === sector) {
                flight.status = status;
            }
        }
    }
    let statusToDisplay = param[2][0];

    for(let flight of flights){
        if(flight.status === statusToDisplay){
            console.log(`{ Destination: '${flight.destinnation}', Status: '${flight.status}' }`);
            
        }
    }
}
flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']])