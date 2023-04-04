ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3005").setExtent([869861.296847, 860694.596821, 1105002.269623, 1062171.502272]);
var wms_layers = [];

var format_Reservoirdepthcontoursrelativeto855masl5minterval_0 = new ol.format.GeoJSON();
var features_Reservoirdepthcontoursrelativeto855masl5minterval_0 = format_Reservoirdepthcontoursrelativeto855masl5minterval_0.readFeatures(json_Reservoirdepthcontoursrelativeto855masl5minterval_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3005'});
var jsonSource_Reservoirdepthcontoursrelativeto855masl5minterval_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reservoirdepthcontoursrelativeto855masl5minterval_0.addFeatures(features_Reservoirdepthcontoursrelativeto855masl5minterval_0);
var lyr_Reservoirdepthcontoursrelativeto855masl5minterval_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reservoirdepthcontoursrelativeto855masl5minterval_0, 
                style: style_Reservoirdepthcontoursrelativeto855masl5minterval_0,
                interactive: true,
    title: 'Reservoir depth contours relative to 855m asl (5m interval)<br />\
    <img src="styles/legend/Reservoirdepthcontoursrelativeto855masl5minterval_0_0.png" /> 0 - 12.5<br />\
    <img src="styles/legend/Reservoirdepthcontoursrelativeto855masl5minterval_0_1.png" /> 12.5 - 22.5<br />\
    <img src="styles/legend/Reservoirdepthcontoursrelativeto855masl5minterval_0_2.png" /> 23 - 33<br />\
    <img src="styles/legend/Reservoirdepthcontoursrelativeto855masl5minterval_0_3.png" /> 33 - 43<br />\
    <img src="styles/legend/Reservoirdepthcontoursrelativeto855masl5minterval_0_4.png" /> 43 - 53<br />\
    <img src="styles/legend/Reservoirdepthcontoursrelativeto855masl5minterval_0_5.png" /> 53 - 63<br />\
    <img src="styles/legend/Reservoirdepthcontoursrelativeto855masl5minterval_0_6.png" /> 63 - 73<br />\
    <img src="styles/legend/Reservoirdepthcontoursrelativeto855masl5minterval_0_7.png" /> 73 - 83<br />\
    <img src="styles/legend/Reservoirdepthcontoursrelativeto855masl5minterval_0_8.png" /> 83 - 93<br />'
        });
var lyr_ReservoirFloodedShadedTerrain2x_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Reservoir Flooded Shaded Terrain 2x",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ReservoirFloodedShadedTerrain2x_1.png",
    attributions: ' ',
                                projection: 'EPSG:3005',
                                alwaysInRange: true,
                                imageExtent: [887914.130000, 915352.689900, 1085763.504800, 984392.065100]
                            })
                        });
var format_CheslattaLake_2 = new ol.format.GeoJSON();
var features_CheslattaLake_2 = format_CheslattaLake_2.readFeatures(json_CheslattaLake_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3005'});
var jsonSource_CheslattaLake_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheslattaLake_2.addFeatures(features_CheslattaLake_2);
var lyr_CheslattaLake_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CheslattaLake_2, 
                style: style_CheslattaLake_2,
                interactive: true,
                title: '<img src="styles/legend/CheslattaLake_2.png" /> Cheslatta Lake'
            });
var format_SkinsLake_3 = new ol.format.GeoJSON();
var features_SkinsLake_3 = format_SkinsLake_3.readFeatures(json_SkinsLake_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3005'});
var jsonSource_SkinsLake_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SkinsLake_3.addFeatures(features_SkinsLake_3);
var lyr_SkinsLake_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SkinsLake_3, 
                style: style_SkinsLake_3,
                interactive: true,
                title: '<img src="styles/legend/SkinsLake_3.png" /> Skins Lake'
            });
