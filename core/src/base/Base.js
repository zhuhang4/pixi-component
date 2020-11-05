import { DisplayObject } from "pixi.js-legacy";

import {Container} from 'pixi.js-legacy';
// import {Button} from './Button.js'
// import {Image} from './Image.js'

export class Base extends Container{
    constructor()
    {
        super();
        // const func = {
        //     Button,Image
        // }[source.name];
    
        // if (!func) {
        //     console.error(source);
        //     throw Error('This resource type not support.');
        // }
    
        // return func(source);
        this.type='Base';
    }
}