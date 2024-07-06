"use strict";

(self.webpackChunklab_naruto_web = self.webpackChunklab_naruto_web || []).push([
    [552], {
        899: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return f
                }
            });
            var r = n(7294),
                o = n(3817),
                i = n(1085),
                a = n.n(i),
                s = n(4067),
                c = n(6010),
                l = n(655),
                u = n(5460),
                d = n(9756),
                f = function(e) {
                    var t, n, i = e.children,
                        f = (0, d.Z)(),
                        p = (0, l.Z)(),
                        m = (0, r.useState)(!1),
                        v = m[0],
                        h = m[1],
                        g = (0, s.Z)((0, u.Z)(a().mark((function e() {
                            return a().wrap((function(e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, p.signOut();
                                    case 2:
                                        f.replace(o.K.auth.signin);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))));
                    return (t = o.K.auth.signout, n = g, r.createElement("button", {
                        className: (0, c.Z)("btn btn-outline-primary", {
                            loading: v
                        }),
                        onClick: function() {
                            return h(!0), n.apply(void 0, arguments).finally((function() {
                                h(!1)
                            }))
                        }
                    }, t))
                }
        },
        9756: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var r = function() {
                return {
                    replace: function(e) {
                        window.location.replace(e)
                    }
                }
            }
        }
    }
]);
