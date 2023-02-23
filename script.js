window.addEventListener("load", init);

function init() {
    document.getElementById("tartalom").innerHTML = "<p>A javascriptből írok ide<\p>";

    kedvencSzavak();
}
function kedvencSzavak() {
    const kedvSzavak = ["könyv", "kutya", "zöld", "olvas"];

    document.getElementById("tartalom").innerHTML += (`<ul>`);

    for (let index = 0; index < kedvSzavak.length; index++) {
        //document.getElementById("tartalom").innerHTML += ("<p>" + kedvSzavak[index] + "</p>")
                
        document.getElementById("tartalom").innerHTML += (`<li>  ${kedvSzavak[index]} </li>`);
        /**szövegen belül így lehet egy változóra hivatkozni^ */
    }
    document.getElementById("tartalom").innerHTML += (`</ul>`);
    //még az ul nem teljesen jó, jövő órán folytatjuk
}