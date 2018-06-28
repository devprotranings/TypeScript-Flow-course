"use strict";
(function () {
    var sliderElem = document.getElementById('slider');
    if (sliderElem === null) {
        return;
    }
    if (sliderElem.children.length === 0) {
        return;
    }
    var thumbElem = sliderElem.children[0];
    var onMouseDown = function (e) {
        var thumbCoords = getCoords(thumbElem);
        var shiftX = e.pageX - thumbCoords.left;
        var sliderCoords = getCoords(sliderElem);
        var onMouseMove = function (evt) {
            var newLeft = evt.pageX - shiftX - sliderCoords.left;
            if (newLeft < 0) {
                newLeft = 0;
            }
            var rightEdge = sliderElem.offsetWidth - thumbElem.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }
            thumbElem.style.left = newLeft + 'px';
        };
        var onMouseUp = function () {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        return;
    };
    var onDragStart = function (e) {
        e.preventDefault();
    };
    thumbElem.addEventListener('mousedown', onMouseDown);
    thumbElem.addEventListener('dragstart', onDragStart);
    var getCoords = function (elem) {
        var box = elem.getBoundingClientRect();
        return {
            left: box.left + pageXOffset,
            top: box.top + pageYOffset,
        };
    };
})();
