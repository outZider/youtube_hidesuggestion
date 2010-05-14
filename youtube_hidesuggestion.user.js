// ==UserScript==
// @name          youtube_hidesuggestion
// @namespace     
// @description   ウィンドウを開いた時に検索窓のサジェストが再生画面にかぶってしまうので、いったん消しておくスクリプト
// @include       http://*youtube.com/watch*
// @version       0.1.0
// @author        outZider
// ==/UserScript==
document.addEventListener("DOMNodeInserted", function(e) {
  if (e.target.tagName == "TBODY") {
    document.getElementById("completeTable").style.display = "none";
    setTimeout(function() {
      document.getElementById("completeTable").innerHTML = "";
      document.getElementById("completeTable").style.display = "";
    }, 1000);
    document.removeEventListener("DOMNodeInserted", arguments.callee, false);
  }
}, false);
