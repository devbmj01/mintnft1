parcelRequire = function(e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;

    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i)
                    return i(t, !0);
                if (o)
                    return o(t, !0);
                if (u && "string" == typeof t)
                    return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function(r) {
                return e[t][1][r] || r
            }, p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;

        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0, f.Module = function(e) {
        this.id = e, this.bundle = f, this.exports = {}
    }, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) {
        e[r] = [function(e, r) {
            r.exports = t
        }, {}]
    };
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c])
        } catch (e) {
            i || (i = e)
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f, i)
        throw i;
    return f
}({
    "lm3e": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0, require("regenerator-runtime/runtime");
        var e = require("./onboard-b2a5d97d.js");

        function r(e, r, t, n, o, i, a) {
            try {
                var u = e[i](a),
                    s = u.value
            } catch (c) {
                return void t(c)
            }
            u.done ? r(s) : Promise.resolve(s).then(n, o)
        }

        function t(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise(function(o, i) {
                    var a = e.apply(t, n);

                    function u(e) {
                        r(a, o, i, u, s, "next", e)
                    }

                    function s(e) {
                        r(a, o, i, u, s, "throw", e)
                    }
                    u(void 0)
                })
            }
        }

        function n() {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = r.heading,
                o = r.description,
                i = r.icon,
                a = r.html,
                u = r.button;
            return function() {
                var r = t(regeneratorRuntime.mark(function r(t) {
                    var s, c, d, l;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;)
                            switch (r.prev = r.next) {
                                case 0:
                                    if (s = t.wallet, c = t.address, d = t.stateSyncStatus, l = t.stateStore, null !== c) {
                                        r.next = 5;
                                        break
                                    }
                                    if (!d.address) {
                                        r.next = 5;
                                        break
                                    }
                                    return r.next = 5, new Promise(function(e) {
                                        d.address && d.address.then(e), setTimeout(function() {
                                            null === c && e(void 0)
                                        }, 500)
                                    });
                                case 5:
                                    if (l.address.get() || !s || !s.name) {
                                        r.next = 7;
                                        break
                                    }
                                    return r.abrupt("return", {
                                        heading: n || "Login and Authorize Your Wallet",
                                        description: o || "This dapp requires access to your wallet, please login and authorize access to your ".concat(s.name, " accounts to continue."),
                                        eventCode: "loginFail",
                                        action: s.connect,
                                        icon: i || e.e,
                                        html: a,
                                        button: u
                                    });
                                case 7:
                                case "end":
                                    return r.stop()
                            }
                    }, r)
                }));
                return function(e) {
                    return r.apply(this, arguments)
                }
            }()
        }
        require("bignumber.js"), require("bnc-sdk"), require("bowser");
        var o = n;
        exports.default = o;
    }, {
        "regenerator-runtime/runtime": "KA2S",
        "./onboard-b2a5d97d.js": "b3Cl",
        "bignumber.js": "LdGf",
        "bnc-sdk": "wAne",
        "bowser": "JSid"
    }]
}, {}, [], null)