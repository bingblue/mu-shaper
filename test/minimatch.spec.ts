
import minimatch  from 'minimatch'
let a1 = minimatch('/', '/')//true
let a2 = minimatch('/', '/auth/**')// false
let a3 = minimatch('/auth', '/')// false
let a4 = minimatch('/auth', '/auth**')// true
let a5 = minimatch('/reg', '/')// false
let a6 = minimatch('/reg', '/auth/**')// false
let a7 = minimatch('/auth/reg', '/')// false
let a8 = minimatch('/auth/reg', '/auth/**')// false
console.log(`a1:${a1},a2:${a2},a3:${a3},a4:${a4},a5:${a5},a6:${a6},a7:${a7},a8:${a8}`)
