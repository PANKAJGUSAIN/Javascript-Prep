/**
 * @template T, U
 * @param { (value: T, index: number, array: Array<T>) => U } callbackFn
 * @param {any} [thisArg]
 * @return {Array<U>}
 */
Array.prototype.myMap = function (callbackFn, thisArg) {
  let result = [];
  let startIndex = 0;

  let i = 0;

  // Find the first existing element
  while (i < this.length && !(i in this)) {
    i++;
  }

  if (i === this.length) {
    return result;
  }

  startIndex = i + 1;

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result[i] = callbackFn.call(thisArg, this[i], i, this);
    }
  }
  return result;
};
