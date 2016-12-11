let turf = require('@turf/turf')


let renderPoint = (feature, ctx) => {
    turf.featureOf(feature, 'Point', 'renderPoint')
}

let renderPolygon = () => {
    turf.featureOf(feature, 'Polygon', 'renderPolygon')
}

module.exports = {
    renderPoint,
    renderPolygon
}
