/* global document */
var i;
var flatShadow = '';

fsLength = fsLength * (document.body.clientHeight / 100);

for (i = 1; i <= fsLength; i++) {
    flatShadow +=  [i] + 'px ' + [i] + 'px ' + fsColor + ',';
}

flatShadow = flatShadow.substring(0, flatShadow.length - 1) ;

for (i=0; i < document.getElementsByClassName('flatShadow').length; i++) {
    document.getElementsByClassName('flatShadow')[i].style.textShadow = flatShadow;
}