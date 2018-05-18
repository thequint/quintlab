var SI_SPORT = SI_SPORT || {};
SI_SPORT.seriesBatsmenData = "";
SI_SPORT.SeriesId = "";
SI_SPORT.url_paras = "";
SI_SPORT.standingsData = "";

var _isLcl = window.location.host == 'sportz:8079' || window.location.host == '192.168.100.1:8079';
var linkBase = "";
var teamImagePath = _isLcl ? "http://sportz:8079/cricket/images/flags/" : "https://assets-quint.sportz.io/cricket/images/flags/";

var TEAM_SHORTS = { '1105': 'RCB','1108': 'CSK','1110': 'RR', '1106': 'KKR', '1107': 'KXIP', '1109': 'DD', '1111': 'MI', '1379': 'SRH', '1508': 'RPS', '1509': 'GL' };
SI_SPORT.GetUrlParas = function() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    SI_SPORT.url_paras = vars;
}

SI_SPORT.loadFile = function(url, fnCallback) {
    /* var jqxhr = $.jsonp({
        url: url,
        cache: true,
        callbackParameter: "callback",
        callback: "cb",
        success: function(jsn_data) {
            fnCallback(jsn_data)
        },
        error: function(a, b, c) {
            window.console && console.log(a, b, c);
        }
    }); */
	$.ajax({
		url: url,
		type: 'GET',
		dataType: "json",
		success: function(jsn_data) {
			fnCallback(jsn_data);
		},
		error: function(a, b, c) {
			window.console && console.log(a, b, c);
		}
	});
}

SI_SPORT.loadStandings = function() {

    SI_SPORT.GetUrlParas();
    SI_SPORT.SeriesId = SI_SPORT.url_paras.seriesId || "2940";
    //var url = "https://assets-quint.sportz.io/sifeeds/cricket/apis/getdata.aspx?feedtype=cricket_standing&id=" + SI_SPORT.SeriesId;
    var url = "https://assets-quint.sportz.io/sifeeds/repo/cricket/live/json/standing_"+SI_SPORT.SeriesId+".json";

    SI_SPORT.loadFile(url, fnPrintStandings);
}

function fnPrintStandings(data) {
    var $StCnt = $('#siStWdgtCnt');
    if (data.standings) {
        $StCnt.html('<div class="si-mainWrap si-standings"> <div class="si-StandsHd"><span>Standings</span></div> <div class="si-tab-container"> <div class="si-tab"> <ul> <li data-name="Points"> <span>Points Table</span> </li> <!--<li data-name="Playoffs"> <span>Playoffs</span> </li>--> </ul> </div> <div class="si-tab-content"> <div class="si-tab-item si-points-table" style="display:none;"> </div> <div class="si-tab-item si-playoffs" style="display:none;"> </div> </div> </div></div>');
    } else {
        $StCnt.html('<div class="si-StandsHd"><span>Standings</span></div><div class="si-tab-container">Data Not Available</div>');
        return;
    }
    SI_SPORT.WidgetData = data.standings;

    $('.si-tab-container .si-tab li[data-name]').off('click').on('click', function() {
        var $this = $(this);
        if ($this.hasClass('active')) return;
        $this.addClass('active').siblings().removeClass('active');
        var dataName = $this.attr('data-name');
        var callFn = 'Load' + dataName + 'Table';
        if (SI_SPORT[callFn]) {
            SI_SPORT[callFn]();
        }

    });
    $('.si-tab-container .si-tab li[data-name]:first').trigger('click');
}
SI_SPORT.noData = function(_c) {
    var noDataMkp = '<div class="no-data-available">Data Not Available</div>';
    _c.html(noDataMkp).show().siblings().hide();
};
SI_SPORT.LoadPointsTable = function() {
    if (!(SI_SPORT.WidgetData && SI_SPORT.WidgetData.stage1)) {
        SI_SPORT.noData($('.si-points-table'));
        return;
    }
    var teamArr = SI_SPORT.WidgetData.stage1.team;

    var head = ' <div class="si-table-tr"> <div class="si-table-th tbl-pos"> <span>Pos</span> </div> <div class="si-table-th si-tbl-team"> <span>Team</span> </div> <div class="si-table-th si-tbl-pld"> <span>Pld</span> </div><div class="si-table-th tbl-wins"> <span>W</span> </div><div class="si-table-th tbl-loss"> <span>L</span> </div> <div class="si-table-th si-tbl-pts"> <span>Pts</span> </div> <div class="si-table-th tbl-nrr"> <span>NRR</span> </div> </div>';

    var mkp = '<div class="si-table">';
    mkp += head;
    teamArr.forEach(function(team) {
        var teamName = team.name;
        mkp += '<div class="si-table-tr check-table-points" data-teamid="' + team.id + '" data-teamName="' + teamName + '"> <div class="si-table-td si-tbl-pos"> <span>' + team.pos + '</span> </div> <div class="si-table-td si-tbl-team clickable"><span class="si-team-image"><img src="' + teamImagePath + team.id + '.png"></span> <span class="si-team-name">' + TEAM_SHORTS[team.id] + '</span> </div> <div class="si-table-td si-tbl-pld"> <span>' + team.p + '</span> </div> <div class="si-table-td si-tbl-wins"> <span>' + team.w + '</span> </div><div class="si-table-td si-tbl-loss"> <span>' + team.l + '</span> </div><div class="si-table-td si-tbl-pts"> <span>' + team.pts + '</span> </div> <div class="si-table-td si-tbl-nrr"> <span>' + team.nrr + '</span> </div></div>';
    });
    mkp += '</div>';
    $('.si-points-table').html(mkp).show().siblings().hide();

    //$('#siStWdgtCnt .si-points-table .si-table .clickable').css('cursor', 'pointer');
    $('#siStWdgtCnt .si-points-table .si-table .clickable').unbind('click').bind('click', function() {
        return;
        var parentEle = $(this).parent('.check-table-points');
        var teamId = parentEle.attr('data-teamid');
        var TeamName = parentEle.attr('data-teamName');
        var makeTeamId = TeamName + '-' + teamId;
        var removeSpaceText = makeTeamId.replace(/ /g, "-").toLowerCase();
        var UrlLink = linkBase + removeSpaceText;
        window.open(UrlLink, "_blank");
    });

};
SI_SPORT.LoadPlayoffsTable = function() {
    if (!SI_SPORT.WidgetData) {
        SI_SPORT.noData(plyOffCnt);
        return;
    }
    SI_SPORT.CheckTablePoints(SI_SPORT.WidgetData);
};

