(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let geojsonCanvas = new GeojsonCanvas('canvas-view')


geojsonCanvas.addGeojson({
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [20, 30]
    },
    "properties": {
        "name": "point 1"
    }
})

geojsonCanvas.addGeojson({
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [20, 30]
    },
    "properties": {
        "name": "point 1"
    }
}, { color: '#00ff00', radius: 15, weight: 4 })

geojsonCanvas.addGeojson({
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [50, 30]
    },
    "properties": {
        "name": "point 1"
    }
}, { color: '#ff0000', radius: 10, fill: true, fillColor: '#00ffff' })

geojsonCanvas.addGeojson({
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [100, 100],
            [100, 140],
            [140, 140],
            [140, 100],
            [100, 100]
        ]]
    }
}, { color: '#ff0000', weight: 5, fill: true })

console.log(geojsonCanvas._features)

},{}]},{},[1])