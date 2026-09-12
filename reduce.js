Array.prototype.myReduce = function (callbackFn, initialValue) {
  let result;
  let startIndex;

  if (arguments.length >= 2) {
    result = initialValue;
    startIndex = 0;
  } else {
    if (this.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    let i = 0;

    // Find the first existing element
    while (i < this.length && !(i in this)) {
      i++;
    }

    if (i === this.length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    result = this[i];
    startIndex = i + 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    if (!(i in this)) continue;
    result = callbackFn(result, this[i], i, this);
  }

  return result;
};
