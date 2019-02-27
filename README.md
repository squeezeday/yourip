# yourip

Simple node js project to show the user's external IP address in HTML, JSON or plain text.

## Setup

npm install && npm start

Or use Docker

docker build -t squeezeday/yourip . && docker-compose up -d

## Usage

$ curl http://localhost:3000
```text
127.0.0.1
User-Agent: curl/7.52.1
Location: City, Region, Country
Lat/lon: 0.0000,0.0000
```

$ curl -H 'Accept: text/html' http://localhost:3000
```html
<!doctype html>
...
<h1>127.0.0.1</h1>
...
```

$ curl -H 'Accept: application/json' http://localhost:3000
```javascript
{"ip":"127.0.0.1","ips":["127.0.0.1"],"method":"GET","useragent":"curl/7.52.1","geodata":{"range":[856633344,856634367],"country":"Country","region":"Region","eu":"1","timezone":"Europe/Amsterdam","city":"City","ll":[0.0000,0.0000],"metro":0,"area":0}}
```