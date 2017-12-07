// ==UserScript==
// @name        GitHub Open All Outdated Comments
// @namespace   com.teddywing
// @description Opens all outdated pull request comments
// @match       https://*.github.com/*/*/pull/*
// @version     0.0.1
// @grant       none
// ==/UserScript==

var outdated_buttons = document.querySelectorAll(
	'.js-comment-container.outdated-comment:not(.open) .show-outdated-button'
);

for (var i = 0; i < outdated_buttons.length; i++) {
	outdated_buttons[i].click();
}
