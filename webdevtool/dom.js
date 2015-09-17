/*global chrome*/

console.log("WebDevTool extension loaded");

var colors = [
    "#f00",
    "#0f0",
    "#00f"
];

var call = 0;

function selectAll(selector) {
    var td = document.querySelectorAll(selector),
        color = colors[call++];
    [].forEach.call(td, function (t) {
        var d = document.createElement("div"),
            c,
            w,
            s = window.getComputedStyle(t);

        w = ( parseInt(s["width"], 10) + parseInt(s["paddingLeft"], 10) + parseInt(s["paddingRight"], 10) ) + "px";

        c = document.createTextNode(w);
        d.setAttribute("style",
            "float: left; font-size: 9px; height:13px;  background-color: #fff; color:#111; border:1px solid #111; border-radius: 1px; z-index:100; padding:1px;");
        t.setAttribute("style", t.getAttribute("style") + "; border:1px solid " + color + " !important;");
        d.appendChild(c);
        t.appendChild(d);

    });
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        //console.log(request, sender, sendResponse);
        switch (request.cmd) {
            case "selectAllTd" :
            {
                selectAll("td");
            }
                break;

            case "selectAllTh" :
            {
                selectAll("th");
            }
                break;


            default:
                break;
        }
    }
);
