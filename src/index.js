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

    addPoint(pos, style, properties) {
        this.addGeojson(turf.point(pos, properties), style)
    }

    addPolygon(coords, style, properties) {
        this.addGeojson(turf.polygon(coords, properties), style)
    }

    // LIFO - last added first
    queryFeatures(coord) {
        let queryPoint = turf.point(coord)
        let result = []
        this._features.reverse().forEach((feature) => {
            if (feature.geometry.type === 'Point') {
                let radius = feature.style.radius
                let dist = turf.distance(feature, queryPoint)
                if (dist <= radius) {
                    result.push(feature)
                }
            } else if (feature.geometry.type === 'Polygon') {
                if (turf.inside(queryPoint, feature)) {
                    result.push(feature)
                }
            }
        })
        return result
    }

    on(event, callback) {
        if (event === 'mouseup') {
            let onMouseUp = (e) => {
                let pos = this._getCursorPos(e)
                e.point = pos
                callback(e)
            }
            this._canvas.removeEventListener('mouseup', this._onMouseUp)
            this._canvas.addEventListener('mouseup', onMouseUp)
            this._onMouseUp = onMouseUp
        } else if (event === 'mouseover') {
            let onMouseOver = (e) => {
                let pos = this._getCursorPos(e)
                e.point = pos
                callback(e)
            }
            this._canvas.removeEventListener('mouseover', this._onMouseOver)
            this._canvas.addEventListener('mouseover', onMouseOver)
            this._onMouseOver = onMouseOver
        } else {
            console.error(`unsupported event - "${event}"`)
            return
        }

    }

    _getCursorPos(event) {
        let x = event.clientX
        let y = event.clientY
        let bbox = this._canvas.getBoundingClientRect();
        let style = window.getComputedStyle(this._canvas)
        let left = bbox.left + parseInt(style.getPropertyValue('border-left-width'),10)
        let top = bbox.top + parseInt(style.getPropertyValue('border-top-width'),10)
        x = (x - left)
        y = (y - top)
        return [x, y]
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
