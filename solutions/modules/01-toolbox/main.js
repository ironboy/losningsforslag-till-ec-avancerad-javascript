/*
  Named imports must be wrapped in braces and match the exported names exactly.
  The file extension (.js) is required in Node's ESM - unlike in bundlers.
*/
import { capitalize, reverse, shout } from './stringUtils.js';

console.log(capitalize('hej på dig'));   // Hej på dig
console.log(reverse('stressed'));        // desserts
console.log(shout('vi klarade det'));    // VI KLARADE DET!!!

// Nothing stops us from combining them.
console.log(shout(reverse('javascript'))); // TPIRCSAVAJ!!!

/*
  If you remove "type": "module" from package.json, Node treats the file as
  CommonJS and you get:

    SyntaxError: Cannot use import statement outside a module

  ...because `import` simply does not exist in that module system.
*/
