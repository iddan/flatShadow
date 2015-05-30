/* global document */

/* VAR */
var i;
var flatShadow = '';

/* VH */
fsLength = fsLength * (document.body.clientHeight / 100);

/* RAD */
function getRAD(deg) {
    return deg * Math.PI/180;
}

/* ANGLE */
fsAngleY = Math.cos(getRAD(fsAngle));
fsAngleX = Math.sin(getRAD(fsAngle));

if (fsAngle == 90) {
    fsAngleY = 0;
    fsAngleX = 1;
}
if (fsAngle == 180) {
    fsAngleY = -1;
    fsAngleX = 0;
}
if (fsAngle == 270) {
    fsAngleY = 0;
    fsAngleX = -1;
}
if (fsAngle == 360) {
    fsAngleY = 1;
    fsAngleX = 0;
}

/* LOOP SHADDOW */
for (i = 1; i <= fsLength; i++) {
    flatShadow += [i] * fsAngleY + 'px ' + [i] * fsAngleX + 'px ' + fsColor + ',';
}

/* REMOVE LAST */
flatShadow = flatShadow.substring(0, flatShadow.length - 1) ;

/* APPLY */
for (i=0; i < document.getElementsByClassName('flatShadow').length; i++) {
    document.getElementsByClassName('flatShadow')[i].style.textShadow = flatShadow;
}