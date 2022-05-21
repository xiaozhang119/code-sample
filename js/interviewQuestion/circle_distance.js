
// 已知一个圆的坐标，以及半径，如何用性能更好的函数进行判断一个 x，y 点是否在圆上。

/**
 * 
 * @param {[number, number]} cp 圆心坐标
 * @param {number} r 圆的半径长度
 * @param {[number, number]} p 已知点的坐标
 */
const circleDistance = (cp, r, p) => {
  const [x1, y1] = cp;
  const [x2, y2] = p;
  const x = x1 - x2;
  const y = y1 - y2;
  const l = Math.pow(x, 2) + Math.pow(y, 2);
  return l <= Math.pow(r, 2);
};

console.log(circleDistance([8,8], 4, [3,3])); // false
console.log(circleDistance([8,8], 6, [5,3])); // true
