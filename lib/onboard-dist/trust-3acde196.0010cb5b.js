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
    "SNkK": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var e = require("./content-612bd04b.js");

        function r(e, r, n, t, o, a, i) {
            try {
                var u = e[a](i),
                    c = u.value
            } catch (s) {
                return void n(s)
            }
            u.done ? r(c) : Promise.resolve(c).then(t, o)
        }

        function n(e) {
            return function() {
                var n = this,
                    t = arguments;
                return new Promise(function(o, a) {
                    var i = e.apply(n, t);

                    function u(e) {
                        r(i, o, a, u, c, "next", e)
                    }

                    function c(e) {
                        r(i, o, a, u, c, "throw", e)
                    }
                    u(void 0)
                })
            }
        }
        var t = '\n  <svg height="40" \n    viewBox="0 0 40 40" \n    width="40" \n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path d="m1.36250526 6.825c-1.36250526 2.675-1.36250526 6.175-1.36250526 13.175s0 10.5 1.36250526 13.1750526c1.2 2.35 3.11249474 4.2624211 5.46249474 5.4624211 2.675 1.3625263 6.175 1.3625263 13.175 1.3625263s10.5 0 13.1750526-1.3625263c2.35-1.2 4.2624211-3.1124211 5.4624211-5.4624211 1.3625263-2.6750526 1.3625263-6.1750526 1.3625263-13.1750526s0-10.5-1.3625263-13.175c-1.2-2.35-3.1124211-4.26249474-5.4624211-5.46249474-2.6750526-1.36250526-6.1750526-1.36250526-13.1750526-1.36250526s-10.5 0-13.175 1.36250526c-2.35 1.2-4.26249474 3.11249474-5.46249474 5.46249474zm28.61875794 3.9624737c.35 0 .6812631.1437895.9250526.3875789.2436842.25.3812631.5874737.3751557.9311579-.0626294 3.7250527-.2064189 6.5750527-.4751557 8.8312632-.2625263 2.2563158-.6563158 3.9312631-1.25 5.2875789-.4.9062106-.8937895 1.6562106-1.4750526 2.2936842-.7812632.8437895-1.6749474 1.4563158-2.65 2.037579-.4168421.2492631-.8502106.4953684-1.3048421.7535789-.97.5508421-2.0365264 1.1565264-3.2451579 1.9651579-.4374737.2936842-1.0062106.2936842-1.4436843 0-1.2271578-.8181052-2.3077894-1.4312631-3.2866315-1.9865263-.2176842-.1234737-.4303158-.2441052-.6384211-.3634737-1.1436842-.6625263-2.1749474-1.2937894-3.0749474-2.2063158-.6-.6-1.1187368-1.3312631-1.5312631-2.2-.5625158-1.1625263-.94376843-2.5687368-1.22501054-4.3874736-.37501052-2.4312632-.56250526-5.6125264-.63146616-10.0250527-.0060391-.3436842.12521353-.6811579.3689609-.9311579.24374737-.2437894.5812526-.3875789.9312526-.3875789h.5375263c1.6562106.0063158 5.3124211-.1562105 8.4749474-2.61871581.4687369-.36250526 1.1250526-.36250526 1.5937895 0 3.1625263 2.46250531 6.8187368 2.62503161 8.4812631 2.61871581zm-2.9062106 14.6063158c.4062106-.837579.7437895-1.9937895 1-3.6563158.3062106-1.9874737.4937895-4.6874737.5812632-8.3624211-1.95-.0563158-5.3-.4312631-8.4937895-2.5812631-3.1936842 2.1436842-6.5436842 2.5187368-8.4874737 2.5812631.0687369 3.0374737.2062106 5.4.4249474 7.2562106.25 2.1125263.6063158 3.5437894 1.05 4.55.2937895.6687368.6188421 1.15 1.0063158 1.5749473.5187368.5688421 1.1749474 1.037579 2.0687368 1.5750527.3707369.222421.7794737.4537894 1.2244211.7056842.7927368.4486315 1.7003158.9623158 2.7130526 1.6068421.9941053-.634 1.8886316-1.1424211 2.6721053-1.5877895.2362105-.1342105.4622105-.2627368.6778947-.3872632 1.1-.6312631 1.9125263-1.1562105 2.5187369-1.7687368.4063157-.4187368.7375789-.8749474 1.0437894-1.5062105z" fill="#3375bb" fill-rule="evenodd"/>\n  </svg>\n';

        function o(r) {
            var o = r.preferred,
                a = r.label,
                i = r.iconSrc,
                u = r.svg,
                c = r.rpcUrl;
            return {
                name: a || "Trust",
                svg: u || t,
                iconSrc: i,
                wallet: function() {
                    var e = n(regeneratorRuntime.mark(function e(r) {
                        var t, o, a, i, u, s, l, d, p;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;)
                                switch (e.prev = e.next) {
                                    case 0:
                                        if (t = r.getProviderName, o = r.getAddress, a = r.getNetwork, i = r.getBalance, u = window.ethereum || window.web3 && window.web3.currentProvider, !(s = "Trust" === t(u)) || !c) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 6, require("_bundle_loader")(require.resolve("./providerEngine-7945c13d.js"));
                                    case 6:
                                        l = e.sent.default;
                                    case 7:
                                        return d = l ? l({
                                            rpcUrl: c
                                        }) : null, p = !1, e.abrupt("return", {
                                            provider: u,
                                            interface: s ? {
                                                address: {
                                                    get: function() {
                                                        return o(u)
                                                    }
                                                },
                                                network: {
                                                    get: function() {
                                                        return a(u)
                                                    }
                                                },
                                                balance: {
                                                    get: function() {
                                                        var e = n(regeneratorRuntime.mark(function e() {
                                                            var r;
                                                            return regeneratorRuntime.wrap(function(e) {
                                                                for (;;)
                                                                    switch (e.prev = e.next) {
                                                                        case 0:
                                                                            if (d) {
                                                                                e.next = 3;
                                                                                break
                                                                            }
                                                                            return p || (console.warn('The Trust provider does not allow rpc calls preventing Onboard.js from getting the balance. You can pass in a "rpcUrl" to the Trust wallet initialization object to get the balance.'), p = !0), e.abrupt("return", null);
                                                                        case 3:
                                                                            return e.next = 5, o(u);
                                                                        case 5:
                                                                            return r = e.sent, e.abrupt("return", i(d, r));
                                                                        case 7:
                                                                        case "end":
                                                                            return e.stop()
                                                                    }
                                                            }, e)
                                                        }));
                                                        return function() {
                                                            return e.apply(this, arguments)
                                                        }
                                                    }()
                                                },
                                                name: t(u)
                                            } : null
                                        });
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                        }, e)
                    }));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }(),
                type: "injected",
                link: "https://link.trustwallet.com/open_url?coin_id=60&url=".concat(window.location.href),
                installMessage: e.m,
                mobile: !0,
                preferred: o
            }
        }
        var a = o;
        exports.default = a;
    }, {
        "./content-612bd04b.js": "AswZ",
        "_bundle_loader": "fiHL",
        "./providerEngine-7945c13d.js": [
            ["providerEngine-7945c13d.01157afe.js", "ihoK"], "ihoK"
        ]
    }],
    "IC3c": [function(require, module, exports) {
        var t = null;

        function e() {
            return t || (t = n()), t
        }

        function n() {
            try {
                throw new Error
            } catch (e) {
                var t = ("" + e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
                if (t)
                    return r(t[0])
            }
            return "/"
        }

        function r(t) {
            return ("" + t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, "$1") + "/"
        }
        exports.getBundleURL = e, exports.getBaseURL = r;
    }, {}],
    "fiHL": [function(require, module, exports) {
        var r = require("./bundle-url").getBundleURL;

        function e(r) {
            Array.isArray(r) || (r = [r]);
            var e = r[r.length - 1];
            try {
                return Promise.resolve(require(e))
            } catch (n) {
                if ("MODULE_NOT_FOUND" === n.code)
                    return new s(function(n, i) {
                        t(r.slice(0, -1)).then(function() {
                            return require(e)
                        }).then(n, i)
                    });
                throw n
            }
        }

        function t(r) {
            return Promise.all(r.map(u))
        }
        var n = {};

        function i(r, e) {
            n[r] = e
        }
        module.exports = exports = e, exports.load = t, exports.register = i;
        var o = {};

        function u(e) {
            var t;
            if (Array.isArray(e) && (t = e[1], e = e[0]), o[e])
                return o[e];
            var i = (e.substring(e.lastIndexOf(".") + 1, e.length) || e).toLowerCase(),
                u = n[i];
            return u ? o[e] = u(r() + e).then(function(r) {
                return r && module.bundle.register(t, r), r
            }).catch(function(r) {
                throw delete o[e], r
            }) : void 0
        }

        function s(r) {
            this.executor = r, this.promise = null
        }
        s.prototype.then = function(r, e) {
            return null === this.promise && (this.promise = new Promise(this.executor)), this.promise.then(r, e)
        }, s.prototype.catch = function(r) {
            return null === this.promise && (this.promise = new Promise(this.executor)), this.promise.catch(r)
        };
    }, {
        "./bundle-url": "IC3c"
    }],
    "Jay7": [function(require, module, exports) {
        module.exports = function(n) {
            return new Promise(function(e, o) {
                var r = document.createElement("script");
                r.async = !0, r.type = "text/javascript", r.charset = "utf-8", r.src = n, r.onerror = function(n) {
                    r.onerror = r.onload = null, o(n)
                }, r.onload = function() {
                    r.onerror = r.onload = null, e()
                }, document.getElementsByTagName("head")[0].appendChild(r)
            })
        };
    }, {}],
    0: [function(require, module, exports) {
        var b = require("fiHL");
        b.register("js", require("Jay7"));
        b.load([]).then(function() {
            require("SNkK");
        });
    }, {}]
}, {}, [0], null)