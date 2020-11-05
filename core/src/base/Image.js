import { Sprite, NineSlicePlane } from 'pixi.js-legacy'
import {Base} from './Base';
// function Image(source) {
//     let { texture, scale9grid } = source
//     let my;

//     A                          B
//     +---+----------------------+---+
//   C | 1 |          2           | 3 |
//     +---+----------------------+---+
//     |   |                      |   |
//     | 4 |          5           | 6 |
//     |   |                      |   |
//     +---+----------------------+---+
//   D | 7 |          8           | 9 |
//     +---+----------------------+---+

//     if (scale9grid) {
//         const [a, b, c, d] = scale9grid;
//         const { width, height } = texture;

//         const leftWidth = a;
//         const topHeight = b;
//         const bottomHeight = height - (b + d);
//         const rightWidth = width - (a + c);

//         return new NineSlicePlane(
//             texture,
//             leftWidth, topHeight,
//             bottomHeight, rightWidth,
//         );
//     }
//     else {
//         return Sprite.from(texture)
//     }
// }

// export { Image };

export default class Image extends Base {
    constructor() {
        super();
        let { texture, scale9grid } = source
        let my;
        // if (scale9grid) {
//         const [a, b, c, d] = scale9grid;
//         const { width, height } = texture;

//         const leftWidth = a;
//         const topHeight = b;
//         const bottomHeight = height - (b + d);
//         const rightWidth = width - (a + c);

//         return new NineSlicePlane(
//             texture,
//             leftWidth, topHeight,
//             bottomHeight, rightWidth,
//         );
//     }
//     else {
//         return Sprite.from(texture)
//     }
    }
}