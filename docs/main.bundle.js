/*! For license information please see main.bundle.js.LICENSE.txt */
(() => {
  "use strict";
  const t = "0, 128, 255",
    e = "175, 9, 159",
    i = "0, 0, 0";
  const n =
    "undefined" == typeof window
      ? function (t) {
          return t();
        }
      : window.requestAnimationFrame;
  function o(t, e, i) {
    const o = i || ((t) => Array.prototype.slice.call(t));
    let s = !1,
      a = [];
    return function (...i) {
      (a = o(i)),
        s ||
          ((s = !0),
          n.call(window, () => {
            (s = !1), t.apply(e, a);
          }));
    };
  }
  const s = (t) => ("start" === t ? "left" : "end" === t ? "right" : "center"),
    a = (t, e, i) => ("start" === t ? e : "end" === t ? i : (e + i) / 2);
  const r = (function () {
    let t = 0;
    return function () {
      return t++;
    };
  })();
  function l(t) {
    return null == t;
  }
  function c(t) {
    if (Array.isArray && Array.isArray(t)) return !0;
    const e = Object.prototype.toString.call(t);
    return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6);
  }
  function h(t) {
    return (
      null !== t && "[object Object]" === Object.prototype.toString.call(t)
    );
  }
  const d = (t) =>
    ("number" == typeof t || t instanceof Number) && isFinite(+t);
  function u(t, e) {
    return d(t) ? t : e;
  }
  function g(t, e) {
    return void 0 === t ? e : t;
  }
  const f = (t, e) =>
    "string" == typeof t && t.endsWith("%") ? (parseFloat(t) / 100) * e : +t;
  function p(t, e, i) {
    if (t && "function" == typeof t.call) return t.apply(i, e);
  }
  function m(t, e, i, n) {
    let o, s, a;
    if (c(t))
      if (((s = t.length), n)) for (o = s - 1; o >= 0; o--) e.call(i, t[o], o);
      else for (o = 0; o < s; o++) e.call(i, t[o], o);
    else if (h(t))
      for (a = Object.keys(t), s = a.length, o = 0; o < s; o++)
        e.call(i, t[a[o]], a[o]);
  }
  function x(t, e) {
    let i, n, o, s;
    if (!t || !e || t.length !== e.length) return !1;
    for (i = 0, n = t.length; i < n; ++i)
      if (
        ((o = t[i]),
        (s = e[i]),
        o.datasetIndex !== s.datasetIndex || o.index !== s.index)
      )
        return !1;
    return !0;
  }
  function b(t) {
    if (c(t)) return t.map(b);
    if (h(t)) {
      const e = Object.create(null),
        i = Object.keys(t),
        n = i.length;
      let o = 0;
      for (; o < n; ++o) e[i[o]] = b(t[i[o]]);
      return e;
    }
    return t;
  }
  function _(t) {
    return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
  }
  function y(t, e, i, n) {
    if (!_(t)) return;
    const o = e[t],
      s = i[t];
    h(o) && h(s) ? v(o, s, n) : (e[t] = b(s));
  }
  function v(t, e, i) {
    const n = c(e) ? e : [e],
      o = n.length;
    if (!h(t)) return t;
    const s = (i = i || {}).merger || y;
    for (let a = 0; a < o; ++a) {
      if (!h((e = n[a]))) continue;
      const o = Object.keys(e);
      for (let n = 0, a = o.length; n < a; ++n) s(o[n], t, e, i);
    }
    return t;
  }
  function M(t, e) {
    return v(t, e, { merger: w });
  }
  function w(t, e, i) {
    if (!_(t)) return;
    const n = e[t],
      o = i[t];
    h(n) && h(o)
      ? M(n, o)
      : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = b(o));
  }
  function k(t, e) {
    const i = t.indexOf(".", e);
    return -1 === i ? t.length : i;
  }
  function S(t, e) {
    if ("" === e) return t;
    let i = 0,
      n = k(e, i);
    for (; t && n > i; )
      (t = t[e.substr(i, n - i)]), (i = n + 1), (n = k(e, i));
    return t;
  }
  function P(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  const O = (t) => void 0 !== t,
    D = (t) => "function" == typeof t,
    C = Math.PI,
    T = 2 * C,
    A = T + C,
    L = Number.POSITIVE_INFINITY,
    R = C / 180,
    E = C / 2,
    I = C / 4,
    F = (2 * C) / 3,
    z = Math.log10,
    V = Math.sign;
  function B(t) {
    const e = Math.pow(10, Math.floor(z(t))),
      i = t / e;
    return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * e;
  }
  function N(t) {
    return !isNaN(parseFloat(t)) && isFinite(t);
  }
  function j(t, e, i) {
    return Math.abs(t - e) < i;
  }
  function W(t, e, i) {
    let n, o, s;
    for (n = 0, o = t.length; n < o; n++)
      (s = t[n][i]),
        isNaN(s) ||
          ((e.min = Math.min(e.min, s)), (e.max = Math.max(e.max, s)));
  }
  function H(t) {
    return t * (C / 180);
  }
  function $(t) {
    return t * (180 / C);
  }
  function Y(t) {
    if (!d(t)) return;
    let e = 1,
      i = 0;
    for (; Math.round(t * e) / e !== t; ) (e *= 10), i++;
    return i;
  }
  function q(t, e) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
  }
  function U(t, e) {
    return ((t - e + A) % T) - C;
  }
  function X(t) {
    return ((t % T) + T) % T;
  }
  function K(t, e, i, n) {
    const o = X(t),
      s = X(e),
      a = X(i),
      r = X(s - o),
      l = X(a - o),
      c = X(o - s),
      h = X(o - a);
    return o === s || o === a || (n && s === a) || (r > l && c < h);
  }
  function G(t, e, i) {
    return Math.max(e, Math.min(i, t));
  }
  const Z = (t) => 0 === t || 1 === t,
    J = (t, e, i) => -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * T) / i),
    Q = (t, e, i) => Math.pow(2, -10 * t) * Math.sin(((t - e) * T) / i) + 1,
    tt = {
      linear: (t) => t,
      easeInQuad: (t) => t * t,
      easeOutQuad: (t) => -t * (t - 2),
      easeInOutQuad: (t) =>
        (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
      easeInCubic: (t) => t * t * t,
      easeOutCubic: (t) => (t -= 1) * t * t + 1,
      easeInOutCubic: (t) =>
        (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
      easeInQuart: (t) => t * t * t * t,
      easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
      easeInOutQuart: (t) =>
        (t /= 0.5) < 1
          ? 0.5 * t * t * t * t
          : -0.5 * ((t -= 2) * t * t * t - 2),
      easeInQuint: (t) => t * t * t * t * t,
      easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
      easeInOutQuint: (t) =>
        (t /= 0.5) < 1
          ? 0.5 * t * t * t * t * t
          : 0.5 * ((t -= 2) * t * t * t * t + 2),
      easeInSine: (t) => 1 - Math.cos(t * E),
      easeOutSine: (t) => Math.sin(t * E),
      easeInOutSine: (t) => -0.5 * (Math.cos(C * t) - 1),
      easeInExpo: (t) => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
      easeOutExpo: (t) => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
      easeInOutExpo: (t) =>
        Z(t)
          ? t
          : t < 0.5
          ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
          : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
      easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
      easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
      easeInOutCirc: (t) =>
        (t /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - t * t) - 1)
          : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
      easeInElastic: (t) => (Z(t) ? t : J(t, 0.075, 0.3)),
      easeOutElastic: (t) => (Z(t) ? t : Q(t, 0.075, 0.3)),
      easeInOutElastic(t) {
        const e = 0.1125;
        return Z(t)
          ? t
          : t < 0.5
          ? 0.5 * J(2 * t, e, 0.45)
          : 0.5 + 0.5 * Q(2 * t - 1, e, 0.45);
      },
      easeInBack(t) {
        const e = 1.70158;
        return t * t * ((e + 1) * t - e);
      },
      easeOutBack(t) {
        const e = 1.70158;
        return (t -= 1) * t * ((e + 1) * t + e) + 1;
      },
      easeInOutBack(t) {
        let e = 1.70158;
        return (t /= 0.5) < 1
          ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
          : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
      },
      easeInBounce: (t) => 1 - tt.easeOutBounce(1 - t),
      easeOutBounce(t) {
        const e = 7.5625,
          i = 2.75;
        return t < 1 / i
          ? e * t * t
          : t < 2 / i
          ? e * (t -= 1.5 / i) * t + 0.75
          : t < 2.5 / i
          ? e * (t -= 2.25 / i) * t + 0.9375
          : e * (t -= 2.625 / i) * t + 0.984375;
      },
      easeInOutBounce: (t) =>
        t < 0.5
          ? 0.5 * tt.easeInBounce(2 * t)
          : 0.5 * tt.easeOutBounce(2 * t - 1) + 0.5,
    },
    et = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15,
    },
    it = "0123456789ABCDEF",
    nt = (t) => it[15 & t],
    ot = (t) => it[(240 & t) >> 4] + it[15 & t],
    st = (t) => (240 & t) >> 4 == (15 & t);
  function at(t) {
    var e = (function (t) {
      return st(t.r) && st(t.g) && st(t.b) && st(t.a);
    })(t)
      ? nt
      : ot;
    return t ? "#" + e(t.r) + e(t.g) + e(t.b) + (t.a < 255 ? e(t.a) : "") : t;
  }
  function rt(t) {
    return (t + 0.5) | 0;
  }
  const lt = (t, e, i) => Math.max(Math.min(t, i), e);
  function ct(t) {
    return lt(rt(2.55 * t), 0, 255);
  }
  function ht(t) {
    return lt(rt(255 * t), 0, 255);
  }
  function dt(t) {
    return lt(rt(t / 2.55) / 100, 0, 1);
  }
  function ut(t) {
    return lt(rt(100 * t), 0, 100);
  }
  const gt =
    /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
  const ft =
    /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
  function pt(t, e, i) {
    const n = e * Math.min(i, 1 - i),
      o = (e, o = (e + t / 30) % 12) =>
        i - n * Math.max(Math.min(o - 3, 9 - o, 1), -1);
    return [o(0), o(8), o(4)];
  }
  function mt(t, e, i) {
    const n = (n, o = (n + t / 60) % 6) =>
      i - i * e * Math.max(Math.min(o, 4 - o, 1), 0);
    return [n(5), n(3), n(1)];
  }
  function xt(t, e, i) {
    const n = pt(t, 1, 0.5);
    let o;
    for (
      e + i > 1 && ((o = 1 / (e + i)), (e *= o), (i *= o)), o = 0;
      o < 3;
      o++
    )
      (n[o] *= 1 - e - i), (n[o] += e);
    return n;
  }
  function bt(t) {
    const e = t.r / 255,
      i = t.g / 255,
      n = t.b / 255,
      o = Math.max(e, i, n),
      s = Math.min(e, i, n),
      a = (o + s) / 2;
    let r, l, c;
    return (
      o !== s &&
        ((c = o - s),
        (l = a > 0.5 ? c / (2 - o - s) : c / (o + s)),
        (r =
          o === e
            ? (i - n) / c + (i < n ? 6 : 0)
            : o === i
            ? (n - e) / c + 2
            : (e - i) / c + 4),
        (r = 60 * r + 0.5)),
      [0 | r, l || 0, a]
    );
  }
  function _t(t, e, i, n) {
    return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, n)).map(ht);
  }
  function yt(t, e, i) {
    return _t(pt, t, e, i);
  }
  function vt(t) {
    return ((t % 360) + 360) % 360;
  }
  function Mt(t) {
    const e = ft.exec(t);
    let i,
      n = 255;
    if (!e) return;
    e[5] !== i && (n = e[6] ? ct(+e[5]) : ht(+e[5]));
    const o = vt(+e[2]),
      s = +e[3] / 100,
      a = +e[4] / 100;
    return (
      (i =
        "hwb" === e[1]
          ? (function (t, e, i) {
              return _t(xt, t, e, i);
            })(o, s, a)
          : "hsv" === e[1]
          ? (function (t, e, i) {
              return _t(mt, t, e, i);
            })(o, s, a)
          : yt(o, s, a)),
      { r: i[0], g: i[1], b: i[2], a: n }
    );
  }
  const wt = {
      x: "dark",
      Z: "light",
      Y: "re",
      X: "blu",
      W: "gr",
      V: "medium",
      U: "slate",
      A: "ee",
      T: "ol",
      S: "or",
      B: "ra",
      C: "lateg",
      D: "ights",
      R: "in",
      Q: "turquois",
      E: "hi",
      P: "ro",
      O: "al",
      N: "le",
      M: "de",
      L: "yello",
      F: "en",
      K: "ch",
      G: "arks",
      H: "ea",
      I: "ightg",
      J: "wh",
    },
    kt = {
      OiceXe: "f0f8ff",
      antiquewEte: "faebd7",
      aqua: "ffff",
      aquamarRe: "7fffd4",
      azuY: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "0",
      blanKedOmond: "ffebcd",
      Xe: "ff",
      XeviTet: "8a2be2",
      bPwn: "a52a2a",
      burlywood: "deb887",
      caMtXe: "5f9ea0",
      KartYuse: "7fff00",
      KocTate: "d2691e",
      cSO: "ff7f50",
      cSnflowerXe: "6495ed",
      cSnsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "ffff",
      xXe: "8b",
      xcyan: "8b8b",
      xgTMnPd: "b8860b",
      xWay: "a9a9a9",
      xgYF: "6400",
      xgYy: "a9a9a9",
      xkhaki: "bdb76b",
      xmagFta: "8b008b",
      xTivegYF: "556b2f",
      xSange: "ff8c00",
      xScEd: "9932cc",
      xYd: "8b0000",
      xsOmon: "e9967a",
      xsHgYF: "8fbc8f",
      xUXe: "483d8b",
      xUWay: "2f4f4f",
      xUgYy: "2f4f4f",
      xQe: "ced1",
      xviTet: "9400d3",
      dAppRk: "ff1493",
      dApskyXe: "bfff",
      dimWay: "696969",
      dimgYy: "696969",
      dodgerXe: "1e90ff",
      fiYbrick: "b22222",
      flSOwEte: "fffaf0",
      foYstWAn: "228b22",
      fuKsia: "ff00ff",
      gaRsbSo: "dcdcdc",
      ghostwEte: "f8f8ff",
      gTd: "ffd700",
      gTMnPd: "daa520",
      Way: "808080",
      gYF: "8000",
      gYFLw: "adff2f",
      gYy: "808080",
      honeyMw: "f0fff0",
      hotpRk: "ff69b4",
      RdianYd: "cd5c5c",
      Rdigo: "4b0082",
      ivSy: "fffff0",
      khaki: "f0e68c",
      lavFMr: "e6e6fa",
      lavFMrXsh: "fff0f5",
      lawngYF: "7cfc00",
      NmoncEffon: "fffacd",
      ZXe: "add8e6",
      ZcSO: "f08080",
      Zcyan: "e0ffff",
      ZgTMnPdLw: "fafad2",
      ZWay: "d3d3d3",
      ZgYF: "90ee90",
      ZgYy: "d3d3d3",
      ZpRk: "ffb6c1",
      ZsOmon: "ffa07a",
      ZsHgYF: "20b2aa",
      ZskyXe: "87cefa",
      ZUWay: "778899",
      ZUgYy: "778899",
      ZstAlXe: "b0c4de",
      ZLw: "ffffe0",
      lime: "ff00",
      limegYF: "32cd32",
      lRF: "faf0e6",
      magFta: "ff00ff",
      maPon: "800000",
      VaquamarRe: "66cdaa",
      VXe: "cd",
      VScEd: "ba55d3",
      VpurpN: "9370db",
      VsHgYF: "3cb371",
      VUXe: "7b68ee",
      VsprRggYF: "fa9a",
      VQe: "48d1cc",
      VviTetYd: "c71585",
      midnightXe: "191970",
      mRtcYam: "f5fffa",
      mistyPse: "ffe4e1",
      moccasR: "ffe4b5",
      navajowEte: "ffdead",
      navy: "80",
      Tdlace: "fdf5e6",
      Tive: "808000",
      TivedBb: "6b8e23",
      Sange: "ffa500",
      SangeYd: "ff4500",
      ScEd: "da70d6",
      pOegTMnPd: "eee8aa",
      pOegYF: "98fb98",
      pOeQe: "afeeee",
      pOeviTetYd: "db7093",
      papayawEp: "ffefd5",
      pHKpuff: "ffdab9",
      peru: "cd853f",
      pRk: "ffc0cb",
      plum: "dda0dd",
      powMrXe: "b0e0e6",
      purpN: "800080",
      YbeccapurpN: "663399",
      Yd: "ff0000",
      Psybrown: "bc8f8f",
      PyOXe: "4169e1",
      saddNbPwn: "8b4513",
      sOmon: "fa8072",
      sandybPwn: "f4a460",
      sHgYF: "2e8b57",
      sHshell: "fff5ee",
      siFna: "a0522d",
      silver: "c0c0c0",
      skyXe: "87ceeb",
      UXe: "6a5acd",
      UWay: "708090",
      UgYy: "708090",
      snow: "fffafa",
      sprRggYF: "ff7f",
      stAlXe: "4682b4",
      tan: "d2b48c",
      teO: "8080",
      tEstN: "d8bfd8",
      tomato: "ff6347",
      Qe: "40e0d0",
      viTet: "ee82ee",
      JHt: "f5deb3",
      wEte: "ffffff",
      wEtesmoke: "f5f5f5",
      Lw: "ffff00",
      LwgYF: "9acd32",
    };
  let St;
  function Pt(t) {
    St ||
      ((St = (function () {
        const t = {},
          e = Object.keys(kt),
          i = Object.keys(wt);
        let n, o, s, a, r;
        for (n = 0; n < e.length; n++) {
          for (a = r = e[n], o = 0; o < i.length; o++)
            (s = i[o]), (r = r.replace(s, wt[s]));
          (s = parseInt(kt[a], 16)),
            (t[r] = [(s >> 16) & 255, (s >> 8) & 255, 255 & s]);
        }
        return t;
      })()),
      (St.transparent = [0, 0, 0, 0]));
    const e = St[t.toLowerCase()];
    return e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 };
  }
  function Ot(t, e, i) {
    if (t) {
      let n = bt(t);
      (n[e] = Math.max(0, Math.min(n[e] + n[e] * i, 0 === e ? 360 : 1))),
        (n = yt(n)),
        (t.r = n[0]),
        (t.g = n[1]),
        (t.b = n[2]);
    }
  }
  function Dt(t, e) {
    return t ? Object.assign(e || {}, t) : t;
  }
  function Ct(t) {
    var e = { r: 0, g: 0, b: 0, a: 255 };
    return (
      Array.isArray(t)
        ? t.length >= 3 &&
          ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
          t.length > 3 && (e.a = ht(t[3])))
        : ((e = Dt(t, { r: 0, g: 0, b: 0, a: 1 })).a = ht(e.a)),
      e
    );
  }
  function Tt(t) {
    return "r" === t.charAt(0)
      ? (function (t) {
          const e = gt.exec(t);
          let i,
            n,
            o,
            s = 255;
          if (e) {
            if (e[7] !== i) {
              const t = +e[7];
              s = 255 & (e[8] ? ct(t) : 255 * t);
            }
            return (
              (i = +e[1]),
              (n = +e[3]),
              (o = +e[5]),
              (i = 255 & (e[2] ? ct(i) : i)),
              (n = 255 & (e[4] ? ct(n) : n)),
              (o = 255 & (e[6] ? ct(o) : o)),
              { r: i, g: n, b: o, a: s }
            );
          }
        })(t)
      : Mt(t);
  }
  class At {
    constructor(t) {
      if (t instanceof At) return t;
      const e = typeof t;
      let i;
      var n, o, s;
      "object" === e
        ? (i = Ct(t))
        : "string" === e &&
          ((s = (n = t).length),
          "#" === n[0] &&
            (4 === s || 5 === s
              ? (o = {
                  r: 255 & (17 * et[n[1]]),
                  g: 255 & (17 * et[n[2]]),
                  b: 255 & (17 * et[n[3]]),
                  a: 5 === s ? 17 * et[n[4]] : 255,
                })
              : (7 !== s && 9 !== s) ||
                (o = {
                  r: (et[n[1]] << 4) | et[n[2]],
                  g: (et[n[3]] << 4) | et[n[4]],
                  b: (et[n[5]] << 4) | et[n[6]],
                  a: 9 === s ? (et[n[7]] << 4) | et[n[8]] : 255,
                })),
          (i = o || Pt(t) || Tt(t))),
        (this._rgb = i),
        (this._valid = !!i);
    }
    get valid() {
      return this._valid;
    }
    get rgb() {
      var t = Dt(this._rgb);
      return t && (t.a = dt(t.a)), t;
    }
    set rgb(t) {
      this._rgb = Ct(t);
    }
    rgbString() {
      return this._valid
        ? (t = this._rgb) &&
            (t.a < 255
              ? `rgba(${t.r}, ${t.g}, ${t.b}, ${dt(t.a)})`
              : `rgb(${t.r}, ${t.g}, ${t.b})`)
        : this._rgb;
      var t;
    }
    hexString() {
      return this._valid ? at(this._rgb) : this._rgb;
    }
    hslString() {
      return this._valid
        ? (function (t) {
            if (!t) return;
            const e = bt(t),
              i = e[0],
              n = ut(e[1]),
              o = ut(e[2]);
            return t.a < 255
              ? `hsla(${i}, ${n}%, ${o}%, ${dt(t.a)})`
              : `hsl(${i}, ${n}%, ${o}%)`;
          })(this._rgb)
        : this._rgb;
    }
    mix(t, e) {
      const i = this;
      if (t) {
        const n = i.rgb,
          o = t.rgb;
        let s;
        const a = e === s ? 0.5 : e,
          r = 2 * a - 1,
          l = n.a - o.a,
          c = ((r * l == -1 ? r : (r + l) / (1 + r * l)) + 1) / 2;
        (s = 1 - c),
          (n.r = 255 & (c * n.r + s * o.r + 0.5)),
          (n.g = 255 & (c * n.g + s * o.g + 0.5)),
          (n.b = 255 & (c * n.b + s * o.b + 0.5)),
          (n.a = a * n.a + (1 - a) * o.a),
          (i.rgb = n);
      }
      return i;
    }
    clone() {
      return new At(this.rgb);
    }
    alpha(t) {
      return (this._rgb.a = ht(t)), this;
    }
    clearer(t) {
      return (this._rgb.a *= 1 - t), this;
    }
    greyscale() {
      const t = this._rgb,
        e = rt(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
      return (t.r = t.g = t.b = e), this;
    }
    opaquer(t) {
      return (this._rgb.a *= 1 + t), this;
    }
    negate() {
      const t = this._rgb;
      return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
    }
    lighten(t) {
      return Ot(this._rgb, 2, t), this;
    }
    darken(t) {
      return Ot(this._rgb, 2, -t), this;
    }
    saturate(t) {
      return Ot(this._rgb, 1, t), this;
    }
    desaturate(t) {
      return Ot(this._rgb, 1, -t), this;
    }
    rotate(t) {
      return (
        (function (t, e) {
          var i = bt(t);
          (i[0] = vt(i[0] + e)),
            (i = yt(i)),
            (t.r = i[0]),
            (t.g = i[1]),
            (t.b = i[2]);
        })(this._rgb, t),
        this
      );
    }
  }
  function Lt(t) {
    return new At(t);
  }
  const Rt = (t) => t instanceof CanvasGradient || t instanceof CanvasPattern;
  function Et(t) {
    return Rt(t) ? t : Lt(t);
  }
  function It(t) {
    return Rt(t) ? t : Lt(t).saturate(0.5).darken(0.1).hexString();
  }
  const Ft = Object.create(null),
    zt = Object.create(null);
  function Vt(t, e) {
    if (!e) return t;
    const i = e.split(".");
    for (let e = 0, n = i.length; e < n; ++e) {
      const n = i[e];
      t = t[n] || (t[n] = Object.create(null));
    }
    return t;
  }
  function Bt(t, e, i) {
    return "string" == typeof e ? v(Vt(t, e), i) : v(Vt(t, ""), e);
  }
  var Nt = new (class {
    constructor(t) {
      (this.animation = void 0),
        (this.backgroundColor = "rgba(0,0,0,0.1)"),
        (this.borderColor = "rgba(0,0,0,0.1)"),
        (this.color = "#666"),
        (this.datasets = {}),
        (this.devicePixelRatio = (t) => t.chart.platform.getDevicePixelRatio()),
        (this.elements = {}),
        (this.events = [
          "mousemove",
          "mouseout",
          "click",
          "touchstart",
          "touchmove",
        ]),
        (this.font = {
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          size: 12,
          style: "normal",
          lineHeight: 1.2,
          weight: null,
        }),
        (this.hover = {}),
        (this.hoverBackgroundColor = (t, e) => It(e.backgroundColor)),
        (this.hoverBorderColor = (t, e) => It(e.borderColor)),
        (this.hoverColor = (t, e) => It(e.color)),
        (this.indexAxis = "x"),
        (this.interaction = { mode: "nearest", intersect: !0 }),
        (this.maintainAspectRatio = !0),
        (this.onHover = null),
        (this.onClick = null),
        (this.parsing = !0),
        (this.plugins = {}),
        (this.responsive = !0),
        (this.scale = void 0),
        (this.scales = {}),
        (this.showLine = !0),
        this.describe(t);
    }
    set(t, e) {
      return Bt(this, t, e);
    }
    get(t) {
      return Vt(this, t);
    }
    describe(t, e) {
      return Bt(zt, t, e);
    }
    override(t, e) {
      return Bt(Ft, t, e);
    }
    route(t, e, i, n) {
      const o = Vt(this, t),
        s = Vt(this, i),
        a = "_" + e;
      Object.defineProperties(o, {
        [a]: { value: o[e], writable: !0 },
        [e]: {
          enumerable: !0,
          get() {
            const t = this[a],
              e = s[n];
            return h(t) ? Object.assign({}, e, t) : g(t, e);
          },
          set(t) {
            this[a] = t;
          },
        },
      });
    }
  })({
    _scriptable: (t) => !t.startsWith("on"),
    _indexable: (t) => "events" !== t,
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  });
  function jt(t, e, i, n, o) {
    let s = e[o];
    return (
      s || ((s = e[o] = t.measureText(o).width), i.push(o)), s > n && (n = s), n
    );
  }
  function Wt(t, e, i, n) {
    let o = ((n = n || {}).data = n.data || {}),
      s = (n.garbageCollect = n.garbageCollect || []);
    n.font !== e &&
      ((o = n.data = {}), (s = n.garbageCollect = []), (n.font = e)),
      t.save(),
      (t.font = e);
    let a = 0;
    const r = i.length;
    let l, h, d, u, g;
    for (l = 0; l < r; l++)
      if (((u = i[l]), null != u && !0 !== c(u))) a = jt(t, o, s, a, u);
      else if (c(u))
        for (h = 0, d = u.length; h < d; h++)
          (g = u[h]), null == g || c(g) || (a = jt(t, o, s, a, g));
    t.restore();
    const f = s.length / 2;
    if (f > i.length) {
      for (l = 0; l < f; l++) delete o[s[l]];
      s.splice(0, f);
    }
    return a;
  }
  function Ht(t, e, i) {
    const n = t.currentDevicePixelRatio,
      o = 0 !== i ? Math.max(i / 2, 0.5) : 0;
    return Math.round((e - o) * n) / n + o;
  }
  function $t(t, e) {
    (e = e || t.getContext("2d")).save(),
      e.resetTransform(),
      e.clearRect(0, 0, t.width, t.height),
      e.restore();
  }
  function Yt(t, e, i, n) {
    let o, s, a, r, l;
    const c = e.pointStyle,
      h = e.rotation,
      d = e.radius;
    let u = (h || 0) * R;
    if (
      c &&
      "object" == typeof c &&
      ((o = c.toString()),
      "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)
    )
      return (
        t.save(),
        t.translate(i, n),
        t.rotate(u),
        t.drawImage(c, -c.width / 2, -c.height / 2, c.width, c.height),
        void t.restore()
      );
    if (!(isNaN(d) || d <= 0)) {
      switch ((t.beginPath(), c)) {
        default:
          t.arc(i, n, d, 0, T), t.closePath();
          break;
        case "triangle":
          t.moveTo(i + Math.sin(u) * d, n - Math.cos(u) * d),
            (u += F),
            t.lineTo(i + Math.sin(u) * d, n - Math.cos(u) * d),
            (u += F),
            t.lineTo(i + Math.sin(u) * d, n - Math.cos(u) * d),
            t.closePath();
          break;
        case "rectRounded":
          (l = 0.516 * d),
            (r = d - l),
            (s = Math.cos(u + I) * r),
            (a = Math.sin(u + I) * r),
            t.arc(i - s, n - a, l, u - C, u - E),
            t.arc(i + a, n - s, l, u - E, u),
            t.arc(i + s, n + a, l, u, u + E),
            t.arc(i - a, n + s, l, u + E, u + C),
            t.closePath();
          break;
        case "rect":
          if (!h) {
            (r = Math.SQRT1_2 * d), t.rect(i - r, n - r, 2 * r, 2 * r);
            break;
          }
          u += I;
        case "rectRot":
          (s = Math.cos(u) * d),
            (a = Math.sin(u) * d),
            t.moveTo(i - s, n - a),
            t.lineTo(i + a, n - s),
            t.lineTo(i + s, n + a),
            t.lineTo(i - a, n + s),
            t.closePath();
          break;
        case "crossRot":
          u += I;
        case "cross":
          (s = Math.cos(u) * d),
            (a = Math.sin(u) * d),
            t.moveTo(i - s, n - a),
            t.lineTo(i + s, n + a),
            t.moveTo(i + a, n - s),
            t.lineTo(i - a, n + s);
          break;
        case "star":
          (s = Math.cos(u) * d),
            (a = Math.sin(u) * d),
            t.moveTo(i - s, n - a),
            t.lineTo(i + s, n + a),
            t.moveTo(i + a, n - s),
            t.lineTo(i - a, n + s),
            (u += I),
            (s = Math.cos(u) * d),
            (a = Math.sin(u) * d),
            t.moveTo(i - s, n - a),
            t.lineTo(i + s, n + a),
            t.moveTo(i + a, n - s),
            t.lineTo(i - a, n + s);
          break;
        case "line":
          (s = Math.cos(u) * d),
            (a = Math.sin(u) * d),
            t.moveTo(i - s, n - a),
            t.lineTo(i + s, n + a);
          break;
        case "dash":
          t.moveTo(i, n), t.lineTo(i + Math.cos(u) * d, n + Math.sin(u) * d);
      }
      t.fill(), e.borderWidth > 0 && t.stroke();
    }
  }
  function qt(t, e, i) {
    return (
      (i = i || 0.5),
      t &&
        t.x > e.left - i &&
        t.x < e.right + i &&
        t.y > e.top - i &&
        t.y < e.bottom + i
    );
  }
  function Ut(t, e) {
    t.save(),
      t.beginPath(),
      t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
      t.clip();
  }
  function Xt(t) {
    t.restore();
  }
  function Kt(t, e, i, n, o) {
    if (!e) return t.lineTo(i.x, i.y);
    if ("middle" === o) {
      const n = (e.x + i.x) / 2;
      t.lineTo(n, e.y), t.lineTo(n, i.y);
    } else ("after" === o) != !!n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
    t.lineTo(i.x, i.y);
  }
  function Gt(t, e, i, n) {
    if (!e) return t.lineTo(i.x, i.y);
    t.bezierCurveTo(
      n ? e.cp1x : e.cp2x,
      n ? e.cp1y : e.cp2y,
      n ? i.cp2x : i.cp1x,
      n ? i.cp2y : i.cp1y,
      i.x,
      i.y
    );
  }
  function Zt(t, e, i, n, o, s = {}) {
    const a = c(e) ? e : [e],
      r = s.strokeWidth > 0 && "" !== s.strokeColor;
    let h, d;
    for (
      t.save(),
        s.translation && t.translate(s.translation[0], s.translation[1]),
        l(s.rotation) || t.rotate(s.rotation),
        t.font = o.string,
        s.color && (t.fillStyle = s.color),
        s.textAlign && (t.textAlign = s.textAlign),
        s.textBaseline && (t.textBaseline = s.textBaseline),
        h = 0;
      h < a.length;
      ++h
    ) {
      if (
        ((d = a[h]),
        r &&
          (s.strokeColor && (t.strokeStyle = s.strokeColor),
          l(s.strokeWidth) || (t.lineWidth = s.strokeWidth),
          t.strokeText(d, i, n, s.maxWidth)),
        t.fillText(d, i, n, s.maxWidth),
        s.strikethrough || s.underline)
      ) {
        const e = t.measureText(d),
          o = i - e.actualBoundingBoxLeft,
          a = i + e.actualBoundingBoxRight,
          r = n - e.actualBoundingBoxAscent,
          l = n + e.actualBoundingBoxDescent,
          c = s.strikethrough ? (r + l) / 2 : l;
        (t.strokeStyle = t.fillStyle),
          t.beginPath(),
          (t.lineWidth = s.decorationWidth || 2),
          t.moveTo(o, c),
          t.lineTo(a, c),
          t.stroke();
      }
      n += o.lineHeight;
    }
    t.restore();
  }
  function Jt(t, e) {
    const { x: i, y: n, w: o, h: s, radius: a } = e;
    t.arc(i + a.topLeft, n + a.topLeft, a.topLeft, -E, C, !0),
      t.lineTo(i, n + s - a.bottomLeft),
      t.arc(i + a.bottomLeft, n + s - a.bottomLeft, a.bottomLeft, C, E, !0),
      t.lineTo(i + o - a.bottomRight, n + s),
      t.arc(
        i + o - a.bottomRight,
        n + s - a.bottomRight,
        a.bottomRight,
        E,
        0,
        !0
      ),
      t.lineTo(i + o, n + a.topRight),
      t.arc(i + o - a.topRight, n + a.topRight, a.topRight, 0, -E, !0),
      t.lineTo(i + a.topLeft, n);
  }
  const Qt = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
    te = new RegExp(
      /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/
    );
  function ee(t, e) {
    const i = ("" + t).match(Qt);
    if (!i || "normal" === i[1]) return 1.2 * e;
    switch (((t = +i[2]), i[3])) {
      case "px":
        return t;
      case "%":
        t /= 100;
    }
    return e * t;
  }
  function ie(t, e) {
    const i = {},
      n = h(e),
      o = n ? Object.keys(e) : e,
      s = h(t) ? (n ? (i) => g(t[i], t[e[i]]) : (e) => t[e]) : () => t;
    for (const t of o) i[t] = +s(t) || 0;
    return i;
  }
  function ne(t) {
    return ie(t, { top: "y", right: "x", bottom: "y", left: "x" });
  }
  function oe(t) {
    return ie(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
  }
  function se(t) {
    const e = ne(t);
    return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
  }
  function ae(t, e) {
    (t = t || {}), (e = e || Nt.font);
    let i = g(t.size, e.size);
    "string" == typeof i && (i = parseInt(i, 10));
    let n = g(t.style, e.style);
    n &&
      !("" + n).match(te) &&
      (console.warn('Invalid font style specified: "' + n + '"'), (n = ""));
    const o = {
      family: g(t.family, e.family),
      lineHeight: ee(g(t.lineHeight, e.lineHeight), i),
      size: i,
      style: n,
      weight: g(t.weight, e.weight),
      string: "",
    };
    return (
      (o.string = (function (t) {
        return !t || l(t.size) || l(t.family)
          ? null
          : (t.style ? t.style + " " : "") +
              (t.weight ? t.weight + " " : "") +
              t.size +
              "px " +
              t.family;
      })(o)),
      o
    );
  }
  function re(t, e, i, n) {
    let o,
      s,
      a,
      r = !0;
    for (o = 0, s = t.length; o < s; ++o)
      if (
        ((a = t[o]),
        void 0 !== a &&
          (void 0 !== e && "function" == typeof a && ((a = a(e)), (r = !1)),
          void 0 !== i && c(a) && ((a = a[i % a.length]), (r = !1)),
          void 0 !== a))
      )
        return n && !r && (n.cacheable = !1), a;
  }
  function le(t, e, i) {
    i = i || ((i) => t[i] < e);
    let n,
      o = t.length - 1,
      s = 0;
    for (; o - s > 1; ) (n = (s + o) >> 1), i(n) ? (s = n) : (o = n);
    return { lo: s, hi: o };
  }
  const ce = (t, e, i) => le(t, i, (n) => t[n][e] < i),
    he = (t, e, i) => le(t, i, (n) => t[n][e] >= i);
  const de = ["push", "pop", "shift", "splice", "unshift"];
  function ue(t, e) {
    const i = t._chartjs;
    if (!i) return;
    const n = i.listeners,
      o = n.indexOf(e);
    -1 !== o && n.splice(o, 1),
      n.length > 0 ||
        (de.forEach((e) => {
          delete t[e];
        }),
        delete t._chartjs);
  }
  function ge(t) {
    const e = new Set();
    let i, n;
    for (i = 0, n = t.length; i < n; ++i) e.add(t[i]);
    if (e.size === n) return t;
    const o = [];
    return (
      e.forEach((t) => {
        o.push(t);
      }),
      o
    );
  }
  function fe(t, e = [""], i = t, n, o = () => t[0]) {
    O(n) || (n = Se("_fallback", t));
    const s = {
      [Symbol.toStringTag]: "Object",
      _cacheable: !0,
      _scopes: t,
      _rootScopes: i,
      _fallback: n,
      _getTarget: o,
      override: (o) => fe([o, ...t], e, i, n),
    };
    return new Proxy(s, {
      deleteProperty: (e, i) => (
        delete e[i], delete e._keys, delete t[0][i], !0
      ),
      get: (i, n) =>
        _e(i, n, () =>
          (function (t, e, i, n) {
            let o;
            for (const s of e)
              if (((o = Se(xe(s, t), i)), O(o)))
                return be(t, o) ? we(i, n, t, o) : o;
          })(n, e, t, i)
        ),
      getOwnPropertyDescriptor: (t, e) =>
        Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
      getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
      has: (t, e) => Pe(t).includes(e),
      ownKeys: (t) => Pe(t),
      set: (t, e, i) => (
        ((t._storage || (t._storage = o()))[e] = i),
        delete t[e],
        delete t._keys,
        !0
      ),
    });
  }
  function pe(t, e, i, n) {
    const o = {
      _cacheable: !1,
      _proxy: t,
      _context: e,
      _subProxy: i,
      _stack: new Set(),
      _descriptors: me(t, n),
      setContext: (e) => pe(t, e, i, n),
      override: (o) => pe(t.override(o), e, i, n),
    };
    return new Proxy(o, {
      deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
      get: (t, e, i) =>
        _e(t, e, () =>
          (function (t, e, i) {
            const { _proxy: n, _context: o, _subProxy: s, _descriptors: a } = t;
            let r = n[e];
            D(r) &&
              a.isScriptable(e) &&
              (r = (function (t, e, i, n) {
                const { _proxy: o, _context: s, _subProxy: a, _stack: r } = i;
                if (r.has(t))
                  throw new Error(
                    "Recursion detected: " + [...r].join("->") + "->" + t
                  );
                r.add(t),
                  (e = e(s, a || n)),
                  r.delete(t),
                  h(e) && (e = we(o._scopes, o, t, e));
                return e;
              })(e, r, t, i));
            c(r) &&
              r.length &&
              (r = (function (t, e, i, n) {
                const {
                  _proxy: o,
                  _context: s,
                  _subProxy: a,
                  _descriptors: r,
                } = i;
                if (O(s.index) && n(t)) e = e[s.index % e.length];
                else if (h(e[0])) {
                  const i = e,
                    n = o._scopes.filter((t) => t !== i);
                  e = [];
                  for (const l of i) {
                    const i = we(n, o, t, l);
                    e.push(pe(i, s, a && a[t], r));
                  }
                }
                return e;
              })(e, r, t, a.isIndexable));
            be(e, r) && (r = pe(r, o, s && s[e], a));
            return r;
          })(t, e, i)
        ),
      getOwnPropertyDescriptor: (e, i) =>
        e._descriptors.allKeys
          ? Reflect.has(t, i)
            ? { enumerable: !0, configurable: !0 }
            : void 0
          : Reflect.getOwnPropertyDescriptor(t, i),
      getPrototypeOf: () => Reflect.getPrototypeOf(t),
      has: (e, i) => Reflect.has(t, i),
      ownKeys: () => Reflect.ownKeys(t),
      set: (e, i, n) => ((t[i] = n), delete e[i], !0),
    });
  }
  function me(t, e = { scriptable: !0, indexable: !0 }) {
    const {
      _scriptable: i = e.scriptable,
      _indexable: n = e.indexable,
      _allKeys: o = e.allKeys,
    } = t;
    return {
      allKeys: o,
      scriptable: i,
      indexable: n,
      isScriptable: D(i) ? i : () => i,
      isIndexable: D(n) ? n : () => n,
    };
  }
  const xe = (t, e) => (t ? t + P(e) : e),
    be = (t, e) => h(e) && "adapters" !== t;
  function _e(t, e, i) {
    let n = t[e];
    return O(n) || ((n = i()), O(n) && (t[e] = n)), n;
  }
  function ye(t, e, i) {
    return D(t) ? t(e, i) : t;
  }
  const ve = (t, e) => (!0 === t ? e : "string" == typeof t ? S(e, t) : void 0);
  function Me(t, e, i, n) {
    for (const o of e) {
      const e = ve(i, o);
      if (e) {
        t.add(e);
        const o = ye(e._fallback, i, e);
        if (O(o) && o !== i && o !== n) return o;
      } else if (!1 === e && O(n) && i !== n) return null;
    }
    return !1;
  }
  function we(t, e, i, n) {
    const o = e._rootScopes,
      s = ye(e._fallback, i, n),
      a = [...t, ...o],
      r = new Set();
    r.add(n);
    let l = ke(r, a, i, s || i);
    return (
      null !== l &&
      (!O(s) || s === i || ((l = ke(r, a, s, l)), null !== l)) &&
      fe([...r], [""], o, s, () =>
        (function (t, e, i) {
          const n = t._getTarget();
          e in n || (n[e] = {});
          const o = n[e];
          if (c(o) && h(i)) return i;
          return o;
        })(e, i, n)
      )
    );
  }
  function ke(t, e, i, n) {
    for (; i; ) i = Me(t, e, i, n);
    return i;
  }
  function Se(t, e) {
    for (const i of e) {
      if (!i) continue;
      const e = i[t];
      if (O(e)) return e;
    }
  }
  function Pe(t) {
    let e = t._keys;
    return (
      e ||
        (e = t._keys =
          (function (t) {
            const e = new Set();
            for (const i of t)
              for (const t of Object.keys(i).filter((t) => !t.startsWith("_")))
                e.add(t);
            return [...e];
          })(t._scopes)),
      e
    );
  }
  const Oe = Number.EPSILON || 1e-14,
    De = (t, e) => e < t.length && !t[e].skip && t[e],
    Ce = (t) => ("x" === t ? "y" : "x");
  function Te(t, e, i, n) {
    const o = t.skip ? e : t,
      s = e,
      a = i.skip ? e : i,
      r = q(s, o),
      l = q(a, s);
    let c = r / (r + l),
      h = l / (r + l);
    (c = isNaN(c) ? 0 : c), (h = isNaN(h) ? 0 : h);
    const d = n * c,
      u = n * h;
    return {
      previous: { x: s.x - d * (a.x - o.x), y: s.y - d * (a.y - o.y) },
      next: { x: s.x + u * (a.x - o.x), y: s.y + u * (a.y - o.y) },
    };
  }
  function Ae(t, e = "x") {
    const i = Ce(e),
      n = t.length,
      o = Array(n).fill(0),
      s = Array(n);
    let a,
      r,
      l,
      c = De(t, 0);
    for (a = 0; a < n; ++a)
      if (((r = l), (l = c), (c = De(t, a + 1)), l)) {
        if (c) {
          const t = c[e] - l[e];
          o[a] = 0 !== t ? (c[i] - l[i]) / t : 0;
        }
        s[a] = r
          ? c
            ? V(o[a - 1]) !== V(o[a])
              ? 0
              : (o[a - 1] + o[a]) / 2
            : o[a - 1]
          : o[a];
      }
    !(function (t, e, i) {
      const n = t.length;
      let o,
        s,
        a,
        r,
        l,
        c = De(t, 0);
      for (let h = 0; h < n - 1; ++h)
        (l = c),
          (c = De(t, h + 1)),
          l &&
            c &&
            (j(e[h], 0, Oe)
              ? (i[h] = i[h + 1] = 0)
              : ((o = i[h] / e[h]),
                (s = i[h + 1] / e[h]),
                (r = Math.pow(o, 2) + Math.pow(s, 2)),
                r <= 9 ||
                  ((a = 3 / Math.sqrt(r)),
                  (i[h] = o * a * e[h]),
                  (i[h + 1] = s * a * e[h]))));
    })(t, o, s),
      (function (t, e, i = "x") {
        const n = Ce(i),
          o = t.length;
        let s,
          a,
          r,
          l = De(t, 0);
        for (let c = 0; c < o; ++c) {
          if (((a = r), (r = l), (l = De(t, c + 1)), !r)) continue;
          const o = r[i],
            h = r[n];
          a &&
            ((s = (o - a[i]) / 3),
            (r[`cp1${i}`] = o - s),
            (r[`cp1${n}`] = h - s * e[c])),
            l &&
              ((s = (l[i] - o) / 3),
              (r[`cp2${i}`] = o + s),
              (r[`cp2${n}`] = h + s * e[c]));
        }
      })(t, s, e);
  }
  function Le(t, e, i) {
    return Math.max(Math.min(t, i), e);
  }
  function Re(t, e, i, n, o) {
    let s, a, r, l;
    if (
      (e.spanGaps && (t = t.filter((t) => !t.skip)),
      "monotone" === e.cubicInterpolationMode)
    )
      Ae(t, o);
    else {
      let i = n ? t[t.length - 1] : t[0];
      for (s = 0, a = t.length; s < a; ++s)
        (r = t[s]),
          (l = Te(i, r, t[Math.min(s + 1, a - (n ? 0 : 1)) % a], e.tension)),
          (r.cp1x = l.previous.x),
          (r.cp1y = l.previous.y),
          (r.cp2x = l.next.x),
          (r.cp2y = l.next.y),
          (i = r);
    }
    e.capBezierPoints &&
      (function (t, e) {
        let i,
          n,
          o,
          s,
          a,
          r = qt(t[0], e);
        for (i = 0, n = t.length; i < n; ++i)
          (a = s),
            (s = r),
            (r = i < n - 1 && qt(t[i + 1], e)),
            s &&
              ((o = t[i]),
              a &&
                ((o.cp1x = Le(o.cp1x, e.left, e.right)),
                (o.cp1y = Le(o.cp1y, e.top, e.bottom))),
              r &&
                ((o.cp2x = Le(o.cp2x, e.left, e.right)),
                (o.cp2y = Le(o.cp2y, e.top, e.bottom))));
      })(t, i);
  }
  function Ee(t) {
    let e = t.parentNode;
    return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
  }
  function Ie(t, e, i) {
    let n;
    return (
      "string" == typeof t
        ? ((n = parseInt(t, 10)),
          -1 !== t.indexOf("%") && (n = (n / 100) * e.parentNode[i]))
        : (n = t),
      n
    );
  }
  const Fe = (t) => window.getComputedStyle(t, null);
  const ze = ["top", "right", "bottom", "left"];
  function Ve(t, e, i) {
    const n = {};
    i = i ? "-" + i : "";
    for (let o = 0; o < 4; o++) {
      const s = ze[o];
      n[s] = parseFloat(t[e + "-" + s + i]) || 0;
    }
    return (n.width = n.left + n.right), (n.height = n.top + n.bottom), n;
  }
  function Be(t, e) {
    const { canvas: i, currentDevicePixelRatio: n } = e,
      o = Fe(i),
      s = "border-box" === o.boxSizing,
      a = Ve(o, "padding"),
      r = Ve(o, "border", "width"),
      {
        x: l,
        y: c,
        box: h,
      } = (function (t, e) {
        const i = t.native || t,
          n = i.touches,
          o = n && n.length ? n[0] : i,
          { offsetX: s, offsetY: a } = o;
        let r,
          l,
          c = !1;
        if (
          ((t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot))(
            s,
            a,
            i.target
          )
        )
          (r = s), (l = a);
        else {
          const t = e.getBoundingClientRect();
          (r = o.clientX - t.left), (l = o.clientY - t.top), (c = !0);
        }
        return { x: r, y: l, box: c };
      })(t, i),
      d = a.left + (h && r.left),
      u = a.top + (h && r.top);
    let { width: g, height: f } = e;
    return (
      s && ((g -= a.width + r.width), (f -= a.height + r.height)),
      {
        x: Math.round((((l - d) / g) * i.width) / n),
        y: Math.round((((c - u) / f) * i.height) / n),
      }
    );
  }
  const Ne = (t) => Math.round(10 * t) / 10;
  function je(t, e, i, n) {
    const o = Fe(t),
      s = Ve(o, "margin"),
      a = Ie(o.maxWidth, t, "clientWidth") || L,
      r = Ie(o.maxHeight, t, "clientHeight") || L,
      l = (function (t, e, i) {
        let n, o;
        if (void 0 === e || void 0 === i) {
          const s = Ee(t);
          if (s) {
            const t = s.getBoundingClientRect(),
              a = Fe(s),
              r = Ve(a, "border", "width"),
              l = Ve(a, "padding");
            (e = t.width - l.width - r.width),
              (i = t.height - l.height - r.height),
              (n = Ie(a.maxWidth, s, "clientWidth")),
              (o = Ie(a.maxHeight, s, "clientHeight"));
          } else (e = t.clientWidth), (i = t.clientHeight);
        }
        return { width: e, height: i, maxWidth: n || L, maxHeight: o || L };
      })(t, e, i);
    let { width: c, height: h } = l;
    if ("content-box" === o.boxSizing) {
      const t = Ve(o, "border", "width"),
        e = Ve(o, "padding");
      (c -= e.width + t.width), (h -= e.height + t.height);
    }
    return (
      (c = Math.max(0, c - s.width)),
      (h = Math.max(0, n ? Math.floor(c / n) : h - s.height)),
      (c = Ne(Math.min(c, a, l.maxWidth))),
      (h = Ne(Math.min(h, r, l.maxHeight))),
      c && !h && (h = Ne(c / 2)),
      { width: c, height: h }
    );
  }
  function We(t, e, i) {
    const n = e || 1,
      o = Math.floor(t.height * n),
      s = Math.floor(t.width * n);
    (t.height = o / n), (t.width = s / n);
    const a = t.canvas;
    return (
      a.style &&
        (i || (!a.style.height && !a.style.width)) &&
        ((a.style.height = `${t.height}px`), (a.style.width = `${t.width}px`)),
      (t.currentDevicePixelRatio !== n || a.height !== o || a.width !== s) &&
        ((t.currentDevicePixelRatio = n),
        (a.height = o),
        (a.width = s),
        t.ctx.setTransform(n, 0, 0, n, 0, 0),
        !0)
    );
  }
  const He = (function () {
    let t = !1;
    try {
      const e = {
        get passive() {
          return (t = !0), !1;
        },
      };
      window.addEventListener("test", null, e),
        window.removeEventListener("test", null, e);
    } catch (t) {}
    return t;
  })();
  function $e(t, e) {
    const i = (function (t, e) {
        return Fe(t).getPropertyValue(e);
      })(t, e),
      n = i && i.match(/^(\d+)(\.\d+)?px$/);
    return n ? +n[1] : void 0;
  }
  function Ye(t, e, i, n) {
    return { x: t.x + i * (e.x - t.x), y: t.y + i * (e.y - t.y) };
  }
  function qe(t, e, i, n) {
    return {
      x: t.x + i * (e.x - t.x),
      y:
        "middle" === n
          ? i < 0.5
            ? t.y
            : e.y
          : "after" === n
          ? i < 1
            ? t.y
            : e.y
          : i > 0
          ? e.y
          : t.y,
    };
  }
  function Ue(t, e, i, n) {
    const o = { x: t.cp2x, y: t.cp2y },
      s = { x: e.cp1x, y: e.cp1y },
      a = Ye(t, o, i),
      r = Ye(o, s, i),
      l = Ye(s, e, i),
      c = Ye(a, r, i),
      h = Ye(r, l, i);
    return Ye(c, h, i);
  }
  const Xe = new Map();
  function Ke(t, e, i) {
    return (function (t, e) {
      e = e || {};
      const i = t + JSON.stringify(e);
      let n = Xe.get(i);
      return n || ((n = new Intl.NumberFormat(t, e)), Xe.set(i, n)), n;
    })(e, i).format(t);
  }
  function Ge(t, e, i) {
    return t
      ? (function (t, e) {
          return {
            x: (i) => t + t + e - i,
            setWidth(t) {
              e = t;
            },
            textAlign: (t) =>
              "center" === t ? t : "right" === t ? "left" : "right",
            xPlus: (t, e) => t - e,
            leftForLtr: (t, e) => t - e,
          };
        })(e, i)
      : {
          x: (t) => t,
          setWidth(t) {},
          textAlign: (t) => t,
          xPlus: (t, e) => t + e,
          leftForLtr: (t, e) => t,
        };
  }
  function Ze(t, e) {
    let i, n;
    ("ltr" !== e && "rtl" !== e) ||
      ((i = t.canvas.style),
      (n = [
        i.getPropertyValue("direction"),
        i.getPropertyPriority("direction"),
      ]),
      i.setProperty("direction", e, "important"),
      (t.prevTextDirection = n));
  }
  function Je(t, e) {
    void 0 !== e &&
      (delete t.prevTextDirection,
      t.canvas.style.setProperty("direction", e[0], e[1]));
  }
  function Qe(t) {
    return "angle" === t
      ? { between: K, compare: U, normalize: X }
      : {
          between: (t, e, i) => t >= Math.min(e, i) && t <= Math.max(i, e),
          compare: (t, e) => t - e,
          normalize: (t) => t,
        };
  }
  function ti({ start: t, end: e, count: i, loop: n, style: o }) {
    return {
      start: t % i,
      end: e % i,
      loop: n && (e - t + 1) % i == 0,
      style: o,
    };
  }
  function ei(t, e, i) {
    if (!i) return [t];
    const { property: n, start: o, end: s } = i,
      a = e.length,
      { compare: r, between: l, normalize: c } = Qe(n),
      {
        start: h,
        end: d,
        loop: u,
        style: g,
      } = (function (t, e, i) {
        const { property: n, start: o, end: s } = i,
          { between: a, normalize: r } = Qe(n),
          l = e.length;
        let c,
          h,
          { start: d, end: u, loop: g } = t;
        if (g) {
          for (
            d += l, u += l, c = 0, h = l;
            c < h && a(r(e[d % l][n]), o, s);
            ++c
          )
            d--, u--;
          (d %= l), (u %= l);
        }
        return u < d && (u += l), { start: d, end: u, loop: g, style: t.style };
      })(t, e, i),
      f = [];
    let p,
      m,
      x,
      b = !1,
      _ = null;
    const y = () => b || (l(o, x, p) && 0 !== r(o, x)),
      v = () => !b || 0 === r(s, p) || l(s, x, p);
    for (let t = h, i = h; t <= d; ++t)
      (m = e[t % a]),
        m.skip ||
          ((p = c(m[n])),
          p !== x &&
            ((b = l(p, o, s)),
            null === _ && y() && (_ = 0 === r(p, o) ? t : i),
            null !== _ &&
              v() &&
              (f.push(ti({ start: _, end: t, loop: u, count: a, style: g })),
              (_ = null)),
            (i = t),
            (x = p)));
    return (
      null !== _ &&
        f.push(ti({ start: _, end: d, loop: u, count: a, style: g })),
      f
    );
  }
  function ii(t, e) {
    const i = [],
      n = t.segments;
    for (let o = 0; o < n.length; o++) {
      const s = ei(n[o], t.points, e);
      s.length && i.push(...s);
    }
    return i;
  }
  function ni(t, e, i) {
    return i && i.setContext && e
      ? (function (t, e, i) {
          const n = e.length,
            o = [];
          let s = t[0].start,
            a = s;
          for (const r of t) {
            let t,
              l,
              c = e[s % n];
            for (a = s + 1; a <= r.end; a++) {
              const h = e[a % n];
              (l = oi(i.setContext({ type: "segment", p0: c, p1: h }))),
                si(l, t) &&
                  (o.push({ start: s, end: a - 1, loop: r.loop, style: t }),
                  (t = l),
                  (s = a - 1)),
                (c = h),
                (t = l);
            }
            s < a - 1 &&
              (o.push({ start: s, end: a - 1, loop: r.loop, style: l }),
              (s = a - 1));
          }
          return o;
        })(t, e, i)
      : t;
  }
  function oi(t) {
    return {
      backgroundColor: t.backgroundColor,
      borderCapStyle: t.borderCapStyle,
      borderDash: t.borderDash,
      borderDashOffset: t.borderDashOffset,
      borderJoinStyle: t.borderJoinStyle,
      borderWidth: t.borderWidth,
      borderColor: t.borderColor,
    };
  }
  function si(t, e) {
    return e && JSON.stringify(t) !== JSON.stringify(e);
  }
  var ai = new (class {
    constructor() {
      (this._request = null),
        (this._charts = new Map()),
        (this._running = !1),
        (this._lastDate = void 0);
    }
    _notify(t, e, i, n) {
      const o = e.listeners[n],
        s = e.duration;
      o.forEach((n) =>
        n({
          chart: t,
          initial: e.initial,
          numSteps: s,
          currentStep: Math.min(i - e.start, s),
        })
      );
    }
    _refresh() {
      const t = this;
      t._request ||
        ((t._running = !0),
        (t._request = n.call(window, () => {
          t._update(), (t._request = null), t._running && t._refresh();
        })));
    }
    _update(t = Date.now()) {
      const e = this;
      let i = 0;
      e._charts.forEach((n, o) => {
        if (!n.running || !n.items.length) return;
        const s = n.items;
        let a,
          r = s.length - 1,
          l = !1;
        for (; r >= 0; --r)
          (a = s[r]),
            a._active
              ? (a._total > n.duration && (n.duration = a._total),
                a.tick(t),
                (l = !0))
              : ((s[r] = s[s.length - 1]), s.pop());
        l && (o.draw(), e._notify(o, n, t, "progress")),
          s.length ||
            ((n.running = !1),
            e._notify(o, n, t, "complete"),
            (n.initial = !1)),
          (i += s.length);
      }),
        (e._lastDate = t),
        0 === i && (e._running = !1);
    }
    _getAnims(t) {
      const e = this._charts;
      let i = e.get(t);
      return (
        i ||
          ((i = {
            running: !1,
            initial: !0,
            items: [],
            listeners: { complete: [], progress: [] },
          }),
          e.set(t, i)),
        i
      );
    }
    listen(t, e, i) {
      this._getAnims(t).listeners[e].push(i);
    }
    add(t, e) {
      e && e.length && this._getAnims(t).items.push(...e);
    }
    has(t) {
      return this._getAnims(t).items.length > 0;
    }
    start(t) {
      const e = this._charts.get(t);
      e &&
        ((e.running = !0),
        (e.start = Date.now()),
        (e.duration = e.items.reduce((t, e) => Math.max(t, e._duration), 0)),
        this._refresh());
    }
    running(t) {
      if (!this._running) return !1;
      const e = this._charts.get(t);
      return !!(e && e.running && e.items.length);
    }
    stop(t) {
      const e = this._charts.get(t);
      if (!e || !e.items.length) return;
      const i = e.items;
      let n = i.length - 1;
      for (; n >= 0; --n) i[n].cancel();
      (e.items = []), this._notify(t, e, Date.now(), "complete");
    }
    remove(t) {
      return this._charts.delete(t);
    }
  })();
  const ri = "transparent",
    li = {
      boolean: (t, e, i) => (i > 0.5 ? e : t),
      color(t, e, i) {
        const n = Et(t || ri),
          o = n.valid && Et(e || ri);
        return o && o.valid ? o.mix(n, i).hexString() : e;
      },
      number: (t, e, i) => t + (e - t) * i,
    };
  class ci {
    constructor(t, e, i, n) {
      const o = e[i];
      n = re([t.to, n, o, t.from]);
      const s = re([t.from, o, n]);
      (this._active = !0),
        (this._fn = t.fn || li[t.type || typeof s]),
        (this._easing = tt[t.easing] || tt.linear),
        (this._start = Math.floor(Date.now() + (t.delay || 0))),
        (this._duration = this._total = Math.floor(t.duration)),
        (this._loop = !!t.loop),
        (this._target = e),
        (this._prop = i),
        (this._from = s),
        (this._to = n),
        (this._promises = void 0);
    }
    active() {
      return this._active;
    }
    update(t, e, i) {
      const n = this;
      if (n._active) {
        n._notify(!1);
        const o = n._target[n._prop],
          s = i - n._start,
          a = n._duration - s;
        (n._start = i),
          (n._duration = Math.floor(Math.max(a, t.duration))),
          (n._total += s),
          (n._loop = !!t.loop),
          (n._to = re([t.to, e, o, t.from])),
          (n._from = re([t.from, o, e]));
      }
    }
    cancel() {
      const t = this;
      t._active && (t.tick(Date.now()), (t._active = !1), t._notify(!1));
    }
    tick(t) {
      const e = this,
        i = t - e._start,
        n = e._duration,
        o = e._prop,
        s = e._from,
        a = e._loop,
        r = e._to;
      let l;
      if (((e._active = s !== r && (a || i < n)), !e._active))
        return (e._target[o] = r), void e._notify(!0);
      i < 0
        ? (e._target[o] = s)
        : ((l = (i / n) % 2),
          (l = a && l > 1 ? 2 - l : l),
          (l = e._easing(Math.min(1, Math.max(0, l)))),
          (e._target[o] = e._fn(s, r, l)));
    }
    wait() {
      const t = this._promises || (this._promises = []);
      return new Promise((e, i) => {
        t.push({ res: e, rej: i });
      });
    }
    _notify(t) {
      const e = t ? "res" : "rej",
        i = this._promises || [];
      for (let t = 0; t < i.length; t++) i[t][e]();
    }
  }
  Nt.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  });
  const hi = Object.keys(Nt.animation);
  Nt.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => "onProgress" !== t && "onComplete" !== t && "fn" !== t,
  }),
    Nt.set("animations", {
      colors: {
        type: "color",
        properties: ["color", "borderColor", "backgroundColor"],
      },
      numbers: {
        type: "number",
        properties: ["x", "y", "borderWidth", "radius", "tension"],
      },
    }),
    Nt.describe("animations", { _fallback: "animation" }),
    Nt.set("transitions", {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: "transparent" },
          visible: { type: "boolean", duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: "transparent" },
          visible: { type: "boolean", easing: "linear", fn: (t) => 0 | t },
        },
      },
    });
  class di {
    constructor(t, e) {
      (this._chart = t), (this._properties = new Map()), this.configure(e);
    }
    configure(t) {
      if (!h(t)) return;
      const e = this._properties;
      Object.getOwnPropertyNames(t).forEach((i) => {
        const n = t[i];
        if (!h(n)) return;
        const o = {};
        for (const t of hi) o[t] = n[t];
        ((c(n.properties) && n.properties) || [i]).forEach((t) => {
          (t !== i && e.has(t)) || e.set(t, o);
        });
      });
    }
    _animateOptions(t, e) {
      const i = e.options,
        n = (function (t, e) {
          if (!e) return;
          let i = t.options;
          if (!i) return void (t.options = e);
          i.$shared &&
            (t.options = i =
              Object.assign({}, i, { $shared: !1, $animations: {} }));
          return i;
        })(t, i);
      if (!n) return [];
      const o = this._createAnimations(n, i);
      return (
        i.$shared &&
          (function (t, e) {
            const i = [],
              n = Object.keys(e);
            for (let e = 0; e < n.length; e++) {
              const o = t[n[e]];
              o && o.active() && i.push(o.wait());
            }
            return Promise.all(i);
          })(t.options.$animations, i).then(
            () => {
              t.options = i;
            },
            () => {}
          ),
        o
      );
    }
    _createAnimations(t, e) {
      const i = this._properties,
        n = [],
        o = t.$animations || (t.$animations = {}),
        s = Object.keys(e),
        a = Date.now();
      let r;
      for (r = s.length - 1; r >= 0; --r) {
        const l = s[r];
        if ("$" === l.charAt(0)) continue;
        if ("options" === l) {
          n.push(...this._animateOptions(t, e));
          continue;
        }
        const c = e[l];
        let h = o[l];
        const d = i.get(l);
        if (h) {
          if (d && h.active()) {
            h.update(d, c, a);
            continue;
          }
          h.cancel();
        }
        d && d.duration
          ? ((o[l] = h = new ci(d, t, l, c)), n.push(h))
          : (t[l] = c);
      }
      return n;
    }
    update(t, e) {
      if (0 === this._properties.size) return void Object.assign(t, e);
      const i = this._createAnimations(t, e);
      return i.length ? (ai.add(this._chart, i), !0) : void 0;
    }
  }
  function ui(t, e) {
    const i = (t && t.options) || {},
      n = i.reverse,
      o = void 0 === i.min ? e : 0,
      s = void 0 === i.max ? e : 0;
    return { start: n ? s : o, end: n ? o : s };
  }
  function gi(t, e) {
    const i = [],
      n = t._getSortedDatasetMetas(e);
    let o, s;
    for (o = 0, s = n.length; o < s; ++o) i.push(n[o].index);
    return i;
  }
  function fi(t, e, i, n) {
    const o = t.keys,
      s = "single" === n.mode;
    let a, r, l, c;
    if (null !== e) {
      for (a = 0, r = o.length; a < r; ++a) {
        if (((l = +o[a]), l === i)) {
          if (n.all) continue;
          break;
        }
        (c = t.values[l]), d(c) && (s || 0 === e || V(e) === V(c)) && (e += c);
      }
      return e;
    }
  }
  function pi(t, e) {
    const i = t && t.options.stacked;
    return i || (void 0 === i && void 0 !== e.stack);
  }
  function mi(t, e, i) {
    const n = t[e] || (t[e] = {});
    return n[i] || (n[i] = {});
  }
  function xi(t, e, i) {
    for (const n of e.getMatchingVisibleMetas("bar").reverse()) {
      const e = t[n.index];
      if ((i && e > 0) || (!i && e < 0)) return n.index;
    }
    return null;
  }
  function bi(t, e) {
    const { chart: i, _cachedMeta: n } = t,
      o = i._stacks || (i._stacks = {}),
      { iScale: s, vScale: a, index: r } = n,
      l = s.axis,
      c = a.axis,
      h = (function (t, e, i) {
        return `${t.id}.${e.id}.${i.stack || i.type}`;
      })(s, a, n),
      d = e.length;
    let u;
    for (let t = 0; t < d; ++t) {
      const i = e[t],
        { [l]: n, [c]: s } = i;
      (u = (i._stacks || (i._stacks = {}))[c] = mi(o, h, n)),
        (u[r] = s),
        (u._top = xi(u, a, !0)),
        (u._bottom = xi(u, a, !1));
    }
  }
  function _i(t, e) {
    const i = t.scales;
    return Object.keys(i)
      .filter((t) => i[t].axis === e)
      .shift();
  }
  function yi(t, e) {
    e = e || t._parsed;
    for (const i of e) {
      const e = i._stacks;
      if (!e || void 0 === e[t.vScale.id] || void 0 === e[t.vScale.id][t.index])
        return;
      delete e[t.vScale.id][t.index];
    }
  }
  const vi = (t) => "reset" === t || "none" === t,
    Mi = (t, e) => (e ? t : Object.assign({}, t));
  class wi {
    constructor(t, e) {
      (this.chart = t),
        (this._ctx = t.ctx),
        (this.index = e),
        (this._cachedDataOpts = {}),
        (this._cachedMeta = this.getMeta()),
        (this._type = this._cachedMeta.type),
        (this.options = void 0),
        (this._parsing = !1),
        (this._data = void 0),
        (this._objectData = void 0),
        (this._sharedOptions = void 0),
        (this._drawStart = void 0),
        (this._drawCount = void 0),
        (this.enableOptionSharing = !1),
        (this.$context = void 0),
        (this._syncList = []),
        this.initialize();
    }
    initialize() {
      const t = this,
        e = t._cachedMeta;
      t.configure(),
        t.linkScales(),
        (e._stacked = pi(e.vScale, e)),
        t.addElements();
    }
    updateIndex(t) {
      this.index !== t && yi(this._cachedMeta), (this.index = t);
    }
    linkScales() {
      const t = this,
        e = t.chart,
        i = t._cachedMeta,
        n = t.getDataset(),
        o = (t, e, i, n) => ("x" === t ? e : "r" === t ? n : i),
        s = (i.xAxisID = g(n.xAxisID, _i(e, "x"))),
        a = (i.yAxisID = g(n.yAxisID, _i(e, "y"))),
        r = (i.rAxisID = g(n.rAxisID, _i(e, "r"))),
        l = i.indexAxis,
        c = (i.iAxisID = o(l, s, a, r)),
        h = (i.vAxisID = o(l, a, s, r));
      (i.xScale = t.getScaleForId(s)),
        (i.yScale = t.getScaleForId(a)),
        (i.rScale = t.getScaleForId(r)),
        (i.iScale = t.getScaleForId(c)),
        (i.vScale = t.getScaleForId(h));
    }
    getDataset() {
      return this.chart.data.datasets[this.index];
    }
    getMeta() {
      return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(t) {
      return this.chart.scales[t];
    }
    _getOtherScale(t) {
      const e = this._cachedMeta;
      return t === e.iScale ? e.vScale : e.iScale;
    }
    reset() {
      this._update("reset");
    }
    _destroy() {
      const t = this._cachedMeta;
      this._data && ue(this._data, this), t._stacked && yi(t);
    }
    _dataCheck() {
      const t = this,
        e = t.getDataset(),
        i = e.data || (e.data = []),
        n = t._data;
      if (h(i))
        t._data = (function (t) {
          const e = Object.keys(t),
            i = new Array(e.length);
          let n, o, s;
          for (n = 0, o = e.length; n < o; ++n)
            (s = e[n]), (i[n] = { x: s, y: t[s] });
          return i;
        })(i);
      else if (n !== i) {
        if (n) {
          ue(n, t);
          const e = t._cachedMeta;
          yi(e), (e._parsed = []);
        }
        i &&
          Object.isExtensible(i) &&
          ((s = t),
          (o = i)._chartjs
            ? o._chartjs.listeners.push(s)
            : (Object.defineProperty(o, "_chartjs", {
                configurable: !0,
                enumerable: !1,
                value: { listeners: [s] },
              }),
              de.forEach((t) => {
                const e = "_onData" + P(t),
                  i = o[t];
                Object.defineProperty(o, t, {
                  configurable: !0,
                  enumerable: !1,
                  value(...t) {
                    const n = i.apply(this, t);
                    return (
                      o._chartjs.listeners.forEach((i) => {
                        "function" == typeof i[e] && i[e](...t);
                      }),
                      n
                    );
                  },
                });
              }))),
          (t._syncList = []),
          (t._data = i);
      }
      var o, s;
    }
    addElements() {
      const t = this,
        e = t._cachedMeta;
      t._dataCheck(),
        t.datasetElementType && (e.dataset = new t.datasetElementType());
    }
    buildOrUpdateElements(t) {
      const e = this,
        i = e._cachedMeta,
        n = e.getDataset();
      let o = !1;
      e._dataCheck();
      const s = i._stacked;
      (i._stacked = pi(i.vScale, i)),
        i.stack !== n.stack && ((o = !0), yi(i), (i.stack = n.stack)),
        e._resyncElements(t),
        (o || s !== i._stacked) && bi(e, i._parsed);
    }
    configure() {
      const t = this,
        e = t.chart.config,
        i = e.datasetScopeKeys(t._type),
        n = e.getOptionScopes(t.getDataset(), i, !0);
      (t.options = e.createResolver(n, t.getContext())),
        (t._parsing = t.options.parsing);
    }
    parse(t, e) {
      const i = this,
        { _cachedMeta: n, _data: o } = i,
        { iScale: s, _stacked: a } = n,
        r = s.axis;
      let l,
        d,
        u,
        g = (0 === t && e === o.length) || n._sorted,
        f = t > 0 && n._parsed[t - 1];
      if (!1 === i._parsing) (n._parsed = o), (n._sorted = !0), (u = o);
      else {
        u = c(o[t])
          ? i.parseArrayData(n, o, t, e)
          : h(o[t])
          ? i.parseObjectData(n, o, t, e)
          : i.parsePrimitiveData(n, o, t, e);
        const s = () => null === d[r] || (f && d[r] < f[r]);
        for (l = 0; l < e; ++l)
          (n._parsed[l + t] = d = u[l]), g && (s() && (g = !1), (f = d));
        n._sorted = g;
      }
      a && bi(i, u);
    }
    parsePrimitiveData(t, e, i, n) {
      const { iScale: o, vScale: s } = t,
        a = o.axis,
        r = s.axis,
        l = o.getLabels(),
        c = o === s,
        h = new Array(n);
      let d, u, g;
      for (d = 0, u = n; d < u; ++d)
        (g = d + i),
          (h[d] = { [a]: c || o.parse(l[g], g), [r]: s.parse(e[g], g) });
      return h;
    }
    parseArrayData(t, e, i, n) {
      const { xScale: o, yScale: s } = t,
        a = new Array(n);
      let r, l, c, h;
      for (r = 0, l = n; r < l; ++r)
        (c = r + i),
          (h = e[c]),
          (a[r] = { x: o.parse(h[0], c), y: s.parse(h[1], c) });
      return a;
    }
    parseObjectData(t, e, i, n) {
      const { xScale: o, yScale: s } = t,
        { xAxisKey: a = "x", yAxisKey: r = "y" } = this._parsing,
        l = new Array(n);
      let c, h, d, u;
      for (c = 0, h = n; c < h; ++c)
        (d = c + i),
          (u = e[d]),
          (l[c] = { x: o.parse(S(u, a), d), y: s.parse(S(u, r), d) });
      return l;
    }
    getParsed(t) {
      return this._cachedMeta._parsed[t];
    }
    getDataElement(t) {
      return this._cachedMeta.data[t];
    }
    applyStack(t, e, i) {
      const n = this.chart,
        o = this._cachedMeta,
        s = e[t.axis];
      return fi({ keys: gi(n, !0), values: e._stacks[t.axis] }, s, o.index, {
        mode: i,
      });
    }
    updateRangeFromParsed(t, e, i, n) {
      const o = i[e.axis];
      let s = null === o ? NaN : o;
      const a = n && i._stacks[e.axis];
      n &&
        a &&
        ((n.values = a),
        (t.min = Math.min(t.min, s)),
        (t.max = Math.max(t.max, s)),
        (s = fi(n, o, this._cachedMeta.index, { all: !0 }))),
        (t.min = Math.min(t.min, s)),
        (t.max = Math.max(t.max, s));
    }
    getMinMax(t, e) {
      const i = this,
        n = i._cachedMeta,
        o = n._parsed,
        s = n._sorted && t === n.iScale,
        a = o.length,
        r = i._getOtherScale(t),
        l = e && n._stacked && { keys: gi(i.chart, !0), values: null },
        c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
        { min: h, max: u } = (function (t) {
          const {
            min: e,
            max: i,
            minDefined: n,
            maxDefined: o,
          } = t.getUserBounds();
          return {
            min: n ? e : Number.NEGATIVE_INFINITY,
            max: o ? i : Number.POSITIVE_INFINITY,
          };
        })(r);
      let g, f, p, m;
      function x() {
        return (
          (p = o[g]), (f = p[t.axis]), (m = p[r.axis]), !d(f) || h > m || u < m
        );
      }
      for (
        g = 0;
        g < a && (x() || (i.updateRangeFromParsed(c, t, p, l), !s));
        ++g
      );
      if (s)
        for (g = a - 1; g >= 0; --g)
          if (!x()) {
            i.updateRangeFromParsed(c, t, p, l);
            break;
          }
      return c;
    }
    getAllParsedValues(t) {
      const e = this._cachedMeta._parsed,
        i = [];
      let n, o, s;
      for (n = 0, o = e.length; n < o; ++n)
        (s = e[n][t.axis]), d(s) && i.push(s);
      return i;
    }
    getMaxOverflow() {
      return !1;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        i = e.iScale,
        n = e.vScale,
        o = this.getParsed(t);
      return {
        label: i ? "" + i.getLabelForValue(o[i.axis]) : "",
        value: n ? "" + n.getLabelForValue(o[n.axis]) : "",
      };
    }
    _update(t) {
      const e = this,
        i = e._cachedMeta;
      e.configure(),
        (e._cachedDataOpts = {}),
        e.update(t || "default"),
        (i._clip = (function (t) {
          let e, i, n, o;
          return (
            h(t)
              ? ((e = t.top), (i = t.right), (n = t.bottom), (o = t.left))
              : (e = i = n = o = t),
            { top: e, right: i, bottom: n, left: o }
          );
        })(
          g(
            e.options.clip,
            (function (t, e, i) {
              if (!1 === i) return !1;
              const n = ui(t, i),
                o = ui(e, i);
              return {
                top: o.end,
                right: n.end,
                bottom: o.start,
                left: n.start,
              };
            })(i.xScale, i.yScale, e.getMaxOverflow())
          )
        ));
    }
    update(t) {}
    draw() {
      const t = this,
        e = t._ctx,
        i = t.chart,
        n = t._cachedMeta,
        o = n.data || [],
        s = i.chartArea,
        a = [],
        r = t._drawStart || 0,
        l = t._drawCount || o.length - r;
      let c;
      for (n.dataset && n.dataset.draw(e, s, r, l), c = r; c < r + l; ++c) {
        const t = o[c];
        t.active ? a.push(t) : t.draw(e, s);
      }
      for (c = 0; c < a.length; ++c) a[c].draw(e, s);
    }
    getStyle(t, e) {
      const i = e ? "active" : "default";
      return void 0 === t && this._cachedMeta.dataset
        ? this.resolveDatasetElementOptions(i)
        : this.resolveDataElementOptions(t || 0, i);
    }
    getContext(t, e, i) {
      const n = this,
        o = n.getDataset();
      let s;
      if (t >= 0 && t < n._cachedMeta.data.length) {
        const e = n._cachedMeta.data[t];
        (s =
          e.$context ||
          (e.$context = (function (t, e, i) {
            return Object.assign(Object.create(t), {
              active: !1,
              dataIndex: e,
              parsed: void 0,
              raw: void 0,
              element: i,
              index: e,
              mode: "default",
              type: "data",
            });
          })(n.getContext(), t, e))),
          (s.parsed = n.getParsed(t)),
          (s.raw = o.data[t]),
          (s.index = s.dataIndex = t);
      } else
        (s =
          n.$context ||
          (n.$context = (function (t, e) {
            return Object.assign(Object.create(t), {
              active: !1,
              dataset: void 0,
              datasetIndex: e,
              index: e,
              mode: "default",
              type: "dataset",
            });
          })(n.chart.getContext(), n.index))),
          (s.dataset = o),
          (s.index = s.datasetIndex = n.index);
      return (s.active = !!e), (s.mode = i), s;
    }
    resolveDatasetElementOptions(t) {
      return this._resolveElementOptions(this.datasetElementType.id, t);
    }
    resolveDataElementOptions(t, e) {
      return this._resolveElementOptions(this.dataElementType.id, e, t);
    }
    _resolveElementOptions(t, e = "default", i) {
      const n = this,
        o = "active" === e,
        s = n._cachedDataOpts,
        a = t + "-" + e,
        r = s[a],
        l = n.enableOptionSharing && O(i);
      if (r) return Mi(r, l);
      const c = n.chart.config,
        h = c.datasetElementScopeKeys(n._type, t),
        d = o ? [`${t}Hover`, "hover", t, ""] : [t, ""],
        u = c.getOptionScopes(n.getDataset(), h),
        g = Object.keys(Nt.elements[t]),
        f = c.resolveNamedOptions(u, g, () => n.getContext(i, o), d);
      return (
        f.$shared && ((f.$shared = l), (s[a] = Object.freeze(Mi(f, l)))), f
      );
    }
    _resolveAnimations(t, e, i) {
      const n = this,
        o = n.chart,
        s = n._cachedDataOpts,
        a = `animation-${e}`,
        r = s[a];
      if (r) return r;
      let l;
      if (!1 !== o.options.animation) {
        const o = n.chart.config,
          s = o.datasetAnimationScopeKeys(n._type, e),
          a = o.getOptionScopes(n.getDataset(), s);
        l = o.createResolver(a, n.getContext(t, i, e));
      }
      const c = new di(o, l && l.animations);
      return l && l._cacheable && (s[a] = Object.freeze(c)), c;
    }
    getSharedOptions(t) {
      if (t.$shared)
        return (
          this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
        );
    }
    includeOptions(t, e) {
      return !e || vi(t) || this.chart._animationsDisabled;
    }
    updateElement(t, e, i, n) {
      vi(n) ? Object.assign(t, i) : this._resolveAnimations(e, n).update(t, i);
    }
    updateSharedOptions(t, e, i) {
      t && !vi(e) && this._resolveAnimations(void 0, e).update(t, i);
    }
    _setStyle(t, e, i, n) {
      t.active = n;
      const o = this.getStyle(e, n);
      this._resolveAnimations(e, i, n).update(t, {
        options: (!n && this.getSharedOptions(o)) || o,
      });
    }
    removeHoverStyle(t, e, i) {
      this._setStyle(t, i, "active", !1);
    }
    setHoverStyle(t, e, i) {
      this._setStyle(t, i, "active", !0);
    }
    _removeDatasetHoverStyle() {
      const t = this._cachedMeta.dataset;
      t && this._setStyle(t, void 0, "active", !1);
    }
    _setDatasetHoverStyle() {
      const t = this._cachedMeta.dataset;
      t && this._setStyle(t, void 0, "active", !0);
    }
    _resyncElements(t) {
      const e = this,
        i = e._data,
        n = e._cachedMeta.data;
      for (const [t, i, n] of e._syncList) e[t](i, n);
      e._syncList = [];
      const o = n.length,
        s = i.length,
        a = Math.min(s, o);
      s > o
        ? e._insertElements(o, s - o, t)
        : s < o && e._removeElements(s, o - s),
        a && e.parse(0, a);
    }
    _insertElements(t, e, i = !0) {
      const n = this,
        o = n._cachedMeta,
        s = o.data,
        a = t + e;
      let r;
      const l = (t) => {
        for (t.length += e, r = t.length - 1; r >= a; r--) t[r] = t[r - e];
      };
      for (l(s), r = t; r < a; ++r) s[r] = new n.dataElementType();
      n._parsing && l(o._parsed),
        n.parse(t, e),
        i && n.updateElements(s, t, e, "reset");
    }
    updateElements(t, e, i, n) {}
    _removeElements(t, e) {
      const i = this._cachedMeta;
      if (this._parsing) {
        const n = i._parsed.splice(t, e);
        i._stacked && yi(i, n);
      }
      i.data.splice(t, e);
    }
    _onDataPush() {
      const t = arguments.length;
      this._syncList.push([
        "_insertElements",
        this.getDataset().data.length - t,
        t,
      ]);
    }
    _onDataPop() {
      this._syncList.push([
        "_removeElements",
        this._cachedMeta.data.length - 1,
        1,
      ]);
    }
    _onDataShift() {
      this._syncList.push(["_removeElements", 0, 1]);
    }
    _onDataSplice(t, e) {
      this._syncList.push(["_removeElements", t, e]),
        this._syncList.push(["_insertElements", t, arguments.length - 2]);
    }
    _onDataUnshift() {
      this._syncList.push(["_insertElements", 0, arguments.length]);
    }
  }
  function ki(t) {
    const e = (function (t) {
      if (!t._cache.$bar) {
        const e = t.getMatchingVisibleMetas("bar");
        let i = [];
        for (let n = 0, o = e.length; n < o; n++)
          i = i.concat(e[n].controller.getAllParsedValues(t));
        t._cache.$bar = ge(i.sort((t, e) => t - e));
      }
      return t._cache.$bar;
    })(t);
    let i,
      n,
      o,
      s,
      a = t._length;
    const r = () => {
      32767 !== o &&
        -32768 !== o &&
        (O(s) && (a = Math.min(a, Math.abs(o - s) || a)), (s = o));
    };
    for (i = 0, n = e.length; i < n; ++i) (o = t.getPixelForValue(e[i])), r();
    for (s = void 0, i = 0, n = t.ticks.length; i < n; ++i)
      (o = t.getPixelForTick(i)), r();
    return a;
  }
  function Si(t, e, i, n) {
    return (
      c(t)
        ? (function (t, e, i, n) {
            const o = i.parse(t[0], n),
              s = i.parse(t[1], n),
              a = Math.min(o, s),
              r = Math.max(o, s);
            let l = a,
              c = r;
            Math.abs(a) > Math.abs(r) && ((l = r), (c = a)),
              (e[i.axis] = c),
              (e._custom = {
                barStart: l,
                barEnd: c,
                start: o,
                end: s,
                min: a,
                max: r,
              });
          })(t, e, i, n)
        : (e[i.axis] = i.parse(t, n)),
      e
    );
  }
  function Pi(t, e, i, n) {
    const o = t.iScale,
      s = t.vScale,
      a = o.getLabels(),
      r = o === s,
      l = [];
    let c, h, d, u;
    for (c = i, h = i + n; c < h; ++c)
      (u = e[c]),
        (d = {}),
        (d[o.axis] = r || o.parse(a[c], c)),
        l.push(Si(u, d, s, c));
    return l;
  }
  function Oi(t) {
    return t && void 0 !== t.barStart && void 0 !== t.barEnd;
  }
  (wi.defaults = {}),
    (wi.prototype.datasetElementType = null),
    (wi.prototype.dataElementType = null);
  class Di extends wi {
    parsePrimitiveData(t, e, i, n) {
      return Pi(t, e, i, n);
    }
    parseArrayData(t, e, i, n) {
      return Pi(t, e, i, n);
    }
    parseObjectData(t, e, i, n) {
      const { iScale: o, vScale: s } = t,
        { xAxisKey: a = "x", yAxisKey: r = "y" } = this._parsing,
        l = "x" === o.axis ? a : r,
        c = "x" === s.axis ? a : r,
        h = [];
      let d, u, g, f;
      for (d = i, u = i + n; d < u; ++d)
        (f = e[d]),
          (g = {}),
          (g[o.axis] = o.parse(S(f, l), d)),
          h.push(Si(S(f, c), g, s, d));
      return h;
    }
    updateRangeFromParsed(t, e, i, n) {
      super.updateRangeFromParsed(t, e, i, n);
      const o = i._custom;
      o &&
        e === this._cachedMeta.vScale &&
        ((t.min = Math.min(t.min, o.min)), (t.max = Math.max(t.max, o.max)));
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        { iScale: i, vScale: n } = e,
        o = this.getParsed(t),
        s = o._custom,
        a = Oi(s)
          ? "[" + s.start + ", " + s.end + "]"
          : "" + n.getLabelForValue(o[n.axis]);
      return { label: "" + i.getLabelForValue(o[i.axis]), value: a };
    }
    initialize() {
      const t = this;
      (t.enableOptionSharing = !0), super.initialize();
      t._cachedMeta.stack = t.getDataset().stack;
    }
    update(t) {
      const e = this._cachedMeta;
      this.updateElements(e.data, 0, e.data.length, t);
    }
    updateElements(t, e, i, n) {
      const o = this,
        s = "reset" === n,
        a = o._cachedMeta.vScale,
        r = a.getBasePixel(),
        c = a.isHorizontal(),
        h = o._getRuler(),
        d = o.resolveDataElementOptions(e, n),
        u = o.getSharedOptions(d),
        g = o.includeOptions(n, u);
      o.updateSharedOptions(u, n, d);
      for (let d = e; d < e + i; d++) {
        const e = o.getParsed(d),
          i =
            s || l(e[a.axis])
              ? { base: r, head: r }
              : o._calculateBarValuePixels(d),
          f = o._calculateBarIndexPixels(d, h),
          p = (e._stacks || {})[a.axis],
          m = {
            horizontal: c,
            base: i.base,
            enableBorderRadius:
              !p ||
              Oi(e._custom) ||
              o.index === p._top ||
              o.index === p._bottom,
            x: c ? i.head : f.center,
            y: c ? f.center : i.head,
            height: c ? f.size : void 0,
            width: c ? void 0 : f.size,
          };
        g && (m.options = u || o.resolveDataElementOptions(d, n)),
          o.updateElement(t[d], d, m, n);
      }
    }
    _getStacks(t, e) {
      const i = this._cachedMeta.iScale,
        n = i.getMatchingVisibleMetas(this._type),
        o = i.options.stacked,
        s = n.length,
        a = [];
      let r, c;
      for (r = 0; r < s; ++r) {
        if (((c = n[r]), void 0 !== e)) {
          const t =
            c.controller.getParsed(e)[c.controller._cachedMeta.vScale.axis];
          if (l(t) || isNaN(t)) continue;
        }
        if (
          ((!1 === o ||
            -1 === a.indexOf(c.stack) ||
            (void 0 === o && void 0 === c.stack)) &&
            a.push(c.stack),
          c.index === t)
        )
          break;
      }
      return a.length || a.push(void 0), a;
    }
    _getStackCount(t) {
      return this._getStacks(void 0, t).length;
    }
    _getStackIndex(t, e, i) {
      const n = this._getStacks(t, i),
        o = void 0 !== e ? n.indexOf(e) : -1;
      return -1 === o ? n.length - 1 : o;
    }
    _getRuler() {
      const t = this,
        e = t.options,
        i = t._cachedMeta,
        n = i.iScale,
        o = [];
      let s, a;
      for (s = 0, a = i.data.length; s < a; ++s)
        o.push(n.getPixelForValue(t.getParsed(s)[n.axis], s));
      const r = e.barThickness;
      return {
        min: r || ki(n),
        pixels: o,
        start: n._startPixel,
        end: n._endPixel,
        stackCount: t._getStackCount(),
        scale: n,
        grouped: e.grouped,
        ratio: r ? 1 : e.categoryPercentage * e.barPercentage,
      };
    }
    _calculateBarValuePixels(t) {
      const e = this,
        { vScale: i, _stacked: n } = e._cachedMeta,
        { base: o, minBarLength: s } = e.options,
        a = e.getParsed(t),
        r = a._custom,
        c = Oi(r);
      let h,
        d,
        u = a[i.axis],
        g = 0,
        f = n ? e.applyStack(i, a, n) : u;
      f !== u && ((g = f - u), (f = u)),
        c &&
          ((u = r.barStart),
          (f = r.barEnd - r.barStart),
          0 !== u && V(u) !== V(r.barEnd) && (g = 0),
          (g += u));
      const p = l(o) || c ? g : o;
      let m = i.getPixelForValue(p);
      (h = this.chart.getDataVisibility(t) ? i.getPixelForValue(g + f) : m),
        (d = h - m),
        void 0 !== s &&
          Math.abs(d) < s &&
          ((d = d < 0 ? -s : s), 0 === u && (m -= d / 2), (h = m + d));
      const x = o || 0;
      if (m === i.getPixelForValue(x)) {
        const t = i.getLineWidthForValue(x) / 2;
        d > 0 ? ((m += t), (d -= t)) : d < 0 && ((m -= t), (d += t));
      }
      return { size: d, base: m, head: h, center: h + d / 2 };
    }
    _calculateBarIndexPixels(t, e) {
      const i = this,
        n = e.scale,
        o = i.options,
        s = o.skipNull,
        a = g(o.maxBarThickness, 1 / 0);
      let r, c;
      if (e.grouped) {
        const n = s ? i._getStackCount(t) : e.stackCount,
          h =
            "flex" === o.barThickness
              ? (function (t, e, i, n) {
                  const o = e.pixels,
                    s = o[t];
                  let a = t > 0 ? o[t - 1] : null,
                    r = t < o.length - 1 ? o[t + 1] : null;
                  const l = i.categoryPercentage;
                  null === a &&
                    (a = s - (null === r ? e.end - e.start : r - s)),
                    null === r && (r = s + s - a);
                  const c = s - ((s - Math.min(a, r)) / 2) * l;
                  return {
                    chunk: ((Math.abs(r - a) / 2) * l) / n,
                    ratio: i.barPercentage,
                    start: c,
                  };
                })(t, e, o, n)
              : (function (t, e, i, n) {
                  const o = i.barThickness;
                  let s, a;
                  return (
                    l(o)
                      ? ((s = e.min * i.categoryPercentage),
                        (a = i.barPercentage))
                      : ((s = o * n), (a = 1)),
                    { chunk: s / n, ratio: a, start: e.pixels[t] - s / 2 }
                  );
                })(t, e, o, n),
          d = i._getStackIndex(i.index, i._cachedMeta.stack, s ? t : void 0);
        (r = h.start + h.chunk * d + h.chunk / 2),
          (c = Math.min(a, h.chunk * h.ratio));
      } else
        (r = n.getPixelForValue(i.getParsed(t)[n.axis], t)),
          (c = Math.min(a, e.min * e.ratio));
      return { base: r - c / 2, head: r + c / 2, center: r, size: c };
    }
    draw() {
      const t = this,
        e = t.chart,
        i = t._cachedMeta,
        n = i.vScale,
        o = i.data,
        s = o.length;
      let a = 0;
      for (Ut(e.ctx, e.chartArea); a < s; ++a)
        null !== t.getParsed(a)[n.axis] && o[a].draw(t._ctx);
      Xt(e.ctx);
    }
  }
  (Di.id = "bar"),
    (Di.defaults = {
      datasetElementType: !1,
      dataElementType: "bar",
      categoryPercentage: 0.8,
      barPercentage: 0.9,
      grouped: !0,
      animations: {
        numbers: {
          type: "number",
          properties: ["x", "y", "base", "width", "height"],
        },
      },
    }),
    (Di.overrides = {
      interaction: { mode: "index" },
      scales: {
        _index_: { type: "category", offset: !0, grid: { offset: !0 } },
        _value_: { type: "linear", beginAtZero: !0 },
      },
    });
  class Ci extends wi {
    initialize() {
      (this.enableOptionSharing = !0), super.initialize();
    }
    parseObjectData(t, e, i, n) {
      const { xScale: o, yScale: s } = t,
        { xAxisKey: a = "x", yAxisKey: r = "y" } = this._parsing,
        l = [];
      let c, h, d;
      for (c = i, h = i + n; c < h; ++c)
        (d = e[c]),
          l.push({
            x: o.parse(S(d, a), c),
            y: s.parse(S(d, r), c),
            _custom: d && d.r && +d.r,
          });
      return l;
    }
    getMaxOverflow() {
      const { data: t, _parsed: e } = this._cachedMeta;
      let i = 0;
      for (let n = t.length - 1; n >= 0; --n)
        i = Math.max(i, t[n].size() / 2, e[n]._custom);
      return i > 0 && i;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        { xScale: i, yScale: n } = e,
        o = this.getParsed(t),
        s = i.getLabelForValue(o.x),
        a = n.getLabelForValue(o.y),
        r = o._custom;
      return {
        label: e.label,
        value: "(" + s + ", " + a + (r ? ", " + r : "") + ")",
      };
    }
    update(t) {
      const e = this._cachedMeta.data;
      this.updateElements(e, 0, e.length, t);
    }
    updateElements(t, e, i, n) {
      const o = this,
        s = "reset" === n,
        { iScale: a, vScale: r } = o._cachedMeta,
        l = o.resolveDataElementOptions(e, n),
        c = o.getSharedOptions(l),
        h = o.includeOptions(n, c),
        d = a.axis,
        u = r.axis;
      for (let l = e; l < e + i; l++) {
        const e = t[l],
          i = !s && o.getParsed(l),
          c = {},
          g = (c[d] = s ? a.getPixelForDecimal(0.5) : a.getPixelForValue(i[d])),
          f = (c[u] = s ? r.getBasePixel() : r.getPixelForValue(i[u]));
        (c.skip = isNaN(g) || isNaN(f)),
          h &&
            ((c.options = o.resolveDataElementOptions(l, n)),
            s && (c.options.radius = 0)),
          o.updateElement(e, l, c, n);
      }
      o.updateSharedOptions(c, n, l);
    }
    resolveDataElementOptions(t, e) {
      const i = this.getParsed(t);
      let n = super.resolveDataElementOptions(t, e);
      n.$shared && (n = Object.assign({}, n, { $shared: !1 }));
      const o = n.radius;
      return (
        "active" !== e && (n.radius = 0), (n.radius += g(i && i._custom, o)), n
      );
    }
  }
  (Ci.id = "bubble"),
    (Ci.defaults = {
      datasetElementType: !1,
      dataElementType: "point",
      animations: {
        numbers: {
          type: "number",
          properties: ["x", "y", "borderWidth", "radius"],
        },
      },
    }),
    (Ci.overrides = {
      scales: { x: { type: "linear" }, y: { type: "linear" } },
      plugins: { tooltip: { callbacks: { title: () => "" } } },
    });
  class Ti extends wi {
    constructor(t, e) {
      super(t, e),
        (this.enableOptionSharing = !0),
        (this.innerRadius = void 0),
        (this.outerRadius = void 0),
        (this.offsetX = void 0),
        (this.offsetY = void 0);
    }
    linkScales() {}
    parse(t, e) {
      const i = this.getDataset().data,
        n = this._cachedMeta;
      let o, s;
      for (o = t, s = t + e; o < s; ++o) n._parsed[o] = +i[o];
    }
    _getRotation() {
      return H(this.options.rotation - 90);
    }
    _getCircumference() {
      return H(this.options.circumference);
    }
    _getRotationExtents() {
      let t = T,
        e = -T;
      const i = this;
      for (let n = 0; n < i.chart.data.datasets.length; ++n)
        if (i.chart.isDatasetVisible(n)) {
          const o = i.chart.getDatasetMeta(n).controller,
            s = o._getRotation(),
            a = o._getCircumference();
          (t = Math.min(t, s)), (e = Math.max(e, s + a));
        }
      return { rotation: t, circumference: e - t };
    }
    update(t) {
      const e = this,
        i = e.chart,
        { chartArea: n } = i,
        o = e._cachedMeta,
        s = o.data,
        a = e.getMaxBorderWidth() + e.getMaxOffset(s),
        r = Math.max((Math.min(n.width, n.height) - a) / 2, 0),
        l = Math.min(
          ((c = e.options.cutout),
          (h = r),
          "string" == typeof c && c.endsWith("%")
            ? parseFloat(c) / 100
            : c / h),
          1
        );
      var c, h;
      const d = e._getRingWeight(e.index),
        { circumference: u, rotation: g } = e._getRotationExtents(),
        {
          ratioX: p,
          ratioY: m,
          offsetX: x,
          offsetY: b,
        } = (function (t, e, i) {
          let n = 1,
            o = 1,
            s = 0,
            a = 0;
          if (e < T) {
            const r = t,
              l = r + e,
              c = Math.cos(r),
              h = Math.sin(r),
              d = Math.cos(l),
              u = Math.sin(l),
              g = (t, e, n) =>
                K(t, r, l, !0) ? 1 : Math.max(e, e * i, n, n * i),
              f = (t, e, n) =>
                K(t, r, l, !0) ? -1 : Math.min(e, e * i, n, n * i),
              p = g(0, c, d),
              m = g(E, h, u),
              x = f(C, c, d),
              b = f(C + E, h, u);
            (n = (p - x) / 2),
              (o = (m - b) / 2),
              (s = -(p + x) / 2),
              (a = -(m + b) / 2);
          }
          return { ratioX: n, ratioY: o, offsetX: s, offsetY: a };
        })(g, u, l),
        _ = (n.width - a) / p,
        y = (n.height - a) / m,
        v = Math.max(Math.min(_, y) / 2, 0),
        M = f(e.options.radius, v),
        w = (M - Math.max(M * l, 0)) / e._getVisibleDatasetWeightTotal();
      (e.offsetX = x * M),
        (e.offsetY = b * M),
        (o.total = e.calculateTotal()),
        (e.outerRadius = M - w * e._getRingWeightOffset(e.index)),
        (e.innerRadius = Math.max(e.outerRadius - w * d, 0)),
        e.updateElements(s, 0, s.length, t);
    }
    _circumference(t, e) {
      const i = this,
        n = i.options,
        o = i._cachedMeta,
        s = i._getCircumference();
      return (e && n.animation.animateRotate) ||
        !this.chart.getDataVisibility(t) ||
        null === o._parsed[t]
        ? 0
        : i.calculateCircumference((o._parsed[t] * s) / T);
    }
    updateElements(t, e, i, n) {
      const o = this,
        s = "reset" === n,
        a = o.chart,
        r = a.chartArea,
        l = a.options.animation,
        c = (r.left + r.right) / 2,
        h = (r.top + r.bottom) / 2,
        d = s && l.animateScale,
        u = d ? 0 : o.innerRadius,
        g = d ? 0 : o.outerRadius,
        f = o.resolveDataElementOptions(e, n),
        p = o.getSharedOptions(f),
        m = o.includeOptions(n, p);
      let x,
        b = o._getRotation();
      for (x = 0; x < e; ++x) b += o._circumference(x, s);
      for (x = e; x < e + i; ++x) {
        const e = o._circumference(x, s),
          i = t[x],
          a = {
            x: c + o.offsetX,
            y: h + o.offsetY,
            startAngle: b,
            endAngle: b + e,
            circumference: e,
            outerRadius: g,
            innerRadius: u,
          };
        m && (a.options = p || o.resolveDataElementOptions(x, n)),
          (b += e),
          o.updateElement(i, x, a, n);
      }
      o.updateSharedOptions(p, n, f);
    }
    calculateTotal() {
      const t = this._cachedMeta,
        e = t.data;
      let i,
        n = 0;
      for (i = 0; i < e.length; i++) {
        const e = t._parsed[i];
        null !== e &&
          !isNaN(e) &&
          this.chart.getDataVisibility(i) &&
          (n += Math.abs(e));
      }
      return n;
    }
    calculateCircumference(t) {
      const e = this._cachedMeta.total;
      return e > 0 && !isNaN(t) ? T * (Math.abs(t) / e) : 0;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        i = this.chart,
        n = i.data.labels || [],
        o = Ke(e._parsed[t], i.options.locale);
      return { label: n[t] || "", value: o };
    }
    getMaxBorderWidth(t) {
      const e = this;
      let i = 0;
      const n = e.chart;
      let o, s, a, r, l;
      if (!t)
        for (o = 0, s = n.data.datasets.length; o < s; ++o)
          if (n.isDatasetVisible(o)) {
            (a = n.getDatasetMeta(o)),
              (t = a.data),
              (r = a.controller),
              r !== e && r.configure();
            break;
          }
      if (!t) return 0;
      for (o = 0, s = t.length; o < s; ++o)
        (l = r.resolveDataElementOptions(o)),
          "inner" !== l.borderAlign &&
            (i = Math.max(i, l.borderWidth || 0, l.hoverBorderWidth || 0));
      return i;
    }
    getMaxOffset(t) {
      let e = 0;
      for (let i = 0, n = t.length; i < n; ++i) {
        const t = this.resolveDataElementOptions(i);
        e = Math.max(e, t.offset || 0, t.hoverOffset || 0);
      }
      return e;
    }
    _getRingWeightOffset(t) {
      let e = 0;
      for (let i = 0; i < t; ++i)
        this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
      return e;
    }
    _getRingWeight(t) {
      return Math.max(g(this.chart.data.datasets[t].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
      return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
  }
  (Ti.id = "doughnut"),
    (Ti.defaults = {
      datasetElementType: !1,
      dataElementType: "arc",
      animation: { animateRotate: !0, animateScale: !1 },
      animations: {
        numbers: {
          type: "number",
          properties: [
            "circumference",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "startAngle",
            "x",
            "y",
            "offset",
            "borderWidth",
          ],
        },
      },
      cutout: "50%",
      rotation: 0,
      circumference: 360,
      radius: "100%",
      indexAxis: "r",
    }),
    (Ti.overrides = {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            generateLabels(t) {
              const e = t.data;
              return e.labels.length && e.datasets.length
                ? e.labels.map((e, i) => {
                    const n = t.getDatasetMeta(0).controller.getStyle(i);
                    return {
                      text: e,
                      fillStyle: n.backgroundColor,
                      strokeStyle: n.borderColor,
                      lineWidth: n.borderWidth,
                      hidden: !t.getDataVisibility(i),
                      index: i,
                    };
                  })
                : [];
            },
          },
          onClick(t, e, i) {
            i.chart.toggleDataVisibility(e.index), i.chart.update();
          },
        },
        tooltip: {
          callbacks: {
            title: () => "",
            label(t) {
              let e = t.label;
              const i = ": " + t.formattedValue;
              return c(e) ? ((e = e.slice()), (e[0] += i)) : (e += i), e;
            },
          },
        },
      },
    });
  class Ai extends wi {
    initialize() {
      (this.enableOptionSharing = !0), super.initialize();
    }
    update(t) {
      const e = this,
        i = e._cachedMeta,
        { dataset: n, data: o = [], _dataset: s } = i,
        a = e.chart._animationsDisabled;
      let { start: r, count: l } = (function (t, e, i) {
        const n = e.length;
        let o = 0,
          s = n;
        if (t._sorted) {
          const { iScale: a, _parsed: r } = t,
            l = a.axis,
            {
              min: c,
              max: h,
              minDefined: d,
              maxDefined: u,
            } = a.getUserBounds();
          d &&
            (o = G(
              Math.min(
                ce(r, a.axis, c).lo,
                i ? n : ce(e, l, a.getPixelForValue(c)).lo
              ),
              0,
              n - 1
            )),
            (s = u
              ? G(
                  Math.max(
                    ce(r, a.axis, h).hi + 1,
                    i ? 0 : ce(e, l, a.getPixelForValue(h)).hi + 1
                  ),
                  o,
                  n
                ) - o
              : n - o);
        }
        return { start: o, count: s };
      })(i, o, a);
      (e._drawStart = r),
        (e._drawCount = l),
        (function (t) {
          const { xScale: e, yScale: i, _scaleRanges: n } = t,
            o = { xmin: e.min, xmax: e.max, ymin: i.min, ymax: i.max };
          if (!n) return (t._scaleRanges = o), !0;
          const s =
            n.xmin !== e.min ||
            n.xmax !== e.max ||
            n.ymin !== i.min ||
            n.ymax !== i.max;
          return Object.assign(n, o), s;
        })(i) && ((r = 0), (l = o.length)),
        (n._decimated = !!s._decimated),
        (n.points = o);
      const c = e.resolveDatasetElementOptions(t);
      e.options.showLine || (c.borderWidth = 0),
        (c.segment = e.options.segment),
        e.updateElement(n, void 0, { animated: !a, options: c }, t),
        e.updateElements(o, r, l, t);
    }
    updateElements(t, e, i, n) {
      const o = this,
        s = "reset" === n,
        { iScale: a, vScale: r, _stacked: c } = o._cachedMeta,
        h = o.resolveDataElementOptions(e, n),
        d = o.getSharedOptions(h),
        u = o.includeOptions(n, d),
        g = a.axis,
        f = r.axis,
        p = o.options.spanGaps,
        m = N(p) ? p : Number.POSITIVE_INFINITY,
        x = o.chart._animationsDisabled || s || "none" === n;
      let b = e > 0 && o.getParsed(e - 1);
      for (let h = e; h < e + i; ++h) {
        const e = t[h],
          i = o.getParsed(h),
          p = x ? e : {},
          _ = l(i[f]),
          y = (p[g] = a.getPixelForValue(i[g], h)),
          v = (p[f] =
            s || _
              ? r.getBasePixel()
              : r.getPixelForValue(c ? o.applyStack(r, i, c) : i[f], h));
        (p.skip = isNaN(y) || isNaN(v) || _),
          (p.stop = h > 0 && i[g] - b[g] > m),
          (p.parsed = i),
          u && (p.options = d || o.resolveDataElementOptions(h, n)),
          x || o.updateElement(e, h, p, n),
          (b = i);
      }
      o.updateSharedOptions(d, n, h);
    }
    getMaxOverflow() {
      const t = this,
        e = t._cachedMeta,
        i = e.dataset,
        n = (i.options && i.options.borderWidth) || 0,
        o = e.data || [];
      if (!o.length) return n;
      const s = o[0].size(t.resolveDataElementOptions(0)),
        a = o[o.length - 1].size(t.resolveDataElementOptions(o.length - 1));
      return Math.max(n, s, a) / 2;
    }
    draw() {
      const t = this._cachedMeta;
      t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
        super.draw();
    }
  }
  (Ai.id = "line"),
    (Ai.defaults = {
      datasetElementType: "line",
      dataElementType: "point",
      showLine: !0,
      spanGaps: !1,
    }),
    (Ai.overrides = {
      scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
    });
  class Li extends wi {
    constructor(t, e) {
      super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0);
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        i = this.chart,
        n = i.data.labels || [],
        o = Ke(e._parsed[t].r, i.options.locale);
      return { label: n[t] || "", value: o };
    }
    update(t) {
      const e = this._cachedMeta.data;
      this._updateRadius(), this.updateElements(e, 0, e.length, t);
    }
    _updateRadius() {
      const t = this,
        e = t.chart,
        i = e.chartArea,
        n = e.options,
        o = Math.min(i.right - i.left, i.bottom - i.top),
        s = Math.max(o / 2, 0),
        a =
          (s -
            Math.max(
              n.cutoutPercentage ? (s / 100) * n.cutoutPercentage : 1,
              0
            )) /
          e.getVisibleDatasetCount();
      (t.outerRadius = s - a * t.index), (t.innerRadius = t.outerRadius - a);
    }
    updateElements(t, e, i, n) {
      const o = this,
        s = "reset" === n,
        a = o.chart,
        r = o.getDataset(),
        l = a.options.animation,
        c = o._cachedMeta.rScale,
        h = c.xCenter,
        d = c.yCenter,
        u = c.getIndexAngle(0) - 0.5 * C;
      let g,
        f = u;
      const p = 360 / o.countVisibleElements();
      for (g = 0; g < e; ++g) f += o._computeAngle(g, n, p);
      for (g = e; g < e + i; g++) {
        const e = t[g];
        let i = f,
          m = f + o._computeAngle(g, n, p),
          x = a.getDataVisibility(g)
            ? c.getDistanceFromCenterForValue(r.data[g])
            : 0;
        (f = m),
          s && (l.animateScale && (x = 0), l.animateRotate && (i = m = u));
        const b = {
          x: h,
          y: d,
          innerRadius: 0,
          outerRadius: x,
          startAngle: i,
          endAngle: m,
          options: o.resolveDataElementOptions(g, n),
        };
        o.updateElement(e, g, b, n);
      }
    }
    countVisibleElements() {
      const t = this.getDataset(),
        e = this._cachedMeta;
      let i = 0;
      return (
        e.data.forEach((e, n) => {
          !isNaN(t.data[n]) && this.chart.getDataVisibility(n) && i++;
        }),
        i
      );
    }
    _computeAngle(t, e, i) {
      return this.chart.getDataVisibility(t)
        ? H(this.resolveDataElementOptions(t, e).angle || i)
        : 0;
    }
  }
  (Li.id = "polarArea"),
    (Li.defaults = {
      dataElementType: "arc",
      animation: { animateRotate: !0, animateScale: !0 },
      animations: {
        numbers: {
          type: "number",
          properties: [
            "x",
            "y",
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius",
          ],
        },
      },
      indexAxis: "r",
      startAngle: 0,
    }),
    (Li.overrides = {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            generateLabels(t) {
              const e = t.data;
              return e.labels.length && e.datasets.length
                ? e.labels.map((e, i) => {
                    const n = t.getDatasetMeta(0).controller.getStyle(i);
                    return {
                      text: e,
                      fillStyle: n.backgroundColor,
                      strokeStyle: n.borderColor,
                      lineWidth: n.borderWidth,
                      hidden: !t.getDataVisibility(i),
                      index: i,
                    };
                  })
                : [];
            },
          },
          onClick(t, e, i) {
            i.chart.toggleDataVisibility(e.index), i.chart.update();
          },
        },
        tooltip: {
          callbacks: {
            title: () => "",
            label: (t) =>
              t.chart.data.labels[t.dataIndex] + ": " + t.formattedValue,
          },
        },
      },
      scales: {
        r: {
          type: "radialLinear",
          angleLines: { display: !1 },
          beginAtZero: !0,
          grid: { circular: !0 },
          pointLabels: { display: !1 },
          startAngle: 0,
        },
      },
    });
  class Ri extends Ti {}
  (Ri.id = "pie"),
    (Ri.defaults = {
      cutout: 0,
      rotation: 0,
      circumference: 360,
      radius: "100%",
    });
  class Ei extends wi {
    getLabelAndValue(t) {
      const e = this._cachedMeta.vScale,
        i = this.getParsed(t);
      return {
        label: e.getLabels()[t],
        value: "" + e.getLabelForValue(i[e.axis]),
      };
    }
    update(t) {
      const e = this,
        i = e._cachedMeta,
        n = i.dataset,
        o = i.data || [],
        s = i.iScale.getLabels();
      if (((n.points = o), "resize" !== t)) {
        const i = e.resolveDatasetElementOptions(t);
        e.options.showLine || (i.borderWidth = 0);
        const a = { _loop: !0, _fullLoop: s.length === o.length, options: i };
        e.updateElement(n, void 0, a, t);
      }
      e.updateElements(o, 0, o.length, t);
    }
    updateElements(t, e, i, n) {
      const o = this,
        s = o.getDataset(),
        a = o._cachedMeta.rScale,
        r = "reset" === n;
      for (let l = e; l < e + i; l++) {
        const e = t[l],
          i = o.resolveDataElementOptions(l, n),
          c = a.getPointPositionForValue(l, s.data[l]),
          h = r ? a.xCenter : c.x,
          d = r ? a.yCenter : c.y,
          u = {
            x: h,
            y: d,
            angle: c.angle,
            skip: isNaN(h) || isNaN(d),
            options: i,
          };
        o.updateElement(e, l, u, n);
      }
    }
  }
  (Ei.id = "radar"),
    (Ei.defaults = {
      datasetElementType: "line",
      dataElementType: "point",
      indexAxis: "r",
      showLine: !0,
      elements: { line: { fill: "start" } },
    }),
    (Ei.overrides = {
      aspectRatio: 1,
      scales: { r: { type: "radialLinear" } },
    });
  class Ii extends Ai {}
  (Ii.id = "scatter"),
    (Ii.defaults = { showLine: !1, fill: !1 }),
    (Ii.overrides = {
      interaction: { mode: "point" },
      plugins: {
        tooltip: {
          callbacks: {
            title: () => "",
            label: (t) => "(" + t.label + ", " + t.formattedValue + ")",
          },
        },
      },
      scales: { x: { type: "linear" }, y: { type: "linear" } },
    });
  function Fi() {
    throw new Error(
      "This method is not implemented: Check that a complete date adapter is provided."
    );
  }
  class zi {
    constructor(t) {
      this.options = t || {};
    }
    formats() {
      return Fi();
    }
    parse(t, e) {
      return Fi();
    }
    format(t, e) {
      return Fi();
    }
    add(t, e, i) {
      return Fi();
    }
    diff(t, e, i) {
      return Fi();
    }
    startOf(t, e, i) {
      return Fi();
    }
    endOf(t, e) {
      return Fi();
    }
  }
  zi.override = function (t) {
    Object.assign(zi.prototype, t);
  };
  var Vi = { _date: zi };
  function Bi(t, e) {
    return "native" in t ? { x: t.x, y: t.y } : Be(t, e);
  }
  function Ni(t, e, i, n) {
    const { controller: o, data: s, _sorted: a } = t,
      r = o._cachedMeta.iScale;
    if (r && e === r.axis && a && s.length) {
      const t = r._reversePixels ? he : ce;
      if (!n) return t(s, e, i);
      if (o._sharedOptions) {
        const n = s[0],
          o = "function" == typeof n.getRange && n.getRange(e);
        if (o) {
          const n = t(s, e, i - o),
            a = t(s, e, i + o);
          return { lo: n.lo, hi: a.hi };
        }
      }
    }
    return { lo: 0, hi: s.length - 1 };
  }
  function ji(t, e, i, n, o) {
    const s = t.getSortedVisibleDatasetMetas(),
      a = i[e];
    for (let t = 0, i = s.length; t < i; ++t) {
      const { index: i, data: r } = s[t],
        { lo: l, hi: c } = Ni(s[t], e, a, o);
      for (let t = l; t <= c; ++t) {
        const e = r[t];
        e.skip || n(e, i, t);
      }
    }
  }
  function Wi(t, e, i, n) {
    const o = [];
    if (!qt(e, t.chartArea, t._minPadding)) return o;
    return (
      ji(
        t,
        i,
        e,
        function (t, i, s) {
          t.inRange(e.x, e.y, n) &&
            o.push({ element: t, datasetIndex: i, index: s });
        },
        !0
      ),
      o
    );
  }
  function Hi(t, e, i, n, o) {
    const s = (function (t) {
      const e = -1 !== t.indexOf("x"),
        i = -1 !== t.indexOf("y");
      return function (t, n) {
        const o = e ? Math.abs(t.x - n.x) : 0,
          s = i ? Math.abs(t.y - n.y) : 0;
        return Math.sqrt(Math.pow(o, 2) + Math.pow(s, 2));
      };
    })(i);
    let a = Number.POSITIVE_INFINITY,
      r = [];
    if (!qt(e, t.chartArea, t._minPadding)) return r;
    return (
      ji(t, i, e, function (t, i, l) {
        if (n && !t.inRange(e.x, e.y, o)) return;
        const c = t.getCenterPoint(o),
          h = s(e, c);
        h < a
          ? ((r = [{ element: t, datasetIndex: i, index: l }]), (a = h))
          : h === a && r.push({ element: t, datasetIndex: i, index: l });
      }),
      r
    );
  }
  function $i(t, e, i, n) {
    const o = Bi(e, t),
      s = [],
      a = i.axis,
      r = "x" === a ? "inXRange" : "inYRange";
    let l = !1;
    return (
      (function (t, e) {
        const i = t.getSortedVisibleDatasetMetas();
        let n, o, s;
        for (let t = 0, a = i.length; t < a; ++t) {
          ({ index: n, data: o } = i[t]);
          for (let t = 0, i = o.length; t < i; ++t)
            (s = o[t]), s.skip || e(s, n, t);
        }
      })(t, (t, e, i) => {
        t[r](o[a], n) && s.push({ element: t, datasetIndex: e, index: i }),
          t.inRange(o.x, o.y, n) && (l = !0);
      }),
      i.intersect && !l ? [] : s
    );
  }
  var Yi = {
    modes: {
      index(t, e, i, n) {
        const o = Bi(e, t),
          s = i.axis || "x",
          a = i.intersect ? Wi(t, o, s, n) : Hi(t, o, s, !1, n),
          r = [];
        return a.length
          ? (t.getSortedVisibleDatasetMetas().forEach((t) => {
              const e = a[0].index,
                i = t.data[e];
              i &&
                !i.skip &&
                r.push({ element: i, datasetIndex: t.index, index: e });
            }),
            r)
          : [];
      },
      dataset(t, e, i, n) {
        const o = Bi(e, t),
          s = i.axis || "xy";
        let a = i.intersect ? Wi(t, o, s, n) : Hi(t, o, s, !1, n);
        if (a.length > 0) {
          const e = a[0].datasetIndex,
            i = t.getDatasetMeta(e).data;
          a = [];
          for (let t = 0; t < i.length; ++t)
            a.push({ element: i[t], datasetIndex: e, index: t });
        }
        return a;
      },
      point: (t, e, i, n) => Wi(t, Bi(e, t), i.axis || "xy", n),
      nearest: (t, e, i, n) => Hi(t, Bi(e, t), i.axis || "xy", i.intersect, n),
      x: (t, e, i, n) => ((i.axis = "x"), $i(t, e, i, n)),
      y: (t, e, i, n) => ((i.axis = "y"), $i(t, e, i, n)),
    },
  };
  const qi = ["left", "top", "right", "bottom"];
  function Ui(t, e) {
    return t.filter((t) => t.pos === e);
  }
  function Xi(t, e) {
    return t.filter((t) => -1 === qi.indexOf(t.pos) && t.box.axis === e);
  }
  function Ki(t, e) {
    return t.sort((t, i) => {
      const n = e ? i : t,
        o = e ? t : i;
      return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
    });
  }
  function Gi(t, e, i, n) {
    return Math.max(t[i], e[i]) + Math.max(t[n], e[n]);
  }
  function Zi(t, e) {
    (t.top = Math.max(t.top, e.top)),
      (t.left = Math.max(t.left, e.left)),
      (t.bottom = Math.max(t.bottom, e.bottom)),
      (t.right = Math.max(t.right, e.right));
  }
  function Ji(t, e, i) {
    const n = i.box,
      o = t.maxPadding;
    h(i.pos) ||
      (i.size && (t[i.pos] -= i.size),
      (i.size = i.horizontal ? n.height : n.width),
      (t[i.pos] += i.size)),
      n.getPadding && Zi(o, n.getPadding());
    const s = Math.max(0, e.outerWidth - Gi(o, t, "left", "right")),
      a = Math.max(0, e.outerHeight - Gi(o, t, "top", "bottom")),
      r = s !== t.w,
      l = a !== t.h;
    return (
      (t.w = s),
      (t.h = a),
      i.horizontal ? { same: r, other: l } : { same: l, other: r }
    );
  }
  function Qi(t, e) {
    const i = e.maxPadding;
    function n(t) {
      const n = { left: 0, top: 0, right: 0, bottom: 0 };
      return (
        t.forEach((t) => {
          n[t] = Math.max(e[t], i[t]);
        }),
        n
      );
    }
    return n(t ? ["left", "right"] : ["top", "bottom"]);
  }
  function tn(t, e, i) {
    const n = [];
    let o, s, a, r, l, c;
    for (o = 0, s = t.length, l = 0; o < s; ++o) {
      (a = t[o]),
        (r = a.box),
        r.update(a.width || e.w, a.height || e.h, Qi(a.horizontal, e));
      const { same: s, other: h } = Ji(e, i, a);
      (l |= s && n.length), (c = c || h), r.fullSize || n.push(a);
    }
    return (l && tn(n, e, i)) || c;
  }
  function en(t, e, i) {
    const n = i.padding;
    let o,
      s,
      a,
      r,
      l = e.x,
      c = e.y;
    for (o = 0, s = t.length; o < s; ++o)
      (a = t[o]),
        (r = a.box),
        a.horizontal
          ? ((r.left = r.fullSize ? n.left : e.left),
            (r.right = r.fullSize ? i.outerWidth - n.right : e.left + e.w),
            (r.top = c),
            (r.bottom = c + r.height),
            (r.width = r.right - r.left),
            (c = r.bottom))
          : ((r.left = l),
            (r.right = l + r.width),
            (r.top = r.fullSize ? n.top : e.top),
            (r.bottom = r.fullSize ? i.outerHeight - n.right : e.top + e.h),
            (r.height = r.bottom - r.top),
            (l = r.right));
    (e.x = l), (e.y = c);
  }
  Nt.set("layout", { padding: { top: 0, right: 0, bottom: 0, left: 0 } });
  var nn = {
    addBox(t, e) {
      t.boxes || (t.boxes = []),
        (e.fullSize = e.fullSize || !1),
        (e.position = e.position || "top"),
        (e.weight = e.weight || 0),
        (e._layers =
          e._layers ||
          function () {
            return [
              {
                z: 0,
                draw(t) {
                  e.draw(t);
                },
              },
            ];
          }),
        t.boxes.push(e);
    },
    removeBox(t, e) {
      const i = t.boxes ? t.boxes.indexOf(e) : -1;
      -1 !== i && t.boxes.splice(i, 1);
    },
    configure(t, e, i) {
      (e.fullSize = i.fullSize),
        (e.position = i.position),
        (e.weight = i.weight);
    },
    update(t, e, i, n) {
      if (!t) return;
      const o = se(t.options.layout.padding),
        s = Math.max(e - o.width, 0),
        a = Math.max(i - o.height, 0),
        r = (function (t) {
          const e = (function (t) {
              const e = [];
              let i, n, o;
              for (i = 0, n = (t || []).length; i < n; ++i)
                (o = t[i]),
                  e.push({
                    index: i,
                    box: o,
                    pos: o.position,
                    horizontal: o.isHorizontal(),
                    weight: o.weight,
                  });
              return e;
            })(t),
            i = Ki(
              e.filter((t) => t.box.fullSize),
              !0
            ),
            n = Ki(Ui(e, "left"), !0),
            o = Ki(Ui(e, "right")),
            s = Ki(Ui(e, "top"), !0),
            a = Ki(Ui(e, "bottom")),
            r = Xi(e, "x"),
            l = Xi(e, "y");
          return {
            fullSize: i,
            leftAndTop: n.concat(s),
            rightAndBottom: o.concat(l).concat(a).concat(r),
            chartArea: Ui(e, "chartArea"),
            vertical: n.concat(o).concat(l),
            horizontal: s.concat(a).concat(r),
          };
        })(t.boxes),
        l = r.vertical,
        c = r.horizontal;
      m(t.boxes, (t) => {
        "function" == typeof t.beforeLayout && t.beforeLayout();
      });
      const h =
          l.reduce(
            (t, e) =>
              e.box.options && !1 === e.box.options.display ? t : t + 1,
            0
          ) || 1,
        d = Object.freeze({
          outerWidth: e,
          outerHeight: i,
          padding: o,
          availableWidth: s,
          availableHeight: a,
          vBoxMaxWidth: s / 2 / h,
          hBoxMaxHeight: a / 2,
        }),
        u = Object.assign({}, o);
      Zi(u, se(n));
      const g = Object.assign(
        { maxPadding: u, w: s, h: a, x: o.left, y: o.top },
        o
      );
      !(function (t, e) {
        let i, n, o;
        for (i = 0, n = t.length; i < n; ++i)
          (o = t[i]),
            o.horizontal
              ? ((o.width = o.box.fullSize && e.availableWidth),
                (o.height = e.hBoxMaxHeight))
              : ((o.width = e.vBoxMaxWidth),
                (o.height = o.box.fullSize && e.availableHeight));
      })(l.concat(c), d),
        tn(r.fullSize, g, d),
        tn(l, g, d),
        tn(c, g, d) && tn(l, g, d),
        (function (t) {
          const e = t.maxPadding;
          function i(i) {
            const n = Math.max(e[i] - t[i], 0);
            return (t[i] += n), n;
          }
          (t.y += i("top")), (t.x += i("left")), i("right"), i("bottom");
        })(g),
        en(r.leftAndTop, g, d),
        (g.x += g.w),
        (g.y += g.h),
        en(r.rightAndBottom, g, d),
        (t.chartArea = {
          left: g.left,
          top: g.top,
          right: g.left + g.w,
          bottom: g.top + g.h,
          height: g.h,
          width: g.w,
        }),
        m(r.chartArea, (e) => {
          const i = e.box;
          Object.assign(i, t.chartArea), i.update(g.w, g.h);
        });
    },
  };
  class on {
    acquireContext(t, e) {}
    releaseContext(t) {
      return !1;
    }
    addEventListener(t, e, i) {}
    removeEventListener(t, e, i) {}
    getDevicePixelRatio() {
      return 1;
    }
    getMaximumSize(t, e, i, n) {
      return (
        (e = Math.max(0, e || t.width)),
        (i = i || t.height),
        { width: e, height: Math.max(0, n ? Math.floor(e / n) : i) }
      );
    }
    isAttached(t) {
      return !0;
    }
  }
  class sn extends on {
    acquireContext(t) {
      return (t && t.getContext && t.getContext("2d")) || null;
    }
  }
  const an = {
      touchstart: "mousedown",
      touchmove: "mousemove",
      touchend: "mouseup",
      pointerenter: "mouseenter",
      pointerdown: "mousedown",
      pointermove: "mousemove",
      pointerup: "mouseup",
      pointerleave: "mouseout",
      pointerout: "mouseout",
    },
    rn = (t) => null === t || "" === t;
  const ln = !!He && { passive: !0 };
  function cn(t, e, i) {
    t.canvas.removeEventListener(e, i, ln);
  }
  function hn(t, e, i) {
    const n = t.canvas,
      o = (n && Ee(n)) || n,
      s = new MutationObserver((t) => {
        const e = Ee(o);
        t.forEach((t) => {
          for (let n = 0; n < t.addedNodes.length; n++) {
            const s = t.addedNodes[n];
            (s !== o && s !== e) || i(t.target);
          }
        });
      });
    return s.observe(document, { childList: !0, subtree: !0 }), s;
  }
  function dn(t, e, i) {
    const n = t.canvas,
      o = n && Ee(n);
    if (!o) return;
    const s = new MutationObserver((t) => {
      t.forEach((t) => {
        for (let e = 0; e < t.removedNodes.length; e++)
          if (t.removedNodes[e] === n) {
            i();
            break;
          }
      });
    });
    return s.observe(o, { childList: !0 }), s;
  }
  const un = new Map();
  let gn = 0;
  function fn() {
    const t = window.devicePixelRatio;
    t !== gn &&
      ((gn = t),
      un.forEach((e, i) => {
        i.currentDevicePixelRatio !== t && e();
      }));
  }
  function pn(t, e, i) {
    const n = t.canvas,
      s = n && Ee(n);
    if (!s) return;
    const a = o((t, e) => {
        const n = s.clientWidth;
        i(t, e), n < s.clientWidth && i();
      }, window),
      r = new ResizeObserver((t) => {
        const e = t[0],
          i = e.contentRect.width,
          n = e.contentRect.height;
        (0 === i && 0 === n) || a(i, n);
      });
    return (
      r.observe(s),
      (function (t, e) {
        un.size || window.addEventListener("resize", fn), un.set(t, e);
      })(t, a),
      r
    );
  }
  function mn(t, e, i) {
    i && i.disconnect(),
      "resize" === e &&
        (function (t) {
          un.delete(t), un.size || window.removeEventListener("resize", fn);
        })(t);
  }
  function xn(t, e, i) {
    const n = t.canvas,
      s = o(
        (e) => {
          null !== t.ctx &&
            i(
              (function (t, e) {
                const i = an[t.type] || t.type,
                  { x: n, y: o } = Be(t, e);
                return {
                  type: i,
                  chart: e,
                  native: t,
                  x: void 0 !== n ? n : null,
                  y: void 0 !== o ? o : null,
                };
              })(e, t)
            );
        },
        t,
        (t) => {
          const e = t[0];
          return [e, e.offsetX, e.offsetY];
        }
      );
    return (
      (function (t, e, i) {
        t.addEventListener(e, i, ln);
      })(n, e, s),
      s
    );
  }
  class bn extends on {
    acquireContext(t, e) {
      const i = t && t.getContext && t.getContext("2d");
      return i && i.canvas === t
        ? ((function (t, e) {
            const i = t.style,
              n = t.getAttribute("height"),
              o = t.getAttribute("width");
            if (
              ((t.$chartjs = {
                initial: {
                  height: n,
                  width: o,
                  style: {
                    display: i.display,
                    height: i.height,
                    width: i.width,
                  },
                },
              }),
              (i.display = i.display || "block"),
              (i.boxSizing = i.boxSizing || "border-box"),
              rn(o))
            ) {
              const e = $e(t, "width");
              void 0 !== e && (t.width = e);
            }
            if (rn(n))
              if ("" === t.style.height) t.height = t.width / (e || 2);
              else {
                const e = $e(t, "height");
                void 0 !== e && (t.height = e);
              }
          })(t, e),
          i)
        : null;
    }
    releaseContext(t) {
      const e = t.canvas;
      if (!e.$chartjs) return !1;
      const i = e.$chartjs.initial;
      ["height", "width"].forEach((t) => {
        const n = i[t];
        l(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
      });
      const n = i.style || {};
      return (
        Object.keys(n).forEach((t) => {
          e.style[t] = n[t];
        }),
        (e.width = e.width),
        delete e.$chartjs,
        !0
      );
    }
    addEventListener(t, e, i) {
      this.removeEventListener(t, e);
      const n = t.$proxies || (t.$proxies = {}),
        o = { attach: hn, detach: dn, resize: pn }[e] || xn;
      n[e] = o(t, e, i);
    }
    removeEventListener(t, e) {
      const i = t.$proxies || (t.$proxies = {}),
        n = i[e];
      if (!n) return;
      (({ attach: mn, detach: mn, resize: mn }[e] || cn)(t, e, n),
        (i[e] = void 0));
    }
    getDevicePixelRatio() {
      return window.devicePixelRatio;
    }
    getMaximumSize(t, e, i, n) {
      return je(t, e, i, n);
    }
    isAttached(t) {
      const e = Ee(t);
      return !(!e || !Ee(e));
    }
  }
  class _n {
    constructor() {
      (this.x = void 0),
        (this.y = void 0),
        (this.active = !1),
        (this.options = void 0),
        (this.$animations = void 0);
    }
    tooltipPosition(t) {
      const { x: e, y: i } = this.getProps(["x", "y"], t);
      return { x: e, y: i };
    }
    hasValue() {
      return N(this.x) && N(this.y);
    }
    getProps(t, e) {
      const i = this,
        n = this.$animations;
      if (!e || !n) return i;
      const o = {};
      return (
        t.forEach((t) => {
          o[t] = n[t] && n[t].active() ? n[t]._to : i[t];
        }),
        o
      );
    }
  }
  (_n.defaults = {}), (_n.defaultRoutes = void 0);
  const yn = {
    values: (t) => (c(t) ? t : "" + t),
    numeric(t, e, i) {
      if (0 === t) return "0";
      const n = this.chart.options.locale;
      let o,
        s = t;
      if (i.length > 1) {
        const e = Math.max(
          Math.abs(i[0].value),
          Math.abs(i[i.length - 1].value)
        );
        (e < 1e-4 || e > 1e15) && (o = "scientific"),
          (s = (function (t, e) {
            let i =
              e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
            Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
            return i;
          })(t, i));
      }
      const a = z(Math.abs(s)),
        r = Math.max(Math.min(-1 * Math.floor(a), 20), 0),
        l = { notation: o, minimumFractionDigits: r, maximumFractionDigits: r };
      return Object.assign(l, this.options.ticks.format), Ke(t, n, l);
    },
    logarithmic(t, e, i) {
      if (0 === t) return "0";
      const n = t / Math.pow(10, Math.floor(z(t)));
      return 1 === n || 2 === n || 5 === n
        ? yn.numeric.call(this, t, e, i)
        : "";
    },
  };
  var vn = { formatters: yn };
  function Mn(t, e) {
    const i = t.options.ticks,
      n =
        i.maxTicksLimit ||
        (function (t) {
          const e = t.options.offset,
            i = t._tickSize(),
            n = t._length / i + (e ? 0 : 1),
            o = t._maxLength / i;
          return Math.floor(Math.min(n, o));
        })(t),
      o = i.major.enabled
        ? (function (t) {
            const e = [];
            let i, n;
            for (i = 0, n = t.length; i < n; i++) t[i].major && e.push(i);
            return e;
          })(e)
        : [],
      s = o.length,
      a = o[0],
      r = o[s - 1],
      c = [];
    if (s > n)
      return (
        (function (t, e, i, n) {
          let o,
            s = 0,
            a = i[0];
          for (n = Math.ceil(n), o = 0; o < t.length; o++)
            o === a && (e.push(t[o]), s++, (a = i[s * n]));
        })(e, c, o, s / n),
        c
      );
    const h = (function (t, e, i) {
      const n = (function (t) {
          const e = t.length;
          let i, n;
          if (e < 2) return !1;
          for (n = t[0], i = 1; i < e; ++i)
            if (t[i] - t[i - 1] !== n) return !1;
          return n;
        })(t),
        o = e.length / i;
      if (!n) return Math.max(o, 1);
      const s = (function (t) {
        const e = [],
          i = Math.sqrt(t);
        let n;
        for (n = 1; n < i; n++) t % n == 0 && (e.push(n), e.push(t / n));
        return i === (0 | i) && e.push(i), e.sort((t, e) => t - e).pop(), e;
      })(n);
      for (let t = 0, e = s.length - 1; t < e; t++) {
        const e = s[t];
        if (e > o) return e;
      }
      return Math.max(o, 1);
    })(o, e, n);
    if (s > 0) {
      let t, i;
      const n = s > 1 ? Math.round((r - a) / (s - 1)) : null;
      for (wn(e, c, h, l(n) ? 0 : a - n, a), t = 0, i = s - 1; t < i; t++)
        wn(e, c, h, o[t], o[t + 1]);
      return wn(e, c, h, r, l(n) ? e.length : r + n), c;
    }
    return wn(e, c, h), c;
  }
  function wn(t, e, i, n, o) {
    const s = g(n, 0),
      a = Math.min(g(o, t.length), t.length);
    let r,
      l,
      c,
      h = 0;
    for (
      i = Math.ceil(i), o && ((r = o - n), (i = r / Math.floor(r / i))), c = s;
      c < 0;

    )
      h++, (c = Math.round(s + h * i));
    for (l = Math.max(s, 0); l < a; l++)
      l === c && (e.push(t[l]), h++, (c = Math.round(s + h * i)));
  }
  Nt.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawBorder: !0,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, e) => e.lineWidth,
      tickColor: (t, e) => e.color,
      offset: !1,
      borderDash: [],
      borderDashOffset: 0,
      borderWidth: 1,
    },
    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: vn.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2,
    },
  }),
    Nt.route("scale.ticks", "color", "", "color"),
    Nt.route("scale.grid", "color", "", "borderColor"),
    Nt.route("scale.grid", "borderColor", "", "borderColor"),
    Nt.route("scale.title", "color", "", "color"),
    Nt.describe("scale", {
      _fallback: !1,
      _scriptable: (t) =>
        !t.startsWith("before") &&
        !t.startsWith("after") &&
        "callback" !== t &&
        "parser" !== t,
      _indexable: (t) => "borderDash" !== t && "tickBorderDash" !== t,
    }),
    Nt.describe("scales", { _fallback: "scale" });
  const kn = (t, e, i) => ("top" === e || "left" === e ? t[e] + i : t[e] - i);
  function Sn(t, e) {
    const i = [],
      n = t.length / e,
      o = t.length;
    let s = 0;
    for (; s < o; s += n) i.push(t[Math.floor(s)]);
    return i;
  }
  function Pn(t, e, i) {
    const n = t.ticks.length,
      o = Math.min(e, n - 1),
      s = t._startPixel,
      a = t._endPixel,
      r = 1e-6;
    let l,
      c = t.getPixelForTick(o);
    if (
      !(
        i &&
        ((l =
          1 === n
            ? Math.max(c - s, a - c)
            : 0 === e
            ? (t.getPixelForTick(1) - c) / 2
            : (c - t.getPixelForTick(o - 1)) / 2),
        (c += o < e ? l : -l),
        c < s - r || c > a + r)
      )
    )
      return c;
  }
  function On(t) {
    return t.drawTicks ? t.tickLength : 0;
  }
  function Dn(t, e) {
    if (!t.display) return 0;
    const i = ae(t.font, e),
      n = se(t.padding);
    return (c(t.text) ? t.text.length : 1) * i.lineHeight + n.height;
  }
  function Cn(t, e, i) {
    let n = s(t);
    return (
      ((i && "right" !== e) || (!i && "right" === e)) &&
        (n = ((t) => ("left" === t ? "right" : "right" === t ? "left" : t))(n)),
      n
    );
  }
  class Tn extends _n {
    constructor(t) {
      super(),
        (this.id = t.id),
        (this.type = t.type),
        (this.options = void 0),
        (this.ctx = t.ctx),
        (this.chart = t.chart),
        (this.top = void 0),
        (this.bottom = void 0),
        (this.left = void 0),
        (this.right = void 0),
        (this.width = void 0),
        (this.height = void 0),
        (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
        (this.maxWidth = void 0),
        (this.maxHeight = void 0),
        (this.paddingTop = void 0),
        (this.paddingBottom = void 0),
        (this.paddingLeft = void 0),
        (this.paddingRight = void 0),
        (this.axis = void 0),
        (this.labelRotation = void 0),
        (this.min = void 0),
        (this.max = void 0),
        (this._range = void 0),
        (this.ticks = []),
        (this._gridLineItems = null),
        (this._labelItems = null),
        (this._labelSizes = null),
        (this._length = 0),
        (this._maxLength = 0),
        (this._longestTextCache = {}),
        (this._startPixel = void 0),
        (this._endPixel = void 0),
        (this._reversePixels = !1),
        (this._userMax = void 0),
        (this._userMin = void 0),
        (this._suggestedMax = void 0),
        (this._suggestedMin = void 0),
        (this._ticksLength = 0),
        (this._borderValue = 0),
        (this._cache = {}),
        (this._dataLimitsCached = !1),
        (this.$context = void 0);
    }
    init(t) {
      const e = this;
      (e.options = t.setContext(e.getContext())),
        (e.axis = t.axis),
        (e._userMin = e.parse(t.min)),
        (e._userMax = e.parse(t.max)),
        (e._suggestedMin = e.parse(t.suggestedMin)),
        (e._suggestedMax = e.parse(t.suggestedMax));
    }
    parse(t, e) {
      return t;
    }
    getUserBounds() {
      let {
        _userMin: t,
        _userMax: e,
        _suggestedMin: i,
        _suggestedMax: n,
      } = this;
      return (
        (t = u(t, Number.POSITIVE_INFINITY)),
        (e = u(e, Number.NEGATIVE_INFINITY)),
        (i = u(i, Number.POSITIVE_INFINITY)),
        (n = u(n, Number.NEGATIVE_INFINITY)),
        { min: u(t, i), max: u(e, n), minDefined: d(t), maxDefined: d(e) }
      );
    }
    getMinMax(t) {
      const e = this;
      let i,
        { min: n, max: o, minDefined: s, maxDefined: a } = e.getUserBounds();
      if (s && a) return { min: n, max: o };
      const r = e.getMatchingVisibleMetas();
      for (let l = 0, c = r.length; l < c; ++l)
        (i = r[l].controller.getMinMax(e, t)),
          s || (n = Math.min(n, i.min)),
          a || (o = Math.max(o, i.max));
      return { min: u(n, u(o, n)), max: u(o, u(n, o)) };
    }
    getPadding() {
      const t = this;
      return {
        left: t.paddingLeft || 0,
        top: t.paddingTop || 0,
        right: t.paddingRight || 0,
        bottom: t.paddingBottom || 0,
      };
    }
    getTicks() {
      return this.ticks;
    }
    getLabels() {
      const t = this.chart.data;
      return (
        this.options.labels ||
        (this.isHorizontal() ? t.xLabels : t.yLabels) ||
        t.labels ||
        []
      );
    }
    beforeLayout() {
      (this._cache = {}), (this._dataLimitsCached = !1);
    }
    beforeUpdate() {
      p(this.options.beforeUpdate, [this]);
    }
    update(t, e, i) {
      const n = this,
        o = n.options.ticks,
        s = o.sampleSize;
      n.beforeUpdate(),
        (n.maxWidth = t),
        (n.maxHeight = e),
        (n._margins = i =
          Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
        (n.ticks = null),
        (n._labelSizes = null),
        (n._gridLineItems = null),
        (n._labelItems = null),
        n.beforeSetDimensions(),
        n.setDimensions(),
        n.afterSetDimensions(),
        (n._maxLength = n.isHorizontal()
          ? n.width + i.left + i.right
          : n.height + i.top + i.bottom),
        n._dataLimitsCached ||
          (n.beforeDataLimits(),
          n.determineDataLimits(),
          n.afterDataLimits(),
          (n._range = (function (t, e) {
            const { min: i, max: n } = t;
            return { min: i - Math.abs(f(e, i)), max: n + f(e, n) };
          })(n, n.options.grace)),
          (n._dataLimitsCached = !0)),
        n.beforeBuildTicks(),
        (n.ticks = n.buildTicks() || []),
        n.afterBuildTicks();
      const a = s < n.ticks.length;
      n._convertTicksToLabels(a ? Sn(n.ticks, s) : n.ticks),
        n.configure(),
        n.beforeCalculateLabelRotation(),
        n.calculateLabelRotation(),
        n.afterCalculateLabelRotation(),
        o.display &&
          (o.autoSkip || "auto" === o.source) &&
          ((n.ticks = Mn(n, n.ticks)), (n._labelSizes = null)),
        a && n._convertTicksToLabels(n.ticks),
        n.beforeFit(),
        n.fit(),
        n.afterFit(),
        n.afterUpdate();
    }
    configure() {
      const t = this;
      let e,
        i,
        n = t.options.reverse;
      t.isHorizontal()
        ? ((e = t.left), (i = t.right))
        : ((e = t.top), (i = t.bottom), (n = !n)),
        (t._startPixel = e),
        (t._endPixel = i),
        (t._reversePixels = n),
        (t._length = i - e),
        (t._alignToPixels = t.options.alignToPixels);
    }
    afterUpdate() {
      p(this.options.afterUpdate, [this]);
    }
    beforeSetDimensions() {
      p(this.options.beforeSetDimensions, [this]);
    }
    setDimensions() {
      const t = this;
      t.isHorizontal()
        ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
        : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
        (t.paddingLeft = 0),
        (t.paddingTop = 0),
        (t.paddingRight = 0),
        (t.paddingBottom = 0);
    }
    afterSetDimensions() {
      p(this.options.afterSetDimensions, [this]);
    }
    _callHooks(t) {
      const e = this;
      e.chart.notifyPlugins(t, e.getContext()), p(e.options[t], [e]);
    }
    beforeDataLimits() {
      this._callHooks("beforeDataLimits");
    }
    determineDataLimits() {}
    afterDataLimits() {
      this._callHooks("afterDataLimits");
    }
    beforeBuildTicks() {
      this._callHooks("beforeBuildTicks");
    }
    buildTicks() {
      return [];
    }
    afterBuildTicks() {
      this._callHooks("afterBuildTicks");
    }
    beforeTickToLabelConversion() {
      p(this.options.beforeTickToLabelConversion, [this]);
    }
    generateTickLabels(t) {
      const e = this,
        i = e.options.ticks;
      let n, o, s;
      for (n = 0, o = t.length; n < o; n++)
        (s = t[n]), (s.label = p(i.callback, [s.value, n, t], e));
      for (n = 0; n < o; n++) l(t[n].label) && (t.splice(n, 1), o--, n--);
    }
    afterTickToLabelConversion() {
      p(this.options.afterTickToLabelConversion, [this]);
    }
    beforeCalculateLabelRotation() {
      p(this.options.beforeCalculateLabelRotation, [this]);
    }
    calculateLabelRotation() {
      const t = this,
        e = t.options,
        i = e.ticks,
        n = t.ticks.length,
        o = i.minRotation || 0,
        s = i.maxRotation;
      let a,
        r,
        l,
        c = o;
      if (
        !t._isVisible() ||
        !i.display ||
        o >= s ||
        n <= 1 ||
        !t.isHorizontal()
      )
        return void (t.labelRotation = o);
      const h = t._getLabelSizes(),
        d = h.widest.width,
        u = h.highest.height,
        g = G(t.chart.width - d, 0, t.maxWidth);
      (a = e.offset ? t.maxWidth / n : g / (n - 1)),
        d + 6 > a &&
          ((a = g / (n - (e.offset ? 0.5 : 1))),
          (r =
            t.maxHeight -
            On(e.grid) -
            i.padding -
            Dn(e.title, t.chart.options.font)),
          (l = Math.sqrt(d * d + u * u)),
          (c = $(
            Math.min(
              Math.asin(Math.min((h.highest.height + 6) / a, 1)),
              Math.asin(Math.min(r / l, 1)) - Math.asin(u / l)
            )
          )),
          (c = Math.max(o, Math.min(s, c)))),
        (t.labelRotation = c);
    }
    afterCalculateLabelRotation() {
      p(this.options.afterCalculateLabelRotation, [this]);
    }
    beforeFit() {
      p(this.options.beforeFit, [this]);
    }
    fit() {
      const t = this,
        e = { width: 0, height: 0 },
        {
          chart: i,
          options: { ticks: n, title: o, grid: s },
        } = t,
        a = t._isVisible(),
        r = t.isHorizontal();
      if (a) {
        const a = Dn(o, i.options.font);
        if (
          (r
            ? ((e.width = t.maxWidth), (e.height = On(s) + a))
            : ((e.height = t.maxHeight), (e.width = On(s) + a)),
          n.display && t.ticks.length)
        ) {
          const {
              first: i,
              last: o,
              widest: s,
              highest: a,
            } = t._getLabelSizes(),
            l = 2 * n.padding,
            c = H(t.labelRotation),
            h = Math.cos(c),
            d = Math.sin(c);
          if (r) {
            const i = n.mirror ? 0 : d * s.width + h * a.height;
            e.height = Math.min(t.maxHeight, e.height + i + l);
          } else {
            const i = n.mirror ? 0 : h * s.width + d * a.height;
            e.width = Math.min(t.maxWidth, e.width + i + l);
          }
          t._calculatePadding(i, o, d, h);
        }
      }
      t._handleMargins(),
        r
          ? ((t.width = t._length =
              i.width - t._margins.left - t._margins.right),
            (t.height = e.height))
          : ((t.width = e.width),
            (t.height = t._length =
              i.height - t._margins.top - t._margins.bottom));
    }
    _calculatePadding(t, e, i, n) {
      const o = this,
        {
          ticks: { align: s, padding: a },
          position: r,
        } = o.options,
        l = 0 !== o.labelRotation,
        c = "top" !== r && "x" === o.axis;
      if (o.isHorizontal()) {
        const r = o.getPixelForTick(0) - o.left,
          h = o.right - o.getPixelForTick(o.ticks.length - 1);
        let d = 0,
          u = 0;
        l
          ? c
            ? ((d = n * t.width), (u = i * e.height))
            : ((d = i * t.height), (u = n * e.width))
          : "start" === s
          ? (u = e.width)
          : "end" === s
          ? (d = t.width)
          : ((d = t.width / 2), (u = e.width / 2)),
          (o.paddingLeft = Math.max(
            ((d - r + a) * o.width) / (o.width - r),
            0
          )),
          (o.paddingRight = Math.max(
            ((u - h + a) * o.width) / (o.width - h),
            0
          ));
      } else {
        let i = e.height / 2,
          n = t.height / 2;
        "start" === s
          ? ((i = 0), (n = t.height))
          : "end" === s && ((i = e.height), (n = 0)),
          (o.paddingTop = i + a),
          (o.paddingBottom = n + a);
      }
    }
    _handleMargins() {
      const t = this;
      t._margins &&
        ((t._margins.left = Math.max(t.paddingLeft, t._margins.left)),
        (t._margins.top = Math.max(t.paddingTop, t._margins.top)),
        (t._margins.right = Math.max(t.paddingRight, t._margins.right)),
        (t._margins.bottom = Math.max(t.paddingBottom, t._margins.bottom)));
    }
    afterFit() {
      p(this.options.afterFit, [this]);
    }
    isHorizontal() {
      const { axis: t, position: e } = this.options;
      return "top" === e || "bottom" === e || "x" === t;
    }
    isFullSize() {
      return this.options.fullSize;
    }
    _convertTicksToLabels(t) {
      const e = this;
      e.beforeTickToLabelConversion(),
        e.generateTickLabels(t),
        e.afterTickToLabelConversion();
    }
    _getLabelSizes() {
      const t = this;
      let e = t._labelSizes;
      if (!e) {
        const i = t.options.ticks.sampleSize;
        let n = t.ticks;
        i < n.length && (n = Sn(n, i)),
          (t._labelSizes = e = t._computeLabelSizes(n, n.length));
      }
      return e;
    }
    _computeLabelSizes(t, e) {
      const { ctx: i, _longestTextCache: n } = this,
        o = [],
        s = [];
      let a,
        r,
        h,
        d,
        u,
        g,
        f,
        p,
        x,
        b,
        _,
        y = 0,
        v = 0;
      for (a = 0; a < e; ++a) {
        if (
          ((d = t[a].label),
          (u = this._resolveTickFontOptions(a)),
          (i.font = g = u.string),
          (f = n[g] = n[g] || { data: {}, gc: [] }),
          (p = u.lineHeight),
          (x = b = 0),
          l(d) || c(d))
        ) {
          if (c(d))
            for (r = 0, h = d.length; r < h; ++r)
              (_ = d[r]),
                l(_) || c(_) || ((x = jt(i, f.data, f.gc, x, _)), (b += p));
        } else (x = jt(i, f.data, f.gc, x, d)), (b = p);
        o.push(x), s.push(b), (y = Math.max(x, y)), (v = Math.max(b, v));
      }
      !(function (t, e) {
        m(t, (t) => {
          const i = t.gc,
            n = i.length / 2;
          let o;
          if (n > e) {
            for (o = 0; o < n; ++o) delete t.data[i[o]];
            i.splice(0, n);
          }
        });
      })(n, e);
      const M = o.indexOf(y),
        w = s.indexOf(v),
        k = (t) => ({ width: o[t] || 0, height: s[t] || 0 });
      return {
        first: k(0),
        last: k(e - 1),
        widest: k(M),
        highest: k(w),
        widths: o,
        heights: s,
      };
    }
    getLabelForValue(t) {
      return t;
    }
    getPixelForValue(t, e) {
      return NaN;
    }
    getValueForPixel(t) {}
    getPixelForTick(t) {
      const e = this.ticks;
      return t < 0 || t > e.length - 1
        ? null
        : this.getPixelForValue(e[t].value);
    }
    getPixelForDecimal(t) {
      const e = this;
      e._reversePixels && (t = 1 - t);
      const i = e._startPixel + t * e._length;
      return G(e._alignToPixels ? Ht(e.chart, i, 0) : i, -32768, 32767);
    }
    getDecimalForPixel(t) {
      const e = (t - this._startPixel) / this._length;
      return this._reversePixels ? 1 - e : e;
    }
    getBasePixel() {
      return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
      const { min: t, max: e } = this;
      return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
    }
    getContext(t) {
      const e = this,
        i = e.ticks || [];
      if (t >= 0 && t < i.length) {
        const n = i[t];
        return (
          n.$context ||
          (n.$context = (function (t, e, i) {
            return Object.assign(Object.create(t), {
              tick: i,
              index: e,
              type: "tick",
            });
          })(e.getContext(), t, n))
        );
      }
      return (
        e.$context ||
        (e.$context =
          ((n = e.chart.getContext()),
          (o = e),
          Object.assign(Object.create(n), { scale: o, type: "scale" })))
      );
      var n, o;
    }
    _tickSize() {
      const t = this,
        e = t.options.ticks,
        i = H(t.labelRotation),
        n = Math.abs(Math.cos(i)),
        o = Math.abs(Math.sin(i)),
        s = t._getLabelSizes(),
        a = e.autoSkipPadding || 0,
        r = s ? s.widest.width + a : 0,
        l = s ? s.highest.height + a : 0;
      return t.isHorizontal()
        ? l * n > r * o
          ? r / n
          : l / o
        : l * o < r * n
        ? l / n
        : r / o;
    }
    _isVisible() {
      const t = this.options.display;
      return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(t) {
      const e = this,
        i = e.axis,
        n = e.chart,
        o = e.options,
        { grid: s, position: a } = o,
        r = s.offset,
        l = e.isHorizontal(),
        c = e.ticks.length + (r ? 1 : 0),
        d = On(s),
        u = [],
        g = s.setContext(e.getContext()),
        f = g.drawBorder ? g.borderWidth : 0,
        p = f / 2,
        m = function (t) {
          return Ht(n, t, f);
        };
      let x, b, _, y, v, M, w, k, S, P, O, D;
      if ("top" === a)
        (x = m(e.bottom)),
          (M = e.bottom - d),
          (k = x - p),
          (P = m(t.top) + p),
          (D = t.bottom);
      else if ("bottom" === a)
        (x = m(e.top)),
          (P = t.top),
          (D = m(t.bottom) - p),
          (M = x + p),
          (k = e.top + d);
      else if ("left" === a)
        (x = m(e.right)),
          (v = e.right - d),
          (w = x - p),
          (S = m(t.left) + p),
          (O = t.right);
      else if ("right" === a)
        (x = m(e.left)),
          (S = t.left),
          (O = m(t.right) - p),
          (v = x + p),
          (w = e.left + d);
      else if ("x" === i) {
        if ("center" === a) x = m((t.top + t.bottom) / 2 + 0.5);
        else if (h(a)) {
          const t = Object.keys(a)[0],
            i = a[t];
          x = m(e.chart.scales[t].getPixelForValue(i));
        }
        (P = t.top), (D = t.bottom), (M = x + p), (k = M + d);
      } else if ("y" === i) {
        if ("center" === a) x = m((t.left + t.right) / 2);
        else if (h(a)) {
          const t = Object.keys(a)[0],
            i = a[t];
          x = m(e.chart.scales[t].getPixelForValue(i));
        }
        (v = x - p), (w = v - d), (S = t.left), (O = t.right);
      }
      for (b = 0; b < c; ++b) {
        const t = s.setContext(e.getContext(b)),
          i = t.lineWidth,
          o = t.color,
          a = s.borderDash || [],
          c = t.borderDashOffset,
          h = t.tickWidth,
          d = t.tickColor,
          g = t.tickBorderDash || [],
          f = t.tickBorderDashOffset;
        (_ = Pn(e, b, r)),
          void 0 !== _ &&
            ((y = Ht(n, _, i)),
            l ? (v = w = S = O = y) : (M = k = P = D = y),
            u.push({
              tx1: v,
              ty1: M,
              tx2: w,
              ty2: k,
              x1: S,
              y1: P,
              x2: O,
              y2: D,
              width: i,
              color: o,
              borderDash: a,
              borderDashOffset: c,
              tickWidth: h,
              tickColor: d,
              tickBorderDash: g,
              tickBorderDashOffset: f,
            }));
      }
      return (e._ticksLength = c), (e._borderValue = x), u;
    }
    _computeLabelItems(t) {
      const e = this,
        i = e.axis,
        n = e.options,
        { position: o, ticks: s } = n,
        a = e.isHorizontal(),
        r = e.ticks,
        { align: l, crossAlign: d, padding: u, mirror: g } = s,
        f = On(n.grid),
        p = f + u,
        m = g ? -u : p,
        x = -H(e.labelRotation),
        b = [];
      let _,
        y,
        v,
        M,
        w,
        k,
        S,
        P,
        O,
        D,
        C,
        T,
        A = "middle";
      if ("top" === o) (k = e.bottom - m), (S = e._getXAxisLabelAlignment());
      else if ("bottom" === o)
        (k = e.top + m), (S = e._getXAxisLabelAlignment());
      else if ("left" === o) {
        const t = e._getYAxisLabelAlignment(f);
        (S = t.textAlign), (w = t.x);
      } else if ("right" === o) {
        const t = e._getYAxisLabelAlignment(f);
        (S = t.textAlign), (w = t.x);
      } else if ("x" === i) {
        if ("center" === o) k = (t.top + t.bottom) / 2 + p;
        else if (h(o)) {
          const t = Object.keys(o)[0],
            i = o[t];
          k = e.chart.scales[t].getPixelForValue(i) + p;
        }
        S = e._getXAxisLabelAlignment();
      } else if ("y" === i) {
        if ("center" === o) w = (t.left + t.right) / 2 - p;
        else if (h(o)) {
          const t = Object.keys(o)[0],
            i = o[t];
          w = e.chart.scales[t].getPixelForValue(i);
        }
        S = e._getYAxisLabelAlignment(f).textAlign;
      }
      "y" === i &&
        ("start" === l ? (A = "top") : "end" === l && (A = "bottom"));
      const L = e._getLabelSizes();
      for (_ = 0, y = r.length; _ < y; ++_) {
        (v = r[_]), (M = v.label);
        const t = s.setContext(e.getContext(_));
        (P = e.getPixelForTick(_) + s.labelOffset),
          (O = e._resolveTickFontOptions(_)),
          (D = O.lineHeight),
          (C = c(M) ? M.length : 1);
        const i = C / 2,
          n = t.color,
          l = t.textStrokeColor,
          h = t.textStrokeWidth;
        let u;
        if (
          (a
            ? ((w = P),
              (T =
                "top" === o
                  ? "near" === d || 0 !== x
                    ? -C * D + D / 2
                    : "center" === d
                    ? -L.highest.height / 2 - i * D + D
                    : -L.highest.height + D / 2
                  : "near" === d || 0 !== x
                  ? D / 2
                  : "center" === d
                  ? L.highest.height / 2 - i * D
                  : L.highest.height - C * D),
              g && (T *= -1))
            : ((k = P), (T = ((1 - C) * D) / 2)),
          t.showLabelBackdrop)
        ) {
          const e = se(t.backdropPadding),
            i = L.heights[_],
            n = L.widths[_];
          let o = k + T - e.top,
            s = w - e.left;
          switch (A) {
            case "middle":
              o -= i / 2;
              break;
            case "bottom":
              o -= i;
          }
          switch (S) {
            case "center":
              s -= n / 2;
              break;
            case "right":
              s -= n;
          }
          u = {
            left: s,
            top: o,
            width: n + e.width,
            height: i + e.height,
            color: t.backdropColor,
          };
        }
        b.push({
          rotation: x,
          label: M,
          font: O,
          color: n,
          strokeColor: l,
          strokeWidth: h,
          textOffset: T,
          textAlign: S,
          textBaseline: A,
          translation: [w, k],
          backdrop: u,
        });
      }
      return b;
    }
    _getXAxisLabelAlignment() {
      const { position: t, ticks: e } = this.options;
      if (-H(this.labelRotation)) return "top" === t ? "left" : "right";
      let i = "center";
      return (
        "start" === e.align ? (i = "left") : "end" === e.align && (i = "right"),
        i
      );
    }
    _getYAxisLabelAlignment(t) {
      const e = this,
        {
          position: i,
          ticks: { crossAlign: n, mirror: o, padding: s },
        } = e.options,
        a = t + s,
        r = e._getLabelSizes().widest.width;
      let l, c;
      return (
        "left" === i
          ? o
            ? ((l = "left"), (c = e.right + s))
            : ((c = e.right - a),
              "near" === n
                ? (l = "right")
                : "center" === n
                ? ((l = "center"), (c -= r / 2))
                : ((l = "left"), (c = e.left)))
          : "right" === i
          ? o
            ? ((l = "right"), (c = e.left + s))
            : ((c = e.left + a),
              "near" === n
                ? (l = "left")
                : "center" === n
                ? ((l = "center"), (c += r / 2))
                : ((l = "right"), (c = e.right)))
          : (l = "right"),
        { textAlign: l, x: c }
      );
    }
    _computeLabelArea() {
      const t = this;
      if (t.options.ticks.mirror) return;
      const e = t.chart,
        i = t.options.position;
      return "left" === i || "right" === i
        ? { top: 0, left: t.left, bottom: e.height, right: t.right }
        : "top" === i || "bottom" === i
        ? { top: t.top, left: 0, bottom: t.bottom, right: e.width }
        : void 0;
    }
    drawBackground() {
      const {
        ctx: t,
        options: { backgroundColor: e },
        left: i,
        top: n,
        width: o,
        height: s,
      } = this;
      e && (t.save(), (t.fillStyle = e), t.fillRect(i, n, o, s), t.restore());
    }
    getLineWidthForValue(t) {
      const e = this,
        i = e.options.grid;
      if (!e._isVisible() || !i.display) return 0;
      const n = e.ticks.findIndex((e) => e.value === t);
      if (n >= 0) {
        return i.setContext(e.getContext(n)).lineWidth;
      }
      return 0;
    }
    drawGrid(t) {
      const e = this,
        i = e.options.grid,
        n = e.ctx,
        o = e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t));
      let s, a;
      const r = (t, e, i) => {
        i.width &&
          i.color &&
          (n.save(),
          (n.lineWidth = i.width),
          (n.strokeStyle = i.color),
          n.setLineDash(i.borderDash || []),
          (n.lineDashOffset = i.borderDashOffset),
          n.beginPath(),
          n.moveTo(t.x, t.y),
          n.lineTo(e.x, e.y),
          n.stroke(),
          n.restore());
      };
      if (i.display)
        for (s = 0, a = o.length; s < a; ++s) {
          const t = o[s];
          i.drawOnChartArea && r({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
            i.drawTicks &&
              r(
                { x: t.tx1, y: t.ty1 },
                { x: t.tx2, y: t.ty2 },
                {
                  color: t.tickColor,
                  width: t.tickWidth,
                  borderDash: t.tickBorderDash,
                  borderDashOffset: t.tickBorderDashOffset,
                }
              );
        }
    }
    drawBorder() {
      const t = this,
        {
          chart: e,
          ctx: i,
          options: { grid: n },
        } = t,
        o = n.setContext(t.getContext()),
        s = n.drawBorder ? o.borderWidth : 0;
      if (!s) return;
      const a = n.setContext(t.getContext(0)).lineWidth,
        r = t._borderValue;
      let l, c, h, d;
      t.isHorizontal()
        ? ((l = Ht(e, t.left, s) - s / 2),
          (c = Ht(e, t.right, a) + a / 2),
          (h = d = r))
        : ((h = Ht(e, t.top, s) - s / 2),
          (d = Ht(e, t.bottom, a) + a / 2),
          (l = c = r)),
        i.save(),
        (i.lineWidth = o.borderWidth),
        (i.strokeStyle = o.borderColor),
        i.beginPath(),
        i.moveTo(l, h),
        i.lineTo(c, d),
        i.stroke(),
        i.restore();
    }
    drawLabels(t) {
      const e = this;
      if (!e.options.ticks.display) return;
      const i = e.ctx,
        n = e._computeLabelArea();
      n && Ut(i, n);
      const o = e._labelItems || (e._labelItems = e._computeLabelItems(t));
      let s, a;
      for (s = 0, a = o.length; s < a; ++s) {
        const t = o[s],
          e = t.font,
          n = t.label;
        t.backdrop &&
          ((i.fillStyle = t.backdrop.color),
          i.fillRect(
            t.backdrop.left,
            t.backdrop.top,
            t.backdrop.width,
            t.backdrop.height
          )),
          Zt(i, n, 0, t.textOffset, e, t);
      }
      n && Xt(i);
    }
    drawTitle() {
      const {
        ctx: t,
        options: { position: e, title: i, reverse: n },
      } = this;
      if (!i.display) return;
      const o = ae(i.font),
        s = se(i.padding),
        r = i.align;
      let l = o.lineHeight / 2;
      "bottom" === e
        ? ((l += s.bottom),
          c(i.text) && (l += o.lineHeight * (i.text.length - 1)))
        : (l += s.top);
      const {
        titleX: h,
        titleY: d,
        maxWidth: u,
        rotation: g,
      } = (function (t, e, i, n) {
        const { top: o, left: s, bottom: r, right: l } = t;
        let c,
          h,
          d,
          u = 0;
        return (
          t.isHorizontal()
            ? ((h = a(n, s, l)), (d = kn(t, i, e)), (c = l - s))
            : ((h = kn(t, i, e)),
              (d = a(n, r, o)),
              (u = "left" === i ? -E : E)),
          { titleX: h, titleY: d, maxWidth: c, rotation: u }
        );
      })(this, l, e, r);
      Zt(t, i.text, 0, 0, o, {
        color: i.color,
        maxWidth: u,
        rotation: g,
        textAlign: Cn(r, e, n),
        textBaseline: "middle",
        translation: [h, d],
      });
    }
    draw(t) {
      const e = this;
      e._isVisible() &&
        (e.drawBackground(),
        e.drawGrid(t),
        e.drawBorder(),
        e.drawTitle(),
        e.drawLabels(t));
    }
    _layers() {
      const t = this,
        e = t.options,
        i = (e.ticks && e.ticks.z) || 0,
        n = (e.grid && e.grid.z) || 0;
      return t._isVisible() && t.draw === Tn.prototype.draw
        ? [
            {
              z: n,
              draw(e) {
                t.drawBackground(), t.drawGrid(e), t.drawTitle();
              },
            },
            {
              z: n + 1,
              draw() {
                t.drawBorder();
              },
            },
            {
              z: i,
              draw(e) {
                t.drawLabels(e);
              },
            },
          ]
        : [
            {
              z: i,
              draw(e) {
                t.draw(e);
              },
            },
          ];
    }
    getMatchingVisibleMetas(t) {
      const e = this,
        i = e.chart.getSortedVisibleDatasetMetas(),
        n = e.axis + "AxisID",
        o = [];
      let s, a;
      for (s = 0, a = i.length; s < a; ++s) {
        const a = i[s];
        a[n] !== e.id || (t && a.type !== t) || o.push(a);
      }
      return o;
    }
    _resolveTickFontOptions(t) {
      return ae(this.options.ticks.setContext(this.getContext(t)).font);
    }
    _maxDigits() {
      const t = this,
        e = t._resolveTickFontOptions(0).lineHeight;
      return (t.isHorizontal() ? t.width : t.height) / e;
    }
  }
  class An {
    constructor(t, e, i) {
      (this.type = t),
        (this.scope = e),
        (this.override = i),
        (this.items = Object.create(null));
    }
    isForType(t) {
      return Object.prototype.isPrototypeOf.call(
        this.type.prototype,
        t.prototype
      );
    }
    register(t) {
      const e = this,
        i = Object.getPrototypeOf(t);
      let n;
      (function (t) {
        return "id" in t && "defaults" in t;
      })(i) && (n = e.register(i));
      const o = e.items,
        s = t.id,
        a = e.scope + "." + s;
      if (!s) throw new Error("class does not have id: " + t);
      return (
        s in o ||
          ((o[s] = t),
          (function (t, e, i) {
            const n = v(Object.create(null), [
              i ? Nt.get(i) : {},
              Nt.get(e),
              t.defaults,
            ]);
            Nt.set(e, n),
              t.defaultRoutes &&
                (function (t, e) {
                  Object.keys(e).forEach((i) => {
                    const n = i.split("."),
                      o = n.pop(),
                      s = [t].concat(n).join("."),
                      a = e[i].split("."),
                      r = a.pop(),
                      l = a.join(".");
                    Nt.route(s, o, l, r);
                  });
                })(e, t.defaultRoutes);
            t.descriptors && Nt.describe(e, t.descriptors);
          })(t, a, n),
          e.override && Nt.override(t.id, t.overrides)),
        a
      );
    }
    get(t) {
      return this.items[t];
    }
    unregister(t) {
      const e = this.items,
        i = t.id,
        n = this.scope;
      i in e && delete e[i],
        n && i in Nt[n] && (delete Nt[n][i], this.override && delete Ft[i]);
    }
  }
  var Ln = new (class {
    constructor() {
      (this.controllers = new An(wi, "datasets", !0)),
        (this.elements = new An(_n, "elements")),
        (this.plugins = new An(Object, "plugins")),
        (this.scales = new An(Tn, "scales")),
        (this._typedRegistries = [
          this.controllers,
          this.scales,
          this.elements,
        ]);
    }
    add(...t) {
      this._each("register", t);
    }
    remove(...t) {
      this._each("unregister", t);
    }
    addControllers(...t) {
      this._each("register", t, this.controllers);
    }
    addElements(...t) {
      this._each("register", t, this.elements);
    }
    addPlugins(...t) {
      this._each("register", t, this.plugins);
    }
    addScales(...t) {
      this._each("register", t, this.scales);
    }
    getController(t) {
      return this._get(t, this.controllers, "controller");
    }
    getElement(t) {
      return this._get(t, this.elements, "element");
    }
    getPlugin(t) {
      return this._get(t, this.plugins, "plugin");
    }
    getScale(t) {
      return this._get(t, this.scales, "scale");
    }
    removeControllers(...t) {
      this._each("unregister", t, this.controllers);
    }
    removeElements(...t) {
      this._each("unregister", t, this.elements);
    }
    removePlugins(...t) {
      this._each("unregister", t, this.plugins);
    }
    removeScales(...t) {
      this._each("unregister", t, this.scales);
    }
    _each(t, e, i) {
      const n = this;
      [...e].forEach((e) => {
        const o = i || n._getRegistryForType(e);
        i || o.isForType(e) || (o === n.plugins && e.id)
          ? n._exec(t, o, e)
          : m(e, (e) => {
              const o = i || n._getRegistryForType(e);
              n._exec(t, o, e);
            });
      });
    }
    _exec(t, e, i) {
      const n = P(t);
      p(i["before" + n], [], i), e[t](i), p(i["after" + n], [], i);
    }
    _getRegistryForType(t) {
      for (let e = 0; e < this._typedRegistries.length; e++) {
        const i = this._typedRegistries[e];
        if (i.isForType(t)) return i;
      }
      return this.plugins;
    }
    _get(t, e, i) {
      const n = e.get(t);
      if (void 0 === n)
        throw new Error('"' + t + '" is not a registered ' + i + ".");
      return n;
    }
  })();
  class Rn {
    constructor() {
      this._init = [];
    }
    notify(t, e, i, n) {
      const o = this;
      "beforeInit" === e &&
        ((o._init = o._createDescriptors(t, !0)),
        o._notify(o._init, t, "install"));
      const s = n ? o._descriptors(t).filter(n) : o._descriptors(t),
        a = o._notify(s, t, e, i);
      return (
        "destroy" === e &&
          (o._notify(s, t, "stop"), o._notify(o._init, t, "uninstall")),
        a
      );
    }
    _notify(t, e, i, n) {
      n = n || {};
      for (const o of t) {
        const t = o.plugin;
        if (!1 === p(t[i], [e, n, o.options], t) && n.cancelable) return !1;
      }
      return !0;
    }
    invalidate() {
      l(this._cache) ||
        ((this._oldCache = this._cache), (this._cache = void 0));
    }
    _descriptors(t) {
      if (this._cache) return this._cache;
      const e = (this._cache = this._createDescriptors(t));
      return this._notifyStateChanges(t), e;
    }
    _createDescriptors(t, e) {
      const i = t && t.config,
        n = g(i.options && i.options.plugins, {}),
        o = (function (t) {
          const e = [],
            i = Object.keys(Ln.plugins.items);
          for (let t = 0; t < i.length; t++) e.push(Ln.getPlugin(i[t]));
          const n = t.plugins || [];
          for (let t = 0; t < n.length; t++) {
            const i = n[t];
            -1 === e.indexOf(i) && e.push(i);
          }
          return e;
        })(i);
      return !1 !== n || e
        ? (function (t, e, i, n) {
            const o = [],
              s = t.getContext();
            for (let a = 0; a < e.length; a++) {
              const r = e[a],
                l = En(i[r.id], n);
              null !== l &&
                o.push({ plugin: r, options: In(t.config, r, l, s) });
            }
            return o;
          })(t, o, n, e)
        : [];
    }
    _notifyStateChanges(t) {
      const e = this._oldCache || [],
        i = this._cache,
        n = (t, e) =>
          t.filter((t) => !e.some((e) => t.plugin.id === e.plugin.id));
      this._notify(n(e, i), t, "stop"), this._notify(n(i, e), t, "start");
    }
  }
  function En(t, e) {
    return e || !1 !== t ? (!0 === t ? {} : t) : null;
  }
  function In(t, e, i, n) {
    const o = t.pluginScopeKeys(e),
      s = t.getOptionScopes(i, o);
    return t.createResolver(s, n, [""], {
      scriptable: !1,
      indexable: !1,
      allKeys: !0,
    });
  }
  function Fn(t, e) {
    const i = Nt.datasets[t] || {};
    return (
      ((e.datasets || {})[t] || {}).indexAxis ||
      e.indexAxis ||
      i.indexAxis ||
      "x"
    );
  }
  function zn(t, e) {
    return "x" === t || "y" === t
      ? t
      : e.axis ||
          ("top" === (i = e.position) || "bottom" === i
            ? "x"
            : "left" === i || "right" === i
            ? "y"
            : void 0) ||
          t.charAt(0).toLowerCase();
    var i;
  }
  function Vn(t) {
    const e = t.options || (t.options = {});
    (e.plugins = g(e.plugins, {})),
      (e.scales = (function (t, e) {
        const i = Ft[t.type] || { scales: {} },
          n = e.scales || {},
          o = Fn(t.type, e),
          s = Object.create(null),
          a = Object.create(null);
        return (
          Object.keys(n).forEach((t) => {
            const e = n[t],
              r = zn(t, e),
              l = (function (t, e) {
                return t === e ? "_index_" : "_value_";
              })(r, o),
              c = i.scales || {};
            (s[r] = s[r] || t),
              (a[t] = M(Object.create(null), [{ axis: r }, e, c[r], c[l]]));
          }),
          t.data.datasets.forEach((i) => {
            const o = i.type || t.type,
              r = i.indexAxis || Fn(o, e),
              l = (Ft[o] || {}).scales || {};
            Object.keys(l).forEach((t) => {
              const e = (function (t, e) {
                  let i = t;
                  return (
                    "_index_" === t
                      ? (i = e)
                      : "_value_" === t && (i = "x" === e ? "y" : "x"),
                    i
                  );
                })(t, r),
                o = i[e + "AxisID"] || s[e] || e;
              (a[o] = a[o] || Object.create(null)),
                M(a[o], [{ axis: e }, n[o], l[t]]);
            });
          }),
          Object.keys(a).forEach((t) => {
            const e = a[t];
            M(e, [Nt.scales[e.type], Nt.scale]);
          }),
          a
        );
      })(t, e));
  }
  function Bn(t) {
    return (
      ((t = t || {}).datasets = t.datasets || []),
      (t.labels = t.labels || []),
      t
    );
  }
  const Nn = new Map(),
    jn = new Set();
  function Wn(t, e) {
    let i = Nn.get(t);
    return i || ((i = e()), Nn.set(t, i), jn.add(i)), i;
  }
  const Hn = (t, e, i) => {
    const n = S(e, i);
    void 0 !== n && t.add(n);
  };
  class $n {
    constructor(t) {
      (this._config = (function (t) {
        return ((t = t || {}).data = Bn(t.data)), Vn(t), t;
      })(t)),
        (this._scopeCache = new Map()),
        (this._resolverCache = new Map());
    }
    get type() {
      return this._config.type;
    }
    set type(t) {
      this._config.type = t;
    }
    get data() {
      return this._config.data;
    }
    set data(t) {
      this._config.data = Bn(t);
    }
    get options() {
      return this._config.options;
    }
    set options(t) {
      this._config.options = t;
    }
    get plugins() {
      return this._config.plugins;
    }
    update() {
      const t = this._config;
      this.clearCache(), Vn(t);
    }
    clearCache() {
      this._scopeCache.clear(), this._resolverCache.clear();
    }
    datasetScopeKeys(t) {
      return Wn(t, () => [[`datasets.${t}`, ""]]);
    }
    datasetAnimationScopeKeys(t, e) {
      return Wn(`${t}.transition.${e}`, () => [
        [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
        [`datasets.${t}`, ""],
      ]);
    }
    datasetElementScopeKeys(t, e) {
      return Wn(`${t}-${e}`, () => [
        [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""],
      ]);
    }
    pluginScopeKeys(t) {
      const e = t.id;
      return Wn(`${this.type}-plugin-${e}`, () => [
        [`plugins.${e}`, ...(t.additionalOptionScopes || [])],
      ]);
    }
    _cachedScopes(t, e) {
      const i = this._scopeCache;
      let n = i.get(t);
      return (n && !e) || ((n = new Map()), i.set(t, n)), n;
    }
    getOptionScopes(t, e, i) {
      const { options: n, type: o } = this,
        s = this._cachedScopes(t, i),
        a = s.get(e);
      if (a) return a;
      const r = new Set();
      e.forEach((e) => {
        t && (r.add(t), e.forEach((e) => Hn(r, t, e))),
          e.forEach((t) => Hn(r, n, t)),
          e.forEach((t) => Hn(r, Ft[o] || {}, t)),
          e.forEach((t) => Hn(r, Nt, t)),
          e.forEach((t) => Hn(r, zt, t));
      });
      const l = [...r];
      return jn.has(e) && s.set(e, l), l;
    }
    chartOptionScopes() {
      const { options: t, type: e } = this;
      return [t, Ft[e] || {}, Nt.datasets[e] || {}, { type: e }, Nt, zt];
    }
    resolveNamedOptions(t, e, i, n = [""]) {
      const o = { $shared: !0 },
        { resolver: s, subPrefixes: a } = Yn(this._resolverCache, t, n);
      let r = s;
      if (
        (function (t, e) {
          const { isScriptable: i, isIndexable: n } = me(t);
          for (const o of e)
            if ((i(o) && D(t[o])) || (n(o) && c(t[o]))) return !0;
          return !1;
        })(s, e)
      ) {
        o.$shared = !1;
        r = pe(s, (i = D(i) ? i() : i), this.createResolver(t, i, a));
      }
      for (const t of e) o[t] = r[t];
      return o;
    }
    createResolver(t, e, i = [""], n) {
      const { resolver: o } = Yn(this._resolverCache, t, i);
      return h(e) ? pe(o, e, void 0, n) : o;
    }
  }
  function Yn(t, e, i) {
    let n = t.get(e);
    n || ((n = new Map()), t.set(e, n));
    const o = i.join();
    let s = n.get(o);
    if (!s) {
      (s = {
        resolver: fe(e, i),
        subPrefixes: i.filter((t) => !t.toLowerCase().includes("hover")),
      }),
        n.set(o, s);
    }
    return s;
  }
  const qn = ["top", "bottom", "left", "right", "chartArea"];
  function Un(t, e) {
    return "top" === t || "bottom" === t || (-1 === qn.indexOf(t) && "x" === e);
  }
  function Xn(t, e) {
    return function (i, n) {
      return i[t] === n[t] ? i[e] - n[e] : i[t] - n[t];
    };
  }
  function Kn(t) {
    const e = t.chart,
      i = e.options.animation;
    e.notifyPlugins("afterRender"), p(i && i.onComplete, [t], e);
  }
  function Gn(t) {
    const e = t.chart,
      i = e.options.animation;
    p(i && i.onProgress, [t], e);
  }
  function Zn() {
    return "undefined" != typeof window && "undefined" != typeof document;
  }
  function Jn(t) {
    return (
      Zn() && "string" == typeof t
        ? (t = document.getElementById(t))
        : t && t.length && (t = t[0]),
      t && t.canvas && (t = t.canvas),
      t
    );
  }
  const Qn = {},
    to = (t) => {
      const e = Jn(t);
      return Object.values(Qn)
        .filter((t) => t.canvas === e)
        .pop();
    };
  class eo {
    constructor(t, e) {
      const i = this;
      this.config = e = new $n(e);
      const n = Jn(t),
        o = to(n);
      if (o)
        throw new Error(
          "Canvas is already in use. Chart with ID '" +
            o.id +
            "' must be destroyed before the canvas can be reused."
        );
      const s = e.createResolver(e.chartOptionScopes(), i.getContext());
      this.platform = i._initializePlatform(n, e);
      const a = i.platform.acquireContext(n, s.aspectRatio),
        l = a && a.canvas,
        c = l && l.height,
        h = l && l.width;
      (this.id = r()),
        (this.ctx = a),
        (this.canvas = l),
        (this.width = h),
        (this.height = c),
        (this._options = s),
        (this._aspectRatio = this.aspectRatio),
        (this._layers = []),
        (this._metasets = []),
        (this._stacks = void 0),
        (this.boxes = []),
        (this.currentDevicePixelRatio = void 0),
        (this.chartArea = void 0),
        (this._active = []),
        (this._lastEvent = void 0),
        (this._listeners = {}),
        (this._responsiveListeners = void 0),
        (this._sortedMetasets = []),
        (this.scales = {}),
        (this.scale = void 0),
        (this._plugins = new Rn()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize = (function (t, e) {
          let i;
          return function () {
            return e ? (clearTimeout(i), (i = setTimeout(t, e))) : t(), e;
          };
        })(() => this.update("resize"), s.resizeDelay || 0)),
        (Qn[i.id] = i),
        a && l
          ? (ai.listen(i, "complete", Kn),
            ai.listen(i, "progress", Gn),
            i._initialize(),
            i.attached && i.update())
          : console.error(
              "Failed to create chart: can't acquire context from the given item"
            );
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: t, maintainAspectRatio: e },
        width: i,
        height: n,
        _aspectRatio: o,
      } = this;
      return l(t) ? (e && o ? o : n ? i / n : null) : t;
    }
    get data() {
      return this.config.data;
    }
    set data(t) {
      this.config.data = t;
    }
    get options() {
      return this._options;
    }
    set options(t) {
      this.config.options = t;
    }
    _initialize() {
      const t = this;
      return (
        t.notifyPlugins("beforeInit"),
        t.options.responsive ? t.resize() : We(t, t.options.devicePixelRatio),
        t.bindEvents(),
        t.notifyPlugins("afterInit"),
        t
      );
    }
    _initializePlatform(t, e) {
      return e.platform
        ? new e.platform()
        : !Zn() ||
          ("undefined" != typeof OffscreenCanvas &&
            t instanceof OffscreenCanvas)
        ? new sn()
        : new bn();
    }
    clear() {
      return $t(this.canvas, this.ctx), this;
    }
    stop() {
      return ai.stop(this), this;
    }
    resize(t, e) {
      ai.running(this)
        ? (this._resizeBeforeDraw = { width: t, height: e })
        : this._resize(t, e);
    }
    _resize(t, e) {
      const i = this,
        n = i.options,
        o = i.canvas,
        s = n.maintainAspectRatio && i.aspectRatio,
        a = i.platform.getMaximumSize(o, t, e, s),
        r = n.devicePixelRatio || i.platform.getDevicePixelRatio();
      (i.width = a.width),
        (i.height = a.height),
        (i._aspectRatio = i.aspectRatio),
        We(i, r, !0) &&
          (i.notifyPlugins("resize", { size: a }),
          p(n.onResize, [i, a], i),
          i.attached && i._doResize() && i.render());
    }
    ensureScalesHaveIDs() {
      m(this.options.scales || {}, (t, e) => {
        t.id = e;
      });
    }
    buildOrUpdateScales() {
      const t = this,
        e = t.options,
        i = e.scales,
        n = t.scales,
        o = Object.keys(n).reduce((t, e) => ((t[e] = !1), t), {});
      let s = [];
      i &&
        (s = s.concat(
          Object.keys(i).map((t) => {
            const e = i[t],
              n = zn(t, e),
              o = "r" === n,
              s = "x" === n;
            return {
              options: e,
              dposition: o ? "chartArea" : s ? "bottom" : "left",
              dtype: o ? "radialLinear" : s ? "category" : "linear",
            };
          })
        )),
        m(s, (i) => {
          const s = i.options,
            a = s.id,
            r = zn(a, s),
            l = g(s.type, i.dtype);
          (void 0 !== s.position && Un(s.position, r) === Un(i.dposition)) ||
            (s.position = i.dposition),
            (o[a] = !0);
          let c = null;
          if (a in n && n[a].type === l) c = n[a];
          else {
            (c = new (Ln.getScale(l))({
              id: a,
              type: l,
              ctx: t.ctx,
              chart: t,
            })),
              (n[c.id] = c);
          }
          c.init(s, e);
        }),
        m(o, (t, e) => {
          t || delete n[e];
        }),
        m(n, (e) => {
          nn.configure(t, e, e.options), nn.addBox(t, e);
        });
    }
    _updateMetasetIndex(t, e) {
      const i = this._metasets,
        n = t.index;
      n !== e && ((i[n] = i[e]), (i[e] = t), (t.index = e));
    }
    _updateMetasets() {
      const t = this,
        e = t._metasets,
        i = t.data.datasets.length,
        n = e.length;
      if (n > i) {
        for (let e = i; e < n; ++e) t._destroyDatasetMeta(e);
        e.splice(i, n - i);
      }
      t._sortedMetasets = e.slice(0).sort(Xn("order", "index"));
    }
    _removeUnreferencedMetasets() {
      const t = this,
        {
          _metasets: e,
          data: { datasets: i },
        } = t;
      e.length > i.length && delete t._stacks,
        e.forEach((e, n) => {
          0 === i.filter((t) => t === e._dataset).length &&
            t._destroyDatasetMeta(n);
        });
    }
    buildOrUpdateControllers() {
      const t = this,
        e = [],
        i = t.data.datasets;
      let n, o;
      for (t._removeUnreferencedMetasets(), n = 0, o = i.length; n < o; n++) {
        const o = i[n];
        let s = t.getDatasetMeta(n);
        const a = o.type || t.config.type;
        if (
          (s.type &&
            s.type !== a &&
            (t._destroyDatasetMeta(n), (s = t.getDatasetMeta(n))),
          (s.type = a),
          (s.indexAxis = o.indexAxis || Fn(a, t.options)),
          (s.order = o.order || 0),
          t._updateMetasetIndex(s, n),
          (s.label = "" + o.label),
          (s.visible = t.isDatasetVisible(n)),
          s.controller)
        )
          s.controller.updateIndex(n), s.controller.linkScales();
        else {
          const i = Ln.getController(a),
            { datasetElementType: o, dataElementType: r } = Nt.datasets[a];
          Object.assign(i.prototype, {
            dataElementType: Ln.getElement(r),
            datasetElementType: o && Ln.getElement(o),
          }),
            (s.controller = new i(t, n)),
            e.push(s.controller);
        }
      }
      return t._updateMetasets(), e;
    }
    _resetElements() {
      const t = this;
      m(
        t.data.datasets,
        (e, i) => {
          t.getDatasetMeta(i).controller.reset();
        },
        t
      );
    }
    reset() {
      this._resetElements(), this.notifyPlugins("reset");
    }
    update(t) {
      const e = this,
        i = e.config;
      i.update(),
        (e._options = i.createResolver(i.chartOptionScopes(), e.getContext())),
        m(e.scales, (t) => {
          nn.removeBox(e, t);
        });
      const n = (e._animationsDisabled = !e.options.animation);
      e.ensureScalesHaveIDs(), e.buildOrUpdateScales();
      if (
        ((((t, e) => {
          if (t.size !== e.size) return !1;
          for (const i of t) if (!e.has(i)) return !1;
          return !0;
        })(new Set(Object.keys(e._listeners)), new Set(e.options.events)) &&
          !!this._responsiveListeners === e.options.responsive) ||
          (e.unbindEvents(), e.bindEvents()),
        e._plugins.invalidate(),
        !1 === e.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }))
      )
        return;
      const o = e.buildOrUpdateControllers();
      e.notifyPlugins("beforeElementsUpdate");
      let s = 0;
      for (let t = 0, i = e.data.datasets.length; t < i; t++) {
        const { controller: i } = e.getDatasetMeta(t),
          a = !n && -1 === o.indexOf(i);
        i.buildOrUpdateElements(a), (s = Math.max(+i.getMaxOverflow(), s));
      }
      (e._minPadding = s),
        e._updateLayout(s),
        n ||
          m(o, (t) => {
            t.reset();
          }),
        e._updateDatasets(t),
        e.notifyPlugins("afterUpdate", { mode: t }),
        e._layers.sort(Xn("z", "_idx")),
        e._lastEvent && e._eventHandler(e._lastEvent, !0),
        e.render();
    }
    _updateLayout(t) {
      const e = this;
      if (!1 === e.notifyPlugins("beforeLayout", { cancelable: !0 })) return;
      nn.update(e, e.width, e.height, t);
      const i = e.chartArea,
        n = i.width <= 0 || i.height <= 0;
      (e._layers = []),
        m(
          e.boxes,
          (t) => {
            (n && "chartArea" === t.position) ||
              (t.configure && t.configure(), e._layers.push(...t._layers()));
          },
          e
        ),
        e._layers.forEach((t, e) => {
          t._idx = e;
        }),
        e.notifyPlugins("afterLayout");
    }
    _updateDatasets(t) {
      const e = this,
        i = "function" == typeof t;
      if (
        !1 !==
        e.notifyPlugins("beforeDatasetsUpdate", { mode: t, cancelable: !0 })
      ) {
        for (let n = 0, o = e.data.datasets.length; n < o; ++n)
          e._updateDataset(n, i ? t({ datasetIndex: n }) : t);
        e.notifyPlugins("afterDatasetsUpdate", { mode: t });
      }
    }
    _updateDataset(t, e) {
      const i = this,
        n = i.getDatasetMeta(t),
        o = { meta: n, index: t, mode: e, cancelable: !0 };
      !1 !== i.notifyPlugins("beforeDatasetUpdate", o) &&
        (n.controller._update(e),
        (o.cancelable = !1),
        i.notifyPlugins("afterDatasetUpdate", o));
    }
    render() {
      const t = this;
      !1 !== t.notifyPlugins("beforeRender", { cancelable: !0 }) &&
        (ai.has(t)
          ? t.attached && !ai.running(t) && ai.start(t)
          : (t.draw(), Kn({ chart: t })));
    }
    draw() {
      const t = this;
      let e;
      if (t._resizeBeforeDraw) {
        const { width: e, height: i } = t._resizeBeforeDraw;
        t._resize(e, i), (t._resizeBeforeDraw = null);
      }
      if ((t.clear(), t.width <= 0 || t.height <= 0)) return;
      if (!1 === t.notifyPlugins("beforeDraw", { cancelable: !0 })) return;
      const i = t._layers;
      for (e = 0; e < i.length && i[e].z <= 0; ++e) i[e].draw(t.chartArea);
      for (t._drawDatasets(); e < i.length; ++e) i[e].draw(t.chartArea);
      t.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(t) {
      const e = this._sortedMetasets,
        i = [];
      let n, o;
      for (n = 0, o = e.length; n < o; ++n) {
        const o = e[n];
        (t && !o.visible) || i.push(o);
      }
      return i;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
      const t = this;
      if (!1 === t.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }))
        return;
      const e = t.getSortedVisibleDatasetMetas();
      for (let i = e.length - 1; i >= 0; --i) t._drawDataset(e[i]);
      t.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(t) {
      const e = this,
        i = e.ctx,
        n = t._clip,
        o = e.chartArea,
        s = { meta: t, index: t.index, cancelable: !0 };
      !1 !== e.notifyPlugins("beforeDatasetDraw", s) &&
        (Ut(i, {
          left: !1 === n.left ? 0 : o.left - n.left,
          right: !1 === n.right ? e.width : o.right + n.right,
          top: !1 === n.top ? 0 : o.top - n.top,
          bottom: !1 === n.bottom ? e.height : o.bottom + n.bottom,
        }),
        t.controller.draw(),
        Xt(i),
        (s.cancelable = !1),
        e.notifyPlugins("afterDatasetDraw", s));
    }
    getElementsAtEventForMode(t, e, i, n) {
      const o = Yi.modes[e];
      return "function" == typeof o ? o(this, t, i, n) : [];
    }
    getDatasetMeta(t) {
      const e = this.data.datasets[t],
        i = this._metasets;
      let n = i.filter((t) => t && t._dataset === e).pop();
      return (
        n ||
          (n = i[t] =
            {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null,
              order: (e && e.order) || 0,
              index: t,
              _dataset: e,
              _parsed: [],
              _sorted: !1,
            }),
        n
      );
    }
    getContext() {
      return this.$context || (this.$context = { chart: this, type: "chart" });
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(t) {
      const e = this.data.datasets[t];
      if (!e) return !1;
      const i = this.getDatasetMeta(t);
      return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden;
    }
    setDatasetVisibility(t, e) {
      this.getDatasetMeta(t).hidden = !e;
    }
    toggleDataVisibility(t) {
      this._hiddenIndices[t] = !this._hiddenIndices[t];
    }
    getDataVisibility(t) {
      return !this._hiddenIndices[t];
    }
    _updateDatasetVisibility(t, e) {
      const i = this,
        n = e ? "show" : "hide",
        o = i.getDatasetMeta(t),
        s = o.controller._resolveAnimations(void 0, n);
      i.setDatasetVisibility(t, e),
        s.update(o, { visible: e }),
        i.update((e) => (e.datasetIndex === t ? n : void 0));
    }
    hide(t) {
      this._updateDatasetVisibility(t, !1);
    }
    show(t) {
      this._updateDatasetVisibility(t, !0);
    }
    _destroyDatasetMeta(t) {
      const e = this,
        i = e._metasets && e._metasets[t];
      i && i.controller && (i.controller._destroy(), delete e._metasets[t]);
    }
    destroy() {
      const t = this,
        { canvas: e, ctx: i } = t;
      let n, o;
      for (
        t.stop(), ai.remove(t), n = 0, o = t.data.datasets.length;
        n < o;
        ++n
      )
        t._destroyDatasetMeta(n);
      t.config.clearCache(),
        e &&
          (t.unbindEvents(),
          $t(e, i),
          t.platform.releaseContext(i),
          (t.canvas = null),
          (t.ctx = null)),
        t.notifyPlugins("destroy"),
        delete Qn[t.id];
    }
    toBase64Image(...t) {
      return this.canvas.toDataURL(...t);
    }
    bindEvents() {
      this.bindUserEvents(),
        this.options.responsive
          ? this.bindResponsiveEvents()
          : (this.attached = !0);
    }
    bindUserEvents() {
      const t = this,
        e = t._listeners,
        i = t.platform,
        n = function (e, i, n) {
          (e.offsetX = i), (e.offsetY = n), t._eventHandler(e);
        };
      m(t.options.events, (o) =>
        ((n, o) => {
          i.addEventListener(t, n, o), (e[n] = o);
        })(o, n)
      );
    }
    bindResponsiveEvents() {
      const t = this;
      t._responsiveListeners || (t._responsiveListeners = {});
      const e = t._responsiveListeners,
        i = t.platform,
        n = (n, o) => {
          i.addEventListener(t, n, o), (e[n] = o);
        },
        o = (n, o) => {
          e[n] && (i.removeEventListener(t, n, o), delete e[n]);
        },
        s = (e, i) => {
          t.canvas && t.resize(e, i);
        };
      let a;
      const r = () => {
        o("attach", r),
          (t.attached = !0),
          t.resize(),
          n("resize", s),
          n("detach", a);
      };
      (a = () => {
        (t.attached = !1), o("resize", s), n("attach", r);
      }),
        i.isAttached(t.canvas) ? r() : a();
    }
    unbindEvents() {
      const t = this;
      m(t._listeners, (e, i) => {
        t.platform.removeEventListener(t, i, e);
      }),
        (t._listeners = {}),
        m(t._responsiveListeners, (e, i) => {
          t.platform.removeEventListener(t, i, e);
        }),
        (t._responsiveListeners = void 0);
    }
    updateHoverStyle(t, e, i) {
      const n = i ? "set" : "remove";
      let o, s, a, r;
      for (
        "dataset" === e &&
          ((o = this.getDatasetMeta(t[0].datasetIndex)),
          o.controller["_" + n + "DatasetHoverStyle"]()),
          a = 0,
          r = t.length;
        a < r;
        ++a
      ) {
        s = t[a];
        const e = s && this.getDatasetMeta(s.datasetIndex).controller;
        e && e[n + "HoverStyle"](s.element, s.datasetIndex, s.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t) {
      const e = this,
        i = e._active || [],
        n = t.map(({ datasetIndex: t, index: i }) => {
          const n = e.getDatasetMeta(t);
          if (!n) throw new Error("No dataset found at index " + t);
          return { datasetIndex: t, element: n.data[i], index: i };
        });
      !x(n, i) && ((e._active = n), e._updateHoverStyles(n, i));
    }
    notifyPlugins(t, e, i) {
      return this._plugins.notify(this, t, e, i);
    }
    _updateHoverStyles(t, e, i) {
      const n = this,
        o = n.options.hover,
        s = (t, e) =>
          t.filter(
            (t) =>
              !e.some(
                (e) => t.datasetIndex === e.datasetIndex && t.index === e.index
              )
          ),
        a = s(e, t),
        r = i ? t : s(t, e);
      a.length && n.updateHoverStyle(a, o.mode, !1),
        r.length && o.mode && n.updateHoverStyle(r, o.mode, !0);
    }
    _eventHandler(t, e) {
      const i = this,
        n = { event: t, replay: e, cancelable: !0 },
        o = (e) => (e.options.events || this.options.events).includes(t.type);
      if (!1 === i.notifyPlugins("beforeEvent", n, o)) return;
      const s = i._handleEvent(t, e);
      return (
        (n.cancelable = !1),
        i.notifyPlugins("afterEvent", n, o),
        (s || n.changed) && i.render(),
        i
      );
    }
    _handleEvent(t, e) {
      const i = this,
        { _active: n = [], options: o } = i,
        s = o.hover,
        a = e;
      let r = [],
        l = !1,
        c = null;
      return (
        "mouseout" !== t.type &&
          ((r = i.getElementsAtEventForMode(t, s.mode, s, a)),
          (c = "click" === t.type ? i._lastEvent : t)),
        (i._lastEvent = null),
        qt(t, i.chartArea, i._minPadding) &&
          (p(o.onHover, [t, r, i], i),
          ("mouseup" !== t.type &&
            "click" !== t.type &&
            "contextmenu" !== t.type) ||
            p(o.onClick, [t, r, i], i)),
        (l = !x(r, n)),
        (l || e) && ((i._active = r), i._updateHoverStyles(r, n, e)),
        (i._lastEvent = c),
        l
      );
    }
  }
  const io = () => m(eo.instances, (t) => t._plugins.invalidate()),
    no = !0;
  function oo(t, e) {
    const {
      startAngle: i,
      endAngle: n,
      pixelMargin: o,
      x: s,
      y: a,
      outerRadius: r,
      innerRadius: l,
    } = e;
    let c = o / r;
    t.beginPath(),
      t.arc(s, a, r, i - c, n + c),
      l > o
        ? ((c = o / l), t.arc(s, a, l, n + c, i - c, !0))
        : t.arc(s, a, o, n + E, i - E),
      t.closePath(),
      t.clip();
  }
  function so(t, e, i, n) {
    const o = ie(t.options.borderRadius, [
      "outerStart",
      "outerEnd",
      "innerStart",
      "innerEnd",
    ]);
    const s = (i - e) / 2,
      a = Math.min(s, (n * e) / 2),
      r = (t) => {
        const e = ((i - Math.min(s, t)) * n) / 2;
        return G(t, 0, Math.min(s, e));
      };
    return {
      outerStart: r(o.outerStart),
      outerEnd: r(o.outerEnd),
      innerStart: G(o.innerStart, 0, a),
      innerEnd: G(o.innerEnd, 0, a),
    };
  }
  function ao(t, e, i, n) {
    return { x: i + t * Math.cos(e), y: n + t * Math.sin(e) };
  }
  function ro(t, e, i) {
    const {
        x: n,
        y: o,
        startAngle: s,
        endAngle: a,
        pixelMargin: r,
        innerRadius: l,
      } = e,
      c = Math.max(e.outerRadius + i - r, 0),
      h = l > 0 ? l + i + r : 0,
      d = a - s,
      u = (d - Math.max(0.001, d * c - i / C) / c) / 2,
      g = s + u,
      f = a - u,
      {
        outerStart: p,
        outerEnd: m,
        innerStart: x,
        innerEnd: b,
      } = so(e, h, c, f - g),
      _ = c - p,
      y = c - m,
      v = g + p / _,
      M = f - m / y,
      w = h + x,
      k = h + b,
      S = g + x / w,
      P = f - b / k;
    if ((t.beginPath(), t.arc(n, o, c, v, M), m > 0)) {
      const e = ao(y, M, n, o);
      t.arc(e.x, e.y, m, M, f + E);
    }
    const O = ao(k, f, n, o);
    if ((t.lineTo(O.x, O.y), b > 0)) {
      const e = ao(k, P, n, o);
      t.arc(e.x, e.y, b, f + E, P + Math.PI);
    }
    if ((t.arc(n, o, h, f - b / h, g + x / h, !0), x > 0)) {
      const e = ao(w, S, n, o);
      t.arc(e.x, e.y, x, S + Math.PI, g - E);
    }
    const D = ao(_, g, n, o);
    if ((t.lineTo(D.x, D.y), p > 0)) {
      const e = ao(_, v, n, o);
      t.arc(e.x, e.y, p, g - E, v);
    }
    t.closePath();
  }
  function lo(t, e, i) {
    const { options: n } = e,
      o = "inner" === n.borderAlign;
    n.borderWidth &&
      (o
        ? ((t.lineWidth = 2 * n.borderWidth), (t.lineJoin = "round"))
        : ((t.lineWidth = n.borderWidth), (t.lineJoin = "bevel")),
      e.fullCircles &&
        (function (t, e, i) {
          const { x: n, y: o, startAngle: s, endAngle: a, pixelMargin: r } = e,
            l = Math.max(e.outerRadius - r, 0),
            c = e.innerRadius + r;
          let h;
          for (
            i &&
              ((e.endAngle = e.startAngle + T),
              oo(t, e),
              (e.endAngle = a),
              e.endAngle === e.startAngle &&
                ((e.endAngle += T), e.fullCircles--)),
              t.beginPath(),
              t.arc(n, o, c, s + T, s, !0),
              h = 0;
            h < e.fullCircles;
            ++h
          )
            t.stroke();
          for (
            t.beginPath(), t.arc(n, o, l, s, s + T), h = 0;
            h < e.fullCircles;
            ++h
          )
            t.stroke();
        })(t, e, o),
      o && oo(t, e),
      ro(t, e, i),
      t.stroke());
  }
  Object.defineProperties(eo, {
    defaults: { enumerable: no, value: Nt },
    instances: { enumerable: no, value: Qn },
    overrides: { enumerable: no, value: Ft },
    registry: { enumerable: no, value: Ln },
    version: { enumerable: no, value: "3.3.0" },
    getChart: { enumerable: no, value: to },
    register: {
      enumerable: no,
      value: (...t) => {
        Ln.add(...t), io();
      },
    },
    unregister: {
      enumerable: no,
      value: (...t) => {
        Ln.remove(...t), io();
      },
    },
  });
  class co extends _n {
    constructor(t) {
      super(),
        (this.options = void 0),
        (this.circumference = void 0),
        (this.startAngle = void 0),
        (this.endAngle = void 0),
        (this.innerRadius = void 0),
        (this.outerRadius = void 0),
        (this.pixelMargin = 0),
        (this.fullCircles = 0),
        t && Object.assign(this, t);
    }
    inRange(t, e, i) {
      const n = this.getProps(["x", "y"], i),
        { angle: o, distance: s } = (function (t, e) {
          const i = e.x - t.x,
            n = e.y - t.y,
            o = Math.sqrt(i * i + n * n);
          let s = Math.atan2(n, i);
          return s < -0.5 * C && (s += T), { angle: s, distance: o };
        })(n, { x: t, y: e }),
        {
          startAngle: a,
          endAngle: r,
          innerRadius: l,
          outerRadius: c,
          circumference: h,
        } = this.getProps(
          [
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "circumference",
          ],
          i
        );
      return (h >= T || K(o, a, r)) && s >= l && s <= c;
    }
    getCenterPoint(t) {
      const {
          x: e,
          y: i,
          startAngle: n,
          endAngle: o,
          innerRadius: s,
          outerRadius: a,
        } = this.getProps(
          ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"],
          t
        ),
        r = (n + o) / 2,
        l = (s + a) / 2;
      return { x: e + Math.cos(r) * l, y: i + Math.sin(r) * l };
    }
    tooltipPosition(t) {
      return this.getCenterPoint(t);
    }
    draw(t) {
      const e = this,
        i = e.options,
        n = (i.offset || 0) / 2;
      if (
        ((e.pixelMargin = "inner" === i.borderAlign ? 0.33 : 0),
        (e.fullCircles = Math.floor(e.circumference / T)),
        0 === e.circumference || e.innerRadius < 0 || e.outerRadius < 0)
      )
        return;
      t.save();
      let o = 0;
      if (n) {
        o = n / 2;
        const i = (e.startAngle + e.endAngle) / 2;
        t.translate(Math.cos(i) * o, Math.sin(i) * o),
          e.circumference >= C && (o = n);
      }
      (t.fillStyle = i.backgroundColor),
        (t.strokeStyle = i.borderColor),
        (function (t, e, i) {
          if (e.fullCircles) {
            (e.endAngle = e.startAngle + T), ro(t, e, i);
            for (let i = 0; i < e.fullCircles; ++i) t.fill();
          }
          isNaN(e.circumference) ||
            (e.endAngle = e.startAngle + (e.circumference % T)),
            ro(t, e, i),
            t.fill();
        })(t, e, o),
        lo(t, e, o),
        t.restore();
    }
  }
  function ho(t, e, i = e) {
    (t.lineCap = g(i.borderCapStyle, e.borderCapStyle)),
      t.setLineDash(g(i.borderDash, e.borderDash)),
      (t.lineDashOffset = g(i.borderDashOffset, e.borderDashOffset)),
      (t.lineJoin = g(i.borderJoinStyle, e.borderJoinStyle)),
      (t.lineWidth = g(i.borderWidth, e.borderWidth)),
      (t.strokeStyle = g(i.borderColor, e.borderColor));
  }
  function uo(t, e, i) {
    t.lineTo(i.x, i.y);
  }
  function go(t, e, i = {}) {
    const n = t.length,
      { start: o = 0, end: s = n - 1 } = i,
      { start: a, end: r } = e,
      l = Math.max(o, a),
      c = Math.min(s, r),
      h = (o < a && s < a) || (o > r && s > r);
    return {
      count: n,
      start: l,
      loop: e.loop,
      ilen: c < l && !h ? n + c - l : c - l,
    };
  }
  function fo(t, e, i, n) {
    const { points: o, options: s } = e,
      { count: a, start: r, loop: l, ilen: c } = go(o, i, n),
      h = (function (t) {
        return t.stepped
          ? Kt
          : t.tension || "monotone" === t.cubicInterpolationMode
          ? Gt
          : uo;
      })(s);
    let d,
      u,
      g,
      { move: f = !0, reverse: p } = n || {};
    for (d = 0; d <= c; ++d)
      (u = o[(r + (p ? c - d : d)) % a]),
        u.skip ||
          (f ? (t.moveTo(u.x, u.y), (f = !1)) : h(t, g, u, p, s.stepped),
          (g = u));
    return l && ((u = o[(r + (p ? c : 0)) % a]), h(t, g, u, p, s.stepped)), !!l;
  }
  function po(t, e, i, n) {
    const o = e.points,
      { count: s, start: a, ilen: r } = go(o, i, n),
      { move: l = !0, reverse: c } = n || {};
    let h,
      d,
      u,
      g,
      f,
      p,
      m = 0,
      x = 0;
    const b = (t) => (a + (c ? r - t : t)) % s,
      _ = () => {
        g !== f && (t.lineTo(m, f), t.lineTo(m, g), t.lineTo(m, p));
      };
    for (l && ((d = o[b(0)]), t.moveTo(d.x, d.y)), h = 0; h <= r; ++h) {
      if (((d = o[b(h)]), d.skip)) continue;
      const e = d.x,
        i = d.y,
        n = 0 | e;
      n === u
        ? (i < g ? (g = i) : i > f && (f = i), (m = (x * m + e) / ++x))
        : (_(), t.lineTo(e, i), (u = n), (x = 0), (g = f = i)),
        (p = i);
    }
    _();
  }
  function mo(t) {
    const e = t.options,
      i = e.borderDash && e.borderDash.length;
    return !(
      t._decimated ||
      t._loop ||
      e.tension ||
      "monotone" === e.cubicInterpolationMode ||
      e.stepped ||
      i
    )
      ? po
      : fo;
  }
  (co.id = "arc"),
    (co.defaults = {
      borderAlign: "center",
      borderColor: "#fff",
      borderRadius: 0,
      borderWidth: 2,
      offset: 0,
      angle: void 0,
    }),
    (co.defaultRoutes = { backgroundColor: "backgroundColor" });
  const xo = "function" == typeof Path2D;
  function bo(t, e, i, n) {
    xo && 1 === e.segments.length
      ? (function (t, e, i, n) {
          let o = e._path;
          o || ((o = e._path = new Path2D()), e.path(o, i, n) && o.closePath()),
            ho(t, e.options),
            t.stroke(o);
        })(t, e, i, n)
      : (function (t, e, i, n) {
          const { segments: o, options: s } = e,
            a = mo(e);
          for (const r of o)
            ho(t, s, r.style),
              t.beginPath(),
              a(t, e, r, { start: i, end: i + n - 1 }) && t.closePath(),
              t.stroke();
        })(t, e, i, n);
  }
  class _o extends _n {
    constructor(t) {
      super(),
        (this.animated = !0),
        (this.options = void 0),
        (this._loop = void 0),
        (this._fullLoop = void 0),
        (this._path = void 0),
        (this._points = void 0),
        (this._segments = void 0),
        (this._decimated = !1),
        (this._pointsUpdated = !1),
        t && Object.assign(this, t);
    }
    updateControlPoints(t, e) {
      const i = this,
        n = i.options;
      if (
        (n.tension || "monotone" === n.cubicInterpolationMode) &&
        !n.stepped &&
        !i._pointsUpdated
      ) {
        const o = n.spanGaps ? i._loop : i._fullLoop;
        Re(i._points, n, t, o, e), (i._pointsUpdated = !0);
      }
    }
    set points(t) {
      const e = this;
      (e._points = t),
        delete e._segments,
        delete e._path,
        (e._pointsUpdated = !1);
    }
    get points() {
      return this._points;
    }
    get segments() {
      return (
        this._segments ||
        (this._segments = (function (t, e) {
          const i = t.points,
            n = t.options.spanGaps,
            o = i.length;
          if (!o) return [];
          const s = !!t._loop,
            { start: a, end: r } = (function (t, e, i, n) {
              let o = 0,
                s = e - 1;
              if (i && !n) for (; o < e && !t[o].skip; ) o++;
              for (; o < e && t[o].skip; ) o++;
              for (o %= e, i && (s += o); s > o && t[s % e].skip; ) s--;
              return (s %= e), { start: o, end: s };
            })(i, o, s, n);
          return ni(
            !0 === n
              ? [{ start: a, end: r, loop: s }]
              : (function (t, e, i, n) {
                  const o = t.length,
                    s = [];
                  let a,
                    r = e,
                    l = t[e];
                  for (a = e + 1; a <= i; ++a) {
                    const i = t[a % o];
                    i.skip || i.stop
                      ? l.skip ||
                        ((n = !1),
                        s.push({ start: e % o, end: (a - 1) % o, loop: n }),
                        (e = r = i.stop ? a : null))
                      : ((r = a), l.skip && (e = a)),
                      (l = i);
                  }
                  return (
                    null !== r && s.push({ start: e % o, end: r % o, loop: n }),
                    s
                  );
                })(
                  i,
                  a,
                  r < a ? r + o : r,
                  !!t._fullLoop && 0 === a && r === o - 1
                ),
            i,
            e
          );
        })(this, this.options.segment))
      );
    }
    first() {
      const t = this.segments,
        e = this.points;
      return t.length && e[t[0].start];
    }
    last() {
      const t = this.segments,
        e = this.points,
        i = t.length;
      return i && e[t[i - 1].end];
    }
    interpolate(t, e) {
      const i = this,
        n = i.options,
        o = t[e],
        s = i.points,
        a = ii(i, { property: e, start: o, end: o });
      if (!a.length) return;
      const r = [],
        l = (function (t) {
          return t.stepped
            ? qe
            : t.tension || "monotone" === t.cubicInterpolationMode
            ? Ue
            : Ye;
        })(n);
      let c, h;
      for (c = 0, h = a.length; c < h; ++c) {
        const { start: i, end: h } = a[c],
          d = s[i],
          u = s[h];
        if (d === u) {
          r.push(d);
          continue;
        }
        const g = l(d, u, Math.abs((o - d[e]) / (u[e] - d[e])), n.stepped);
        (g[e] = t[e]), r.push(g);
      }
      return 1 === r.length ? r[0] : r;
    }
    pathSegment(t, e, i) {
      return mo(this)(t, this, e, i);
    }
    path(t, e, i) {
      const n = this,
        o = n.segments,
        s = mo(n);
      let a = n._loop;
      (e = e || 0), (i = i || n.points.length - e);
      for (const r of o) a &= s(t, n, r, { start: e, end: e + i - 1 });
      return !!a;
    }
    draw(t, e, i, n) {
      const o = this,
        s = o.options || {};
      (o.points || []).length &&
        s.borderWidth &&
        (t.save(),
        bo(t, o, i, n),
        t.restore(),
        o.animated && ((o._pointsUpdated = !1), (o._path = void 0)));
    }
  }
  function yo(t, e, i, n) {
    const o = t.options,
      { [i]: s } = t.getProps([i], n);
    return Math.abs(e - s) < o.radius + o.hitRadius;
  }
  (_o.id = "line"),
    (_o.defaults = {
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: "miter",
      borderWidth: 3,
      capBezierPoints: !0,
      cubicInterpolationMode: "default",
      fill: !1,
      spanGaps: !1,
      stepped: !1,
      tension: 0,
    }),
    (_o.defaultRoutes = {
      backgroundColor: "backgroundColor",
      borderColor: "borderColor",
    }),
    (_o.descriptors = {
      _scriptable: !0,
      _indexable: (t) => "borderDash" !== t && "fill" !== t,
    });
  class vo extends _n {
    constructor(t) {
      super(),
        (this.options = void 0),
        (this.parsed = void 0),
        (this.skip = void 0),
        (this.stop = void 0),
        t && Object.assign(this, t);
    }
    inRange(t, e, i) {
      const n = this.options,
        { x: o, y: s } = this.getProps(["x", "y"], i);
      return (
        Math.pow(t - o, 2) + Math.pow(e - s, 2) <
        Math.pow(n.hitRadius + n.radius, 2)
      );
    }
    inXRange(t, e) {
      return yo(this, t, "x", e);
    }
    inYRange(t, e) {
      return yo(this, t, "y", e);
    }
    getCenterPoint(t) {
      const { x: e, y: i } = this.getProps(["x", "y"], t);
      return { x: e, y: i };
    }
    size(t) {
      let e = (t = t || this.options || {}).radius || 0;
      e = Math.max(e, (e && t.hoverRadius) || 0);
      return 2 * (e + ((e && t.borderWidth) || 0));
    }
    draw(t) {
      const e = this,
        i = e.options;
      e.skip ||
        i.radius < 0.1 ||
        ((t.strokeStyle = i.borderColor),
        (t.lineWidth = i.borderWidth),
        (t.fillStyle = i.backgroundColor),
        Yt(t, i, e.x, e.y));
    }
    getRange() {
      const t = this.options || {};
      return t.radius + t.hitRadius;
    }
  }
  function Mo(t, e) {
    const {
      x: i,
      y: n,
      base: o,
      width: s,
      height: a,
    } = t.getProps(["x", "y", "base", "width", "height"], e);
    let r, l, c, h, d;
    return (
      t.horizontal
        ? ((d = a / 2),
          (r = Math.min(i, o)),
          (l = Math.max(i, o)),
          (c = n - d),
          (h = n + d))
        : ((d = s / 2),
          (r = i - d),
          (l = i + d),
          (c = Math.min(n, o)),
          (h = Math.max(n, o))),
      { left: r, top: c, right: l, bottom: h }
    );
  }
  function wo(t) {
    let e = t.options.borderSkipped;
    const i = {};
    return e
      ? ((e = t.horizontal
          ? ko(e, "left", "right", t.base > t.x)
          : ko(e, "bottom", "top", t.base < t.y)),
        (i[e] = !0),
        i)
      : i;
  }
  function ko(t, e, i, n) {
    var o, s, a;
    return (
      n
        ? ((a = i),
          (t = So((t = (o = t) === (s = e) ? a : o === a ? s : o), i, e)))
        : (t = So(t, e, i)),
      t
    );
  }
  function So(t, e, i) {
    return "start" === t ? e : "end" === t ? i : t;
  }
  function Po(t, e, i, n) {
    return t ? 0 : Math.max(Math.min(e, n), i);
  }
  function Oo(t) {
    const e = Mo(t),
      i = e.right - e.left,
      n = e.bottom - e.top,
      o = (function (t, e, i) {
        const n = t.options.borderWidth,
          o = wo(t),
          s = ne(n);
        return {
          t: Po(o.top, s.top, 0, i),
          r: Po(o.right, s.right, 0, e),
          b: Po(o.bottom, s.bottom, 0, i),
          l: Po(o.left, s.left, 0, e),
        };
      })(t, i / 2, n / 2),
      s = (function (t, e, i) {
        const { enableBorderRadius: n } = t.getProps(["enableBorderRadius"]),
          o = t.options.borderRadius,
          s = oe(o),
          a = Math.min(e, i),
          r = wo(t),
          l = n || h(o);
        return {
          topLeft: Po(!l || r.top || r.left, s.topLeft, 0, a),
          topRight: Po(!l || r.top || r.right, s.topRight, 0, a),
          bottomLeft: Po(!l || r.bottom || r.left, s.bottomLeft, 0, a),
          bottomRight: Po(!l || r.bottom || r.right, s.bottomRight, 0, a),
        };
      })(t, i / 2, n / 2);
    return {
      outer: { x: e.left, y: e.top, w: i, h: n, radius: s },
      inner: {
        x: e.left + o.l,
        y: e.top + o.t,
        w: i - o.l - o.r,
        h: n - o.t - o.b,
        radius: {
          topLeft: Math.max(0, s.topLeft - Math.max(o.t, o.l)),
          topRight: Math.max(0, s.topRight - Math.max(o.t, o.r)),
          bottomLeft: Math.max(0, s.bottomLeft - Math.max(o.b, o.l)),
          bottomRight: Math.max(0, s.bottomRight - Math.max(o.b, o.r)),
        },
      },
    };
  }
  function Do(t, e, i, n) {
    const o = null === e,
      s = null === i,
      a = t && !(o && s) && Mo(t, n);
    return (
      a &&
      (o || (e >= a.left && e <= a.right)) &&
      (s || (i >= a.top && i <= a.bottom))
    );
  }
  function Co(t, e) {
    t.rect(e.x, e.y, e.w, e.h);
  }
  (vo.id = "point"),
    (vo.defaults = {
      borderWidth: 1,
      hitRadius: 1,
      hoverBorderWidth: 1,
      hoverRadius: 4,
      pointStyle: "circle",
      radius: 3,
      rotation: 0,
    }),
    (vo.defaultRoutes = {
      backgroundColor: "backgroundColor",
      borderColor: "borderColor",
    });
  class To extends _n {
    constructor(t) {
      super(),
        (this.options = void 0),
        (this.horizontal = void 0),
        (this.base = void 0),
        (this.width = void 0),
        (this.height = void 0),
        t && Object.assign(this, t);
    }
    draw(t) {
      const e = this.options,
        { inner: i, outer: n } = Oo(this),
        o =
          (s = n.radius).topLeft || s.topRight || s.bottomLeft || s.bottomRight
            ? Jt
            : Co;
      var s;
      t.save(),
        (n.w === i.w && n.h === i.h) ||
          (t.beginPath(),
          o(t, n),
          t.clip(),
          o(t, i),
          (t.fillStyle = e.borderColor),
          t.fill("evenodd")),
        t.beginPath(),
        o(t, i),
        (t.fillStyle = e.backgroundColor),
        t.fill(),
        t.restore();
    }
    inRange(t, e, i) {
      return Do(this, t, e, i);
    }
    inXRange(t, e) {
      return Do(this, t, null, e);
    }
    inYRange(t, e) {
      return Do(this, null, t, e);
    }
    getCenterPoint(t) {
      const {
        x: e,
        y: i,
        base: n,
        horizontal: o,
      } = this.getProps(["x", "y", "base", "horizontal"], t);
      return { x: o ? (e + n) / 2 : e, y: o ? i : (i + n) / 2 };
    }
    getRange(t) {
      return "x" === t ? this.width / 2 : this.height / 2;
    }
  }
  (To.id = "bar"),
    (To.defaults = {
      borderSkipped: "start",
      borderWidth: 0,
      borderRadius: 0,
      enableBorderRadius: !0,
      pointStyle: void 0,
    }),
    (To.defaultRoutes = {
      backgroundColor: "backgroundColor",
      borderColor: "borderColor",
    });
  class Ao extends _n {
    constructor(t) {
      super(),
        (this.chart = t.chart),
        (this.options = t.options),
        (this.ctx = t.ctx),
        (this._padding = void 0),
        (this.top = void 0),
        (this.bottom = void 0),
        (this.left = void 0),
        (this.right = void 0),
        (this.width = void 0),
        (this.height = void 0),
        (this.position = void 0),
        (this.weight = void 0),
        (this.fullSize = void 0);
    }
    update(t, e) {
      const i = this,
        n = i.options;
      if (((i.left = 0), (i.top = 0), !n.display))
        return void (i.width = i.height = i.right = i.bottom = 0);
      (i.width = i.right = t), (i.height = i.bottom = e);
      const o = c(n.text) ? n.text.length : 1;
      i._padding = se(n.padding);
      const s = o * ae(n.font).lineHeight + i._padding.height;
      i.isHorizontal() ? (i.height = s) : (i.width = s);
    }
    isHorizontal() {
      const t = this.options.position;
      return "top" === t || "bottom" === t;
    }
    _drawArgs(t) {
      const { top: e, left: i, bottom: n, right: o, options: s } = this,
        r = s.align;
      let l,
        c,
        h,
        d = 0;
      return (
        this.isHorizontal()
          ? ((c = a(r, i, o)), (h = e + t), (l = o - i))
          : ("left" === s.position
              ? ((c = i + t), (h = a(r, n, e)), (d = -0.5 * C))
              : ((c = o - t), (h = a(r, e, n)), (d = 0.5 * C)),
            (l = n - e)),
        { titleX: c, titleY: h, maxWidth: l, rotation: d }
      );
    }
    draw() {
      const t = this,
        e = t.ctx,
        i = t.options;
      if (!i.display) return;
      const n = ae(i.font),
        o = n.lineHeight / 2 + t._padding.top,
        { titleX: a, titleY: r, maxWidth: l, rotation: c } = t._drawArgs(o);
      Zt(e, i.text, 0, 0, n, {
        color: i.color,
        maxWidth: l,
        rotation: c,
        textAlign: s(i.align),
        textBaseline: "middle",
        translation: [a, r],
      });
    }
  }
  var Lo = {
    id: "title",
    _element: Ao,
    start(t, e, i) {
      !(function (t, e) {
        const i = new Ao({ ctx: t.ctx, options: e, chart: t });
        nn.configure(t, i, e), nn.addBox(t, i), (t.titleBlock = i);
      })(t, i);
    },
    stop(t) {
      const e = t.titleBlock;
      nn.removeBox(t, e), delete t.titleBlock;
    },
    beforeUpdate(t, e, i) {
      const n = t.titleBlock;
      nn.configure(t, n, i), (n.options = i);
    },
    defaults: {
      align: "center",
      display: !1,
      font: { weight: "bold" },
      fullSize: !0,
      padding: 10,
      position: "top",
      text: "",
      weight: 2e3,
    },
    defaultRoutes: { color: "color" },
    descriptors: { _scriptable: !0, _indexable: !1 },
  };
  const Ro = {
    average(t) {
      if (!t.length) return !1;
      let e,
        i,
        n = 0,
        o = 0,
        s = 0;
      for (e = 0, i = t.length; e < i; ++e) {
        const i = t[e].element;
        if (i && i.hasValue()) {
          const t = i.tooltipPosition();
          (n += t.x), (o += t.y), ++s;
        }
      }
      return { x: n / s, y: o / s };
    },
    nearest(t, e) {
      if (!t.length) return !1;
      let i,
        n,
        o,
        s = e.x,
        a = e.y,
        r = Number.POSITIVE_INFINITY;
      for (i = 0, n = t.length; i < n; ++i) {
        const n = t[i].element;
        if (n && n.hasValue()) {
          const t = q(e, n.getCenterPoint());
          t < r && ((r = t), (o = n));
        }
      }
      if (o) {
        const t = o.tooltipPosition();
        (s = t.x), (a = t.y);
      }
      return { x: s, y: a };
    },
  };
  function Eo(t, e) {
    return e && (c(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
  }
  function Io(t) {
    return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1
      ? t.split("\n")
      : t;
  }
  function Fo(t, e) {
    const { element: i, datasetIndex: n, index: o } = e,
      s = t.getDatasetMeta(n).controller,
      { label: a, value: r } = s.getLabelAndValue(o);
    return {
      chart: t,
      label: a,
      parsed: s.getParsed(o),
      raw: t.data.datasets[n].data[o],
      formattedValue: r,
      dataset: s.getDataset(),
      dataIndex: o,
      datasetIndex: n,
      element: i,
    };
  }
  function zo(t, e) {
    const i = t._chart.ctx,
      { body: n, footer: o, title: s } = t,
      { boxWidth: a, boxHeight: r } = e,
      l = ae(e.bodyFont),
      c = ae(e.titleFont),
      h = ae(e.footerFont),
      d = s.length,
      u = o.length,
      g = n.length,
      f = se(e.padding);
    let p = f.height,
      x = 0,
      b = n.reduce(
        (t, e) => t + e.before.length + e.lines.length + e.after.length,
        0
      );
    if (
      ((b += t.beforeBody.length + t.afterBody.length),
      d &&
        (p +=
          d * c.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom),
      b)
    ) {
      p +=
        g * (e.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight) +
        (b - g) * l.lineHeight +
        (b - 1) * e.bodySpacing;
    }
    u &&
      (p += e.footerMarginTop + u * h.lineHeight + (u - 1) * e.footerSpacing);
    let _ = 0;
    const y = function (t) {
      x = Math.max(x, i.measureText(t).width + _);
    };
    return (
      i.save(),
      (i.font = c.string),
      m(t.title, y),
      (i.font = l.string),
      m(t.beforeBody.concat(t.afterBody), y),
      (_ = e.displayColors ? a + 2 : 0),
      m(n, (t) => {
        m(t.before, y), m(t.lines, y), m(t.after, y);
      }),
      (_ = 0),
      (i.font = h.string),
      m(t.footer, y),
      i.restore(),
      (x += f.width),
      { width: x, height: p }
    );
  }
  function Vo(t, e, i, n) {
    const { x: o, width: s } = i,
      {
        width: a,
        chartArea: { left: r, right: l },
      } = t;
    let c = "center";
    return (
      "center" === n
        ? (c = o <= (r + l) / 2 ? "left" : "right")
        : o <= s / 2
        ? (c = "left")
        : o >= a - s / 2 && (c = "right"),
      (function (t, e, i, n) {
        const { x: o, width: s } = n,
          a = i.caretSize + i.caretPadding;
        return (
          ("left" === t && o + s + a > e.width) ||
          ("right" === t && o - s - a < 0) ||
          void 0
        );
      })(c, t, e, i) && (c = "center"),
      c
    );
  }
  function Bo(t, e, i) {
    const n =
      e.yAlign ||
      (function (t, e) {
        const { y: i, height: n } = e;
        return i < n / 2 ? "top" : i > t.height - n / 2 ? "bottom" : "center";
      })(t, i);
    return { xAlign: e.xAlign || Vo(t, e, i, n), yAlign: n };
  }
  function No(t, e, i, n) {
    const { caretSize: o, caretPadding: s, cornerRadius: a } = t,
      { xAlign: r, yAlign: l } = i,
      c = o + s,
      h = a + s;
    let d = (function (t, e) {
      let { x: i, width: n } = t;
      return "right" === e ? (i -= n) : "center" === e && (i -= n / 2), i;
    })(e, r);
    const u = (function (t, e, i) {
      let { y: n, height: o } = t;
      return "top" === e ? (n += i) : (n -= "bottom" === e ? o + i : o / 2), n;
    })(e, l, c);
    return (
      "center" === l
        ? "left" === r
          ? (d += c)
          : "right" === r && (d -= c)
        : "left" === r
        ? (d -= h)
        : "right" === r && (d += h),
      { x: G(d, 0, n.width - e.width), y: G(u, 0, n.height - e.height) }
    );
  }
  function jo(t, e, i) {
    const n = se(i.padding);
    return "center" === e
      ? t.x + t.width / 2
      : "right" === e
      ? t.x + t.width - n.right
      : t.x + n.left;
  }
  function Wo(t) {
    return Eo([], Io(t));
  }
  function Ho(t, e) {
    const i =
      e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
    return i ? t.override(i) : t;
  }
  class $o extends _n {
    constructor(t) {
      super(),
        (this.opacity = 0),
        (this._active = []),
        (this._chart = t._chart),
        (this._eventPosition = void 0),
        (this._size = void 0),
        (this._cachedAnimations = void 0),
        (this._tooltipItems = []),
        (this.$animations = void 0),
        (this.$context = void 0),
        (this.options = t.options),
        (this.dataPoints = void 0),
        (this.title = void 0),
        (this.beforeBody = void 0),
        (this.body = void 0),
        (this.afterBody = void 0),
        (this.footer = void 0),
        (this.xAlign = void 0),
        (this.yAlign = void 0),
        (this.x = void 0),
        (this.y = void 0),
        (this.height = void 0),
        (this.width = void 0),
        (this.caretX = void 0),
        (this.caretY = void 0),
        (this.labelColors = void 0),
        (this.labelPointStyles = void 0),
        (this.labelTextColors = void 0);
    }
    initialize(t) {
      (this.options = t),
        (this._cachedAnimations = void 0),
        (this.$context = void 0);
    }
    _resolveAnimations() {
      const t = this,
        e = t._cachedAnimations;
      if (e) return e;
      const i = t._chart,
        n = t.options.setContext(t.getContext()),
        o = n.enabled && i.options.animation && n.animations,
        s = new di(t._chart, o);
      return o._cacheable && (t._cachedAnimations = Object.freeze(s)), s;
    }
    getContext() {
      const t = this;
      return (
        t.$context ||
        (t.$context =
          ((e = t._chart.getContext()),
          (i = t),
          (n = t._tooltipItems),
          Object.assign(Object.create(e), {
            tooltip: i,
            tooltipItems: n,
            type: "tooltip",
          })))
      );
      var e, i, n;
    }
    getTitle(t, e) {
      const i = this,
        { callbacks: n } = e,
        o = n.beforeTitle.apply(i, [t]),
        s = n.title.apply(i, [t]),
        a = n.afterTitle.apply(i, [t]);
      let r = [];
      return (r = Eo(r, Io(o))), (r = Eo(r, Io(s))), (r = Eo(r, Io(a))), r;
    }
    getBeforeBody(t, e) {
      return Wo(e.callbacks.beforeBody.apply(this, [t]));
    }
    getBody(t, e) {
      const i = this,
        { callbacks: n } = e,
        o = [];
      return (
        m(t, (t) => {
          const e = { before: [], lines: [], after: [] },
            s = Ho(n, t);
          Eo(e.before, Io(s.beforeLabel.call(i, t))),
            Eo(e.lines, s.label.call(i, t)),
            Eo(e.after, Io(s.afterLabel.call(i, t))),
            o.push(e);
        }),
        o
      );
    }
    getAfterBody(t, e) {
      return Wo(e.callbacks.afterBody.apply(this, [t]));
    }
    getFooter(t, e) {
      const i = this,
        { callbacks: n } = e,
        o = n.beforeFooter.apply(i, [t]),
        s = n.footer.apply(i, [t]),
        a = n.afterFooter.apply(i, [t]);
      let r = [];
      return (r = Eo(r, Io(o))), (r = Eo(r, Io(s))), (r = Eo(r, Io(a))), r;
    }
    _createItems(t) {
      const e = this,
        i = e._active,
        n = e._chart.data,
        o = [],
        s = [],
        a = [];
      let r,
        l,
        c = [];
      for (r = 0, l = i.length; r < l; ++r) c.push(Fo(e._chart, i[r]));
      return (
        t.filter && (c = c.filter((e, i, o) => t.filter(e, i, o, n))),
        t.itemSort && (c = c.sort((e, i) => t.itemSort(e, i, n))),
        m(c, (i) => {
          const n = Ho(t.callbacks, i);
          o.push(n.labelColor.call(e, i)),
            s.push(n.labelPointStyle.call(e, i)),
            a.push(n.labelTextColor.call(e, i));
        }),
        (e.labelColors = o),
        (e.labelPointStyles = s),
        (e.labelTextColors = a),
        (e.dataPoints = c),
        c
      );
    }
    update(t, e) {
      const i = this,
        n = i.options.setContext(i.getContext()),
        o = i._active;
      let s,
        a = [];
      if (o.length) {
        const t = Ro[n.position].call(i, o, i._eventPosition);
        (a = i._createItems(n)),
          (i.title = i.getTitle(a, n)),
          (i.beforeBody = i.getBeforeBody(a, n)),
          (i.body = i.getBody(a, n)),
          (i.afterBody = i.getAfterBody(a, n)),
          (i.footer = i.getFooter(a, n));
        const e = (i._size = zo(i, n)),
          r = Object.assign({}, t, e),
          l = Bo(i._chart, n, r),
          c = No(n, r, l, i._chart);
        (i.xAlign = l.xAlign),
          (i.yAlign = l.yAlign),
          (s = {
            opacity: 1,
            x: c.x,
            y: c.y,
            width: e.width,
            height: e.height,
            caretX: t.x,
            caretY: t.y,
          });
      } else 0 !== i.opacity && (s = { opacity: 0 });
      (i._tooltipItems = a),
        (i.$context = void 0),
        s && i._resolveAnimations().update(i, s),
        t &&
          n.external &&
          n.external.call(i, { chart: i._chart, tooltip: i, replay: e });
    }
    drawCaret(t, e, i, n) {
      const o = this.getCaretPosition(t, i, n);
      e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
    }
    getCaretPosition(t, e, i) {
      const { xAlign: n, yAlign: o } = this,
        { cornerRadius: s, caretSize: a } = i,
        { x: r, y: l } = t,
        { width: c, height: h } = e;
      let d, u, g, f, p, m;
      return (
        "center" === o
          ? ((p = l + h / 2),
            "left" === n
              ? ((d = r), (u = d - a), (f = p + a), (m = p - a))
              : ((d = r + c), (u = d + a), (f = p - a), (m = p + a)),
            (g = d))
          : ((u =
              "left" === n
                ? r + s + a
                : "right" === n
                ? r + c - s - a
                : this.caretX),
            "top" === o
              ? ((f = l), (p = f - a), (d = u - a), (g = u + a))
              : ((f = l + h), (p = f + a), (d = u + a), (g = u - a)),
            (m = f)),
        { x1: d, x2: u, x3: g, y1: f, y2: p, y3: m }
      );
    }
    drawTitle(t, e, i) {
      const n = this,
        o = n.title,
        s = o.length;
      let a, r, l;
      if (s) {
        const c = Ge(i.rtl, n.x, n.width);
        for (
          t.x = jo(n, i.titleAlign, i),
            e.textAlign = c.textAlign(i.titleAlign),
            e.textBaseline = "middle",
            a = ae(i.titleFont),
            r = i.titleSpacing,
            e.fillStyle = i.titleColor,
            e.font = a.string,
            l = 0;
          l < s;
          ++l
        )
          e.fillText(o[l], c.x(t.x), t.y + a.lineHeight / 2),
            (t.y += a.lineHeight + r),
            l + 1 === s && (t.y += i.titleMarginBottom - r);
      }
    }
    _drawColorBox(t, e, i, n, o) {
      const s = this,
        a = s.labelColors[i],
        r = s.labelPointStyles[i],
        { boxHeight: l, boxWidth: c } = o,
        h = ae(o.bodyFont),
        d = jo(s, "left", o),
        u = n.x(d),
        g = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0,
        f = e.y + g;
      if (o.usePointStyle) {
        const e = {
            radius: Math.min(c, l) / 2,
            pointStyle: r.pointStyle,
            rotation: r.rotation,
            borderWidth: 1,
          },
          i = n.leftForLtr(u, c) + c / 2,
          s = f + l / 2;
        (t.strokeStyle = o.multiKeyBackground),
          (t.fillStyle = o.multiKeyBackground),
          Yt(t, e, i, s),
          (t.strokeStyle = a.borderColor),
          (t.fillStyle = a.backgroundColor),
          Yt(t, e, i, s);
      } else {
        (t.lineWidth = a.borderWidth || 1),
          (t.strokeStyle = a.borderColor),
          t.setLineDash(a.borderDash || []),
          (t.lineDashOffset = a.borderDashOffset || 0);
        const e = n.leftForLtr(u, c),
          i = n.leftForLtr(n.xPlus(u, 1), c - 2),
          s = oe(a.borderRadius);
        Object.values(s).some((t) => 0 !== t)
          ? (t.beginPath(),
            (t.fillStyle = o.multiKeyBackground),
            Jt(t, { x: e, y: f, w: c, h: l, radius: s }),
            t.fill(),
            t.stroke(),
            (t.fillStyle = a.backgroundColor),
            t.beginPath(),
            Jt(t, { x: i, y: f + 1, w: c - 2, h: l - 2, radius: s }),
            t.fill())
          : ((t.fillStyle = o.multiKeyBackground),
            t.fillRect(e, f, c, l),
            t.strokeRect(e, f, c, l),
            (t.fillStyle = a.backgroundColor),
            t.fillRect(i, f + 1, c - 2, l - 2));
      }
      t.fillStyle = s.labelTextColors[i];
    }
    drawBody(t, e, i) {
      const n = this,
        { body: o } = n,
        {
          bodySpacing: s,
          bodyAlign: a,
          displayColors: r,
          boxHeight: l,
          boxWidth: c,
        } = i,
        h = ae(i.bodyFont);
      let d = h.lineHeight,
        u = 0;
      const g = Ge(i.rtl, n.x, n.width),
        f = function (i) {
          e.fillText(i, g.x(t.x + u), t.y + d / 2), (t.y += d + s);
        },
        p = g.textAlign(a);
      let x, b, _, y, v, M, w;
      for (
        e.textAlign = a,
          e.textBaseline = "middle",
          e.font = h.string,
          t.x = jo(n, p, i),
          e.fillStyle = i.bodyColor,
          m(n.beforeBody, f),
          u = r && "right" !== p ? ("center" === a ? c / 2 + 1 : c + 2) : 0,
          y = 0,
          M = o.length;
        y < M;
        ++y
      ) {
        for (
          x = o[y],
            b = n.labelTextColors[y],
            e.fillStyle = b,
            m(x.before, f),
            _ = x.lines,
            r &&
              _.length &&
              (n._drawColorBox(e, t, y, g, i), (d = Math.max(h.lineHeight, l))),
            v = 0,
            w = _.length;
          v < w;
          ++v
        )
          f(_[v]), (d = h.lineHeight);
        m(x.after, f);
      }
      (u = 0), (d = h.lineHeight), m(n.afterBody, f), (t.y -= s);
    }
    drawFooter(t, e, i) {
      const n = this,
        o = n.footer,
        s = o.length;
      let a, r;
      if (s) {
        const l = Ge(i.rtl, n.x, n.width);
        for (
          t.x = jo(n, i.footerAlign, i),
            t.y += i.footerMarginTop,
            e.textAlign = l.textAlign(i.footerAlign),
            e.textBaseline = "middle",
            a = ae(i.footerFont),
            e.fillStyle = i.footerColor,
            e.font = a.string,
            r = 0;
          r < s;
          ++r
        )
          e.fillText(o[r], l.x(t.x), t.y + a.lineHeight / 2),
            (t.y += a.lineHeight + i.footerSpacing);
      }
    }
    drawBackground(t, e, i, n) {
      const { xAlign: o, yAlign: s } = this,
        { x: a, y: r } = t,
        { width: l, height: c } = i,
        h = n.cornerRadius;
      (e.fillStyle = n.backgroundColor),
        (e.strokeStyle = n.borderColor),
        (e.lineWidth = n.borderWidth),
        e.beginPath(),
        e.moveTo(a + h, r),
        "top" === s && this.drawCaret(t, e, i, n),
        e.lineTo(a + l - h, r),
        e.quadraticCurveTo(a + l, r, a + l, r + h),
        "center" === s && "right" === o && this.drawCaret(t, e, i, n),
        e.lineTo(a + l, r + c - h),
        e.quadraticCurveTo(a + l, r + c, a + l - h, r + c),
        "bottom" === s && this.drawCaret(t, e, i, n),
        e.lineTo(a + h, r + c),
        e.quadraticCurveTo(a, r + c, a, r + c - h),
        "center" === s && "left" === o && this.drawCaret(t, e, i, n),
        e.lineTo(a, r + h),
        e.quadraticCurveTo(a, r, a + h, r),
        e.closePath(),
        e.fill(),
        n.borderWidth > 0 && e.stroke();
    }
    _updateAnimationTarget(t) {
      const e = this,
        i = e._chart,
        n = e.$animations,
        o = n && n.x,
        s = n && n.y;
      if (o || s) {
        const n = Ro[t.position].call(e, e._active, e._eventPosition);
        if (!n) return;
        const a = (e._size = zo(e, t)),
          r = Object.assign({}, n, e._size),
          l = Bo(i, t, r),
          c = No(t, r, l, i);
        (o._to === c.x && s._to === c.y) ||
          ((e.xAlign = l.xAlign),
          (e.yAlign = l.yAlign),
          (e.width = a.width),
          (e.height = a.height),
          (e.caretX = n.x),
          (e.caretY = n.y),
          e._resolveAnimations().update(e, c));
      }
    }
    draw(t) {
      const e = this,
        i = e.options.setContext(e.getContext());
      let n = e.opacity;
      if (!n) return;
      e._updateAnimationTarget(i);
      const o = { width: e.width, height: e.height },
        s = { x: e.x, y: e.y };
      n = Math.abs(n) < 0.001 ? 0 : n;
      const a = se(i.padding),
        r =
          e.title.length ||
          e.beforeBody.length ||
          e.body.length ||
          e.afterBody.length ||
          e.footer.length;
      i.enabled &&
        r &&
        (t.save(),
        (t.globalAlpha = n),
        e.drawBackground(s, t, o, i),
        Ze(t, i.textDirection),
        (s.y += a.top),
        e.drawTitle(s, t, i),
        e.drawBody(s, t, i),
        e.drawFooter(s, t, i),
        Je(t, i.textDirection),
        t.restore());
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t, e) {
      const i = this,
        n = i._active,
        o = t.map(({ datasetIndex: t, index: e }) => {
          const n = i._chart.getDatasetMeta(t);
          if (!n) throw new Error("Cannot find a dataset at index " + t);
          return { datasetIndex: t, element: n.data[e], index: e };
        }),
        s = !x(n, o),
        a = i._positionChanged(o, e);
      (s || a) && ((i._active = o), (i._eventPosition = e), i.update(!0));
    }
    handleEvent(t, e) {
      const i = this,
        n = i.options,
        o = i._active || [];
      let s = !1,
        a = [];
      "mouseout" !== t.type &&
        ((a = i._chart.getElementsAtEventForMode(t, n.mode, n, e)),
        n.reverse && a.reverse());
      const r = i._positionChanged(a, t);
      return (
        (s = e || !x(a, o) || r),
        s &&
          ((i._active = a),
          (n.enabled || n.external) &&
            ((i._eventPosition = { x: t.x, y: t.y }), i.update(!0, e))),
        s
      );
    }
    _positionChanged(t, e) {
      const { caretX: i, caretY: n, options: o } = this,
        s = Ro[o.position].call(this, t, e);
      return !1 !== s && (i !== s.x || n !== s.y);
    }
  }
  $o.positioners = Ro;
  function Yo(t, e, i) {
    const n = t.indexOf(e);
    if (-1 === n)
      return ((t, e, i) =>
        "string" == typeof e ? t.push(e) - 1 : isNaN(e) ? null : i)(t, e, i);
    return n !== t.lastIndexOf(e) ? i : n;
  }
  class qo extends Tn {
    constructor(t) {
      super(t), (this._startValue = void 0), (this._valueRange = 0);
    }
    parse(t, e) {
      if (l(t)) return null;
      const i = this.getLabels();
      return ((t, e) => (null === t ? null : G(Math.round(t), 0, e)))(
        (e = isFinite(e) && i[e] === t ? e : Yo(i, t, g(e, t))),
        i.length - 1
      );
    }
    determineDataLimits() {
      const t = this,
        { minDefined: e, maxDefined: i } = t.getUserBounds();
      let { min: n, max: o } = t.getMinMax(!0);
      "ticks" === t.options.bounds &&
        (e || (n = 0), i || (o = t.getLabels().length - 1)),
        (t.min = n),
        (t.max = o);
    }
    buildTicks() {
      const t = this,
        e = t.min,
        i = t.max,
        n = t.options.offset,
        o = [];
      let s = t.getLabels();
      (s = 0 === e && i === s.length - 1 ? s : s.slice(e, i + 1)),
        (t._valueRange = Math.max(s.length - (n ? 0 : 1), 1)),
        (t._startValue = t.min - (n ? 0.5 : 0));
      for (let t = e; t <= i; t++) o.push({ value: t });
      return o;
    }
    getLabelForValue(t) {
      const e = this.getLabels();
      return t >= 0 && t < e.length ? e[t] : t;
    }
    configure() {
      const t = this;
      super.configure(),
        t.isHorizontal() || (t._reversePixels = !t._reversePixels);
    }
    getPixelForValue(t) {
      const e = this;
      return (
        "number" != typeof t && (t = e.parse(t)),
        null === t
          ? NaN
          : e.getPixelForDecimal((t - e._startValue) / e._valueRange)
      );
    }
    getPixelForTick(t) {
      const e = this.ticks;
      return t < 0 || t > e.length - 1
        ? null
        : this.getPixelForValue(e[t].value);
    }
    getValueForPixel(t) {
      const e = this;
      return Math.round(
        e._startValue + e.getDecimalForPixel(t) * e._valueRange
      );
    }
    getBasePixel() {
      return this.bottom;
    }
  }
  function Uo(t, e) {
    const i = [],
      {
        step: n,
        min: o,
        max: s,
        precision: a,
        count: r,
        maxTicks: c,
        maxDigits: h,
        includeBounds: d,
      } = t,
      u = n || 1,
      g = c - 1,
      { min: f, max: p } = e,
      m = !l(o),
      x = !l(s),
      b = !l(r),
      _ = (p - f) / (h + 1);
    let y,
      v,
      M,
      w,
      k = B((p - f) / g / u) * u;
    if (k < 1e-14 && !m && !x) return [{ value: f }, { value: p }];
    (w = Math.ceil(p / k) - Math.floor(f / k)),
      w > g && (k = B((w * k) / g / u) * u),
      l(a) || ((y = Math.pow(10, a)), (k = Math.ceil(k * y) / y)),
      (v = Math.floor(f / k) * k),
      (M = Math.ceil(p / k) * k),
      m &&
      x &&
      n &&
      (function (t, e) {
        const i = Math.round(t);
        return i - e <= t && i + e >= t;
      })((s - o) / n, k / 1e3)
        ? ((w = Math.min((s - o) / k, c)), (k = (s - o) / w), (v = o), (M = s))
        : b
        ? ((v = m ? o : v), (M = x ? s : M), (w = r - 1), (k = (M - v) / w))
        : ((w = (M - v) / k),
          (w = j(w, Math.round(w), k / 1e3) ? Math.round(w) : Math.ceil(w)));
    const S = Math.max(Y(k), Y(v));
    (y = Math.pow(10, l(a) ? S : a)),
      (v = Math.round(v * y) / y),
      (M = Math.round(M * y) / y);
    let P = 0;
    for (
      m &&
      (d && v !== o
        ? (i.push({ value: o }),
          v < o && P++,
          j(Math.round((v + P * k) * y) / y, o, Xo(o, _, t)) && P++)
        : v < o && P++);
      P < w;
      ++P
    )
      i.push({ value: Math.round((v + P * k) * y) / y });
    return (
      x && d && M !== s
        ? j(i[i.length - 1].value, s, Xo(s, _, t))
          ? (i[i.length - 1].value = s)
          : i.push({ value: s })
        : (x && M !== s) || i.push({ value: M }),
      i
    );
  }
  function Xo(t, e, { horizontal: i, minRotation: n }) {
    const o = H(n),
      s = (i ? Math.sin(o) : Math.cos(o)) || 0.001,
      a = 0.75 * e * ("" + t).length;
    return Math.min(e / s, a);
  }
  (qo.id = "category"),
    (qo.defaults = { ticks: { callback: qo.prototype.getLabelForValue } });
  class Ko extends Tn {
    constructor(t) {
      super(t),
        (this.start = void 0),
        (this.end = void 0),
        (this._startValue = void 0),
        (this._endValue = void 0),
        (this._valueRange = 0);
    }
    parse(t, e) {
      return l(t) ||
        (("number" == typeof t || t instanceof Number) && !isFinite(+t))
        ? null
        : +t;
    }
    handleTickRangeOptions() {
      const t = this,
        { beginAtZero: e } = t.options,
        { minDefined: i, maxDefined: n } = t.getUserBounds();
      let { min: o, max: s } = t;
      const a = (t) => (o = i ? o : t),
        r = (t) => (s = n ? s : t);
      if (e) {
        const t = V(o),
          e = V(s);
        t < 0 && e < 0 ? r(0) : t > 0 && e > 0 && a(0);
      }
      o === s && (r(s + 1), e || a(o - 1)), (t.min = o), (t.max = s);
    }
    getTickLimit() {
      const t = this,
        e = t.options.ticks;
      let i,
        { maxTicksLimit: n, stepSize: o } = e;
      return (
        o
          ? (i = Math.ceil(t.max / o) - Math.floor(t.min / o) + 1)
          : ((i = t.computeTickLimit()), (n = n || 11)),
        n && (i = Math.min(n, i)),
        i
      );
    }
    computeTickLimit() {
      return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
      const t = this,
        e = t.options,
        i = e.ticks;
      let n = t.getTickLimit();
      n = Math.max(2, n);
      const o = Uo(
        {
          maxTicks: n,
          min: e.min,
          max: e.max,
          precision: i.precision,
          step: i.stepSize,
          count: i.count,
          maxDigits: t._maxDigits(),
          horizontal: t.isHorizontal(),
          minRotation: i.minRotation || 0,
          includeBounds: !1 !== i.includeBounds,
        },
        t._range || t
      );
      return (
        "ticks" === e.bounds && W(o, t, "value"),
        e.reverse
          ? (o.reverse(), (t.start = t.max), (t.end = t.min))
          : ((t.start = t.min), (t.end = t.max)),
        o
      );
    }
    configure() {
      const t = this,
        e = t.ticks;
      let i = t.min,
        n = t.max;
      if ((super.configure(), t.options.offset && e.length)) {
        const t = (n - i) / Math.max(e.length - 1, 1) / 2;
        (i -= t), (n += t);
      }
      (t._startValue = i), (t._endValue = n), (t._valueRange = n - i);
    }
    getLabelForValue(t) {
      return Ke(t, this.chart.options.locale);
    }
  }
  class Go extends Ko {
    determineDataLimits() {
      const t = this,
        { min: e, max: i } = t.getMinMax(!0);
      (t.min = d(e) ? e : 0),
        (t.max = d(i) ? i : 1),
        t.handleTickRangeOptions();
    }
    computeTickLimit() {
      const t = this,
        e = t.isHorizontal(),
        i = e ? t.width : t.height,
        n = H(t.options.ticks.minRotation),
        o = (e ? Math.sin(n) : Math.cos(n)) || 0.001,
        s = t._resolveTickFontOptions(0);
      return Math.ceil(i / Math.min(40, s.lineHeight / o));
    }
    getPixelForValue(t) {
      return null === t
        ? NaN
        : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
    }
    getValueForPixel(t) {
      return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
    }
  }
  function Zo(t) {
    return 1 === t / Math.pow(10, Math.floor(z(t)));
  }
  (Go.id = "linear"),
    (Go.defaults = { ticks: { callback: vn.formatters.numeric } });
  class Jo extends Tn {
    constructor(t) {
      super(t),
        (this.start = void 0),
        (this.end = void 0),
        (this._startValue = void 0),
        (this._valueRange = 0);
    }
    parse(t, e) {
      const i = Ko.prototype.parse.apply(this, [t, e]);
      if (0 !== i) return d(i) && i > 0 ? i : null;
      this._zero = !0;
    }
    determineDataLimits() {
      const t = this,
        { min: e, max: i } = t.getMinMax(!0);
      (t.min = d(e) ? Math.max(0, e) : null),
        (t.max = d(i) ? Math.max(0, i) : null),
        t.options.beginAtZero && (t._zero = !0),
        t.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
      const t = this,
        { minDefined: e, maxDefined: i } = t.getUserBounds();
      let n = t.min,
        o = t.max;
      const s = (t) => (n = e ? n : t),
        a = (t) => (o = i ? o : t),
        r = (t, e) => Math.pow(10, Math.floor(z(t)) + e);
      n === o && (n <= 0 ? (s(1), a(10)) : (s(r(n, -1)), a(r(o, 1)))),
        n <= 0 && s(r(o, -1)),
        o <= 0 && a(r(n, 1)),
        t._zero &&
          t.min !== t._suggestedMin &&
          n === r(t.min, 0) &&
          s(r(n, -1)),
        (t.min = n),
        (t.max = o);
    }
    buildTicks() {
      const t = this,
        e = t.options,
        i = (function (t, e) {
          const i = Math.floor(z(e.max)),
            n = Math.ceil(e.max / Math.pow(10, i)),
            o = [];
          let s = u(t.min, Math.pow(10, Math.floor(z(e.min)))),
            a = Math.floor(z(s)),
            r = Math.floor(s / Math.pow(10, a)),
            l = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
          do {
            o.push({ value: s, major: Zo(s) }),
              ++r,
              10 === r && ((r = 1), ++a, (l = a >= 0 ? 1 : l)),
              (s = Math.round(r * Math.pow(10, a) * l) / l);
          } while (a < i || (a === i && r < n));
          const c = u(t.max, s);
          return o.push({ value: c, major: Zo(s) }), o;
        })({ min: t._userMin, max: t._userMax }, t);
      return (
        "ticks" === e.bounds && W(i, t, "value"),
        e.reverse
          ? (i.reverse(), (t.start = t.max), (t.end = t.min))
          : ((t.start = t.min), (t.end = t.max)),
        i
      );
    }
    getLabelForValue(t) {
      return void 0 === t ? "0" : Ke(t, this.chart.options.locale);
    }
    configure() {
      const t = this,
        e = t.min;
      super.configure(),
        (t._startValue = z(e)),
        (t._valueRange = z(t.max) - z(e));
    }
    getPixelForValue(t) {
      const e = this;
      return (
        (void 0 !== t && 0 !== t) || (t = e.min),
        null === t || isNaN(t)
          ? NaN
          : e.getPixelForDecimal(
              t === e.min ? 0 : (z(t) - e._startValue) / e._valueRange
            )
      );
    }
    getValueForPixel(t) {
      const e = this,
        i = e.getDecimalForPixel(t);
      return Math.pow(10, e._startValue + i * e._valueRange);
    }
  }
  function Qo(t) {
    const e = t.ticks;
    if (e.display && t.display) {
      const t = se(e.backdropPadding);
      return g(e.font && e.font.size, Nt.font.size) + t.height;
    }
    return 0;
  }
  function ts(t, e, i, n, o) {
    return t === n || t === o
      ? { start: e - i / 2, end: e + i / 2 }
      : t < n || t > o
      ? { start: e - i, end: e }
      : { start: e, end: e + i };
  }
  function es(t) {
    return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
  }
  function is(t, e, i) {
    90 === t || 270 === t
      ? (i.y -= e.h / 2)
      : (t > 270 || t < 90) && (i.y -= e.h);
  }
  function ns(t, e, i, n) {
    const { ctx: o } = t;
    if (i) o.arc(t.xCenter, t.yCenter, e, 0, T);
    else {
      let i = t.getPointPosition(0, e);
      o.moveTo(i.x, i.y);
      for (let s = 1; s < n; s++)
        (i = t.getPointPosition(s, e)), o.lineTo(i.x, i.y);
    }
  }
  function os(t) {
    return N(t) ? t : 0;
  }
  (Jo.id = "logarithmic"),
    (Jo.defaults = {
      ticks: { callback: vn.formatters.logarithmic, major: { enabled: !0 } },
    });
  class ss extends Ko {
    constructor(t) {
      super(t),
        (this.xCenter = void 0),
        (this.yCenter = void 0),
        (this.drawingArea = void 0),
        (this._pointLabels = []),
        (this._pointLabelItems = []);
    }
    setDimensions() {
      const t = this;
      (t.width = t.maxWidth),
        (t.height = t.maxHeight),
        (t.paddingTop = Qo(t.options) / 2),
        (t.xCenter = Math.floor(t.width / 2)),
        (t.yCenter = Math.floor((t.height - t.paddingTop) / 2)),
        (t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2);
    }
    determineDataLimits() {
      const t = this,
        { min: e, max: i } = t.getMinMax(!1);
      (t.min = d(e) && !isNaN(e) ? e : 0),
        (t.max = d(i) && !isNaN(i) ? i : 0),
        t.handleTickRangeOptions();
    }
    computeTickLimit() {
      return Math.ceil(this.drawingArea / Qo(this.options));
    }
    generateTickLabels(t) {
      const e = this;
      Ko.prototype.generateTickLabels.call(e, t),
        (e._pointLabels = e.getLabels().map((t, i) => {
          const n = p(e.options.pointLabels.callback, [t, i], e);
          return n || 0 === n ? n : "";
        }));
    }
    fit() {
      const t = this,
        e = t.options;
      e.display && e.pointLabels.display
        ? (function (t) {
            const e = { l: 0, r: t.width, t: 0, b: t.height - t.paddingTop },
              i = {};
            let n, o, s;
            const a = [],
              r = [],
              l = t.getLabels().length;
            for (n = 0; n < l; n++) {
              const l = t.options.pointLabels.setContext(t.getContext(n));
              (r[n] = l.padding),
                (s = t.getPointPosition(n, t.drawingArea + r[n]));
              const g = ae(l.font);
              (t.ctx.font = g.string),
                (h = t.ctx),
                (d = g.lineHeight),
                (o = c((u = t._pointLabels[n]))
                  ? { w: Wt(h, h.font, u), h: u.length * d }
                  : { w: h.measureText(u).width, h: d }),
                (a[n] = o);
              const f = t.getIndexAngle(n),
                p = $(f),
                m = ts(p, s.x, o.w, 0, 180),
                x = ts(p, s.y, o.h, 90, 270);
              m.start < e.l && ((e.l = m.start), (i.l = f)),
                m.end > e.r && ((e.r = m.end), (i.r = f)),
                x.start < e.t && ((e.t = x.start), (i.t = f)),
                x.end > e.b && ((e.b = x.end), (i.b = f));
            }
            var h, d, u;
            t._setReductions(t.drawingArea, e, i), (t._pointLabelItems = []);
            const g = t.options,
              f = Qo(g),
              p = t.getDistanceFromCenterForValue(
                g.ticks.reverse ? t.min : t.max
              );
            for (n = 0; n < l; n++) {
              const e = 0 === n ? f / 2 : 0,
                i = t.getPointPosition(n, p + e + r[n]),
                o = $(t.getIndexAngle(n)),
                s = a[n];
              is(o, s, i);
              const l = es(o);
              let c;
              c =
                "left" === l ? i.x : "center" === l ? i.x - s.w / 2 : i.x - s.w;
              const h = c + s.w;
              t._pointLabelItems[n] = {
                x: i.x,
                y: i.y,
                textAlign: l,
                left: c,
                top: i.y,
                right: h,
                bottom: i.y + s.h,
              };
            }
          })(t)
        : t.setCenterPoint(0, 0, 0, 0);
    }
    _setReductions(t, e, i) {
      const n = this;
      let o = e.l / Math.sin(i.l),
        s = Math.max(e.r - n.width, 0) / Math.sin(i.r),
        a = -e.t / Math.cos(i.t),
        r = -Math.max(e.b - (n.height - n.paddingTop), 0) / Math.cos(i.b);
      (o = os(o)),
        (s = os(s)),
        (a = os(a)),
        (r = os(r)),
        (n.drawingArea = Math.max(
          t / 2,
          Math.min(Math.floor(t - (o + s) / 2), Math.floor(t - (a + r) / 2))
        )),
        n.setCenterPoint(o, s, a, r);
    }
    setCenterPoint(t, e, i, n) {
      const o = this,
        s = o.width - e - o.drawingArea,
        a = t + o.drawingArea,
        r = i + o.drawingArea,
        l = o.height - o.paddingTop - n - o.drawingArea;
      (o.xCenter = Math.floor((a + s) / 2 + o.left)),
        (o.yCenter = Math.floor((r + l) / 2 + o.top + o.paddingTop));
    }
    getIndexAngle(t) {
      return X(
        t * (T / this.getLabels().length) + H(this.options.startAngle || 0)
      );
    }
    getDistanceFromCenterForValue(t) {
      const e = this;
      if (l(t)) return NaN;
      const i = e.drawingArea / (e.max - e.min);
      return e.options.reverse ? (e.max - t) * i : (t - e.min) * i;
    }
    getValueForDistanceFromCenter(t) {
      if (l(t)) return NaN;
      const e = this,
        i = t / (e.drawingArea / (e.max - e.min));
      return e.options.reverse ? e.max - i : e.min + i;
    }
    getPointPosition(t, e) {
      const i = this,
        n = i.getIndexAngle(t) - E;
      return {
        x: Math.cos(n) * e + i.xCenter,
        y: Math.sin(n) * e + i.yCenter,
        angle: n,
      };
    }
    getPointPositionForValue(t, e) {
      return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
    }
    getBasePosition(t) {
      return this.getPointPositionForValue(t || 0, this.getBaseValue());
    }
    getPointLabelPosition(t) {
      const { left: e, top: i, right: n, bottom: o } = this._pointLabelItems[t];
      return { left: e, top: i, right: n, bottom: o };
    }
    drawBackground() {
      const t = this,
        {
          backgroundColor: e,
          grid: { circular: i },
        } = t.options;
      if (e) {
        const n = t.ctx;
        n.save(),
          n.beginPath(),
          ns(
            t,
            t.getDistanceFromCenterForValue(t._endValue),
            i,
            t.getLabels().length
          ),
          n.closePath(),
          (n.fillStyle = e),
          n.fill(),
          n.restore();
      }
    }
    drawGrid() {
      const t = this,
        e = t.ctx,
        i = t.options,
        { angleLines: n, grid: o } = i,
        s = t.getLabels().length;
      let a, r, c;
      if (
        (i.pointLabels.display &&
          (function (t, e) {
            const {
              ctx: i,
              options: { pointLabels: n },
            } = t;
            for (let o = e - 1; o >= 0; o--) {
              const e = n.setContext(t.getContext(o)),
                s = ae(e.font),
                {
                  x: a,
                  y: r,
                  textAlign: c,
                  left: h,
                  top: d,
                  right: u,
                  bottom: g,
                } = t._pointLabelItems[o],
                { backdropColor: f } = e;
              if (!l(f)) {
                const t = se(e.backdropPadding);
                (i.fillStyle = f),
                  i.fillRect(
                    h - t.left,
                    d - t.top,
                    u - h + t.width,
                    g - d + t.height
                  );
              }
              Zt(i, t._pointLabels[o], a, r + s.lineHeight / 2, s, {
                color: e.color,
                textAlign: c,
                textBaseline: "middle",
              });
            }
          })(t, s),
        o.display &&
          t.ticks.forEach((e, i) => {
            if (0 !== i) {
              r = t.getDistanceFromCenterForValue(e.value);
              const n = o.setContext(t.getContext(i - 1));
              !(function (t, e, i, n) {
                const o = t.ctx,
                  s = e.circular,
                  { color: a, lineWidth: r } = e;
                (!s && !n) ||
                  !a ||
                  !r ||
                  i < 0 ||
                  (o.save(),
                  (o.strokeStyle = a),
                  (o.lineWidth = r),
                  o.setLineDash(e.borderDash),
                  (o.lineDashOffset = e.borderDashOffset),
                  o.beginPath(),
                  ns(t, i, s, n),
                  o.closePath(),
                  o.stroke(),
                  o.restore());
              })(t, n, r, s);
            }
          }),
        n.display)
      ) {
        for (e.save(), a = t.getLabels().length - 1; a >= 0; a--) {
          const o = n.setContext(t.getContext(a)),
            { color: s, lineWidth: l } = o;
          l &&
            s &&
            ((e.lineWidth = l),
            (e.strokeStyle = s),
            e.setLineDash(o.borderDash),
            (e.lineDashOffset = o.borderDashOffset),
            (r = t.getDistanceFromCenterForValue(
              i.ticks.reverse ? t.min : t.max
            )),
            (c = t.getPointPosition(a, r)),
            e.beginPath(),
            e.moveTo(t.xCenter, t.yCenter),
            e.lineTo(c.x, c.y),
            e.stroke());
        }
        e.restore();
      }
    }
    drawBorder() {}
    drawLabels() {
      const t = this,
        e = t.ctx,
        i = t.options,
        n = i.ticks;
      if (!n.display) return;
      const o = t.getIndexAngle(0);
      let s, a;
      e.save(),
        e.translate(t.xCenter, t.yCenter),
        e.rotate(o),
        (e.textAlign = "center"),
        (e.textBaseline = "middle"),
        t.ticks.forEach((o, r) => {
          if (0 === r && !i.reverse) return;
          const l = n.setContext(t.getContext(r)),
            c = ae(l.font);
          if (
            ((s = t.getDistanceFromCenterForValue(t.ticks[r].value)),
            l.showLabelBackdrop)
          ) {
            (a = e.measureText(o.label).width), (e.fillStyle = l.backdropColor);
            const t = se(l.backdropPadding);
            e.fillRect(
              -a / 2 - t.left,
              -s - c.size / 2 - t.top,
              a + t.width,
              c.size + t.height
            );
          }
          Zt(e, o.label, 0, -s, c, { color: l.color });
        }),
        e.restore();
    }
    drawTitle() {}
  }
  (ss.id = "radialLinear"),
    (ss.defaults = {
      display: !0,
      animate: !0,
      position: "chartArea",
      angleLines: {
        display: !0,
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0,
      },
      grid: { circular: !1 },
      startAngle: 0,
      ticks: { showLabelBackdrop: !0, callback: vn.formatters.numeric },
      pointLabels: {
        backdropColor: void 0,
        backdropPadding: 2,
        display: !0,
        font: { size: 10 },
        callback: (t) => t,
        padding: 5,
      },
    }),
    (ss.defaultRoutes = {
      "angleLines.color": "borderColor",
      "pointLabels.color": "color",
      "ticks.color": "color",
    }),
    (ss.descriptors = { angleLines: { _fallback: "grid" } });
  const as = {
      millisecond: { common: !0, size: 1, steps: 1e3 },
      second: { common: !0, size: 1e3, steps: 60 },
      minute: { common: !0, size: 6e4, steps: 60 },
      hour: { common: !0, size: 36e5, steps: 24 },
      day: { common: !0, size: 864e5, steps: 30 },
      week: { common: !1, size: 6048e5, steps: 4 },
      month: { common: !0, size: 2628e6, steps: 12 },
      quarter: { common: !1, size: 7884e6, steps: 4 },
      year: { common: !0, size: 3154e7 },
    },
    rs = Object.keys(as);
  function ls(t, e) {
    return t - e;
  }
  function cs(t, e) {
    if (l(e)) return null;
    const i = t._adapter,
      { parser: n, round: o, isoWeekday: s } = t._parseOpts;
    let a = e;
    return (
      "function" == typeof n && (a = n(a)),
      d(a) || (a = "string" == typeof n ? i.parse(a, n) : i.parse(a)),
      null === a
        ? null
        : (o &&
            (a =
              "week" !== o || (!N(s) && !0 !== s)
                ? i.startOf(a, o)
                : i.startOf(a, "isoWeek", s)),
          +a)
    );
  }
  function hs(t, e, i, n) {
    const o = rs.length;
    for (let s = rs.indexOf(t); s < o - 1; ++s) {
      const t = as[rs[s]],
        o = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
      if (t.common && Math.ceil((i - e) / (o * t.size)) <= n) return rs[s];
    }
    return rs[o - 1];
  }
  function ds(t, e, i) {
    if (i) {
      if (i.length) {
        const { lo: n, hi: o } = le(i, e);
        t[i[n] >= e ? i[n] : i[o]] = !0;
      }
    } else t[e] = !0;
  }
  function us(t, e, i) {
    const n = [],
      o = {},
      s = e.length;
    let a, r;
    for (a = 0; a < s; ++a)
      (r = e[a]), (o[r] = a), n.push({ value: r, major: !1 });
    return 0 !== s && i
      ? (function (t, e, i, n) {
          const o = t._adapter,
            s = +o.startOf(e[0].value, n),
            a = e[e.length - 1].value;
          let r, l;
          for (r = s; r <= a; r = +o.add(r, 1, n))
            (l = i[r]), l >= 0 && (e[l].major = !0);
          return e;
        })(t, n, o, i)
      : n;
  }
  class gs extends Tn {
    constructor(t) {
      super(t),
        (this._cache = { data: [], labels: [], all: [] }),
        (this._unit = "day"),
        (this._majorUnit = void 0),
        (this._offsets = {}),
        (this._normalized = !1),
        (this._parseOpts = void 0);
    }
    init(t, e) {
      const i = t.time || (t.time = {}),
        n = (this._adapter = new Vi._date(t.adapters.date));
      M(i.displayFormats, n.formats()),
        (this._parseOpts = {
          parser: i.parser,
          round: i.round,
          isoWeekday: i.isoWeekday,
        }),
        super.init(t),
        (this._normalized = e.normalized);
    }
    parse(t, e) {
      return void 0 === t ? null : cs(this, t);
    }
    beforeLayout() {
      super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
    }
    determineDataLimits() {
      const t = this,
        e = t.options,
        i = t._adapter,
        n = e.time.unit || "day";
      let { min: o, max: s, minDefined: a, maxDefined: r } = t.getUserBounds();
      function l(t) {
        a || isNaN(t.min) || (o = Math.min(o, t.min)),
          r || isNaN(t.max) || (s = Math.max(s, t.max));
      }
      (a && r) ||
        (l(t._getLabelBounds()),
        ("ticks" === e.bounds && "labels" === e.ticks.source) ||
          l(t.getMinMax(!1))),
        (o = d(o) && !isNaN(o) ? o : +i.startOf(Date.now(), n)),
        (s = d(s) && !isNaN(s) ? s : +i.endOf(Date.now(), n) + 1),
        (t.min = Math.min(o, s - 1)),
        (t.max = Math.max(o + 1, s));
    }
    _getLabelBounds() {
      const t = this.getLabelTimestamps();
      let e = Number.POSITIVE_INFINITY,
        i = Number.NEGATIVE_INFINITY;
      return (
        t.length && ((e = t[0]), (i = t[t.length - 1])), { min: e, max: i }
      );
    }
    buildTicks() {
      const t = this,
        e = t.options,
        i = e.time,
        n = e.ticks,
        o = "labels" === n.source ? t.getLabelTimestamps() : t._generate();
      "ticks" === e.bounds &&
        o.length &&
        ((t.min = t._userMin || o[0]), (t.max = t._userMax || o[o.length - 1]));
      const s = t.min,
        a = (function (t, e, i) {
          let n = 0,
            o = t.length;
          for (; n < o && t[n] < e; ) n++;
          for (; o > n && t[o - 1] > i; ) o--;
          return n > 0 || o < t.length ? t.slice(n, o) : t;
        })(o, s, t.max);
      return (
        (t._unit =
          i.unit ||
          (n.autoSkip
            ? hs(i.minUnit, t.min, t.max, t._getLabelCapacity(s))
            : (function (t, e, i, n, o) {
                for (let s = rs.length - 1; s >= rs.indexOf(i); s--) {
                  const i = rs[s];
                  if (as[i].common && t._adapter.diff(o, n, i) >= e - 1)
                    return i;
                }
                return rs[i ? rs.indexOf(i) : 0];
              })(t, a.length, i.minUnit, t.min, t.max))),
        (t._majorUnit =
          n.major.enabled && "year" !== t._unit
            ? (function (t) {
                for (let e = rs.indexOf(t) + 1, i = rs.length; e < i; ++e)
                  if (as[rs[e]].common) return rs[e];
              })(t._unit)
            : void 0),
        t.initOffsets(o),
        e.reverse && a.reverse(),
        us(t, a, t._majorUnit)
      );
    }
    initOffsets(t) {
      const e = this;
      let i,
        n,
        o = 0,
        s = 0;
      e.options.offset &&
        t.length &&
        ((i = e.getDecimalForValue(t[0])),
        (o = 1 === t.length ? 1 - i : (e.getDecimalForValue(t[1]) - i) / 2),
        (n = e.getDecimalForValue(t[t.length - 1])),
        (s =
          1 === t.length
            ? n
            : (n - e.getDecimalForValue(t[t.length - 2])) / 2));
      const a = t.length < 3 ? 0.5 : 0.25;
      (o = G(o, 0, a)),
        (s = G(s, 0, a)),
        (e._offsets = { start: o, end: s, factor: 1 / (o + 1 + s) });
    }
    _generate() {
      const t = this,
        e = t._adapter,
        i = t.min,
        n = t.max,
        o = t.options,
        s = o.time,
        a = s.unit || hs(s.minUnit, i, n, t._getLabelCapacity(i)),
        r = g(s.stepSize, 1),
        l = "week" === a && s.isoWeekday,
        c = N(l) || !0 === l,
        h = {};
      let d,
        u,
        f = i;
      if (
        (c && (f = +e.startOf(f, "isoWeek", l)),
        (f = +e.startOf(f, c ? "day" : a)),
        e.diff(n, i, a) > 1e5 * r)
      )
        throw new Error(
          i + " and " + n + " are too far apart with stepSize of " + r + " " + a
        );
      const p = "data" === o.ticks.source && t.getDataTimestamps();
      for (d = f, u = 0; d < n; d = +e.add(d, r, a), u++) ds(h, d, p);
      return (
        (d !== n && "ticks" !== o.bounds && 1 !== u) || ds(h, d, p),
        Object.keys(h)
          .sort((t, e) => t - e)
          .map((t) => +t)
      );
    }
    getLabelForValue(t) {
      const e = this._adapter,
        i = this.options.time;
      return i.tooltipFormat
        ? e.format(t, i.tooltipFormat)
        : e.format(t, i.displayFormats.datetime);
    }
    _tickFormatFunction(t, e, i, n) {
      const o = this,
        s = o.options,
        a = s.time.displayFormats,
        r = o._unit,
        l = o._majorUnit,
        c = r && a[r],
        h = l && a[l],
        d = i[e],
        u = l && h && d && d.major,
        g = o._adapter.format(t, n || (u ? h : c)),
        f = s.ticks.callback;
      return f ? p(f, [g, e, i], o) : g;
    }
    generateTickLabels(t) {
      let e, i, n;
      for (e = 0, i = t.length; e < i; ++e)
        (n = t[e]), (n.label = this._tickFormatFunction(n.value, e, t));
    }
    getDecimalForValue(t) {
      const e = this;
      return null === t ? NaN : (t - e.min) / (e.max - e.min);
    }
    getPixelForValue(t) {
      const e = this,
        i = e._offsets,
        n = e.getDecimalForValue(t);
      return e.getPixelForDecimal((i.start + n) * i.factor);
    }
    getValueForPixel(t) {
      const e = this,
        i = e._offsets,
        n = e.getDecimalForPixel(t) / i.factor - i.end;
      return e.min + n * (e.max - e.min);
    }
    _getLabelSize(t) {
      const e = this,
        i = e.options.ticks,
        n = e.ctx.measureText(t).width,
        o = H(e.isHorizontal() ? i.maxRotation : i.minRotation),
        s = Math.cos(o),
        a = Math.sin(o),
        r = e._resolveTickFontOptions(0).size;
      return { w: n * s + r * a, h: n * a + r * s };
    }
    _getLabelCapacity(t) {
      const e = this,
        i = e.options.time,
        n = i.displayFormats,
        o = n[i.unit] || n.millisecond,
        s = e._tickFormatFunction(t, 0, us(e, [t], e._majorUnit), o),
        a = e._getLabelSize(s),
        r = Math.floor(e.isHorizontal() ? e.width / a.w : e.height / a.h) - 1;
      return r > 0 ? r : 1;
    }
    getDataTimestamps() {
      const t = this;
      let e,
        i,
        n = t._cache.data || [];
      if (n.length) return n;
      const o = t.getMatchingVisibleMetas();
      if (t._normalized && o.length)
        return (t._cache.data = o[0].controller.getAllParsedValues(t));
      for (e = 0, i = o.length; e < i; ++e)
        n = n.concat(o[e].controller.getAllParsedValues(t));
      return (t._cache.data = t.normalize(n));
    }
    getLabelTimestamps() {
      const t = this,
        e = t._cache.labels || [];
      let i, n;
      if (e.length) return e;
      const o = t.getLabels();
      for (i = 0, n = o.length; i < n; ++i) e.push(cs(t, o[i]));
      return (t._cache.labels = t._normalized ? e : t.normalize(e));
    }
    normalize(t) {
      return ge(t.sort(ls));
    }
  }
  function fs(t, e, i) {
    let n, o, s, a;
    if (i) (n = Math.floor(e)), (o = Math.ceil(e)), (s = t[n]), (a = t[o]);
    else {
      const i = le(t, e);
      (s = i.lo), (a = i.hi), (n = t[s]), (o = t[a]);
    }
    const r = o - n;
    return r ? s + ((a - s) * (e - n)) / r : s;
  }
  (gs.id = "time"),
    (gs.defaults = {
      bounds: "data",
      adapters: {},
      time: {
        parser: !1,
        unit: !1,
        round: !1,
        isoWeekday: !1,
        minUnit: "millisecond",
        displayFormats: {},
      },
      ticks: { source: "auto", major: { enabled: !1 } },
    });
  class ps extends gs {
    constructor(t) {
      super(t), (this._table = []), (this._maxIndex = void 0);
    }
    initOffsets() {
      const t = this,
        e = t._getTimestampsForTable();
      (t._table = t.buildLookupTable(e)),
        (t._maxIndex = t._table.length - 1),
        super.initOffsets(e);
    }
    buildLookupTable(t) {
      const { min: e, max: i } = this;
      if (!t.length)
        return [
          { time: e, pos: 0 },
          { time: i, pos: 1 },
        ];
      const n = [e];
      let o, s, a;
      for (o = 0, s = t.length; o < s; ++o)
        (a = t[o]), a > e && a < i && n.push(a);
      return n.push(i), n;
    }
    _getTimestampsForTable() {
      const t = this;
      let e = t._cache.all || [];
      if (e.length) return e;
      const i = t.getDataTimestamps(),
        n = t.getLabelTimestamps();
      return (
        (e =
          i.length && n.length ? t.normalize(i.concat(n)) : i.length ? i : n),
        (e = t._cache.all = e),
        e
      );
    }
    getPixelForValue(t, e) {
      const i = this,
        n = i._offsets,
        o =
          i._normalized && i._maxIndex > 0 && !l(e)
            ? e / i._maxIndex
            : i.getDecimalForValue(t);
      return i.getPixelForDecimal((n.start + o) * n.factor);
    }
    getDecimalForValue(t) {
      return fs(this._table, t) / this._maxIndex;
    }
    getValueForPixel(t) {
      const e = this,
        i = e._offsets,
        n = e.getDecimalForPixel(t) / i.factor - i.end;
      return fs(e._table, n * this._maxIndex, !0);
    }
  }
  (ps.id = "timeseries"), (ps.defaults = gs.defaults);
  eo.register(To, Di, Lo, qo, Go);
  const ms = (t, e) => {
      var i = new XMLHttpRequest();
      i.open("GET", e, !0),
        i.setRequestHeader("Access-Control-Allow-Origin", "*"),
        (i.onload = function () {
          if (this.status >= 200 && this.status < 400) {
            var e = JSON.parse(this.response);
            (t.data.labels = []),
              (t.data.datasets[0].data = []),
              (t.data.datasets[1].data = []),
              e.Inbound.labels.forEach((e) => {
                t.data.labels.push(e);
              }),
              e.Inbound.data_values.forEach((e) => {
                t.data.datasets[0].data.push(e);
              }),
              e.Outbound.data_values.forEach((e) => {
                t.data.datasets[1].data.push(e);
              }),
              t.update();
          }
        }),
        i.send();
    },
    xs = "https://lts-fastapi-c8pjh.ondigitalocean.app/",
    bs = {
      "traffic-stress-tiles": {
        type: "vector",
        url: "https://www.tiles.dvrpc.org/data/lts.json",
        minzoom: 14,
      },
      indego: { type: "geojson", data: xs + "indego/all" },
      "indego-query": {
        type: "geojson",
        data: xs + "indego/trip-points/?q=3004",
      },
      "indego-query-spider": {
        type: "geojson",
        data: xs + "indego/trip-spider/?q=3004",
      },
    };
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYWFyb25kdnJwYyIsImEiOiJja2NvN2s5dnAwaWR2MnptbzFwYmd2czVvIn0.Fcc34gzGME_zHR5q4RnSOg";
  const _s = (t, e, i) => {
      new mapboxgl.Popup({ closebutton: !1, className: "i-am-a-popup" })
        .setLngLat(i.lngLat)
        .setHTML(e)
        .addTo(t);
    },
    ys = (t) => {
      t.on("mouseenter", "indego-all", () => {
        (t.getCanvas().style.cursor = "pointer"),
          t.setPaintProperty("indego-all", "circle-radius", 15);
      }),
        t.on("mouseleave", "indego-all", () => {
          (t.getCanvas().style.cursor = ""),
            t.setPaintProperty("indego-all", "circle-radius", 2);
        }),
        t.on("mouseenter", "indego-query", function (e) {
          var i = document.querySelector("#station-name").innerHTML,
            n = e.features[0].properties,
            o = "<h3>Trips to/from " + i + "</h3><ul>";
          (o += "<li>Total: " + 75 * n.totalTrips + "</li>"),
            (o +=
              "<li>FROM selected station: " + 75 * n.destinations + "</li>"),
            (o += "<li>TO selected station: " + 75 * n.origins + "</li>"),
            _s(t, (o += "</ul>"), e);
        }),
        t.on("mouseleave", "indego-query", function (t) {
          var e;
          (e = document.getElementsByClassName("i-am-a-popup")).length &&
            e[0].remove();
        });
    },
    vs = (t, e) => {
      t.on("click", "indego-all", function (i) {
        var n = i.features[0].properties;
        (document.querySelector("#station-name").innerHTML = n.name),
          (e.options.plugins.title.text = n.name);
        var o = ["in", "station_id", n.station_id];
        t.setFilter("indego-selected", o);
        let s = xs + "indego/trip-points/?q=" + n.station_id.toString();
        var a = new XMLHttpRequest();
        a.open("GET", s, !0),
          a.setRequestHeader("Access-Control-Allow-Origin", "*"),
          (a.onload = function () {
            if (this.status >= 200 && this.status < 400) {
              var e = JSON.parse(this.response);
              t.getSource("indego-query").setData(e);
              var i = new mapboxgl.LngLatBounds();
              e.features.forEach(function (t) {
                t.properties.origins >= 2 && i.extend(t.geometry.coordinates);
              }),
                t.fitBounds(i),
                t.setPaintProperty("indego-all", "circle-radius", 2);
            }
          }),
          a.send();
        let r = xs + "indego/trip-spider/?q=" + n.station_id.toString();
        var l = new XMLHttpRequest();
        l.open("GET", r, !0),
          l.setRequestHeader("Access-Control-Allow-Origin", "*"),
          (l.onload = function () {
            if (this.status >= 200 && this.status < 400) {
              var e = JSON.parse(this.response);
              t.getSource("indego-query-spider").setData(e);
            }
          }),
          l.send();
        let c = xs + "indego/timeseries/?q=" + n.station_id.toString();
        ms(e, c);
      });
    },
    Ms = {
      "bike-lanes": {
        id: "bike-lanes",
        type: "line",
        source: "traffic-stress-tiles",
        "source-layer": "existing_conditions_lts",
        layout: {},
        paint: { "line-width": 4, "line-opacity": 0.4, "line-color": "green" },
        filter: ["!=", "bikefacili", "No Accomodation"],
      },
      spider: {
        id: "spider",
        type: "line",
        source: "indego-query-spider",
        layout: {},
        paint: {
          "line-width": ["get", "destinations"],
          "line-opacity": 0.3,
          "line-color": "rgb(" + t + ")",
        },
      },
      "indego-all": {
        id: "indego-all",
        type: "circle",
        source: "indego",
        layout: {},
        paint: {
          "circle-opacity": 0.2,
          "circle-stroke-width": 1,
          "circle-stroke-color": "#000000",
          "circle-stroke-opacity": 0.5,
          "circle-radius": 2,
        },
      },
      "indego-query": {
        id: "indego-query",
        type: "circle",
        source: "indego-query",
        paint: {
          "circle-color": "rgb(" + t + ")",
          "circle-opacity": 0.3,
          "circle-stroke-width": 2,
          "circle-stroke-color": "rgb(" + t + ")",
          "circle-radius": ["get", "destinations"],
        },
      },
      "indego-selected": {
        id: "indego-selected",
        type: "circle",
        source: "indego-query",
        paint: {
          "circle-opacity": 0.5,
          "circle-color": "#fff123",
          "circle-stroke-width": 5,
          "circle-stroke-color": "#fff123",
          "circle-radius": ["get", "destinations"],
        },
        filter: ["in", "station_id", 3004],
      },
    },
    ws = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v10",
      center: [-75.16362, 39.95238],
      zoom: 12,
    }),
    ks = (() => {
      const i = document.getElementById("myChart");
      return new eo(i, {
        type: "bar",
        data: {
          labels: [],
          datasets: [
            {
              label: "Inbound Trips",
              backgroundColor: "rgba(" + t + ", 0.5)",
              borderColor: "rgb(" + t + ")",
              data: [],
            },
            {
              label: "Outbound Trips",
              backgroundColor: "rgba(" + e + ", 0.5)",
              borderColor: "rgb(" + e + ")",
              data: [],
            },
          ],
        },
        options: {
          indexAxis: "y",
          maintainAspectRatio: !1,
          plugins: { title: { display: !0, text: "Custom Chart Title" } },
        },
      });
    })();
  ws.on("load", function () {
    ms(ks, xs + "indego/timeseries/?q=3004"),
      (ks.options.plugins.title.text = "Municipal Services Building Plaza");
    for (const t in bs) ws.addSource(t, bs[t]);
    for (const t in Ms) ws.addLayer(Ms[t]);
    ys(ws), vs(ws, ks);
  }),
    ((n) => {
      document
        .querySelector("#directionality")
        .addEventListener("change", (o) => {
          var s = o.target.value;
          if ("origins" == s) var a = "rgb(" + e + ")";
          if ("destinations" == s) a = "rgb(" + t + ")";
          if ("totalTrips" == s) a = "rgb(" + i + ")";
          var r = "../img/" + s + ".png";
          document.getElementById("legend-img").setAttribute("src", r),
            n.setPaintProperty("spider", "line-color", a),
            n.setPaintProperty("indego-query", "circle-color", a),
            n.setPaintProperty("indego-query", "circle-stroke-color", a),
            n.setPaintProperty("indego-selected", "circle-radius", [
              "get",
              o.target.value,
            ]),
            n.setPaintProperty("indego-query", "circle-radius", [
              "get",
              o.target.value,
            ]),
            n.setPaintProperty("spider", "line-width", ["get", o.target.value]);
        });
    })(ws);
})();
