// Establish the root object, `window` (`self`) in the browser, `global`
// on the server, or `this` in some virtual machines. We use `self`
// instead of `window` for `WebWorker` support.
var root = typeof self == 'object' && self.self === self && self ||
             typeof globalThis == 'object' && globalThis.globalThis === globalThis && globalThis ||
             Function('return this')() || {};

export{
  root
}
