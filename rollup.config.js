import serve from 'rollup-plugin-serve';
import resolve from 'rollup-plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';

export default {
    input: 'index.js',
    output: {
        file: 'build/bundle.js',
        format: 'iife',
        name: 'ScrollGod',
    },
    plugins: [,
        resolve(),
        livereload({
            watch: ['build']
        }),
        serve(['build', 'examples'])
    ]
}