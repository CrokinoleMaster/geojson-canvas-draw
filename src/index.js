'use strict'

let turf = require('@turf/turf')
turf.featureEach = require('@turf/meta').featureEach
let { renderPoint, renderPolygon } = require('./renderGeometry')

/*

style = {
    point: {
        stroke:
        color:
        weight:
        opacity:
        fill:
        fillColor:
        fillOpacity:
        radius:
    }
}

*/

const defaultStyle = {
    stroke: true,
    color: '#000',
    weight: 2,
    opacity: 1, // not implemented
    fill: false,
    fillColor: '#0000ff',
    fillOpacity: 0.5, // not implemented
    radius: 5 // for points only
}

class GeojsonCanvas {

    constructor(canvasID, style = { point: {}, polygon: {} }) {
        this._canvas = document.getElementById(canvasID)
        this._ctx = this._canvas.getContext('2d')
        this._features = []
        this._style = Object.assign({}, {
            point: defaultStyle,
            polygon: defaultStyle
        }, style)
    }

    addGeojson(geojson, style = {}) {
        turf.featureEach(geojson, (feature) => {
            feature.style = Object.assign({}, defaultStyle, style)
            this._features.push(feature)
        })
        this._render()
    }

    on(event, callback) {
        if (event === 'mouseup') {
            this._onMouseUp = (e) => {
                console.log(e)
            }
            this._canvas.removeEventListener('mouseup', this._onMouseUp)
            this._canvas.addEventListener('mouseup', this._onMouseUp)
        } else if (event === 'mouseover') {
            this._onMouseOver = (e) => {
                console.log(e)
            }
            this._canvas.removeEventListener('mouseover', this._onMouseOver)
            this._canvas.addEventListener('mouseover', this._onMouseOver)
        } else {
            console.error(`unsupported event - "${event}"`)
            return
        }

    }

    _render() {
        this._features.forEach((feature) => {
            let style = feature.style || this._style.point
            if (feature.geometry.type === 'Point') {
                renderPoint(feature, this._ctx, style)
            }
            if (feature.geometry.type === 'Polygon') {
                renderPolygon(feature, this._ctx, style)
            }
        })
    }

}

window.GeojsonCanvas = GeojsonCanvas