SI_SPORT.CheckTablePoints = function(WidgetData) {
    var counter = 0;
    var allMatch = 14;
    var numberOfTeam = 8;
    var TeamObj = [];
    var dateQlify1 = '16/05/2017';
    var dateElimintor = '17/05/2017';
    var dateQlify2 = '19/05/2017';
    var datefinal = '21/05/2017';
    var plyOffCnt = $('.si-playoffs');
    var tempMrk = '';
    var mainContainer = $('#siStWdgtCnt').find('.si-points-table .check-table-points').each(function() {
        var teamWinPoint = $(this).find('.si-tbl-pld span').text();
        if (teamWinPoint == allMatch) {
            counter++;
        }
    });
    if (counter == numberOfTeam) {
        var container = $('#siStWdgtCnt');
        var quali1TeamAId = container.find('.si-points-table .check-table-points:eq(0)').attr('data-teamid');
        var quali1TeamAName = container.find('.si-points-table .check-table-points:eq(0)').find('.si-tbl-team .si-team-name').text();
        var quali1TeamBId = container.find('.si-points-table .check-table-points:eq(1)').attr('data-teamid');
        var quali1TeamBName = container.find('.si-points-table .check-table-points:eq(1)').find('.si-tbl-team .si-team-name').text();
        var eliminTeamAId = container.find('.si-points-table .check-table-points:eq(2)').attr('data-teamid');
        var eliminTeamAName = container.find('.si-points-table .check-table-points:eq(2)').find('.si-tbl-team .si-team-name').text();
        var eliminTeamBId = container.find('.si-points-table .check-table-points:eq(3)').attr('data-teamid');
        var eliminTeamBName = container.find('.si-points-table .check-table-points:eq(3)').find('.si-tbl-team .si-team-name').text();
        var quali1teamAfull = container.find('.si-points-table .check-table-points:eq(0)').attr('data-teamname');
        var quali1teamBfull = container.find('.si-points-table .check-table-points:eq(1)').attr('data-teamname');
        var eliminteamAfull = container.find('.si-points-table .check-table-points:eq(2)').attr('data-teamname');
        var eliminteamBfull = container.find('.si-points-table .check-table-points:eq(3)').attr('data-teamname');

        TeamObj = [{ "teamAId": quali1TeamAId, "teamAName": quali1TeamAName, "teamBId": quali1TeamBId, "teamBName": quali1TeamBName, "qulify": 'Qualifier 1', 'date': dateQlify1, "TeamAfullName": quali1teamAfull, "TeamBfullName": quali1teamBfull }, { "teamAId": eliminTeamAId, "teamAName": eliminTeamAName, "teamBId": eliminTeamBId, "teamBName": eliminTeamBName, "qulify": 'Eliminator', 'date': dateElimintor, "TeamAfullName": eliminteamAfull, "TeamBfullName": eliminteamBfull }];
    } else {
        TeamObj = [{ "teamAId": 0, "teamAName": 'tbc', "teamBId": 0, "teamBName": 'tbc', "qulify": 'Qualifier 1', 'date': dateQlify1, 'TeamAfullName': '', 'TeamBfullName': '' }, { "teamAId": 0, "teamAName": 'tbc', "teamBId": 0, "teamBName": 'tbc', "qulify": 'Eliminator', 'date': dateElimintor, 'TeamAfullName': '', 'TeamBfullName': '' }];
    }
    var TeamData = WidgetData.stage1.team;
    var flagsQulify2 = true;
    var flagsFinal = true;
    for (var i = 0; i < TeamData.length; i++) {
        var getTeam = TeamData[i];
        var NameIdIs = getTeam.id;
        var NameIs = TEAM_SHORTS[NameIdIs];
        var matchList = getTeam.matches;
        var dataName = getTeam.name;
        for (var k = 0; k < matchList.length; k++) {
            var match = matchList[k];
            var vsTeamName = match.vs_shortname;
            var vsFullName = match.vs_fullname;
            var dateIs = match.date;
            var vsTeamId = match.vs_id;
            var numberCheck = match.number.toLowerCase();
            if (numberCheck == 'qualifier 2') {
                flagsQulify2 = false;
                TeamObj.push({ "teamAId": NameIdIs, "teamAName": NameIs, "teamBId": vsTeamId, "teamBName": vsTeamName, "qulify": 'Qualifier 2', 'date': dateIs, 'TeamAfullName': dataName, 'TeamBfullName': vsFullName });
            } else if (numberCheck == 'final') {
                flagsFinal = false;
                TeamObj.push({ "teamAId": NameIdIs, "teamAName": NameIs, "teamBId": vsTeamId, "teamBName": vsTeamName, "qulify": 'final', 'date': dateIs, 'TeamAfullName': dataName, 'TeamBfullName': vsFullName });
            }
        }
    }
    if (flagsQulify2) {
        TeamObj.push({ "teamAId": 0, "teamAName": 'tbc', "teamBId": 0, "teamBName": 'tbc', "qulify": 'Qualifier 2', 'date': dateQlify2, 'TeamAfullName': '', 'TeamBfullName': '' });
    }
    if (flagsFinal) {
        TeamObj.push({ "teamAId": 0, "teamAName": 'tbc', "teamBId": 0, "teamBName": 'tbc', "qulify": 'Final', 'date': datefinal, 'TeamAfullName': '', 'TeamBfullName': '' });
    }
    for (var p = 0; p < TeamObj.length; p++) {
        var selectTeam = TeamObj[p];
        var TeamAId = selectTeam.teamAId;
        var TeamAName = selectTeam.teamAName;
        var TeamBId = selectTeam.teamBId;
        var TeamBName = selectTeam.teamBName;
        var matchDate = selectTeam.date;
        var typeQulitfy = selectTeam.qulify;
        var fullNameAteam = selectTeam && selectTeam.TeamAfullName ? selectTeam.TeamAfullName : '-';
        var fullNameBteam = selectTeam && selectTeam.TeamBfullName ? selectTeam.TeamBfullName : '-';
        tempMrk += '<div class="si-section"> <div class="si-section-head"><span class="si-txt-1">' + typeQulitfy + '</span><span class="si-txt-2">' + matchDate + '</span> </div> <div class="si-section-body"><div class="si-team-box"><div class="si-team si-team-a" data-teamId="' + TeamAId + '" data-team-Name="' + fullNameAteam + '"><div class="si-content-wrap"><div class="si-team-image"><img src="' + teamImagePath + TeamAId + '.png"></div><div class="si-team-name">' + TeamAName + '</div></div></div><div class="si-team si-team-vs"><div class="si-content-wrap"><span>vs</span></div></div><div class="si-team si-team-a" data-teamId="' + TeamBId + '" data-team-Name="' + fullNameBteam + '"><div class="si-content-wrap"><div class="si-team-image"><img src="' + teamImagePath + TeamBId + '.png"></div><div class="si-team-name">' + TeamBName + '</div></div></div></div> </div> </div>';
    }
    plyOffCnt.html(tempMrk).show().siblings().hide();
    $('#siStWdgtCnt .si-playoffs .si-section .si-team-a').css('cursor', 'pointer');
    $('#siStWdgtCnt .si-playoffs .si-section .si-team-a').unbind('click').bind('click', function() {
        return;
        var TeamId = $(this).attr('data-teamId');
        var teamName = $(this).attr('data-team-Name');
        if (TeamId == 0) {
            return;
        }
        var concatText = teamName + '-' + TeamId;
        var removeSpaceText = concatText.replace(/ /g, "-").toLowerCase();
        //var UrlLink = "" + removeSpaceText;
        //window.open(UrlLink, "_blank");
    });
};

/** GA code **/
                
(function (i, s, o, g, r, a, m) {
i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
	(i[r].q = i[r].q || []).push(arguments)
}, i[r].l = 1 * new Date(); a = s.createElement(o),
	m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-13061035-27', 'auto', 'siStandings');
ga('siStandings.send', 'pageview');