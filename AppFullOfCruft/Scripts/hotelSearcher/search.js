
//add event handlers to the search

operationsDashboardSearchCriteria = function () {
    var
    intialize = function () {
        configureDialog();
    },
    carriersInformationDialog = $("#Guests"),
    showLegend = function () {
        carriersInformationDialog.dialog("open");
    },
    configureDialog = function () {
        $('#guestInformationTooltip').click(function () {
            showLegend();
        });
        brock.toolTip('#guestInformationTooltip', '#guestInformationDialog');
    };
    return {
        intialize: intialize
    };
} ();


function startRequest(sender, e) {
    //disable search button during the AJAX call
    $('.btnSearch').attr('disabled', true);
}

function redirectDetail(flightID, tab) {
    if (flightID > 0) {
        url = "../Setup/OutboundFlightDetails.aspx?flightid=" + flightID + "&tab=" + tab;
        window.location = url;
    }
}

function redirectDetailInbound(flightID, tab) {
    if (flightID > 0) {
        url = "../Setup/InboundFlightDetails.aspx?flightid=" + flightID + "&tab=" + tab;
        window.location = url;
    }
}

function tabToggle() {
    $('#tblDashboardInbound').dataTable().fnAdjustColumnSizing();
    $('#tblDashboardOutbound').dataTable().fnAdjustColumnSizing();
}

function pageLoad(sender, args) {

    // This is a temporary fix for a bug in IE9 where it renders extra whitespace causing the table to shift in random spots
    var expr = new RegExp('>[ \t\r\n\v\f]*<', 'g');
    var tbhtml = $('#tblDashboardOutbound').html();
    if (tbhtml != null) {
        $('#tblDashboardOutbound').html(tbhtml.replace(expr, '><'));
    }

    operationsDashboardSearchCriteria.intialize();

    $('#tblDashboardOutbound').dataTable({
        "bRetrieve": true,
        "bServerSide": false,
        "aaSorting": [[0, "desc"], [2, "asc"]],
        "bPaginate": false,
        "bInfo": false,
        "bFilter": false,
        "bAutoWidth": true,
        "bStateSave": true,
        "aoColumns":
        [
        /* 0: Favourite */{"sClass": "image", "bSortable": true },
        /* 1: Flight */{"sClass": "string", "sSortDataType": "dom-text", "sType": "flight-eu", "bSortable": true },
        /* 2: Date */{"sClass": "string", "sSortDataType": "dom-text", "sType": "date-eu", "bSortable": true },
        /* 3: Scheduled */{"sClass": "string", "sSortDataType": "dom-text", "sType": "Time-eu", "bSortable": true },
        /* 4: Estimated */{"sClass": "string", "sSortDataType": "dom-text", "sType": "Time-eu", "bSortable": true },
        /* 5: Status */{"sClass": "string", "bSortable": true },
        /* 6: Destination */{"sClass": "string", "bSortable": true },
        /* 7: Market */{"sClass": "string", "bSortable": true },
        /* 8: Fin */{"sClass": "string", "bSortable": true },
        /* 9: Type */{"sClass": "string", "bSortable": true },
        /* 10: Gate */{"sClass": "string", "bSortable": true },
        /* 11: Bags Loaded */{"sClass": "string", "sType": "num-html", "bSortable": true },
        /* 12: Bags To Load */{"sClass": "string", "sType": "num-html", "bSortable": true },
        /* 13: Okay To Load */{"sClass": "string", "sType": "num-html", "bSortable": true },
        /* 14: Not Okay To Load */{"sClass": "string", "sType": "num-html", "bSortable": true },
        /* 15: Total Bags Expected */{"sClass": "string", "sType": "num-html", "bSortable": true },
        /* 16: Action Items */{"sClass": "string", "sType": "num-html", "bSortable": true }
        ]
    });

    expr = new RegExp('>[ \t\r\n\v\f]*<', 'g');
    tbhtml = $('#tblDashboardInbound').html();
    if (tbhtml != null) {
        $('#tblDashboardInbound').html(tbhtml.replace(expr, '><'));
    }

    var columnString = '{ "sClass": "string", "sWidth": "70px", "bSortable": true }';
    if ($('.priorityBagHeader').size() > 0) {
        for (var i = 0; i < $('.priorityBagHeader').size(); i++) {
            columnString = (columnString + ', { "sClass": "string", "sWidth": "70px", "bSortable": true }');
        }
    }

    $('#tblDashboardInbound').dataTable({
        "bRetrieve": true,
        "bServerSide": false,
        "bInfo": false,
        "aaSorting": [[0, "desc"], [2, "asc"]],
        "bPaginate": false,
        "bFilter": false,
        "bAutoWidth": true,
        "bStateSave": true,
        "aoColumns":
        [
        /* 0: Favourite */{"sClass": "image", "bSortable": true },
        /* 1: Flight */{"sClass": "string", "sSortDataType": "dom-text", "sType": "flight-eu", "bSortable": true },
        /* 2: Date */{"sClass": "string", "sSortDataType": "dom-text", "sType": "date-eu", "bSortable": true },
        /* 3: Scheduled */{"sClass": "string", "sSortDataType": "dom-text", "sType": "Time-eu", "bSortable": true },
        /* 4: Estimated */{"sClass": "string", "sSortDataType": "dom-text", "sType": "Time-eu", "bSortable": true },
        /* 5: Status */{"sClass": "string", "bSortable": true },
        /* 6: Originating */{"sClass": "string", "bSortable": true },
        /* 7: Market */{"sClass": "string", "bSortable": true },
        /* 8: Fin */{"sClass": "string", "bSortable": true },
        /* 9: Type */{"sClass": "string", "bSortable": true },
        /* 10: Gate */{"sClass": "string", "bSortable": true },
        /* 11: Terminating */{"sClass": "string", "sType": "num-html", "bSortable": true },
        /* 12: Hot Transfer */{"sClass": "string", "sType": "num-html", "bSortable": true },
        /* 13: Cold Transfer */{"sClass": "string", "sType": "num-html", "bSortable": true },
        /* 14: Thru */{"sClass": "string", "sType": "num-html", "bSortable": true },
        /* 15: Total */{"sClass": "string", "sType": "num-html", "bSortable": true }
        ]
    });

    $.fn.dataTableExt.oJUIClasses.sScrollHead = "dataTables_scrollHead";

    if ($('#hfMyFlight').val() != "") {
        DisplayMyFlightsCriteria();
        $('.selector-enable').addClass('selected');
        $('.selector-disable').removeClass('selected');
    }
    else {
        DisplayAllFlightsCriteria();
        $('.selector-enable').removeClass('selected');
        $('.selector-disable').addClass('selected');
    }
}


