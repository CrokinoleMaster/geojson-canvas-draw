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
    },
    "properties": {
        "name": "blue rect"
    }
}, { color: '#ff0000', weight: 5, fill: true })

geojsonCanvas.on('mouseup', (e) => {
    // geojsonCanvas.addPoint(e.point, {color: '#ff0000'})
    console.log(geojsonCanvas.queryFeatures(e.point))
})

// console.log(geojsonCanvas._features)
