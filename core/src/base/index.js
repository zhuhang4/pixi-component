import {Button} from './Button.js'
import {Image} from './Image.js'


export function Base(source) {
    const func = {
        Button,Image
    }[source.name];

    if (!func) {
        console.error(source);
        throw Error('This resource type not support.');
    }

    return func(source);
}