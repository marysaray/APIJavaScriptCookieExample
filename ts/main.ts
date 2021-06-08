class Item{
    title:string;
    isComplete:boolean;
}

// window onload to wire all three buttons: 
window.onload = function() {
    let readCookie = document.getElementById("read-cookie");
    let deleteCookie = document.getElementById("delete-cookie");
    let createCookie = document.getElementById("create-cookie");

    // set up function for each one for event onclick 
    readCookie.onclick = readCookieData;
    deleteCookie.onclick = deleteCookieData;
    createCookie.onclick = createCookieData;
}
/* create const to reduce redundancy: intellisens */
const thisCookie = "TestCookie";
/**
 * Read Cookies
 */
function readCookieData(){
    let data:Item = JSON.parse(Cookies.get(thisCookie));
    if(data != undefined){
        console.log(data);
    } else {
        console.log("No cookie was found");
    }
}
/**
 * Delete Cookies
 */
function deleteCookieData(){
    Cookies.remove(thisCookie);
    console.log("Cookie was removed.");
}
/**
 * Create Cookies
 */
function createCookieData(){
    let item = new Item();
    item.title = " This is an item";
    item.isComplete = false;

    const TwoWeeksAsDays = 14;

    Cookies.set(thisCookie,
                JSON.stringify(item),
                {expires: TwoWeeksAsDays});

    console.log("Cookie was created.");
}