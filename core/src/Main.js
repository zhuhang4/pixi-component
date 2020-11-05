// corejs3.0+使用下两句
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

//babel按需导入时，不需要import（但是可能用坑，所以不用）
import "@babel/polyfill";
import * as PIXI from 'pixi.js-legacy';
import { Base } from './base/index.js';
import Button from './base/Button.js';
import down from '@static/images/down.png';
import up from '@static/images/up.png';
import hover from '@static/images/hover.png';
export default class Main {
    constructor() {

        let canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
        this.app = new PIXI.Application({
            width: 500,
            height: 500,
            transparent: true,
            resolution: this.ratio,
            view: canvas,
            // forceCanvas:true,
        });
        this.stage = new PIXI.Container();
        let animate = () => {
            this.app.renderer.render(this.stage)
            requestAnimationFrame(animate);
        }
        animate();


        // let image=new Base({
        //     name:'Image',
        //     texture:img1
        // });
        // console.log(image);
        // this.stage.addChild(image)
        let bt = new Button({
            defaultTexture: up,
            hoverTexture: hover,
            downTexture: down,
            interactive:true
        });
        bt.x=250;
        bt.y=250;
        console.log(bt);
        this.stage.addChild(bt)
    }
}

new Main();