var format_NechakoRiver_4 = new ol.format.GeoJSON();
var features_NechakoRiver_4 = format_NechakoRiver_4.readFeatures(json_NechakoRiver_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3005'});
var jsonSource_NechakoRiver_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NechakoRiver_4.addFeatures(features_NechakoRiver_4);
var lyr_NechakoRiver_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NechakoRiver_4, 
                style: style_NechakoRiver_4,
                interactive: true,
                title: '<img src="styles/legend/NechakoRiver_4.png" /> Nechako River'
            });
var format_CheslattaRiver_5 = new ol.format.GeoJSON();
var features_CheslattaRiver_5 = format_CheslattaRiver_5.readFeatures(json_CheslattaRiver_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3005'});
var jsonSource_CheslattaRiver_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheslattaRiver_5.addFeatures(features_CheslattaRiver_5);
var lyr_CheslattaRiver_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CheslattaRiver_5, 
                style: style_CheslattaRiver_5,
                interactive: true,
                title: '<img src="styles/legend/CheslattaRiver_5.png" /> Cheslatta River'
            });
var format_PreReservoirLake_6 = new ol.format.GeoJSON();
var features_PreReservoirLake_6 = format_PreReservoirLake_6.readFeatures(json_PreReservoirLake_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3005'});
var jsonSource_PreReservoirLake_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PreReservoirLake_6.addFeatures(features_PreReservoirLake_6);
var lyr_PreReservoirLake_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PreReservoirLake_6, 
                style: style_PreReservoirLake_6,
                interactive: false,
                title: '<img src="styles/legend/PreReservoirLake_6.png" /> Pre-Reservoir Lake'
            });
var format_PrereservoirRiver_7 = new ol.format.GeoJSON();
var features_PrereservoirRiver_7 = format_PrereservoirRiver_7.readFeatures(json_PrereservoirRiver_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3005'});
var jsonSource_PrereservoirRiver_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrereservoirRiver_7.addFeatures(features_PrereservoirRiver_7);
var lyr_PrereservoirRiver_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrereservoirRiver_7, 
                style: style_PrereservoirRiver_7,
                interactive: false,
                title: '<img src="styles/legend/PrereservoirRiver_7.png" /> Pre-reservoir River'
            });
var format_CheslattaWatershed_8 = new ol.format.GeoJSON();
var features_CheslattaWatershed_8 = format_CheslattaWatershed_8.readFeatures(json_CheslattaWatershed_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3005'});
var jsonSource_CheslattaWatershed_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheslattaWatershed_8.addFeatures(features_CheslattaWatershed_8);
var lyr_CheslattaWatershed_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CheslattaWatershed_8, 
                style: style_CheslattaWatershed_8,
                interactive: true,
                title: '<img src="styles/legend/CheslattaWatershed_8.png" /> CheslattaWatershed'
            });
var format_UpperNechakoCanyon_9 = new ol.format.GeoJSON();
var features_UpperNechakoCanyon_9 = format_UpperNechakoCanyon_9.readFeatures(json_UpperNechakoCanyon_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3005'});
var jsonSource_UpperNechakoCanyon_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UpperNechakoCanyon_9.addFeatures(features_UpperNechakoCanyon_9);
var lyr_UpperNechakoCanyon_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UpperNechakoCanyon_9, 
                style: style_UpperNechakoCanyon_9,
                interactive: true,
                title: '<img src="styles/legend/UpperNechakoCanyon_9.png" /> Upper Nechako Canyon'
            });
var format_NechakoReservoir_10 = new ol.format.GeoJSON();
var features_NechakoReservoir_10 = format_NechakoReservoir_10.readFeatures(json_NechakoReservoir_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3005'});
var jsonSource_NechakoReservoir_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NechakoReservoir_10.addFeatures(features_NechakoReservoir_10);
var lyr_NechakoReservoir_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NechakoReservoir_10, 
                style: style_NechakoReservoir_10,
                interactive: true,
                title: '<img src="styles/legend/NechakoReservoir_10.png" /> Nechako Reservoir '
            });
