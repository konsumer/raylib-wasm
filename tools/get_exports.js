// this generates the `-sEXPORTED_FUNCTIONS` option for emscripten
import { functions } from './api.js'

console.log(`-sEXPORTED_FUNCTIONS=_malloc,_free,${functions.map(f => `_${f.name}`).join(',')}`)