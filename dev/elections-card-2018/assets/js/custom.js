var public_spreadsheet_elections = 'https://docs.google.com/spreadsheets/d/1I2uqolvH-ezXHCZTjW_v3FB4NkAKDmIgbiUbPfRoY2M/pubhtml';

function init() {
    Tabletop.init({
        key: public_spreadsheet_elections,
        callback: showInfo,
        simpleSheet: true
    });
}

$(window).on('load', function() {
    init();
});