var format_TransmissionLinetoKitimat_11 = new ol.format.GeoJSON();
var features_TransmissionLinetoKitimat_11 = format_TransmissionLinetoKitimat_11.readFeatures(json_TransmissionLinetoKitimat_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3005'});
var jsonSource_TransmissionLinetoKitimat_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransmissionLinetoKitimat_11.addFeatures(features_TransmissionLinetoKitimat_11);
var lyr_TransmissionLinetoKitimat_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TransmissionLinetoKitimat_11, 
                style: style_TransmissionLinetoKitimat_11,
                interactive: false,
                title: '<img src="styles/legend/TransmissionLinetoKitimat_11.png" /> Transmission Line to Kitimat'
            });
var format_KemanoTunnels_12 = new ol.format.GeoJSON();
var features_KemanoTunnels_12 = format_KemanoTunnels_12.readFeatures(json_KemanoTunnels_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3005'});
var jsonSource_KemanoTunnels_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KemanoTunnels_12.addFeatures(features_KemanoTunnels_12);
var lyr_KemanoTunnels_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KemanoTunnels_12, 
                style: style_KemanoTunnels_12,
                interactive: false,
                title: '<img src="styles/legend/KemanoTunnels_12.png" /> Kemano Tunnels'
            });
var format_ReservoirPoints_13 = new ol.format.GeoJSON();
var features_ReservoirPoints_13 = format_ReservoirPoints_13.readFeatures(json_ReservoirPoints_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3005'});
var jsonSource_ReservoirPoints_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservoirPoints_13.addFeatures(features_ReservoirPoints_13);
var lyr_ReservoirPoints_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReservoirPoints_13, 
                style: style_ReservoirPoints_13,
                interactive: true,
    title: 'Reservoir Points<br />\
    <img src="styles/legend/ReservoirPoints_13_0.png" /> Cheslatta Falls<br />\
    <img src="styles/legend/ReservoirPoints_13_1.png" /> Kenney Dam<br />\
    <img src="styles/legend/ReservoirPoints_13_2.png" /> Skins Spillway<br />\
    <img src="styles/legend/ReservoirPoints_13_3.png" /> Tahtsa Narrows<br />\
    <img src="styles/legend/ReservoirPoints_13_4.png" /> Tunnel Intake<br />\
    <img src="styles/legend/ReservoirPoints_13_5.png" /> Kemano Powerhouse<br />'
        });

