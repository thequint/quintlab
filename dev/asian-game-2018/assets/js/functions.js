
// var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1SugZ2oqmcPKbTyQ-2nN5OIH3xG4ZaYUBcmLtbKqgJts/pubhtml';

var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1tQOVwfWUSzpdfbZHaUpzu12CXil8_wHd0bgk7X-IUhg/pubhtml';


function init() {
    Tabletop.init({
        key: public_spreadsheet_contact,
        callback: showInfo,
        simpleSheet: true
    });
}


window.addEventListener('DOMContentLoaded', init);

function showInfo(data) {

    // sheet data

    for (var index = data.length - 1; index >= 0; index--) {
       if(data[index] && data[index].Game_player_vs){
           $("#product_show").append(
               "<li class='asian-game__content " + data[index].Game_icon + "'>" +
                   "<div class='el-position'>" +
                       "<div class='asian-game__content--timestamp'>" + data[index].Game_time + "</div>" +
                       "<div class='asian-game__content--category'><span class='cat-icon'></span><span class='cat-bg'>" + data[index].Game_category + "</span></div>" +
                       "<div class='asian-game__content--headline'>" + data[index].Game_player_name + " <span class='match-vs'>" + data[index].Game_player_vs + "</span></div>" +
                       "<div class='asian-game__content--sub-headline'>" + data[index].Game_round + "</div>" +
                   "</div>" +
                   "<span class='circle-large'><span></span></span>" +
               "</li>"
           )
       } else {
           $("#product_show").append(
               "<li class='asian-game__content " + data[index].Game_icon + "'>" +
                   "<div class='el-position'>" +
                       "<div class='asian-game__content--timestamp'>" + data[index].Game_time + "</div>" +
                       "<div class='asian-game__content--category'><span class='cat-icon'></span><span class='cat-bg'>" + data[index].Game_category + "</span></div>" +
                       "<div class='asian-game__content--headline'>" + data[index].Game_player_name + "</div>" +
                       "<div class='asian-game__content--sub-headline'>" + data[index].Game_round + "</div>" +
                   "</div>" +
                   "<span class='circle-small'></span>" +
               "</li>"
           )
       }
   }
   $("#schedule_slider").show();

adjust_slider();
}