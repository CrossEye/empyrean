import {Semigroup, Monoid, register, concat, empty} from './src/empyrean';

register(Monoid, String, {
    empty: () => '',
    concat: (a, b) => a + b
});
