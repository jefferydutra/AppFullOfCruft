toolTip = function (triggereElementId, dialogElementId, autoOpen, title) {
    if (!autoOpen) {
        autoOpen = false;
    }
    if (title) {
        $(dialogElementId).attr("title", title)
    }
    $(dialogElementId).dialog({
        autoOpen: autoOpen,
        width: 350,
        resizeable: false,
        position: { my: "center top", at: "center bottom", of: $(triggereElementId) }
    });
};