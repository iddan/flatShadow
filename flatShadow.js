/* jshint browser: true */

function flatShadow(el, fsColor, fsLength, fsAngle) {
    /*---- VAR ----*/
    var i;
    var fsAngleX;
    var fsAngleY;
    var fsStyle = '';

    /*-- RAD --*/
    function getRAD(deg) {
        return deg * Math.PI/180;
    }

    /*---- PHYSICAL LENGTH ----*/
    fsLength = fsLength * (document.body.clientHeight / 100);

    fsAngleY = Math.cos(getRAD(fsAngle));
    fsAngleX = Math.sin(getRAD(fsAngle));

    /*---- EXCEPTIONS ----*/
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

    /*---- LOOP ----*/
    for (i = 0; i < fsLength; i++) {
        fsStyle += i * fsAngleY + 'px ' + i * fsAngleX + 'px ' + fsColor + ',';
    }

    /*---- REMOVE LAST COMMA ----*/
    fsStyle = fsStyle.substring(0, fsStyle.length - 1) ;

    /*----  APPLY ----*/
    el.style.textShadow = fsStyle;
}