$(document).on('click', ".selector-disable", function () {
    var parent = $(this).parents('.switch');
    $('.selector-enable', parent).removeClass('selected');
    $(this).addClass('selected');
    $('#hfMyFlight').val("");
    DisplayAllFlightsCriteria();
});

$(document).on('click', ".selector-enable", function () {
    var parent = $(this).parents('.switch');
    $('.selector-disable', parent).removeClass('selected');
    $(this).addClass('selected');
    $('#hfMyFlight').val("true");
    DisplayMyFlightsCriteria();
});

$(document).on('click', ".cb-market", function () {
    var fnId = "'hf" + $(this).text().trim() + "Market'";
    $(this).toggleClass('selected');
    if ($(this).hasClass('selected')) {
        var market = $(this).text().trim();
        $("#market-group").find("[id$=" + fnId + "]").val(market);
    }
    else {
        $("#market-group").find("[id$=" + fnId + "]").val("");
    }
});

function DisplayMyFlightsCriteria() {
    $('#tdMyFlight').show();
    $('#divAllFlightCriteria').hide();
}

function DisplayAllFlightsCriteria() {
    $('#tdMyFlight').hide();
    $('#divAllFlightCriteria').show();
}

$(document).ready(function () {
    $(".cb-enable").click(function () {
        var parent = $(this).parents('.switch');
        $('.cb-disable', parent).removeClass('selected');
        $(this).addClass('selected');
        $('.checkbox', parent).attr('checked', true);
    });
    $(".cb-disable").click(function () {
        var parent = $(this).parents('.switch');
        $('.cb-enable', parent).removeClass('selected');
        $(this).addClass('selected');
        $('.checkbox', parent).attr('checked', false);
    });
    $(document).on('click', "#tdIsFavoriteOutbound", function () {
        ToggleIsFavorite($(this));
    });
    $(document).on('click', "#tdIsFavoriteInbound", function () {
        ToggleIsFavorite($(this));
    });
});

function ToggleIsFavorite(item, direction) {
    item.toggleClass("isFavorite");
    var flightInfo = item.closest('tr').find('td').find('a').html();
    var isFavorite = item.hasClass("isFavorite");

    if (isFavorite) {
        item.removeClass("notFavorite");
    }
    else {
        item.addClass("notFavorite");
    }

    PageMethods.UpdateFavoriteFlight(flightInfo, isFavorite, OnActionFailure);
}

function OnActionFailure(error) {
    $('.errorMessage').text(error);
    $('.errorMessage').addClass('errorMessages');
    $('.errorMessage').show();
}

function FilterByAction() {
    var selectedAction = $("#ddActionItemType").val();
    $("#hfSelectedAction").val(selectedAction);
    $("#btnFilterByActionItem").click();
}
