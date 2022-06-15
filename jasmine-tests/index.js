//1
function sequence(start, step) {
  let firstRun = true;
  start = start || 0;
  step = step || 1;
  return function () {
    if (firstRun) {
      firstRun = false;
      return start;
    }
    return (start = start + step);
  };
}

//2
function take(fn, count) {
  var array = [];
  for (var i = 0; i < count; i++) {
    array.push(fn());
  }
  return array;
}

//3
function map(fn, array) {
  var mas = array.map(function (element) {
    return fn(element);
  });
  return mas;
}

//4
function fmap(a, gen) {
  return function () {
    return a(gen.apply(null, arguments));
  };
}

//5
function partial() {
  var args = [];
  var fn = null;
  for (const arg of arguments) {
    if (typeof arg === 'function') {
      fn = arg;
    } else {
      args.push(arg);
    }
  }
  return function () {
    var mergedArgs = [];
    for (const arg of arguments) {
      mergedArgs.push(arg);
    }
    mergedArgs = args.concat(mergedArgs);
    return fn.apply(null, mergedArgs);
  };
}

//6
function partialAny(fn) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    var secondArgs = Array.prototype.slice.call(arguments);
    var margedArgs = [];
    var j = 0;
    for (var i = 0; i < args.length; i++) {
      if (args[i] === undefined) {
        margedArgs.push(secondArgs[j]);
        j++;
      } else {
        margedArgs.push(args[i]);
      }
    }
    return fn.apply(null, margedArgs.concat(secondArgs));
  };
}

//7
function bind(fn, context) {
  return function () {
    return fn.apply(context, Array.prototype.slice.call(arguments));
  };
}

//8
function pluck(objects, fieldName) {
  var mas = objects.map(function (element) {
    return element[fieldName];
  });
  return mas;
}

//9
function filter(arr, fn) {
  return arr.filter(function (element) {
    if (fn(element)) return element;
  });
}

//10
function count(obj) {
  return Object.keys(obj).length;
}
