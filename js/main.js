function getuserbyusername() {

    var username = $("#search-username").val().trim();

    $.get("https://api.github.com/users/" + username, function (data) {
        makeHTMLandshow(data);
    });

}

function makeHTMLandshow(data) {
    var completeHTML = "";

    var URL =
        '<div class="col-12 pb-2">' +
        '<div class="blockquote font-weight-bolder" >' +
        ' Github URL' +
        '</div ><p class="font-weight-normal">' +
        data.html_url +
        '</p></div > ';

    completeHTML += URL;

    var name = '<div class="col-12 pb-2">' +
        '<div class="blockquote font-weight-bolder" >' +
        ' Name' +
        '</div ><p class="font-weight-normal">' +
        data.name +
        '</p></div > ';

    completeHTML += name;

    var blog = '<div class="col-12 pb-2">' +
        '<div class="blockquote font-weight-bolder" >' +
        ' Blog' +
        '</div ><p class="font-weight-normal">' +
        data.blog +
        '</p></div > ';

    completeHTML += blog;

    var bio = '<div class="col-12 pb-2">' +
        '<div class="blockquote font-weight-bolder" >' +
        ' BIO' +
        '</div ><p class="font-weight-normal">' +
        data.bio +
        '</p></div > ';

    completeHTML += bio;

    var followers = '<div class="col-12 pb-2">' +
        '<div class="blockquote font-weight-bolder" >' +
        ' Followers ' +
        '</div ><p class="font-weight-normal">' +
        data.followers +
        '</p></div > ';

    completeHTML += followers;

    var following = '<div class="col-12 pb-2">' +
        '<div class="blockquote font-weight-bolder" >' +
        ' Following ' +
        '</div ><p class="font-weight-normal">' +
        data.following +
        '</p></div > ';

    completeHTML += following;

    $("#dynamic-data").html(completeHTML);
}

$(window).on("load", function () {

    $("#submit-search").on("click", function (event) {
        getuserbyusername();
    });

});