export const append = (old = [], val) => {
    var res = old;
    if (res.includes(val)) return res;
    res.push(val);
    return res;
  };