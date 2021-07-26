const urllib = require('urllib');

const forecast = (latidude, longitude, callback) => {
    const url = 'api.openweathermap.org/data/2.5/weather?lat=' + latidude +'&lon='+ longitude +'&appid=a712b4333f067dcfb8db975d9ea5ff73&units=metric'

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
            callback(undefined, nData.weather[0].description + ", it is currently " + nData.main.temp + " degree celsius.");
        }
    })
}

module.exports = forecast;

