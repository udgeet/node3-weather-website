const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/88fe6ac40bdc44b8ec709fda922f6a91/' + latitude + ',' + longitude

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback("There is an error", undefined)
        } else if (body.error) {
            callback("unable to find temperature", undefined)
        } else {
            callback(undefined, {
                temperature: body.currently.temperature,
                probabilityRain: body.currently.precipProbability
            })
        }
    })

}

module.exports = forecast