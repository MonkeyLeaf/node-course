const request = require('request')

const baseUrl = 'https://api.weatherstack.com'
const accessKey = '35713f4cf4dc0061eb5299e52f41ce1a'

const forecast = (latitude, longitude, callback) => {
    const url = baseUrl + '/forecast?access_key=' + accessKey 
        + '&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json: true }, (error, { body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            const error = body.error
            callback('Code: ' + error.code + ', Info: ' + error.info, undefined)
        } else {
            callback(undefined, body.current.weather_descriptions  
                + '. It is currently ' + body.current.temperature 
                + ' degress out. I feels like ' + body.current.feelslike + ' degress out.')
        }
    })
}

module.exports = forecast