let turf = require('@turf/turf')


let renderPoint = (feature, ctx, size = 5, color = '#000') => {
    turf.featureOf(feature, 'Point', 'renderPoint')
    let coords = turf.getCoord(feature)
    ctx.strokeStyle = color
    ctx.beginPath()
    ctx.arc(coords[0], coords[1], size, 0, 2.0 * Math.PI)
    ctx.stroke()
}

let renderPolygon = () => {
    turf.featureOf(feature, 'Polygon', 'renderPolygon')
}

module.exports = {
    renderPoint,
    renderPolygon
}
