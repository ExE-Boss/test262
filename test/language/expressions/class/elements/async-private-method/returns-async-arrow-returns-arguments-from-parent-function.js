// This file was procedurally generated from the following sources:
// - src/async-functions/returns-async-arrow-returns-arguments-from-parent-function.case
// - src/async-functions/syntax/async-class-expr-private-method.template
/*---
description: Async function returns an async function. (Async private method as a ClassExpression element)
esid: prod-AsyncMethod
features: [async-functions, class-methods-private]
flags: [generated, async]
info: |
    ClassElement :
      PrivateMethodDefinition

    MethodDefinition :
      AsyncMethod

    Async Function Definitions

    AsyncMethod :
      async [no LineTerminator here] # PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }

---*/
let count = 0;


var C = class {
  async #method(x) {
    let a = arguments;
      return async () => a === arguments;
  }
  async method(x) {
    return this.#method(x);
  }
};
// Stores a reference `asyncFn` for case evaluation
let c = new C();
let asyncFn = c.method.bind(c);

asyncFn().then(retFn => {
  count++;
  return retFn();
}).then(result => {
  assert.sameValue(result, true);
  assert.sameValue(count, 1);
}).then($DONE, $DONE);
