
import minimatch from 'minimatch'
const a1 = minimatch('/', '/')// true
const a2 = minimatch('/', '/auth/**')// false
const a3 = minimatch('/auth', '/')// false
const a4 = minimatch('/auth', '/auth**')// true
const a5 = minimatch('/reg', '/')// false
const a6 = minimatch('/reg', '/auth/**')// false
const a7 = minimatch('/auth/reg', '/')// false
const a8 = minimatch('/auth/reg', '/auth/**')// false
console.log(`a1:${a1},a2:${a2},a3:${a3},a4:${a4},a5:${a5},a6:${a6},a7:${a7},a8:${a8}`)
