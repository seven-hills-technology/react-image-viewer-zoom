/**
 * Image allowed zoom level. Adding Stylesheet when(ZOOM_LEVEL.MAX > 4).
 * eg - :
 *  set ZOOM_LEVEL.MAX = 6
 *  .zoom-5 { transform: scale(3.5) }
 *  .zoom-6 { transform: scale(4) }
 */
export declare const ZOOM_LEVEL: {
    MIN: number;
    MAX: number;
};
/** The max count of visible bottom indicators when image length is big enough */
export declare const VISIBLE_INDICATORS_COUNT = 8;
/**  */
export declare const KEY_CODE: {
    LEFT: number;
    RIGTH: number;
};
/** */
export declare const OFFSET_DEFAULT: {
    x: number;
    y: number;
};
