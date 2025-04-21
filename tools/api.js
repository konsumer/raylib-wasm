// this is the complete API I am building to

import { readFile } from 'fs/promises'

const data = {
  defines: [],
  structs: [],
  aliases: [],
  enums: [],
  callbacks: [],
  functions: []
}

for (const a of [
  'raylib',
  'raygui',
  // 'raymath',
  'reasings',
  // 'rlgl',
  'rcamera',
  // 'rmem',
  // 'rres'
]) {
  const api = JSON.parse(await readFile(`tools/api/${a}.json`, 'utf8'))
  for (const field of Object.keys(data)) {
    for (const d of api[field]) {
      if (!data[field].find(o => o.name === d.name)) {
        data[field].push(d)
      }
    }
  }
}

let { defines, structs, aliases, enums, callbacks, functions } = data

functions.push({
  name: 'DrawTextBoxed',
  description: 'Utility from original examples for word-wrapping some text',
  returnType: 'void',
  params: [
    { type: 'Font', name: 'font' },
    { type: 'const char *', name: 'text' },
    { type: 'Rectangle', name: 'rec' },
    { type: 'float', name: 'fontSize' },
    { type: 'float', name: 'spacing' },
    { type: 'bool', name: 'wordWrap' },
    { type: 'Color', name: 'tint' },
  ]
})

functions.push({
  name: 'DrawTextBoxedSelectable',
  description: 'Utility from original examples for word-wrapping some text, and allowing you to show selection',
  returnType: 'void',
  params: [
    { type: 'Font', name: 'font' },
    { type: 'const char *', name: 'text' },
    { type: 'Rectangle', name: 'rec' },
    { type: 'float', name: 'fontSize' },
    { type: 'float', name: 'spacing' },
    { type: 'bool', name: 'wordWrap' },
    { type: 'Color', name: 'tint' },
    { type: 'int', name: 'selectStart' },
    { type: 'int', name: 'selectLength' },
    { type: 'Color', name: 'selectTint' },
    { type: 'Color', name: 'selectBackTint' },
  ]
})

// add type-aliases & a keyed list for lookup
const mappedStructs = structs.reduce((a, c) => ({ ...a, [c.name]: c }), {})
for (const { type, name, description } of aliases) {
  mappedStructs[name] = {
    ...mappedStructs[type],
    description,
    name
  }
}
structs = Object.values(mappedStructs)

// strip desktop-only stuff & bad names
functions = functions.filter(f => {
  return !['rlDisableStatePointer', 'rlEnableStatePointer'].includes(f.name) && !f.description.includes('only PLATFORM_DESKTOP')
})

export { defines, structs, aliases, enums, callbacks, functions, mappedStructs }