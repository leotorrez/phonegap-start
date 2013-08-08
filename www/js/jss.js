/*!
 *
 * Copyright (c) 2013, Acid Media, Inc.
 * All rights reserved.
 *
 * Redistribution and use in any form, with or without modification,
 * are not permitted.
 *
 */
/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function (e, t) {
    var n, r, i = typeof t,
        o = e.document,
        a = e.location,
        s = e.jQuery,
        u = e.$,
        l = {}, c = [],
        p = "1.9.1",
        f = c.concat,
        d = c.push,
        h = c.slice,
        g = c.indexOf,
        m = l.toString,
        y = l.hasOwnProperty,
        v = p.trim,
        b = function (e, t) {
            return new b.fn.init(e, t, r)
        }, x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        w = /\S+/g,
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        k = /^[\],:{}\s]*$/,
        E = /(?:^|:|,)(?:\s*\[)+/g,
        S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        j = /^-ms-/,
        D = /-([\da-z])/gi,
        L = function (e, t) {
            return t.toUpperCase()
        }, H = function (e) {
            (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(), b.ready())
        }, q = function () {
            o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H), e.detachEvent("onload", H))
        };
    b.fn = b.prototype = {
        jquery: p,
        constructor: b,
        init: function (e, n, r) {
            var i, a;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), C.test(i[1]) && b.isPlainObject(n))
                        for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (a = o.getElementById(i[2]), a && a.parentNode) {
                    if (a.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = a
                }
                return this.context = o, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return h.call(this)
        },
        get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function (e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return b.each(this, e, t)
        },
        ready: function (e) {
            return b.ready.promise().done(e), this
        },
        slice: function () {
            return this.pushStack(h.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function (e) {
            return this.pushStack(b.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: d,
        sort: [].sort,
        splice: [].splice
    }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function () {
        var e, n, r, i, o, a, s = arguments[0] || {}, u = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || b.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++)
            if (null != (o = arguments[u]))
                for (i in o) e = s[i], r = o[i], s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, a = e && b.isArray(e) ? e : []) : a = e && b.isPlainObject(e) ? e : {}, s[i] = b.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, b.extend({
        noConflict: function (t) {
            return e.$ === b && (e.$ = u), t && e.jQuery === b && (e.jQuery = s), b
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? b.readyWait++ : b.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? !--b.readyWait : !b.isReady) {
                if (!o.body) return setTimeout(b.ready);
                b.isReady = !0, e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]), b.fn.trigger && b(o).trigger("ready").off("ready"))
            }
        },
        isFunction: function (e) {
            return "function" === b.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === b.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e
        },
        isPlainObject: function (e) {
            if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) return !1;
            try {
                if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || y.call(e, r)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function (e) {
            throw Error(e)
        },
        parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || o;
            var r = C.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes))
        },
        parseJSON: function (n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n), n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), t)
        },
        parseXML: function (n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), r
        },
        noop: function () {},
        globalEval: function (t) {
            t && b.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(j, "ms-").replace(D, L)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++)
                        if (r = t.apply(e[i], n), r === !1) break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n), r === !1) break
            } else if (a) {
                for (; o > i; i++)
                    if (r = t.call(e[i], i, e[i]), r === !1) break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]), r === !1) break; return e
        },
        trim: v && !v.call("﻿ ") ? function (e) {
            return null == e ? "" : v.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(T, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n
        },
        inArray: function (e, t, n) {
            var r;
            if (t) {
                if (g) return g.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r)
                for (; r > o; o++) e[i++] = n[o];
            else
                while (n[o] !== t) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !! n; a > o; o++) r = !! t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function (e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e),
                s = [];
            if (a)
                for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
            else
                for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
            return f.apply([], s)
        },
        guid: 1,
        proxy: function (e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), b.isFunction(e) ? (r = h.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(h.call(arguments)))
            }, i.guid = e.guid = e.guid || b.guid++, i) : t
        },
        access: function (e, n, r, i, o, a, s) {
            var u = 0,
                l = e.length,
                c = null == r;
            if ("object" === b.type(r)) {
                o = !0;
                for (u in r) b.access(e, n, u, r[u], !0, a, s)
            } else if (i !== t && (o = !0, b.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
                return c.call(b(e), n)
            })), n))
                for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
            return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
        },
        now: function () {
            return (new Date).getTime()
        }
    }), b.ready.promise = function (t) {
        if (!n)
            if (n = b.Deferred(), "complete" === o.readyState) setTimeout(b.ready);
            else if (o.addEventListener) o.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1);
        else {
            o.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
            var r = !1;
            try {
                r = null == e.frameElement && o.documentElement
            } catch (i) {}
            r && r.doScroll && function a() {
                if (!b.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (e) {
                        return setTimeout(a, 50)
                    }
                    q(), b.ready()
                }
            }()
        }
        return n.promise(t)
    }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });

    function M(e) {
        var t = e.length,
            n = b.type(e);
        return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = b(o);
    var _ = {};

    function F(e) {
        var t = _[e] = {};
        return b.each(e.match(w) || [], function (e, n) {
            t[n] = !0
        }), t
    }
    b.Callbacks = function (e) {
        e = "string" == typeof e ? _[e] || F(e) : b.extend({}, e);
        var n, r, i, o, a, s, u = [],
            l = !e.once && [],
            c = function (t) {
                for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = u.length, n = !0; u && o > a; a++)
                    if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                n = !1, u && (l ? l.length && c(l.shift()) : r ? u = [] : p.disable())
            }, p = {
                add: function () {
                    if (u) {
                        var t = u.length;
                        (function i(t) {
                            b.each(t, function (t, n) {
                                var r = b.type(n);
                                "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        })(arguments), n ? o = u.length : r && (s = t, c(r))
                    }
                    return this
                },
                remove: function () {
                    return u && b.each(arguments, function (e, t) {
                        var r;
                        while ((r = b.inArray(t, u, r)) > -1) u.splice(r, 1), n && (o >= r && o--, a >= r && a--)
                    }), this
                },
                has: function (e) {
                    return e ? b.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function () {
                    return u = [], this
                },
                disable: function () {
                    return u = l = r = t, this
                },
                disabled: function () {
                    return !u
                },
                lock: function () {
                    return l = t, r || p.disable(), this
                },
                locked: function () {
                    return !l
                },
                fireWith: function (e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], !u || i && !l || (n ? l.push(t) : c(t)), this
                },
                fire: function () {
                    return p.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return p
    }, b.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", b.Callbacks("once memory"), "resolved"],
                ["reject", "fail", b.Callbacks("once memory"), "rejected"],
                ["notify", "progress", b.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return b.Deferred(function (n) {
                            b.each(t, function (t, o) {
                                var a = o[0],
                                    s = b.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? b.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, b.each(t, function (e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t = 0,
                n = h.call(arguments),
                r = n.length,
                i = 1 !== r || e && b.isFunction(e.promise) ? r : 0,
                o = 1 === i ? e : b.Deferred(),
                a = function (e, t, n) {
                    return function (r) {
                        t[e] = this, n[e] = arguments.length > 1 ? h.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                    }
                }, s, u, l;
            if (r > 1)
                for (s = Array(r), u = Array(r), l = Array(r); r > t; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i;
            return i || o.resolveWith(l, n), o.promise()
        }
    }), b.support = function () {
        var t, n, r, a, s, u, l, c, p, f, d = o.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
        s = o.createElement("select"), l = s.appendChild(o.createElement("option")), a = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            getSetAttribute: "t" !== d.className,
            leadingWhitespace: 3 === d.firstChild.nodeType,
            tbody: !d.getElementsByTagName("tbody").length,
            htmlSerialize: !! d.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !! r.style.cssFloat,
            checkOn: !! a.value,
            optSelected: l.selected,
            enctype: !! o.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === o.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !l.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        a = o.createElement("input"), a.setAttribute("value", ""), t.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "t"), a.setAttribute("name", "t"), u = o.createDocumentFragment(), u.appendChild(a), t.appendChecked = a.checked, t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in {
            submit: !0,
            change: !0,
            focusin: !0
        }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, b(function () {
            var n, r, a, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                u = o.getElementsByTagName("body")[0];
            u && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = d.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, r = d.appendChild(o.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (u.style.zoom = 1)), u.removeChild(n), n = d = a = r = null)
        }), n = s = u = l = r = a = null, t
    }();
    var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        B = /([A-Z])/g;

    function P(e, n, r, i) {
        if (b.acceptData(e)) {
            var o, a, s = b.expando,
                u = "string" == typeof n,
                l = e.nodeType,
                p = l ? b.cache : e,
                f = l ? e[s] : e[s] && s;
            if (f && p[f] && (i || p[f].data) || !u || r !== t) return f || (l ? e[s] = f = c.pop() || b.guid++ : f = s), p[f] || (p[f] = {}, l || (p[f].toJSON = b.noop)), ("object" == typeof n || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n) : p[f].data = b.extend(p[f].data, n)), o = p[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[b.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[b.camelCase(n)])) : a = o, a
        }
    }

    function R(e, t, n) {
        if (b.acceptData(e)) {
            var r, i, o, a = e.nodeType,
                s = a ? b.cache : e,
                u = a ? e[b.expando] : b.expando;
            if (s[u]) {
                if (t && (o = n ? s[u] : s[u].data)) {
                    b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in o ? t = [t] : (t = b.camelCase(t), t = t in o ? [t] : t.split(" "));
                    for (r = 0, i = t.length; i > r; r++) delete o[t[r]];
                    if (!(n ? $ : b.isEmptyObject)(o)) return
                }(n || (delete s[u].data, $(s[u]))) && (a ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null)
            }
        }
    }
    b.extend({
        cache: {},
        expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (e) {
            return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !! e && !$(e)
        },
        data: function (e, t, n) {
            return P(e, t, n)
        },
        removeData: function (e, t) {
            return R(e, t)
        },
        _data: function (e, t, n) {
            return P(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return R(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), b.fn.extend({
        data: function (e, n) {
            var r, i, o = this[0],
                a = 0,
                s = null;
            if (e === t) {
                if (this.length && (s = b.data(o), 1 === o.nodeType && !b._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; r.length > a; a++) i = r[a].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), W(o, i, s[i]));
                    b._data(o, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each(function () {
                b.data(this, e)
            }) : b.access(this, function (n) {
                return n === t ? o ? W(o, e, b.data(o, e)) : null : (this.each(function () {
                    b.data(this, e, n)
                }), t)
            }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                b.removeData(this, e)
            })
        }
    });

    function W(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(B, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : O.test(r) ? b.parseJSON(r) : r
                } catch (o) {}
                b.data(e, n, r)
            } else r = t
        }
        return r
    }

    function $(e) {
        var t;
        for (t in e)
            if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    b.extend({
        queue: function (e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = b.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = b._queueHooks(e, t),
                a = function () {
                    b.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return b._data(e, n) || b._data(e, n, {
                empty: b.Callbacks("once memory").add(function () {
                    b._removeData(e, t + "queue"), b._removeData(e, n)
                })
            })
        }
    }), b.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = b.queue(this, e, n);
                b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                b.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var r, i = 1,
                o = b.Deferred(),
                a = this,
                s = this.length,
                u = function () {
                    --i || o.resolveWith(a, [a])
                };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--) r = b._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
            return u(), o.promise(n)
        }
    });
    var I, z, X = /[\t\r\n]/g,
        U = /\r/g,
        V = /^(?:input|select|textarea|button|object)$/i,
        Y = /^(?:a|area)$/i,
        J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        G = /^(?:checked|selected)$/i,
        Q = b.support.getSetAttribute,
        K = b.support.input;
    b.fn.extend({
        attr: function (e, t) {
            return b.access(this, b.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                b.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return b.access(this, b.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = b.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function (e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                u = "string" == typeof e && e;
            if (b.isFunction(e)) return this.each(function (t) {
                b(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(w) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
                        o = 0;
                        while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = b.trim(r)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (b.isFunction(e)) return this.each(function (t) {
                b(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(w) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
                        o = 0;
                        while (i = t[o++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? b.trim(r) : ""
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return b.isFunction(e) ? this.each(function (n) {
                b(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n) {
                    var o, a = 0,
                        s = b(this),
                        u = t,
                        l = e.match(w) || [];
                    while (o = l[a++]) u = r ? u : !s.hasClass(o), s[u ? "addClass" : "removeClass"](o)
                } else(n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = b.isFunction(e), this.each(function (n) {
                    var o, a = b(this);
                    1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : b.isArray(o) && (o = b.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(U, "") : null == n ? "" : n)
            }
        }
    }), b.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        o = "select-one" === e.type || 0 > i,
                        a = o ? null : [],
                        s = o ? i + 1 : r.length,
                        u = 0 > i ? s : o ? i : 0;
                    for (; s > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
                            if (t = b(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function (e, t) {
                    var n = b.makeArray(t);
                    return b(e).find("option").each(function () {
                        this.selected = b.inArray(b(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attr: function (e, n, r) {
            var o, a, s, u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u) return typeof e.getAttribute === i ? b.prop(e, n, r) : (a = 1 !== u || !b.isXMLDoc(e), a && (n = n.toLowerCase(), o = b.attrHooks[n] || (J.test(n) ? z : I)), r === t ? o && a && "get" in o && null !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== i && (s = e.getAttribute(n)), null == s ? t : s) : null !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r) : (b.removeAttr(e, n), t))
        },
        removeAttr: function (e, t) {
            var n, r, i = 0,
                o = t && t.match(w);
            if (o && 1 === e.nodeType)
                while (n = o[i++]) r = b.propFix[n] || n, J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(Q ? n : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !b.isXMLDoc(e), a && (n = b.propFix[n] || n, o = b.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), z = {
        get: function (e, n) {
            var r = b.prop(e, n),
                i = "boolean" == typeof r && e.getAttribute(n),
                o = "boolean" == typeof r ? K && Q ? null != i : G.test(n) ? e[b.camelCase("default-" + n)] : !! i : e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() : t
        },
        set: function (e, t, n) {
            return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, K && Q || (b.attrHooks.value = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
        },
        set: function (e, n, r) {
            return b.nodeName(e, "input") ? (e.defaultValue = n, t) : I && I.set(e, n, r)
        }
    }), Q || (I = b.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
        },
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, b.attrHooks.contenteditable = {
        get: I.get,
        set: function (e, t, n) {
            I.set(e, "" === t ? !1 : t, n)
        }
    }, b.each(["width", "height"], function (e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            set: function (e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        })
    })), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function (e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t : r
            }
        })
    }), b.each(["href", "src"], function (e, t) {
        b.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    })), b.support.style || (b.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function () {
        b.valHooks[this] = {
            get: function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), b.each(["radio", "checkbox"], function () {
        b.valHooks[this] = b.extend(b.valHooks[this], {
            set: function (e, n) {
                return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t
            }
        })
    });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() {
        return !0
    }

    function ot() {
        return !1
    }
    b.event = {
        global: {},
        add: function (e, n, r, o, a) {
            var s, u, l, c, p, f, d, h, g, m, y, v = b._data(e);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = b.guid++), (u = v.events) || (u = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
                    return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments)
                }, f.elem = e), n = (n || "").match(w) || [""], l = n.length;
                while (l--) s = rt.exec(n[l]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), p = b.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = b.event.special[g] || {}, d = b.extend({
                    type: g,
                    origType: y,
                    data: o,
                    handler: r,
                    guid: r.guid,
                    selector: a,
                    needsContext: a && b.expr.match.needsContext.test(a),
                    namespace: m.join(".")
                }, c), (h = u[g]) || (h = u[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), b.event.global[g] = !0;
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, p, f, d, h, g, m = b.hasData(e) && b._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(w) || [""], l = t.length;
                while (l--)
                    if (s = rt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        p = b.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length;
                        while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                        u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle), delete c[d])
                    } else
                        for (d in c) b.event.remove(e, d + t[l], n, r, !0);
                b.isEmptyObject(c) && (delete m.handle, b._removeData(e, "events"))
            }
        },
        trigger: function (n, r, i, a) {
            var s, u, l, c, p, f, d, h = [i || o],
                g = y.call(n, "type") ? n.type : n,
                m = y.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = f = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), u = 0 > g.indexOf(":") && "on" + g, n = n[b.expando] ? n : new b.Event(g, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : b.makeArray(r, [n]), p = b.event.special[g] || {}, a || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!a && !p.noBubble && !b.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (l = l.parentNode); l; l = l.parentNode) h.push(l), f = l;
                    f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((l = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"), s && s.apply(l, r), s = u && l[u], s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault();
                if (n.type = g, !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) {
                    f = i[u], f && (i[u] = null), b.event.triggered = g;
                    try {
                        i[g]()
                    } catch (v) {}
                    b.event.triggered = t, f && (i[u] = f)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = b.event.fix(e);
            var n, r, i, o, a, s = [],
                u = h.call(arguments),
                l = (b._data(this, "events") || {})[e.type] || [],
                c = b.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = b.event.handlers.call(this, e, l), n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem, a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var r, i, o, a, s = [],
                u = n.delegateCount,
                l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null, [l]).length), o[r] && o.push(i);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return n.length > u && s.push({
                elem: this,
                handlers: n.slice(u)
            }), s
        },
        fix: function (e) {
            if (e[b.expando]) return e;
            var t, n, r, i = e.type,
                a = e,
                s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new b.Event(a), t = r.length;
            while (t--) n = r[t], e[n] = a[n];
            return e.target || (e.target = a.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, s.filter ? s.filter(e, a) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, a, s = n.button,
                    u = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function () {
                    return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                }
            },
            focus: {
                trigger: function () {
                    if (this !== o.activeElement && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === o.activeElement && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = b.extend(new b.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, b.removeEvent = o.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, b.Event = function (e, n) {
        return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, t) : new b.Event(e, n)
    }, b.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        b.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), b.support.submitBubbles || (b.event.special.submit = {
        setup: function () {
            return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
                r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), b._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t)
        }
    }), b.support.changeBubbles || (b.event.special.change = {
        setup: function () {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), b.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0)
            })), !1) : (b.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0)
                }), b._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function (e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function () {
            return b.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), b.support.focusinBubbles || b.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            r = function (e) {
                b.event.simulate(t, e.target, b.event.fix(e), !0)
            };
        b.event.special[t] = {
            setup: function () {
                0 === n++ && o.addEventListener(e, r, !0)
            },
            teardown: function () {
                0 === --n && o.removeEventListener(e, r, !0)
            }
        }
    }), b.fn.extend({
        on: function (e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
            else if (!i) return this;
            return 1 === o && (s = i, i = function (e) {
                return b().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = b.guid++)), this.each(function () {
                b.event.add(this, e, i, r, n)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
                b.event.remove(this, e, r, n)
            })
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function (e, t) {
            return this.each(function () {
                b.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, n) {
            var r = this[0];
            return r ? b.event.trigger(e, n, r, !0) : t
        }
    }),

    function (e, t) {
        var n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, y, v, x = "sizzle" + -new Date,
            w = e.document,
            T = {}, N = 0,
            C = 0,
            k = it(),
            E = it(),
            S = it(),
            A = typeof t,
            j = 1 << 31,
            D = [],
            L = D.pop,
            H = D.push,
            q = D.slice,
            M = D.indexOf || function (e) {
                var t = 0,
                    n = this.length;
                for (; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            }, _ = "[\\x20\\t\\r\\n\\f]",
            F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            O = F.replace("w", "w#"),
            B = "([*^$|!~]?=)",
            P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]",
            R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)",
            W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
            $ = RegExp("^" + _ + "*," + _ + "*"),
            I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"),
            z = RegExp(R),
            X = RegExp("^" + O + "$"),
            U = {
                ID: RegExp("^#(" + F + ")"),
                CLASS: RegExp("^\\.(" + F + ")"),
                NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
                TAG: RegExp("^(" + F.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + P),
                PSEUDO: RegExp("^" + R),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
                needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
            }, V = /[\x20\t\r\n\f]*[+~]/,
            Y = /^[^{]+\{\s*\[native code/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            G = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            K = /'|\\/g,
            Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
            tt = function (e, t) {
                var n = "0x" + t - 65536;
                return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
            };
        try {
            q.call(w.documentElement.childNodes, 0)[0].nodeType
        } catch (nt) {
            q = function (e) {
                var t, n = [];
                while (t = this[e++]) n.push(t);
                return n
            }
        }

        function rt(e) {
            return Y.test(e + "")
        }

        function it() {
            var e, t = [];
            return e = function (n, r) {
                return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r
            }
        }

        function ot(e) {
            return e[x] = !0, e
        }

        function at(e) {
            var t = p.createElement("div");
            try {
                return e(t)
            } catch (n) {
                return !1
            } finally {
                t = null
            }
        }

        function st(e, t, n, r) {
            var i, o, a, s, u, l, f, g, m, v;
            if ((t ? t.ownerDocument || t : w) !== p && c(t), t = t || p, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (!d && !r) {
                if (i = J.exec(e))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (i[2]) return H.apply(n, q.call(t.getElementsByTagName(e), 0)), n;
                        if ((a = i[3]) && T.getByClassName && t.getElementsByClassName) return H.apply(n, q.call(t.getElementsByClassName(a), 0)), n
                    }
                if (T.qsa && !h.test(e)) {
                    if (f = !0, g = x, m = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        l = ft(e), (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&") : t.setAttribute("id", g), g = "[id='" + g + "'] ", u = l.length;
                        while (u--) l[u] = g + dt(l[u]);
                        m = V.test(e) && t.parentNode || t, v = l.join(",")
                    }
                    if (v) try {
                        return H.apply(n, q.call(m.querySelectorAll(v), 0)), n
                    } catch (b) {} finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return wt(e.replace(W, "$1"), t, n, r)
        }
        a = st.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, c = st.setDocument = function (e) {
            var n = e ? e.ownerDocument || e : w;
            return n !== p && 9 === n.nodeType && n.documentElement ? (p = n, f = n.documentElement, d = a(n), T.tagNameNoComments = at(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), T.attributes = at(function (e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }), T.getByClassName = at(function (e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
            }), T.getByName = at(function (e) {
                e.id = x + 0, e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>", f.insertBefore(e, f.firstChild);
                var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length;
                return T.getIdNotName = !n.getElementById(x), f.removeChild(e), t
            }), i.attrHandle = at(function (e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href")
            }) ? {} : {
                href: function (e) {
                    return e.getAttribute("href", 2)
                },
                type: function (e) {
                    return e.getAttribute("type")
                }
            }, T.getIdNotName ? (i.find.ID = function (e, t) {
                if (typeof t.getElementById !== A && !d) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, i.filter.ID = function (e) {
                var t = e.replace(et, tt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (i.find.ID = function (e, n) {
                if (typeof n.getElementById !== A && !d) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r] : t : []
                }
            }, i.filter.ID = function (e) {
                var t = e.replace(et, tt);
                return function (e) {
                    var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), i.find.TAG = T.tagNameNoComments ? function (e, n) {
                return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, i.find.NAME = T.getByName && function (e, n) {
                return typeof n.getElementsByName !== A ? n.getElementsByName(name) : t
            }, i.find.CLASS = T.getByClassName && function (e, n) {
                return typeof n.getElementsByClassName === A || d ? t : n.getElementsByClassName(e)
            }, g = [], h = [":focus"], (T.qsa = rt(n.querySelectorAll)) && (at(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || h.push(":checked")
            }), at(function (e) {
                e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:")
            })), (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function (e) {
                T.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", R)
            }), h = RegExp(h.join("|")), g = RegExp(g.join("|")), y = rt(f.contains) || f.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, v = f.compareDocumentPosition ? function (e, t) {
                var r;
                return e === t ? (u = !0, 0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var r, i = 0,
                    o = e.parentNode,
                    a = t.parentNode,
                    s = [e],
                    l = [t];
                if (e === t) return u = !0, 0;
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0;
                if (o === a) return ut(e, t);
                r = e;
                while (r = r.parentNode) s.unshift(r);
                r = t;
                while (r = r.parentNode) l.unshift(r);
                while (s[i] === l[i]) i++;
                return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
            }, u = !1, [0, 0].sort(v), T.detectDuplicates = u, p) : p
        }, st.matches = function (e, t) {
            return st(e, null, null, t)
        }, st.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Z, "='$1']"), !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) try {
                var n = m.call(e, t);
                if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (r) {}
            return st(t, p, null, [e]).length > 0
        }, st.contains = function (e, t) {
            return (e.ownerDocument || e) !== p && c(e), y(e, t)
        }, st.attr = function (e, t) {
            var n;
            return (e.ownerDocument || e) !== p && c(e), d || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
        }, st.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, st.uniqueSort = function (e) {
            var t, n = [],
                r = 1,
                i = 0;
            if (u = !T.detectDuplicates, e.sort(v), u) {
                for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                while (i--) e.splice(n[i], 1)
            }
            return e
        };

        function ut(e, t) {
            var n = t && e,
                r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j);
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function lt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function ct(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function pt(e) {
            return ot(function (t) {
                return t = +t, ot(function (n, r) {
                    var i, o = e([], n.length, t),
                        a = o.length;
                    while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        o = st.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r]; r++) n += o(t);
            return n
        }, i = st.selectors = {
            cacheLength: 50,
            createPseudo: ot,
            match: U,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && st.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[5] && e[2];
                    return U.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    return "*" === e ? function () {
                        return !0
                    } : (e = e.replace(et, tt).toLowerCase(), function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },
                CLASS: function (e) {
                    var t = k[e + " "];
                    return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function (e) {
                        return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, n) {
                    return function (r) {
                        var i = st.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            v = !u && !s;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                c = m[x] || (m[x] = {}), l = c[e] || [], d = l[0] === N && l[1], f = l[0] === N && l[2], p = d && m.childNodes[d];
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                    if (1 === p.nodeType && ++f && p === t) {
                                        c[e] = [N, d, f];
                                        break
                                    }
                            } else if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) f = l[1];
                            else
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                    if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [N, f]), p === t)) break; return f -= i, f === r || 0 === f % r && f / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
                    return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function (e, n) {
                        var i, o = r(e, t),
                            a = o.length;
                        while (a--) i = M.call(e, o[a]), e[i] = !(n[i] = o[a])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: ot(function (e) {
                    var t = [],
                        n = [],
                        r = s(e.replace(W, "$1"));
                    return r[x] ? ot(function (e, t, n, i) {
                        var o, a = r(e, null, i, []),
                            s = e.length;
                        while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }),
                has: ot(function (e) {
                    return function (t) {
                        return st(e, t).length > 0
                    }
                }),
                contains: ot(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                    }
                }),
                lang: ot(function (e) {
                    return X.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(),

                    function (t) {
                        var n;
                        do
                            if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === f
                },
                focus: function (e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !! e.checked || "option" === t && !! e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0
                },
                parent: function (e) {
                    return !i.pseudos.empty(e)
                },
                header: function (e) {
                    return Q.test(e.nodeName)
                },
                input: function (e) {
                    return G.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: pt(function () {
                    return [0]
                }),
                last: pt(function (e, t) {
                    return [t - 1]
                }),
                eq: pt(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: pt(function (e, t) {
                    var n = 0;
                    for (; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: pt(function (e, t) {
                    var n = 1;
                    for (; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: pt(function (e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; --r >= 0;) e.push(r);
                    return e
                }),
                gt: pt(function (e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; t > ++r;) e.push(r);
                    return e
                })
            }
        };
        for (n in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) i.pseudos[n] = lt(n);
        for (n in {
            submit: !0,
            reset: !0
        }) i.pseudos[n] = ct(n);

        function ft(e, t) {
            var n, r, o, a, s, u, l, c = E[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, u = [], l = i.preFilter;
            while (s) {
                (!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), n = !1, (r = I.exec(s)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(W, " ")
                }), s = s.slice(n.length));
                for (a in i.filter)!(r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: a,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? st.error(e) : E(e, u).slice(0)
        }

        function dt(e) {
            var t = 0,
                n = e.length,
                r = "";
            for (; n > t; t++) r += e[t].value;
            return r
        }

        function ht(e, t, n) {
            var i = t.dir,
                o = n && "parentNode" === i,
                a = C++;
            return t.first ? function (t, n, r) {
                while (t = t[i])
                    if (1 === t.nodeType || o) return e(t, n, r)
            } : function (t, n, s) {
                var u, l, c, p = N + " " + a;
                if (s) {
                    while (t = t[i])
                        if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                } else
                    while (t = t[i])
                        if (1 === t.nodeType || o)
                            if (c = t[x] || (t[x] = {}), (l = c[i]) && l[0] === p) {
                                if ((u = l[1]) === !0 || u === r) return u === !0
                            } else if (l = c[i] = [p], l[1] = e(t, n, s) || r, l[1] === !0) return !0
            }
        }

        function gt(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function mt(e, t, n, r, i) {
            var o, a = [],
                s = 0,
                u = e.length,
                l = null != t;
            for (; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }

        function yt(e, t, n, r, i, o) {
            return r && !r[x] && (r = yt(r)), i && !i[x] && (i = yt(i, o)), ot(function (o, a, s, u) {
                var l, c, p, f = [],
                    d = [],
                    h = a.length,
                    g = o || xt(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !o && t ? g : mt(g, f, e, s, u),
                    y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, u), r) {
                    l = mt(y, d), r(l, [], s, u), c = l.length;
                    while (c--)(p = l[c]) && (y[d[c]] = !(m[d[c]] = p))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = y.length;
                            while (c--)(p = y[c]) && l.push(m[c] = p);
                            i(null, y = [], l, u)
                        }
                        c = y.length;
                        while (c--)(p = y[c]) && (l = i ? M.call(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p))
                    }
                } else y = mt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y)
            })
        }

        function vt(e) {
            var t, n, r, o = e.length,
                a = i.relative[e[0].type],
                s = a || i.relative[" "],
                u = a ? 1 : 0,
                c = ht(function (e) {
                    return e === t
                }, s, !0),
                p = ht(function (e) {
                    return M.call(t, e) > -1
                }, s, !0),
                f = [
                    function (e, n, r) {
                        return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                    }
                ];
            for (; o > u; u++)
                if (n = i.relative[e[u].type]) f = [ht(gt(f), n)];
                else {
                    if (n = i.filter[e[u].type].apply(null, e[u].matches), n[x]) {
                        for (r = ++u; o > r; r++)
                            if (i.relative[e[r].type]) break;
                        return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e))
                    }
                    f.push(n)
                }
            return gt(f)
        }

        function bt(e, t) {
            var n = 0,
                o = t.length > 0,
                a = e.length > 0,
                s = function (s, u, c, f, d) {
                    var h, g, m, y = [],
                        v = 0,
                        b = "0",
                        x = s && [],
                        w = null != d,
                        T = l,
                        C = s || a && i.find.TAG("*", d && u.parentNode || u),
                        k = N += null == T ? 1 : Math.random() || .1;
                    for (w && (l = u !== p && u, r = n); null != (h = C[b]); b++) {
                        if (a && h) {
                            g = 0;
                            while (m = e[g++])
                                if (m(h, u, c)) {
                                    f.push(h);
                                    break
                                }
                            w && (N = k, r = ++n)
                        }
                        o && ((h = !m && h) && v--, s && x.push(h))
                    }
                    if (v += b, o && b !== v) {
                        g = 0;
                        while (m = t[g++]) m(x, y, u, c);
                        if (s) {
                            if (v > 0)
                                while (b--) x[b] || y[b] || (y[b] = L.call(f));
                            y = mt(y)
                        }
                        H.apply(f, y), w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f)
                    }
                    return w && (N = k, l = T), x
                };
            return o ? ot(s) : s
        }
        s = st.compile = function (e, t) {
            var n, r = [],
                i = [],
                o = S[e + " "];
            if (!o) {
                t || (t = ft(e)), n = t.length;
                while (n--) o = vt(t[n]), o[x] ? r.push(o) : i.push(o);
                o = S(e, bt(i, r))
            }
            return o
        };

        function xt(e, t, n) {
            var r = 0,
                i = t.length;
            for (; i > r; r++) st(e, t[r], n);
            return n
        }

        function wt(e, t, n, r) {
            var o, a, u, l, c, p = ft(e);
            if (!r && 1 === p.length) {
                if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) {
                    if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0], !t) return n;
                    e = e.slice(a.shift().value.length)
                }
                o = U.needsContext.test(e) ? 0 : a.length;
                while (o--) {
                    if (u = a[o], i.relative[l = u.type]) break;
                    if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) {
                        if (a.splice(o, 1), e = r.length && dt(a), !e) return H.apply(n, q.call(r, 0)), n;
                        break
                    }
                }
            }
            return s(e, p)(r, t, d, n, V.test(e)), n
        }
        i.pseudos.nth = i.pseudos.eq;

        function Tt() {}
        i.filters = Tt.prototype = i.pseudos, i.setFilters = new Tt, c(), st.attr = b.attr, b.find = st, b.expr = st.selectors, b.expr[":"] = b.expr.pseudos, b.unique = st.uniqueSort, b.text = st.getText, b.isXMLDoc = st.isXML, b.contains = st.contains
    }(e);
    var at = /Until$/,
        st = /^(?:parents|prev(?:Until|All))/,
        ut = /^.[^:#\[\.,]*$/,
        lt = b.expr.match.needsContext,
        ct = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    b.fn.extend({
        find: function (e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e) return r = this, this.pushStack(b(e).filter(function () {
                for (t = 0; i > t; t++)
                    if (b.contains(r[t], this)) return !0
            }));
            for (n = [], t = 0; i > t; t++) b.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
        },
        has: function (e) {
            var t, n = b(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++)
                    if (b.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(ft(this, e, !1))
        },
        filter: function (e) {
            return this.pushStack(ft(this, e, !0))
        },
        is: function (e) {
            return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0;
            for (; i > r; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
                    if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) {
                        o.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return this.pushStack(o.length > 1 ? b.unique(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e),
                r = b.merge(this.get(), n);
            return this.pushStack(b.unique(r))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), b.fn.andSelf = b.fn.addBack;

    function pt(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }
    b.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return b.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return b.dir(e, "parentNode", n)
        },
        next: function (e) {
            return pt(e, "nextSibling")
        },
        prev: function (e) {
            return pt(e, "previousSibling")
        },
        nextAll: function (e) {
            return b.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return b.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return b.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return b.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return b.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return b.sibling(e.firstChild)
        },
        contents: function (e) {
            return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes)
        }
    }, function (e, t) {
        b.fn[e] = function (n, r) {
            var i = b.map(this, t, n);
            return at.test(e) || (r = n), r && "string" == typeof r && (i = b.filter(r, i)), i = this.length > 1 && !ct[e] ? b.unique(i) : i, this.length > 1 && st.test(e) && (i = i.reverse()), this.pushStack(i)
        }
    }), b.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
        },
        dir: function (e, n, r) {
            var i = [],
                o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });

    function ft(e, t, n) {
        if (t = t || 0, b.isFunction(t)) return b.grep(e, function (e, r) {
            var i = !! t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return b.grep(e, function (e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = b.grep(e, function (e) {
                return 1 === e.nodeType
            });
            if (ut.test(t)) return b.filter(t, r, !n);
            t = b.filter(t, r)
        }
        return b.grep(e, function (e) {
            return b.inArray(e, t) >= 0 === n
        })
    }

    function dt(e) {
        var t = ht.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gt = / jQuery\d+="(?:null|\d+)"/g,
        mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
        yt = /^\s+/,
        vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        xt = /<tbody/i,
        wt = /<|&#?\w+;/,
        Tt = /<(?:script|style|link)/i,
        Nt = /^(?:checkbox|radio)$/i,
        Ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
        kt = /^$|\/(?:java|ecma)script/i,
        Et = /^true\/(.*)/,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        At = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, jt = dt(o),
        Dt = jt.appendChild(o.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, b.fn.extend({
        text: function (e) {
            return b.access(this, function (e) {
                return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function (e) {
            if (b.isFunction(e)) return this.each(function (t) {
                b(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return b.isFunction(e) ? this.each(function (t) {
                b(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = b(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = b.isFunction(e);
            return this.each(function (n) {
                b(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            var n, r = 0;
            for (; null != (n = this[r]); r++)(!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")), n.parentNode.removeChild(n)));
            return this
        },
        empty: function () {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && b.cleanData(Ot(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && b.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return b.clone(this, e, t)
            })
        },
        html: function (e) {
            return b.access(this, function (e) {
                var n = this[0] || {}, r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (b.cleanData(Ot(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function (e) {
            var t = b.isFunction(e);
            return t || "string" == typeof e || (e = b(e).not(this).detach()), this.domManip([e], !0, function (e) {
                var t = this.nextSibling,
                    n = this.parentNode;
                n && (b(this).remove(), n.insertBefore(e, t))
            })
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, n, r) {
            e = f.apply([], e);
            var i, o, a, s, u, l, c = 0,
                p = this.length,
                d = this,
                h = p - 1,
                g = e[0],
                m = b.isFunction(g);
            if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) return this.each(function (i) {
                var o = d.eq(i);
                m && (e[0] = g.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
            });
            if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                for (n = n && b.nodeName(i, "tr"), s = b.map(Ot(l, "script"), Ht), a = s.length; p > c; c++) o = l, c !== h && (o = b.clone(o, !0, !0), a && b.merge(s, Ot(o, "script"))), r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c);
                if (a)
                    for (u = s[s.length - 1].ownerDocument, b.map(s, qt), c = 0; a > c; c++) o = s[c], kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({
                        url: o.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, "")));
                l = i = null
            }
            return this
        }
    });

    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function Ht(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }

    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Mt(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval"))
    }

    function _t(e, t) {
        if (1 === t.nodeType && b.hasData(e)) {
            var n, r, i, o = b._data(e),
                a = b._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) b.event.add(t, n, s[n][r])
            }
            a.data && (a.data = b.extend({}, a.data))
        }
    }

    function Ft(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) {
                i = b._data(t);
                for (r in i.events) b.removeEvent(t, r, i.handle);
                t.removeAttribute(b.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        b.fn[e] = function (e) {
            var n, r = 0,
                i = [],
                o = b(e),
                a = o.length - 1;
            for (; a >= r; r++) n = r === a ? this : this.clone(!0), b(o[r])[t](n), d.apply(i, n.get());
            return this.pushStack(i)
        }
    });

    function Ot(e, n) {
        var r, o, a = 0,
            s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)
            for (s = [], r = e.childNodes || e; null != (o = r[a]); a++)!n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n));
        return n === t || n && b.nodeName(e, n) ? b.merge([e], s) : s
    }

    function Bt(e) {
        Nt.test(e.type) && (e.defaultChecked = e.checked)
    }
    b.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, u = b.contains(e.ownerDocument, e);
            if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e)))
                for (r = Ot(o), s = Ot(e), a = 0; null != (i = s[a]); ++a) r[a] && Ft(i, r[a]);
            if (t)
                if (n)
                    for (s = s || Ot(e), r = r || Ot(o), a = 0; null != (i = s[a]); a++) _t(i, r[a]);
                else _t(e, o);
            return r = Ot(o, "script"), r.length > 0 && Mt(r, !u && Ot(e, "script")), r = s = i = null, o
        },
        buildFragment: function (e, t, n, r) {
            var i, o, a, s, u, l, c, p = e.length,
                f = dt(t),
                d = [],
                h = 0;
            for (; p > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === b.type(o)) b.merge(d, o.nodeType ? [o] : o);
                    else if (wt.test(o)) {
                s = s || f.appendChild(t.createElement("div")), u = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[u] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                while (i--) s = s.lastChild;
                if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !b.support.tbody) {
                    o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                    while (i--) b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l)
                }
                b.merge(d, s.childNodes), s.textContent = "";
                while (s.firstChild) s.removeChild(s.firstChild);
                s = f.lastChild
            } else d.push(t.createTextNode(o));
            s && f.removeChild(s), b.support.appendChecked || b.grep(Ot(d, "input"), Bt), h = 0;
            while (o = d[h++])
                if ((!r || -1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o), s = Ot(f.appendChild(o), "script"), a && Mt(s), n)) {
                    i = 0;
                    while (o = s[i++]) kt.test(o.type || "") && n.push(o)
                }
            return s = null, f
        },
        cleanData: function (e, t) {
            var n, r, o, a, s = 0,
                u = b.expando,
                l = b.cache,
                p = b.support.deleteExpando,
                f = b.event.special;
            for (; null != (n = e[s]); s++)
                if ((t || b.acceptData(n)) && (o = n[u], a = o && l[o])) {
                    if (a.events)
                        for (r in a.events) f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle);
                    l[o] && (delete l[o], p ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = null, c.push(o))
                }
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
        It = /opacity\s*=\s*([^)]*)/,
        zt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Ut = /^margin/,
        Vt = RegExp("^(" + x + ")(.*)$", "i"),
        Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"),
        Jt = RegExp("^([+-])=(" + x + ")", "i"),
        Gt = {
            BODY: "block"
        }, Qt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Kt = {
            letterSpacing: 0,
            fontWeight: 400
        }, Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--)
            if (t = en[i] + n, t in e) return t;
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, o = [],
            a = 0,
            s = e.length;
        for (; s > a; a++) r = e[a], r.style && (o[a] = b._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    b.fn.extend({
        css: function (e, n) {
            return b.access(this, function (e, n, r) {
                var i, o, a = {}, s = 0;
                if (b.isArray(n)) {
                    for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = b.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? b.style(e, n, r) : b.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return rn(this, !0)
        },
        hide: function () {
            return rn(this)
        },
        toggle: function (e) {
            var t = "boolean" == typeof e;
            return this.each(function () {
                (t ? e : nn(this)) ? b(this).show() : b(this).hide()
            })
        }
    }), b.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = b.camelCase(n),
                    l = e.style;
                if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)), s = b.cssHooks[n] || b.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    l[n] = r
                } catch (c) {}
            }
        },
        css: function (e, n, r, i) {
            var o, a, s, u = b.camelCase(n);
            return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)), s = b.cssHooks[n] || b.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || b.isNumeric(o) ? o || 0 : a) : a
        },
        swap: function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), e.getComputedStyle ? (Rt = function (t) {
        return e.getComputedStyle(t, null)
    }, Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e),
            u = s ? s.getPropertyValue(n) || s[n] : t,
            l = e.style;
        return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)), Yt.test(u) && Ut.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
    }) : o.documentElement.currentStyle && (Rt = function (e) {
        return e.currentStyle
    }, Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e),
            u = s ? s[n] : t,
            l = e.style;
        return null == u && l && l[n] && (u = l[n]), Yt.test(u) && !zt.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
    });

    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            a = 0;
        for (; 4 > o; o += 2) "margin" === n && (a += b.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += b.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }

    function sn(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Rt(e),
            a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
            r = a && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function un(e) {
        var t = o,
            n = Gt[e];
        return n || (n = ln(e, t), "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = ln(e, t), Pt.detach()), Gt[e] = n), n
    }

    function ln(e, t) {
        var n = b(t.createElement(e)).appendTo(t.body),
            r = b.css(n[0], "display");
        return n.remove(), r
    }
    b.each(["height", "width"], function (e, n) {
        b.cssHooks[n] = {
            get: function (e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function () {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            },
            set: function (e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), b.support.opacity || (b.cssHooks.opacity = {
        get: function (e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }), b(function () {
        b.support.reliableMarginRight || (b.cssHooks.marginRight = {
            get: function (e, n) {
                return n ? b.swap(e, {
                    display: "inline-block"
                }, Wt, [e, "marginRight"]) : t
            }
        }), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function (e, n) {
            b.cssHooks[n] = {
                get: function (e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? b(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), b.expr && b.expr.filters && (b.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"))
    }, b.expr.filters.visible = function (e) {
        return !b.expr.filters.hidden(e)
    }), b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        b.cssHooks[e + t] = {
            expand: function (n) {
                var r = 0,
                    i = {}, o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ut.test(e) || (b.cssHooks[e + t].set = on)
    });
    var cn = /%20/g,
        pn = /\[\]$/,
        fn = /\r?\n/g,
        dn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    b.fn.extend({
        serialize: function () {
            return b.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e))
            }).map(function (e, t) {
                var n = b(this).val();
                return null == n ? null : b.isArray(n) ? b.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                }
            }).get()
        }
    }), b.param = function (e, n) {
        var r, i = [],
            o = function (e, t) {
                t = b.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function () {
            o(this.name, this.value)
        });
        else
            for (r in e) gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    };

    function gn(e, t, n, r) {
        var i;
        if (b.isArray(t)) b.each(t, function (t, i) {
            n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== b.type(t)) r(e, t);
        else
            for (i in t) gn(e + "[" + i + "]", t[i], n, r)
    }
    b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        b.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), b.fn.hover = function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var mn, yn, vn = b.now(),
        bn = /\?/,
        xn = /#.*$/,
        wn = /([?&])_=[^&]*/,
        Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Cn = /^(?:GET|HEAD)$/,
        kn = /^\/\//,
        En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Sn = b.fn.load,
        An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = a.href
    } catch (Ln) {
        yn = o.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];

    function Hn(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(w) || [];
            if (b.isFunction(n))
                while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, n, r, i) {
        var o = {}, a = e === jn;

        function s(u) {
            var l;
            return o[u] = !0, b.each(e[u] || [], function (e, u) {
                var c = u(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), l
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function Mn(e, n) {
        var r, i, o = b.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && b.extend(!0, e, r), e
    }
    b.fn.load = function (e, n, r) {
        if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
        var i, o, a, s = this,
            u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), b.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && b.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function (e) {
            o = arguments, s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        b.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), b.each(["get", "post"], function (e, n) {
        b[n] = function (e, r, i, o) {
            return b.isFunction(r) && (o = o || i, i = r, r = t), b.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Nn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": b.parseJSON,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function (e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, u, l, c, p = b.ajaxSetup({}, n),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event,
                h = b.Deferred(),
                g = b.Callbacks("once memory"),
                m = p.statusCode || {}, y = {}, v = {}, x = 0,
                T = "canceled",
                N = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!c) {
                                c = {};
                                while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
                            }
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === x ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = v[n] = v[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return x || (p.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) m[t] = [m[t], e[t]];
                            else N.always(e[N.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || T;
                        return l && l.abort(t), k(0, t), this
                    }
                };
            if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), qn(An, p, n, N), 2 === x) return N;
            u = p.global, u && 0 === b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Cn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType), N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) N.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) return N.abort();
            T = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) N[i](p[i]);
            if (l = qn(jn, p, n, N)) {
                N.readyState = 1, u && d.trigger("ajaxSend", [N, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
                    N.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, l.send(y, k)
                } catch (C) {
                    if (!(2 > x)) throw C;
                    k(-1, C)
                }
            } else k(-1, "No Transport");

            function k(e, n, r, i) {
                var c, y, v, w, T, C = n;
                2 !== x && (x = 2, s && clearTimeout(s), l = t, a = i || "", N.readyState = e > 0 ? 4 : 0, r && (w = _n(p, N, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"), T && (b.lastModified[o] = T), T = N.getResponseHeader("etag"), T && (b.etag[o] = T)), 204 === e ? (c = !0, C = "nocontent") : 304 === e ? (c = !0, C = "notmodified") : (c = Fn(p, w), C = c.state, y = c.data, v = c.error, c = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), N.status = e, N.statusText = (n || C) + "", c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]), N.statusCode(m), m = t, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, p, c ? y : v]), g.fireWith(f, [N, C]), u && (d.trigger("ajaxComplete", [N, p]), --b.active || b.event.trigger("ajaxStop")))
            }
            return N
        },
        getScript: function (e, n) {
            return b.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return b.get(e, t, n, "json")
        }
    });

    function _n(e, n, r) {
        var i, o, a, s, u = e.contents,
            l = e.dataTypes,
            c = e.responseFields;
        for (s in c) s in r && (n[c[s]] = r[s]);
        while ("*" === l[0]) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in u)
                if (u[s] && u[s].test(o)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in r) a = l[0];
        else {
            for (s in r) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : t
    }

    function Fn(e, t) {
        var n, r, i, o, a = {}, s = 0,
            u = e.dataTypes.slice(),
            l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1])
            for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
        for (; r = u[++s];)
            if ("*" !== r) {
                if ("*" !== l && l !== r) {
                    if (i = a[l + " " + r] || a["* " + r], !i)
                        for (n in a)
                            if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
                                i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
                                break
                            }
                    if (i !== !0)
                        if (i && e["throws"]) t = i(t);
                        else try {
                            t = i(t)
                        } catch (c) {
                            return {
                                state: "parsererror",
                                error: i ? c : "No conversion from " + l + " to " + r
                            }
                        }
                }
                l = r
            }
        return {
            state: "success",
            data: t
        }
    }
    b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return b.globalEval(e), e
            }
        }
    }), b.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), b.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = o.head || b("head")[0] || o.documentElement;
            return {
                send: function (t, i) {
                    n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var On = [],
        Bn = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = On.pop() || b.expando + "_" + vn++;
            return this[e] = !0, e
        }
    }), b.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, a, s, u = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || b.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, On.push(o)), s && b.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0,
        $n = e.ActiveXObject && function () {
            var e;
            for (e in Pn) Pn[e](t, !0)
        };

    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    b.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && In() || zn()
    } : In, Rn = b.ajaxSettings.xhr(), b.support.cors = !! Rn && "withCredentials" in Rn, Rn = b.support.ajax = !! Rn, Rn && b.ajaxTransport(function (n) {
        if (!n.crossDomain || b.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) u.setRequestHeader(s, i[s])
                    } catch (l) {}
                    u.send(n.hasContent && n.data || null), r = function (e, i) {
                        var s, l, c, p;
                        try {
                            if (r && (i || 4 === u.readyState))
                                if (r = t, a && (u.onreadystatechange = b.noop, $n && delete Pn[a]), i) 4 !== u.readyState && u.abort();
                                else {
                                    p = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (p.text = u.responseText);
                                    try {
                                        c = u.statusText
                                    } catch (f) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, l)
                    }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, b(e).unload($n)), Pn[a] = r), u.onreadystatechange = r) : r()
                },
                abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
        Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/,
        Gn = [nr],
        Qn = {
            "*": [
                function (e, t) {
                    var n, r, i = this.createTween(e, t),
                        o = Yn.exec(t),
                        a = i.cur(),
                        s = +a || 0,
                        u = 1,
                        l = 20;
                    if (o) {
                        if (n = +o[2], r = o[3] || (b.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                            s = b.css(i.elem, e, !0) || n || 1;
                            do u = u || ".5", s /= u, b.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l)
                        }
                        i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
                    }
                    return i
                }
            ]
        };

    function Kn() {
        return setTimeout(function () {
            Xn = t
        }), Xn = b.now()
    }

    function Zn(e, t) {
        b.each(t, function (t, n) {
            var r = (Qn[t] || []).concat(Qn["*"]),
                i = 0,
                o = r.length;
            for (; o > i; i++)
                if (r[i].call(e, t, n)) return
        })
    }

    function er(e, t, n) {
        var r, i, o = 0,
            a = Gn.length,
            s = b.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (i) return !1;
                var t = Xn || Kn(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    r = n / l.duration || 0,
                    o = 1 - r,
                    a = 0,
                    u = l.tweens.length;
                for (; u > a; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
            }, l = s.promise({
                elem: e,
                props: b.extend({}, t),
                opts: b.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Kn(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (tr(c, l.opts.specialEasing); a > o; o++)
            if (r = Gn[o].call(l, e, c, l.opts)) return r;
        return Zn(l, c), b.isFunction(l.opts.start) && l.opts.start.call(e, l), b.fx.timer(b.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for (i in e)
            if (r = b.camelCase(i), o = t[r], n = e[i], b.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = b.cssHooks[r], a && "expand" in a) {
                n = a.expand(n), delete e[r];
                for (i in n) i in e || (e[i] = n[i], t[i] = o)
            } else t[r] = o
    }
    b.Animation = b.extend(er, {
        tweener: function (e, t) {
            b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });

    function nr(e, t, n) {
        var r, i, o, a, s, u, l, c, p, f = this,
            d = e.style,
            h = {}, g = [],
            m = e.nodeType && nn(e);
        n.queue || (c = b._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, p = c.empty.fire, c.empty.fire = function () {
            c.unqueued || p()
        }), c.unqueued++, f.always(function () {
            f.always(function () {
                c.unqueued--, b.queue(e, "fx").length || c.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", b.support.shrinkWrapBlocks || f.always(function () {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (a = t[i], Vn.exec(a)) {
                if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) continue;
                g.push(i)
            }
        if (o = g.length) {
            s = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? b(e).show() : f.done(function () {
                b(e).hide()
            }), f.done(function () {
                var t;
                b._removeData(e, "fxshow");
                for (t in h) b.style(e, t, h[t])
            });
            for (i = 0; o > i; i++) r = g[i], l = f.createTween(r, m ? s[r] : 0), h[r] = s[r] || b.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }
    b.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (b.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, b.each(["toggle", "show", "hide"], function (e, t) {
        var n = b.fn[t];
        b.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), b.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = b.isEmptyObject(e),
                o = b.speed(t, n, r),
                a = function () {
                    var t = er(this, b.extend({}, e), o);
                    a.finish = function () {
                        t.stop(!0)
                    }, (i || b._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = b.timers,
                    a = b._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && b.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = b._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = b.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });

    function ir(e, t) {
        var n, r = {
                height: e
            }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    b.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        b.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), b.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? b.extend({}, e) : {
            complete: n || !n && t || b.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !b.isFunction(t) && t
        };
        return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue)
        }, r
    }, b.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function () {
        var e, n = b.timers,
            r = 0;
        for (Xn = b.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || b.fx.stop(), Xn = t
    }, b.fx.timer = function (e) {
        e() && b.timers.push(e) && b.fx.start()
    }, b.fx.interval = 13, b.fx.start = function () {
        Un || (Un = setInterval(b.fx.tick, b.fx.interval))
    }, b.fx.stop = function () {
        clearInterval(Un), Un = null
    }, b.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function (e) {
        return b.grep(b.timers, function (t) {
            return e === t.elem
        }).length
    }), b.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            b.offset.setOffset(this, e, t)
        });
        var n, r, o = {
                top: 0,
                left: 0
            }, a = this[0],
            s = a && a.ownerDocument;
        if (s) return n = s.documentElement, b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
            top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o
    }, b.offset = {
        setOffset: function (e, t, n) {
            var r = b.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = b(e),
                o = i.offset(),
                a = b.css(e, "top"),
                s = b.css(e, "left"),
                u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > -1,
                l = {}, c = {}, p, f;
            u ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), b.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (l.top = t.top - o.top + p), null != t.left && (l.left = t.left - o.left + f), "using" in t ? t.using.call(e, l) : i.css(l)
        }
    }, b.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    }, r = this[0];
                return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - b.css(r, "marginTop", !0),
                    left: t.left - n.left - b.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || o.documentElement;
                while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) e = e.offsetParent;
                return e || o.documentElement
            })
        }
    }), b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var r = /Y/.test(n);
        b.fn[e] = function (i) {
            return b.access(this, function (e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o : b(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    });

    function or(e) {
        return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    b.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        b.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (r, i) {
            b.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return b.access(this, function (n, r, i) {
                    var o;
                    return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), e.jQuery = e.$ = b, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return b
    })
})(window);
/*! jQuery Migrate v1.1.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0),

function (e, t, n) {
    function r(n) {
        o[n] || (o[n] = !0, e.migrateWarnings.push(n), t.console && console.warn && !e.migrateMute && (console.warn("JQMIGRATE: " + n), e.migrateTrace && console.trace && console.trace()))
    }

    function a(t, a, o, i) {
        if (Object.defineProperty) try {
            return Object.defineProperty(t, a, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return r(i), o
                },
                set: function (e) {
                    r(i), o = e
                }
            }), n
        } catch (s) {}
        e._definePropertyBroken = !0, t[a] = o
    }
    var o = {};
    e.migrateWarnings = [], !e.migrateMute && t.console && console.log && console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function () {
        o = {}, e.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
    var i = e("<input/>", {
        size: 1
    }).attr("size") && e.attrFn,
        s = e.attr,
        u = e.attrHooks.value && e.attrHooks.value.get || function () {
            return null
        }, c = e.attrHooks.value && e.attrHooks.value.set || function () {
            return n
        }, l = /^(?:input|button)$/i,
        d = /^[238]$/,
        p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        f = /^(?:checked|selected)$/i;
    a(e, "attrFn", i || {}, "jQuery.attrFn is deprecated"), e.attr = function (t, a, o, u) {
        var c = a.toLowerCase(),
            g = t && t.nodeType;
        return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(g) && (i ? a in i : e.isFunction(e.fn[a]))) ? e(t)[a](o) : ("type" === a && o !== n && l.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = {
            get: function (t, r) {
                var a, o = e.prop(t, r);
                return o === !0 || "boolean" != typeof o && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n
            },
            set: function (t, n, r) {
                var a;
                return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r
            }
        }, f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, o))
    }, e.attrHooks.value = {
        get: function (e, t) {
            var n = (e.nodeName || "").toLowerCase();
            return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
        },
        set: function (e, t) {
            var a = (e.nodeName || "").toLowerCase();
            return "button" === a ? c.apply(this, arguments) : ("input" !== a && "option" !== a && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n)
        }
    };
    var g, h, v = e.fn.init,
        m = e.parseJSON,
        y = /^(?:[^<]*(<[\w\W]+>)[^>]*|#([\w\-]*))$/;
    e.fn.init = function (t, n, a) {
        var o;
        return t && "string" == typeof t && !e.isPlainObject(n) && (o = y.exec(t)) && o[1] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(e.trim(t), n, !0), n, a) : v.apply(this, arguments)
    }, e.fn.init.prototype = e.fn, e.parseJSON = function (e) {
        return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
    }, e.uaMatch = function (e) {
        e = e.toLowerCase();
        var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
        return {
            browser: t[1] || "",
            version: t[2] || "0"
        }
    }, e.browser || (g = e.uaMatch(navigator.userAgent), h = {}, g.browser && (h[g.browser] = !0, h.version = g.version), h.chrome ? h.webkit = !0 : h.webkit && (h.safari = !0), e.browser = h), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function () {
        function t(e, n) {
            return new t.fn.init(e, n)
        }
        e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function (r, a) {
            return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n)
        }, t.fn.init.prototype = t.fn;
        var n = t(document);
        return r("jQuery.sub() is deprecated"), t
    }, e.ajaxSetup({
        converters: {
            "text json": e.parseJSON
        }
    });
    var b = e.fn.data;
    e.fn.data = function (t) {
        var a, o, i = this[0];
        return !i || "events" !== t || 1 !== arguments.length || (a = e.data(i, t), o = e._data(i, t), a !== n && a !== o || o === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), o)
    };
    var j = /\/(java|ecma)script/i,
        w = e.fn.andSelf || e.fn.addBack;
    e.fn.andSelf = function () {
        return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments)
    }, e.clean || (e.clean = function (t, a, o, i) {
        a = a || document, a = !a.nodeType && a[0] || a, a = a.ownerDocument || a, r("jQuery.clean() is deprecated");
        var s, u, c, l, d = [];
        if (e.merge(d, e.buildFragment(t, a).childNodes), o)
            for (c = function (e) {
                return !e.type || j.test(e.type) ? i ? i.push(e.parentNode ? e.parentNode.removeChild(e) : e) : o.appendChild(e) : n
            }, s = 0; null != (u = d[s]); s++) e.nodeName(u, "script") && c(u) || (o.appendChild(u), u.getElementsByTagName !== n && (l = e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s + 1, 0].concat(l)), s += l.length));
        return d
    });
    var Q = e.event.add,
        x = e.event.remove,
        k = e.event.trigger,
        N = e.fn.toggle,
        C = e.fn.live,
        S = e.fn.die,
        T = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
        M = RegExp("\\b(?:" + T + ")\\b"),
        H = /(?:^|\s)hover(\.\S+|)\b/,
        A = function (t) {
            return "string" != typeof t || e.event.special.hover ? t : (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1"))
        };
    e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function (e, t, n, a, o) {
        e !== document && M.test(t) && r("AJAX events should be attached to document: " + t), Q.call(this, e, A(t || ""), n, a, o)
    }, e.event.remove = function (e, t, n, r, a) {
        x.call(this, e, A(t) || "", n, r, a)
    }, e.fn.error = function () {
        var e = Array.prototype.slice.call(arguments, 0);
        return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
    }, e.fn.toggle = function (t, n) {
        if (!e.isFunction(t) || !e.isFunction(n)) return N.apply(this, arguments);
        r("jQuery.fn.toggle(handler, handler...) is deprecated");
        var a = arguments,
            o = t.guid || e.guid++,
            i = 0,
            s = function (n) {
                var r = (e._data(this, "lastToggle" + t.guid) || 0) % i;
                return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1
            };
        for (s.guid = o; a.length > i;) a[i++].guid = o;
        return this.click(s)
    }, e.fn.live = function (t, n, a) {
        return r("jQuery.fn.live() is deprecated"), C ? C.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this)
    }, e.fn.die = function (t, n) {
        return r("jQuery.fn.die() is deprecated"), S ? S.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
    }, e.event.trigger = function (e, t, n, a) {
        return n || M.test(e) || r("Global events are undocumented and deprecated"), k.call(this, e, t, n || document, a)
    }, e.each(T.split("|"), function (t, n) {
        e.event.special[n] = {
            setup: function () {
                var t = this;
                return t !== document && (e.event.add(document, n + "." + e.guid, function () {
                    e.event.trigger(n, null, t, !0)
                }), e._data(this, n, e.guid++)), !1
            },
            teardown: function () {
                return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
            }
        }
    })
}(jQuery, window);
//@ sourceMappingURL=dist/jquery-migrate.min.map
(function ($, p) {
    var i, m = Array.prototype.slice,
        r = decodeURIComponent,
        a = $.param,
        c, l, v, b = $.bbq = $.bbq || {}, q, u, j, e = $.event.special,
        d = "hashchange",
        A = "querystring",
        D = "fragment",
        y = "elemUrlAttr",
        g = "location",
        k = "href",
        t = "src",
        x = /^.*\?|#.*$/g,
        w = /^.*\#/,
        h, C = {};

    function E(F) {
        return typeof F === "string"
    }

    function B(G) {
        var F = m.call(arguments, 1);
        return function () {
            return G.apply(this, F.concat(m.call(arguments)))
        }
    }

    function n(F) {
        return F.replace(/^[^#]*#?(.*)$/, "$1")
    }

    function o(F) {
        return F.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, "$1")
    }

    function f(H, M, F, I, G) {
        var O, L, K, N, J;
        if (I !== i) {
            K = F.match(H ? /^([^#]*)\#?(.*)$/ : /^([^#?]*)\??([^#]*)(#?.*)/);
            J = K[3] || "";
            if (G === 2 && E(I)) {
                L = I.replace(H ? w : x, "")
            } else {
                N = l(K[2]);
                I = E(I) ? l[H ? D : A](I) : I;
                L = G === 2 ? I : G === 1 ? $.extend({}, I, N) : $.extend({}, N, I);
                L = a(L);
                if (H) {
                    L = L.replace(h, r)
                }
            }
            O = K[1] + (H ? "#" : L || !K[1] ? "?" : "") + L + J
        } else {
            O = M(F !== i ? F : p[g][k])
        }
        return O
    }
    a[A] = B(f, 0, o);
    a[D] = c = B(f, 1, n);
    c.noEscape = function (G) {
        G = G || "";
        var F = $.map(G.split(""), encodeURIComponent);
        h = new RegExp(F.join("|"), "g")
    };
    c.noEscape(",/");
    $.deparam = l = function (I, F) {
        var H = {}, G = {
                "true": !0,
                "false": !1,
                "null": null
            };
        $.each(I.replace(/\+/g, " ").split("&"), function (L, Q) {
            var K = Q.split("="),
                P = r(K[0]),
                J, O = H,
                M = 0,
                R = P.split("]["),
                N = R.length - 1;
            if (/\[/.test(R[0]) && /\]$/.test(R[N])) {
                R[N] = R[N].replace(/\]$/, "");
                R = R.shift().split("[").concat(R);
                N = R.length - 1
            } else {
                N = 0
            } if (K.length === 2) {
                J = r(K[1]);
                if (F) {
                    J = J && !isNaN(J) ? +J : J === "undefined" ? i : G[J] !== i ? G[J] : J
                }
                if (N) {
                    for (; M <= N; M++) {
                        P = R[M] === "" ? O.length : R[M];
                        O = O[P] = M < N ? O[P] || (R[M + 1] && isNaN(R[M + 1]) ? {} : []) : J
                    }
                } else {
                    if ($.isArray(H[P])) {
                        H[P].push(J)
                    } else {
                        if (H[P] !== i) {
                            H[P] = [H[P], J]
                        } else {
                            H[P] = J
                        }
                    }
                }
            } else {
                if (P) {
                    H[P] = F ? i : ""
                }
            }
        });
        return H
    };

    function z(H, F, G) {
        if (F === i || typeof F === "boolean") {
            G = F;
            F = a[H ? D : A]()
        } else {
            F = E(F) ? F.replace(H ? w : x, "") : F
        }
        return l(F, G)
    }
    l[A] = B(z, 0);
    l[D] = v = B(z, 1);
    $[y] || ($[y] = function (F) {
        return $.extend(C, F)
    })({
        a: k,
        base: k,
        iframe: t,
        img: t,
        input: t,
        form: "action",
        link: k,
        script: t
    });
    j = $[y];

    function s(I, G, H, F) {
        if (!E(H) && typeof H !== "object") {
            F = H;
            H = G;
            G = i
        }
        return this.each(function () {
            var L = $(this),
                J = G || j()[(this.nodeName || "").toLowerCase()] || "",
                K = J && L.attr(J) || "";
            L.attr(J, a[I](K, H, F))
        })
    }
    $.fn[A] = B(s, A);
    $.fn[D] = B(s, D);
    b.pushState = q = function (I, F) {
        if (E(I) && /^#/.test(I) && F === i) {
            F = 2
        }
        var H = I !== i,
            G = c(p[g][k], H ? I : {}, H ? F : 2);
        p[g][k] = G + (/#/.test(G) ? "" : "#")
    };
    b.getState = u = function (F, G) {
        return F === i || typeof F === "boolean" ? v(F) : v(G)[F]
    };
    b.removeState = function (F) {
        var G = {};
        if (F !== i) {
            G = u();
            $.each($.isArray(F) ? F : arguments, function (I, H) {
                delete G[H]
            })
        }
        q(G, 2)
    };
    e[d] = $.extend(e[d], {
        add: function (F) {
            var H;

            function G(J) {
                var I = J[D] = c();
                J.getState = function (K, L) {
                    return K === i || typeof K === "boolean" ? l(I, K) : l(I, L)[K]
                };
                H.apply(this, arguments)
            }
            if ($.isFunction(F)) {
                H = F;
                return G
            } else {
                H = F.handler;
                F.handler = G
            }
        }
    })
})(jQuery, this);
(function ($, i, b) {
    var j, k = $.event.special,
        c = "location",
        d = "hashchange",
        l = "href",
        f = $.browser,
        g = document.documentMode,
        h = f.msie && (g === b || g < 8),
        e = "on" + d in i && !h;

    function a(m) {
        m = m || i[c][l];
        return m.replace(/^[^#]*#?(.*)$/, "$1")
    }
    $[d + "Delay"] = 100;
    k[d] = $.extend(k[d], {
        setup: function () {
            if (e) {
                return false
            }
            $(j.start)
        },
        teardown: function () {
            if (e) {
                return false
            }
            $(j.stop)
        }
    });
    j = (function () {
        var m = {}, r, n, o, q;

        function p() {
            o = q = function (s) {
                return s
            };
            if (h) {
                n = $('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow;
                q = function () {
                    return a(n.document[c][l])
                };
                o = function (u, s) {
                    if (u !== s) {
                        var t = n.document;
                        t.open().close();
                        t[c].hash = "#" + u
                    }
                };
                o(a())
            }
        }
        m.start = function () {
            if (r) {
                return
            }
            var t = a();
            o || p();
            (function s() {
                var v = a(),
                    u = q(t);
                if (v !== t) {
                    o(t = v, u);
                    $(i).trigger(d)
                } else {
                    if (u !== t) {
                        i[c][l] = i[c][l].replace(/#.*/, "") + "#" + u
                    }
                }
                r = setTimeout(s, $[d + "Delay"])
            })()
        };
        m.stop = function () {
            if (!n) {
                r && clearTimeout(r);
                r = 0
            }
        };
        return m
    })()
})(jQuery, this);
(function (a) {
    function u(f, B) {
        function g(a, b, e) {
            a.stopPropagation();
            a.preventDefault();
            if (!ma && !p(b) && !b.hasClass("dwa")) {
                ma = !0;
                var c = b.find(".dw-ul");
                l(c);
                clearInterval(va);
                va = setInterval(function () {
                    e(c)
                }, I.delay);
                e(c)
            }
        }

        function p(b) {
            return a.isArray(I.readonly) ? (b = a(".dwwl", v).index(b), I.readonly[b]) : I.readonly
        }

        function D(b) {
            var e = '<div class="dw-bf">',
                b = xa[b],
                b = b.values ? b : F(b),
                c = 1,
                l = b.labels || [],
                f = b.values,
                k = b.keys || f;
            a.each(f, function (a, b) {
                0 == c % 20 && (e += '</div><div class="dw-bf">');
                e += '<div role="option" aria-selected="false" class="dw-li dw-v" data-val="' +
                    k[a] + '"' + (l[a] ? ' aria-label="' + l[a] + '"' : "") + ' style="height:' + P + "px;line-height:" + P + 'px;"><div class="dw-i">' + b + "</div></div>";
                c++
            });
            return e += "</div>"
        }

        function l(b) {
            ga = a(".dw-li", b).index(a(".dw-v", b).eq(0));
            fa = a(".dw-li", b).index(a(".dw-v", b).eq(-1));
            ha = a(".dw-ul", v).index(b)
        }

        function b(a) {
            var b = I.headerText;
            return b ? "function" === typeof b ? b.call(ia, a) : b.replace(/\{value\}/i, a) : ""
        }

        function y() {
            G.temp = G.values ? G.values.slice(0) : I.parseValue(ba.val() || "", G);
            U()
        }

        function A(b) {
            var e = window.getComputedStyle ?
                getComputedStyle(b[0]) : b[0].style,
                c;
            m ? (a.each(["t", "webkitT", "MozT", "OT", "msT"], function (a, b) {
                if (void 0 !== e[b + "ransform"]) return c = e[b + "ransform"], !1
            }), c = c.split(")")[0].split(", "), b = c[13] || c[5]) : b = e.top.replace("px", "");
            return Math.round(S - b / P)
        }

        function L(a, b) {
            clearTimeout(pa[b]);
            delete pa[b];
            a.closest(".dwwl").removeClass("dwa")
        }

        function q(a, b, e, c, l) {
            var f = (S - e) * P,
                k = a[0].style;
            f == wa[b] && pa[b] || (c && f != wa[b] && N("onAnimStart", [v, b, c]), wa[b] = f, k[x + "Transition"] = "all " + (c ? c.toFixed(3) : 0) + "s ease-out",
                m ? k[x + "Transform"] = "translate3d(0," + f + "px,0)" : k.top = f + "px", pa[b] && L(a, b), c && l && (a.closest(".dwwl").addClass("dwa"), pa[b] = setTimeout(function () {
                    L(a, b)
                }, 1E3 * c)), sa[b] = e)
        }

        function u(e, c, l, f, k) {
            !1 !== N("validate", [v, c, e]) && (a(".dw-ul", v).each(function (b) {
                var l = a(this),
                    B = a('.dw-li[data-val="' + G.temp[b] + '"]', l),
                    A = a(".dw-li", l),
                    z = A.index(B),
                    g = A.length,
                    S = b == c || void 0 === c;
                if (!B.hasClass("dw-v")) {
                    for (var v = B, j = 0, J = 0; 0 <= z - j && !v.hasClass("dw-v");) j++, v = A.eq(z - j);
                    for (; z + J < g && !B.hasClass("dw-v");) J++, B = A.eq(z + J);
                    (J < j && J && 2 !== f || !j || 0 > z - j || 1 == f) && B.hasClass("dw-v") ? z += J : (B = v, z -= j)
                }
                if (!B.hasClass("dw-sel") || S) G.temp[b] = B.attr("data-val"), a(".dw-sel", l).removeClass("dw-sel"), I.multiple || (a(".dw-sel", l).removeAttr("aria-selected"), B.attr("aria-selected", "true")), B.addClass("dw-sel"), q(l, b, z, S ? e : 0.1, S ? k : !1)
            }), Q = I.formatResult(G.temp), "inline" == I.display ? U(l, 0, !0) : a(".dwv", v).html(b(Q)), l && N("onChange", [Q]))
        }

        function N(b, e) {
            var c;
            e.push(G);
            a.each([$.defaults, ya, B], function (a, l) {
                l[b] && (c = l[b].apply(ia, e))
            });
            return c
        }

        function T(b, e, c, l, f) {
            var e = Math.max(ga, Math.min(e, fa)),
                B = a(".dw-li", b).eq(e),
                k = void 0 === f ? e : f,
                z = void 0 !== f,
                A = ha,
                g = l ? e == k ? 0.1 : Math.abs((e - k) * I.timeUnit) : 0;
            G.temp[A] = B.attr("data-val");
            q(b, A, e, g, z);
            setTimeout(function () {
                u(g, A, !0, c, z)
            }, 10)
        }

        function Z(a) {
            var b = sa[ha] + 1;
            T(a, b > fa ? ga : b, 1, !0)
        }

        function V(a) {
            var b = sa[ha] - 1;
            T(a, b < ga ? fa : b, 2, !0)
        }

        function U(a, b, e, c, l) {
            na && !e && u(b, void 0, l);
            Q = I.formatResult(G.temp);
            c || (G.values = G.temp.slice(0), G.val = Q);
            a && qa && (za = !0, ba.val(Q).change())
        }
        var S, P, Q, v, R, z, ka, ea, W,
            ja, aa, ra, $, ca, ma, ta, Aa, oa, Ea, la, ua, ga, fa, da, ha, va, Ba, za, Ca, G = this,
            Da = a.mobiscroll,
            ia = f,
            ba = a(ia),
            I = s({}, C),
            ya = {}, pa = {}, sa = {}, wa = {}, xa = [],
            qa = ba.is("input"),
            na = !1,
            Ia = function (b) {
                j(b) && !r && !p(this) && !ma && (b.preventDefault(), r = !0, ta = "clickpick" != I.mode, da = a(".dw-ul", this), l(da), ua = (Aa = void 0 !== pa[ha]) ? A(da) : sa[ha], oa = h(b, "Y"), Ea = new Date, la = oa, q(da, ha, ua, 0.0010), ta && da.closest(".dwwl").addClass("dwa"), a(document).on(E, Fa).on(t, Ga))
            }, Fa = function (a) {
                ta && (a.preventDefault(), a.stopPropagation(), la = h(a, "Y"),
                    q(da, ha, Math.max(ga - 1, Math.min(ua + (oa - la) / P, fa + 1))));
                Aa = !0
            }, Ga = function () {
                var b = new Date - Ea,
                    e = Math.max(ga - 1, Math.min(ua + (oa - la) / P, fa + 1)),
                    c, l = da.offset().top;
                300 > b ? (b = (la - oa) / b, c = b * b / I.speedUnit, 0 > la - oa && (c = -c)) : c = la - oa;
                b = Math.round(ua - c / P);
                if (!c && !Aa) {
                    var l = Math.floor((la - l) / P),
                        f = a(".dw-li", da).eq(l);
                    c = ta;
                    !1 !== N("onValueTap", [f]) ? b = l : c = !0;
                    c && (f.addClass("dw-hl"), setTimeout(function () {
                        f.removeClass("dw-hl")
                    }, 200))
                }
                ta && T(da, b, 0, !0, Math.round(e));
                r = !1;
                da = null;
                a(document).off(E, Fa).off(t, Ga)
            }, Ja = function (b) {
                var e =
                    a(this);
                a(document).on(t, Ha);
                e.hasClass("dwb-d") || e.addClass("dwb-a");
                setTimeout(function () {
                    e.blur()
                }, 10);
                e.hasClass("dwwb") && j(b) && g(b, e.closest(".dwwl"), e.hasClass("dwwbp") ? Z : V)
            }, Ha = function () {
                ma && (clearInterval(va), ma = !1);
                a(document).off(t, Ha);
                a(".dwb-a", v).removeClass("dwb-a")
            }, Ka = function (b) {
                38 == b.keyCode ? g(b, a(this), V) : 40 == b.keyCode && g(b, a(this), Z)
            }, La = function () {
                ma && (clearInterval(va), ma = !1)
            }, Ma = function (b) {
                if (!p(this)) {
                    b.preventDefault();
                    var b = b.originalEvent || b,
                        b = b.wheelDelta ? b.wheelDelta /
                            120 : b.detail ? -b.detail / 3 : 0,
                        e = a(".dw-ul", this);
                    l(e);
                    T(e, Math.round(sa[ha] - b), 0 > b ? 1 : 2)
                }
            };
        G.position = function (b) {
            if (!("inline" == I.display || R === a(window).width() && ka === a(window).height() && b || !1 === N("onPosition", [v]))) {
                var e, c, l, f, B, k, A, g, S, j = 0,
                    J = 0,
                    b = a(window).scrollTop();
                f = a(".dwwr", v);
                var m = a(".dw", v),
                    h = {};
                B = void 0 === I.anchor ? ba : I.anchor;
                R = a(window).width();
                ka = a(window).height();
                z = (z = window.innerHeight) || ka;
                /modal|bubble/.test(I.display) && (a(".dwc", v).each(function () {
                    e = a(this).outerWidth(!0);
                    j += e;
                    J =
                        e > J ? e : J
                }), e = j > R ? J : j, f.width(e).css("white-space", j > R ? "" : "nowrap"));
                ea = m.outerWidth();
                W = m.outerHeight(!0);
                ja = W <= z && ea <= R;
                "modal" == I.display ? (c = (R - ea) / 2, l = b + (z - W) / 2) : "bubble" == I.display ? (S = !0, g = a(".dw-arrw-i", v), c = B.offset(), k = c.top, A = c.left, f = B.outerWidth(), B = B.outerHeight(), c = A - (m.outerWidth(!0) - f) / 2, c = c > R - ea ? R - (ea + 20) : c, c = 0 <= c ? c : 20, l = k - W, l < b || k > b + z ? (m.removeClass("dw-bubble-top").addClass("dw-bubble-bottom"), l = k + B) : m.removeClass("dw-bubble-bottom").addClass("dw-bubble-top"), g = g.outerWidth(), f = A +
                    f / 2 - (c + (ea - g) / 2), a(".dw-arr", v).css({
                        left: Math.max(0, Math.min(f, g))
                    })) : (h.width = "100%", "top" == I.display ? l = b : "bottom" == I.display && (l = b + z - W));
                h.top = 0 > l ? 0 : l;
                h.left = c;
                m.css(h);
                a(".dw-persp", v).height(0).height(l + W > a(document).height() ? l + W : a(document).height());
                S && (l + W > b + z || k > b + z) && a(window).scrollTop(l + W - z)
            }
        };
        G.enable = function () {
            I.disabled = !1;
            qa && ba.prop("disabled", !1)
        };
        G.disable = function () {
            I.disabled = !0;
            qa && ba.prop("disabled", !0)
        };
        G.setValue = function (b, e, c, l, f) {
            G.temp = a.isArray(b) ? b.slice(0) : I.parseValue.call(ia,
                b + "", G);
            U(e, c, !1, l, f)
        };
        G.getValue = function () {
            return G.values
        };
        G.getValues = function () {
            var a = [],
                b;
            for (b in G._selectedValues) a.push(G._selectedValues[b]);
            return a
        };
        G.changeWheel = function (b, e, c) {
            if (v) {
                var l = 0,
                    f = b.length;
                a.each(I.wheels, function (B, k) {
                    a.each(k, function (B, k) {
                        if (-1 < a.inArray(l, b) && (xa[l] = k, a(".dw-ul", v).eq(l).html(D(l)), f--, !f)) return G.position(), u(e, void 0, c), !1;
                        l++
                    });
                    if (!f) return !1
                })
            }
        };
        G.isVisible = function () {
            return na
        };
        G.tap = function (a, b) {
            var e, c;
            if (I.tap) a.on("touchstart.dw mousedown.dw",
                function (a) {
                    a.preventDefault();
                    e = h(a, "X");
                    c = h(a, "Y")
                }).on("touchend.dw", function (a) {
                20 > Math.abs(h(a, "X") - e) && 20 > Math.abs(h(a, "Y") - c) && b.call(this, a);
                n = !0;
                setTimeout(function () {
                    n = !1
                }, 300)
            });
            a.on("click.dw", function (a) {
                n || b.call(this, a);
                a.preventDefault()
            })
        };
        G.show = function (b) {
            if (I.disabled || na) return !1;
            "top" == I.display && (aa = "slidedown");
            "bottom" == I.display && (aa = "slideup");
            y();
            N("onBeforeShow", []);
            var e, c = 0,
                l = "";
            aa && !b && (l = "dw-" + aa + " dw-in");
            var f = '<div role="dialog" class="' + I.theme + " dw-" + I.display +
                (o ? " dw" + o : "") + '">' + ("inline" == I.display ? '<div class="dw dwbg dwi"><div class="dwwr">' : '<div class="dw-persp"><div class="dwo"></div><div class="dw dwbg ' + l + '"><div class="dw-arrw"><div class="dw-arrw-i"><div class="dw-arr"></div></div></div><div class="dwwr"><div aria-live="assertive" class="dwv' + (I.headerText ? "" : " dw-hidden") + '"></div>') + '<div class="dwcc">';
            a.each(I.wheels, function (b, l) {
                f += '<div class="dwc' + ("scroller" != I.mode ? " dwpm" : " dwsc") + (I.showLabel ? "" : " dwhl") + '"><div class="dwwc dwrc"><table cellpadding="0" cellspacing="0"><tr>';
                a.each(l, function (a, b) {
                    xa[c] = b;
                    e = void 0 !== b.label ? b.label : a;
                    f += '<td><div class="dwwl dwrc dwwl' + c + '">' + ("scroller" != I.mode ? '<a href="#" tabindex="-1" class="dwb-e dwwb dwwbp" style="height:' + P + "px;line-height:" + P + 'px;"><span>+</span></a><a href="#" tabindex="-1" class="dwb-e dwwb dwwbm" style="height:' + P + "px;line-height:" + P + 'px;"><span>&ndash;</span></a>' : "") + '<div class="dwl">' + e + '</div><div tabindex="0" aria-live="off" aria-label="' + e + '" role="listbox" class="dwww"><div class="dww" style="height:' +
                        I.rows * P + "px;min-width:" + I.width + 'px;"><div class="dw-ul">';
                    f += D(c);
                    f += '</div><div class="dwwol"></div></div><div class="dwwo"></div></div><div class="dwwol"></div></div></td>';
                    c++
                });
                f += "</tr></table></div></div>"
            });
            f += "</div>" + ("inline" != I.display ? '<div class="dwbc' + (I.button3 ? " dwbc-p" : "") + '"><span class="dwbw dwb-s"><a href="#" class="dwb dwb-e" role="button">' + I.setText + "</a></span>" + (I.button3 ? '<span class="dwbw dwb-n"><a href="#" class="dwb dwb-e" role="button">' + I.button3Text + "</a></span>" :
                "") + '<span class="dwbw dwb-c"><a href="#" class="dwb dwb-e" role="button">' + I.cancelText + "</a></span></div></div>" : "") + "</div></div></div>";
            v = a(f);
            u();
            N("onMarkupReady", [v]);
            "inline" != I.display ? (v.appendTo("body"), aa && !b && (v.addClass("dw-trans"), setTimeout(function () {
                v.removeClass("dw-trans").find(".dw").removeClass(l)
            }, 350))) : ba.is("div") ? ba.html(v) : v.insertAfter(ba);
            N("onMarkupInserted", [v]);
            na = !0;
            $.init(v, G);
            if ("inline" != I.display) {
                G.tap(a(".dwb-s .dwb", v), function () {
                    G.select()
                });
                G.tap(a(".dwb-c .dwb",
                    v), function () {
                    G.cancel()
                });
                I.button3 && G.tap(a(".dwb-n .dwb", v), function (a) {
                    I.button3.call(this, a, G)
                });
                a(window).on("keydown.dw", function (a) {
                    a.keyCode == 13 ? G.select() : a.keyCode == 27 && G.cancel()
                });
                if (I.scrollLock) v.on("touchmove touchstart", function (a) {
                    ja && a.preventDefault()
                });
                a("input,select,button").each(function () {
                    if (!this.disabled) {
                        a(this).attr("autocomplete") && a(this).data("autocomplete", a(this).attr("autocomplete"));
                        a(this).addClass("dwtd").prop("disabled", true).attr("autocomplete", "off")
                    }
                });
                G.position();
                a(window).on("orientationchange.dw resize.dw scroll.dw", function (a) {
                    clearTimeout(ra);
                    ra = setTimeout(function () {
                        var b = a.type == "scroll";
                        (b && ja || !b) && G.position(!b)
                    }, 100)
                });
                G.alert(I.ariaDesc)
            }
            v.on("DOMMouseScroll mousewheel", ".dwwl", Ma).on(H, ".dwwl", Ia).on("keydown", ".dwwl", Ka).on("keyup", ".dwwl", La).on(H, ".dwb-e", Ja).on("click", ".dwb-e", function (a) {
                a.preventDefault()
            }).on("keydown", ".dwb-e", function (b) {
                if (b.keyCode == 32) {
                    b.preventDefault();
                    b.stopPropagation();
                    a(this).click()
                }
            });
            N("onShow", [v, Q])
        };
        G.hide =
            function (b, e) {
                if (!na || !1 === N("onClose", [Q, e])) return !1;
                a(".dwtd").each(function () {
                    a(this).prop("disabled", !1).removeClass("dwtd");
                    a(this).data("autocomplete") ? a(this).attr("autocomplete", a(this).data("autocomplete")) : a(this).removeAttr("autocomplete")
                });
                v && ("inline" != I.display && aa && !b ? (v.addClass("dw-trans").find(".dw").addClass("dw-" + aa + " dw-out"), setTimeout(function () {
                    v.remove();
                    v = null
                }, 350)) : (v.remove(), v = null), a(window).off(".dw"));
                wa = {};
                na = !1;
                Ca = !0;
                ba.focus()
        };
        G.select = function () {
            !1 !== G.hide(!1,
                "set") && (U(!0, 0, !0), N("onSelect", [G.val]))
        };
        G.alert = function (a) {
            k.text(a);
            clearTimeout(e);
            e = setTimeout(function () {
                k.text("")
            }, 5E3)
        };
        G.cancel = function () {
            !1 !== G.hide(!1, "cancel") && N("onCancel", [G.val])
        };
        G.init = function (a) {
            $ = s({
                defaults: {},
                init: c
            }, Da.themes[a.theme || I.theme]);
            ca = Da.i18n[a.lang || I.lang];
            s(B, a);
            s(I, $.defaults, ca, B);
            G.settings = I;
            ba.off(".dw");
            if (a = Da.presets[I.preset]) ya = a.call(ia, G), s(I, ya, B);
            S = Math.floor(I.rows / 2);
            P = I.height;
            aa = I.animate;
            na && G.hide();
            if ("inline" == I.display) G.show();
            else {
                y();
                if (qa && (void 0 === Ba && (Ba = ia.readOnly), ia.readOnly = !0, I.showOnFocus)) ba.on("focus.dw", function () {
                    Ca || G.show();
                    Ca = false
                });
                if (I.showOnTap) ba.on("click.dw", function () {
                    G.show()
                })
            } if (qa) ba.on("change.dw", function () {
                za || G.setValue(ba.val(), !1, 0.2);
                za = !1
            })
        };
        G.trigger = function (a, b) {
            return N(a, b)
        };
        G.option = function (a, b) {
            var e = {};
            "object" === typeof a ? e = a : e[a] = b;
            G.init(e)
        };
        G.destroy = function () {
            G.hide();
            ba.off(".dw");
            delete w[ia.id];
            qa && (ia.readOnly = Ba);
            N("onDestroy", [])
        };
        G.getInst = function () {
            return G
        };
        G.values =
            null;
        G.val = null;
        G.temp = null;
        G._selectedValues = {};
        G.init(B)
    }

    function g(a) {
        for (var e in a)
            if (void 0 !== p[a[e]]) return !0;
        return !1
    }

    function j(a) {
        if ("touchstart" === a.type) q = !0;
        else if (q) return q = !1;
        return !0
    }

    function h(a, e) {
        var c = a.originalEvent,
            f = a.changedTouches;
        return f || c && c.changedTouches ? c ? c.changedTouches[0]["page" + e] : f[0]["page" + e] : a["page" + e]
    }

    function F(e) {
        var c = {
            values: [],
            keys: []
        };
        a.each(e, function (a, e) {
            c.keys.push(a);
            c.values.push(e)
        });
        return c
    }

    function D(a, e, c) {
        var k = a;
        if ("object" === typeof e) return a.each(function () {
            this.id ||
                (f += 1, this.id = "mobiscroll" + f);
            w[this.id] = new u(this, e)
        });
        "string" === typeof e && a.each(function () {
            var a;
            if ((a = w[this.id]) && a[e])
                if (a = a[e].apply(this, Array.prototype.slice.call(c, 1)), void 0 !== a) return k = a, !1
        });
        return k
    }
    var r, n, q, e, k, f = (new Date).getTime(),
        w = {}, c = function () {}, p = document.createElement("modernizr").style,
        m = g(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]),
        o = function () {
            var a = ["Webkit", "Moz", "O", "ms"],
                e;
            for (e in a)
                if (g([a[e] + "Transform"])) return "-" +
                    a[e].toLowerCase();
            return ""
        }(),
        x = o.replace(/^\-/, "").replace("moz", "Moz"),
        s = a.extend,
        H = "touchstart mousedown",
        E = "touchmove mousemove",
        t = "touchend mouseup",
        C = {
            width: 70,
            height: 40,
            rows: 3,
            delay: 300,
            disabled: !1,
            readonly: !1,
            showOnFocus: !0,
            showOnTap: !0,
            showLabel: !0,
            wheels: [],
            theme: "",
            headerText: "{value}",
            display: "modal",
            mode: "scroller",
            preset: "",
            lang: "en-US",
            setText: "Set",
            cancelText: "Cancel",
            ariaDesc: "Select a value",
            scrollLock: !0,
            tap: !0,
            speedUnit: 0.0012,
            timeUnit: 0.1,
            formatResult: function (a) {
                return a.join(" ")
            },
            parseValue: function (e, c) {
                var f = e.split(" "),
                    k = [],
                    g = 0,
                    l;
                a.each(c.settings.wheels, function (b, e) {
                    a.each(e, function (b, e) {
                        e = e.values ? e : F(e);
                        l = e.keys || e.values; - 1 !== a.inArray(f[g], l) ? k.push(f[g]) : k.push(l[0]);
                        g++
                    })
                });
                return k
            }
        };
    a(function () {
        k = a('<div class="dw-hidden" role="alert"></div>').appendTo("body")
    });
    a(document).on("mouseover mouseup mousedown click", function (a) {
        if (n) return a.stopPropagation(), a.preventDefault(), !1
    });
    a.fn.mobiscroll = function (e) {
        s(this, a.mobiscroll.shorts);
        return D(this, e, arguments)
    };
    a.mobiscroll = a.mobiscroll || {
        setDefaults: function (a) {
            s(C, a)
        },
        presetShort: function (a) {
            this.shorts[a] = function (e) {
                return D(this, s(e, {
                    preset: a
                }), arguments)
            }
        },
        util: {
            prefix: o,
            has3d: m
        },
        shorts: {},
        presets: {},
        themes: {},
        i18n: {}
    };
    a.scroller = a.scroller || a.mobiscroll;
    a.fn.scroller = a.fn.scroller || a.fn.mobiscroll
})(jQuery);
(function (a) {
    var u = a.mobiscroll,
        g = new Date,
        j = {
            dateFormat: "mm/dd/yy",
            dateOrder: "mmddy",
            timeWheels: "hhiiA",
            timeFormat: "hh:ii A",
            startYear: g.getFullYear() - 100,
            endYear: g.getFullYear() + 1,
            monthNames: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
            monthNamesShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            dayNames: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
            dayNamesShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
            shortYearCutoff: "+10",
            monthText: "Month",
            dayText: "Day",
            yearText: "Year",
            hourText: "Hours",
            minuteText: "Minutes",
            secText: "Seconds",
            ampmText: "&nbsp;",
            nowText: "Now",
            showNow: !1,
            stepHour: 1,
            stepMinute: 1,
            stepSecond: 1,
            separator: " "
        }, h = function (g) {
            function h(a, b, e) {
                return void 0 !== t[b] ? +a[t[b]] : void 0 !== e ? e : y[C[b]] ? y[C[b]]() : C[b](y)
            }

            function r(a, b, e, c) {
                a.push({
                    values: e,
                    keys: b,
                    label: c
                })
            }

            function n(a, b) {
                return Math.floor(a / b) * b
            }

            function q(a) {
                var b = h(a, "h", 0);
                return new Date(h(a, "y"), h(a, "m"), h(a, "d", 1), h(a, "a") ?
                    b + 12 : b, h(a, "i", 0), h(a, "s", 0))
            }
            var e = a(this),
                k = {}, f;
            if (e.is("input")) {
                switch (e.attr("type")) {
                case "date":
                    f = "yy-mm-dd";
                    break;
                case "datetime":
                    f = "yy-mm-ddTHH:ii:ssZ";
                    break;
                case "datetime-local":
                    f = "yy-mm-ddTHH:ii:ss";
                    break;
                case "month":
                    f = "yy-mm";
                    k.dateOrder = "mmyy";
                    break;
                case "time":
                    f = "HH:ii:ss"
                }
                var w = e.attr("min"),
                    e = e.attr("max");
                w && (k.minDate = u.parseDate(f, w));
                e && (k.maxDate = u.parseDate(f, e))
            }
            var c, p, m, o, x, w = a.extend({}, g.settings),
                s = a.extend(g.settings, j, k, w),
                H = 0,
                e = [],
                E = [],
                t = {}, C = {
                    y: "getFullYear",
                    m: "getMonth",
                    d: "getDate",
                    h: function (a) {
                        a = a.getHours();
                        a = l && 12 <= a ? a - 12 : a;
                        return n(a, A)
                    },
                    i: function (a) {
                        return n(a.getMinutes(), L)
                    },
                    s: function (a) {
                        return n(a.getSeconds(), O)
                    },
                    a: function (a) {
                        return Y && 11 < a.getHours() ? 1 : 0
                    }
                }, K = s.preset,
                B = s.dateOrder,
                J = s.timeWheels,
                M = B.match(/D/),
                Y = J.match(/a/i),
                l = J.match(/h/),
                b = "datetime" == K ? s.dateFormat + s.separator + s.timeFormat : "time" == K ? s.timeFormat : s.dateFormat,
                y = new Date,
                A = s.stepHour,
                L = s.stepMinute,
                O = s.stepSecond,
                X = s.minDate || new Date(s.startYear, 0, 1),
                N = s.maxDate || new Date(s.endYear,
                    11, 31, 23, 59, 59);
            f = f || b;
            if (K.match(/date/i)) {
                a.each(["y", "m", "d"], function (a, b) {
                    c = B.search(RegExp(b, "i")); - 1 < c && E.push({
                        o: c,
                        v: b
                    })
                });
                E.sort(function (a, b) {
                    return a.o > b.o ? 1 : -1
                });
                a.each(E, function (a, b) {
                    t[b.v] = a
                });
                w = [];
                for (k = 0; 3 > k; k++)
                    if (k == t.y) {
                        H++;
                        m = [];
                        p = [];
                        o = X.getFullYear();
                        x = N.getFullYear();
                        for (c = o; c <= x; c++) p.push(c), m.push(B.match(/yy/i) ? c : (c + "").substr(2, 2));
                        r(w, p, m, s.yearText)
                    } else if (k == t.m) {
                    H++;
                    m = [];
                    p = [];
                    for (c = 0; 12 > c; c++) o = B.replace(/[dy]/gi, "").replace(/mm/, 9 > c ? "0" + (c + 1) : c + 1).replace(/m/, c + 1),
                    p.push(c), m.push(o.match(/MM/) ? o.replace(/MM/, '<span class="dw-mon">' + s.monthNames[c] + "</span>") : o.replace(/M/, '<span class="dw-mon">' + s.monthNamesShort[c] + "</span>"));
                    r(w, p, m, s.monthText)
                } else if (k == t.d) {
                    H++;
                    m = [];
                    p = [];
                    for (c = 1; 32 > c; c++) p.push(c), m.push(B.match(/dd/i) && 10 > c ? "0" + c : c);
                    r(w, p, m, s.dayText)
                }
                e.push(w)
            }
            if (K.match(/time/i)) {
                E = [];
                a.each(["h", "i", "s", "a"], function (a, b) {
                    a = J.search(RegExp(b, "i")); - 1 < a && E.push({
                        o: a,
                        v: b
                    })
                });
                E.sort(function (a, b) {
                    return a.o > b.o ? 1 : -1
                });
                a.each(E, function (a, b) {
                    t[b.v] =
                        H + a
                });
                w = [];
                for (k = H; k < H + 4; k++)
                    if (k == t.h) {
                        H++;
                        m = [];
                        p = [];
                        for (c = 0; c < (l ? 12 : 24); c += A) p.push(c), m.push(l && 0 == c ? 12 : J.match(/hh/i) && 10 > c ? "0" + c : c);
                        r(w, p, m, s.hourText)
                    } else if (k == t.i) {
                    H++;
                    m = [];
                    p = [];
                    for (c = 0; 60 > c; c += L) p.push(c), m.push(J.match(/ii/) && 10 > c ? "0" + c : c);
                    r(w, p, m, s.minuteText)
                } else if (k == t.s) {
                    H++;
                    m = [];
                    p = [];
                    for (c = 0; 60 > c; c += O) p.push(c), m.push(J.match(/ss/) && 10 > c ? "0" + c : c);
                    r(w, p, m, s.secText)
                } else k == t.a && (H++, p = J.match(/A/), r(w, [0, 1], p ? ["AM", "PM"] : ["am", "pm"], s.ampmText));
                e.push(w)
            }
            g.setDate = function (a, b,
                e, c, l) {
                for (var f in t) g.temp[t[f]] = a[C[f]] ? a[C[f]]() : C[f](a);
                g.setValue(g.temp, b, e, c, l)
            };
            g.getDate = function (a) {
                return q(a ? g.temp : g.values)
            };
            g.convert = function (b) {
                var e = b;
                a.isArray(b) || (e = [], a.each(b, function (b, c) {
                    a.each(c, function (a, c) {
                        "daysOfWeek" === b && (c.d ? c.d = "w" + c.d : c = "w" + c);
                        e.push(c)
                    })
                }));
                return e
            };
            g.format = b;
            return {
                button3Text: s.showNow ? s.nowText : void 0,
                button3: s.showNow ? function () {
                    g.setDate(new Date, !1, 0.3, !0, !0)
                } : void 0,
                wheels: e,
                headerText: function () {
                    return u.formatDate(b, q(g.temp), s)
                },
                formatResult: function (a) {
                    return u.formatDate(f,
                        q(a), s)
                },
                parseValue: function (a) {
                    var a = u.parseDate(f, a, s),
                        b, e = [];
                    for (b in t) e[t[b]] = a[C[b]] ? a[C[b]]() : C[b](a);
                    return e
                },
                validate: function (b) {
                    var e = g.temp,
                        c = {
                            y: X.getFullYear(),
                            m: 0,
                            d: 1,
                            h: 0,
                            i: 0,
                            s: 0,
                            a: 0
                        }, f = {
                            y: N.getFullYear(),
                            m: 11,
                            d: 31,
                            h: n(l ? 11 : 23, A),
                            i: n(59, L),
                            s: n(59, O),
                            a: 1
                        }, k = !0,
                        j = !0;
                    a.each("y,m,d,a,h,i,s".split(","), function (l, A) {
                        if (t[A] !== void 0) {
                            var m = c[A],
                                z = f[A],
                                J = 31,
                                p = h(e, A),
                                y = a(".dw-ul", b).eq(t[A]),
                                n, o;
                            if (A == "d") {
                                n = h(e, "y");
                                o = h(e, "m");
                                z = J = 32 - (new Date(n, o, 32)).getDate();
                                M && a(".dw-li", y).each(function () {
                                    var b =
                                        a(this),
                                        e = b.data("val"),
                                        c = (new Date(n, o, e)).getDay(),
                                        e = B.replace(/[my]/gi, "").replace(/dd/, e < 10 ? "0" + e : e).replace(/d/, e);
                                    a(".dw-i", b).html(e.match(/DD/) ? e.replace(/DD/, '<span class="dw-day">' + s.dayNames[c] + "</span>") : e.replace(/D/, '<span class="dw-day">' + s.dayNamesShort[c] + "</span>"))
                                })
                            }
                            k && X && (m = X[C[A]] ? X[C[A]]() : C[A](X));
                            j && N && (z = N[C[A]] ? N[C[A]]() : C[A](N));
                            if (A != "y") {
                                var r = a(".dw-li", y).index(a('.dw-li[data-val="' + m + '"]', y)),
                                    w = a(".dw-li", y).index(a('.dw-li[data-val="' + z + '"]', y));
                                a(".dw-li", y).removeClass("dw-v").slice(r,
                                    w + 1).addClass("dw-v");
                                A == "d" && a(".dw-li", y).removeClass("dw-h").slice(J).addClass("dw-h")
                            }
                            p < m && (p = m);
                            p > z && (p = z);
                            k && (k = p == m);
                            j && (j = p == z);
                            if (s.invalid && A == "d") {
                                for (var ca, q, z = (new Date(n, o, 1)).getDay(), r = [], w = g.convert(s.invalid), m = 0; m < w.length; m++) {
                                    ca = w[m];
                                    q = ca + "";
                                    if (ca.getTime && ca.getFullYear() == n && ca.getMonth() == o) r.push(ca.getDate() - 1);
                                    else if (q.match(/w/i)) {
                                        q = +q.replace("w", "");
                                        for (ca = q - z; ca < J; ca = ca + 7) ca >= 0 && r.push(ca)
                                    } else {
                                        q = q.split("/");
                                        q[1] ? q[0] - 1 == o && r.push(q[1] - 1) : r.push(q[0] - 1)
                                    }
                                }
                                a.each(r,
                                    function (b, e) {
                                        a(".dw-li", y).eq(e).removeClass("dw-v")
                                    })
                            }
                            e[t[A]] = p
                        }
                    })
                }
            }
        };
    a.each(["date", "time", "datetime"], function (a, g) {
        u.presets[g] = h;
        u.presetShort(g)
    });
    u.formatDate = function (g, h, r) {
        if (!h) return null;
        var r = a.extend({}, j, r),
            n = function (a) {
                for (var e = 0; k + 1 < g.length && g.charAt(k + 1) == a;) e++, k++;
                return e
            }, q = function (a, e, c) {
                e = "" + e;
                if (n(a))
                    for (; e.length < c;) e = "0" + e;
                return e
            }, e = function (a, e, c, f) {
                return n(a) ? f[e] : c[e]
            }, k, f = "",
            w = !1;
        for (k = 0; k < g.length; k++)
            if (w) "'" == g.charAt(k) && !n("'") ? w = !1 : f += g.charAt(k);
            else switch (g.charAt(k)) {
            case "d":
                f +=
                    q("d", h.getDate(), 2);
                break;
            case "D":
                f += e("D", h.getDay(), r.dayNamesShort, r.dayNames);
                break;
            case "o":
                f += q("o", (h.getTime() - (new Date(h.getFullYear(), 0, 0)).getTime()) / 864E5, 3);
                break;
            case "m":
                f += q("m", h.getMonth() + 1, 2);
                break;
            case "M":
                f += e("M", h.getMonth(), r.monthNamesShort, r.monthNames);
                break;
            case "y":
                f += n("y") ? h.getFullYear() : (10 > h.getYear() % 100 ? "0" : "") + h.getYear() % 100;
                break;
            case "h":
                var c = h.getHours(),
                    f = f + q("h", 12 < c ? c - 12 : 0 == c ? 12 : c, 2);
                break;
            case "H":
                f += q("H", h.getHours(), 2);
                break;
            case "i":
                f += q("i", h.getMinutes(),
                    2);
                break;
            case "s":
                f += q("s", h.getSeconds(), 2);
                break;
            case "a":
                f += 11 < h.getHours() ? "pm" : "am";
                break;
            case "A":
                f += 11 < h.getHours() ? "PM" : "AM";
                break;
            case "'":
                n("'") ? f += "'" : w = !0;
                break;
            default:
                f += g.charAt(k)
            }
        return f
    };
    u.parseDate = function (g, h, r) {
        var n = a.extend({}, j, r),
            r = n.defaultValue || new Date;
        if (!g || !h) return r;
        var h = "object" == typeof h ? h.toString() : h + "",
            q = n.shortYearCutoff,
            e = r.getFullYear(),
            k = r.getMonth() + 1,
            f = r.getDate(),
            w = -1,
            c = r.getHours(),
            p = r.getMinutes(),
            m = 0,
            o = -1,
            x = !1,
            s = function (a) {
                (a = C + 1 < g.length && g.charAt(C +
                    1) == a) && C++;
                return a
            }, u = function (a) {
                s(a);
                a = h.substr(t).match(RegExp("^\\d{1," + ("@" == a ? 14 : "!" == a ? 20 : "y" == a ? 4 : "o" == a ? 3 : 2) + "}"));
                if (!a) return 0;
                t += a[0].length;
                return parseInt(a[0], 10)
            }, E = function (a, e, c) {
                a = s(a) ? c : e;
                for (e = 0; e < a.length; e++)
                    if (h.substr(t, a[e].length).toLowerCase() == a[e].toLowerCase()) return t += a[e].length, e + 1;
                return 0
            }, t = 0,
            C;
        for (C = 0; C < g.length; C++)
            if (x) "'" == g.charAt(C) && !s("'") ? x = !1 : t++;
            else switch (g.charAt(C)) {
            case "d":
                f = u("d");
                break;
            case "D":
                E("D", n.dayNamesShort, n.dayNames);
                break;
            case "o":
                w =
                    u("o");
                break;
            case "m":
                k = u("m");
                break;
            case "M":
                k = E("M", n.monthNamesShort, n.monthNames);
                break;
            case "y":
                e = u("y");
                break;
            case "H":
                c = u("H");
                break;
            case "h":
                c = u("h");
                break;
            case "i":
                p = u("i");
                break;
            case "s":
                m = u("s");
                break;
            case "a":
                o = E("a", ["am", "pm"], ["am", "pm"]) - 1;
                break;
            case "A":
                o = E("A", ["am", "pm"], ["am", "pm"]) - 1;
                break;
            case "'":
                s("'") ? t++ : x = !0;
                break;
            default:
                t++
            }
        100 > e && (e += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (e <= ("string" != typeof q ? q : (new Date).getFullYear() % 100 + parseInt(q, 10)) ? 0 : -100));
        if (-1 <
            w) {
            k = 1;
            f = w;
            do {
                n = 32 - (new Date(e, k - 1, 32)).getDate();
                if (f <= n) break;
                k++;
                f -= n
            } while (1)
        }
        c = new Date(e, k - 1, f, -1 == o ? c : o && 12 > c ? c + 12 : !o && 12 == c ? 0 : c, p, m);
        return c.getFullYear() != e || c.getMonth() + 1 != k || c.getDate() != f ? r : c
    }
})(jQuery);
(function (a) {
    var u = {
        inputClass: "",
        invalid: [],
        rtl: !1,
        group: !1,
        groupLabel: "Groups"
    };
    a.mobiscroll.presetShort("select");
    a.mobiscroll.presets.select = function (g) {
        function j() {
            var e, c = 0,
                f = [],
                g = [],
                l = [
                    []
                ];
            r.group ? (r.rtl && (c = 1), a("optgroup", n).each(function (b) {
                f.push(a(this).attr("label"));
                g.push(b)
            }), l[c] = [{
                values: f,
                keys: g,
                label: r.groupLabel
            }], e = k, c += r.rtl ? -1 : 1) : e = n;
            f = [];
            g = [];
            a("option", e).each(function () {
                var b = a(this).attr("value");
                f.push(a(this).text());
                g.push(b);
                a(this).prop("disabled") && o.push(b)
            });
            l[c] = [{
                values: f,
                keys: g,
                label: m
            }];
            return l
        }

        function h(a, e) {
            var f = [];
            if (q) {
                var k = [],
                    l = 0;
                for (l in g._selectedValues) k.push(s[l]), f.push(l);
                C.val(k.join(", "))
            } else C.val(a), f = e ? g.values[E] : null;
            e && (c = !0, n.val(f).change())
        }

        function F(a) {
            if (q && a.hasClass("dw-v") && a.closest(".dw").find(".dw-ul").index(a.closest(".dw-ul")) == E) {
                var e = a.attr("data-val");
                a.hasClass("dw-msel") ? (a.removeClass("dw-msel").removeAttr("aria-selected"), delete g._selectedValues[e]) : (a.addClass("dw-msel").attr("aria-selected", "true"), g._selectedValues[e] =
                    e);
                "inline" == r.display && h(e, !0);
                return !1
            }
        }
        var D = a.extend({}, g.settings),
            r = a.extend(g.settings, u, D),
            n = a(this),
            q = n.prop("multiple"),
            D = this.id + "_dummy",
            e = q ? n.val() ? n.val()[0] : a("option", n).attr("value") : n.val(),
            k = n.find('option[value="' + e + '"]').parent(),
            f = k.index() + "",
            w = f,
            c;
        a('label[for="' + this.id + '"]').attr("for", D);
        var p = a('label[for="' + D + '"]'),
            m = void 0 !== r.label ? r.label : p.length ? p.text() : n.attr("name"),
            o = [],
            x = [],
            s = {}, H, E, t, C, K = r.readonly;
        r.group && !a("optgroup", n).length && (r.group = !1);
        r.invalid.length ||
            (r.invalid = o);
        r.group ? r.rtl ? (H = 1, E = 0) : (H = 0, E = 1) : (H = -1, E = 0);
        a("#" + D).remove();
        C = a('<input type="text" id="' + D + '" class="' + r.inputClass + '" readonly />').insertBefore(n);
        a("option", n).each(function () {
            s[a(this).attr("value")] = a(this).text()
        });
        r.showOnFocus && C.focus(function () {
            g.show()
        });
        r.showOnTap && g.tap(C, function () {
            g.show()
        });
        D = n.val() || [];
        p = 0;
        for (p; p < D.length; p++) g._selectedValues[D[p]] = D[p];
        h(s[e]);
        n.off(".dwsel").on("change.dwsel", function () {
            c || g.setValue(q ? n.val() || [] : [n.val()], true);
            c = false
        }).hide().closest(".ui-field-contain").trigger("create");
        g._setValue || (g._setValue = g.setValue);
        g.setValue = function (c, m, p, o, l, b) {
            var y = a.isArray(c) ? c[0] : c;
            e = y !== void 0 ? y : a("option", n).attr("value");
            if (q) {
                g._selectedValues = {};
                y = 0;
                for (y; y < c.length; y++) g._selectedValues[c[y]] = c[y]
            }
            if (r.group) {
                k = n.find('option[value="' + e + '"]').parent();
                w = k.index();
                c = r.rtl ? [e, k.index()] : [k.index(), e];
                if (w !== f) {
                    r.wheels = j();
                    g.changeWheel([E], void 0, b);
                    f = w + ""
                }
            } else c = [e];
            g._setValue(c, m, p, o, l, b);
            if (m) {
                m = q ? true : e !== n.val();
                h(s[e], m)
            }
        };
        g.getValue = function (a) {
            return (a ? g.temp : g.values)[E]
        };
        return {
            width: 50,
            wheels: void 0,
            headerText: !1,
            multiple: q,
            anchor: C,
            formatResult: function (a) {
                return s[a[E]]
            },
            parseValue: function () {
                var c = n.val() || [],
                    h = 0;
                if (q) {
                    g._selectedValues = {};
                    for (h; h < c.length; h++) g._selectedValues[c[h]] = c[h]
                }
                e = q ? n.val() ? n.val()[0] : a("option", n).attr("value") : n.val();
                k = n.find('option[value="' + e + '"]').parent();
                w = k.index();
                f = w + "";
                return r.group && r.rtl ? [e, w] : r.group ? [w, e] : [e]
            },
            validate: function (c, h, m) {
                if (h === void 0 && q) {
                    var p = g._selectedValues,
                        l = 0;
                    a(".dwwl" + E + " .dw-li", c).removeClass("dw-msel").removeAttr("aria-selected");
                    for (l in p) a(".dwwl" + E + ' .dw-li[data-val="' + p[l] + '"]', c).addClass("dw-msel").attr("aria-selected", "true")
                }
                if (h === H) {
                    w = g.temp[H];
                    if (w !== f) {
                        k = n.find("optgroup").eq(w);
                        w = k.index();
                        e = (e = k.find("option").eq(0).val()) || n.val();
                        r.wheels = j();
                        if (r.group) {
                            g.temp = r.rtl ? [e, w] : [w, e];
                            r.readonly = [r.rtl, !r.rtl];
                            clearTimeout(t);
                            t = setTimeout(function () {
                                g.changeWheel([E], void 0, true);
                                r.readonly = K;
                                f = w + ""
                            }, m * 1E3);
                            return false
                        }
                    } else r.readonly = K
                } else e = g.temp[E];
                var b = a(".dw-ul", c).eq(E);
                a.each(r.invalid, function (e, c) {
                    a('.dw-li[data-val="' +
                        c + '"]', b).removeClass("dw-v")
                })
            },
            onBeforeShow: function () {
                r.wheels = j();
                if (r.group) g.temp = r.rtl ? [e, k.index()] : [k.index(), e]
            },
            onMarkupReady: function (e) {
                a(".dwwl" + H, e).on("mousedown touchstart", function () {
                    clearTimeout(t)
                });
                if (q) {
                    e.addClass("dwms");
                    a(".dwwl", e).eq(E).addClass("dwwms").attr("aria-multiselectable", "true");
                    a(".dwwl", e).on("keydown", function (e) {
                        if (e.keyCode == 32) {
                            e.preventDefault();
                            e.stopPropagation();
                            F(a(".dw-sel", this))
                        }
                    });
                    x = {};
                    for (var c in g._selectedValues) x[c] = g._selectedValues[c]
                }
            },
            onValueTap: F,
            onSelect: function (a) {
                h(a, true);
                if (r.group) g.values = null
            },
            onCancel: function () {
                if (r.group) g.values = null;
                if (q) {
                    g._selectedValues = {};
                    for (var a in x) g._selectedValues[a] = x[a]
                }
            },
            onChange: function (a) {
                if (r.display == "inline" && !q) {
                    C.val(a);
                    c = true;
                    n.val(g.temp[E]).change()
                }
            },
            onClose: function () {
                C.blur()
            }
        }
    }
})(jQuery);
(function (a) {
    var u = a.mobiscroll,
        g = {
            invalid: [],
            showInput: !0,
            inputClass: ""
        }, j = function (h) {
            function j(e, c, f, l) {
                for (var b = 0; b < c;) {
                    var g = a(".dwwl" + b, e),
                        k = u(l, b, f);
                    a.each(k, function (b, e) {
                        a('.dw-li[data-val="' + e + '"]', g).removeClass("dw-v")
                    });
                    b++
                }
            }

            function u(a, e, c) {
                for (var f = 0, b, g = []; f < e;) {
                    var k = a[f];
                    for (b in c)
                        if (c[b].key == k) {
                            c = c[b].children;
                            break
                        }
                    f++
                }
                for (f = 0; f < c.length;) c[f].invalid && g.push(c[f].key), f++;
                return g
            }

            function r(a, e) {
                for (var c = []; a;) c[--a] = !0;
                c[e] = !1;
                return c
            }

            function n(a, e, c) {
                var f = 0,
                    b, g, k = [],
                    h = E;
                if (e)
                    for (b = 0; b < e; b++) k[b] = [{}];
                for (; f < a.length;) {
                    b = k;
                    for (var e = f, j = h, m = {
                            keys: [],
                            values: [],
                            label: t[f]
                        }, p = 0; p < j.length;) m.values.push(j[p].value), m.keys.push(j[p].key), p++;
                    b[e] = [m];
                    b = 0;
                    for (e = void 0; b < h.length && void 0 === e;) {
                        if (h[b].key == a[f] && (void 0 !== c && f <= c || void 0 === c)) e = b;
                        b++
                    }
                    if (void 0 !== e && h[e].children) f++, h = h[e].children;
                    else if ((g = q(h)) && g.children) f++, h = g.children;
                    else break
                }
                return k
            }

            function q(a, e) {
                if (!a) return !1;
                for (var c = 0, f; c < a.length;)
                    if (!(f = a[c++]).invalid) return e ? c - 1 : f;
                return !1
            }

            function e(e, c) {
                a(".dwc", e).css("display", "").slice(c).hide()
            }

            function k(a, e) {
                var c = [],
                    f = E,
                    b = 0,
                    g = !1,
                    k, h;
                if (void 0 !== a[b] && b <= e) {
                    g = 0;
                    k = a[b];
                    for (h = void 0; g < f.length && void 0 === h;) f[g].key == a[b] && !f[g].invalid && (h = g), g++
                } else h = q(f, !0), k = f[h].key;
                g = void 0 !== h ? f[h].children : !1;
                for (c[b] = k; g;) {
                    f = f[h].children;
                    b++;
                    if (void 0 !== a[b] && b <= e) {
                        g = 0;
                        k = a[b];
                        for (h = void 0; g < f.length && void 0 === h;) f[g].key == a[b] && !f[g].invalid && (h = g), g++
                    } else h = q(f, !0), h = !1 === h ? void 0 : h, k = f[h].key;
                    g = void 0 !== h && q(f[h].children) ? f[h].children : !1;
                    c[b] = k
                }
                return {
                    lvl: b + 1,
                    nVector: c
                }
            }

            function f(e) {
                var c = [];
                x = x > s++ ? x : s;
                e.children("li").each(function (e) {
                    var g = a(this),
                        b = g.clone();
                    b.children("ul,ol").remove();
                    var b = b.html().replace(/^\s\s*/, "").replace(/\s\s*$/, ""),
                        h = g.data("invalid") ? !0 : !1,
                        e = {
                            key: g.data("val") || e,
                            value: b,
                            invalid: h,
                            children: null
                        }, g = g.children("ul,ol");
                    g.length && (e.children = f(g));
                    c.push(e)
                });
                s--;
                return c
            }
            var w = a.extend({}, h.settings),
                c = a.extend(h.settings, g, w),
                w = a(this),
                p, m, o = this.id + "_dummy",
                x = 0,
                s = 0,
                H = {}, E = c.wheelArray || f(w),
                t =
                    function (a) {
                        var e = [],
                            f;
                        for (f = 0; f < a; f++) e[f] = c.labels && c.labels[f] ? c.labels[f] : f;
                        return e
                }(x),
                C = [],
                K = function (a) {
                    var e = [],
                        c;
                    c = !0;
                    for (var f = 0; c;) c = q(a), e[f++] = c.key, (c = c.children) && (a = c);
                    return e
                }(E),
                B = n(K, x);
            a("#" + o).remove();
            c.showInput && (p = a('<input type="text" id="' + o + '" value="" class="' + c.inputClass + '" readonly />').insertBefore(w), c.anchor = p, c.showOnFocus && p.focus(function () {
                h.show()
            }), c.showOnTap && h.tap(p, function () {
                h.show()
            }));
            c.wheelArray || w.hide().closest(".ui-field-contain").trigger("create");
            return {
                width: 50,
                wheels: B,
                headerText: !1,
                parseValue: function () {
                    return c.defaultValue || K
                },
                onBeforeShow: function () {
                    var a = h.temp;
                    C = a.slice(0);
                    c.wheels = n(a, x, x);
                    m = true
                },
                onSelect: function (a) {
                    p && p.val(a)
                },
                onChange: function (a) {
                    p && c.display == "inline" && p.val(a)
                },
                onClose: function () {
                    p && p.blur()
                },
                onShow: function (e) {
                    a(".dwwl", e).on("mousedown touchstart", function () {
                        clearTimeout(H[a(".dwwl", e).index(this)])
                    })
                },
                validate: function (a, f, g) {
                    var l = [],
                        b = h.temp,
                        p = (f || 0) + 1,
                        A;
                    if (f !== void 0 && C[f] != b[f] || f === void 0 && !m) {
                        c.wheels =
                            n(b, null, f);
                        A = k(b, f);
                        if (f !== void 0) h.temp = A.nVector.slice(0);
                        for (; p < A.lvl;) l.push(p++);
                        e(a, A.lvl);
                        C = h.temp.slice(0);
                        if (l.length) {
                            m = true;
                            c.readonly = r(x, f);
                            clearTimeout(H[f]);
                            H[f] = setTimeout(function () {
                                h.changeWheel(l, void 0, f !== void 0);
                                c.readonly = false
                            }, g * 1E3);
                            return false
                        }
                        j(a, A.lvl, E, h.temp)
                    } else {
                        A = k(b, b.length);
                        j(a, A.lvl, E, b);
                        e(a, A.lvl)
                    }
                    m = false
                }
            }
        };
    a.each(["list", "image", "treelist"], function (a, g) {
        u.presets[g] = j;
        u.presetShort(g)
    })
})(jQuery);
(function (a) {
    a.mobiscroll.themes.android = {
        defaults: {
            dateOrder: "Mddyy",
            mode: "clickpick",
            height: 50,
            showLabel: !1
        }
    }
})(jQuery);
(function (a) {
    var u = {
        defaults: {
            dateOrder: "Mddyy",
            mode: "mixed",
            rows: 5,
            width: 70,
            height: 36,
            showLabel: !1,
            useShortLabels: !0
        }
    };
    a.mobiscroll.themes["android-ics"] = u;
    a.mobiscroll.themes["android-ics light"] = u
})(jQuery);
(function (a) {
    a.mobiscroll.themes.ios = {
        defaults: {
            dateOrder: "MMdyy",
            rows: 5,
            height: 30,
            width: 55,
            headerText: !1,
            showLabel: !1,
            useShortLabels: !0
        }
    }
})(jQuery);
(function (a) {
    a.mobiscroll.themes.jqm = {
        defaults: {
            jqmBorder: "a",
            jqmBody: "c",
            jqmHeader: "b",
            jqmWheel: "d",
            jqmClickPick: "c",
            jqmSet: "b",
            jqmCancel: "c"
        },
        init: function (u, g) {
            var j = g.settings;
            a(".dw", u).removeClass("dwbg").addClass("ui-overlay-shadow ui-corner-all ui-body-" + j.jqmBorder);
            a(".dwb-s .dwb", u).attr("data-role", "button").attr("data-mini", "true").attr("data-theme", j.jqmSet);
            a(".dwb-n .dwb", u).attr("data-role", "button").attr("data-mini", "true").attr("data-theme", j.jqmCancel);
            a(".dwb-c .dwb", u).attr("data-role",
                "button").attr("data-mini", "true").attr("data-theme", j.jqmCancel);
            a(".dwwb", u).attr("data-role", "button").attr("data-theme", j.jqmClickPick);
            a(".dwv", u).addClass("ui-header ui-bar-" + j.jqmHeader);
            a(".dwwr", u).addClass("ui-body-" + j.jqmBody);
            a(".dwpm .dwwl", u).addClass("ui-body-" + j.jqmWheel);
            a(".dwpm .dwl", u).addClass("ui-body-" + j.jqmBody);
            u.trigger("create");
            a(".dwo", u).click(function () {
                g.cancel()
            })
        }
    }
})(jQuery);
(function (a) {
    var u;
    a.mobiscroll.themes.wp = {
        defaults: {
            width: 70,
            height: 76,
            accent: "none",
            dateOrder: "mmMMddDDyy",
            showLabel: !1,
            onAnimStart: function (g, j, h) {
                a(".dwwl" + j, g).addClass("wpam");
                clearTimeout(u[j]);
                u[j] = setTimeout(function () {
                    a(".dwwl" + j, g).removeClass("wpam")
                }, 1E3 * h + 100)
            }
        },
        init: function (g, j) {
            var h, F;
            u = {};
            a(".dw", g).addClass("wp-" + j.settings.accent);
            a(".dwwl", g).on("touchstart mousedown DOMMouseScroll mousewheel", ".dw-sel", function () {
                h = !0;
                F = a(this).closest(".dwwl").hasClass("wpa");
                a(".dwwl", g).removeClass("wpa");
                a(this).closest(".dwwl").addClass("wpa")
            }).on("touchmove mousemove", function () {
                h = !1
            }).on("touchend mouseup", function () {
                h && F && a(this).closest(".dwwl").removeClass("wpa")
            })
        }
    };
    a.mobiscroll.themes["wp light"] = a.mobiscroll.themes.wp
})(jQuery);
(function (a) {
    a.mobiscroll.i18n.de = a.extend(a.mobiscroll.i18n.de, {
        setText: "OK",
        cancelText: "Abbrechen",
        dateFormat: "dd.mm.yy",
        dateOrder: "ddmmyy",
        dayNames: "Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag".split(","),
        dayNamesShort: "So,Mo,Di,Mi,Do,Fr,Sa".split(","),
        dayText: "Tag",
        hourText: "Stunde",
        minuteText: "Minuten",
        monthNames: "Januar,Februar,März,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember".split(","),
        monthNamesShort: "Jan,Feb,Mär,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Dez".split(","),
        monthText: "Monat",
        secText: "Sekunden",
        timeFormat: "HH:ii",
        timeWheels: "HHii",
        yearText: "Jahr",
        nowText: "Jetzt",
        dateText: "Datum",
        timeText: "Zeit",
        calendarText: "Kalender",
        closeText: "Schließen",
        fromText: "Start",
        toText: "End",
        wholeText: "Ganze Zahl",
        fractionText: "Bruchzahl",
        unitText: "Maßeinheit",
        labels: "Jahre,Monate,Tage,Stunden,Minuten,Sekunden,".split(","),
        labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs,".split(","),
        startText: "Start",
        stopText: "Stop",
        resetText: "Reset",
        lapText: "Lap",
        hideText: "Hide"
    })
})(jQuery);
(function (a) {
    a.mobiscroll.i18n.es = a.extend(a.mobiscroll.i18n.es, {
        setText: "Aceptar",
        cancelText: "Cancelar",
        dateFormat: "dd/mm/yy",
        dateOrder: "ddmmyy",
        dayNames: "Domingo,Lunes,Martes,Mi&#xE9;rcoles,Jueves,Viernes,S&#xE1;bado".split(","),
        dayNamesShort: "Do,Lu,Ma,Mi,Ju,Vi,S&#xE1;".split(","),
        dayText: "D&#237;a",
        hourText: "Horas",
        minuteText: "Minutos",
        monthNames: "Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre".split(","),
        monthNamesShort: "Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic".split(","),
        monthText: "Mes",
        secText: "Segundos",
        timeFormat: "HH:ii",
        timeWheels: "HHii",
        yearText: "A&ntilde;o",
        nowText: "Ahora",
        dateText: "Fecha",
        timeText: "Tiempo",
        calendarText: "Calendario",
        closeText: "Cerrar",
        fromText: "Start",
        toText: "End",
        wholeText: "Entero",
        fractionText: "Fracción",
        unitText: "Unidad",
        labels: "Años,Meses,Días,Horas,Minutos,Segundos,".split(","),
        labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs,".split(","),
        startText: "Iniciar",
        stopText: "Deténgase",
        resetText: "Reinicializar",
        lapText: "Lap",
        hideText: "Esconder"
    })
})(jQuery);
(function (a) {
    a.mobiscroll.i18n.fr = a.extend(a.mobiscroll.i18n.fr, {
        setText: "Terminé",
        cancelText: "Annuler",
        dateFormat: "dd/mm/yy",
        dateOrder: "ddmmyy",
        dayNames: "&#68;imanche,Lundi,Mardi,Mercredi,Jeudi,Vendredi,Samedi".split(","),
        dayNamesShort: "&#68;im.,Lun.,Mar.,Mer.,Jeu.,Ven.,Sam.".split(","),
        dayText: "Jour",
        monthText: "Mois",
        monthNames: "Janvier,Février,Mars,Avril,Mai,Juin,Juillet,Août,Septembre,Octobre,Novembre,Décembre".split(","),
        monthNamesShort: "Janv.,Févr.,Mars,Avril,Mai,Juin,Juil.,Août,Sept.,Oct.,Nov.,Déc.".split(","),
        hourText: "Heures",
        minuteText: "Minutes",
        secText: "Secondes",
        timeFormat: "HH:ii",
        timeWheels: "HHii",
        yearText: "Année",
        nowText: "Maintenant",
        dateText: "Date",
        timeText: "Heure",
        calendarText: "Calendrier",
        closeText: "Fermer",
        fromText: "Start",
        toText: "End",
        wholeText: "Entier",
        fractionText: "Fraction",
        unitText: "Unité",
        labels: "Ans,Mois,Jours,Heures,Minutes,Secondes,".split(","),
        labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs,".split(","),
        startText: "Start",
        stopText: "Stop",
        resetText: "Reset",
        lapText: "Lap",
        hideText: "Hide"
    })
})(jQuery);
(function (a) {
    a.mobiscroll.i18n.hu = a.extend(a.mobiscroll.i18n.hu, {
        setText: "OK",
        cancelText: "Mégse",
        dateFormat: "yy.mm.dd",
        dateOrder: "yymmdd",
        dayNames: "Vasárnap,Hétfő,Kedd,Szerda,Csütörtök,Péntek,Szombat".split(","),
        dayNamesShort: "Va,Hé,Ke,Sze,Csü,Pé,Szo".split(","),
        dayText: "Nap",
        hourText: "Óra",
        minuteText: "Perc",
        monthNames: "Január,Február,Március,Április,Május,Június,Július,Augusztus,Szeptember,Október,November,December".split(","),
        monthNamesShort: "Jan,Feb,Már,Ápr,Máj,Jún,Júl,Aug,Szep,Okt,Nov,Dec".split(","),
        monthText: "Hónap",
        secText: "Másodperc",
        timeFormat: "HH:ii",
        timeWheels: "HHii",
        yearText: "Év",
        nowText: "Most",
        dateText: "Dátum",
        timeText: "Idő",
        calendarText: "Naptár",
        closeText: "Bezár",
        fromText: "Start",
        toText: "End",
        wholeText: "Egész",
        fractionText: "Tört",
        unitText: "Egység",
        labels: "Év,Hónap,Nap,Óra,Perc,Másodperc,".split(","),
        labelsShort: "Év,Hó.,Nap,Óra,Perc,Mp.,".split(","),
        startText: "Indít",
        stopText: "Megállít",
        resetText: "Visszaállít",
        lapText: "Lap",
        hideText: "Elrejt"
    })
})(jQuery);
(function (a) {
    a.mobiscroll.i18n.it = a.extend(a.mobiscroll.i18n.it, {
        setText: "OK",
        cancelText: "Annulla",
        dateFormat: "dd-mm-yyyy",
        dateOrder: "ddmmyy",
        dayNames: "Domenica,Luned&Igrave;,Merted&Igrave;,Mercoled&Igrave;,Gioved&Igrave;,Venerd&Igrave;,Sabato".split(","),
        dayNamesShort: "Do,Lu,Ma,Me,Gi,Ve,Sa".split(","),
        dayText: "Giorno",
        hourText: "Ore",
        minuteText: "Minuti",
        monthNames: "Gennaio,Febbraio,Marzo,Aprile,Maggio,Giugno,Luglio,Agosto,Settembre,Ottobre,Novembre,Dicembre".split(","),
        monthNamesShort: "Gen,Feb,Mar,Apr,Mag,Giu,Lug,Ago,Set,Ott,Nov,Dic".split(","),
        monthText: "Mese",
        secText: "Secondi",
        timeFormat: "HH:ii",
        timeWheels: "HHii",
        yearText: "Anno",
        nowText: "Ora",
        dateText: "Data",
        timeText: "Volta",
        calendarText: "Calendario",
        closeText: "Chiudere",
        fromText: "Start",
        toText: "End",
        wholeText: "Intero",
        fractionText: "Frazione",
        unitText: "Unità",
        labels: "Anni,Mesi,Giorni,Ore,Minuti,Secondi,".split(","),
        labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs,".split(","),
        startText: "Inizio",
        stopText: "Arresto",
        resetText: "Ripristina",
        lapText: "Lap",
        hideText: "Nascondi"
    })
})(jQuery);
(function (a) {
    a.mobiscroll.i18n.ja = a.extend(a.mobiscroll.i18n.ja, {
        setText: "セット",
        cancelText: "キャンセル",
        dateFormat: "yy年mm月dd日",
        dateOrder: "yymmdd",
        dayNames: "日,月,火,水,木,金,土".split(","),
        dayNamesShort: "日,月,火,水,木,金,土".split(","),
        dayText: "日",
        hourText: "時",
        minuteText: "分",
        monthNames: "1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月".split(","),
        monthNamesShort: "1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月".split(","),
        monthText: "月",
        secText: "秒",
        timeFormat: "HH:ii",
        timeWheels: "HHii",
        yearText: "年",
        nowText: "今",
        dateText: "日付",
        timeText: "時間",
        calendarText: "カレンダー",
        closeText: "クローズ",
        fromText: "Start",
        toText: "End",
        wholeText: "全数",
        fractionText: "分数",
        unitText: "単位",
        labels: "年間,月間,日間,時間,分,秒,".split(","),
        labelsShort: "年間,月間,日間,時間,分,秒,".split(","),
        startText: "開始",
        stopText: "停止",
        resetText: "リセット",
        lapText: "ラップ",
        hideText: "隠す"
    })
})(jQuery);
(function (a) {
    a.mobiscroll.i18n.nl = a.extend(a.mobiscroll.i18n.nl, {
        setText: "Instellen",
        cancelText: "Annuleer",
        dateFormat: "dd/mm/yy",
        dateOrder: "ddmmyy",
        dayNames: "zondag,maandag,Dinsdag,Woensdag,Donderdag,Vrijdag,Zaterdag".split(","),
        dayNamesShort: "zo,ma,di,wo,do,vr,za".split(","),
        dayText: "Dag",
        hourText: "Uur",
        minuteText: "Minuten",
        monthNames: "januari,februari,maart,april,mei,juni,juli,augustus,september,oktober,november,december".split(","),
        monthNamesShort: "jan,feb,mrt,apr,mei,jun,jul,aug,sep,okt,nov,dec".split(","),
        monthText: "Maand",
        secText: "Seconden",
        timeFormat: "hh:ii A",
        timeWheels: "hhiiA",
        yearText: "Jaar",
        nowText: "Nu",
        dateText: "Datum",
        timeText: "Tijd",
        calendarText: "Kalender",
        closeText: "Sluiten",
        fromText: "Start",
        toText: "End",
        wholeText: "geheel",
        fractionText: "fractie",
        unitText: "eenheid",
        labels: "Jaren,Maanden,Dagen,Uren,Minuten,Seconden,".split(","),
        labelsShort: "j,m,d,u,min,sec,".split(","),
        startText: "Start",
        stopText: "Stop",
        resetText: "Reset",
        lapText: "Lap",
        hideText: "Verbergen"
    })
})(jQuery);
(function (a) {
    a.mobiscroll.i18n.no = a.extend(a.mobiscroll.i18n.no, {
        setText: "OK",
        cancelText: "Avbryt",
        dateFormat: "dd.mm.yy",
        dateOrder: "ddmmyy",
        dayNames: "Søndag,Mandag,Tirsdag,Onsdag,Torsdag,Fredag,Lørdag".split(","),
        dayNamesShort: "Sø,Ma,Ti,On,To,Fr,Lø".split(","),
        dayText: "Dag",
        hourText: "Time",
        minuteText: "Minutt",
        monthNames: "Januar,Februar,Mars,April,Mai,Juni,Juli,August,September,Oktober,November,Desember".split(","),
        monthNamesShort: "Jan,Feb,Mar,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Des".split(","),
        monthText: "Måned",
        secText: "Sekund",
        timeFormat: "HH:ii",
        timeWheels: "HHii",
        yearText: "År",
        nowText: "Nå",
        dateText: "Dato",
        timeText: "Tid",
        calendarText: "Kalender",
        closeText: "Lukk",
        fromText: "Start",
        toText: "End",
        wholeText: "Hele",
        fractionText: "Fraksjon",
        unitText: "Enhet",
        labels: "År,Måneder,Dager,Timer,Minutter,Sekunder,".split(","),
        labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs,".split(","),
        startText: "Start",
        stopText: "Stopp",
        resetText: "Tilbakestille",
        lapText: "Runde",
        hideText: "Skjul"
    })
})(jQuery);
(function (a) {
    a.mobiscroll.i18n["pt-BR"] = a.extend(a.mobiscroll.i18n["pt-BR"], {
        setText: "Selecionar",
        cancelText: "Cancelar",
        dateFormat: "dd/mm/yy",
        dateOrder: "ddMMyy",
        dayNames: "Domingo,Segunda-feira,Terça-feira,Quarta-feira,Quinta-feira,Sexta-feira,Sábado".split(","),
        dayNamesShort: "Dom,Seg,Ter,Qua,Qui,Sex,Sáb".split(","),
        dayText: "Dia",
        hourText: "Hora",
        minuteText: "Minutos",
        monthNames: "Janeiro,Fevereiro,Março,Abril,Maio,Junho,Julho,Agosto,Setembro,Outubro,Novembro,Dezembro".split(","),
        monthNamesShort: "Jan,Fev,Mar,Abr,Mai,Jun,Jul,Ago,Set,Out,Nov,Dez".split(","),
        monthText: "Mês",
        secText: "Segundo",
        timeFormat: "HH:ii",
        timeWheels: "HHii",
        yearText: "Ano",
        nowText: "Agora",
        dateText: "Data",
        timeText: "Tempo",
        calendarText: "Calendário",
        closeText: "Fechar",
        fromText: "Start",
        toText: "End",
        wholeText: "Inteiro",
        fractionText: "Fração",
        unitText: "Unidade",
        labels: "Anos,Meses,Dias,Horas,Minutos,Segundos,".split(","),
        labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs,".split(","),
        startText: "Começar",
        stopText: "Pare",
        resetText: "Reinicializar",
        lapText: "Lap",
        hideText: "Esconder"
    })
})(jQuery);
(function (a) {
    a.mobiscroll.i18n.tr = a.extend(a.mobiscroll.i18n.tr, {
        setText: "Seç",
        cancelText: "İptal",
        dateFormat: "dd.mm.yy",
        dateOrder: "ddmmyy",
        dayNames: "Pazar,Pazartesi,Salı,Çarşamba,Perşembe,Cuma,Cumartesi".split(","),
        dayNamesShort: "Paz,Pzt,Sal,Çar,Per,Cum,Cmt".split(","),
        dayText: "Gün",
        hourText: "Saat",
        minuteText: "Dakika",
        monthNames: "Ocak,Şubat,Mart,Nisan,Mayıs,Haziran,Temmuz,Ağustos,Eylül,Ekim,Kasım,Aralık".split(","),
        monthNamesShort: "Oca,Şub,Mar,Nis,May,Haz,Tem,Ağu,Eyl,Eki,Kas,Ara".split(","),
        monthText: "Ay",
        secText: "Saniye",
        timeFormat: "hh:ii A",
        timeWheels: "hhiiA",
        yearText: "Yıl",
        nowText: "Şimdi",
        dateText: "Tarih",
        timeText: "Zaman",
        calendarText: "Takvim",
        closeText: "Kapatmak",
        fromText: "Start",
        toText: "End",
        wholeText: "Tam",
        fractionText: "Kesir",
        unitText: "Birim",
        labels: "Yıl,Ay,Gün,Saat,Dakika,Saniye,".split(","),
        labelsShort: "Yıl,Ay,Gün,Sa,Dak,Sn,".split(","),
        startText: "Başla",
        stopText: "Durdur",
        resetText: "Sıfırla",
        lapText: "Tur",
        hideText: "Gizle"
    })
})(jQuery);
(function (a) {
    a.mobiscroll.i18n.zh = a.extend(a.mobiscroll.i18n.zh, {
        setText: "确定",
        cancelText: "取消",
        dateFormat: "dd/mm/yy",
        dateOrder: "ddmmyy",
        dayNames: "周日,周一,周二,周三,周四,周五,周六".split(","),
        dayNamesShort: "日,一,二,三,四,五,六".split(","),
        dayText: "日",
        hourText: "时",
        minuteText: "分",
        monthNames: "1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月".split(","),
        monthNamesShort: "一,二,三,四,五,六,七,八,九,十,十一,十二".split(","),
        monthText: "月",
        secText: "秒",
        timeFormat: "HH:ii",
        timeWheels: "HHii",
        yearText: "年",
        nowText: "当前",
        dateText: "日",
        timeText: "时间",
        calendarText: "日历",
        closeText: "关闭",
        fromText: "Start",
        toText: "End",
        wholeText: "Whole",
        fractionText: "Fraction",
        unitText: "Unit",
        labels: "Years,Months,Days,Hours,Minutes,Seconds,".split(","),
        labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs,".split(","),
        startText: "Start",
        stopText: "Stop",
        resetText: "Reset",
        lapText: "Lap",
        hideText: "Hide"
    })
})(jQuery);
(function (a) {
    function u(e) {
        var g = [Math.round(e.r).toString(16), Math.round(e.g).toString(16), Math.round(e.b).toString(16)];
        a.each(g, function (a, e) {
            1 == e.length && (g[a] = "0" + e)
        });
        return "#" + g.join("")
    }

    function g(a) {
        a = parseInt(-1 < a.indexOf("#") ? a.substring(1) : a, 16);
        return {
            r: a >> 16,
            g: (a & 65280) >> 8,
            b: a & 255
        }
    }

    function j(a) {
        var g, f, h;
        g = a.h;
        var c = 255 * a.s / 100,
            a = 255 * a.v / 100;
        if (0 == c) g = f = h = a;
        else {
            var c = (255 - c) * a / 255,
                j = (a - c) * (g % 60) / 60;
            360 == g && (g = 0);
            60 > g ? (g = a, h = c, f = c + j) : 120 > g ? (f = a, h = c, g = a - j) : 180 > g ? (f = a, g = c, h = c + j) : 240 >
                g ? (h = a, g = c, f = a - j) : 300 > g ? (h = a, f = c, g = c + j) : 360 > g ? (g = a, f = c, h = a - j) : g = f = h = 0
        }
        return {
            r: g,
            g: f,
            b: h
        }
    }

    function h(a) {
        var g = 0,
            f;
        f = Math.min(a.r, a.g, a.b);
        var h = Math.max(a.r, a.g, a.b),
            g = h - f,
            g = (f = h ? 255 * g / h : 0) ? a.r == h ? (a.g - a.b) / g : a.g == h ? 2 + (a.b - a.r) / g : 4 + (a.r - a.g) / g : -1,
            g = 60 * g;
        0 > g && (g += 360);
        return {
            h: g,
            s: f * (100 / 255),
            v: h * (100 / 255)
        }
    }

    function F(a) {
        return u(j(a))
    }

    function D(a) {
        var g = a.h,
            f = a.l,
            a = a.s / 100,
            a = a * (50 >= f ? f : 100 - f),
            f = f + a;
        return {
            h: g,
            s: 100 * (f ? 2 * a / f : 0),
            v: f
        }
    }

    function r(a) {
        return h(g(a))
    }
    var n = a.mobiscroll,
        q = {
            preview: !0,
            previewText: !0,
            label: "Color",
            refineLabel: "Refine",
            step: 10,
            nr: 10,
            format: "hex",
            hueText: "Hue",
            saturationText: "Saturation",
            valueText: "Value"
        };
    n.presetShort("colorpicker");
    n.presets.colorpicker = function (e) {
        function k(a) {
            return isNaN(+a) ? 0 : +a
        }

        function f(a) {
            return a.r ? u(a) : a.h ? F(a) : a
        }

        function w(a) {
            a = f(a);
            return "rgb" === O ? (a = g(a), Math.round(a.r) + "," + Math.round(a.g) + "," + Math.round(a.b)) : "hsv" === O ? (a = r(a), Math.round(a.h) + "," + Math.round(a.s) + "," + Math.round(a.v)) : a
        }

        function c(a) {
            return y ? "hsv" == O ? a.join(",") : "rgb" == O ? (a = j({
                h: a[0],
                s: a[1],
                v: a[2]
            }), Math.round(a.r) + "," + Math.round(a.g) + "," + Math.round(a.b)) : F({
                h: a[0],
                s: a[1],
                v: a[2]
            }) : L ? a[1] : a[0]
        }

        function p(a, b, e) {
            a[0].style.backgroundImage = Y + ("-webkit" == Y ? "-gradient(linear,left top,left bottom,from(" + b + "),to(" + e + "))" : "-linear-gradient(" + b + "," + e + ")")
        }

        function m(b, f) {
            var g = e.temp;
            1 !== f && 2 !== f && p(a(".dwwl1 .dw-ul", b), F({
                h: g[0],
                s: 0,
                v: 100
            }), F({
                h: g[0],
                s: 100,
                v: 100
            }));
            2 !== f && p(a(".dwwl2 .dw-ul", b), F({
                h: g[0],
                s: g[1],
                v: 0
            }), F({
                h: g[0],
                s: g[1],
                v: 100
            }));
            if (X) {
                var h = j({
                    h: g[0],
                    s: g[1],
                    v: g[2]
                }),
                    h = 0.299 *
                        h.r + 0.587 * h.g + 0.114 * h.b;
                a(".dw-color-preview", b).attr("style", "background:" + F({
                    h: g[0],
                    s: g[1],
                    v: g[2]
                }) + ";color:" + (130 < h ? "#000" : "#fff")).text(N ? c(g) : "")
            }
        }

        function o() {
            var a = 0,
                b = {
                    keys: [],
                    values: [],
                    labels: [],
                    label: Z
                }, e = {
                    keys: [],
                    values: [],
                    labels: [],
                    label: V
                }, c = {
                    keys: [],
                    values: [],
                    labels: [],
                    label: U
                };
            for (a; 360 > a; a += 3) b.keys.push(a), b.values.push('<div class="dw-color" style="background:' + F({
                h: a,
                s: 100,
                v: 100
            }) + '"><div class="dw-color-hl"></div></div>'), b.labels.push(a);
            for (a = 0; 101 > a; a += 1) e.keys.push(a), c.keys.push(a),
            e.values.push('<div class="dw-color"><div class="dw-color-hl"></div></div>'), c.values.push('<div class="dw-color"><div class="dw-color-hl"></div></div>'), e.labels.push(a), c.labels.push(a);
            return [[b, e, c]]
        }

        function x(e, c, g) {
            var h, l, j = {
                    keys: [],
                    values: [],
                    label: c || b.label
                };
            a.each(e, function (a, e) {
                h = f(e);
                l = w(e);
                j.keys.push(l);
                j.values.push('<div class="dw-cbc"><div class="dw-cb' + ("circle" === b.style ? " dw-cb-circle" : "") + '" style="background:' + h + '"></div></div>' + l);
                g && (K[l] = g)
            });
            return j
        }

        function s(a, b, e) {
            var c,
                g = a.h,
                f = (2 - a.s / 100) * a.v,
                a = a.s * a.v,
                a = (c = 100 >= f ? f : 200 - f) ? a / c : 0;
            c = f / 2 - e / 2 * b;
            for (f = []; 0 > c + b;) c += b;
            for (e = c + (e + 1) * b; 100 <= e - b;) e -= b;
            for (; c <= e; c += b) f.push(F(D({
                h: g,
                s: a,
                l: Math.max(0, Math.min(c, 100))
            })));
            return f
        }
        var H, E, t, C, K = {}, B = {}, J = {}, M, Y = n.util.prefix,
            l = a.extend({}, e.settings),
            b = a.extend(e.settings, q, l),
            y = !b.colors,
            l = a.isArray(b.colors) ? b.colors : [b.colors],
            A = b.defaultValue || l[0],
            L = b.refine && 1 < l.length,
            O = b.format,
            X = y && b.preview,
            N = b.previewText,
            T = b.layout,
            Z = b.hueText,
            V = b.saturationText,
            U = b.valueText;
        !y &&
            1 == l.length && (l = s(r(f(l[0])), b.step, b.nr));
        y ? (C = o(), J = {
            width: 70,
            height: 12,
            rows: 13,
            speedUnit: 0.0060,
            timeUnit: 0.05,
            showLabel: !0
        }) : L ? (a.each(l, function (a, e) {
            E = f(e);
            t = w(e);
            B[t] = x(s(r(E), b.step, b.nr), b.refineLabel, t);
            a || (H = B[t])
        }), C = [
            [x(l), H]
        ]) : (J = {
            width: 180
        }, C = [
            [x(l)]
        ]);
        return a.extend({
            wheels: C,
            parseValue: function (a) {
                if (y) {
                    if (a = a || A) {
                        if (O == "hsv") {
                            a = a.split(",");
                            a = {
                                h: k(a[0]),
                                s: k(a[1]),
                                v: k(a[2])
                            }
                        } else if (O == "rgb") {
                            a = a.split(",");
                            a = h({
                                r: k(a[0]),
                                g: k(a[1]),
                                b: k(a[2])
                            })
                        } else {
                            a = a.replace("#", "");
                            a.length == 3 &&
                                (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]);
                            a = r(a)
                        }
                        var b = Math.round(a.h);
                        return [Math.floor(b / 3) * 3, Math.round(a.s), Math.round(a.v)]
                    }
                    return [0, 100, 100]
                }
                if (L) {
                    if (a && K[a]) return [K[a], a];
                    w(A);
                    return [K[A], A]
                }
                return [a || w(A)]
            },
            formatResult: c,
            onBeforeShow: function () {
                if (y) b.mode = "scroller";
                if (X) b.headerText = false
            },
            onMarkupReady: function (a) {
                a.addClass("dw-colorpicker");
                X && a.find(".dwc").before('<div class="dw-color-preview"></div>');
                T == "liquid" && a.addClass("dw-colorpicker-liq");
                if (y) {
                    a.addClass("dw-cp-hsv");
                    m(a)
                }
            },
            validate: function (a,
                b) {
                if (y) setTimeout(function () {
                    m(a, b)
                }, 1);
                else if (L && !b && !M) {
                    M = true;
                    C[0][1] = B[e.temp[0]];
                    b === 0 && (e.temp[1] = e.temp[0]);
                    e.changeWheel([1], void 0, b !== void 0)
                }
                M = false
            }
        }, J)
    };
    n.colorpicker = {
        hsv2hex: F,
        hsv2rgb: j,
        rgb2hsv: h,
        rgb2hex: u,
        hex2rgb: g,
        hex2hsv: r
    }
})(jQuery);
(function (a) {
    var u = {
        controls: ["start", "reset"],
        autostart: !1,
        step: 1,
        useShortLabels: !1,
        labels: "Years,Months,Days,Hours,Minutes,Seconds,".split(","),
        labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs,".split(","),
        startText: "Start",
        stopText: "Stop",
        resetText: "Reset",
        lapText: "Lap",
        hideText: "Hide"
    };
    a.mobiscroll.presetShort("timer");
    a.mobiscroll.presets.timer = function (g) {
        function j(a) {
            return new Date(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds())
        }

        function h(b) {
            var e = {};
            if (v && A[U].index > A.days.index) {
                var c, f, g, h;
                c = new Date;
                var l = m ? c : Q;
                c = m ? Q : c;
                c = j(c);
                l = j(l);
                e.years = l.getFullYear() - c.getFullYear();
                e.months = l.getMonth() - c.getMonth();
                e.days = l.getDate() - c.getDate();
                e.hours = l.getHours() - c.getHours();
                e.minutes = l.getMinutes() - c.getMinutes();
                e.seconds = l.getSeconds() - c.getSeconds();
                e.fract = (l.getMilliseconds() - c.getMilliseconds()) / 10;
                for (c = y.length; 0 < c; c--) f = y[c - 1], g = A[f], h = y[a.inArray(f, y) - 1], A[h] && 0 > e[f] && (e[h]--, e[f] += "months" == h ? 32 - (new Date(l.getFullYear(),
                    l.getMonth(), 32)).getDate() : g.until + 1);
                "months" == U && (e.months += 12 * e.years, delete e.years)
            } else a(y).each(function (a, c) {
                A[c].index <= A[U].index && (e[c] = Math.floor(b / A[c].limit), b -= e[c] * A[c].limit)
            });
            return e
        }

        function F(b, c) {
            var f = 1,
                g = A[b],
                h = g.wheel,
                l = g.prefix,
                j = A[y[a.inArray(b, y) - 1]];
            K = 0;
            B = g.until;
            b == U && (K = Math.max(0, c[b] - 50), B = K + 100, x = K + 5, s = B - 5);
            if (g.index <= A[U].index && (!j || j.limit > V)) {
                L[b] || z[0].push(h);
                L[b] = 1;
                h.keys = [];
                h.values = [];
                h.label = g.label;
                V >= g.limit && (f = Math.max(Math.round(V / g.limit), 1), e =
                    f * g.limit);
                for (n = K; n <= B; n += f) h.keys.push(n), h.values.push((l || "") + (10 > n ? "0" : "") + n + '<span class="dwtlbl">' + g.label + "</span>")
            }
        }

        function D(b) {
            var e = [],
                c, f = h(b);
            a(y).each(function (a, b) {
                L[b] && (c = Math.max(Math.round(V / A[b].limit), 1), e.push(Math.round(f[b] / c) * c))
            });
            return e
        }

        function r(a) {
            v ? (c = Q - new Date, 0 > c ? (c *= -1, m = !0) : m = !1, p = 0, Z = !0) : (void 0 !== Q ? (Z = !1, c = 1E3 * Q, m = "down" !== l.countDirection) : (c = 0, Z = m = "down" !== l.countDirection), a && (p = 0))
        }
        var n, q, e, k, f, w, c, p, m, o, x, s, H, E, t, C, K, B, J, M;
        a(this);
        var Y = a.extend({},
            g.settings),
            l = a.extend(g.settings, u, Y),
            b = l.useShortLabels ? l.labelsShort : l.labels,
            y = "years,months,days,hours,minutes,seconds,fract".split(","),
            A = {
                years: {
                    index: 6,
                    until: 10,
                    limit: 31536E6,
                    label: b[0],
                    wheel: {}
                },
                months: {
                    index: 5,
                    until: 11,
                    limit: 2592E6,
                    label: b[1],
                    wheel: {}
                },
                days: {
                    index: 4,
                    until: 31,
                    limit: 864E5,
                    label: b[2],
                    wheel: {}
                },
                hours: {
                    index: 3,
                    until: 23,
                    limit: 36E5,
                    label: b[3],
                    wheel: {}
                },
                minutes: {
                    index: 2,
                    until: 59,
                    limit: 6E4,
                    label: b[4],
                    wheel: {}
                },
                seconds: {
                    index: 1,
                    until: 59,
                    limit: 1E3,
                    label: b[5],
                    wheel: {}
                },
                fract: {
                    index: 0,
                    until: 99,
                    limit: 10,
                    label: b[6],
                    prefix: ".",
                    wheel: {}
                }
            }, L = {}, O = [],
            X = 0,
            N = !1,
            T = !0,
            Z = !1,
            V = Math.max(10, 1E3 * l.step),
            U = l.maxWheel,
            S = l.locked || v,
            P = (a.isArray(l.controls) ? l.controls : []).join(","),
            Q = l.targetTime,
            v = Q && void 0 !== Q.getTime,
            R = "jqm" == l.theme,
            z = [
                []
            ];
        g.start = function () {
            T && g.reset();
            if (!N && (r(), Z || !(p >= c))) N = !0, T = !1, f = new Date, l.readonly = !0, g.setValue(D(m ? p : c - p), !0, 0.1), k = p, q = setInterval(function () {
                p = new Date - f + k;
                g.setValue(D(m ? p : c - p), !0, 0.1);
                !Z && p + e >= c && (clearInterval(q), setTimeout(function () {
                    g.stop();
                    p = c;
                    g.setValue(D(m ? p : 0), !0, 0.1);
                    g.trigger("onFinish", [c]);
                    T = !0
                }, c - p))
            }, e), a(".dwwr", o).addClass("dw-running dw-locked"), a(".dw-timer-st", o).attr("title", l.stopText).find(".dwb-txt").text(l.stopText), g.trigger("onStart", [])
        };
        g.stop = function () {
            N && (N = !1, clearInterval(q), p = new Date - f + k, a(".dwwr", o).removeClass("dw-running"), a(".dw-timer-st", o).attr("title", l.startText).find(".dwb-txt").text(l.startText), g.trigger("onStop", [p]))
        };
        g.reset = function () {
            g.stop();
            p = 0;
            O = [];
            X = 0;
            g.setValue(D(m ? 0 : c), !0, 0.1);
            g.settings.readonly =
                S;
            T = !0;
            S || a(".dwwr", o).removeClass("dw-locked");
            g.trigger("onReset", [])
        };
        g.lap = function () {
            N && (w = new Date - f + k, H = w - X, X = w, O.push(w), g.trigger("lap", [w, H, O]))
        };
        g.getTime = function () {
            return c
        };
        g.setTime = function (a) {
            Q = a / 1E3;
            c = a
        };
        g.getEllapsedTime = function () {
            return N ? new Date - f + k : 0
        };
        g.setEllapsedTime = function (a) {
            T || (k = p = a, f = new Date, g.setValue(D(m ? p : c - p), !0, 0.1))
        };
        r(!0);
        !U && !c && (U = "minutes");
        U || a(y).each(function (a, b) {
            if (!U && c >= A[b].limit) return U = b, !1
        });
        C = h(c);
        a(y).each(function (a, b) {
            F(b, C)
        });
        e = Math.max(87,
            e);
        l.autostart && setTimeout(function () {
            g.start()
        }, 0);
        return {
            wheels: z,
            headerText: !1,
            readonly: S,
            parseValue: function () {
                return D(m ? 0 : c)
            },
            formatResult: function (e) {
                var c = "",
                    f = 0;
                a(y).each(function (a, g) {
                    "fract" != g && L[g] && (c += e[f] + ("seconds" == g && L.fract ? "." + e[f + 1] : "") + " " + b[a] + " ", f++)
                });
                return c
            },
            validate: function (b, e, f) {
                var l, j, k = 0,
                    b = !1;
                T && void 0 !== e && (Q = 0, a(y).each(function (a, b) {
                    L[b] && (Q += A[b].limit * g.temp[k], k++)
                }), Q /= 1E3, r(!0));
                if (T && 0 === e) b = !0, l = h(c);
                else if (!E && (g.temp[0] < x || g.temp[0] > s)) l = h(m ? p : c - p),
                b = !0;
                if (b && (F(U, l), J !== K || M !== B)) j = g.temp[0], t = setTimeout(function () {
                    J = K;
                    M = B;
                    E = true;
                    g.temp[0] = j;
                    g.changeWheel([0], void 0, e !== void 0)
                }, 1E3 * f);
                E = !1
            },
            onBeforeShow: function () {
                l.mode = "scroller";
                l.showLabel = !0
            },
            onMarkupReady: function (b) {
                var e = 0;
                o = b;
                b.addClass("dw-timer");
                N ? a(".dwwr", b).addClass("dw-running") : a(".dwwr", b).removeClass("dw-running");
                S && a(".dwwr", o).addClass("dw-locked");
                a(".dwbc", b).remove();
                a(".dwwl0", b).on("mousedown touchstart", function () {
                    clearTimeout(t)
                });
                a(y).each(function (c, f) {
                    L[f] &&
                        (a(".dwwl" + e, b).addClass("dwwl-" + f), e++)
                });
                var c = P.match(/start/),
                    f = P.match(/reset/) && !v,
                    h = P.match(/lap/) && !v,
                    j = "inline" !== l.display;
                if (c || f || h || j) a(".dwwr", b).addClass("dw-timer-btns").append('<div class="dwbc"><table cellpadding="0" cellspacing="0"><tr>' + (c ? '<td class="dwbgr dwbgrf' + (!f && !h ? " dwbgrl" : "") + '"><a href="#" role="button" class="dwb-e dwb dw-timer-st"' + (R ? ' data-role="button" data-icon="arrow-r" data-iconpos="notext"' : "") + ' title="' + (N ? l.stopText : l.startText) + '"><span class="dwb-i"><span class="dwb-txt">' +
                    (N ? l.stopText : l.startText) + "</span></span></a></td>" : "") + (f ? '<td class="dwbgr' + (!c ? " dwbgrf" : "") + (!h ? " dwbgrl" : "") + '"><a href="#" role="button" class="dwb-e dwb dw-timer-r"' + (R ? ' data-role="button" data-icon="delete" data-iconpos="notext"' : "") + ' title="' + l.resetText + '"><span class="dwb-i"><span class="dwb-txt">' + l.resetText + "</span></span></a></td>" : "") + (h ? '<td class="dwbgr dwbgrl' + (!c && !f ? " dwbgrf" : "") + '"><a href="#" role="button" class="dwb-e dwb dw-timer-l"' + (R ? ' data-role="button" data-icon="refresh" data-iconpos="notext"' :
                    "") + ' title="' + l.lapText + '"><span class="dwb-i"><span class="dwb-txt">' + l.lapText + "</span></span></a></td>" : "") + (j ? '<td class="dwtcl"><a href="#" role="button" class="dwb-e dwb dw-timer-cl"' + (R ? ' data-role="button" data-mini="true"' : "") + ">" + l.hideText + "</a></td>" : "") + "</tr></table></div>"), g.tap(a(".dw-timer-st", b), function () {
                    N ? g.stop() : g.start()
                }), g.tap(a(".dw-timer-r", b), function () {
                    g.reset()
                }), g.tap(a(".dw-timer-l", b), function () {
                    g.lap()
                }), g.tap(a(".dw-timer-cl", b), function () {
                    g.hide()
                })
            },
            onMarkupInserted: function (b) {
                a(".dwwr",
                    b).css("min-width", a(".dwbc table", b).width())
            },
            onDestroy: function () {
                clearInterval(q)
            }
        }
    }
})(jQuery);
(function (a) {
    var u = {
        wheelOrder: "hhiiss",
        useShortLabels: !1,
        labels: "Years,Months,Days,Hours,Minutes,Seconds".split(","),
        labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs".split(",")
    };
    a.mobiscroll.presetShort("timespan");
    a.mobiscroll.presets.timespan = function (g) {
        function j(e) {
            var b = {};
            a(E).each(function (a, c) {
                b[c] = B[c] ? Math.floor(e / t[c].limit) : 0;
                e -= b[c] * t[c].limit
            });
            return b
        }

        function h(a, b) {
            var f = !1,
                g = K[B[a] - 1] || 1,
                h = t[a],
                j = h.wheel,
                k = h.prefix;
            c = 0;
            p = h.until;
            a == J && (c = Math.max(0, b[a] - 50 * g), p = c + 100 * g, q = c + 5 * g, e = p - 5 *
                g);
            j.keys = [];
            j.values = [];
            j.label = h.label;
            H.match(RegExp(h.re + h.re, "i")) && (f = !0);
            for (D = c; D <= p; D += g) j.keys.push(D), j.values.push((k || "") + (10 > D && f ? "0" : "") + D + '<span class="dwtlbl">' + h.label + "</span>")
        }

        function F(e) {
            var b = 0;
            a.each(C, function (a, c) {
                isNaN(+e[0]) || (b += t[c.v].limit * e[a])
            });
            return b
        }
        var D, r, n, q, e, k, f, w, c, p, m, o;
        a(this);
        var x = a.extend({}, g.settings),
            s = a.extend(g.settings, u, x),
            H = s.wheelOrder,
            x = s.useShortLabels ? s.labelsShort : s.labels,
            E = "years,months,days,hours,minutes,seconds".split(","),
            t = {
                years: {
                    index: 6,
                    until: 10,
                    limit: 31536E6,
                    label: x[0],
                    re: "y",
                    wheel: {}
                },
                months: {
                    index: 5,
                    until: 11,
                    limit: 2592E6,
                    label: x[1],
                    re: "m",
                    wheel: {}
                },
                days: {
                    index: 4,
                    until: 31,
                    limit: 864E5,
                    label: x[2],
                    re: "d",
                    wheel: {}
                },
                hours: {
                    index: 3,
                    until: 23,
                    limit: 36E5,
                    label: x[3],
                    re: "h",
                    wheel: {}
                },
                minutes: {
                    index: 2,
                    until: 59,
                    limit: 6E4,
                    label: x[4],
                    re: "i",
                    wheel: {}
                },
                seconds: {
                    index: 1,
                    until: 59,
                    limit: 1E3,
                    label: x[5],
                    re: "s",
                    wheel: {}
                }
            }, C = [],
            K = s.steps || [],
            B = {}, J = "seconds",
            M = 0,
            Y = [
                []
            ];
        n = 0;
        w = j(n);
        a(E).each(function (a, b) {
            r = H.search(RegExp(t[b].re, "i")); - 1 < r && (C.push({
                o: r,
                v: b
            }), t[b].index > t[J].index && (J = b))
        });
        C.sort(function (a, b) {
            return a.o > b.o ? 1 : -1
        });
        a.each(C, function (a, b) {
            b.v == J && (M = a);
            B[b.v] = a + 1;
            Y[0].push(t[b.v].wheel);
            h(b.v, w)
        });
        return {
            wheels: Y,
            parseValue: function (e) {
                var b = [];
                e ? (a(s.labels).each(function (a, b) {
                    e = e.replace(b, "")
                }), a(s.labelsShort).each(function (a, b) {
                    e = e.replace(b, "")
                }), b = e.replace(/\s+/g, " ").split(" ")) : s.defaultValue && (w = j(s.defaultValue), a.each(C, function (a, e) {
                    b.push(w[e.v])
                }));
                a(b).each(function (a, e) {
                    b[a] = Math.floor(e / (K[a] || 1)) * (K[a] || 1)
                });
                return b
            },
            formatResult: function (e) {
                var b = "";
                a(C).each(function (a, c) {
                    b += e[a] + " " + t[c.v].label + " "
                });
                return b
            },
            validate: function (a, b, r) {
                var A;
                n = F(g.temp);
                if (b === M || !k && (g.temp[M] < q || g.temp[M] > e))
                    if (a = j(n), h(J, a), m !== c || o !== p) A = g.temp[M], f = setTimeout(function () {
                        m = c;
                        o = p;
                        k = !0;
                        g.temp[M] = A;
                        g.changeWheel([M], void 0, void 0 !== b)
                    }, 1E3 * r);
                k = !1
            },
            onBeforeShow: function () {
                s.mode = "scroller";
                s.showLabel = !0;
                n = F(g.temp);
                w = j(n);
                h(J, w)
            },
            onMarkupReady: function (e) {
                e.addClass("dw-timespan");
                a(".dwwl" + M, e).on("mousedown touchstart",
                    function () {
                        clearTimeout(f)
                    })
            }
        }
    }
})(jQuery);
(function (a) {
    var u = a.mobiscroll,
        g = {
            controls: ["calendar"],
            firstDay: 0,
            highlight: !0,
            swipe: !0,
            navigation: "yearMonth",
            dateText: "Date",
            timeText: "Time",
            calendarText: "Calendar",
            prevMonthText: "Previous Month",
            nextMonthText: "Next Month",
            prevYearText: "Previous Year",
            nextYearText: "Next Year"
        };
    u.presets.calbase = function (j) {
        function h(a, b, e) {
            var c, f, g, h, k = [];
            if (b) {
                b = j.convert(b);
                for (c = 0; c < b.length; c++)
                    if (f = b[c], h = f.d || f, g = h + "", h.getTime) {
                        if (g = new Date(h.getTime()), g.setHours(0, 0, 0, 0), g.getTime() === a.getTime())
                            if (e) k.push(f);
                            else return f
                    } else if (g.match(/w/i)) {
                    if (g = +h.replace("w", ""), g === a.getDay())
                        if (e) k.push(f || !0);
                        else return f || !0
                } else if (g = g.split("/"), g[1]) {
                    if (g[0] - 1 == a.getMonth() && g[1] == a.getDate())
                        if (e) k.push(f);
                        else return f
                } else if (g[0] == a.getDate())
                    if (e) k.push(f || !0);
                    else return f || !0
            }
            return k.length ? k : !1
        }

        function F(b, e) {
            var c, f, g, k, l, m, A, p, n, o, r, q = 1,
                s = 0;
            c = new Date(b, e, 1);
            var t = c.getFullYear(),
                v = c.getMonth(),
                B = j.getDate(!0),
                w = (new Date(t, v + 1, 0)).getDate(),
                x = (new Date(t, v, 1)).getDay(),
                y = (new Date(t, v, 0)).getDate() -
                    x + 1,
                L = '<div class="dw-cal-table">';
            1 < z.firstDay - x + 1 && (s = 7);
            for (r = 0; 42 > r; r++) o = r + z.firstDay - s, c = new Date(t, v, o - x + 1), f = c.getFullYear(), g = c.getMonth(), k = c.getDate(), l = f + "-" + g + "-" + k, m = a.extend({
                valid: c < new Date(M.getFullYear(), M.getMonth(), M.getDate()) || c > Y ? !1 : !1 === h(c, z.invalid),
                selected: B.getFullYear() === f && B.getMonth() === g && B.getDate() === k
            }, j.getDayProps(c, B)), A = m.valid, p = m.selected, f = m.cssClass, n = o < x || o >= w + x, R[l] = m, 0 == r % 7 && (L += (r ? "</div>" : "") + '<div class="dw-cal-row' + (z.highlight && 0 <= B - c && 6048E5 >
                B - c ? " dw-cal-week-hl" : "") + '">', ka && ("month" == ka && g !== v && r ? q = 1 == k ? 1 : 2 : "year" == ka && (q = c, q = new Date(q), q.setHours(0, 0, 0), q.setDate(q.getDate() + 4 - (q.getDay() || 7)), k = new Date(q.getFullYear(), 0, 1), q = Math.ceil(((q - k) / 864E5 + 1) / 7)), L += '<div class="dw-week-nr">' + q + "</div>", q++)), L += '<div role="button" aria-labelledby="' + U.id + "_dw_cal_lbl_" + g + "_" + r + '" tabindex="0" class="dw-cal-day' + (W ? " ui-body-c" : "") + (p ? " dw-sel" : "") + (f ? " " + f : "") + (A && n ? " dw-cal-day-diff" : "") + (A ? " dw-cal-day-v dwb-e" : "") + '" data-date="' + (o -
                x + 1) + '" data-full="' + l + '"' + (p ? ' aria-selected="true"' : "") + (A ? "" : ' aria-disabled="true"') + '><div class="dw-i' + (p && W ? " ui-btn-active" : "") + (A && W ? ' ui-btn-up-c ui-state-default ui-btn" data-theme="c">' : '">') + '<div class="dw-cal-day-fg">' + (o < x ? y + o : o >= w + x ? o - w - x + 1 : o - x + 1) + "</div>" + (m.markup || "") + '<div class="dw-cal-day-frame"></div><div class="dw-hidden" id="' + U.id + "_dw_cal_lbl_" + g + "_" + r + '">' + u.formatDate(z.dateFormat, c, z) + "</div></div></div>";
            return L + "</div></div>"
        }

        function D(b, e) {
            a(".dw-cal-month", o).text(C[e]);
            a(".dw-cal-year", o).text(b);
            new Date(b, e - 1, 1) < B ? a(".dw-cal-prev-m", o).addClass($).attr("aria-disabled", "true") : a(".dw-cal-prev-m", o).removeClass($).removeAttr("aria-disabled");
            new Date(b, e + 1, 1) > J ? a(".dw-cal-next-m", o).addClass($).attr("aria-disabled", "true") : a(".dw-cal-next-m", o).removeClass($).removeAttr("aria-disabled");
            new Date(b - 1, e, 1) < B ? a(".dw-cal-prev-y", o).addClass($).attr("aria-disabled", "true") : a(".dw-cal-prev-y", o).removeClass($).removeAttr("aria-disabled");
            new Date(b + 1, e, 1) > J ? a(".dw-cal-next-y",
                o).addClass($).attr("aria-disabled", "true") : a(".dw-cal-next-y", o).removeClass($).removeAttr("aria-disabled")
        }

        function r() {
            var c = j.getDate(!0);
            v.calendar && l && "calendar" === V && (c.getFullYear() === b && c.getMonth() === y ? (l = c, j.trigger("onDayHighlight", [c]), z.highlight && c.getFullYear() === b && c.getMonth() === y && (a(".dw-cal .dw-sel", o).removeClass("dw-sel").removeAttr("aria-selected"), c = a('.dw-cal .dw-cal-day[data-full="' + b + "-" + y + "-" + c.getDate() + '"]', o).addClass("dw-sel").attr("aria-selected", "true").parent(),
                a(".dw-cal-week-hl", o).removeClass("dw-cal-week-hl"), c && c.addClass("dw-cal-week-hl"), W && (a(".dw-cal .ui-btn-active", o).removeClass("ui-btn-active"), a(".dw-cal .dw-sel .dw-i", o).addClass("ui-btn-active")))) : c > l ? (b = c.getFullYear(), y = c.getMonth(), e.call(this, b, y, "next", !0, !0)) : c < l && (b = c.getFullYear(), y = c.getMonth(), e.call(this, b, y, "prev", !0, !0)))
        }

        function n(a) {
            a.length && (a[0].style.display = "run-in", setTimeout(function () {
                a[0].style.display = ""
            }, 0))
        }

        function q(a, b, c) {
            H.html(F(a, b - 1));
            E.html(c);
            t.html(F(a,
                b + 1))
        }

        function e(c, f, g, h, k) {
            if (S) P.push({
                y: c,
                m: f,
                dir: g,
                load: h,
                focus: k
            });
            else {
                var m = new Date(c, f, 1),
                    c = m.getFullYear(),
                    f = m.getMonth();
                j.trigger("onMonthChange", [c, f]);
                S = !0;
                "next" == g ? (h && t.html(F(c, f)), K = t.html(), H.hide(), t.show(), x.removeClass("dw-cal-anim-prev")) : (h && H.html(F(c, f)), K = H.html(), H.show(), t.hide(), x.addClass("dw-cal-anim-prev"));
                D(c, f);
                x.addClass("dw-cal-anim-pa");
                setTimeout(function () {
                    g == "next" ? x.addClass("dw-cal-anim-a dw-cal-anim-prev") : x.addClass("dw-cal-anim-a").removeClass("dw-cal-anim-prev");
                    setTimeout(function () {
                        x.removeClass("dw-cal-anim-a dw-cal-anim-pa");
                        g == "next" ? x.removeClass("dw-cal-anim-prev") : x.addClass("dw-cal-anim-prev");
                        q(c, f, K);
                        S = false;
                        if (P.length) {
                            var h = P.shift();
                            e(h.y, h.m, h.dir, h.load, h.focus)
                        } else {
                            n(a(".dw-cal-anim", o));
                            b = c;
                            y = f;
                            l = new Date(c, f, 1);
                            k && a(".dw-cal-day.dw-sel", E).focus()
                        }
                    }, 200)
                }, 10)
            }
        }

        function k() {
            var c = a(this),
                e = c.attr("data-date"),
                f = c.attr("data-full"),
                g = new Date(b, y, e),
                c = c.hasClass("dw-sel"),
                h = "inline" === z.display,
                k = j.getDate(!0);
            !1 !== j.trigger("onDayChange", [a.extend(R[f], {
                date: g,
                cell: this,
                selected: c
            })]) && j.setDate(new Date(b, y, e, k.getHours(), k.getMinutes(), k.getSeconds()), h, 0.2, !h, !0)
        }

        function f(a, b) {
            var c = a.originalEvent,
                e = a.changedTouches;
            return e || c && c.changedTouches ? c ? c.changedTouches[0]["page" + b] : e[0]["page" + b] : a["page" + b]
        }

        function w() {
            var b, c = 0,
                e = 0;
            if (aa || ra) a(".dwc", o).removeClass("dwc-h"), a.each(v, function (a, f) {
                b = f.outerWidth(!0);
                c = Math.max(c, b);
                e += b
            });
            aa || e > o.parent().width() ? (V = a(".dw-cal-tabs .dw-sel", o).attr("data-control"), a(".dw", o).addClass("dw-cal-tabbed"),
                a(".dwc", o).addClass("dwc-h"), v[V].removeClass("dwc-h"), "liquid" !== ea && a(".dwcc", o).width(c)) : (V = "calendar", a(".dwcc", o).width("auto"), a(".dw", o).removeClass("dw-cal-tabbed"))
        }

        function c() {
            if (ja) {
                var b = 0;
                a(".dw-cal-btnc", o).addClass("dw-cal-btnc-test");
                a.each(z.monthNames, function (c, e) {
                    b = Math.max(a(".dw-cal-month", o).text(e).outerWidth(!0), b)
                });
                a(".dw-cal-btnc", o).removeClass("dw-cal-btnc-test");
                C = b > a(".dw-cal-btnw", o).width() ? z.monthNamesShort : z.monthNames;
                a(".dw-cal-month", o).text(C[y])
            }
        }
        var p,
            m, o, x, s, H, E, t, C, K, B, J, M, Y, l, b, y, A, L, O, X, N, T, Z, V = "calendar",
            U = this,
            S = !1,
            P = [],
            Q = {}, v = {}, R = {};
        m = a.extend({}, j.settings);
        var z = a.extend(j.settings, g, m),
            ka = z.weekCounter,
            ea = z.layout || (/top|bottom/.test(z.display) ? "liquid" : ""),
            W = "jqm" == z.theme,
            ja = "yearMonth" == z.navigation;
        m = z.controls.join(",");
        var aa = (!0 === z.tabs || !1 !== z.tabs && "liquid" == ea) && 1 < z.controls.length,
            ra = !aa && void 0 === z.tabs && "liquid" !== ea && 1 < z.controls.length,
            $ = "dwb-d" + (W ? " ui-disabled" : "");
        m.match(/calendar/) && (v.calendar = 1);
        m.match(/date/) &&
            (v.date = 1);
        m.match(/time/) && (v.time = 1);
        v.calendar && v.date && (aa = !0, ra = !1);
        z.preset = (v.date || v.calendar ? "date" : "") + (v.time ? "time" : "");
        j.getDayProps = function () {
            return {}
        };
        j.refresh = function () {
            if (j.isVisible() && v.calendar) {
                K = F(b, y);
                q(b, y, K)
            }
        };
        j.isInObj = h;
        m = a.mobiscroll.presets.datetime.call(this, j);
        T = m.validate;
        a.extend(m, {
            onMarkupReady: function (g) {
                o = g;
                var h, m, D = "",
                    T = z.dateOrder.search(/m/i),
                    aa = z.dateOrder.search(/y/i);
                l = j.getDate(true);
                b = l.getFullYear();
                y = l.getMonth();
                C = z.monthNames;
                if (z.minDate) {
                    B = new Date(z.minDate.getFullYear(),
                        z.minDate.getMonth(), 1);
                    M = z.minDate
                } else M = B = new Date(z.startYear, 0, 1); if (z.maxDate) {
                    J = new Date(z.maxDate.getFullYear(), z.maxDate.getMonth(), 1);
                    Y = z.maxDate
                } else Y = J = new Date(z.endYear, 11, 31, 23, 59, 59);
                g.addClass("dw-calendar");
                u.util.has3d || g.addClass("dw-no3d");
                v.date ? v.date = a(".dwc", o).eq(0) : v.calendar && a(".dwc", o).eq(0).addClass("dwc-h").hide();
                if (v.time) v.time = a(".dwc", o).eq(1);
                if (v.calendar) {
                    m = '<div class="dw-cal-btnw"><div class="dw-cal-prev dw-cal-prev-m dw-cal-btn dwb dwb-e"><a href="#" role="button" class="dw-cal-btn-txt"' +
                        (W ? 'data-role="button" data-icon="arrow-l" data-iconpos="notext"' : "") + ">" + z.prevMonthText + "</a></div>" + (!ja && aa < T ? '<span aria-live="assertive" class="dw-cal-year"></span>&nbsp;' : "") + '<span aria-live="assertive" class="dw-cal-month"></span>' + (!ja && aa > T ? '&nbsp;<span aria-live="assertive" class="dw-cal-year"></span>' : "") + '<div class="dw-cal-next dw-cal-next-m dw-cal-btn dwb dwb-e"><a href="#" role="button" class="dw-cal-btn-txt"' + (W ? 'data-role="button" data-icon="arrow-r" data-iconpos="notext"' : "") +
                        ">" + z.nextMonthText + "</a></div></div>";
                    ja && (D = '<div class="dw-cal-btnw"><div class="dw-cal-prev dw-cal-prev-y dw-cal-btn dwb dwb-e"><a href="#" role="button" class="dw-cal-btn-txt"' + (W ? 'data-role="button" data-icon="arrow-l" data-iconpos="notext"' : "") + ">" + z.prevYearText + '</a></div><span aria-live="assertive" class="dw-cal-year"></span><div class="dw-cal-next dw-cal-next-y dw-cal-btn dwb dwb-e"><a href="#" role="button" class="dw-cal-btn-txt"' + (W ? 'data-role="button" data-icon="arrow-r" data-iconpos="notext"' :
                        "") + ">" + z.nextYearText + "</a></div></div>");
                    s = '<div class="dwc dw-cal-c"><div class="dw-cal' + (ka ? " dw-weeks" : "") + (W ? " ui-body-" + z.jqmBody : "") + '"><div class="dw-cal-header"><div class="dw-cal-btnc ' + (ja ? "dw-cal-btnc-ym" : "dw-cal-btnc-m") + '">' + (aa < T ? D + m : m + D) + '</div><div class="dw-cal-days"><table cellpadding="0" cellspacing="0"><tr>';
                    for (p = 0; p < 7; p++) s = s + ("<th>" + z.dayNamesShort[(p + z.firstDay) % 7] + "</th>");
                    s = s + '</tr></table></div></div><div class="dw-cal-anim-c"><div class="dw-cal-anim"><div class="dw-cal-slide dw-cal-slide1" style="display:none;"></div><div class="dw-cal-slide dw-cal-slide2"></div><div class="dw-cal-slide dw-cal-slide3"></div></div></div><div class="dw-cal-f"></div></div></div>';
                    v.calendar = a(s)
                }
                a.each(z.controls, function (b, c) {
                    a(".dwcc", o).append(v[c].attr("id", U.id + "_dw_pnl_" + b))
                });
                h = '<div class="dw-cal-tabs"' + (W ? ' data-role="navbar"' : "") + '><ul role="tablist">';
                a.each(z.controls, function (a, b) {
                    v[b] && (h = h + ('<li role="tab" aria-controls="' + (U.id + "_dw_pnl_" + a) + '" class="dwb-e dw-cal-tab' + (a ? "" : " dw-sel") + '" data-control="' + b + '"' + (W ? "" : ' tabindex="0"') + "><" + (W ? 'a href="#"' : 'span class="dw-i"') + (!a && W ? ' class="ui-btn-active"' : "") + ">" + z[b + "Text"] + "</" + (W ? "a" : "span") + "></li>"))
                });
                h = h + "</ul></div>";
                a(".dwcc", g).before(h);
                x = a(".dw-cal-anim-c", o);
                H = a(".dw-cal-slide1", o);
                E = a(".dw-cal-slide2", o);
                t = a(".dw-cal-slide3", o);
                K = F(b, y);
                q(b, y, K);
                x.on("touchstart mousedown", ".dw-cal-day-v", function (a) {
                    if (a.type === "touchstart") R = true;
                    else if (R) return false;
                    Z = false;
                    A = f(a, "X");
                    L = f(a, "Y")
                }).on("touchmove", function (a) {
                    Math.abs(f(a, "Y") - L) > 5 && (Z = true)
                }).on("touchend touchcancel", ".dw-cal-day-v", function (b) {
                    !S && !Z && Math.abs(f(b, "X") - A) < 20 && Math.abs(f(b, "Y") - L) < 20 && k.call(this);
                    a(".dwb-a", o).removeClass("dwb-a")
                }).on("click",
                    ".dw-cal-day-v", function () {
                        !S && !R && k.call(this);
                        R = false
                    });
                j.tap(a(".dw-cal-prev-m", o), function () {
                    new Date(b, y - 1, 1) >= B && P.length < 5 && e(b, --y, "prev")
                });
                j.tap(a(".dw-cal-next-m", o), function () {
                    new Date(b, y + 1, 1) <= J && P.length < 5 && e(b, ++y, "next")
                });
                j.tap(a(".dw-cal-prev-y", o), function () {
                    if (new Date(b - 1, y, 1) >= B && P.length < 5) {
                        b--;
                        e(b, y, "prev", true)
                    }
                });
                j.tap(a(".dw-cal-next-y", o), function () {
                    if (new Date(b + 1, y, 1) <= J && P.length < 5) {
                        b++;
                        e(b, y, "next", true)
                    }
                });
                j.tap(a(".dw-cal-tab", o), function () {
                    V = a(this).attr("data-control");
                    a(".dwc", o).addClass("dwc-h");
                    a(".dw-cal-tab", o).removeClass("dw-sel").removeAttr("aria-selected");
                    a(this).addClass("dw-sel").attr("aria-selected", "true");
                    V === "calendar" && r();
                    v[V].removeClass("dwc-h");
                    n(a(".dwwc", v[V]))
                });
                ea == "liquid" && z.display !== "bubble" ? g.addClass("dw-cal-liq") : z.calendarWidth && a(".dw-cal", o).width(z.calendarWidth);
                z.calendarHeight && a(".dw-cal-anim-c", o).height(z.calendarHeight);
                a(window).on(window.onorientationchange !== void 0 ? "orientationchange.dw-cal" : "resize.dw-cal", function () {
                    clearTimeout(N);
                    N = setTimeout(function () {
                        ra && w();
                        c();
                        j.trigger("onCalResize", [])
                    }, 100)
                });
                a(".dwwl", g).on("mousedown touchstart", function () {
                    clearTimeout(Q[a(".dwwl", g).index(this)])
                });
                if (z.swipe) {
                    var $ = true,
                        R = window.ontouchstart !== void 0,
                        ga, fa, da;
                    x.on(R ? "touchstart" : "mousedown", function (c) {
                        ga = setTimeout(function () {
                            $ = true;
                            a(document).off(".dw-sw");
                            a(".dwb-a", o).removeClass("dwb-a")
                        }, 300);
                        if ($) {
                            fa = new Date;
                            A = f(c, "X");
                            L = f(c, "Y");
                            $ = false;
                            a(document).on(R ? "touchmove.dw-sw" : "mousemove.dw-sw", function (b) {
                                O = f(b, "X");
                                X = f(b,
                                    "Y");
                                da = new Date;
                                diff = O - A;
                                !S && (Math.abs(O - A) > 20 || Math.abs(X - L) > 20) && a(".dwb-a", o).removeClass("dwb-a");
                                if (da - fa < 300 && Math.abs(diff) > 20) {
                                    clearTimeout(ga);
                                    b.preventDefault()
                                }
                            }).on(R ? "touchend.dw-sw" : "mouseup.dw-sw", function (c) {
                                $ = true;
                                da = new Date;
                                O = f(c, "X");
                                diff = O - A;
                                da - fa < 300 && P.length < 5 && (diff > 50 && new Date(b, y - 1, 1) >= B ? e(b, --y, "prev") : diff < -50 && new Date(b, y + 1, 1) <= J && e(b, ++y, "next"));
                                a(document).off(".dw-sw")
                            })
                        }
                    })
                }
            },
            onMarkupInserted: function () {
                c();
                w();
                D(b, y)
            },
            onPosition: function () {
                if (ea == "liquid" && z.display ==
                    "modal") {
                    x.height("auto");
                    var b = window.innerHeight || a(window).height(),
                        c = a(".dw", o).outerHeight(),
                        e = c - x.height();
                    b > c && x.height(b - e)
                }
            },
            onClose: function () {
                a(window).off(".dw-cal");
                l = null
            },
            validate: function (a, b, c) {
                T.call(this, a, b);
                j.trigger("onSetDate", []);
                if (b !== void 0) {
                    clearTimeout(Q[b]);
                    Q[b] = setTimeout(function () {
                        r()
                    }, c * 1E3)
                } else r()
            }
        });
        return m
    }
})(jQuery);
(function (a) {
    var u = a.mobiscroll,
        g = {
            firstSelectDay: 0,
            closeText: "Close"
        };
    u.presetShort("calendar");
    u.presets.calendar = function (j) {
        function h(b) {
            if (b) {
                var b = a('<div style="background-color:' + b + ';"></div>').appendTo("body"),
                    c = (window.getComputedStyle ? getComputedStyle(b[0]) : b[0].style).backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, "").split(","),
                    c = 0.299 * c[0] + 0.587 * c[1] + 0.114 * c[2];
                b.remove();
                return 130 < c ? "#000" : "#fff"
            }
        }

        function F() {
            k.removeClass("dw-cal-events-v");
            f && (f.removeClass(K), C && a(".dw-i", f).removeClass("ui-btn-active"));
            p = !1
        }

        function D() {
            b && F();
            j.refresh()
        }

        function r(a) {
            u.util.has3d ? c.css(u.util.prefix + "-transform", "translateY(" + a + "px)") : c.css("top", a)
        }

        function n(a, b) {
            var c = a.originalEvent,
                e = a.changedTouches;
            return e || c && c.changedTouches ? c ? c.changedTouches[0]["page" + b] : e[0]["page" + b] : a["page" + b]
        }
        var q, e, k, f, w, c, p, m, o, x, s, H, E;
        x = a.extend({}, j.settings);
        var t = a.extend(j.settings, g, x),
            C = "jqm" == t.theme,
            K = "dw-sel dw-cal-day-ev",
            B = t.multiSelect || "week" == t.selectType,
            J = t.markedDisplay,
            M = !0 === t.events || !0 === t.markedText,
            Y = 0,
            l = {}, b = a.isArray(t.events),
            y = b ? t.events.splice(0) : [];
        x = a.mobiscroll.presets.calbase.call(this, j);
        q = a.extend({}, x);
        if (t.selectedValues)
            for (i = 0; i < t.selectedValues.length; i++) d = t.selectedValues[i], j._selectedValues[d] = d;
        b && a.each(y, function (a, b) {
            b._id = Y++
        });
        j.getDayProps = function (a) {
            var c = new Date,
                c = B ? void 0 !== j._selectedValues[a] : b ? a.getTime() === c.setHours(0, 0, 0, 0) : void 0,
                e = j.isInObj(a, t.marked),
                a = b && j.isInObj(a, y),
                a = e || a,
                e = e.text,
                f = a.color,
                g = h(f);
            return {
                marked: a,
                selected: c,
                cssClass: b && c ? "dw-cal-day-hl" : "",
                markup: M && e ? '<div class="dw-cal-day-txt-c"><div class="dw-cal-day-txt' + (C ? " ui-btn-up-b" : "") + '" title="' + e + '"' + (f ? ' style="background:' + f + ";color:" + g + ';text-shadow:none;"' : "") + ">" + e + "</div></div>" : a ? '<div class="dw-cal-day-m"' + (f ? ' style="background-color:' + f + ";border-color:" + f + " " + f + ' transparent transparent"' : "") + "></div>" : ""
            }
        };
        j.addValue = function (a) {
            j._selectedValues[a] = a;
            D()
        };
        j.removeValue = function (a) {
            delete j._selectedValues[a];
            D()
        };
        j.setValues = function (a) {
            var b = 0;
            j._selectedValues = {};
            for (b; b <
                a.length; b++) j._selectedValues[a[b]] = a[b];
            D()
        };
        b && (j.addEvent = function (b) {
            var c = [],
                b = a.isArray(b) ? b : [b];
            a.each(b, function (a, b) {
                b._id = Y++;
                l[b._id] = y.length;
                y.push(b);
                c.push(b._id)
            });
            D();
            return c
        }, j.removeEvent = function (b) {
            b = a.isArray(b) ? b : [b];
            a.each(b, function (a, b) {
                y.splice(l[b], 1);
                delete l[b]
            });
            D()
        }, j.getEvents = function () {
            return y
        }, j.setEvents = function (b) {
            var c = [];
            y = b.splice(0);
            a.each(y, function (a, b) {
                b._id = Y++;
                c.push(b._id)
            });
            D();
            return c
        });
        a.extend(x, {
            highlight: !B && !b,
            cancelText: b ? t.closeText : void 0,
            onBeforeShow: function () {
                if (b) t.headerText = false
            },
            onMarkupReady: function (f) {
                q.onMarkupReady.call(this, f);
                e = f;
                B && a(".dwv", f).attr("aria-live", "off");
                M && a(".dw-cal", f).addClass("dw-cal-ev");
                J && a(".dw-cal", f).addClass("dw-cal-m-" + J);
                if (b) {
                    f.addClass("dw-cal-em");
                    k = a('<div class="dw-cal-events' + (C ? ' ui-body-a" data-role="page' : "") + '"><div class="dw-cal-events-arr"></div><div class="dw-cal-events-i"><div class="dw-cal-events-sc"></div></div></div>').appendTo(a(".dw-cal-c", f));
                    w = a(".dw-cal-events-i", k);
                    c = a(".dw-cal-events-sc", k);
                    k.on("touchstart mousedown", function (b) {
                        if (m < 0) {
                            E = b.type === "touchstart";
                            s = false;
                            H = o;
                            startY = n(b, "Y");
                            endY = n(b, "Y");
                            a(document).on(E ? "touchmove.dwsc" : "mousemove.dwsc", function (a) {
                                a.preventDefault();
                                endY = n(a, "Y");
                                o = Math.min(0, Math.max(H + endY - startY, m));
                                r(o);
                                Math.abs(endY - startY) > 5 && (s = true)
                            }).on(E ? "touchend.dwsc" : "mouseup.dwsc", function () {
                                a(document).off(".dwsc")
                            })
                        }
                    });
                    j.tap(k, function () {
                        s || F()
                    })
                }
            },
            onMonthChange: function () {
                b && F()
            },
            onDayChange: function (g) {
                var l, q = g.date,
                    n = a(g.cell),
                    g = g.selected;
                if (b) {
                    if (n.hasClass("dw-cal-day-ev")) F();
                    else {
                        F();
                        if (l = j.isInObj(q, y, true)) {
                            var x, u;
                            u = a(".dw-cal-c", e).height();
                            var J = n.height(),
                                g = n.width(),
                                H = n.offset().top - a(".dw-cal-c", e).offset().top,
                                E = n.closest(".dw-cal-row").index() < 2,
                                M = '<ul class="dw-cal-event-list"' + (C ? ' data-role="listview"' : "") + ">";
                            o = 0;
                            s = false;
                            f = n;
                            n.addClass(K);
                            a.each(l, function (a, b) {
                                x = b.color;
                                h(x);
                                M = M + ('<li class="dw-cal-event"><div class="dw-cal-event-color" style="' + (x ? "background:" + x + ";" : "") + '"></div>' + b.text + "</li>")
                            });
                            M = M + "</ul>";
                            c.html(M);
                            if (C) {
                                a(".dw-i", f).addClass("ui-btn-active");
                                k.page().trigger("create")
                            }
                            u = k.addClass("dw-cal-events-t").css({
                                top: E ? H + J : "0",
                                bottom: E ? "0" : u - H
                            }).addClass("dw-cal-events-v").height();
                            m = u - c.height();
                            k.css(E ? "bottom" : "top", "auto").removeClass("dw-cal-events-t");
                            w.css("max-height", u);
                            r(0);
                            E ? k.addClass("dw-cal-events-b") : k.removeClass("dw-cal-events-b");
                            a(".dw-cal-events-arr", k).css("left", n.offset().left - k.offset().left + g / 2);
                            j.tap(a(".dw-cal-event", c), function (b) {
                                s || j.trigger("onEventSelect", [b, l[a(this).index()], q])
                            });
                            p = true
                        }
                    }
                    return false
                }
                if (B)
                    if (t.selectType == "week") {
                        u = q.getDay() - t.firstSelectDay;
                        u = u < 0 ? 7 + u : u;
                        if (!t.multiSelect) j._selectedValues = {};
                        for (n = 0; n < 7; n++) {
                            E = new Date(q.getFullYear(), q.getMonth(), q.getDate() - u + n);
                            g ? delete j._selectedValues[E] : j._selectedValues[E] = E
                        }
                        D()
                    } else {
                        n = a('.dw-cal .dw-cal-day[data-full="' + n.attr("data-full") + '"]', e);
                        C && a(".dw-i", n).toggleClass("ui-btn-active");
                        if (g) {
                            n.removeClass("dw-sel").removeAttr("aria-selected");
                            delete j._selectedValues[q]
                        } else {
                            n.addClass("dw-sel").attr("aria-selected",
                                "true");
                            j._selectedValues[q] = q
                        }
                    }
            },
            onCalResize: function () {
                p && a(".dw-cal-events-arr", k).css("left", f.offset().left - k.offset().left + f.width() / 2)
            }
        });
        return x
    }
})(jQuery);
(function (a) {
    var u = a.mobiscroll,
        g = {
            fromText: "Start",
            toText: "End"
        };
    u.presetShort("rangepicker");
    u.presets.rangepicker = function (j) {
        function h(a, c) {
            a.setFullYear(c.getFullYear());
            a.setMonth(c.getMonth());
            a.setDate(c.getDate())
        }

        function F() {
            k = p;
            f = m;
            w = o;
            c = x;
            t.startInput && a(t.startInput).val(f).change();
            t.endInput && a(t.endInput).val(c).change()
        }
        var D, r, n, q, e, k, f, w, c, p, m, o, x, s, H = 0;
        e = new Date;
        var E = a.extend({}, j.settings),
            t = a.extend(j.settings, g, E),
            C = "jqm" === t.theme,
            K = t.defaultValue || [new Date(e.setHours(0,
                0, 0, 0)), new Date(e.setHours(23, 59, 59, 999))];
        e = a.mobiscroll.presets.calbase.call(this, j);
        r = a.extend({}, e);
        q = j.format;
        s = "time" === t.controls.join("");
        j._setValue || (j._setValue = j.setValue);
        j.setValue = function (a, e, g, h, l) {
            var b = a;
            if (a[0] && a[0].getTime) {
                p = a[0];
                m = u.formatDate(q, p, t);
                H || (b = r.parseValue(m))
            }
            if (a[1] && a[1].getTime) {
                o = a[1];
                x = u.formatDate(q, o, t);
                H && (b = r.parseValue(x))
            }
            if (!h) {
                k = p;
                f = m;
                w = o;
                c = x
            }
            j._setValue.call(this, b, e, g, h, l)
        };
        j.getValue = function () {
            return [k, w]
        };
        j.getDayProps = function (a) {
            var c = new Date(p.getFullYear(),
                p.getMonth(), p.getDate()),
                e = new Date(o.getFullYear(), o.getMonth(), o.getDate());
            return {
                selected: a >= c && a <= o,
                cssClass: !H && c.getTime() === a.getTime() || H && e.getTime() === a.getTime() ? "dw-cal-day-hl" : ""
            }
        };
        a.extend(e, {
            highlight: !1,
            formatResult: function () {
                return m + (t.endInput ? "" : " - " + x)
            },
            parseValue: function (e) {
                e = e.split(" - ");
                t.defaultValue = K[1];
                w = t.endInput ? u.parseDate(q, a(t.endInput).val(), t) : u.parseDate(q, e[1], t);
                t.defaultValue = K[0];
                k = t.startInput ? u.parseDate(q, a(t.startInput).val(), t) : u.parseDate(q, e[0],
                    t);
                t.defaultValue = K[H];
                f = u.formatDate(q, k, t);
                c = u.formatDate(q, w, t);
                return r.parseValue(H ? c : f, j)
            },
            onChange: function () {
                t.display === "inline" && F()
            },
            onSelect: function () {
                F()
            },
            onBeforeShow: function () {
                t.headerText = false;
                p = k;
                m = f;
                o = w;
                x = c
            },
            onMarkupReady: function (e) {
                var g;
                n = e;
                H = 0;
                r.onMarkupReady.call(this, e);
                e.addClass("dw-rangepicker");
                g = '<div class="dw-dr-t" role="radiogroup"><div class="dw-dr-c dw-dr0"><a href="#" role="radio" data-role="button" data-mini="true" class="dwb-e dw-i dw-dr">' + t.fromText + '<div class="dw-drv dw-drv0">' +
                    f + '</div></a></div><div class="dw-dr-c dw-dr1"><a href="#" role="radio" data-role="button" data-mini="true" class="dwb-e dw-i dw-dr">' + t.toText + '<div class="dw-drv dw-drv1">' + c + "</div></a></div></div>";
                a(".dw-cal-tabs", e).before(g);
                D = a(".dw-dr" + H, e).addClass("dw-sel").attr("aria-checked", "true");
                C && a(".dw-dr", D).addClass("ui-btn-active");
                j.tap(a(".dw-dr-c", e), function () {
                    H = a(this).index();
                    D.removeClass("dw-sel").removeAttr("aria-checked");
                    D = a(this).addClass("dw-sel").attr("aria-checked", "true");
                    if (C) {
                        a(".dw-dr",
                            n).removeClass("ui-btn-active");
                        a(".dw-dr", D).addClass("ui-btn-active")
                    }
                    j.setDate(H ? o : p, false, 0.2, true)
                })
            },
            onDayHighlight: function () {
                j.refresh()
            },
            onSetDate: function () {
                var c = r.formatResult.call(this, j.temp),
                    e = j.getDate(true);
                a(".dw-drv" + H, n).text(c);
                if (H) {
                    o = e;
                    x = c
                } else {
                    p = e;
                    m = c
                } if (s) {
                    h(p, e);
                    h(o, e)
                }
                if (p > o)
                    if (H) {
                        p = new Date(o.getTime());
                        p.setHours(0, 0, 0, 0);
                        m = u.formatDate(q, p, t);
                        a(".dw-drv0", n).text(m)
                    } else {
                        o = new Date(p.getTime());
                        o.setHours(23, 59, 59, 999);
                        x = u.formatDate(q, o, t);
                        a(".dw-drv1", n).text(x)
                    }
            }
        });
        return e
    }
})(jQuery);
(function (a) {
    var u = {
        inputClass: "",
        values: 5,
        order: "desc",
        style: "star",
        invalid: []
    };
    a.mobiscroll.presetShort("rating");
    a.mobiscroll.presets.rating = function (g) {
        var j = a.extend({}, g.settings),
            h = a.extend(g.settings, u, j),
            F = a(this),
            j = this.id + "_dummy";
        a('label[for="' + this.id + '"]').attr("for", j);
        var D = a('label[for="' + j + '"]'),
            r = [
                []
            ],
            D = {
                keys: [],
                values: [],
                labels: [],
                label: void 0 !== h.label ? h.label : D.length ? D.text() : F.attr("name")
            }, n = {}, q = [],
            e, k = !1,
            f, w, c, p, m, o = "grade" === h.style ? "circle" : "star";
        e = null;
        F.is("select") &&
            (h.values = {}, a("option", F).each(function () {
            h.values[a(this).val()] = a(this).text()
        }), a("#" + j).remove());
        if (a.isArray(h.values))
            for (f = 0; f < h.values.length; f++) c = +h.values[f], isNaN(c) && (c = f + 1, k = !0), q.push({
                order: c,
                key: h.values[f],
                value: h.values[f]
            });
        else if (a.isPlainObject(h.values))
            for (w in f = 1, k = !0, h.values) c = +w, isNaN(c) && (c = f), q.push({
                order: c,
                key: w,
                value: h.values[w]
            }), f++;
        else
            for (f = 1; f <= h.values; f++) q.push({
                order: f,
                key: f,
                value: f
            });
        void 0 === h.showText && k && (h.showText = !0);
        q.sort(function (a, c) {
            return h.order ==
                "desc" ? c.order - a.order : a.order - c.order
        });
        m = "desc" == h.order ? q[0].order : q[q.length - 1].order;
        for (f = 0; f < q.length; f++) {
            order = q[f].order;
            c = q[f].key;
            p = q[f].value;
            k = "";
            for (w = 1; w < order + 1; w++) k += '<div class="rating-star-cont"><div class="rating-' + o + " rating-filled-" + o + '">' + ("circle" == o ? w : "") + "</div></div>";
            for (w = order + 1; w <= m; w++) k += '<div class="rating-star-cont"><div class="rating-' + o + " rating-unfilled-" + o + '"></div></div>';
            k += h.showText ? '<div class="rating-txt">' + p + "</div>" : "";
            D.keys.push(c);
            D.values.push(k);
            D.labels.push(p);
            n[c] = p
        }
        F.is("select") && (e = a('<input type="text" id="' + j + '" value="' + n[F.val()] + '" class="' + h.inputClass + '" readonly />').insertBefore(F));
        r[0].push(D);
        e && (h.showOnFocus && e.focus(function () {
            g.show()
        }), h.showOnTap && g.tap(e, function () {
            g.show()
        }));
        F.is("select") && F.hide().closest(".ui-field-contain").trigger("create");
        return {
            height: "wp" === h.theme || "wp light" === h.theme ? 76 : 40,
            wheels: r,
            headerText: !1,
            formatResult: function (a) {
                return n[a[0]]
            },
            parseValue: function () {
                var a = h.defaultValue,
                    c;
                for (c in n) {
                    a ===
                        void 0 && (a = c);
                    if (e && c == F.val() || !e && n[c] == F.val()) return [c]
                }
                return [a]
            },
            validate: function (c) {
                a.each(h.invalid, function (e, f) {
                    a('.dw-li[data-val="' + f + '"]', c).removeClass("dw-v")
                })
            },
            onMarkupReady: function (a) {
                a.addClass("dw-rating")
            },
            onSelect: function (a, c) {
                if (e) {
                    e.val(a);
                    F.val(c.values[0]).change()
                }
            },
            onChange: function (a, c) {
                if (h.display == "inline" && e) {
                    e.val(a);
                    F.val(c.values[0]).change()
                }
            },
            onClose: function () {
                e && e.blur()
            }
        }
    }
})(jQuery);
(function (a) {
    var u = {
        batch: 50,
        min: 0,
        max: 100,
        defUnit: "",
        units: null,
        unitNames: null,
        invalid: [],
        sign: !1,
        signText: "&nbsp;",
        wholeText: "Whole",
        fractionText: "Fraction",
        unitText: "Unit",
        step: 0.05,
        convert: function (a) {
            return a
        }
    };
    a.mobiscroll.presets.measurement = function (g) {
        function j(a) {
            return M ? 0 > a ? Math.ceil(a) : Math.floor(a) : r(Math.round(a), l)
        }

        function h(a) {
            return M ? r(100 * (Math.abs(a) - j(Math.abs(a))), l) : 0
        }

        function F(a) {
            var b = j(a),
                c = h(a);
            100 <= c && (0 > a ? b-- : b++, c = 0);
            return [0 > a ? "-" : "+", b, c]
        }

        function D(a) {
            var b = +a[O],
                c = M ? q(a[L]) / 100 * (0 > b ? -1 : 1) : 0;
            return (m.sign && "-" == a[0] ? -1 : 1) * (b + c)
        }

        function r(a, b) {
            return Math.round(a / b) * b
        }

        function n(a, b) {
            for (a += ""; a.length < b;) a = "0" + a;
            return a
        }

        function q(a) {
            return a ? (a + "").replace(/\+|\-/g, "") : ""
        }

        function e(a, b, c) {
            return b === c ? a : m.convert.call(this, a, b, c)
        }

        function k(a, b, c) {
            a = a > c ? c : a;
            return a < b ? b : a
        }

        function f(a) {
            N = e(m.min, B, a);
            T = e(m.max, B, a);
            Z = j(N);
            V = j(T);
            U = h(N);
            S = h(T);
            100 <= S && (V++, S = 0)
        }

        function w(a, b) {
            f(a);
            var c = +Z,
                e = +V,
                g = M ? 1 : l,
                h;
            m.sign && (e = Math.abs(c) > Math.abs(e) ? Math.abs(c) :
                Math.abs(e), c = 0 > c ? 0 : c);
            h = b - E * g;
            h = h < c ? c : h;
            c = h + 2 * E * g;
            c = c > e ? e : c;
            if (h !== t || c !== C) {
                x.values = [];
                x.label = m.wholeText;
                for (v = h; v <= c; v += g) x.values.push(v);
                t = h;
                C = c;
                return !0
            }
            return !1
        }

        function c(b) {
            if (Y) {
                var c = H.length,
                    b = a.inArray(+b, H),
                    e, f;
                s.keys = [];
                s.values = [];
                for (v = -50; 50 > v; v++) e = (v + b) % c, f = H[0 > e ? c + e : e], e = Math.abs(Math.floor((v + b) / c)), s.keys.push(Array(e).join(0 > v + b ? "-" : "+") + f), s.values.push("." + n(f, 2))
            }
        }
        var p = a.extend({}, g.settings),
            m = a.extend(g.settings, u, p);
        a(this);
        var p = {}, o = [
                []
            ],
            x = {}, s = {}, H = [],
            E = m.batch,
            t, C, K = m.units && m.units.length,
            B = K ? m.defUnit || m.units[0] : "",
            J = m.unitNames || m.units,
            M = 1 > m.step,
            Y = !1,
            l = Math.round(M ? 100 * m.step : m.step),
            b, y, A = -1,
            L, O, X, N, T, Z, V, U, S, P, Q = {}, v, R = 0;
        if (m.sign) {
            sign = !1;
            for (v = 0; v < m.units.length; v++) 0 > e(m.min, B, m.units[v]) && (sign = !0);
            m.sign = m.sign && sign
        }
        m.sign && (o[0].push({
            values: ["-", "+"],
            label: m.signText
        }), A = R++);
        o[0].push(x);
        O = R++;
        if (M) {
            o[0].push(s);
            s.keys = [];
            s.values = [];
            s.label = m.fractionText;
            for (v = 0; 100 > v; v += l) H.push(v), s.keys.push(v), s.values.push("." + n(v, 2));
            Y = H.length >
                m.rows;
            L = R++
        }
        if (K) {
            p = {
                keys: [],
                values: [],
                label: m.unitText
            };
            for (v = 0; v < m.units.length; v++) p.keys.push(v), p.values.push(J[v]);
            o[0].push(p)
        }
        X = R;
        return {
            width: 55,
            wheels: o,
            formatResult: function (a) {
                return D(a).toFixed(M ? 2 : 0) + (K ? " " + J[a[X]] : "")
            },
            parseValue: function (b) {
                var c = ((b || m.defaultValue) + "").split(" "),
                    e = +c[0],
                    b = [],
                    g = "";
                if (K) {
                    g = a.inArray(c[1], J);
                    g = g == -1 ? a.inArray(B, m.units) : g;
                    g = g == -1 ? 0 : g
                }
                f(K ? m.units[g] : "");
                e = isNaN(e) ? 0 : e;
                c = F(e);
                c[1] = k(c[1], Z, V);
                if (m.sign) {
                    b[0] = c[0];
                    c[1] = Math.abs(c[1])
                }
                b[O] = c[1];
                M && (b[L] =
                    c[2]);
                K && (b[X] = g);
                return b
            },
            onBeforeShow: function () {
                w(K ? m.units[g.temp[X]] : "", q(g.temp[O]));
                c(q(g.temp[L]));
                P = true
            },
            onShow: function (b) {
                a(".dwwl", b).on("mousedown touchstart", function () {
                    clearTimeout(Q[a(".dwwl", b).index(this)])
                })
            },
            onCancel: function () {
                b = void 0
            },
            validate: function (f, h, j) {
                var n = g.temp,
                    p, o = [],
                    t, u, s, x, C = +q(n[L]),
                    E = K ? m.units[n[X]] : "";
                if (m.sign && h === 0) {
                    b = Math.abs(b) * (n[h] === "-" ? -1 : 1);
                    o = Y ? [O, L] : [O]
                }
                if (h === O || h === L && M || b === void 0 || h === void 0 && !P) {
                    b = D(n);
                    y = E
                }
                if (K && (h === X && y !== E || h === void 0 && !P)) {
                    b = e(b, y, E);
                    y = E;
                    u = F(b);
                    m.sign && (n[0] = u[0]);
                    w(E, m.sign ? Math.abs(u[1]) : u[1]);
                    c(C);
                    o = Y ? [O, L] : [O];
                    t = h ? 0.2 : j
                }
                b = k(b, N, T);
                u = F(b);
                s = m.sign ? Math.abs(u[1]) : u[1];
                p = m.sign ? n[0] == "-" : b < 0;
                n[O] = s;
                M && (n[L] = u[2]);
                if (h === O) {
                    w(E, s);
                    o.push(O)
                }
                if (h === L && Y) {
                    c(C);
                    o.push(L)
                }
                if (m.sign && h === void 0) {
                    s = a(".dw-ul", f).eq(A);
                    a(".dw-li", s).addClass("dw-v");
                    N > 0 && a(".dw-li", s).eq(0).removeClass("dw-v");
                    T < 0 && a(".dw-li", s).eq(1).removeClass("dw-v")
                }
                if (m.sign && !h) {
                    s = a(".dw-ul", f).eq(O);
                    a(".dw-li", s).addClass("dw-v");
                    v = a(".dw-li",
                        s).index(a('.dw-li[data-val="' + Math.abs(p ? Z : V) + '"]', s));
                    v != -1 && a(".dw-li", s).slice(v + 1).removeClass("dw-v")
                }
                if (h !== L && M) {
                    s = a(".dw-ul", f).eq(L);
                    a(".dw-li", s).addClass("dw-v");
                    var n = m.sign ? n[0] + q(n[1]) : (b < 0 ? "-" : "+") + Math.abs(u[1]),
                        C = (N < 0 ? "-" : "+") + Math.abs(Z),
                        H = (T < 0 ? "-" : "+") + Math.abs(V);
                    n === C && a(".dw-li", s).each(function () {
                        x = q(a(this).attr("data-val"));
                        (p ? x > U : x < U) && a(this).removeClass("dw-v")
                    });
                    n === H && a(".dw-li", s).each(function () {
                        x = q(a(this).attr("data-val"));
                        (p ? x < S : x > S) && a(this).removeClass("dw-v")
                    });
                    for (v = 0; v < m.invalid.length; v++) {
                        var J = F(e(m.invalid[v], B, E));
                        u[0] === J[0] && u[1] === J[1] && a(".dw-li", s).each(function () {
                            q(a(this).attr("data-val")) == J[2] && a(this).removeClass("dw-v")
                        })
                    }
                }
                if (!M) {
                    s = a(".dw-ul", f).eq(O);
                    for (v = 0; v < m.invalid.length; v++) a('.dw-li[data-val="' + r(e(m.invalid[v], B, E), l) + '"]', s).removeClass("dw-v")
                }
                if (o.length) {
                    Q[h] = setTimeout(function () {
                        P = true;
                        g.changeWheel(o, t, h !== void 0)
                    }, h === void 0 ? 0 : j * 1E3);
                    return false
                }
                P = false
            }
        }
    }
})(jQuery);
(function (a) {
    var u = {
        min: 0,
        max: 100,
        convert: !0,
        defUnit: "kph",
        units: ["kph", "mph", "mps", "fps", "knot"],
        unitNames: {
            kph: "km/h",
            mph: "mi/h",
            mps: "m/s",
            fps: "ft/s",
            knot: "knot"
        }
    }, g = {
            kph: 1,
            mph: 1.60934,
            mps: 3.6,
            fps: 1.09728,
            knot: 1.852
        };
    a.mobiscroll.presetShort("speed");
    a.mobiscroll.presets.speed = function (j) {
        var h = a.extend({}, u, j.settings),
            F = h.convert,
            D = [],
            r = [],
            n, q;
        if (h.units)
            for (q = 0; q < h.units.length; q++) n = h.units[q], g[n] && (D.push(n), r.push(h.unitNames[n] || n));
        j.settings = a.extend(h, {
            sign: !1,
            units: D,
            unitNames: r,
            convert: function (a,
                h, f) {
                return F ? a * g[h] / g[f] : a
            }
        });
        return a.mobiscroll.presets.measurement.call(this, j)
    }
})(jQuery);
(function (a) {
    var u = {
        min: -20,
        max: 40,
        convert: !0,
        defUnit: "c",
        units: ["c", "k", "f", "r"],
        unitNames: {
            c: "°C",
            k: "K",
            f: "°F",
            r: "°R"
        }
    }, g = {
            c: 1,
            k: 1,
            f: 1,
            r: 1
        }, j = {
            c2k: function (a) {
                return a + 273.15
            },
            c2f: function (a) {
                return 9 * a / 5 + 32
            },
            c2r: function (a) {
                return 9 * (a + 273.15) / 5
            },
            k2c: function (a) {
                return a - 273.15
            },
            k2f: function (a) {
                return 9 * a / 5 - 459.67
            },
            k2r: function (a) {
                return 9 * a / 5
            },
            f2c: function (a) {
                return 5 * (a - 32) / 9
            },
            f2k: function (a) {
                return 5 * (a + 459.67) / 9
            },
            f2r: function (a) {
                return a + 459.67
            },
            r2c: function (a) {
                return 5 * (a - 491.67) /
                    9
            },
            r2k: function (a) {
                return 5 * a / 9
            },
            r2f: function (a) {
                return a - 459.67
            }
        };
    a.mobiscroll.presetShort("temperature");
    a.mobiscroll.presets.temperature = function (h) {
        var F = a.extend({}, u, h.settings),
            D = F.convert,
            r = [],
            n = [],
            q, e;
        if (F.units)
            for (e = 0; e < F.units.length; e++) q = F.units[e], g[q] && (r.push(q), n.push(F.unitNames[q] || q));
        h.settings = a.extend(F, {
            sign: !0,
            units: r,
            unitNames: n,
            convert: function (a, e, g) {
                return D ? j[e + "2" + g](a) : a
            }
        });
        return a.mobiscroll.presets.measurement.call(this, h)
    }
})(jQuery);
(function (a) {
    var u = {
        min: 0,
        max: 100,
        convert: !0,
        defUnit: "km",
        units: "m,km,in,ft,yd,mi".split(",")
    }, g = {
            mm: 0.0010,
            cm: 0.01,
            dm: 0.1,
            m: 1,
            dam: 10,
            hm: 100,
            km: 1E3,
            "in": 0.0254,
            ft: 0.3048,
            yd: 0.9144,
            ch: 20.1168,
            fur: 201.168,
            mi: 1609.344,
            lea: 4828.032
        };
    a.mobiscroll.presetShort("distance");
    a.mobiscroll.presets.distance = function (j) {
        var h = a.extend({}, u, j.settings),
            F = h.convert,
            D = [],
            r, n;
        if (h.units)
            for (n = 0; n < h.units.length; n++) r = h.units[n], g[r] && D.push(r);
        j.settings = a.extend(h, {
            sign: !1,
            units: D,
            unitNames: null,
            convert: function (a,
                e, h) {
                return F ? a * g[e] / g[h] : a
            }
        });
        return a.mobiscroll.presets.measurement.call(this, j)
    }
})(jQuery);
(function (a) {
    var u = {
        min: 0,
        max: 1E3,
        convert: !0,
        defUnit: "kg",
        units: ["g", "kg", "oz", "lb"],
        unitNames: {
            tlong: "t (long)",
            tshort: "t (short)"
        }
    }, g = {
            mg: 0.0010,
            cg: 0.01,
            dg: 0.1,
            g: 1,
            dag: 10,
            hg: 100,
            kg: 1E3,
            t: 1E6,
            drc: 1.7718452,
            oz: 28.3495,
            lb: 453.59237,
            st: 6350.29318,
            qtr: 12700.58636,
            cwt: 50802.34544,
            tlong: 1016046.9088,
            tshort: 907184.74
        };
    a.mobiscroll.presetShort("mass");
    a.mobiscroll.presets.mass = function (j) {
        var h = a.extend({}, u, j.settings),
            F = h.convert,
            D = [],
            r = [],
            n, q;
        if (h.units)
            for (q = 0; q < h.units.length; q++) n = h.units[q], g[n] &&
                (D.push(n), r.push(h.unitNames[n] || n));
        j.settings = a.extend(h, {
            sign: !1,
            units: D,
            unitNames: r,
            convert: function (a, h, f) {
                return F ? a * g[h] / g[f] : a
            }
        });
        return a.mobiscroll.presets.measurement.call(this, j)
    }
})(jQuery);
(function (a) {
    var u = {
        min: 0,
        max: 100,
        convert: !0,
        defUnit: "N",
        units: ["N", "kp", "lbf", "pdl"]
    }, g = {
            N: 1,
            kp: 9.80665,
            lbf: 4.448222,
            pdl: 0.138255
        };
    a.mobiscroll.presetShort("force");
    a.mobiscroll.presets.force = function (j) {
        var h = a.extend({}, u, j.settings),
            F = h.convert,
            D = [],
            r, n;
        if (h.units)
            for (n = 0; n < h.units.length; n++) r = h.units[n], g[r] && D.push(r);
        j.settings = a.extend(h, {
            sign: !1,
            units: D,
            unitNames: null,
            convert: function (a, e, h) {
                return F ? a * g[e] / g[h] : a
            }
        });
        return a.mobiscroll.presets.measurement.call(this, j)
    }
})(jQuery);

/*! jQuery Mobile v1.3.0 | Copyright 2010, 2013 jQuery Foundation, Inc. | jquery.org/license */

(function (a, b, c) {
    typeof define == "function" && define.amd ? define(["jquery"], function (d) {
        return c(d, a, b), d.mobile
    }) : c(a.jQuery, a, b)
})(this, document, function (a, b, c, d) {
    (function (a) {
        a.mobile = {}
    })(a),

    function (a, b, d) {
        var e = {};
        a.mobile = a.extend(a.mobile, {
            version: "1.3.0",
            ns: "",
            subPageUrlKey: "ui-page",
            activePageClass: "ui-page-active",
            activeBtnClass: "ui-btn-active",
            focusClass: "ui-focus",
            ajaxEnabled: !0,
            hashListeningEnabled: !0,
            linkBindingEnabled: !0,
            defaultPageTransition: "fade",
            maxTransitionWidth: !1,
            minScrollBack: 250,
            touchOverflowEnabled: !1,
            defaultDialogTransition: "pop",
            pageLoadErrorMessage: "Error Loading Page",
            pageLoadErrorMessageTheme: "e",
            phonegapNavigationEnabled: !1,
            autoInitializePage: !0,
            pushStateEnabled: !0,
            ignoreContentEnabled: !1,
            orientationChangeEnabled: !0,
            buttonMarkup: {
                hoverDelay: 200
            },
            window: a(b),
            document: a(c),
            keyCode: {
                ALT: 18,
                BACKSPACE: 8,
                CAPS_LOCK: 20,
                COMMA: 188,
                COMMAND: 91,
                COMMAND_LEFT: 91,
                COMMAND_RIGHT: 93,
                CONTROL: 17,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                INSERT: 45,
                LEFT: 37,
                MENU: 93,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SHIFT: 16,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                WINDOWS: 91
            },
            behaviors: {},
            silentScroll: function (c) {
                a.type(c) !== "number" && (c = a.mobile.defaultHomeScroll), a.event.special.scrollstart.enabled = !1, setTimeout(function () {
                    b.scrollTo(0, c), a.mobile.document.trigger("silentscroll", {
                        x: 0,
                        y: c
                    })
                }, 20), setTimeout(function () {
                    a.event.special.scrollstart.enabled = !0
                }, 150)
            },
            nsNormalizeDict: e,
            nsNormalize: function (b) {
                if (!b) return;
                return e[b] || (e[b] = a.camelCase(a.mobile.ns + b))
            },
            getInheritedTheme: function (a, b) {
                var c = a[0],
                    d = "",
                    e = /ui-(bar|body|overlay)-([a-z])\b/,
                    f, g;
                while (c) {
                    f = c.className || "";
                    if (f && (g = e.exec(f)) && (d = g[2])) break;
                    c = c.parentNode
                }
                return d || b || "a"
            },
            closestPageData: function (a) {
                return a.closest(':jqmData(role="page"), :jqmData(role="dialog")').data("mobile-page")
            },
            enhanceable: function (a) {
                return this.haveParents(a, "enhance")
            },
            hijackable: function (a) {
                return this.haveParents(a, "ajax")
            },
            haveParents: function (b, c) {
                if (!a.mobile.ignoreContentEnabled) return b;
                var d = b.length,
                    e = a(),
                    f, g, h;
                for (var i = 0; i < d; i++) {
                    g = b.eq(i), h = !1, f = b[i];
                    while (f) {
                        var j = f.getAttribute ? f.getAttribute("data-" + a.mobile.ns + c) : "";
                        if (j === "false") {
                            h = !0;
                            break
                        }
                        f = f.parentNode
                    }
                    h || (e = e.add(g))
                }
                return e
            },
            getScreenHeight: function () {
                return b.innerHeight || a.mobile.window.height()
            }
        }, a.mobile), a.fn.jqmData = function (b, c) {
            var e;
            return typeof b != "undefined" && (b && (b = a.mobile.nsNormalize(b)), arguments.length < 2 || c === d ? e = this.data(b) : e = this.data(b, c)), e
        }, a.jqmData = function (b, c, d) {
            var e;
            return typeof c != "undefined" && (e = a.data(b, c ? a.mobile.nsNormalize(c) : c, d)), e
        }, a.fn.jqmRemoveData = function (b) {
            return this.removeData(a.mobile.nsNormalize(b))
        }, a.jqmRemoveData = function (b, c) {
            return a.removeData(b, a.mobile.nsNormalize(c))
        }, a.fn.removeWithDependents = function () {
            a.removeWithDependents(this)
        }, a.removeWithDependents = function (b) {
            var c = a(b);
            (c.jqmData("dependents") || a()).remove(), c.remove()
        }, a.fn.addDependents = function (b) {
            a.addDependents(a(this), b)
        }, a.addDependents = function (b, c) {
            var d = a(b).jqmData("dependents") || a();
            a(b).jqmData("dependents", a.merge(d, c))
        }, a.fn.getEncodedText = function () {
            return a("<div/>").text(a(this).text()).html()
        }, a.fn.jqmEnhanceable = function () {
            return a.mobile.enhanceable(this)
        }, a.fn.jqmHijackable = function () {
            return a.mobile.hijackable(this)
        };
        var f = a.find,
            g = /:jqmData\(([^)]*)\)/g;
        a.find = function (b, c, d, e) {
            return b = b.replace(g, "[data-" + (a.mobile.ns || "") + "$1]"), f.call(this, b, c, d, e)
        }, a.extend(a.find, f), a.find.matches = function (b, c) {
            return a.find(b, null, null, c)
        }, a.find.matchesSelector = function (b, c) {
            return a.find(c, null, null, [b]).length > 0
        }
    }(a, this),

    function (a, b, c, d) {
        function x(a) {
            while (a && typeof a.originalEvent != "undefined") a = a.originalEvent;
            return a
        }

        function y(b, c) {
            var e = b.type,
                f, g, i, k, l, m, n, o, p;
            b = a.Event(b), b.type = c, f = b.originalEvent, g = a.event.props, e.search(/^(mouse|click)/) > -1 && (g = j);
            if (f)
                for (n = g.length, k; n;) k = g[--n], b[k] = f[k];
            e.search(/mouse(down|up)|click/) > -1 && !b.which && (b.which = 1);
            if (e.search(/^touch/) !== -1) {
                i = x(f), e = i.touches, l = i.changedTouches, m = e && e.length ? e[0] : l && l.length ? l[0] : d;
                if (m)
                    for (o = 0, p = h.length; o < p; o++) k = h[o], b[k] = m[k]
            }
            return b
        }

        function z(b) {
            var c = {}, d, f;
            while (b) {
                d = a.data(b, e);
                for (f in d) d[f] && (c[f] = c.hasVirtualBinding = !0);
                b = b.parentNode
            }
            return c
        }

        function A(b, c) {
            var d;
            while (b) {
                d = a.data(b, e);
                if (d && (!c || d[c])) return b;
                b = b.parentNode
            }
            return null
        }

        function B() {
            r = !1
        }

        function C() {
            r = !0
        }

        function D() {
            v = 0, p.length = 0, q = !1, C()
        }

        function E() {
            B()
        }

        function F() {
            G(), l = setTimeout(function () {
                l = 0, D()
            }, a.vmouse.resetTimerDuration)
        }

        function G() {
            l && (clearTimeout(l), l = 0)
        }

        function H(b, c, d) {
            var e;
            if (d && d[b] || !d && A(c.target, b)) e = y(c, b), a(c.target).trigger(e);
            return e
        }

        function I(b) {
            var c = a.data(b.target, f);
            if (!q && (!v || v !== c)) {
                var d = H("v" + b.type, b);
                d && (d.isDefaultPrevented() && b.preventDefault(), d.isPropagationStopped() && b.stopPropagation(), d.isImmediatePropagationStopped() && b.stopImmediatePropagation())
            }
        }

        function J(b) {
            var c = x(b).touches,
                d, e;
            if (c && c.length === 1) {
                d = b.target, e = z(d);
                if (e.hasVirtualBinding) {
                    v = u++, a.data(d, f, v), G(), E(), o = !1;
                    var g = x(b).touches[0];
                    m = g.pageX, n = g.pageY, H("vmouseover", b, e), H("vmousedown", b, e)
                }
            }
        }

        function K(a) {
            if (r) return;
            o || H("vmousecancel", a, z(a.target)), o = !0, F()
        }

        function L(b) {
            if (r) return;
            var c = x(b).touches[0],
                d = o,
                e = a.vmouse.moveDistanceThreshold,
                f = z(b.target);
            o = o || Math.abs(c.pageX - m) > e || Math.abs(c.pageY - n) > e, o && !d && H("vmousecancel", b, f), H("vmousemove", b, f), F()
        }

        function M(a) {
            if (r) return;
            C();
            var b = z(a.target),
                c;
            H("vmouseup", a, b);
            if (!o) {
                var d = H("vclick", a, b);
                d && d.isDefaultPrevented() && (c = x(a).changedTouches[0], p.push({
                    touchID: v,
                    x: c.clientX,
                    y: c.clientY
                }), q = !0)
            }
            H("vmouseout", a, b), o = !1, F()
        }

        function N(b) {
            var c = a.data(b, e),
                d;
            if (c)
                for (d in c)
                    if (c[d]) return !0;
            return !1
        }

        function O() {}

        function P(b) {
            var c = b.substr(1);
            return {
                setup: function (d, f) {
                    N(this) || a.data(this, e, {});
                    var g = a.data(this, e);
                    g[b] = !0, k[b] = (k[b] || 0) + 1, k[b] === 1 && t.bind(c, I), a(this).bind(c, O), s && (k.touchstart = (k.touchstart || 0) + 1, k.touchstart === 1 && t.bind("touchstart", J).bind("touchend", M).bind("touchmove", L).bind("scroll", K))
                },
                teardown: function (d, f) {
                    --k[b], k[b] || t.unbind(c, I), s && (--k.touchstart, k.touchstart || t.unbind("touchstart", J).unbind("touchmove", L).unbind("touchend", M).unbind("scroll", K));
                    var g = a(this),
                        h = a.data(this, e);
                    h && (h[b] = !1), g.unbind(c, O), N(this) || g.removeData(e)
                }
            }
        }
        var e = "virtualMouseBindings",
            f = "virtualTouchID",
            g = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
            h = "clientX clientY pageX pageY screenX screenY".split(" "),
            i = a.event.mouseHooks ? a.event.mouseHooks.props : [],
            j = a.event.props.concat(i),
            k = {}, l = 0,
            m = 0,
            n = 0,
            o = !1,
            p = [],
            q = !1,
            r = !1,
            s = "addEventListener" in c,
            t = a(c),
            u = 1,
            v = 0,
            w;
        a.vmouse = {
            moveDistanceThreshold: 10,
            clickDistanceThreshold: 10,
            resetTimerDuration: 1500
        };
        for (var Q = 0; Q < g.length; Q++) a.event.special[g[Q]] = P(g[Q]);
        s && c.addEventListener("click", function (b) {
            var c = p.length,
                d = b.target,
                e, g, h, i, j, k;
            if (c) {
                e = b.clientX, g = b.clientY, w = a.vmouse.clickDistanceThreshold, h = d;
                while (h) {
                    for (i = 0; i < c; i++) {
                        j = p[i], k = 0;
                        if (h === d && Math.abs(j.x - e) < w && Math.abs(j.y - g) < w || a.data(h, f) === j.touchID) {
                            b.preventDefault(), b.stopPropagation();
                            return
                        }
                    }
                    h = h.parentNode
                }
            }
        }, !0)
    }(a, b, c),

    function (a, b) {
        function e(a) {
            var b;
            while (a) {
                b = typeof a.className == "string" && a.className + " ";
                if (b && b.indexOf("ui-btn ") > -1 && b.indexOf("ui-disabled ") < 0) break;
                a = a.parentNode
            }
            return a
        }

        function f(d, e, f, g, h) {
            var i = a.data(d[0], "buttonElements");
            d.removeClass(e).addClass(f), i && (i.bcls = a(c.createElement("div")).addClass(i.bcls + " " + f).removeClass(e).attr("class"), g !== b && (i.hover = g), i.state = h)
        }
        var d = function (a, c) {
            var d = a.getAttribute(c);
            return d === "true" ? !0 : d === "false" ? !1 : d === null ? b : d
        };
        a.fn.buttonMarkup = function (e) {
            var f = this,
                h = "data-" + a.mobile.ns,
                i;
            e = e && a.type(e) === "object" ? e : {};
            for (var j = 0; j < f.length; j++) {
                var k = f.eq(j),
                    l = k[0],
                    m = a.extend({}, a.fn.buttonMarkup.defaults, {
                        icon: e.icon !== b ? e.icon : d(l, h + "icon"),
                        iconpos: e.iconpos !== b ? e.iconpos : d(l, h + "iconpos"),
                        theme: e.theme !== b ? e.theme : d(l, h + "theme") || a.mobile.getInheritedTheme(k, "c"),
                        inline: e.inline !== b ? e.inline : d(l, h + "inline"),
                        shadow: e.shadow !== b ? e.shadow : d(l, h + "shadow"),
                        corners: e.corners !== b ? e.corners : d(l, h + "corners"),
                        iconshadow: e.iconshadow !== b ? e.iconshadow : d(l, h + "iconshadow"),
                        mini: e.mini !== b ? e.mini : d(l, h + "mini")
                    }, e),
                    n = "ui-btn-inner",
                    o = "ui-btn-text",
                    p, q, r = !1,
                    s = "up",
                    t, u, v, w;
                for (i in m) l.setAttribute(h + i, m[i]);
                d(l, h + "rel") === "popup" && k.attr("href") && (l.setAttribute("aria-haspopup", !0), l.setAttribute("aria-owns", k.attr("href"))), w = a.data(l.tagName === "INPUT" || l.tagName === "BUTTON" ? l.parentNode : l, "buttonElements"), w ? (l = w.outer, k = a(l), t = w.inner, u = w.text, a(w.icon).remove(), w.icon = null, r = w.hover, s = w.state) : (t = c.createElement(m.wrapperEls), u = c.createElement(m.wrapperEls)), v = m.icon ? c.createElement("span") : null, g && !w && g(), m.theme || (m.theme = a.mobile.getInheritedTheme(k, "c")), p = "ui-btn ", p += r ? "ui-btn-hover-" + m.theme : "", p += s ? " ui-btn-" + s + "-" + m.theme : "", p += m.shadow ? " ui-shadow" : "", p += m.corners ? " ui-btn-corner-all" : "", m.mini !== b && (p += m.mini === !0 ? " ui-mini" : " ui-fullsize"), m.inline !== b && (p += m.inline === !0 ? " ui-btn-inline" : " ui-btn-block"), m.icon && (m.icon = "ui-icon-" + m.icon, m.iconpos = m.iconpos || "left", q = "ui-icon " + m.icon, m.iconshadow && (q += " ui-icon-shadow")), m.iconpos && (p += " ui-btn-icon-" + m.iconpos, m.iconpos === "notext" && !k.attr("title") && k.attr("title", k.getEncodedText())), m.iconpos && m.iconpos === "notext" && !k.attr("title") && k.attr("title", k.getEncodedText()), w && k.removeClass(w.bcls || ""), k.removeClass("ui-link").addClass(p), t.className = n, u.className = o, w || t.appendChild(u);
                if (v) {
                    v.className = q;
                    if (!w || !w.icon) v.innerHTML = "&#160;", t.appendChild(v)
                }
                while (l.firstChild && !w) u.appendChild(l.firstChild);
                w || l.appendChild(t), w = {
                    hover: r,
                    state: s,
                    bcls: p,
                    outer: l,
                    inner: t,
                    text: u,
                    icon: v
                }, a.data(l, "buttonElements", w), a.data(t, "buttonElements", w), a.data(u, "buttonElements", w), v && a.data(v, "buttonElements", w)
            }
            return this
        }, a.fn.buttonMarkup.defaults = {
            corners: !0,
            shadow: !0,
            iconshadow: !0,
            wrapperEls: "span"
        };
        var g = function () {
            var c = a.mobile.buttonMarkup.hoverDelay,
                d, h;
            a.mobile.document.bind({
                "vmousedown vmousecancel vmouseup vmouseover vmouseout focus blur scrollstart": function (g) {
                    var i, j = a(e(g.target)),
                        k = g.originalEvent && /^touch/.test(g.originalEvent.type),
                        l = g.type;
                    if (j.length) {
                        i = j.attr("data-" + a.mobile.ns + "theme");
                        if (l === "vmousedown") k ? d = setTimeout(function () {
                            f(j, "ui-btn-up-" + i, "ui-btn-down-" + i, b, "down")
                        }, c) : f(j, "ui-btn-up-" + i, "ui-btn-down-" + i, b, "down");
                        else if (l === "vmousecancel" || l === "vmouseup") f(j, "ui-btn-down-" + i, "ui-btn-up-" + i, b, "up");
                        else if (l === "vmouseover" || l === "focus") k ? h = setTimeout(function () {
                            f(j, "ui-btn-up-" + i, "ui-btn-hover-" + i, !0, "")
                        }, c) : f(j, "ui-btn-up-" + i, "ui-btn-hover-" + i, !0, "");
                        else if (l === "vmouseout" || l === "blur" || l === "scrollstart") f(j, "ui-btn-hover-" + i + " ui-btn-down-" + i, "ui-btn-up-" + i, !1, "up"), d && clearTimeout(d), h && clearTimeout(h)
                    }
                },
                "focusin focus": function (b) {
                    a(e(b.target)).addClass(a.mobile.focusClass)
                },
                "focusout blur": function (b) {
                    a(e(b.target)).removeClass(a.mobile.focusClass)
                }
            }), g = null
        };
        a.mobile.document.bind("pagecreate create", function (b) {
            a(":jqmData(role='button'), .ui-bar > a, .ui-header > a, .ui-footer > a, .ui-bar > :jqmData(role='controlgroup') > a", b.target).jqmEnhanceable().not("button, input, .ui-btn, :jqmData(role='none'), :jqmData(role='nojs')").buttonMarkup()
        })
    }(a),

    function (a, b) {
        var c = 0,
            d = Array.prototype.slice,
            e = a.cleanData;
        a.cleanData = function (b) {
            for (var c = 0, d;
                (d = b[c]) != null; c++) try {
                a(d).triggerHandler("remove")
            } catch (f) {}
            e(b)
        }, a.widget = function (b, c, d) {
            var e, f, g, h, i = b.split(".")[0];
            b = b.split(".")[1], e = i + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function (b) {
                return !!a.data(b, e)
            }, a[i] = a[i] || {}, f = a[i][b], g = a[i][b] = function (a, b) {
                if (!this._createWidget) return new g(a, b);
                arguments.length && this._createWidget(a, b)
            }, a.extend(g, f, {
                version: d.version,
                _proto: a.extend({}, d),
                _childConstructors: []
            }), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function (b, e) {
                a.isFunction(e) && (d[b] = function () {
                    var a = function () {
                        return c.prototype[b].apply(this, arguments)
                    }, d = function (a) {
                            return c.prototype[b].apply(this, a)
                        };
                    return function () {
                        var b = this._super,
                            c = this._superApply,
                            f;
                        return this._super = a, this._superApply = d, f = e.apply(this, arguments), this._super = b, this._superApply = c, f
                    }
                }())
            }), g.prototype = a.widget.extend(h, {
                widgetEventPrefix: f ? h.widgetEventPrefix : b
            }, d, {
                constructor: g,
                namespace: i,
                widgetName: b,
                widgetFullName: e
            }), f ? (a.each(f._childConstructors, function (b, c) {
                var d = c.prototype;
                a.widget(d.namespace + "." + d.widgetName, g, c._proto)
            }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g)
        }, a.widget.extend = function (c) {
            var e = d.call(arguments, 1),
                f = 0,
                g = e.length,
                h, i;
            for (; f < g; f++)
                for (h in e[f]) i = e[f][h], e[f].hasOwnProperty(h) && i !== b && (a.isPlainObject(i) ? c[h] = a.isPlainObject(c[h]) ? a.widget.extend({}, c[h], i) : a.widget.extend({}, i) : c[h] = i);
            return c
        }, a.widget.bridge = function (c, e) {
            var f = e.prototype.widgetFullName || c;
            a.fn[c] = function (g) {
                var h = typeof g == "string",
                    i = d.call(arguments, 1),
                    j = this;
                return g = !h && i.length ? a.widget.extend.apply(null, [g].concat(i)) : g, h ? this.each(function () {
                    var d, e = a.data(this, f);
                    if (!e) return a.error("cannot call methods on " + c + " prior to initialization; " + "attempted to call method '" + g + "'");
                    if (!a.isFunction(e[g]) || g.charAt(0) === "_") return a.error("no such method '" + g + "' for " + c + " widget instance");
                    d = e[g].apply(e, i);
                    if (d !== e && d !== b) return j = d && d.jquery ? j.pushStack(d.get()) : d, !1
                }) : this.each(function () {
                    var b = a.data(this, f);
                    b ? b.option(g || {})._init() : a.data(this, f, new e(g, this))
                }), j
            }
        }, a.Widget = function () {}, a.Widget._childConstructors = [], a.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function (b, d) {
                d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = c++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function (a) {
                        a.target === d && this.destroy()
                    }
                }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: a.noop,
            _getCreateEventData: a.noop,
            _create: a.noop,
            _init: a.noop,
            destroy: function () {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: a.noop,
            widget: function () {
                return this.element
            },
            option: function (c, d) {
                var e = c,
                    f, g, h;
                if (arguments.length === 0) return a.widget.extend({}, this.options);
                if (typeof c == "string") {
                    e = {}, f = c.split("."), c = f.shift();
                    if (f.length) {
                        g = e[c] = a.widget.extend({}, this.options[c]);
                        for (h = 0; h < f.length - 1; h++) g[f[h]] = g[f[h]] || {}, g = g[f[h]];
                        c = f.pop();
                        if (d === b) return g[c] === b ? null : g[c];
                        g[c] = d
                    } else {
                        if (d === b) return this.options[c] === b ? null : this.options[c];
                        e[c] = d
                    }
                }
                return this._setOptions(e), this
            },
            _setOptions: function (a) {
                var b;
                for (b in a) this._setOption(b, a[b]);
                return this
            },
            _setOption: function (a, b) {
                return this.options[a] = b, a === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! b).attr("aria-disabled", b), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
            },
            enable: function () {
                return this._setOption("disabled", !1)
            },
            disable: function () {
                return this._setOption("disabled", !0)
            },
            _on: function (b, c, d) {
                var e, f = this;
                typeof b != "boolean" && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function (d, g) {
                    function h() {
                        if (!b && (f.options.disabled === !0 || a(this).hasClass("ui-state-disabled"))) return;
                        return (typeof g == "string" ? f[g] : g).apply(f, arguments)
                    }
                    typeof g != "string" && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                    var i = d.match(/^(\w+)\s*(.*)$/),
                        j = i[1] + f.eventNamespace,
                        k = i[2];
                    k ? e.delegate(k, j, h) : c.bind(j, h)
                })
            },
            _off: function (a, b) {
                b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, a.unbind(b).undelegate(b)
            },
            _delay: function (a, b) {
                function c() {
                    return (typeof a == "string" ? d[a] : a).apply(d, arguments)
                }
                var d = this;
                return setTimeout(c, b || 0)
            },
            _hoverable: function (b) {
                this.hoverable = this.hoverable.add(b), this._on(b, {
                    mouseenter: function (b) {
                        a(b.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function (b) {
                        a(b.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function (b) {
                this.focusable = this.focusable.add(b), this._on(b, {
                    focusin: function (b) {
                        a(b.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function (b) {
                        a(b.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function (b, c, d) {
                var e, f, g = this.options[b];
                d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent;
                if (f)
                    for (e in f) e in c || (c[e] = f[e]);
                return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
            }
        }, a.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function (b, c) {
            a.Widget.prototype["_" + b] = function (d, e, f) {
                typeof e == "string" && (e = {
                    effect: e
                });
                var g, h = e ? e === !0 || typeof e == "number" ? c : e.effect || c : b;
                e = e || {}, typeof e == "number" && (e = {
                    duration: e
                }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function (c) {
                    a(this)[b](), f && f.call(d[0]), c()
                })
            }
        })
    }(a),

    function (a, b) {
        a.widget("mobile.widget", {
            _createWidget: function () {
                a.Widget.prototype._createWidget.apply(this, arguments), this._trigger("init")
            },
            _getCreateOptions: function () {
                var c = this.element,
                    d = {};
                return a.each(this.options, function (a) {
                    var e = c.jqmData(a.replace(/[A-Z]/g, function (a) {
                        return "-" + a.toLowerCase()
                    }));
                    e !== b && (d[a] = e)
                }), d
            },
            enhanceWithin: function (b, c) {
                this.enhance(a(this.options.initSelector, a(b)), c)
            },
            enhance: function (b, c) {
                var d, e, f = a(b),
                    g = this;
                f = a.mobile.enhanceable(f), c && f.length && (d = a.mobile.closestPageData(f), e = d && d.keepNativeSelector() || "", f = f.not(e)), f[this.widgetName]()
            },
            raise: function (a) {
                throw "Widget [" + this.widgetName + "]: " + a
            }
        })
    }(a)
})


/*
* jQuery Mobile Framework : temporary extension to port jQuery UI's datepicker for mobile
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/
(function($, undefined ) {

	//cache previous datepicker ui method
	var prevDp = $.fn.datepicker;

	//rewrite datepicker
	$.fn.datepicker = function( options ){

		var dp = this;

		//call cached datepicker plugin
		prevDp.call( this, options );

		//extend with some dom manipulation to update the markup for jQM
		//call immediately
		function updateDatepicker(){
			$( ".ui-datepicker-header", dp ).addClass("ui-body-c ui-corner-top").removeClass("ui-corner-all");
			$( ".ui-datepicker-prev, .ui-datepicker-next", dp ).attr("href", "#");
			$( ".ui-datepicker-prev", dp ).buttonMarkup({iconpos: "notext", icon: "arrow-l", shadow: true, corners: true});
			$( ".ui-datepicker-next", dp ).buttonMarkup({iconpos: "notext", icon: "arrow-r", shadow: true, corners: true});
			$( ".ui-datepicker-calendar th", dp ).addClass("ui-bar-c");
			$( ".ui-datepicker-calendar td", dp ).addClass("ui-body-c");
			$( ".ui-datepicker-calendar a", dp ).buttonMarkup({corners: false, shadow: false}); 
			$( ".ui-datepicker-calendar a.ui-state-active", dp ).addClass("ui-btn-active"); // selected date
			$( ".ui-datepicker-calendar a.ui-state-highlight", dp ).addClass("ui-btn-up-e"); // today"s date
	        $( ".ui-datepicker-calendar .ui-btn", dp ).each(function(){
				var el = $(this);
				// remove extra button markup - necessary for date value to be interpreted correctly
				el.html( el.find( ".ui-btn-text" ).text() ); 
	        });
		};

		//update now
		updateDatepicker();

		// and on click
		$( dp ).click( updateDatepicker );

		//return jqm obj 
		return this;
	};

	//bind to pagecreate to automatically enhance date inputs	
	$( ".ui-page" ).live( "pagecreate", function(){		
		$( "input[type='date'], input:jqmData(type='date')", this ).each(function(){
			$(this).after( $( "<div />" ).datepicker({ altField: "#" + $(this).attr( "id" ), showOtherMonths: true }) );
		});	
	});
})( jQuery );
