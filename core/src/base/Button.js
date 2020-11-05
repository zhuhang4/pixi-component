import { Sprite, Texture } from 'pixi.js-legacy';
import { Base } from './Base';
import { Container } from 'pixi.js-legacy';
import { fadeIn, fadeOut } from '../motion/Motion.js';
// function Button()
// {
//     console.log('Button');
// }

// export {Button}


export default class Button extends Container {
    constructor(source) {
        super();
        let { defaultTexture, scale9grid, interactive, x, y, width, height, hoverTexture, downTexture } = source;
        this.type = 'button';
        this.scaleWhenDown = 1

        this.interactive = interactive;
        this.cursor = 'pointer';
        this.defaultSkin = new Sprite.from(defaultTexture);
        this.defaultSkin.anchor.set(0.5);
        this.addChild(this.defaultSkin);

        if (hoverTexture) {
            this.hoverSkin = new Sprite.from(hoverTexture);
            this.hoverSkin.anchor.set(0.5);
        }
        if (downTexture) {
            this.downSkin = new Sprite.from(downTexture);
            this.downSkin.anchor.set(0.5);
        }

        this.currentSkin = this.defaultSkin;
        this.lastStat = 'none';

        let downPT = { x: 0, y: 0 };
        this.on('pointerdown', (e) => {
            let { x, y } = e.data.global;
            downPT = { x, y };
            this.scale.set(this.scaleWhenDown);
            updateSkin.call(this, 'down');
            setCursor.bind(this);
        })
        this.on('pointerup', (e) => {
            this.scale.set(1);
            let { x, y } = e.data.global;
            let [_x, _y] = [downPT.x, downPT.y];
            let dis = (x - _x) * (x - _x) + (y - _y) * (y - _y);
            if (dis < 100) {
                this.emit('trigger', { 'e': e })
            }
            updateSkin.call(this, 'up');
            setCursor.bind(this);
        })
        this.on('pointerover', (e) => {
            if (this.hoverSkin) {
                if (this.currentSkin.parent && this.lastStat != 'hover') {
                    updateSkin.call(this, 'hover');
                    setCursor.bind(this);
                }
            }
        })
        this.on('pointerout', (e) => {
            this.scale.set(1);
            if (this.currentSkin.parent && this.lastStat != 'out') {
                updateSkin.call(this, 'out');
                setCursor.bind(this);

            }
        });

        function updateSkin(stat) {
            if (this.lastStat == stat) {
                return
            }

            // this.removeChild(this.currentSkin);
            this.lastStat = stat;
            if (stat == 'hover') {
                this.currentSkin = this.hoverSkin;
                fadeIn(this.currentSkin, 0.5, { alpha: 1 });
            }
            else if (stat == 'out' || stat == 'up') {
                this.currentSkin = this.defaultSkin;
                if (stat == 'out') {
                    fadeIn(this.currentSkin, 0.5, { alpha: 1 });
                }
            }
            else if (stat == 'down') {
                this.currentSkin = this.downSkin;
            }
            this.addChild(this.currentSkin);
        }
        function setCursor(stat) {
            // if (stat == 'hover') {
            //     this.currentSkin.cursor = 'pointer';
            // }
            // else if (stat == 'out' || stat == 'up') {
            //     this.currentSkin.cursor = 'none';
            // }
        }

    }
}