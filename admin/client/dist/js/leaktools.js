!function(e){function o(n){if(t[n])return t[n].exports;var l=t[n]={exports:{},id:n,loaded:!1};return e[n].call(l.exports,l,l.exports,o),l.loaded=!0,l.exports}var t={};return o.m=e,o.c=t,o.p="",o(0)}([function(e,o,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var l=t(1),u=n(l),a=function c(e){var o=e.cloneNode(!0),t=(0,u["default"])("<div></div>");return t.append(o),t.html()};u["default"].leaktools={logDuplicateElements:function d(){var e=(0,u["default"])("*"),o=!1;e.each(function(t,n){e.not(n).each(function(e,t){a(n)==a(t)&&(o=!0,console.log(n,t))})}),o||console.log("No duplicates found")},logUncleanedElements:function r(e){u["default"].each(u["default"].cache,function(){var o=this.handle&&this.handle.elem;if(o){for(var t=o;t&&1==t.nodeType;)t=t.parentNode;t?t!==document&&console.log("Attached, but to",t,"not our document",o):(console.log("Unattached",o),console.log(this.events),e&&(0,u["default"])(o).unbind().remove())}})}}},function(e,o){e.exports=jQuery}]);
//# sourceMappingURL=leaktools.js.map