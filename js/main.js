var Item = (function () {
    function Item() {
    }
    return Item;
}());
window.onload = function () {
    var readCookie = document.getElementById("read-cookie");
    var deleteCookie = document.getElementById("delete-cookie");
    var createCookie = document.getElementById("create-cookie");
    readCookie.onclick = readCookieData;
    deleteCookie.onclick = deleteCookieData;
    createCookie.onclick = createCookieData;
};
var thisCookie = "TestCookie";
function readCookieData() {
    var data = JSON.parse(Cookies.get(thisCookie));
    if (data != undefined) {
        console.log(data);
    }
    else {
        console.log("No cookie was found");
    }
}
function deleteCookieData() {
    Cookies.remove(thisCookie);
    console.log("Cookie was removed.");
}
function createCookieData() {
    var item = new Item();
    item.title = " This is an item";
    item.isComplete = false;
    var TwoWeeksAsDays = 14;
    Cookies.set(thisCookie, JSON.stringify(item), { expires: TwoWeeksAsDays });
    console.log("Cookie was created.");
}
