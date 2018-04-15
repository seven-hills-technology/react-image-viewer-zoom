"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Image allowed zoom level. Adding Stylesheet when(ZOOM_LEVEL.MAX > 4).
 * eg - :
 *  set ZOOM_LEVEL.MAX = 6
 *  .zoom-5 { transform: scale(3.5) }
 *  .zoom-6 { transform: scale(4) }
 */
exports.ZOOM_LEVEL = {
    MIN: 0,
    MAX: 4
};
/** The max count of visible bottom indicators when image length is big enough */
exports.VISIBLE_INDICATORS_COUNT = 8;
/**  */
exports.KEY_CODE = {
    LEFT: 37,
    RIGTH: 39
};
/** */
exports.OFFSET_DEFAULT = {
    x: 0,
    y: 0
};
