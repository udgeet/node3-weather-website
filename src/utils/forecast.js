const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/88fe6ac40bdc44b8ec709fda922f6a91/' + latitude + ',' + longitude

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback("There is an error", undefined)
        } else if (body.error) {
            callback("unable to find temperature", undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. This high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast