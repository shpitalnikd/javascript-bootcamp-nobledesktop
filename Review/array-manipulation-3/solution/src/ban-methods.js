/* exported banMethods */
/* exported deepFreeze */

function banMethods(fn) {
  const methods = Array.prototype.slice.call(arguments, 1);
  const banned = new RegExp(
    methods
      .map(function (method) {
        return '\\.' + method;
      })
      .join('|'),
    'g'
  );
  if (banned.test(fn.toString())) {
    throw new Error(
      `The following methods are banned for this problem: ${methods.join(', ')}`
    );
  }
}

function deepFreeze(value) {
  Object.getOwnPropertyNames(value).forEach(function (key) {
    if (
      value[key] != null &&
      typeof value[key] === 'object' &&
      !Object.isFrozen(value[key])
    ) {
      deepFreeze(value[key]);
    }
  });
  return Object.freeze(value);
}
