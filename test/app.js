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
}, { color: '#00ff00', size: 10 })


console.log(geojsonCanvas._features)
