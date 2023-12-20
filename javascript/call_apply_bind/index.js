Function.prototype.myCall = function(context) {
  if (context === null || context === undefined) {
    context = window;
  }
  const symbol = Symbol();
  context[symbol] = this;
  const args = [...arguments].slice(1);
  const result = context[symbol](...args);
  delete context[symbol];
  return result;
}

Function.prototype.myApply = function(context) {
  if (context === null || context === undefined) {
    context = window;
  }
  const symbol = Symbol();
  context[symbol] = this;
  let result;
  if(arguments[1]) {
    result = context[symbol](...arguments[1]);
  } else {
    result = context[symbol]();
  }
  delete context[symbol];
  return result;
}

Function.prototype.myBind = function(context) {
  if (context === null || context === undefined) {
    context = window;
  }
  const _this = this;
  const args = [...arguments].slice(1);
  return function() {
    _this.apply(context, args.concat(...arguments));
  }
}