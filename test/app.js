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
