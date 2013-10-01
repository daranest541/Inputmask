/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2013 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 2.3.48
*/
(function(c){void 0===c.fn.inputmask&&(c.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},escapeChar:"\\",mask:null,oncomplete:c.noop,onincomplete:c.noop,oncleared:c.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:c.noop,onKeyDown:c.noop,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:c.noop,skipOptionalPartCharacter:" ",showTooltip:!1,
numericInput:!1,isNumeric:!1,radixPoint:"",skipRadixDance:!1,rightAlignNumerics:!0,definitions:{9:{validator:"[0-9]",cardinality:1},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,
NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],getMaskLength:function(c,F,I,B){var A=c.length;F||("*"==I?A=B.length+1:1<I&&(A+=c.length*(I-1)));return A}},escapeRegex:function(c){return c.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")}},c.fn.inputmask=function(z,
F){function I(a){var c=document.createElement("input"),a="on"+a,b=a in c;b||(c.setAttribute(a,"return;"),b="function"==typeof c[a]);return b}function B(d,f){var b=a.aliases[d];return b?(b.alias&&B(b.alias),c.extend(!0,a,b),c.extend(!0,a,f),!0):!1}function A(d){a.numericInput&&(d=d.split("").reverse().join(""));var f=!1,b=0,h=a.greedy,n=a.repeat;"*"==n&&(h=!1);!0==h&&""==a.placeholder&&(a.placeholder=" ");1==d.length&&!1==h&&(a.placeholder="");for(var d=c.map(d.split(""),function(c){var e=[];if(c==
a.escapeChar)f=true;else if(c!=a.optionalmarker.start&&c!=a.optionalmarker.end||f){var d=a.definitions[c];if(d&&!f)for(c=0;c<d.cardinality;c++)e.push(O(b+c));else{e.push(c);f=false}b=b+e.length;return e}}),e=d.slice(),W=1;W<n&&h;W++)e=e.concat(d.slice());return{mask:e,repeat:n,greedy:h}}function M(d){a.numericInput&&(d=d.split("").reverse().join(""));var f=!1,b=!1,h=!1;return c.map(d.split(""),function(c){var e=[];if(c==a.escapeChar)b=!0;else if(c==a.optionalmarker.start&&!b)h=f=!0;else if(c==a.optionalmarker.end&&
!b)f=!1,h=!0;else{var d=a.definitions[c];if(d&&!b){for(var p=d.prevalidator,q=p?p.length:0,g=1;g<d.cardinality;g++){var r=q>=g?p[g-1]:[],o=r.validator,r=r.cardinality;e.push({fn:o?"string"==typeof o?RegExp(o):new function(){this.test=o}:/./,cardinality:r?r:1,optionality:f,newBlockMarker:!0==f?h:!1,offset:0,casing:d.casing,def:d.definitionSymbol||c});!0==f&&(h=!1)}e.push({fn:d.validator?"string"==typeof d.validator?RegExp(d.validator):new function(){this.test=d.validator}:/./,cardinality:d.cardinality,
optionality:f,newBlockMarker:h,offset:0,casing:d.casing,def:d.definitionSymbol||c})}else e.push({fn:null,cardinality:0,optionality:f,newBlockMarker:h,offset:0,casing:null,def:c}),b=!1;h=!1;return e}})}function L(){function d(c){var b=c.length;for(i=0;i<b&&c.charAt(i)!=a.optionalmarker.start;i++);var d=[c.substring(0,i)];i<b&&d.push(c.substring(i+1,b));return d}function f(n,e,m){var p=0,q=0,g=e.length;for(i=0;i<g&&!(e.charAt(i)==a.optionalmarker.start&&p++,e.charAt(i)==a.optionalmarker.end&&q++,0<
p&&p==q);i++);p=[e.substring(0,i)];i<g&&p.push(e.substring(i+1,g));q=d(p[0]);if(1<q.length){if(e=n+q[0]+(a.optionalmarker.start+q[1]+a.optionalmarker.end)+(1<p.length?p[1]:""),-1==c.inArray(e,h)&&(h.push(e),g=A(e),b.push({mask:e,_buffer:g.mask,buffer:g.mask.slice(),tests:M(e),lastValidPosition:-1,greedy:g.greedy,repeat:g.repeat,metadata:m})),e=n+q[0]+(1<p.length?p[1]:""),-1==c.inArray(e,h)&&(h.push(e),g=A(e),b.push({mask:e,_buffer:g.mask,buffer:g.mask.slice(),tests:M(e),lastValidPosition:-1,greedy:g.greedy,
repeat:g.repeat,metadata:m})),1<d(q[1]).length&&f(n+q[0],q[1]+p[1],m),1<p.length&&1<d(p[1]).length)f(n+q[0]+(a.optionalmarker.start+q[1]+a.optionalmarker.end),p[1],m),f(n+q[0],p[1],m)}else e=n+p,-1==c.inArray(e,h)&&(h.push(e),g=A(e),b.push({mask:e,_buffer:g.mask,buffer:g.mask.slice(),tests:M(e),lastValidPosition:-1,greedy:g.greedy,repeat:g.repeat,metadata:m}))}var b=[],h=[];c.isFunction(a.mask)&&(a.mask=a.mask.call(this,a));c.isArray(a.mask)?c.each(a.mask,function(a,c){c.mask!=void 0?f("",c.mask.toString(),
c):f("",c.toString())}):f("",a.mask.toString());return a.greedy?b:b.sort(function(a,c){return a.mask.length-c.mask.length})}function O(c){return a.placeholder.charAt(c%a.placeholder.length)}function C(d,f){function b(){return d[f]}function h(){return b().tests}function n(){return b()._buffer}function e(){return b().buffer}function m(k,s,x){function y(c,b,k,s){for(var j=g(c),aa=k?1:0,R="",e=b.buffer,l=b.tests[j].cardinality;l>aa;l--)R+=J(e,j-(l-1));k&&(R+=k);return null!=b.tests[j].fn?b.tests[j].fn.test(R,
e,c,s,a):k==J(b._buffer,c,!0)||k==a.skipOptionalPartCharacter?{refresh:!0,c:J(b._buffer,c,!0),pos:c}:!1}if(x=!0===x){var G=y(k,b(),s,x);!0===G&&(G={pos:k});return G}var n=[],G=!1,h=f,p=e().slice(),u=b().lastValidPosition;w(k);var t=[];c.each(d,function(c,a){if("object"==typeof a){f=c;var d=k,g=b().lastValidPosition,j;if(g==u){if(1<d-u)for(g=-1==g?0:g;g<d&&!(j=y(g,b(),p[g],!0),!1===j);g++)N(e(),g,p[g],!0),!0===j&&(j={pos:g}),j=j.pos||g,b().lastValidPosition<j&&(b().lastValidPosition=j);if(!q(d)&&!y(d,
b(),s,x)){g=o(d)-d;for(j=0;j<g&&!1===y(++d,b(),s,x);j++);t.push(f)}}if((b().lastValidPosition>=u||f==h)&&0<=d&&d<r())G=y(d,b(),s,x),!1!==G&&(!0===G&&(G={pos:d}),j=G.pos||d,b().lastValidPosition<j&&(b().lastValidPosition=j)),n.push({activeMasksetIndex:c,result:G})}});f=h;return function(a,b){var e=!1;c.each(b,function(b,j){if(e=-1==c.inArray(j.activeMasksetIndex,a)&&!1!==j.result)return!1});if(e)b=c.map(b,function(b){if(-1==c.inArray(b.activeMasksetIndex,a))return b;d[b.activeMasksetIndex].lastValidPosition=
u});else{var x=-1,j=-1;c.each(b,function(b,k){if(-1!=c.inArray(k.activeMasksetIndex,a)&&!1!==k.result&(-1==x||x>k.result.pos))x=k.result.pos,j=k.activeMasksetIndex});b=c.map(b,function(b){if(-1!=c.inArray(b.activeMasksetIndex,a)){if(b.result.pos==x)return b;if(!1!==b.result){for(var e=k;e<x&&!(rsltValid=y(e,d[b.activeMasksetIndex],d[j].buffer[e],!0),!1===rsltValid);e++)N(d[b.activeMasksetIndex].buffer,e,d[j].buffer[e],!0),d[b.activeMasksetIndex].lastValidPosition=e;rsltValid=y(x,d[b.activeMasksetIndex],
s,!0);!1!==rsltValid&&(N(d[b.activeMasksetIndex].buffer,x,s,!0),d[b.activeMasksetIndex].lastValidPosition=x);return b}}})}return b}(t,n)}function p(){var a=f,s={activeMasksetIndex:0,lastValidPosition:-1,next:-1};c.each(d,function(a,c){if("object"==typeof c)if(f=a,b().lastValidPosition>s.lastValidPosition)s.activeMasksetIndex=a,s.lastValidPosition=b().lastValidPosition,s.next=o(b().lastValidPosition);else if(b().lastValidPosition==s.lastValidPosition&&(-1==s.next||s.next>o(b().lastValidPosition)))s.activeMasksetIndex=
a,s.lastValidPosition=b().lastValidPosition,s.next=o(b().lastValidPosition)});f=-1!=s.lastValidPosition&&d[a].lastValidPosition==s.lastValidPosition?a:s.activeMasksetIndex;a!=f&&(H(e(),o(s.lastValidPosition),r()),b().writeOutBuffer=!0);t.data("_inputmask").activeMasksetIndex=f}function q(a){a=g(a);a=h()[a];return void 0!=a?a.fn:!1}function g(a){return a%h().length}function r(){return a.getMaskLength(n(),b().greedy,b().repeat,e(),a)}function o(a){var c=r();if(a>=c)return c;for(;++a<c&&!q(a););return a}
function w(a){if(0>=a)return 0;for(;0<--a&&!q(a););return a}function N(a,c,b,e){e&&(c=z(a,c));var e=h()[g(c)],d=b;if(void 0!=d)switch(e.casing){case "upper":d=b.toUpperCase();break;case "lower":d=b.toLowerCase()}a[c]=d}function J(a,c,b){b&&(c=z(a,c));return a[c]}function z(a,c){for(var b;void 0==a[c]&&a.length<r();)for(b=0;void 0!==n()[b];)a.push(n()[b++]);return c}function A(a,c,b){a._valueSet(c.join(""));void 0!=b&&u(a,b)}function H(a,c,b){for(var e=r();c<b&&c<e;c++)N(a,c,J(n().slice(),c,!0))}function B(a,
c){var b=g(c);N(a,c,J(n(),b))}function F(a,e,g,y){y=void 0!=y?y.slice():C(a._valueGet()).split("");c.each(d,function(a,c){"object"==typeof c&&(c.buffer=c._buffer.slice(),c.lastValidPosition=-1)});!0!==g&&(f=0);e&&a._valueSet("");r();c.each(y,function(d,f){var y=b().lastValidPosition,h=-1==y?d:o(y);(g&&q(d)||(f!=J(n().slice(),d,!0)||q(d))&&-1==c.inArray(f,n().slice(y+1,h)))&&c(a).trigger("_keypress",[!0,f.charCodeAt(0),e,g,d])});!0===g&&(b().lastValidPosition=w(b().p))}function I(a){return c.inputmask.escapeRegex.call(this,
a)}function C(a){return a.replace(RegExp("("+I(n().join(""))+")*$"),"")}function M(a){var c=e(),b=c.slice(),d,f;for(f=b.length-1;0<=f;f--)if(d=g(f),h()[d].optionality)if(!q(f)||!m(f,c[f],!0))b.pop();else break;else break;A(a,b)}function L(a,b){if(h()&&(!0===b||!a.hasClass("hasDatepicker"))){var d=c.map(e(),function(a,c){return q(c)&&m(c,a,!0)?a:null});return(D?d.reverse():d).join("")}return a[0]._valueGet()}function S(a){D&&"number"==typeof a&&(a=e().length-a);return a}function u(b,d,e){var f=b.jquery&&
0<b.length?b[0]:b;if("number"==typeof d)d=S(d),e=S(e),c(b).is(":visible")&&(e="number"==typeof e?e:d,!1==a.insertMode&&d==e&&e++,f.setSelectionRange?(f.selectionStart=d,f.selectionEnd=T?d:e):f.createTextRange&&(b=f.createTextRange(),b.collapse(!0),b.moveEnd("character",e),b.moveStart("character",d),b.select()));else{if(!c(b).is(":visible"))return{begin:0,end:0};f.setSelectionRange?(d=f.selectionStart,e=f.selectionEnd):document.selection&&document.selection.createRange&&(b=document.selection.createRange(),
d=0-b.duplicate().moveStart("character",-1E5),e=d+b.text.length);d=S(d);e=S(e);return{begin:d,end:e}}}function U(a){var b=!1,e=0,h=f;c.each(d,function(c,d){if("object"==typeof d){f=c;var h=w(r());if(d.lastValidPosition>=e&&d.lastValidPosition==h){for(var m=!0,o=0;o<=h;o++){var p=q(o),u=g(o);if(p&&(void 0==a[o]||a[o]==O(o))||!p&&a[o]!=n()[u]){m=!1;break}}if(b=b||m)return!1}e=d.lastValidPosition}});f=h;return b}function Z(c,b){return D?1<c-b||1==c-b&&a.insertMode:1<b-c||1==b-c&&a.insertMode}var D=!1,
Q=e().join(""),t;this.unmaskedvalue=function(a,c){D=a.data("_inputmask").isRTL;return L(a,c)};this.isComplete=function(a){return U(a)};this.mask=function(k){function s(a){a=c._data(a).events;c.each(a,function(a,b){c.each(b,function(a,c){if("inputmask"==c.namespace&&"setvalue"!=c.type&&"_keypress"!=c.type){var b=c.handler;c.handler=function(a){if(this.readOnly||this.disabled)a.preventDefault;else return b.apply(this,arguments)}}})})}function x(a){var b;Object.getOwnPropertyDescriptor&&(b=Object.getOwnPropertyDescriptor(a,
"value"));if(b&&b.get){if(!a._valueGet){var d=b.get,e=b.set;a._valueGet=function(){return D?d.call(this).split("").reverse().join(""):d.call(this)};a._valueSet=function(a){e.call(this,D?a.split("").reverse().join(""):a)};Object.defineProperty(a,"value",{get:function(){var a=c(this),b=c(this).data("_inputmask"),e=b.masksets,j=b.activeMasksetIndex;return b&&b.opts.autoUnmask?a.inputmask("unmaskedvalue"):d.call(this)!=e[j]._buffer.join("")?d.call(this):""},set:function(a){e.call(this,a);c(this).triggerHandler("setvalue.inputmask")}})}}else if(document.__lookupGetter__&&
a.__lookupGetter__("value"))a._valueGet||(d=a.__lookupGetter__("value"),e=a.__lookupSetter__("value"),a._valueGet=function(){return D?d.call(this).split("").reverse().join(""):d.call(this)},a._valueSet=function(a){e.call(this,D?a.split("").reverse().join(""):a)},a.__defineGetter__("value",function(){var a=c(this),b=c(this).data("_inputmask"),e=b.masksets,j=b.activeMasksetIndex;return b&&b.opts.autoUnmask?a.inputmask("unmaskedvalue"):d.call(this)!=e[j]._buffer.join("")?d.call(this):""}),a.__defineSetter__("value",
function(a){e.call(this,a);c(this).triggerHandler("setvalue.inputmask")}));else if(a._valueGet||(a._valueGet=function(){return D?this.value.split("").reverse().join(""):this.value},a._valueSet=function(a){this.value=D?a.split("").reverse().join(""):a}),void 0==c.valHooks.text||!0!=c.valHooks.text.inputmaskpatch)d=c.valHooks.text&&c.valHooks.text.get?c.valHooks.text.get:function(){return this.value},e=c.valHooks.text&&c.valHooks.text.set?c.valHooks.text.set:function(a){return this.value=a},jQuery.extend(c.valHooks,
{text:{get:function(a){var b=c(a);if(b.data("_inputmask")){if(b.data("_inputmask").opts.autoUnmask)return b.inputmask("unmaskedvalue");a=d.call(a);b=b.data("_inputmask");return a!=b.masksets[b.activeMasksetIndex]._buffer.join("")?a:""}return d.call(a)},set:function(a,b){var d=c(a),j=e.call(a,b);d.data("_inputmask")&&d.triggerHandler("setvalue.inputmask");return j},inputmaskpatch:!0}})}function y(a,c,d){for(var f=e();!q(a)&&0<=a-1;)a--;for(var l=a;l<c&&l<r();l++)if(q(l)){B(f,l);var k=o(l),p=J(f,k);
if(p!=O(k))if(k<r()&&!1!==m(l,p,!0)&&h()[g(l)].def==h()[g(k)].def)N(f,l,J(f,k),!0),k<c&&B(f,k);else if(q(l))break}else B(f,l);void 0!=d&&N(f,w(c),d);if(!1==b().greedy){c=C(f.join("")).split("");f.length=c.length;l=0;for(d=f.length;l<d;l++)f[l]=c[l];0==f.length&&(b().buffer=n().slice())}return a}function G(a,c,d,f){for(var l=e();a<=c&&a<r();a++)if(q(a)){var k=J(l,a,!0);N(l,a,d,!0);if(k!=O(a))if(d=o(a),d<r())if(!1!==m(d,k,!0)&&h()[g(a)].def==h()[g(d)].def)d=k;else if(q(d))break;else d=k;else break;
else if(d=k,!0!==f)break}else B(l,a);f=l.length;if(!1==b().greedy){d=C(l.join("")).split("");l.length=d.length;a=0;for(k=l.length;a<k;a++)l[a]=d[a];0==l.length&&(b().buffer=n().slice())}return c-(f-l.length)}function z(j){V=!1;var g=this,k=c(g),h=j.keyCode,l=u(g);if(h==a.keyCode.BACKSPACE||h==a.keyCode.DELETE||ba&&127==h||j.ctrlKey&&88==h){j.preventDefault();if(a.numericInput||D)switch(h){case a.keyCode.BACKSPACE:h=a.keyCode.DELETE;break;case a.keyCode.DELETE:h=a.keyCode.BACKSPACE}if(Z(l.begin,l.end)){if(D){var m=
l.end;l.end=l.begin;l.begin=m}H(e(),l.begin,l.end);if(0==l.begin&&l.end==r())c.each(d,function(a,b){"object"==typeof b&&(b.buffer=b._buffer.slice(),b.lastValidPosition=-1)});else{m=r();if(!1==a.greedy)y(l.begin,m);else for(var s=l.begin;s<l.end;s++)q(s)&&y(l.begin,m);m=o(-1);F(g,!1,!0,e());b().lastValidPosition<m?(b().lastValidPosition=-1,b().p=m):(b().writeOutBuffer=!0,b().p=l.begin)}}else c.each(d,function(c,d){if("object"==typeof d){f=c;var j=$?l.end:l.begin,g=e(),k=o(-1),m=r();h==a.keyCode.BACKSPACE&&
j--;j<k&&(j=k);j<m&&(a.isNumeric&&(""!=a.radixPoint&&g[j]==a.radixPoint)&&(j=g.length-1==j?j:o(j)),j=y(j,m),-1!=b().lastValidPosition&&e()[b().lastValidPosition]==n()[b().lastValidPosition]&&(b().lastValidPosition=0==b().lastValidPosition?-1:w(b().lastValidPosition)),b().lastValidPosition<k?(b().lastValidPosition=-1,b().p=k):(b().writeOutBuffer=!0,b().p=j))}});p();A(g,e(),b().p);g._valueGet()==n().join("")&&k.trigger("cleared");a.showTooltip&&k.prop("title",b().mask)}else h==a.keyCode.END||h==a.keyCode.PAGE_DOWN?
setTimeout(function(){var c=o(b().lastValidPosition);!a.insertMode&&(c==r()&&!j.shiftKey)&&c--;u(g,j.shiftKey?l.begin:c,c)},0):h==a.keyCode.HOME&&!j.shiftKey||h==a.keyCode.PAGE_UP?u(g,0,j.shiftKey?l.begin:0):h==a.keyCode.ESCAPE?F(g,!0,!0,Q):h==a.keyCode.INSERT&&!j.shiftKey&&!j.ctrlKey?(a.insertMode=!a.insertMode,u(g,!a.insertMode&&l.begin==r()?l.begin-1:l.begin)):!1==a.insertMode&&!j.shiftKey&&(h==a.keyCode.RIGHT?setTimeout(function(){var a=u(g);u(g,a.begin)},0):h==a.keyCode.LEFT&&setTimeout(function(){var a=
u(g);u(g,a.begin-1)},0));k=u(g);a.onKeyDown.call(this,j,e(),a);u(g,k.begin,k.end);T=-1!=c.inArray(h,a.ignorables)}function I(j,g,h,k,l,n){if(void 0==h&&V)return!1;V=!0;var s=c(this),j=j||window.event,h=h||j.which||j.charCode||j.keyCode;if((!j.ctrlKey||!j.altKey)&&(j.ctrlKey||j.metaKey||T)&&!0!==g)return!0;if(h){!0!==g&&(46==h&&!1==j.shiftKey&&","==a.radixPoint)&&(h=44);var v,t,x,z=String.fromCharCode(h);g?(h=l?n:b().lastValidPosition+1,v={begin:h,end:h}):v=u(this);var h=Z(v.begin,v.end),B=!1,n=f;
h&&(D&&(t=v.end,v.end=v.begin,v.begin=t),c.each(d,function(c,d){if(typeof d=="object"){f=c;b().undoBuffer=e().join("");var j=v.end<r()?v.end:r();b().lastValidPosition>v.begin&&b().lastValidPosition<j?b().lastValidPosition=w(v.begin):B=true;H(e(),v.begin,j);var g=r();if(a.greedy==false)y(v.begin,g);else for(var h=v.begin;h<j;h++)q(h)&&y(v.begin,g)}}),!0===B&&(f=n,F(this,!1,!0,e()),a.insertMode||c.each(d,function(a,c){if(typeof c=="object"){f=a;G(v.begin,r(),O(v.begin),true);b().lastValidPosition=o(b().lastValidPosition)}})),
f=n);var C=e().join("").indexOf(a.radixPoint);a.isNumeric&&(!0!==g&&-1!=C)&&(v.begin<=C?(v.begin=w(v.begin),v.end=v.begin):z==a.radixPoint&&(v.begin=C,v.end=v.begin));var E=v.begin;t=m(E,z,l);!0===l&&(t=[{activeMasksetIndex:f,result:t}]);var K=-1;c.each(t,function(c,d){f=d.activeMasksetIndex;b().writeOutBuffer=true;var j=d.result;if(j!==false){var g=false,h=e();if(j!==true){g=j.refresh;E=j.pos!=void 0?j.pos:E;z=j.c!=void 0?j.c:z}if(g!==true){if(a.insertMode==true){j=r();for(g=h.slice();J(g,j,true)!=
O(j)&&j>=E;)j=j==0?-1:w(j);if(j>=E){G(E,h.length,z);h=b().lastValidPosition;j=o(h);j!=r()&&(h>=E&&J(e(),j,true)!=O(j))&&(b().lastValidPosition=j)}else b().writeOutBuffer=false}else N(h,E,z,true);if(K==-1||K>o(E))K=o(E)}else{h=E<r()?E+1:E;if(K==-1||K>h)K=h}b().p=K}});!0!==l&&(f=n,p());if(!1!==k&&(c.each(t,function(a,b){if(b.activeMasksetIndex==f){x=b;return false}}),void 0!=x)){var M=this;setTimeout(function(){a.onKeyValidation.call(M,x.result,a)},0);if(b().writeOutBuffer&&!1!==x.result){var L=e(),
k=g?void 0:a.numericInput?E>C?w(K):z==a.radixPoint?K-1:w(K-1):K;A(this,L,k);!0!==g&&setTimeout(function(){U(L)&&s.trigger("complete")},0)}else h&&(b().buffer=b().undoBuffer.split(""))}a.showTooltip&&s.prop("title",b().mask);j.preventDefault()}}function L(b){var d=c(this),f=b.keyCode,g=e(),h=u(this);a.onKeyUp.call(this,b,g,a);u(this,h.begin,h.end);f==a.keyCode.TAB&&(d.hasClass("focus.inputmask")&&0==this._valueGet().length&&a.showMaskOnFocus)&&(g=n().slice(),A(this,g),u(this,0),Q=e().join(""))}t=c(k);
if(t.is(":input")){t.data("_inputmask",{masksets:d,activeMasksetIndex:f,opts:a,isRTL:!1});a.showTooltip&&t.prop("title",b().mask);b().greedy=b().greedy?b().greedy:0==b().repeat;if(null!=t.attr("maxLength")){var P=t.prop("maxLength");-1<P&&c.each(d,function(a,b){"object"==typeof b&&"*"==b.repeat&&(b.repeat=P)});r()>P&&-1<P&&(P<n().length&&(n().length=P),!1==b().greedy&&(b().repeat=Math.round(P/n().length)),t.prop("maxLength",2*r()))}x(k);var V=!1,T=!1;a.numericInput&&(a.isNumeric=a.numericInput);("rtl"==
k.dir||a.numericInput&&a.rightAlignNumerics||a.isNumeric&&a.rightAlignNumerics)&&t.css("text-align","right");if("rtl"==k.dir||a.numericInput){k.dir="ltr";t.removeAttr("dir");var X=t.data("_inputmask");X.isRTL=!0;t.data("_inputmask",X);D=!0}t.unbind(".inputmask");t.removeClass("focus.inputmask");t.closest("form").bind("submit",function(){Q!=e().join("")&&t.change()}).bind("reset",function(){c.each(d,function(a,b){if(typeof b=="object"){b.buffer=b._buffer.slice();b.lastValidPosition=-1}})});t.bind("mouseenter.inputmask",
function(){!c(this).hasClass("focus.inputmask")&&a.showMaskOnHover&&this._valueGet()!=e().join("")&&A(this,e())}).bind("blur.inputmask",function(){var b=c(this),g=this._valueGet(),h=e();b.removeClass("focus.inputmask");Q!=e().join("")&&b.change();a.clearMaskOnLostFocus&&g!=""&&(g==n().join("")?this._valueSet(""):M(this));if(!U(h)){b.trigger("incomplete");if(a.clearIncomplete){c.each(d,function(a,b){if(typeof b=="object"){b.buffer=b._buffer.slice();b.lastValidPosition=-1}});f=0;if(a.clearMaskOnLostFocus)this._valueSet("");
else{h=n().slice();A(this,h)}}}}).bind("focus.inputmask",function(){var d=c(this),f=this._valueGet();a.showMaskOnFocus&&!d.hasClass("focus.inputmask")&&(!a.showMaskOnHover||a.showMaskOnHover&&f=="")&&this._valueGet()!=e().join("")&&A(this,e(),o(b().lastValidPosition));d.addClass("focus.inputmask");Q=e().join("")}).bind("mouseleave.inputmask",function(){var b=c(this);a.clearMaskOnLostFocus&&(b.hasClass("focus.inputmask")||(this._valueGet()==n().join("")||this._valueGet()==""?this._valueSet(""):M(this)))}).bind("click.inputmask",
function(){var d=this;setTimeout(function(){var f=u(d),g=e();if(f.begin==f.end){var f=a.isRTL?S(f.begin):f.begin,h=b().lastValidPosition,g=a.isNumeric?a.skipRadixDance===false&&a.radixPoint!=""&&c.inArray(a.radixPoint,g)!=-1?a.numericInput?o(c.inArray(a.radixPoint,g)):c.inArray(a.radixPoint,g):o(h):o(h);f<g?q(f)?u(d,f):u(d,o(f)):u(d,g)}},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){u(a,0,o(b().lastValidPosition))},0)}).bind("keydown.inputmask",z).bind("keypress.inputmask",
I).bind("keyup.inputmask",L).bind(ca+".inputmask dragdrop.inputmask drop.inputmask",function(a){var b=this,d=c(b);if(a.type=="propertychange"&&b._valueGet().length<=r())return true;setTimeout(function(){F(b,true,false);U(e())&&d.trigger("complete");d.click()},0)}).bind("setvalue.inputmask",function(){F(this,true);Q=e().join("");this._valueGet()==n().join("")&&this._valueSet("")}).bind("_keypress.inputmask",I).bind("complete.inputmask",a.oncomplete).bind("incomplete.inputmask",a.onincomplete).bind("cleared.inputmask",
a.oncleared);F(k,!0,!1);Q=e().join("");var Y;try{Y=document.activeElement}catch(da){}Y===k?(t.addClass("focus.inputmask"),u(k,o(b().lastValidPosition))):a.clearMaskOnLostFocus?e().join("")==n().join("")?k._valueSet(""):M(k):A(k,e());s(k)}};return this}var a=c.extend(!0,{},c.inputmask.defaults,F),ba=null!==navigator.userAgent.match(/iphone/i),T=null!==navigator.userAgent.match(/android.*safari.*/i),ca=I("paste")?"paste":I("input")?"input":"propertychange",$,m,w=0;if(T){var H=navigator.userAgent.match(/safari.*/i);
$=537>=parseInt(RegExp(/[0-9]+/).exec(H))}if("string"===typeof z)switch(z){case "mask":return B(a.alias,F),m=L(),this.each(function(){C(c.extend(!0,{},m),0).mask(this)});case "unmaskedvalue":return H=c(this),H.data("_inputmask")?(m=H.data("_inputmask").masksets,w=H.data("_inputmask").activeMasksetIndex,a=H.data("_inputmask").opts,C(m,w).unmaskedvalue(H)):H.val();case "remove":return this.each(function(){var d=c(this);if(d.data("_inputmask")){m=d.data("_inputmask").masksets;w=d.data("_inputmask").activeMasksetIndex;
a=d.data("_inputmask").opts;this._valueSet(C(m,w).unmaskedvalue(d,!0));d.removeData("_inputmask");d.unbind(".inputmask");d.removeClass("focus.inputmask");var f;Object.getOwnPropertyDescriptor&&(f=Object.getOwnPropertyDescriptor(this,"value"));f&&f.get?this._valueGet&&Object.defineProperty(this,"value",{get:this._valueGet,set:this._valueSet}):document.__lookupGetter__&&this.__lookupGetter__("value")&&this._valueGet&&(this.__defineGetter__("value",this._valueGet),this.__defineSetter__("value",this._valueSet));
try{delete this._valueGet,delete this._valueSet}catch(b){this._valueSet=this._valueGet=void 0}}});case "getemptymask":return this.data("_inputmask")?(m=this.data("_inputmask").masksets,w=this.data("_inputmask").activeMasksetIndex,m[w]._buffer.join("")):"";case "hasMaskedValue":return this.data("_inputmask")?!this.data("_inputmask").opts.autoUnmask:!1;case "isComplete":return m=this.data("_inputmask").masksets,w=this.data("_inputmask").activeMasksetIndex,a=this.data("_inputmask").opts,C(m,w).isComplete(this[0]._valueGet().split(""));
case "getmetadata":if(this.data("_inputmask"))return m=this.data("_inputmask").masksets,w=this.data("_inputmask").activeMasksetIndex,m[w].metadata;return;default:return B(z,F)||(a.mask=z),m=L(),this.each(function(){C(c.extend(true,{},m),w).mask(this)})}else{if("object"==typeof z)return a=c.extend(!0,{},c.inputmask.defaults,z),B(a.alias,z),m=L(),this.each(function(){C(c.extend(!0,{},m),w).mask(this)});if(void 0==z)return this.each(function(){var d=c(this).attr("data-inputmask");if(d&&""!=d)try{var d=
d.replace(RegExp("'","g"),'"'),f=c.parseJSON("{"+d+"}");c.extend(!0,f,F);a=c.extend(!0,{},c.inputmask.defaults,f);B(a.alias,f);a.alias=void 0;c(this).inputmask(a)}catch(b){}})}return this})})(jQuery);
