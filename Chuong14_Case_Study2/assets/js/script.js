// JQUERY - REDIRECT PAGE
$(function () {
    $("#includedContent").load(`pages/home.html`);
});

function reload(page) {
    $("#includedContent").load(`pages/${page}.html`);
    $('html,body').scrollTop(0);
}

function loadBookAvatar(bookElm) {
    const bookImgPath = $(bookElm).find("img").attr("src");

    $.get("pages/bookinfo.html", function (result) {
        const newContent = result.replaceAll("bookImgPath", bookImgPath);
        $("#includedContent").empty();
        $("#includedContent").append(newContent);
    });
    $("html,body").scrollTop(0);
}

// OPEN SEARCH BOX
const SEARCH_BOX_STATUS = document.getElementById("searchBox").classList;

function openSearchBox() {
    if (SEARCH_BOX_STATUS.contains("d-none")) {
        SEARCH_BOX_STATUS.remove("d-none");
        SEARCH_BOX_STATUS.add("d-flex");
    } else {
        SEARCH_BOX_STATUS.remove("d-flex");
        SEARCH_BOX_STATUS.add("d-none");
    }
}