lyr_Reservoirdepthcontoursrelativeto855masl5minterval_0.setVisible(true);lyr_ReservoirFloodedShadedTerrain2x_1.setVisible(true);lyr_CheslattaLake_2.setVisible(true);lyr_SkinsLake_3.setVisible(true);lyr_NechakoRiver_4.setVisible(true);lyr_CheslattaRiver_5.setVisible(true);lyr_PreReservoirLake_6.setVisible(false);lyr_PrereservoirRiver_7.setVisible(false);lyr_CheslattaWatershed_8.setVisible(true);lyr_UpperNechakoCanyon_9.setVisible(true);lyr_NechakoReservoir_10.setVisible(false);lyr_TransmissionLinetoKitimat_11.setVisible(true);lyr_KemanoTunnels_12.setVisible(true);lyr_ReservoirPoints_13.setVisible(true);
var layersList = [lyr_Reservoirdepthcontoursrelativeto855masl5minterval_0,lyr_ReservoirFloodedShadedTerrain2x_1,lyr_CheslattaLake_2,lyr_SkinsLake_3,lyr_NechakoRiver_4,lyr_CheslattaRiver_5,lyr_PreReservoirLake_6,lyr_PrereservoirRiver_7,lyr_CheslattaWatershed_8,lyr_UpperNechakoCanyon_9,lyr_NechakoReservoir_10,lyr_TransmissionLinetoKitimat_11,lyr_KemanoTunnels_12,lyr_ReservoirPoints_13];
lyr_Reservoirdepthcontoursrelativeto855masl5minterval_0.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV_MIN': 'ELEV_MIN', 'ELEV_MAX': 'ELEV_MAX', });
lyr_CheslattaLake_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WATERBODY_': 'WATERBODY_', 'WATERSHED_': 'WATERSHED_', 'WATERBOD_1': 'WATERBOD_1', 'WATERBOD_2': 'WATERBOD_2', 'AREA_HA': 'AREA_HA', 'GNIS_ID_1': 'GNIS_ID_1', 'GNIS_NAME_': 'GNIS_NAME_', 'GNIS_ID_2': 'GNIS_ID_2', 'GNIS_NAM_1': 'GNIS_NAM_1', 'GNIS_ID_3': 'GNIS_ID_3', 'GNIS_NAM_2': 'GNIS_NAM_2', 'BLUE_LINE_': 'BLUE_LINE_', 'WATERSHE_1': 'WATERSHE_1', 'FWA_WATERS': 'FWA_WATERS', 'LOCAL_WATE': 'LOCAL_WATE', 'WATERSHE_2': 'WATERSHE_2', 'LEFT_RIGHT': 'LEFT_RIGHT', 'WATERBOD_3': 'WATERBOD_3', 'WATERSHE_3': 'WATERSHE_3', 'WATERBOD_4': 'WATERBOD_4', 'WATERSHE_4': 'WATERSHE_4', 'FEATURE_CO': 'FEATURE_CO', 'GEOMETRY_L': 'GEOMETRY_L', 'GEOMETRY_A': 'GEOMETRY_A', 'Class': 'Class', 'areaHa': 'areaHa', });
lyr_SkinsLake_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WATERBODY_': 'WATERBODY_', 'WATERSHED_': 'WATERSHED_', 'WATERBOD_1': 'WATERBOD_1', 'WATERBOD_2': 'WATERBOD_2', 'AREA_HA': 'AREA_HA', 'GNIS_ID_1': 'GNIS_ID_1', 'GNIS_NAME_': 'GNIS_NAME_', 'GNIS_ID_2': 'GNIS_ID_2', 'GNIS_NAM_1': 'GNIS_NAM_1', 'GNIS_ID_3': 'GNIS_ID_3', 'GNIS_NAM_2': 'GNIS_NAM_2', 'BLUE_LINE_': 'BLUE_LINE_', 'WATERSHE_1': 'WATERSHE_1', 'FWA_WATERS': 'FWA_WATERS', 'LOCAL_WATE': 'LOCAL_WATE', 'WATERSHE_2': 'WATERSHE_2', 'LEFT_RIGHT': 'LEFT_RIGHT', 'WATERBOD_3': 'WATERBOD_3', 'WATERSHE_3': 'WATERSHE_3', 'WATERBOD_4': 'WATERBOD_4', 'WATERSHE_4': 'WATERSHE_4', 'FEATURE_CO': 'FEATURE_CO', 'GEOMETRY_L': 'GEOMETRY_L', 'GEOMETRY_A': 'GEOMETRY_A', 'Class': 'Class', 'areaHa': 'areaHa', });
lyr_NechakoRiver_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WATERBODY_': 'WATERBODY_', 'WATERSHED_': 'WATERSHED_', 'WATERBOD_1': 'WATERBOD_1', 'WATERBOD_2': 'WATERBOD_2', 'AREA_HA': 'AREA_HA', 'GNIS_ID_1': 'GNIS_ID_1', 'GNIS_NAME_': 'GNIS_NAME_', 'GNIS_ID_2': 'GNIS_ID_2', 'GNIS_NAM_1': 'GNIS_NAM_1', 'GNIS_ID_3': 'GNIS_ID_3', 'GNIS_NAM_2': 'GNIS_NAM_2', 'BLUE_LINE_': 'BLUE_LINE_', 'WATERSHE_1': 'WATERSHE_1', 'FWA_WATERS': 'FWA_WATERS', 'LOCAL_WATE': 'LOCAL_WATE', 'WATERSHE_2': 'WATERSHE_2', 'LEFT_RIGHT': 'LEFT_RIGHT', 'WATERBOD_3': 'WATERBOD_3', 'WATERSHE_3': 'WATERSHE_3', 'WATERBOD_4': 'WATERBOD_4', 'WATERSHE_4': 'WATERSHE_4', 'FEATURE_CO': 'FEATURE_CO', 'GEOMETRY_L': 'GEOMETRY_L', 'GEOMETRY_A': 'GEOMETRY_A', });
lyr_CheslattaRiver_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WATERBODY_': 'WATERBODY_', 'WATERSHED_': 'WATERSHED_', 'WATERBOD_1': 'WATERBOD_1', 'WATERBOD_2': 'WATERBOD_2', 'AREA_HA': 'AREA_HA', 'GNIS_ID_1': 'GNIS_ID_1', 'GNIS_NAME_': 'GNIS_NAME_', 'GNIS_ID_2': 'GNIS_ID_2', 'GNIS_NAM_1': 'GNIS_NAM_1', 'GNIS_ID_3': 'GNIS_ID_3', 'GNIS_NAM_2': 'GNIS_NAM_2', 'BLUE_LINE_': 'BLUE_LINE_', 'WATERSHE_1': 'WATERSHE_1', 'FWA_WATERS': 'FWA_WATERS', 'LOCAL_WATE': 'LOCAL_WATE', 'WATERSHE_2': 'WATERSHE_2', 'LEFT_RIGHT': 'LEFT_RIGHT', 'WATERBOD_3': 'WATERBOD_3', 'WATERSHE_3': 'WATERSHE_3', 'WATERBOD_4': 'WATERBOD_4', 'WATERSHE_4': 'WATERSHE_4', 'FEATURE_CO': 'FEATURE_CO', 'GEOMETRY_L': 'GEOMETRY_L', 'GEOMETRY_A': 'GEOMETRY_A', });
lyr_PreReservoirLake_6.set('fieldAliases', {'fid': 'fid', });
lyr_PrereservoirRiver_7.set('fieldAliases', {'fid': 'fid', });
lyr_CheslattaWatershed_8.set('fieldAliases', {'fid': 'fid', });
lyr_UpperNechakoCanyon_9.set('fieldAliases', {'FID': 'FID', });
lyr_NechakoReservoir_10.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'WATERBODY_': 'WATERBODY_', 'WATERSHED_': 'WATERSHED_', 'WATERBOD_1': 'WATERBOD_1', 'WATERBOD_2': 'WATERBOD_2', 'AREA_HA': 'AREA_HA', 'GNIS_ID_1': 'GNIS_ID_1', 'GNIS_NAME_': 'GNIS_NAME_', 'GNIS_ID_2': 'GNIS_ID_2', 'GNIS_NAM_1': 'GNIS_NAM_1', 'GNIS_ID_3': 'GNIS_ID_3', 'GNIS_NAM_2': 'GNIS_NAM_2', 'BLUE_LINE_': 'BLUE_LINE_', 'WATERSHE_1': 'WATERSHE_1', 'FWA_WATERS': 'FWA_WATERS', 'LOCAL_WATE': 'LOCAL_WATE', 'WATERSHE_2': 'WATERSHE_2', 'LEFT_RIGHT': 'LEFT_RIGHT', 'WATERBOD_3': 'WATERBOD_3', 'WATERSHE_3': 'WATERSHE_3', 'WATERBOD_4': 'WATERBOD_4', 'WATERSHE_4': 'WATERSHE_4', 'FEATURE_CO': 'FEATURE_CO', 'GEOMETRY_L': 'GEOMETRY_L', 'GEOMETRY_A': 'GEOMETRY_A', });
lyr_TransmissionLinetoKitimat_11.set('fieldAliases', {'fid': 'fid', });
lyr_KemanoTunnels_12.set('fieldAliases', {'fid': 'fid', });
lyr_ReservoirPoints_13.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Reservoirdepthcontoursrelativeto855masl5minterval_0.set('fieldImages', {'fid': '', 'ID': '', 'ELEV_MIN': '', 'ELEV_MAX': '', });
lyr_CheslattaLake_2.set('fieldImages', {'OBJECTID': '', 'WATERBODY_': '', 'WATERSHED_': '', 'WATERBOD_1': '', 'WATERBOD_2': '', 'AREA_HA': '', 'GNIS_ID_1': '', 'GNIS_NAME_': '', 'GNIS_ID_2': '', 'GNIS_NAM_1': '', 'GNIS_ID_3': '', 'GNIS_NAM_2': '', 'BLUE_LINE_': '', 'WATERSHE_1': '', 'FWA_WATERS': '', 'LOCAL_WATE': '', 'WATERSHE_2': '', 'LEFT_RIGHT': '', 'WATERBOD_3': '', 'WATERSHE_3': '', 'WATERBOD_4': '', 'WATERSHE_4': '', 'FEATURE_CO': '', 'GEOMETRY_L': '', 'GEOMETRY_A': '', 'Class': '', 'areaHa': '', });
lyr_SkinsLake_3.set('fieldImages', {'OBJECTID': '', 'WATERBODY_': '', 'WATERSHED_': '', 'WATERBOD_1': '', 'WATERBOD_2': '', 'AREA_HA': '', 'GNIS_ID_1': '', 'GNIS_NAME_': '', 'GNIS_ID_2': '', 'GNIS_NAM_1': '', 'GNIS_ID_3': '', 'GNIS_NAM_2': '', 'BLUE_LINE_': '', 'WATERSHE_1': '', 'FWA_WATERS': '', 'LOCAL_WATE': '', 'WATERSHE_2': '', 'LEFT_RIGHT': '', 'WATERBOD_3': '', 'WATERSHE_3': '', 'WATERBOD_4': '', 'WATERSHE_4': '', 'FEATURE_CO': '', 'GEOMETRY_L': '', 'GEOMETRY_A': '', 'Class': '', 'areaHa': '', });
lyr_NechakoRiver_4.set('fieldImages', {'OBJECTID': '', 'WATERBODY_': '', 'WATERSHED_': '', 'WATERBOD_1': '', 'WATERBOD_2': '', 'AREA_HA': '', 'GNIS_ID_1': '', 'GNIS_NAME_': '', 'GNIS_ID_2': '', 'GNIS_NAM_1': '', 'GNIS_ID_3': '', 'GNIS_NAM_2': '', 'BLUE_LINE_': '', 'WATERSHE_1': '', 'FWA_WATERS': '', 'LOCAL_WATE': '', 'WATERSHE_2': '', 'LEFT_RIGHT': '', 'WATERBOD_3': '', 'WATERSHE_3': '', 'WATERBOD_4': '', 'WATERSHE_4': '', 'FEATURE_CO': '', 'GEOMETRY_L': '', 'GEOMETRY_A': '', });
lyr_CheslattaRiver_5.set('fieldImages', {'OBJECTID': '', 'WATERBODY_': '', 'WATERSHED_': '', 'WATERBOD_1': '', 'WATERBOD_2': '', 'AREA_HA': '', 'GNIS_ID_1': '', 'GNIS_NAME_': '', 'GNIS_ID_2': '', 'GNIS_NAM_1': '', 'GNIS_ID_3': '', 'GNIS_NAM_2': '', 'BLUE_LINE_': '', 'WATERSHE_1': '', 'FWA_WATERS': '', 'LOCAL_WATE': '', 'WATERSHE_2': '', 'LEFT_RIGHT': '', 'WATERBOD_3': '', 'WATERSHE_3': '', 'WATERBOD_4': '', 'WATERSHE_4': '', 'FEATURE_CO': '', 'GEOMETRY_L': '', 'GEOMETRY_A': '', });
lyr_PreReservoirLake_6.set('fieldImages', {'fid': '', });
lyr_PrereservoirRiver_7.set('fieldImages', {'fid': '', });
lyr_CheslattaWatershed_8.set('fieldImages', {'fid': '', });
lyr_UpperNechakoCanyon_9.set('fieldImages', {'FID': '', });
lyr_NechakoReservoir_10.set('fieldImages', {'fid': '', 'OBJECTID': '', 'WATERBODY_': '', 'WATERSHED_': '', 'WATERBOD_1': '', 'WATERBOD_2': '', 'AREA_HA': '', 'GNIS_ID_1': '', 'GNIS_NAME_': '', 'GNIS_ID_2': '', 'GNIS_NAM_1': '', 'GNIS_ID_3': '', 'GNIS_NAM_2': '', 'BLUE_LINE_': '', 'WATERSHE_1': '', 'FWA_WATERS': '', 'LOCAL_WATE': '', 'WATERSHE_2': '', 'LEFT_RIGHT': '', 'WATERBOD_3': '', 'WATERSHE_3': '', 'WATERBOD_4': '', 'WATERSHE_4': '', 'FEATURE_CO': '', 'GEOMETRY_L': '', 'GEOMETRY_A': '', });
lyr_TransmissionLinetoKitimat_11.set('fieldImages', {'fid': '', });
lyr_KemanoTunnels_12.set('fieldImages', {'fid': '', });
lyr_ReservoirPoints_13.set('fieldImages', {'id': '', 'name': '', });
lyr_Reservoirdepthcontoursrelativeto855masl5minterval_0.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV_MIN': 'no label', 'ELEV_MAX': 'no label', });
lyr_CheslattaLake_2.set('fieldLabels', {'OBJECTID': 'no label', 'WATERBODY_': 'no label', 'WATERSHED_': 'no label', 'WATERBOD_1': 'no label', 'WATERBOD_2': 'no label', 'AREA_HA': 'no label', 'GNIS_ID_1': 'no label', 'GNIS_NAME_': 'no label', 'GNIS_ID_2': 'no label', 'GNIS_NAM_1': 'no label', 'GNIS_ID_3': 'inline label', 'GNIS_NAM_2': 'no label', 'BLUE_LINE_': 'no label', 'WATERSHE_1': 'no label', 'FWA_WATERS': 'no label', 'LOCAL_WATE': 'no label', 'WATERSHE_2': 'no label', 'LEFT_RIGHT': 'no label', 'WATERBOD_3': 'no label', 'WATERSHE_3': 'no label', 'WATERBOD_4': 'no label', 'WATERSHE_4': 'no label', 'FEATURE_CO': 'no label', 'GEOMETRY_L': 'no label', 'GEOMETRY_A': 'no label', 'Class': 'no label', 'areaHa': 'no label', });
lyr_SkinsLake_3.set('fieldLabels', {'OBJECTID': 'no label', 'WATERBODY_': 'no label', 'WATERSHED_': 'no label', 'WATERBOD_1': 'no label', 'WATERBOD_2': 'no label', 'AREA_HA': 'no label', 'GNIS_ID_1': 'no label', 'GNIS_NAME_': 'no label', 'GNIS_ID_2': 'no label', 'GNIS_NAM_1': 'no label', 'GNIS_ID_3': 'no label', 'GNIS_NAM_2': 'no label', 'BLUE_LINE_': 'no label', 'WATERSHE_1': 'no label', 'FWA_WATERS': 'no label', 'LOCAL_WATE': 'no label', 'WATERSHE_2': 'no label', 'LEFT_RIGHT': 'no label', 'WATERBOD_3': 'no label', 'WATERSHE_3': 'no label', 'WATERBOD_4': 'no label', 'WATERSHE_4': 'no label', 'FEATURE_CO': 'no label', 'GEOMETRY_L': 'no label', 'GEOMETRY_A': 'no label', 'Class': 'no label', 'areaHa': 'no label', });
lyr_NechakoRiver_4.set('fieldLabels', {'OBJECTID': 'no label', 'WATERBODY_': 'no label', 'WATERSHED_': 'no label', 'WATERBOD_1': 'no label', 'WATERBOD_2': 'no label', 'AREA_HA': 'no label', 'GNIS_ID_1': 'no label', 'GNIS_NAME_': 'no label', 'GNIS_ID_2': 'no label', 'GNIS_NAM_1': 'no label', 'GNIS_ID_3': 'no label', 'GNIS_NAM_2': 'no label', 'BLUE_LINE_': 'no label', 'WATERSHE_1': 'no label', 'FWA_WATERS': 'no label', 'LOCAL_WATE': 'no label', 'WATERSHE_2': 'no label', 'LEFT_RIGHT': 'no label', 'WATERBOD_3': 'no label', 'WATERSHE_3': 'no label', 'WATERBOD_4': 'no label', 'WATERSHE_4': 'no label', 'FEATURE_CO': 'no label', 'GEOMETRY_L': 'no label', 'GEOMETRY_A': 'no label', });
lyr_CheslattaRiver_5.set('fieldLabels', {'OBJECTID': 'no label', 'WATERBODY_': 'no label', 'WATERSHED_': 'no label', 'WATERBOD_1': 'no label', 'WATERBOD_2': 'no label', 'AREA_HA': 'no label', 'GNIS_ID_1': 'no label', 'GNIS_NAME_': 'no label', 'GNIS_ID_2': 'no label', 'GNIS_NAM_1': 'no label', 'GNIS_ID_3': 'no label', 'GNIS_NAM_2': 'no label', 'BLUE_LINE_': 'no label', 'WATERSHE_1': 'no label', 'FWA_WATERS': 'no label', 'LOCAL_WATE': 'no label', 'WATERSHE_2': 'no label', 'LEFT_RIGHT': 'no label', 'WATERBOD_3': 'no label', 'WATERSHE_3': 'no label', 'WATERBOD_4': 'no label', 'WATERSHE_4': 'no label', 'FEATURE_CO': 'no label', 'GEOMETRY_L': 'no label', 'GEOMETRY_A': 'no label', });
lyr_PreReservoirLake_6.set('fieldLabels', {'fid': 'no label', });
lyr_PrereservoirRiver_7.set('fieldLabels', {'fid': 'no label', });
lyr_CheslattaWatershed_8.set('fieldLabels', {'fid': 'no label', });
lyr_UpperNechakoCanyon_9.set('fieldLabels', {'FID': 'no label', });
lyr_NechakoReservoir_10.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'WATERBODY_': 'no label', 'WATERSHED_': 'no label', 'WATERBOD_1': 'no label', 'WATERBOD_2': 'no label', 'AREA_HA': 'no label', 'GNIS_ID_1': 'no label', 'GNIS_NAME_': 'no label', 'GNIS_ID_2': 'no label', 'GNIS_NAM_1': 'no label', 'GNIS_ID_3': 'no label', 'GNIS_NAM_2': 'no label', 'BLUE_LINE_': 'no label', 'WATERSHE_1': 'no label', 'FWA_WATERS': 'no label', 'LOCAL_WATE': 'no label', 'WATERSHE_2': 'no label', 'LEFT_RIGHT': 'no label', 'WATERBOD_3': 'no label', 'WATERSHE_3': 'no label', 'WATERBOD_4': 'no label', 'WATERSHE_4': 'no label', 'FEATURE_CO': 'no label', 'GEOMETRY_L': 'no label', 'GEOMETRY_A': 'no label', });
lyr_TransmissionLinetoKitimat_11.set('fieldLabels', {'fid': 'no label', });
lyr_KemanoTunnels_12.set('fieldLabels', {'fid': 'no label', });
lyr_ReservoirPoints_13.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_ReservoirPoints_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});