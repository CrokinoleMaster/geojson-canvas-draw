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
}, { color: '#00ff00', radius: 10 })

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

console.log(geojsonCanvas._features)
