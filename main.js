import {Semigroup, Monoid, register, concat, empty} from './src/empyrean';

register(Monoid, String, {
    empty: () => '',
    concat: (a, b) => a + b
});

console.log(concat('a', 'b'));

// fold :: Monoid m => m -> [m] -> m
const combine = (m, elts) => elts.reduce(concat, empty(m));

console.log(combine(['a', 'b', 'c']);

