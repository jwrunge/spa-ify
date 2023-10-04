var Dt = Object.defineProperty;
var Ft = (t, e, n) => e in t ? Dt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Y = (t, e, n) => (Ft(t, typeof e != "symbol" ? e + "" : e, n), n);
function p() {
}
const gt = (t) => t;
function yt(t) {
  return t();
}
function ut() {
  return /* @__PURE__ */ Object.create(null);
}
function x(t) {
  t.forEach(yt);
}
function U(t) {
  return typeof t == "function";
}
function V(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Ht(t) {
  return Object.keys(t).length === 0;
}
function bt(t, ...e) {
  if (t == null) {
    for (const o of e)
      o(void 0);
    return p;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function R(t) {
  let e;
  return bt(t, (n) => e = n)(), e;
}
function It(t, e, n) {
  t.$$.on_destroy.push(bt(e, n));
}
function at(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
const wt = typeof window < "u";
let xt = wt ? () => window.performance.now() : () => Date.now(), it = wt ? (t) => requestAnimationFrame(t) : p;
const C = /* @__PURE__ */ new Set();
function vt(t) {
  C.forEach((e) => {
    e.c(t) || (C.delete(e), e.f());
  }), C.size !== 0 && it(vt);
}
function St(t) {
  let e;
  return C.size === 0 && it(vt), {
    promise: new Promise((n) => {
      C.add(e = { c: t, f: n });
    }),
    abort() {
      C.delete(e);
    }
  };
}
function zt(t, e) {
  t.appendChild(e);
}
function Nt(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function Bt(t) {
  const e = O("style");
  return e.textContent = "/* empty */", Qt(Nt(t), e), e.sheet;
}
function Qt(t, e) {
  return zt(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function b(t, e, n) {
  t.insertBefore(e, n || null);
}
function y(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function O(t) {
  return document.createElement(t);
}
function Ct(t) {
  return document.createTextNode(t);
}
function lt() {
  return Ct(" ");
}
function Et() {
  return Ct("");
}
function j(t, e, n, o) {
  return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o);
}
function W(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Ut(t) {
  return Array.from(t.childNodes);
}
function Vt(t, e, { bubbles: n = !1, cancelable: o = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: o });
}
const z = /* @__PURE__ */ new Map();
let B = 0;
function Gt(t) {
  let e = 5381, n = t.length;
  for (; n--; )
    e = (e << 5) - e ^ t.charCodeAt(n);
  return e >>> 0;
}
function Yt(t, e) {
  const n = { stylesheet: Bt(e), rules: {} };
  return z.set(t, n), n;
}
function Tt(t, e, n, o, r, s, u, c = 0) {
  const i = 16.666 / o;
  let f = `{
`;
  for (let $ = 0; $ <= 1; $ += i) {
    const g = e + (n - e) * s($);
    f += $ * 100 + `%{${u(g, 1 - g)}}
`;
  }
  const a = f + `100% {${u(n, 1 - n)}}
}`, l = `__svelte_${Gt(a)}_${c}`, h = Nt(t), { stylesheet: d, rules: _ } = z.get(h) || Yt(h, t);
  _[l] || (_[l] = !0, d.insertRule(`@keyframes ${l} ${a}`, d.cssRules.length));
  const m = t.style.animation || "";
  return t.style.animation = `${m ? `${m}, ` : ""}${l} ${o}ms linear ${r}ms 1 both`, B += 1, l;
}
function tt(t, e) {
  const n = (t.style.animation || "").split(", "), o = n.filter(
    e ? (s) => s.indexOf(e) < 0 : (s) => s.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), r = n.length - o.length;
  r && (t.style.animation = o.join(", "), B -= r, B || Wt());
}
function Wt() {
  it(() => {
    B || (z.forEach((t) => {
      const { ownerNode: e } = t.stylesheet;
      e && y(e);
    }), z.clear());
  });
}
let P;
function A(t) {
  P = t;
}
function kt() {
  if (!P)
    throw new Error("Function called outside component initialization");
  return P;
}
function Ot(t) {
  kt().$$.on_mount.push(t);
}
function Jt(t) {
  kt().$$.after_update.push(t);
}
const N = [], dt = [];
let E = [];
const ht = [], Kt = /* @__PURE__ */ Promise.resolve();
let et = !1;
function Xt() {
  et || (et = !0, Kt.then(At));
}
function T(t) {
  E.push(t);
}
const J = /* @__PURE__ */ new Set();
let v = 0;
function At() {
  if (v !== 0)
    return;
  const t = P;
  do {
    try {
      for (; v < N.length; ) {
        const e = N[v];
        v++, A(e), Zt(e.$$);
      }
    } catch (e) {
      throw N.length = 0, v = 0, e;
    }
    for (A(null), N.length = 0, v = 0; dt.length; )
      dt.pop()();
    for (let e = 0; e < E.length; e += 1) {
      const n = E[e];
      J.has(n) || (J.add(n), n());
    }
    E.length = 0;
  } while (N.length);
  for (; ht.length; )
    ht.pop()();
  et = !1, J.clear(), A(t);
}
function Zt(t) {
  if (t.fragment !== null) {
    t.update(), x(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(T);
  }
}
function te(t) {
  const e = [], n = [];
  E.forEach((o) => t.indexOf(o) === -1 ? e.push(o) : n.push(o)), n.forEach((o) => o()), E = e;
}
let k;
function Lt() {
  return k || (k = Promise.resolve(), k.then(() => {
    k = null;
  })), k;
}
function Q(t, e, n) {
  t.dispatchEvent(Vt(`${e ? "intro" : "outro"}${n}`));
}
const D = /* @__PURE__ */ new Set();
let w;
function ee() {
  w = {
    r: 0,
    c: [],
    p: w
    // parent group
  };
}
function ne() {
  w.r || x(w.c), w = w.p;
}
function L(t, e) {
  t && t.i && (D.delete(t), t.i(e));
}
function F(t, e, n, o) {
  if (t && t.o) {
    if (D.has(t))
      return;
    D.add(t), w.c.push(() => {
      D.delete(t), o && (n && t.d(1), o());
    }), t.o(e);
  } else
    o && o();
}
const Pt = { duration: 0 };
function re(t, e, n) {
  const o = { direction: "in" };
  let r = e(t, n, o), s = !1, u, c, i = 0;
  function f() {
    u && tt(t, u);
  }
  function a() {
    const {
      delay: h = 0,
      duration: d = 300,
      easing: _ = gt,
      tick: m = p,
      css: $
    } = r || Pt;
    $ && (u = Tt(t, 0, 1, d, h, _, $, i++)), m(0, 1);
    const g = xt() + h, M = g + d;
    c && c.abort(), s = !0, T(() => Q(t, !0, "start")), c = St((G) => {
      if (s) {
        if (G >= M)
          return m(1, 0), Q(t, !0, "end"), f(), s = !1;
        if (G >= g) {
          const ct = _((G - g) / d);
          m(ct, 1 - ct);
        }
      }
      return s;
    });
  }
  let l = !1;
  return {
    start() {
      l || (l = !0, tt(t), U(r) ? (r = r(o), Lt().then(a)) : a());
    },
    invalidate() {
      l = !1;
    },
    end() {
      s && (f(), s = !1);
    }
  };
}
function oe(t, e, n) {
  const o = { direction: "out" };
  let r = e(t, n, o), s = !0, u;
  const c = w;
  c.r += 1;
  let i;
  function f() {
    const {
      delay: a = 0,
      duration: l = 300,
      easing: h = gt,
      tick: d = p,
      css: _
    } = r || Pt;
    _ && (u = Tt(t, 1, 0, l, a, h, _));
    const m = xt() + a, $ = m + l;
    T(() => Q(t, !1, "start")), "inert" in t && (i = /** @type {HTMLElement} */
    t.inert, t.inert = !0), St((g) => {
      if (s) {
        if (g >= $)
          return d(0, 1), Q(t, !1, "end"), --c.r || x(c.c), !1;
        if (g >= m) {
          const M = h((g - m) / l);
          d(1 - M, M);
        }
      }
      return s;
    });
  }
  return U(r) ? Lt().then(() => {
    r = r(o), f();
  }) : f(), {
    end(a) {
      a && "inert" in t && (t.inert = i), a && r.tick && r.tick(1, 0), s && (u && tt(t, u), s = !1);
    }
  };
}
function K(t) {
  t && t.c();
}
function H(t, e, n) {
  const { fragment: o, after_update: r } = t.$$;
  o && o.m(e, n), T(() => {
    const s = t.$$.on_mount.map(yt).filter(U);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : x(s), t.$$.on_mount = [];
  }), r.forEach(T);
}
function I(t, e) {
  const n = t.$$;
  n.fragment !== null && (te(n.after_update), x(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ie(t, e) {
  t.$$.dirty[0] === -1 && (N.push(t), Xt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Mt(t, e, n, o, r, s, u = null, c = [-1]) {
  const i = P;
  A(t);
  const f = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: p,
    not_equal: r,
    bound: ut(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (i ? i.$$.context : [])),
    // everything else
    callbacks: ut(),
    dirty: c,
    skip_bound: !1,
    root: e.target || i.$$.root
  };
  u && u(f.root);
  let a = !1;
  if (f.ctx = n ? n(t, e.props || {}, (l, h, ...d) => {
    const _ = d.length ? d[0] : h;
    return f.ctx && r(f.ctx[l], f.ctx[l] = _) && (!f.skip_bound && f.bound[l] && f.bound[l](_), a && ie(t, l)), h;
  }) : [], f.update(), a = !0, x(f.before_update), f.fragment = o ? o(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const l = Ut(e.target);
      f.fragment && f.fragment.l(l), l.forEach(y);
    } else
      f.fragment && f.fragment.c();
    e.intro && L(t.$$.fragment), H(t, e.target, e.anchor), At();
  }
  A(i);
}
class Rt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Y(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Y(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    I(this, 1), this.$destroy = p;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!U(n))
      return p;
    const o = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return o.push(n), () => {
      const r = o.indexOf(n);
      r !== -1 && o.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Ht(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const fe = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(fe);
const S = [];
function jt(t, e = p) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function r(c) {
    if (V(t, c) && (t = c, n)) {
      const i = !S.length;
      for (const f of o)
        f[1](), S.push(f, t);
      if (i) {
        for (let f = 0; f < S.length; f += 2)
          S[f][0](S[f + 1]);
        S.length = 0;
      }
    }
  }
  function s(c) {
    r(c(t));
  }
  function u(c, i = p) {
    const f = [c, i];
    return o.add(f), o.size === 1 && (n = e(r, s) || p), c(t), () => {
      o.delete(f), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: s, subscribe: u };
}
const qt = jt({}), se = {
  selector: "header"
}, ce = {
  selector: ""
}, ue = {
  selector: "footer"
}, ae = {
  header: se,
  body: ce,
  footer: ue
}, q = jt(ae), ft = "wpspa", nt = `${ft}-header`, rt = `${ft}-body`, ot = `${ft}-footer`;
function le(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var de = function(t, e) {
  var n, o, r, s, u, c, i, f;
  for (e = 1, n = t.length & 3, o = t.length - n, r = e, u = 3432918353, c = 461845907, f = 0; f < o; )
    i = t.charCodeAt(f) & 255 | (t.charCodeAt(++f) & 255) << 8 | (t.charCodeAt(++f) & 255) << 16 | (t.charCodeAt(++f) & 255) << 24, ++f, i = (i & 65535) * u + (((i >>> 16) * u & 65535) << 16) & 4294967295, i = i << 15 | i >>> 17, i = (i & 65535) * c + (((i >>> 16) * c & 65535) << 16) & 4294967295, r ^= i, r = r << 13 | r >>> 19, s = (r & 65535) * 5 + (((r >>> 16) * 5 & 65535) << 16) & 4294967295, r = (s & 65535) + 27492 + (((s >>> 16) + 58964 & 65535) << 16);
  switch (i = 0, n) {
    case 3:
      i ^= (t.charCodeAt(f + 2) & 255) << 16;
    case 2:
      i ^= (t.charCodeAt(f + 1) & 255) << 8;
    case 1:
      i ^= t.charCodeAt(f) & 255, i = (i & 65535) * u + (((i >>> 16) * u & 65535) << 16) & 4294967295, i = i << 15 | i >>> 17, i = (i & 65535) * c + (((i >>> 16) * c & 65535) << 16) & 4294967295, r ^= i;
  }
  return r ^= t.length, r ^= r >>> 16, r = (r & 65535) * 2246822507 + (((r >>> 16) * 2246822507 & 65535) << 16) & 4294967295, r ^= r >>> 13, r = (r & 65535) * 3266489909 + (((r >>> 16) * 3266489909 & 65535) << 16) & 4294967295, r ^= r >>> 16, (r >>> 0).toString(36);
};
const X = /* @__PURE__ */ le(de);
function st(t, e) {
  fetch(t).then((n) => {
    n.text().then((o) => {
      const r = o.match(/<body>([\s\S]*)<\/body>/i)?.[0]?.replace(/<\/?body>/ig, ""), s = document.createElement("div");
      s.innerHTML = r || "";
      let u = "";
      u = s.querySelector(R(q).header.selector)?.innerHTML || "", console.log("BODY CONTENT", r), console.log("GETTING BODY CONTENT FROM SELECTOR", R(q).body.selector);
      let i = r || "";
      R(q).body.selector && (i = s.querySelector(R(q).body.selector)?.innerHTML || ""), qt.update((f) => (f[nt] = {
        content: u,
        hash: X(u)
      }, f[rt] = {
        content: i,
        hash: X(i)
      }, f[ot] = {
        content: "",
        hash: X(i)
      }, f)), e && e();
    });
  });
}
function he(t, e) {
  t.preventDefault(), st(e, () => {
    history.pushState({ href: e }, "", e);
  });
}
function pe() {
  window.addEventListener("popstate", (t) => {
    st(t.state.href);
  });
}
function _e() {
  const t = location.href;
  st(t, () => {
    history.replaceState({ href: t }, "", t);
  });
}
function pt() {
  const t = document.querySelectorAll("a[href]");
  for (let e of t) {
    const n = e.getAttribute("href");
    if (n && !/https?:\/\//.test(n)) {
      const o = e.cloneNode(!0);
      e.parentNode?.replaceChild(o, e), o.addEventListener("click", (r) => he(r, n || "/"));
    }
  }
}
function me(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function _t(t, { delay: e = 0, duration: n = 400, easing: o = me, x: r = 0, y: s = 0, opacity: u = 0 } = {}) {
  const c = getComputedStyle(t), i = +c.opacity, f = c.transform === "none" ? "" : c.transform, a = i * (1 - u), [l, h] = at(r), [d, _] = at(s);
  return {
    delay: e,
    duration: n,
    easing: o,
    css: (m, $) => `
			transform: ${f} translate(${(1 - m) * l}${h}, ${(1 - m) * d}${_});
			opacity: ${i - a * $}`
  };
}
function mt(t) {
  let e = (
    /*$IncomingPart*/
    t[1]?.[
      /*partName*/
      t[0]
    ]?.hash
  ), n, o = $t(t);
  return {
    c() {
      o.c(), n = Et();
    },
    m(r, s) {
      o.m(r, s), b(r, n, s);
    },
    p(r, s) {
      s & /*$IncomingPart, partName*/
      3 && V(e, e = /*$IncomingPart*/
      r[1]?.[
        /*partName*/
        r[0]
      ]?.hash) ? (ee(), F(o, 1, 1, p), ne(), o = $t(r), o.c(), L(o, 1), o.m(n.parentNode, n)) : o.p(r, s);
    },
    d(r) {
      r && y(n), o.d(r);
    }
  };
}
function $t(t) {
  let e, n = (
    /*$IncomingPart*/
    t[1]?.[
      /*partName*/
      t[0]
    ]?.content + ""
  ), o, r, s, u, c;
  return {
    c() {
      e = O("div");
    },
    m(i, f) {
      b(i, e, f), e.innerHTML = n, s = !0, u || (c = [
        j(
          e,
          "introstart",
          /*introStart*/
          t[6]
        ),
        j(
          e,
          "introend",
          /*introEnd*/
          t[7]
        ),
        j(
          e,
          "outrostart",
          /*outroStart*/
          t[8]
        ),
        j(
          e,
          "outroend",
          /*outroEnd*/
          t[9]
        )
      ], u = !0);
    },
    p(i, f) {
      t = i, (!s || f & /*$IncomingPart, partName*/
      3) && n !== (n = /*$IncomingPart*/
      t[1]?.[
        /*partName*/
        t[0]
      ]?.content + "") && (e.innerHTML = n);
    },
    i(i) {
      s || (i && T(() => {
        s && (r && r.end(1), o = re(
          e,
          /*inFunction*/
          t[2],
          /*inParams*/
          t[4]
        ), o.start());
      }), s = !0);
    },
    o(i) {
      o && o.invalidate(), i && (r = oe(
        e,
        /*outFunction*/
        t[3],
        /*outParams*/
        t[5]
      )), s = !1;
    },
    d(i) {
      i && y(e), i && r && r.end(), u = !1, x(c);
    }
  };
}
function $e(t) {
  let e, n = (
    /*$IncomingPart*/
    t[1]?.[
      /*partName*/
      t[0]
    ] && mt(t)
  );
  return {
    c() {
      n && n.c(), e = Et();
    },
    m(o, r) {
      n && n.m(o, r), b(o, e, r);
    },
    p(o, [r]) {
      /*$IncomingPart*/
      o[1]?.[
        /*partName*/
        o[0]
      ] ? n ? n.p(o, r) : (n = mt(o), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: p,
    o: p,
    d(o) {
      o && y(e), n && n.d(o);
    }
  };
}
function ge(t) {
  const e = t.currentTarget.clientWidth, n = t.currentTarget.clientHeight;
  t.currentTarget.style.width = `${e}px`, t.currentTarget.style.height = `${n}px`, t.currentTarget.style.overflow = "hidden", t.currentTarget.style.position = "absolute";
}
function ye(t, e, n) {
  let o;
  It(t, qt, (d) => n(1, o = d));
  let { partName: r } = e;
  const s = o?.[r]?.transition?.in || _t, u = o?.[r]?.transition?.out || _t, c = o?.[r]?.transition?.inParams || { x: 200 }, i = o?.[r]?.transition?.outParams || { x: -200 }, f = o?.[r]?.transition?.onIntroStart || (() => !0), a = o?.[r]?.transition?.onIntroEnd || (() => !0), l = o?.[r]?.transition?.onOutroStart || ge, h = o?.[r]?.transition?.onOutroEnd || (() => !0);
  return Ot(() => {
    pt();
  }), Jt(() => {
    pt();
  }), t.$$set = (d) => {
    "partName" in d && n(0, r = d.partName);
  }, [
    r,
    o,
    s,
    u,
    c,
    i,
    f,
    a,
    l,
    h
  ];
}
class Z extends Rt {
  constructor(e) {
    super(), Mt(this, e, ye, $e, V, { partName: 0 });
  }
}
function be(t) {
  let e, n, o, r, s, u, c, i, f;
  return n = new Z({ props: { partName: nt } }), s = new Z({ props: { partName: rt } }), i = new Z({ props: { partName: ot } }), {
    c() {
      e = O("div"), K(n.$$.fragment), o = lt(), r = O("div"), K(s.$$.fragment), u = lt(), c = O("div"), K(i.$$.fragment), W(e, "id", nt), W(r, "id", rt), W(c, "id", ot);
    },
    m(a, l) {
      b(a, e, l), H(n, e, null), b(a, o, l), b(a, r, l), H(s, r, null), b(a, u, l), b(a, c, l), H(i, c, null), f = !0;
    },
    p,
    i(a) {
      f || (L(n.$$.fragment, a), L(s.$$.fragment, a), L(i.$$.fragment, a), f = !0);
    },
    o(a) {
      F(n.$$.fragment, a), F(s.$$.fragment, a), F(i.$$.fragment, a), f = !1;
    },
    d(a) {
      a && (y(e), y(o), y(r), y(u), y(c)), I(n), I(s), I(i);
    }
  };
}
function we(t) {
  return Ot(() => {
    pe(), _e();
  }), [];
}
class xe extends Rt {
  constructor(e) {
    super(), Mt(this, e, we, be, V, {});
  }
}
function ve(t) {
  const e = typeof t == "string" ? document.querySelector(t) : t, n = typeof t == "string" ? t : t.id;
  if (!e)
    throw new Error(`Could not find target element ${n}`);
  return new xe({
    target: e || document.body
  });
}
document.body.innerHTML = "";
ve(document.body);
//# sourceMappingURL=app-press.js.map
