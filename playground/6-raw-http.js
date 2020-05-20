const https = require('https')
const url = 'https://api.weatherstack.com/forecast?access_key=35713f4cf4dc0061eb5299e52f41ce1a&query=45,-75&units=f'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error ', error)
})

request.end()