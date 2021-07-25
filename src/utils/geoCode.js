const urllib = require('urllib');

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicHJpbmNlMTM1NiIsImEiOiJja3I5N29zbzQ0NXB0MnBxcGNhOGhuODF4In0.G-_SVcaCeKjIMI-jWZiruA';

    urllib.request(url, (err, data, res) => {
        const nData = JSON.parse(data);
        const {features} = nData;
        if (err) {
            callback('unable to connect to location services')
        }
        else if (features.length === 0) {
            callback('No result found.');
        }
        else {
            callback(undefined, {
                latitude: features[0].center[1],
                longitude: features[0].center[0],
                location: features[0].place_name
            })
        }
    })
}

module.exports = geoCode;