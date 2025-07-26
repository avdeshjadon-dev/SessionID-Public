function a0b(a, b) {
  const c = a0a();
  return (
    (a0b = function (d, e) {
      d = d - 0x9b;
      let f = c[d];
      if (a0b["eVAFWQ"] === undefined) {
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
        (a0b["XfHZQG"] = g), (a = arguments), (a0b["eVAFWQ"] = !![]);
      }
      const h = c[0x0],
        i = d + h,
        j = a[i];
      return !j ? ((f = a0b["XfHZQG"](f)), (a[i] = f)) : (f = j), f;
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
        parseInt(g(0xa7)) / 0x1 +
        parseInt(g(0xa3)) / 0x2 +
        (parseInt(g(0xad)) / 0x3) * (parseInt(g(0x9b)) / 0x4) +
        -parseInt(g(0xac)) / 0x5 +
        (parseInt(g(0x9e)) / 0x6) * (-parseInt(g(0xa9)) / 0x7) +
        parseInt(g(0xab)) / 0x8 +
        (parseInt(g(0xa1)) / 0x9) * (-parseInt(g(0xa5)) / 0xa);
      if (d === b) break;
      else c["push"](c["shift"]());
    } catch (e) {
      c["push"](c["shift"]());
    }
  }
})(a0a, 0x7a62d);
import {
  getDocs,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
function a0a() {
  const i = [
    "C3rYAw5N",
    "zw50CMLLCW",
    "mZy2EvP5zKnq",
    "zw1WDhK",
    "zMLSDgvY",
    "mtu4mdr0ELjnD1K",
    "BNvTyMvY",
    "ndG5mdK4uwPez3Dg",
    "4PQG77Ipier1CgXPy2f0zsbJAgvJAYbMywLSzwq6",
    "ntGWBLLxrMXZ",
    "D2fYBG",
    "mJm2mte0wuLZDNjq",
    "zM9YrwfJAa",
    "ota4odfvt0vZwxm",
    "BgvUz3rO",
    "mJuYmtm5mKjYBNPiuq",
    "ntuWnJeWsfDXqKrr",
    "ndaYm1LjEuP6wa",
    "mJeXnNnfExb2zG",
  ];
  a0a = function () {
    return i;
  };
  return a0a();
}
export async function isDuplicateData(a, b) {
  const h = a0b,
    c = Object[h(0x9d)](b)[h(0xa0)](
      ([e, f]) => typeof f === h(0x9c) || typeof f === h(0xa2)
    );
  if (c[h(0xaa)] === 0x0) return ![];
  let d = a;
  c[h(0xa8)](([e, f]) => {
    d = query(d, where(e, "==", f));
  });
  try {
    const e = await getDocs(d);
    return !e[h(0x9f)];
  } catch (f) {
    return console[h(0xa6)](h(0xa4), f), ![];
  }
}
