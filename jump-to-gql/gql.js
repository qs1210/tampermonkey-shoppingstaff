// ==UserScript==
// @name         jump to local graphiql
// @namespace    http://tampermonkey.net/
// @version      0.2.0
// @description  jump to my graphiql
// @author       qs1210
// @match        http://localhost:8080/*
// @grant        none
// @namespace https://greasyfork.org/users/186407
// ==/UserScript==

(function() {
    'use strict';
   
    
    /* 
 * shortkeys.js
 * Version 2.0
 * Author: Michael Springer
 * License: MIT
 * URL: https://github.com/mspringer/shortkeys.js
 * ===========================
 * A javascript function for simple keyboard shortcuts.
 */


function shortkeys(keys, callback, args) {
    if (keys.indexOf("+") === -1) {
        return false;
    }

    var mod, key = keys.split("+");
    document.onkeydown = function (e) {
        switch (key[0].toLowerCase()) {
            case "ctrl":
                mod = e.ctrlKey;
                break;
            case "alt":
                mod = e.altKey;
                break;
            case "shift":
                mod = e.shiftKey;
                break;
            case "meta":
                mod = e.metaKey;
                break;
        }

        if (e.keyCode == key[1].toUpperCase().charCodeAt(0) && mod) {
            callback.apply(this, args);
            return false;
        }
    }
}

    shortkeys("shift+meta+g",function(){
        // alert("Ermagherd Ctrl+Q was pressed!");
        const matchArr = window.location.href.match(/(.*)\/index.html/);
        matchArr && matchArr.length > 1 && window.open(window.location.href.match(/(.*)\/index.html/)[1] + '/graphiql') || window.open("http://www.kylincat.com");
    });
    shortkeys("shift+meta+space",function(){
        // alert("Ermagherd Ctrl+Q was pressed!");
        const matchArr = window.location.href.match(/(.*)\/index.html/);
        matchArr && matchArr.length > 1 && window.location.href=(window.location.href.match(/(.*)\/index.html/)[1]) || window.open("http://www.kylincat.com");
    });
    //window.gz = window.location.href.match(/(.*)\/index.html/)[1] + '/graphiql';
})();