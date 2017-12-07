// ==UserScript==
// @name        GitHub Open All Outdated Comments
// @namespace   com.teddywing
// @description Opens all outdated pull request comments
// @match       https://*.github.com/*/*/pull/*
// @version     0.0.1
// @grant       none
// ==/UserScript==

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.

var outdated_buttons = document.querySelectorAll(
	'.js-comment-container.outdated-comment:not(.open) .show-outdated-button'
);

for (var i = 0; i < outdated_buttons.length; i++) {
	outdated_buttons[i].click();
}
