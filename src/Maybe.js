import {Monoid, register} from 'empyrean';

function Maybe(type) {

}
function Just(val) {
    this.val = val;
}
Just.prototype = Object.create(Maybe.prototype);

function Nothing() {
}
Nothing.prototype = Object.create(Maybe.prototype);

register(Maybe, [Monoid],{
    empty: () => new Nothing(),
    concat:
}); 
