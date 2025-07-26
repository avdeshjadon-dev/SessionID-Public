function a0b(a, b) {
  const c = a0a();
  return (
    (a0b = function (d, e) {
      d = d - 0x87;
      let f = c[d];
      if (a0b["SuZNNd"] === undefined) {
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
        (a0b["Mascff"] = g), (a = arguments), (a0b["SuZNNd"] = !![]);
      }
      const h = c[0x0],
        i = d + h,
        j = a[i];
      return !j ? ((f = a0b["Mascff"](f)), (a[i] = f)) : (f = j), f;
    }),
    a0b(a, b)
  );
}
const a0g = a0b;
(function (a, b) {
  const f = a0b,
    c = a();
  while (!![]) {
    try {
      const d =
        -parseInt(f(0x95)) / 0x1 +
        parseInt(f(0x89)) / 0x2 +
        (parseInt(f(0x92)) / 0x3) * (-parseInt(f(0x8e)) / 0x4) +
        -parseInt(f(0x96)) / 0x5 +
        -parseInt(f(0x94)) / 0x6 +
        (-parseInt(f(0x87)) / 0x7) * (parseInt(f(0x88)) / 0x8) +
        parseInt(f(0x98)) / 0x9;
      if (d === b) break;
      else c["push"](c["shift"]());
    } catch (e) {
      c["push"](c["shift"]());
    }
  }
})(a0a, 0xb03b0);
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
function a0a() {
  const h = [
    "ntqYotq2rgTbCgPd",
    "rY1ku1ffrti4wvnq",
    "quL6yvn5rhzjyLboqMfvr2m1teSWD3vQAeLgu0DFv1rJvdDfBeXJ",
    "C2vZC2LVBMLKltC0ode0",
    "Bg9N",
    "mZm1nJe3mNbzB3D3ua",
    "C2vZC2LVBMLKltC0ode0lMfWChnWB3qUy29T",
    "8j+uPsbgAxjLyMfZzsbPBML0AwfSAxPLza",
    "mtOYotK3oda5mZCWntq6D2vIoMq1owfLywvKy2nKmtqZowm2zMvIy2y",
    "m1jZtezWwq",
    "mJK5nZGWotm3mdu0",
    "mZG1odq5mK9jsNLYAa",
    "mti2nJCZngjPuMTqCW",
    "nta0otK1rhnqyxrJ",
    "C2vZC2LVBMLKltC0ode0lMzPCMvIyxnLyxbWlMnVBq",
    "mZCXnJe3mZHeC2PJDva",
    "otCZwgP6EgvK",
    "ndC3mdrOAfjxwNK",
  ];
  a0a = function () {
    return h;
  };
  return a0a();
}
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
const firebaseConfig = {
    apiKey: a0g(0x8b),
    authDomain: a0g(0x97),
    projectId: a0g(0x8c),
    storageBucket: a0g(0x8f),
    messagingSenderId: a0g(0x93),
    appId: a0g(0x91),
    measurementId: a0g(0x8a),
  },
  app = initializeApp(firebaseConfig),
  db = getFirestore(app);
console[a0g(0x8d)](a0g(0x90));
export { db };
