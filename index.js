const express = require('express')
const geoip = require('geoip-lite');
const ejs = require('ejs')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.enable('trust proxy')
app.get('/', (req, res) => {
    const ip = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const geodata = geoip.lookup(ip)
    const data = {"ip": ip, "ips": req.ips, "method": req.method, "useragent": req.get('User-Agent'), "geodata": geodata};

    if (req.query.json !== undefined) { // /?json
        res.json(data)
        return
    }
    if (req.query.text !== undefined) { // /?text
        res.set('Content-Type', 'text/plain').render('text', data)
        return
    }
    res.format({
        text: function(){
            res.set('Content-Type', 'text/plain').render('text', data)
        },
        html: function(){
            res.render('index', data)
        },
        json: function(){
            res.json(data)
        },
        'default': function() {
          res.status(406).send('Not Acceptable');
        }
      });
})
app.listen(port, () => console.log(`Listening on port ${port}!`))
