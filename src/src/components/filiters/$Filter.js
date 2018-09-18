export default function (num) {
  if (num === undefined) {
    num=0;
    return num
  } else {
    const n = Number(num);
    return `$${n.toFixed(0).replace(/./g, (c, i, a) => {
    const currency = (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c);
    return currency;
  })}`;
  }
}