(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        3: function(t, e, n) {
            t.exports = n("zUnb")
        },
        crnd: function(t, e) {
            function n(t) {
                return Promise.resolve().then(function() {
                    var e = new Error('Cannot find module "' + t + '".');
                    throw e.code = "MODULE_NOT_FOUND", e
                })
            }
            n.keys = function() {
                return []
            }, n.resolve = n, t.exports = n, n.id = "crnd"
        },
        zUnb: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };

            function o(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var i = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            };

            function a(t) {
                var e = "function" == typeof Symbol && t[Symbol.iterator],
                    n = 0;
                return e ? e.call(t) : {
                    next: function() {
                        return t && n >= t.length && (t = void 0), {
                            value: t && t[n++],
                            done: !t
                        }
                    }
                }
            }

            function s(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }

            function l() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(s(arguments[e]));
                return t
            }

            function u(t) {
                return "function" == typeof t
            }
            var c = !1,
                p = {
                    Promise: void 0,
                    set useDeprecatedSynchronousErrorHandling(t) {
                        c = t
                    },
                    get useDeprecatedSynchronousErrorHandling() {
                        return c
                    }
                };

            function f(t) {
                setTimeout(function() {
                    throw t
                })
            }
            var h = {
                    closed: !0,
                    next: function(t) {},
                    error: function(t) {
                        if (p.useDeprecatedSynchronousErrorHandling) throw t;
                        f(t)
                    },
                    complete: function() {}
                },
                d = Array.isArray || function(t) {
                    return t && "number" == typeof t.length
                };

            function m(t) {
                return null != t && "object" == typeof t
            }
            var g, y = {
                e: {}
            };

            function v() {
                try {
                    return g.apply(this, arguments)
                } catch (t) {
                    return y.e = t, y
                }
            }

            function _(t) {
                return g = t, v
            }
            var b = function(t) {
                    function e(n) {
                        var r = t.call(this, n ? n.length + " errors occurred during unsubscription:\n  " + n.map(function(t, e) {
                            return e + 1 + ") " + t.toString()
                        }).join("\n  ") : "") || this;
                        return r.errors = n, r.name = "UnsubscriptionError", Object.setPrototypeOf(r, e.prototype), r
                    }
                    return o(e, t), e
                }(Error),
                w = function() {
                    function t(t) {
                        this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, t && (this._unsubscribe = t)
                    }
                    var e;
                    return t.prototype.unsubscribe = function() {
                        var t, e = !1;
                        if (!this.closed) {
                            var n = this._parent,
                                r = this._parents,
                                o = this._unsubscribe,
                                i = this._subscriptions;
                            this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;
                            for (var a = -1, s = r ? r.length : 0; n;) n.remove(this), n = ++a < s && r[a] || null;
                            if (u(o) && _(o).call(this) === y && (e = !0, t = t || (y.e instanceof b ? C(y.e.errors) : [y.e])), d(i))
                                for (a = -1, s = i.length; ++a < s;) {
                                    var l = i[a];
                                    if (m(l) && _(l.unsubscribe).call(l) === y) {
                                        e = !0, t = t || [];
                                        var c = y.e;
                                        c instanceof b ? t = t.concat(C(c.errors)) : t.push(c)
                                    }
                                }
                            if (e) throw new b(t)
                        }
                    }, t.prototype.add = function(e) {
                        if (!e || e === t.EMPTY) return t.EMPTY;
                        if (e === this) return this;
                        var n = e;
                        switch (typeof e) {
                            case "function":
                                n = new t(e);
                            case "object":
                                if (n.closed || "function" != typeof n.unsubscribe) return n;
                                if (this.closed) return n.unsubscribe(), n;
                                if ("function" != typeof n._addParent) {
                                    var r = n;
                                    (n = new t)._subscriptions = [r]
                                }
                                break;
                            default:
                                throw new Error("unrecognized teardown " + e + " added to Subscription.")
                        }
                        return (this._subscriptions || (this._subscriptions = [])).push(n), n._addParent(this), n
                    }, t.prototype.remove = function(t) {
                        var e = this._subscriptions;
                        if (e) {
                            var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
                        }
                    }, t.prototype._addParent = function(t) {
                        var e = this._parent,
                            n = this._parents;
                        e && e !== t ? n ? -1 === n.indexOf(t) && n.push(t) : this._parents = [t] : this._parent = t
                    }, t.EMPTY = ((e = new t).closed = !0, e), t
                }();

            function C(t) {
                return t.reduce(function(t, e) {
                    return t.concat(e instanceof b ? e.errors : e)
                }, [])
            }
            var k = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("rxSubscriber") : "@@rxSubscriber",
                S = function(t) {
                    function e(e, n, r) {
                        var o, i = t.call(this) || this;
                        switch (i.syncErrorValue = null, i.syncErrorThrown = !1, i.syncErrorThrowable = !1, i.isStopped = !1, arguments.length) {
                            case 0:
                                i.destination = h;
                                break;
                            case 1:
                                if (!e) {
                                    i.destination = h;
                                    break
                                }
                                if ("object" == typeof e) {
                                    if ((o = e) instanceof S || "syncErrorThrowable" in o && o[k]) {
                                        var a = e[k]();
                                        i.syncErrorThrowable = a.syncErrorThrowable, i.destination = a, a.add(i)
                                    } else i.syncErrorThrowable = !0, i.destination = new x(i, e);
                                    break
                                }
                                default:
                                    i.syncErrorThrowable = !0, i.destination = new x(i, e, n, r)
                        }
                        return i
                    }
                    return o(e, t), e.prototype[k] = function() {
                        return this
                    }, e.create = function(t, n, r) {
                        var o = new e(t, n, r);
                        return o.syncErrorThrowable = !1, o
                    }, e.prototype.next = function(t) {
                        this.isStopped || this._next(t)
                    }, e.prototype.error = function(t) {
                        this.isStopped || (this.isStopped = !0, this._error(t))
                    }, e.prototype.complete = function() {
                        this.isStopped || (this.isStopped = !0, this._complete())
                    }, e.prototype.unsubscribe = function() {
                        this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
                    }, e.prototype._next = function(t) {
                        this.destination.next(t)
                    }, e.prototype._error = function(t) {
                        this.destination.error(t), this.unsubscribe()
                    }, e.prototype._complete = function() {
                        this.destination.complete(), this.unsubscribe()
                    }, e.prototype._unsubscribeAndRecycle = function() {
                        var t = this._parent,
                            e = this._parents;
                        return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = t, this._parents = e, this
                    }, e
                }(w),
                x = function(t) {
                    function e(e, n, r, o) {
                        var i, a = t.call(this) || this;
                        a._parentSubscriber = e;
                        var s = a;
                        return u(n) ? i = n : n && (i = n.next, r = n.error, o = n.complete, n !== h && (u((s = Object.create(n)).unsubscribe) && a.add(s.unsubscribe.bind(s)), s.unsubscribe = a.unsubscribe.bind(a))), a._context = s, a._next = i, a._error = r, a._complete = o, a
                    }
                    return o(e, t), e.prototype.next = function(t) {
                        if (!this.isStopped && this._next) {
                            var e = this._parentSubscriber;
                            p.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                        }
                    }, e.prototype.error = function(t) {
                        if (!this.isStopped) {
                            var e = this._parentSubscriber,
                                n = p.useDeprecatedSynchronousErrorHandling;
                            if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                            else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : f(t), this.unsubscribe();
                            else {
                                if (this.unsubscribe(), n) throw t;
                                f(t)
                            }
                        }
                    }, e.prototype.complete = function() {
                        var t = this;
                        if (!this.isStopped) {
                            var e = this._parentSubscriber;
                            if (this._complete) {
                                var n = function() {
                                    return t._complete.call(t._context)
                                };
                                p.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                            } else this.unsubscribe()
                        }
                    }, e.prototype.__tryOrUnsub = function(t, e) {
                        try {
                            t.call(this._context, e)
                        } catch (t) {
                            if (this.unsubscribe(), p.useDeprecatedSynchronousErrorHandling) throw t;
                            f(t)
                        }
                    }, e.prototype.__tryOrSetError = function(t, e, n) {
                        if (!p.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                        try {
                            e.call(this._context, n)
                        } catch (e) {
                            return p.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = e, t.syncErrorThrown = !0, !0) : (f(e), !0)
                        }
                        return !1
                    }, e.prototype._unsubscribe = function() {
                        var t = this._parentSubscriber;
                        this._context = null, this._parentSubscriber = null, t.unsubscribe()
                    }, e
                }(S),
                E = "function" == typeof Symbol && Symbol.observable || "@@observable";

            function P() {}

            function O() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return M(t)
            }

            function M(t) {
                return t ? 1 === t.length ? t[0] : function(e) {
                    return t.reduce(function(t, e) {
                        return e(t)
                    }, e)
                } : P
            }
            var T = function() {
                function t(t) {
                    this._isScalar = !1, t && (this._subscribe = t)
                }
                return t.prototype.lift = function(e) {
                    var n = new t;
                    return n.source = this, n.operator = e, n
                }, t.prototype.subscribe = function(t, e, n) {
                    var r = this.operator,
                        o = function(t, e, n) {
                            if (t) {
                                if (t instanceof S) return t;
                                if (t[k]) return t[k]()
                            }
                            return t || e || n ? new S(t, e, n) : new S(h)
                        }(t, e, n);
                    if (r ? r.call(o, this.source) : o.add(this.source || !o.syncErrorThrowable ? this._subscribe(o) : this._trySubscribe(o)), p.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown)) throw o.syncErrorValue;
                    return o
                }, t.prototype._trySubscribe = function(t) {
                    try {
                        return this._subscribe(t)
                    } catch (e) {
                        p.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), t.error(e)
                    }
                }, t.prototype.forEach = function(t, e) {
                    var n = this;
                    return new(e = A(e))(function(e, r) {
                        var o;
                        o = n.subscribe(function(e) {
                            try {
                                t(e)
                            } catch (t) {
                                r(t), o && o.unsubscribe()
                            }
                        }, r, e)
                    })
                }, t.prototype._subscribe = function(t) {
                    var e = this.source;
                    return e && e.subscribe(t)
                }, t.prototype[E] = function() {
                    return this
                }, t.prototype.pipe = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return 0 === t.length ? this : M(t)(this)
                }, t.prototype.toPromise = function(t) {
                    var e = this;
                    return new(t = A(t))(function(t, n) {
                        var r;
                        e.subscribe(function(t) {
                            return r = t
                        }, function(t) {
                            return n(t)
                        }, function() {
                            return t(r)
                        })
                    })
                }, t.create = function(e) {
                    return new t(e)
                }, t
            }();

            function A(t) {
                if (t || (t = p.Promise || Promise), !t) throw new Error("no Promise impl found");
                return t
            }

            function I(t) {
                return t && "function" == typeof t.schedule
            }
            var j = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this) || this;
                        return o.parent = e, o.outerValue = n, o.outerIndex = r, o.index = 0, o
                    }
                    return o(e, t), e.prototype._next = function(t) {
                        this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
                    }, e.prototype._error = function(t) {
                        this.parent.notifyError(t, this), this.unsubscribe()
                    }, e.prototype._complete = function() {
                        this.parent.notifyComplete(this), this.unsubscribe()
                    }, e
                }(S),
                N = function(t) {
                    return function(e) {
                        for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
                        e.closed || e.complete()
                    }
                },
                D = function(t) {
                    return function(e) {
                        return t.then(function(t) {
                            e.closed || (e.next(t), e.complete())
                        }, function(t) {
                            return e.error(t)
                        }).then(null, f), e
                    }
                },
                R = function() {
                    return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
                }(),
                L = function(t) {
                    return function(e) {
                        for (var n = t[R]();;) {
                            var r = n.next();
                            if (r.done) {
                                e.complete();
                                break
                            }
                            if (e.next(r.value), e.closed) break
                        }
                        return "function" == typeof n.return && e.add(function() {
                            n.return && n.return()
                        }), e
                    }
                },
                F = function(t) {
                    return function(e) {
                        var n = t[E]();
                        if ("function" != typeof n.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                        return n.subscribe(e)
                    }
                },
                z = function(t) {
                    return t && "number" == typeof t.length && "function" != typeof t
                };

            function U(t) {
                return t && "function" != typeof t.subscribe && "function" == typeof t.then
            }
            var V = function(t) {
                if (t instanceof T) return function(e) {
                    return t._isScalar ? (e.next(t.value), void e.complete()) : t.subscribe(e)
                };
                if (z(t)) return N(t);
                if (U(t)) return D(t);
                if (t && "function" == typeof t[R]) return L(t);
                if (t && "function" == typeof t[E]) return F(t);
                var e = m(t) ? "an invalid object" : "'" + t + "'";
                throw new TypeError("You provided " + e + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
            };

            function B(t, e, n, r) {
                var o = new j(t, n, r);
                return V(e)(o)
            }
            var H = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.notifyNext = function(t, e, n, r, o) {
                    this.destination.next(e)
                }, e.prototype.notifyError = function(t, e) {
                    this.destination.error(t)
                }, e.prototype.notifyComplete = function(t) {
                    this.destination.complete()
                }, e
            }(S);

            function q(t, e) {
                return function(n) {
                    if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                    return n.lift(new Q(t, e))
                }
            }
            var Q = function() {
                    function t(t, e) {
                        this.project = t, this.thisArg = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new Z(t, this.project, this.thisArg))
                    }, t
                }(),
                Z = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return o.project = n, o.count = 0, o.thisArg = r || o, o
                    }
                    return o(e, t), e.prototype._next = function(t) {
                        var e;
                        try {
                            e = this.project.call(this.thisArg, t, this.count++)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        this.destination.next(e)
                    }, e
                }(S);

            function G(t, e) {
                return new T(e ? function(n) {
                    var r = new w,
                        o = 0;
                    return r.add(e.schedule(function() {
                        o !== t.length ? (n.next(t[o++]), n.closed || r.add(this.schedule())) : n.complete()
                    })), r
                } : N(t))
            }

            function K(t, e) {
                if (!e) return t instanceof T ? t : new T(V(t));
                if (null != t) {
                    if (function(t) {
                            return t && "function" == typeof t[E]
                        }(t)) return function(t, e) {
                        return new T(e ? function(n) {
                            var r = new w;
                            return r.add(e.schedule(function() {
                                var o = t[E]();
                                r.add(o.subscribe({
                                    next: function(t) {
                                        r.add(e.schedule(function() {
                                            return n.next(t)
                                        }))
                                    },
                                    error: function(t) {
                                        r.add(e.schedule(function() {
                                            return n.error(t)
                                        }))
                                    },
                                    complete: function() {
                                        r.add(e.schedule(function() {
                                            return n.complete()
                                        }))
                                    }
                                }))
                            })), r
                        } : F(t))
                    }(t, e);
                    if (U(t)) return function(t, e) {
                        return new T(e ? function(n) {
                            var r = new w;
                            return r.add(e.schedule(function() {
                                return t.then(function(t) {
                                    r.add(e.schedule(function() {
                                        n.next(t), r.add(e.schedule(function() {
                                            return n.complete()
                                        }))
                                    }))
                                }, function(t) {
                                    r.add(e.schedule(function() {
                                        return n.error(t)
                                    }))
                                })
                            })), r
                        } : D(t))
                    }(t, e);
                    if (z(t)) return G(t, e);
                    if (function(t) {
                            return t && "function" == typeof t[R]
                        }(t) || "string" == typeof t) return function(t, e) {
                        if (!t) throw new Error("Iterable cannot be null");
                        return new T(e ? function(n) {
                            var r, o = new w;
                            return o.add(function() {
                                r && "function" == typeof r.return && r.return()
                            }), o.add(e.schedule(function() {
                                r = t[R](), o.add(e.schedule(function() {
                                    if (!n.closed) {
                                        var t, e;
                                        try {
                                            var o = r.next();
                                            t = o.value, e = o.done
                                        } catch (t) {
                                            return void n.error(t)
                                        }
                                        e ? n.complete() : (n.next(t), this.schedule())
                                    }
                                }))
                            })), o
                        } : L(t))
                    }(t, e)
                }
                throw new TypeError((null !== t && typeof t || t) + " is not observable")
            }

            function W(t, e, n) {
                return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof e ? function(r) {
                    return r.pipe(W(function(n, r) {
                        return K(t(n, r)).pipe(q(function(t, o) {
                            return e(n, t, r, o)
                        }))
                    }, n))
                } : ("number" == typeof e && (n = e), function(e) {
                    return e.lift(new X(t, n))
                })
            }
            var X = function() {
                    function t(t, e) {
                        void 0 === e && (e = Number.POSITIVE_INFINITY), this.project = t, this.concurrent = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new Y(t, this.project, this.concurrent))
                    }, t
                }(),
                Y = function(t) {
                    function e(e, n, r) {
                        void 0 === r && (r = Number.POSITIVE_INFINITY);
                        var o = t.call(this, e) || this;
                        return o.project = n, o.concurrent = r, o.hasCompleted = !1, o.buffer = [], o.active = 0, o.index = 0, o
                    }
                    return o(e, t), e.prototype._next = function(t) {
                        this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
                    }, e.prototype._tryNext = function(t) {
                        var e, n = this.index++;
                        try {
                            e = this.project(t, n)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        this.active++, this._innerSub(e, t, n)
                    }, e.prototype._innerSub = function(t, e, n) {
                        this.add(B(this, t, e, n))
                    }, e.prototype._complete = function() {
                        this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete()
                    }, e.prototype.notifyNext = function(t, e, n, r, o) {
                        this.destination.next(e)
                    }, e.prototype.notifyComplete = function(t) {
                        var e = this.buffer;
                        this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                    }, e
                }(H);

            function $(t) {
                return t
            }

            function J(t) {
                return void 0 === t && (t = Number.POSITIVE_INFINITY), W($, t)
            }
            var tt = function(t) {
                    function e() {
                        var n = t.call(this, "object unsubscribed") || this;
                        return n.name = "ObjectUnsubscribedError", Object.setPrototypeOf(n, e.prototype), n
                    }
                    return o(e, t), e
                }(Error),
                et = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.subject = e, r.subscriber = n, r.closed = !1, r
                    }
                    return o(e, t), e.prototype.unsubscribe = function() {
                        if (!this.closed) {
                            this.closed = !0;
                            var t = this.subject,
                                e = t.observers;
                            if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
                                var n = e.indexOf(this.subscriber); - 1 !== n && e.splice(n, 1)
                            }
                        }
                    }, e
                }(w),
                nt = function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return n.destination = e, n
                    }
                    return o(e, t), e
                }(S),
                rt = function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e.observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
                    }
                    return o(e, t), e.prototype[k] = function() {
                        return new nt(this)
                    }, e.prototype.lift = function(t) {
                        var e = new ot(this, this);
                        return e.operator = t, e
                    }, e.prototype.next = function(t) {
                        if (this.closed) throw new tt;
                        if (!this.isStopped)
                            for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].next(t)
                    }, e.prototype.error = function(t) {
                        if (this.closed) throw new tt;
                        this.hasError = !0, this.thrownError = t, this.isStopped = !0;
                        for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].error(t);
                        this.observers.length = 0
                    }, e.prototype.complete = function() {
                        if (this.closed) throw new tt;
                        this.isStopped = !0;
                        for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++) n[r].complete();
                        this.observers.length = 0
                    }, e.prototype.unsubscribe = function() {
                        this.isStopped = !0, this.closed = !0, this.observers = null
                    }, e.prototype._trySubscribe = function(e) {
                        if (this.closed) throw new tt;
                        return t.prototype._trySubscribe.call(this, e)
                    }, e.prototype._subscribe = function(t) {
                        if (this.closed) throw new tt;
                        return this.hasError ? (t.error(this.thrownError), w.EMPTY) : this.isStopped ? (t.complete(), w.EMPTY) : (this.observers.push(t), new et(this, t))
                    }, e.prototype.asObservable = function() {
                        var t = new T;
                        return t.source = this, t
                    }, e.create = function(t, e) {
                        return new ot(t, e)
                    }, e
                }(T),
                ot = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.destination = e, r.source = n, r
                    }
                    return o(e, t), e.prototype.next = function(t) {
                        var e = this.destination;
                        e && e.next && e.next(t)
                    }, e.prototype.error = function(t) {
                        var e = this.destination;
                        e && e.error && this.destination.error(t)
                    }, e.prototype.complete = function() {
                        var t = this.destination;
                        t && t.complete && this.destination.complete()
                    }, e.prototype._subscribe = function(t) {
                        return this.source ? this.source.subscribe(t) : w.EMPTY
                    }, e
                }(rt);

            function it() {
                return function(t) {
                    return t.lift(new at(t))
                }
            }
            var at = function() {
                    function t(t) {
                        this.connectable = t
                    }
                    return t.prototype.call = function(t, e) {
                        var n = this.connectable;
                        n._refCount++;
                        var r = new st(t, n),
                            o = e.subscribe(r);
                        return r.closed || (r.connection = n.connect()), o
                    }, t
                }(),
                st = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.connectable = n, r
                    }
                    return o(e, t), e.prototype._unsubscribe = function() {
                        var t = this.connectable;
                        if (t) {
                            this.connectable = null;
                            var e = t._refCount;
                            if (e <= 0) this.connection = null;
                            else if (t._refCount = e - 1, e > 1) this.connection = null;
                            else {
                                var n = this.connection,
                                    r = t._connection;
                                this.connection = null, !r || n && r !== n || r.unsubscribe()
                            }
                        } else this.connection = null
                    }, e
                }(S),
                lt = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.source = e, r.subjectFactory = n, r._refCount = 0, r._isComplete = !1, r
                    }
                    return o(e, t), e.prototype._subscribe = function(t) {
                        return this.getSubject().subscribe(t)
                    }, e.prototype.getSubject = function() {
                        var t = this._subject;
                        return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
                    }, e.prototype.connect = function() {
                        var t = this._connection;
                        return t || (this._isComplete = !1, (t = this._connection = new w).add(this.source.subscribe(new ct(this.getSubject(), this))), t.closed ? (this._connection = null, t = w.EMPTY) : this._connection = t), t
                    }, e.prototype.refCount = function() {
                        return it()(this)
                    }, e
                }(T).prototype,
                ut = {
                    operator: {
                        value: null
                    },
                    _refCount: {
                        value: 0,
                        writable: !0
                    },
                    _subject: {
                        value: null,
                        writable: !0
                    },
                    _connection: {
                        value: null,
                        writable: !0
                    },
                    _subscribe: {
                        value: lt._subscribe
                    },
                    _isComplete: {
                        value: lt._isComplete,
                        writable: !0
                    },
                    getSubject: {
                        value: lt.getSubject
                    },
                    connect: {
                        value: lt.connect
                    },
                    refCount: {
                        value: lt.refCount
                    }
                },
                ct = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.connectable = n, r
                    }
                    return o(e, t), e.prototype._error = function(e) {
                        this._unsubscribe(), t.prototype._error.call(this, e)
                    }, e.prototype._complete = function() {
                        this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this)
                    }, e.prototype._unsubscribe = function() {
                        var t = this.connectable;
                        if (t) {
                            this.connectable = null;
                            var e = t._connection;
                            t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
                        }
                    }, e
                }(nt);

            function pt() {
                return new rt
            }

            function ft(t) {
                return {
                    providedIn: t.providedIn || null,
                    factory: t.factory,
                    value: void 0
                }
            }
            var ht = function() {
                    function t(t, e) {
                        this._desc = t, this.ngMetadataName = "InjectionToken", this.ngInjectableDef = void 0 !== e ? ft({
                            providedIn: e.providedIn || "root",
                            factory: e.factory
                        }) : void 0
                    }
                    return t.prototype.toString = function() {
                        return "InjectionToken " + this._desc
                    }, t
                }(),
                dt = "__parameters__";

            function mt(t, e, n) {
                var r = function(t) {
                    return function() {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        if (t) {
                            var r = t.apply(void 0, l(e));
                            for (var o in r) this[o] = r[o]
                        }
                    }
                }(e);

                function o() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    if (this instanceof o) return r.apply(this, t), this;
                    var n, i = new((n = o).bind.apply(n, l([void 0], t)));
                    return a.annotation = i, a;

                    function a(t, e, n) {
                        for (var r = t.hasOwnProperty(dt) ? t[dt] : Object.defineProperty(t, dt, {
                                value: []
                            })[dt]; r.length <= n;) r.push(null);
                        return (r[n] = r[n] || []).push(i), t
                    }
                }
                return n && (o.prototype = Object.create(n.prototype)), o.prototype.ngMetadataName = t, o.annotationCls = o, o
            }
            var gt = new ht("AnalyzeForEntryComponents");
            Function;
            var yt = "undefined" != typeof window && window,
                vt = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                _t = "undefined" != typeof global && global,
                bt = yt || _t || vt,
                wt = Promise.resolve(0),
                Ct = null;

            function kt() {
                if (!Ct) {
                    var t = bt.Symbol;
                    if (t && t.iterator) Ct = t.iterator;
                    else
                        for (var e = Object.getOwnPropertyNames(Map.prototype), n = 0; n < e.length; ++n) {
                            var r = e[n];
                            "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (Ct = r)
                        }
                }
                return Ct
            }

            function St(t) {
                "undefined" == typeof Zone ? wt.then(function() {
                    t && t.apply(null, null)
                }) : Zone.current.scheduleMicroTask("scheduleMicrotask", t)
            }

            function xt(t, e) {
                return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e)
            }

            function Et(t) {
                if ("string" == typeof t) return t;
                if (t instanceof Array) return "[" + t.map(Et).join(", ") + "]";
                if (null == t) return "" + t;
                if (t.overriddenName) return "" + t.overriddenName;
                if (t.name) return "" + t.name;
                var e = t.toString();
                if (null == e) return "" + e;
                var n = e.indexOf("\n");
                return -1 === n ? e : e.substring(0, n)
            }

            function Pt(t) {
                return t.__forward_ref__ = Pt, t.toString = function() {
                    return Et(this())
                }, t
            }

            function Ot(t) {
                return "function" == typeof t && t.hasOwnProperty("__forward_ref__") && t.__forward_ref__ === Pt ? t() : t
            }
            var Mt = mt("Inject", function(t) {
                    return {
                        token: t
                    }
                }),
                Tt = mt("Optional"),
                At = mt("Self"),
                It = mt("SkipSelf"),
                jt = "__source",
                Nt = new Object,
                Dt = new ht("INJECTOR"),
                Rt = function() {
                    function t() {}
                    return t.prototype.get = function(t, e) {
                        if (void 0 === e && (e = Nt), e === Nt) throw new Error("NullInjectorError: No provider for " + Et(t) + "!");
                        return e
                    }, t
                }(),
                Lt = function() {
                    function t() {}
                    return t.create = function(t, e) {
                        return Array.isArray(t) ? new Gt(t, e) : new Gt(t.providers, t.parent, t.name || null)
                    }, t.THROW_IF_NOT_FOUND = Nt, t.NULL = new Rt, t.ngInjectableDef = ft({
                        providedIn: "any",
                        factory: function() {
                            return function(t, e) {
                                if (void 0 === e && (e = 0), void 0 === Yt) throw new Error("inject() must be called from an injection context");
                                if (null === Yt) {
                                    var n = t.ngInjectableDef;
                                    if (n && "root" == n.providedIn) return void 0 === n.value ? n.value = n.factory() : n.value;
                                    throw new Error("Injector: NOT_FOUND [" + Et(t) + "]")
                                }
                                return Yt.get(t, 8 & e ? null : void 0, e)
                            }(Dt)
                        }
                    }), t
                }(),
                Ft = function(t) {
                    return t
                },
                zt = [],
                Ut = Ft,
                Vt = function() {
                    return Array.prototype.slice.call(arguments)
                },
                Bt = {},
                Ht = function(t) {
                    for (var e in t)
                        if (t[e] === Bt) return e;
                    throw Error("!prop")
                }({
                    provide: String,
                    useValue: Bt
                }),
                qt = Lt.NULL,
                Qt = /\n/gm,
                Zt = "\u0275",
                Gt = function() {
                    function t(t, e, n) {
                        void 0 === e && (e = qt), void 0 === n && (n = null), this.parent = e, this.source = n;
                        var r = this._records = new Map;
                        r.set(Lt, {
                                token: Lt,
                                fn: Ft,
                                deps: zt,
                                value: this,
                                useNew: !1
                            }), r.set(Dt, {
                                token: Dt,
                                fn: Ft,
                                deps: zt,
                                value: this,
                                useNew: !1
                            }),
                            function t(e, n) {
                                if (n)
                                    if ((n = Ot(n)) instanceof Array)
                                        for (var r = 0; r < n.length; r++) t(e, n[r]);
                                    else {
                                        if ("function" == typeof n) throw Xt("Function/Class not supported", n);
                                        if (!n || "object" != typeof n || !n.provide) throw Xt("Unexpected provider", n);
                                        var o = Ot(n.provide),
                                            i = function(t) {
                                                var e = function(t) {
                                                        var e = zt,
                                                            n = t.deps;
                                                        if (n && n.length) {
                                                            e = [];
                                                            for (var r = 0; r < n.length; r++) {
                                                                var o = 6;
                                                                if ((l = Ot(n[r])) instanceof Array)
                                                                    for (var i = 0, a = l; i < a.length; i++) {
                                                                        var s = a[i];
                                                                        s instanceof Tt || s == Tt ? o |= 1 : s instanceof It || s == It ? o &= -3 : s instanceof At || s == At ? o &= -5 : l = s instanceof Mt ? s.token : Ot(s)
                                                                    }
                                                                e.push({
                                                                    token: l,
                                                                    options: o
                                                                })
                                                            }
                                                        } else if (t.useExisting) {
                                                            var l;
                                                            e = [{
                                                                token: l = Ot(t.useExisting),
                                                                options: 6
                                                            }]
                                                        } else if (!(n || Ht in t)) throw Xt("'deps' required", t);
                                                        return e
                                                    }(t),
                                                    n = Ft,
                                                    r = zt,
                                                    o = !1,
                                                    i = Ot(t.provide);
                                                if (Ht in t) r = t.useValue;
                                                else if (t.useFactory) n = t.useFactory;
                                                else if (t.useExisting);
                                                else if (t.useClass) o = !0, n = Ot(t.useClass);
                                                else {
                                                    if ("function" != typeof i) throw Xt("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable", t);
                                                    o = !0, n = i
                                                }
                                                return {
                                                    deps: e,
                                                    fn: n,
                                                    useNew: o,
                                                    value: r
                                                }
                                            }(n);
                                        if (!0 === n.multi) {
                                            var a = e.get(o);
                                            if (a) {
                                                if (a.fn !== Vt) throw Kt(o)
                                            } else e.set(o, a = {
                                                token: n.provide,
                                                deps: [],
                                                useNew: !1,
                                                fn: Vt,
                                                value: zt
                                            });
                                            a.deps.push({
                                                token: o = n,
                                                options: 6
                                            })
                                        }
                                        var s = e.get(o);
                                        if (s && s.fn == Vt) throw Kt(o);
                                        e.set(o, i)
                                    }
                            }(r, t)
                    }
                    return t.prototype.get = function(t, e, n) {
                        void 0 === n && (n = 0);
                        var r = this._records.get(t);
                        try {
                            return function t(e, n, r, o, i, a) {
                                try {
                                    return function(e, n, r, o, i, a) {
                                        var s, u;
                                        if (!n || 4 & a) 2 & a || (s = o.get(e, i, 0));
                                        else {
                                            if ((s = n.value) == Ut) throw Error(Zt + "Circular dependency");
                                            if (s === zt) {
                                                n.value = Ut;
                                                var c = n.useNew,
                                                    p = n.fn,
                                                    f = n.deps,
                                                    h = zt;
                                                if (f.length) {
                                                    h = [];
                                                    for (var d = 0; d < f.length; d++) {
                                                        var m = f[d],
                                                            g = m.options,
                                                            y = 2 & g ? r.get(m.token) : void 0;
                                                        h.push(t(m.token, y, r, y || 4 & g ? o : qt, 1 & g ? null : Lt.THROW_IF_NOT_FOUND, 0))
                                                    }
                                                }
                                                n.value = s = c ? new((u = p).bind.apply(u, l([void 0], h))) : p.apply(void 0, h)
                                            }
                                        }
                                        return s
                                    }(e, n, r, o, i, a)
                                } catch (t) {
                                    throw t instanceof Error || (t = new Error(t)), (t.ngTempTokenPath = t.ngTempTokenPath || []).unshift(e), n && n.value == Ut && (n.value = zt), t
                                }
                            }(t, r, this._records, this.parent, e, n)
                        } catch (e) {
                            var o = e.ngTempTokenPath;
                            throw t[jt] && o.unshift(t[jt]), e.message = Wt("\n" + e.message, o, this.source), e.ngTokenPath = o, e.ngTempTokenPath = null, e
                        }
                    }, t.prototype.toString = function() {
                        var t = [];
                        return this._records.forEach(function(e, n) {
                            return t.push(Et(n))
                        }), "StaticInjector[" + t.join(", ") + "]"
                    }, t
                }();

            function Kt(t) {
                return Xt("Cannot mix multi providers and regular providers", t)
            }

            function Wt(t, e, n) {
                void 0 === n && (n = null), t = t && "\n" === t.charAt(0) && t.charAt(1) == Zt ? t.substr(2) : t;
                var r = Et(e);
                if (e instanceof Array) r = e.map(Et).join(" -> ");
                else if ("object" == typeof e) {
                    var o = [];
                    for (var i in e)
                        if (e.hasOwnProperty(i)) {
                            var a = e[i];
                            o.push(i + ":" + ("string" == typeof a ? JSON.stringify(a) : Et(a)))
                        } r = "{" + o.join(", ") + "}"
                }
                return "StaticInjectorError" + (n ? "(" + n + ")" : "") + "[" + r + "]: " + t.replace(Qt, "\n  ")
            }

            function Xt(t, e) {
                return new Error(Wt(t, e))
            }
            var Yt = void 0;

            function $t(t) {
                var e = Yt;
                return Yt = t, e
            }
            String;
            var Jt = function(t) {
                    return t[t.Emulated = 0] = "Emulated", t[t.Native = 1] = "Native", t[t.None = 2] = "None", t
                }({}),
                te = new function(t) {
                    this.full = "6.0.3", this.major = "6.0.3".split(".")[0], this.minor = "6.0.3".split(".")[1], this.patch = "6.0.3".split(".").slice(2).join(".")
                }("6.0.3"),
                ee = "ngDebugContext",
                ne = "ngOriginalError",
                re = "ngErrorLogger";

            function oe(t) {
                return t[ee]
            }

            function ie(t) {
                return t[ne]
            }

            function ae(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                t.error.apply(t, l(e))
            }
            var se = function() {
                    function t() {
                        this._console = console
                    }
                    return t.prototype.handleError = function(t) {
                        var e = this._findOriginalError(t),
                            n = this._findContext(t),
                            r = function(t) {
                                return t[re] || ae
                            }(t);
                        r(this._console, "ERROR", t), e && r(this._console, "ORIGINAL ERROR", e), n && r(this._console, "ERROR CONTEXT", n)
                    }, t.prototype._findContext = function(t) {
                        return t ? oe(t) ? oe(t) : this._findContext(ie(t)) : null
                    }, t.prototype._findOriginalError = function(t) {
                        for (var e = ie(t); e && ie(e);) e = ie(e);
                        return e
                    }, t
                }(),
                le = new ht("The presence of this token marks an injector as being the root injector.");

            function ue(t) {
                return !!t && "function" == typeof t.then
            }
            var ce = new ht("Application Initializer"),
                pe = function() {
                    function t(t) {
                        var e = this;
                        this.appInits = t, this.initialized = !1, this.done = !1, this.donePromise = new Promise(function(t, n) {
                            e.resolve = t, e.reject = n
                        })
                    }
                    return t.prototype.runInitializers = function() {
                        var t = this;
                        if (!this.initialized) {
                            var e = [],
                                n = function() {
                                    t.done = !0, t.resolve()
                                };
                            if (this.appInits)
                                for (var r = 0; r < this.appInits.length; r++) {
                                    var o = this.appInits[r]();
                                    ue(o) && e.push(o)
                                }
                            Promise.all(e).then(function() {
                                n()
                            }).catch(function(e) {
                                t.reject(e)
                            }), 0 === e.length && n(), this.initialized = !0
                        }
                    }, t
                }(),
                fe = new ht("AppId");

            function he() {
                return "" + de() + de() + de()
            }

            function de() {
                return String.fromCharCode(97 + Math.floor(25 * Math.random()))
            }
            var me = new ht("Platform Initializer"),
                ge = new ht("Platform ID"),
                ye = new ht("appBootstrapListener"),
                ve = function() {
                    function t() {}
                    return t.prototype.log = function(t) {
                        console.log(t)
                    }, t.prototype.warn = function(t) {
                        console.warn(t)
                    }, t.ctorParameters = function() {
                        return []
                    }, t
                }();

            function _e() {
                throw new Error("Runtime compiler is not loaded")
            }
            var be = function() {
                    function t() {}
                    return t.prototype.compileModuleSync = function(t) {
                        throw _e()
                    }, t.prototype.compileModuleAsync = function(t) {
                        throw _e()
                    }, t.prototype.compileModuleAndAllComponentsSync = function(t) {
                        throw _e()
                    }, t.prototype.compileModuleAndAllComponentsAsync = function(t) {
                        throw _e()
                    }, t.prototype.clearCache = function() {}, t.prototype.clearCacheFor = function(t) {}, t
                }(),
                we = function() {},
                Ce = function() {};

            function ke(t) {
                var e = Error("No component factory found for " + Et(t) + ". Did you add it to @NgModule.entryComponents?");
                return e[Ee] = t, e
            }
            var Se, xe, Ee = "ngComponent",
                Pe = function() {
                    function t() {}
                    return t.prototype.resolveComponentFactory = function(t) {
                        throw ke(t)
                    }, t
                }(),
                Oe = function() {
                    function t() {}
                    return t.NULL = new Pe, t
                }(),
                Me = function() {
                    function t(t, e, n) {
                        this._parent = e, this._ngModule = n, this._factories = new Map;
                        for (var r = 0; r < t.length; r++) {
                            var o = t[r];
                            this._factories.set(o.componentType, o)
                        }
                    }
                    return t.prototype.resolveComponentFactory = function(t) {
                        var e = this._factories.get(t);
                        if (!e && this._parent && (e = this._parent.resolveComponentFactory(t)), !e) throw ke(t);
                        return new Te(e, this._ngModule)
                    }, t
                }(),
                Te = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.factory = e, r.ngModule = n, r.selector = e.selector, r.componentType = e.componentType, r.ngContentSelectors = e.ngContentSelectors, r.inputs = e.inputs, r.outputs = e.outputs, r
                    }
                    return o(e, t), e.prototype.create = function(t, e, n, r) {
                        return this.factory.create(t, e, n, r || this.ngModule)
                    }, e
                }(Ce),
                Ae = function() {},
                Ie = function() {},
                je = function() {
                    var t = bt.wtf;
                    return !(!t || !(Se = t.trace) || (xe = Se.events, 0))
                }();

            function Ne(t, e) {
                return null
            }
            var De = je ? function(t, e) {
                    return void 0 === e && (e = null), xe.createScope(t, e)
                } : function(t, e) {
                    return Ne
                },
                Re = je ? function(t, e) {
                    return Se.leaveScope(t, e), e
                } : function(t, e) {
                    return e
                },
                Le = function(t) {
                    function e(e) {
                        void 0 === e && (e = !1);
                        var n = t.call(this) || this;
                        return n.__isAsync = e, n
                    }
                    return o(e, t), e.prototype.emit = function(e) {
                        t.prototype.next.call(this, e)
                    }, e.prototype.subscribe = function(e, n, r) {
                        var o, i = function(t) {
                                return null
                            },
                            a = function() {
                                return null
                            };
                        e && "object" == typeof e ? (o = this.__isAsync ? function(t) {
                            setTimeout(function() {
                                return e.next(t)
                            })
                        } : function(t) {
                            e.next(t)
                        }, e.error && (i = this.__isAsync ? function(t) {
                            setTimeout(function() {
                                return e.error(t)
                            })
                        } : function(t) {
                            e.error(t)
                        }), e.complete && (a = this.__isAsync ? function() {
                            setTimeout(function() {
                                return e.complete()
                            })
                        } : function() {
                            e.complete()
                        })) : (o = this.__isAsync ? function(t) {
                            setTimeout(function() {
                                return e(t)
                            })
                        } : function(t) {
                            e(t)
                        }, n && (i = this.__isAsync ? function(t) {
                            setTimeout(function() {
                                return n(t)
                            })
                        } : function(t) {
                            n(t)
                        }), r && (a = this.__isAsync ? function() {
                            setTimeout(function() {
                                return r()
                            })
                        } : function() {
                            r()
                        }));
                        var s = t.prototype.subscribe.call(this, o, i, a);
                        return e instanceof w && e.add(s), s
                    }, e
                }(rt),
                Fe = function() {
                    function t(t) {
                        var e, n = t.enableLongStackTrace,
                            r = void 0 !== n && n;
                        if (this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Le(!1), this.onMicrotaskEmpty = new Le(!1), this.onStable = new Le(!1), this.onError = new Le(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                        Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), r && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), (e = this)._inner = e._inner.fork({
                            name: "angular",
                            properties: {
                                isAngularZone: !0
                            },
                            onInvokeTask: function(t, n, r, o, i, a) {
                                try {
                                    return Be(e), t.invokeTask(r, o, i, a)
                                } finally {
                                    He(e)
                                }
                            },
                            onInvoke: function(t, n, r, o, i, a, s) {
                                try {
                                    return Be(e), t.invoke(r, o, i, a, s)
                                } finally {
                                    He(e)
                                }
                            },
                            onHasTask: function(t, n, r, o) {
                                t.hasTask(r, o), n === r && ("microTask" == o.change ? (e.hasPendingMicrotasks = o.microTask, Ve(e)) : "macroTask" == o.change && (e.hasPendingMacrotasks = o.macroTask))
                            },
                            onHandleError: function(t, n, r, o) {
                                return t.handleError(r, o), e.runOutsideAngular(function() {
                                    return e.onError.emit(o)
                                }), !1
                            }
                        })
                    }
                    return t.isInAngularZone = function() {
                        return !0 === Zone.current.get("isAngularZone")
                    }, t.assertInAngularZone = function() {
                        if (!t.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
                    }, t.assertNotInAngularZone = function() {
                        if (t.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
                    }, t.prototype.run = function(t, e, n) {
                        return this._inner.run(t, e, n)
                    }, t.prototype.runTask = function(t, e, n, r) {
                        var o = this._inner,
                            i = o.scheduleEventTask("NgZoneEvent: " + r, t, Ue, ze, ze);
                        try {
                            return o.runTask(i, e, n)
                        } finally {
                            o.cancelTask(i)
                        }
                    }, t.prototype.runGuarded = function(t, e, n) {
                        return this._inner.runGuarded(t, e, n)
                    }, t.prototype.runOutsideAngular = function(t) {
                        return this._outer.run(t)
                    }, t
                }();

            function ze() {}
            var Ue = {};

            function Ve(t) {
                if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable) try {
                    t._nesting++, t.onMicrotaskEmpty.emit(null)
                } finally {
                    if (t._nesting--, !t.hasPendingMicrotasks) try {
                        t.runOutsideAngular(function() {
                            return t.onStable.emit(null)
                        })
                    } finally {
                        t.isStable = !0
                    }
                }
            }

            function Be(t) {
                t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null))
            }

            function He(t) {
                t._nesting--, Ve(t)
            }
            var qe, Qe = function() {
                    function t() {
                        this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Le, this.onMicrotaskEmpty = new Le, this.onStable = new Le, this.onError = new Le
                    }
                    return t.prototype.run = function(t) {
                        return t()
                    }, t.prototype.runGuarded = function(t) {
                        return t()
                    }, t.prototype.runOutsideAngular = function(t) {
                        return t()
                    }, t.prototype.runTask = function(t) {
                        return t()
                    }, t
                }(),
                Ze = function() {
                    function t(t) {
                        var e = this;
                        this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this._watchAngularEvents(), t.run(function() {
                            e.taskTrackingZone = Zone.current.get("TaskTrackingZone")
                        })
                    }
                    return t.prototype._watchAngularEvents = function() {
                        var t = this;
                        this._ngZone.onUnstable.subscribe({
                            next: function() {
                                t._didWork = !0, t._isZoneStable = !1
                            }
                        }), this._ngZone.runOutsideAngular(function() {
                            t._ngZone.onStable.subscribe({
                                next: function() {
                                    Fe.assertNotInAngularZone(), St(function() {
                                        t._isZoneStable = !0, t._runCallbacksIfReady()
                                    })
                                }
                            })
                        })
                    }, t.prototype.increasePendingRequestCount = function() {
                        return this._pendingCount += 1, this._didWork = !0, this._pendingCount
                    }, t.prototype.decreasePendingRequestCount = function() {
                        if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                        return this._runCallbacksIfReady(), this._pendingCount
                    }, t.prototype.isStable = function() {
                        return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
                    }, t.prototype._runCallbacksIfReady = function() {
                        var t = this;
                        if (this.isStable()) St(function() {
                            for (; 0 !== t._callbacks.length;) {
                                var e = t._callbacks.pop();
                                clearTimeout(e.timeoutId), e.doneCb(t._didWork)
                            }
                            t._didWork = !1
                        });
                        else {
                            var e = this.getPendingTasks();
                            this._callbacks = this._callbacks.filter(function(t) {
                                return !t.updateCb || !t.updateCb(e) || (clearTimeout(t.timeoutId), !1)
                            }), this._didWork = !0
                        }
                    }, t.prototype.getPendingTasks = function() {
                        return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(function(t) {
                            return {
                                source: t.source,
                                isPeriodic: t.data.isPeriodic,
                                delay: t.data.delay,
                                creationLocation: t.creationLocation,
                                xhr: t.data.target
                            }
                        }) : []
                    }, t.prototype.addCallback = function(t, e, n) {
                        var r = this,
                            o = -1;
                        e && e > 0 && (o = setTimeout(function() {
                            r._callbacks = r._callbacks.filter(function(t) {
                                return t.timeoutId !== o
                            }), t(r._didWork, r.getPendingTasks())
                        }, e)), this._callbacks.push({
                            doneCb: t,
                            timeoutId: o,
                            updateCb: n
                        })
                    }, t.prototype.whenStable = function(t, e, n) {
                        if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                        this.addCallback(t, e, n), this._runCallbacksIfReady()
                    }, t.prototype.getPendingRequestCount = function() {
                        return this._pendingCount
                    }, t.prototype.findProviders = function(t, e, n) {
                        return []
                    }, t
                }(),
                Ge = function() {
                    function t() {
                        this._applications = new Map, Ke.addToWindow(this)
                    }
                    return t.prototype.registerApplication = function(t, e) {
                        this._applications.set(t, e)
                    }, t.prototype.unregisterApplication = function(t) {
                        this._applications.delete(t)
                    }, t.prototype.unregisterAllApplications = function() {
                        this._applications.clear()
                    }, t.prototype.getTestability = function(t) {
                        return this._applications.get(t) || null
                    }, t.prototype.getAllTestabilities = function() {
                        return Array.from(this._applications.values())
                    }, t.prototype.getAllRootElements = function() {
                        return Array.from(this._applications.keys())
                    }, t.prototype.findTestabilityInTree = function(t, e) {
                        return void 0 === e && (e = !0), Ke.findTestabilityInTree(this, t, e)
                    }, t.ctorParameters = function() {
                        return []
                    }, t
                }(),
                Ke = new(function() {
                    function t() {}
                    return t.prototype.addToWindow = function(t) {}, t.prototype.findTestabilityInTree = function(t, e, n) {
                        return null
                    }, t
                }()),
                We = !0,
                Xe = !1,
                Ye = new ht("AllowMultipleToken");

            function $e() {
                return Xe = !0, We
            }
            var Je = function(t, e) {
                this.name = t, this.token = e
            };

            function tn(t, e, n) {
                void 0 === n && (n = []);
                var r = "Platform: " + e,
                    o = new ht(r);
                return function(e) {
                    void 0 === e && (e = []);
                    var i = en();
                    if (!i || i.injector.get(Ye, !1))
                        if (t) t(n.concat(e).concat({
                            provide: o,
                            useValue: !0
                        }));
                        else {
                            var a = n.concat(e).concat({
                                provide: o,
                                useValue: !0
                            });
                            ! function(t) {
                                if (qe && !qe.destroyed && !qe.injector.get(Ye, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                                qe = t.get(nn);
                                var e = t.get(me, null);
                                e && e.forEach(function(t) {
                                    return t()
                                })
                            }(Lt.create({
                                providers: a,
                                name: r
                            }))
                        } return function(t) {
                        var e = en();
                        if (!e) throw new Error("No platform exists!");
                        if (!e.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
                        return e
                    }(o)
                }
            }

            function en() {
                return qe && !qe.destroyed ? qe : null
            }
            var nn = function() {
                function t(t) {
                    this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1
                }
                return t.prototype.bootstrapModuleFactory = function(t, e) {
                    var n, r = this,
                        o = "noop" === (n = e ? e.ngZone : void 0) ? new Qe : ("zone.js" === n ? void 0 : n) || new Fe({
                            enableLongStackTrace: $e()
                        }),
                        i = [{
                            provide: Fe,
                            useValue: o
                        }];
                    return o.run(function() {
                        var e = Lt.create({
                                providers: i,
                                parent: r.injector,
                                name: t.moduleType.name
                            }),
                            n = t.create(e),
                            a = n.injector.get(se, null);
                        if (!a) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                        return n.onDestroy(function() {
                                return an(r._modules, n)
                            }), o.runOutsideAngular(function() {
                                return o.onError.subscribe({
                                    next: function(t) {
                                        a.handleError(t)
                                    }
                                })
                            }),
                            function(t, e, o) {
                                try {
                                    var i = ((a = n.injector.get(pe)).runInitializers(), a.donePromise.then(function() {
                                        return r._moduleDoBootstrap(n), n
                                    }));
                                    return ue(i) ? i.catch(function(n) {
                                        throw e.runOutsideAngular(function() {
                                            return t.handleError(n)
                                        }), n
                                    }) : i
                                } catch (n) {
                                    throw e.runOutsideAngular(function() {
                                        return t.handleError(n)
                                    }), n
                                }
                                var a
                            }(a, o)
                    })
                }, t.prototype.bootstrapModule = function(t, e) {
                    var n = this;
                    void 0 === e && (e = []);
                    var r = this.injector.get(we),
                        o = rn({}, e);
                    return r.createCompiler([o]).compileModuleAsync(t).then(function(t) {
                        return n.bootstrapModuleFactory(t, o)
                    })
                }, t.prototype._moduleDoBootstrap = function(t) {
                    var e = t.injector.get(on);
                    if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach(function(t) {
                        return e.bootstrap(t)
                    });
                    else {
                        if (!t.instance.ngDoBootstrap) throw new Error("The module " + Et(t.instance.constructor) + ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.');
                        t.instance.ngDoBootstrap(e)
                    }
                    this._modules.push(t)
                }, t.prototype.onDestroy = function(t) {
                    this._destroyListeners.push(t)
                }, Object.defineProperty(t.prototype, "injector", {
                    get: function() {
                        return this._injector
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.destroy = function() {
                    if (this._destroyed) throw new Error("The platform has already been destroyed!");
                    this._modules.slice().forEach(function(t) {
                        return t.destroy()
                    }), this._destroyListeners.forEach(function(t) {
                        return t()
                    }), this._destroyed = !0
                }, Object.defineProperty(t.prototype, "destroyed", {
                    get: function() {
                        return this._destroyed
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }();

            function rn(t, e) {
                return Array.isArray(e) ? e.reduce(rn, t) : i({}, t, e)
            }
            var on = function() {
                function t(t, e, n, r, o, i) {
                    var a = this;
                    this._zone = t, this._console = e, this._injector = n, this._exceptionHandler = r, this._componentFactoryResolver = o, this._initStatus = i, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = $e(), this._zone.onMicrotaskEmpty.subscribe({
                        next: function() {
                            a._zone.run(function() {
                                a.tick()
                            })
                        }
                    });
                    var s = new T(function(t) {
                            a._stable = a._zone.isStable && !a._zone.hasPendingMacrotasks && !a._zone.hasPendingMicrotasks, a._zone.runOutsideAngular(function() {
                                t.next(a._stable), t.complete()
                            })
                        }),
                        l = new T(function(t) {
                            var e;
                            a._zone.runOutsideAngular(function() {
                                e = a._zone.onStable.subscribe(function() {
                                    Fe.assertNotInAngularZone(), St(function() {
                                        a._stable || a._zone.hasPendingMacrotasks || a._zone.hasPendingMicrotasks || (a._stable = !0, t.next(!0))
                                    })
                                })
                            });
                            var n = a._zone.onUnstable.subscribe(function() {
                                Fe.assertInAngularZone(), a._stable && (a._stable = !1, a._zone.runOutsideAngular(function() {
                                    t.next(!1)
                                }))
                            });
                            return function() {
                                e.unsubscribe(), n.unsubscribe()
                            }
                        });
                    this.isStable = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        var n = Number.POSITIVE_INFINITY,
                            r = null,
                            o = t[t.length - 1];
                        return I(o) ? (r = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (n = t.pop())) : "number" == typeof o && (n = t.pop()), null === r && 1 === t.length && t[0] instanceof T ? t[0] : J(n)(G(t, r))
                    }(s, l.pipe(function(t) {
                        return it()((e = pt, function(t) {
                            var n;
                            n = "function" == typeof e ? e : function() {
                                return e
                            };
                            var r = Object.create(t, ut);
                            return r.source = t, r.subjectFactory = n, r
                        })(t));
                        var e
                    }))
                }
                return t.prototype.bootstrap = function(t, e) {
                    var n, r = this;
                    if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                    n = t instanceof Ce ? t : this._componentFactoryResolver.resolveComponentFactory(t), this.componentTypes.push(n.componentType);
                    var o = n instanceof Te ? null : this._injector.get(Ae),
                        i = n.create(Lt.NULL, [], e || n.selector, o);
                    i.onDestroy(function() {
                        r._unloadComponent(i)
                    });
                    var a = i.injector.get(Ze, null);
                    return a && i.injector.get(Ge).registerApplication(i.location.nativeElement, a), this._loadComponent(i), $e() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), i
                }, t.prototype.tick = function() {
                    var e = this;
                    if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
                    var n = t._tickScope();
                    try {
                        this._runningTick = !0, this._views.forEach(function(t) {
                            return t.detectChanges()
                        }), this._enforceNoNewChanges && this._views.forEach(function(t) {
                            return t.checkNoChanges()
                        })
                    } catch (t) {
                        this._zone.runOutsideAngular(function() {
                            return e._exceptionHandler.handleError(t)
                        })
                    } finally {
                        this._runningTick = !1, Re(n)
                    }
                }, t.prototype.attachView = function(t) {
                    var e = t;
                    this._views.push(e), e.attachToAppRef(this)
                }, t.prototype.detachView = function(t) {
                    var e = t;
                    an(this._views, e), e.detachFromAppRef()
                }, t.prototype._loadComponent = function(t) {
                    this.attachView(t.hostView), this.tick(), this.components.push(t), this._injector.get(ye, []).concat(this._bootstrapListeners).forEach(function(e) {
                        return e(t)
                    })
                }, t.prototype._unloadComponent = function(t) {
                    this.detachView(t.hostView), an(this.components, t)
                }, t.prototype.ngOnDestroy = function() {
                    this._views.slice().forEach(function(t) {
                        return t.destroy()
                    })
                }, Object.defineProperty(t.prototype, "viewCount", {
                    get: function() {
                        return this._views.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), t._tickScope = De("ApplicationRef#tick()"), t
            }();

            function an(t, e) {
                var n = t.indexOf(e);
                n > -1 && t.splice(n, 1)
            }
            var sn = function() {},
                ln = function(t) {
                    return t[t.Important = 1] = "Important", t[t.DashCase = 2] = "DashCase", t
                }({}),
                un = function() {},
                cn = function(t) {
                    this.nativeElement = t
                },
                pn = function() {},
                fn = function() {
                    function t() {
                        this.dirty = !0, this._results = [], this.changes = new Le, this.length = 0
                    }
                    return t.prototype.map = function(t) {
                        return this._results.map(t)
                    }, t.prototype.filter = function(t) {
                        return this._results.filter(t)
                    }, t.prototype.find = function(t) {
                        return this._results.find(t)
                    }, t.prototype.reduce = function(t, e) {
                        return this._results.reduce(t, e)
                    }, t.prototype.forEach = function(t) {
                        this._results.forEach(t)
                    }, t.prototype.some = function(t) {
                        return this._results.some(t)
                    }, t.prototype.toArray = function() {
                        return this._results.slice()
                    }, t.prototype[kt()] = function() {
                        return this._results[kt()]()
                    }, t.prototype.toString = function() {
                        return this._results.toString()
                    }, t.prototype.reset = function(t) {
                        this._results = function t(e) {
                            return e.reduce(function(e, n) {
                                var r = Array.isArray(n) ? t(n) : n;
                                return e.concat(r)
                            }, [])
                        }(t), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0]
                    }, t.prototype.notifyOnChanges = function() {
                        this.changes.emit(this)
                    }, t.prototype.setDirty = function() {
                        this.dirty = !0
                    }, t.prototype.destroy = function() {
                        this.changes.complete(), this.changes.unsubscribe()
                    }, t
                }(),
                hn = function() {},
                dn = {
                    factoryPathPrefix: "",
                    factoryPathSuffix: ".ngfactory"
                },
                mn = function() {
                    function t(t, e) {
                        this._compiler = t, this._config = e || dn
                    }
                    return t.prototype.load = function(t) {
                        return this._compiler instanceof be ? this.loadFactory(t) : this.loadAndCompile(t)
                    }, t.prototype.loadAndCompile = function(t) {
                        var e = this,
                            r = s(t.split("#"), 2),
                            o = r[0],
                            i = r[1];
                        return void 0 === i && (i = "default"), n("crnd")(o).then(function(t) {
                            return t[i]
                        }).then(function(t) {
                            return gn(t, o, i)
                        }).then(function(t) {
                            return e._compiler.compileModuleAsync(t)
                        })
                    }, t.prototype.loadFactory = function(t) {
                        var e = s(t.split("#"), 2),
                            r = e[0],
                            o = e[1],
                            i = "NgFactory";
                        return void 0 === o && (o = "default", i = ""), n("crnd")(this._config.factoryPathPrefix + r + this._config.factoryPathSuffix).then(function(t) {
                            return t[o + i]
                        }).then(function(t) {
                            return gn(t, r, o)
                        })
                    }, t
                }();

            function gn(t, e, n) {
                if (!t) throw new Error("Cannot find '" + n + "' in '" + e + "'");
                return t
            }
            var yn = function() {},
                vn = function() {},
                _n = function() {},
                bn = function() {
                    function t(t, e, n) {
                        this._debugContext = n, this.nativeNode = t, e && e instanceof wn ? e.addChild(this) : this.parent = null, this.listeners = []
                    }
                    return Object.defineProperty(t.prototype, "injector", {
                        get: function() {
                            return this._debugContext.injector
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "componentInstance", {
                        get: function() {
                            return this._debugContext.component
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "context", {
                        get: function() {
                            return this._debugContext.context
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "references", {
                        get: function() {
                            return this._debugContext.references
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "providerTokens", {
                        get: function() {
                            return this._debugContext.providerTokens
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(),
                wn = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e, n, r) || this;
                        return o.properties = {}, o.attributes = {}, o.classes = {}, o.styles = {}, o.childNodes = [], o.nativeElement = e, o
                    }
                    return o(e, t), e.prototype.addChild = function(t) {
                        t && (this.childNodes.push(t), t.parent = this)
                    }, e.prototype.removeChild = function(t) {
                        var e = this.childNodes.indexOf(t); - 1 !== e && (t.parent = null, this.childNodes.splice(e, 1))
                    }, e.prototype.insertChildrenAfter = function(t, e) {
                        var n, r = this,
                            o = this.childNodes.indexOf(t); - 1 !== o && ((n = this.childNodes).splice.apply(n, l([o + 1, 0], e)), e.forEach(function(t) {
                            t.parent && t.parent.removeChild(t), t.parent = r
                        }))
                    }, e.prototype.insertBefore = function(t, e) {
                        var n = this.childNodes.indexOf(t); - 1 === n ? this.addChild(e) : (e.parent && e.parent.removeChild(e), e.parent = this, this.childNodes.splice(n, 0, e))
                    }, e.prototype.query = function(t) {
                        return this.queryAll(t)[0] || null
                    }, e.prototype.queryAll = function(t) {
                        var e = [];
                        return function t(e, n, r) {
                            e.childNodes.forEach(function(e) {
                                e instanceof wn && (n(e) && r.push(e), t(e, n, r))
                            })
                        }(this, t, e), e
                    }, e.prototype.queryAllNodes = function(t) {
                        var e = [];
                        return function t(e, n, r) {
                            e instanceof wn && e.childNodes.forEach(function(e) {
                                n(e) && r.push(e), e instanceof wn && t(e, n, r)
                            })
                        }(this, t, e), e
                    }, Object.defineProperty(e.prototype, "children", {
                        get: function() {
                            return this.childNodes.filter(function(t) {
                                return t instanceof e
                            })
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.triggerEventHandler = function(t, e) {
                        this.listeners.forEach(function(n) {
                            n.name == t && n.callback(e)
                        })
                    }, e
                }(bn),
                Cn = new Map;

            function kn(t) {
                return Cn.get(t) || null
            }

            function Sn(t) {
                Cn.set(t.nativeNode, t)
            }

            function xn(t, e) {
                var n = On(t),
                    r = On(e);
                return n && r ? function(t, e, n) {
                    for (var r = t[kt()](), o = e[kt()]();;) {
                        var i = r.next(),
                            a = o.next();
                        if (i.done && a.done) return !0;
                        if (i.done || a.done) return !1;
                        if (!n(i.value, a.value)) return !1
                    }
                }(t, e, xn) : !(n || !t || "object" != typeof t && "function" != typeof t || r || !e || "object" != typeof e && "function" != typeof e) || xt(t, e)
            }
            var En = function() {
                    function t(t) {
                        this.wrapped = t
                    }
                    return t.wrap = function(e) {
                        return new t(e)
                    }, t.unwrap = function(e) {
                        return t.isWrapped(e) ? e.wrapped : e
                    }, t.isWrapped = function(e) {
                        return e instanceof t
                    }, t
                }(),
                Pn = function() {
                    function t(t, e, n) {
                        this.previousValue = t, this.currentValue = e, this.firstChange = n
                    }
                    return t.prototype.isFirstChange = function() {
                        return this.firstChange
                    }, t
                }();

            function On(t) {
                return !!Mn(t) && (Array.isArray(t) || !(t instanceof Map) && kt() in t)
            }

            function Mn(t) {
                return null !== t && ("function" == typeof t || "object" == typeof t)
            }
            var Tn = function() {
                    function t() {}
                    return t.prototype.supports = function(t) {
                        return On(t)
                    }, t.prototype.create = function(t) {
                        return new In(t)
                    }, t
                }(),
                An = function(t, e) {
                    return e
                },
                In = function() {
                    function t(t) {
                        this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || An
                    }
                    return t.prototype.forEachItem = function(t) {
                        var e;
                        for (e = this._itHead; null !== e; e = e._next) t(e)
                    }, t.prototype.forEachOperation = function(t) {
                        for (var e = this._itHead, n = this._removalsHead, r = 0, o = null; e || n;) {
                            var i = !n || e && e.currentIndex < Rn(n, r, o) ? e : n,
                                a = Rn(i, r, o),
                                s = i.currentIndex;
                            if (i === n) r--, n = n._nextRemoved;
                            else if (e = e._next, null == i.previousIndex) r++;
                            else {
                                o || (o = []);
                                var l = a - r,
                                    u = s - r;
                                if (l != u) {
                                    for (var c = 0; c < l; c++) {
                                        var p = c < o.length ? o[c] : o[c] = 0,
                                            f = p + c;
                                        u <= f && f < l && (o[c] = p + 1)
                                    }
                                    o[i.previousIndex] = u - l
                                }
                            }
                            a !== s && t(i, a, s)
                        }
                    }, t.prototype.forEachPreviousItem = function(t) {
                        var e;
                        for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e)
                    }, t.prototype.forEachAddedItem = function(t) {
                        var e;
                        for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
                    }, t.prototype.forEachMovedItem = function(t) {
                        var e;
                        for (e = this._movesHead; null !== e; e = e._nextMoved) t(e)
                    }, t.prototype.forEachRemovedItem = function(t) {
                        var e;
                        for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
                    }, t.prototype.forEachIdentityChange = function(t) {
                        var e;
                        for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e)
                    }, t.prototype.diff = function(t) {
                        if (null == t && (t = []), !On(t)) throw new Error("Error trying to diff '" + Et(t) + "'. Only arrays and iterables are allowed");
                        return this.check(t) ? this : null
                    }, t.prototype.onDestroy = function() {}, t.prototype.check = function(t) {
                        var e = this;
                        this._reset();
                        var n, r, o, i = this._itHead,
                            a = !1;
                        if (Array.isArray(t)) {
                            this.length = t.length;
                            for (var s = 0; s < this.length; s++) o = this._trackByFn(s, r = t[s]), null !== i && xt(i.trackById, o) ? (a && (i = this._verifyReinsertion(i, r, o, s)), xt(i.item, r) || this._addIdentityChange(i, r)) : (i = this._mismatch(i, r, o, s), a = !0), i = i._next
                        } else n = 0,
                            function(t, e) {
                                if (Array.isArray(t))
                                    for (var n = 0; n < t.length; n++) e(t[n]);
                                else
                                    for (var r = t[kt()](), o = void 0; !(o = r.next()).done;) e(o.value)
                            }(t, function(t) {
                                o = e._trackByFn(n, t), null !== i && xt(i.trackById, o) ? (a && (i = e._verifyReinsertion(i, t, o, n)), xt(i.item, t) || e._addIdentityChange(i, t)) : (i = e._mismatch(i, t, o, n), a = !0), i = i._next, n++
                            }), this.length = n;
                        return this._truncate(i), this.collection = t, this.isDirty
                    }, Object.defineProperty(t.prototype, "isDirty", {
                        get: function() {
                            return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype._reset = function() {
                        if (this.isDirty) {
                            var t = void 0,
                                e = void 0;
                            for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
                            for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
                            for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e) t.previousIndex = t.currentIndex, e = t._nextMoved;
                            this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
                        }
                    }, t.prototype._mismatch = function(t, e, n, r) {
                        var o;
                        return null === t ? o = this._itTail : (o = t._prev, this._remove(t)), null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (xt(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, o, r)) : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (xt(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, o, r)) : t = this._addAfter(new jn(e, n), o, r), t
                    }, t.prototype._verifyReinsertion = function(t, e, n, r) {
                        var o = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
                        return null !== o ? t = this._reinsertAfter(o, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t
                    }, t.prototype._truncate = function(t) {
                        for (; null !== t;) {
                            var e = t._next;
                            this._addToRemovals(this._unlink(t)), t = e
                        }
                        null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
                    }, t.prototype._reinsertAfter = function(t, e, n) {
                        null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
                        var r = t._prevRemoved,
                            o = t._nextRemoved;
                        return null === r ? this._removalsHead = o : r._nextRemoved = o, null === o ? this._removalsTail = r : o._prevRemoved = r, this._insertAfter(t, e, n), this._addToMoves(t, n), t
                    }, t.prototype._moveAfter = function(t, e, n) {
                        return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t
                    }, t.prototype._addAfter = function(t, e, n) {
                        return this._insertAfter(t, e, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t
                    }, t.prototype._insertAfter = function(t, e, n) {
                        var r = null === e ? this._itHead : e._next;
                        return t._next = r, t._prev = e, null === r ? this._itTail = t : r._prev = t, null === e ? this._itHead = t : e._next = t, null === this._linkedRecords && (this._linkedRecords = new Dn), this._linkedRecords.put(t), t.currentIndex = n, t
                    }, t.prototype._remove = function(t) {
                        return this._addToRemovals(this._unlink(t))
                    }, t.prototype._unlink = function(t) {
                        null !== this._linkedRecords && this._linkedRecords.remove(t);
                        var e = t._prev,
                            n = t._next;
                        return null === e ? this._itHead = n : e._next = n, null === n ? this._itTail = e : n._prev = e, t
                    }, t.prototype._addToMoves = function(t, e) {
                        return t.previousIndex === e ? t : (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t, t)
                    }, t.prototype._addToRemovals = function(t) {
                        return null === this._unlinkedRecords && (this._unlinkedRecords = new Dn), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t
                    }, t.prototype._addIdentityChange = function(t, e) {
                        return t.item = e, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t
                    }, t
                }(),
                jn = function(t, e) {
                    this.item = t, this.trackById = e, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
                },
                Nn = function() {
                    function t() {
                        this._head = null, this._tail = null
                    }
                    return t.prototype.add = function(t) {
                        null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t)
                    }, t.prototype.get = function(t, e) {
                        var n;
                        for (n = this._head; null !== n; n = n._nextDup)
                            if ((null === e || e <= n.currentIndex) && xt(n.trackById, t)) return n;
                        return null
                    }, t.prototype.remove = function(t) {
                        var e = t._prevDup,
                            n = t._nextDup;
                        return null === e ? this._head = n : e._nextDup = n, null === n ? this._tail = e : n._prevDup = e, null === this._head
                    }, t
                }(),
                Dn = function() {
                    function t() {
                        this.map = new Map
                    }
                    return t.prototype.put = function(t) {
                        var e = t.trackById,
                            n = this.map.get(e);
                        n || (n = new Nn, this.map.set(e, n)), n.add(t)
                    }, t.prototype.get = function(t, e) {
                        var n = this.map.get(t);
                        return n ? n.get(t, e) : null
                    }, t.prototype.remove = function(t) {
                        var e = t.trackById;
                        return this.map.get(e).remove(t) && this.map.delete(e), t
                    }, Object.defineProperty(t.prototype, "isEmpty", {
                        get: function() {
                            return 0 === this.map.size
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.clear = function() {
                        this.map.clear()
                    }, t
                }();

            function Rn(t, e, n) {
                var r = t.previousIndex;
                if (null === r) return r;
                var o = 0;
                return n && r < n.length && (o = n[r]), r + e + o
            }
            var Ln = function() {
                    function t() {}
                    return t.prototype.supports = function(t) {
                        return t instanceof Map || Mn(t)
                    }, t.prototype.create = function() {
                        return new Fn
                    }, t
                }(),
                Fn = function() {
                    function t() {
                        this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
                    }
                    return Object.defineProperty(t.prototype, "isDirty", {
                        get: function() {
                            return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.forEachItem = function(t) {
                        var e;
                        for (e = this._mapHead; null !== e; e = e._next) t(e)
                    }, t.prototype.forEachPreviousItem = function(t) {
                        var e;
                        for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e)
                    }, t.prototype.forEachChangedItem = function(t) {
                        var e;
                        for (e = this._changesHead; null !== e; e = e._nextChanged) t(e)
                    }, t.prototype.forEachAddedItem = function(t) {
                        var e;
                        for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
                    }, t.prototype.forEachRemovedItem = function(t) {
                        var e;
                        for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
                    }, t.prototype.diff = function(t) {
                        if (t) {
                            if (!(t instanceof Map || Mn(t))) throw new Error("Error trying to diff '" + Et(t) + "'. Only maps and objects are allowed")
                        } else t = new Map;
                        return this.check(t) ? this : null
                    }, t.prototype.onDestroy = function() {}, t.prototype.check = function(t) {
                        var e = this;
                        this._reset();
                        var n = this._mapHead;
                        if (this._appendAfter = null, this._forEach(t, function(t, r) {
                                if (n && n.key === r) e._maybeAddToChanges(n, t), e._appendAfter = n, n = n._next;
                                else {
                                    var o = e._getOrCreateRecordForKey(r, t);
                                    n = e._insertBeforeOrAppend(n, o)
                                }
                            }), n) {
                            n._prev && (n._prev._next = null), this._removalsHead = n;
                            for (var r = n; null !== r; r = r._nextRemoved) r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null
                        }
                        return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
                    }, t.prototype._insertBeforeOrAppend = function(t, e) {
                        if (t) {
                            var n = t._prev;
                            return e._next = t, e._prev = n, t._prev = e, n && (n._next = e), t === this._mapHead && (this._mapHead = e), this._appendAfter = t, t
                        }
                        return this._appendAfter ? (this._appendAfter._next = e, e._prev = this._appendAfter) : this._mapHead = e, this._appendAfter = e, null
                    }, t.prototype._getOrCreateRecordForKey = function(t, e) {
                        if (this._records.has(t)) {
                            var n = this._records.get(t);
                            this._maybeAddToChanges(n, e);
                            var r = n._prev,
                                o = n._next;
                            return r && (r._next = o), o && (o._prev = r), n._next = null, n._prev = null, n
                        }
                        var i = new zn(t);
                        return this._records.set(t, i), i.currentValue = e, this._addToAdditions(i), i
                    }, t.prototype._reset = function() {
                        if (this.isDirty) {
                            var t = void 0;
                            for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next;
                            for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
                            for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
                            this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
                        }
                    }, t.prototype._maybeAddToChanges = function(t, e) {
                        xt(e, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = e, this._addToChanges(t))
                    }, t.prototype._addToAdditions = function(t) {
                        null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t)
                    }, t.prototype._addToChanges = function(t) {
                        null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t)
                    }, t.prototype._forEach = function(t, e) {
                        t instanceof Map ? t.forEach(e) : Object.keys(t).forEach(function(n) {
                            return e(t[n], n)
                        })
                    }, t
                }(),
                zn = function(t) {
                    this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
                },
                Un = function() {
                    function t(t) {
                        this.factories = t
                    }
                    return t.create = function(e, n) {
                        if (null != n) {
                            var r = n.factories.slice();
                            e = e.concat(r)
                        }
                        return new t(e)
                    }, t.extend = function(e) {
                        return {
                            provide: t,
                            useFactory: function(n) {
                                if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector");
                                return t.create(e, n)
                            },
                            deps: [
                                [t, new It, new Tt]
                            ]
                        }
                    }, t.prototype.find = function(t) {
                        var e, n = this.factories.find(function(e) {
                            return e.supports(t)
                        });
                        if (null != n) return n;
                        throw new Error("Cannot find a differ supporting object '" + t + "' of type '" + ((e = t).name || typeof e) + "'")
                    }, t.ngInjectableDef = ft({
                        providedIn: "root",
                        factory: function() {
                            return new t([new Tn])
                        }
                    }), t
                }(),
                Vn = function() {
                    function t(t) {
                        this.factories = t
                    }
                    return t.create = function(e, n) {
                        if (n) {
                            var r = n.factories.slice();
                            e = e.concat(r)
                        }
                        return new t(e)
                    }, t.extend = function(e) {
                        return {
                            provide: t,
                            useFactory: function(n) {
                                if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
                                return t.create(e, n)
                            },
                            deps: [
                                [t, new It, new Tt]
                            ]
                        }
                    }, t.prototype.find = function(t) {
                        var e = this.factories.find(function(e) {
                            return e.supports(t)
                        });
                        if (e) return e;
                        throw new Error("Cannot find a differ supporting object '" + t + "'")
                    }, t
                }(),
                Bn = [new Ln],
                Hn = new Un([new Tn]),
                qn = new Vn(Bn),
                Qn = tn(null, "core", [{
                    provide: ge,
                    useValue: "unknown"
                }, {
                    provide: nn,
                    deps: [Lt]
                }, {
                    provide: Ge,
                    deps: []
                }, {
                    provide: ve,
                    deps: []
                }]),
                Zn = new ht("LocaleId");

            function Gn() {
                return Hn
            }

            function Kn() {
                return qn
            }

            function Wn(t) {
                return t || "en-US"
            }
            var Xn = function(t) {},
                Yn = function() {
                    function t(t) {
                        if (this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"), this.inertBodyElement = this.inertDocument.body, null == this.inertBodyElement) {
                            var e = this.inertDocument.createElement("html");
                            this.inertDocument.appendChild(e), this.inertBodyElement = this.inertDocument.createElement("body"), e.appendChild(this.inertBodyElement)
                        }
                        this.inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>', !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector("svg") ? (this.inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', this.getInertBodyElement = this.inertBodyElement.querySelector && this.inertBodyElement.querySelector("svg img") && function() {
                            try {
                                return !!window.DOMParser
                            } catch (t) {
                                return !1
                            }
                        }() ? this.getInertBodyElement_DOMParser : this.getInertBodyElement_InertDocument) : this.getInertBodyElement = this.getInertBodyElement_XHR
                    }
                    return t.prototype.getInertBodyElement_XHR = function(t) {
                        t = "<body><remove></remove>" + t + "</body>";
                        try {
                            t = encodeURI(t)
                        } catch (t) {
                            return null
                        }
                        var e = new XMLHttpRequest;
                        e.responseType = "document", e.open("GET", "data:text/html;charset=utf-8," + t, !1), e.send(null);
                        var n = e.response.body;
                        return n.removeChild(n.firstChild), n
                    }, t.prototype.getInertBodyElement_DOMParser = function(t) {
                        t = "<body><remove></remove>" + t + "</body>";
                        try {
                            var e = (new window.DOMParser).parseFromString(t, "text/html").body;
                            return e.removeChild(e.firstChild), e
                        } catch (t) {
                            return null
                        }
                    }, t.prototype.getInertBodyElement_InertDocument = function(t) {
                        var e = this.inertDocument.createElement("template");
                        return "content" in e ? (e.innerHTML = t, e) : (this.inertBodyElement.innerHTML = t, this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement), this.inertBodyElement)
                    }, t.prototype.stripCustomNsAttrs = function(t) {
                        for (var e = t.attributes, n = e.length - 1; 0 < n; n--) {
                            var r = e.item(n).name;
                            "xmlns:ns1" !== r && 0 !== r.indexOf("ns1:") || t.removeAttribute(r)
                        }
                        for (var o = t.firstChild; o;) o.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(o), o = o.nextSibling
                    }, t
                }(),
                $n = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
                Jn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

            function tr(t) {
                return (t = String(t)).match($n) || t.match(Jn) ? t : ($e() && console.warn("WARNING: sanitizing unsafe URL value " + t + " (see http://g.co/ng/security#xss)"), "unsafe:" + t)
            }

            function er(t) {
                var e, n, r = {};
                try {
                    for (var o = a(t.split(",")), i = o.next(); !i.done; i = o.next()) r[i.value] = !0
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        i && !i.done && (n = o.return) && n.call(o)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return r
            }

            function nr() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n, r, o = {};
                try {
                    for (var i = a(t), s = i.next(); !s.done; s = i.next()) {
                        var l = s.value;
                        for (var u in l) l.hasOwnProperty(u) && (o[u] = !0)
                    }
                } catch (t) {
                    n = {
                        error: t
                    }
                } finally {
                    try {
                        s && !s.done && (r = i.return) && r.call(i)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return o
            }
            var rr, or = er("area,br,col,hr,img,wbr"),
                ir = er("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
                ar = er("rp,rt"),
                sr = nr(ar, ir),
                lr = nr(or, nr(ir, er("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), nr(ar, er("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), sr),
                ur = er("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
                cr = er("srcset"),
                pr = nr(ur, cr, er("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width")),
                fr = function() {
                    function t() {
                        this.sanitizedSomething = !1, this.buf = []
                    }
                    return t.prototype.sanitizeChildren = function(t) {
                        for (var e = t.firstChild; e;)
                            if (e.nodeType === Node.ELEMENT_NODE ? this.startElement(e) : e.nodeType === Node.TEXT_NODE ? this.chars(e.nodeValue) : this.sanitizedSomething = !0, e.firstChild) e = e.firstChild;
                            else
                                for (; e;) {
                                    e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                                    var n = this.checkClobberedElement(e, e.nextSibling);
                                    if (n) {
                                        e = n;
                                        break
                                    }
                                    e = this.checkClobberedElement(e, e.parentNode)
                                }
                        return this.buf.join("")
                    }, t.prototype.startElement = function(t) {
                        var e = t.nodeName.toLowerCase();
                        if (lr.hasOwnProperty(e)) {
                            this.buf.push("<"), this.buf.push(e);
                            for (var n, r = t.attributes, o = 0; o < r.length; o++) {
                                var i = r.item(o),
                                    a = i.name,
                                    s = a.toLowerCase();
                                if (pr.hasOwnProperty(s)) {
                                    var l = i.value;
                                    ur[s] && (l = tr(l)), cr[s] && (n = l, l = (n = String(n)).split(",").map(function(t) {
                                        return tr(t.trim())
                                    }).join(", ")), this.buf.push(" ", a, '="', mr(l), '"')
                                } else this.sanitizedSomething = !0
                            }
                            this.buf.push(">")
                        } else this.sanitizedSomething = !0
                    }, t.prototype.endElement = function(t) {
                        var e = t.nodeName.toLowerCase();
                        lr.hasOwnProperty(e) && !or.hasOwnProperty(e) && (this.buf.push("</"), this.buf.push(e), this.buf.push(">"))
                    }, t.prototype.chars = function(t) {
                        this.buf.push(mr(t))
                    }, t.prototype.checkClobberedElement = function(t, e) {
                        if (e && (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error("Failed to sanitize html because the element is clobbered: " + t.outerHTML);
                        return e
                    }, t
                }(),
                hr = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                dr = /([^\#-~ |!])/g;

            function mr(t) {
                return t.replace(/&/g, "&amp;").replace(hr, function(t) {
                    return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";"
                }).replace(dr, function(t) {
                    return "&#" + t.charCodeAt(0) + ";"
                }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            function gr(t) {
                return "content" in t && function(t) {
                    return t.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === t.nodeName
                }(t) ? t.content : null
            }
            var yr = new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$", "g"),
                vr = /^url\(([^)]+)\)$/,
                _r = function(t) {
                    return t[t.NONE = 0] = "NONE", t[t.HTML = 1] = "HTML", t[t.STYLE = 2] = "STYLE", t[t.SCRIPT = 3] = "SCRIPT", t[t.URL = 4] = "URL", t[t.RESOURCE_URL = 5] = "RESOURCE_URL", t
                }({}),
                br = function() {};

            function wr(t, e, n) {
                var r = t.state,
                    o = 1792 & r;
                return o === e ? (t.state = -1793 & r | n, t.initIndex = -1, !0) : o === n
            }

            function Cr(t, e, n) {
                return (1792 & t.state) === e && t.initIndex <= n && (t.initIndex = n + 1, !0)
            }

            function kr(t, e) {
                return t.nodes[e]
            }

            function Sr(t, e) {
                return t.nodes[e]
            }

            function xr(t, e) {
                return t.nodes[e]
            }

            function Er(t, e) {
                return t.nodes[e]
            }

            function Pr(t, e) {
                return t.nodes[e]
            }
            var Or = {
                setCurrentNode: void 0,
                createRootView: void 0,
                createEmbeddedView: void 0,
                createComponentView: void 0,
                createNgModuleRef: void 0,
                overrideProvider: void 0,
                overrideComponentView: void 0,
                clearOverrides: void 0,
                checkAndUpdateView: void 0,
                checkNoChangesView: void 0,
                destroyView: void 0,
                resolveDep: void 0,
                createDebugContext: void 0,
                handleEvent: void 0,
                updateDirectives: void 0,
                updateRenderer: void 0,
                dirtyParentQueries: void 0
            };

            function Mr(t, e, n, r) {
                var o = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" + e + "'. Current value: '" + n + "'.";
                return r && (o += " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"),
                    function(t, e) {
                        var n = new Error(t);
                        return Tr(n, e), n
                    }(o, t)
            }

            function Tr(t, e) {
                t[ee] = e, t[re] = e.logError.bind(e)
            }

            function Ar(t) {
                return new Error("ViewDestroyedError: Attempt to use a destroyed view: " + t)
            }
            var Ir = function() {},
                jr = new Map;

            function Nr(t) {
                var e = jr.get(t);
                return e || (e = Et(t) + "_" + jr.size, jr.set(t, e)), e
            }

            function Dr(t, e, n, r) {
                if (En.isWrapped(r)) {
                    r = En.unwrap(r);
                    var o = t.def.nodes[e].bindingIndex + n,
                        i = En.unwrap(t.oldValues[o]);
                    t.oldValues[o] = new En(i)
                }
                return r
            }
            var Rr = "$$undefined",
                Lr = "$$empty";

            function Fr(t) {
                return {
                    id: Rr,
                    styles: t.styles,
                    encapsulation: t.encapsulation,
                    data: t.data
                }
            }
            var zr = 0;

            function Ur(t, e, n, r) {
                return !(!(2 & t.state) && xt(t.oldValues[e.bindingIndex + n], r))
            }

            function Vr(t, e, n, r) {
                return !!Ur(t, e, n, r) && (t.oldValues[e.bindingIndex + n] = r, !0)
            }

            function Br(t, e, n, r) {
                var o = t.oldValues[e.bindingIndex + n];
                if (1 & t.state || !xn(o, r)) {
                    var i = e.bindings[n].name;
                    throw Mr(Or.createDebugContext(t, e.nodeIndex), i + ": " + o, i + ": " + r, 0 != (1 & t.state))
                }
            }

            function Hr(t) {
                for (var e = t; e;) 2 & e.def.flags && (e.state |= 8), e = e.viewContainerParent || e.parent
            }

            function qr(t, e) {
                for (var n = t; n && n !== e;) n.state |= 64, n = n.viewContainerParent || n.parent
            }

            function Qr(t, e, n, r) {
                try {
                    return Hr(33554432 & t.def.nodes[e].flags ? Sr(t, e).componentView : t), Or.handleEvent(t, e, n, r)
                } catch (e) {
                    t.root.errorHandler.handleError(e)
                }
            }

            function Zr(t) {
                return t.parent ? Sr(t.parent, t.parentNodeDef.nodeIndex) : null
            }

            function Gr(t) {
                return t.parent ? t.parentNodeDef.parent : null
            }

            function Kr(t, e) {
                switch (201347067 & e.flags) {
                    case 1:
                        return Sr(t, e.nodeIndex).renderElement;
                    case 2:
                        return kr(t, e.nodeIndex).renderText
                }
            }

            function Wr(t) {
                return !!t.parent && !!(32768 & t.parentNodeDef.flags)
            }

            function Xr(t) {
                return !(!t.parent || 32768 & t.parentNodeDef.flags)
            }

            function Yr(t) {
                return 1 << t % 32
            }

            function $r(t) {
                var e = {},
                    n = 0,
                    r = {};
                return t && t.forEach(function(t) {
                    var o = s(t, 2),
                        i = o[0],
                        a = o[1];
                    "number" == typeof i ? (e[i] = a, n |= Yr(i)) : r[i] = a
                }), {
                    matchedQueries: e,
                    references: r,
                    matchedQueryIds: n
                }
            }

            function Jr(t, e) {
                return t.map(function(t) {
                    var n, r, o;
                    return Array.isArray(t) ? (r = (o = s(t, 2))[0], n = o[1]) : (r = 0, n = t), n && ("function" == typeof n || "object" == typeof n) && e && Object.defineProperty(n, jt, {
                        value: e,
                        configurable: !0
                    }), {
                        flags: r,
                        token: n,
                        tokenKey: Nr(n)
                    }
                })
            }

            function to(t, e, n) {
                var r = n.renderParent;
                return r ? 0 == (1 & r.flags) || 0 == (33554432 & r.flags) || r.element.componentRendererType && r.element.componentRendererType.encapsulation === Jt.Native ? Sr(t, n.renderParent.nodeIndex).renderElement : void 0 : e
            }
            var eo = new WeakMap;

            function no(t) {
                var e = eo.get(t);
                return e || ((e = t(function() {
                    return Ir
                })).factory = t, eo.set(t, e)), e
            }

            function ro(t, e, n, r, o) {
                3 === e && (n = t.renderer.parentNode(Kr(t, t.def.lastRenderRootNode))), oo(t, e, 0, t.def.nodes.length - 1, n, r, o)
            }

            function oo(t, e, n, r, o, i, a) {
                for (var s = n; s <= r; s++) {
                    var l = t.def.nodes[s];
                    11 & l.flags && ao(t, l, e, o, i, a), s += l.childCount
                }
            }

            function io(t, e, n, r, o, i) {
                for (var a = t; a && !Wr(a);) a = a.parent;
                for (var s = a.parent, l = Gr(a), u = l.nodeIndex + l.childCount, c = l.nodeIndex + 1; c <= u; c++) {
                    var p = s.def.nodes[c];
                    p.ngContentIndex === e && ao(s, p, n, r, o, i), c += p.childCount
                }
                if (!s.parent) {
                    var f = t.root.projectableNodes[e];
                    if (f)
                        for (c = 0; c < f.length; c++) so(t, f[c], n, r, o, i)
                }
            }

            function ao(t, e, n, r, o, i) {
                if (8 & e.flags) io(t, e.ngContent.index, n, r, o, i);
                else {
                    var a = Kr(t, e);
                    if (3 === n && 33554432 & e.flags && 48 & e.bindingFlags ? (16 & e.bindingFlags && so(t, a, n, r, o, i), 32 & e.bindingFlags && so(Sr(t, e.nodeIndex).componentView, a, n, r, o, i)) : so(t, a, n, r, o, i), 16777216 & e.flags)
                        for (var s = Sr(t, e.nodeIndex).viewContainer._embeddedViews, l = 0; l < s.length; l++) ro(s[l], n, r, o, i);
                    1 & e.flags && !e.element.name && oo(t, n, e.nodeIndex + 1, e.nodeIndex + e.childCount, r, o, i)
                }
            }

            function so(t, e, n, r, o, i) {
                var a = t.renderer;
                switch (n) {
                    case 1:
                        a.appendChild(r, e);
                        break;
                    case 2:
                        a.insertBefore(r, e, o);
                        break;
                    case 3:
                        a.removeChild(r, e);
                        break;
                    case 0:
                        i.push(e)
                }
            }
            var lo = /^:([^:]+):(.+)$/;

            function uo(t) {
                if (":" === t[0]) {
                    var e = t.match(lo);
                    return [e[1], e[2]]
                }
                return ["", t]
            }

            function co(t) {
                for (var e = 0, n = 0; n < t.length; n++) e |= t[n].flags;
                return e
            }

            function po(t, e, n, r, o, i) {
                t |= 1;
                var a = $r(e);
                return {
                    nodeIndex: -1,
                    parent: null,
                    renderParent: null,
                    bindingIndex: -1,
                    outputIndex: -1,
                    flags: t,
                    checkIndex: -1,
                    childFlags: 0,
                    directChildFlags: 0,
                    childMatchedQueries: 0,
                    matchedQueries: a.matchedQueries,
                    matchedQueryIds: a.matchedQueryIds,
                    references: a.references,
                    ngContentIndex: n,
                    childCount: r,
                    bindings: [],
                    bindingFlags: 0,
                    outputs: [],
                    element: {
                        ns: null,
                        name: null,
                        attrs: null,
                        template: i ? no(i) : null,
                        componentProvider: null,
                        componentView: null,
                        componentRendererType: null,
                        publicProviders: null,
                        allProviders: null,
                        handleEvent: o || Ir
                    },
                    provider: null,
                    text: null,
                    query: null,
                    ngContent: null
                }
            }

            function fo(t, e, n, r, o, i, a, l, u, c, p, f) {
                void 0 === a && (a = []), c || (c = Ir);
                var h = $r(n),
                    d = h.matchedQueries,
                    m = h.references,
                    g = h.matchedQueryIds,
                    y = null,
                    v = null;
                i && (y = (A = s(uo(i), 2))[0], v = A[1]), l = l || [];
                for (var _ = new Array(l.length), b = 0; b < l.length; b++) {
                    var w = s(l[b], 3),
                        C = w[0],
                        k = w[2],
                        S = s(uo(w[1]), 2),
                        x = S[0],
                        E = S[1],
                        P = void 0,
                        O = void 0;
                    switch (15 & C) {
                        case 4:
                            O = k;
                            break;
                        case 1:
                        case 8:
                            P = k
                    }
                    _[b] = {
                        flags: C,
                        ns: x,
                        name: E,
                        nonMinifiedName: E,
                        securityContext: P,
                        suffix: O
                    }
                }
                u = u || [];
                var M = new Array(u.length);
                for (b = 0; b < u.length; b++) {
                    var T = s(u[b], 2);
                    M[b] = {
                        type: 0,
                        target: T[0],
                        eventName: T[1],
                        propName: null
                    }
                }
                var A, I = (a = a || []).map(function(t) {
                    var e = s(t, 2),
                        n = e[1],
                        r = s(uo(e[0]), 2);
                    return [r[0], r[1], n]
                });
                return f = function(t) {
                    if (t && t.id === Rr) {
                        var e = null != t.encapsulation && t.encapsulation !== Jt.None || t.styles.length || Object.keys(t.data).length;
                        t.id = e ? "c" + zr++ : Lr
                    }
                    return t && t.id === Lr && (t = null), t || null
                }(f), p && (e |= 33554432), {
                    nodeIndex: -1,
                    parent: null,
                    renderParent: null,
                    bindingIndex: -1,
                    outputIndex: -1,
                    checkIndex: t,
                    flags: e |= 1,
                    childFlags: 0,
                    directChildFlags: 0,
                    childMatchedQueries: 0,
                    matchedQueries: d,
                    matchedQueryIds: g,
                    references: m,
                    ngContentIndex: r,
                    childCount: o,
                    bindings: _,
                    bindingFlags: co(_),
                    outputs: M,
                    element: {
                        ns: y,
                        name: v,
                        attrs: I,
                        template: null,
                        componentProvider: null,
                        componentView: p || null,
                        componentRendererType: f,
                        publicProviders: null,
                        allProviders: null,
                        handleEvent: c || Ir
                    },
                    provider: null,
                    text: null,
                    query: null,
                    ngContent: null
                }
            }

            function ho(t, e, n) {
                var r, o = n.element,
                    i = t.root.selectorOrNode,
                    a = t.renderer;
                if (t.parent || !i) {
                    r = o.name ? a.createElement(o.name, o.ns) : a.createComment("");
                    var l = to(t, e, n);
                    l && a.appendChild(l, r)
                } else r = a.selectRootElement(i);
                if (o.attrs)
                    for (var u = 0; u < o.attrs.length; u++) {
                        var c = s(o.attrs[u], 3);
                        a.setAttribute(r, c[1], c[2], c[0])
                    }
                return r
            }

            function mo(t, e, n, r) {
                for (var o = 0; o < n.outputs.length; o++) {
                    var i = n.outputs[o],
                        a = go(t, n.nodeIndex, (p = i.eventName, (c = i.target) ? c + ":" + p : p)),
                        s = i.target,
                        l = t;
                    "component" === i.target && (s = null, l = e);
                    var u = l.renderer.listen(s || r, i.eventName, a);
                    t.disposables[n.outputIndex + o] = u
                }
                var c, p
            }

            function go(t, e, n) {
                return function(r) {
                    return Qr(t, e, n, r)
                }
            }

            function yo(t, e, n, r) {
                if (!Vr(t, e, n, r)) return !1;
                var o = e.bindings[n],
                    i = Sr(t, e.nodeIndex),
                    a = i.renderElement,
                    s = o.name;
                switch (15 & o.flags) {
                    case 1:
                        ! function(t, e, n, r, o, i) {
                            var a = e.securityContext,
                                s = a ? t.root.sanitizer.sanitize(a, i) : i;
                            s = null != s ? s.toString() : null;
                            var l = t.renderer;
                            null != i ? l.setAttribute(n, o, s, r) : l.removeAttribute(n, o, r)
                        }(t, o, a, o.ns, s, r);
                        break;
                    case 2:
                        ! function(t, e, n, r) {
                            var o = t.renderer;
                            r ? o.addClass(e, n) : o.removeClass(e, n)
                        }(t, a, s, r);
                        break;
                    case 4:
                        ! function(t, e, n, r, o) {
                            var i = t.root.sanitizer.sanitize(_r.STYLE, o);
                            if (null != i) {
                                i = i.toString();
                                var a = e.suffix;
                                null != a && (i += a)
                            } else i = null;
                            var s = t.renderer;
                            null != i ? s.setStyle(n, r, i) : s.removeStyle(n, r)
                        }(t, o, a, s, r);
                        break;
                    case 8:
                        ! function(t, e, n, r, o) {
                            var i = e.securityContext,
                                a = i ? t.root.sanitizer.sanitize(i, o) : o;
                            t.renderer.setProperty(n, r, a)
                        }(33554432 & e.flags && 32 & o.flags ? i.componentView : t, o, a, s, r)
                }
                return !0
            }
            var vo = new Object,
                _o = Nr(Lt),
                bo = Nr(Dt),
                wo = Nr(Ae);

            function Co(t, e, n, r) {
                return n = Ot(n), {
                    index: -1,
                    deps: Jr(r, Et(e)),
                    flags: t,
                    token: e,
                    value: n
                }
            }

            function ko(t, e, n) {
                void 0 === n && (n = Lt.THROW_IF_NOT_FOUND);
                var r, o, i = $t(t);
                try {
                    if (8 & e.flags) return e.token;
                    if (2 & e.flags && (n = null), 1 & e.flags) return t._parent.get(e.token, n);
                    var a = e.tokenKey;
                    switch (a) {
                        case _o:
                        case bo:
                        case wo:
                            return t
                    }
                    var s = t._def.providersByKey[a];
                    if (s) {
                        var l = t._providers[s.index];
                        return void 0 === l && (l = t._providers[s.index] = So(t, s)), l === vo ? void 0 : l
                    }
                    if (e.token.ngInjectableDef && (r = t, null != (o = e.token.ngInjectableDef).providedIn && (function(t, e) {
                            return t._def.modules.indexOf(o.providedIn) > -1
                        }(r) || "root" === o.providedIn && r._def.isRoot))) {
                        var u = t._providers.length;
                        return t._def.providersByKey[e.tokenKey] = {
                            flags: 5120,
                            value: e.token.ngInjectableDef.factory,
                            deps: [],
                            index: u,
                            token: e.token
                        }, t._providers[u] = vo, t._providers[u] = So(t, t._def.providersByKey[e.tokenKey])
                    }
                    return t._parent.get(e.token, n)
                } finally {
                    $t(i)
                }
            }

            function So(t, e) {
                var n;
                switch (201347067 & e.flags) {
                    case 512:
                        n = function(t, e, n) {
                            var r = n.length;
                            switch (r) {
                                case 0:
                                    return new e;
                                case 1:
                                    return new e(ko(t, n[0]));
                                case 2:
                                    return new e(ko(t, n[0]), ko(t, n[1]));
                                case 3:
                                    return new e(ko(t, n[0]), ko(t, n[1]), ko(t, n[2]));
                                default:
                                    for (var o = new Array(r), i = 0; i < r; i++) o[i] = ko(t, n[i]);
                                    return new(e.bind.apply(e, l([void 0], o)))
                            }
                        }(t, e.value, e.deps);
                        break;
                    case 1024:
                        n = function(t, e, n) {
                            var r = n.length;
                            switch (r) {
                                case 0:
                                    return e();
                                case 1:
                                    return e(ko(t, n[0]));
                                case 2:
                                    return e(ko(t, n[0]), ko(t, n[1]));
                                case 3:
                                    return e(ko(t, n[0]), ko(t, n[1]), ko(t, n[2]));
                                default:
                                    for (var o = Array(r), i = 0; i < r; i++) o[i] = ko(t, n[i]);
                                    return e.apply(void 0, l(o))
                            }
                        }(t, e.value, e.deps);
                        break;
                    case 2048:
                        n = ko(t, e.deps[0]);
                        break;
                    case 256:
                        n = e.value
                }
                return n === vo || null == n || "object" != typeof n || 131072 & e.flags || "function" != typeof n.ngOnDestroy || (e.flags |= 131072), void 0 === n ? vo : n
            }

            function xo(t, e) {
                var n = t.viewContainer._embeddedViews;
                if ((null == e || e >= n.length) && (e = n.length - 1), e < 0) return null;
                var r = n[e];
                return r.viewContainerParent = null, Mo(n, e), Or.dirtyParentQueries(r), Po(r), r
            }

            function Eo(t, e, n) {
                var r = e ? Kr(e, e.def.lastRenderRootNode) : t.renderElement;
                ro(n, 2, n.renderer.parentNode(r), n.renderer.nextSibling(r), void 0)
            }

            function Po(t) {
                ro(t, 3, null, null, void 0)
            }

            function Oo(t, e, n) {
                e >= t.length ? t.push(n) : t.splice(e, 0, n)
            }

            function Mo(t, e) {
                e >= t.length - 1 ? t.pop() : t.splice(e, 1)
            }
            var To = new Object;

            function Ao(t, e, n, r, o, i) {
                return new Io(t, e, n, r, o, i)
            }
            var Io = function(t) {
                    function e(e, n, r, o, i, a) {
                        var s = t.call(this) || this;
                        return s.selector = e, s.componentType = n, s._inputs = o, s._outputs = i, s.ngContentSelectors = a, s.viewDefFactory = r, s
                    }
                    return o(e, t), Object.defineProperty(e.prototype, "inputs", {
                        get: function() {
                            var t = [],
                                e = this._inputs;
                            for (var n in e) t.push({
                                propName: n,
                                templateName: e[n]
                            });
                            return t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "outputs", {
                        get: function() {
                            var t = [];
                            for (var e in this._outputs) t.push({
                                propName: e,
                                templateName: this._outputs[e]
                            });
                            return t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.create = function(t, e, n, r) {
                        if (!r) throw new Error("ngModule should be provided");
                        var o = no(this.viewDefFactory),
                            i = o.nodes[0].element.componentProvider.nodeIndex,
                            a = Or.createRootView(t, e || [], n, o, r, To),
                            s = xr(a, i).instance;
                        return n && a.renderer.setAttribute(Sr(a, 0).renderElement, "ng-version", te.full), new jo(a, new Lo(a), s)
                    }, e
                }(Ce),
                jo = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this) || this;
                        return o._view = e, o._viewRef = n, o._component = r, o._elDef = o._view.def.nodes[0], o.hostView = n, o.changeDetectorRef = n, o.instance = r, o
                    }
                    return o(e, t), Object.defineProperty(e.prototype, "location", {
                        get: function() {
                            return new cn(Sr(this._view, this._elDef.nodeIndex).renderElement)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "injector", {
                        get: function() {
                            return new Vo(this._view, this._elDef)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "componentType", {
                        get: function() {
                            return this._component.constructor
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.destroy = function() {
                        this._viewRef.destroy()
                    }, e.prototype.onDestroy = function(t) {
                        this._viewRef.onDestroy(t)
                    }, e
                }(function() {});

            function No(t, e, n) {
                return new Do(t, e, n)
            }
            var Do = function() {
                function t(t, e, n) {
                    this._view = t, this._elDef = e, this._data = n, this._embeddedViews = []
                }
                return Object.defineProperty(t.prototype, "element", {
                    get: function() {
                        return new cn(this._data.renderElement)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "injector", {
                    get: function() {
                        return new Vo(this._view, this._elDef)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "parentInjector", {
                    get: function() {
                        for (var t = this._view, e = this._elDef.parent; !e && t;) e = Gr(t), t = t.parent;
                        return t ? new Vo(t, e) : new Vo(this._view, null)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.clear = function() {
                    for (var t = this._embeddedViews.length - 1; t >= 0; t--) {
                        var e = xo(this._data, t);
                        Or.destroyView(e)
                    }
                }, t.prototype.get = function(t) {
                    var e = this._embeddedViews[t];
                    if (e) {
                        var n = new Lo(e);
                        return n.attachToViewContainerRef(this), n
                    }
                    return null
                }, Object.defineProperty(t.prototype, "length", {
                    get: function() {
                        return this._embeddedViews.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.createEmbeddedView = function(t, e, n) {
                    var r = t.createEmbeddedView(e || {});
                    return this.insert(r, n), r
                }, t.prototype.createComponent = function(t, e, n, r, o) {
                    var i = n || this.parentInjector;
                    o || t instanceof Te || (o = i.get(Ae));
                    var a = t.create(i, r, void 0, o);
                    return this.insert(a.hostView, e), a
                }, t.prototype.insert = function(t, e) {
                    if (t.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
                    var n, r, o, i, a = t;
                    return o = a._view, i = (n = this._data).viewContainer._embeddedViews, null !== (r = e) && void 0 !== r || (r = i.length), o.viewContainerParent = this._view, Oo(i, r, o),
                        function(t, e) {
                            var n = Zr(e);
                            if (n && n !== t && !(16 & e.state)) {
                                e.state |= 16;
                                var r = n.template._projectedViews;
                                r || (r = n.template._projectedViews = []), r.push(e),
                                    function(t, n) {
                                        if (!(4 & n.flags)) {
                                            e.parent.def.nodeFlags |= 4, n.flags |= 4;
                                            for (var r = n.parent; r;) r.childFlags |= 4, r = r.parent
                                        }
                                    }(0, e.parentNodeDef)
                            }
                        }(n, o), Or.dirtyParentQueries(o), Eo(n, r > 0 ? i[r - 1] : null, o), a.attachToViewContainerRef(this), t
                }, t.prototype.move = function(t, e) {
                    if (t.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
                    var n, r, o, i, a, s = this._embeddedViews.indexOf(t._view);
                    return o = e, a = (i = (n = this._data).viewContainer._embeddedViews)[r = s], Mo(i, r), null == o && (o = i.length), Oo(i, o, a), Or.dirtyParentQueries(a), Po(a), Eo(n, o > 0 ? i[o - 1] : null, a), t
                }, t.prototype.indexOf = function(t) {
                    return this._embeddedViews.indexOf(t._view)
                }, t.prototype.remove = function(t) {
                    var e = xo(this._data, t);
                    e && Or.destroyView(e)
                }, t.prototype.detach = function(t) {
                    var e = xo(this._data, t);
                    return e ? new Lo(e) : null
                }, t
            }();

            function Ro(t) {
                return new Lo(t)
            }
            var Lo = function() {
                function t(t) {
                    this._view = t, this._viewContainerRef = null, this._appRef = null
                }
                return Object.defineProperty(t.prototype, "rootNodes", {
                    get: function() {
                        return ro(this._view, 0, void 0, void 0, t = []), t;
                        var t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "context", {
                    get: function() {
                        return this._view.context
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "destroyed", {
                    get: function() {
                        return 0 != (128 & this._view.state)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.markForCheck = function() {
                    Hr(this._view)
                }, t.prototype.detach = function() {
                    this._view.state &= -5
                }, t.prototype.detectChanges = function() {
                    var t = this._view.root.rendererFactory;
                    t.begin && t.begin();
                    try {
                        Or.checkAndUpdateView(this._view)
                    } finally {
                        t.end && t.end()
                    }
                }, t.prototype.checkNoChanges = function() {
                    Or.checkNoChangesView(this._view)
                }, t.prototype.reattach = function() {
                    this._view.state |= 4
                }, t.prototype.onDestroy = function(t) {
                    this._view.disposables || (this._view.disposables = []), this._view.disposables.push(t)
                }, t.prototype.destroy = function() {
                    this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), Or.destroyView(this._view)
                }, t.prototype.detachFromAppRef = function() {
                    this._appRef = null, Po(this._view), Or.dirtyParentQueries(this._view)
                }, t.prototype.attachToAppRef = function(t) {
                    if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
                    this._appRef = t
                }, t.prototype.attachToViewContainerRef = function(t) {
                    if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                    this._viewContainerRef = t
                }, t
            }();

            function Fo(t, e) {
                return new zo(t, e)
            }
            var zo = function(t) {
                function e(e, n) {
                    var r = t.call(this) || this;
                    return r._parentView = e, r._def = n, r
                }
                return o(e, t), e.prototype.createEmbeddedView = function(t) {
                    return new Lo(Or.createEmbeddedView(this._parentView, this._def, this._def.element.template, t))
                }, Object.defineProperty(e.prototype, "elementRef", {
                    get: function() {
                        return new cn(Sr(this._parentView, this._def.nodeIndex).renderElement)
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }(yn);

            function Uo(t, e) {
                return new Vo(t, e)
            }
            var Vo = function() {
                function t(t, e) {
                    this.view = t, this.elDef = e
                }
                return t.prototype.get = function(t, e) {
                    return void 0 === e && (e = Lt.THROW_IF_NOT_FOUND), Or.resolveDep(this.view, this.elDef, !!this.elDef && 0 != (33554432 & this.elDef.flags), {
                        flags: 0,
                        token: t,
                        tokenKey: Nr(t)
                    }, e)
                }, t
            }();

            function Bo(t, e) {
                var n = t.def.nodes[e];
                if (1 & n.flags) {
                    var r = Sr(t, n.nodeIndex);
                    return n.element.template ? r.template : r.renderElement
                }
                if (2 & n.flags) return kr(t, n.nodeIndex).renderText;
                if (20240 & n.flags) return xr(t, n.nodeIndex).instance;
                throw new Error("Illegal state: read nodeValue for node index " + e)
            }

            function Ho(t) {
                return new qo(t.renderer)
            }
            var qo = function() {
                function t(t) {
                    this.delegate = t
                }
                return t.prototype.selectRootElement = function(t) {
                    return this.delegate.selectRootElement(t)
                }, t.prototype.createElement = function(t, e) {
                    var n = s(uo(e), 2),
                        r = this.delegate.createElement(n[1], n[0]);
                    return t && this.delegate.appendChild(t, r), r
                }, t.prototype.createViewRoot = function(t) {
                    return t
                }, t.prototype.createTemplateAnchor = function(t) {
                    var e = this.delegate.createComment("");
                    return t && this.delegate.appendChild(t, e), e
                }, t.prototype.createText = function(t, e) {
                    var n = this.delegate.createText(e);
                    return t && this.delegate.appendChild(t, n), n
                }, t.prototype.projectNodes = function(t, e) {
                    for (var n = 0; n < e.length; n++) this.delegate.appendChild(t, e[n])
                }, t.prototype.attachViewAfter = function(t, e) {
                    for (var n = this.delegate.parentNode(t), r = this.delegate.nextSibling(t), o = 0; o < e.length; o++) this.delegate.insertBefore(n, e[o], r)
                }, t.prototype.detachView = function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e],
                            r = this.delegate.parentNode(n);
                        this.delegate.removeChild(r, n)
                    }
                }, t.prototype.destroyView = function(t, e) {
                    for (var n = 0; n < e.length; n++) this.delegate.destroyNode(e[n])
                }, t.prototype.listen = function(t, e, n) {
                    return this.delegate.listen(t, e, n)
                }, t.prototype.listenGlobal = function(t, e, n) {
                    return this.delegate.listen(t, e, n)
                }, t.prototype.setElementProperty = function(t, e, n) {
                    this.delegate.setProperty(t, e, n)
                }, t.prototype.setElementAttribute = function(t, e, n) {
                    var r = s(uo(e), 2),
                        o = r[0],
                        i = r[1];
                    null != n ? this.delegate.setAttribute(t, i, n, o) : this.delegate.removeAttribute(t, i, o)
                }, t.prototype.setBindingDebugInfo = function(t, e, n) {}, t.prototype.setElementClass = function(t, e, n) {
                    n ? this.delegate.addClass(t, e) : this.delegate.removeClass(t, e)
                }, t.prototype.setElementStyle = function(t, e, n) {
                    null != n ? this.delegate.setStyle(t, e, n) : this.delegate.removeStyle(t, e)
                }, t.prototype.invokeElementMethod = function(t, e, n) {
                    t[e].apply(t, n)
                }, t.prototype.setText = function(t, e) {
                    this.delegate.setValue(t, e)
                }, t.prototype.animate = function() {
                    throw new Error("Renderer.animate is no longer supported!")
                }, t
            }();

            function Qo(t, e, n, r) {
                return new Zo(t, e, n, r)
            }
            var Zo = function() {
                    function t(t, e, n, r) {
                        this._moduleType = t, this._parent = e, this._bootstrapComponents = n, this._def = r, this._destroyListeners = [], this._destroyed = !1, this.injector = this,
                            function(t) {
                                for (var e = t._def, n = t._providers = new Array(e.providers.length), r = 0; r < e.providers.length; r++) {
                                    var o = e.providers[r];
                                    4096 & o.flags || void 0 === n[r] && (n[r] = So(t, o))
                                }
                            }(this)
                    }
                    return t.prototype.get = function(t, e, n) {
                        void 0 === e && (e = Lt.THROW_IF_NOT_FOUND), void 0 === n && (n = 0);
                        var r = 0;
                        return 4 & n ? r |= 1 : 2 & n && (r |= 4), ko(this, {
                            token: t,
                            tokenKey: Nr(t),
                            flags: r
                        }, e)
                    }, Object.defineProperty(t.prototype, "instance", {
                        get: function() {
                            return this.get(this._moduleType)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "componentFactoryResolver", {
                        get: function() {
                            return this.get(Oe)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.destroy = function() {
                        if (this._destroyed) throw new Error("The ng module " + Et(this.instance.constructor) + " has already been destroyed.");
                        this._destroyed = !0,
                            function(t, e) {
                                for (var n = t._def, r = new Set, o = 0; o < n.providers.length; o++)
                                    if (131072 & n.providers[o].flags) {
                                        var i = t._providers[o];
                                        if (i && i !== vo) {
                                            var a = i.ngOnDestroy;
                                            "function" != typeof a || r.has(i) || (a.apply(i), r.add(i))
                                        }
                                    }
                            }(this), this._destroyListeners.forEach(function(t) {
                                return t()
                            })
                    }, t.prototype.onDestroy = function(t) {
                        this._destroyListeners.push(t)
                    }, t
                }(),
                Go = Nr(function() {}),
                Ko = Nr(un),
                Wo = Nr(cn),
                Xo = Nr(vn),
                Yo = Nr(yn),
                $o = Nr(_n),
                Jo = Nr(Lt),
                ti = Nr(Dt);

            function ei(t, e, n, r, o, i, a, l) {
                var u = [];
                if (a)
                    for (var c in a) {
                        var p = s(a[c], 2);
                        u[p[0]] = {
                            flags: 8,
                            name: c,
                            nonMinifiedName: p[1],
                            ns: null,
                            securityContext: null,
                            suffix: null
                        }
                    }
                var f = [];
                if (l)
                    for (var h in l) f.push({
                        type: 1,
                        propName: h,
                        target: null,
                        eventName: l[h]
                    });
                return ri(t, e |= 16384, n, r, o, o, i, u, f)
            }

            function ni(t, e, n) {
                return ri(-1, t |= 16, null, 0, e, e, n)
            }

            function ri(t, e, n, r, o, i, a, s, l) {
                var u = $r(n),
                    c = u.matchedQueries,
                    p = u.references,
                    f = u.matchedQueryIds;
                l || (l = []), s || (s = []), i = Ot(i);
                var h = Jr(a, Et(o));
                return {
                    nodeIndex: -1,
                    parent: null,
                    renderParent: null,
                    bindingIndex: -1,
                    outputIndex: -1,
                    checkIndex: t,
                    flags: e,
                    childFlags: 0,
                    directChildFlags: 0,
                    childMatchedQueries: 0,
                    matchedQueries: c,
                    matchedQueryIds: f,
                    references: p,
                    ngContentIndex: -1,
                    childCount: r,
                    bindings: s,
                    bindingFlags: co(s),
                    outputs: l,
                    element: null,
                    provider: {
                        token: o,
                        value: i,
                        deps: h
                    },
                    text: null,
                    query: null,
                    ngContent: null
                }
            }

            function oi(t, e) {
                return li(t, e)
            }

            function ii(t, e) {
                for (var n = t; n.parent && !Wr(n);) n = n.parent;
                return ui(n.parent, Gr(n), !0, e.provider.value, e.provider.deps)
            }

            function ai(t, e) {
                var n = ui(t, e.parent, (32768 & e.flags) > 0, e.provider.value, e.provider.deps);
                if (e.outputs.length)
                    for (var r = 0; r < e.outputs.length; r++) {
                        var o = e.outputs[r],
                            i = n[o.propName].subscribe(si(t, e.parent.nodeIndex, o.eventName));
                        t.disposables[e.outputIndex + r] = i.unsubscribe.bind(i)
                    }
                return n
            }

            function si(t, e, n) {
                return function(r) {
                    return Qr(t, e, n, r)
                }
            }

            function li(t, e) {
                var n = (8192 & e.flags) > 0,
                    r = e.provider;
                switch (201347067 & e.flags) {
                    case 512:
                        return ui(t, e.parent, n, r.value, r.deps);
                    case 1024:
                        return function(t, e, n, r, o) {
                            var i = o.length;
                            switch (i) {
                                case 0:
                                    return r();
                                case 1:
                                    return r(pi(t, e, n, o[0]));
                                case 2:
                                    return r(pi(t, e, n, o[0]), pi(t, e, n, o[1]));
                                case 3:
                                    return r(pi(t, e, n, o[0]), pi(t, e, n, o[1]), pi(t, e, n, o[2]));
                                default:
                                    for (var a = Array(i), s = 0; s < i; s++) a[s] = pi(t, e, n, o[s]);
                                    return r.apply(void 0, l(a))
                            }
                        }(t, e.parent, n, r.value, r.deps);
                    case 2048:
                        return pi(t, e.parent, n, r.deps[0]);
                    case 256:
                        return r.value
                }
            }

            function ui(t, e, n, r, o) {
                var i = o.length;
                switch (i) {
                    case 0:
                        return new r;
                    case 1:
                        return new r(pi(t, e, n, o[0]));
                    case 2:
                        return new r(pi(t, e, n, o[0]), pi(t, e, n, o[1]));
                    case 3:
                        return new r(pi(t, e, n, o[0]), pi(t, e, n, o[1]), pi(t, e, n, o[2]));
                    default:
                        for (var a = new Array(i), s = 0; s < i; s++) a[s] = pi(t, e, n, o[s]);
                        return new(r.bind.apply(r, l([void 0], a)))
                }
            }
            var ci = {};

            function pi(t, e, n, r, o) {
                if (void 0 === o && (o = Lt.THROW_IF_NOT_FOUND), 8 & r.flags) return r.token;
                var i = t;
                2 & r.flags && (o = null);
                var a = r.tokenKey;
                a === $o && (n = !(!e || !e.element.componentView)), e && 1 & r.flags && (n = !1, e = e.parent);
                for (var s = t; s;) {
                    if (e) switch (a) {
                        case Go:
                            return Ho(fi(s, e, n));
                        case Ko:
                            return fi(s, e, n).renderer;
                        case Wo:
                            return new cn(Sr(s, e.nodeIndex).renderElement);
                        case Xo:
                            return Sr(s, e.nodeIndex).viewContainer;
                        case Yo:
                            if (e.element.template) return Sr(s, e.nodeIndex).template;
                            break;
                        case $o:
                            return Ro(fi(s, e, n));
                        case Jo:
                        case ti:
                            return Uo(s, e);
                        default:
                            var l = (n ? e.element.allProviders : e.element.publicProviders)[a];
                            if (l) {
                                var u = xr(s, l.nodeIndex);
                                return u || (u = {
                                    instance: li(s, l)
                                }, s.nodes[l.nodeIndex] = u), u.instance
                            }
                    }
                    n = Wr(s), e = Gr(s), s = s.parent, 4 & r.flags && (s = null)
                }
                var c = i.root.injector.get(r.token, ci);
                return c !== ci || o === ci ? c : i.root.ngModule.injector.get(r.token, o)
            }

            function fi(t, e, n) {
                var r;
                if (n) r = Sr(t, e.nodeIndex).componentView;
                else
                    for (r = t; r.parent && !Wr(r);) r = r.parent;
                return r
            }

            function hi(t, e, n, r, o, i) {
                if (32768 & n.flags) {
                    var a = Sr(t, n.parent.nodeIndex).componentView;
                    2 & a.def.flags && (a.state |= 8)
                }
                if (e.instance[n.bindings[r].name] = o, 524288 & n.flags) {
                    i = i || {};
                    var s = En.unwrap(t.oldValues[n.bindingIndex + r]);
                    i[n.bindings[r].nonMinifiedName] = new Pn(s, o, 0 != (2 & t.state))
                }
                return t.oldValues[n.bindingIndex + r] = o, i
            }

            function di(t, e) {
                if (t.def.nodeFlags & e)
                    for (var n = t.def.nodes, r = 0, o = 0; o < n.length; o++) {
                        var i = n[o],
                            a = i.parent;
                        for (!a && i.flags & e && gi(t, o, i.flags & e, r++), 0 == (i.childFlags & e) && (o += i.childCount); a && 1 & a.flags && o === a.nodeIndex + a.childCount;) a.directChildFlags & e && (r = mi(t, a, e, r)), a = a.parent
                    }
            }

            function mi(t, e, n, r) {
                for (var o = e.nodeIndex + 1; o <= e.nodeIndex + e.childCount; o++) {
                    var i = t.def.nodes[o];
                    i.flags & n && gi(t, o, i.flags & n, r++), o += i.childCount
                }
                return r
            }

            function gi(t, e, n, r) {
                var o = xr(t, e);
                if (o) {
                    var i = o.instance;
                    i && (Or.setCurrentNode(t, e), 1048576 & n && Cr(t, 512, r) && i.ngAfterContentInit(), 2097152 & n && i.ngAfterContentChecked(), 4194304 & n && Cr(t, 768, r) && i.ngAfterViewInit(), 8388608 & n && i.ngAfterViewChecked(), 131072 & n && i.ngOnDestroy())
                }
            }

            function yi(t, e, n) {
                var r = [];
                for (var o in n) r.push({
                    propName: o,
                    bindingType: n[o]
                });
                return {
                    nodeIndex: -1,
                    parent: null,
                    renderParent: null,
                    bindingIndex: -1,
                    outputIndex: -1,
                    checkIndex: -1,
                    flags: t,
                    childFlags: 0,
                    directChildFlags: 0,
                    childMatchedQueries: 0,
                    ngContentIndex: -1,
                    matchedQueries: {},
                    matchedQueryIds: 0,
                    references: {},
                    childCount: 0,
                    bindings: [],
                    bindingFlags: 0,
                    outputs: [],
                    element: null,
                    provider: null,
                    text: null,
                    query: {
                        id: e,
                        filterId: Yr(e),
                        bindings: r
                    },
                    ngContent: null
                }
            }

            function vi(t) {
                for (var e = t.def.nodeMatchedQueries; t.parent && Xr(t);) {
                    var n = t.parentNodeDef;
                    t = t.parent;
                    for (var r = n.nodeIndex + n.childCount, o = 0; o <= r; o++) 67108864 & (i = t.def.nodes[o]).flags && 536870912 & i.flags && (i.query.filterId & e) === i.query.filterId && Pr(t, o).setDirty(), !(1 & i.flags && o + i.childCount < n.nodeIndex) && 67108864 & i.childFlags && 536870912 & i.childFlags || (o += i.childCount)
                }
                if (134217728 & t.def.nodeFlags)
                    for (o = 0; o < t.def.nodes.length; o++) {
                        var i;
                        134217728 & (i = t.def.nodes[o]).flags && 536870912 & i.flags && Pr(t, o).setDirty(), o += i.childCount
                    }
            }

            function _i(t, e) {
                var n = Pr(t, e.nodeIndex);
                if (n.dirty) {
                    var r, o = void 0;
                    if (67108864 & e.flags) {
                        var i = e.parent.parent;
                        o = bi(t, i.nodeIndex, i.nodeIndex + i.childCount, e.query, []), r = xr(t, e.parent.nodeIndex).instance
                    } else 134217728 & e.flags && (o = bi(t, 0, t.def.nodes.length - 1, e.query, []), r = t.component);
                    n.reset(o);
                    for (var a = e.query.bindings, s = !1, l = 0; l < a.length; l++) {
                        var u = a[l],
                            c = void 0;
                        switch (u.bindingType) {
                            case 0:
                                c = n.first;
                                break;
                            case 1:
                                c = n, s = !0
                        }
                        r[u.propName] = c
                    }
                    s && n.notifyOnChanges()
                }
            }

            function bi(t, e, n, r, o) {
                for (var i = e; i <= n; i++) {
                    var a = t.def.nodes[i],
                        s = a.matchedQueries[r.id];
                    if (null != s && o.push(wi(t, a, s)), 1 & a.flags && a.element.template && (a.element.template.nodeMatchedQueries & r.filterId) === r.filterId) {
                        var l = Sr(t, i);
                        if ((a.childMatchedQueries & r.filterId) === r.filterId && (bi(t, i + 1, i + a.childCount, r, o), i += a.childCount), 16777216 & a.flags)
                            for (var u = l.viewContainer._embeddedViews, c = 0; c < u.length; c++) {
                                var p = u[c],
                                    f = Zr(p);
                                f && f === l && bi(p, 0, p.def.nodes.length - 1, r, o)
                            }
                        var h = l.template._projectedViews;
                        if (h)
                            for (c = 0; c < h.length; c++) {
                                var d = h[c];
                                bi(d, 0, d.def.nodes.length - 1, r, o)
                            }
                    }(a.childMatchedQueries & r.filterId) !== r.filterId && (i += a.childCount)
                }
                return o
            }

            function wi(t, e, n) {
                if (null != n) switch (n) {
                    case 1:
                        return Sr(t, e.nodeIndex).renderElement;
                    case 0:
                        return new cn(Sr(t, e.nodeIndex).renderElement);
                    case 2:
                        return Sr(t, e.nodeIndex).template;
                    case 3:
                        return Sr(t, e.nodeIndex).viewContainer;
                    case 4:
                        return xr(t, e.nodeIndex).instance
                }
            }

            function Ci(t, e, n) {
                var r = to(t, e, n);
                r && io(t, n.ngContent.index, 1, r, null, void 0)
            }

            function ki(t, e) {
                return Ei(128, t, new Array(e + 1))
            }

            function Si(t, e) {
                return Ei(32, t, new Array(e))
            }

            function xi(t, e) {
                for (var n = Object.keys(e), r = n.length, o = new Array(r), i = 0; i < r; i++) {
                    var a = n[i];
                    o[e[a]] = a
                }
                return Ei(64, t, o)
            }

            function Ei(t, e, n) {
                for (var r = new Array(n.length), o = 0; o < n.length; o++) {
                    var i = n[o];
                    r[o] = {
                        flags: 8,
                        name: i,
                        ns: null,
                        nonMinifiedName: i,
                        securityContext: null,
                        suffix: null
                    }
                }
                return {
                    nodeIndex: -1,
                    parent: null,
                    renderParent: null,
                    bindingIndex: -1,
                    outputIndex: -1,
                    checkIndex: e,
                    flags: t,
                    childFlags: 0,
                    directChildFlags: 0,
                    childMatchedQueries: 0,
                    matchedQueries: {},
                    matchedQueryIds: 0,
                    references: {},
                    ngContentIndex: -1,
                    childCount: 0,
                    bindings: r,
                    bindingFlags: co(r),
                    outputs: [],
                    element: null,
                    provider: null,
                    text: null,
                    query: null,
                    ngContent: null
                }
            }

            function Pi(t, e, n) {
                for (var r = new Array(n.length - 1), o = 1; o < n.length; o++) r[o - 1] = {
                    flags: 8,
                    name: null,
                    ns: null,
                    nonMinifiedName: null,
                    securityContext: null,
                    suffix: n[o]
                };
                return {
                    nodeIndex: -1,
                    parent: null,
                    renderParent: null,
                    bindingIndex: -1,
                    outputIndex: -1,
                    checkIndex: t,
                    flags: 2,
                    childFlags: 0,
                    directChildFlags: 0,
                    childMatchedQueries: 0,
                    matchedQueries: {},
                    matchedQueryIds: 0,
                    references: {},
                    ngContentIndex: e,
                    childCount: 0,
                    bindings: r,
                    bindingFlags: 8,
                    outputs: [],
                    element: null,
                    provider: null,
                    text: {
                        prefix: n[0]
                    },
                    query: null,
                    ngContent: null
                }
            }

            function Oi(t, e, n) {
                var r, o = t.renderer;
                r = o.createText(n.text.prefix);
                var i = to(t, e, n);
                return i && o.appendChild(i, r), {
                    renderText: r
                }
            }

            function Mi(t, e) {
                return (null != t ? t.toString() : "") + e.suffix
            }

            function Ti(t, e, n, r) {
                for (var o = 0, i = 0, a = 0, s = 0, l = 0, u = null, c = null, p = !1, f = !1, h = null, d = 0; d < e.length; d++) {
                    var m = e[d];
                    if (m.nodeIndex = d, m.parent = u, m.bindingIndex = o, m.outputIndex = i, m.renderParent = c, a |= m.flags, l |= m.matchedQueryIds, m.element) {
                        var g = m.element;
                        g.publicProviders = u ? u.element.publicProviders : Object.create(null), g.allProviders = g.publicProviders, p = !1, f = !1, m.element.template && (l |= m.element.template.nodeMatchedQueries)
                    }
                    if (Ii(u, m, e.length), o += m.bindings.length, i += m.outputs.length, !c && 3 & m.flags && (h = m), 20224 & m.flags) {
                        p || (p = !0, u.element.publicProviders = Object.create(u.element.publicProviders), u.element.allProviders = u.element.publicProviders);
                        var y = 0 != (32768 & m.flags);
                        0 == (8192 & m.flags) || y ? u.element.publicProviders[Nr(m.provider.token)] = m : (f || (f = !0, u.element.allProviders = Object.create(u.element.publicProviders)), u.element.allProviders[Nr(m.provider.token)] = m), y && (u.element.componentProvider = m)
                    }
                    if (u ? (u.childFlags |= m.flags, u.directChildFlags |= m.flags, u.childMatchedQueries |= m.matchedQueryIds, m.element && m.element.template && (u.childMatchedQueries |= m.element.template.nodeMatchedQueries)) : s |= m.flags, m.childCount > 0) u = m, Ai(m) || (c = m);
                    else
                        for (; u && d === u.nodeIndex + u.childCount;) {
                            var v = u.parent;
                            v && (v.childFlags |= u.childFlags, v.childMatchedQueries |= u.childMatchedQueries), c = (u = v) && Ai(u) ? u.renderParent : u
                        }
                }
                return {
                    factory: null,
                    nodeFlags: a,
                    rootNodeFlags: s,
                    nodeMatchedQueries: l,
                    flags: t,
                    nodes: e,
                    updateDirectives: n || Ir,
                    updateRenderer: r || Ir,
                    handleEvent: function(t, n, r, o) {
                        return e[n].element.handleEvent(t, r, o)
                    },
                    bindingCount: o,
                    outputCount: i,
                    lastRenderRootNode: h
                }
            }

            function Ai(t) {
                return 0 != (1 & t.flags) && null === t.element.name
            }

            function Ii(t, e, n) {
                var r = e.element && e.element.template;
                if (r) {
                    if (!r.lastRenderRootNode) throw new Error("Illegal State: Embedded templates without nodes are not allowed!");
                    if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags) throw new Error("Illegal State: Last root node of a template can't have embedded views, at index " + e.nodeIndex + "!")
                }
                if (20224 & e.flags && 0 == (1 & (t ? t.flags : 0))) throw new Error("Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index " + e.nodeIndex + "!");
                if (e.query) {
                    if (67108864 & e.flags && (!t || 0 == (16384 & t.flags))) throw new Error("Illegal State: Content Query nodes need to be children of directives, at index " + e.nodeIndex + "!");
                    if (134217728 & e.flags && t) throw new Error("Illegal State: View Query nodes have to be top level nodes, at index " + e.nodeIndex + "!")
                }
                if (e.childCount) {
                    var o = t ? t.nodeIndex + t.childCount : n - 1;
                    if (e.nodeIndex <= o && e.nodeIndex + e.childCount > o) throw new Error("Illegal State: childCount of node leads outside of parent, at index " + e.nodeIndex + "!")
                }
            }

            function ji(t, e, n, r) {
                var o = Ri(t.root, t.renderer, t, e, n);
                return Li(o, t.component, r), Fi(o), o
            }

            function Ni(t, e, n) {
                var r = Ri(t, t.renderer, null, null, e);
                return Li(r, n, n), Fi(r), r
            }

            function Di(t, e, n, r) {
                var o, i = e.element.componentRendererType;
                return o = i ? t.root.rendererFactory.createRenderer(r, i) : t.root.renderer, Ri(t.root, o, t, e.element.componentProvider, n)
            }

            function Ri(t, e, n, r, o) {
                var i = new Array(o.nodes.length),
                    a = o.outputCount ? new Array(o.outputCount) : null;
                return {
                    def: o,
                    parent: n,
                    viewContainerParent: null,
                    parentNodeDef: r,
                    context: null,
                    component: null,
                    nodes: i,
                    state: 13,
                    root: t,
                    renderer: e,
                    oldValues: new Array(o.bindingCount),
                    disposables: a,
                    initIndex: -1
                }
            }

            function Li(t, e, n) {
                t.component = e, t.context = n
            }

            function Fi(t) {
                var e;
                Wr(t) && (e = Sr(t.parent, t.parentNodeDef.parent.nodeIndex).renderElement);
                for (var n = t.def, r = t.nodes, o = 0; o < n.nodes.length; o++) {
                    var i = n.nodes[o];
                    Or.setCurrentNode(t, o);
                    var a = void 0;
                    switch (201347067 & i.flags) {
                        case 1:
                            var s = ho(t, e, i),
                                l = void 0;
                            if (33554432 & i.flags) {
                                var u = no(i.element.componentView);
                                l = Or.createComponentView(t, i, u, s)
                            }
                            mo(t, l, i, s), a = {
                                renderElement: s,
                                componentView: l,
                                viewContainer: null,
                                template: i.element.template ? Fo(t, i) : void 0
                            }, 16777216 & i.flags && (a.viewContainer = No(t, i, a));
                            break;
                        case 2:
                            a = Oi(t, e, i);
                            break;
                        case 512:
                        case 1024:
                        case 2048:
                        case 256:
                            (a = r[o]) || 4096 & i.flags || (a = {
                                instance: oi(t, i)
                            });
                            break;
                        case 16:
                            a = {
                                instance: ii(t, i)
                            };
                            break;
                        case 16384:
                            (a = r[o]) || (a = {
                                instance: ai(t, i)
                            }), 32768 & i.flags && Li(Sr(t, i.parent.nodeIndex).componentView, a.instance, a.instance);
                            break;
                        case 32:
                        case 64:
                        case 128:
                            a = {
                                value: void 0
                            };
                            break;
                        case 67108864:
                        case 134217728:
                            a = new fn;
                            break;
                        case 8:
                            Ci(t, e, i), a = void 0
                    }
                    r[o] = a
                }
                Gi(t, Zi.CreateViewNodes), Yi(t, 201326592, 268435456, 0)
            }

            function zi(t) {
                Bi(t), Or.updateDirectives(t, 1), Ki(t, Zi.CheckNoChanges), Or.updateRenderer(t, 1), Gi(t, Zi.CheckNoChanges), t.state &= -97
            }

            function Ui(t) {
                1 & t.state ? (t.state &= -2, t.state |= 2) : t.state &= -3, wr(t, 0, 256), Bi(t), Or.updateDirectives(t, 0), Ki(t, Zi.CheckAndUpdate), Yi(t, 67108864, 536870912, 0);
                var e = wr(t, 256, 512);
                di(t, 2097152 | (e ? 1048576 : 0)), Or.updateRenderer(t, 0), Gi(t, Zi.CheckAndUpdate), Yi(t, 134217728, 536870912, 0), di(t, 8388608 | ((e = wr(t, 512, 768)) ? 4194304 : 0)), 2 & t.def.flags && (t.state &= -9), t.state &= -97, wr(t, 768, 1024)
            }

            function Vi(t, e, n, r, o, i, a, s, u, c, p, f, h) {
                return 0 === n ? function(t, e, n, r, o, i, a, s, l, u, c, p) {
                    switch (201347067 & e.flags) {
                        case 1:
                            return function(t, e, n, r, o, i, a, s, l, u, c, p) {
                                var f = e.bindings.length,
                                    h = !1;
                                return f > 0 && yo(t, e, 0, n) && (h = !0), f > 1 && yo(t, e, 1, r) && (h = !0), f > 2 && yo(t, e, 2, o) && (h = !0), f > 3 && yo(t, e, 3, i) && (h = !0), f > 4 && yo(t, e, 4, a) && (h = !0), f > 5 && yo(t, e, 5, s) && (h = !0), f > 6 && yo(t, e, 6, l) && (h = !0), f > 7 && yo(t, e, 7, u) && (h = !0), f > 8 && yo(t, e, 8, c) && (h = !0), f > 9 && yo(t, e, 9, p) && (h = !0), h
                            }(t, e, n, r, o, i, a, s, l, u, c, p);
                        case 2:
                            return function(t, e, n, r, o, i, a, s, l, u, c, p) {
                                var f = !1,
                                    h = e.bindings,
                                    d = h.length;
                                if (d > 0 && Vr(t, e, 0, n) && (f = !0), d > 1 && Vr(t, e, 1, r) && (f = !0), d > 2 && Vr(t, e, 2, o) && (f = !0), d > 3 && Vr(t, e, 3, i) && (f = !0), d > 4 && Vr(t, e, 4, a) && (f = !0), d > 5 && Vr(t, e, 5, s) && (f = !0), d > 6 && Vr(t, e, 6, l) && (f = !0), d > 7 && Vr(t, e, 7, u) && (f = !0), d > 8 && Vr(t, e, 8, c) && (f = !0), d > 9 && Vr(t, e, 9, p) && (f = !0), f) {
                                    var m = e.text.prefix;
                                    d > 0 && (m += Mi(n, h[0])), d > 1 && (m += Mi(r, h[1])), d > 2 && (m += Mi(o, h[2])), d > 3 && (m += Mi(i, h[3])), d > 4 && (m += Mi(a, h[4])), d > 5 && (m += Mi(s, h[5])), d > 6 && (m += Mi(l, h[6])), d > 7 && (m += Mi(u, h[7])), d > 8 && (m += Mi(c, h[8])), d > 9 && (m += Mi(p, h[9]));
                                    var g = kr(t, e.nodeIndex).renderText;
                                    t.renderer.setValue(g, m)
                                }
                                return f
                            }(t, e, n, r, o, i, a, s, l, u, c, p);
                        case 16384:
                            return function(t, e, n, r, o, i, a, s, l, u, c, p) {
                                var f = xr(t, e.nodeIndex),
                                    h = f.instance,
                                    d = !1,
                                    m = void 0,
                                    g = e.bindings.length;
                                return g > 0 && Ur(t, e, 0, n) && (d = !0, m = hi(t, f, e, 0, n, m)), g > 1 && Ur(t, e, 1, r) && (d = !0, m = hi(t, f, e, 1, r, m)), g > 2 && Ur(t, e, 2, o) && (d = !0, m = hi(t, f, e, 2, o, m)), g > 3 && Ur(t, e, 3, i) && (d = !0, m = hi(t, f, e, 3, i, m)), g > 4 && Ur(t, e, 4, a) && (d = !0, m = hi(t, f, e, 4, a, m)), g > 5 && Ur(t, e, 5, s) && (d = !0, m = hi(t, f, e, 5, s, m)), g > 6 && Ur(t, e, 6, l) && (d = !0, m = hi(t, f, e, 6, l, m)), g > 7 && Ur(t, e, 7, u) && (d = !0, m = hi(t, f, e, 7, u, m)), g > 8 && Ur(t, e, 8, c) && (d = !0, m = hi(t, f, e, 8, c, m)), g > 9 && Ur(t, e, 9, p) && (d = !0, m = hi(t, f, e, 9, p, m)), m && h.ngOnChanges(m), 65536 & e.flags && Cr(t, 256, e.nodeIndex) && h.ngOnInit(), 262144 & e.flags && h.ngDoCheck(), d
                            }(t, e, n, r, o, i, a, s, l, u, c, p);
                        case 32:
                        case 64:
                        case 128:
                            return function(t, e, n, r, o, i, a, s, l, u, c, p) {
                                var f = e.bindings,
                                    h = !1,
                                    d = f.length;
                                if (d > 0 && Vr(t, e, 0, n) && (h = !0), d > 1 && Vr(t, e, 1, r) && (h = !0), d > 2 && Vr(t, e, 2, o) && (h = !0), d > 3 && Vr(t, e, 3, i) && (h = !0), d > 4 && Vr(t, e, 4, a) && (h = !0), d > 5 && Vr(t, e, 5, s) && (h = !0), d > 6 && Vr(t, e, 6, l) && (h = !0), d > 7 && Vr(t, e, 7, u) && (h = !0), d > 8 && Vr(t, e, 8, c) && (h = !0), d > 9 && Vr(t, e, 9, p) && (h = !0), h) {
                                    var m = Er(t, e.nodeIndex),
                                        g = void 0;
                                    switch (201347067 & e.flags) {
                                        case 32:
                                            g = new Array(f.length), d > 0 && (g[0] = n), d > 1 && (g[1] = r), d > 2 && (g[2] = o), d > 3 && (g[3] = i), d > 4 && (g[4] = a), d > 5 && (g[5] = s), d > 6 && (g[6] = l), d > 7 && (g[7] = u), d > 8 && (g[8] = c), d > 9 && (g[9] = p);
                                            break;
                                        case 64:
                                            g = {}, d > 0 && (g[f[0].name] = n), d > 1 && (g[f[1].name] = r), d > 2 && (g[f[2].name] = o), d > 3 && (g[f[3].name] = i), d > 4 && (g[f[4].name] = a), d > 5 && (g[f[5].name] = s), d > 6 && (g[f[6].name] = l), d > 7 && (g[f[7].name] = u), d > 8 && (g[f[8].name] = c), d > 9 && (g[f[9].name] = p);
                                            break;
                                        case 128:
                                            var y = n;
                                            switch (d) {
                                                case 1:
                                                    g = y.transform(n);
                                                    break;
                                                case 2:
                                                    g = y.transform(r);
                                                    break;
                                                case 3:
                                                    g = y.transform(r, o);
                                                    break;
                                                case 4:
                                                    g = y.transform(r, o, i);
                                                    break;
                                                case 5:
                                                    g = y.transform(r, o, i, a);
                                                    break;
                                                case 6:
                                                    g = y.transform(r, o, i, a, s);
                                                    break;
                                                case 7:
                                                    g = y.transform(r, o, i, a, s, l);
                                                    break;
                                                case 8:
                                                    g = y.transform(r, o, i, a, s, l, u);
                                                    break;
                                                case 9:
                                                    g = y.transform(r, o, i, a, s, l, u, c);
                                                    break;
                                                case 10:
                                                    g = y.transform(r, o, i, a, s, l, u, c, p)
                                            }
                                    }
                                    m.value = g
                                }
                                return h
                            }(t, e, n, r, o, i, a, s, l, u, c, p);
                        default:
                            throw "unreachable"
                    }
                }(t, e, r, o, i, a, s, u, c, p, f, h) : function(t, e, n) {
                    switch (201347067 & e.flags) {
                        case 1:
                            return function(t, e, n) {
                                for (var r = !1, o = 0; o < n.length; o++) yo(t, e, o, n[o]) && (r = !0);
                                return r
                            }(t, e, n);
                        case 2:
                            return function(t, e, n) {
                                for (var r = e.bindings, o = !1, i = 0; i < n.length; i++) Vr(t, e, i, n[i]) && (o = !0);
                                if (o) {
                                    var a = "";
                                    for (i = 0; i < n.length; i++) a += Mi(n[i], r[i]);
                                    a = e.text.prefix + a;
                                    var s = kr(t, e.nodeIndex).renderText;
                                    t.renderer.setValue(s, a)
                                }
                                return o
                            }(t, e, n);
                        case 16384:
                            return function(t, e, n) {
                                for (var r = xr(t, e.nodeIndex), o = r.instance, i = !1, a = void 0, s = 0; s < n.length; s++) Ur(t, e, s, n[s]) && (i = !0, a = hi(t, r, e, s, n[s], a));
                                return a && o.ngOnChanges(a), 65536 & e.flags && Cr(t, 256, e.nodeIndex) && o.ngOnInit(), 262144 & e.flags && o.ngDoCheck(), i
                            }(t, e, n);
                        case 32:
                        case 64:
                        case 128:
                            return function(t, e, n) {
                                for (var r = e.bindings, o = !1, i = 0; i < n.length; i++) Vr(t, e, i, n[i]) && (o = !0);
                                if (o) {
                                    var a = Er(t, e.nodeIndex),
                                        s = void 0;
                                    switch (201347067 & e.flags) {
                                        case 32:
                                            s = n;
                                            break;
                                        case 64:
                                            for (s = {}, i = 0; i < n.length; i++) s[r[i].name] = n[i];
                                            break;
                                        case 128:
                                            var u = n[0],
                                                c = n.slice(1);
                                            s = u.transform.apply(u, l(c))
                                    }
                                    a.value = s
                                }
                                return o
                            }(t, e, n);
                        default:
                            throw "unreachable"
                    }
                }(t, e, r)
            }

            function Bi(t) {
                var e = t.def;
                if (4 & e.nodeFlags)
                    for (var n = 0; n < e.nodes.length; n++) {
                        var r = e.nodes[n];
                        if (4 & r.flags) {
                            var o = Sr(t, n).template._projectedViews;
                            if (o)
                                for (var i = 0; i < o.length; i++) {
                                    var a = o[i];
                                    a.state |= 32, qr(a, t)
                                }
                        } else 0 == (4 & r.childFlags) && (n += r.childCount)
                    }
            }

            function Hi(t, e, n, r, o, i, a, s, l, u, c, p, f) {
                return 0 === n ? function(t, e, n, r, o, i, a, s, l, u, c, p) {
                    var f = e.bindings.length;
                    f > 0 && Br(t, e, 0, n), f > 1 && Br(t, e, 1, r), f > 2 && Br(t, e, 2, o), f > 3 && Br(t, e, 3, i), f > 4 && Br(t, e, 4, a), f > 5 && Br(t, e, 5, s), f > 6 && Br(t, e, 6, l), f > 7 && Br(t, e, 7, u), f > 8 && Br(t, e, 8, c), f > 9 && Br(t, e, 9, p)
                }(t, e, r, o, i, a, s, l, u, c, p, f) : function(t, e, n) {
                    for (var r = 0; r < n.length; r++) Br(t, e, r, n[r])
                }(t, e, r), !1
            }

            function qi(t, e) {
                if (Pr(t, e.nodeIndex).dirty) throw Mr(Or.createDebugContext(t, e.nodeIndex), "Query " + e.query.id + " not dirty", "Query " + e.query.id + " dirty", 0 != (1 & t.state))
            }

            function Qi(t) {
                if (!(128 & t.state)) {
                    if (Ki(t, Zi.Destroy), Gi(t, Zi.Destroy), di(t, 131072), t.disposables)
                        for (var e = 0; e < t.disposables.length; e++) t.disposables[e]();
                    ! function(t) {
                        if (16 & t.state) {
                            var e = Zr(t);
                            if (e) {
                                var n = e.template._projectedViews;
                                n && (Mo(n, n.indexOf(t)), Or.dirtyParentQueries(t))
                            }
                        }
                    }(t), t.renderer.destroyNode && function(t) {
                        for (var e = t.def.nodes.length, n = 0; n < e; n++) {
                            var r = t.def.nodes[n];
                            1 & r.flags ? t.renderer.destroyNode(Sr(t, n).renderElement) : 2 & r.flags ? t.renderer.destroyNode(kr(t, n).renderText) : (67108864 & r.flags || 134217728 & r.flags) && Pr(t, n).destroy()
                        }
                    }(t), Wr(t) && t.renderer.destroy(), t.state |= 128
                }
            }
            var Zi = function(t) {
                return t[t.CreateViewNodes = 0] = "CreateViewNodes", t[t.CheckNoChanges = 1] = "CheckNoChanges", t[t.CheckNoChangesProjectedViews = 2] = "CheckNoChangesProjectedViews", t[t.CheckAndUpdate = 3] = "CheckAndUpdate", t[t.CheckAndUpdateProjectedViews = 4] = "CheckAndUpdateProjectedViews", t[t.Destroy = 5] = "Destroy", t
            }({});

            function Gi(t, e) {
                var n = t.def;
                if (33554432 & n.nodeFlags)
                    for (var r = 0; r < n.nodes.length; r++) {
                        var o = n.nodes[r];
                        33554432 & o.flags ? Wi(Sr(t, r).componentView, e) : 0 == (33554432 & o.childFlags) && (r += o.childCount)
                    }
            }

            function Ki(t, e) {
                var n = t.def;
                if (16777216 & n.nodeFlags)
                    for (var r = 0; r < n.nodes.length; r++) {
                        var o = n.nodes[r];
                        if (16777216 & o.flags)
                            for (var i = Sr(t, r).viewContainer._embeddedViews, a = 0; a < i.length; a++) Wi(i[a], e);
                        else 0 == (16777216 & o.childFlags) && (r += o.childCount)
                    }
            }

            function Wi(t, e) {
                var n = t.state;
                switch (e) {
                    case Zi.CheckNoChanges:
                        0 == (128 & n) && (12 == (12 & n) ? zi(t) : 64 & n && Xi(t, Zi.CheckNoChangesProjectedViews));
                        break;
                    case Zi.CheckNoChangesProjectedViews:
                        0 == (128 & n) && (32 & n ? zi(t) : 64 & n && Xi(t, e));
                        break;
                    case Zi.CheckAndUpdate:
                        0 == (128 & n) && (12 == (12 & n) ? Ui(t) : 64 & n && Xi(t, Zi.CheckAndUpdateProjectedViews));
                        break;
                    case Zi.CheckAndUpdateProjectedViews:
                        0 == (128 & n) && (32 & n ? Ui(t) : 64 & n && Xi(t, e));
                        break;
                    case Zi.Destroy:
                        Qi(t);
                        break;
                    case Zi.CreateViewNodes:
                        Fi(t)
                }
            }

            function Xi(t, e) {
                Ki(t, e), Gi(t, e)
            }

            function Yi(t, e, n, r) {
                if (t.def.nodeFlags & e && t.def.nodeFlags & n)
                    for (var o = t.def.nodes.length, i = 0; i < o; i++) {
                        var a = t.def.nodes[i];
                        if (a.flags & e && a.flags & n) switch (Or.setCurrentNode(t, a.nodeIndex), r) {
                            case 0:
                                _i(t, a);
                                break;
                            case 1:
                                qi(t, a)
                        }
                        a.childFlags & e && a.childFlags & n || (i += a.childCount)
                    }
            }
            var $i = !1;

            function Ji(t, e, n, r, o, i) {
                return Ni(ea(t, o, o.injector.get(sn), e, n), r, i)
            }

            function ta(t, e, n, r, o, i) {
                var a = o.injector.get(sn),
                    s = ea(t, o, new Da(a), e, n),
                    l = pa(r);
                return ja(ba.create, Ni, null, [s, l, i])
            }

            function ea(t, e, n, r, o) {
                var i = e.injector.get(br),
                    a = e.injector.get(se);
                return {
                    ngModule: e,
                    injector: t,
                    projectableNodes: r,
                    selectorOrNode: o,
                    sanitizer: i,
                    rendererFactory: n,
                    renderer: n.createRenderer(null, null),
                    errorHandler: a
                }
            }

            function na(t, e, n, r) {
                var o = pa(n);
                return ja(ba.create, ji, null, [t, e, o, r])
            }

            function ra(t, e, n, r) {
                return n = sa.get(e.element.componentProvider.provider.token) || pa(n), ja(ba.create, Di, null, [t, e, n, r])
            }

            function oa(t, e, n, r) {
                return Qo(t, e, n, function(t) {
                    var e = function(t) {
                            var e = !1,
                                n = !1;
                            return 0 === ia.size ? {
                                hasOverrides: e,
                                hasDeprecatedOverrides: n
                            } : (t.providers.forEach(function(t) {
                                var r = ia.get(t.token);
                                3840 & t.flags && r && (e = !0, n = n || r.deprecatedBehavior)
                            }), t.modules.forEach(function(t) {
                                aa.forEach(function(r, o) {
                                    o.ngInjectableDef.providedIn === t && (e = !0, n = n || r.deprecatedBehavior)
                                })
                            }), {
                                hasOverrides: e,
                                hasDeprecatedOverrides: n
                            })
                        }(t),
                        n = e.hasDeprecatedOverrides;
                    return e.hasOverrides ? (function(t) {
                        for (var e = 0; e < t.providers.length; e++) {
                            var r = t.providers[e];
                            n && (r.flags |= 4096);
                            var o = ia.get(r.token);
                            o && (r.flags = -3841 & r.flags | o.flags, r.deps = Jr(o.deps), r.value = o.value)
                        }
                        if (aa.size > 0) {
                            var i = new Set(t.modules);
                            aa.forEach(function(e, r) {
                                if (i.has(r.ngInjectableDef.providedIn)) {
                                    var o = {
                                        token: r,
                                        flags: e.flags | (n ? 4096 : 0),
                                        deps: Jr(e.deps),
                                        value: e.value,
                                        index: t.providers.length
                                    };
                                    t.providers.push(o), t.providersByKey[Nr(r)] = o
                                }
                            })
                        }
                    }(t = t.factory(function() {
                        return Ir
                    })), t) : t
                }(r))
            }
            var ia = new Map,
                aa = new Map,
                sa = new Map;

            function la(t) {
                ia.set(t.token, t), "function" == typeof t.token && t.token.ngInjectableDef && "function" == typeof t.token.ngInjectableDef.providedIn && aa.set(t.token, t)
            }

            function ua(t, e) {
                var n = no(no(e.viewDefFactory).nodes[0].element.componentView);
                sa.set(t, n)
            }

            function ca() {
                ia.clear(), aa.clear(), sa.clear()
            }

            function pa(t) {
                if (0 === ia.size) return t;
                var e = function(t) {
                    for (var e = [], n = null, r = 0; r < t.nodes.length; r++) {
                        var o = t.nodes[r];
                        1 & o.flags && (n = o), n && 3840 & o.flags && ia.has(o.provider.token) && (e.push(n.nodeIndex), n = null)
                    }
                    return e
                }(t);
                if (0 === e.length) return t;
                t = t.factory(function() {
                    return Ir
                });
                for (var n = 0; n < e.length; n++) r(t, e[n]);
                return t;

                function r(t, e) {
                    for (var n = e + 1; n < t.nodes.length; n++) {
                        var r = t.nodes[n];
                        if (1 & r.flags) return;
                        if (3840 & r.flags) {
                            var o = r.provider,
                                i = ia.get(o.token);
                            i && (r.flags = -3841 & r.flags | i.flags, o.deps = Jr(i.deps), o.value = i.value)
                        }
                    }
                }
            }

            function fa(t, e, n, r, o, i, a, s, l, u, c, p, f) {
                var h = t.def.nodes[e];
                return Vi(t, h, n, r, o, i, a, s, l, u, c, p, f), 224 & h.flags ? Er(t, e).value : void 0
            }

            function ha(t, e, n, r, o, i, a, s, l, u, c, p, f) {
                var h = t.def.nodes[e];
                return Hi(t, h, n, r, o, i, a, s, l, u, c, p, f), 224 & h.flags ? Er(t, e).value : void 0
            }

            function da(t) {
                return ja(ba.detectChanges, Ui, null, [t])
            }

            function ma(t) {
                return ja(ba.checkNoChanges, zi, null, [t])
            }

            function ga(t) {
                return ja(ba.destroy, Qi, null, [t])
            }
            var ya, va, _a, ba = function(t) {
                return t[t.create = 0] = "create", t[t.detectChanges = 1] = "detectChanges", t[t.checkNoChanges = 2] = "checkNoChanges", t[t.destroy = 3] = "destroy", t[t.handleEvent = 4] = "handleEvent", t
            }({});

            function wa(t, e) {
                va = t, _a = e
            }

            function Ca(t, e, n, r) {
                return wa(t, e), ja(ba.handleEvent, t.def.handleEvent, null, [t, e, n, r])
            }

            function ka(t, e) {
                if (128 & t.state) throw Ar(ba[ya]);
                return wa(t, Ma(t, 0)), t.def.updateDirectives(function(t, n, r) {
                    for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
                    var a = t.def.nodes[n];
                    return 0 === e ? xa(t, a, r, o) : Ea(t, a, r, o), 16384 & a.flags && wa(t, Ma(t, n)), 224 & a.flags ? Er(t, a.nodeIndex).value : void 0
                }, t)
            }

            function Sa(t, e) {
                if (128 & t.state) throw Ar(ba[ya]);
                return wa(t, Ta(t, 0)), t.def.updateRenderer(function(t, n, r) {
                    for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
                    var a = t.def.nodes[n];
                    return 0 === e ? xa(t, a, r, o) : Ea(t, a, r, o), 3 & a.flags && wa(t, Ta(t, n)), 224 & a.flags ? Er(t, a.nodeIndex).value : void 0
                }, t)
            }

            function xa(t, e, n, r) {
                if (Vi.apply(void 0, l([t, e, n], r))) {
                    var o = 1 === n ? r[0] : r;
                    if (16384 & e.flags) {
                        for (var i = {}, a = 0; a < e.bindings.length; a++) {
                            var s = e.bindings[a],
                                u = o[a];
                            8 & s.flags && (i[(h = s.nonMinifiedName, "ng-reflect-" + (h = h.replace(/[$@]/g, "_").replace(Pa, function() {
                                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                return "-" + t[1].toLowerCase()
                            })))] = Oa(u))
                        }
                        var c = e.parent,
                            p = Sr(t, c.nodeIndex).renderElement;
                        if (c.element.name)
                            for (var f in i) null != (u = i[f]) ? t.renderer.setAttribute(p, f, u) : t.renderer.removeAttribute(p, f);
                        else t.renderer.setValue(p, "bindings=" + JSON.stringify(i, null, 2))
                    }
                }
                var h
            }

            function Ea(t, e, n, r) {
                Hi.apply(void 0, l([t, e, n], r))
            }
            var Pa = /([A-Z])/g;

            function Oa(t) {
                try {
                    return null != t ? t.toString().slice(0, 30) : t
                } catch (t) {
                    return "[ERROR] Exception while trying to serialize the value"
                }
            }

            function Ma(t, e) {
                for (var n = e; n < t.def.nodes.length; n++) {
                    var r = t.def.nodes[n];
                    if (16384 & r.flags && r.bindings && r.bindings.length) return n
                }
                return null
            }

            function Ta(t, e) {
                for (var n = e; n < t.def.nodes.length; n++) {
                    var r = t.def.nodes[n];
                    if (3 & r.flags && r.bindings && r.bindings.length) return n
                }
                return null
            }
            var Aa = function() {
                function t(t, e) {
                    this.view = t, this.nodeIndex = e, null == e && (this.nodeIndex = e = 0), this.nodeDef = t.def.nodes[e];
                    for (var n = this.nodeDef, r = t; n && 0 == (1 & n.flags);) n = n.parent;
                    if (!n)
                        for (; !n && r;) n = Gr(r), r = r.parent;
                    this.elDef = n, this.elView = r
                }
                return Object.defineProperty(t.prototype, "elOrCompView", {
                    get: function() {
                        return Sr(this.elView, this.elDef.nodeIndex).componentView || this.view
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "injector", {
                    get: function() {
                        return Uo(this.elView, this.elDef)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "component", {
                    get: function() {
                        return this.elOrCompView.component
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "context", {
                    get: function() {
                        return this.elOrCompView.context
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "providerTokens", {
                    get: function() {
                        var t = [];
                        if (this.elDef)
                            for (var e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) {
                                var n = this.elView.def.nodes[e];
                                20224 & n.flags && t.push(n.provider.token), e += n.childCount
                            }
                        return t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "references", {
                    get: function() {
                        var t = {};
                        if (this.elDef) {
                            Ia(this.elView, this.elDef, t);
                            for (var e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) {
                                var n = this.elView.def.nodes[e];
                                20224 & n.flags && Ia(this.elView, n, t), e += n.childCount
                            }
                        }
                        return t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "componentRenderElement", {
                    get: function() {
                        var t = function(t) {
                            for (; t && !Wr(t);) t = t.parent;
                            return t.parent ? Sr(t.parent, Gr(t).nodeIndex) : null
                        }(this.elOrCompView);
                        return t ? t.renderElement : void 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "renderNode", {
                    get: function() {
                        return 2 & this.nodeDef.flags ? Kr(this.view, this.nodeDef) : Kr(this.elView, this.elDef)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.logError = function(t) {
                    for (var e, n, r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
                    2 & this.nodeDef.flags ? (e = this.view.def, n = this.nodeDef.nodeIndex) : (e = this.elView.def, n = this.elDef.nodeIndex);
                    var i = function(t, e) {
                            for (var n = -1, r = 0; r <= e; r++) 3 & t.nodes[r].flags && n++;
                            return n
                        }(e, n),
                        a = -1;
                    e.factory(function() {
                        return ++a === i ? (e = t.error).bind.apply(e, l([t], r)) : Ir;
                        var e
                    }), a < i && (t.error("Illegal state: the ViewDefinitionFactory did not call the logger!"), t.error.apply(t, l(r)))
                }, t
            }();

            function Ia(t, e, n) {
                for (var r in e.references) n[r] = wi(t, e, e.references[r])
            }

            function ja(t, e, n, r) {
                var o = ya,
                    i = va,
                    a = _a;
                try {
                    ya = t;
                    var s = e.apply(n, r);
                    return va = i, _a = a, ya = o, s
                } catch (t) {
                    if (oe(t) || !va) throw t;
                    throw function(t, e) {
                        return t instanceof Error || (t = new Error(t.toString())), Tr(t, e), t
                    }(t, Na())
                }
            }

            function Na() {
                return va ? new Aa(va, _a) : null
            }
            var Da = function() {
                    function t(t) {
                        this.delegate = t
                    }
                    return t.prototype.createRenderer = function(t, e) {
                        return new Ra(this.delegate.createRenderer(t, e))
                    }, t.prototype.begin = function() {
                        this.delegate.begin && this.delegate.begin()
                    }, t.prototype.end = function() {
                        this.delegate.end && this.delegate.end()
                    }, t.prototype.whenRenderingDone = function() {
                        return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null)
                    }, t
                }(),
                Ra = function() {
                    function t(t) {
                        this.delegate = t, this.data = this.delegate.data
                    }
                    return t.prototype.destroyNode = function(t) {
                        ! function(t) {
                            Cn.delete(t.nativeNode)
                        }(kn(t)), this.delegate.destroyNode && this.delegate.destroyNode(t)
                    }, t.prototype.destroy = function() {
                        this.delegate.destroy()
                    }, t.prototype.createElement = function(t, e) {
                        var n = this.delegate.createElement(t, e),
                            r = Na();
                        if (r) {
                            var o = new wn(n, null, r);
                            o.name = t, Sn(o)
                        }
                        return n
                    }, t.prototype.createComment = function(t) {
                        var e = this.delegate.createComment(t),
                            n = Na();
                        return n && Sn(new bn(e, null, n)), e
                    }, t.prototype.createText = function(t) {
                        var e = this.delegate.createText(t),
                            n = Na();
                        return n && Sn(new bn(e, null, n)), e
                    }, t.prototype.appendChild = function(t, e) {
                        var n = kn(t),
                            r = kn(e);
                        n && r && n instanceof wn && n.addChild(r), this.delegate.appendChild(t, e)
                    }, t.prototype.insertBefore = function(t, e, n) {
                        var r = kn(t),
                            o = kn(e),
                            i = kn(n);
                        r && o && r instanceof wn && r.insertBefore(i, o), this.delegate.insertBefore(t, e, n)
                    }, t.prototype.removeChild = function(t, e) {
                        var n = kn(t),
                            r = kn(e);
                        n && r && n instanceof wn && n.removeChild(r), this.delegate.removeChild(t, e)
                    }, t.prototype.selectRootElement = function(t) {
                        var e = this.delegate.selectRootElement(t),
                            n = Na();
                        return n && Sn(new wn(e, null, n)), e
                    }, t.prototype.setAttribute = function(t, e, n, r) {
                        var o = kn(t);
                        o && o instanceof wn && (o.attributes[r ? r + ":" + e : e] = n), this.delegate.setAttribute(t, e, n, r)
                    }, t.prototype.removeAttribute = function(t, e, n) {
                        var r = kn(t);
                        r && r instanceof wn && (r.attributes[n ? n + ":" + e : e] = null), this.delegate.removeAttribute(t, e, n)
                    }, t.prototype.addClass = function(t, e) {
                        var n = kn(t);
                        n && n instanceof wn && (n.classes[e] = !0), this.delegate.addClass(t, e)
                    }, t.prototype.removeClass = function(t, e) {
                        var n = kn(t);
                        n && n instanceof wn && (n.classes[e] = !1), this.delegate.removeClass(t, e)
                    }, t.prototype.setStyle = function(t, e, n, r) {
                        var o = kn(t);
                        o && o instanceof wn && (o.styles[e] = n), this.delegate.setStyle(t, e, n, r)
                    }, t.prototype.removeStyle = function(t, e, n) {
                        var r = kn(t);
                        r && r instanceof wn && (r.styles[e] = null), this.delegate.removeStyle(t, e, n)
                    }, t.prototype.setProperty = function(t, e, n) {
                        var r = kn(t);
                        r && r instanceof wn && (r.properties[e] = n), this.delegate.setProperty(t, e, n)
                    }, t.prototype.listen = function(t, e, n) {
                        if ("string" != typeof t) {
                            var r = kn(t);
                            r && r.listeners.push(new function(t, e) {
                                this.name = t, this.callback = e
                            }(e, n))
                        }
                        return this.delegate.listen(t, e, n)
                    }, t.prototype.parentNode = function(t) {
                        return this.delegate.parentNode(t)
                    }, t.prototype.nextSibling = function(t) {
                        return this.delegate.nextSibling(t)
                    }, t.prototype.setValue = function(t, e) {
                        return this.delegate.setValue(t, e)
                    }, t
                }(),
                La = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this) || this;
                        return o.moduleType = e, o._bootstrapComponents = n, o._ngModuleDefFactory = r, o
                    }
                    return o(e, t), e.prototype.create = function(t) {
                        ! function() {
                            if (!$i) {
                                $i = !0;
                                var t = $e() ? {
                                    setCurrentNode: wa,
                                    createRootView: ta,
                                    createEmbeddedView: na,
                                    createComponentView: ra,
                                    createNgModuleRef: oa,
                                    overrideProvider: la,
                                    overrideComponentView: ua,
                                    clearOverrides: ca,
                                    checkAndUpdateView: da,
                                    checkNoChangesView: ma,
                                    destroyView: ga,
                                    createDebugContext: function(t, e) {
                                        return new Aa(t, e)
                                    },
                                    handleEvent: Ca,
                                    updateDirectives: ka,
                                    updateRenderer: Sa
                                } : {
                                    setCurrentNode: function() {},
                                    createRootView: Ji,
                                    createEmbeddedView: ji,
                                    createComponentView: Di,
                                    createNgModuleRef: Qo,
                                    overrideProvider: Ir,
                                    overrideComponentView: Ir,
                                    clearOverrides: Ir,
                                    checkAndUpdateView: Ui,
                                    checkNoChangesView: zi,
                                    destroyView: Qi,
                                    createDebugContext: function(t, e) {
                                        return new Aa(t, e)
                                    },
                                    handleEvent: function(t, e, n, r) {
                                        return t.def.handleEvent(t, e, n, r)
                                    },
                                    updateDirectives: function(t, e) {
                                        return t.def.updateDirectives(0 === e ? fa : ha, t)
                                    },
                                    updateRenderer: function(t, e) {
                                        return t.def.updateRenderer(0 === e ? fa : ha, t)
                                    }
                                };
                                Or.setCurrentNode = t.setCurrentNode, Or.createRootView = t.createRootView, Or.createEmbeddedView = t.createEmbeddedView, Or.createComponentView = t.createComponentView, Or.createNgModuleRef = t.createNgModuleRef, Or.overrideProvider = t.overrideProvider, Or.overrideComponentView = t.overrideComponentView, Or.clearOverrides = t.clearOverrides, Or.checkAndUpdateView = t.checkAndUpdateView, Or.checkNoChangesView = t.checkNoChangesView, Or.destroyView = t.destroyView, Or.resolveDep = pi, Or.createDebugContext = t.createDebugContext, Or.handleEvent = t.handleEvent, Or.updateDirectives = t.updateDirectives, Or.updateRenderer = t.updateRenderer, Or.dirtyParentQueries = vi
                            }
                        }();
                        var e = no(this._ngModuleDefFactory);
                        return Or.createNgModuleRef(this.moduleType, t || Lt.NULL, this._bootstrapComponents, e)
                    }, e
                }(Ie);

            function Fa(t, e, n) {
                t != e && Va(n)
            }

            function za(t, e) {
                null != t && Va(e)
            }

            function Ua(t, e) {
                null == t && Va(e)
            }

            function Va(t) {
                throw new Error("ASSERTION ERROR: " + t)
            }

            function Ba(t, e, n, r) {
                var o = r ? e : n;
                o && function(t, e) {
                    for (var n = 0; n < e.length; n += 2) e[n + 1].call(t[e[n]])
                }(t, o)
            }
            "undefined" == typeof ngDevMode && ("undefined" != typeof window && (window.ngDevMode = !0), "undefined" != typeof self && (self.ngDevMode = !0), "undefined" != typeof global && (global.ngDevMode = !0));
            var Ha, qa, Qa, Za, Ga, Ka, Wa, Xa, Ya, $a, Ja = "__ngHostLNode__",
                ts = Promise.resolve(null),
                es = [0, 0],
                ns = null,
                rs = !1;

            function os(t, e) {
                var n = ns;
                return Xa = t && t.data, Ya = t && t.directives, Ga = t && t.tView.data, Wa = t && 1 == (1 & t.flags), Ha = t && t.renderer, t && t.bindingIndex < 0 && (t.bindingIndex = t.bindingStartIndex), null != e && (Qa = e, Za = !0), ns = t, Ka = t && t.queries, n
            }

            function is(t) {
                rs || Ba(Ya, ns.tView.viewHooks, ns.tView.viewCheckHooks, Wa), ns.flags &= -6, ns.lifecycleStage = 1, ns.bindingIndex = -1, os(t, null)
            }

            function as() {
                ls();
                var t = ns.tView;
                t.firstTemplatePass = !1, ss(t.hostBindings),
                    function(t) {
                        if (null != t)
                            for (var e = 0; e < t.length; e += 2) ps(t[e], t[e + 1])
                    }(t.components)
            }

            function ss(t) {
                if (null != t)
                    for (var e = ns.tView.directives, n = 0; n < t.length; n += 2) {
                        var r = t[n],
                            o = e[r];
                        o.hostBindings && o.hostBindings(r, t[n + 1])
                    }
            }

            function ls() {
                if (!rs) {
                    var t = ns.tView;
                    (function(t, e, n) {
                        1 === t.lifecycleStage && (Ba(t.directives, e.initHooks, e.checkHooks, n), t.lifecycleStage = 2)
                    })(ns, t, Wa), Ba(Ya, t.contentHooks, t.contentCheckHooks, Wa)
                }
            }

            function us(t, e, n, r, o, i) {
                var a, s, l, u, c, p, f, h, d, m = Za,
                    g = Qa;
                try {
                    Za = !0, Qa = null;
                    var y = 2;
                    null == t && (s = null, l = 2, u = null, c = function(t, e, n, r, o, i) {
                        return {
                            parent: ns,
                            id: -1,
                            flags: 11,
                            node: null,
                            data: [],
                            directives: null,
                            tView: n,
                            cleanup: null,
                            renderer: e,
                            child: null,
                            tail: null,
                            next: null,
                            bindingStartIndex: -1,
                            bindingIndex: -1,
                            template: r,
                            context: o,
                            dynamicViewCount: 0,
                            lifecycleStage: 1,
                            queries: null,
                            injector: ns && ns.injector
                        }
                    }(0, r, function(t, e, n) {
                        return t.ngPrivateData || (t.ngPrivateData = function(t, e) {
                            return {
                                data: [],
                                directives: null,
                                firstTemplatePass: !0,
                                initHooks: null,
                                checkHooks: null,
                                contentHooks: null,
                                contentCheckHooks: null,
                                viewHooks: null,
                                viewCheckHooks: null,
                                destroyHooks: null,
                                pipeDestroyHooks: null,
                                hostBindings: null,
                                components: null,
                                directiveRegistry: "function" == typeof t ? t() : t,
                                pipeRegistry: "function" == typeof e ? e() : e,
                                currentMatches: null
                            }
                        }(e, n))
                    }(e, o || null, i || null), e, n), p = Za ? Qa : Qa && Qa.parent, f = (Za ? Ka : Qa && Qa.queries) || p && p.queries && p.queries.child(), d = function(t, e, n, r, o, i) {
                        return {
                            type: t,
                            native: r,
                            view: e,
                            parent: n,
                            child: null,
                            next: null,
                            nodeInjector: n ? n.nodeInjector : null,
                            data: o,
                            queries: i,
                            tNode: null,
                            pNextOrParent: null,
                            dynamicLContainerNode: null
                        }
                    }(l, ns, p, u, (h = null != c) ? c : null, f), 2 == (2 & l) && h && (ngDevMode && za(c.node, "LView.node should not have been initialized"), c.node = d), null != s && (ngDevMode && function(t, e) {
                        null == e && (e = Xa), Fa(e.length, t, "index " + t + " expected to be at the end of arr (length " + e.length + ")")
                    }(s), Xa[s] = d, s >= Ga.length ? Ga[s] = null : d.tNode = Ga[s], Za ? (Ka = null, Qa.view !== ns && 2 !== Qa.type || (ngDevMode && za(Qa.child, "previousOrParentNode's child should not have been set."), Qa.child = d)) : Qa && (ngDevMode && za(Qa.next, "previousOrParentNode's next property should not have been set " + s + "."), Qa.next = d, Qa.dynamicLContainerNode && (Qa.dynamicLContainerNode.next = d))), Qa = d, Za = !0, t = d, y = 1), a = os(t.data, t), e(y, n), as(), cs()
                } finally {
                    is(a), Za = m, Qa = g
                }
                return t
            }

            function cs() {
                for (var t = ns.child; null !== t; t = t.next)
                    if (0 !== t.dynamicViewCount && t.views)
                        for (var e = t, n = 0; n < e.views.length; n++) {
                            var r = e.views[n];
                            us(r, r.data.template, r.data.context, Ha)
                        }
            }

            function ps(t, e) {
                ngDevMode && ds(e);
                var n, r, o = Xa[e];
                ngDevMode && (r = 3, Ua(n = o, "should be called with a node"), Fa(n.type, r, "should be a " + function(t) {
                    return 1 == t ? "Projection" : 0 == t ? "Container" : 2 == t ? "View" : 3 == t ? "Element" : "<unknown>"
                }(r))), ngDevMode && Ua(o.data, "Component's host node should have an LView attached.");
                var i, a = o.data;
                8 == (8 & a.flags) && 6 & a.flags && (ngDevMode && ds(t, Ya), hs(a, o, ns.tView.directives[t], (i = Ya[t], Array.isArray(i) ? i[0] : i)))
            }

            function fs(t) {
                var e = ms(t);
                ngDevMode && Ua(e.data, "Component host node should be attached to an LView"), hs(e.data, e, e.view.tView.directives[e.tNode.flags >> 13], t)
            }

            function hs(t, e, n, r) {
                var o = os(t, e),
                    i = n.template;
                try {
                    i(1 & t.flags ? 3 : 2, r), as(), cs()
                } finally {
                    is(o)
                }
            }

            function ds(t, e) {
                null == e && (e = Xa), t >= (e ? e.length : 0) && Va("index expected to be a valid data index")
            }

            function ms(t) {
                ngDevMode && Ua(t, "expecting component got null");
                var e = t[Ja];
                return ngDevMode && Ua(t, "object is not a component"), e
            }
            o(function(t, e, n) {
                var r = $a.call(this, t.data, n) || this;
                return r._lViewNode = t, r
            }, $a = function() {
                function t(t, e) {
                    this._view = t, this.context = e
                }
                return t.prototype._setComponentContext = function(t, e) {
                    this._view = t, this.context = e
                }, t.prototype.destroy = function() {}, t.prototype.onDestroy = function(t) {}, t.prototype.markForCheck = function() {
                    ! function(t) {
                        for (var e = t; null != e.parent;) e.flags |= 4, e = e.parent;
                        var n, r;
                        e.flags |= 4, ngDevMode && Ua(e.context, "rootContext"), (n = e.context).clean == ts && (n.clean = new Promise(function(t) {
                            return r = t
                        }), n.scheduler(function() {
                            var t, e;
                            e = ms((t = function(t) {
                                    ngDevMode && Ua(t, "component");
                                    for (var e = ms(t).view; e.parent;) e = e.parent;
                                    return e
                                }(n.component)).context.component), ngDevMode && Ua(e.data, "Component host node should be attached to an LView"),
                                function(n, r, o, i) {
                                    var a = os(t, e);
                                    try {
                                        qa.begin && qa.begin(), ls(), ss(es), ps(0, 0)
                                    } finally {
                                        qa.end && qa.end(), is(a)
                                    }
                                }(), r(null), n.clean = ts
                        }))
                    }(this._view)
                }, t.prototype.detach = function() {
                    this._view.flags &= -9
                }, t.prototype.reattach = function() {
                    this._view.flags |= 8
                }, t.prototype.detectChanges = function() {
                    fs(this.context)
                }, t.prototype.checkNoChanges = function() {
                    ! function(t) {
                        rs = !0;
                        try {
                            fs(t)
                        } finally {
                            rs = !1
                        }
                    }(this.context)
                }, t
            }());
            var gs = function() {},
                ys = function() {
                    function t() {}
                    return t.prototype.triggerAnimation = function(t) {
                        return t.activatedRouteData.animation || null
                    }, t
                }(),
                vs = function() {},
                _s = new ht("Location Initialized"),
                bs = function() {},
                ws = new ht("appBaseHref"),
                Cs = function() {
                    function t(e) {
                        var n = this;
                        this._subject = new Le, this._platformStrategy = e;
                        var r = this._platformStrategy.getBaseHref();
                        this._baseHref = t.stripTrailingSlash(ks(r)), this._platformStrategy.onPopState(function(t) {
                            n._subject.emit({
                                url: n.path(!0),
                                pop: !0,
                                state: t.state,
                                type: t.type
                            })
                        })
                    }
                    return t.prototype.path = function(t) {
                        return void 0 === t && (t = !1), this.normalize(this._platformStrategy.path(t))
                    }, t.prototype.isCurrentPathEqualTo = function(e, n) {
                        return void 0 === n && (n = ""), this.path() == this.normalize(e + t.normalizeQueryParams(n))
                    }, t.prototype.normalize = function(e) {
                        return t.stripTrailingSlash(function(t, e) {
                            return t && e.startsWith(t) ? e.substring(t.length) : e
                        }(this._baseHref, ks(e)))
                    }, t.prototype.prepareExternalUrl = function(t) {
                        return t && "/" !== t[0] && (t = "/" + t), this._platformStrategy.prepareExternalUrl(t)
                    }, t.prototype.go = function(t, e, n) {
                        void 0 === e && (e = ""), void 0 === n && (n = null), this._platformStrategy.pushState(n, "", t, e)
                    }, t.prototype.replaceState = function(t, e, n) {
                        void 0 === e && (e = ""), void 0 === n && (n = null), this._platformStrategy.replaceState(n, "", t, e)
                    }, t.prototype.forward = function() {
                        this._platformStrategy.forward()
                    }, t.prototype.back = function() {
                        this._platformStrategy.back()
                    }, t.prototype.subscribe = function(t, e, n) {
                        return this._subject.subscribe({
                            next: t,
                            error: e,
                            complete: n
                        })
                    }, t.normalizeQueryParams = function(t) {
                        return t && "?" !== t[0] ? "?" + t : t
                    }, t.joinWithSlash = function(t, e) {
                        if (0 == t.length) return e;
                        if (0 == e.length) return t;
                        var n = 0;
                        return t.endsWith("/") && n++, e.startsWith("/") && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
                    }, t.stripTrailingSlash = function(t) {
                        var e = t.match(/#|\?|$/),
                            n = e && e.index || t.length;
                        return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n)
                    }, t
                }();

            function ks(t) {
                return t.replace(/\/index.html$/, "")
            }
            var Ss = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r._platformLocation = e, r._baseHref = "", null != n && (r._baseHref = n), r
                    }
                    return o(e, t), e.prototype.onPopState = function(t) {
                        this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
                    }, e.prototype.getBaseHref = function() {
                        return this._baseHref
                    }, e.prototype.path = function(t) {
                        void 0 === t && (t = !1);
                        var e = this._platformLocation.hash;
                        return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e
                    }, e.prototype.prepareExternalUrl = function(t) {
                        var e = Cs.joinWithSlash(this._baseHref, t);
                        return e.length > 0 ? "#" + e : e
                    }, e.prototype.pushState = function(t, e, n, r) {
                        var o = this.prepareExternalUrl(n + Cs.normalizeQueryParams(r));
                        0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.pushState(t, e, o)
                    }, e.prototype.replaceState = function(t, e, n, r) {
                        var o = this.prepareExternalUrl(n + Cs.normalizeQueryParams(r));
                        0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, o)
                    }, e.prototype.forward = function() {
                        this._platformLocation.forward()
                    }, e.prototype.back = function() {
                        this._platformLocation.back()
                    }, e
                }(bs),
                xs = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        if (r._platformLocation = e, null == n && (n = r._platformLocation.getBaseHrefFromDOM()), null == n) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                        return r._baseHref = n, r
                    }
                    return o(e, t), e.prototype.onPopState = function(t) {
                        this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
                    }, e.prototype.getBaseHref = function() {
                        return this._baseHref
                    }, e.prototype.prepareExternalUrl = function(t) {
                        return Cs.joinWithSlash(this._baseHref, t)
                    }, e.prototype.path = function(t) {
                        void 0 === t && (t = !1);
                        var e = this._platformLocation.pathname + Cs.normalizeQueryParams(this._platformLocation.search),
                            n = this._platformLocation.hash;
                        return n && t ? "" + e + n : e
                    }, e.prototype.pushState = function(t, e, n, r) {
                        var o = this.prepareExternalUrl(n + Cs.normalizeQueryParams(r));
                        this._platformLocation.pushState(t, e, o)
                    }, e.prototype.replaceState = function(t, e, n, r) {
                        var o = this.prepareExternalUrl(n + Cs.normalizeQueryParams(r));
                        this._platformLocation.replaceState(t, e, o)
                    }, e.prototype.forward = function() {
                        this._platformLocation.forward()
                    }, e.prototype.back = function() {
                        this._platformLocation.back()
                    }, e
                }(bs),
                Es = void 0,
                Ps = ["en", [
                        ["a", "p"],
                        ["AM", "PM"], Es
                    ],
                    [
                        ["AM", "PM"], Es, Es
                    ],
                    [
                        ["S", "M", "T", "W", "T", "F", "S"],
                        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                    ], Es, [
                        ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    ], Es, [
                        ["B", "A"],
                        ["BC", "AD"],
                        ["Before Christ", "Anno Domini"]
                    ], 0, [6, 0],
                    ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
                    ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
                    ["{1}, {0}", Es, "{1} 'at' {0}", Es],
                    [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
                    ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "$", "US Dollar", {},
                    function(t) {
                        var e = Math.floor(Math.abs(t)),
                            n = t.toString().replace(/^[^.]*\.?/, "").length;
                        return 1 === e && 0 === n ? 1 : 5
                    }
                ],
                Os = {},
                Ms = function(t) {
                    return t[t.Zero = 0] = "Zero", t[t.One = 1] = "One", t[t.Two = 2] = "Two", t[t.Few = 3] = "Few", t[t.Many = 4] = "Many", t[t.Other = 5] = "Other", t
                }({}),
                Ts = new ht("UseV4Plurals"),
                As = function() {},
                Is = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.locale = e, r.deprecatedPluralFn = n, r
                    }
                    return o(e, t), e.prototype.getPluralCategory = function(t, e) {
                        switch (this.deprecatedPluralFn ? this.deprecatedPluralFn(e || this.locale, t) : function(t) {
                            return function(t) {
                                var e = t.toLowerCase().replace(/_/g, "-"),
                                    n = Os[e];
                                if (n) return n;
                                var r = e.split("-")[0];
                                if (n = Os[r]) return n;
                                if ("en" === r) return Ps;
                                throw new Error('Missing locale data for the locale "' + t + '".')
                            }(t)[18]
                        }(e || this.locale)(t)) {
                            case Ms.Zero:
                                return "zero";
                            case Ms.One:
                                return "one";
                            case Ms.Two:
                                return "two";
                            case Ms.Few:
                                return "few";
                            case Ms.Many:
                                return "many";
                            default:
                                return "other"
                        }
                    }, e
                }(As),
                js = function() {
                    function t(t, e, n, r) {
                        this._iterableDiffers = t, this._keyValueDiffers = e, this._ngEl = n, this._renderer = r, this._initialClasses = []
                    }
                    return Object.defineProperty(t.prototype, "klass", {
                        set: function(t) {
                            this._removeClasses(this._initialClasses), this._initialClasses = "string" == typeof t ? t.split(/\s+/) : [], this._applyClasses(this._initialClasses), this._applyClasses(this._rawClass)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "ngClass", {
                        set: function(t) {
                            this._removeClasses(this._rawClass), this._applyClasses(this._initialClasses), this._iterableDiffer = null, this._keyValueDiffer = null, this._rawClass = "string" == typeof t ? t.split(/\s+/) : t, this._rawClass && (On(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create())
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.ngDoCheck = function() {
                        if (this._iterableDiffer) {
                            var t = this._iterableDiffer.diff(this._rawClass);
                            t && this._applyIterableChanges(t)
                        } else if (this._keyValueDiffer) {
                            var e = this._keyValueDiffer.diff(this._rawClass);
                            e && this._applyKeyValueChanges(e)
                        }
                    }, t.prototype._applyKeyValueChanges = function(t) {
                        var e = this;
                        t.forEachAddedItem(function(t) {
                            return e._toggleClass(t.key, t.currentValue)
                        }), t.forEachChangedItem(function(t) {
                            return e._toggleClass(t.key, t.currentValue)
                        }), t.forEachRemovedItem(function(t) {
                            t.previousValue && e._toggleClass(t.key, !1)
                        })
                    }, t.prototype._applyIterableChanges = function(t) {
                        var e = this;
                        t.forEachAddedItem(function(t) {
                            if ("string" != typeof t.item) throw new Error("NgClass can only toggle CSS classes expressed as strings, got " + Et(t.item));
                            e._toggleClass(t.item, !0)
                        }), t.forEachRemovedItem(function(t) {
                            return e._toggleClass(t.item, !1)
                        })
                    }, t.prototype._applyClasses = function(t) {
                        var e = this;
                        t && (Array.isArray(t) || t instanceof Set ? t.forEach(function(t) {
                            return e._toggleClass(t, !0)
                        }) : Object.keys(t).forEach(function(n) {
                            return e._toggleClass(n, !!t[n])
                        }))
                    }, t.prototype._removeClasses = function(t) {
                        var e = this;
                        t && (Array.isArray(t) || t instanceof Set ? t.forEach(function(t) {
                            return e._toggleClass(t, !1)
                        }) : Object.keys(t).forEach(function(t) {
                            return e._toggleClass(t, !1)
                        }))
                    }, t.prototype._toggleClass = function(t, e) {
                        var n = this;
                        (t = t.trim()) && t.split(/\s+/g).forEach(function(t) {
                            e ? n._renderer.addClass(n._ngEl.nativeElement, t) : n._renderer.removeClass(n._ngEl.nativeElement, t)
                        })
                    }, t
                }(),
                Ns = function() {
                    function t(t, e, n, r) {
                        this.$implicit = t, this.ngForOf = e, this.index = n, this.count = r
                    }
                    return Object.defineProperty(t.prototype, "first", {
                        get: function() {
                            return 0 === this.index
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "last", {
                        get: function() {
                            return this.index === this.count - 1
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "even", {
                        get: function() {
                            return this.index % 2 == 0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "odd", {
                        get: function() {
                            return !this.even
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(),
                Ds = function() {
                    function t(t, e, n) {
                        this._viewContainer = t, this._template = e, this._differs = n, this._differ = null
                    }
                    return Object.defineProperty(t.prototype, "ngForTrackBy", {
                        get: function() {
                            return this._trackByFn
                        },
                        set: function(t) {
                            $e() && null != t && "function" != typeof t && console && console.warn && console.warn("trackBy must be a function, but received " + JSON.stringify(t) + ". See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information."), this._trackByFn = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "ngForTemplate", {
                        set: function(t) {
                            t && (this._template = t)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.ngOnChanges = function(t) {
                        if ("ngForOf" in t) {
                            var e = t.ngForOf.currentValue;
                            if (!this._differ && e) try {
                                this._differ = this._differs.find(e).create(this.ngForTrackBy)
                            } catch (t) {
                                throw new Error("Cannot find a differ supporting object '" + e + "' of type '" + ((n = e).name || typeof n) + "'. NgFor only supports binding to Iterables such as Arrays.")
                            }
                        }
                        var n
                    }, t.prototype.ngDoCheck = function() {
                        if (this._differ) {
                            var t = this._differ.diff(this.ngForOf);
                            t && this._applyChanges(t)
                        }
                    }, t.prototype._applyChanges = function(t) {
                        var e = this,
                            n = [];
                        t.forEachOperation(function(t, r, o) {
                            if (null == t.previousIndex) {
                                var i = e._viewContainer.createEmbeddedView(e._template, new Ns(null, e.ngForOf, -1, -1), o),
                                    a = new Rs(t, i);
                                n.push(a)
                            } else null == o ? e._viewContainer.remove(r) : (i = e._viewContainer.get(r), e._viewContainer.move(i, o), a = new Rs(t, i), n.push(a))
                        });
                        for (var r = 0; r < n.length; r++) this._perViewChange(n[r].view, n[r].record);
                        r = 0;
                        for (var o = this._viewContainer.length; r < o; r++) {
                            var i = this._viewContainer.get(r);
                            i.context.index = r, i.context.count = o
                        }
                        t.forEachIdentityChange(function(t) {
                            e._viewContainer.get(t.currentIndex).context.$implicit = t.item
                        })
                    }, t.prototype._perViewChange = function(t, e) {
                        t.context.$implicit = e.item
                    }, t
                }(),
                Rs = function(t, e) {
                    this.record = t, this.view = e
                },
                Ls = function() {
                    function t(t, e) {
                        this._viewContainer = t, this._context = new Fs, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = e
                    }
                    return Object.defineProperty(t.prototype, "ngIf", {
                        set: function(t) {
                            this._context.$implicit = this._context.ngIf = t, this._updateView()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "ngIfThen", {
                        set: function(t) {
                            zs("ngIfThen", t), this._thenTemplateRef = t, this._thenViewRef = null, this._updateView()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "ngIfElse", {
                        set: function(t) {
                            zs("ngIfElse", t), this._elseTemplateRef = t, this._elseViewRef = null, this._updateView()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype._updateView = function() {
                        this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
                    }, t
                }(),
                Fs = function() {
                    this.$implicit = null, this.ngIf = null
                };

            function zs(t, e) {
                if (e && !e.createEmbeddedView) throw new Error(t + " must be a TemplateRef, but received '" + Et(e) + "'.")
            }
            var Us = function() {
                    function t(t, e, n) {
                        this._differs = t, this._ngEl = e, this._renderer = n
                    }
                    return Object.defineProperty(t.prototype, "ngStyle", {
                        set: function(t) {
                            this._ngStyle = t, !this._differ && t && (this._differ = this._differs.find(t).create())
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.ngDoCheck = function() {
                        if (this._differ) {
                            var t = this._differ.diff(this._ngStyle);
                            t && this._applyChanges(t)
                        }
                    }, t.prototype._applyChanges = function(t) {
                        var e = this;
                        t.forEachRemovedItem(function(t) {
                            return e._setStyle(t.key, null)
                        }), t.forEachAddedItem(function(t) {
                            return e._setStyle(t.key, t.currentValue)
                        }), t.forEachChangedItem(function(t) {
                            return e._setStyle(t.key, t.currentValue)
                        })
                    }, t.prototype._setStyle = function(t, e) {
                        var n = s(t.split("."), 2),
                            r = n[0],
                            o = n[1];
                        null != (e = null != e && o ? "" + e + o : e) ? this._renderer.setStyle(this._ngEl.nativeElement, r, e) : this._renderer.removeStyle(this._ngEl.nativeElement, r)
                    }, t
                }(),
                Vs = function() {},
                Bs = new ht("DocumentToken"),
                Hs = function() {
                    function t() {
                        this.appEscCancelation = new Le
                    }
                    return t.prototype.onKeydownHandler = function(t) {
                        "Escape" === t.key && this.appEscCancelation.emit({
                            msg: "Escape Btn Clicked",
                            event: t
                        })
                    }, t
                }(),
                qs = function() {
                    function t(t) {
                        this.router = t, this.navLinks = [{
                            displayName: "Portfolio",
                            url: "/portfolio"
                        }, {
                            displayName: "About & Skills",
                            url: "/about"
                        }, {
                            displayName: "Contacts & Profiles",
                            url: "/profiles"
                        }, {
                            displayName: "Profile Card",
                            url: "/profile-card"
                        }], this.cancellation = new Le
                    }
                    return t.prototype.ngOnInit = function() {}, t.prototype.onBgClick = function() {
                        this.cancellation.emit()
                    }, t.prototype.onNavItemClick = function(t, e) {
                        t.stopPropagation(), this.router.navigateByUrl(e)
                    }, t
                }(),
                Qs = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n._value = e, n
                    }
                    return o(e, t), Object.defineProperty(e.prototype, "value", {
                        get: function() {
                            return this.getValue()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype._subscribe = function(e) {
                        var n = t.prototype._subscribe.call(this, e);
                        return n && !n.closed && e.next(this._value), n
                    }, e.prototype.getValue = function() {
                        if (this.hasError) throw this.thrownError;
                        if (this.closed) throw new tt;
                        return this._value
                    }, e.prototype.next = function(e) {
                        t.prototype.next.call(this, this._value = e)
                    }, e
                }(rt),
                Zs = new T(function(t) {
                    return t.complete()
                });

            function Gs(t) {
                return t ? function(t) {
                    return new T(function(e) {
                        return t.schedule(function() {
                            return e.complete()
                        })
                    })
                }(t) : Zs
            }

            function Ks() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n, r, o = t[t.length - 1];
                switch (I(o) ? t.pop() : o = void 0, t.length) {
                    case 0:
                        return Gs(o);
                    case 1:
                        return o ? G(t, o) : (n = t[0], (r = new T(function(t) {
                            t.next(n), t.complete()
                        }))._isScalar = !0, r.value = n, r);
                    default:
                        return G(t, o)
                }
            }
            var Ws = function(t) {
                function e() {
                    var n = t.call(this, "no elements in sequence") || this;
                    return n.name = "EmptyError", Object.setPrototypeOf(n, e.prototype), n
                }
                return o(e, t), e
            }(Error);

            function Xs(t, e) {
                return W(t, e, 1)
            }

            function Ys(t, e) {
                return function(n) {
                    return n.lift(new $s(t, e))
                }
            }
            var $s = function() {
                    function t(t, e) {
                        this.predicate = t, this.thisArg = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new Js(t, this.predicate, this.thisArg))
                    }, t
                }(),
                Js = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return o.predicate = n, o.thisArg = r, o.count = 0, o
                    }
                    return o(e, t), e.prototype._next = function(t) {
                        var e;
                        try {
                            e = this.predicate.call(this.thisArg, t, this.count++)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        e && this.destination.next(t)
                    }, e
                }(S),
                tl = function(t) {
                    function e() {
                        var n = t.call(this, "argument out of range") || this;
                        return n.name = "ArgumentOutOfRangeError", Object.setPrototypeOf(n, e.prototype), n
                    }
                    return o(e, t), e
                }(Error);

            function el(t) {
                return function(e) {
                    return 0 === t ? Gs() : e.lift(new nl(t))
                }
            }
            var nl = function() {
                    function t(t) {
                        if (this.total = t, this.total < 0) throw new tl
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new rl(t, this.total))
                    }, t
                }(),
                rl = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.total = n, r.ring = new Array, r.count = 0, r
                    }
                    return o(e, t), e.prototype._next = function(t) {
                        var e = this.ring,
                            n = this.total,
                            r = this.count++;
                        e.length < n ? e.push(t) : e[r % n] = t
                    }, e.prototype._complete = function() {
                        var t = this.destination,
                            e = this.count;
                        if (e > 0)
                            for (var n = this.count >= this.total ? this.total : this.count, r = this.ring, o = 0; o < n; o++) {
                                var i = e++ % n;
                                t.next(r[i])
                            }
                        t.complete()
                    }, e
                }(S),
                ol = function() {
                    function t(t, e, n) {
                        this.nextOrObserver = t, this.error = e, this.complete = n
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new il(t, this.nextOrObserver, this.error, this.complete))
                    }, t
                }(),
                il = function(t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e) || this;
                        return i._tapNext = P, i._tapError = P, i._tapComplete = P, i._tapError = r || P, i._tapComplete = o || P, u(n) ? (i._context = i, i._tapNext = n) : n && (i._context = n, i._tapNext = n.next || P, i._tapError = n.error || P, i._tapComplete = n.complete || P), i
                    }
                    return o(e, t), e.prototype._next = function(t) {
                        try {
                            this._tapNext.call(this._context, t)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        this.destination.next(t)
                    }, e.prototype._error = function(t) {
                        try {
                            this._tapError.call(this._context, t)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        this.destination.error(t)
                    }, e.prototype._complete = function() {
                        try {
                            this._tapComplete.call(this._context)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        return this.destination.complete()
                    }, e
                }(S),
                al = function(t) {
                    return void 0 === t && (t = sl), e = {
                            hasValue: !1,
                            next: function() {
                                this.hasValue = !0
                            },
                            complete: function() {
                                if (!this.hasValue) throw t()
                            }
                        },
                        function(t) {
                            return t.lift(new ol(e, void 0, void 0))
                        };
                    var e
                };

            function sl() {
                return new Ws
            }

            function ll(t) {
                return void 0 === t && (t = null),
                    function(e) {
                        return e.lift(new ul(t))
                    }
            }
            var ul = function() {
                    function t(t) {
                        this.defaultValue = t
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new cl(t, this.defaultValue))
                    }, t
                }(),
                cl = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.defaultValue = n, r.isEmpty = !0, r
                    }
                    return o(e, t), e.prototype._next = function(t) {
                        this.isEmpty = !1, this.destination.next(t)
                    }, e.prototype._complete = function() {
                        this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
                    }, e
                }(S);

            function pl(t, e) {
                var n = arguments.length >= 2;
                return function(r) {
                    return r.pipe(t ? Ys(function(e, n) {
                        return t(e, n, r)
                    }) : $, el(1), n ? ll(e) : al(function() {
                        return new Ws
                    }))
                }
            }

            function fl(t) {
                return function(e) {
                    var n = new hl(t),
                        r = e.lift(n);
                    return n.caught = r
                }
            }
            var hl = function() {
                    function t(t) {
                        this.selector = t
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new dl(t, this.selector, this.caught))
                    }, t
                }(),
                dl = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return o.selector = n, o.caught = r, o
                    }
                    return o(e, t), e.prototype.error = function(e) {
                        if (!this.isStopped) {
                            var n = void 0;
                            try {
                                n = this.selector(e, this.caught)
                            } catch (e) {
                                return void t.prototype.error.call(this, e)
                            }
                            this._unsubscribeAndRecycle(), this.add(B(this, n))
                        }
                    }, e
                }(H);

            function ml(t, e) {
                return function(n) {
                    return n.lift(new gl(t, e, n))
                }
            }
            var gl = function() {
                    function t(t, e, n) {
                        this.predicate = t, this.thisArg = e, this.source = n
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new yl(t, this.predicate, this.thisArg, this.source))
                    }, t
                }(),
                yl = function(t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e) || this;
                        return i.predicate = n, i.thisArg = r, i.source = o, i.index = 0, i.thisArg = r || i, i
                    }
                    return o(e, t), e.prototype.notifyComplete = function(t) {
                        this.destination.next(t), this.destination.complete()
                    }, e.prototype._next = function(t) {
                        var e = !1;
                        try {
                            e = this.predicate.call(this.thisArg, t, this.index++, this.source)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        e || this.notifyComplete(!1)
                    }, e.prototype._complete = function() {
                        this.notifyComplete(!0)
                    }, e
                }(S),
                vl = function() {
                    function t(t) {
                        if (this.total = t, this.total < 0) throw new tl
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new _l(t, this.total))
                    }, t
                }(),
                _l = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.total = n, r.count = 0, r
                    }
                    return o(e, t), e.prototype._next = function(t) {
                        var e = this.total,
                            n = ++this.count;
                        n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
                    }, e
                }(S);

            function bl(t, e) {
                var n = arguments.length >= 2;
                return function(r) {
                    return r.pipe(t ? Ys(function(e, n) {
                        return t(e, n, r)
                    }) : $, function(t) {
                        return t.lift(new vl(1))
                    }, n ? ll(e) : al(function() {
                        return new Ws
                    }))
                }
            }

            function wl() {
                return J(1)
            }

            function Cl(t, e) {
                var n = !1;
                return arguments.length >= 2 && (n = !0),
                    function(r) {
                        return r.lift(new kl(t, e, n))
                    }
            }
            var kl = function() {
                    function t(t, e, n) {
                        void 0 === n && (n = !1), this.accumulator = t, this.seed = e, this.hasSeed = n
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new Sl(t, this.accumulator, this.seed, this.hasSeed))
                    }, t
                }(),
                Sl = function(t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e) || this;
                        return i.accumulator = n, i._seed = r, i.hasSeed = o, i.index = 0, i
                    }
                    return o(e, t), Object.defineProperty(e.prototype, "seed", {
                        get: function() {
                            return this._seed
                        },
                        set: function(t) {
                            this.hasSeed = !0, this._seed = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype._next = function(t) {
                        if (this.hasSeed) return this._tryNext(t);
                        this.seed = t, this.destination.next(t)
                    }, e.prototype._tryNext = function(t) {
                        var e, n = this.index++;
                        try {
                            e = this.accumulator(this.seed, t, n)
                        } catch (t) {
                            this.destination.error(t)
                        }
                        this.seed = e, this.destination.next(e)
                    }, e
                }(S),
                xl = null;

            function El() {
                return xl
            }
            var Pl, Ol = {
                    class: "className",
                    innerHtml: "innerHTML",
                    readonly: "readOnly",
                    tabindex: "tabIndex"
                },
                Ml = {
                    "\b": "Backspace",
                    "\t": "Tab",
                    "\x7f": "Delete",
                    "\x1b": "Escape",
                    Del: "Delete",
                    Esc: "Escape",
                    Left: "ArrowLeft",
                    Right: "ArrowRight",
                    Up: "ArrowUp",
                    Down: "ArrowDown",
                    Menu: "ContextMenu",
                    Scroll: "ScrollLock",
                    Win: "OS"
                },
                Tl = {
                    A: "1",
                    B: "2",
                    C: "3",
                    D: "4",
                    E: "5",
                    F: "6",
                    G: "7",
                    H: "8",
                    I: "9",
                    J: "*",
                    K: "+",
                    M: "-",
                    N: ".",
                    O: "/",
                    "`": "0",
                    "\x90": "NumLock"
                };
            bt.Node && (Pl = bt.Node.prototype.contains || function(t) {
                return !!(16 & this.compareDocumentPosition(t))
            });
            var Al, Il = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.parse = function(t) {
                        throw new Error("parse not implemented")
                    }, e.makeCurrent = function() {
                        var t;
                        t = new e, xl || (xl = t)
                    }, e.prototype.hasProperty = function(t, e) {
                        return e in t
                    }, e.prototype.setProperty = function(t, e, n) {
                        t[e] = n
                    }, e.prototype.getProperty = function(t, e) {
                        return t[e]
                    }, e.prototype.invoke = function(t, e, n) {
                        var r;
                        (r = t)[e].apply(r, l(n))
                    }, e.prototype.logError = function(t) {
                        window.console && (console.error ? console.error(t) : console.log(t))
                    }, e.prototype.log = function(t) {
                        window.console && window.console.log && window.console.log(t)
                    }, e.prototype.logGroup = function(t) {
                        window.console && window.console.group && window.console.group(t)
                    }, e.prototype.logGroupEnd = function() {
                        window.console && window.console.groupEnd && window.console.groupEnd()
                    }, Object.defineProperty(e.prototype, "attrToPropMap", {
                        get: function() {
                            return Ol
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.contains = function(t, e) {
                        return Pl.call(t, e)
                    }, e.prototype.querySelector = function(t, e) {
                        return t.querySelector(e)
                    }, e.prototype.querySelectorAll = function(t, e) {
                        return t.querySelectorAll(e)
                    }, e.prototype.on = function(t, e, n) {
                        t.addEventListener(e, n, !1)
                    }, e.prototype.onAndCancel = function(t, e, n) {
                        return t.addEventListener(e, n, !1),
                            function() {
                                t.removeEventListener(e, n, !1)
                            }
                    }, e.prototype.dispatchEvent = function(t, e) {
                        t.dispatchEvent(e)
                    }, e.prototype.createMouseEvent = function(t) {
                        var e = this.getDefaultDocument().createEvent("MouseEvent");
                        return e.initEvent(t, !0, !0), e
                    }, e.prototype.createEvent = function(t) {
                        var e = this.getDefaultDocument().createEvent("Event");
                        return e.initEvent(t, !0, !0), e
                    }, e.prototype.preventDefault = function(t) {
                        t.preventDefault(), t.returnValue = !1
                    }, e.prototype.isPrevented = function(t) {
                        return t.defaultPrevented || null != t.returnValue && !t.returnValue
                    }, e.prototype.getInnerHTML = function(t) {
                        return t.innerHTML
                    }, e.prototype.getTemplateContent = function(t) {
                        return "content" in t && this.isTemplateElement(t) ? t.content : null
                    }, e.prototype.getOuterHTML = function(t) {
                        return t.outerHTML
                    }, e.prototype.nodeName = function(t) {
                        return t.nodeName
                    }, e.prototype.nodeValue = function(t) {
                        return t.nodeValue
                    }, e.prototype.type = function(t) {
                        return t.type
                    }, e.prototype.content = function(t) {
                        return this.hasProperty(t, "content") ? t.content : t
                    }, e.prototype.firstChild = function(t) {
                        return t.firstChild
                    }, e.prototype.nextSibling = function(t) {
                        return t.nextSibling
                    }, e.prototype.parentElement = function(t) {
                        return t.parentNode
                    }, e.prototype.childNodes = function(t) {
                        return t.childNodes
                    }, e.prototype.childNodesAsList = function(t) {
                        for (var e = t.childNodes, n = new Array(e.length), r = 0; r < e.length; r++) n[r] = e[r];
                        return n
                    }, e.prototype.clearNodes = function(t) {
                        for (; t.firstChild;) t.removeChild(t.firstChild)
                    }, e.prototype.appendChild = function(t, e) {
                        t.appendChild(e)
                    }, e.prototype.removeChild = function(t, e) {
                        t.removeChild(e)
                    }, e.prototype.replaceChild = function(t, e, n) {
                        t.replaceChild(e, n)
                    }, e.prototype.remove = function(t) {
                        return t.parentNode && t.parentNode.removeChild(t), t
                    }, e.prototype.insertBefore = function(t, e, n) {
                        t.insertBefore(n, e)
                    }, e.prototype.insertAllBefore = function(t, e, n) {
                        n.forEach(function(n) {
                            return t.insertBefore(n, e)
                        })
                    }, e.prototype.insertAfter = function(t, e, n) {
                        t.insertBefore(n, e.nextSibling)
                    }, e.prototype.setInnerHTML = function(t, e) {
                        t.innerHTML = e
                    }, e.prototype.getText = function(t) {
                        return t.textContent
                    }, e.prototype.setText = function(t, e) {
                        t.textContent = e
                    }, e.prototype.getValue = function(t) {
                        return t.value
                    }, e.prototype.setValue = function(t, e) {
                        t.value = e
                    }, e.prototype.getChecked = function(t) {
                        return t.checked
                    }, e.prototype.setChecked = function(t, e) {
                        t.checked = e
                    }, e.prototype.createComment = function(t) {
                        return this.getDefaultDocument().createComment(t)
                    }, e.prototype.createTemplate = function(t) {
                        var e = this.getDefaultDocument().createElement("template");
                        return e.innerHTML = t, e
                    }, e.prototype.createElement = function(t, e) {
                        return (e = e || this.getDefaultDocument()).createElement(t)
                    }, e.prototype.createElementNS = function(t, e, n) {
                        return (n = n || this.getDefaultDocument()).createElementNS(t, e)
                    }, e.prototype.createTextNode = function(t, e) {
                        return (e = e || this.getDefaultDocument()).createTextNode(t)
                    }, e.prototype.createScriptTag = function(t, e, n) {
                        var r = (n = n || this.getDefaultDocument()).createElement("SCRIPT");
                        return r.setAttribute(t, e), r
                    }, e.prototype.createStyleElement = function(t, e) {
                        var n = (e = e || this.getDefaultDocument()).createElement("style");
                        return this.appendChild(n, this.createTextNode(t, e)), n
                    }, e.prototype.createShadowRoot = function(t) {
                        return t.createShadowRoot()
                    }, e.prototype.getShadowRoot = function(t) {
                        return t.shadowRoot
                    }, e.prototype.getHost = function(t) {
                        return t.host
                    }, e.prototype.clone = function(t) {
                        return t.cloneNode(!0)
                    }, e.prototype.getElementsByClassName = function(t, e) {
                        return t.getElementsByClassName(e)
                    }, e.prototype.getElementsByTagName = function(t, e) {
                        return t.getElementsByTagName(e)
                    }, e.prototype.classList = function(t) {
                        return Array.prototype.slice.call(t.classList, 0)
                    }, e.prototype.addClass = function(t, e) {
                        t.classList.add(e)
                    }, e.prototype.removeClass = function(t, e) {
                        t.classList.remove(e)
                    }, e.prototype.hasClass = function(t, e) {
                        return t.classList.contains(e)
                    }, e.prototype.setStyle = function(t, e, n) {
                        t.style[e] = n
                    }, e.prototype.removeStyle = function(t, e) {
                        t.style[e] = ""
                    }, e.prototype.getStyle = function(t, e) {
                        return t.style[e]
                    }, e.prototype.hasStyle = function(t, e, n) {
                        var r = this.getStyle(t, e) || "";
                        return n ? r == n : r.length > 0
                    }, e.prototype.tagName = function(t) {
                        return t.tagName
                    }, e.prototype.attributeMap = function(t) {
                        for (var e = new Map, n = t.attributes, r = 0; r < n.length; r++) {
                            var o = n.item(r);
                            e.set(o.name, o.value)
                        }
                        return e
                    }, e.prototype.hasAttribute = function(t, e) {
                        return t.hasAttribute(e)
                    }, e.prototype.hasAttributeNS = function(t, e, n) {
                        return t.hasAttributeNS(e, n)
                    }, e.prototype.getAttribute = function(t, e) {
                        return t.getAttribute(e)
                    }, e.prototype.getAttributeNS = function(t, e, n) {
                        return t.getAttributeNS(e, n)
                    }, e.prototype.setAttribute = function(t, e, n) {
                        t.setAttribute(e, n)
                    }, e.prototype.setAttributeNS = function(t, e, n, r) {
                        t.setAttributeNS(e, n, r)
                    }, e.prototype.removeAttribute = function(t, e) {
                        t.removeAttribute(e)
                    }, e.prototype.removeAttributeNS = function(t, e, n) {
                        t.removeAttributeNS(e, n)
                    }, e.prototype.templateAwareRoot = function(t) {
                        return this.isTemplateElement(t) ? this.content(t) : t
                    }, e.prototype.createHtmlDocument = function() {
                        return document.implementation.createHTMLDocument("fakeTitle")
                    }, e.prototype.getDefaultDocument = function() {
                        return document
                    }, e.prototype.getBoundingClientRect = function(t) {
                        try {
                            return t.getBoundingClientRect()
                        } catch (t) {
                            return {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0
                            }
                        }
                    }, e.prototype.getTitle = function(t) {
                        return t.title
                    }, e.prototype.setTitle = function(t, e) {
                        t.title = e || ""
                    }, e.prototype.elementMatches = function(t, e) {
                        return !!this.isElementNode(t) && (t.matches && t.matches(e) || t.msMatchesSelector && t.msMatchesSelector(e) || t.webkitMatchesSelector && t.webkitMatchesSelector(e))
                    }, e.prototype.isTemplateElement = function(t) {
                        return this.isElementNode(t) && "TEMPLATE" === t.nodeName
                    }, e.prototype.isTextNode = function(t) {
                        return t.nodeType === Node.TEXT_NODE
                    }, e.prototype.isCommentNode = function(t) {
                        return t.nodeType === Node.COMMENT_NODE
                    }, e.prototype.isElementNode = function(t) {
                        return t.nodeType === Node.ELEMENT_NODE
                    }, e.prototype.hasShadowRoot = function(t) {
                        return null != t.shadowRoot && t instanceof HTMLElement
                    }, e.prototype.isShadowRoot = function(t) {
                        return t instanceof DocumentFragment
                    }, e.prototype.importIntoDoc = function(t) {
                        return document.importNode(this.templateAwareRoot(t), !0)
                    }, e.prototype.adoptNode = function(t) {
                        return document.adoptNode(t)
                    }, e.prototype.getHref = function(t) {
                        return t.getAttribute("href")
                    }, e.prototype.getEventKey = function(t) {
                        var e = t.key;
                        if (null == e) {
                            if (null == (e = t.keyIdentifier)) return "Unidentified";
                            e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)), 3 === t.location && Tl.hasOwnProperty(e) && (e = Tl[e]))
                        }
                        return Ml[e] || e
                    }, e.prototype.getGlobalEventTarget = function(t, e) {
                        return "window" === e ? window : "document" === e ? t : "body" === e ? t.body : null
                    }, e.prototype.getHistory = function() {
                        return window.history
                    }, e.prototype.getLocation = function() {
                        return window.location
                    }, e.prototype.getBaseHref = function(t) {
                        var e, n = jl || (jl = document.querySelector("base")) ? jl.getAttribute("href") : null;
                        return null == n ? null : (e = n, Al || (Al = document.createElement("a")), Al.setAttribute("href", e), "/" === Al.pathname.charAt(0) ? Al.pathname : "/" + Al.pathname)
                    }, e.prototype.resetBaseElement = function() {
                        jl = null
                    }, e.prototype.getUserAgent = function() {
                        return window.navigator.userAgent
                    }, e.prototype.setData = function(t, e, n) {
                        this.setAttribute(t, "data-" + e, n)
                    }, e.prototype.getData = function(t, e) {
                        return this.getAttribute(t, "data-" + e)
                    }, e.prototype.getComputedStyle = function(t) {
                        return getComputedStyle(t)
                    }, e.prototype.supportsWebAnimation = function() {
                        return "function" == typeof Element.prototype.animate
                    }, e.prototype.performanceNow = function() {
                        return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
                    }, e.prototype.supportsCookies = function() {
                        return !0
                    }, e.prototype.getCookie = function(t) {
                        return function(t, e) {
                            e = encodeURIComponent(e);
                            try {
                                for (var n = a(t.split(";")), r = n.next(); !r.done; r = n.next()) {
                                    var o = r.value,
                                        i = o.indexOf("="),
                                        l = s(-1 == i ? [o, ""] : [o.slice(0, i), o.slice(i + 1)], 2),
                                        u = l[1];
                                    if (l[0].trim() === e) return decodeURIComponent(u)
                                }
                            } catch (t) {
                                c = {
                                    error: t
                                }
                            } finally {
                                try {
                                    r && !r.done && (p = n.return) && p.call(n)
                                } finally {
                                    if (c) throw c.error
                                }
                            }
                            return null;
                            var c, p
                        }(document.cookie, t)
                    }, e.prototype.setCookie = function(t, e) {
                        document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                    }, e
                }(function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        e._animationPrefix = null, e._transitionEnd = null;
                        try {
                            var n = e.createElement("div", document);
                            if (null != e.getStyle(n, "animationName")) e._animationPrefix = "";
                            else
                                for (var r = ["Webkit", "Moz", "O", "ms"], o = 0; o < r.length; o++)
                                    if (null != e.getStyle(n, r[o] + "AnimationName")) {
                                        e._animationPrefix = "-" + r[o].toLowerCase() + "-";
                                        break
                                    } var i = {
                                WebkitTransition: "webkitTransitionEnd",
                                MozTransition: "transitionend",
                                OTransition: "oTransitionEnd otransitionend",
                                transition: "transitionend"
                            };
                            Object.keys(i).forEach(function(t) {
                                null != e.getStyle(n, t) && (e._transitionEnd = i[t])
                            })
                        } catch (t) {
                            e._animationPrefix = null, e._transitionEnd = null
                        }
                        return e
                    }
                    return o(e, t), e.prototype.getDistributedNodes = function(t) {
                        return t.getDistributedNodes()
                    }, e.prototype.resolveAndSetHref = function(t, e, n) {
                        t.href = null == n ? e : e + "/../" + n
                    }, e.prototype.supportsDOMEvents = function() {
                        return !0
                    }, e.prototype.supportsNativeShadowDOM = function() {
                        return "function" == typeof document.body.createShadowRoot
                    }, e.prototype.getAnimationPrefix = function() {
                        return this._animationPrefix ? this._animationPrefix : ""
                    }, e.prototype.getTransitionEnd = function() {
                        return this._transitionEnd ? this._transitionEnd : ""
                    }, e.prototype.supportsAnimation = function() {
                        return null != this._animationPrefix && null != this._transitionEnd
                    }, e
                }(function() {
                    function t() {
                        this.resourceLoaderType = null
                    }
                    return Object.defineProperty(t.prototype, "attrToPropMap", {
                        get: function() {
                            return this._attrToPropMap
                        },
                        set: function(t) {
                            this._attrToPropMap = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }())),
                jl = null,
                Nl = Bs;

            function Dl() {
                return !!window.history.pushState
            }
            var Rl = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n._doc = e, n._init(), n
                    }
                    return o(e, t), e.prototype._init = function() {
                        this.location = El().getLocation(), this._history = El().getHistory()
                    }, e.prototype.getBaseHrefFromDOM = function() {
                        return El().getBaseHref(this._doc)
                    }, e.prototype.onPopState = function(t) {
                        El().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", t, !1)
                    }, e.prototype.onHashChange = function(t) {
                        El().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", t, !1)
                    }, Object.defineProperty(e.prototype, "pathname", {
                        get: function() {
                            return this.location.pathname
                        },
                        set: function(t) {
                            this.location.pathname = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "search", {
                        get: function() {
                            return this.location.search
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "hash", {
                        get: function() {
                            return this.location.hash
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.pushState = function(t, e, n) {
                        Dl() ? this._history.pushState(t, e, n) : this.location.hash = n
                    }, e.prototype.replaceState = function(t, e, n) {
                        Dl() ? this._history.replaceState(t, e, n) : this.location.hash = n
                    }, e.prototype.forward = function() {
                        this._history.forward()
                    }, e.prototype.back = function() {
                        this._history.back()
                    }, e.ctorParameters = function() {
                        return [{
                            type: void 0,
                            decorators: [{
                                type: Mt,
                                args: [Nl]
                            }]
                        }]
                    }, e
                }(vs),
                Ll = function() {
                    function t(t) {
                        this._doc = t, this._dom = El()
                    }
                    return t.prototype.addTag = function(t, e) {
                        return void 0 === e && (e = !1), t ? this._getOrCreateElement(t, e) : null
                    }, t.prototype.addTags = function(t, e) {
                        var n = this;
                        return void 0 === e && (e = !1), t ? t.reduce(function(t, r) {
                            return r && t.push(n._getOrCreateElement(r, e)), t
                        }, []) : []
                    }, t.prototype.getTag = function(t) {
                        return t && this._dom.querySelector(this._doc, "meta[" + t + "]") || null
                    }, t.prototype.getTags = function(t) {
                        if (!t) return [];
                        var e = this._dom.querySelectorAll(this._doc, "meta[" + t + "]");
                        return e ? [].slice.call(e) : []
                    }, t.prototype.updateTag = function(t, e) {
                        if (!t) return null;
                        e = e || this._parseSelector(t);
                        var n = this.getTag(e);
                        return n ? this._setMetaElementAttributes(t, n) : this._getOrCreateElement(t, !0)
                    }, t.prototype.removeTag = function(t) {
                        this.removeTagElement(this.getTag(t))
                    }, t.prototype.removeTagElement = function(t) {
                        t && this._dom.remove(t)
                    }, t.prototype._getOrCreateElement = function(t, e) {
                        if (void 0 === e && (e = !1), !e) {
                            var n = this._parseSelector(t),
                                r = this.getTag(n);
                            if (r && this._containsAttributes(t, r)) return r
                        }
                        var o = this._dom.createElement("meta");
                        this._setMetaElementAttributes(t, o);
                        var i = this._dom.getElementsByTagName(this._doc, "head")[0];
                        return this._dom.appendChild(i, o), o
                    }, t.prototype._setMetaElementAttributes = function(t, e) {
                        var n = this;
                        return Object.keys(t).forEach(function(r) {
                            return n._dom.setAttribute(e, r, t[r])
                        }), e
                    }, t.prototype._parseSelector = function(t) {
                        var e = t.name ? "name" : "property";
                        return e + '="' + t[e] + '"'
                    }, t.prototype._containsAttributes = function(t, e) {
                        var n = this;
                        return Object.keys(t).every(function(r) {
                            return n._dom.getAttribute(e, r) === t[r]
                        })
                    }, t
                }(),
                Fl = new ht("TRANSITION_ID"),
                zl = [{
                    provide: ce,
                    useFactory: function(t, e, n) {
                        return function() {
                            n.get(pe).donePromise.then(function() {
                                var n = El();
                                Array.prototype.slice.apply(n.querySelectorAll(e, "style[ng-transition]")).filter(function(e) {
                                    return n.getAttribute(e, "ng-transition") === t
                                }).forEach(function(t) {
                                    return n.remove(t)
                                })
                            })
                        }
                    },
                    deps: [Fl, Nl, Lt],
                    multi: !0
                }],
                Ul = function() {
                    function t() {}
                    return t.init = function() {
                        var e;
                        e = new t, Ke = e
                    }, t.prototype.addToWindow = function(t) {
                        bt.getAngularTestability = function(e, n) {
                            void 0 === n && (n = !0);
                            var r = t.findTestabilityInTree(e, n);
                            if (null == r) throw new Error("Could not find testability for element.");
                            return r
                        }, bt.getAllAngularTestabilities = function() {
                            return t.getAllTestabilities()
                        }, bt.getAllAngularRootElements = function() {
                            return t.getAllRootElements()
                        }, bt.frameworkStabilizers || (bt.frameworkStabilizers = []), bt.frameworkStabilizers.push(function(t) {
                            var e = bt.getAllAngularTestabilities(),
                                n = e.length,
                                r = !1,
                                o = function(e) {
                                    r = r || e, 0 == --n && t(r)
                                };
                            e.forEach(function(t) {
                                t.whenStable(o)
                            })
                        })
                    }, t.prototype.findTestabilityInTree = function(t, e, n) {
                        if (null == e) return null;
                        var r = t.getTestability(e);
                        return null != r ? r : n ? El().isShadowRoot(e) ? this.findTestabilityInTree(t, El().getHost(e), !0) : this.findTestabilityInTree(t, El().parentElement(e), !0) : null
                    }, t
                }(),
                Vl = function() {
                    function t(t) {
                        this._doc = t
                    }
                    return t.prototype.getTitle = function() {
                        return El().getTitle(this._doc)
                    }, t.prototype.setTitle = function(t) {
                        El().setTitle(this._doc, t)
                    }, t
                }();

            function Bl(t, e) {
                "undefined" != typeof COMPILED && COMPILED || ((bt.ng = bt.ng || {})[t] = e)
            }
            var Hl = {
                ApplicationRef: on,
                NgZone: Fe
            };

            function ql(t) {
                return kn(t)
            }
            var Ql = new ht("EventManagerPlugins"),
                Zl = function() {
                    function t(t, e) {
                        var n = this;
                        this._zone = e, this._eventNameToPlugin = new Map, t.forEach(function(t) {
                            return t.manager = n
                        }), this._plugins = t.slice().reverse()
                    }
                    return t.prototype.addEventListener = function(t, e, n) {
                        return this._findPluginFor(e).addEventListener(t, e, n)
                    }, t.prototype.addGlobalEventListener = function(t, e, n) {
                        return this._findPluginFor(e).addGlobalEventListener(t, e, n)
                    }, t.prototype.getZone = function() {
                        return this._zone
                    }, t.prototype._findPluginFor = function(t) {
                        var e = this._eventNameToPlugin.get(t);
                        if (e) return e;
                        for (var n = this._plugins, r = 0; r < n.length; r++) {
                            var o = n[r];
                            if (o.supports(t)) return this._eventNameToPlugin.set(t, o), o
                        }
                        throw new Error("No event manager plugin found for event " + t)
                    }, t
                }(),
                Gl = function() {
                    function t(t) {
                        this._doc = t
                    }
                    return t.prototype.addGlobalEventListener = function(t, e, n) {
                        var r = El().getGlobalEventTarget(this._doc, t);
                        if (!r) throw new Error("Unsupported event target " + r + " for event " + e);
                        return this.addEventListener(r, e, n)
                    }, t
                }(),
                Kl = function() {
                    function t() {
                        this._stylesSet = new Set
                    }
                    return t.prototype.addStyles = function(t) {
                        var e = this,
                            n = new Set;
                        t.forEach(function(t) {
                            e._stylesSet.has(t) || (e._stylesSet.add(t), n.add(t))
                        }), this.onStylesAdded(n)
                    }, t.prototype.onStylesAdded = function(t) {}, t.prototype.getAllStyles = function() {
                        return Array.from(this._stylesSet)
                    }, t
                }(),
                Wl = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n._doc = e, n._hostNodes = new Set, n._styleNodes = new Set, n._hostNodes.add(e.head), n
                    }
                    return o(e, t), e.prototype._addStylesToHost = function(t, e) {
                        var n = this;
                        t.forEach(function(t) {
                            var r = n._doc.createElement("style");
                            r.textContent = t, n._styleNodes.add(e.appendChild(r))
                        })
                    }, e.prototype.addHost = function(t) {
                        this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t)
                    }, e.prototype.removeHost = function(t) {
                        this._hostNodes.delete(t)
                    }, e.prototype.onStylesAdded = function(t) {
                        var e = this;
                        this._hostNodes.forEach(function(n) {
                            return e._addStylesToHost(t, n)
                        })
                    }, e.prototype.ngOnDestroy = function() {
                        this._styleNodes.forEach(function(t) {
                            return El().remove(t)
                        })
                    }, e
                }(Kl),
                Xl = {
                    svg: "http://www.w3.org/2000/svg",
                    xhtml: "http://www.w3.org/1999/xhtml",
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/"
                },
                Yl = /%COMP%/g,
                $l = "_nghost-%COMP%",
                Jl = "_ngcontent-%COMP%";

            function tu(t, e, n) {
                for (var r = 0; r < e.length; r++) {
                    var o = e[r];
                    Array.isArray(o) ? tu(t, o, n) : (o = o.replace(Yl, t), n.push(o))
                }
                return n
            }

            function eu(t) {
                return function(e) {
                    !1 === t(e) && (e.preventDefault(), e.returnValue = !1)
                }
            }
            var nu = function() {
                    function t(t, e) {
                        this.eventManager = t, this.sharedStylesHost = e, this.rendererByCompId = new Map, this.defaultRenderer = new ru(t)
                    }
                    return t.prototype.createRenderer = function(t, e) {
                        if (!t || !e) return this.defaultRenderer;
                        switch (e.encapsulation) {
                            case Jt.Emulated:
                                var n = this.rendererByCompId.get(e.id);
                                return n || (n = new su(this.eventManager, this.sharedStylesHost, e), this.rendererByCompId.set(e.id, n)), n.applyToHost(t), n;
                            case Jt.Native:
                                return new lu(this.eventManager, this.sharedStylesHost, t, e);
                            default:
                                if (!this.rendererByCompId.has(e.id)) {
                                    var r = tu(e.id, e.styles, []);
                                    this.sharedStylesHost.addStyles(r), this.rendererByCompId.set(e.id, this.defaultRenderer)
                                }
                                return this.defaultRenderer
                        }
                    }, t.prototype.begin = function() {}, t.prototype.end = function() {}, t
                }(),
                ru = function() {
                    function t(t) {
                        this.eventManager = t, this.data = Object.create(null)
                    }
                    return t.prototype.destroy = function() {}, t.prototype.createElement = function(t, e) {
                        return e ? document.createElementNS(Xl[e], t) : document.createElement(t)
                    }, t.prototype.createComment = function(t) {
                        return document.createComment(t)
                    }, t.prototype.createText = function(t) {
                        return document.createTextNode(t)
                    }, t.prototype.appendChild = function(t, e) {
                        t.appendChild(e)
                    }, t.prototype.insertBefore = function(t, e, n) {
                        t && t.insertBefore(e, n)
                    }, t.prototype.removeChild = function(t, e) {
                        t && t.removeChild(e)
                    }, t.prototype.selectRootElement = function(t) {
                        var e = "string" == typeof t ? document.querySelector(t) : t;
                        if (!e) throw new Error('The selector "' + t + '" did not match any elements');
                        return e.textContent = "", e
                    }, t.prototype.parentNode = function(t) {
                        return t.parentNode
                    }, t.prototype.nextSibling = function(t) {
                        return t.nextSibling
                    }, t.prototype.setAttribute = function(t, e, n, r) {
                        if (r) {
                            e = r + ":" + e;
                            var o = Xl[r];
                            o ? t.setAttributeNS(o, e, n) : t.setAttribute(e, n)
                        } else t.setAttribute(e, n)
                    }, t.prototype.removeAttribute = function(t, e, n) {
                        if (n) {
                            var r = Xl[n];
                            r ? t.removeAttributeNS(r, e) : t.removeAttribute(n + ":" + e)
                        } else t.removeAttribute(e)
                    }, t.prototype.addClass = function(t, e) {
                        t.classList.add(e)
                    }, t.prototype.removeClass = function(t, e) {
                        t.classList.remove(e)
                    }, t.prototype.setStyle = function(t, e, n, r) {
                        r & ln.DashCase ? t.style.setProperty(e, n, r & ln.Important ? "important" : "") : t.style[e] = n
                    }, t.prototype.removeStyle = function(t, e, n) {
                        n & ln.DashCase ? t.style.removeProperty(e) : t.style[e] = ""
                    }, t.prototype.setProperty = function(t, e, n) {
                        iu(e, "property"), t[e] = n
                    }, t.prototype.setValue = function(t, e) {
                        t.nodeValue = e
                    }, t.prototype.listen = function(t, e, n) {
                        return iu(e, "listener"), "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, eu(n)) : this.eventManager.addEventListener(t, e, eu(n))
                    }, t
                }(),
                ou = "@".charCodeAt(0);

            function iu(t, e) {
                if (t.charCodeAt(0) === ou) throw new Error("Found the synthetic " + e + " " + t + '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.')
            }
            var au, su = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        o.component = r;
                        var i = tu(r.id, r.styles, []);
                        return n.addStyles(i), o.contentAttr = Jl.replace(Yl, r.id), o.hostAttr = $l.replace(Yl, r.id), o
                    }
                    return o(e, t), e.prototype.applyToHost = function(e) {
                        t.prototype.setAttribute.call(this, e, this.hostAttr, "")
                    }, e.prototype.createElement = function(e, n) {
                        var r = t.prototype.createElement.call(this, e, n);
                        return t.prototype.setAttribute.call(this, r, this.contentAttr, ""), r
                    }, e
                }(ru),
                lu = function(t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e) || this;
                        i.sharedStylesHost = n, i.hostEl = r, i.component = o, i.shadowRoot = r.createShadowRoot(), i.sharedStylesHost.addHost(i.shadowRoot);
                        for (var a = tu(o.id, o.styles, []), s = 0; s < a.length; s++) {
                            var l = document.createElement("style");
                            l.textContent = a[s], i.shadowRoot.appendChild(l)
                        }
                        return i
                    }
                    return o(e, t), e.prototype.nodeOrShadowRoot = function(t) {
                        return t === this.hostEl ? this.shadowRoot : t
                    }, e.prototype.destroy = function() {
                        this.sharedStylesHost.removeHost(this.shadowRoot)
                    }, e.prototype.appendChild = function(e, n) {
                        return t.prototype.appendChild.call(this, this.nodeOrShadowRoot(e), n)
                    }, e.prototype.insertBefore = function(e, n, r) {
                        return t.prototype.insertBefore.call(this, this.nodeOrShadowRoot(e), n, r)
                    }, e.prototype.removeChild = function(e, n) {
                        return t.prototype.removeChild.call(this, this.nodeOrShadowRoot(e), n)
                    }, e.prototype.parentNode = function(e) {
                        return this.nodeOrShadowRoot(t.prototype.parentNode.call(this, this.nodeOrShadowRoot(e)))
                    }, e
                }(ru),
                uu = "undefined" != typeof Zone && Zone.__symbol__ || function(t) {
                    return "__zone_symbol__" + t
                },
                cu = uu("addEventListener"),
                pu = uu("removeEventListener"),
                fu = {},
                hu = "__zone_symbol__propagationStopped";
            "undefined" != typeof Zone && Zone[uu("BLACK_LISTED_EVENTS")] && (au = {});
            var du = function(t) {
                    return !!au && au.hasOwnProperty(t)
                },
                mu = function(t) {
                    var e = fu[t.type];
                    if (e) {
                        var n = this[e];
                        if (n) {
                            var r = [t];
                            if (1 === n.length) return (a = n[0]).zone !== Zone.current ? a.zone.run(a.handler, this, r) : a.handler.apply(this, r);
                            for (var o = n.slice(), i = 0; i < o.length && !0 !== t[hu]; i++) {
                                var a;
                                (a = o[i]).zone !== Zone.current ? a.zone.run(a.handler, this, r) : a.handler.apply(this, r)
                            }
                        }
                    }
                },
                gu = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.ngZone = n, r.patchEvent(), r
                    }
                    return o(e, t), e.prototype.patchEvent = function() {
                        if (Event && Event.prototype && !Event.prototype.__zone_symbol__stopImmediatePropagation) {
                            var t = Event.prototype.__zone_symbol__stopImmediatePropagation = Event.prototype.stopImmediatePropagation;
                            Event.prototype.stopImmediatePropagation = function() {
                                this && (this[hu] = !0), t && t.apply(this, arguments)
                            }
                        }
                    }, e.prototype.supports = function(t) {
                        return !0
                    }, e.prototype.addEventListener = function(t, e, n) {
                        var r = this,
                            o = n;
                        if (!t[cu] || Fe.isInAngularZone() && !du(e)) t.addEventListener(e, o, !1);
                        else {
                            var i = fu[e];
                            i || (i = fu[e] = uu("ANGULAR" + e + "FALSE"));
                            var a = t[i],
                                s = a && a.length > 0;
                            a || (a = t[i] = []);
                            var l = du(e) ? Zone.root : Zone.current;
                            if (0 === a.length) a.push({
                                zone: l,
                                handler: o
                            });
                            else {
                                for (var u = !1, c = 0; c < a.length; c++)
                                    if (a[c].handler === o) {
                                        u = !0;
                                        break
                                    } u || a.push({
                                    zone: l,
                                    handler: o
                                })
                            }
                            s || t[cu](e, mu, !1)
                        }
                        return function() {
                            return r.removeEventListener(t, e, o)
                        }
                    }, e.prototype.removeEventListener = function(t, e, n) {
                        var r = t[pu];
                        if (!r) return t.removeEventListener.apply(t, [e, n, !1]);
                        var o = fu[e],
                            i = o && t[o];
                        if (!i) return t.removeEventListener.apply(t, [e, n, !1]);
                        for (var a = !1, s = 0; s < i.length; s++)
                            if (i[s].handler === n) {
                                a = !0, i.splice(s, 1);
                                break
                            } a ? 0 === i.length && r.apply(t, [e, mu, !1]) : t.removeEventListener.apply(t, [e, n, !1])
                    }, e
                }(Gl),
                yu = {
                    pan: !0,
                    panstart: !0,
                    panmove: !0,
                    panend: !0,
                    pancancel: !0,
                    panleft: !0,
                    panright: !0,
                    panup: !0,
                    pandown: !0,
                    pinch: !0,
                    pinchstart: !0,
                    pinchmove: !0,
                    pinchend: !0,
                    pinchcancel: !0,
                    pinchin: !0,
                    pinchout: !0,
                    press: !0,
                    pressup: !0,
                    rotate: !0,
                    rotatestart: !0,
                    rotatemove: !0,
                    rotateend: !0,
                    rotatecancel: !0,
                    swipe: !0,
                    swipeleft: !0,
                    swiperight: !0,
                    swipeup: !0,
                    swipedown: !0,
                    tap: !0
                },
                vu = new ht("HammerGestureConfig"),
                _u = function() {
                    function t() {
                        this.events = [], this.overrides = {}
                    }
                    return t.prototype.buildHammer = function(t) {
                        var e = new Hammer(t, this.options);
                        for (var n in e.get("pinch").set({
                                enable: !0
                            }), e.get("rotate").set({
                                enable: !0
                            }), this.overrides) e.get(n).set(this.overrides[n]);
                        return e
                    }, t
                }(),
                bu = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return o._config = n, o.console = r, o
                    }
                    return o(e, t), e.prototype.supports = function(t) {
                        return !(!yu.hasOwnProperty(t.toLowerCase()) && !this.isCustomEvent(t) || !window.Hammer && (this.console.warn("Hammer.js is not loaded, can not bind '" + t + "' event."), 1))
                    }, e.prototype.addEventListener = function(t, e, n) {
                        var r = this,
                            o = this.manager.getZone();
                        return e = e.toLowerCase(), o.runOutsideAngular(function() {
                            var i = r._config.buildHammer(t),
                                a = function(t) {
                                    o.runGuarded(function() {
                                        n(t)
                                    })
                                };
                            return i.on(e, a),
                                function() {
                                    return i.off(e, a)
                                }
                        })
                    }, e.prototype.isCustomEvent = function(t) {
                        return this._config.events.indexOf(t) > -1
                    }, e
                }(Gl),
                wu = ["alt", "control", "meta", "shift"],
                Cu = {
                    alt: function(t) {
                        return t.altKey
                    },
                    control: function(t) {
                        return t.ctrlKey
                    },
                    meta: function(t) {
                        return t.metaKey
                    },
                    shift: function(t) {
                        return t.shiftKey
                    }
                },
                ku = function(t) {
                    function e(e) {
                        return t.call(this, e) || this
                    }
                    return o(e, t), e.prototype.supports = function(t) {
                        return null != e.parseEventName(t)
                    }, e.prototype.addEventListener = function(t, n, r) {
                        var o = e.parseEventName(n),
                            i = e.eventCallback(o.fullKey, r, this.manager.getZone());
                        return this.manager.getZone().runOutsideAngular(function() {
                            return El().onAndCancel(t, o.domEventName, i)
                        })
                    }, e.parseEventName = function(t) {
                        var n = t.toLowerCase().split("."),
                            r = n.shift();
                        if (0 === n.length || "keydown" !== r && "keyup" !== r) return null;
                        var o = e._normalizeKey(n.pop()),
                            i = "";
                        if (wu.forEach(function(t) {
                                var e = n.indexOf(t);
                                e > -1 && (n.splice(e, 1), i += t + ".")
                            }), i += o, 0 != n.length || 0 === o.length) return null;
                        var a = {};
                        return a.domEventName = r, a.fullKey = i, a
                    }, e.getEventFullKey = function(t) {
                        var e = "",
                            n = El().getEventKey(t);
                        return " " === (n = n.toLowerCase()) ? n = "space" : "." === n && (n = "dot"), wu.forEach(function(r) {
                            r != n && (0, Cu[r])(t) && (e += r + ".")
                        }), e += n
                    }, e.eventCallback = function(t, n, r) {
                        return function(o) {
                            e.getEventFullKey(o) === t && r.runGuarded(function() {
                                return n(o)
                            })
                        }
                    }, e._normalizeKey = function(t) {
                        switch (t) {
                            case "esc":
                                return "escape";
                            default:
                                return t
                        }
                    }, e
                }(Gl),
                Su = function() {},
                xu = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n._doc = e, n
                    }
                    return o(e, t), e.prototype.sanitize = function(t, e) {
                        if (null == e) return null;
                        switch (t) {
                            case _r.NONE:
                                return e;
                            case _r.HTML:
                                return e instanceof Pu ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "HTML"), function(t, e) {
                                    var n = null;
                                    try {
                                        rr = rr || new Yn(t);
                                        var r = e ? String(e) : "";
                                        n = rr.getInertBodyElement(r);
                                        var o = 5,
                                            i = r;
                                        do {
                                            if (0 === o) throw new Error("Failed to sanitize html because the input is unstable");
                                            o--, r = i, i = n.innerHTML, n = rr.getInertBodyElement(r)
                                        } while (r !== i);
                                        var a = new fr,
                                            s = a.sanitizeChildren(gr(n) || n);
                                        return $e() && a.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss)."), s
                                    } finally {
                                        if (n)
                                            for (var l = gr(n) || n; l.firstChild;) l.removeChild(l.firstChild)
                                    }
                                }(this._doc, String(e)));
                            case _r.STYLE:
                                return e instanceof Ou ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "Style"), function(t) {
                                    if (!(t = String(t).trim())) return "";
                                    var e = t.match(vr);
                                    return e && tr(e[1]) === e[1] || t.match(yr) && function(t) {
                                        for (var e = !0, n = !0, r = 0; r < t.length; r++) {
                                            var o = t.charAt(r);
                                            "'" === o && n ? e = !e : '"' === o && e && (n = !n)
                                        }
                                        return e && n
                                    }(t) ? t : ($e() && console.warn("WARNING: sanitizing unsafe style value " + t + " (see http://g.co/ng/security#xss)."), "unsafe")
                                }(e));
                            case _r.SCRIPT:
                                if (e instanceof Mu) return e.changingThisBreaksApplicationSecurity;
                                throw this.checkNotSafeValue(e, "Script"), new Error("unsafe value used in a script context");
                            case _r.URL:
                                return e instanceof Au || e instanceof Tu ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "URL"), tr(String(e)));
                            case _r.RESOURCE_URL:
                                if (e instanceof Au) return e.changingThisBreaksApplicationSecurity;
                                throw this.checkNotSafeValue(e, "ResourceURL"), new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");
                            default:
                                throw new Error("Unexpected SecurityContext " + t + " (see http://g.co/ng/security#xss)")
                        }
                    }, e.prototype.checkNotSafeValue = function(t, e) {
                        if (t instanceof Eu) throw new Error("Required a safe " + e + ", got a " + t.getTypeName() + " (see http://g.co/ng/security#xss)")
                    }, e.prototype.bypassSecurityTrustHtml = function(t) {
                        return new Pu(t)
                    }, e.prototype.bypassSecurityTrustStyle = function(t) {
                        return new Ou(t)
                    }, e.prototype.bypassSecurityTrustScript = function(t) {
                        return new Mu(t)
                    }, e.prototype.bypassSecurityTrustUrl = function(t) {
                        return new Tu(t)
                    }, e.prototype.bypassSecurityTrustResourceUrl = function(t) {
                        return new Au(t)
                    }, e
                }(Su),
                Eu = function() {
                    function t(t) {
                        this.changingThisBreaksApplicationSecurity = t
                    }
                    return t.prototype.toString = function() {
                        return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity + " (see http://g.co/ng/security#xss)"
                    }, t
                }(),
                Pu = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.getTypeName = function() {
                        return "HTML"
                    }, e
                }(Eu),
                Ou = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.getTypeName = function() {
                        return "Style"
                    }, e
                }(Eu),
                Mu = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.getTypeName = function() {
                        return "Script"
                    }, e
                }(Eu),
                Tu = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.getTypeName = function() {
                        return "URL"
                    }, e
                }(Eu),
                Au = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.getTypeName = function() {
                        return "ResourceURL"
                    }, e
                }(Eu),
                Iu = tn(Qn, "browser", [{
                    provide: ge,
                    useValue: "browser"
                }, {
                    provide: me,
                    useValue: function() {
                        Il.makeCurrent(), Ul.init()
                    },
                    multi: !0
                }, {
                    provide: vs,
                    useClass: Rl,
                    deps: [Nl]
                }, {
                    provide: Nl,
                    useFactory: function() {
                        return document
                    },
                    deps: []
                }]);

            function ju() {
                return new se
            }
            var Nu = function() {
                function t(t) {
                    if (t) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
                }
                return t.withServerTransition = function(e) {
                    return {
                        ngModule: t,
                        providers: [{
                            provide: fe,
                            useValue: e.appId
                        }, {
                            provide: Fl,
                            useExisting: fe
                        }, zl]
                    }
                }, t
            }();
            "undefined" != typeof window && window;
            var Du = function(t, e) {
                    this.id = t, this.url = e
                },
                Ru = function(t) {
                    function e(e, n, r, o) {
                        void 0 === r && (r = "imperative"), void 0 === o && (o = null);
                        var i = t.call(this, e, n) || this;
                        return i.navigationTrigger = r, i.restoredState = o, i
                    }
                    return o(e, t), e.prototype.toString = function() {
                        return "NavigationStart(id: " + this.id + ", url: '" + this.url + "')"
                    }, e
                }(Du),
                Lu = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e, n) || this;
                        return o.urlAfterRedirects = r, o
                    }
                    return o(e, t), e.prototype.toString = function() {
                        return "NavigationEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')"
                    }, e
                }(Du),
                Fu = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e, n) || this;
                        return o.reason = r, o
                    }
                    return o(e, t), e.prototype.toString = function() {
                        return "NavigationCancel(id: " + this.id + ", url: '" + this.url + "')"
                    }, e
                }(Du),
                zu = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e, n) || this;
                        return o.error = r, o
                    }
                    return o(e, t), e.prototype.toString = function() {
                        return "NavigationError(id: " + this.id + ", url: '" + this.url + "', error: " + this.error + ")"
                    }, e
                }(Du),
                Uu = function(t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e, n) || this;
                        return i.urlAfterRedirects = r, i.state = o, i
                    }
                    return o(e, t), e.prototype.toString = function() {
                        return "RoutesRecognized(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
                    }, e
                }(Du),
                Vu = function(t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e, n) || this;
                        return i.urlAfterRedirects = r, i.state = o, i
                    }
                    return o(e, t), e.prototype.toString = function() {
                        return "GuardsCheckStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
                    }, e
                }(Du),
                Bu = function(t) {
                    function e(e, n, r, o, i) {
                        var a = t.call(this, e, n) || this;
                        return a.urlAfterRedirects = r, a.state = o, a.shouldActivate = i, a
                    }
                    return o(e, t), e.prototype.toString = function() {
                        return "GuardsCheckEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ", shouldActivate: " + this.shouldActivate + ")"
                    }, e
                }(Du),
                Hu = function(t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e, n) || this;
                        return i.urlAfterRedirects = r, i.state = o, i
                    }
                    return o(e, t), e.prototype.toString = function() {
                        return "ResolveStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
                    }, e
                }(Du),
                qu = function(t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e, n) || this;
                        return i.urlAfterRedirects = r, i.state = o, i
                    }
                    return o(e, t), e.prototype.toString = function() {
                        return "ResolveEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
                    }, e
                }(Du),
                Qu = function() {
                    function t(t) {
                        this.route = t
                    }
                    return t.prototype.toString = function() {
                        return "RouteConfigLoadStart(path: " + this.route.path + ")"
                    }, t
                }(),
                Zu = function() {
                    function t(t) {
                        this.route = t
                    }
                    return t.prototype.toString = function() {
                        return "RouteConfigLoadEnd(path: " + this.route.path + ")"
                    }, t
                }(),
                Gu = function() {
                    function t(t) {
                        this.snapshot = t
                    }
                    return t.prototype.toString = function() {
                        return "ChildActivationStart(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
                    }, t
                }(),
                Ku = function() {
                    function t(t) {
                        this.snapshot = t
                    }
                    return t.prototype.toString = function() {
                        return "ChildActivationEnd(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
                    }, t
                }(),
                Wu = function() {
                    function t(t) {
                        this.snapshot = t
                    }
                    return t.prototype.toString = function() {
                        return "ActivationStart(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
                    }, t
                }(),
                Xu = function() {
                    function t(t) {
                        this.snapshot = t
                    }
                    return t.prototype.toString = function() {
                        return "ActivationEnd(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
                    }, t
                }(),
                Yu = "primary",
                $u = function() {
                    function t(t) {
                        this.params = t || {}
                    }
                    return t.prototype.has = function(t) {
                        return this.params.hasOwnProperty(t)
                    }, t.prototype.get = function(t) {
                        if (this.has(t)) {
                            var e = this.params[t];
                            return Array.isArray(e) ? e[0] : e
                        }
                        return null
                    }, t.prototype.getAll = function(t) {
                        if (this.has(t)) {
                            var e = this.params[t];
                            return Array.isArray(e) ? e : [e]
                        }
                        return []
                    }, Object.defineProperty(t.prototype, "keys", {
                        get: function() {
                            return Object.keys(this.params)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }();

            function Ju(t) {
                return new $u(t)
            }

            function tc(t, e, n) {
                var r = n.path.split("/");
                if (r.length > t.length) return null;
                if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length)) return null;
                for (var o = {}, i = 0; i < r.length; i++) {
                    var a = r[i],
                        s = t[i];
                    if (a.startsWith(":")) o[a.substring(1)] = s;
                    else if (a !== s.path) return null
                }
                return {
                    consumed: t.slice(0, r.length),
                    posParams: o
                }
            }
            var ec = function(t, e) {
                this.routes = t, this.module = e
            };

            function nc(t, e) {
                void 0 === e && (e = "");
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    rc(r, oc(e, r))
                }
            }

            function rc(t, e) {
                if (!t) throw new Error("\n      Invalid configuration of route '" + e + "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    ");
                if (Array.isArray(t)) throw new Error("Invalid configuration of route '" + e + "': Array cannot be specified");
                if (!t.component && t.outlet && t.outlet !== Yu) throw new Error("Invalid configuration of route '" + e + "': a componentless route cannot have a named outlet set");
                if (t.redirectTo && t.children) throw new Error("Invalid configuration of route '" + e + "': redirectTo and children cannot be used together");
                if (t.redirectTo && t.loadChildren) throw new Error("Invalid configuration of route '" + e + "': redirectTo and loadChildren cannot be used together");
                if (t.children && t.loadChildren) throw new Error("Invalid configuration of route '" + e + "': children and loadChildren cannot be used together");
                if (t.redirectTo && t.component) throw new Error("Invalid configuration of route '" + e + "': redirectTo and component cannot be used together");
                if (t.path && t.matcher) throw new Error("Invalid configuration of route '" + e + "': path and matcher cannot be used together");
                if (void 0 === t.redirectTo && !t.component && !t.children && !t.loadChildren) throw new Error("Invalid configuration of route '" + e + "'. One of the following must be provided: component, redirectTo, children or loadChildren");
                if (void 0 === t.path && void 0 === t.matcher) throw new Error("Invalid configuration of route '" + e + "': routes must have either a path or a matcher specified");
                if ("string" == typeof t.path && "/" === t.path.charAt(0)) throw new Error("Invalid configuration of route '" + e + "': path cannot start with a slash");
                if ("" === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch) throw new Error("Invalid configuration of route '{path: \"" + e + '", redirectTo: "' + t.redirectTo + "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.");
                if (void 0 !== t.pathMatch && "full" !== t.pathMatch && "prefix" !== t.pathMatch) throw new Error("Invalid configuration of route '" + e + "': pathMatch can only be set to 'prefix' or 'full'");
                t.children && nc(t.children, e)
            }

            function oc(t, e) {
                return e ? t || e.path ? t && !e.path ? t + "/" : !t && e.path ? e.path : t + "/" + e.path : "" : t
            }

            function ic(t) {
                var e = t.children && t.children.map(ic);
                return e ? i({}, t, {
                    children: e
                }) : i({}, t)
            }

            function ac(t, e) {
                var n, r = Object.keys(t),
                    o = Object.keys(e);
                if (r.length != o.length) return !1;
                for (var i = 0; i < r.length; i++)
                    if (t[n = r[i]] !== e[n]) return !1;
                return !0
            }

            function sc(t) {
                return Array.prototype.concat.apply([], t)
            }

            function lc(t) {
                return t.length > 0 ? t[t.length - 1] : null
            }

            function uc(t, e) {
                for (var n in t) t.hasOwnProperty(n) && e(t[n], n)
            }

            function cc(t) {
                return t.pipe(J(), ml(function(t) {
                    return !0 === t
                }))
            }

            function pc(t) {
                return (e = t) && "function" == typeof e.subscribe ? t : ue(t) ? K(Promise.resolve(t)) : Ks(t);
                var e
            }

            function fc(t, e, n) {
                return n ? function(t, e) {
                    return ac(t, e)
                }(t.queryParams, e.queryParams) && function t(e, n) {
                    if (!gc(e.segments, n.segments)) return !1;
                    if (e.numberOfChildren !== n.numberOfChildren) return !1;
                    for (var r in n.children) {
                        if (!e.children[r]) return !1;
                        if (!t(e.children[r], n.children[r])) return !1
                    }
                    return !0
                }(t.root, e.root) : function(t, e) {
                    return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every(function(n) {
                        return e[n] === t[n]
                    })
                }(t.queryParams, e.queryParams) && function t(e, n) {
                    return function e(n, r, o) {
                        if (n.segments.length > o.length) return !!gc(a = n.segments.slice(0, o.length), o) && !r.hasChildren();
                        if (n.segments.length === o.length) {
                            if (!gc(n.segments, o)) return !1;
                            for (var i in r.children) {
                                if (!n.children[i]) return !1;
                                if (!t(n.children[i], r.children[i])) return !1
                            }
                            return !0
                        }
                        var a = o.slice(0, n.segments.length),
                            s = o.slice(n.segments.length);
                        return !!gc(n.segments, a) && !!n.children[Yu] && e(n.children[Yu], r, s)
                    }(e, n, n.segments)
                }(t.root, e.root)
            }
            var hc = function() {
                    function t(t, e, n) {
                        this.root = t, this.queryParams = e, this.fragment = n
                    }
                    return Object.defineProperty(t.prototype, "queryParamMap", {
                        get: function() {
                            return this._queryParamMap || (this._queryParamMap = Ju(this.queryParams)), this._queryParamMap
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.toString = function() {
                        return bc.serialize(this)
                    }, t
                }(),
                dc = function() {
                    function t(t, e) {
                        var n = this;
                        this.segments = t, this.children = e, this.parent = null, uc(e, function(t, e) {
                            return t.parent = n
                        })
                    }
                    return t.prototype.hasChildren = function() {
                        return this.numberOfChildren > 0
                    }, Object.defineProperty(t.prototype, "numberOfChildren", {
                        get: function() {
                            return Object.keys(this.children).length
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.toString = function() {
                        return wc(this)
                    }, t
                }(),
                mc = function() {
                    function t(t, e) {
                        this.path = t, this.parameters = e
                    }
                    return Object.defineProperty(t.prototype, "parameterMap", {
                        get: function() {
                            return this._parameterMap || (this._parameterMap = Ju(this.parameters)), this._parameterMap
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.toString = function() {
                        return Pc(this)
                    }, t
                }();

            function gc(t, e) {
                return t.length === e.length && t.every(function(t, n) {
                    return t.path === e[n].path
                })
            }

            function yc(t, e) {
                var n = [];
                return uc(t.children, function(t, r) {
                    r === Yu && (n = n.concat(e(t, r)))
                }), uc(t.children, function(t, r) {
                    r !== Yu && (n = n.concat(e(t, r)))
                }), n
            }
            var vc = function() {},
                _c = function() {
                    function t() {}
                    return t.prototype.parse = function(t) {
                        var e = new Ic(t);
                        return new hc(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment())
                    }, t.prototype.serialize = function(t) {
                        var e, n;
                        return "/" + function t(e, n) {
                            if (!e.hasChildren()) return wc(e);
                            if (n) {
                                var r = e.children[Yu] ? t(e.children[Yu], !1) : "",
                                    o = [];
                                return uc(e.children, function(e, n) {
                                    n !== Yu && o.push(n + ":" + t(e, !1))
                                }), o.length > 0 ? r + "(" + o.join("//") + ")" : r
                            }
                            var i = yc(e, function(n, r) {
                                return r === Yu ? [t(e.children[Yu], !1)] : [r + ":" + t(n, !1)]
                            });
                            return wc(e) + "/(" + i.join("//") + ")"
                        }(t.root, !0) + (e = t.queryParams, (n = Object.keys(e).map(function(t) {
                            var n = e[t];
                            return Array.isArray(n) ? n.map(function(e) {
                                return kc(t) + "=" + kc(e)
                            }).join("&") : kc(t) + "=" + kc(n)
                        })).length ? "?" + n.join("&") : "") + ("string" == typeof t.fragment ? "#" + encodeURI(t.fragment) : "")
                    }, t
                }(),
                bc = new _c;

            function wc(t) {
                return t.segments.map(function(t) {
                    return Pc(t)
                }).join("/")
            }

            function Cc(t) {
                return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
            }

            function kc(t) {
                return Cc(t).replace(/%3B/gi, ";")
            }

            function Sc(t) {
                return Cc(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
            }

            function xc(t) {
                return decodeURIComponent(t)
            }

            function Ec(t) {
                return xc(t.replace(/\+/g, "%20"))
            }

            function Pc(t) {
                return "" + Sc(t.path) + (e = t.parameters, Object.keys(e).map(function(t) {
                    return ";" + Sc(t) + "=" + Sc(e[t])
                }).join(""));
                var e
            }
            var Oc = /^[^\/()?;=#]+/;

            function Mc(t) {
                var e = t.match(Oc);
                return e ? e[0] : ""
            }
            var Tc = /^[^=?&#]+/,
                Ac = /^[^?&#]+/,
                Ic = function() {
                    function t(t) {
                        this.url = t, this.remaining = t
                    }
                    return t.prototype.parseRootSegment = function() {
                        return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new dc([], {}) : new dc([], this.parseChildren())
                    }, t.prototype.parseQueryParams = function() {
                        var t = {};
                        if (this.consumeOptional("?"))
                            do {
                                this.parseQueryParam(t)
                            } while (this.consumeOptional("&"));
                        return t
                    }, t.prototype.parseFragment = function() {
                        return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
                    }, t.prototype.parseChildren = function() {
                        if ("" === this.remaining) return {};
                        this.consumeOptional("/");
                        var t = [];
                        for (this.peekStartsWith("(") || t.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), t.push(this.parseSegment());
                        var e = {};
                        this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0));
                        var n = {};
                        return this.peekStartsWith("(") && (n = this.parseParens(!1)), (t.length > 0 || Object.keys(e).length > 0) && (n[Yu] = new dc(t, e)), n
                    }, t.prototype.parseSegment = function() {
                        var t = Mc(this.remaining);
                        if ("" === t && this.peekStartsWith(";")) throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
                        return this.capture(t), new mc(xc(t), this.parseMatrixParams())
                    }, t.prototype.parseMatrixParams = function() {
                        for (var t = {}; this.consumeOptional(";");) this.parseParam(t);
                        return t
                    }, t.prototype.parseParam = function(t) {
                        var e = Mc(this.remaining);
                        if (e) {
                            this.capture(e);
                            var n = "";
                            if (this.consumeOptional("=")) {
                                var r = Mc(this.remaining);
                                r && this.capture(n = r)
                            }
                            t[xc(e)] = xc(n)
                        }
                    }, t.prototype.parseQueryParam = function(t) {
                        var e, n = (e = this.remaining.match(Tc)) ? e[0] : "";
                        if (n) {
                            this.capture(n);
                            var r = "";
                            if (this.consumeOptional("=")) {
                                var o = function(t) {
                                    var e = t.match(Ac);
                                    return e ? e[0] : ""
                                }(this.remaining);
                                o && this.capture(r = o)
                            }
                            var i = Ec(n),
                                a = Ec(r);
                            if (t.hasOwnProperty(i)) {
                                var s = t[i];
                                Array.isArray(s) || (t[i] = s = [s]), s.push(a)
                            } else t[i] = a
                        }
                    }, t.prototype.parseParens = function(t) {
                        var e = {};
                        for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
                            var n = Mc(this.remaining),
                                r = this.remaining[n.length];
                            if ("/" !== r && ")" !== r && ";" !== r) throw new Error("Cannot parse url '" + this.url + "'");
                            var o = void 0;
                            n.indexOf(":") > -1 ? (o = n.substr(0, n.indexOf(":")), this.capture(o), this.capture(":")) : t && (o = Yu);
                            var i = this.parseChildren();
                            e[o] = 1 === Object.keys(i).length ? i[Yu] : new dc([], i), this.consumeOptional("//")
                        }
                        return e
                    }, t.prototype.peekStartsWith = function(t) {
                        return this.remaining.startsWith(t)
                    }, t.prototype.consumeOptional = function(t) {
                        return !!this.peekStartsWith(t) && (this.remaining = this.remaining.substring(t.length), !0)
                    }, t.prototype.capture = function(t) {
                        if (!this.consumeOptional(t)) throw new Error('Expected "' + t + '".')
                    }, t
                }(),
                jc = function(t) {
                    this.segmentGroup = t || null
                },
                Nc = function(t) {
                    this.urlTree = t
                };

            function Dc(t) {
                return new T(function(e) {
                    return e.error(new jc(t))
                })
            }

            function Rc(t) {
                return new T(function(e) {
                    return e.error(new Nc(t))
                })
            }

            function Lc(t) {
                return new T(function(e) {
                    return e.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + t + "'"))
                })
            }
            var Fc = function() {
                function t(t, e, n, r, o) {
                    this.configLoader = e, this.urlSerializer = n, this.urlTree = r, this.config = o, this.allowRedirects = !0, this.ngModule = t.get(Ae)
                }
                return t.prototype.apply = function() {
                    var t = this;
                    return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, Yu).pipe(q(function(e) {
                        return t.createUrlTree(e, t.urlTree.queryParams, t.urlTree.fragment)
                    })).pipe(fl(function(e) {
                        if (e instanceof Nc) return t.allowRedirects = !1, t.match(e.urlTree);
                        if (e instanceof jc) throw t.noMatchError(e);
                        throw e
                    }))
                }, t.prototype.match = function(t) {
                    var e = this;
                    return this.expandSegmentGroup(this.ngModule, this.config, t.root, Yu).pipe(q(function(n) {
                        return e.createUrlTree(n, t.queryParams, t.fragment)
                    })).pipe(fl(function(t) {
                        if (t instanceof jc) throw e.noMatchError(t);
                        throw t
                    }))
                }, t.prototype.noMatchError = function(t) {
                    return new Error("Cannot match any routes. URL Segment: '" + t.segmentGroup + "'")
                }, t.prototype.createUrlTree = function(t, e, n) {
                    var r, o = t.segments.length > 0 ? new dc([], ((r = {})[Yu] = t, r)) : t;
                    return new hc(o, e, n)
                }, t.prototype.expandSegmentGroup = function(t, e, n, r) {
                    return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(t, e, n).pipe(q(function(t) {
                        return new dc([], t)
                    })) : this.expandSegment(t, n, e, n.segments, r, !0)
                }, t.prototype.expandChildren = function(t, e, n) {
                    var r = this;
                    return function(n, o) {
                        if (0 === Object.keys(n).length) return Ks({});
                        var i = [],
                            a = [],
                            s = {};
                        return uc(n, function(n, o) {
                            var l, u, c = (l = o, u = n, r.expandSegmentGroup(t, e, u, l)).pipe(q(function(t) {
                                return s[o] = t
                            }));
                            o === Yu ? i.push(c) : a.push(c)
                        }), Ks.apply(null, i.concat(a)).pipe(wl(), pl(), q(function() {
                            return s
                        }))
                    }(n.children)
                }, t.prototype.expandSegment = function(t, e, n, r, o, i) {
                    var a = this;
                    return Ks.apply(void 0, l(n)).pipe(q(function(s) {
                        return a.expandSegmentAgainstRoute(t, e, n, s, r, o, i).pipe(fl(function(t) {
                            if (t instanceof jc) return Ks(null);
                            throw t
                        }))
                    }), wl(), bl(function(t) {
                        return !!t
                    }), fl(function(t, n) {
                        if (t instanceof Ws || "EmptyError" === t.name) {
                            if (a.noLeftoversInUrl(e, r, o)) return Ks(new dc([], {}));
                            throw new jc(e)
                        }
                        throw t
                    }))
                }, t.prototype.noLeftoversInUrl = function(t, e, n) {
                    return 0 === e.length && !t.children[n]
                }, t.prototype.expandSegmentAgainstRoute = function(t, e, n, r, o, i, a) {
                    return Bc(r) !== i ? Dc(e) : void 0 === r.redirectTo ? this.matchSegmentAgainstRoute(t, e, r, o) : a && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, o, i) : Dc(e)
                }, t.prototype.expandSegmentAgainstRouteUsingRedirect = function(t, e, n, r, o, i) {
                    return "**" === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i) : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, o, i)
                }, t.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function(t, e, n, r) {
                    var o = this,
                        i = this.applyRedirectCommands([], n.redirectTo, {});
                    return n.redirectTo.startsWith("/") ? Rc(i) : this.lineralizeSegments(n, i).pipe(W(function(n) {
                        var i = new dc(n, {});
                        return o.expandSegment(t, i, e, n, r, !1)
                    }))
                }, t.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function(t, e, n, r, o, i) {
                    var a = this,
                        s = zc(e, r, o),
                        l = s.consumedSegments,
                        u = s.lastChild,
                        c = s.positionalParamSegments;
                    if (!s.matched) return Dc(e);
                    var p = this.applyRedirectCommands(l, r.redirectTo, c);
                    return r.redirectTo.startsWith("/") ? Rc(p) : this.lineralizeSegments(r, p).pipe(W(function(r) {
                        return a.expandSegment(t, e, n, r.concat(o.slice(u)), i, !1)
                    }))
                }, t.prototype.matchSegmentAgainstRoute = function(t, e, n, r) {
                    var o = this;
                    if ("**" === n.path) return n.loadChildren ? this.configLoader.load(t.injector, n).pipe(q(function(t) {
                        return n._loadedConfig = t, new dc(r, {})
                    })) : Ks(new dc(r, {}));
                    var s = zc(e, n, r),
                        l = s.consumedSegments,
                        u = s.lastChild;
                    if (!s.matched) return Dc(e);
                    var c = r.slice(u);
                    return this.getChildConfig(t, n).pipe(W(function(t) {
                        var n = t.module,
                            r = t.routes,
                            s = function(t, e, n, r) {
                                return n.length > 0 && function(t, e, n) {
                                    return r.some(function(n) {
                                        return Vc(t, e, n) && Bc(n) !== Yu
                                    })
                                }(t, n) ? {
                                    segmentGroup: Uc(new dc(e, function(t, e) {
                                        var n, r, o = {};
                                        o[Yu] = e;
                                        try {
                                            for (var i = a(t), s = i.next(); !s.done; s = i.next()) {
                                                var l = s.value;
                                                "" === l.path && Bc(l) !== Yu && (o[Bc(l)] = new dc([], {}))
                                            }
                                        } catch (t) {
                                            n = {
                                                error: t
                                            }
                                        } finally {
                                            try {
                                                s && !s.done && (r = i.return) && r.call(i)
                                            } finally {
                                                if (n) throw n.error
                                            }
                                        }
                                        return o
                                    }(r, new dc(n, t.children)))),
                                    slicedSegments: []
                                } : 0 === n.length && function(t, e, n) {
                                    return r.some(function(n) {
                                        return Vc(t, e, n)
                                    })
                                }(t, n) ? {
                                    segmentGroup: Uc(new dc(t.segments, function(t, e, n, r) {
                                        var o, s, l = {};
                                        try {
                                            for (var u = a(n), c = u.next(); !c.done; c = u.next()) {
                                                var p = c.value;
                                                Vc(t, e, p) && !r[Bc(p)] && (l[Bc(p)] = new dc([], {}))
                                            }
                                        } catch (t) {
                                            o = {
                                                error: t
                                            }
                                        } finally {
                                            try {
                                                c && !c.done && (s = u.return) && s.call(u)
                                            } finally {
                                                if (o) throw o.error
                                            }
                                        }
                                        return i({}, r, l)
                                    }(t, n, r, t.children))),
                                    slicedSegments: n
                                } : {
                                    segmentGroup: t,
                                    slicedSegments: n
                                }
                            }(e, l, c, r),
                            u = s.segmentGroup,
                            p = s.slicedSegments;
                        return 0 === p.length && u.hasChildren() ? o.expandChildren(n, r, u).pipe(q(function(t) {
                            return new dc(l, t)
                        })) : 0 === r.length && 0 === p.length ? Ks(new dc(l, {})) : o.expandSegment(n, u, r, p, Yu, !0).pipe(q(function(t) {
                            return new dc(l.concat(t.segments), t.children)
                        }))
                    }))
                }, t.prototype.getChildConfig = function(t, e) {
                    var n = this;
                    return e.children ? Ks(new ec(e.children, t)) : e.loadChildren ? void 0 !== e._loadedConfig ? Ks(e._loadedConfig) : function(t, e) {
                        var n = e.canLoad;
                        return n && 0 !== n.length ? cc(K(n).pipe(q(function(n) {
                            var r = t.get(n);
                            return pc(r.canLoad ? r.canLoad(e) : r(e))
                        }))) : Ks(!0)
                    }(t.injector, e).pipe(W(function(r) {
                        return r ? n.configLoader.load(t.injector, e).pipe(q(function(t) {
                            return e._loadedConfig = t, t
                        })) : function(t) {
                            return new T(function(e) {
                                return e.error(((n = Error("NavigationCancelingError: Cannot load children because the guard of the route \"path: '" + t.path + "'\" returned false")).ngNavigationCancelingError = !0, n));
                                var n
                            })
                        }(e)
                    })) : Ks(new ec([], t))
                }, t.prototype.lineralizeSegments = function(t, e) {
                    for (var n = [], r = e.root;;) {
                        if (n = n.concat(r.segments), 0 === r.numberOfChildren) return Ks(n);
                        if (r.numberOfChildren > 1 || !r.children[Yu]) return Lc(t.redirectTo);
                        r = r.children[Yu]
                    }
                }, t.prototype.applyRedirectCommands = function(t, e, n) {
                    return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n)
                }, t.prototype.applyRedirectCreatreUrlTree = function(t, e, n, r) {
                    var o = this.createSegmentGroup(t, e.root, n, r);
                    return new hc(o, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment)
                }, t.prototype.createQueryParams = function(t, e) {
                    var n = {};
                    return uc(t, function(t, r) {
                        if ("string" == typeof t && t.startsWith(":")) {
                            var o = t.substring(1);
                            n[r] = e[o]
                        } else n[r] = t
                    }), n
                }, t.prototype.createSegmentGroup = function(t, e, n, r) {
                    var o = this,
                        i = this.createSegments(t, e.segments, n, r),
                        a = {};
                    return uc(e.children, function(e, i) {
                        a[i] = o.createSegmentGroup(t, e, n, r)
                    }), new dc(i, a)
                }, t.prototype.createSegments = function(t, e, n, r) {
                    var o = this;
                    return e.map(function(e) {
                        return e.path.startsWith(":") ? o.findPosParam(t, e, r) : o.findOrReturn(e, n)
                    })
                }, t.prototype.findPosParam = function(t, e, n) {
                    var r = n[e.path.substring(1)];
                    if (!r) throw new Error("Cannot redirect to '" + t + "'. Cannot find '" + e.path + "'.");
                    return r
                }, t.prototype.findOrReturn = function(t, e) {
                    var n, r, o = 0;
                    try {
                        for (var i = a(e), s = i.next(); !s.done; s = i.next()) {
                            var l = s.value;
                            if (l.path === t.path) return e.splice(o), l;
                            o++
                        }
                    } catch (t) {
                        n = {
                            error: t
                        }
                    } finally {
                        try {
                            s && !s.done && (r = i.return) && r.call(i)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return t
                }, t
            }();

            function zc(t, e, n) {
                if ("" === e.path) return "full" === e.pathMatch && (t.hasChildren() || n.length > 0) ? {
                    matched: !1,
                    consumedSegments: [],
                    lastChild: 0,
                    positionalParamSegments: {}
                } : {
                    matched: !0,
                    consumedSegments: [],
                    lastChild: 0,
                    positionalParamSegments: {}
                };
                var r = (e.matcher || tc)(n, t, e);
                return r ? {
                    matched: !0,
                    consumedSegments: r.consumed,
                    lastChild: r.consumed.length,
                    positionalParamSegments: r.posParams
                } : {
                    matched: !1,
                    consumedSegments: [],
                    lastChild: 0,
                    positionalParamSegments: {}
                }
            }

            function Uc(t) {
                if (1 === t.numberOfChildren && t.children[Yu]) {
                    var e = t.children[Yu];
                    return new dc(t.segments.concat(e.segments), e.children)
                }
                return t
            }

            function Vc(t, e, n) {
                return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 !== n.redirectTo
            }

            function Bc(t) {
                return t.outlet || Yu
            }
            var Hc = function() {
                function t(t) {
                    this._root = t
                }
                return Object.defineProperty(t.prototype, "root", {
                    get: function() {
                        return this._root.value
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.parent = function(t) {
                    var e = this.pathFromRoot(t);
                    return e.length > 1 ? e[e.length - 2] : null
                }, t.prototype.children = function(t) {
                    var e = qc(t, this._root);
                    return e ? e.children.map(function(t) {
                        return t.value
                    }) : []
                }, t.prototype.firstChild = function(t) {
                    var e = qc(t, this._root);
                    return e && e.children.length > 0 ? e.children[0].value : null
                }, t.prototype.siblings = function(t) {
                    var e = Qc(t, this._root);
                    return e.length < 2 ? [] : e[e.length - 2].children.map(function(t) {
                        return t.value
                    }).filter(function(e) {
                        return e !== t
                    })
                }, t.prototype.pathFromRoot = function(t) {
                    return Qc(t, this._root).map(function(t) {
                        return t.value
                    })
                }, t
            }();

            function qc(t, e) {
                if (t === e.value) return e;
                try {
                    for (var n = a(e.children), r = n.next(); !r.done; r = n.next()) {
                        var o = qc(t, r.value);
                        if (o) return o
                    }
                } catch (t) {
                    i = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (s = n.return) && s.call(n)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return null;
                var i, s
            }

            function Qc(t, e) {
                if (t === e.value) return [e];
                try {
                    for (var n = a(e.children), r = n.next(); !r.done; r = n.next()) {
                        var o = Qc(t, r.value);
                        if (o.length) return o.unshift(e), o
                    }
                } catch (t) {
                    i = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (s = n.return) && s.call(n)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return [];
                var i, s
            }
            var Zc = function() {
                function t(t, e) {
                    this.value = t, this.children = e
                }
                return t.prototype.toString = function() {
                    return "TreeNode(" + this.value + ")"
                }, t
            }();

            function Gc(t) {
                var e = {};
                return t && t.children.forEach(function(t) {
                    return e[t.value.outlet] = t
                }), e
            }
            var Kc = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.snapshot = n, tp(r, e), r
                }
                return o(e, t), e.prototype.toString = function() {
                    return this.snapshot.toString()
                }, e
            }(Hc);

            function Wc(t, e) {
                var n = function(t, e) {
                        var n = new $c([], {}, {}, "", {}, Yu, e, null, t.root, -1, {});
                        return new Jc("", new Zc(n, []))
                    }(t, e),
                    r = new Qs([new mc("", {})]),
                    o = new Qs({}),
                    i = new Qs({}),
                    a = new Qs({}),
                    s = new Qs(""),
                    l = new Xc(r, o, a, s, i, Yu, e, n.root);
                return l.snapshot = n.root, new Kc(new Zc(l, []), n)
            }
            var Xc = function() {
                function t(t, e, n, r, o, i, a, s) {
                    this.url = t, this.params = e, this.queryParams = n, this.fragment = r, this.data = o, this.outlet = i, this.component = a, this._futureSnapshot = s
                }
                return Object.defineProperty(t.prototype, "routeConfig", {
                    get: function() {
                        return this._futureSnapshot.routeConfig
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "root", {
                    get: function() {
                        return this._routerState.root
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "parent", {
                    get: function() {
                        return this._routerState.parent(this)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "firstChild", {
                    get: function() {
                        return this._routerState.firstChild(this)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "children", {
                    get: function() {
                        return this._routerState.children(this)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "pathFromRoot", {
                    get: function() {
                        return this._routerState.pathFromRoot(this)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "paramMap", {
                    get: function() {
                        return this._paramMap || (this._paramMap = this.params.pipe(q(function(t) {
                            return Ju(t)
                        }))), this._paramMap
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "queryParamMap", {
                    get: function() {
                        return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(q(function(t) {
                            return Ju(t)
                        }))), this._queryParamMap
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.toString = function() {
                    return this.snapshot ? this.snapshot.toString() : "Future(" + this._futureSnapshot + ")"
                }, t
            }();

            function Yc(t, e) {
                void 0 === e && (e = "emptyOnly");
                var n = t.pathFromRoot,
                    r = 0;
                if ("always" !== e)
                    for (r = n.length - 1; r >= 1;) {
                        var o = n[r],
                            a = n[r - 1];
                        if (o.routeConfig && "" === o.routeConfig.path) r--;
                        else {
                            if (a.component) break;
                            r--
                        }
                    }
                return function(t) {
                    return t.reduce(function(t, e) {
                        return {
                            params: i({}, t.params, e.params),
                            data: i({}, t.data, e.data),
                            resolve: i({}, t.resolve, e._resolvedData)
                        }
                    }, {
                        params: {},
                        data: {},
                        resolve: {}
                    })
                }(n.slice(r))
            }
            var $c = function() {
                    function t(t, e, n, r, o, i, a, s, l, u, c) {
                        this.url = t, this.params = e, this.queryParams = n, this.fragment = r, this.data = o, this.outlet = i, this.component = a, this.routeConfig = s, this._urlSegment = l, this._lastPathIndex = u, this._resolve = c
                    }
                    return Object.defineProperty(t.prototype, "root", {
                        get: function() {
                            return this._routerState.root
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "parent", {
                        get: function() {
                            return this._routerState.parent(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "firstChild", {
                        get: function() {
                            return this._routerState.firstChild(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "children", {
                        get: function() {
                            return this._routerState.children(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "pathFromRoot", {
                        get: function() {
                            return this._routerState.pathFromRoot(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "paramMap", {
                        get: function() {
                            return this._paramMap || (this._paramMap = Ju(this.params)), this._paramMap
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "queryParamMap", {
                        get: function() {
                            return this._queryParamMap || (this._queryParamMap = Ju(this.queryParams)), this._queryParamMap
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.toString = function() {
                        return "Route(url:'" + this.url.map(function(t) {
                            return t.toString()
                        }).join("/") + "', path:'" + (this.routeConfig ? this.routeConfig.path : "") + "')"
                    }, t
                }(),
                Jc = function(t) {
                    function e(e, n) {
                        var r = t.call(this, n) || this;
                        return r.url = e, tp(r, n), r
                    }
                    return o(e, t), e.prototype.toString = function() {
                        return ep(this._root)
                    }, e
                }(Hc);

            function tp(t, e) {
                e.value._routerState = t, e.children.forEach(function(e) {
                    return tp(t, e)
                })
            }

            function ep(t) {
                var e = t.children.length > 0 ? " { " + t.children.map(ep).join(", ") + " } " : "";
                return "" + t.value + e
            }

            function np(t) {
                if (t.snapshot) {
                    var e = t.snapshot,
                        n = t._futureSnapshot;
                    t.snapshot = n, ac(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams), e.fragment !== n.fragment && t.fragment.next(n.fragment), ac(e.params, n.params) || t.params.next(n.params),
                        function(t, e) {
                            if (t.length !== e.length) return !1;
                            for (var n = 0; n < t.length; ++n)
                                if (!ac(t[n], e[n])) return !1;
                            return !0
                        }(e.url, n.url) || t.url.next(n.url), ac(e.data, n.data) || t.data.next(n.data)
                } else t.snapshot = t._futureSnapshot, t.data.next(t._futureSnapshot.data)
            }

            function rp(t, e) {
                var n, r;
                return ac(t.params, e.params) && gc(n = t.url, r = e.url) && n.every(function(t, e) {
                    return ac(t.parameters, r[e].parameters)
                }) && !(!t.parent != !e.parent) && (!t.parent || rp(t.parent, e.parent))
            }

            function op(t) {
                return "object" == typeof t && null != t && !t.outlets && !t.segmentPath
            }

            function ip(t, e, n, r, o) {
                var i = {};
                return r && uc(r, function(t, e) {
                    i[e] = Array.isArray(t) ? t.map(function(t) {
                        return "" + t
                    }) : "" + t
                }), new hc(n.root === t ? e : function t(e, n, r) {
                    var o = {};
                    return uc(e.children, function(e, i) {
                        o[i] = e === n ? r : t(e, n, r)
                    }), new dc(e.segments, o)
                }(n.root, t, e), i, o)
            }
            var ap = function() {
                    function t(t, e, n) {
                        if (this.isAbsolute = t, this.numberOfDoubleDots = e, this.commands = n, t && n.length > 0 && op(n[0])) throw new Error("Root segment cannot have matrix parameters");
                        var r = n.find(function(t) {
                            return "object" == typeof t && null != t && t.outlets
                        });
                        if (r && r !== lc(n)) throw new Error("{outlets:{}} has to be the last command")
                    }
                    return t.prototype.toRoot = function() {
                        return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
                    }, t
                }(),
                sp = function(t, e, n) {
                    this.segmentGroup = t, this.processChildren = e, this.index = n
                };

            function lp(t) {
                return "object" == typeof t && null != t && t.outlets ? t.outlets[Yu] : "" + t
            }

            function up(t, e, n) {
                if (t || (t = new dc([], {})), 0 === t.segments.length && t.hasChildren()) return cp(t, e, n);
                var r = function(t, e, n) {
                        for (var r = 0, o = e, i = {
                                match: !1,
                                pathIndex: 0,
                                commandIndex: 0
                            }; o < t.segments.length;) {
                            if (r >= n.length) return i;
                            var a = t.segments[o],
                                s = lp(n[r]),
                                l = r < n.length - 1 ? n[r + 1] : null;
                            if (o > 0 && void 0 === s) break;
                            if (s && l && "object" == typeof l && void 0 === l.outlets) {
                                if (!dp(s, l, a)) return i;
                                r += 2
                            } else {
                                if (!dp(s, {}, a)) return i;
                                r++
                            }
                            o++
                        }
                        return {
                            match: !0,
                            pathIndex: o,
                            commandIndex: r
                        }
                    }(t, e, n),
                    o = n.slice(r.commandIndex);
                if (r.match && r.pathIndex < t.segments.length) {
                    var i = new dc(t.segments.slice(0, r.pathIndex), {});
                    return i.children[Yu] = new dc(t.segments.slice(r.pathIndex), t.children), cp(i, 0, o)
                }
                return r.match && 0 === o.length ? new dc(t.segments, {}) : r.match && !t.hasChildren() ? pp(t, e, n) : r.match ? cp(t, 0, o) : pp(t, e, n)
            }

            function cp(t, e, n) {
                if (0 === n.length) return new dc(t.segments, {});
                var r = function(t) {
                        return "object" != typeof t[0] ? ((e = {})[Yu] = t, e) : void 0 === t[0].outlets ? ((n = {})[Yu] = t, n) : t[0].outlets;
                        var e, n
                    }(n),
                    o = {};
                return uc(r, function(n, r) {
                    null !== n && (o[r] = up(t.children[r], e, n))
                }), uc(t.children, function(t, e) {
                    void 0 === r[e] && (o[e] = t)
                }), new dc(t.segments, o)
            }

            function pp(t, e, n) {
                for (var r = t.segments.slice(0, e), o = 0; o < n.length;) {
                    if ("object" == typeof n[o] && void 0 !== n[o].outlets) {
                        var i = fp(n[o].outlets);
                        return new dc(r, i)
                    }
                    if (0 === o && op(n[0])) r.push(new mc(t.segments[e].path, n[0])), o++;
                    else {
                        var a = lp(n[o]),
                            s = o < n.length - 1 ? n[o + 1] : null;
                        a && s && op(s) ? (r.push(new mc(a, hp(s))), o += 2) : (r.push(new mc(a, {})), o++)
                    }
                }
                return new dc(r, {})
            }

            function fp(t) {
                var e = {};
                return uc(t, function(t, n) {
                    null !== t && (e[n] = pp(new dc([], {}), 0, t))
                }), e
            }

            function hp(t) {
                var e = {};
                return uc(t, function(t, n) {
                    return e[n] = "" + t
                }), e
            }

            function dp(t, e, n) {
                return t == n.path && ac(e, n.parameters)
            }
            var mp = function(t) {
                    this.path = t, this.route = this.path[this.path.length - 1]
                },
                gp = function(t, e) {
                    this.component = t, this.route = e
                },
                yp = function() {
                    function t(t, e, n, r) {
                        this.future = t, this.curr = e, this.moduleInjector = n, this.forwardEvent = r, this.canActivateChecks = [], this.canDeactivateChecks = []
                    }
                    return t.prototype.initialize = function(t) {
                        var e = this.future._root;
                        this.setupChildRouteGuards(e, this.curr ? this.curr._root : null, t, [e.value])
                    }, t.prototype.checkGuards = function() {
                        var t = this;
                        return this.isDeactivating() || this.isActivating() ? this.runCanDeactivateChecks().pipe(W(function(e) {
                            return e ? t.runCanActivateChecks() : Ks(!1)
                        })) : Ks(!0)
                    }, t.prototype.resolveData = function(t) {
                        var e = this;
                        return this.isActivating() ? K(this.canActivateChecks).pipe(Xs(function(n) {
                            return e.runResolve(n.route, t)
                        }), function(t, e) {
                            return arguments.length >= 2 ? function(n) {
                                return O(Cl(t, e), el(1), ll(e))(n)
                            } : function(e) {
                                return O(Cl(function(e, n, r) {
                                    return t(e, n, r + 1)
                                }), el(1))(e)
                            }
                        }(function(t, e) {
                            return t
                        })) : Ks(null)
                    }, t.prototype.isDeactivating = function() {
                        return 0 !== this.canDeactivateChecks.length
                    }, t.prototype.isActivating = function() {
                        return 0 !== this.canActivateChecks.length
                    }, t.prototype.setupChildRouteGuards = function(t, e, n, r) {
                        var o = this,
                            i = Gc(e);
                        t.children.forEach(function(t) {
                            o.setupRouteGuards(t, i[t.value.outlet], n, r.concat([t.value])), delete i[t.value.outlet]
                        }), uc(i, function(t, e) {
                            return o.deactivateRouteAndItsChildren(t, n.getContext(e))
                        })
                    }, t.prototype.setupRouteGuards = function(t, e, n, r) {
                        var o = t.value,
                            i = e ? e.value : null,
                            a = n ? n.getContext(t.value.outlet) : null;
                        if (i && o.routeConfig === i.routeConfig) {
                            var s = this.shouldRunGuardsAndResolvers(i, o, o.routeConfig.runGuardsAndResolvers);
                            s ? this.canActivateChecks.push(new mp(r)) : (o.data = i.data, o._resolvedData = i._resolvedData), this.setupChildRouteGuards(t, e, o.component ? a ? a.children : null : n, r), s && this.canDeactivateChecks.push(new gp(a.outlet.component, i))
                        } else i && this.deactivateRouteAndItsChildren(e, a), this.canActivateChecks.push(new mp(r)), this.setupChildRouteGuards(t, null, o.component ? a ? a.children : null : n, r)
                    }, t.prototype.shouldRunGuardsAndResolvers = function(t, e, n) {
                        switch (n) {
                            case "always":
                                return !0;
                            case "paramsOrQueryParamsChange":
                                return !rp(t, e) || !ac(t.queryParams, e.queryParams);
                            case "paramsChange":
                            default:
                                return !rp(t, e)
                        }
                    }, t.prototype.deactivateRouteAndItsChildren = function(t, e) {
                        var n = this,
                            r = Gc(t),
                            o = t.value;
                        uc(r, function(t, r) {
                            n.deactivateRouteAndItsChildren(t, o.component ? e ? e.children.getContext(r) : null : e)
                        }), this.canDeactivateChecks.push(new gp(o.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, o))
                    }, t.prototype.runCanDeactivateChecks = function() {
                        var t = this;
                        return K(this.canDeactivateChecks).pipe(W(function(e) {
                            return t.runCanDeactivate(e.component, e.route)
                        }), ml(function(t) {
                            return !0 === t
                        }))
                    }, t.prototype.runCanActivateChecks = function() {
                        var t = this;
                        return K(this.canActivateChecks).pipe(Xs(function(e) {
                            return cc(K([t.fireChildActivationStart(e.route.parent), t.fireActivationStart(e.route), t.runCanActivateChild(e.path), t.runCanActivate(e.route)]))
                        }), ml(function(t) {
                            return !0 === t
                        }))
                    }, t.prototype.fireActivationStart = function(t) {
                        return null !== t && this.forwardEvent && this.forwardEvent(new Wu(t)), Ks(!0)
                    }, t.prototype.fireChildActivationStart = function(t) {
                        return null !== t && this.forwardEvent && this.forwardEvent(new Gu(t)), Ks(!0)
                    }, t.prototype.runCanActivate = function(t) {
                        var e = this,
                            n = t.routeConfig ? t.routeConfig.canActivate : null;
                        return n && 0 !== n.length ? cc(K(n).pipe(q(function(n) {
                            var r = e.getToken(n, t);
                            return pc(r.canActivate ? r.canActivate(t, e.future) : r(t, e.future)).pipe(bl())
                        }))) : Ks(!0)
                    }, t.prototype.runCanActivateChild = function(t) {
                        var e = this,
                            n = t[t.length - 1];
                        return cc(K(t.slice(0, t.length - 1).reverse().map(function(t) {
                            return e.extractCanActivateChild(t)
                        }).filter(function(t) {
                            return null !== t
                        })).pipe(q(function(t) {
                            return cc(K(t.guards).pipe(q(function(r) {
                                var o = e.getToken(r, t.node);
                                return pc(o.canActivateChild ? o.canActivateChild(n, e.future) : o(n, e.future)).pipe(bl())
                            })))
                        })))
                    }, t.prototype.extractCanActivateChild = function(t) {
                        var e = t.routeConfig ? t.routeConfig.canActivateChild : null;
                        return e && 0 !== e.length ? {
                            node: t,
                            guards: e
                        } : null
                    }, t.prototype.runCanDeactivate = function(t, e) {
                        var n = this,
                            r = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
                        return r && 0 !== r.length ? K(r).pipe(W(function(r) {
                            var o = n.getToken(r, e);
                            return pc(o.canDeactivate ? o.canDeactivate(t, e, n.curr, n.future) : o(t, e, n.curr, n.future)).pipe(bl())
                        })).pipe(ml(function(t) {
                            return !0 === t
                        })) : Ks(!0)
                    }, t.prototype.runResolve = function(t, e) {
                        return this.resolveNode(t._resolve, t).pipe(q(function(n) {
                            return t._resolvedData = n, t.data = i({}, t.data, Yc(t, e).resolve), null
                        }))
                    }, t.prototype.resolveNode = function(t, e) {
                        var n = this,
                            r = Object.keys(t);
                        if (0 === r.length) return Ks({});
                        if (1 === r.length) {
                            var o = r[0];
                            return this.getResolver(t[o], e).pipe(q(function(t) {
                                return (e = {})[o] = t, e;
                                var e
                            }))
                        }
                        var i = {};
                        return K(r).pipe(W(function(r) {
                            return n.getResolver(t[r], e).pipe(q(function(t) {
                                return i[r] = t, t
                            }))
                        })).pipe(pl(), q(function() {
                            return i
                        }))
                    }, t.prototype.getResolver = function(t, e) {
                        var n = this.getToken(t, e);
                        return pc(n.resolve ? n.resolve(e, this.future) : n(e, this.future))
                    }, t.prototype.getToken = function(t, e) {
                        var n = function(t) {
                            if (!t) return null;
                            for (var e = t.parent; e; e = e.parent) {
                                var n = e.routeConfig;
                                if (n && n._loadedConfig) return n._loadedConfig
                            }
                            return null
                        }(e);
                        return (n ? n.module.injector : this.moduleInjector).get(t)
                    }, t
                }(),
                vp = function() {},
                _p = function() {
                    function t(t, e, n, r, o) {
                        this.rootComponentType = t, this.config = e, this.urlTree = n, this.url = r, this.paramsInheritanceStrategy = o
                    }
                    return t.prototype.recognize = function() {
                        try {
                            var t = Cp(this.urlTree.root, [], [], this.config).segmentGroup,
                                e = this.processSegmentGroup(this.config, t, Yu),
                                n = new $c([], Object.freeze({}), Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, Yu, this.rootComponentType, null, this.urlTree.root, -1, {}),
                                r = new Zc(n, e),
                                o = new Jc(this.url, r);
                            return this.inheritParamsAndData(o._root), Ks(o)
                        } catch (t) {
                            return new T(function(e) {
                                return e.error(t)
                            })
                        }
                    }, t.prototype.inheritParamsAndData = function(t) {
                        var e = this,
                            n = t.value,
                            r = Yc(n, this.paramsInheritanceStrategy);
                        n.params = Object.freeze(r.params), n.data = Object.freeze(r.data), t.children.forEach(function(t) {
                            return e.inheritParamsAndData(t)
                        })
                    }, t.prototype.processSegmentGroup = function(t, e, n) {
                        return 0 === e.segments.length && e.hasChildren() ? this.processChildren(t, e) : this.processSegment(t, e, e.segments, n)
                    }, t.prototype.processChildren = function(t, e) {
                        var n, r = this,
                            o = yc(e, function(e, n) {
                                return r.processSegmentGroup(t, e, n)
                            });
                        return n = {}, o.forEach(function(t) {
                            var e = n[t.value.outlet];
                            if (e) {
                                var r = e.url.map(function(t) {
                                        return t.toString()
                                    }).join("/"),
                                    o = t.value.url.map(function(t) {
                                        return t.toString()
                                    }).join("/");
                                throw new Error("Two segments cannot have the same outlet name: '" + r + "' and '" + o + "'.")
                            }
                            n[t.value.outlet] = t.value
                        }), o.sort(function(t, e) {
                            return t.value.outlet === Yu ? -1 : e.value.outlet === Yu ? 1 : t.value.outlet.localeCompare(e.value.outlet)
                        }), o
                    }, t.prototype.processSegment = function(t, e, n, r) {
                        try {
                            for (var o = a(t), i = o.next(); !i.done; i = o.next()) {
                                var s = i.value;
                                try {
                                    return this.processSegmentAgainstRoute(s, e, n, r)
                                } catch (t) {
                                    if (!(t instanceof vp)) throw t
                                }
                            }
                        } catch (t) {
                            l = {
                                error: t
                            }
                        } finally {
                            try {
                                i && !i.done && (u = o.return) && u.call(o)
                            } finally {
                                if (l) throw l.error
                            }
                        }
                        if (this.noLeftoversInUrl(e, n, r)) return [];
                        throw new vp;
                        var l, u
                    }, t.prototype.noLeftoversInUrl = function(t, e, n) {
                        return 0 === e.length && !t.children[n]
                    }, t.prototype.processSegmentAgainstRoute = function(t, e, n, r) {
                        if (t.redirectTo) throw new vp;
                        if ((t.outlet || Yu) !== r) throw new vp;
                        var o, a = [],
                            s = [];
                        if ("**" === t.path) {
                            var l = n.length > 0 ? lc(n).parameters : {};
                            o = new $c(n, l, Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, xp(t), r, t.component, t, bp(e), wp(e) + n.length, Ep(t))
                        } else {
                            var u = function(t, e, n) {
                                if ("" === e.path) {
                                    if ("full" === e.pathMatch && (t.hasChildren() || n.length > 0)) throw new vp;
                                    return {
                                        consumedSegments: [],
                                        lastChild: 0,
                                        parameters: {}
                                    }
                                }
                                var r = (e.matcher || tc)(n, t, e);
                                if (!r) throw new vp;
                                var o = {};
                                uc(r.posParams, function(t, e) {
                                    o[e] = t.path
                                });
                                var a = r.consumed.length > 0 ? i({}, o, r.consumed[r.consumed.length - 1].parameters) : o;
                                return {
                                    consumedSegments: r.consumed,
                                    lastChild: r.consumed.length,
                                    parameters: a
                                }
                            }(e, t, n);
                            a = u.consumedSegments, s = n.slice(u.lastChild), o = new $c(a, u.parameters, Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, xp(t), r, t.component, t, bp(e), wp(e) + a.length, Ep(t))
                        }
                        var c = function(t) {
                                return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : []
                            }(t),
                            p = Cp(e, a, s, c),
                            f = p.segmentGroup,
                            h = p.slicedSegments;
                        if (0 === h.length && f.hasChildren()) {
                            var d = this.processChildren(c, f);
                            return [new Zc(o, d)]
                        }
                        if (0 === c.length && 0 === h.length) return [new Zc(o, [])];
                        var m = this.processSegment(c, f, h, Yu);
                        return [new Zc(o, m)]
                    }, t
                }();

            function bp(t) {
                for (var e = t; e._sourceSegment;) e = e._sourceSegment;
                return e
            }

            function wp(t) {
                for (var e = t, n = e._segmentIndexShift ? e._segmentIndexShift : 0; e._sourceSegment;) n += (e = e._sourceSegment)._segmentIndexShift ? e._segmentIndexShift : 0;
                return n - 1
            }

            function Cp(t, e, n, r) {
                if (n.length > 0 && function(t, e, n) {
                        return r.some(function(n) {
                            return kp(t, e, n) && Sp(n) !== Yu
                        })
                    }(t, n)) {
                    var o = new dc(e, function(t, e, n, r) {
                        var o, i, s = {};
                        s[Yu] = r, r._sourceSegment = t, r._segmentIndexShift = e.length;
                        try {
                            for (var l = a(n), u = l.next(); !u.done; u = l.next()) {
                                var c = u.value;
                                if ("" === c.path && Sp(c) !== Yu) {
                                    var p = new dc([], {});
                                    p._sourceSegment = t, p._segmentIndexShift = e.length, s[Sp(c)] = p
                                }
                            }
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                u && !u.done && (i = l.return) && i.call(l)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return s
                    }(t, e, r, new dc(n, t.children)));
                    return o._sourceSegment = t, o._segmentIndexShift = e.length, {
                        segmentGroup: o,
                        slicedSegments: []
                    }
                }
                if (0 === n.length && function(t, e, n) {
                        return r.some(function(n) {
                            return kp(t, e, n)
                        })
                    }(t, n)) {
                    var s = new dc(t.segments, function(t, e, n, r) {
                        var o, s, l = {};
                        try {
                            for (var u = a(n), c = u.next(); !c.done; c = u.next()) {
                                var p = c.value;
                                if (kp(t, e, p) && !r[Sp(p)]) {
                                    var f = new dc([], {});
                                    f._sourceSegment = t, f._segmentIndexShift = t.segments.length, l[Sp(p)] = f
                                }
                            }
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                c && !c.done && (s = u.return) && s.call(u)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return i({}, r, l)
                    }(t, n, r, t.children));
                    return s._sourceSegment = t, s._segmentIndexShift = e.length, {
                        segmentGroup: s,
                        slicedSegments: n
                    }
                }
                var l = new dc(t.segments, t.children);
                return l._sourceSegment = t, l._segmentIndexShift = e.length, {
                    segmentGroup: l,
                    slicedSegments: n
                }
            }

            function kp(t, e, n) {
                return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 === n.redirectTo
            }

            function Sp(t) {
                return t.outlet || Yu
            }

            function xp(t) {
                return t.data || {}
            }

            function Ep(t) {
                return t.resolve || {}
            }
            var Pp = function() {},
                Op = function() {
                    function t() {}
                    return t.prototype.shouldDetach = function(t) {
                        return !1
                    }, t.prototype.store = function(t, e) {}, t.prototype.shouldAttach = function(t) {
                        return !1
                    }, t.prototype.retrieve = function(t) {
                        return null
                    }, t.prototype.shouldReuseRoute = function(t, e) {
                        return t.routeConfig === e.routeConfig
                    }, t
                }(),
                Mp = new ht("ROUTES"),
                Tp = function() {
                    function t(t, e, n, r) {
                        this.loader = t, this.compiler = e, this.onLoadStartListener = n, this.onLoadEndListener = r
                    }
                    return t.prototype.load = function(t, e) {
                        var n = this;
                        return this.onLoadStartListener && this.onLoadStartListener(e), this.loadModuleFactory(e.loadChildren).pipe(q(function(r) {
                            n.onLoadEndListener && n.onLoadEndListener(e);
                            var o = r.create(t);
                            return new ec(sc(o.injector.get(Mp)).map(ic), o)
                        }))
                    }, t.prototype.loadModuleFactory = function(t) {
                        var e = this;
                        return "string" == typeof t ? K(this.loader.load(t)) : pc(t()).pipe(W(function(t) {
                            return t instanceof Ie ? Ks(t) : K(e.compiler.compileModuleAsync(t))
                        }))
                    }, t
                }(),
                Ap = function() {},
                Ip = function() {
                    function t() {}
                    return t.prototype.shouldProcessUrl = function(t) {
                        return !0
                    }, t.prototype.extract = function(t) {
                        return t
                    }, t.prototype.merge = function(t, e) {
                        return t
                    }, t
                }();

            function jp(t) {
                throw t
            }

            function Np(t) {
                return Ks(null)
            }
            var Dp = function() {
                    function t(t, e, n, r, o, i, a, s) {
                        var l = this;
                        this.rootComponentType = t, this.urlSerializer = e, this.rootContexts = n, this.location = r, this.config = s, this.navigations = new Qs(null), this.navigationId = 0, this.events = new rt, this.errorHandler = jp, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = {
                            beforePreactivation: Np,
                            afterPreactivation: Np
                        }, this.urlHandlingStrategy = new Ip, this.routeReuseStrategy = new Op, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.ngModule = o.get(Ae), this.resetConfig(s), this.currentUrlTree = new hc(new dc([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.configLoader = new Tp(i, a, function(t) {
                            return l.triggerEvent(new Qu(t))
                        }, function(t) {
                            return l.triggerEvent(new Zu(t))
                        }), this.routerState = Wc(this.currentUrlTree, this.rootComponentType), this.processNavigations()
                    }
                    return t.prototype.resetRootComponentType = function(t) {
                        this.rootComponentType = t, this.routerState.root.component = this.rootComponentType
                    }, t.prototype.initialNavigation = function() {
                        this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {
                            replaceUrl: !0
                        })
                    }, t.prototype.setUpLocationChangeListener = function() {
                        var t = this;
                        this.locationSubscription || (this.locationSubscription = this.location.subscribe(function(e) {
                            var n = t.urlSerializer.parse(e.url),
                                r = "popstate" === e.type ? "popstate" : "hashchange",
                                o = e.state && e.state.navigationId ? {
                                    navigationId: e.state.navigationId
                                } : null;
                            setTimeout(function() {
                                t.scheduleNavigation(n, r, o, {
                                    replaceUrl: !0
                                })
                            }, 0)
                        }))
                    }, Object.defineProperty(t.prototype, "url", {
                        get: function() {
                            return this.serializeUrl(this.currentUrlTree)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.triggerEvent = function(t) {
                        this.events.next(t)
                    }, t.prototype.resetConfig = function(t) {
                        nc(t), this.config = t.map(ic), this.navigated = !1, this.lastSuccessfulId = -1
                    }, t.prototype.ngOnDestroy = function() {
                        this.dispose()
                    }, t.prototype.dispose = function() {
                        this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = null)
                    }, t.prototype.createUrlTree = function(t, e) {
                        void 0 === e && (e = {});
                        var n = e.relativeTo,
                            r = e.queryParams,
                            o = e.fragment,
                            a = e.preserveQueryParams,
                            s = e.queryParamsHandling,
                            u = e.preserveFragment;
                        $e() && a && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
                        var c = n || this.routerState.root,
                            p = u ? this.currentUrlTree.fragment : o,
                            f = null;
                        if (s) switch (s) {
                            case "merge":
                                f = i({}, this.currentUrlTree.queryParams, r);
                                break;
                            case "preserve":
                                f = this.currentUrlTree.queryParams;
                                break;
                            default:
                                f = r || null
                        } else f = a ? this.currentUrlTree.queryParams : r || null;
                        return null !== f && (f = this.removeEmptyProps(f)),
                            function(t, e, n, r, o) {
                                if (0 === n.length) return ip(e.root, e.root, e, r, o);
                                var i = function(t) {
                                    if ("string" == typeof t[0] && 1 === t.length && "/" === t[0]) return new ap(!0, 0, t);
                                    var e = 0,
                                        n = !1,
                                        r = t.reduce(function(t, r, o) {
                                            if ("object" == typeof r && null != r) {
                                                if (r.outlets) {
                                                    var i = {};
                                                    return uc(r.outlets, function(t, e) {
                                                        i[e] = "string" == typeof t ? t.split("/") : t
                                                    }), l(t, [{
                                                        outlets: i
                                                    }])
                                                }
                                                if (r.segmentPath) return l(t, [r.segmentPath])
                                            }
                                            return "string" != typeof r ? l(t, [r]) : 0 === o ? (r.split("/").forEach(function(r, o) {
                                                0 == o && "." === r || (0 == o && "" === r ? n = !0 : ".." === r ? e++ : "" != r && t.push(r))
                                            }), t) : l(t, [r])
                                        }, []);
                                    return new ap(n, e, r)
                                }(n);
                                if (i.toRoot()) return ip(e.root, new dc([], {}), e, r, o);
                                var a = function(t, n, r) {
                                        if (t.isAbsolute) return new sp(e.root, !0, 0);
                                        if (-1 === r.snapshot._lastPathIndex) return new sp(r.snapshot._urlSegment, !0, 0);
                                        var o = op(t.commands[0]) ? 0 : 1;
                                        return function(e, n, i) {
                                            for (var a = r.snapshot._urlSegment, s = r.snapshot._lastPathIndex + o, l = t.numberOfDoubleDots; l > s;) {
                                                if (l -= s, !(a = a.parent)) throw new Error("Invalid number of '../'");
                                                s = a.segments.length
                                            }
                                            return new sp(a, !1, s - l)
                                        }()
                                    }(i, 0, t),
                                    s = a.processChildren ? cp(a.segmentGroup, a.index, i.commands) : up(a.segmentGroup, a.index, i.commands);
                                return ip(a.segmentGroup, s, e, r, o)
                            }(c, this.currentUrlTree, t, f, p)
                    }, t.prototype.navigateByUrl = function(t, e) {
                        void 0 === e && (e = {
                            skipLocationChange: !1
                        });
                        var n = t instanceof hc ? t : this.parseUrl(t),
                            r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
                        return this.scheduleNavigation(r, "imperative", null, e)
                    }, t.prototype.navigate = function(t, e) {
                        return void 0 === e && (e = {
                                skipLocationChange: !1
                            }),
                            function(t) {
                                for (var e = 0; e < t.length; e++) {
                                    var n = t[e];
                                    if (null == n) throw new Error("The requested path contains " + n + " segment at index " + e)
                                }
                            }(t), this.navigateByUrl(this.createUrlTree(t, e), e)
                    }, t.prototype.serializeUrl = function(t) {
                        return this.urlSerializer.serialize(t)
                    }, t.prototype.parseUrl = function(t) {
                        return this.urlSerializer.parse(t)
                    }, t.prototype.isActive = function(t, e) {
                        if (t instanceof hc) return fc(this.currentUrlTree, t, e);
                        var n = this.urlSerializer.parse(t);
                        return fc(this.currentUrlTree, n, e)
                    }, t.prototype.removeEmptyProps = function(t) {
                        return Object.keys(t).reduce(function(e, n) {
                            var r = t[n];
                            return null !== r && void 0 !== r && (e[n] = r), e
                        }, {})
                    }, t.prototype.processNavigations = function() {
                        var t = this;
                        this.navigations.pipe(Xs(function(e) {
                            return e ? (t.executeScheduledNavigation(e), e.promise.catch(function() {})) : Ks(null)
                        })).subscribe(function() {})
                    }, t.prototype.scheduleNavigation = function(t, e, n, r) {
                        var o = this.navigations.value;
                        if (o && "imperative" !== e && "imperative" === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
                        if (o && "hashchange" == e && "popstate" === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
                        if (o && "popstate" == e && "hashchange" === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
                        var i = null,
                            a = null,
                            s = new Promise(function(t, e) {
                                i = t, a = e
                            }),
                            l = ++this.navigationId;
                        return this.navigations.next({
                            id: l,
                            source: e,
                            state: n,
                            rawUrl: t,
                            extras: r,
                            resolve: i,
                            reject: a,
                            promise: s
                        }), s.catch(function(t) {
                            return Promise.reject(t)
                        })
                    }, t.prototype.executeScheduledNavigation = function(t) {
                        var e = this,
                            n = t.id,
                            r = t.rawUrl,
                            o = t.extras,
                            i = t.resolve,
                            a = t.reject,
                            s = t.source,
                            l = t.state,
                            u = this.urlHandlingStrategy.extract(r),
                            c = !this.navigated || u.toString() !== this.currentUrlTree.toString();
                        ("reload" === this.onSameUrlNavigation || c) && this.urlHandlingStrategy.shouldProcessUrl(r) ? (this.events.next(new Ru(n, this.serializeUrl(u), s, l)), Promise.resolve().then(function(t) {
                            return e.runNavigate(u, r, !!o.skipLocationChange, !!o.replaceUrl, n, null)
                        }).then(i, a)) : c && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree) ? (this.events.next(new Ru(n, this.serializeUrl(u), s, l)), Promise.resolve().then(function(t) {
                            return e.runNavigate(u, r, !1, !1, n, Wc(u, e.rootComponentType).snapshot)
                        }).then(i, a)) : (this.rawUrlTree = r, i(null))
                    }, t.prototype.runNavigate = function(t, e, n, r, o, i) {
                        var s = this;
                        return o !== this.navigationId ? (this.events.next(new Fu(o, this.serializeUrl(t), "Navigation ID " + o + " is not equal to the current navigation id " + this.navigationId)), Promise.resolve(!1)) : new Promise(function(l, u) {
                            var c, p = (i ? Ks({
                                appliedUrl: t,
                                snapshot: i
                            }) : new Fc(s.ngModule.injector, s.configLoader, s.urlSerializer, t, s.config).apply().pipe(W(function(e) {
                                return function(t, e, n, r, o) {
                                    return void 0 === o && (o = "emptyOnly"), new _p(t, e, n, r, o).recognize()
                                }(s.rootComponentType, s.config, e, s.serializeUrl(e), s.paramsInheritanceStrategy).pipe(q(function(n) {
                                    return s.events.next(new Uu(o, s.serializeUrl(t), s.serializeUrl(e), n)), {
                                        appliedUrl: e,
                                        snapshot: n
                                    }
                                }))
                            }))).pipe(W(function(t) {
                                return "boolean" == typeof t ? Ks(t) : s.hooks.beforePreactivation(t.snapshot).pipe(q(function() {
                                    return t
                                }))
                            })).pipe(q(function(t) {
                                if ("boolean" == typeof t) return t;
                                var e = t.appliedUrl,
                                    n = t.snapshot;
                                return (c = new yp(n, s.routerState.snapshot, s.ngModule.injector, function(t) {
                                    return s.triggerEvent(t)
                                })).initialize(s.rootContexts), {
                                    appliedUrl: e,
                                    snapshot: n
                                }
                            })).pipe(W(function(e) {
                                if ("boolean" == typeof e || s.navigationId !== o) return Ks(!1);
                                var n = e.appliedUrl,
                                    r = e.snapshot;
                                return s.triggerEvent(new Vu(o, s.serializeUrl(t), s.serializeUrl(n), r)), c.checkGuards().pipe(q(function(e) {
                                    return s.triggerEvent(new Bu(o, s.serializeUrl(t), s.serializeUrl(n), r, e)), {
                                        appliedUrl: n,
                                        snapshot: r,
                                        shouldActivate: e
                                    }
                                }))
                            })).pipe(W(function(e) {
                                return "boolean" == typeof e || s.navigationId !== o ? Ks(!1) : e.shouldActivate && c.isActivating() ? (s.triggerEvent(new Hu(o, s.serializeUrl(t), s.serializeUrl(e.appliedUrl), e.snapshot)), c.resolveData(s.paramsInheritanceStrategy).pipe(q(function() {
                                    return s.triggerEvent(new qu(o, s.serializeUrl(t), s.serializeUrl(e.appliedUrl), e.snapshot)), e
                                }))) : Ks(e)
                            })).pipe(W(function(t) {
                                return "boolean" == typeof t || s.navigationId !== o ? Ks(!1) : s.hooks.afterPreactivation(t.snapshot).pipe(q(function() {
                                    return t
                                }))
                            })).pipe(q(function(t) {
                                if ("boolean" == typeof t || s.navigationId !== o) return !1;
                                var e, n, r, i = t.appliedUrl,
                                    l = t.shouldActivate;
                                return l ? {
                                    appliedUrl: i,
                                    state: (r = function t(e, n, r) {
                                        if (r && e.shouldReuseRoute(n.value, r.value.snapshot)) {
                                            (u = r.value)._futureSnapshot = n.value;
                                            var o = function(e, n, r) {
                                                return n.children.map(function(n) {
                                                    try {
                                                        for (var o = a(r.children), i = o.next(); !i.done; i = o.next()) {
                                                            var s = i.value;
                                                            if (e.shouldReuseRoute(s.value.snapshot, n.value)) return t(e, n, s)
                                                        }
                                                    } catch (t) {
                                                        l = {
                                                            error: t
                                                        }
                                                    } finally {
                                                        try {
                                                            i && !i.done && (u = o.return) && u.call(o)
                                                        } finally {
                                                            if (l) throw l.error
                                                        }
                                                    }
                                                    return t(e, n);
                                                    var l, u
                                                })
                                            }(e, n, r);
                                            return new Zc(u, o)
                                        }
                                        var i = e.retrieve(n.value);
                                        if (i) {
                                            var s = i.route;
                                            return function t(e, n) {
                                                if (e.value.routeConfig !== n.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
                                                if (e.children.length !== n.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                                                n.value._futureSnapshot = e.value;
                                                for (var r = 0; r < e.children.length; ++r) t(e.children[r], n.children[r])
                                            }(n, s), s
                                        }
                                        var l, u = new Xc(new Qs((l = n.value).url), new Qs(l.params), new Qs(l.queryParams), new Qs(l.fragment), new Qs(l.data), l.outlet, l.component, l);
                                        return o = n.children.map(function(n) {
                                            return t(e, n)
                                        }), new Zc(u, o)
                                    }(s.routeReuseStrategy, (e = t.snapshot)._root, (n = s.routerState) ? n._root : void 0), new Kc(r, e)),
                                    shouldActivate: l
                                } : {
                                    appliedUrl: i,
                                    state: null,
                                    shouldActivate: l
                                }
                            }));
                            s.activateRoutes(p, s.routerState, s.currentUrlTree, o, t, e, n, r, l, u)
                        })
                    }, t.prototype.activateRoutes = function(t, e, n, r, o, i, a, s, l, u) {
                        var c, p = this;
                        t.forEach(function(t) {
                            if ("boolean" != typeof t && t.shouldActivate && r === p.navigationId && t.state) {
                                var n = t.state;
                                if (p.currentUrlTree = t.appliedUrl, p.rawUrlTree = p.urlHandlingStrategy.merge(p.currentUrlTree, i), p.routerState = n, !a) {
                                    var o = p.urlSerializer.serialize(p.rawUrlTree);
                                    p.location.isCurrentPathEqualTo(o) || s ? p.location.replaceState(o, "", {
                                        navigationId: r
                                    }) : p.location.go(o, "", {
                                        navigationId: r
                                    })
                                }
                                new Rp(p.routeReuseStrategy, n, e, function(t) {
                                    return p.triggerEvent(t)
                                }).activate(p.rootContexts), c = !0
                            } else c = !1
                        }).then(function() {
                            c ? (p.navigated = !0, p.lastSuccessfulId = r, p.events.next(new Lu(r, p.serializeUrl(o), p.serializeUrl(p.currentUrlTree))), l(!0)) : (p.resetUrlToCurrentUrlTree(), p.events.next(new Fu(r, p.serializeUrl(o), "")), l(!1))
                        }, function(t) {
                            if ((a = t) && a.ngNavigationCancelingError) p.navigated = !0, p.resetStateAndUrl(e, n, i), p.events.next(new Fu(r, p.serializeUrl(o), t.message)), l(!1);
                            else {
                                p.resetStateAndUrl(e, n, i), p.events.next(new zu(r, p.serializeUrl(o), t));
                                try {
                                    l(p.errorHandler(t))
                                } catch (t) {
                                    u(t)
                                }
                            }
                            var a
                        })
                    }, t.prototype.resetStateAndUrl = function(t, e, n) {
                        this.routerState = t, this.currentUrlTree = e, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n), this.resetUrlToCurrentUrlTree()
                    }, t.prototype.resetUrlToCurrentUrlTree = function() {
                        this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", {
                            navigationId: this.lastSuccessfulId
                        })
                    }, t
                }(),
                Rp = function() {
                    function t(t, e, n, r) {
                        this.routeReuseStrategy = t, this.futureState = e, this.currState = n, this.forwardEvent = r
                    }
                    return t.prototype.activate = function(t) {
                        var e = this.futureState._root,
                            n = this.currState ? this.currState._root : null;
                        this.deactivateChildRoutes(e, n, t), np(this.futureState.root), this.activateChildRoutes(e, n, t)
                    }, t.prototype.deactivateChildRoutes = function(t, e, n) {
                        var r = this,
                            o = Gc(e);
                        t.children.forEach(function(t) {
                            var e = t.value.outlet;
                            r.deactivateRoutes(t, o[e], n), delete o[e]
                        }), uc(o, function(t, e) {
                            r.deactivateRouteAndItsChildren(t, n)
                        })
                    }, t.prototype.deactivateRoutes = function(t, e, n) {
                        var r = t.value,
                            o = e ? e.value : null;
                        if (r === o)
                            if (r.component) {
                                var i = n.getContext(r.outlet);
                                i && this.deactivateChildRoutes(t, e, i.children)
                            } else this.deactivateChildRoutes(t, e, n);
                        else o && this.deactivateRouteAndItsChildren(e, n)
                    }, t.prototype.deactivateRouteAndItsChildren = function(t, e) {
                        this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, e) : this.deactivateRouteAndOutlet(t, e)
                    }, t.prototype.detachAndStoreRouteSubtree = function(t, e) {
                        var n = e.getContext(t.value.outlet);
                        if (n && n.outlet) {
                            var r = n.outlet.detach(),
                                o = n.children.onOutletDeactivated();
                            this.routeReuseStrategy.store(t.value.snapshot, {
                                componentRef: r,
                                route: t,
                                contexts: o
                            })
                        }
                    }, t.prototype.deactivateRouteAndOutlet = function(t, e) {
                        var n = this,
                            r = e.getContext(t.value.outlet);
                        if (r) {
                            var o = Gc(t),
                                i = t.value.component ? r.children : e;
                            uc(o, function(t, e) {
                                return n.deactivateRouteAndItsChildren(t, i)
                            }), r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated())
                        }
                    }, t.prototype.activateChildRoutes = function(t, e, n) {
                        var r = this,
                            o = Gc(e);
                        t.children.forEach(function(t) {
                            r.activateRoutes(t, o[t.value.outlet], n), r.forwardEvent(new Xu(t.value.snapshot))
                        }), t.children.length && this.forwardEvent(new Ku(t.value.snapshot))
                    }, t.prototype.activateRoutes = function(t, e, n) {
                        var r = t.value,
                            o = e ? e.value : null;
                        if (np(r), r === o)
                            if (r.component) {
                                var i = n.getOrCreateContext(r.outlet);
                                this.activateChildRoutes(t, e, i.children)
                            } else this.activateChildRoutes(t, e, n);
                        else if (r.component)
                            if (i = n.getOrCreateContext(r.outlet), this.routeReuseStrategy.shouldAttach(r.snapshot)) {
                                var a = this.routeReuseStrategy.retrieve(r.snapshot);
                                this.routeReuseStrategy.store(r.snapshot, null), i.children.onOutletReAttached(a.contexts), i.attachRef = a.componentRef, i.route = a.route.value, i.outlet && i.outlet.attach(a.componentRef, a.route.value), Lp(a.route)
                            } else {
                                var s = function(t) {
                                        for (var e = r.snapshot.parent; e; e = e.parent) {
                                            var n = e.routeConfig;
                                            if (n && n._loadedConfig) return n._loadedConfig;
                                            if (n && n.component) return null
                                        }
                                        return null
                                    }(),
                                    l = s ? s.module.componentFactoryResolver : null;
                                i.route = r, i.resolver = l, i.outlet && i.outlet.activateWith(r, l), this.activateChildRoutes(t, null, i.children)
                            }
                        else this.activateChildRoutes(t, null, n)
                    }, t
                }();

            function Lp(t) {
                np(t.value), t.children.forEach(Lp)
            }
            var Fp = function() {
                function t(t, e, n) {
                    var r = this;
                    this.router = t, this.route = e, this.locationStrategy = n, this.commands = [], this.subscription = t.events.subscribe(function(t) {
                        t instanceof Lu && r.updateTargetUrlAndHref()
                    })
                }
                return Object.defineProperty(t.prototype, "routerLink", {
                    set: function(t) {
                        this.commands = null != t ? Array.isArray(t) ? t : [t] : []
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "preserveQueryParams", {
                    set: function(t) {
                        $e() && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."), this.preserve = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.ngOnChanges = function(t) {
                    this.updateTargetUrlAndHref()
                }, t.prototype.ngOnDestroy = function() {
                    this.subscription.unsubscribe()
                }, t.prototype.onClick = function(t, e, n, r) {
                    if (0 !== t || e || n || r) return !0;
                    if ("string" == typeof this.target && "_self" != this.target) return !0;
                    var o = {
                        skipLocationChange: zp(this.skipLocationChange),
                        replaceUrl: zp(this.replaceUrl)
                    };
                    return this.router.navigateByUrl(this.urlTree, o), !1
                }, t.prototype.updateTargetUrlAndHref = function() {
                    this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))
                }, Object.defineProperty(t.prototype, "urlTree", {
                    get: function() {
                        return this.router.createUrlTree(this.commands, {
                            relativeTo: this.route,
                            queryParams: this.queryParams,
                            fragment: this.fragment,
                            preserveQueryParams: zp(this.preserve),
                            queryParamsHandling: this.queryParamsHandling,
                            preserveFragment: zp(this.preserveFragment)
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }();

            function zp(t) {
                return "" === t || !!t
            }
            var Up = function() {
                    return function() {
                        this.outlet = null, this.route = null, this.resolver = null, this.children = new Vp, this.attachRef = null
                    }
                }(),
                Vp = function() {
                    function t() {
                        this.contexts = new Map
                    }
                    return t.prototype.onChildOutletCreated = function(t, e) {
                        var n = this.getOrCreateContext(t);
                        n.outlet = e, this.contexts.set(t, n)
                    }, t.prototype.onChildOutletDestroyed = function(t) {
                        var e = this.getContext(t);
                        e && (e.outlet = null)
                    }, t.prototype.onOutletDeactivated = function() {
                        var t = this.contexts;
                        return this.contexts = new Map, t
                    }, t.prototype.onOutletReAttached = function(t) {
                        this.contexts = t
                    }, t.prototype.getOrCreateContext = function(t) {
                        var e = this.getContext(t);
                        return e || (e = new Up, this.contexts.set(t, e)), e
                    }, t.prototype.getContext = function(t) {
                        return this.contexts.get(t) || null
                    }, t
                }(),
                Bp = function() {
                    function t(t, e, n, r, o) {
                        this.parentContexts = t, this.location = e, this.resolver = n, this.changeDetector = o, this.activated = null, this._activatedRoute = null, this.activateEvents = new Le, this.deactivateEvents = new Le, this.name = r || Yu, t.onChildOutletCreated(this.name, this)
                    }
                    return t.prototype.ngOnDestroy = function() {
                        this.parentContexts.onChildOutletDestroyed(this.name)
                    }, t.prototype.ngOnInit = function() {
                        if (!this.activated) {
                            var t = this.parentContexts.getContext(this.name);
                            t && t.route && (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.resolver || null))
                        }
                    }, Object.defineProperty(t.prototype, "isActivated", {
                        get: function() {
                            return !!this.activated
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "component", {
                        get: function() {
                            if (!this.activated) throw new Error("Outlet is not activated");
                            return this.activated.instance
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "activatedRoute", {
                        get: function() {
                            if (!this.activated) throw new Error("Outlet is not activated");
                            return this._activatedRoute
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "activatedRouteData", {
                        get: function() {
                            return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.detach = function() {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        this.location.detach();
                        var t = this.activated;
                        return this.activated = null, this._activatedRoute = null, t
                    }, t.prototype.attach = function(t, e) {
                        this.activated = t, this._activatedRoute = e, this.location.insert(t.hostView)
                    }, t.prototype.deactivate = function() {
                        if (this.activated) {
                            var t = this.component;
                            this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(t)
                        }
                    }, t.prototype.activateWith = function(t, e) {
                        if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
                        this._activatedRoute = t;
                        var n = (e = e || this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),
                            r = this.parentContexts.getOrCreateContext(this.name).children,
                            o = new Hp(t, r, this.location.injector);
                        this.activated = this.location.createComponent(n, this.location.length, o), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
                    }, t
                }(),
                Hp = function() {
                    function t(t, e, n) {
                        this.route = t, this.childContexts = e, this.parent = n
                    }
                    return t.prototype.get = function(t, e) {
                        return t === Xc ? this.route : t === Vp ? this.childContexts : this.parent.get(t, e)
                    }, t
                }(),
                qp = function() {},
                Qp = function() {
                    function t() {}
                    return t.prototype.preload = function(t, e) {
                        return e().pipe(fl(function() {
                            return Ks(null)
                        }))
                    }, t
                }(),
                Zp = function() {
                    function t() {}
                    return t.prototype.preload = function(t, e) {
                        return Ks(null)
                    }, t
                }(),
                Gp = function() {
                    function t(t, e, n, r, o) {
                        this.router = t, this.injector = r, this.preloadingStrategy = o, this.loader = new Tp(e, n, function(e) {
                            return t.triggerEvent(new Qu(e))
                        }, function(e) {
                            return t.triggerEvent(new Zu(e))
                        })
                    }
                    return t.prototype.setUpPreloading = function() {
                        var t = this;
                        this.subscription = this.router.events.pipe(Ys(function(t) {
                            return t instanceof Lu
                        }), Xs(function() {
                            return t.preload()
                        })).subscribe(function() {})
                    }, t.prototype.preload = function() {
                        var t = this.injector.get(Ae);
                        return this.processRoutes(t, this.router.config)
                    }, t.prototype.ngOnDestroy = function() {
                        this.subscription.unsubscribe()
                    }, t.prototype.processRoutes = function(t, e) {
                        var n, r, o = [];
                        try {
                            for (var i = a(e), s = i.next(); !s.done; s = i.next()) {
                                var l = s.value;
                                if (l.loadChildren && !l.canLoad && l._loadedConfig) {
                                    var u = l._loadedConfig;
                                    o.push(this.processRoutes(u.module, u.routes))
                                } else l.loadChildren && !l.canLoad ? o.push(this.preloadConfig(t, l)) : l.children && o.push(this.processRoutes(t, l.children))
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                s && !s.done && (r = i.return) && r.call(i)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return K(o).pipe(J(), q(function(t) {}))
                    }, t.prototype.preloadConfig = function(t, e) {
                        var n = this;
                        return this.preloadingStrategy.preload(e, function() {
                            return n.loader.load(t.injector, e).pipe(W(function(t) {
                                return e._loadedConfig = t, n.processRoutes(t.module, t.routes)
                            }))
                        })
                    }, t
                }(),
                Kp = new ht("ROUTER_CONFIGURATION"),
                Wp = new ht("ROUTER_FORROOT_GUARD"),
                Xp = [Cs, {
                    provide: vc,
                    useClass: _c
                }, {
                    provide: Dp,
                    useFactory: nf,
                    deps: [on, vc, Vp, Cs, Lt, pn, be, Mp, Kp, [Ap, new Tt],
                        [Pp, new Tt]
                    ]
                }, Vp, {
                    provide: Xc,
                    useFactory: rf,
                    deps: [Dp]
                }, {
                    provide: pn,
                    useClass: mn
                }, Gp, Zp, Qp, {
                    provide: Kp,
                    useValue: {
                        enableTracing: !1
                    }
                }];

            function Yp() {
                return new Je("Router", Dp)
            }
            var $p = function() {
                function t(t, e) {}
                return t.forRoot = function(e, n) {
                    return {
                        ngModule: t,
                        providers: [Xp, ef(e), {
                                provide: Wp,
                                useFactory: tf,
                                deps: [
                                    [Dp, new Tt, new It]
                                ]
                            }, {
                                provide: Kp,
                                useValue: n || {}
                            }, {
                                provide: bs,
                                useFactory: Jp,
                                deps: [vs, [new Mt(ws), new Tt], Kp]
                            }, {
                                provide: qp,
                                useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : Zp
                            }, {
                                provide: Je,
                                multi: !0,
                                useFactory: Yp
                            },
                            [ of , {
                                provide: ce,
                                multi: !0,
                                useFactory: af,
                                deps: [ of ]
                            }, {
                                provide: lf,
                                useFactory: sf,
                                deps: [ of ]
                            }, {
                                provide: ye,
                                multi: !0,
                                useExisting: lf
                            }]
                        ]
                    }
                }, t.forChild = function(e) {
                    return {
                        ngModule: t,
                        providers: [ef(e)]
                    }
                }, t
            }();

            function Jp(t, e, n) {
                return void 0 === n && (n = {}), n.useHash ? new Ss(t, e) : new xs(t, e)
            }

            function tf(t) {
                if (t) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
                return "guarded"
            }

            function ef(t) {
                return [{
                    provide: gt,
                    multi: !0,
                    useValue: t
                }, {
                    provide: Mp,
                    multi: !0,
                    useValue: t
                }]
            }

            function nf(t, e, n, r, o, i, a, s, l, u, c) {
                void 0 === l && (l = {});
                var p = new Dp(null, e, n, r, o, i, a, sc(s));
                if (u && (p.urlHandlingStrategy = u), c && (p.routeReuseStrategy = c), l.errorHandler && (p.errorHandler = l.errorHandler), l.enableTracing) {
                    var f = El();
                    p.events.subscribe(function(t) {
                        f.logGroup("Router Event: " + t.constructor.name), f.log(t.toString()), f.log(t), f.logGroupEnd()
                    })
                }
                return l.onSameUrlNavigation && (p.onSameUrlNavigation = l.onSameUrlNavigation), l.paramsInheritanceStrategy && (p.paramsInheritanceStrategy = l.paramsInheritanceStrategy), p
            }

            function rf(t) {
                return t.routerState.root
            }
            var of = function() {
                function t(t) {
                    this.injector = t, this.initNavigation = !1, this.resultOfPreactivationDone = new rt
                }
                return t.prototype.appInitializer = function() {
                    var t = this;
                    return this.injector.get(_s, Promise.resolve(null)).then(function() {
                        var e = null,
                            n = new Promise(function(t) {
                                return e = t
                            }),
                            r = t.injector.get(Dp),
                            o = t.injector.get(Kp);
                        if (t.isLegacyDisabled(o) || t.isLegacyEnabled(o)) e(!0);
                        else if ("disabled" === o.initialNavigation) r.setUpLocationChangeListener(), e(!0);
                        else {
                            if ("enabled" !== o.initialNavigation) throw new Error("Invalid initialNavigation options: '" + o.initialNavigation + "'");
                            r.hooks.afterPreactivation = function() {
                                return t.initNavigation ? Ks(null) : (t.initNavigation = !0, e(!0), t.resultOfPreactivationDone)
                            }, r.initialNavigation()
                        }
                        return n
                    })
                }, t.prototype.bootstrapListener = function(t) {
                    var e = this.injector.get(Kp),
                        n = this.injector.get(Gp),
                        r = this.injector.get(Dp),
                        o = this.injector.get(on);
                    t === o.components[0] && (this.isLegacyEnabled(e) ? r.initialNavigation() : this.isLegacyDisabled(e) && r.setUpLocationChangeListener(), n.setUpPreloading(), r.resetRootComponentType(o.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
                }, t.prototype.isLegacyEnabled = function(t) {
                    return "legacy_enabled" === t.initialNavigation || !0 === t.initialNavigation || void 0 === t.initialNavigation
                }, t.prototype.isLegacyDisabled = function(t) {
                    return "legacy_disabled" === t.initialNavigation || !1 === t.initialNavigation
                }, t
            }();

            function af(t) {
                return t.appInitializer.bind(t)
            }

            function sf(t) {
                return t.bootstrapListener.bind(t)
            }
            var lf = new ht("Router Initializer"),
                uf = Fr({
                    encapsulation: 0,
                    styles: [
                        ["*[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.navigator-container[_ngcontent-%COMP%]{font-family:'Cormorant Garamond',serif;display:flex;position:fixed;min-width:100vw;min-height:100vh;background:rgba(85,85,85,.9);top:0;left:0;z-index:5;justify-content:center;align-items:center}.navLinks[_ngcontent-%COMP%]{width:90vw;display:flex;justify-content:center;align-items:center;flex-direction:column}.navLink[_ngcontent-%COMP%]{padding:2rem 0;margin:1rem 0;width:40%;min-width:40rem;font-size:2.4rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;text-align:center;background:rgba(248,248,248,.5);cursor:pointer;border-radius:.5rem}@media (max-width:1300px){.navLink[_ngcontent-%COMP%]{width:60%}}@media (max-width:640px){.navLink[_ngcontent-%COMP%]{width:100%}}.navLink[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{color:#fff;text-decoration:none}"]
                    ],
                    data: {
                        animation: [{
                            type: 7,
                            name: "slideIn",
                            definitions: [{
                                type: 1,
                                expr: "* => *",
                                animation: [{
                                    type: 11,
                                    selector: ":enter",
                                    animation: {
                                        type: 6,
                                        styles: {
                                            marginLeft: "50%",
                                            opacity: 0
                                        },
                                        offset: null
                                    },
                                    options: {
                                        optional: !0
                                    }
                                }, {
                                    type: 11,
                                    selector: ":leave",
                                    animation: {
                                        type: 6,
                                        styles: {
                                            marginLeft: "0%",
                                            opacity: 1
                                        },
                                        offset: null
                                    },
                                    options: {
                                        optional: !0
                                    }
                                }, {
                                    type: 11,
                                    selector: ":enter",
                                    animation: [{
                                        type: 12,
                                        timings: "0.2s",
                                        animation: [{
                                            type: 4,
                                            styles: {
                                                type: 5,
                                                steps: [{
                                                    type: 6,
                                                    styles: {
                                                        offset: 0
                                                    },
                                                    offset: null
                                                }, {
                                                    type: 6,
                                                    styles: {
                                                        marginLeft: "0%",
                                                        opacity: .8,
                                                        offset: .8
                                                    },
                                                    offset: null
                                                }, {
                                                    type: 6,
                                                    styles: {
                                                        marginLeft: "-10%",
                                                        opacity: 1,
                                                        offset: .9
                                                    },
                                                    offset: null
                                                }, {
                                                    type: 6,
                                                    styles: {
                                                        marginLeft: "0%",
                                                        opacity: 1,
                                                        offset: 1
                                                    },
                                                    offset: null
                                                }]
                                            },
                                            timings: "0.5s ease-out"
                                        }]
                                    }],
                                    options: {
                                        optional: !0
                                    }
                                }, {
                                    type: 11,
                                    selector: ":leave",
                                    animation: [{
                                        type: 12,
                                        timings: "0.2s",
                                        animation: [{
                                            type: 4,
                                            styles: {
                                                type: 5,
                                                steps: [{
                                                    type: 6,
                                                    styles: {
                                                        offset: 0
                                                    },
                                                    offset: null
                                                }, {
                                                    type: 6,
                                                    styles: {
                                                        marginLeft: "10%",
                                                        offset: .1
                                                    },
                                                    offset: null
                                                }, {
                                                    type: 6,
                                                    styles: {
                                                        marginLeft: "0%",
                                                        offset: .4
                                                    },
                                                    offset: null
                                                }, {
                                                    type: 6,
                                                    styles: {
                                                        marginLeft: "-50%",
                                                        opacity: 0,
                                                        offset: 1
                                                    },
                                                    offset: null
                                                }]
                                            },
                                            timings: "0.5s ease-in"
                                        }]
                                    }],
                                    options: {
                                        optional: !0
                                    }
                                }],
                                options: null
                            }],
                            options: {}
                        }]
                    }
                });

            function cf(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 6, "div", [
                    ["class", "navLink"]
                ], null, [
                    [null, "click"]
                ], function(t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== t.component.onNavItemClick(n, t.context.$implicit.url) && r), r
                }, null, null)), ei(1, 278528, null, 0, Us, [Vn, cn, un], {
                    ngStyle: [0, "ngStyle"]
                }, null), xi(2, {
                    transform: 0
                }), (t()(), fo(3, 0, null, null, 3, "div", [], null, null, null, null, null)), ei(4, 278528, null, 0, Us, [Vn, cn, un], {
                    ngStyle: [0, "ngStyle"]
                }, null), xi(5, {
                    transform: 0
                }), (t()(), Pi(6, null, [" ", " "]))], function(t, e) {
                    t(e, 1, 0, t(e, 2, 0, e.context.even ? "translateX(10%)" : "translateX(-10%)")), t(e, 4, 0, t(e, 5, 0, e.context.even ? "translateX(-10%)" : "translateX(10%)"))
                }, function(t, e) {
                    t(e, 6, 0, e.context.$implicit.displayName)
                })
            }

            function pf(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 4, "div", [
                    ["appEscCancelation", ""],
                    ["class", "navigator-container"]
                ], null, [
                    [null, "appEscCancelation"],
                    [null, "click"],
                    ["document", "keydown"]
                ], function(t, e, n) {
                    var r = !0,
                        o = t.component;
                    return "document:keydown" === e && (r = !1 !== Bo(t, 1).onKeydownHandler(n) && r), "appEscCancelation" === e && (r = !1 !== o.onBgClick() && r), "click" === e && (r = !1 !== o.onBgClick() && r), r
                }, null, null)), ei(1, 16384, null, 0, Hs, [], null, {
                    appEscCancelation: "appEscCancelation"
                }), (t()(), fo(2, 0, null, null, 2, "div", [
                    ["class", "navLinks"]
                ], [
                    [24, "@slideIn", 0]
                ], null, null, null, null)), (t()(), po(16777216, null, null, 1, null, cf)), ei(4, 802816, null, 0, Ds, [vn, yn, Un], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(t, e) {
                    t(e, 4, 0, e.component.navLinks)
                }, function(t, e) {
                    t(e, 2, 0, void 0)
                })
            }
            var ff = function() {
                    function t() {}
                    return t.prototype.ngOnInit = function() {
                        this.logoStyles = {
                            height: this.height,
                            width: this.width
                        }, this.imgStyle = {
                            borderWidth: this.borderWidth
                        }
                    }, t.prototype.ngOnChanges = function(t) {
                        this.ngOnInit()
                    }, t
                }(),
                hf = Fr({
                    encapsulation: 0,
                    styles: [
                        [".profile-logo[_ngcontent-%COMP%]{height:14rem;width:14rem;display:inline-block;position:relative;z-index:5;border-radius:50%;-webkit-perspective:1500px;perspective:1500px;transition:all .2s ease-in-out;-webkit-animation:1s ease-in-out .4s both dropin;animation:1s ease-in-out .4s both dropin}.profile-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;border:.8rem solid #e74c3c;height:100%;width:100%;border-radius:50%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:all .5s ease-in-out;-webkit-perspective:1500px;perspective:1500px}.profile-logo[_ngcontent-%COMP%]::after{content:'Salekur Rahaman';display:flex;position:absolute;height:100%;width:100%;color:#fff;justify-content:center;align-items:center;text-align:center;border-radius:50%;background-color:#e74c3c;border:.8rem solid #db381b;top:0;left:0;z-index:10;font-size:.8em;transition:all .5s ease-in-out;-webkit-transform:rotateY(180deg);transform:rotateY(180deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1500px;perspective:1500px}.profile-logo[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.profile-logo[_ngcontent-%COMP%]:hover::after{-webkit-transform:rotateY(0);transform:rotateY(0)}"]
                    ],
                    data: {}
                });

            function df(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 3, "div", [
                    ["class", "profile-logo"]
                ], null, null, null, null, null)), ei(1, 278528, null, 0, Us, [Vn, cn, un], {
                    ngStyle: [0, "ngStyle"]
                }, null), (t()(), fo(2, 0, null, null, 1, "img", [
                    ["alt", "my pic"],
                    ["src", "assets/img/Profile-Pic-Ritwick-Dey2.jpg"]
                ], null, null, null, null, null)), ei(3, 278528, null, 0, Us, [Vn, cn, un], {
                    ngStyle: [0, "ngStyle"]
                }, null)], function(t, e) {
                    var n = e.component;
                    t(e, 1, 0, n.logoStyles), t(e, 3, 0, n.imgStyle)
                }, null)
            }
            var mf = function() {
                    function t() {
                        this.ExploreMe = new Le, this.startTadaAnimation = !1
                    }
                    return t.prototype.ngOnInit = function() {
                        var t = this;
                        setInterval(function() {
                            t.startTadaAnimation = !t.startTadaAnimation
                        }, 3e3)
                    }, t.prototype.onExploreMeClick = function() {
                        this.ExploreMe.emit()
                    }, t
                }(),
                gf = Fr({
                    encapsulation: 0,
                    styles: [
                        [".root-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100vh;width:100vw}.overlay[_ngcontent-%COMP%]{height:100vh;width:100vw;overflow:hidden;z-index:-1;display:block;background:#2c3e50;position:fixed;right:0;top:0;pointer-events:none;-webkit-clip-path:ellipse(50vw 40vh at 50% 50%);clip-path:ellipse(50vw 40vh at 50% 50%);-webkit-transform:scale(2) translate(27vw,-18vh) rotate(335deg);transform:scale(2) translate(27vw,-18vh) rotate(335deg);-webkit-animation:1s ease-in-out .2s both leftToRight;animation:1s ease-in-out .2s both leftToRight}.dp-logo[_ngcontent-%COMP%]{font-size:2rem;-webkit-animation:1s ease-in-out .2s both fadeIn;animation:1s ease-in-out .2s both fadeIn}.navbar[_ngcontent-%COMP%]{width:100%;color:#f8f8f8;font-size:2rem;padding:1.6rem;display:flex;justify-content:center;align-items:center}.nav-items[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{display:inline-block;padding:.2rem 0;margin:.6rem 1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;border-bottom:.3rem solid #17a598;color:#f8f8f8;text-decoration:none}.container[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;justify-content:center;align-items:center;height:100%;font-size:1.6rem;color:#f8f8f8;margin-top:5%}.short-bio[_ngcontent-%COMP%]{font-size:1.6rem;padding:1.6rem;font-weight:400;-webkit-animation:1s ease-in-out .2s both fadeIn;animation:1s ease-in-out .2s both fadeIn}.quote[_ngcontent-%COMP%]{font-family:'Cormorant Garamond',serif;font-size:1.8rem;padding:0 1rem 1rem;-webkit-animation:1s ease-in-out .4s both fadeIn;animation:1s ease-in-out .4s both fadeIn}.name[_ngcontent-%COMP%]{font-family:'Cormorant Garamond',serif;font-size:2.4rem;font-weight:700;line-height:1.6;padding-top:.6rem;text-transform:uppercase;letter-spacing:.4rem;word-spacing:.2rem;text-align:center;margin-bottom:-2.5rem;-webkit-animation:1s ease-in-out .6s both fadeIn;animation:1s ease-in-out .6s both fadeIn}.name[_ngcontent-%COMP%]:hover   .strip[_ngcontent-%COMP%]::after{left:-1rem}.name[_ngcontent-%COMP%]:hover   .strip[_ngcontent-%COMP%]::before{left:1rem}.strip[_ngcontent-%COMP%]{display:inline-block;position:relative;width:28rem;margin:auto auto 2rem;-webkit-animation:1s ease-in-out .8s both fadeIn;animation:1s ease-in-out .8s both fadeIn}.strip[_ngcontent-%COMP%]::before{transition:.3s all ease-in-out;content:'';position:absolute;display:inline-block;height:2px;background-color:#e74c3c;margin:auto;width:100%;top:0;left:-1rem}.strip[_ngcontent-%COMP%]::after{transition:.3s all ease-in-out;position:absolute;display:inline-block;content:'';height:2px;background-color:#e74c3c;margin:auto;width:100%;top:4px;left:1rem}.special-btn[_ngcontent-%COMP%]{min-width:15rem;line-height:2.2;font-size:1.4rem;padding:.5rem;margin-top:2rem;background-color:#e74c3c;color:#fff;border:none;outline:0;border-radius:100rem;cursor:pointer;transition:all .3s ease-in-out;-webkit-animation:1s ease-in-out 1s both fadeIn;animation:1s ease-in-out 1s both fadeIn;box-shadow:7px 5px 8px 0 rgba(0,0,0,.31);position:relative}.special-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;-webkit-transform:translateX(.7rem);transform:translateX(.7rem);display:inline-block;transition:all .3s ease-in-out}.special-btn[_ngcontent-%COMP%]:hover{background-color:#db381b;-webkit-animation-play-state:paused;animation-play-state:paused}.special-btn[_ngcontent-%COMP%]:hover::after{-webkit-transform:translateX(.2rem);transform:translateX(.2rem);opacity:1}.special-btn[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{-webkit-transform:translateX(-.2rem);transform:translateX(-.2rem)}.special-btn[_ngcontent-%COMP%]:active{-webkit-transform:scale(.8);transform:scale(.8);box-shadow:4px 5px 5px 0 rgba(0,0,0,.31)}.special-btn[_ngcontent-%COMP%]::after{content:'\\00bb';position:relative;opacity:0;vertical-align:sub;font-size:2.7rem;line-height:0;-webkit-transform:translateX(25px);transform:translateX(25px);display:inline-block;transition:all .3s ease-in-out}.stick[_ngcontent-%COMP%]{flex:1;margin-top:-1rem;width:100%;overflow:hidden;position:relative;z-index:-1;-webkit-animation:1s ease-in-out 1s both fadeIn;animation:1s ease-in-out 1s both fadeIn}.stick[_ngcontent-%COMP%]::after{content:'';height:200vh;width:1.6rem;display:inline-block;position:absolute;background-color:#e74c3c;left:50%;top:0;z-index:5;-webkit-transform:translate(-50%);transform:translate(-50%);box-shadow:7px 5px 8px 0 rgba(0,0,0,.31)}.stick[_ngcontent-%COMP%]   .stick-design[_ngcontent-%COMP%]{background-color:#e74c3c;padding:1.4rem;position:absolute;left:50%;min-width:8.5rem;top:3.5rem;border-radius:100rem;-webkit-transform:translate(-50%);transform:translate(-50%);z-index:6;box-shadow:13px 0 20px 0 rgba(0,0,0,.2);transition:1s all ease-in-out}.stick[_ngcontent-%COMP%]   .stick-design[_ngcontent-%COMP%]::after{content:'';height:.8rem;width:.8rem;position:absolute;border-radius:50%;background-color:#2c3e50;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);box-shadow:2rem 0 0 #2c3e50,-2rem 0 0 #2c3e50}.tada-animation[_ngcontent-%COMP%]{-webkit-animation:1s ease-in-out 2 both tada;animation:1s ease-in-out 2 both tada}@-webkit-keyframes leftToRight{0%{display:relative;opacity:.1;left:-20%}100%{display:relative;opacity:1;left:0}}@keyframes leftToRight{0%{display:relative;opacity:.1;left:-20%}100%{display:relative;opacity:1;left:0}}@-webkit-keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes tada{0%,100%{-webkit-transform:scale(1) rotate(0);transform:scale(1) rotate(0)}10%,30%,50%,70%,90%{-webkit-transform:scale(1.1) rotate(-4deg);transform:scale(1.1) rotate(-4deg)}20%,40%,60%,80%{-webkit-transform:scale(1.1) rotate(4deg);transform:scale(1.1) rotate(4deg)}}@keyframes tada{0%,100%{-webkit-transform:scale(1) rotate(0);transform:scale(1) rotate(0)}10%,30%,50%,70%,90%{-webkit-transform:scale(1.1) rotate(-4deg);transform:scale(1.1) rotate(-4deg)}20%,40%,60%,80%{-webkit-transform:scale(1.1) rotate(4deg);transform:scale(1.1) rotate(4deg)}}@-webkit-keyframes stripAnimation{0%{-webkit-transform:translateX(-10px) rotateZ(0);transform:translateX(-10px) rotateZ(0);opacity:0}100%{-webkit-transform:translateX(0) rotateZ(-16deg);transform:translateX(0) rotateZ(-16deg);opacity:1}}@keyframes stripAnimation{0%{-webkit-transform:translateX(-10px) rotateZ(0);transform:translateX(-10px) rotateZ(0);opacity:0}100%{-webkit-transform:translateX(0) rotateZ(-16deg);transform:translateX(0) rotateZ(-16deg);opacity:1}}"]
                    ],
                    data: {}
                });

            function yf(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 0, "div", [
                    ["class", "overlay"]
                ], null, null, null, null, null)), (t()(), fo(1, 0, null, null, 33, "div", [
                    ["class", "root-container"]
                ], null, null, null, null, null)), (t()(), fo(2, 0, null, null, 13, "div", [
                    ["class", "navbar"]
                ], null, null, null, null, null)), (t()(), fo(3, 0, null, null, 12, "div", [
                    ["class", "nav-items"]
                ], null, null, null, null, null)), (t()(), fo(4, 0, null, null, 3, "a", [
                    ["class", "nav-item"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== Bo(t, 5).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
                }, null, null)), ei(5, 671744, null, 0, Fp, [Dp, Xc, bs], {
                    routerLink: [0, "routerLink"]
                }, null), Si(6, 1), (t()(), Pi(-1, null, ["Portfolio"])), (t()(), fo(8, 0, null, null, 3, "a", [
                    ["class", "nav-item"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== Bo(t, 9).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
                }, null, null)), ei(9, 671744, null, 0, Fp, [Dp, Xc, bs], {
                    routerLink: [0, "routerLink"]
                }, null), Si(10, 1), (t()(), Pi(-1, null, ["About & Skills"])), (t()(), fo(12, 0, null, null, 3, "a", [
                    ["class", "nav-item"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== Bo(t, 13).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
                }, null, null)), ei(13, 671744, null, 0, Fp, [Dp, Xc, bs], {
                    routerLink: [0, "routerLink"]
                }, null), Si(14, 1), (t()(), Pi(-1, null, ["Profiles"])), (t()(), fo(16, 0, null, null, 18, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), fo(17, 0, null, null, 1, "app-dp-logo", [
                    ["class", "dp-logo"]
                ], null, null, null, df, hf)), ei(18, 638976, null, 0, ff, [], null, null), (t()(), fo(19, 0, null, null, 1, "h4", [
                    ["class", "short-bio"]
                ], null, null, null, null, null)), (t()(), Pi(-1, null, ["Student | Developer | Contributor"])), (t()(), fo(21, 0, null, null, 1, "q", [
                    ["class", "quote"]
                ], null, null, null, null, null)), (t()(), Pi(-1, null, ["Help others in the way of self-learning"])), (t()(), fo(23, 0, null, null, 3, "div", [
                    ["class", "name"]
                ], null, null, null, null, null)), (t()(), fo(24, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), Pi(-1, null, [" SALEKUR RAHAMAN "])), (t()(), fo(26, 0, null, null, 0, "div", [
                    ["class", "strip"]
                ], null, null, null, null, null)), (t()(), fo(27, 0, null, null, 5, "span", [], null, [
                    [null, "click"],
                    [null, "mouseover"]
                ], function(t, e, n) {
                    var r = !0,
                        o = t.component;
                    return "click" === e && (r = !1 !== o.onExploreMeClick() && r), "mouseover" === e && (r = 0 != (o.startTadaAnimation = !1) && r), r
                }, null, null)), ei(28, 278528, null, 0, js, [Un, Vn, cn, un], {
                    ngClass: [0, "ngClass"]
                }, null), xi(29, {
                    "tada-animation": 0
                }), (t()(), fo(30, 0, null, null, 2, "button", [
                    ["class", "special-btn"]
                ], null, null, null, null, null)), (t()(), fo(31, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), Pi(-1, null, [" Explore Me "])), (t()(), fo(33, 0, null, null, 1, "div", [
                    ["class", "stick"]
                ], null, null, null, null, null)), (t()(), fo(34, 0, null, null, 0, "div", [
                    ["class", "stick-design"]
                ], null, null, null, null, null))], function(t, e) {
                    var n = e.component;
                    t(e, 5, 0, t(e, 6, 0, "/portfolio")), t(e, 9, 0, t(e, 10, 0, "/about")), t(e, 13, 0, t(e, 14, 0, "/profiles")), t(e, 18, 0), t(e, 28, 0, t(e, 29, 0, n.startTadaAnimation))
                }, function(t, e) {
                    t(e, 4, 0, Bo(e, 5).target, Bo(e, 5).href), t(e, 8, 0, Bo(e, 9).target, Bo(e, 9).href), t(e, 12, 0, Bo(e, 13).target, Bo(e, 13).href)
                })
            }
            var vf = function() {
                    function t() {
                        this.showNavigationMenu = !1
                    }
                    return t.prototype.ngOnInit = function() {}, t
                }(),
                _f = Fr({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {
                        animation: [{
                            type: 7,
                            name: "animate",
                            definitions: [{
                                type: 1,
                                expr: "* => *",
                                animation: [{
                                    type: 11,
                                    selector: ":leave, :enter",
                                    animation: [{
                                        type: 9,
                                        options: null
                                    }],
                                    options: {
                                        optional: !0
                                    }
                                }],
                                options: null
                            }],
                            options: {}
                        }]
                    }
                });

            function bf(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 1, "app-navigator", [], null, [
                    [null, "cancellation"]
                ], function(t, e, n) {
                    var r = !0;
                    return "cancellation" === e && (r = 0 != (t.component.showNavigationMenu = !1) && r), r
                }, pf, uf)), ei(1, 114688, null, 0, qs, [Dp], null, {
                    cancellation: "cancellation"
                })], function(t, e) {
                    t(e, 1, 0)
                }, null)
            }

            function wf(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 2, "div", [], [
                    [24, "@animate", 0]
                ], null, null, null, null)), (t()(), po(16777216, null, null, 1, null, bf)), ei(2, 16384, null, 0, Ls, [vn, yn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), fo(3, 0, null, null, 1, "app-landing-page", [], null, [
                    [null, "ExploreMe"]
                ], function(t, e, n) {
                    var r = !0;
                    return "ExploreMe" === e && (r = 0 != (t.component.showNavigationMenu = !0) && r), r
                }, yf, gf)), ei(4, 114688, null, 0, mf, [], null, {
                    ExploreMe: "ExploreMe"
                })], function(t, e) {
                    t(e, 2, 0, e.component.showNavigationMenu), t(e, 4, 0)
                }, function(t, e) {
                    t(e, 0, 0, void 0)
                })
            }
            var Cf = Ao("app-profile", vf, function(t) {
                    return Ti(0, [(t()(), fo(0, 0, null, null, 1, "app-profile", [], null, null, null, wf, _f)), ei(1, 114688, null, 0, vf, [], null, null)], function(t, e) {
                        t(e, 1, 0)
                    }, null)
                }, {}, {}, []),
                kf = function() {
                    function t(t) {
                        this.router = t, this.ExploreMe = new Le, this.startTadaAnimation = !1
                    }
                    return t.prototype.ngOnInit = function() {
                        var t = this;
                        setInterval(function() {
                            t.startTadaAnimation = !t.startTadaAnimation
                        }, 3e3)
                    }, t.prototype.onExploreMeClick = function() {
                        this.ExploreMe.emit(), this.router.navigateByUrl("/")
                    }, t
                }(),
                Sf = Fr({
                    encapsulation: 0,
                    styles: [
                        [".container[_ngcontent-%COMP%]{display:flex;width:100%;min-height:100vh;align-items:center;padding:2rem 0;justify-content:center;background-color:#17a598;color:#fff}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background-color:#2c3e50;height:auto;max-height:90%;width:45rem;text-align:center;overflow-x:hidden;position:relative;z-index:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;border-radius:5px;box-shadow:12px 11px 14px 0 rgba(0,0,0,.36);transition:all .3s ease-in-out;-webkit-animation:1s ease-in-out both dropin;animation:1s ease-in-out both dropin}.container[_ngcontent-%COMP%]   .profile-logo[_ngcontent-%COMP%]{height:14rem;width:14rem;margin-top:5.5rem;display:inline-block;position:relative;z-index:5;border-radius:50%;-webkit-perspective:1500px;perspective:1500px;-webkit-animation:1s ease-in-out .4s both dropin;animation:1s ease-in-out .4s both dropin}.container[_ngcontent-%COMP%]   .profile-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;border:.8rem solid #e74c3c;height:100%;width:100%;border-radius:50%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:all .5s ease-in-out;-webkit-perspective:1500px;perspective:1500px}.container[_ngcontent-%COMP%]   .profile-logo[_ngcontent-%COMP%]::after{content:'Salekur Rahaman';display:flex;position:absolute;height:100%;width:100%;justify-content:center;align-items:center;border-radius:50%;background-color:#e74c3c;border:.8rem solid #db381b;top:0;left:0;z-index:10;font-size:2rem;transition:all .5s ease-in-out;-webkit-transform:rotateY(180deg);transform:rotateY(180deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1500px;perspective:1500px}.container[_ngcontent-%COMP%]   .profile-logo[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.container[_ngcontent-%COMP%]   .profile-logo[_ngcontent-%COMP%]:hover::after{-webkit-transform:rotateY(0);transform:rotateY(0)}.container[_ngcontent-%COMP%]   .strip[_ngcontent-%COMP%]{background-color:#e74c3c;height:16.2rem;width:150%;margin-left:-5rem;margin-top:-8rem;-webkit-transform:rotateZ(-16deg);transform:rotateZ(-16deg);z-index:-1;position:absolute;-webkit-animation:1s ease-in-out 1.4s both stripAnimation;animation:1s ease-in-out 1.4s both stripAnimation}.container[_ngcontent-%COMP%]   .strip[_ngcontent-%COMP%]::after{content:'';display:inline-block;position:absolute;height:100%;width:20%;background-color:#fff;opacity:0;top:0;left:0}.container[_ngcontent-%COMP%]   .strip-block[_ngcontent-%COMP%]:hover   .strip[_ngcontent-%COMP%]:after, .container[_ngcontent-%COMP%]   .strip[_ngcontent-%COMP%]:hover::after{-webkit-animation:1s ease-in-out both fadeLeftToRight;animation:1s ease-in-out both fadeLeftToRight}.container[_ngcontent-%COMP%]   .short-details[_ngcontent-%COMP%]{position:relative;-webkit-animation:1s ease-in-out .4s both dropin;animation:1s ease-in-out .4s both dropin}.container[_ngcontent-%COMP%]   .short-details[_ngcontent-%COMP%]   .tagLine[_ngcontent-%COMP%]{display:block;width:100%;font-size:1.6rem;font-weight:lighter;font-style:italic;padding:.5rem}.container[_ngcontent-%COMP%]   .short-details[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]{font-family:'Cormorant Garamond',serif;display:inline-block;font-size:2rem;font-weight:400;width:65%;padding:.5rem 2rem 1rem;line-height:1.2}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{margin-top:6rem}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .nameBlock[_ngcontent-%COMP%]{transition:all .3s ease-in-out;-webkit-animation:1s ease-in-out .6s both dropin;animation:1s ease-in-out .6s both dropin}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .nameBlock[_ngcontent-%COMP%]:hover   .divider[_ngcontent-%COMP%] > .stick1[_ngcontent-%COMP%]{-webkit-transform:translateX(-2rem)!important;transform:translateX(-2rem)!important}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .nameBlock[_ngcontent-%COMP%]:hover   .divider[_ngcontent-%COMP%] > .stick2[_ngcontent-%COMP%]{-webkit-transform:translateX(2rem)!important;transform:translateX(2rem)!important}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{display:inline-block;position:relative;width:60%;font-size:2rem;font-weight:400;line-height:1.6;text-transform:uppercase;letter-spacing:.2rem}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%]{display:inline-block;width:70%;font-size:1.6rem;margin:.4rem .4rem .8rem;line-height:1.2;font-weight:lighter;text-align:center;word-spacing:1px;-webkit-animation:1s ease-in-out .8s both dropin;animation:1s ease-in-out .8s both dropin}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .projects-link[_ngcontent-%COMP%]{display:inline-block;width:15rem;line-height:2.2;font-size:1.4rem;padding:.5rem;margin-top:1.5rem;color:#fff;text-decoration:none;cursor:pointer;vertical-align:middle;transition:all .3s ease-in-out;box-shadow:7px 5px 8px 0 rgba(0,0,0,.31);-webkit-animation:1s ease-in-out 1s both dropin;animation:1s ease-in-out 1s both dropin}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .projects-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{-webkit-transform:translateX(.7rem);transform:translateX(.7rem);display:inline-block;transition:all .3s ease-in-out}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .projects-link[_ngcontent-%COMP%]:hover{background-color:#db381b;-webkit-animation-play-state:paused;animation-play-state:paused}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .projects-link[_ngcontent-%COMP%]:hover::after{-webkit-transform:translateX(.2rem);transform:translateX(.2rem);opacity:1}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .projects-link[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{-webkit-transform:translateX(-.2rem);transform:translateX(-.2rem)}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .projects-link[_ngcontent-%COMP%]:active{-webkit-transform:scale(.8);transform:scale(.8);box-shadow:4px 5px 5px 0 rgba(0,0,0,.31)}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .projects-link[_ngcontent-%COMP%]::after{content:'\\00bb';position:relative;opacity:0;vertical-align:sub;font-size:2.7rem;line-height:0;-webkit-transform:translateX(25px);transform:translateX(25px);display:inline-block;transition:all .3s ease-in-out}.container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]{display:block;padding:0 3rem 3rem;margin-top:.6rem;-webkit-animation:1s ease-in-out 1.2s both dropin;animation:1s ease-in-out 1.2s both dropin}.container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]{display:inline-block;width:3.4rem;height:3.4rem;margin:.2rem .5rem;background-color:#fff;transition:all .3s ease-in-out}.container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%}.container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]:hover{-webkit-transform:scale(1.3);transform:scale(1.3)}.divider[_ngcontent-%COMP%]{padding:1rem;display:flex;flex-flow:column;align-items:center;position:relative}.divider[_ngcontent-%COMP%]   .stick[_ngcontent-%COMP%]{display:inline-block;position:relative;height:2px;background-color:#e74c3c;margin:2px 0;width:75%;clear:both}.divider[_ngcontent-%COMP%]   .stick1[_ngcontent-%COMP%]{-webkit-transform:translateX(1.5rem);transform:translateX(1.5rem);transition:all .3s ease-in-out}.divider[_ngcontent-%COMP%]   .stick2[_ngcontent-%COMP%]{-webkit-transform:translateX(-1.5rem);transform:translateX(-1.5rem);transition:all .3s ease-in-out}.divider[_ngcontent-%COMP%]:hover   .stick1[_ngcontent-%COMP%]{-webkit-transform:translateX(-1.5rem)!important;transform:translateX(-1.5rem)!important}.divider[_ngcontent-%COMP%]:hover   .stick2[_ngcontent-%COMP%]{-webkit-transform:translateX(1.5rem)!important;transform:translateX(1.5rem)!important}.round-shape[_ngcontent-%COMP%]{background-color:#e74c3c;border-radius:100rem;padding:.2rem 2rem}.tada-animation[_ngcontent-%COMP%]{-webkit-animation:1s ease-in-out 2 both tada;animation:1s ease-in-out 2 both tada}@media (max-height:740px) and (min-width:436px){html[_ngcontent-%COMP%]{font-size:8px}}@media (max-height:660px) and (min-width:436px){html[_ngcontent-%COMP%]{font-size:6px}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{margin-top:8rem}}@media (max-height:740px){.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{overflow-y:auto}}@media only screen and (max-width:768px){.container[_ngcontent-%COMP%]   .profile-logo[_ngcontent-%COMP%]{margin-top:30px!important}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{margin-top:8rem!important}}@media (max-width:460px) and (min-height:100px){html[_ngcontent-%COMP%]{font-size:8px}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:90vw}.container[_ngcontent-%COMP%]   .profile-logo[_ngcontent-%COMP%]{width:14rem;height:14rem;margin-top:14rem}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{margin-top:10rem}}@media (max-width:360px) and (min-height:100px){html[_ngcontent-%COMP%]{font-size:7px}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{margin-top:7rem}.container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]{width:2.4rem;height:2.4rem}}@media (max-width:270px) and (min-height:100px){html[_ngcontent-%COMP%]{font-size:5px}.container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]{width:1.4rem;height:1.4rem}}@media (max-width:170px) and (min-height:100px){html[_ngcontent-%COMP%]{font-size:1px}}@-webkit-keyframes fadeLeftToRight{0%{opacity:.1;left:-10%}100%{opacity:.7;left:120%}}@keyframes fadeLeftToRight{0%{opacity:.1;left:-10%}100%{opacity:.7;left:120%}}@-webkit-keyframes dropin{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes dropin{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes tada{0%,100%{-webkit-transform:scale(1) rotate(0);transform:scale(1) rotate(0)}10%,30%,50%,70%,90%{-webkit-transform:scale(1.1) rotate(-4deg);transform:scale(1.1) rotate(-4deg)}20%,40%,60%,80%{-webkit-transform:scale(1.1) rotate(4deg);transform:scale(1.1) rotate(4deg)}}@keyframes tada{0%,100%{-webkit-transform:scale(1) rotate(0);transform:scale(1) rotate(0)}10%,30%,50%,70%,90%{-webkit-transform:scale(1.1) rotate(-4deg);transform:scale(1.1) rotate(-4deg)}20%,40%,60%,80%{-webkit-transform:scale(1.1) rotate(4deg);transform:scale(1.1) rotate(4deg)}}@-webkit-keyframes stripAnimation{0%{-webkit-transform:translateX(-10px) rotateZ(0);transform:translateX(-10px) rotateZ(0);opacity:0}100%{-webkit-transform:translateX(0) rotateZ(-16deg);transform:translateX(0) rotateZ(-16deg);opacity:1}}@keyframes stripAnimation{0%{-webkit-transform:translateX(-10px) rotateZ(0);transform:translateX(-10px) rotateZ(0);opacity:0}100%{-webkit-transform:translateX(0) rotateZ(-16deg);transform:translateX(0) rotateZ(-16deg);opacity:1}}"]
                    ],
                    data: {}
                });

            function xf(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 49, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), fo(1, 0, null, null, 48, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (t()(), fo(2, 0, null, null, 8, "div", [
                    ["class", "strip-block"]
                ], null, null, null, null, null)), (t()(), fo(3, 0, null, null, 1, "div", [
                    ["class", "profile-logo"]
                ], null, null, null, null, null)), (t()(), fo(4, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["src", "assets/img/Profile-Pic-Ritwick-Dey2.jpg"]
                ], null, null, null, null, null)), (t()(), fo(5, 0, null, null, 0, "div", [
                    ["class", "strip"]
                ], null, null, null, null, null)), (t()(), fo(6, 0, null, null, 4, "div", [
                    ["class", "short-details"]
                ], null, null, null, null, null)), (t()(), fo(7, 0, null, null, 1, "h4", [
                    ["class", "tagLine"]
                ], null, null, null, null, null)), (t()(), Pi(-1, null, [" Student | Developer | Contributor "])), (t()(), fo(9, 0, null, null, 1, "blockquote", [
                    ["class", "quote"]
                ], null, null, null, null, null)), (t()(), Pi(-1, null, [' "I love to help others in the way of self-learning" '])), (t()(), fo(11, 0, null, null, 16, "div", [
                    ["class", "details"]
                ], null, null, null, null, null)), (t()(), fo(12, 0, null, null, 5, "div", [
                    ["class", "nameBlock"]
                ], null, null, null, null, null)), (t()(), fo(13, 0, null, null, 1, "h1", [
                    ["class", "round-shape name"]
                ], null, null, null, null, null)), (t()(), Pi(-1, null, [" Salekur Rahaman "])), (t()(), fo(15, 0, null, null, 2, "div", [
                    ["class", "divider"]
                ], null, null, null, null, null)), (t()(), fo(16, 0, null, null, 0, "div", [
                    ["class", "stick stick1"]
                ], null, null, null, null, null)), (t()(), fo(17, 0, null, null, 0, "div", [
                    ["class", "stick stick2"]
                ], null, null, null, null, null)), (t()(), fo(18, 0, null, null, 3, "p", [
                    ["class", "bio"]
                ], null, null, null, null, null)), (t()(), Pi(-1, null, [" I love coding, new technologies & sweets. I'm mostly interested in Full Stack Web Development. I love to work with Java, Android and Flutter."])), (t()(), fo(20, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), Pi(-1, null, [""])), (t()(), fo(22, 0, null, null, 5, "div", [], null, [
                    [null, "mouseover"]
                ], function(t, e, n) {
                    var r = !0;
                    return "mouseover" === e && (r = 0 != (t.component.startTadaAnimation = !1) && r), r
                }, null, null)), ei(23, 278528, null, 0, js, [Un, Vn, cn, un], {
                    ngClass: [0, "ngClass"]
                }, null), xi(24, {
                    "tada-animation": 0
                }), (t()(), fo(25, 0, null, null, 2, "a", [
                    ["class", "round-shape projects-link"]
                ], null, [
                    [null, "click"]
                ], function(t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== t.component.onExploreMeClick() && r), r
                }, null, null)), (t()(), fo(26, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), Pi(-1, null, [" Explore Me "])), (t()(), fo(28, 0, null, null, 2, "div", [
                    ["class", "divider"]
                ], null, null, null, null, null)), (t()(), fo(29, 0, null, null, 0, "div", [
                    ["class", "stick stick1"]
                ], null, null, null, null, null)), (t()(), fo(30, 0, null, null, 0, "div", [
                    ["class", "stick stick2"]
                ], null, null, null, null, null)), (t()(), fo(31, 0, null, null, 18, "div", [
                    ["class", "social"]
                ], null, null, null, null, null)), (t()(), fo(32, 0, null, null, 2, "div", [
                    ["class", "social-icon"]
                ], null, null, null, null, null)), (t()(), fo(33, 0, null, null, 1, "a", [
                    ["href", "https://www.facebook.com/SalekurPolas"],
                    ["target", "_blank"]
                ], null, null, null, null, null)), (t()(), fo(34, 0, null, null, 0, "img", [
                    ["alt", "facebook icon"],
                    ["src", "assets/assert/contactIcon/facebook.svg"]
                ], null, null, null, null, null)), (t()(), fo(35, 0, null, null, 2, "div", [
                    ["class", "social-icon"]
                ], null, null, null, null, null)), (t()(), fo(36, 0, null, null, 1, "a", [
                    ["href", "https://www.twitter.com/SalekurPolas"],
                    ["target", "_blank"]
                ], null, null, null, null, null)), (t()(), fo(37, 0, null, null, 0, "img", [
                    ["alt", "twitter icon"],
                    ["src", "assets/assert/contactIcon/twitter.svg"]
                ], null, null, null, null, null)), (t()(), fo(38, 0, null, null, 2, "div", [
                    ["class", "social-icon"]
                ], null, null, null, null, null)), (t()(), fo(39, 0, null, null, 1, "a", [
                    ["href", "https://www.github.com/SalekurPolas"],
                    ["target", "_blank"]
                ], null, null, null, null, null)), (t()(), fo(40, 0, null, null, 0, "img", [
                    ["alt", "github icon"],
                    ["src", "assets/assert/contactIcon/github.svg"]
                ], null, null, null, null, null)), (t()(), fo(41, 0, null, null, 2, "div", [
                    ["class", "social-icon"]
                ], null, null, null, null, null)), (t()(), fo(42, 0, null, null, 1, "a", [
                    ["href", "https://app.pluralsight.com/profile/SalekurPolas"],
                    ["target", "_blank"]
                ], null, null, null, null, null)), (t()(), fo(43, 0, null, null, 0, "img", [
                    ["alt", "github icon"],
                    ["src", "assets/assert/contactIcon/pluralsight-icon.jpg"]
                ], null, null, null, null, null)), (t()(), fo(44, 0, null, null, 2, "div", [
                    ["class", "social-icon"]
                ], null, null, null, null, null)), (t()(), fo(45, 0, null, null, 1, "a", [
                    ["href", "https://www.linkedin.com/in/SalekurPolas/"],
                    ["target", "_blank"]
                ], null, null, null, null, null)), (t()(), fo(46, 0, null, null, 0, "img", [
                    ["alt", "linkedin icon"],
                    ["src", "assets/assert/contactIcon/linkedin.png"]
                ], null, null, null, null, null)), (t()(), fo(47, 0, null, null, 2, "div", [
                    ["class", "social-icon"]
                ], null, null, null, null, null)), (t()(), fo(48, 0, null, null, 1, "a", [
                    ["href", "mailto:salekur19@gmail.com"]
                ], null, null, null, null, null)), (t()(), fo(49, 0, null, null, 0, "img", [
                    ["alt", "email icon"],
                    ["src", "assets/assert/contactIcon/email.svg"]
                ], null, null, null, null, null))], function(t, e) {
                    t(e, 23, 0, t(e, 24, 0, e.component.startTadaAnimation))
                }, null)
            }
            var Ef = Ao("app-profile-card", kf, function(t) {
                    return Ti(0, [(t()(), fo(0, 0, null, null, 1, "app-profile-card", [], null, null, null, xf, Sf)), ei(1, 114688, null, 0, kf, [Dp], null, null)], function(t, e) {
                        t(e, 1, 0)
                    }, null)
                }, {}, {
                    ExploreMe: "ExploreMe"
                }, []),
                Pf = function() {
                    function t() {
                        this.text = "", this.time = 1e3, this.delay = 500, this.displayText = "", this.isProcessRunning = !1
                    }
                    return t.prototype.ngOnInit = function() {}, t.prototype.ngOnChanges = function(t) {
                        this.text && this.startRendering()
                    }, t.prototype.startRendering = function() {
                        var t = this;
                        this.displayText = "", this.isProcessRunning || setTimeout(function() {
                            var e = Math.round(t.time / t.text.length),
                                n = t.text.split("");
                            t.renderTextByLetter(n, e)
                        }, this.delay), this.isProcessRunning = !0
                    }, t.prototype.renderTextByLetter = function(t, e, n) {
                        var r = this;
                        if (void 0 === n && (n = t[0]), !t || t.length <= 0) return this.cursorRef.nativeElement.classList.add("cursor__animate"), void(this.isProcessRunning = !1);
                        setTimeout(function() {
                            r.displayText += n;
                            var o = t.slice(1);
                            r.renderTextByLetter(o, e, o[0])
                        }, e)
                    }, t
                }(),
                Of = Fr({
                    encapsulation: 0,
                    styles: [
                        [".text[_ngcontent-%COMP%]{display:inline-block}.cursor[_ngcontent-%COMP%]{content:'|';display:inline-block}.cursor__animate[_ngcontent-%COMP%]{-webkit-animation:.8s cubic-bezier(1,-.18,0,1.35) .5s infinite fadeInOut;animation:.8s cubic-bezier(1,-.18,0,1.35) .5s infinite fadeInOut}@-webkit-keyframes fadeInOut{0%{opacity:0}100%{opacity:1}}@keyframes fadeInOut{0%{opacity:0}100%{opacity:1}}"]
                    ],
                    data: {}
                });

            function Mf(t) {
                return Ti(0, [yi(402653184, 1, {
                    cursorRef: 0
                }), (t()(), fo(1, 0, null, null, 3, "span", [
                    ["class", "text"]
                ], null, null, null, null, null)), (t()(), Pi(2, null, ["", " "])), (t()(), fo(3, 0, [
                    [1, 0],
                    ["cursor", 1]
                ], null, 1, "span", [
                    ["class", "cursor cursor__animate"]
                ], null, null, null, null, null)), (t()(), Pi(-1, null, ["|"]))], null, function(t, e) {
                    t(e, 2, 0, e.component.displayText)
                })
            }
            var Tf = function() {
                    function t() {}
                    return t.prototype.ngOnInit = function() {}, t
                }(),
                Af = Fr({
                    encapsulation: 0,
                    styles: [
                        [".icon[_ngcontent-%COMP%]{width:100%;height:100%;max-width:25rem;max-height:25rem;display:inline-block}.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}"]
                    ],
                    data: {}
                });

            function If(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 1, "div", [
                    ["class", "icon"]
                ], null, null, null, null, null)), (t()(), fo(1, 0, null, null, 0, "img", [
                    ["src", "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIuMDAxIDUxMi4wMDEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMDEgNTEyLjAwMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxMjhweCIgaGVpZ2h0PSIxMjhweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM4NC44MzQsMTgwLjY5OWMtMC42OTgsMC0zNDguNzMzLDAtMzQ4LjczMywwbDczLjMyNi04Mi4xODdjNC43NTUtNS4zMyw0LjI4OS0xMy41MDUtMS4wNDEtMTguMjYgICAgYy01LjMyOC00Ljc1NC0xMy41MDUtNC4yOS0xOC4yNiwxLjA0MWwtODIuNTgyLDkyLjU2Yy0xMC4wNTksMTEuMjc4LTEwLjA1OCwyOC4yODIsMC4wMDEsMzkuNTU3bDgyLjU4Miw5Mi41NjEgICAgYzIuNTU2LDIuODY1LDYuMDk3LDQuMzIzLDkuNjU0LDQuMzIzYzMuMDY0LDAsNi4xMzktMS4wODMsOC42MDYtMy4yODJjNS4zMy00Ljc1NSw1Ljc5NS0xMi45MywxLjA0MS0xOC4yNmwtNzMuMzI2LTgyLjE4OCAgICBjMCwwLDM0OC4wMzQsMCwzNDguNzMzLDBjNTUuODU4LDAsMTAxLjMsNDUuNDQ0LDEwMS4zLDEwMS4zcy00NS40NDMsMTAxLjMtMTAxLjMsMTAxLjNoLTYxLjU4ICAgIGMtNy4xNDMsMC0xMi45MzMsNS43OTEtMTIuOTMzLDEyLjkzM2MwLDcuMTQyLDUuNzksMTIuOTMzLDEyLjkzMywxMi45MzNoNjEuNThjNzAuMTIsMCwxMjcuMTY2LTU3LjA0NiwxMjcuMTY2LTEyNy4xNjYgICAgQzUxMiwyMzcuNzQ1LDQ1NC45NTQsMTgwLjY5OSwzODQuODM0LDE4MC42OTl6IiBmaWxsPSIjZTc0YzNjIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="]
                ], null, null, null, null, null))], null, null)
            }
            var jf = [{
                    displayName: "Angular",
                    isSelected: !0
                }, {
                    displayName: "React.js",
                    isSelected: !0
                }, {
                    displayName: "Node.js",
                    isSelected: !0
                }, {
                    displayName: "ASP.NET",
                    isSelected: !0
                }, {
                    displayName: "CSS",
                    isSelected: !0
                }, {
                    displayName: "Others",
                    isSelected: !1
                }],
                Nf = function() {
                    function t() {
                        this.onTagUpdate = new Le, this.tags = jf
                    }
                    return t.prototype.toogleTagSelection = function(t) {
                        var e = this.tags.reduce(function(t, e) {
                                return t + (e.isSelected ? 1 : 0)
                            }, 0),
                            n = this.tags.find(function(e) {
                                return e.displayName === t
                            });
                        e <= 1 && n.isSelected || (n.isSelected = !n.isSelected, this.onTagUpdate.emit({
                            tags: this.tags.filter(function(t) {
                                return t.isSelected
                            })
                        }))
                    }, t
                }(),
                Df = function() {
                    function t(t) {
                        this.tagsService = t, this.keySkills = t.tags
                    }
                    return t.prototype.ngOnInit = function() {}, t.prototype.toogleSkillSelection = function(t) {
                        this.tagsService.toogleTagSelection(t.displayName)
                    }, t.prototype.disableIfOneBtn = function(t) {
                        var e = this.keySkills.filter(function(t) {
                            return t.isSelected
                        });
                        return 1 === e.length && e[0].displayName === t.displayName
                    }, t
                }(),
                Rf = Fr({
                    encapsulation: 0,
                    styles: [
                        [".key-skills[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;margin:1rem auto}.key-skills[_ngcontent-%COMP%]   .key-skill[_ngcontent-%COMP%]{z-index:99;position:relative;font-size:1.6rem;margin:.6rem;padding:.4rem 2rem;border:2px solid #db381b;border-radius:50rem;cursor:pointer;color:#fff;line-height:1.5;background-color:#db381b;transition:all .3s ease-in-out;outline:0;box-shadow:.4rem .5rem .9rem rgba(0,0,0,.25)}.key-skills[_ngcontent-%COMP%]   .key-skill[_ngcontent-%COMP%]:disabled{background-color:#e85a41;border:2px solid #e85a41;box-shadow:none}.key-skills[_ngcontent-%COMP%]   .key-skill[_ngcontent-%COMP%]:hover:disabled{margin:.6rem;padding:.4rem 2rem;cursor:not-allowed}.key-skills[_ngcontent-%COMP%]   .key-skill[_ngcontent-%COMP%]:hover{padding:.4rem 3.2rem;margin:.6rem 2rem}@media screen and (max-width:640px){.key-skills[_ngcontent-%COMP%]   .key-skill[_ngcontent-%COMP%]:hover{margin:.6rem;padding:.4rem 2rem}}.key-skills[_ngcontent-%COMP%]   .key-skill.key-skill--disabled[_ngcontent-%COMP%]{border:2px solid #db381b;background-color:transparent;overflow:hidden;transition:all .3s ease-in-out}.key-skills[_ngcontent-%COMP%]   .key-skill.key-skill--disabled[_ngcontent-%COMP%]:after{content:'';position:absolute;display:block;width:100%;height:2px;background-color:#db381b;top:50%;left:0;-webkit-transform:rotateZ(-14deg);transform:rotateZ(-14deg);transition:all .3s ease-in-out}"]
                    ],
                    data: {}
                });

            function Lf(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 3, "button", [
                    ["class", "key-skill"]
                ], [
                    [8, "disabled", 0]
                ], [
                    [null, "click"]
                ], function(t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== t.component.toogleSkillSelection(t.context.$implicit) && r), r
                }, null, null)), ei(1, 278528, null, 0, js, [Un, Vn, cn, un], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), xi(2, {
                    "key-skill--disabled": 0
                }), (t()(), Pi(3, null, [" ", " "]))], function(t, e) {
                    t(e, 1, 0, "key-skill", t(e, 2, 0, !e.context.$implicit.isSelected))
                }, function(t, e) {
                    t(e, 0, 0, e.component.disableIfOneBtn(e.context.$implicit)), t(e, 3, 0, e.context.$implicit.displayName)
                })
            }

            function Ff(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 2, "div", [
                    ["class", "key-skills"]
                ], null, null, null, null, null)), (t()(), po(16777216, null, null, 1, null, Lf)), ei(2, 802816, null, 0, Ds, [vn, yn, Un], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(t, e) {
                    t(e, 2, 0, e.component.keySkills)
                }, null)
            }
            var zf = function() {
                    function t() {}
                    return t.prototype.transform = function(t) {
                        return t.replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, "")
                    }, t
                }(),
                Uf = function() {
                    function t() {}
                    return t.prototype.transform = function(t, e, n) {
                        void 0 === e && (e = 10), void 0 === n && (n = !1);
                        var r = t.slice(0, e);
                        return t.length > e && (n && (r = this.makePrettier(r)), r += "..."), r
                    }, t.prototype.makePrettier = function(t) {
                        return t.split(" , ").filter(function(t, e, n) {
                            return n.length - 1 !== e && n.length >= 1
                        }).join(", ")
                    }, t
                }(),
                Vf = function() {
                    function t() {
                        this.select = new Le
                    }
                    return t.prototype.ngOnInit = function() {}, t.prototype.onCardClick = function(t) {
                        this.select.emit({
                            project: t
                        })
                    }, t
                }(),
                Bf = Fr({
                    encapsulation: 0,
                    styles: [
                        [".card-outer[_ngcontent-%COMP%]{position:relative;font-family:Lato,sans-serif;font-weight:400;color:#555;cursor:pointer}.card-outer[_ngcontent-%COMP%]:hover   .card__front[_ngcontent-%COMP%]{cursor:pointer;-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.card-outer[_ngcontent-%COMP%]:hover   .card__back[_ngcontent-%COMP%]{cursor:pointer;-webkit-transform:rotateY(0);transform:rotateY(0)}.card[_ngcontent-%COMP%]{width:100%;min-width:20rem;min-height:18rem;background:#fff;border-radius:.6rem;cursor:pointer;overflow:hidden;box-shadow:6px 6px 15px rgba(0,0,0,.3);transition:.8s ease-in-out;-webkit-perspective:15000px;perspective:15000px;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.card.card__front[_ngcontent-%COMP%]{-webkit-transform:rotateY(0);transform:rotateY(0)}.card.card__back[_ngcontent-%COMP%]{background:#eee;position:absolute;top:0;left:0;z-index:-1;-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.card.card__featured[_ngcontent-%COMP%]::before{content:'\\269D';position:absolute;top:0;left:0;z-index:1;font-size:1.6rem;padding:0 .4rem;color:#fff}.card.card__featured[_ngcontent-%COMP%]:after{content:'';position:absolute;top:0;left:0;width:3.2rem;height:3.2rem;background-color:#327e36;-webkit-transform:rotateZ(45deg) translate(-88%) scale(2);transform:rotateZ(45deg) translate(-88%) scale(2)}.card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;padding:.6rem 1.6rem;width:100%;height:100%}.card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{font-family:'Cormorant Garamond',serif;width:100%;font-size:2.4rem;margin:1rem 0;font-weight:700}.card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-short-details[_ngcontent-%COMP%]{width:100%;flex:1;font-size:1.6rem;margin:.6rem 0}.card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tech-stuff-details[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-weight:700;display:inline-block}.card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tech-stuff-details[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{display:inline;margin-left:.3rem;word-break:break-word}.card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .full-width-btn[_ngcontent-%COMP%]{display:block;width:100%;position:fixed;left:0;bottom:0;background:#e74c3c;padding:.8rem .3rem;line-height:2;font-size:1.6rem;color:#fff;border:0;outline:0;cursor:pointer}@-webkit-keyframes slideIn{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes slideIn{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@media (min-width:1080px){.card[_ngcontent-%COMP%]{min-width:28rem}}"]
                    ],
                    data: {}
                });

            function Hf(t) {
                return Ti(0, [ni(0, zf, []), ni(0, Uf, []), (t()(), fo(2, 0, null, null, 22, "div", [
                    ["class", "card-outer"]
                ], null, [
                    [null, "click"]
                ], function(t, e, n) {
                    var r = !0,
                        o = t.component;
                    return "click" === e && (r = !1 !== o.onCardClick(o.project) && r), r
                }, null, null)), (t()(), fo(3, 0, null, null, 8, "div", [
                    ["class", "card card__front"]
                ], null, null, null, null, null)), ei(4, 278528, null, 0, js, [Un, Vn, cn, un], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), xi(5, {
                    card__featured: 0
                }), (t()(), fo(6, 0, null, null, 5, "div", [
                    ["class", "card-container"]
                ], null, null, null, null, null)), (t()(), fo(7, 0, null, null, 2, "h4", [
                    ["class", "card-header"]
                ], null, null, null, null, null)), (t()(), Pi(8, null, ["", ""])), ki(9, 1), (t()(), fo(10, 0, null, null, 1, "p", [
                    ["class", "card-short-details"]
                ], null, null, null, null, null)), (t()(), Pi(11, null, [" ", " "])), (t()(), fo(12, 0, null, null, 12, "div", [
                    ["class", "card card__back"]
                ], null, null, null, null, null)), (t()(), fo(13, 0, null, null, 11, "div", [
                    ["class", "card-container"]
                ], null, null, null, null, null)), (t()(), fo(14, 0, null, null, 1, "h4", [
                    ["class", "card-header"]
                ], null, null, null, null, null)), (t()(), Pi(15, null, ["", ""])), (t()(), fo(16, 0, null, null, 8, "div", [
                    ["class", "card-short-details"]
                ], null, null, null, null, null)), (t()(), fo(17, 0, null, null, 5, "div", [
                    ["class", "tech-stuff-details"]
                ], null, null, null, null, null)), (t()(), fo(18, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), Pi(-1, null, ["Tech Stuff: "])), (t()(), fo(20, 0, null, null, 2, "p", [], null, null, null, null, null)), (t()(), Pi(21, null, ["", ""])), ki(22, 3), (t()(), fo(23, 0, null, null, 1, "button", [
                    ["class", "full-width-btn"]
                ], null, null, null, null, null)), (t()(), Pi(-1, null, ["More Details"]))], function(t, e) {
                    t(e, 4, 0, "card card__front", t(e, 5, 0, e.component.project.isFeatured))
                }, function(t, e) {
                    var n = e.component;
                    t(e, 8, 0, Dr(e, 8, 0, t(e, 9, 0, Bo(e, 0), n.project.name))), t(e, 11, 0, n.project.description), t(e, 15, 0, n.project.name), t(e, 21, 0, Dr(e, 21, 0, t(e, 22, 0, Bo(e, 1), n.project.techStuff.join(" , "), 100, !0)))
                })
            }
            var qf = function() {
                    function t() {}
                    return t.prototype.ngOnInit = function() {}, t
                }(),
                Qf = Fr({
                    encapsulation: 0,
                    styles: [
                        [".icon[_ngcontent-%COMP%]{width:100%;height:100%;max-width:25rem;max-height:25rem;display:inline-block}.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}"]
                    ],
                    data: {}
                });

            function Zf(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 1, "div", [
                    ["class", "icon"]
                ], null, null, null, null, null)), (t()(), fo(1, 0, null, null, 0, "img", [
                    ["src", "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDIxLjkgMjEuOSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjEuOSAyMS45IiB3aWR0aD0iMTI4cHgiIGhlaWdodD0iMTI4cHgiPgogIDxwYXRoIGQ9Ik0xNC4xLDExLjNjLTAuMi0wLjItMC4yLTAuNSwwLTAuN2w3LjUtNy41YzAuMi0wLjIsMC4zLTAuNSwwLjMtMC43cy0wLjEtMC41LTAuMy0wLjdsLTEuNC0xLjRDMjAsMC4xLDE5LjcsMCwxOS41LDAgIGMtMC4zLDAtMC41LDAuMS0wLjcsMC4zbC03LjUsNy41Yy0wLjIsMC4yLTAuNSwwLjItMC43LDBMMy4xLDAuM0MyLjksMC4xLDIuNiwwLDIuNCwwUzEuOSwwLjEsMS43LDAuM0wwLjMsMS43QzAuMSwxLjksMCwyLjIsMCwyLjQgIHMwLjEsMC41LDAuMywwLjdsNy41LDcuNWMwLjIsMC4yLDAuMiwwLjUsMCwwLjdsLTcuNSw3LjVDMC4xLDE5LDAsMTkuMywwLDE5LjVzMC4xLDAuNSwwLjMsMC43bDEuNCwxLjRjMC4yLDAuMiwwLjUsMC4zLDAuNywwLjMgIHMwLjUtMC4xLDAuNy0wLjNsNy41LTcuNWMwLjItMC4yLDAuNS0wLjIsMC43LDBsNy41LDcuNWMwLjIsMC4yLDAuNSwwLjMsMC43LDAuM3MwLjUtMC4xLDAuNy0wLjNsMS40LTEuNGMwLjItMC4yLDAuMy0wLjUsMC4zLTAuNyAgcy0wLjEtMC41LTAuMy0wLjdMMTQuMSwxMS4zeiIgZmlsbD0iI2U3NGMzYyIvPgo8L3N2Zz4K"]
                ], null, null, null, null, null))], null, null)
            }
            var Gf = function() {
                    function t(t) {
                        this.renderer = t, this.cancellation = new Le
                    }
                    return t.prototype.ngOnInit = function() {
                        this.renderer.addClass(document.body, "isSideDrawerOpen")
                    }, t.prototype.onCancellation = function(t, e) {
                        void 0 === e && (e = !1);
                        var n = e || t.target.attributes.getNamedItem("enable-cancellation");
                        (e || n && n.value) && this.cancellation.emit(), this.renderer.removeClass(document.body, "isSideDrawerOpen")
                    }, t
                }(),
                Kf = Fr({
                    encapsulation: 0,
                    styles: [
                        [".project-details-container[_ngcontent-%COMP%]{height:100vh;width:100vw;position:fixed;top:0;left:0;z-index:990;background-color:rgba(0,0,0,.4);font-family:Helvetica,Arial,sans-serif}.project-details-container[_ngcontent-%COMP%]   .poject-section[_ngcontent-%COMP%]{margin:2rem 0}.project-details-container[_ngcontent-%COMP%]   .poject-section[_ngcontent-%COMP%]   .project-section__header[_ngcontent-%COMP%]{display:inline-block;font-size:2rem}.project-details-container[_ngcontent-%COMP%]   .project-details[_ngcontent-%COMP%]{height:100vh;width:75vw;position:relative;margin-left:auto;margin-right:0;top:0;right:0;color:#555;background-color:#f2f2f2;padding:0 1.6rem 1.6rem 0;z-index:999;overflow:hidden;overflow-y:auto;box-shadow:-5px 9px 20px rgba(0,0,0,.3)}.project-details-container[_ngcontent-%COMP%]   .project-details[_ngcontent-%COMP%]   .project-details-header[_ngcontent-%COMP%]{position:fixed;width:inherit;background-color:inherit;margin-bottom:1rem;box-shadow:0 5px 20px rgba(0,0,0,.2)}.project-details-container[_ngcontent-%COMP%]   .project-details[_ngcontent-%COMP%]   .project-details-header[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%]{font-size:3.2rem;padding:1rem;text-align:center;font-family:'Cormorant Garamond',serif}@media (max-width:640px){.project-details-container[_ngcontent-%COMP%]   .project-details[_ngcontent-%COMP%]{width:95vw}.project-details-container[_ngcontent-%COMP%]   .project-details[_ngcontent-%COMP%]   .project-details-header[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%]{text-align:left;font-size:2.6rem}}.project-details-container[_ngcontent-%COMP%]   .project-details[_ngcontent-%COMP%]   .project-details-header[_ngcontent-%COMP%]   .cancellation-icon[_ngcontent-%COMP%]{width:2.6rem;display:inline-block;float:left;top:0;left:0;margin:3.5rem 2.5rem;cursor:pointer}.project-details-container[_ngcontent-%COMP%]   .project-details[_ngcontent-%COMP%]   .end-section[_ngcontent-%COMP%]{font-family:'Cormorant Garamond',serif;width:inherit;text-align:center;font-weight:700;font-size:2rem;margin-top:2rem;padding:1rem 0;border-top:1px solid #555}.project-details-container[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]{width:80%;margin:12rem auto auto;padding-top:1.5rem;font-size:1.8rem;letter-spacing:.6px}.project-details-container[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-description[_ngcontent-%COMP%]{margin-bottom:2rem}.project-details-container[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-links[_ngcontent-%COMP%]{padding:1.6rem 0 .5rem}.project-details-container[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-links[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]{font-weight:700;padding:.6rem 0}.project-details-container[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-links[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:400;color:#17a598;text-decoration:none;font-style:italic}.project-details-container[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-features[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:700;padding:.8rem 0}.project-details-container[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-features[_ngcontent-%COMP%]   .project-features-details[_ngcontent-%COMP%]{padding-left:3rem;list-style-type:none}.project-details-container[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-features[_ngcontent-%COMP%]   .project-features-details[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{line-height:1.3;padding:.4rem 0}.project-details-container[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-features[_ngcontent-%COMP%]   .project-features-details[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]::before{content:'\\27BA';padding-right:.5em}"]
                    ],
                    data: {
                        animation: [{
                            type: 7,
                            name: "slideIn",
                            definitions: [{
                                type: 1,
                                expr: ":leave",
                                animation: [{
                                    type: 6,
                                    styles: {
                                        transform: "translateX(0%)"
                                    },
                                    offset: null
                                }, {
                                    type: 4,
                                    styles: {
                                        type: 5,
                                        steps: [{
                                            type: 6,
                                            styles: {
                                                transform: "translateX(0%)",
                                                offset: 0
                                            },
                                            offset: null
                                        }, {
                                            type: 6,
                                            styles: {
                                                transform: "translateX(100%)",
                                                offset: 1
                                            },
                                            offset: null
                                        }]
                                    },
                                    timings: "0.3s ease-out"
                                }],
                                options: null
                            }, {
                                type: 1,
                                expr: ":enter",
                                animation: [{
                                    type: 6,
                                    styles: {
                                        transform: "translateX(100%)"
                                    },
                                    offset: null
                                }, {
                                    type: 4,
                                    styles: {
                                        type: 5,
                                        steps: [{
                                            type: 6,
                                            styles: {
                                                transform: "translateX(100%)",
                                                offset: 0
                                            },
                                            offset: null
                                        }, {
                                            type: 6,
                                            styles: {
                                                transform: "translateX(0%)",
                                                offset: 1
                                            },
                                            offset: null
                                        }]
                                    },
                                    timings: "0.3s ease-out"
                                }],
                                options: null
                            }],
                            options: {}
                        }]
                    }
                });

            function Wf(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 4, "div", [
                    ["class", "project-link"]
                ], null, null, null, null, null)), (t()(), fo(1, 0, null, null, 1, "h4", [
                    ["class", "project-section__header"]
                ], null, null, null, null, null)), (t()(), Pi(-1, null, ["Project Link:"])), (t()(), fo(3, 0, null, null, 1, "a", [
                    ["target", "_blank"]
                ], [
                    [8, "href", 4]
                ], null, null, null, null)), (t()(), Pi(4, null, ["", ""]))], null, function(t, e) {
                    var n = e.component;
                    t(e, 3, 0, n.project.projectLink), t(e, 4, 0, n.project.projectLink)
                })
            }

            function Xf(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 4, "div", [
                    ["class", "project-link"]
                ], null, null, null, null, null)), (t()(), fo(1, 0, null, null, 1, "h4", [
                    ["class", "project-section__header"]
                ], null, null, null, null, null)), (t()(), Pi(-1, null, ["Live Url:"])), (t()(), fo(3, 0, null, null, 1, "a", [
                    ["target", "_blank"]
                ], [
                    [8, "href", 4]
                ], null, null, null, null)), (t()(), Pi(4, null, ["", ""]))], null, function(t, e) {
                    var n = e.component;
                    t(e, 3, 0, n.project.liveUrl), t(e, 4, 0, n.project.liveUrl)
                })
            }

            function Yf(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 1, "li", [], null, null, null, null, null)), (t()(), Pi(1, null, ["", ""]))], null, function(t, e) {
                    t(e, 1, 0, e.context.$implicit)
                })
            }

            function $f(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 5, "div", [
                    ["class", "poject-section project-features"]
                ], null, null, null, null, null)), (t()(), fo(1, 0, null, null, 1, "h4", [
                    ["class", "project-section__header"]
                ], null, null, null, null, null)), (t()(), Pi(-1, null, ["Tech Stuff: "])), (t()(), fo(3, 0, null, null, 2, "ul", [
                    ["class", "project-features-details"]
                ], null, null, null, null, null)), (t()(), po(16777216, null, null, 1, null, Yf)), ei(5, 802816, null, 0, Ds, [vn, yn, Un], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(t, e) {
                    t(e, 5, 0, e.component.project.techStuff)
                }, null)
            }

            function Jf(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 1, "li", [], null, null, null, null, null)), (t()(), Pi(1, null, ["", ""]))], null, function(t, e) {
                    t(e, 1, 0, e.context.$implicit)
                })
            }

            function th(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 5, "div", [
                    ["class", "poject-section project-features"]
                ], null, null, null, null, null)), (t()(), fo(1, 0, null, null, 1, "h4", [
                    ["class", "project-section__header"]
                ], null, null, null, null, null)), (t()(), Pi(-1, null, ["Features: "])), (t()(), fo(3, 0, null, null, 2, "ul", [
                    ["class", "project-features-details"]
                ], null, null, null, null, null)), (t()(), po(16777216, null, null, 1, null, Jf)), ei(5, 802816, null, 0, Ds, [vn, yn, Un], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(t, e) {
                    t(e, 5, 0, e.component.project.features)
                }, null)
            }

            function eh(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 1, "li", [], null, null, null, null, null)), (t()(), Pi(1, null, ["", ""]))], null, function(t, e) {
                    t(e, 1, 0, e.context.$implicit)
                })
            }

            function nh(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 5, "div", [
                    ["class", "poject-section project-features"]
                ], null, null, null, null, null)), (t()(), fo(1, 0, null, null, 1, "h4", [
                    ["class", "project-section__header"]
                ], null, null, null, null, null)), (t()(), Pi(2, null, ["", ": "])), (t()(), fo(3, 0, null, null, 2, "ul", [
                    ["class", "project-features-details"]
                ], null, null, null, null, null)), (t()(), po(16777216, null, null, 1, null, eh)), ei(5, 802816, null, 0, Ds, [vn, yn, Un], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(t, e) {
                    t(e, 5, 0, e.context.$implicit.data)
                }, function(t, e) {
                    t(e, 2, 0, e.context.$implicit.title)
                })
            }

            function rh(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 2, "div", [], null, null, null, null, null)), (t()(), po(16777216, null, null, 1, null, nh)), ei(2, 802816, null, 0, Ds, [vn, yn, Un], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(t, e) {
                    t(e, 2, 0, e.component.project.additionalData)
                }, null)
            }

            function oh(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 24, "div", [
                    ["class", "project-details-container"],
                    ["enable-cancellation", "true"]
                ], null, [
                    [null, "appEscCancelation"],
                    [null, "click"],
                    ["document", "keydown"]
                ], function(t, e, n) {
                    var r = !0,
                        o = t.component;
                    return "document:keydown" === e && (r = !1 !== Bo(t, 1).onKeydownHandler(n) && r), "appEscCancelation" === e && (r = !1 !== o.onCancellation(null, !0) && r), "click" === e && (r = !1 !== o.onCancellation(n) && r), r
                }, null, null)), ei(1, 16384, null, 0, Hs, [], null, {
                    appEscCancelation: "appEscCancelation"
                }), (t()(), fo(2, 0, null, null, 22, "div", [
                    ["class", "project-details"]
                ], [
                    [24, "@slideIn", 0]
                ], null, null, null, null)), (t()(), fo(3, 0, null, null, 5, "div", [
                    ["class", "project-details-header"]
                ], null, null, null, null, null)), (t()(), fo(4, 0, null, null, 2, "div", [
                    ["class", "cancellation-icon"]
                ], null, [
                    [null, "click"]
                ], function(t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== t.component.onCancellation(null, !0) && r), r
                }, null, null)), (t()(), fo(5, 0, null, null, 1, "app-cross-icon", [], null, null, null, Zf, Qf)), ei(6, 114688, null, 0, qf, [], null, null), (t()(), fo(7, 0, null, null, 1, "h4", [
                    ["class", "poject-section project-title"]
                ], null, null, null, null, null)), (t()(), Pi(8, null, ["", ""])), (t()(), fo(9, 0, null, null, 13, "div", [
                    ["class", "project-content"]
                ], null, null, null, null, null)), (t()(), fo(10, 0, null, null, 1, "p", [
                    ["class", "poject-section project-description"]
                ], null, null, null, null, null)), (t()(), Pi(11, null, ["", ""])), (t()(), fo(12, 0, null, null, 4, "div", [
                    ["class", "poject-section project-links"]
                ], null, null, null, null, null)), (t()(), po(16777216, null, null, 1, null, Wf)), ei(14, 16384, null, 0, Ls, [vn, yn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), po(16777216, null, null, 1, null, Xf)), ei(16, 16384, null, 0, Ls, [vn, yn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), po(16777216, null, null, 1, null, $f)), ei(18, 16384, null, 0, Ls, [vn, yn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), po(16777216, null, null, 1, null, th)), ei(20, 16384, null, 0, Ls, [vn, yn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), po(16777216, null, null, 1, null, rh)), ei(22, 16384, null, 0, Ls, [vn, yn], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), fo(23, 0, null, null, 1, "div", [
                    ["class", "end-section"]
                ], null, null, null, null, null)), (t()(), Pi(-1, null, [" :wq! "]))], function(t, e) {
                    var n = e.component;
                    t(e, 6, 0), t(e, 14, 0, n.project.projectLink), t(e, 16, 0, n.project.liveUrl), t(e, 18, 0, n.project.techStuff && n.project.techStuff.length > 0), t(e, 20, 0, n.project.features && n.project.features.length > 0), t(e, 22, 0, n.project.additionalData)
                }, function(t, e) {
                    var n = e.component;
                    t(e, 2, 0, void 0), t(e, 8, 0, n.project.name), t(e, 11, 0, n.project.description)
                })
            }
            var ih = [{
                    id: "D861BC2A-E9F7-4CF1-8F9B-886C255E723C",
                    name: "Live Server - VsCode Extension \ud83d\udc93",
                    description: "A development local Server with live reload feature.",
                    projectLink: "https://github.com/ritwickdey/vscode-live-server",
                    isFeatured: !0,
                    liveUrl: "https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer",
                    features: ["A quick development server with live browser reload.", "Fully customizable", "Remote Connect through WLAN"],
                    tags: ["node.js"],
                    techStuff: ["Node.js", "vscode-extension"],
                    additionalData: [{
                        title: "About",
                        data: ["This extension is installed more than 1M (10 lakhs) times from marketplace (by 03.07.18)", "Rating of this extension is 4.8 out of 5 (by 03.07.18)"]
                    }]
                }, {
                    id: "8108A2CA-4227-4704-99FF-E2250AE6C0D4",
                    name: "Live Sass Compiler - VsCode Extension \ud83d\ude9a",
                    description: "Compile Sass or Scss file to CSS at realtime with live browser reload feature.",
                    projectLink: "https://github.com/ritwickdey/vscode-live-sass-compiler",
                    isFeatured: !0,
                    liveUrl: "https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass",
                    features: ["Compile SASS & SCSS with live browser reload", "Fully customizable such as CSS Style & file ext name", "Integrated Autoprefix"],
                    tags: ["node.js"],
                    techStuff: ["Node.js", "vscode-extension"],
                    additionalData: [{
                        title: "About",
                        data: ["This extension is installed 100K times from marketplace (by 03.07.18)", "Rating of this extension is 4.7 out of 5 (by 03.07.18)"]
                    }]
                }, {
                    id: "C9D96DC3-C0FE-4EA4-9C53-06C9A8DF69B4",
                    name: "Portfolio Website \ud83d\udc98",
                    description: "This is my portfolio website (SPA), designed with Adobe XD & developed with Angular 5",
                    isFeatured: !0,
                    projectLink: "https://github.com/ritwickdey/ritwickdey.github.io",
                    liveUrl: "https://ritwickdey.github.io",
                    features: ["No 3rd party CSS library or component is used \ud83d\udc96", "Filtering Project Cards in Portfolio Page", "Angular animation is used for various transition effects", "Reuseable Components & Responsive UI", "CI/CD to deploy website"],
                    tags: ["angular", "css"],
                    techStuff: ["Angular 5", "Angular Animation", "CSS", "TypeScript"],
                    additionalData: []
                }, {
                    id: "5DF00C04-0DE4-4A56-B5F9-5E564BB8FF76",
                    name: "Organic Shop \ud83c\udf40",
                    description: "A Shopping Website build with Angular 4 and Firebase",
                    projectLink: "https://github.com/ritwickdey/organic-shop",
                    isFeatured: !0,
                    liveUrl: "https://oshop-ritwick.firebaseapp.com/",
                    features: ["Login through Facebook & Gmail", "Cart System", "Realtime updates (through Firebase Realtime Database)", "Only Admin can perform Create/Edit/Delete operations & upload photos of items", "Normal User can buy items & view their own orders", "Admin can access all orders", "Responsive UI using Bootstrap 4"],
                    tags: ["angular", "firebase"],
                    techStuff: ["Angular 4", "Firebase Realtime Database", "Firebase Auth"],
                    additionalData: []
                }, {
                    id: "BA56C7BD-7263-4810-9EA4-04123482BBC4",
                    name: "Social Diary \ud83d\udcd6",
                    description: "A simple story app where people can share their story and can edit/delete\n    only their stories and everyone can read all stories from timeline.",
                    isFeatured: !0,
                    projectLink: "https://github.com/ritwickdey/social-diary",
                    liveUrl: "https://ritwickdey.github.io/social-diary/",
                    features: ["HTML tags are supported in story", "Login using Google Account", "Searching feature of stories", "Sorting stories using date/title & alphabetically", "Filtering stories using date range", "Responsive UI"],
                    tags: ["react.js", "css"],
                    techStuff: ["React with Redux Architecture", "React Routing", "CSS Modules", "Firestore Database & Rules", "Firebase Authentication", "Responsive UI with pure CSS (No library \ud83d\ude04)", "Travis CI to deploy"],
                    additionalData: []
                }, {
                    id: "BD7972A2-197A-4236-841F-7D298A149726",
                    name: "Cake Shop \ud83c\udf82",
                    description: "A sample Cake Shop Website built with ASP.NET Core (Multi-Page Application)",
                    projectLink: "https://github.com/ritwickdey/Cake-Shop",
                    liveUrl: null,
                    isFeatured: !0,
                    features: ["Only Admin can perform Create/Edit/Delete cakes & manage Orders.", "Normal User can only can buy cakes & view their orders.", "Managing Cart System using cookie.", "Client Side & Server side validation", "Cookie Based Authentication & Authorization - Not Session", "Login through either Username or Email", "Responsive UI", "Repository Pattern", "Application Architecture is decoupled form ORM (Entity Framework)"],
                    tags: ["asp.net", "asp.net core"],
                    techStuff: ["ASP.NET Core 2.0", "Entity Framework Core", "ASP.NET Identity", "Razor View", "AutoMapper", "jQuery & Bootstap 4"],
                    additionalData: []
                }, {
                    id: "6E020215-0E1A-48A0-B07E-E79B32164FED",
                    name: "Sale It \ud83d\udc5c",
                    description: "A Simple Vehicle Dealer App built with ASP.NET Core + Angular 4 ",
                    projectLink: "https://github.com/ritwickdey/Sale-It",
                    liveUrl: "https://ritwick-sale-it.azurewebsites.net",
                    features: ["Only Admin/Moderator can perform Create/Edit/Delete operations & upload photos", "Normal User only can view the vehicle details & see report of vehicles in charts view", "Server Side Sorting & Pagination", "Role Based Athentication"],
                    tags: ["asp.net", "angular"],
                    techStuff: ["Angular 4", "ASP.NET Core", "Entity Framework Core", "Auth0", "AutoMapper", "Chart.js"],
                    additionalData: []
                }, {
                    id: "5EBCE406-643A-4229-BFE6-32281D3892A6",
                    name: "Social Network \ud83d\udc66\ud83d\udc67",
                    description: "A chatting web app using MEAN Stack (Node.js, Angular 4, Express.js & MongoDB) ",
                    projectLink: "https://github.com/ritwickdey/social-network-mean-stack",
                    liveUrl: "https://social-network-mean.herokuapp.com",
                    features: ["A chatting web app using MEAN Stack", "Colorful chat bars"],
                    tags: ["node.js", "angular", "moongodb", "express.js"],
                    techStuff: ["Angular 4", "Node.js & Express.js", "MongoDB", "JWT based Authentication", "Lazy loading of Angular"],
                    additionalData: []
                }, {
                    id: "3C6A816A-011C-479B-8C9F-2DDA4E5087F5",
                    name: "Official Tech Fest Website \ud83c\udfe2",
                    description: "Official Tech Fest (2018) Website of Our College",
                    isFeatured: !0,
                    projectLink: "https://github.com/ritwickdey/bgi-tech-fest-2k18",
                    liveUrl: "https://ritwickdey.github.io/bgi-tech-fest-2k18/",
                    features: ["No heavy CSS library such as `Bootstrap` or `Material-CSS` is used", "Responsive UI", "Parallax scrolling effect"],
                    tags: ["html", "css"],
                    techStuff: ["HTML & CSS", "jQuery"],
                    additionalData: []
                }, {
                    id: "AEBCD0CF-6B8C-477F-B9A2-D4F39720E3F5",
                    name: "Indecision App \ud83e\udd14",
                    description: "A simple app made with React - this app will make your decision from your choice (It is my First React App)",
                    projectLink: "https://github.com/ritwickdey/indecision-app",
                    liveUrl: "https://ritwickdey.github.io/indecision-app/",
                    features: ["A decision making app", "Responsive UI"],
                    tags: ["react.js"],
                    techStuff: ["React", "CI to deploy"],
                    additionalData: []
                }, {
                    id: "81BF5A1B-D401-401E-B85A-1A5785377025",
                    name: "Expensify App \ud83d\udcb0",
                    description: "An Private Expense Manager. This app is built with React with Redux architecture",
                    projectLink: "https://github.com/ritwickdey/expensify-app",
                    isFeatured: !0,
                    liveUrl: "https://ritwickdey.github.io/expensify-app",
                    features: ["Searching, Sorting, Filtering expenses", "Login using Google Account", "Only you can access your expenses", "stories using date/title & alphabetically", "Responsive UI"],
                    tags: ["react.js", "css"],
                    techStuff: ["React with Redux Architecture", "React Routing", "CSS - BEM Patten", "Firestore Realtime & Rules", "Firebase Authentication", "React Testing using Jest & Enzyme", "Travis CI to deploy"],
                    additionalData: []
                }, {
                    id: "695EBE0A-498A-4C4E-86E4-BFE1DF601D97",
                    name: "Live Server - Web Browser Extension \u23f3",
                    description: "A browser extension that helps you to live reload feature\n  for dynamic content/pages",
                    projectLink: "https://github.com/ritwickdey/live-server-web-extension",
                    liveUrl: "https://chrome.google.com/webstore/detail/live-server-web-extension/fiegdmejfepffgpnejdinekhfieaogmj/",
                    features: ["Live Reload features for dynamic content such as ASP.NET, Node.js or PHP."],
                    tags: ["others"],
                    techStuff: ["browsers-extension"],
                    additionalData: [{
                        title: "About",
                        data: ["This extension has 2K active Google Chrome user (by 24.04.18)"]
                    }]
                }, {
                    id: "E9C02983-DC50-48EC-8361-6C618FFE83F5",
                    name: "We Mate \ud83d\udc6a",
                    description: "A simple zero level chat website made with ASP.NET Form and SQL Server as Backend service.",
                    projectLink: "https://github.com/ritwickdey/WeMate",
                    liveUrl: null,
                    features: ["Registration Page", "Login Page", "Chat Page", "Master Page", "A secret Admin Page [But Not much Secure. LOL!]"],
                    tags: ["asp.net", "asp.net form"],
                    techStuff: ["ASP.NET Form", "SQL Server"],
                    additionalData: []
                }, {
                    id: "3246277A-E2BC-476A-8D8A-AA781D9D54D4",
                    name: "Create Files & Folders - VSCode Extension \ud83d\udcc2",
                    description: "A small extension that help you to create files & folder in Style of Atom",
                    projectLink: "https://github.com/ritwickdey/vscode-create-file-folder",
                    liveUrl: "https://marketplace.visualstudio.com/items?itemName=ritwickdey.create-file-folder",
                    features: ["Create Multiple files and folders in one go"],
                    tags: ["node.js"],
                    techStuff: ["Node.js", "vscode-extension"],
                    additionalData: [{
                        title: "About",
                        data: ["This extension is installed 1.6K times from marketplace (by 22.04.18)", "Actually I developed this extension just only for me. Because I don't like that default way. :)"]
                    }]
                }, {
                    id: "A1B3308D-8BC5-4A7B-81A7-4190A9A41D0B",
                    name: "Face Detection \ud83d\udd0e",
                    description: "Face Detection using Google Chrome API",
                    projectLink: "https://github.com/ritwickdey/face-detector-chrome-api",
                    liveUrl: "https://ritwickdey.github.io/face-detector-chrome-api",
                    features: ["Face Detection api of Google Chrome"],
                    tags: ["others", "chrome"],
                    techStuff: ["Chrome API"],
                    additionalData: [{
                        title: "Note",
                        data: ["This is an experimental features of Google Chrome"]
                    }]
                }, {
                    id: "302A54B8-9BBB-4D8E-B7E0-BDA0B11CF6E5",
                    name: "Bike Shop Template \ud83d\udeb2",
                    description: "A Sample basic HTML Template for front page of a Bike company",
                    projectLink: "https://github.com/ritwickdey/simple-bike-shopping-site",
                    liveUrl: "https://ritwickdey.github.io/simple-bike-shopping-site",
                    features: ["Custom CSS & Bootstrap", "Parallax scrolling effect"],
                    tags: ["html", "css"],
                    techStuff: ["HTML & CSS", "design"],
                    additionalData: []
                }, {
                    id: "E22C8CC5-FB9B-45F5-B0FF-8603AB9EF9A1",
                    name: "Factorial of Large Number \ud83c\udf1f",
                    description: "A browser extension that helps you to live reload feature\n  for dynamic content/pages",
                    projectLink: "https://github.com/ritwickdey/LargeNumberFactorialUsingC",
                    liveUrl: null,
                    features: ["Factorial of Large Number Using C"],
                    tags: ["others", "c"],
                    techStuff: ["C Programming"],
                    additionalData: []
                }],
                ah = function() {
                    function t() {}
                    return t.prototype.getProjects = function() {
                        return ih
                    }, t
                }(),
                sh = function() {
                    function t(t, e) {
                        this.tagsService = t, this.projectService = e
                    }
                    return t.prototype.ngOnInit = function() {
                        var t = this;
                        this.renderProjects(), this.tagSubscription$ = this.tagsService.onTagUpdate, this.tagSubscription$.subscribe(function() {
                            0 === t.projects.length ? t.renderProjects() : t.projects = []
                        })
                    }, t.prototype.ngOnDestroy = function() {}, t.prototype.onProjectCardClick = function(t) {
                        this.selectedProject = t.project
                    }, t.prototype.renderProjects = function() {
                        var t = this;
                        this.projects = this.projectService.getProjects().filter(function(e) {
                            return t.tagsService.tags.filter(function(t) {
                                return t.isSelected
                            }).reduce(function(t, n) {
                                return t || -1 !== e.tags.indexOf(n.displayName.toLowerCase())
                            }, !1)
                        })
                    }, t
                }(),
                lh = Fr({
                    encapsulation: 0,
                    styles: [
                        [".project-container[_ngcontent-%COMP%]{width:70%;margin:auto;display:flex;flex-wrap:wrap;align-items:center;transition:all .5s ease-in-out}.project-container[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]{padding:1rem;flex-basis:33.3%;transition:all .5s ease-in-out}@media (max-width:1300px){.project-container[_ngcontent-%COMP%]{width:90%}.project-container[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]{flex-basis:33.3%}}@media (max-width:970px){.project-container[_ngcontent-%COMP%]{width:95%}.project-container[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]{flex-basis:50%}}@media (max-width:660px){.project-container[_ngcontent-%COMP%]{width:90%}.project-container[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]{flex-basis:100%}}"]
                    ],
                    data: {
                        animation: [{
                            type: 7,
                            name: "slideIn",
                            definitions: [{
                                type: 1,
                                expr: "* => *",
                                animation: [{
                                    type: 11,
                                    selector: ":enter",
                                    animation: {
                                        type: 6,
                                        styles: {
                                            transform: "translateY(-25%)",
                                            opacity: 0
                                        },
                                        offset: null
                                    },
                                    options: {
                                        optional: !0
                                    }
                                }, {
                                    type: 11,
                                    selector: ":leave",
                                    animation: {
                                        type: 6,
                                        styles: {
                                            transform: "translateY(0%)",
                                            opacity: 1
                                        },
                                        offset: null
                                    },
                                    options: {
                                        optional: !0
                                    }
                                }, {
                                    type: 11,
                                    selector: ":enter",
                                    animation: [{
                                        type: 12,
                                        timings: "0.05s",
                                        animation: [{
                                            type: 4,
                                            styles: {
                                                type: 5,
                                                steps: [{
                                                    type: 6,
                                                    styles: {
                                                        transform: "translateY(-25%)",
                                                        opacity: 0,
                                                        offset: 0
                                                    },
                                                    offset: null
                                                }, {
                                                    type: 6,
                                                    styles: {
                                                        transform: "translateY(0%)",
                                                        opacity: 1,
                                                        offset: 1
                                                    },
                                                    offset: null
                                                }]
                                            },
                                            timings: "0.2s ease-out"
                                        }]
                                    }],
                                    options: {
                                        optional: !0
                                    }
                                }, {
                                    type: 11,
                                    selector: ":leave",
                                    animation: [{
                                        type: 12,
                                        timings: "0.05s",
                                        animation: [{
                                            type: 4,
                                            styles: {
                                                type: 5,
                                                steps: [{
                                                    type: 6,
                                                    styles: {
                                                        transform: "translateY(0%)",
                                                        offset: 0
                                                    },
                                                    offset: null
                                                }, {
                                                    type: 6,
                                                    styles: {
                                                        transform: "translateY(-25%)",
                                                        opacity: 0,
                                                        offset: 1
                                                    },
                                                    offset: null
                                                }]
                                            },
                                            timings: "0.2s ease-in"
                                        }]
                                    }],
                                    options: {
                                        optional: !0
                                    }
                                }],
                                options: null
                            }],
                            options: {}
                        }, {
                            type: 7,
                            name: "animateChildren",
                            definitions: [{
                                type: 1,
                                expr: "* => *",
                                animation: [{
                                    type: 11,
                                    selector: "@*, :enter",
                                    animation: [{
                                        type: 9,
                                        options: null
                                    }],
                                    options: {
                                        optional: !0
                                    }
                                }, {
                                    type: 11,
                                    selector: "@*, :leave",
                                    animation: [{
                                        type: 9,
                                        options: null
                                    }],
                                    options: {
                                        optional: !0
                                    }
                                }],
                                options: null
                            }],
                            options: {}
                        }]
                    }
                });

            function uh(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 1, "app-project-card", [
                    ["class", "project-card"]
                ], null, [
                    [null, "select"]
                ], function(t, e, n) {
                    var r = !0;
                    return "select" === e && (r = !1 !== t.component.onProjectCardClick(n) && r), r
                }, Hf, Bf)), ei(1, 114688, null, 0, Vf, [], {
                    project: [0, "project"]
                }, {
                    select: "select"
                })], function(t, e) {
                    t(e, 1, 0, e.context.$implicit)
                }, null)
            }

            function ch(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 1, "app-project-details", [], null, [
                    [null, "cancellation"]
                ], function(t, e, n) {
                    var r = !0;
                    return "cancellation" === e && (r = !1 !== (t.component.selectedProject = null) && r), r
                }, oh, Kf)), ei(1, 114688, null, 0, Gf, [un], {
                    project: [0, "project"]
                }, {
                    cancellation: "cancellation"
                })], function(t, e) {
                    t(e, 1, 0, e.component.selectedProject)
                }, null)
            }

            function ph(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 2, "div", [
                    ["class", "project-container"]
                ], [
                    [24, "@slideIn", 0]
                ], [
                    [null, "@slideIn.done"]
                ], function(t, e, n) {
                    var r = !0;
                    return "@slideIn.done" === e && (r = !1 !== t.component.renderProjects() && r), r
                }, null, null)), (t()(), po(16777216, null, null, 1, null, uh)), ei(2, 802816, null, 0, Ds, [vn, yn, Un], {
                    ngForOf: [0, "ngForOf"]
                }, null), (t()(), fo(3, 0, null, null, 2, "div", [], [
                    [24, "@animateChildren", 0]
                ], null, null, null, null)), (t()(), po(16777216, null, null, 1, null, ch)), ei(5, 16384, null, 0, Ls, [vn, yn], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var n = e.component;
                    t(e, 2, 0, n.projects), t(e, 5, 0, n.selectedProject)
                }, function(t, e) {
                    var n = e.component;
                    t(e, 0, 0, null == n.projects ? null : n.projects.length), t(e, 3, 0, n.selectedProject)
                })
            }
            var fh = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                },
                hh = function() {
                    function t(t, e) {
                        this.router = t, this.tagsService = e, this.animatedTypingText = "\ud83d\ude4b Hey, sort my projects by clicking the categories. ", this.dpLogoStyle = {
                            height: "12rem",
                            width: "12rem",
                            borderWidth: "3px"
                        }, this.setFixedPostion = !1
                    }
                    return t.prototype.ngOnInit = function() {
                        this.updateAnimatedTextOnce()
                    }, t.prototype.updateAnimatedTextOnce = function() {
                        var t = this,
                            e = 0;
                        this.tagsService.onTagUpdate.subscribe(function() {
                            0 === e && (t.animatedTypingText = "Great! Have a great day! \ud83d\ude0a", e++)
                        })
                    }, t.prototype.onScroll = function() {
                        var t = this.portfolioHeaderRef.nativeElement,
                            e = this.portfolioAreaRef.nativeElement,
                            n = this.portfolioSelectionAreaRef.nativeElement,
                            r = t.scrollHeight + t.offsetTop;
                        if (window.scrollY > r) e.style.marginTop = n.scrollHeight + n.offsetTop + 5 + "px", this.setFixedPostion = !0;
                        else {
                            e.style.marginTop = "inherit", this.setFixedPostion = !1;
                            var o = 1 - window.scrollY / (r + 40);
                            this.dpLogoStyle = fh({}, this.dpLogoStyle, {
                                height: 12 * o + "rem",
                                width: 12 * o + "rem"
                            }), t.style.opacity = o.toString()
                        }
                    }, t.prototype.onBackBtnClick = function() {
                        this.router.navigateByUrl("/")
                    }, t
                }(),
                dh = Fr({
                    encapsulation: 0,
                    styles: [
                        [".portfolio-bg[_ngcontent-%COMP%]{min-height:100vh;min-width:100vw;position:relative;background-color:#17a598;overflow:hidden;display:flex}.portfolio-bg[_ngcontent-%COMP%]::after{content:'';position:fixed;display:block;height:100vh;min-height:500px;width:100vw;min-width:500px;overflow:hidden;background-color:#2c3e50;-webkit-transform:rotateZ(-11deg) scale(1.5);transform:rotateZ(-11deg) scale(1.5);top:-65vh;left:-25vw}.portfolio-container[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:center;align-items:center;height:100%;width:100%;z-index:10;padding:3.5rem;flex-direction:column;color:#fff}.portfolio-container[_ngcontent-%COMP%]   .portfolio-header[_ngcontent-%COMP%]{display:flex;justify-content:stretch;margin:auto;align-items:center;font-size:1.8rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.portfolio-container[_ngcontent-%COMP%]   .portfolio-header[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:inline-block;padding:1rem 2rem;transition:all .3s cubic-bezier(.175,.885,.32,1.275)}.portfolio-container[_ngcontent-%COMP%]   .portfolio-area[_ngcontent-%COMP%]{margin:.4rem 0;display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:50;position:relative}.portfolio-container[_ngcontent-%COMP%]   .portfolio-area[_ngcontent-%COMP%]   .portfolio-selection[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.portfolio-container[_ngcontent-%COMP%]   .portfolio-area[_ngcontent-%COMP%]   .portfolio-selection.portfolio-selection__fixed[_ngcontent-%COMP%]{position:fixed;top:0;z-index:1;background-color:#2c3e50;width:100%;box-shadow:0 8px 20px rgba(0,0,0,.4)}.portfolio-container[_ngcontent-%COMP%]   .portfolio-area[_ngcontent-%COMP%]   .portfolio-selection[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-family:'Cormorant Garamond',serif;font-weight:400;font-size:3.2rem;letter-spacing:1px;margin:1rem auto;text-align:center}@media (max-width:900px){.portfolio-container[_ngcontent-%COMP%]{padding:3.5rem .5rem}}@media (max-width:74rem){.portfolio-header[_ngcontent-%COMP%]{flex-direction:column}}"]
                    ],
                    data: {}
                });

            function mh(t) {
                return Ti(0, [yi(402653184, 1, {
                    portfolioHeaderRef: 0
                }), yi(402653184, 2, {
                    portfolioAreaRef: 0
                }), yi(402653184, 3, {
                    portfolioSelectionAreaRef: 0
                }), (t()(), fo(3, 0, null, null, 19, "div", [
                    ["class", "portfolio-bg"]
                ], null, null, null, null, null)), (t()(), fo(4, 0, null, null, 18, "div", [
                    ["class", "portfolio-container"]
                ], null, null, null, null, null)), (t()(), fo(5, 0, [
                    [1, 0],
                    ["portfolioHeader", 1]
                ], null, 4, "div", [
                    ["class", "portfolio-header"]
                ], null, null, null, null, null)), (t()(), fo(6, 0, null, null, 1, "app-dp-logo", [], null, null, null, df, hf)), ei(7, 638976, null, 0, ff, [], {
                    height: [0, "height"],
                    width: [1, "width"],
                    borderWidth: [2, "borderWidth"]
                }, null), (t()(), fo(8, 0, null, null, 1, "app-typing", [
                    ["delay", "1500"],
                    ["time", "2000"]
                ], null, null, null, Mf, Of)), ei(9, 638976, null, 0, Pf, [], {
                    text: [0, "text"],
                    time: [1, "time"],
                    delay: [2, "delay"]
                }, null), (t()(), fo(10, 0, [
                    [2, 0],
                    ["portfolioArea", 1]
                ], null, 12, "div", [
                    ["class", "portfolio-area"]
                ], null, null, null, null, null)), (t()(), fo(11, 0, null, null, 2, "div", [
                    ["class", "back-icon"]
                ], null, [
                    [null, "click"]
                ], function(t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== t.component.onBackBtnClick() && r), r
                }, null, null)), (t()(), fo(12, 0, null, null, 1, "app-back-icon", [], null, null, null, If, Af)), ei(13, 114688, null, 0, Tf, [], null, null), (t()(), fo(14, 0, [
                    [3, 0],
                    ["portfolioSelectionArea", 1]
                ], null, 6, "div", [
                    ["class", "portfolio-selection"]
                ], null, null, null, null, null)), ei(15, 278528, null, 0, js, [Un, Vn, cn, un], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), xi(16, {
                    "portfolio-selection__fixed": 0
                }), (t()(), fo(17, 0, null, null, 1, "h1", [], null, null, null, null, null)), (t()(), Pi(-1, null, ["PORTFOLIO"])), (t()(), fo(19, 0, null, null, 1, "app-key-skill-btns", [], null, null, null, Ff, Rf)), ei(20, 114688, null, 0, Df, [Nf], null, null), (t()(), fo(21, 0, null, null, 1, "app-projects", [], null, null, null, ph, lh)), ei(22, 245760, null, 0, sh, [Nf, ah], null, null)], function(t, e) {
                    var n = e.component;
                    t(e, 7, 0, n.dpLogoStyle.height, n.dpLogoStyle.width, n.dpLogoStyle.borderWidth), t(e, 9, 0, n.animatedTypingText, "2000", "1500"), t(e, 13, 0), t(e, 15, 0, "portfolio-selection", t(e, 16, 0, n.setFixedPostion)), t(e, 20, 0), t(e, 22, 0)
                }, null)
            }
            var gh = Ao("app-portfolio", hh, function(t) {
                    return Ti(0, [(t()(), fo(0, 0, null, null, 1, "app-portfolio", [], null, [
                        ["window", "scroll"]
                    ], function(t, e, n) {
                        var r = !0;
                        return "window:scroll" === e && (r = !1 !== Bo(t, 1).onScroll() && r), r
                    }, mh, dh)), ei(1, 114688, null, 0, hh, [Dp, Nf], null, null)], function(t, e) {
                        t(e, 1, 0)
                    }, null)
                }, {}, {}, []),
                yh = [{
                    type: "Programming Language",
                    names: ["C", "C++", "Java", "JavaScript", "PHP", "Python"]
                }, {
                    type: "Backend",
                    names: ["Node.js", "ASP.NET"]
                }, {
                    type: "Frontend",
                    names: ["CSS", "HTML", "jQuery"]
                }, {
                    type: "Database & ORM",
                    names: ["Firebase", "SQL Server"]
                }, {
                    type: "Cloud",
                    names: ["Azure Web Service & Storage", "Firebase DB & Functions", "Heroku"]
                }, {
                    type: "Testing",
                    names: ["Jest", "Mocha"]
                }, {
                    type: "Others",
                    names: ["Git & GitHub", "CI/CD", "REST API", "Auth0"]
                }],
                vh = function() {
                    function t() {}
                    return t.prototype.getSkills = function() {
                        return yh
                    }, t.ngInjectableDef = ft({
                        factory: function() {
                            return new t
                        },
                        token: t,
                        providedIn: "root"
                    }), t
                }(),
                _h = function() {
                    function t(t, e) {
                        this.skillsService = t, this.router = e
                    }
                    return t.prototype.ngOnInit = function() {
                        this.skills = this.skillsService.getSkills()
                    }, t.prototype.onBackClick = function() {
                        this.router.navigateByUrl("/")
                    }, t
                }(),
                bh = Fr({
                    encapsulation: 0,
                    styles: [
                        [".overlay[_ngcontent-%COMP%]{display:inline-block;height:100vh;width:100vw;top:0;left:-100%;position:fixed;background:#2c3e50;-webkit-transform:scale(2) skew(-10deg);transform:scale(2) skew(-10deg);z-index:-1;transition:.3s all ease-in-out}.container[_ngcontent-%COMP%]{font-size:1.4rem;width:100vw;display:flex;flex-direction:row;justify-content:space-around;color:#f8f8f8;align-items:center;padding:5rem}@media (max-width:1040px){.overlay[_ngcontent-%COMP%]{-webkit-transform:scale(2) skew(-55deg);transform:scale(2) skew(-55deg)}.container[_ngcontent-%COMP%]{flex-direction:column}}.container[_ngcontent-%COMP%]   .side1[_ngcontent-%COMP%]{flex:1;height:100%;display:flex;flex-direction:column;align-items:center}@media (max-width:1040px){.container[_ngcontent-%COMP%]   .side1[_ngcontent-%COMP%]{flex:none;height:auto}}.container[_ngcontent-%COMP%]   .side1[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{margin-bottom:0;padding:3rem .8rem .2rem}.container[_ngcontent-%COMP%]   .side2[_ngcontent-%COMP%]{flex:1;height:100%;display:flex;flex-direction:column;align-items:center}.text-container[_ngcontent-%COMP%]{height:auto;max-width:32rem;background:#e74c3c;padding:5.8rem 1.8rem 3rem;border-radius:2rem;min-width:34rem}.dp-logo[_ngcontent-%COMP%]{font-size:1.6rem;-webkit-transform:translate(0,45%);transform:translate(0,45%)}.skill-container[_ngcontent-%COMP%]{padding:3rem 1.8rem;margin-left:5rem}@media (max-width:1040px){.skill-container[_ngcontent-%COMP%]{margin:auto}}.skill-header[_ngcontent-%COMP%]{margin:2rem 0 3.8rem;position:relative;letter-spacing:2px;padding-bottom:0;font-size:3.2rem;font-family:'Cormorant Garamond',serif;justify-content:flex-start}.skill-header[_ngcontent-%COMP%]:after{content:'';position:absolute;display:inline-block;width:100%;height:3px;top:100%;left:0;background:#f8f8f8}.skill-type[_ngcontent-%COMP%]{position:relative;margin:1.2rem 0;padding-bottom:.2rem;font-size:1.6rem}.skill-type[_ngcontent-%COMP%]:after{content:'';position:absolute;display:inline-block;width:70%;height:1.5px;top:100%;left:0;background:#f8f8f8}.skill-names[_ngcontent-%COMP%]{margin-left:2.8rem;margin-bottom:2rem;margin-top:-.6rem}"]
                    ],
                    data: {}
                });

            function wh(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 4, "div", [], null, null, null, null, null)), (t()(), fo(1, 0, null, null, 1, "h4", [
                    ["class", "skill-type"]
                ], null, null, null, null, null)), (t()(), Pi(2, null, ["", ""])), (t()(), fo(3, 0, null, null, 1, "h4", [
                    ["class", "skill-names"]
                ], null, null, null, null, null)), (t()(), Pi(4, null, ["", ""]))], null, function(t, e) {
                    t(e, 2, 0, e.context.$implicit.type), t(e, 4, 0, e.context.$implicit.names.join(", "))
                })
            }

            function Ch(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 2, "div", [
                    ["class", "back-icon"]
                ], null, [
                    [null, "click"]
                ], function(t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== t.component.onBackClick() && r), r
                }, null, null)), (t()(), fo(1, 0, null, null, 1, "app-back-icon", [], null, null, null, If, Af)), ei(2, 114688, null, 0, Tf, [], null, null), (t()(), fo(3, 0, null, null, 0, "span", [
                    ["class", "overlay"]
                ], null, null, null, null, null)), (t()(), fo(4, 0, null, null, 20, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), fo(5, 0, null, null, 13, "div", [
                    ["class", "side1"]
                ], null, null, null, null, null)), (t()(), fo(6, 0, null, null, 1, "h1", [
                    ["class", "skill-header"]
                ], null, null, null, null, null)), (t()(), Pi(-1, null, ["ABOUT"])), (t()(), fo(8, 0, null, null, 1, "app-dp-logo", [
                    ["class", "dp-logo"],
                    ["height", "13rem"],
                    ["width", "13rem"]
                ], null, null, null, df, hf)), ei(9, 638976, null, 0, ff, [], {
                    height: [0, "height"],
                    width: [1, "width"]
                }, null), (t()(), fo(10, 0, null, null, 8, "div", [
                    ["class", "text-container"]
                ], null, null, null, null, null)), (t()(), fo(11, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), Pi(-1, null, [" I started programming with C in 2017 (still I love C & *Pointer) then I jumped to Java & Android with Flutter for Web and IOS App development and now I am working with Android, IOS, Flutter and Firebase "])), (t()(), fo(13, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), fo(14, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), Pi(-1, null, [" I've built some class project at North South University. Also an android app named Bachelor."])), (t()(), fo(16, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), fo(17, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), Pi(-1, null, [" Apart from web development, I like NSU & play with friends."])), (t()(), fo(19, 0, null, null, 5, "div", [
                    ["class", "side2"]
                ], null, null, null, null, null)), (t()(), fo(20, 0, null, null, 4, "div", [
                    ["class", "skill-container"]
                ], null, null, null, null, null)), (t()(), fo(21, 0, null, null, 1, "h1", [
                    ["class", "skill-header"]
                ], null, null, null, null, null)), (t()(), Pi(-1, null, [" Skills "])), (t()(), po(16777216, null, null, 1, null, wh)), ei(24, 802816, null, 0, Ds, [vn, yn, Un], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(t, e) {
                    var n = e.component;
                    t(e, 2, 0), t(e, 9, 0, "13rem", "13rem"), t(e, 24, 0, n.skills)
                }, null)
            }
            var kh = Ao("app-about", _h, function(t) {
                    return Ti(0, [(t()(), fo(0, 0, null, null, 1, "app-about", [], null, null, null, Ch, bh)), ei(1, 114688, null, 0, _h, [vh, Dp], null, null)], function(t, e) {
                        t(e, 1, 0)
                    }, null)
                }, {}, {}, []),
                Sh = function() {
                    function t(t) {
                        this.router = t, this.contactProfile = {
                            profile: [{
                                name: "Facebook",
                                url: "https://facebook.com/SalekurPolas",
                                iconUrl: "./assets/icons/facebook.svg"
                            }, {
                                name: "Twitter",
                                url: "https://twitter.com/SalekurPolas",
                                iconUrl: "./assets/icons/twitter.svg"
                            }, {
                                name: "Instagram",
                                url: "https://www.instagram.com/SalekurPolas/",
                                iconUrl: "./assets/icons/instagram.svg"
                            }, {
                                name: "LinkedIn",
                                url: "https://www.linkedin.com/in/SalekurPolas",
                                iconUrl: "./assets/icons/linkedin.svg"
                            }],
                            work: [{
                                name: "GitHub",
                                url: "https://github.com/SalekurPolas",
                                iconUrl: "./assets/icons/github.svg"
                            }, {
                                name: "Hackerrank",
                                url: "https://hackerrank.com/SalekurPolas",
                                iconUrl: "./assets/icons/hackerrank.svg"
                            }, {
                                name: "Stackoverflow",
                                url: "https://stackoverflow.com/story/SalekurPolas",
                                iconUrl: "./assets/icons/stackoverflow.svg"
                            }, {
                                name: "Pluralsight",
                                url: "https://www.pluralsight.com/profile/SalekurPolas",
                                iconUrl: "./assets/icons/pluralsight.svg"
                            }]
                        }, this.email = {
                            name: "Email",
                            url: "mailto:salekur19@gmail.com",
                            iconUrl: "./assets/icons/email.svg"
                        }, this.vscodeMarketplace = {
                            name: "VSCode Extension Publisher",
                            url: "https://marketplace.visualstudio.com/publishers/SalekurPolas",
                            iconUrl: "./assets/icons/vscode.svg"
                        }
                    }
                    return t.prototype.ngOnInit = function() {}, t.prototype.onBackClick = function() {
                        this.router.navigateByUrl("/")
                    }, t
                }(),
                xh = Fr({
                    encapsulation: 0,
                    styles: [
                        ["a[_ngcontent-%COMP%]{text-decoration:none;color:#f2f2f2}.root[_ngcontent-%COMP%]{min-height:100vh;min-width:100vw;display:flex;justify-content:center;align-items:center;flex-direction:column}.root[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:nth-child(1){flex:6;display:flex;align-items:center}.root[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:nth-child(2){flex:8}.page-header[_ngcontent-%COMP%]{color:#f8f8f8;position:relative;font-size:3rem;letter-spacing:1px;word-spacing:1.5px;margin:2rem 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:'Cormorant Garamond',serif}.page-header[_ngcontent-%COMP%]:after{content:'';position:absolute;display:inline-block;width:100%;height:2px;top:100%;left:0;background:#f8f8f8}.icon[_ngcontent-%COMP%]{height:5rem;width:5rem;cursor:pointer;transition:.3s all ease-in-out;-webkit-animation:1.4s ease-in-out .4s both fade;animation:1.4s ease-in-out .4s both fade}.icon[_ngcontent-%COMP%]:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}@media (max-width:690px){.icon[_ngcontent-%COMP%]{height:3rem;width:3rem}}@media (max-width:350px){.icon[_ngcontent-%COMP%]{height:2rem;width:2rem}}.img[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%;height:100%}.container[_ngcontent-%COMP%]{width:95%;max-width:75rem;display:flex;flex:1;align-items:center;justify-content:flex-start;flex-direction:column}.icons[_ngcontent-%COMP%]{padding-right:2rem;padding-left:2rem}.section[_ngcontent-%COMP%]{background:#2c3e50;display:flex;margin:2px;justify-content:space-around;align-items:center;padding-top:2.4rem;padding-bottom:2.4rem}.section.min-section[_ngcontent-%COMP%]{width:35%;display:flex;justify-content:center;align-items:center;flex-direction:column;color:#f8f8f8;font-size:1.6rem}@media (max-width:690px){.section.min-section[_ngcontent-%COMP%]{font-size:1.2rem}}@media (max-width:350px){.section.min-section[_ngcontent-%COMP%]{font-size:.8rem}}.section.min-section[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0 1rem -.8rem;width:90%;text-align:center;word-break:break-word;padding-top:.8rem}.part[_ngcontent-%COMP%]{display:flex;width:100%}.flex-1[_ngcontent-%COMP%]{flex:1}@-webkit-keyframes fade{0%{opacity:0}100%{opacity:1}}@keyframes fade{0%{opacity:0}100%{opacity:1}}"]
                    ],
                    data: {}
                });

            function Eh(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 1, "a", [
                    ["class", "img icon"],
                    ["target", "_blank"]
                ], [
                    [8, "href", 4]
                ], null, null, null, null)), (t()(), fo(1, 0, null, null, 0, "img", [], [
                    [8, "title", 0],
                    [8, "src", 4],
                    [8, "alt", 0]
                ], null, null, null, null))], null, function(t, e) {
                    t(e, 0, 0, e.context.$implicit.url), t(e, 1, 0, e.context.$implicit.name, e.context.$implicit.iconUrl, e.context.$implicit.name)
                })
            }

            function Ph(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 1, "a", [
                    ["class", "img icon"],
                    ["target", "_blank"]
                ], [
                    [8, "href", 4]
                ], null, null, null, null)), (t()(), fo(1, 0, null, null, 0, "img", [], [
                    [8, "title", 0],
                    [8, "src", 4],
                    [8, "alt", 0]
                ], null, null, null, null))], null, function(t, e) {
                    t(e, 0, 0, e.context.$implicit.url), t(e, 1, 0, e.context.$implicit.name, e.context.$implicit.iconUrl, e.context.$implicit.name)
                })
            }

            function Oh(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 2, "div", [
                    ["class", "back-icon"]
                ], null, [
                    [null, "click"]
                ], function(t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== t.component.onBackClick() && r), r
                }, null, null)), (t()(), fo(1, 0, null, null, 1, "app-back-icon", [], null, null, null, If, Af)), ei(2, 114688, null, 0, Tf, [], null, null), (t()(), fo(3, 0, null, null, 22, "div", [
                    ["class", "root"]
                ], null, null, null, null, null)), (t()(), fo(4, 0, null, null, 2, "div", [], null, null, null, null, null)), (t()(), fo(5, 0, null, null, 1, "h1", [
                    ["class", "page-header"]
                ], null, null, null, null, null)), (t()(), Pi(-1, null, ["CONTACT & PROFILES"])), (t()(), fo(7, 0, null, null, 18, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), fo(8, 0, null, null, 8, "div", [
                    ["class", "part part1"]
                ], null, null, null, null, null)), (t()(), fo(9, 0, null, null, 2, "div", [
                    ["class", "section icons flex-1"]
                ], null, null, null, null, null)), (t()(), po(16777216, null, null, 1, null, Eh)), ei(11, 802816, null, 0, Ds, [vn, yn, Un], {
                    ngForOf: [0, "ngForOf"]
                }, null), (t()(), fo(12, 0, null, null, 4, "div", [
                    ["class", "section min-section"]
                ], null, null, null, null, null)), (t()(), fo(13, 0, null, null, 1, "a", [
                    ["class", "img icon"],
                    ["target", "_blank"]
                ], [
                    [8, "href", 4]
                ], null, null, null, null)), (t()(), fo(14, 0, null, null, 0, "img", [], [
                    [8, "title", 0],
                    [8, "src", 4],
                    [8, "alt", 0]
                ], null, null, null, null)), (t()(), fo(15, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), Pi(16, null, ["", ""])), (t()(), fo(17, 0, null, null, 8, "div", [
                    ["class", "part part2"]
                ], null, null, null, null, null)), (t()(), fo(18, 0, null, null, 4, "div", [
                    ["class", "section min-section"]
                ], null, null, null, null, null)), (t()(), fo(19, 0, null, null, 1, "a", [
                    ["class", "img icon"],
                    ["target", "_top"]
                ], [
                    [8, "href", 4]
                ], null, null, null, null)), (t()(), fo(20, 0, null, null, 0, "img", [], [
                    [8, "title", 0],
                    [8, "src", 4],
                    [8, "alt", 0]
                ], null, null, null, null)), (t()(), fo(21, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), Pi(22, null, ["", ""])), (t()(), fo(23, 0, null, null, 2, "div", [
                    ["class", "section icons flex-1"]
                ], null, null, null, null, null)), (t()(), po(16777216, null, null, 1, null, Ph)), ei(25, 802816, null, 0, Ds, [vn, yn, Un], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(t, e) {
                    var n = e.component;
                    t(e, 2, 0), t(e, 11, 0, n.contactProfile.profile), t(e, 25, 0, n.contactProfile.work)
                }, function(t, e) {
                    var n = e.component;
                    t(e, 13, 0, n.vscodeMarketplace.url), t(e, 14, 0, n.vscodeMarketplace.name, n.vscodeMarketplace.iconUrl, n.vscodeMarketplace.name), t(e, 16, 0, n.vscodeMarketplace.name), t(e, 19, 0, n.email.url), t(e, 20, 0, n.email.name, n.email.iconUrl, n.email.name), t(e, 22, 0, n.email.url.replace("mailto:", ""))
                })
            }
            var Mh = Ao("app-contact", Sh, function(t) {
                    return Ti(0, [(t()(), fo(0, 0, null, null, 1, "app-contact", [], null, null, null, Oh, xh)), ei(1, 114688, null, 0, Sh, [Dp], null, null)], function(t, e) {
                        t(e, 1, 0)
                    }, null)
                }, {}, {}, []),
                Th = Fr({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {
                        animation: [{
                            type: 7,
                            name: "routerTransition",
                            definitions: [{
                                type: 1,
                                expr: "* => *",
                                animation: [{
                                    type: 11,
                                    selector: ":enter, :leave",
                                    animation: {
                                        type: 6,
                                        styles: {
                                            position: "fixed",
                                            width: "100%"
                                        },
                                        offset: null
                                    },
                                    options: {
                                        optional: !0
                                    }
                                }, {
                                    type: 11,
                                    selector: ":enter",
                                    animation: {
                                        type: 6,
                                        styles: {
                                            transform: "translateX(100%)",
                                            opacity: 0
                                        },
                                        offset: null
                                    },
                                    options: {
                                        optional: !0
                                    }
                                }, {
                                    type: 2,
                                    steps: [{
                                        type: 3,
                                        steps: [{
                                            type: 11,
                                            selector: "@*, :leave",
                                            animation: [{
                                                type: 9,
                                                options: null
                                            }],
                                            options: {
                                                optional: !0
                                            }
                                        }, {
                                            type: 11,
                                            selector: ":leave",
                                            animation: [{
                                                type: 6,
                                                styles: {
                                                    transform: "translateX(0%)"
                                                },
                                                offset: null
                                            }, {
                                                type: 4,
                                                styles: {
                                                    type: 6,
                                                    styles: {
                                                        transform: "translateX(-100%)",
                                                        opacity: 0
                                                    },
                                                    offset: null
                                                },
                                                timings: "0.8s ease-in-out"
                                            }],
                                            options: {
                                                optional: !0
                                            }
                                        }, {
                                            type: 11,
                                            selector: ":enter",
                                            animation: [{
                                                type: 6,
                                                styles: {
                                                    transform: "translateX(100%)",
                                                    opacity: 0
                                                },
                                                offset: null
                                            }, {
                                                type: 4,
                                                styles: {
                                                    type: 6,
                                                    styles: {
                                                        transform: "translateX(0%)",
                                                        opacity: 1
                                                    },
                                                    offset: null
                                                },
                                                timings: "0.8s ease-in-out"
                                            }],
                                            options: {
                                                optional: !0
                                            }
                                        }, {
                                            type: 11,
                                            selector: "@*, :enter",
                                            animation: [{
                                                type: 9,
                                                options: null
                                            }],
                                            options: {
                                                optional: !0
                                            }
                                        }],
                                        options: null
                                    }],
                                    options: null
                                }],
                                options: null
                            }],
                            options: {}
                        }]
                    }
                });

            function Ah(t) {
                return Ti(0, [(t()(), fo(0, 0, null, null, 2, "div", [], [
                    [24, "@routerTransition", 0]
                ], null, null, null, null)), (t()(), fo(1, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), ei(2, 212992, [
                    ["outlet", 4]
                ], 0, Bp, [Vp, vn, Oe, [8, null], _n], null, null)], function(t, e) {
                    t(e, 2, 0)
                }, function(t, e) {
                    t(e, 0, 0, e.component.triggerAnimation(Bo(e, 2)))
                })
            }
            var Ih = Ao("app-root", ys, function(t) {
                    return Ti(0, [(t()(), fo(0, 0, null, null, 1, "app-root", [], null, null, null, Ah, Th)), ei(1, 49152, null, 0, ys, [], null, null)], null, null)
                }, {}, {}, []),
                jh = function() {},
                Nh = "*";

            function Dh(t, e) {
                return void 0 === e && (e = null), {
                    type: 2,
                    steps: t,
                    options: e
                }
            }

            function Rh(t) {
                return {
                    type: 6,
                    styles: t,
                    offset: null
                }
            }

            function Lh(t) {
                Promise.resolve(null).then(t)
            }
            var Fh = function() {
                    function t(t, e) {
                        void 0 === t && (t = 0), void 0 === e && (e = 0), this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this._destroyed = !1, this._finished = !1, this.parentPlayer = null, this.totalTime = t + e
                    }
                    return t.prototype._onFinish = function() {
                        this._finished || (this._finished = !0, this._onDoneFns.forEach(function(t) {
                            return t()
                        }), this._onDoneFns = [])
                    }, t.prototype.onStart = function(t) {
                        this._onStartFns.push(t)
                    }, t.prototype.onDone = function(t) {
                        this._onDoneFns.push(t)
                    }, t.prototype.onDestroy = function(t) {
                        this._onDestroyFns.push(t)
                    }, t.prototype.hasStarted = function() {
                        return this._started
                    }, t.prototype.init = function() {}, t.prototype.play = function() {
                        this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0
                    }, t.prototype.triggerMicrotask = function() {
                        var t = this;
                        Lh(function() {
                            return t._onFinish()
                        })
                    }, t.prototype._onStart = function() {
                        this._onStartFns.forEach(function(t) {
                            return t()
                        }), this._onStartFns = []
                    }, t.prototype.pause = function() {}, t.prototype.restart = function() {}, t.prototype.finish = function() {
                        this._onFinish()
                    }, t.prototype.destroy = function() {
                        this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach(function(t) {
                            return t()
                        }), this._onDestroyFns = [])
                    }, t.prototype.reset = function() {}, t.prototype.setPosition = function(t) {}, t.prototype.getPosition = function() {
                        return 0
                    }, t.prototype.triggerCallback = function(t) {
                        var e = "start" == t ? this._onStartFns : this._onDoneFns;
                        e.forEach(function(t) {
                            return t()
                        }), e.length = 0
                    }, t
                }(),
                zh = function() {
                    function t(t) {
                        var e = this;
                        this._onDoneFns = [], this._onStartFns = [], this._finished = !1, this._started = !1, this._destroyed = !1, this._onDestroyFns = [], this.parentPlayer = null, this.totalTime = 0, this.players = t;
                        var n = 0,
                            r = 0,
                            o = 0,
                            i = this.players.length;
                        0 == i ? Lh(function() {
                            return e._onFinish()
                        }) : this.players.forEach(function(t) {
                            t.onDone(function() {
                                ++n == i && e._onFinish()
                            }), t.onDestroy(function() {
                                ++r == i && e._onDestroy()
                            }), t.onStart(function() {
                                ++o == i && e._onStart()
                            })
                        }), this.totalTime = this.players.reduce(function(t, e) {
                            return Math.max(t, e.totalTime)
                        }, 0)
                    }
                    return t.prototype._onFinish = function() {
                        this._finished || (this._finished = !0, this._onDoneFns.forEach(function(t) {
                            return t()
                        }), this._onDoneFns = [])
                    }, t.prototype.init = function() {
                        this.players.forEach(function(t) {
                            return t.init()
                        })
                    }, t.prototype.onStart = function(t) {
                        this._onStartFns.push(t)
                    }, t.prototype._onStart = function() {
                        this.hasStarted() || (this._started = !0, this._onStartFns.forEach(function(t) {
                            return t()
                        }), this._onStartFns = [])
                    }, t.prototype.onDone = function(t) {
                        this._onDoneFns.push(t)
                    }, t.prototype.onDestroy = function(t) {
                        this._onDestroyFns.push(t)
                    }, t.prototype.hasStarted = function() {
                        return this._started
                    }, t.prototype.play = function() {
                        this.parentPlayer || this.init(), this._onStart(), this.players.forEach(function(t) {
                            return t.play()
                        })
                    }, t.prototype.pause = function() {
                        this.players.forEach(function(t) {
                            return t.pause()
                        })
                    }, t.prototype.restart = function() {
                        this.players.forEach(function(t) {
                            return t.restart()
                        })
                    }, t.prototype.finish = function() {
                        this._onFinish(), this.players.forEach(function(t) {
                            return t.finish()
                        })
                    }, t.prototype.destroy = function() {
                        this._onDestroy()
                    }, t.prototype._onDestroy = function() {
                        this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach(function(t) {
                            return t.destroy()
                        }), this._onDestroyFns.forEach(function(t) {
                            return t()
                        }), this._onDestroyFns = [])
                    }, t.prototype.reset = function() {
                        this.players.forEach(function(t) {
                            return t.reset()
                        }), this._destroyed = !1, this._finished = !1, this._started = !1
                    }, t.prototype.setPosition = function(t) {
                        var e = t * this.totalTime;
                        this.players.forEach(function(t) {
                            var n = t.totalTime ? Math.min(1, e / t.totalTime) : 1;
                            t.setPosition(n)
                        })
                    }, t.prototype.getPosition = function() {
                        var t = 0;
                        return this.players.forEach(function(e) {
                            var n = e.getPosition();
                            t = Math.min(n, t)
                        }), t
                    }, t.prototype.beforeDestroy = function() {
                        this.players.forEach(function(t) {
                            t.beforeDestroy && t.beforeDestroy()
                        })
                    }, t.prototype.triggerCallback = function(t) {
                        var e = "start" == t ? this._onStartFns : this._onDoneFns;
                        e.forEach(function(t) {
                            return t()
                        }), e.length = 0
                    }, t
                }(),
                Uh = "!";

            function Vh(t) {
                switch (t.length) {
                    case 0:
                        return new Fh;
                    case 1:
                        return t[0];
                    default:
                        return new zh(t)
                }
            }

            function Bh(t, e, n, r, o, i) {
                void 0 === o && (o = {}), void 0 === i && (i = {});
                var a = [],
                    s = [],
                    l = -1,
                    u = null;
                if (r.forEach(function(t) {
                        var n = t.offset,
                            r = n == l,
                            c = r && u || {};
                        Object.keys(t).forEach(function(n) {
                            var r = n,
                                s = t[n];
                            if ("offset" !== n) switch (r = e.normalizePropertyName(r, a), s) {
                                case Uh:
                                    s = o[n];
                                    break;
                                case Nh:
                                    s = i[n];
                                    break;
                                default:
                                    s = e.normalizeStyleValue(n, r, s, a)
                            }
                            c[r] = s
                        }), r || s.push(c), u = c, l = n
                    }), a.length) throw new Error("Unable to animate due to the following errors:\n - " + a.join("\n - "));
                return s
            }

            function Hh(t, e, n, r) {
                switch (e) {
                    case "start":
                        t.onStart(function() {
                            return r(n && qh(n, "start", t))
                        });
                        break;
                    case "done":
                        t.onDone(function() {
                            return r(n && qh(n, "done", t))
                        });
                        break;
                    case "destroy":
                        t.onDestroy(function() {
                            return r(n && qh(n, "destroy", t))
                        })
                }
            }

            function qh(t, e, n) {
                var r = n.totalTime,
                    o = Qh(t.element, t.triggerName, t.fromState, t.toState, e || t.phaseName, void 0 == r ? t.totalTime : r, !!n.disabled),
                    i = t._data;
                return null != i && (o._data = i), o
            }

            function Qh(t, e, n, r, o, i, a) {
                return void 0 === o && (o = ""), void 0 === i && (i = 0), {
                    element: t,
                    triggerName: e,
                    fromState: n,
                    toState: r,
                    phaseName: o,
                    totalTime: i,
                    disabled: !!a
                }
            }

            function Zh(t, e, n) {
                var r;
                return t instanceof Map ? (r = t.get(e)) || t.set(e, r = n) : (r = t[e]) || (r = t[e] = n), r
            }

            function Gh(t) {
                var e = t.indexOf(":");
                return [t.substring(1, e), t.substr(e + 1)]
            }
            var Kh = function(t, e) {
                    return !1
                },
                Wh = function(t, e) {
                    return !1
                },
                Xh = function(t, e, n) {
                    return []
                };
            if ("undefined" != typeof Element) {
                if (Kh = function(t, e) {
                        return t.contains(e)
                    }, Element.prototype.matches) Wh = function(t, e) {
                    return t.matches(e)
                };
                else {
                    var Yh = Element.prototype,
                        $h = Yh.matchesSelector || Yh.mozMatchesSelector || Yh.msMatchesSelector || Yh.oMatchesSelector || Yh.webkitMatchesSelector;
                    $h && (Wh = function(t, e) {
                        return $h.apply(t, [e])
                    })
                }
                Xh = function(t, e, n) {
                    var r = [];
                    if (n) r.push.apply(r, l(t.querySelectorAll(e)));
                    else {
                        var o = t.querySelector(e);
                        o && r.push(o)
                    }
                    return r
                }
            }
            var Jh = null,
                td = !1;

            function ed(t) {
                Jh || (Jh = nd() || {}, td = !!Jh.style && "WebkitAppearance" in Jh.style);
                var e = !0;
                return Jh.style && ! function(t) {
                    return "ebkit" == t.substring(1, 6)
                }(t) && !(e = t in Jh.style) && td && (e = "Webkit" + t.charAt(0).toUpperCase() + t.substr(1) in Jh.style), e
            }

            function nd() {
                return "undefined" != typeof document ? document.body : null
            }
            var rd = Wh,
                od = Kh,
                id = Xh;

            function ad(t) {
                var e = {};
                return Object.keys(t).forEach(function(n) {
                    var r = n.replace(/([a-z])([A-Z])/g, "$1-$2");
                    e[r] = t[n]
                }), e
            }
            var sd = function() {
                    function t() {}
                    return t.prototype.validateStyleProperty = function(t) {
                        return ed(t)
                    }, t.prototype.matchesElement = function(t, e) {
                        return rd(t, e)
                    }, t.prototype.containsElement = function(t, e) {
                        return od(t, e)
                    }, t.prototype.query = function(t, e, n) {
                        return id(t, e, n)
                    }, t.prototype.computeStyle = function(t, e, n) {
                        return n || ""
                    }, t.prototype.animate = function(t, e, n, r, o, i, a) {
                        return void 0 === i && (i = []), new Fh(n, r)
                    }, t
                }(),
                ld = function() {
                    function t() {}
                    return t.NOOP = new sd, t
                }(),
                ud = 1e3;

            function cd(t) {
                if ("number" == typeof t) return t;
                var e = t.match(/^(-?[\.\d]+)(m?s)/);
                return !e || e.length < 2 ? 0 : pd(parseFloat(e[1]), e[2])
            }

            function pd(t, e) {
                switch (e) {
                    case "s":
                        return t * ud;
                    default:
                        return t
                }
            }

            function fd(t, e, n) {
                return t.hasOwnProperty("duration") ? t : function(t, e, n) {
                    var r, o = 0,
                        i = "";
                    if ("string" == typeof t) {
                        var a = t.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);
                        if (null === a) return e.push('The provided timing value "' + t + '" is invalid.'), {
                            duration: 0,
                            delay: 0,
                            easing: ""
                        };
                        r = pd(parseFloat(a[1]), a[2]);
                        var s = a[3];
                        null != s && (o = pd(Math.floor(parseFloat(s)), a[4]));
                        var l = a[5];
                        l && (i = l)
                    } else r = t;
                    if (!n) {
                        var u = !1,
                            c = e.length;
                        r < 0 && (e.push("Duration values below 0 are not allowed for this animation step."), u = !0), o < 0 && (e.push("Delay values below 0 are not allowed for this animation step."), u = !0), u && e.splice(c, 0, 'The provided timing value "' + t + '" is invalid.')
                    }
                    return {
                        duration: r,
                        delay: o,
                        easing: i
                    }
                }(t, e, n)
            }

            function hd(t, e) {
                return void 0 === e && (e = {}), Object.keys(t).forEach(function(n) {
                    e[n] = t[n]
                }), e
            }

            function dd(t, e, n) {
                if (void 0 === n && (n = {}), e)
                    for (var r in t) n[r] = t[r];
                else hd(t, n);
                return n
            }

            function md(t, e) {
                t.style && Object.keys(e).forEach(function(n) {
                    var r = kd(n);
                    t.style[r] = e[n]
                })
            }

            function gd(t, e) {
                t.style && Object.keys(e).forEach(function(e) {
                    var n = kd(e);
                    t.style[n] = ""
                })
            }

            function yd(t) {
                return Array.isArray(t) ? 1 == t.length ? t[0] : Dh(t) : t
            }
            var vd = new RegExp("{{\\s*(.+?)\\s*}}", "g");

            function _d(t) {
                var e = [];
                if ("string" == typeof t) {
                    for (var n = t.toString(), r = void 0; r = vd.exec(n);) e.push(r[1]);
                    vd.lastIndex = 0
                }
                return e
            }

            function bd(t, e, n) {
                var r = t.toString(),
                    o = r.replace(vd, function(t, r) {
                        var o = e[r];
                        return e.hasOwnProperty(r) || (n.push("Please provide a value for the animation param " + r), o = ""), o.toString()
                    });
                return o == r ? t : o
            }

            function wd(t) {
                for (var e = [], n = t.next(); !n.done;) e.push(n.value), n = t.next();
                return e
            }
            var Cd = /-+([a-z0-9])/g;

            function kd(t) {
                return t.replace(Cd, function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return t[1].toUpperCase()
                })
            }

            function Sd(t, e) {
                return 0 === t || 0 === e
            }

            function xd(t, e, n) {
                var r = Object.keys(n);
                if (r.length && e.length) {
                    var o = e[0],
                        i = [];
                    if (r.forEach(function(t) {
                            o.hasOwnProperty(t) || i.push(t), o[t] = n[t]
                        }), i.length)
                        for (var a = function() {
                                var n = e[s];
                                i.forEach(function(e) {
                                    n[e] = Pd(t, e)
                                })
                            }, s = 1; s < e.length; s++) a()
                }
                return e
            }

            function Ed(t, e, n) {
                switch (e.type) {
                    case 7:
                        return t.visitTrigger(e, n);
                    case 0:
                        return t.visitState(e, n);
                    case 1:
                        return t.visitTransition(e, n);
                    case 2:
                        return t.visitSequence(e, n);
                    case 3:
                        return t.visitGroup(e, n);
                    case 4:
                        return t.visitAnimate(e, n);
                    case 5:
                        return t.visitKeyframes(e, n);
                    case 6:
                        return t.visitStyle(e, n);
                    case 8:
                        return t.visitReference(e, n);
                    case 9:
                        return t.visitAnimateChild(e, n);
                    case 10:
                        return t.visitAnimateRef(e, n);
                    case 11:
                        return t.visitQuery(e, n);
                    case 12:
                        return t.visitStagger(e, n);
                    default:
                        throw new Error("Unable to resolve animation metadata node #" + e.type)
                }
            }

            function Pd(t, e) {
                return window.getComputedStyle(t)[e]
            }
            var Od = "*",
                Md = new Set(["true", "1"]),
                Td = new Set(["false", "0"]);

            function Ad(t, e) {
                var n = Md.has(t) || Td.has(t),
                    r = Md.has(e) || Td.has(e);
                return function(o, i) {
                    var a = t == Od || t == o,
                        s = e == Od || e == i;
                    return !a && n && "boolean" == typeof o && (a = o ? Md.has(t) : Td.has(t)), !s && r && "boolean" == typeof i && (s = i ? Md.has(e) : Td.has(e)), a && s
                }
            }
            var Id = new RegExp("s*:selfs*,?", "g");

            function jd(t, e, n) {
                return new Nd(t).build(e, n)
            }
            var Nd = function() {
                    function t(t) {
                        this._driver = t
                    }
                    return t.prototype.build = function(t, e) {
                        var n = new Dd(e);
                        return this._resetContextStyleTimingState(n), Ed(this, yd(t), n)
                    }, t.prototype._resetContextStyleTimingState = function(t) {
                        t.currentQuerySelector = "", t.collectedStyles = {}, t.collectedStyles[""] = {}, t.currentTime = 0
                    }, t.prototype.visitTrigger = function(t, e) {
                        var n = this,
                            r = e.queryCount = 0,
                            o = e.depCount = 0,
                            i = [],
                            a = [];
                        return "@" == t.name.charAt(0) && e.errors.push("animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"), t.definitions.forEach(function(t) {
                            if (n._resetContextStyleTimingState(e), 0 == t.type) {
                                var s = t,
                                    l = s.name;
                                l.toString().split(/\s*,\s*/).forEach(function(t) {
                                    s.name = t, i.push(n.visitState(s, e))
                                }), s.name = l
                            } else if (1 == t.type) {
                                var u = n.visitTransition(t, e);
                                r += u.queryCount, o += u.depCount, a.push(u)
                            } else e.errors.push("only state() and transition() definitions can sit inside of a trigger()")
                        }), {
                            type: 7,
                            name: t.name,
                            states: i,
                            transitions: a,
                            queryCount: r,
                            depCount: o,
                            options: null
                        }
                    }, t.prototype.visitState = function(t, e) {
                        var n = this.visitStyle(t.styles, e),
                            r = t.options && t.options.params || null;
                        if (n.containsDynamicStyles) {
                            var o = new Set,
                                i = r || {};
                            if (n.styles.forEach(function(t) {
                                    if (Rd(t)) {
                                        var e = t;
                                        Object.keys(e).forEach(function(t) {
                                            _d(e[t]).forEach(function(t) {
                                                i.hasOwnProperty(t) || o.add(t)
                                            })
                                        })
                                    }
                                }), o.size) {
                                var a = wd(o.values());
                                e.errors.push('state("' + t.name + '", ...) must define default values for all the following style substitutions: ' + a.join(", "))
                            }
                        }
                        return {
                            type: 0,
                            name: t.name,
                            style: n,
                            options: r ? {
                                params: r
                            } : null
                        }
                    }, t.prototype.visitTransition = function(t, e) {
                        e.queryCount = 0, e.depCount = 0;
                        var n, r, o, i = Ed(this, yd(t.animation), e);
                        return {
                            type: 1,
                            matchers: (n = t.expr, r = e.errors, o = [], "string" == typeof n ? n.split(/\s*,\s*/).forEach(function(t) {
                                return function(t, e, n) {
                                    if (":" == t[0]) {
                                        var r = function(t, e) {
                                            switch (t) {
                                                case ":enter":
                                                    return "void => *";
                                                case ":leave":
                                                    return "* => void";
                                                case ":increment":
                                                    return function(t, e) {
                                                        return parseFloat(e) > parseFloat(t)
                                                    };
                                                case ":decrement":
                                                    return function(t, e) {
                                                        return parseFloat(e) < parseFloat(t)
                                                    };
                                                default:
                                                    return e.push('The transition alias value "' + t + '" is not supported'), "* => *"
                                            }
                                        }(t, n);
                                        if ("function" == typeof r) return void e.push(r);
                                        t = r
                                    }
                                    var o = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                                    if (null == o || o.length < 4) return n.push('The provided transition expression "' + t + '" is not supported'), e;
                                    var i = o[1],
                                        a = o[2],
                                        s = o[3];
                                    e.push(Ad(i, s)), "<" != a[0] || i == Od && s == Od || e.push(Ad(s, i))
                                }(t, o, r)
                            }) : o.push(n), o),
                            animation: i,
                            queryCount: e.queryCount,
                            depCount: e.depCount,
                            options: Ld(t.options)
                        }
                    }, t.prototype.visitSequence = function(t, e) {
                        var n = this;
                        return {
                            type: 2,
                            steps: t.steps.map(function(t) {
                                return Ed(n, t, e)
                            }),
                            options: Ld(t.options)
                        }
                    }, t.prototype.visitGroup = function(t, e) {
                        var n = this,
                            r = e.currentTime,
                            o = 0,
                            i = t.steps.map(function(t) {
                                e.currentTime = r;
                                var i = Ed(n, t, e);
                                return o = Math.max(o, e.currentTime), i
                            });
                        return e.currentTime = o, {
                            type: 3,
                            steps: i,
                            options: Ld(t.options)
                        }
                    }, t.prototype.visitAnimate = function(t, e) {
                        var n, r = function(t, e) {
                            var n = null;
                            if (t.hasOwnProperty("duration")) n = t;
                            else if ("number" == typeof t) return Fd(fd(t, e).duration, 0, "");
                            var r = t;
                            if (r.split(/\s+/).some(function(t) {
                                    return "{" == t.charAt(0) && "{" == t.charAt(1)
                                })) {
                                var o = Fd(0, 0, "");
                                return o.dynamic = !0, o.strValue = r, o
                            }
                            return Fd((n = n || fd(r, e)).duration, n.delay, n.easing)
                        }(t.timings, e.errors);
                        e.currentAnimateTimings = r;
                        var o = t.styles ? t.styles : Rh({});
                        if (5 == o.type) n = this.visitKeyframes(o, e);
                        else {
                            var i = t.styles,
                                a = !1;
                            if (!i) {
                                a = !0;
                                var s = {};
                                r.easing && (s.easing = r.easing), i = Rh(s)
                            }
                            e.currentTime += r.duration + r.delay;
                            var l = this.visitStyle(i, e);
                            l.isEmptyStep = a, n = l
                        }
                        return e.currentAnimateTimings = null, {
                            type: 4,
                            timings: r,
                            style: n,
                            options: null
                        }
                    }, t.prototype.visitStyle = function(t, e) {
                        var n = this._makeStyleAst(t, e);
                        return this._validateStyleAst(n, e), n
                    }, t.prototype._makeStyleAst = function(t, e) {
                        var n = [];
                        Array.isArray(t.styles) ? t.styles.forEach(function(t) {
                            "string" == typeof t ? t == Nh ? n.push(t) : e.errors.push("The provided style string value " + t + " is not allowed.") : n.push(t)
                        }) : n.push(t.styles);
                        var r = !1,
                            o = null;
                        return n.forEach(function(t) {
                            if (Rd(t)) {
                                var e = t,
                                    n = e.easing;
                                if (n && (o = n, delete e.easing), !r)
                                    for (var i in e)
                                        if (e[i].toString().indexOf("{{") >= 0) {
                                            r = !0;
                                            break
                                        }
                            }
                        }), {
                            type: 6,
                            styles: n,
                            easing: o,
                            offset: t.offset,
                            containsDynamicStyles: r,
                            options: null
                        }
                    }, t.prototype._validateStyleAst = function(t, e) {
                        var n = this,
                            r = e.currentAnimateTimings,
                            o = e.currentTime,
                            i = e.currentTime;
                        r && i > 0 && (i -= r.duration + r.delay), t.styles.forEach(function(t) {
                            "string" != typeof t && Object.keys(t).forEach(function(r) {
                                if (n._driver.validateStyleProperty(r)) {
                                    var a, s, l, u = e.collectedStyles[e.currentQuerySelector],
                                        c = u[r],
                                        p = !0;
                                    c && (i != o && i >= c.startTime && o <= c.endTime && (e.errors.push('The CSS property "' + r + '" that exists between the times of "' + c.startTime + 'ms" and "' + c.endTime + 'ms" is also being animated in a parallel animation between the times of "' + i + 'ms" and "' + o + 'ms"'), p = !1), i = c.startTime), p && (u[r] = {
                                        startTime: i,
                                        endTime: o
                                    }), e.options && (a = e.errors, s = e.options.params || {}, (l = _d(t[r])).length && l.forEach(function(t) {
                                        s.hasOwnProperty(t) || a.push("Unable to resolve the local animation param " + t + " in the given list of values")
                                    }))
                                } else e.errors.push('The provided animation property "' + r + '" is not a supported CSS property for animations')
                            })
                        })
                    }, t.prototype.visitKeyframes = function(t, e) {
                        var n = this,
                            r = {
                                type: 5,
                                styles: [],
                                options: null
                            };
                        if (!e.currentAnimateTimings) return e.errors.push("keyframes() must be placed inside of a call to animate()"), r;
                        var o = 0,
                            i = [],
                            a = !1,
                            s = !1,
                            l = 0,
                            u = t.steps.map(function(t) {
                                var r = n._makeStyleAst(t, e),
                                    u = null != r.offset ? r.offset : function(t) {
                                        if ("string" == typeof t) return null;
                                        var e = null;
                                        if (Array.isArray(t)) t.forEach(function(t) {
                                            if (Rd(t) && t.hasOwnProperty("offset")) {
                                                var n = t;
                                                e = parseFloat(n.offset), delete n.offset
                                            }
                                        });
                                        else if (Rd(t) && t.hasOwnProperty("offset")) {
                                            var n = t;
                                            e = parseFloat(n.offset), delete n.offset
                                        }
                                        return e
                                    }(r.styles),
                                    c = 0;
                                return null != u && (o++, c = r.offset = u), s = s || c < 0 || c > 1, a = a || c < l, l = c, i.push(c), r
                            });
                        s && e.errors.push("Please ensure that all keyframe offsets are between 0 and 1"), a && e.errors.push("Please ensure that all keyframe offsets are in order");
                        var c = t.steps.length,
                            p = 0;
                        o > 0 && o < c ? e.errors.push("Not all style() steps within the declared keyframes() contain offsets") : 0 == o && (p = 1 / (c - 1));
                        var f = c - 1,
                            h = e.currentTime,
                            d = e.currentAnimateTimings,
                            m = d.duration;
                        return u.forEach(function(t, o) {
                            var a = p > 0 ? o == f ? 1 : p * o : i[o],
                                s = a * m;
                            e.currentTime = h + d.delay + s, d.duration = s, n._validateStyleAst(t, e), t.offset = a, r.styles.push(t)
                        }), r
                    }, t.prototype.visitReference = function(t, e) {
                        return {
                            type: 8,
                            animation: Ed(this, yd(t.animation), e),
                            options: Ld(t.options)
                        }
                    }, t.prototype.visitAnimateChild = function(t, e) {
                        return e.depCount++, {
                            type: 9,
                            options: Ld(t.options)
                        }
                    }, t.prototype.visitAnimateRef = function(t, e) {
                        return {
                            type: 10,
                            animation: this.visitReference(t.animation, e),
                            options: Ld(t.options)
                        }
                    }, t.prototype.visitQuery = function(t, e) {
                        var n = e.currentQuerySelector,
                            r = t.options || {};
                        e.queryCount++, e.currentQuery = t;
                        var o = s(function(t) {
                                var e = !!t.split(/\s*,\s*/).find(function(t) {
                                    return ":self" == t
                                });
                                return e && (t = t.replace(Id, "")), [t = t.replace(/@\*/g, ".ng-trigger").replace(/@\w+/g, function(t) {
                                    return ".ng-trigger-" + t.substr(1)
                                }).replace(/:animating/g, ".ng-animating"), e]
                            }(t.selector), 2),
                            i = o[0],
                            a = o[1];
                        e.currentQuerySelector = n.length ? n + " " + i : i, Zh(e.collectedStyles, e.currentQuerySelector, {});
                        var l = Ed(this, yd(t.animation), e);
                        return e.currentQuery = null, e.currentQuerySelector = n, {
                            type: 11,
                            selector: i,
                            limit: r.limit || 0,
                            optional: !!r.optional,
                            includeSelf: a,
                            animation: l,
                            originalSelector: t.selector,
                            options: Ld(t.options)
                        }
                    }, t.prototype.visitStagger = function(t, e) {
                        e.currentQuery || e.errors.push("stagger() can only be used inside of query()");
                        var n = "full" === t.timings ? {
                            duration: 0,
                            delay: 0,
                            easing: "full"
                        } : fd(t.timings, e.errors, !0);
                        return {
                            type: 12,
                            animation: Ed(this, yd(t.animation), e),
                            timings: n,
                            options: null
                        }
                    }, t
                }(),
                Dd = function(t) {
                    this.errors = t, this.queryCount = 0, this.depCount = 0, this.currentTransition = null, this.currentQuery = null, this.currentQuerySelector = null, this.currentAnimateTimings = null, this.currentTime = 0, this.collectedStyles = {}, this.options = null
                };

            function Rd(t) {
                return !Array.isArray(t) && "object" == typeof t
            }

            function Ld(t) {
                var e;
                return t ? (t = hd(t)).params && (t.params = (e = t.params) ? hd(e) : null) : t = {}, t
            }

            function Fd(t, e, n) {
                return {
                    duration: t,
                    delay: e,
                    easing: n
                }
            }

            function zd(t, e, n, r, o, i, a, s) {
                return void 0 === a && (a = null), void 0 === s && (s = !1), {
                    type: 1,
                    element: t,
                    keyframes: e,
                    preStyleProps: n,
                    postStyleProps: r,
                    duration: o,
                    delay: i,
                    totalTime: o + i,
                    easing: a,
                    subTimeline: s
                }
            }
            var Ud = function() {
                    function t() {
                        this._map = new Map
                    }
                    return t.prototype.consume = function(t) {
                        var e = this._map.get(t);
                        return e ? this._map.delete(t) : e = [], e
                    }, t.prototype.append = function(t, e) {
                        var n = this._map.get(t);
                        n || this._map.set(t, n = []), n.push.apply(n, l(e))
                    }, t.prototype.has = function(t) {
                        return this._map.has(t)
                    }, t.prototype.clear = function() {
                        this._map.clear()
                    }, t
                }(),
                Vd = new RegExp(":enter", "g"),
                Bd = new RegExp(":leave", "g");

            function Hd(t, e, n, r, o, i, a, s, l, u) {
                return void 0 === i && (i = {}), void 0 === a && (a = {}), void 0 === u && (u = []), (new qd).buildKeyframes(t, e, n, r, o, i, a, s, l, u)
            }
            var qd = function() {
                    function t() {}
                    return t.prototype.buildKeyframes = function(t, e, n, r, o, i, a, s, l, u) {
                        void 0 === u && (u = []), l = l || new Ud;
                        var c = new Zd(t, e, l, r, o, u, []);
                        c.options = s, c.currentTimeline.setStyles([i], null, c.errors, s), Ed(this, n, c);
                        var p = c.timelines.filter(function(t) {
                            return t.containsAnimation()
                        });
                        if (p.length && Object.keys(a).length) {
                            var f = p[p.length - 1];
                            f.allowOnlyTimelineStyles() || f.setStyles([a], null, c.errors, s)
                        }
                        return p.length ? p.map(function(t) {
                            return t.buildKeyframes()
                        }) : [zd(e, [], [], [], 0, 0, "", !1)]
                    }, t.prototype.visitTrigger = function(t, e) {}, t.prototype.visitState = function(t, e) {}, t.prototype.visitTransition = function(t, e) {}, t.prototype.visitAnimateChild = function(t, e) {
                        var n = e.subInstructions.consume(e.element);
                        if (n) {
                            var r = e.createSubContext(t.options),
                                o = e.currentTimeline.currentTime,
                                i = this._visitSubInstructions(n, r, r.options);
                            o != i && e.transformIntoNewTimeline(i)
                        }
                        e.previousNode = t
                    }, t.prototype.visitAnimateRef = function(t, e) {
                        var n = e.createSubContext(t.options);
                        n.transformIntoNewTimeline(), this.visitReference(t.animation, n), e.transformIntoNewTimeline(n.currentTimeline.currentTime), e.previousNode = t
                    }, t.prototype._visitSubInstructions = function(t, e, n) {
                        var r = e.currentTimeline.currentTime,
                            o = null != n.duration ? cd(n.duration) : null,
                            i = null != n.delay ? cd(n.delay) : null;
                        return 0 !== o && t.forEach(function(t) {
                            var n = e.appendInstructionToTimeline(t, o, i);
                            r = Math.max(r, n.duration + n.delay)
                        }), r
                    }, t.prototype.visitReference = function(t, e) {
                        e.updateOptions(t.options, !0), Ed(this, t.animation, e), e.previousNode = t
                    }, t.prototype.visitSequence = function(t, e) {
                        var n = this,
                            r = e.subContextCount,
                            o = e,
                            i = t.options;
                        if (i && (i.params || i.delay) && ((o = e.createSubContext(i)).transformIntoNewTimeline(), null != i.delay)) {
                            6 == o.previousNode.type && (o.currentTimeline.snapshotCurrentStyles(), o.previousNode = Qd);
                            var a = cd(i.delay);
                            o.delayNextStep(a)
                        }
                        t.steps.length && (t.steps.forEach(function(t) {
                            return Ed(n, t, o)
                        }), o.currentTimeline.applyStylesToKeyframe(), o.subContextCount > r && o.transformIntoNewTimeline()), e.previousNode = t
                    }, t.prototype.visitGroup = function(t, e) {
                        var n = this,
                            r = [],
                            o = e.currentTimeline.currentTime,
                            i = t.options && t.options.delay ? cd(t.options.delay) : 0;
                        t.steps.forEach(function(a) {
                            var s = e.createSubContext(t.options);
                            i && s.delayNextStep(i), Ed(n, a, s), o = Math.max(o, s.currentTimeline.currentTime), r.push(s.currentTimeline)
                        }), r.forEach(function(t) {
                            return e.currentTimeline.mergeTimelineCollectedStyles(t)
                        }), e.transformIntoNewTimeline(o), e.previousNode = t
                    }, t.prototype._visitTiming = function(t, e) {
                        if (t.dynamic) {
                            var n = t.strValue;
                            return fd(e.params ? bd(n, e.params, e.errors) : n, e.errors)
                        }
                        return {
                            duration: t.duration,
                            delay: t.delay,
                            easing: t.easing
                        }
                    }, t.prototype.visitAnimate = function(t, e) {
                        var n = e.currentAnimateTimings = this._visitTiming(t.timings, e),
                            r = e.currentTimeline;
                        n.delay && (e.incrementTime(n.delay), r.snapshotCurrentStyles());
                        var o = t.style;
                        5 == o.type ? this.visitKeyframes(o, e) : (e.incrementTime(n.duration), this.visitStyle(o, e), r.applyStylesToKeyframe()), e.currentAnimateTimings = null, e.previousNode = t
                    }, t.prototype.visitStyle = function(t, e) {
                        var n = e.currentTimeline,
                            r = e.currentAnimateTimings;
                        !r && n.getCurrentStyleProperties().length && n.forwardFrame();
                        var o = r && r.easing || t.easing;
                        t.isEmptyStep ? n.applyEmptyStep(o) : n.setStyles(t.styles, o, e.errors, e.options), e.previousNode = t
                    }, t.prototype.visitKeyframes = function(t, e) {
                        var n = e.currentAnimateTimings,
                            r = e.currentTimeline.duration,
                            o = n.duration,
                            i = e.createSubContext().currentTimeline;
                        i.easing = n.easing, t.styles.forEach(function(t) {
                            i.forwardTime((t.offset || 0) * o), i.setStyles(t.styles, t.easing, e.errors, e.options), i.applyStylesToKeyframe()
                        }), e.currentTimeline.mergeTimelineCollectedStyles(i), e.transformIntoNewTimeline(r + o), e.previousNode = t
                    }, t.prototype.visitQuery = function(t, e) {
                        var n = this,
                            r = e.currentTimeline.currentTime,
                            o = t.options || {},
                            i = o.delay ? cd(o.delay) : 0;
                        i && (6 === e.previousNode.type || 0 == r && e.currentTimeline.getCurrentStyleProperties().length) && (e.currentTimeline.snapshotCurrentStyles(), e.previousNode = Qd);
                        var a = r,
                            s = e.invokeQuery(t.selector, t.originalSelector, t.limit, t.includeSelf, !!o.optional, e.errors);
                        e.currentQueryTotal = s.length;
                        var l = null;
                        s.forEach(function(r, o) {
                            e.currentQueryIndex = o;
                            var s = e.createSubContext(t.options, r);
                            i && s.delayNextStep(i), r === e.element && (l = s.currentTimeline), Ed(n, t.animation, s), s.currentTimeline.applyStylesToKeyframe(), a = Math.max(a, s.currentTimeline.currentTime)
                        }), e.currentQueryIndex = 0, e.currentQueryTotal = 0, e.transformIntoNewTimeline(a), l && (e.currentTimeline.mergeTimelineCollectedStyles(l), e.currentTimeline.snapshotCurrentStyles()), e.previousNode = t
                    }, t.prototype.visitStagger = function(t, e) {
                        var n = e.parentContext,
                            r = e.currentTimeline,
                            o = t.timings,
                            i = Math.abs(o.duration),
                            a = i * (e.currentQueryTotal - 1),
                            s = i * e.currentQueryIndex;
                        switch (o.duration < 0 ? "reverse" : o.easing) {
                            case "reverse":
                                s = a - s;
                                break;
                            case "full":
                                s = n.currentStaggerTime
                        }
                        var l = e.currentTimeline;
                        s && l.delayNextStep(s);
                        var u = l.currentTime;
                        Ed(this, t.animation, e), e.previousNode = t, n.currentStaggerTime = r.currentTime - u + (r.startTime - n.currentTimeline.startTime)
                    }, t
                }(),
                Qd = {},
                Zd = function() {
                    function t(t, e, n, r, o, i, a, s) {
                        this._driver = t, this.element = e, this.subInstructions = n, this._enterClassName = r, this._leaveClassName = o, this.errors = i, this.timelines = a, this.parentContext = null, this.currentAnimateTimings = null, this.previousNode = Qd, this.subContextCount = 0, this.options = {}, this.currentQueryIndex = 0, this.currentQueryTotal = 0, this.currentStaggerTime = 0, this.currentTimeline = s || new Gd(this._driver, e, 0), a.push(this.currentTimeline)
                    }
                    return Object.defineProperty(t.prototype, "params", {
                        get: function() {
                            return this.options.params
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.updateOptions = function(t, e) {
                        var n = this;
                        if (t) {
                            var r = t,
                                o = this.options;
                            null != r.duration && (o.duration = cd(r.duration)), null != r.delay && (o.delay = cd(r.delay));
                            var i = r.params;
                            if (i) {
                                var a = o.params;
                                a || (a = this.options.params = {}), Object.keys(i).forEach(function(t) {
                                    e && a.hasOwnProperty(t) || (a[t] = bd(i[t], a, n.errors))
                                })
                            }
                        }
                    }, t.prototype._copyOptions = function() {
                        var t = {};
                        if (this.options) {
                            var e = this.options.params;
                            if (e) {
                                var n = t.params = {};
                                Object.keys(e).forEach(function(t) {
                                    n[t] = e[t]
                                })
                            }
                        }
                        return t
                    }, t.prototype.createSubContext = function(e, n, r) {
                        void 0 === e && (e = null);
                        var o = n || this.element,
                            i = new t(this._driver, o, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(o, r || 0));
                        return i.previousNode = this.previousNode, i.currentAnimateTimings = this.currentAnimateTimings, i.options = this._copyOptions(), i.updateOptions(e), i.currentQueryIndex = this.currentQueryIndex, i.currentQueryTotal = this.currentQueryTotal, i.parentContext = this, this.subContextCount++, i
                    }, t.prototype.transformIntoNewTimeline = function(t) {
                        return this.previousNode = Qd, this.currentTimeline = this.currentTimeline.fork(this.element, t), this.timelines.push(this.currentTimeline), this.currentTimeline
                    }, t.prototype.appendInstructionToTimeline = function(t, e, n) {
                        var r = {
                                duration: null != e ? e : t.duration,
                                delay: this.currentTimeline.currentTime + (null != n ? n : 0) + t.delay,
                                easing: ""
                            },
                            o = new Kd(this._driver, t.element, t.keyframes, t.preStyleProps, t.postStyleProps, r, t.stretchStartingKeyframe);
                        return this.timelines.push(o), r
                    }, t.prototype.incrementTime = function(t) {
                        this.currentTimeline.forwardTime(this.currentTimeline.duration + t)
                    }, t.prototype.delayNextStep = function(t) {
                        t > 0 && this.currentTimeline.delayNextStep(t)
                    }, t.prototype.invokeQuery = function(t, e, n, r, o, i) {
                        var a = [];
                        if (r && a.push(this.element), t.length > 0) {
                            t = (t = t.replace(Vd, "." + this._enterClassName)).replace(Bd, "." + this._leaveClassName);
                            var s = this._driver.query(this.element, t, 1 != n);
                            0 !== n && (s = n < 0 ? s.slice(s.length + n, s.length) : s.slice(0, n)), a.push.apply(a, l(s))
                        }
                        return o || 0 != a.length || i.push('`query("' + e + '")` returned zero elements. (Use `query("' + e + '", { optional: true })` if you wish to allow this.)'), a
                    }, t
                }(),
                Gd = function() {
                    function t(t, e, n, r) {
                        this._driver = t, this.element = e, this.startTime = n, this._elementTimelineStylesLookup = r, this.duration = 0, this._previousKeyframe = {}, this._currentKeyframe = {}, this._keyframes = new Map, this._styleSummary = {}, this._pendingStyles = {}, this._backFill = {}, this._currentEmptyStepKeyframe = null, this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map), this._localTimelineStyles = Object.create(this._backFill, {}), this._globalTimelineStyles = this._elementTimelineStylesLookup.get(e), this._globalTimelineStyles || (this._globalTimelineStyles = this._localTimelineStyles, this._elementTimelineStylesLookup.set(e, this._localTimelineStyles)), this._loadKeyframe()
                    }
                    return t.prototype.containsAnimation = function() {
                        switch (this._keyframes.size) {
                            case 0:
                                return !1;
                            case 1:
                                return this.getCurrentStyleProperties().length > 0;
                            default:
                                return !0
                        }
                    }, t.prototype.getCurrentStyleProperties = function() {
                        return Object.keys(this._currentKeyframe)
                    }, Object.defineProperty(t.prototype, "currentTime", {
                        get: function() {
                            return this.startTime + this.duration
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.delayNextStep = function(t) {
                        var e = 1 == this._keyframes.size && Object.keys(this._pendingStyles).length;
                        this.duration || e ? (this.forwardTime(this.currentTime + t), e && this.snapshotCurrentStyles()) : this.startTime += t
                    }, t.prototype.fork = function(e, n) {
                        return this.applyStylesToKeyframe(), new t(this._driver, e, n || this.currentTime, this._elementTimelineStylesLookup)
                    }, t.prototype._loadKeyframe = function() {
                        this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe), this._currentKeyframe = this._keyframes.get(this.duration), this._currentKeyframe || (this._currentKeyframe = Object.create(this._backFill, {}), this._keyframes.set(this.duration, this._currentKeyframe))
                    }, t.prototype.forwardFrame = function() {
                        this.duration += 1, this._loadKeyframe()
                    }, t.prototype.forwardTime = function(t) {
                        this.applyStylesToKeyframe(), this.duration = t, this._loadKeyframe()
                    }, t.prototype._updateStyle = function(t, e) {
                        this._localTimelineStyles[t] = e, this._globalTimelineStyles[t] = e, this._styleSummary[t] = {
                            time: this.currentTime,
                            value: e
                        }
                    }, t.prototype.allowOnlyTimelineStyles = function() {
                        return this._currentEmptyStepKeyframe !== this._currentKeyframe
                    }, t.prototype.applyEmptyStep = function(t) {
                        var e = this;
                        t && (this._previousKeyframe.easing = t), Object.keys(this._globalTimelineStyles).forEach(function(t) {
                            e._backFill[t] = e._globalTimelineStyles[t] || Nh, e._currentKeyframe[t] = Nh
                        }), this._currentEmptyStepKeyframe = this._currentKeyframe
                    }, t.prototype.setStyles = function(t, e, n, r) {
                        var o = this;
                        e && (this._previousKeyframe.easing = e);
                        var i = r && r.params || {},
                            a = function(t, e) {
                                var n, r = {};
                                return t.forEach(function(t) {
                                    "*" === t ? (n = n || Object.keys(e)).forEach(function(t) {
                                        r[t] = Nh
                                    }) : dd(t, !1, r)
                                }), r
                            }(t, this._globalTimelineStyles);
                        Object.keys(a).forEach(function(t) {
                            var e = bd(a[t], i, n);
                            o._pendingStyles[t] = e, o._localTimelineStyles.hasOwnProperty(t) || (o._backFill[t] = o._globalTimelineStyles.hasOwnProperty(t) ? o._globalTimelineStyles[t] : Nh), o._updateStyle(t, e)
                        })
                    }, t.prototype.applyStylesToKeyframe = function() {
                        var t = this,
                            e = this._pendingStyles,
                            n = Object.keys(e);
                        0 != n.length && (this._pendingStyles = {}, n.forEach(function(n) {
                            t._currentKeyframe[n] = e[n]
                        }), Object.keys(this._localTimelineStyles).forEach(function(e) {
                            t._currentKeyframe.hasOwnProperty(e) || (t._currentKeyframe[e] = t._localTimelineStyles[e])
                        }))
                    }, t.prototype.snapshotCurrentStyles = function() {
                        var t = this;
                        Object.keys(this._localTimelineStyles).forEach(function(e) {
                            var n = t._localTimelineStyles[e];
                            t._pendingStyles[e] = n, t._updateStyle(e, n)
                        })
                    }, t.prototype.getFinalKeyframe = function() {
                        return this._keyframes.get(this.duration)
                    }, Object.defineProperty(t.prototype, "properties", {
                        get: function() {
                            var t = [];
                            for (var e in this._currentKeyframe) t.push(e);
                            return t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.mergeTimelineCollectedStyles = function(t) {
                        var e = this;
                        Object.keys(t._styleSummary).forEach(function(n) {
                            var r = e._styleSummary[n],
                                o = t._styleSummary[n];
                            (!r || o.time > r.time) && e._updateStyle(n, o.value)
                        })
                    }, t.prototype.buildKeyframes = function() {
                        var t = this;
                        this.applyStylesToKeyframe();
                        var e = new Set,
                            n = new Set,
                            r = 1 === this._keyframes.size && 0 === this.duration,
                            o = [];
                        this._keyframes.forEach(function(i, a) {
                            var s = dd(i, !0);
                            Object.keys(s).forEach(function(t) {
                                var r = s[t];
                                r == Uh ? e.add(t) : r == Nh && n.add(t)
                            }), r || (s.offset = a / t.duration), o.push(s)
                        });
                        var i = e.size ? wd(e.values()) : [],
                            a = n.size ? wd(n.values()) : [];
                        if (r) {
                            var s = o[0],
                                l = hd(s);
                            s.offset = 0, l.offset = 1, o = [s, l]
                        }
                        return zd(this.element, o, i, a, this.duration, this.startTime, this.easing, !1)
                    }, t
                }(),
                Kd = function(t) {
                    function e(e, n, r, o, i, a, s) {
                        void 0 === s && (s = !1);
                        var l = t.call(this, e, n, a.delay) || this;
                        return l.element = n, l.keyframes = r, l.preStyleProps = o, l.postStyleProps = i, l._stretchStartingKeyframe = s, l.timings = {
                            duration: a.duration,
                            delay: a.delay,
                            easing: a.easing
                        }, l
                    }
                    return o(e, t), e.prototype.containsAnimation = function() {
                        return this.keyframes.length > 1
                    }, e.prototype.buildKeyframes = function() {
                        var t = this.keyframes,
                            e = this.timings,
                            n = e.delay,
                            r = e.duration,
                            o = e.easing;
                        if (this._stretchStartingKeyframe && n) {
                            var i = [],
                                a = r + n,
                                s = n / a,
                                l = dd(t[0], !1);
                            l.offset = 0, i.push(l);
                            var u = dd(t[0], !1);
                            u.offset = Wd(s), i.push(u);
                            for (var c = t.length - 1, p = 1; p <= c; p++) {
                                var f = dd(t[p], !1);
                                f.offset = Wd((n + f.offset * r) / a), i.push(f)
                            }
                            r = a, n = 0, o = "", t = i
                        }
                        return zd(this.element, t, this.preStyleProps, this.postStyleProps, r, n, o, !0)
                    }, e
                }(Gd);

            function Wd(t, e) {
                void 0 === e && (e = 3);
                var n = Math.pow(10, e - 1);
                return Math.round(t * n) / n
            }
            var Xd = function() {},
                Yd = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.normalizePropertyName = function(t, e) {
                        return kd(t)
                    }, e.prototype.normalizeStyleValue = function(t, e, n, r) {
                        var o = "",
                            i = n.toString().trim();
                        if ($d[e] && 0 !== n && "0" !== n)
                            if ("number" == typeof n) o = "px";
                            else {
                                var a = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
                                a && 0 == a[1].length && r.push("Please provide a CSS unit value for " + t + ":" + n)
                            } return i + o
                    }, e
                }(Xd),
                $d = function(t) {
                    var e = {};
                    return "width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(",").forEach(function(t) {
                        return e[t] = !0
                    }), e
                }();

            function Jd(t, e, n, r, o, i, a, s, l, u, c, p, f) {
                return {
                    type: 0,
                    element: t,
                    triggerName: e,
                    isRemovalTransition: o,
                    fromState: n,
                    fromStyles: i,
                    toState: r,
                    toStyles: a,
                    timelines: s,
                    queriedElements: l,
                    preStyleProps: u,
                    postStyleProps: c,
                    totalTime: p,
                    errors: f
                }
            }
            var tm = {},
                em = function() {
                    function t(t, e, n) {
                        this._triggerName = t, this.ast = e, this._stateStyles = n
                    }
                    return t.prototype.match = function(t, e, n, r) {
                        return function(t, e, n, r, o) {
                            return t.some(function(t) {
                                return t(e, n, r, o)
                            })
                        }(this.ast.matchers, t, e, n, r)
                    }, t.prototype.buildStyles = function(t, e, n) {
                        var r = this._stateStyles["*"],
                            o = this._stateStyles[t],
                            i = r ? r.buildStyles(e, n) : {};
                        return o ? o.buildStyles(e, n) : i
                    }, t.prototype.build = function(t, e, n, r, o, a, s, l, u) {
                        var c = [],
                            p = this.ast.options && this.ast.options.params || tm,
                            f = this.buildStyles(n, s && s.params || tm, c),
                            h = l && l.params || tm,
                            d = this.buildStyles(r, h, c),
                            m = new Set,
                            g = new Map,
                            y = new Map,
                            v = "void" === r,
                            _ = {
                                params: i({}, p, h)
                            },
                            b = Hd(t, e, this.ast.animation, o, a, f, d, _, u, c),
                            w = 0;
                        if (b.forEach(function(t) {
                                w = Math.max(t.duration + t.delay, w)
                            }), c.length) return Jd(e, this._triggerName, n, r, v, f, d, [], [], g, y, w, c);
                        b.forEach(function(t) {
                            var n = t.element,
                                r = Zh(g, n, {});
                            t.preStyleProps.forEach(function(t) {
                                return r[t] = !0
                            });
                            var o = Zh(y, n, {});
                            t.postStyleProps.forEach(function(t) {
                                return o[t] = !0
                            }), n !== e && m.add(n)
                        });
                        var C = wd(m.values());
                        return Jd(e, this._triggerName, n, r, v, f, d, b, C, g, y, w)
                    }, t
                }(),
                nm = function() {
                    function t(t, e) {
                        this.styles = t, this.defaultParams = e
                    }
                    return t.prototype.buildStyles = function(t, e) {
                        var n = {},
                            r = hd(this.defaultParams);
                        return Object.keys(t).forEach(function(e) {
                            var n = t[e];
                            null != n && (r[e] = n)
                        }), this.styles.styles.forEach(function(t) {
                            if ("string" != typeof t) {
                                var o = t;
                                Object.keys(o).forEach(function(t) {
                                    var i = o[t];
                                    i.length > 1 && (i = bd(i, r, e)), n[t] = i
                                })
                            }
                        }), n
                    }, t
                }(),
                rm = function() {
                    function t(t, e) {
                        var n = this;
                        this.name = t, this.ast = e, this.transitionFactories = [], this.states = {}, e.states.forEach(function(t) {
                            n.states[t.name] = new nm(t.style, t.options && t.options.params || {})
                        }), om(this.states, "true", "1"), om(this.states, "false", "0"), e.transitions.forEach(function(e) {
                            n.transitionFactories.push(new em(t, e, n.states))
                        }), this.fallbackTransition = new em(t, {
                            type: 1,
                            animation: {
                                type: 2,
                                steps: [],
                                options: null
                            },
                            matchers: [function(t, e) {
                                return !0
                            }],
                            options: null,
                            queryCount: 0,
                            depCount: 0
                        }, this.states)
                    }
                    return Object.defineProperty(t.prototype, "containsQueries", {
                        get: function() {
                            return this.ast.queryCount > 0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.matchTransition = function(t, e, n, r) {
                        return this.transitionFactories.find(function(o) {
                            return o.match(t, e, n, r)
                        }) || null
                    }, t.prototype.matchStyles = function(t, e, n) {
                        return this.fallbackTransition.buildStyles(t, e, n)
                    }, t
                }();

            function om(t, e, n) {
                t.hasOwnProperty(e) ? t.hasOwnProperty(n) || (t[n] = t[e]) : t.hasOwnProperty(n) && (t[e] = t[n])
            }
            var im = new Ud,
                am = function() {
                    function t(t, e) {
                        this._driver = t, this._normalizer = e, this._animations = {}, this._playersById = {}, this.players = []
                    }
                    return t.prototype.register = function(t, e) {
                        var n = [],
                            r = jd(this._driver, e, n);
                        if (n.length) throw new Error("Unable to build the animation due to the following errors: " + n.join("\n"));
                        this._animations[t] = r
                    }, t.prototype._buildPlayer = function(t, e, n) {
                        var r = t.element,
                            o = Bh(0, this._normalizer, 0, t.keyframes, e, n);
                        return this._driver.animate(r, o, t.duration, t.delay, t.easing, [], !0)
                    }, t.prototype.create = function(t, e, n) {
                        var r = this;
                        void 0 === n && (n = {});
                        var o, i = [],
                            a = this._animations[t],
                            s = new Map;
                        if (a ? (o = Hd(this._driver, e, a, "ng-enter", "ng-leave", {}, {}, n, im, i)).forEach(function(t) {
                                var e = Zh(s, t.element, {});
                                t.postStyleProps.forEach(function(t) {
                                    return e[t] = null
                                })
                            }) : (i.push("The requested animation doesn't exist or has already been destroyed"), o = []), i.length) throw new Error("Unable to create the animation due to the following errors: " + i.join("\n"));
                        s.forEach(function(t, e) {
                            Object.keys(t).forEach(function(n) {
                                t[n] = r._driver.computeStyle(e, n, Nh)
                            })
                        });
                        var l = Vh(o.map(function(t) {
                            var e = s.get(t.element);
                            return r._buildPlayer(t, {}, e)
                        }));
                        return this._playersById[t] = l, l.onDestroy(function() {
                            return r.destroy(t)
                        }), this.players.push(l), l
                    }, t.prototype.destroy = function(t) {
                        var e = this._getPlayer(t);
                        e.destroy(), delete this._playersById[t];
                        var n = this.players.indexOf(e);
                        n >= 0 && this.players.splice(n, 1)
                    }, t.prototype._getPlayer = function(t) {
                        var e = this._playersById[t];
                        if (!e) throw new Error("Unable to find the timeline player referenced by " + t);
                        return e
                    }, t.prototype.listen = function(t, e, n, r) {
                        var o = Qh(e, "", "", "");
                        return Hh(this._getPlayer(t), n, o, r),
                            function() {}
                    }, t.prototype.command = function(t, e, n, r) {
                        if ("register" != n)
                            if ("create" != n) {
                                var o = this._getPlayer(t);
                                switch (n) {
                                    case "play":
                                        o.play();
                                        break;
                                    case "pause":
                                        o.pause();
                                        break;
                                    case "reset":
                                        o.reset();
                                        break;
                                    case "restart":
                                        o.restart();
                                        break;
                                    case "finish":
                                        o.finish();
                                        break;
                                    case "init":
                                        o.init();
                                        break;
                                    case "setPosition":
                                        o.setPosition(parseFloat(r[0]));
                                        break;
                                    case "destroy":
                                        this.destroy(t)
                                }
                            } else this.create(t, e, r[0] || {});
                        else this.register(t, r[0])
                    }, t
                }(),
                sm = [],
                lm = {
                    namespaceId: "",
                    setForRemoval: !1,
                    setForMove: !1,
                    hasAnimation: !1,
                    removedBeforeQueried: !1
                },
                um = {
                    namespaceId: "",
                    setForMove: !1,
                    setForRemoval: !1,
                    hasAnimation: !1,
                    removedBeforeQueried: !0
                },
                cm = "__ng_removed",
                pm = function() {
                    function t(t, e) {
                        void 0 === e && (e = ""), this.namespaceId = e;
                        var n = t && t.hasOwnProperty("value");
                        if (this.value = function(t) {
                                return null != t ? t : null
                            }(n ? t.value : t), n) {
                            var r = hd(t);
                            delete r.value, this.options = r
                        } else this.options = {};
                        this.options.params || (this.options.params = {})
                    }
                    return Object.defineProperty(t.prototype, "params", {
                        get: function() {
                            return this.options.params
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.absorbOptions = function(t) {
                        var e = t.params;
                        if (e) {
                            var n = this.options.params;
                            Object.keys(e).forEach(function(t) {
                                null == n[t] && (n[t] = e[t])
                            })
                        }
                    }, t
                }(),
                fm = new pm("void"),
                hm = new pm("DELETED"),
                dm = function() {
                    function t(t, e, n) {
                        this.id = t, this.hostElement = e, this._engine = n, this.players = [], this._triggers = {}, this._queue = [], this._elementListeners = new Map, this._hostClassName = "ng-tns-" + t, Cm(e, this._hostClassName)
                    }
                    return t.prototype.listen = function(t, e, n, r) {
                        var o, i = this;
                        if (!this._triggers.hasOwnProperty(e)) throw new Error('Unable to listen on the animation trigger event "' + n + '" because the animation trigger "' + e + "\" doesn't exist!");
                        if (null == n || 0 == n.length) throw new Error('Unable to listen on the animation trigger "' + e + '" because the provided event is undefined!');
                        if ("start" != (o = n) && "done" != o) throw new Error('The provided animation trigger event "' + n + '" for the animation trigger "' + e + '" is not supported!');
                        var a = Zh(this._elementListeners, t, []),
                            s = {
                                name: e,
                                phase: n,
                                callback: r
                            };
                        a.push(s);
                        var l = Zh(this._engine.statesByElement, t, {});
                        return l.hasOwnProperty(e) || (Cm(t, "ng-trigger"), Cm(t, "ng-trigger-" + e), l[e] = fm),
                            function() {
                                i._engine.afterFlush(function() {
                                    var t = a.indexOf(s);
                                    t >= 0 && a.splice(t, 1), i._triggers[e] || delete l[e]
                                })
                            }
                    }, t.prototype.register = function(t, e) {
                        return !this._triggers[t] && (this._triggers[t] = e, !0)
                    }, t.prototype._getTrigger = function(t) {
                        var e = this._triggers[t];
                        if (!e) throw new Error('The provided animation trigger "' + t + '" has not been registered!');
                        return e
                    }, t.prototype.trigger = function(t, e, n, r) {
                        var o = this;
                        void 0 === r && (r = !0);
                        var i = this._getTrigger(e),
                            a = new gm(this.id, e, t),
                            s = this._engine.statesByElement.get(t);
                        s || (Cm(t, "ng-trigger"), Cm(t, "ng-trigger-" + e), this._engine.statesByElement.set(t, s = {}));
                        var l = s[e],
                            u = new pm(n, this.id);
                        if (!(n && n.hasOwnProperty("value")) && l && u.absorbOptions(l.options), s[e] = u, l) {
                            if (l === hm) return a
                        } else l = fm;
                        if ("void" === u.value || l.value !== u.value) {
                            var c = Zh(this._engine.playersByElement, t, []);
                            c.forEach(function(t) {
                                t.namespaceId == o.id && t.triggerName == e && t.queued && t.destroy()
                            });
                            var p = i.matchTransition(l.value, u.value, t, u.params),
                                f = !1;
                            if (!p) {
                                if (!r) return;
                                p = i.fallbackTransition, f = !0
                            }
                            return this._engine.totalQueuedPlayers++, this._queue.push({
                                element: t,
                                triggerName: e,
                                transition: p,
                                fromState: l,
                                toState: u,
                                player: a,
                                isFallbackTransition: f
                            }), f || (Cm(t, "ng-animate-queued"), a.onStart(function() {
                                km(t, "ng-animate-queued")
                            })), a.onDone(function() {
                                var e = o.players.indexOf(a);
                                e >= 0 && o.players.splice(e, 1);
                                var n = o._engine.playersByElement.get(t);
                                if (n) {
                                    var r = n.indexOf(a);
                                    r >= 0 && n.splice(r, 1)
                                }
                            }), this.players.push(a), c.push(a), a
                        }
                        if (! function(t, e) {
                                var n = Object.keys(t),
                                    r = Object.keys(e);
                                if (n.length != r.length) return !1;
                                for (var o = 0; o < n.length; o++) {
                                    var i = n[o];
                                    if (!e.hasOwnProperty(i) || t[i] !== e[i]) return !1
                                }
                                return !0
                            }(l.params, u.params)) {
                            var h = [],
                                d = i.matchStyles(l.value, l.params, h),
                                m = i.matchStyles(u.value, u.params, h);
                            h.length ? this._engine.reportError(h) : this._engine.afterFlush(function() {
                                gd(t, d), md(t, m)
                            })
                        }
                    }, t.prototype.deregister = function(t) {
                        var e = this;
                        delete this._triggers[t], this._engine.statesByElement.forEach(function(e, n) {
                            delete e[t]
                        }), this._elementListeners.forEach(function(n, r) {
                            e._elementListeners.set(r, n.filter(function(e) {
                                return e.name != t
                            }))
                        })
                    }, t.prototype.clearElementCache = function(t) {
                        this._engine.statesByElement.delete(t), this._elementListeners.delete(t);
                        var e = this._engine.playersByElement.get(t);
                        e && (e.forEach(function(t) {
                            return t.destroy()
                        }), this._engine.playersByElement.delete(t))
                    }, t.prototype._signalRemovalForInnerTriggers = function(t, e, n) {
                        var r = this;
                        void 0 === n && (n = !1), this._engine.driver.query(t, ".ng-trigger", !0).forEach(function(t) {
                            if (!t[cm]) {
                                var n = r._engine.fetchNamespacesByElement(t);
                                n.size ? n.forEach(function(n) {
                                    return n.triggerLeaveAnimation(t, e, !1, !0)
                                }) : r.clearElementCache(t)
                            }
                        })
                    }, t.prototype.triggerLeaveAnimation = function(t, e, n, r) {
                        var o = this,
                            i = this._engine.statesByElement.get(t);
                        if (i) {
                            var a = [];
                            if (Object.keys(i).forEach(function(e) {
                                    if (o._triggers[e]) {
                                        var n = o.trigger(t, e, "void", r);
                                        n && a.push(n)
                                    }
                                }), a.length) return this._engine.markElementAsRemoved(this.id, t, !0, e), n && Vh(a).onDone(function() {
                                return o._engine.processLeaveNode(t)
                            }), !0
                        }
                        return !1
                    }, t.prototype.prepareLeaveAnimationListeners = function(t) {
                        var e = this,
                            n = this._elementListeners.get(t);
                        if (n) {
                            var r = new Set;
                            n.forEach(function(n) {
                                var o = n.name;
                                if (!r.has(o)) {
                                    r.add(o);
                                    var i = e._triggers[o].fallbackTransition,
                                        a = e._engine.statesByElement.get(t)[o] || fm,
                                        s = new pm("void"),
                                        l = new gm(e.id, o, t);
                                    e._engine.totalQueuedPlayers++, e._queue.push({
                                        element: t,
                                        triggerName: o,
                                        transition: i,
                                        fromState: a,
                                        toState: s,
                                        player: l,
                                        isFallbackTransition: !0
                                    })
                                }
                            })
                        }
                    }, t.prototype.removeNode = function(t, e) {
                        var n = this,
                            r = this._engine;
                        if (t.childElementCount && this._signalRemovalForInnerTriggers(t, e, !0), !this.triggerLeaveAnimation(t, e, !0)) {
                            var o = !1;
                            if (r.totalAnimations) {
                                var i = r.players.length ? r.playersByQueriedElement.get(t) : [];
                                if (i && i.length) o = !0;
                                else
                                    for (var a = t; a = a.parentNode;)
                                        if (r.statesByElement.get(a)) {
                                            o = !0;
                                            break
                                        }
                            }
                            this.prepareLeaveAnimationListeners(t), o ? r.markElementAsRemoved(this.id, t, !1, e) : (r.afterFlush(function() {
                                return n.clearElementCache(t)
                            }), r.destroyInnerAnimations(t), r._onRemovalComplete(t, e))
                        }
                    }, t.prototype.insertNode = function(t, e) {
                        Cm(t, this._hostClassName)
                    }, t.prototype.drainQueuedTransitions = function(t) {
                        var e = this,
                            n = [];
                        return this._queue.forEach(function(r) {
                            var o = r.player;
                            if (!o.destroyed) {
                                var i = r.element,
                                    a = e._elementListeners.get(i);
                                a && a.forEach(function(e) {
                                    if (e.name == r.triggerName) {
                                        var n = Qh(i, r.triggerName, r.fromState.value, r.toState.value);
                                        n._data = t, Hh(r.player, e.phase, n, e.callback)
                                    }
                                }), o.markedForDestroy ? e._engine.afterFlush(function() {
                                    o.destroy()
                                }) : n.push(r)
                            }
                        }), this._queue = [], n.sort(function(t, n) {
                            var r = t.transition.ast.depCount,
                                o = n.transition.ast.depCount;
                            return 0 == r || 0 == o ? r - o : e._engine.driver.containsElement(t.element, n.element) ? 1 : -1
                        })
                    }, t.prototype.destroy = function(t) {
                        this.players.forEach(function(t) {
                            return t.destroy()
                        }), this._signalRemovalForInnerTriggers(this.hostElement, t)
                    }, t.prototype.elementContainsData = function(t) {
                        var e = !1;
                        return this._elementListeners.has(t) && (e = !0), !!this._queue.find(function(e) {
                            return e.element === t
                        }) || e
                    }, t
                }(),
                mm = function() {
                    function t(t, e) {
                        this.driver = t, this._normalizer = e, this.players = [], this.newHostElements = new Map, this.playersByElement = new Map, this.playersByQueriedElement = new Map, this.statesByElement = new Map, this.disabledNodes = new Set, this.totalAnimations = 0, this.totalQueuedPlayers = 0, this._namespaceLookup = {}, this._namespaceList = [], this._flushFns = [], this._whenQuietFns = [], this.namespacesByHostElement = new Map, this.collectedEnterElements = [], this.collectedLeaveElements = [], this.onRemovalComplete = function(t, e) {}
                    }
                    return t.prototype._onRemovalComplete = function(t, e) {
                        this.onRemovalComplete(t, e)
                    }, Object.defineProperty(t.prototype, "queuedPlayers", {
                        get: function() {
                            var t = [];
                            return this._namespaceList.forEach(function(e) {
                                e.players.forEach(function(e) {
                                    e.queued && t.push(e)
                                })
                            }), t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.createNamespace = function(t, e) {
                        var n = new dm(t, e, this);
                        return e.parentNode ? this._balanceNamespaceList(n, e) : (this.newHostElements.set(e, n), this.collectEnterElement(e)), this._namespaceLookup[t] = n
                    }, t.prototype._balanceNamespaceList = function(t, e) {
                        var n = this._namespaceList.length - 1;
                        if (n >= 0) {
                            for (var r = !1, o = n; o >= 0; o--)
                                if (this.driver.containsElement(this._namespaceList[o].hostElement, e)) {
                                    this._namespaceList.splice(o + 1, 0, t), r = !0;
                                    break
                                } r || this._namespaceList.splice(0, 0, t)
                        } else this._namespaceList.push(t);
                        return this.namespacesByHostElement.set(e, t), t
                    }, t.prototype.register = function(t, e) {
                        var n = this._namespaceLookup[t];
                        return n || (n = this.createNamespace(t, e)), n
                    }, t.prototype.registerTrigger = function(t, e, n) {
                        var r = this._namespaceLookup[t];
                        r && r.register(e, n) && this.totalAnimations++
                    }, t.prototype.destroy = function(t, e) {
                        var n = this;
                        if (t) {
                            var r = this._fetchNamespace(t);
                            this.afterFlush(function() {
                                n.namespacesByHostElement.delete(r.hostElement), delete n._namespaceLookup[t];
                                var e = n._namespaceList.indexOf(r);
                                e >= 0 && n._namespaceList.splice(e, 1)
                            }), this.afterFlushAnimationsDone(function() {
                                return r.destroy(e)
                            })
                        }
                    }, t.prototype._fetchNamespace = function(t) {
                        return this._namespaceLookup[t]
                    }, t.prototype.fetchNamespacesByElement = function(t) {
                        var e = new Set,
                            n = this.statesByElement.get(t);
                        if (n)
                            for (var r = Object.keys(n), o = 0; o < r.length; o++) {
                                var i = n[r[o]].namespaceId;
                                if (i) {
                                    var a = this._fetchNamespace(i);
                                    a && e.add(a)
                                }
                            }
                        return e
                    }, t.prototype.trigger = function(t, e, n, r) {
                        if (ym(e)) {
                            var o = this._fetchNamespace(t);
                            if (o) return o.trigger(e, n, r), !0
                        }
                        return !1
                    }, t.prototype.insertNode = function(t, e, n, r) {
                        if (ym(e)) {
                            var o = e[cm];
                            if (o && o.setForRemoval) {
                                o.setForRemoval = !1, o.setForMove = !0;
                                var i = this.collectedLeaveElements.indexOf(e);
                                i >= 0 && this.collectedLeaveElements.splice(i, 1)
                            }
                            if (t) {
                                var a = this._fetchNamespace(t);
                                a && a.insertNode(e, n)
                            }
                            r && this.collectEnterElement(e)
                        }
                    }, t.prototype.collectEnterElement = function(t) {
                        this.collectedEnterElements.push(t)
                    }, t.prototype.markElementAsDisabled = function(t, e) {
                        e ? this.disabledNodes.has(t) || (this.disabledNodes.add(t), Cm(t, "ng-animate-disabled")) : this.disabledNodes.has(t) && (this.disabledNodes.delete(t), km(t, "ng-animate-disabled"))
                    }, t.prototype.removeNode = function(t, e, n) {
                        if (ym(e)) {
                            var r = t ? this._fetchNamespace(t) : null;
                            r ? r.removeNode(e, n) : this.markElementAsRemoved(t, e, !1, n)
                        } else this._onRemovalComplete(e, n)
                    }, t.prototype.markElementAsRemoved = function(t, e, n, r) {
                        this.collectedLeaveElements.push(e), e[cm] = {
                            namespaceId: t,
                            setForRemoval: r,
                            hasAnimation: n,
                            removedBeforeQueried: !1
                        }
                    }, t.prototype.listen = function(t, e, n, r, o) {
                        return ym(e) ? this._fetchNamespace(t).listen(e, n, r, o) : function() {}
                    }, t.prototype._buildInstruction = function(t, e, n, r) {
                        return t.transition.build(this.driver, t.element, t.fromState.value, t.toState.value, n, r, t.fromState.options, t.toState.options, e)
                    }, t.prototype.destroyInnerAnimations = function(t) {
                        var e = this,
                            n = this.driver.query(t, ".ng-trigger", !0);
                        n.forEach(function(t) {
                            return e.destroyActiveAnimationsForElement(t)
                        }), 0 != this.playersByQueriedElement.size && (n = this.driver.query(t, ".ng-animating", !0)).forEach(function(t) {
                            return e.finishActiveQueriedAnimationOnElement(t)
                        })
                    }, t.prototype.destroyActiveAnimationsForElement = function(t) {
                        var e = this.playersByElement.get(t);
                        e && e.forEach(function(t) {
                            t.queued ? t.markedForDestroy = !0 : t.destroy()
                        });
                        var n = this.statesByElement.get(t);
                        n && Object.keys(n).forEach(function(t) {
                            return n[t] = hm
                        })
                    }, t.prototype.finishActiveQueriedAnimationOnElement = function(t) {
                        var e = this.playersByQueriedElement.get(t);
                        e && e.forEach(function(t) {
                            return t.finish()
                        })
                    }, t.prototype.whenRenderingDone = function() {
                        var t = this;
                        return new Promise(function(e) {
                            if (t.players.length) return Vh(t.players).onDone(function() {
                                return e()
                            });
                            e()
                        })
                    }, t.prototype.processLeaveNode = function(t) {
                        var e = this,
                            n = t[cm];
                        if (n && n.setForRemoval) {
                            if (t[cm] = lm, n.namespaceId) {
                                this.destroyInnerAnimations(t);
                                var r = this._fetchNamespace(n.namespaceId);
                                r && r.clearElementCache(t)
                            }
                            this._onRemovalComplete(t, n.setForRemoval)
                        }
                        this.driver.matchesElement(t, ".ng-animate-disabled") && this.markElementAsDisabled(t, !1), this.driver.query(t, ".ng-animate-disabled", !0).forEach(function(n) {
                            e.markElementAsDisabled(t, !1)
                        })
                    }, t.prototype.flush = function(t) {
                        var e = this;
                        void 0 === t && (t = -1);
                        var n = [];
                        if (this.newHostElements.size && (this.newHostElements.forEach(function(t, n) {
                                return e._balanceNamespaceList(t, n)
                            }), this.newHostElements.clear()), this.totalAnimations && this.collectedEnterElements.length)
                            for (var r = 0; r < this.collectedEnterElements.length; r++) Cm(this.collectedEnterElements[r], "ng-star-inserted");
                        if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
                            var o = [];
                            try {
                                n = this._flushAnimations(o, t)
                            } finally {
                                for (r = 0; r < o.length; r++) o[r]()
                            }
                        } else
                            for (r = 0; r < this.collectedLeaveElements.length; r++) this.processLeaveNode(this.collectedLeaveElements[r]);
                        if (this.totalQueuedPlayers = 0, this.collectedEnterElements.length = 0, this.collectedLeaveElements.length = 0, this._flushFns.forEach(function(t) {
                                return t()
                            }), this._flushFns = [], this._whenQuietFns.length) {
                            var i = this._whenQuietFns;
                            this._whenQuietFns = [], n.length ? Vh(n).onDone(function() {
                                i.forEach(function(t) {
                                    return t()
                                })
                            }) : i.forEach(function(t) {
                                return t()
                            })
                        }
                    }, t.prototype.reportError = function(t) {
                        throw new Error("Unable to process animations due to the following failed trigger transitions\n " + t.join("\n"))
                    }, t.prototype._flushAnimations = function(t, e) {
                        var n = this,
                            r = new Ud,
                            o = [],
                            a = new Map,
                            s = [],
                            u = new Map,
                            c = new Map,
                            p = new Map,
                            f = new Set;
                        this.disabledNodes.forEach(function(t) {
                            f.add(t);
                            for (var e = n.driver.query(t, ".ng-animate-queued", !0), r = 0; r < e.length; r++) f.add(e[r])
                        });
                        var h = nd(),
                            d = Array.from(this.statesByElement.keys()),
                            m = bm(d, this.collectedEnterElements),
                            g = new Map,
                            y = 0;
                        m.forEach(function(t, e) {
                            var n = "ng-enter" + y++;
                            g.set(e, n), t.forEach(function(t) {
                                return Cm(t, n)
                            })
                        });
                        for (var v = [], _ = new Set, b = new Set, w = 0; w < this.collectedLeaveElements.length; w++)(F = (L = this.collectedLeaveElements[w])[cm]) && F.setForRemoval && (v.push(L), _.add(L), F.hasAnimation ? this.driver.query(L, ".ng-star-inserted", !0).forEach(function(t) {
                            return _.add(t)
                        }) : b.add(L));
                        var C = new Map,
                            k = bm(d, Array.from(_));
                        k.forEach(function(t, e) {
                            var n = "ng-leave" + y++;
                            C.set(e, n), t.forEach(function(t) {
                                return Cm(t, n)
                            })
                        }), t.push(function() {
                            m.forEach(function(t, e) {
                                var n = g.get(e);
                                t.forEach(function(t) {
                                    return km(t, n)
                                })
                            }), k.forEach(function(t, e) {
                                var n = C.get(e);
                                t.forEach(function(t) {
                                    return km(t, n)
                                })
                            }), v.forEach(function(t) {
                                n.processLeaveNode(t)
                            })
                        });
                        for (var S = [], x = [], E = this._namespaceList.length - 1; E >= 0; E--) this._namespaceList[E].drainQueuedTransitions(e).forEach(function(t) {
                            var e = t.player,
                                i = t.element;
                            if (S.push(e), n.collectedEnterElements.length) {
                                var a = i[cm];
                                if (a && a.setForMove) return void e.destroy()
                            }
                            if (h && n.driver.containsElement(h, i)) {
                                var l = C.get(i),
                                    f = g.get(i),
                                    d = n._buildInstruction(t, r, f, l);
                                if (d.errors && d.errors.length) x.push(d);
                                else {
                                    if (t.isFallbackTransition) return e.onStart(function() {
                                        return gd(i, d.fromStyles)
                                    }), e.onDestroy(function() {
                                        return md(i, d.toStyles)
                                    }), void o.push(e);
                                    d.timelines.forEach(function(t) {
                                        return t.stretchStartingKeyframe = !0
                                    }), r.append(i, d.timelines), s.push({
                                        instruction: d,
                                        player: e,
                                        element: i
                                    }), d.queriedElements.forEach(function(t) {
                                        return Zh(u, t, []).push(e)
                                    }), d.preStyleProps.forEach(function(t, e) {
                                        var n = Object.keys(t);
                                        if (n.length) {
                                            var r = c.get(e);
                                            r || c.set(e, r = new Set), n.forEach(function(t) {
                                                return r.add(t)
                                            })
                                        }
                                    }), d.postStyleProps.forEach(function(t, e) {
                                        var n = Object.keys(t),
                                            r = p.get(e);
                                        r || p.set(e, r = new Set), n.forEach(function(t) {
                                            return r.add(t)
                                        })
                                    })
                                }
                            } else e.destroy()
                        });
                        if (x.length) {
                            var P = [];
                            x.forEach(function(t) {
                                P.push("@" + t.triggerName + " has failed due to:\n"), t.errors.forEach(function(t) {
                                    return P.push("- " + t + "\n")
                                })
                            }), S.forEach(function(t) {
                                return t.destroy()
                            }), this.reportError(P)
                        }
                        var O = new Map,
                            M = new Map;
                        s.forEach(function(t) {
                            var e = t.element;
                            r.has(e) && (M.set(e, e), n._beforeAnimationBuild(t.player.namespaceId, t.instruction, O))
                        }), o.forEach(function(t) {
                            var e = t.element;
                            n._getPreviousPlayers(e, !1, t.namespaceId, t.triggerName, null).forEach(function(t) {
                                Zh(O, e, []).push(t), t.destroy()
                            })
                        });
                        var T = v.filter(function(t) {
                                return xm(t, c, p)
                            }),
                            A = new Map;
                        _m(A, this.driver, b, p, Nh).forEach(function(t) {
                            xm(t, c, p) && T.push(t)
                        });
                        var I = new Map;
                        m.forEach(function(t, e) {
                            _m(I, n.driver, new Set(t), c, Uh)
                        }), T.forEach(function(t) {
                            var e = A.get(t),
                                n = I.get(t);
                            A.set(t, i({}, e, n))
                        });
                        var j = [],
                            N = [],
                            D = {};
                        s.forEach(function(t) {
                            var e = t.element,
                                i = t.player,
                                s = t.instruction;
                            if (r.has(e)) {
                                if (f.has(e)) return i.onDestroy(function() {
                                    return md(e, s.toStyles)
                                }), i.disabled = !0, i.overrideTotalTime(s.totalTime), void o.push(i);
                                var l = D;
                                if (M.size > 1) {
                                    for (var u = e, c = []; u = u.parentNode;) {
                                        var p = M.get(u);
                                        if (p) {
                                            l = p;
                                            break
                                        }
                                        c.push(u)
                                    }
                                    c.forEach(function(t) {
                                        return M.set(t, l)
                                    })
                                }
                                var h = n._buildAnimation(i.namespaceId, s, O, a, I, A);
                                if (i.setRealPlayer(h), l === D) j.push(i);
                                else {
                                    var d = n.playersByElement.get(l);
                                    d && d.length && (i.parentPlayer = Vh(d)), o.push(i)
                                }
                            } else gd(e, s.fromStyles), i.onDestroy(function() {
                                return md(e, s.toStyles)
                            }), N.push(i), f.has(e) && o.push(i)
                        }), N.forEach(function(t) {
                            var e = a.get(t.element);
                            if (e && e.length) {
                                var n = Vh(e);
                                t.setRealPlayer(n)
                            }
                        }), o.forEach(function(t) {
                            t.parentPlayer ? t.syncPlayerEvents(t.parentPlayer) : t.destroy()
                        });
                        for (var R = 0; R < v.length; R++) {
                            var L, F = (L = v[R])[cm];
                            if (km(L, "ng-leave"), !F || !F.hasAnimation) {
                                var z = [];
                                if (u.size) {
                                    var U = u.get(L);
                                    U && U.length && z.push.apply(z, l(U));
                                    for (var V = this.driver.query(L, ".ng-animating", !0), B = 0; B < V.length; B++) {
                                        var H = u.get(V[B]);
                                        H && H.length && z.push.apply(z, l(H))
                                    }
                                }
                                var q = z.filter(function(t) {
                                    return !t.destroyed
                                });
                                q.length ? Sm(this, L, q) : this.processLeaveNode(L)
                            }
                        }
                        return v.length = 0, j.forEach(function(t) {
                            n.players.push(t), t.onDone(function() {
                                t.destroy();
                                var e = n.players.indexOf(t);
                                n.players.splice(e, 1)
                            }), t.play()
                        }), j
                    }, t.prototype.elementContainsData = function(t, e) {
                        var n = !1,
                            r = e[cm];
                        return r && r.setForRemoval && (n = !0), this.playersByElement.has(e) && (n = !0), this.playersByQueriedElement.has(e) && (n = !0), this.statesByElement.has(e) && (n = !0), this._fetchNamespace(t).elementContainsData(e) || n
                    }, t.prototype.afterFlush = function(t) {
                        this._flushFns.push(t)
                    }, t.prototype.afterFlushAnimationsDone = function(t) {
                        this._whenQuietFns.push(t)
                    }, t.prototype._getPreviousPlayers = function(t, e, n, r, o) {
                        var i = [];
                        if (e) {
                            var a = this.playersByQueriedElement.get(t);
                            a && (i = a)
                        } else {
                            var s = this.playersByElement.get(t);
                            if (s) {
                                var l = !o || "void" == o;
                                s.forEach(function(t) {
                                    t.queued || (l || t.triggerName == r) && i.push(t)
                                })
                            }
                        }
                        return (n || r) && (i = i.filter(function(t) {
                            return !(n && n != t.namespaceId || r && r != t.triggerName)
                        })), i
                    }, t.prototype._beforeAnimationBuild = function(t, e, n) {
                        var r, o, i = e.element,
                            s = e.isRemovalTransition ? void 0 : t,
                            l = e.isRemovalTransition ? void 0 : e.triggerName,
                            u = function(t) {
                                var r = t.element,
                                    o = r !== i,
                                    a = Zh(n, r, []);
                                c._getPreviousPlayers(r, o, s, l, e.toState).forEach(function(t) {
                                    var e = t.getRealPlayer();
                                    e.beforeDestroy && e.beforeDestroy(), t.destroy(), a.push(t)
                                })
                            },
                            c = this;
                        try {
                            for (var p = a(e.timelines), f = p.next(); !f.done; f = p.next()) u(f.value)
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                f && !f.done && (o = p.return) && o.call(p)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        gd(i, e.fromStyles)
                    }, t.prototype._buildAnimation = function(t, e, n, r, o, i) {
                        var a = this,
                            s = e.triggerName,
                            l = e.element,
                            u = [],
                            c = new Set,
                            p = new Set,
                            f = e.timelines.map(function(e) {
                                var f = e.element;
                                c.add(f);
                                var h = f[cm];
                                if (h && h.removedBeforeQueried) return new Fh(e.duration, e.delay);
                                var d, m, g = f !== l,
                                    y = (d = (n.get(f) || sm).map(function(t) {
                                        return t.getRealPlayer()
                                    }), m = [], function t(e, n) {
                                        for (var r = 0; r < e.length; r++) {
                                            var o = e[r];
                                            o instanceof zh ? t(o.players, n) : n.push(o)
                                        }
                                    }(d, m), m).filter(function(t) {
                                        return !!t.element && t.element === f
                                    }),
                                    v = o.get(f),
                                    _ = i.get(f),
                                    b = Bh(0, a._normalizer, 0, e.keyframes, v, _),
                                    w = a._buildPlayer(e, b, y);
                                if (e.subTimeline && r && p.add(f), g) {
                                    var C = new gm(t, s, f);
                                    C.setRealPlayer(w), u.push(C)
                                }
                                return w
                            });
                        u.forEach(function(t) {
                            Zh(a.playersByQueriedElement, t.element, []).push(t), t.onDone(function() {
                                return function(t, e, n) {
                                    var r;
                                    if (t instanceof Map) {
                                        if (r = t.get(e)) {
                                            if (r.length) {
                                                var o = r.indexOf(n);
                                                r.splice(o, 1)
                                            }
                                            0 == r.length && t.delete(e)
                                        }
                                    } else(r = t[e]) && (r.length && (o = r.indexOf(n), r.splice(o, 1)), 0 == r.length && delete t[e]);
                                    return r
                                }(a.playersByQueriedElement, t.element, t)
                            })
                        }), c.forEach(function(t) {
                            return Cm(t, "ng-animating")
                        });
                        var h = Vh(f);
                        return h.onDestroy(function() {
                            c.forEach(function(t) {
                                return km(t, "ng-animating")
                            }), md(l, e.toStyles)
                        }), p.forEach(function(t) {
                            Zh(r, t, []).push(h)
                        }), h
                    }, t.prototype._buildPlayer = function(t, e, n) {
                        return e.length > 0 ? this.driver.animate(t.element, e, t.duration, t.delay, t.easing, n) : new Fh(t.duration, t.delay)
                    }, t
                }(),
                gm = function() {
                    function t(t, e, n) {
                        this.namespaceId = t, this.triggerName = e, this.element = n, this._player = new Fh, this._containsRealPlayer = !1, this._queuedCallbacks = {}, this.destroyed = !1, this.markedForDestroy = !1, this.disabled = !1, this.queued = !0, this.totalTime = 0
                    }
                    return t.prototype.setRealPlayer = function(t) {
                        var e = this;
                        this._containsRealPlayer || (this._player = t, Object.keys(this._queuedCallbacks).forEach(function(n) {
                            e._queuedCallbacks[n].forEach(function(e) {
                                return Hh(t, n, void 0, e)
                            })
                        }), this._queuedCallbacks = {}, this._containsRealPlayer = !0, this.overrideTotalTime(t.totalTime), this.queued = !1)
                    }, t.prototype.getRealPlayer = function() {
                        return this._player
                    }, t.prototype.overrideTotalTime = function(t) {
                        this.totalTime = t
                    }, t.prototype.syncPlayerEvents = function(t) {
                        var e = this,
                            n = this._player;
                        n.triggerCallback && t.onStart(function() {
                            return n.triggerCallback("start")
                        }), t.onDone(function() {
                            return e.finish()
                        }), t.onDestroy(function() {
                            return e.destroy()
                        })
                    }, t.prototype._queueEvent = function(t, e) {
                        Zh(this._queuedCallbacks, t, []).push(e)
                    }, t.prototype.onDone = function(t) {
                        this.queued && this._queueEvent("done", t), this._player.onDone(t)
                    }, t.prototype.onStart = function(t) {
                        this.queued && this._queueEvent("start", t), this._player.onStart(t)
                    }, t.prototype.onDestroy = function(t) {
                        this.queued && this._queueEvent("destroy", t), this._player.onDestroy(t)
                    }, t.prototype.init = function() {
                        this._player.init()
                    }, t.prototype.hasStarted = function() {
                        return !this.queued && this._player.hasStarted()
                    }, t.prototype.play = function() {
                        !this.queued && this._player.play()
                    }, t.prototype.pause = function() {
                        !this.queued && this._player.pause()
                    }, t.prototype.restart = function() {
                        !this.queued && this._player.restart()
                    }, t.prototype.finish = function() {
                        this._player.finish()
                    }, t.prototype.destroy = function() {
                        this.destroyed = !0, this._player.destroy()
                    }, t.prototype.reset = function() {
                        !this.queued && this._player.reset()
                    }, t.prototype.setPosition = function(t) {
                        this.queued || this._player.setPosition(t)
                    }, t.prototype.getPosition = function() {
                        return this.queued ? 0 : this._player.getPosition()
                    }, t.prototype.triggerCallback = function(t) {
                        var e = this._player;
                        e.triggerCallback && e.triggerCallback(t)
                    }, t
                }();

            function ym(t) {
                return t && 1 === t.nodeType
            }

            function vm(t, e) {
                var n = t.style.display;
                return t.style.display = null != e ? e : "none", n
            }

            function _m(t, e, n, r, o) {
                var i = [];
                n.forEach(function(t) {
                    return i.push(vm(t))
                });
                var a = [];
                r.forEach(function(n, r) {
                    var i = {};
                    n.forEach(function(t) {
                        var n = i[t] = e.computeStyle(r, t, o);
                        n && 0 != n.length || (r[cm] = um, a.push(r))
                    }), t.set(r, i)
                });
                var s = 0;
                return n.forEach(function(t) {
                    return vm(t, i[s++])
                }), a
            }

            function bm(t, e) {
                var n = new Map;
                if (t.forEach(function(t) {
                        return n.set(t, [])
                    }), 0 == e.length) return n;
                var r = new Set(e),
                    o = new Map;
                return e.forEach(function(t) {
                    var e = function t(e) {
                        if (!e) return 1;
                        var i = o.get(e);
                        if (i) return i;
                        var a = e.parentNode;
                        return i = n.has(a) ? a : r.has(a) ? 1 : t(a), o.set(e, i), i
                    }(t);
                    1 !== e && n.get(e).push(t)
                }), n
            }
            var wm = "$$classes";

            function Cm(t, e) {
                if (t.classList) t.classList.add(e);
                else {
                    var n = t[wm];
                    n || (n = t[wm] = {}), n[e] = !0
                }
            }

            function km(t, e) {
                if (t.classList) t.classList.remove(e);
                else {
                    var n = t[wm];
                    n && delete n[e]
                }
            }

            function Sm(t, e, n) {
                Vh(n).onDone(function() {
                    return t.processLeaveNode(e)
                })
            }

            function xm(t, e, n) {
                var r = n.get(t);
                if (!r) return !1;
                var o = e.get(t);
                return o ? r.forEach(function(t) {
                    return o.add(t)
                }) : e.set(t, r), n.delete(t), !0
            }
            var Em = function() {
                    function t(t, e) {
                        var n = this;
                        this._driver = t, this._triggerCache = {}, this.onRemovalComplete = function(t, e) {}, this._transitionEngine = new mm(t, e), this._timelineEngine = new am(t, e), this._transitionEngine.onRemovalComplete = function(t, e) {
                            return n.onRemovalComplete(t, e)
                        }
                    }
                    return t.prototype.registerTrigger = function(t, e, n, r, o) {
                        var i = t + "-" + r,
                            a = this._triggerCache[i];
                        if (!a) {
                            var s = [],
                                l = jd(this._driver, o, s);
                            if (s.length) throw new Error('The animation trigger "' + r + '" has failed to build due to the following errors:\n - ' + s.join("\n - "));
                            a = function(t, e) {
                                return new rm(t, e)
                            }(r, l), this._triggerCache[i] = a
                        }
                        this._transitionEngine.registerTrigger(e, r, a)
                    }, t.prototype.register = function(t, e) {
                        this._transitionEngine.register(t, e)
                    }, t.prototype.destroy = function(t, e) {
                        this._transitionEngine.destroy(t, e)
                    }, t.prototype.onInsert = function(t, e, n, r) {
                        this._transitionEngine.insertNode(t, e, n, r)
                    }, t.prototype.onRemove = function(t, e, n) {
                        this._transitionEngine.removeNode(t, e, n)
                    }, t.prototype.disableAnimations = function(t, e) {
                        this._transitionEngine.markElementAsDisabled(t, e)
                    }, t.prototype.process = function(t, e, n, r) {
                        if ("@" == n.charAt(0)) {
                            var o = s(Gh(n), 2);
                            this._timelineEngine.command(o[0], e, o[1], r)
                        } else this._transitionEngine.trigger(t, e, n, r)
                    }, t.prototype.listen = function(t, e, n, r, o) {
                        if ("@" == n.charAt(0)) {
                            var i = s(Gh(n), 2);
                            return this._timelineEngine.listen(i[0], e, i[1], o)
                        }
                        return this._transitionEngine.listen(t, e, n, r, o)
                    }, t.prototype.flush = function(t) {
                        void 0 === t && (t = -1), this._transitionEngine.flush(t)
                    }, Object.defineProperty(t.prototype, "players", {
                        get: function() {
                            return this._transitionEngine.players.concat(this._timelineEngine.players)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.whenRenderingDone = function() {
                        return this._transitionEngine.whenRenderingDone()
                    }, t
                }(),
                Pm = "animation",
                Om = "animationend",
                Mm = function() {
                    function t(t, e, n, r, o, i, a) {
                        var s = this;
                        this._element = t, this._name = e, this._duration = n, this._delay = r, this._easing = o, this._fillMode = i, this._onDoneFn = a, this._finished = !1, this._destroyed = !1, this._startTime = 0, this._position = 0, this._eventFn = function(t) {
                            return s._handleCallback(t)
                        }
                    }
                    return t.prototype.apply = function() {
                        var t, e, n;
                        e = this._duration + "ms " + this._easing + " " + this._delay + "ms 1 normal " + this._fillMode + " " + this._name, (n = Dm(t = this._element, "").trim()).length && (function(t, e) {
                            for (var n = 0; n < t.length; n++) "," === t.charAt(n) && 0
                        }(n), e = n + ", " + e), Nm(t, "", e), jm(this._element, this._eventFn, !1), this._startTime = Date.now()
                    }, t.prototype.pause = function() {
                        Tm(this._element, this._name, "paused")
                    }, t.prototype.resume = function() {
                        Tm(this._element, this._name, "running")
                    }, t.prototype.setPosition = function(t) {
                        var e = Am(this._element, this._name);
                        this._position = t * this._duration, Nm(this._element, "Delay", "-" + this._position + "ms", e)
                    }, t.prototype.getPosition = function() {
                        return this._position
                    }, t.prototype._handleCallback = function(t) {
                        var e = t._ngTestManualTimestamp || Date.now(),
                            n = 1e3 * parseFloat(t.elapsedTime.toFixed(3));
                        t.animationName == this._name && Math.max(e - this._startTime, 0) >= this._delay && n >= this._duration && this.finish()
                    }, t.prototype.finish = function() {
                        this._finished || (this._finished = !0, this._onDoneFn(), jm(this._element, this._eventFn, !0))
                    }, t.prototype.destroy = function() {
                        var t, e, n, r;
                        this._destroyed || (this._destroyed = !0, this.finish(), e = this._name, (r = Im(n = Dm(t = this._element, "").split(","), e)) >= 0 && (n.splice(r, 1), Nm(t, "", n.join(","))))
                    }, t
                }();

            function Tm(t, e, n) {
                Nm(t, "PlayState", n, Am(t, e))
            }

            function Am(t, e) {
                var n = Dm(t, "");
                return n.indexOf(",") > 0 ? Im(n.split(","), e) : Im([n], e)
            }

            function Im(t, e) {
                for (var n = 0; n < t.length; n++)
                    if (t[n].indexOf(e) >= 0) return n;
                return -1
            }

            function jm(t, e, n) {
                n ? t.removeEventListener(Om, e) : t.addEventListener(Om, e)
            }

            function Nm(t, e, n, r) {
                var o = Pm + e;
                if (null != r) {
                    var i = t.style[o];
                    if (i.length) {
                        var a = i.split(",");
                        a[r] = n, n = a.join(",")
                    }
                }
                t.style[o] = n
            }

            function Dm(t, e) {
                return t.style[Pm + e]
            }
            var Rm = "linear",
                Lm = function(t) {
                    return t[t.INITIALIZED = 1] = "INITIALIZED", t[t.STARTED = 2] = "STARTED", t[t.FINISHED = 3] = "FINISHED", t[t.DESTROYED = 4] = "DESTROYED", t
                }({}),
                Fm = function() {
                    function t(t, e, n, r, o, i, a) {
                        this.element = t, this.keyframes = e, this.animationName = n, this._duration = r, this._delay = o, this._finalStyles = a, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this.currentSnapshot = {}, this.state = 0, this.easing = i || Rm, this.totalTime = r + o, this._buildStyler()
                    }
                    return t.prototype.onStart = function(t) {
                        this._onStartFns.push(t)
                    }, t.prototype.onDone = function(t) {
                        this._onDoneFns.push(t)
                    }, t.prototype.onDestroy = function(t) {
                        this._onDestroyFns.push(t)
                    }, t.prototype.destroy = function() {
                        this.init(), this.state >= Lm.DESTROYED || (this.state = Lm.DESTROYED, this._styler.destroy(), this._flushStartFns(), this._flushDoneFns(), this._onDestroyFns.forEach(function(t) {
                            return t()
                        }), this._onDestroyFns = [])
                    }, t.prototype._flushDoneFns = function() {
                        this._onDoneFns.forEach(function(t) {
                            return t()
                        }), this._onDoneFns = []
                    }, t.prototype._flushStartFns = function() {
                        this._onStartFns.forEach(function(t) {
                            return t()
                        }), this._onStartFns = []
                    }, t.prototype.finish = function() {
                        this.init(), this.state >= Lm.FINISHED || (this.state = Lm.FINISHED, this._styler.finish(), this._flushStartFns(), this._flushDoneFns())
                    }, t.prototype.setPosition = function(t) {
                        this._styler.setPosition(t)
                    }, t.prototype.getPosition = function() {
                        return this._styler.getPosition()
                    }, t.prototype.hasStarted = function() {
                        return this.state >= Lm.STARTED
                    }, t.prototype.init = function() {
                        this.state >= Lm.INITIALIZED || (this.state = Lm.INITIALIZED, this._styler.apply(), this._delay && this._styler.pause())
                    }, t.prototype.play = function() {
                        this.init(), this.hasStarted() || (this._flushStartFns(), this.state = Lm.STARTED), this._styler.resume()
                    }, t.prototype.pause = function() {
                        this.init(), this._styler.pause()
                    }, t.prototype.restart = function() {
                        this.reset(), this.play()
                    }, t.prototype.reset = function() {
                        this._styler.destroy(), this._buildStyler(), this._styler.apply()
                    }, t.prototype._buildStyler = function() {
                        var t = this;
                        this._styler = new Mm(this.element, this.animationName, this._duration, this._delay, this.easing, "forwards", function() {
                            return t.finish()
                        })
                    }, t.prototype.triggerCallback = function(t) {
                        var e = "start" == t ? this._onStartFns : this._onDoneFns;
                        e.forEach(function(t) {
                            return t()
                        }), e.length = 0
                    }, t.prototype.beforeDestroy = function() {
                        var t = this;
                        this.init();
                        var e = {};
                        if (this.hasStarted()) {
                            var n = this.state >= Lm.FINISHED;
                            Object.keys(this._finalStyles).forEach(function(r) {
                                "offset" != r && (e[r] = n ? t._finalStyles[r] : Pd(t.element, r))
                            })
                        }
                        this.currentSnapshot = e
                    }, t
                }(),
                zm = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.element = e, r._startingStyles = {}, r.__initialized = !1, r._styles = ad(n), r
                    }
                    return o(e, t), e.prototype.init = function() {
                        var e = this;
                        !this.__initialized && this._startingStyles && (this.__initialized = !0, Object.keys(this._styles).forEach(function(t) {
                            e._startingStyles[t] = e.element.style[t]
                        }), t.prototype.init.call(this))
                    }, e.prototype.play = function() {
                        var e = this;
                        this._startingStyles && (this.init(), Object.keys(this._styles).forEach(function(t) {
                            return e.element.style.setProperty(t, e._styles[t])
                        }), t.prototype.play.call(this))
                    }, e.prototype.destroy = function() {
                        var e = this;
                        this._startingStyles && (Object.keys(this._startingStyles).forEach(function(t) {
                            var n = e._startingStyles[t];
                            n ? e.element.style.setProperty(t, n) : e.element.style.removeProperty(t)
                        }), this._startingStyles = null, t.prototype.destroy.call(this))
                    }, e
                }(Fh),
                Um = function() {
                    function t() {
                        this._count = 0, this._head = document.querySelector("head"), this._warningIssued = !1
                    }
                    return t.prototype.validateStyleProperty = function(t) {
                        return ed(t)
                    }, t.prototype.matchesElement = function(t, e) {
                        return rd(t, e)
                    }, t.prototype.containsElement = function(t, e) {
                        return od(t, e)
                    }, t.prototype.query = function(t, e, n) {
                        return id(t, e, n)
                    }, t.prototype.computeStyle = function(t, e, n) {
                        return window.getComputedStyle(t)[e]
                    }, t.prototype.buildKeyframeElement = function(t, e, n) {
                        var r = "@keyframes " + e + " {\n",
                            o = "";
                        (n = n.map(function(t) {
                            return ad(t)
                        })).forEach(function(t) {
                            o = " ";
                            var e = parseFloat(t.offset);
                            r += "" + o + 100 * e + "% {\n", o += " ", Object.keys(t).forEach(function(e) {
                                var n = t[e];
                                switch (e) {
                                    case "offset":
                                        return;
                                    case "easing":
                                        return void(n && (r += o + "animation-timing-function: " + n + ";\n"));
                                    default:
                                        return void(r += "" + o + e + ": " + n + ";\n")
                                }
                            }), r += o + "}\n"
                        }), r += "}\n";
                        var i = document.createElement("style");
                        return i.innerHTML = r, i
                    }, t.prototype.animate = function(t, e, n, r, o, i, a) {
                        void 0 === i && (i = []), a && this._notifyFaultyScrubber();
                        var s = i.filter(function(t) {
                                return t instanceof Fm
                            }),
                            l = {};
                        Sd(n, r) && s.forEach(function(t) {
                            var e = t.currentSnapshot;
                            Object.keys(e).forEach(function(t) {
                                return l[t] = e[t]
                            })
                        });
                        var u = function(t) {
                            var e = {};
                            return t && (Array.isArray(t) ? t : [t]).forEach(function(t) {
                                Object.keys(t).forEach(function(n) {
                                    "offset" != n && "easing" != n && (e[n] = t[n])
                                })
                            }), e
                        }(e = xd(t, e, l));
                        if (0 == n) return new zm(t, u);
                        var c = "gen_css_kf_" + this._count++,
                            p = this.buildKeyframeElement(t, c, e);
                        document.querySelector("head").appendChild(p);
                        var f = new Fm(t, e, c, n, r, o, u);
                        return f.onDestroy(function() {
                            var t;
                            (t = p).parentNode.removeChild(t)
                        }), f
                    }, t.prototype._notifyFaultyScrubber = function() {
                        this._warningIssued || (console.warn("@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n", "  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."), this._warningIssued = !0)
                    }, t
                }(),
                Vm = function() {
                    function t(t, e, n) {
                        this.element = t, this.keyframes = e, this.options = n, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._initialized = !1, this._finished = !1, this._started = !1, this._destroyed = !1, this.time = 0, this.parentPlayer = null, this.currentSnapshot = {}, this._duration = n.duration, this._delay = n.delay || 0, this.time = this._duration + this._delay
                    }
                    return t.prototype._onFinish = function() {
                        this._finished || (this._finished = !0, this._onDoneFns.forEach(function(t) {
                            return t()
                        }), this._onDoneFns = [])
                    }, t.prototype.init = function() {
                        this._buildPlayer(), this._preparePlayerBeforeStart()
                    }, t.prototype._buildPlayer = function() {
                        var t = this;
                        if (!this._initialized) {
                            this._initialized = !0;
                            var e = this.keyframes;
                            this.domPlayer = this._triggerWebAnimation(this.element, e, this.options), this._finalKeyframe = e.length ? e[e.length - 1] : {}, this.domPlayer.addEventListener("finish", function() {
                                return t._onFinish()
                            })
                        }
                    }, t.prototype._preparePlayerBeforeStart = function() {
                        this._delay ? this._resetDomPlayerState() : this.domPlayer.pause()
                    }, t.prototype._triggerWebAnimation = function(t, e, n) {
                        return t.animate(e, n)
                    }, t.prototype.onStart = function(t) {
                        this._onStartFns.push(t)
                    }, t.prototype.onDone = function(t) {
                        this._onDoneFns.push(t)
                    }, t.prototype.onDestroy = function(t) {
                        this._onDestroyFns.push(t)
                    }, t.prototype.play = function() {
                        this._buildPlayer(), this.hasStarted() || (this._onStartFns.forEach(function(t) {
                            return t()
                        }), this._onStartFns = [], this._started = !0), this.domPlayer.play()
                    }, t.prototype.pause = function() {
                        this.init(), this.domPlayer.pause()
                    }, t.prototype.finish = function() {
                        this.init(), this._onFinish(), this.domPlayer.finish()
                    }, t.prototype.reset = function() {
                        this._resetDomPlayerState(), this._destroyed = !1, this._finished = !1, this._started = !1
                    }, t.prototype._resetDomPlayerState = function() {
                        this.domPlayer && this.domPlayer.cancel()
                    }, t.prototype.restart = function() {
                        this.reset(), this.play()
                    }, t.prototype.hasStarted = function() {
                        return this._started
                    }, t.prototype.destroy = function() {
                        this._destroyed || (this._destroyed = !0, this._resetDomPlayerState(), this._onFinish(), this._onDestroyFns.forEach(function(t) {
                            return t()
                        }), this._onDestroyFns = [])
                    }, t.prototype.setPosition = function(t) {
                        this.domPlayer.currentTime = t * this.time
                    }, t.prototype.getPosition = function() {
                        return this.domPlayer.currentTime / this.time
                    }, Object.defineProperty(t.prototype, "totalTime", {
                        get: function() {
                            return this._delay + this._duration
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.beforeDestroy = function() {
                        var t = this,
                            e = {};
                        this.hasStarted() && Object.keys(this._finalKeyframe).forEach(function(n) {
                            "offset" != n && (e[n] = t._finished ? t._finalKeyframe[n] : Pd(t.element, n))
                        }), this.currentSnapshot = e
                    }, t.prototype.triggerCallback = function(t) {
                        var e = "start" == t ? this._onStartFns : this._onDoneFns;
                        e.forEach(function(t) {
                            return t()
                        }), e.length = 0
                    }, t
                }(),
                Bm = function() {
                    function t() {
                        this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(Hm().toString()), this._cssKeyframesDriver = new Um
                    }
                    return t.prototype.validateStyleProperty = function(t) {
                        return ed(t)
                    }, t.prototype.matchesElement = function(t, e) {
                        return rd(t, e)
                    }, t.prototype.containsElement = function(t, e) {
                        return od(t, e)
                    }, t.prototype.query = function(t, e, n) {
                        return id(t, e, n)
                    }, t.prototype.computeStyle = function(t, e, n) {
                        return window.getComputedStyle(t)[e]
                    }, t.prototype.overrideWebAnimationsSupport = function(t) {
                        this._isNativeImpl = t
                    }, t.prototype.animate = function(t, e, n, r, o, i, a) {
                        if (void 0 === i && (i = []), !a && !this._isNativeImpl) return this._cssKeyframesDriver.animate(t, e, n, r, o, i);
                        var s = {
                            duration: n,
                            delay: r,
                            fill: 0 == r ? "both" : "forwards"
                        };
                        o && (s.easing = o);
                        var l = {},
                            u = i.filter(function(t) {
                                return t instanceof Vm
                            });
                        return Sd(n, r) && u.forEach(function(t) {
                            var e = t.currentSnapshot;
                            Object.keys(e).forEach(function(t) {
                                return l[t] = e[t]
                            })
                        }), e = xd(t, e = e.map(function(t) {
                            return dd(t, !1)
                        }), l), new Vm(t, e, s)
                    }, t
                }();

            function Hm() {
                return "undefined" != typeof Element && Element.prototype.animate || {}
            }
            var qm = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r._nextAnimationId = 0, r._renderer = e.createRenderer(n.body, {
                            id: "0",
                            encapsulation: Jt.None,
                            styles: [],
                            data: {
                                animation: []
                            }
                        }), r
                    }
                    return o(e, t), e.prototype.build = function(t) {
                        var e = this._nextAnimationId.toString();
                        this._nextAnimationId++;
                        var n = Array.isArray(t) ? Dh(t) : t;
                        return Gm(this._renderer, null, e, "register", [n]), new Qm(e, this._renderer)
                    }, e
                }(jh),
                Qm = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r._id = e, r._renderer = n, r
                    }
                    return o(e, t), e.prototype.create = function(t, e) {
                        return new Zm(this._id, t, e || {}, this._renderer)
                    }, e
                }(function() {}),
                Zm = function() {
                    function t(t, e, n, r) {
                        this.id = t, this.element = e, this._renderer = r, this.parentPlayer = null, this._started = !1, this.totalTime = 0, this._command("create", n)
                    }
                    return t.prototype._listen = function(t, e) {
                        return this._renderer.listen(this.element, "@@" + this.id + ":" + t, e)
                    }, t.prototype._command = function(t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        return Gm(this._renderer, this.element, this.id, t, e)
                    }, t.prototype.onDone = function(t) {
                        this._listen("done", t)
                    }, t.prototype.onStart = function(t) {
                        this._listen("start", t)
                    }, t.prototype.onDestroy = function(t) {
                        this._listen("destroy", t)
                    }, t.prototype.init = function() {
                        this._command("init")
                    }, t.prototype.hasStarted = function() {
                        return this._started
                    }, t.prototype.play = function() {
                        this._command("play"), this._started = !0
                    }, t.prototype.pause = function() {
                        this._command("pause")
                    }, t.prototype.restart = function() {
                        this._command("restart")
                    }, t.prototype.finish = function() {
                        this._command("finish")
                    }, t.prototype.destroy = function() {
                        this._command("destroy")
                    }, t.prototype.reset = function() {
                        this._command("reset")
                    }, t.prototype.setPosition = function(t) {
                        this._command("setPosition", t)
                    }, t.prototype.getPosition = function() {
                        return 0
                    }, t
                }();

            function Gm(t, e, n, r, o) {
                return t.setProperty(e, "@@" + n + ":" + r, o)
            }
            var Km = function() {
                    function t(t, e, n) {
                        this.delegate = t, this.engine = e, this._zone = n, this._currentId = 0, this._microtaskId = 1, this._animationCallbacksBuffer = [], this._rendererCache = new Map, this._cdRecurDepth = 0, this.promise = Promise.resolve(0), e.onRemovalComplete = function(t, e) {
                            e && e.parentNode(t) && e.removeChild(t.parentNode, t)
                        }
                    }
                    return t.prototype.createRenderer = function(t, e) {
                        var n = this,
                            r = this.delegate.createRenderer(t, e);
                        if (!(t && e && e.data && e.data.animation)) {
                            var o = this._rendererCache.get(r);
                            return o || (o = new Wm("", r, this.engine), this._rendererCache.set(r, o)), o
                        }
                        var i = e.id,
                            a = e.id + "-" + this._currentId;
                        return this._currentId++, this.engine.register(a, t), e.data.animation.forEach(function(e) {
                            return n.engine.registerTrigger(i, a, t, e.name, e)
                        }), new Xm(this, a, r, this.engine)
                    }, t.prototype.begin = function() {
                        this._cdRecurDepth++, this.delegate.begin && this.delegate.begin()
                    }, t.prototype._scheduleCountTask = function() {
                        var t = this;
                        this.promise.then(function() {
                            t._microtaskId++
                        })
                    }, t.prototype.scheduleListenerCallback = function(t, e, n) {
                        var r = this;
                        t >= 0 && t < this._microtaskId ? this._zone.run(function() {
                            return e(n)
                        }) : (0 == this._animationCallbacksBuffer.length && Promise.resolve(null).then(function() {
                            r._zone.run(function() {
                                r._animationCallbacksBuffer.forEach(function(t) {
                                    var e = s(t, 2);
                                    (0, e[0])(e[1])
                                }), r._animationCallbacksBuffer = []
                            })
                        }), this._animationCallbacksBuffer.push([e, n]))
                    }, t.prototype.end = function() {
                        var t = this;
                        this._cdRecurDepth--, 0 == this._cdRecurDepth && this._zone.runOutsideAngular(function() {
                            t._scheduleCountTask(), t.engine.flush(t._microtaskId)
                        }), this.delegate.end && this.delegate.end()
                    }, t.prototype.whenRenderingDone = function() {
                        return this.engine.whenRenderingDone()
                    }, t
                }(),
                Wm = function() {
                    function t(t, e, n) {
                        this.namespaceId = t, this.delegate = e, this.engine = n, this.destroyNode = this.delegate.destroyNode ? function(t) {
                            return e.destroyNode(t)
                        } : null
                    }
                    return Object.defineProperty(t.prototype, "data", {
                        get: function() {
                            return this.delegate.data
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.destroy = function() {
                        this.engine.destroy(this.namespaceId, this.delegate), this.delegate.destroy()
                    }, t.prototype.createElement = function(t, e) {
                        return this.delegate.createElement(t, e)
                    }, t.prototype.createComment = function(t) {
                        return this.delegate.createComment(t)
                    }, t.prototype.createText = function(t) {
                        return this.delegate.createText(t)
                    }, t.prototype.appendChild = function(t, e) {
                        this.delegate.appendChild(t, e), this.engine.onInsert(this.namespaceId, e, t, !1)
                    }, t.prototype.insertBefore = function(t, e, n) {
                        this.delegate.insertBefore(t, e, n), this.engine.onInsert(this.namespaceId, e, t, !0)
                    }, t.prototype.removeChild = function(t, e) {
                        this.engine.onRemove(this.namespaceId, e, this.delegate)
                    }, t.prototype.selectRootElement = function(t) {
                        return this.delegate.selectRootElement(t)
                    }, t.prototype.parentNode = function(t) {
                        return this.delegate.parentNode(t)
                    }, t.prototype.nextSibling = function(t) {
                        return this.delegate.nextSibling(t)
                    }, t.prototype.setAttribute = function(t, e, n, r) {
                        this.delegate.setAttribute(t, e, n, r)
                    }, t.prototype.removeAttribute = function(t, e, n) {
                        this.delegate.removeAttribute(t, e, n)
                    }, t.prototype.addClass = function(t, e) {
                        this.delegate.addClass(t, e)
                    }, t.prototype.removeClass = function(t, e) {
                        this.delegate.removeClass(t, e)
                    }, t.prototype.setStyle = function(t, e, n, r) {
                        this.delegate.setStyle(t, e, n, r)
                    }, t.prototype.removeStyle = function(t, e, n) {
                        this.delegate.removeStyle(t, e, n)
                    }, t.prototype.setProperty = function(t, e, n) {
                        "@" == e.charAt(0) && "@.disabled" == e ? this.disableAnimations(t, !!n) : this.delegate.setProperty(t, e, n)
                    }, t.prototype.setValue = function(t, e) {
                        this.delegate.setValue(t, e)
                    }, t.prototype.listen = function(t, e, n) {
                        return this.delegate.listen(t, e, n)
                    }, t.prototype.disableAnimations = function(t, e) {
                        this.engine.disableAnimations(t, e)
                    }, t
                }(),
                Xm = function(t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, n, r, o) || this;
                        return i.factory = e, i.namespaceId = n, i
                    }
                    return o(e, t), e.prototype.setProperty = function(t, e, n) {
                        "@" == e.charAt(0) ? "." == e.charAt(1) && "@.disabled" == e ? this.disableAnimations(t, n = void 0 === n || !!n) : this.engine.process(this.namespaceId, t, e.substr(1), n) : this.delegate.setProperty(t, e, n)
                    }, e.prototype.listen = function(t, e, n) {
                        var r, o, i, a = this;
                        if ("@" == e.charAt(0)) {
                            var l = function(t) {
                                    switch (t) {
                                        case "body":
                                            return document.body;
                                        case "document":
                                            return document;
                                        case "window":
                                            return window;
                                        default:
                                            return t
                                    }
                                }(t),
                                u = e.substr(1),
                                c = "";
                            return "@" != u.charAt(0) && (u = (r = s((o = u, i = o.indexOf("."), [o.substring(0, i), o.substr(i + 1)]), 2))[0], c = r[1]), this.engine.listen(this.namespaceId, l, u, c, function(t) {
                                a.factory.scheduleListenerCallback(t._data || -1, n, t)
                            })
                        }
                        return this.delegate.listen(t, e, n)
                    }, e
                }(Wm),
                Ym = function(t) {
                    function e(e, n) {
                        return t.call(this, e, n) || this
                    }
                    return o(e, t), e
                }(Em);

            function $m() {
                return "function" == typeof Hm() ? new Bm : new Um
            }

            function Jm() {
                return new Yd
            }

            function tg(t, e, n) {
                return new Km(t, e, n)
            }
            var eg = new ht("AnimationModuleType"),
                ng = function() {},
                rg = {
                    animation: "landing-page"
                },
                og = {
                    animation: "profile-card"
                },
                ig = {
                    animation: "portfolio"
                },
                ag = {
                    animation: "about"
                },
                sg = {
                    animation: "contact"
                },
                lg = ($p.forRoot([{
                    path: "",
                    component: vf,
                    pathMatch: "full",
                    data: rg
                }, {
                    path: "profile-card",
                    component: kf,
                    data: og
                }, {
                    path: "portfolio",
                    component: hh,
                    data: ig
                }, {
                    path: "about",
                    component: _h,
                    data: ag
                }, {
                    path: "contact",
                    redirectTo: "/profiles"
                }, {
                    path: "profiles",
                    component: Sh,
                    data: sg
                }, {
                    path: "**",
                    redirectTo: "/"
                }], {
                    useHash: !0
                }), function(t, e, n) {
                    return new La(gs, [ys], function(t) {
                        return function(t) {
                            for (var e = {}, n = [], r = !1, o = 0; o < t.length; o++) {
                                var i = t[o];
                                i.token === le && (r = !0), 1073741824 & i.flags && n.push(i.token), i.index = o, e[Nr(i.token)] = i
                            }
                            return {
                                factory: null,
                                providersByKey: e,
                                providers: t,
                                modules: n,
                                isRoot: r
                            }
                        }([Co(512, Oe, Me, [
                            [8, [Cf, Ef, gh, kh, Mh, Ih]],
                            [3, Oe], Ae
                        ]), Co(5120, Zn, Wn, [
                            [3, Zn]
                        ]), Co(4608, As, Is, [Zn, [2, Ts]]), Co(5120, fe, he, []), Co(5120, Un, Gn, []), Co(5120, Vn, Kn, []), Co(4608, Su, xu, [Bs]), Co(6144, br, null, [Su]), Co(4608, vu, _u, []), Co(5120, Ql, function(t, e, n, r, o, i) {
                            return [new gu(t, e), new ku(n), new bu(r, o, i)]
                        }, [Bs, Fe, Bs, Bs, vu, ve]), Co(4608, Zl, Zl, [Ql, Fe]), Co(135680, Wl, Wl, [Bs]), Co(4608, nu, nu, [Zl, Wl]), Co(5120, ld, $m, []), Co(5120, Xd, Jm, []), Co(4608, Em, Ym, [ld, Xd]), Co(5120, sn, tg, [nu, Em, Fe]), Co(6144, Kl, null, [Wl]), Co(4608, Ze, Ze, [Fe]), Co(4608, Ll, Ll, [Bs]), Co(4608, Vl, Vl, [Bs]), Co(4608, jh, qm, [sn, Nl]), Co(5120, Xc, rf, [Dp]), Co(4608, Zp, Zp, []), Co(6144, qp, null, [Zp]), Co(135680, Gp, Gp, [Dp, pn, be, Lt, qp]), Co(4608, Qp, Qp, []), Co(5120, lf, sf, [ of ]), Co(5120, ye, function(t) {
                            return [t]
                        }, [lf]), Co(4608, ah, ah, []), Co(4608, Nf, Nf, []), Co(4608, vh, vh, []), Co(1073742336, Vs, Vs, []), Co(1024, se, ju, []), Co(1024, Je, function() {
                            return [Yp()]
                        }, []), Co(512, of , of , [Lt]), Co(1024, ce, function(t, e) {
                            return [(n = t, Bl("probe", ql), Bl("coreTokens", i({}, Hl, (n || []).reduce(function(t, e) {
                                return t[e.name] = e.token, t
                            }, {}))), function() {
                                return ql
                            }), af(e)];
                            var n
                        }, [
                            [2, Je], of
                        ]), Co(512, pe, pe, [
                            [2, ce]
                        ]), Co(131584, on, on, [Fe, ve, Lt, se, Oe, pe]), Co(1073742336, Xn, Xn, [on]), Co(1073742336, Nu, Nu, [
                            [3, Nu]
                        ]), Co(1073742336, ng, ng, []), Co(1024, Wp, tf, [
                            [3, Dp]
                        ]), Co(512, vc, _c, []), Co(512, Vp, Vp, []), Co(256, ws, "!", []), Co(256, Kp, {
                            useHash: !0
                        }, []), Co(1024, bs, Jp, [vs, [2, ws], Kp]), Co(512, Cs, Cs, [bs]), Co(512, be, be, []), Co(512, pn, mn, [be, [2, hn]]), Co(1024, Mp, function() {
                            return [
                                [{
                                    path: "",
                                    component: vf,
                                    pathMatch: "full",
                                    data: rg
                                }, {
                                    path: "profile-card",
                                    component: kf,
                                    data: og
                                }, {
                                    path: "portfolio",
                                    component: hh,
                                    data: ig
                                }, {
                                    path: "about",
                                    component: _h,
                                    data: ag
                                }, {
                                    path: "contact",
                                    redirectTo: "/profiles"
                                }, {
                                    path: "profiles",
                                    component: Sh,
                                    data: sg
                                }, {
                                    path: "**",
                                    redirectTo: "/"
                                }]
                            ]
                        }, []), Co(1024, Dp, nf, [on, vc, Vp, Cs, Lt, pn, be, Mp, Kp, [2, Ap],
                            [2, Pp]
                        ]), Co(1073742336, $p, $p, [
                            [2, Wp],
                            [2, Dp]
                        ]), Co(1073742336, gs, gs, []), Co(256, le, !0, []), Co(256, eg, "BrowserAnimations", [])])
                    })
                }());
            (function() {
                if (Xe) throw new Error("Cannot enable prod mode after platform setup.");
                We = !1
            })(), Iu().bootstrapModuleFactory(lg).then(function() {
                "serviceWorker" in navigator && navigator.serviceWorker.getRegistrations().then(function(t) {
                    t.forEach(function(t) {
                        return t.unregister()
                    })
                })
            }).catch(function(t) {
                return console.log(t)
            })
        }
    },
    [
        [3, 0]
    ]
]);