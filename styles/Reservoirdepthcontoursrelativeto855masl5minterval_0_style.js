var size = 0;
var placement = 'point';

var style_Reservoirdepthcontoursrelativeto855masl5minterval_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("ELEV_MAX");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 2.500000 && value <= 12.500000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(48,18,59,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 12.500000 && value <= 22.500000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(70,107,227,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 22.500000 && value <= 32.500000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(40,188,235,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 32.500000 && value <= 42.500000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(50,242,152,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 42.500000 && value <= 52.500000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(164,252,60,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 52.500000 && value <= 62.500000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(238,207,58,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 62.500000 && value <= 72.500000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(251,126,33,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 72.500000 && value <= 82.500000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(208,47,5,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 82.500000 && value <= 92.500000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(122,4,3,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
