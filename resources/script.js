// Exercise 1
function reverseString() {
  const str = prompt('Enter a string');
  alert(str.split('').reverse().join(''));
}

// Exercise 2
function omitBy(obj, pred) {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (!pred(value)) {
      result[key] = value;
    }
  }

  return result;
}

// Exercise 3
function combine(a, b) {
  const result = {};
  const aKeys = Object.keys(a);

  for (const key of aKeys) {
    // Properies of A and A(U)B
    if (b.hasOwnProperty(key)) {
      if (Array.isArray(a[key])) {
        if (Array.isArray(b[key])) {
          result[key] = [...a[key], ...b[key]];
        } else {
          result[key] = [...a[key], b[key]];
        }
      } else {
        if (Array.isArray(b[key])) {
          result[key] = [a[key], ...b[key]];
        } else {
          result[key] = [a[key], b[key]];
        }
      }
    } else {
      result[key] = a[key];
    }
  }

  const bUniqueKeys = Object.keys(b).filter((key) => !aKeys.includes(key));

  for (const key of bUniqueKeys) {
    // Properties of B
    result[key] = b[key];
  }

  return result;
}

const test1 = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1,
  d: 'bar',
  e: [0, { a: '0' }],
  f: 'Marco',
};

const test2 = {
  a: { z: 3 },
  b: [2, 3],
  c: 'foo',
  e: [1, { b: '1' }],
  f: 'Polo',
};

// Exercise 4
function minN(arr, n = 1) {
  return [...arr].sort().slice(0, n + 1);
}

// Exercise 5
function reduce_Which(arr, pred = (a, b) => a - b) {
  return [...arr].sort(pred)[0];
}

// Exercise 6
function doIt(arr, pred = (_) => true) {
  return arr.every(pred);
}

// Exercise 7
function filter_Non_UniqueBy(arr, prd) {
  let result = [...arr];
  let removeIdx = [];
  let flag = false;

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (prd(result[i], result[j], i, j)) {
        removeIdx.push(j);
        flag = true;
      }
    }

    if (flag) {
      removeIdx.push(i);
    }
    flag = false;
  }

  // https://stackoverflow.com/a/9229821
  removeIdx = [...new Set(removeIdx)].sort((a, b) => b - a);
  for (const idx of removeIdx) {
    result.splice(idx, 1);
  }

  return result;
}

// Exercise 8
function random_intArray_In_Range(min, max, n) {
  min = Math.floor(min);
  max = Math.ceil(max);

  const result = [];

  for (let i = 1; i <= n; i++) {
    result.push(Math.floor(Math.random() * (max - min + 1) + min));
  }

  return result;
}
