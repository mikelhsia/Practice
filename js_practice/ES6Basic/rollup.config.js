/**
 * Created by puppylpy on 2018/5/2.
 */
import buble from 'rollup-plugin-buble';

export default {
    entry: 'src/main.js',
    plugins: [buble()]
}