'use strict'

let turf = require('@turf/turf')
turf.featureEach = require('@turf/meta').featureEach
let { renderPoint, renderPolygon } = require('./renderGeometry')

class GeojsonCanvas {

    constructor(canvasID) {
        this._canvas = document.getElementById(canvasID)
        this._ctx = this._canvas.getContext('2d')
        this._features = []
    }

    addGeojson(geojson) {
        turf.featureEach(geojson, (geom) => {
            this._features.push(geom)
        })
        console.log(this._features)
        this._render()
    }

    _render() {
        this._features.forEach((features) => {
            renderPoint(features, this._ctx)
        })
    }

}

window.GeojsonCanvas = GeojsonCanvas
