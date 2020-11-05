import { TweenMax } from 'gsap'

export function tween(target, duration, params) {
    TweenMax.to(target, duration, params);
}
export function fadeIn(target, duration,_ease=Cubic.easeInOut) {
    TweenMax.killTweensOf(target);
    target.alpha = 0;
    TweenMax.to(target, duration, { alpha: 1,ease:_ease });
}
export function fadeOut(target, duration, params) {
    TweenMax.to(target, duration, params);
}