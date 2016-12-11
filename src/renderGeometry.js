let turf = require('@turf/turf')
turf.coordEach = require('@turf/meta').coordEach

let renderPoint = (feature, ctx, style) => {
    turf.featureOf(feature, 'Point', 'renderPoint')
    let coords = turf.getCoord(feature)
    let radius = style.radius
    ctx.strokeStyle = style.color
    ctx.fillStyle = style.fillColor
    ctx.lineWidth = style.weight
    ctx.beginPath()
    ctx.arc(coords[0], coords[1], radius, 0, 2 * Math.PI)
    style.stroke && ctx.stroke()
    style.fill && ctx.fill()
}

let renderPolygon = (feature, ctx, style) => {
    turf.featureOf(feature, 'Polygon', 'renderPolygon')
    ctx.strokeStyle = style.color
    ctx.fillStyle = style.fillColor
    ctx.lineWidth = style.weight
    ctx.beginPath()
    let start = false;
    turf.coordEach(feature, (coord) => {
        if (!start) {
            ctx.moveTo(coord[0], coord[1])
            start = true
        } else {
            ctx.lineTo(coord[0], coord[1])
        }
    })
    ctx.closePath();
    style.fill && ctx.fill()
    style.stroke && ctx.stroke()
}

module.exports = {
    renderPoint,
    renderPolygon
}
