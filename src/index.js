'use strict'

let turf = require('@turf/turf')
turf.featureEach = require('@turf/meta').featureEach
let { renderPoint, renderPolygon } = require('./renderGeometry')

/*

style = {
    point: {
        color: '#ff0000',
        size: 5
    }
}

*/

class GeojsonCanvas {

    constructor(canvasID, style = { point: {}, polygon: {} }) {
        this._canvas = document.getElementById(canvasID)
        this._ctx = this._canvas.getContext('2d')
        this._features = []
        this._style = style
    }

    addGeojson(geojson, style = {}) {
        turf.featureEach(geojson, (feature) => {
            feature.style = style
            this._features.push(feature)
        })
        this._render()
    }

    _render() {
        this._features.forEach((feature) => {
            let pointSize = feature.style.size || this._style.point.size
            let pointColor = feature.style.color || this._style.point.color
            renderPoint(feature, this._ctx, pointSize, pointColor)
        })
    }

}

window.GeojsonCanvas = GeojsonCanvas
