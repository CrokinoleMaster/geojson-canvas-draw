'use strict'

let turf = require('@turf/turf')
turf.geomEach = require('@turf/meta').geomEach
console.log(turf)

class GeojsonCanvas {

    constructor(canvasID) {
        this._canvas = document.getElementById(canvasID)
        this._geoms = []
    }

    addGeojson(geojson) {
        turf.geomEach(geojson, (geom) => {
            this._geoms.push(geom)
        })
    }

}

window.GeojsonCanvas = GeojsonCanvas
