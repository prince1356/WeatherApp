const urllib = require('urllib');

const forecast = (latidude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latidude + '&lon=' + longitude + '&appid=a712b4333f067dcfb8db975d9ea5ff73&units=imperial'

    urllib.request(url, (err, data, res) => {
        const nData = JSON.parse(data);
        const {cod, list} = nData;
        if (err) {
            callback(err, undefined);
        }
        else if (cod === '400') {
            callback('wrong location', undefined)
        }
        else {
            callback(undefined, list[0].weather[0].description);
        }
    })
}

module.exports = forecast;