// lỗi access-control-allow-origin và cách khắc phục
app.all('*', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key')
    if (req.method == 'OPTIONS') {
        res.status(200).end()
    } else {
        next()
    }
})
