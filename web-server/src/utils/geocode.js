const request = require('request')

const baseUrl = 'https://api.mapbox.com'
const endpoint = 'geocoding/v5/mapbox.places'
const token = 'pk.eyJ1IjoibW9ua2V5bGVhZiIsImEiOiJjazk1MWNzbGwwN21iM2VwMnIyb3U2cjVzIn0.9tqhmm30zfNSijk9BQA9gA'
const type = 'poi'

const geocode = (address, callback) => {
    const url = baseUrl + '/' + endpoint + '/' + encodeURIComponent(address)
        + '.json?types=' + type + '&access_token=' + token

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to connect to location services. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name,
            })
        }
    })
}

module.exports = geocode