let turf = require('@turf/turf')


let renderPoint = (feature, ctx, style) => {
    turf.featureOf(feature, 'Point', 'renderPoint')
    let coords = turf.getCoord(feature)
    let radius = style.radius
    ctx.strokeStyle = style.color
    ctx.fillStyle = style.fillColor
    ctx.beginPath()
    ctx.arc(coords[0], coords[1], radius, 0, 2.0 * Math.PI)
    style.stroke && ctx.stroke()
    style.fill && ctx.fill()
}

let renderPolygon = (feature, ctx, style = {}) => {
    turf.featureOf(feature, 'Polygon', 'renderPolygon')
    ctx.fillStyle = '#f00';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(100,50);
    ctx.lineTo(50, 100);
    ctx.lineTo(0, 90);
    ctx.closePath();
    ctx.fill();
}

module.exports = {
    renderPoint,
    renderPolygon
}
