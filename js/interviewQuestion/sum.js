
const sum = (() => {
  let record = 0;
  const add = (...rest) => {
    record = rest.reduce((p, n) => p + n, record);
    return add;
  };
  add.valueOf = () => record;
  return add;
})();

const a = sum(1, 2)(3, 4)(5);
console.log(a.valueOf()); // 15

const b = a(2)(3, 1);
console.log(b.valueOf()); // 21
