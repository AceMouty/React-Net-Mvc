import babel from "@rollup/plugin-babel"
import replace from "@rollup/plugin-replace"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
/**
 * type {@import('rollup').RollupOptions}
*/

const entries = [
    {
        inputFile: "src/components/NavMenu.jsx",
        outputFile: "../Scripts/App/dist/NavMenu.js",
        bundleName: "NavMenu"
    },
    {
        inputFile: "src/pages/About.jsx",
        outputFile: "../Scripts/App/dist/About.js",
        bundleName: "NavMenu"
    }
]

export default createEntries(entries)

function createEntries(inputs) {
    return inputs.map(input => {
        return {
            input: input.inputFile,
            output: {
                file: input.outputFile,
                name: input.bundleName,
                format: "iife",
                sourcemap: true,
            },
            plugins: [
                nodeResolve({
                    extensions: [".js"]
                }),
                replace({
                    'process.env.NODE_ENV': JSON.stringify('production')
                }),
                commonjs(),
                babel({
                    exclude: 'node_modules/**',
                    presets: [
                        "@babel/preset-env",
                        ["@babel/preset-react", { "runtime": "automatic" }]]
                }),

            ]
        }
    })
}