var Ht = Object.defineProperty;
var zt = (t, e, n) => e in t ? Ht(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var B = (t, e, n) => (zt(t, typeof e != "symbol" ? e + "" : e, n), n);
function p() {
}
const yt = (t) => t;
function gt(t) {
  return t();
}
function st() {
  return /* @__PURE__ */ Object.create(null);
}
function x(t) {
  t.forEach(gt);
}
function Q(t) {
  return typeof t == "function";
}
function U(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Ft(t) {
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
function ct(t) {
  let e;
  return bt(t, (n) => e = n)(), e;
}
function It(t, e, n) {
  t.$$.on_destroy.push(bt(e, n));
}
function ut(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
const wt = typeof window < "u";
let xt = wt ? () => window.performance.now() : () => Date.now(), rt = wt ? (t) => requestAnimationFrame(t) : p;
const N = /* @__PURE__ */ new Set();
function vt(t) {
  N.forEach((e) => {
    e.c(t) || (N.delete(e), e.f());
  }), N.size !== 0 && rt(vt);
}
function St(t) {
  let e;
  return N.size === 0 && rt(vt), {
    promise: new Promise((n) => {
      N.add(e = { c: t, f: n });
    }),
    abort() {
      N.delete(e);
    }
  };
}
function Dt(t, e) {
  t.appendChild(e);
}
function Ct(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function Qt(t) {
  const e = L("style");
  return e.textContent = "/* empty */", Ut(Ct(t), e), e.sheet;
}
function Ut(t, e) {
  return Dt(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function b(t, e, n) {
  t.insertBefore(e, n || null);
}
function g(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function L(t) {
  return document.createElement(t);
}
function Nt(t) {
  return document.createTextNode(t);
}
function at() {
  return Nt(" ");
}
function kt() {
  return Nt("");
}
function R(t, e, n, o) {
  return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o);
}
function W(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Vt(t) {
  return Array.from(t.childNodes);
}
function Bt(t, e, { bubbles: n = !1, cancelable: o = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: o });
}
const F = /* @__PURE__ */ new Map();
let I = 0;
function Wt(t) {
  let e = 5381, n = t.length;
  for (; n--; )
    e = (e << 5) - e ^ t.charCodeAt(n);
  return e >>> 0;
}
function Gt(t, e) {
  const n = { stylesheet: Qt(e), rules: {} };
  return F.set(t, n), n;
}
function Et(t, e, n, o, r, s, a, c = 0) {
  const i = 16.666 / o;
  let f = `{
`;
  for (let $ = 0; $ <= 1; $ += i) {
    const y = e + (n - e) * s($);
    f += $ * 100 + `%{${a(y, 1 - y)}}
`;
  }
  const u = f + `100% {${a(n, 1 - n)}}
}`, l = `__svelte_${Wt(u)}_${c}`, h = Ct(t), { stylesheet: d, rules: _ } = F.get(h) || Gt(h, t);
  _[l] || (_[l] = !0, d.insertRule(`@keyframes ${l} ${u}`, d.cssRules.length));
  const m = t.style.animation || "";
  return t.style.animation = `${m ? `${m}, ` : ""}${l} ${o}ms linear ${r}ms 1 both`, I += 1, l;
}
function Y(t, e) {
  const n = (t.style.animation || "").split(", "), o = n.filter(
    e ? (s) => s.indexOf(e) < 0 : (s) => s.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), r = n.length - o.length;
  r && (t.style.animation = o.join(", "), I -= r, I || Jt());
}
function Jt() {
  rt(() => {
    I || (F.forEach((t) => {
      const { ownerNode: e } = t.stylesheet;
      e && g(e);
    }), F.clear());
  });
}
let O;
function P(t) {
  O = t;
}
function At() {
  if (!O)
    throw new Error("Function called outside component initialization");
  return O;
}
function Lt(t) {
  At().$$.on_mount.push(t);
}
function Kt(t) {
  At().$$.after_update.push(t);
}
const C = [], lt = [];
let k = [];
const dt = [], Xt = /* @__PURE__ */ Promise.resolve();
let Z = !1;
function Yt() {
  Z || (Z = !0, Xt.then(Pt));
}
function E(t) {
  k.push(t);
}
const G = /* @__PURE__ */ new Set();
let v = 0;
function Pt() {
  if (v !== 0)
    return;
  const t = O;
  do {
    try {
      for (; v < C.length; ) {
        const e = C[v];
        v++, P(e), Zt(e.$$);
      }
    } catch (e) {
      throw C.length = 0, v = 0, e;
    }
    for (P(null), C.length = 0, v = 0; lt.length; )
      lt.pop()();
    for (let e = 0; e < k.length; e += 1) {
      const n = k[e];
      G.has(n) || (G.add(n), n());
    }
    k.length = 0;
  } while (C.length);
  for (; dt.length; )
    dt.pop()();
  Z = !1, G.clear(), P(t);
}
function Zt(t) {
  if (t.fragment !== null) {
    t.update(), x(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(E);
  }
}
function te(t) {
  const e = [], n = [];
  k.forEach((o) => t.indexOf(o) === -1 ? e.push(o) : n.push(o)), n.forEach((o) => o()), k = e;
}
let A;
function Tt() {
  return A || (A = Promise.resolve(), A.then(() => {
    A = null;
  })), A;
}
function D(t, e, n) {
  t.dispatchEvent(Bt(`${e ? "intro" : "outro"}${n}`));
}
const j = /* @__PURE__ */ new Set();
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
function T(t, e) {
  t && t.i && (j.delete(t), t.i(e));
}
function q(t, e, n, o) {
  if (t && t.o) {
    if (j.has(t))
      return;
    j.add(t), w.c.push(() => {
      j.delete(t), o && (n && t.d(1), o());
    }), t.o(e);
  } else
    o && o();
}
const Ot = { duration: 0 };
function re(t, e, n) {
  const o = { direction: "in" };
  let r = e(t, n, o), s = !1, a, c, i = 0;
  function f() {
    a && Y(t, a);
  }
  function u() {
    const {
      delay: h = 0,
      duration: d = 300,
      easing: _ = yt,
      tick: m = p,
      css: $
    } = r || Ot;
    $ && (a = Et(t, 0, 1, d, h, _, $, i++)), m(0, 1);
    const y = xt() + h, M = y + d;
    c && c.abort(), s = !0, E(() => D(t, !0, "start")), c = St((V) => {
      if (s) {
        if (V >= M)
          return m(1, 0), D(t, !0, "end"), f(), s = !1;
        if (V >= y) {
          const ft = _((V - y) / d);
          m(ft, 1 - ft);
        }
      }
      return s;
    });
  }
  let l = !1;
  return {
    start() {
      l || (l = !0, Y(t), Q(r) ? (r = r(o), Tt().then(u)) : u());
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
  let r = e(t, n, o), s = !0, a;
  const c = w;
  c.r += 1;
  let i;
  function f() {
    const {
      delay: u = 0,
      duration: l = 300,
      easing: h = yt,
      tick: d = p,
      css: _
    } = r || Ot;
    _ && (a = Et(t, 1, 0, l, u, h, _));
    const m = xt() + u, $ = m + l;
    E(() => D(t, !1, "start")), "inert" in t && (i = /** @type {HTMLElement} */
    t.inert, t.inert = !0), St((y) => {
      if (s) {
        if (y >= $)
          return d(0, 1), D(t, !1, "end"), --c.r || x(c.c), !1;
        if (y >= m) {
          const M = h((y - m) / l);
          d(1 - M, M);
        }
      }
      return s;
    });
  }
  return Q(r) ? Tt().then(() => {
    r = r(o), f();
  }) : f(), {
    end(u) {
      u && "inert" in t && (t.inert = i), u && r.tick && r.tick(1, 0), s && (a && Y(t, a), s = !1);
    }
  };
}
function J(t) {
  t && t.c();
}
function H(t, e, n) {
  const { fragment: o, after_update: r } = t.$$;
  o && o.m(e, n), E(() => {
    const s = t.$$.on_mount.map(gt).filter(Q);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : x(s), t.$$.on_mount = [];
  }), r.forEach(E);
}
function z(t, e) {
  const n = t.$$;
  n.fragment !== null && (te(n.after_update), x(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ie(t, e) {
  t.$$.dirty[0] === -1 && (C.push(t), Yt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Mt(t, e, n, o, r, s, a = null, c = [-1]) {
  const i = O;
  P(t);
  const f = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: p,
    not_equal: r,
    bound: st(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (i ? i.$$.context : [])),
    // everything else
    callbacks: st(),
    dirty: c,
    skip_bound: !1,
    root: e.target || i.$$.root
  };
  a && a(f.root);
  let u = !1;
  if (f.ctx = n ? n(t, e.props || {}, (l, h, ...d) => {
    const _ = d.length ? d[0] : h;
    return f.ctx && r(f.ctx[l], f.ctx[l] = _) && (!f.skip_bound && f.bound[l] && f.bound[l](_), u && ie(t, l)), h;
  }) : [], f.update(), u = !0, x(f.before_update), f.fragment = o ? o(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const l = Vt(e.target);
      f.fragment && f.fragment.l(l), l.forEach(g);
    } else
      f.fragment && f.fragment.c();
    e.intro && T(t.$$.fragment), H(t, e.target, e.anchor), Pt();
  }
  P(i);
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
    B(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    B(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    z(this, 1), this.$destroy = p;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!Q(n))
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
    this.$$set && !Ft(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const fe = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(fe);
const S = [];
function jt(t, e = p) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function r(c) {
    if (U(t, c) && (t = c, n)) {
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
  function a(c, i = p) {
    const f = [c, i];
    return o.add(f), o.size === 1 && (n = e(r, s) || p), c(t), () => {
      o.delete(f), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: s, subscribe: a };
}
const qt = jt({}), se = {
  selector: "header"
}, ce = {
  selector: "#body"
}, ue = {
  selector: "footer"
}, ae = {
  header: se,
  body: ce,
  footer: ue
}, ht = jt(ae), ot = "wpspa", tt = `${ot}-header`, et = `${ot}-body`, nt = `${ot}-footer`;
function le(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var de = function(t, e) {
  var n, o, r, s, a, c, i, f;
  for (e = 1, n = t.length & 3, o = t.length - n, r = e, a = 3432918353, c = 461845907, f = 0; f < o; )
    i = t.charCodeAt(f) & 255 | (t.charCodeAt(++f) & 255) << 8 | (t.charCodeAt(++f) & 255) << 16 | (t.charCodeAt(++f) & 255) << 24, ++f, i = (i & 65535) * a + (((i >>> 16) * a & 65535) << 16) & 4294967295, i = i << 15 | i >>> 17, i = (i & 65535) * c + (((i >>> 16) * c & 65535) << 16) & 4294967295, r ^= i, r = r << 13 | r >>> 19, s = (r & 65535) * 5 + (((r >>> 16) * 5 & 65535) << 16) & 4294967295, r = (s & 65535) + 27492 + (((s >>> 16) + 58964 & 65535) << 16);
  switch (i = 0, n) {
    case 3:
      i ^= (t.charCodeAt(f + 2) & 255) << 16;
    case 2:
      i ^= (t.charCodeAt(f + 1) & 255) << 8;
    case 1:
      i ^= t.charCodeAt(f) & 255, i = (i & 65535) * a + (((i >>> 16) * a & 65535) << 16) & 4294967295, i = i << 15 | i >>> 17, i = (i & 65535) * c + (((i >>> 16) * c & 65535) << 16) & 4294967295, r ^= i;
  }
  return r ^= t.length, r ^= r >>> 16, r = (r & 65535) * 2246822507 + (((r >>> 16) * 2246822507 & 65535) << 16) & 4294967295, r ^= r >>> 13, r = (r & 65535) * 3266489909 + (((r >>> 16) * 3266489909 & 65535) << 16) & 4294967295, r ^= r >>> 16, (r >>> 0).toString(36);
};
const K = /* @__PURE__ */ le(de);
function it(t, e) {
  fetch(t).then((n) => {
    n.text().then((o) => {
      const r = o.match(/<body>([\s\S]*)<\/body>/i)?.[0]?.replace(/<\/?body>/ig, ""), s = document.createElement("div");
      s.innerHTML = r || "";
      let a = "";
      a = s.querySelector(ct(ht).header.selector)?.innerHTML || "";
      let i = r || "";
      i = s.querySelector(ct(ht).body.selector)?.innerHTML || "", qt.update((u) => (u[tt] = {
        content: a,
        hash: K(a)
      }, u[et] = {
        content: i,
        hash: K(i)
      }, u[nt] = {
        content: "",
        hash: K(i)
      }, u)), e && e();
    });
  });
}
function he(t, e) {
  t.preventDefault(), it(e, () => {
    history.pushState({ href: e }, "", e);
  });
}
function pe() {
  window.addEventListener("popstate", (t) => {
    it(t.state.href);
  });
}
function _e() {
  const t = location.href;
  it(t, () => {
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
function _t(t, { delay: e = 0, duration: n = 400, easing: o = me, x: r = 0, y: s = 0, opacity: a = 0 } = {}) {
  const c = getComputedStyle(t), i = +c.opacity, f = c.transform === "none" ? "" : c.transform, u = i * (1 - a), [l, h] = ut(r), [d, _] = ut(s);
  return {
    delay: e,
    duration: n,
    easing: o,
    css: (m, $) => `
			transform: ${f} translate(${(1 - m) * l}${h}, ${(1 - m) * d}${_});
			opacity: ${i - u * $}`
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
      o.c(), n = kt();
    },
    m(r, s) {
      o.m(r, s), b(r, n, s);
    },
    p(r, s) {
      s & /*$IncomingPart, partName*/
      3 && U(e, e = /*$IncomingPart*/
      r[1]?.[
        /*partName*/
        r[0]
      ]?.hash) ? (ee(), q(o, 1, 1, p), ne(), o = $t(r), o.c(), T(o, 1), o.m(n.parentNode, n)) : o.p(r, s);
    },
    d(r) {
      r && g(n), o.d(r);
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
  ), o, r, s, a, c;
  return {
    c() {
      e = L("div");
    },
    m(i, f) {
      b(i, e, f), e.innerHTML = n, s = !0, a || (c = [
        R(
          e,
          "introstart",
          /*introStart*/
          t[6]
        ),
        R(
          e,
          "introend",
          /*introEnd*/
          t[7]
        ),
        R(
          e,
          "outrostart",
          /*outroStart*/
          t[8]
        ),
        R(
          e,
          "outroend",
          /*outroEnd*/
          t[9]
        )
      ], a = !0);
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
      s || (i && E(() => {
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
      i && g(e), i && r && r.end(), a = !1, x(c);
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
      n && n.c(), e = kt();
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
      o && g(e), n && n.d(o);
    }
  };
}
function ye(t) {
  const e = t.currentTarget.clientWidth, n = t.currentTarget.clientHeight;
  t.currentTarget.style.width = `${e}px`, t.currentTarget.style.height = `${n}px`, t.currentTarget.style.overflow = "hidden", t.currentTarget.style.position = "absolute";
}
function ge(t, e, n) {
  let o;
  It(t, qt, (d) => n(1, o = d));
  let { partName: r } = e;
  const s = o?.[r]?.transition?.in || _t, a = o?.[r]?.transition?.out || _t, c = o?.[r]?.transition?.inParams || { x: 200 }, i = o?.[r]?.transition?.outParams || { x: -200 }, f = o?.[r]?.transition?.onIntroStart || (() => !0), u = o?.[r]?.transition?.onIntroEnd || (() => !0), l = o?.[r]?.transition?.onOutroStart || ye, h = o?.[r]?.transition?.onOutroEnd || (() => !0);
  return Lt(() => {
    pt();
  }), Kt(() => {
    pt();
  }), t.$$set = (d) => {
    "partName" in d && n(0, r = d.partName);
  }, [
    r,
    o,
    s,
    a,
    c,
    i,
    f,
    u,
    l,
    h
  ];
}
class X extends Rt {
  constructor(e) {
    super(), Mt(this, e, ge, $e, U, { partName: 0 });
  }
}
function be(t) {
  let e, n, o, r, s, a, c, i, f;
  return n = new X({ props: { partName: tt } }), s = new X({ props: { partName: et } }), i = new X({ props: { partName: nt } }), {
    c() {
      e = L("div"), J(n.$$.fragment), o = at(), r = L("div"), J(s.$$.fragment), a = at(), c = L("div"), J(i.$$.fragment), W(e, "id", tt), W(r, "id", et), W(c, "id", nt);
    },
    m(u, l) {
      b(u, e, l), H(n, e, null), b(u, o, l), b(u, r, l), H(s, r, null), b(u, a, l), b(u, c, l), H(i, c, null), f = !0;
    },
    p,
    i(u) {
      f || (T(n.$$.fragment, u), T(s.$$.fragment, u), T(i.$$.fragment, u), f = !0);
    },
    o(u) {
      q(n.$$.fragment, u), q(s.$$.fragment, u), q(i.$$.fragment, u), f = !1;
    },
    d(u) {
      u && (g(e), g(o), g(r), g(a), g(c)), z(n), z(s), z(i);
    }
  };
}
function we(t) {
  return Lt(() => {
    pe(), _e();
  }), [];
}
class xe extends Rt {
  constructor(e) {
    super(), Mt(this, e, we, be, U, {});
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
