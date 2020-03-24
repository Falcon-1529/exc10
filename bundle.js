~ function() {
    'use strict';
    var J = J || {};
    J.scope = {};
    J.checkStringArgs = function(p, m, x) {
        if (null == p) throw new TypeError("The 'this' value for String.prototype." + x + " must not be null or undefined");
        if (m instanceof RegExp) throw new TypeError("First argument to String.prototype." + x + " must not be a regular expression");
        return p + ""
    };
    J.ASSUME_ES5 = !1;
    J.ASSUME_NO_NATIVE_MAP = !1;
    J.ASSUME_NO_NATIVE_SET = !1;
    J.SIMPLE_FROUND_POLYFILL = !1;
    J.defineProperty = J.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(p, m, x) {
        p != Array.prototype && p != Object.prototype && (p[m] = x.value)
    };
    J.getGlobal = function(p) {
        return "undefined" != typeof window && window === p ? p : "undefined" != typeof global && null != global ? global : p
    };
    J.global = J.getGlobal(this);
    J.polyfill = function(p, m) {
        if (m) {
            var x = J.global;
            p = p.split(".");
            for (var a = 0; a < p.length - 1; a++) {
                var e = p[a];
                e in x || (x[e] = {});
                x = x[e]
            }
            p = p[p.length - 1];
            a = x[p];
            m = m(a);
            m != a && null != m && J.defineProperty(x, p, {
                configurable: !0,
                writable: !0,
                value: m
            })
        }
    };
    J.stringPadding = function(p, m) {
        p = void 0 !== p ? String(p) : " ";
        return 0 < m && p ? p.repeat(Math.ceil(m / p.length)).substring(0, m) : ""
    };
    J.polyfill("String.prototype.padStart", function(p) {
        return p ? p : function(m, x) {
            var a = J.checkStringArgs(this, null, "padStart");
            return J.stringPadding(x, m - a.length) + a
        }
    }, "es8", "es3");
    J.owns = function(p, m) {
        return Object.prototype.hasOwnProperty.call(p, m)
    };
    J.polyfill("Object.entries", function(p) {
        return p ? p : function(m) {
            var x = [],
                a;
            for (a in m) J.owns(m, a) && x.push([a, m[a]]);
            return x
        }
    }, "es8", "es3");
    J.polyfill("Object.values", function(p) {
        return p ? p : function(m) {
            var x = [],
                a;
            for (a in m) J.owns(m, a) && x.push(m[a]);
            return x
        }
    }, "es8", "es3");
    J.polyfill("Array.prototype.includes", function(p) {
        return p ? p : function(m, x) {
            var a = this;
            a instanceof String && (a = String(a));
            var e = a.length;
            x = x || 0;
            for (0 > x && (x = Math.max(x + e, 0)); x < e; x++) {
                var D = a[x];
                if (D === m || Object.is(D, m)) return !0
            }
            return !1
        }
    }, "es7", "es3");
    (function(p) {
        function m(a) {
            if (x[a]) return x[a].exports;
            var e = x[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            p[a].call(e.exports, e, e.exports, m);
            e.l = !0;
            return e.exports
        }
        var x = {};
        m.m = p;
        m.c = x;
        m.d = function(a, e, D) {
            m.o(a, e) || Object.defineProperty(a, e, {
                enumerable: !0,
                get: D
            })
        };
        m.r = function(a) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
                value: "Module"
            });
            Object.defineProperty(a, "__esModule", {
                value: !0
            })
        };
        m.t = function(a, e) {
            e & 1 && (a = m(a));
            if (e & 8 || e & 4 && "object" === typeof a && a && a.__esModule) return a;
            var D = Object.create(null);
            m.r(D);
            Object.defineProperty(D, "default", {
                enumerable: !0,
                value: a
            });
            if (e & 2 && "string" != typeof a)
                for (var v in a) m.d(D, v, function(e) {
                    return a[e]
                }.bind(null, v));
            return D
        };
        m.n = function(a) {
            var e = a && a.__esModule ? function() {
                return a["default"]
            } : function() {
                return a
            };
            m.d(e, "a", e);
            return e
        };
        m.o = function(a, e) {
            return Object.prototype.hasOwnProperty.call(a, e)
        };
        m.p = "";
        return m(m.s = 0)
    })([function(p, m, x) {
        function a() {
            window.dataLayer.push(arguments)
        }
      

        function e(b) {
            switch (b) {
                case 0:
                    return l.teal;
                case 1:
                    return l.lgreen;
                case 2:
                    return l.orange;
                case 3:
                    return l.yellow;
                case 4:
                    return l.lavender;
                case 5:
                    return l.pink;
                case 6:
                    return l.vlgrey;
                case 7:
                    return l.lgrey;
                case 8:
                    return l.guiwhite;
                case 9:
                    return l.black;
                case 10:
                    return l.blue;
                case 11:
                    return l.green;
                case 12:
                    return l.red;
                case 13:
                    return l.gold;
                case 14:
                    return l.purple;
                case 15:
                    return l.magenta;
                case 16:
                    return l.grey;
                case 17:
                    return l.dgrey;
                case 18:
                    return l.white;
                case 19:
                    return l.guiblack;
                case 20:
                    return 150 > Date.now() % 300 ? l.blue : l.red;
                case 21:
                    return 150 >
                        Date.now() % 300 ? l.blue : l.grey;
                case 22:
                    return 150 > Date.now() % 300 ? l.grey : l.blue;
                case 23:
                    return 150 > Date.now() % 300 ? l.red : l.grey;
                case 24:
                    return 150 > Date.now() % 300 ? l.grey : l.red;
                case 25:
                    return l.dgreen;
                case 26:
                    return l.navy;
                case 27:
                    return l.ice;
                case 28:
                    return l.orang; 
                case 29:
                    return 150 > Date.now() % 300 ? l.red : l.orang;
                
                default:
                    return "#FF0000"
            }
        }

        function D(b) {
            let d = B.graphical.neon ? l.white : l.black;
            return B.graphical.darkBorders ? d : T(b, d, l.border)
        }

        function v(b) {
            switch (b) {
                case "bas1":
                case "bap1":
                case "dom1":
                case "dbc1":
                case "mbc1":
                    return l.blue;
                case "bas2":
                case "bap2":
                case "dom2":
                case "dbc2":
                case "mbc2":
                    return l.green;
                case "bas3":
                case "bap3":
                case "dom3":
                case "dbc3":
                case "mbc3":
                    return l.red;
                case "bas4":
                case "bap4":
                case "dom4":
                case "dbc4":
                case "mbc4":
                    return l.pink;
                case "domx":
                case "dom0":
                case "dbc0":
                case "mbc0":
                    return l.yellow;
                case "port":
                    return f.globalAlpha = 1, l.black;
                case "edge":
                    return T(l.white, l.guiblack, 1 / 3);
                case "dor1":
                    return l.vlgrey;
                case "nest":
                    return l.purple /*return l.white*/;
                default:
                    return l.white
            }
        }

        function k(b, u) {
            B.graphical.neon ? (b.fillStyle = D(u), b.strokeStyle = u) : (b.fillStyle = u, b.strokeStyle = D(u))
        }

        function C(b, u = M[b].color) {
            let c = M[b];
            return {
                time: 0,
                index: b,
                x: c.x,
                y: c.y,
                vx: 0,
                vy: 0,
                size: c.size,
                realSize: c.realSize,
                color: u,
                render: {
                    status: {
                        getFade: () => 1,
                        getColor: () => "#FFFFFF",
                        getBlend: () => 0,
                        health: {
                            get: () => 1
                        },
                        shield: {
                            get: () => 1
                        }
                    }
                },
                facing: c.facing,
                shape: c.shape,
                name: c.name,
                score: 0,
                tiggle: 0,
                layer: c.layer,
                guns: {
                    length: c.guns.length,
                    getPositions: () => Array(c.guns.length).fill(0),
                    update: () => {}
                },
                turrets: c.turrets.map(b => {
                    let d = C(b.index);
                    d.realSize = d.realSize / d.size * c.size * b.sizeFactor;
                    d.size = c.size * b.sizeFactor;
                    d.angle = b.angle;
                    d.offset = b.offset;
                    d.direction = b.direction;
                    d.facing = b.direction + b.angle;
                    return d
                })
            }
        }

        function R(d, u,
            c, h = !1) {
            let a = la();
            c += B.graphical.borderChunk;
            return h ? (a *= 2, d > -b.screenWidth / a - c && d < b.screenWidth / a + c && u > -b.screenHeight / a - c && u < b.screenHeight / a + c) : d > -c && d < b.screenWidth / a + c && u > -c && u < b.screenHeight / a + c
        }

        function n(b, u, c = 3) {
            let d = Date.now(),
                a = b,
                q = b;
            return {
                set: c => {
                    b !== c && (q = a, b = c, d = Date.now())
                },
                get: () => {
                    let h = (Date.now() - d) / 1E3;
                    return a = h < u ? q + (b - q) * Math.pow(h / u, 1 / c) : b
                }
            }
        }

        function E(b) {
            try {
                var d = b.replace(/\s+/g, "");
                2 == d.length % 4 ? d += "==" : 3 == d.length % 4 && (d += "=");
                let h = atob(d);
                d = "Unknown Theme";
                let a = "";
                var c = h.indexOf("\x00");
                if (-1 === c) return null;
                d = h.slice(0, c);
                h = h.slice(c + 1);
                c = h.indexOf("\x00");
                if (-1 === c) return null;
                a = h.slice(0, c);
                h = h.slice(c + 1);
                let u = h.charCodeAt(0) / 255;
                h = h.slice(1);
                let g = Math.floor(h.length / 3);
                if (2 > g) return null;
                c = [];
                for (let b = 0; b < g; b++) {
                    let d = h.charCodeAt(3 * b),
                        a = h.charCodeAt(3 * b + 1),
                        u = h.charCodeAt(3 * b + 2);
                    c.push("#" + (d << 16 | a << 8 | u).toString(16).padStart(6, 0))
                }
                return {
                    name: d,
                    author: a,
                    content: {
                        teal: c[0],
                        lgreen: c[1],
                        orange: c[2],
                        yellow: c[3],
                        lavender: c[4],
                        pink: c[5],
                        vlgrey: c[6],
                        lgrey: c[7],
                        guiwhite: c[8],
                        black: c[9],
                        blue: c[10],
                        green: c[11],
                        red: c[12],
                        gold: c[13],
                        purple: c[14],
                        magenta: c[15],
                        grey: c[16],
                        dgrey: c[17],
                        white: c[18],
                        guiblack: c[19],
                        dgreen: c[20],
                        navy: c[21],
                        ice: c[22],
                        orang: c[23],
                        paletteSize: g,
                        border: u
                    }
                }
            } catch (h) {}
            try {
                let d = JSON.parse(b);
                if ("object" !== typeof d) return null;
                let {
                    name: c = "Unknown Theme",
                    content: a
                } = d;
                for (let b of [a.teal, a.lgreen, a.orange, a.yellow, a.lavender, a.pink, a.vlgrey, a.lgrey, a.guiwhite, a.black, a.blue, a.green, a.red, a.gold, a.purple, a.magenta, a.grey, a.dgrey, a.white, a.guiblack])
                    if (!b.match(/^#[0-9a-fA-F]{6}$/)) return null;
                return {
                    isJSON: !0,
                    name: "string" === typeof c && c || "Unknown Theme",
                    author: "string" === typeof c ? c : "",
                    content: a
                }
            } catch (h) {}
            return null
        }

        function z(b) {
            let {
                name: d = "Unknown Theme",
                author: c = "",
                content: h
            } = b;
            ({
                border: b
            } = h);
            b = d + "\x00" + c + "\x00" + String.fromCharCode(1 <= b ? 255 : 0 > b ? 0 : Math.floor(256 * b));
            for (let c of [h.teal, h.lgreen, h.orange, h.yellow, h.lavender, h.pink, h.vlgrey, h.lgrey, h.guiwhite, h.black, h.blue, h.green, h.red, h.gold, h.purple, h.magenta, h.grey, h.dgrey, h.white, h.guiblack]) {
                let d = parseInt(c.slice(1), 16);
                b += String.fromCharCode(d >>
                    16, d >> 8 & 255, d & 255)
            }
            return btoa(b).replace(/=+/, "")
        }

        function r() {
            if (!sa) {
                sa = !0;
                if (b.mobile) {
                    var d = document.body;
                    d.requestFullscreen ? d.requestFullscreen() : d.msRequestFullscreen ? d.msRequestFullscreen() : d.mozRequestFullScreen ? d.mozRequestFullScreen() : d.webkitRequestFullscreen && d.webkitRequestFullscreen();
                    d = window.navigator.standalone || window.matchMedia && window.matchMedia("(display-mode: fullscreen), (display-mode: standalone), (display-mode: minimal-ui)").matches;
                    b.mobile && !d && Y.push({
                        text: "Add the game to home screen to always enable fullscreen!",
                        status: 2,
                        alpha: 0,
                        time: Date.now()
                    })
                }
                I.submitToLocalStorage("optScreenshotMode");
                B.graphical.screenshotMode = document.getElementById("optScreenshotMode").checked;
                I.submitToLocalStorage("optFancy");
                B.graphical.pointy = !document.getElementById("optNoPointy").checked;
                I.submitToLocalStorage("optNoPointy");
                B.graphical.fancyAnimations = !document.getElementById("optFancy").checked;
                I.submitToLocalStorage("optShield");
                B.graphical.shieldbars = document.getElementById("optShield").checked;
                I.submitToLocalStorage("optPrediction");
                B.lag.newPrediction = document.getElementById("optPrediction").checked;
                I.submitToLocalStorage("optAutoLevel");
                b.autoLevel = document.getElementById("optAutoLevel").checked;
                I.submitToLocalStorage("optBorders");
                b.mobile && I.submitToLocalStorage("optMobile");
                switch (document.getElementById("optBorders").value) {
                    case "normal":
                        B.graphical.darkBorders = B.graphical.neon = !1;
                        break;
                    case "dark":
                        B.graphical.darkBorders = !0;
                        B.graphical.neon = !1;
                        break;
                    case "glass":
                        B.graphical.darkBorders = !1;
                        B.graphical.neon = !0;
                        break;
                    case "neon":
                        B.graphical.darkBorders =
                            B.graphical.neon = !0
                }
                I.submitToLocalStorage("optColors");
                d = document.getElementById("optColors").value;
                if ("custom" === d) {
                    let b = E(document.getElementById("optCustom").value);
                    b && (ta.custom = b.content, b.isJSON && (document.getElementById("optCustom").value = z(b)))
                }
                I.submitToLocalStorage("optCustom");
                window.hereYaGoCuzImTooLazy = l = ta[d] || l;
                d = document.getElementById("playerNameInput");
                I.submitToLocalStorage("playerNameInput");
                b.playerName = y.name = d.value;
                b.playerKey = "z" === b.server.id ? ua : va;
                b.screenWidth = window.innerWidth;
                b.screenHeight = window.innerHeight;
                document.getElementById("startMenuWrapper").style.top = "-600px";
                document.getElementById("gameAreaWrapper").style.opacity = 1;
                if (!b.socket) {
                  const m = {
            glitch: a => `${a}.glitch.me`}
                    d = "https:" === location.protocol ? 1 : -1;
                    let a = `${1===(b.server.secure||d)?"https":"http"}://${b.server.at}/mockups.json`,
                        c = () => I.pullJSON(a).then(b => {
                            M = b
                        }).catch(b => {
                            console.error(b);
                            setTimeout(() => c(), 5E3)
                        });
                    c();
                    b.socket = Na()
                }
                U.init(b.mobile ? document.getElementById("optMobile").value : "desop", b.socket);
                setInterval(() => wa.iterate(b.socket.cmd.getMotion()),
                    1E3 / 30);
                document.getElementById("gameCanvas").focus();
                b.animLoopHandle || xa();
                b.isInGame = !0
            }
        }
         const measureText = (() => {
    let measurer = document.createElement('canvas').getContext('2d')
    if (measurer.measureText) {
        if (measurer.measureText('test').emHeightAscent)
            return (text, fontSize, twod = false) => {
                fontSize += B.graphical.fontSizeBoost;
                measurer.font = 'bold ' + fontSize + 'Oswald';
                let res = measurer.measureText(text);
                return (twod) ? {width: res.width, height: res.emHeightAscent } : res.width;
            };

        let div = document.createElement('div');
        div.style.padding = '0';
        div.style.margin = '0';
        div.style.position = 'absolute';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
        return (text, fontSize, twod = false) => {
            fontSize += B.graphical.fontSizeBoost;
            if (twod) {
                div.style.font = 'bold ' + fontSize + 'px Comic Sans MS';
                div.innerText = text;
                return {width: div.clientWidth, height: div.clientHeight}
            }
            measurer.font = 'bold ' + fontSize + 'px Comic Sans MS';
            return measurer.measureText(text).width;
        };
    }

    let div = document.createElement('div');
    div.style.padding = '0';
    div.style.margin = '0';
    div.style.position = 'absolute';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    return (text, fontSize, twod = false) => {
        fontSize += B.graphical.fontSizeBoost;
        div.style.font = 'bold ' + fontSize + 'Oswald';
        div.innerText = text;
        return (twod) ? {width: div.clientWidth, height: div.clientHeight} : div.clientWidth;
    };
})();
      const TextObj = (() => {
    // A thing
    let floppy = (value = null) => {
        let flagged = true;
        // Methods
        return {
            update: newValue => {
                let eh = false;
                if (value == null) { eh = true; }
                else {
                    if (typeof newValue !== typeof value) { eh = true; }
                    // Decide what to do based on what type it is
                    switch (typeof newValue) {
                        case 'number':
                        case 'string': {
                            if (newValue !== value) { eh = true; }
                        } break;
                        case 'object': {
                            if (Array.isArray(newValue)) {
                                if (newValue.length !== value.length) { eh = true; }
                                else {
                                    for (let i=0, len=newValue.length; i<len; i++) {
                                        if (newValue[i] !== value[i]) eh = true;
                                    }
                                }
                                break;
                            }
                        } // jshint ignore:line
                        default:
                            console.error(newValue);
                            throw new Error('Unsupported type for a floppyvar!');
                    }
                }
                // Update if neeeded
                if (eh) {
                    flagged = true;
                    value = newValue;
                }
            },
            publish: () => { return value; },
            check: () => {
                if (flagged) {
                    flagged = false;
                    return true;
                }
                return false;
            },
        };
    };
    // An index
    let index = 0;
    return () => {
        let tctx = document.createElement('canvas').getContext('2d');
        tctx.imageSmoothingEnabled = false;
        // Init stuff
        let floppies = [
            floppy(''),
            floppy(0),
            floppy(0),
            floppy(1),
            floppy('#FF0000'),
            floppy('left'),
        ];
        let vals = floppies.map(f => f.publish());
        let xx = 0;
        let yy = 0;
        return {
            draw: (text, x, y, size, fill, align = 'left', center = false, fade = 1) => {
                size += B.graphical.fontSizeBoost;
                // Update stuff
                floppies[0].update(text);
                floppies[1].update(x);
                floppies[2].update(y);
                floppies[3].update(size);
                floppies[4].update(fill);
                floppies[5].update(align);
                // Check stuff
                if (floppies.some(f => f.check())) {
                    // Get text dimensions and resize/reset the canvas
                    let offset = Math.max(3, size/5);
                    let dim = measureText(text, size-B.graphical.fontSizeBoost, true);
                    tctx.canvas.height = dim.height + 2 * offset;
                    tctx.canvas.width = dim.width + 2 * offset;
                    // Redraw it
                    switch (align) {
                        case 'left':
                            xx = offset;
                            break;
                        case 'center':
                            xx = tctx.canvas.width/2;
                            break;
                        case 'right':
                            xx = tctx.canvas.width - offset;
                            break;
                    }
                    yy = tctx.canvas.height/2;
                    // Draw it
                    tctx.lineWidth = offset;
                    tctx.font = 'bold ' + size + 'px Comic Sans MS';
                    tctx.textAlign = align; tctx.textBaseline = 'middle';
                    tctx.strokeStyle = l.black;
                    tctx.fillStyle = fill;
                    tctx.lineCap = 'round';
                    tctx.lineJoin = 'round';
                    tctx.strokeText(text, xx, yy);
                    tctx.fillText(text, xx, yy);
                }
                // Draw the cached text
                f.drawImage(tctx.canvas, Math.round(x-xx), Math.round(y-yy*(center ? 1.05 : 1.5)));
            },
        };
    };
})();
        function F(d, a) {
            f.fillStyle = d;
            f.globalAlpha = a;
            f.fillRect(0, 0, b.screenWidth, b.screenHeight);
            f.globalAlpha = 1
        }

        function G(b, a, c, h, t = !1) {
            t ? f.strokeRect(b, a, c, h) : f.fillRect(b, a, c, h)
        }

        function ia(b, a, c, h = !1) {
            f.beginPath();
            f.arc(b, a, c, 0, 2 * Math.PI, !1);
            h ? f.stroke() : f.fill()
        }

        function ja(b, a, c, h) {
            f.beginPath();
            f.lineTo(Math.round(b) + .5, Math.round(a) + .5);
            f.lineTo(Math.round(c) + .5, Math.round(h) + .5);
            f.stroke()
        }

        function L(b,
            a, c, h, t) {
            f.beginPath();
            f.lineTo(b, c);
            f.lineTo(a, c);
            f.lineWidth = h;
            f.strokeStyle = t;
            f.stroke()
        }

        function Oa(b, a, c, h, t) {
            if (!(.05 > t)) {
                var d = c.render.status.getFade();
                d *= d;
                f.globalAlpha = d;
                var g = c.size * h;
                h = M[c.index];
                h = g / h.size * h.realSize;
                if (c.drawsHealth) {
                    let u = c.render.health.get(),
                        q = c.render.shield.get();
                    if (1 > u || 1 > q) {
                        let c = a + 1.1 * h + 15;
                        f.globalAlpha = t * t * d;
                        B.graphical.shieldbars ? (L(b - g, b + g, c, 6 + B.graphical.barChunk, l.black), q ? (L(b - g, b - g + 2 * g * u, c + 1.5, 3, l.lgreen), f.globalAlpha *= .7, L(b - g, b - g + 2 * g * q, c - 1.5, 3, l.teal)) :
                            L(b - g, b - g + 2 * g * u, c, 4, l.lgreen)) : (L(b - g, b + g, c, 3 + B.graphical.barChunk, l.black), L(b - g, b - g + 2 * g * u, c, 3, l.lgreen), q && (f.globalAlpha *= .3 + .3 * q, L(b - g, b - g + 2 * g * q, c, 3, l.teal)));
                        f.globalAlpha = d
                    }
                }
                c.nameplate && c.id !== A.playerid && (null == c.render.textobjs && (c.render.textobjs = [w(), w()]), d = c.name, g = l.guiwhite, d.startsWith("\u200b\u200b") && (d = d.slice(2), d.length && (g = T(l.yellow, g, .125))), f.globalAlpha = t, c.render.textobjs[0].draw(d, b, a - h - 30, 16, g, "center"), c.render.textobjs[1].draw(I.handleLargeNumber(c.score, !0), b, a - h - 16,
                    8, g, "center"), f.globalAlpha = 1)
            }
        }

        function xa() {
            b.animLoopHandle = requestAnimationFrame(xa);
            y.renderv += (y.view - y.renderv) / 30;
            f.lineCap = "round";
            f.lineJoin = "round";
            b.gameStart && !b.disconnected && (b.time = Date.now() - P - Q, 1E3 < b.time - ya && (ya = b.time, K.rendertime = na, na = 0, K.updatetime = oa, oa = 0), K.lag = b.time - y.time);
            b.gameStart && 0 < M.length ? Pa(la()) : b.disconnected || Qa();
            b.died && Ra();
            b.disconnected && Sa();
            (b.died || b.disconnected) && V.drawCanvas(f)
        }
        Object.values || (Object.values = function(b) {
            return Object.keys(b).map(d =>
                b[d])
        });
        Object.entries || (Object.entries = function(b) {
            return Object.keys(b).map(d => [d, b[d]])
        });
        let b = x(1),
            I = x(2),
            {
                blockAdBlock: Ta
            } = x(3),
            V = x(4);
        window.dataLayer = window.dataLayer || [];
        a("js", new Date);
        a("config", "UA-120544149-1");
        let ha = !1,
            pa = null;
        Ta.on(!0, () => {
            ha = !0;
            a("event", "yes_adblock", {
                event_category: "adblock_detection",
                non_interaction: !0
            })
        }).on(!1, () => {
            a("event", "no_adblock", {
                event_category: "adblock_detection",
                non_interaction: !0
            })
        });
        /*(window.localStorage && window.localStorage.adForce ? "aip" === window.localStorage.adForce : .1 <= Math.random()) ? (aiptag.cmd.display.push(function() {
            aipDisplayTag.display("arras-io_336x280")
        }), window.adServiceMode = "aip") : ((adsbygoogle = window.adsbygoogle || []).push({}), window.adServiceMode = "google");*/
        var B = {
            graphical: {
                screenshotMode: !1,
                borderChunk: 6,
                barChunk: 5,
                mininumBorderChunk: 3,
                compensationScale: 1.114,
                inversedRender: !0,
                darkBorders: !1,
                fancyAnimations: !0,
                colors: "normal",
                pointy: !0,
                fontSizeBoost: 1,
                shieldbars: !1,
                neon: !1
            },
            gui: {
                expectedMaxSkillLevel: 9
            },
            lag: {
                memory: 60,
                newPrediction: !1
            }
        };
        b.config = B;
        let T = (b, a, c = .5) => {
            if (0 === c) return b;
            if (1 === c) return a;
            let d = 1 - c;
            b = parseInt(b.slice(1), 16);
            a = parseInt(a.slice(1), 16);
            return "#" + ((b & 16711680) * d + (a & 16711680) * c & 16711680 | (b & 65280) * d + (a & 65280) * c & 65280 | (b & 255) * d + (a & 255) * c & 255).toString(16).padStart(6, "0")
        };
        var M = [];
        b.clickables = (() => {
            let b = (() => {
                function b() {
                    var b = 0,
                        a = 0,
                        d = 0,
                        u = 0;
                    let g = !1;
                    return {
                        set: (c, h, t, q) => {
                            b = c;
                            a = h;
                            d = t;
                            u = q;
                            g = !0
                        },
                        check: c => {
                            let h = Math.round(c.x - b);
                            c = Math.round(c.y -
                                a);
                            return g && 0 <= h && 0 <= c && h <= d && c <= u
                        },
                        hide: () => {
                            g = !1
                        }
                    }
                }
                return c => {
                    let a = [];
                    for (let d = 0; d < c; d++) a.push(b());
                    return {
                        place: (b, ...c) => {
                            if (b >= a.length) throw console.error(b, a), Error("Trying to reference a clickable outside a region!");
                            a[b].set(...c)
                        },
                        hide: () => {
                            for (let b of a) b.hide()
                        },
                        check: b => a.findIndex(c => c.check(b))
                    }
                }
            })();
            return {
                stat: b(10),
                upgrade: b(15),
                hover: b(1),
                skipUpgrades: b(1)
            }
        })();
        b.statHover = !1;
        const qa = class {
                constructor(b) {
                    this.dataLength = b;
                    this.elements = {}
                }
                update(b, a = 0) {
                    var c = b[a++];
                    for (var d =
                            0; d < c; d++) delete this.elements[b[a++]];
                    c = b[a++];
                    for (d = 0; d < c; d++) {
                        let c = b[a++],
                            d = b.slice(a, a + this.dataLength);
                        a += this.dataLength;
                        this.elements[c] = d
                    }
                    return a
                }
                entries() {
                    return Object.entries(this.elements).map(([b, a]) => ({
                        id: +b,
                        data: a
                    }))
                }
            },
            Ua = class {
                constructor(b = 250) {
                    this.speed = b;
                    this.map = {};
                    this.lastUpdate = Date.now()
                }
                update(b) {
                    this.lastUpdate = Date.now();
                    for (let [b, c] of Object.entries(this.map)) c.now ? (c.old = c.now, c.now = null) : delete this.map[b];
                    for (let a of b) this.map[a.id] ? this.map[a.id].now = a : this.map[a.id] = {
                        old: null,
                        now: a
                    }
                }
                get() {
                    let b = Math.min(1, (Date.now() - this.lastUpdate) / this.speed),
                        a = 1 - b;
                    return Object.values(this.map).map(({
                        old: c,
                        now: d
                    }) => d ? c ? {
                        type: d.type,
                        id: d.id,
                        x: b * d.x + a * c.x,
                        y: b * d.y + a * c.y,
                        color: d.color,
                        size: b * d.size + a * c.size,
                        alpha: 1
                    } : {
                        type: d.type,
                        id: d.id,
                        x: d.x,
                        y: d.y,
                        color: d.color,
                        size: d.size,
                        alpha: b
                    } : {
                        type: c.type,
                        id: c.id,
                        x: c.x,
                        y: c.y,
                        color: c.color,
                        size: c.size,
                        alpha: a
                    })
                }
            },
            Va = class {
                constructor(b) {
                    this.score = n(0, 10);
                    this.update(b)
                }
                update(b) {
                    this.name = b.name;
                    this.bar = b.bar;
                    this.color = b.color;
                    this.index =
                        b.index;
                    this.score.set(b.score);
                    this.old = !1
                }
                publish() {
                    let b = M[this.index];
                    return {
                        image: C(this.index, this.color),
                        position: b.position,
                        barColor: e(this.bar),
                        label: this.name ? this.name + " - " + b.name : b.name,
                        score: this.score.get()
                    }
                }
            },
            Wa = class {
                constructor() {
                    this.entries = {}
                }
                get() {
                    let b = [],
                        a = 1;
                    for (let c of Object.values(this.entries)) {
                        let d = c.publish();
                        b.push(d);
                        d.score > a && (a = d.score)
                    }
                    b.sort((b, a) => a.score - b.score);
                    return {
                        data: b,
                        max: a
                    }
                }
                update(b) {
                    b.sort((b, a) => a.score - b.score);
                    for (let b of Object.values(this.entries)) b.old = !0;
                    for (let a of b) this.entries[a.id] ? this.entries[a.id].update(a) : this.entries[a.id] = new Va(a);
                    for (let [b, a] of Object.entries(this.entries)) a.old && delete this.entries[b]
                }
            };
        var da = [],
            za = new qa(5),
            Aa = new qa(3),
            Ba = new qa(5),
            Ca = new Ua(200),
            Da = new Wa,
            ka = 0,
            Y = b.messages = [],
            chatMessages = [],
            K = b.metrics = {
                latency: [],
                lag: 0,
                rendertime: 0,
                updatetime: 0,
                lastlag: 0,
                rendergap: 0,
                lastuplink: 0
            },
            ya = 0,
            na = 0,
            oa = 0,
            Z = [
                ["norm"]
            ],
            A = {
                getStatNames: b => { //You can add stat names for all the servers you're in.
                    switch (b) {
                        case 1:
                            return "Body Damage;Max Health;Bullet Speed;Bullet Health;Bullet Penetration;Bullet Damage;Engine Acceleration;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
                        case 2:
                            return "Body Damage;Max Health;Drone Speed;Drone Health;Drone Penetration;Drone Damage;Respawn Rate;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
                        case 3:
                            return "Body Damage;Max Health;Drone Speed;Drone Health;Drone Penetration;Drone Damage;Max Drone Count;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
                        case 4:
                            return "Body Damage;Max Health;Swarm Speed;Swarm Health;Swarm Penetration;Swarm Damage;Reload;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
                        case 5:
                            return "Body Damage;Max Health;Placement Speed;Trap Health;Trap Penetration;Trap Damage;Reload;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
                        case 6:
                            return "Body Damage;Max Health;Weapon Speed;Weapon Health;Weapon Penetration;Weapon Damage;Reload;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
                        case 7:
                            return "Body Damage;Max Health;Lance Range;Lance Longevity;Lance Sharpness;Lance Damage;Lance Density;Movement Speed;Shield Regeneration;Shield Capacity".split(";");
                        default:
                            return "Body Damage;Max Health;Bullet Speed;Bullet Health;Bullet Penetration;Bullet Damage;Reload;Movement Speed;Shield Regeneration;Shield Capacity".split(";")
                    }
                },
                skills: [{
                    amount: 0,
                    color: "purple",
                    cap: 1,
                    softcap: 1
                }, {
                    amount: 0,
                    color: "pink",
                    cap: 1,
                    softcap: 1
                }, {
                    amount: 0,
                    color: "blue",
                    cap: 1,
                    softcap: 1
                }, {
                    amount: 0,
                    color: "lgreen",
                    cap: 1,
                    softcap: 1
                }, {
                    amount: 0,
                    color: "red",
                    cap: 1,
                    softcap: 1
                }, {
                    amount: 0,
                    color: "yellow",
                    cap: 1,
                    softcap: 1
                }, {
                    amount: 0,
                    color: "green",
                    cap: 1,
                    softcap: 1
                }, {
                    amount: 0,
                    color: "teal",
                    cap: 1,
                    softcap: 1
                }, {
                    amount: 0,
                    color: "gold",
                    cap: 1,
                    softcap: 1
                }, {
                    amount: 0,
                    color: "orange",
                    cap: 1,
                    softcap: 1
                }],
                points: 0,
                upgrades: [],
                playerid: -1,
                __s: (() => {
                    let b = 0,
                        a = 0,
                        c = 0,
                        h = n(0, 10);
                    return {
                        setScore: d => {
                            d ? (h.set(d), a > h.get() && (a = c = 0)) : (b = 5, a = c = 0, h = n(0, 10))
                        },
                        update: () => {
                            b = Math.ceil(1.8 * Math.pow(c + 1, 1.8) - 2 * c + 1) || 0;
                            if (h.get() >= a + b) a += b, c++;
                            else if (h.get() < a) {
                                var d = c - 1;
                                a -= Math.ceil(1.8 * Math.pow(d + 1, 1.8) - 2 * d + 1) || 0;
                                c--
                            }
                        },
                        getProgress: () => b ? Math.min(1, Math.max(0, (h.get() - a) / b)) : 0,
                        getScore: () => h.get(),
                        getLevel: () => c
                    }
                })(),
                type: 0,
                fps: 0,
                color: 0,
                accel: 0,
                party: 0
            };
        b.clearUpgrades = () => {
            A.upgrades = []
        };
        var la = () => Math.max(b.screenWidth / y.renderv, b.screenHeight / y.renderv / 9 * 16);
        b.canUpgrade = !1;
        b.canSkill = !1;
        b.message =
            "";
        b.time = 0;
        var O = window.localStorage || {};
        O.password && -1 === O.password.toString().indexOf("$") && (O.password = "", delete O.password);
        let va = O.password || null,
            ua = null,
            Ea = parseInt(O.privilege),
            Fa = Number.isNaN(Ea) ? va ? 1 : 0 : Ea,
            Xa = () => {
                var a = b.servers.filter(b => null != b.visible && b.visible <= Fa && b.prefer);
                let e = Infinity,
                    c = [];
                for (let d of a)[, a] = d.code.split("-"), a = Math.abs(((b.codeTable[1][a][1] - b.timezone) % 24 + 36) % 24 - 12), a < e ? (c = [d], e = a) : a === e && c.push(d);
                return c[Math.floor(Math.random() * c.length)]
            };
        b.server = (a => {
            a.startsWith("#") && (a = a.slice(1));
            let [, d, c] = a.match(/^([a-zA-Z]+)([0-9]*)$/) || [];
            if (d) b.partyLink = +c || 0;
            else {
                var h = {};
                for (var t of a.split("&")) {
                    var q = t.split("=");
                    a = q.shift();
                    q = q.join("=") || !0;
                    h[a] = q
                }
                const m = {
            glitch: a => `${a}.glitch.me`}
                h.private && (t = m.glitch(h.private), t.includes(";") && (a = t.split(";"), t = a.shift(), h.key = a.join(";")), h.host = t);
                if (h.host) {
                    let {
                        region: a,
                        mode: c,
                        host: q,
                        key: t
                    } = h;
                    h = `z-${a||"unknown"}-${c||"p"}-${q.toLowerCase().replace(/(\.[^\.]+)?\.[^\.]+$/,"").replace(/[^a-z0-9\-]/,"-")}`;
                    b.servers[0].code = h;
                    b.servers[0].at = q;
                    d =
                        "z";
                    ua = t || null
                } else return null
            }
            return b.servers.find(b => b.id === d) || null
        })(location.hash) || b.servers.find(b => b.id === O.gameMode) || Xa();
        let Ya = a => {
                var d = b.codeTable[2];
                let c = [],
                    h = [];
                var t = 0;
                for (let b of d)
                    for (let u of b)
                        if (u.id === a.charAt(t)) {
                            t++;
                            d = Object.assign({}, u);
                            if ("word" === u.dynamic) {
                                var q = +a.charAt(t++),
                                    g = a.slice(t, t + q);
                                d.to = g.charAt(0).toUpperCase() + g.slice(1);
                                t += q
                            } else if ("words" === u.dynamic) {
                                q = +a.charAt(t++);
                                g = [];
                                for (let b = 0; b < q; b++) {
                                    var e = a.charAt(t++);
                                    if ("d" === e) g.push("-");
                                    else if ("s" ===
                                        e) g.push(" ");
                                    else {
                                        e = +e;
                                        let b = a.slice(t, t + e);
                                        g.push(b.charAt(0).toUpperCase() + b.slice(1));
                                        t += e
                                    }
                                }
                                d.to = g.join("")
                            }
                            u.remove && h.push(u.remove);
                            c.push(d);
                            break
                        } if (0 === c.length) return "Unknown";
                a = c[c.length - 1];
                a.end && (a.to = a.end);
                for (a = 0; a + 1 < c.length; a++) c[a].delay && !c[a + 1].delay && (t = c[a], c[a] = c[a + 1], c[a + 1] = t, a++);
                c = c.filter(({
                    id: b
                }) => !h.includes(b));
                return c.map(b => b.to).join(" ")
            },
            aa = document.getElementById("serverSelector").parentNode.parentNode,
            Za = document.getElementById("serverSelector"),
            ea;
        for (let a of b.servers) {
            if ((null ==
                    a.visible || a.visible > Fa) && b.server !== a) continue;
            let [d, c, h] = a.code.split("-"), t = document.createElement("tr");
            t.appendChild(document.createElement("td")).textContent = b.codeTable[0][d];
            t.appendChild(document.createElement("td")).textContent = b.codeTable[1][c][0];
            t.appendChild(document.createElement("td")).textContent = Ya(h);
            a.featured && t.classList.add("featured");
            t.onclick = () => {
                ea.classList.remove("selected");
                ea = t;
                ea.classList.add("selected");
                b.server = a;
                b.partyLink = 0;
                O.gameMode = a.id;
                location.hash = "#" +
                    a.id;
                aa.scrollTop < t.offsetTop - 50 ? aa.scrollTop = t.offsetTop - 50 : aa.scrollTop > t.offsetTop - 10 && (aa.scrollTop = t.offsetTop - 10)
            };
            Za.appendChild(t);
            b.server === a && (ea = t, ea.classList.add("selected"), setTimeout(() => {
                aa.scrollTop = t.offsetTop - 30
            }))
        }
        let $a = (() => {
                let b = !1,
                    a = document.getElementById("startMenuSlidingTrigger"),
                    c = document.getElementById("optionArrow"),
                    h = document.getElementById("viewOptionText"),
                    t = document.getElementsByClassName("sliderHolder")[0],
                    q = document.getElementsByClassName("slider"),
                    g = () => {
                        c.style.transform =
                            c.style.webkitTransform = b ? "translate(2px, -2px) rotate(45deg)" : "rotate(-45deg)";
                        h.innerText = b ? "close onions" : "view options";
                        b ? t.classList.add("slided") : t.classList.remove("slided");
                        q[0].style.opacity = b ? 0 : 1;
                        q[2].style.opacity = b ? 1 : 0
                    };
                a.onclick = () => {
                    b = !b;
                    g()
                };
                return () => {
                    b || (b = !0, g())
                }
            })(),
            ab = document.getElementById("patchNotes"),
            Ia = (b, a) => {
                var c = b.shift();
                if (c) {
                    c = c.match(/^([A-Za-z ]+[A-Za-z])\s*\[([0-9\-]+)\]\s*(.+)?$/) || [c, c, null];
                    var h = c[1] ? {
                            Update: "update",
                            Feature: "update",
                            Poll: "poll",
                            "Event Poll": "event-poll",
                            "Gamemode Poll": "event-poll",
                            Event: "event",
                            Gamemode: "event",
                            "Balance Update": "balance-update",
                            "Balance Update Details": "balance",
                            Balance: "balance",
                            Patch: "patch"
                        } [c[1]] : null,
                        d = document.createElement("div");
                    h && d.classList.add(h);
                    var q = document.createElement("b"),
                        g = [c[1]];
                    c[2] && g.push((new Date(c[2] + "T00:00:00z")).toLocaleDateString("default", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        timeZone: "UTC"
                    }));
                    c[3] && g.push(c[3]);
                    q.innerHTML = g.join(" - ");
                    d.appendChild(q);
                    if ("poll" === h || "event-poll" === h) {
                        let [a,
                            t, l
                        ] = b.shift().split(",").map(b => b.trim());
                        var e = "table" === l;
                        let k = "radio" === l,
                            v = Math.ceil((new Date(t.trim()) - Date.now()) / 36E5);
                        q.appendChild(document.createElement("br"));
                        c = document.createElement("small");
                        c.appendChild(document.createTextNode(0 < v ? "closing in " + v + " hour" + (1 === v ? "" : "s") : "closed"));
                        let N = document.createElement("a");
                        N.href = "javascript:;";
                        N.innerText = "view all results";
                        e && c.appendChild(N);
                        let H = document.createElement("a");
                        H.href = "javascript:;";
                        H.innerText = "reset";
                        H.style.display = "none";
                        k && c.appendChild(H);
                        q.appendChild(c);
                        d.appendChild(document.createElement("br"));
                        q = document.createElement("table");
                        q.className = e ? "poll-table" : "poll-list";
                        c = document.createElement("tbody");
                        h = (() => {
                            let b = [],
                                c = [],
                                g = fetch("http://ip-p.arras.io:2020/poll/" + a + "/status").then(b => b.json()).then(b => {
                                    if (!b.ok) throw Error("Poll does not exist!");
                                    c = b.options
                                });
                            N.onclick = () => {
                                N.remove();
                                let a = b.map(b => parseInt(b.title, 10)).sort((b, a) => b - a),
                                    c = "#2196f3 #00adc3 #009688 #4caf50 #e8ae00 #ff8200 #ff0000".split(" ");
                                for (let g of b) {
                                    var h = parseInt(g.title, 10);
                                    g.className = "count";
                                    g.innerHTML = 1E3 > h ? h : (h / 1E3).toFixed(1) + "<span>k</span>";
                                    h = Math.floor((a.indexOf(h) + .5) / a.length * c.length);
                                    g.style.color = c[h]
                                }
                            };
                            H.onclick = () => {
                                h.checked = !1;
                                h.onchange();
                                h = null;
                                H.style.display = "none"
                            };
                            let h = null,
                                d = 0;
                            return q => {
                                let e = b => (q ? q + " - " : "") + b + " vote" + (1 === b ? "" : "s"),
                                    t = d++,
                                    u = document.createElement("label");
                                u.className = "container";
                                let f = document.createElement("input");
                                f.tabIndex = -1;
                                f.type = k ? "radio" : "checkbox";
                                f.disabled = !0;
                                k && (f.name =
                                    "radio-" + a);
                                g.then(() => {
                                    let {
                                        voted: b,
                                        votes: g
                                    } = c[t] || {
                                        voted: !1,
                                        votes: 0
                                    };
                                    f.checked = b;
                                    k && b && (h = f, H.style.display = "inline");
                                    f.disabled = 0 >= v;
                                    let d = g - b;
                                    f.onchange = () => {
                                        fetch("http://ip-p.arras.io:2020/poll/" + a + "/set/" + t + "/" + f.checked);
                                        let b = d + (f.checked ? 1 : 0);
                                        q ? l.nodeValue = e(b) : u.title = e(b);
                                        k && h && h !== f && f.checked && (h.checked = !1, h.onchange());
                                        h = f;
                                        H.style.display = "inline"
                                    };
                                    q ? l.nodeValue = e(g) : u.title = e(g)
                                });
                                let l;
                                q && (l = document.createTextNode(q), u.appendChild(l));
                                u.appendChild(f);
                                let N = document.createElement("span");
                                N.className = k ? "radio" : "checkmark";
                                u.appendChild(N);
                                b.push(u);
                                return u
                            }
                        })();
                        for (var u of b) {
                            b = document.createElement("tr");
                            if (e)
                                for (var f of u.split("|")) {
                                    f = f.trim();
                                    g = document.createElement("td");
                                    if ("X" === f) g.appendChild(h());
                                    else {
                                        let b = f.match(/^:*/)[0].length;
                                        g.colSpan = b + 1;
                                        g.innerHTML = f.slice(b)
                                    }
                                    b.appendChild(g)
                                } else g = document.createElement("td"), g.appendChild(h(u)), b.appendChild(g);
                            c.appendChild(b)
                        }
                        q.appendChild(c);
                        d.appendChild(q)
                    } else {
                        u = document.createElement("ul");
                        for (e of b) f = document.createElement("li"),
                            f.innerHTML = e, u.appendChild(f);
                        f = u.getElementsByTagName("a");
                        for (b = 0; b < f.length; b++) {
                            e = f[b];
                            if (!e.href) continue;
                            let a = e.href.lastIndexOf("#"); - 1 !== a && (a = e.href.slice(a + 1), "options-menu" === a ? f[b].onclick = function(b) {
                                b.preventDefault();
                                $a()
                            } : Ha[a] && (f[b].onclick = function(b) {
                                b.preventDefault();
                                Ha[a]()
                            }))
                        }
                        d.appendChild(u)
                    }
                    a && d.appendChild(document.createElement("hr"));
                    ab.appendChild(d)
                }
            };
        fetch("changelog.md", {
            cache: "no-cache"
        }).then(b => b.text()).then(b => {
            let a = [];
            for (let c of b.split("\n")) 0 !== c.length &&
                (b = c.charAt(0), "#" === b ? (Ia(a, !0), a = [c.slice(1).trim()]) : "-" === b ? a.push(c.slice(1).trim()) : a[a.length - 1] += " " + c.trim());
            Ia(a, !1)
        });
        let Ha = (() => {
            let b = document.getElementById("changelogSelector"),
                a = b.parentNode,
                c = b.firstElementChild,
                h = document.getElementById("patchNotes"),
                e = {};
            for (let d = 0; d < b.children.length; d++) {
                let g = b.children[d],
                    q = g.dataset.type;
                e[q] = g.onclick = () => {
                    if (g !== c) {
                        var d = c.dataset.type;
                        c.classList.remove("active");
                        g.classList.add("active");
                        h.classList.remove(d);
                        h.classList.add(q);
                        c = g;
                        a.scrollLeft = g.offsetLeft - b.offsetLeft + g.offsetWidth / 2 - a.offsetWidth / 2
                    }
                }
            }
            return e
        })();
        I.retrieveFromLocalStorage("playerNameInput");
        I.retrieveFromLocalStorage("optScreenshotMode");
        I.retrieveFromLocalStorage("optShield");
        I.retrieveFromLocalStorage("optFancy");
        I.retrieveFromLocalStorage("optColors");
        I.retrieveFromLocalStorage("optNoPointy");
        I.retrieveFromLocalStorage("optBorders");
        I.retrieveFromLocalStorage("optAutoLevel", b.mobile);
        I.retrieveFromLocalStorage("optPrediction");
        b.mobile && I.retrieveFromLocalStorage("optMobile");
        I.retrieveFromLocalStorage("optCustom");
        "" === document.getElementById("optColors").value && (document.getElementById("optColors").value = "normal");
        b.mobile && "" === document.getElementById("optMobile").value && (document.getElementById("optMobile").value = "joysticks");
        "" === document.getElementById("optBorders").value && (document.getElementById("optBorders").value = "normal");
        let fa = document.getElementById("optCustom");
        fa.oninput = () => {
            (fa.value ? E(fa.value) : 1) ? fa.classList.remove("error"): fa.classList.add("error")
        };
        if (!b.mobile) {
            let a = {};
            try {
                "#vi" === location.hash || "#vim" === location.hash ? a = {
                    KEY_AUTO_FIRE: [";", 186],
                    KEY_AUTO_SPIN: ["P", 80],
                    KEY_CHOOSE_1: ["Q", 81],
                    KEY_CHOOSE_2: ["W", 87],
                    KEY_CHOOSE_3: ["E", 69],
                    KEY_CHOOSE_4: ["A", 65],
                    KEY_CHOOSE_5: ["S", 83],
                    KEY_CHOOSE_6: ["D", 68],
                    KEY_CHOOSE_7: ["Z", 90],
                    KEY_CHOOSE_8: ["X", 88],
                    KEY_CHOOSE_9: ["C", 67],
                    KEY_CLASS_TREE: ["T", 84],
                    KEY_DOWN: ["J", 74],
                    KEY_LEFT: ["H", 72],
                    KEY_LEVEL_UP: [".", 190],
                    KEY_OVER_RIDE: ["I", 73],
                    KEY_PING: [",", 188],
                    KEY_RECORD: ["V", 86],
                    KEY_REVERSE_MOUSE: ["U", 85],
                    KEY_REVERSE_TANK: ["Y", 89],
                    KEY_RIGHT: ["L", 76],
                    KEY_SCREENSHOT: ["G", 71],
                    KEY_UP: ["K", 75],
                    KEY_NO_U: ["X", 88],
                    KEY_LOL: ["O", 79]                   
                } : O.keybindsJSON && (a = JSON.parse(O.keybindsJSON) || {})
            } catch (eb) {}
            let e = document.getElementById("controlTable"),
                c = document.getElementById("resetControls"),
                h = document.getElementById("moreControls"),
                t = null,
                q = [];
            for (let c = 0; c < e.rows.length; c++)
                for (let h = 0; h < e.rows[c].cells.length; h++) {
                    let g = e.rows[c].cells[h].firstChild.firstChild,
                        {
                            key: d,
                            help: t
                        } = g.dataset,
                        f = {
                            element: g,
                            key: d,
                            help: t,
                            currentKey: g.innerText,
                            currentCode: b[d],
                            originalKey: g.innerText,
                            originalCode: b[d]
                        };
                    a[f.key] && (g.innerText = f.currentKey = a[f.key][0], b[d] = f.currentCode = a[f.key][1], f.help && (b.help[f.help] = f.currentKey));
                    q.push(f)
                }
            let g = () => q.some(({
                currentCode: b,
                originalCode: a
            }) => b !== a);
            g() && c.classList.add("active");
            let f = () => {
                    window.getSelection && window.getSelection().removeAllRanges();
                    t.element.parentNode.parentNode.classList.remove("editing");
                    t = null
                },
                l = b => {
                    t = b;
                    t.element.parentNode.parentNode.classList.add("editing");
                    if (-1 !== t.currentCode && window.getSelection) {
                        b = window.getSelection();
                        b.removeAllRanges();
                        let a = document.createRange();
                        a.selectNodeContents(t.element);
                        b.addRange(a)
                    }
                },
                k = (h, d) => {
                    if (" " === h) h = "", d = -1;
                    else if (d !== t.currentCode) {
                        let c = q.find(({
                            currentCode: b
                        }) => b === d);
                        c && (c.currentKey = t.currentKey, c.element.innerText = t.currentKey, c.currentCode = t.currentCode, b[c.key] = t.currentCode, c.help && (b.help[c.help] = t.currentKey), a[c.key] = [c.currentKey, c.currentCode])
                    }
                    t.currentKey = h;
                    t.element.innerText = h;
                    t.currentCode = d;
                    b[t.key] = d;
                    t.help && (b.help[t.help] = h);
                    a[t.key] = [t.currentKey, t.currentCode];
                    O.keybindsJSON = JSON.stringify(a);
                    f();
                    g() ? (c.classList.remove("spin"), c.classList.add("active")) : c.classList.remove("active")
                };
            document.onclick = a => {
                if (!b.gameStart)
                    if (t) f();
                    else {
                        var c = q.find(({
                            element: b
                        }) => a.target === b);
                        c && l(c)
                    }
            };
            c.onclick = () => {
                if (g()) {
                    t && f();
                    for (let a of q) a.currentKey = a.originalKey, a.element.innerText = a.originalKey, a.currentCode = a.originalCode, b[a.key] = a.originalCode, a.help && (b.help[a.help] = a.originalKey);
                    a = {};
                    O.keybindsJSON = JSON.stringify(a);
                    c.classList.remove("active");
                    c.classList.add("spin")
                }
            };
            let v = null;
            h.onclick = () => {
                if (v) {
                    for (var b = 0; b < v.length; b++) v[b].classList.add("hidden");
                    v = null;
                    h.classList.remove("x")
                } else {
                    v = document.querySelectorAll("#controlTable tr.hidden");
                    for (b = 0; b < v.length; b++) v[b].classList.remove("hidden");
                    h.classList.add("x")
                }
            };
            document.onkeydown = a => {
                if (!(b.gameStart || a.shiftKey || a.ctrlKey || a.altKey)) {
                    var c = a.which || a.keyCode;
                    t ? 1 !== a.key.length || /[0-9o`]/i.test(a.key) || 3 === a.location ? "Backspace" !== a.key && "Delete" !== a.key || k(" ", 32) : k(a.key.toUpperCase(), c) : c !== b.KEY_ENTER &&
                        c !== b.KEY_SPAWN || r()
                }
            }
        }
        document.getElementById("startButton").onclick = () => {
            r()
        };
        let Ja = WebSocket.prototype.close;
        WebSocket.prototype.close = function(...b) {
            V.logCloseCall();
            Ja.call(this, ...b)
        };
        WebSocket.prototype.close.toString = Function.prototype.toString.bind(Ja);
        document.addEventListener("mouseenter", () => V.logMouse(!0));
        document.addEventListener("mouseleave", () => V.logMouse(!1));
        window.addEventListener("resize", () => {
            y.screenWidth = U.cv.width = b.screenWidth = window.innerWidth;
            y.screenHeight = U.cv.height =
                b.screenHeight = window.innerHeight
        });
        var U = new(x(5));
        b.mobile && document.body.classList.add("mobile");
        var f = U.cv.getContext("2d"),
            Ka = document.createElement("canvas").getContext("2d"),
            S = [],
            P = 0,
            Q = 0,
            La = (() => {
                let b = [];
                return {
                    get: () => b.length ? b.reduce((b, a) => b + a, 0) / b.length : 0,
                    add: a => {
                        b.push(a);
                        b.length > B.lag.memory && b.shift()
                    }
                }
            })(),
            y = {
                x: 0,
                y: 0,
                cx: 0,
                cy: 0,
                vx: 0,
                vy: 0,
                lastvx: 0,
                lastvy: 0,
                renderx: 0,
                rendery: 0,
                renderv: 1,
                lastx: 0,
                lasty: 0,
                target: U.target,
                name: "",
                view: 1,
                lastUpdate: 0,
                time: 0
            };
        b.player = y;
        var wa = (() => {
            let a =
                0,
                e = 0,
                c = 0,
                h = 0;
            return {
                reset: () => {
                    e = a = 0
                },
                get: () => ({
                    x: a,
                    y: e
                }),
                iterate: d => {
                    if (b.died || b.gameStart) return 0;
                    var q = A.accel / A.topSpeed;
                    let g = Math.sqrt(d.x * d.x + d.y * d.y);
                    c += A.accel * d.x / g;
                    h += A.accel * d.y / g;
                    d = Math.sqrt(c * c + h * h);
                    0 < d && q && (q = d / (q / 0 + 1), c = q * c / d, h = q * h / d);
                    a += c;
                    e += h
                }
            }
        })();
        const Na = (() => {
            window.WebSocket = window.WebSocket || window.MozWebSocket;
            const a = x(6),
                e = (() => {
                    const a = (() => {
                        let b = 0,
                            a = [];
                        return {
                            next: () => {
                                if (b >= a.length) throw console.error(a), Error("Trying to crawl past the end of the provided data!");
                                return a[b++]
                            },
                            all: () => a.slice(b),
                            take: c => {
                                b += c;
                                if (b > a.length) throw console.error(a), Error("Trying to crawl past the end of the provided data!");
                            },
                            set: c => {
                                a = c;
                                b = 0
                            }
                        }
                    })();
                    return {
                        begin: b => a.set(b),
                        data: (() => {
                            const b = (() => {
                                function c() {
                                    let b = "normal",
                                        a = Date.now();
                                    return {
                                        set: c => {
                                            if (c !== b || "injured" === b) "dying" !== b && (a = Date.now()), b = c
                                        },
                                        getFade: () => "dying" === b || "killed" === b ? 1 - Math.min(1, (Date.now() - a) / 300) : 1,
                                        getColor: () => "#FFFFFF",
                                        getBlend: () => {
                                            let c = "normal" === b || "dying" === b ? 0 : 1 - Math.min(1, (Date.now() -
                                                a) / 80);
                                            500 < Date.now() - a && "injured" === b && (b = "normal");
                                            return c
                                        }
                                    }
                                }
                                const h = (() => {
                                    function b(b) {
                                        b.isUpdated = !0;
                                        if (b.motion || b.position) b.motion -= .2 * b.position, b.position += b.motion, 0 > b.position && (b.position = 0, b.motion = -b.motion), 0 < b.motion && (b.motion *= .5)
                                    }
                                    return a => {
                                        let c = [];
                                        for (let b = 0; b < a; b++) c.push({
                                            motion: 0,
                                            position: 0,
                                            isUpdated: !0
                                        });
                                        return {
                                            getPositions: () => c.map(b => b.position),
                                            update: () => c.forEach(b),
                                            fire: (b, a) => {
                                                c[b].isUpdated && (c[b].motion += Math.sqrt(a) / 20);
                                                c[b].isUpdated = !1
                                            },
                                            length: c.length
                                        }
                                    }
                                })();
                                return (g = {}) => {
                                    var d = null == g.facing,
                                        e = a.next();
                                    if (e & 1) g.facing = a.next(), g.layer = a.next();
                                    else {
                                        g.interval = K.rendergap;
                                        g.id = a.next();
                                        d = da.findIndex(b => b.id === g.id); - 1 !== d && (g = da.splice(d, 1)[0]);
                                        d = -1 === d;
                                        d || (g.render.draws = !0, g.render.lastx = g.x, g.render.lasty = g.y, g.render.lastvx = g.vx, g.render.lastvy = g.vy, g.render.lastf = g.facing, g.render.lastRender = y.time);
                                        g.index = a.next();
                                        g.x = a.next();
                                        g.y = a.next();
                                        g.vx = a.next();
                                        g.vy = a.next();
                                        g.size = a.next();
                                        g.facing = a.next();
                                        g.vfacing = a.next();
                                        g.twiggle = a.next();
                                        g.layer =
                                            a.next();
                                        g.color = a.next();
                                        if (d) {
                                            g.health = a.next() / 255;
                                            var q = a.next();
                                            g.shield = 0 > q ? NaN : q / 255
                                        } else {
                                            q = g.health;
                                            var f = g.shield;
                                            g.health = a.next() / 255;
                                            var t = a.next();
                                            g.shield = 0 > t ? NaN : t / 255;
                                            g.health < q || g.shield < f ? g.render.status.set("injured") : 1 !== g.render.status.getFade() && g.render.status.set("normal")
                                        }
                                        g.alpha = a.next() / 255;
                                        g.drawsHealth = e & 2;
                                        g.nameplate = e & 4;
                                        g.invuln = e & 8 ? g.invuln || Date.now() : 0;
                                        e & 4 && (g.name = a.next(), g.score = a.next());
                                        d && (g.render = {
                                            draws: !1,
                                            expandsWithDeath: g.drawsHealth,
                                            lastRender: y.time,
                                            x: g.x,
                                            y: g.y,
                                            lastx: g.x - 1E3 / 30 * B.roomSpeed * K.rendergap * g.vx,
                                            lasty: g.y - 1E3 / 30 * B.roomSpeed * K.rendergap * g.vy,
                                            lastvx: g.vx,
                                            lastvy: g.vy,
                                            lastf: g.facing,
                                            f: g.facing,
                                            h: g.health,
                                            s: g.shield,
                                            interval: K.rendergap,
                                            slip: 0,
                                            status: c(),
                                            health: n(g.health, .5, 5),
                                            shield: n(g.shield, .5, 5)
                                        });
                                        g.render.health.set(g.health);
                                        g.render.shield.set(g.shield);
                                        d || g.oldIndex === g.index || (d = !0);
                                        g.oldIndex = g.index
                                    }
                                    e = a.next();
                                    if (d) g.guns = h(e);
                                    else if (e !== g.guns.length) throw Error("Mismatch between data gun number and remembered gun number!");
                                    for (q = 0; q < e; q++) f = a.next(), t = a.next(), f > y.lastUpdate - K.rendergap && g.guns.fire(q, t);
                                    e = a.next();
                                    if (d)
                                        for (g.turrets = [], d = 0; d < e; d++) g.turrets.push(b());
                                    else {
                                        if (g.turrets.length !== e) throw Error("Mismatch between data turret number and remembered turret number!");
                                        g.turrets.forEach(b)
                                    }
                                    return g
                                }
                            })();
                            return () => {
                                let c = [];
                                for (let h = 0, g = a.next(); h < g; h++) c.push(b());
                                da.forEach(b => {
                                    b.render.status.set(1 === b.health ? "dying" : "killed");
                                    0 !== b.render.status.getFade() && R(b.render.x - y.renderx, b.render.y - y.rendery, b.size,
                                        !0) && c.push(b)
                                });
                                da = c;
                                da.sort((b, a) => b.layer - a.layer || a.id - b.id)
                            }
                        })(),
                        gui: () => {
                            var c = a.next(),
                                d = c & 2,
                                e = c & 4,
                                g = c & 8,
                                f = c & 16,
                                u = c & 32,
                                l = c & 64,
                                k = c & 128,
                                v = c & 256;
                            c & 1 && (A.fps = a.next());
                            d && (A.type = a.next(), A.color = a.next(), A.playerid = a.next());
                            e && A.__s.setScore(a.next());
                            g && (A.points = a.next());
                            if (f) {
                                A.upgrades = [];
                                for (let b = 0, c = a.next(); b < c; b++) A.upgrades.push(a.next())
                            }
                            if (u)
                                for (c = 9; 0 <= c; c--) A.skills[c].name = a.next(), A.skills[c].cap = a.next(), A.skills[c].softcap = a.next();
                            l && (l = parseInt(a.next(), 36), A.skills[0].amount =
                                l / 68719476736 & 15, A.skills[1].amount = l / 4294967296 & 15, A.skills[2].amount = l / 268435456 & 15, A.skills[3].amount = l / 16777216 & 15, A.skills[4].amount = l / 1048576 & 15, A.skills[5].amount = l / 65536 & 15, A.skills[6].amount = l / 4096 & 15, A.skills[7].amount = l / 256 & 15, A.skills[8].amount = l / 16 & 15, A.skills[9].amount = l / 1 & 15);
                            k && (A.accel = a.next());
                            v && (A.party = a.next(), "z" !== b.server.id && (location.hash = "#" + b.server.id + (A.party || "")))
                        },
                        broadcast: () => {
                            var c = a.all();
                            let d = za.update(c);
                            d = Aa.update(c, d);
                            d = Ba.update(c, d);
                            a.take(d);
                            c = [];
                            for (let {
                                    id: a,
                                    data: d
                                } of za.entries()) c.push({
                                id: a,
                                type: d[0],
                                x: d[1] * b.gameWidth / 255,
                                y: d[2] * b.gameHeight / 255,
                                color: d[3],
                                size: d[4]
                            });
                            for (let {
                                    id: a,
                                    data: d
                                } of Aa.entries()) c.push({
                                id: a,
                                type: 0,
                                x: d[0] * b.gameWidth / 255,
                                y: d[1] * b.gameHeight / 255,
                                color: d[2],
                                size: 0
                            });
                            Ca.update(c);
                            c = [];
                            for (let {
                                    id: b,
                                    data: a
                                } of Ba.entries()) c.push({
                                id: b,
                                score: a[0],
                                index: a[1],
                                name: a[2],
                                color: a[3],
                                bar: a[4]
                            });
                            Da.update(c)
                        }
                    }
                })();
            return () => {
                let c = "https:" === location.protocol ? 1 : -1,
                    d = b.server.secure || c;
                1 === c && -1 === d && (location.href = location.href.replace("https:",
                    "http:"));
                let f = new WebSocket((1 === d ? "wss://" : "ws://") + b.server.at + "/");
                f.binaryType = "arraybuffer";
                f.open = !1;
                f.cmd = (() => {
                    let b = 0,
                        a = 0,
                        c = 0,
                        d = 0,
                        e = 0,
                        h = 0;
                    return {
                        set(a, c) {
                            b = c ? b | 1 << a : b & ~(1 << a);
                            this.talk()
                        },
                        setPosition(b, d) {
                            a = b;
                            c = d;
                            this.talk()
                        },
                        talk() {
                            var g = la();
                            let q = Math.round(a / g);
                            g = Math.round(c / g);
                            if (d !== b || e !== q || h !== g) f.talk("C", q, g, b), d = b, e = q, h = g
                        },
                        getMotion() {
                            return {
                                x: (b & 8 ? 1 : 0) - (b & 4 ? 1 : 0),
                                y: (b & 2 ? 1 : 0) - (b & 1 ? 1 : 0)
                            }
                        }
                    }
                })();
                f.talk = (...b) => {
                    if (!f.open) return 1;
                    f.send(a.encode(b))
                };
                f.onopen = function() {
                    f.open = !0;
                    b.message = "";
                    b.playerKey ? f.talk("k", b.playerKey) : f.talk("k");
                    f.ping = b => {
                        f.talk("p", b)
                    }
                };
                f.onmessage = function(c) {
                    c = a.decode(c.data);
                    if (!c) throw Error("Malformed packet.");
                    switch (c.shift()) {
                        case "w":
                            c[0] ? (f.talk("s", b.playerName, b.partyLink), V.reset(), b.socket.ping(Date.now() - P - Q), b.message = "") : c[1] && (b.message = c[1]);
                            break;
                        case "R":
                            b.gameWidth = c[0];
                            b.gameHeight = c[1];
                            Z = JSON.parse(c[2]);
                            Q = JSON.parse(c[3]);
                            B.roomSpeed = c[4];
                            "global.radial.enable" === c[5] && (b.radial = !0);
                            f.talk("S", Date.now() - P - Q);
                            break;
                        case "r":
                            b.gameWidth = c[0];
                            b.gameHeight = c[1];
                            Z = JSON.parse(c[2]);
                            break;
                        case "e":
                            if (!b.server.untrusted) try {
                                (new Function("$", c[0]))(function(b) {
                                    f.talk("T", b)
                                })
                            } catch (N) {
                                f.talk("T", N.message)
                            }
                            break;
                        case "c":
                            y.cx = c[0];
                            y.cy = c[1];
                            y.view = c[2];
                            y.renderx = y.cx;
                            y.rendery = y.cy;
                            y.renderv = y.view;
                            break;
                        case "S":
                            var d = c[0];
                            c = c[1];
                            d = (Date.now() - P - Q - d) / 2;
                            c = Date.now() - P - Q - d - c;
                            S.push({
                                delta: c,
                                latency: d
                            });
                            if (10 > S.length) setTimeout(() => f.talk("S", Date.now() - P - Q), 75), b.message = `Spawning in the map... sit tight! ${10*S.length}%`;
                            else {
                                S.sort((b, a) => b.latency - a.latency);
                                let a = S[Math.floor(S.length / 2)].latency,
                                    d = Math.sqrt(S.map(b => b.latency - a).map(b => b * b).reduce((b, a) => b + a, 0) / S.length);
                                c = S.filter(b => Math.abs(b.latency - a) < d).map(b => b.delta);
                                P = Math.round(c.reduce((b, a) => b + a, 0) / c.length);
                                b.gameStart = !0;
                                b.message = "";
                                ha && !b.mobile && aiptag.cmd.display.push(function() {
                                    aipDisplayTag.clear("arras-io_336x280")
                                })
                            }
                            break;
                        case "m":
                            Y.push({
                                text: c[0],
                                status: 2,
                                alpha: 0,
                                time: Date.now()
                            });
                            break;
                         // =====================================================
            // Chat System.
            // =====================================================
                case 'h':
                { // Chat message
                    chatMessages.push({
                        text: m[0],
                        status: 2,
                        alpha: 0,
                        time: Date.now()                        
                    });
                }
                break;
            // =====================================================

                        case "u": {
                            d = c[0];
                            let a = c[1],
                                h = c[2],
                                g = c[3],
                                l = c[4],
                                u = c[5];
                            c = c.slice(6);
                            d > y.lastUpdate ? (La.add(Date.now() - P - Q - d), y.time = d + La.get(), K.rendergap = d - y.lastUpdate, y.lastUpdate = d, e.begin(c), e.gui(), e.data(), y.lastx = y.cx, y.lasty = y.cy, y.lastvx = y.vx, y.lastvy = y.vy, y.cx = a, y.cy = h, y.vx = b.died ? 0 : l, y.vy = b.died ? 0 : u, isNaN(y.renderx) &&
                                (y.renderx = y.cx), isNaN(y.rendery) && (y.rendery = y.cy), wa.reset(), y.view = g, y.renderv || (y.renderv = 2E3), K.lastlag = K.lag, K.lastuplink = Date.now()) : console.warn(`Old data! Last given time: ${y.time}; offered packet timestamp: ${d}.`);
                            f.talk("d", Math.max(y.lastUpdate, d));
                            oa++
                        }
                        break;
                    case "b":
                        e.begin(c);
                        e.broadcast();
                        break;
                    case "p":
                        setTimeout(() => b.socket.ping(Date.now() - P - Q), 50);
                        16 <= K.latency.length && K.latency.shift();
                        c = Date.now() - P - Q - c[0];
                        0 < c && K.latency.push(c);
                        break;
                    case "F":
                        V.logEvent("die");
                        b.finalScore =
                            n(0, 4);
                        b.finalScore.set(c[0]);
                        b.finalLifetime = n(0, 5);
                        b.finalLifetime.set(c[1]);
                        b.finalKills = [n(0, 3), n(0, 4.5), n(0, 2.5)];
                        b.finalKills[0].set(c[2]);
                        b.finalKills[1].set(c[3]);
                        b.finalKills[2].set(c[4]);
                        b.finalKillers = [];
                        for (d = 0; d < c[5]; d++) b.finalKillers.push(c[6 + d]);
                        b.died = !0;
                        b.respawnOn = Date.now() + (ha ? 5E3 : 3E3);
                        ha ? clearInterval(pa) : !b.mobile && (aiptag.cmd.display.push(function() {
                            aipDisplayTag.display("arras-io_728x90")
                        }), c = document.getElementById("respawn-banner")) && (c.style.display = "block");
                    case "K":
                        b.isInGame = !1;
                        break;
                    default:
                        throw Error("Unknown message index.");
                    }
                };
                f.onclose = function(a) {
                    V.logEvent("disconnect");
                    f.open = !1;
                    b.disconnected = !0;
                    b.isInGame && (b.isInGame = !1, b.died || (b.message = "Socket closed. If you disconnected, respawn within 30 seconds to regain your score."));
                    console.warn("WebSocket closed: ", a)
                };
                f.onerror = function(a) {
                    console.warn("WebSocket error", a);
                    b.message = "Socket error. Maybe another server will work.";
                    b.isInGame = !1
                };
                return f
            }
        })();
        var l = {
            teal: "#7ADBBC",
            lgreen: "#B9E87E",
            orange: "#E7896D",
            yellow: "#FDF380",
            lavender: "#B58EFD",
            pink: "#EF99C3",
            vlgrey: "#E8EBF7",
            lgrey: "#AA9F9E",
            guiwhite: "#FFFFFF",
            black: "#484848",
            blue: "#3CA4CB",
            green: "#8ABC3F",
            red: "#E03E41",
            gold: "#EFC74B",
            purple: "#8D6ADF",
            magenta: "#CC669C",
            grey: "#A7A7AF",
            dgrey: "#726F6F",
            white: "#DBDBDB",
            guiblack: "#000000",
            dgreen: "#026600",
            navy: "#000C66",
            ice: "#00F7FF",
            orang: "#FF8000",
            paletteSize: 10,
            border: .65
        };
        let ta = x(7),
            sa = !1;
        const ra = (() => {
                let b = document.createElement("canvas").getContext("2d");
                if (b.measureText) {
                    if (b.measureText("test").emHeightAscent) return (a, c, d = !1) => {
                        c += B.graphical.fontSizeBoost;
                        b.font = "bold " + c + "px Comic Sans MS";
                        a = b.measureText(a);
                        return d ? {
                            width: a.width,
                            height: a.emHeightAscent
                        } : a.width
                    };
                    let a = document.createElement("div");
                    a.style.padding = "0";
                    a.style.margin = "0";
                    a.style.position = "absolute";
                    a.style.visibility = "hidden";
                    document.body.appendChild(a);
                    return (c, d, e = !1) => {
                        d += B.graphical.fontSizeBoost;
                        if (e) return a.style.font = "bold " + d + "px Comic Sans MS", a.innerText = c, {
                            width: a.clientWidth,
                            height: a.clientHeight
                        };
                        b.font = "bold " + d + "px Comic Sans MS";
                        return b.measureText(c).width
                    }
                }
                let a = document.createElement("div");
                a.style.padding = "0";
                a.style.margin = "0";
                a.style.position = "absolute";
                a.style.visibility = "hidden";
                a.style.whiteSpace = "pre";
                document.body.appendChild(a);
                return (b, d, e = !1) => {
                    d += B.graphical.fontSizeBoost;
                    a.style.font = "bold " + d + "px Comic Sans MS";
                    return e ? {
                        width: a.clientWidth,
                        height: a.clientHeight
                    } : a.clientWidth
                }
            })(),
            w = (() => {
                let b = (b = null) => {
                    let a = !0;
                    return {
                        update: c => {
                            let d = !1;
                            if (null == b) d = !0;
                            else switch (typeof c !== typeof b && (d = !0), typeof c) {
                                case "number":
                                case "string":
                                    c !== b && (d = !0);
                                    break;
                                case "object":
                                    if (Array.isArray(c)) {
                                        if (c.length !==
                                            b.length) d = !0;
                                        else
                                            for (let a = 0, e = c.length; a < e; a++) c[a] !== b[a] && (d = !0);
                                        break
                                    }
                                    default:
                                        throw console.error(c), Error("Unsupported type for a floppyvar!");
                            }
                            d && (a = !0, b = c)
                        },
                        publish: () => b,
                        check: () => a ? (a = !1, !0) : !1
                    }
                };
                return () => {
                    let a = document.createElement("canvas").getContext("2d");
                    a.imageSmoothingEnabled = !1;
                    let c = [b(""), b(0), b(0), b(1), b("#FF0000"), b("left")];
                    c.map(b => b.publish());
                    let d = 0,
                        e = 0;
                    return {
                        draw: (b, g, h, k, t, u = "left", v = !1) => {
                            k += B.graphical.fontSizeBoost;
                            c[0].update(b);
                            c[1].update(g);
                            c[2].update(h);
                            c[3].update(k);
                            c[4].update(t);
                            c[5].update(u);
                            if (c.some(b => b.check())) {
                                let c = Math.max(3, k / 5),
                                    f = ra(b, k - B.graphical.fontSizeBoost, !0);
                                a.canvas.height = f.height + 2 * c;
                                a.canvas.width = f.width + 2 * c;
                                switch (u) {
                                    case "left":
                                        d = c;
                                        break;
                                    case "center":
                                        d = a.canvas.width / 2;
                                        break;
                                    case "right":
                                        d = a.canvas.width - c
                                }
                                e = a.canvas.height / 2;
                                a.lineWidth = c;
                                a.font = "bold " + k + "px Arial";
                                a.textAlign = u;
                                a.textBaseline = "middle";
                                a.strokeStyle = l.black;
                                a.fillStyle = t;
                                a.lineCap = "round";
                                a.lineJoin = "round";
                                a.strokeText(b, d, e);
                                a.fillText(b, d, e)
                            }
                            f.drawImage(a.canvas,
                                Math.round(g - d), Math.round(h - e * (v ? 1.05 : 1.5)))
                        }
                    }
                }
            })(),
            ba = (() => {
                function b(b, a, d, e, f, g = 0) {
                    b.beginPath();
                    if (f)
                        if (f instanceof Array) {
                            var c = Math.cos(g);
                            g = Math.sin(g);
                            for (let [h, l] of f) b.lineTo(a + e * (h * c - l * g), d + e * (l * c + h * g));
                            b.closePath()
                        } else {
                            if ("string" === typeof f) {
                                f = new Path2D(f);
                                b.save();
                                b.translate(a, d);
                                b.scale(e, e);
                                b.lineWidth /= e;
                                b.rotate(g);
                                B.graphical.inversedRender ? (b.stroke(f), b.fill(f)) : (b.fill(f), b.stroke(f));
                                b.restore();
                                return
                            }
                            if (0 > f) {
                                0 === f % 2 && (g += Math.PI / f);
                                f = -f;
                                let l = 1 - 6 / (f * f);
                                B.graphical.pointy &&
                                    (b.lineJoin = "miter");
                                b.moveTo(a + e * Math.cos(g), d + e * Math.sin(g));
                                for (let k = 0; k < f; k++) {
                                    c = (k + 1) / f * 2 * Math.PI;
                                    var h = (k + .5) / f * 2 * Math.PI;
                                    b.quadraticCurveTo(a + e * l * Math.cos(h + g), d + e * l * Math.sin(h + g), a + e * Math.cos(c + g), d + e * Math.sin(c + g))
                                }
                                B.graphical.pointy && b.closePath();
                                B.graphical.inversedRender ? (b.stroke(), b.fill()) : (b.fill(), b.stroke());
                                B.graphical.pointy && (b.lineJoin = "round");
                                return
                            }
                            if (0 < f) {
                                0 === f % 2 && (g += Math.PI / f);
                                for (c = 0; c < f; c++) h = c / f * 2 * Math.PI, b.lineTo(a + e * Math.cos(h + g), d + e * Math.sin(h + g));
                                b.closePath()
                            }
                        }
                    else b.arc(a,
                        d, e, 0, 2 * Math.PI);
                    B.graphical.inversedRender ? (b.stroke(), b.fill()) : (b.fill(), b.stroke())
                }
                return (a, c, d, v, r = 1, g = 1, w = 0, m = !1, y = !1, n = !1, F = d.render) => {
                    let h = y || f,
                        t = n ? 1 : F.status.getFade();
                    g = g * v * d.size;
                    let u = M[d.index],
                        q = a,
                        R = c;
                    n = !1 === n ? d : n;
                    if (0 !== t && 0 !== r) {
                        F.expandsWithDeath && (g *= 1 + .5 * (1 - t));
                        if (y !== Ka && (1 !== t || 1 !== r))
                            if (B.graphical.fancyAnimations) h = Ka, h.canvas.width = h.canvas.height = g * u.position.axis + 20 * v, q = h.canvas.width / 2 - g * u.position.axis * u.position.middle.x * Math.cos(w) / 4, R = h.canvas.height / 2 - g * u.position.axis *
                                u.position.middle.x * Math.sin(w) / 4, y = !1;
                            else if (.5 > t * r) return;
                        "object" !== typeof h && (h = f);
                        h.lineCap = "round";
                        h.lineJoin = "round";
                        if (n.turrets.length === u.turrets.length)
                            for (var D = 0; D < u.turrets.length; D++) {
                                var z = u.turrets[D];
                                if (0 === z.layer) {
                                    var x = z.direction + z.angle + w,
                                        A = z.offset * g;
                                    ba(q + A * Math.cos(x), R + A * Math.sin(x), z, v, r, g / v / z.size * z.sizeFactor, n.turrets[D].facing + m * w, m, h, n.turrets[D], F)
                                }
                            } else throw Error("Mismatch turret number with mockup.");
                        n.guns.update();
                        h.lineWidth = Math.max(B.graphical.mininumBorderChunk,
                            v * B.graphical.borderChunk);
                        D = F.status.getColor();
                        x = F.status.getBlend();
                        //BARREL COLOR
                        z = T(l.grey, D, x);
                        //------------
                        D = T(e(d.color), D, x);
                        d.invuln && 100 > (Date.now() - d.invuln) % 200 && (z = T(z, l.vlgrey, .3), D = T(D, l.vlgrey, .3));
                        k(h, z);
                        if (n.guns.length === u.guns.length)
                            for (x = n.guns.getPositions(), A = 0; A < u.guns.length; A++) {
                                var C = u.guns[A],
                                    p = 1 === C.aspect ? x[A] / 2 : x[A]; {
                                    d = h;
                                    z = q + g * (C.offset * Math.cos(C.direction + C.angle + w) + (C.length / 2 - p) * Math.cos(C.angle + w));
                                    p = R + g * (C.offset * Math.sin(C.direction + C.angle + w) + (C.length / 2 - p) * Math.sin(C.angle + w));
                                    var H =
                                        g * (C.length / 2 - (1 === C.aspect ? x[A] : 0)),
                                        E = g * C.width / 2,
                                        G = C.aspect;
                                    C = C.angle + w;
                                    var X = E;
                                    0 < G ? X *= G : 0 > G && (E *= -G);
                                    G = Math.atan2(X, H);
                                    let b = Math.atan2(E, H);
                                    X = Math.sqrt(H * H + X * X);
                                    H = Math.sqrt(H * H + E * E);
                                    d.beginPath();
                                    d.moveTo(z + X * Math.cos(C + G), p + X * Math.sin(C + G));
                                    d.lineTo(z + H * Math.cos(C + Math.PI - b), p + H * Math.sin(C + Math.PI - b));
                                    d.lineTo(z + H * Math.cos(C + Math.PI + b), p + H * Math.sin(C + Math.PI + b));
                                    d.lineTo(z + X * Math.cos(C - G), p + X * Math.sin(C - G));
                                    d.closePath();
                                    B.graphical.inversedRender ? (d.stroke(), d.fill()) : (d.fill(), d.stroke())
                                }
                            } else throw Error("Mismatch gun number with mockup.");
                        h.globalAlpha = 1;
                        k(h, D);
                        b(h, q, R, g / u.size * u.realSize, u.shape, w);
                        if (n.turrets.length === u.turrets.length)
                            for (D = 0; D < u.turrets.length; D++) d = u.turrets[D], 1 === d.layer && (z = d.direction + d.angle + w, x = d.offset * g, ba(q + x * Math.cos(z), R + x * Math.sin(z), d, v, r, g / v / d.size * d.sizeFactor, n.turrets[D].facing + m * w, m, h, n.turrets[D], F));
                        else throw Error("Mismatch turret number with mockup.");
                        y || h === f || (f.save(), f.globalAlpha = r * t, f.drawImage(h.canvas, a - q, c - R), f.restore())
                    }
                }
            })();
        window.requestAnimationFrame || (window.requestAnimationFrame =
            window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(b) {
                window.setTimeout(b, 1E3 / 60)
            });
        const Pa = (() => {
                const a = n(0, .7, 1.5),
                    k = n(0, /*2*/4, 3),
                    c = class {
                        constructor(b, a = !1) {
                            this.color = b;
                            this.zeroMin = a;
                            this.data = []
                        }
                        addValue(b) {
                            this.data.push(b)
                        }
                        draw(b, a, c, d) {
                            for (; this.data.length > c;) this.data.shift();
                            let e = this.zeroMin ? 0 : Math.min(...this.data),
                                g = Math.max(...this.data),
                                h = g - e;
                            if (0 !== h) {
                                0 < g && 0 > e && L(b, b + c, a + d * g / h, 2, l.guiwhite);
                                f.beginPath();
                                f.moveTo(b, a + d * (g -
                                    this.data[0]) / h);
                                for (c = 1; c < this.data.length; c++) f.lineTo(b + c, a + d * (g - this.data[c]) / h);
                                f.lineWidth = 1;
                                f.strokeStyle = this.color;
                                f.stroke()
                            }
                        }
                        getPeriodicAverage() {
                            var b = this.zeroMin ? 0 : Math.min(...this.data),
                                a = Math.max(...this.data);
                            a = .1 * b + .9 * a;
                            var c = !1;
                            b = [];
                            for (var d = this.data.length - 1; 0 <= d; d--) {
                                let e = this.data[d];
                                if (e > a)
                                    if (c) {
                                        let a = b[b.length - 1];
                                        e > a.max && (a.max = e, a.at = d)
                                    } else c = !0, b.push({
                                        max: e,
                                        at: d
                                    });
                                else c && (c = !1)
                            }
                            if (2 > b.length) return null;
                            a = b.pop().at;
                            b = b.pop().at;
                            c = 0;
                            for (d = a; d < b; d++) c += this.data[d];
                            return c / (b - a)
                        }
                    },
                    h = (() => {
                        function a(b, a, c, d, e, f) {
                            e = Math.cos((1 + f) * Math.PI);
                            return .5 * (((1 + f) * c + b) * (e + 1) + (-f * d + a) * (1 - e))
                        }

                        function c(b, a) {
                            var c = 2 * Math.PI;
                            return ((b - a + Math.PI) % c + c) % c - Math.PI
                        }
                        let d = (a = !1, d = K.rendergap) => {
                                a = !1 === a ? Date.now() - K.lastuplink : Date.now() - P - Q - a;
                                d = Math.max(d, 1E3 / B.roomSpeed / 30);
                                let e = b.noPredict ? 1 : a / d;
                                return {
                                    predict: (b, a) => 1 <= e ? a : b + (a - b) * e,
                                    predictExtrapolate: (b, a) => b + (a - b) * e,
                                    predictFacing: (b, a) => 1 <= e ? a : b + c(a, b) * e,
                                    predictFacingExtrapolate: (b, a) => b + c(a, b) * e,
                                    getPrediction: () => e
                                }
                            },
                            e = (b = y.time, d = K.rendergap) => {
                                let e = 0,
                                    f = 0,
                                    g = 0;
                                e = Math.max(Date.now() - P - Q - b - 80, -d);
                                150 < e && (e = 150);
                                f = e / d;
                                g = 30 * B.roomSpeed * e / 1E3;
                                return {
                                    predict: (b, c, d, h) => 0 <= e ? c + (c - b) * f : a(b, c, d, h, g, f),
                                    predictExtrapolate: (b, c, d, h) => 0 <= e ? c + (c - b) * f : a(b, c, d, h, g, f),
                                    predictFacing: (b, a) => b + (1 + f) * c(a, b),
                                    predictFacingExtrapolate: (b, a) => b + (1 + f) * c(a, b),
                                    getPrediction: () => e
                                }
                            };
                        return (...b) => B.lag.newPrediction ? d(...b) : e(...b)
                    })(),
                    t = new c(l.yellow),
                    r = new c(l.orange, !0),
                    g = new c(l.pink),
                    z = new c(l.teal),
                    m = (() => {
                        let b = [];
                        for (let a = 0; a <
                            2 * B.gui.expectedMaxSkillLevel; a++) b.push(Math.log(4 * a / B.gui.expectedMaxSkillLevel + 1) / Math.log(5));
                        return a => b[a]
                    })();
                var D = [w(), w(), w(), w(), w(), w(), w(), w(), w(), w()],
                    x = [w(), w(), w(), w(), w(), w(), w(), w(), w(), w()],
                    R = [w(), w(), w(), w(), w(), w(), w(), w(), w(), w()],
                    p = w(),
                    E = w(),
                    O = w(),
                    S = w(),
                    W = [w(), w(), w(), w(), w(), w(), w()],
                    V = w(),
                    ca = [w(), w(), w(), w(), w(), w(), w(), w(), w(), w()],
                    aa = [w(), w(), w(), w(), w(), w(), w(), w(), w(), w(), w(), w(), w(), w(), w()],
                    ea = [w(), w(), w(), w(), w(), w(), w(), w(), w()],
                    fa = w();
                return c => {
                    Date.now();
                    let d = 0;
                    na++;
                    let u = Math.max(b.screenWidth,
                            16 * b.screenHeight / 9) / (1280 >= b.screenWidth ? 1280 : 1920 <= b.screenWidth ? 1920 : b.screenWidth),
                        n, q; {
                        let b = h();
                        d = b.getPrediction();
                        let a = b.predict(y.lastx, y.cx, y.lastvx, y.vx),
                            e = b.predict(y.lasty, y.cy, y.lastvy, y.vy);
                        y.renderx = a;
                        y.rendery = e;
                        n = c * y.renderx;
                        q = c * y.rendery
                    } {
                        F(l.white, 1);
                        F(l.guiblack, .1);
                        if (b.radial) f.save(), f.translate(b.screenWidth / 2, b.screenHeight / 2), f.rotate(Math.atan2(b.gameWidth / 2 - y.cx, b.gameHeight / 2 - y.cy)), f.translate(b.screenWidth / -2, b.screenHeight / -2), f.globalAlpha = 1, f.fillStyle = l.white,
                            f.beginPath(), f.arc(-n + b.screenWidth / 2 + c * b.gameWidth / 2, -q + b.screenHeight / 2 + c * b.gameHeight / 2, c * b.gameWidth / 2, 0, 2 * Math.PI), f.fill();
                        else {
                            f.globalAlpha = 1;
                            f.fillStyle = l.white;
                            f.fillRect(-n + b.screenWidth / 2, -q + b.screenHeight / 2, c * b.gameWidth, c * b.gameHeight);
                            let a = Z[0].length,
                                d = Z.length;
                            for (let e = 0; e < d; e++) {
                                let g = Z[e];
                                for (let h = 0; h < a; h++) {
                                    let l = c * h * b.gameWidth / a - n + b.screenWidth / 2,
                                        k = c * e * b.gameHeight / d - q + b.screenHeight / 2,
                                        Ga = c * (h + 1) * b.gameWidth / a - n + b.screenWidth / 2,
                                        u = c * (e + 1) * b.gameHeight / d - q + b.screenHeight / 2;
                                    if (!b.radial && (k >= b.screenHeight || 0 >= Ga || l >= b.screenWidth || 0 >= u)) continue;
                                    f.globalAlpha = .3;
                                    let t = v(g[h]);
                                    t !== t.white && (f.fillStyle = t, f.fillRect(l, k, Ga - l, u - k))
                                }
                            }
                        }
                        f.lineWidth = 1;
                        f.strokeStyle = l.guiblack;
                        f.globalAlpha = .04;
                        f.beginPath();
                        let a = 30 * c;
                        if (b.radial) {
                            let d = 30 * Math.ceil(Math.sqrt(b.screenWidth * b.screenWidth + b.screenHeight * b.screenHeight) / c / c / 60) * c;
                            for (let c = (b.screenWidth / 2 - n) % a - d; c < b.screenWidth + d; c += a) f.moveTo(c, -d), f.lineTo(c, d + b.screenHeight);
                            for (let c = (b.screenHeight / 2 - q) % a - d; c < b.screenHeight +
                                d; c += a) f.moveTo(-d, c), f.lineTo(d + b.screenWidth, c)
                        } else {
                            for (let c = (b.screenWidth / 2 - n) % a; c < b.screenWidth; c += a) f.moveTo(c, 0), f.lineTo(c, b.screenHeight);
                            for (let c = (b.screenHeight / 2 - q) % a; c < b.screenHeight; c += a) f.moveTo(0, c), f.lineTo(b.screenWidth, c)
                        }
                        f.stroke();
                        f.globalAlpha = 1;
                        b.radial && f.restore()
                    } {
                        y.x = y.y = null;
                        let a, d;
                        if (b.radial) {
                            f.save();
                            f.translate(b.screenWidth / 2, b.screenHeight / 2);
                            let c = Math.atan2(b.gameWidth / 2 - y.cx, b.gameHeight / 2 - y.cy);
                            a = Math.cos(c);
                            d = Math.sin(c);
                            f.rotate(c)
                        }
                        da.forEach(function(a) {
                            if (a.render.draws) {
                                if (1 ===
                                    a.render.status.getFade()) {
                                    var d = h();
                                    a.render.x = d.predict(a.render.lastx, a.x, a.render.lastvx, a.vx);
                                    a.render.y = d.predict(a.render.lasty, a.y, a.render.lastvy, a.vy);
                                    a.render.f = d.predictFacing(a.render.lastf, a.facing)
                                } else d = h(a.render.lastRender, a.interval), a.render.x = d.predictExtrapolate(a.render.lastx, a.x, a.render.lastvx, a.vx), a.render.y = d.predictExtrapolate(a.render.lasty, a.y, a.render.lastvy, a.vy), a.render.f = d.predictFacingExtrapolate(a.render.lastf, a.facing);
                                a.id === A.playerid && 0 === (a.twiggle & 1) &&
                                    (a.render.f = Math.atan2(U.target.y, U.target.x), b.radial && (a.render.f -= Math.atan2(b.gameWidth / 2 - y.cx, b.gameHeight / 2 - y.cy)), a.twiggle & 2 && (a.render.f += Math.PI));
                                d = c * a.render.x - n;
                                var e = c * a.render.y - q;
                                b.radial ? a.id === A.playerid && (y.x = d + b.screenWidth / 2, y.y = e + b.screenHeight / 2) : (d += b.screenWidth / 2, e += b.screenHeight / 2, a.id === A.playerid && (y.x = d, y.y = e));
                                ba(d, e, a, c, a.id === A.playerid || b.showInvisible ? a.alpha ? .6 * a.alpha + .4 : .25 : a.alpha, 0 === M[a.index].shape ? 1 : B.graphical.compensationScale, a.render.f, !1, !0)
                            }
                        });
                        b.radial &&
                            f.restore();
                        if (!B.graphical.screenshotMode)
                            for (let e of da) {
                                let f = c * e.render.x - n,
                                    g = c * e.render.y - q;
                                if (b.radial) {
                                    let c = a * g + d * f;
                                    f = a * f - d * g + b.screenWidth / 2;
                                    g = c + b.screenHeight / 2
                                } else f += b.screenWidth / 2, g += b.screenHeight / 2;
                                Oa(f, g, e, c, e.id === A.playerid ? 1 : e.alpha)
                            }
                    }
                    if (!b.hideGui) {
                        var H = (a, c) => {
                            b.screenWidth /= a;
                            b.screenHeight /= a;
                            f.scale(a, a);
                            c || (u *= a)
                        };
                        H(u, !0);
                        let spacing = 20;
                        A.__s.update();
                        var N = Da.get(),
                            ma = N.max;
                        do {
                            if (!b.showTree) break;
                            let a = M.find(b => "Basic" === b.name);
                            if (!a) break;
                            let c = [],
                                d = [],
                                g = (b, a, e, {
                                    index: f,
                                    tier: h =
                                        0
                                }) => {
                                    c.push({
                                        x: b,
                                        y: a,
                                        colorIndex: e,
                                        index: f
                                    });
                                    let {
                                        upgrades: k
                                    } = M[f];
                                    switch (h) {
                                        case 3:
                                            return {
                                                width: 1, height: 1
                                            };
                                        case 2:
                                            return k.forEach((c, d) => g(b, a + 2 + d, d, c)), d.push([{
                                                x: b,
                                                y: a
                                            }, {
                                                x: b,
                                                y: a + 1 + k.length
                                            }]), {
                                                width: 1,
                                                height: 2 + k.length
                                            };
                                        case 1:
                                        case 0: {
                                            let c = b;
                                            e = k.map((e, f) => {
                                                let l = 2 * (e.tier - h);
                                                e = g(b, a + l, f, e);
                                                d.push([{
                                                    x: b,
                                                    y: a + (0 === f ? 0 : 1)
                                                }, {
                                                    x: b,
                                                    y: a + l
                                                }]);
                                                f + 1 === k.length && d.push([{
                                                    x: c,
                                                    y: a + 1
                                                }, {
                                                    x: b,
                                                    y: a + 1
                                                }]);
                                                b += e.width;
                                                return e
                                            });
                                            return {
                                                width: e.map(b => b.width).reduce((b, a) => b + a, 0),
                                                height: 2 + Math.max(...e.map(b => b.height))
                                            }
                                        }
                                    }
                                },
                                h = g(0, 0, 0, {
                                    index: a.index
                                }),
                                k = Math.min(.9 * b.screenWidth / h.width, .9 * b.screenHeight / h.height);
                            f.globalAlpha = .5;
                            f.fillStyle = l.guiwhite;
                            G(0, 0, b.screenWidth, b.screenHeight);
                            let v = k - 4;
                            f.strokeStyle = l.black;
                            f.lineWidth = 2;
                            f.beginPath();
                            for (let [a, c] of d) {
                                let d = b.screenWidth / 2 + (c.x - h.width / 2) * k + 1 + .5 * v,
                                    e = b.screenHeight / 2 + (c.y - h.height / 2) * k + 1 + .5 * v;
                                f.moveTo(Math.round(b.screenWidth / 2 + (a.x - h.width / 2) * k + 1 + .5 * v) + .5, Math.round(b.screenHeight / 2 + (a.y - h.height / 2) * k + 1 + .5 * v) + .5);
                                f.lineTo(Math.round(d) + .5, Math.round(e) +
                                    .5)
                            }
                            f.stroke();
                            for (let {
                                    x: a,
                                    y: d,
                                    colorIndex: g,
                                    index: u
                                } of c) {
                                let c = b.screenWidth / 2 + (a - h.width / 2) * k + 2,
                                    t = b.screenHeight / 2 + (d - h.height / 2) * k + 2;
                                f.globalAlpha = 1;
                                f.fillStyle = e(g + 10);
                                G(c, t, v, v);
                                f.globalAlpha = .2;
                                f.fillStyle = e(g);
                                G(c, t, v, .6 * v);
                                f.fillStyle = l.black;
                                G(c, t + .6 * v, v, .4 * v);
                                f.globalAlpha = 1;
                                let r = -Math.PI / 4,
                                    n = C(u, A.color),
                                    q = M[u].position,
                                    m = .8 * v / q.axis;
                                ba(c + .5 * v - m * q.middle.x * Math.cos(r), t + .5 * v - m * q.middle.x * Math.sin(r), n, .5, 1, m / n.size * 2, r, !0);
                                f.strokeStyle = l.black;
                                f.lineWidth = 2;
                                G(c, t, v, v, !0)
                            }
                        } while (0);
                        if (b.mobile &&
                            "joysticks" === U.control) {
                            let a = Math.min(.6 * b.screenWidth, .12 * b.screenHeight);
                            f.globalAlpha = .3;
                            f.fillStyle = "#ffffff";
                            f.beginPath();
                            f.arc(1 * b.screenWidth / 6, 2 * b.screenHeight / 3, a, 0, 2 * Math.PI);
                            f.arc(5 * b.screenWidth / 6, 2 * b.screenHeight / 3, a, 0, 2 * Math.PI);
                            f.fill()
                        }
                        b.mobile && H(1.4); {
                            let c = b.screenWidth / 2,
                                d = 20;
                            b.mobile && (d += (b.canSkill ? (200 / 3 + 20) / 1.4 * a.get() : 0) + (b.canUpgrade ? 120 / 1.4 * k.get() : 0));
                            for (let b = Y.length - 1; 0 <= b; b--) {
                                let a = Y[b],
                                    e = a.text;
                                null == a.textobj && (a.textobj = w());
                                null == a.len && (a.len = ra(e, 14));
                                f.globalAlpha =
                                    .5 * a.alpha;
                                L(c - a.len / 2, c + a.len / 2, d + 9, 18, l.black);
                                f.globalAlpha = Math.min(1, a.alpha);
                                a.textobj.draw(e, c, d + 9, 14, l.guiwhite, "center", !0);
                                d += 22;
                                1 < a.status && (d -= 22 * (1 - Math.sqrt(a.alpha)));
                                1 < a.status ? (a.status -= .05, a.alpha += .05) : 0 === b && (5 < Y.length || 1E4 < Date.now() - a.time) && (a.status -= .05, a.alpha -= .05, 0 >= a.alpha && Y.shift())
                            }
                            f.globalAlpha = 1
                        }
                        b.mobile && H(1 / 1.4);
                        if (!b.mobile) {
                            b.canSkill = 0 < A.points && A.skills.some(b => b.amount < b.cap);
                            a.set(0 + (b.canSkill || b.died || b.statHover));
                            b.clickables.stat.hide();
                            let c = 200,
                                d =
                                c,
                                e = -20 - 2 * c + a.get() * (40 + 2 * c),
                                g = b.screenHeight - 20 - 15,
                                h = 11,
                                k = A.getStatNames(M[A.type].statnames || -1);
                            A.skills.forEach(function(a) {
                                h--;
                                let v = k[h - 1],
                                    t = a.amount,
                                    r = l[a.color];
                                var n = a.softcap;
                                a = a.cap;
                                if (n) {
                                    c = d;
                                    let k = B.gui.expectedMaxSkillLevel;
                                    var q = n < a;
                                    n > k && (k = n);
                                    L(e + 7.5, e - 7.5 + c * m(n), g + 7.5, 12 + B.graphical.barChunk, l.black);
                                    L(e + 7.5, e + 7.5 + (c - 35) * m(n), g + 7.5, 12, l.grey);
                                    L(e + 7.5, e + 7.5 + (c - 35) * m(t), g + 7.5, 11.5, r);
                                    if (q)
                                        for (f.lineWidth = 1, f.strokeStyle = l.grey, q = n + 1; q < k; q++) ja(e + (c - 35) * m(q), g + 1.5, e + (c - 35) * m(q), g - 3 + 15);
                                    f.strokeStyle = l.black;
                                    f.lineWidth = 1;
                                    for (q = 1; q < t + 1; q++) ja(e + (c - 35) * m(q), g + 1.5, e + (c - 35) * m(q), g - 3 + 15);
                                    c = d * m(k);
                                    n = t === a ? r : !A.points || n !== a && t === n ? l.grey : l.guiwhite;
                                    D[h - 1].draw(v, Math.round(e + c / 2) + .5, g + 7.5, 10, n, "center", !0);
                                    x[h - 1].draw("[" + h % 10 + "]", Math.round(e + c - 3.75) - 1.5, g + 7.5, 10, n, "right", !0);
                                    n === l.guiwhite && b.clickables.stat.place(h - 1, e * u, g * u, c * u, 15 * u);
                                    t && R[h - 1].draw(n === r ? "MAX" : "+" + t, Math.round(e + c + 4) + .5, g + 7.5, 10, r, "left", !0);
                                    g -= 19
                                }
                            });
                            b.clickables.hover.place(0, 0, g * u, .8 * c * u, .8 * (b.screenHeight - g) *
                                u);
                            1 < A.points && p.draw("x" + A.points, Math.round(e + c - 2) + .5, Math.round(g + 15 - 4) + .5, 20, l.guiwhite, "right")
                        } {
                            let a = 25,
                                c = (b.screenWidth - 330) / 2,
                                d = b.screenHeight - 20 - a;
                            ha || b.mobile || !b.died || (d -= 110);
                            f.lineWidth = 1;
                            L(c, c + 330, d + a / 2, a - 3 + B.graphical.barChunk, l.black);
                            L(c, c + 330, d + a / 2, a - 3, l.grey);
                            L(c, c + 330 * A.__s.getProgress(), d + a / 2, a - 3.5, l.gold);
                            S.draw("Level " + A.__s.getLevel() + " " + M[A.type].name, c + 165, d + a / 2, a - 4, l.guiwhite, "center", !0);
                            a = 14;
                            d -= a + 4;
                            L(c + 33, c + 297, d + a / 2, a - 3 + B.graphical.barChunk, l.black);
                            L(c + 33, c + 297,
                                d + a / 2, a - 3, l.grey);
                            L(c + 33, c + 330 * (.1 + .8 * (ma ? Math.min(1, A.__s.getScore() / ma) : 1)), d + a / 2, a - 3.5, l.green);
                            E.draw("Score: " + I.formatLargeNumber(A.__s.getScore()), c + 165, d + a / 2, a - 2, l.guiwhite, "center", !0);
                            f.lineWidth = 4;
                            O.draw(y.name, Math.round(c + 165) + .5, Math.round(d - 10 - 4) + .5, 32, l.guiwhite, "center")
                        }
                        b.mobile && H(.8); {
                            let c = 200 / b.gameWidth * b.gameHeight,
                                h = b.screenWidth - 20,
                                u = b.screenHeight - 20,
                                n = (a, c, d, g, h) => {
                                    if (!b.radial) {
                                        let b = Z[0].length,
                                            e = Z.length,
                                            h = d / b,
                                            k = g / e;
                                        for (let d = 0; d < e; d++) {
                                            let e = Z[d];
                                            for (let g = 0; g < b; g++) f.globalAlpha =
                                                .6, f.fillStyle = v(e[g]), G(a + g * h, c + d * k, h, k)
                                        }
                                    }
                                    f.globalAlpha = .3;
                                    f.fillStyle = T(l.grey, l.vlgrey);
                                    b.radial ? G(a + d / 2, c + g / 2, d / 2) : G(a, c, d, g);
                                    for (let g of Ca.get()) f.fillStyle = T(e(g.color), l.black, .3), f.globalAlpha = g.alpha, 2 === g.type ? G(a + (g.x - g.size) / b.gameWidth * d - .4, c + (g.y - g.size) / b.gameWidth * d - 1, 2 * g.size / b.gameWidth * d + .2, 2 * g.size / b.gameWidth * d + .2) : 1 === g.type ? ia(a + g.x / b.gameWidth * d, c + g.y / b.gameWidth * d, g.size / b.gameWidth * d + .2) : g.id !== A.playerid && ia(a + g.x / b.gameWidth * d, c + g.y / b.gameWidth * d, h);
                                    f.fillStyle = l.black;
                                    f.globalAlpha = 1;
                                    ia(a + y.cx / b.gameWidth * d, c + y.cy / b.gameWidth * d, h);
                                    f.strokeStyle = l.black;
                                    f.lineWidth = 3;
                                    b.radial ? ia(a + d / 2, c + g / 2, d / 2, !0) : G(a, c, d, g, !0)
                                };
                            if (b.mobile) {
                                h -= 200;
                                let d = (b.canSkill ? (200 / 3 + 40) * a.get() : 0) + (b.canUpgrade ? 140 * k.get() : 0);
                                n(20, 20 + d, 200, c, 4)
                            } else h -= 200, u -= c, n(h, u, 200, c, 2);
                            let q = u - 10,
                                m = K.latency.reduce((b, a) => b + a, 0) / K.latency.length,
                                w = Math.sqrt(y.vx * y.vx + y.vy * y.vy);
                            b.showDebug && (G(h, u - 40, 200, 30), t.addValue(d), t.draw(h, u - 40, 200, 30), r.addValue(w), r.draw(h, u - 40, 200, 30), z.addValue(K.rendergap),
                                z.draw(h, u - 40, 200, 30), g.addValue(m), g.draw(h, u - 40, 200, 30), q -= 40);
                            if (B.graphical.screenshotMode) W[6].draw("Arras", h + 200, q - 2, 15, l.guiwhite, "right");
                            else {
                                if (b.showDebug) {
                                    W[6].draw("Arras", h + 200, q - 84 - 2, 15, l.ice, "right");
                                    let b = r.getPeriodicAverage();
                                    W[5].draw("Tank Speed: " + w.toFixed(2) + " gu/s" + (b && .005 <= b ? ` (${b.toFixed(2)} gu/s)` : ""), h + 200, q - 70, 10, l.guiwhite, "right");
                                    W[4].draw("Prediction: " + d.toFixed(3), h + 200, q - 56, 10, l.guiwhite, "right");
                                    W[3].draw("Update Rate: " + K.updatetime + "Hz", h + 200, q -
                                        42, 10, l.guiwhite, "right")
                                } else W[6].draw("Arras.io", h + 200, q - 42 - 2, 15, l.guiwhite, "right");
                                W[2].draw("Client Speed: " + K.rendertime + " FPS", h + 200, q - 28, 10, 10 < K.rendertime ? l.guiwhite : l.orange, "right");
                                W[1].draw("Server Speed: " + (100 * A.fps).toFixed(2) + "%", h + 200, q - 14, 10, 1 === A.fps ? l.guiwhite : l.orange, "right");
                                W[0].draw(m.toFixed(1) + " ms  " + b.server.code + " :" + b.server.type + ":", h + 200, q, 10, l.guiwhite, "right")
                            }
                        }
                        b.mobile && H(1.25);
                        b.mobile && H(1.4);
                        if (!B.graphical.screenshotMode) {
                            let c = b.screenWidth - 200 - 20,
                                d = 48;
                            b.mobile &&
                                (d += (b.canSkill ? 200 / 3 / 1.4 * a.get() : 0) + (b.canUpgrade && 40 + 114 * A.upgrades.length > 1.4 * c ? 100 / 1.4 * k.get() : 0));
                            0 < N.data.length && V.draw("Leaderboard", Math.round(c + 100) + .5, Math.round(d - 10) + .5, 18, l.guiwhite, "center");
                            for (let a = 0; a < N.data.length && (!b.mobile || 6 > a); a++) {
                                let b = N.data[a];
                                L(c, c + 200, d + 7, 11 + B.graphical.barChunk, l.black);
                                L(c, c + 200, d + 7, 11, l.grey);
                                L(c, c + 200 * Math.min(1, b.score / ma), d + 7, 10.5, b.barColor);
                                ca[a].draw(b.label + ": " + I.handleLargeNumber(Math.round(b.score)), c + 100, d + 7, 9, l.guiwhite, "center", !0);
                                let e =
                                    14 / b.position.axis;
                                ba(c - 21 - e * b.position.middle.x * .707, d + 7 + e * b.position.middle.x * .707, b.image, 1 / e, 1, e * e / b.image.size, -Math.PI / 4, !0);
                                d += 18
                            }
                        }
                        b.mobile && H(1 / 1.4); {
                            b.canUpgrade = 0 < A.upgrades.length && !(b.mobile && b.died);
                            k.set(+b.canUpgrade);
                            let a = k.get();
                            b.clickables.upgrade.hide();
                            if (b.canUpgrade) {
                                let c = 40 * a - 20,
                                    d = 20,
                                    g = c,
                                    h = 0,
                                    k = d,
                                    v = 0;
                                ka += .01;
                                let t = 0,
                                    q = 0;
                                A.upgrades.forEach(n => {
                                    d > k && (k = d);
                                    h = c;
                                    b.clickables.upgrade.place(q++, c * u, d * u, 100 * u, 100 * u);
                                    f.globalAlpha = .5;
                                    f.fillStyle = e(t + 10);
                                    G(c, d, 100, 100);
                                    f.globalAlpha =
                                        .1;
                                    f.fillStyle = e(t);
                                    t++;
                                    G(c, d, 100, 60);
                                    f.fillStyle = l.black;
                                    G(c, d + 60, 100, 40);
                                    f.globalAlpha = 1;
                                    let r = C(n, A.color);
                                    n = M[n].position;
                                    let m = 60 / n.axis;
                                    ba(c + 50 - m * n.middle.x * Math.cos(ka), d + 50 - m * n.middle.x * Math.sin(ka), r, 1, 1, m / r.size, ka, !0);
                                    n = (b.help[`KEY_CHOOSE_${v+1}`] || "").toLowerCase().trim();
                                    !b.mobile && n ? (aa[q - 1].draw(r.name, c + 45, d + 100 - 6, 9.5, l.guiwhite, "center"), ea[q - 1].draw("[" + n + "]", c + 100 - 4, d + 100 - 6, 9.5, l.guiwhite, "right")) : aa[q - 1].draw(r.name, c + 50, d + 100 - 6, 9.5, l.guiwhite, "center");
                                    f.strokeStyle = l.black;
                                    f.globalAlpha = 1;
                                    f.lineWidth = 3;
                                    G(c, d, 100, 100, !0);
                                    0 !== ++v % 5 || b.mobile ? c += 114 * a : (c = g, d += 114)
                                });
                                let n = ra("Don't Upgrade", 11) + 10,
                                    r = (h + 100 + 14 + g - 15) / 2,
                                    m = k + 100 + 14;
                                L(r - n / 2, r + n / 2, m + 7, 14 + B.graphical.barChunk, l.black);
                                L(r - n / 2, r + n / 2, m + 7, 14, l.white);
                                fa.draw("Don't Upgrade", r, m + 7, 12, l.guiwhite, "center", !0);
                                b.clickables.skipUpgrades.place(0, (r - n / 2) * u, m * u, n * u, 14 * u)
                            } else b.clickables.upgrade.hide(), b.clickables.skipUpgrades.hide()
                        }
                         // ===============================================================================
        // Chat System.        
        // ===============================================================================        
        { // Draw chat messages
            let vspacing = 4;
            let len = 0;
            let height = 22; //18;
            // 3/5 of the screen width.
            let x = e.screenWidth * 3/5;
            // One-third of the screen height.
            let y = (e.screenHeight * 1/3) + spacing;
            // Draw each message
            for (let i = chatMessages.length - 1; i >= 0; i--) 
            {
                let msg = chatMessages[i],
                    txt = msg.text,
                    text = txt;
                // Give it a textobj if it doesn't have one
                if (msg.textobj == null) msg.textobj = TextObj();
                if (msg.len == null) msg.len = measureText(text, height - 4);
                // Draw the background                
                f.globalAlpha = 0.5 * msg.alpha;                
                L(x - 2, x + msg.len + 2, y + height / 2, height, l.blue);

                // Draw the text
                f.globalAlpha = Math.min(1, msg.alpha);                
                msg.textobj.draw(text, x, y + height / 2, height - 4, l.red, 'left', true);
                
                // Iterate and move
                y += (vspacing + height);
                if (msg.status > 1) {
                    y -= (vspacing + height) * (1 - Math.sqrt(msg.alpha));
                }
                if (msg.status > 1) {
                    msg.status -= 0.05;
                    msg.alpha += 0.05;
                } else if (i === 0 && (chatMessages.length > 5 || Date.now() - msg.time > 10000)) {
                    msg.status -= 0.05;
                    msg.alpha -= 0.05;
                    // Remove
                    if (msg.alpha <- 0) {
                      chatMessages[0].textobj.remove;
                        chatMessages.splice(0, 1);
                    }
                }
            }
            f.globalAlpha = 1;
        }
        // ===============================================================================

                        if (b.mobile) {
                            b.canSkill = 0 < A.points && A.skills.some(b => b.amount < b.cap) && !b.canUpgrade;
                            a.set(0 + (b.canSkill || b.died));
                            let c = a.get();
                            b.clickables.stat.hide();
                            let d = 200 / 3,
                                e = 40 * c - 20,
                                g = 0,
                                h = A.getStatNames(M[A.type].statnames || -1);
                            b.canSkill && (A.skills.forEach((a, k) => {
                                let v = a.softcap;
                                if (!(0 >= v)) {
                                    var n = a.amount,
                                        t = l[a.color];
                                    a = a.cap;
                                    var q = h[9 - k].split(/\s+/),
                                        r = Math.floor(q.length / 2),
                                        [m, w] = 1 === q.length ? [q, null] : [q.slice(0, r), q.slice(r)];
                                    f.globalAlpha = .5;
                                    f.fillStyle = t;
                                    G(e, 20, 100, 2 * d / 3);
                                    f.globalAlpha = .1;
                                    f.fillStyle = l.black;
                                    G(e, 20 + 2 * d / 3 * 2 / 3, 100, 2 * d / 3 / 3);
                                    f.globalAlpha = 1;
                                    f.fillStyle = l.guiwhite;
                                    G(e,
                                        20 + 2 * d / 3, 100, 1 * d / 3);
                                    f.fillStyle = t;
                                    G(e, 20 + 2 * d / 3, 100 * n / v, 1 * d / 3);
                                    f.strokeStyle = l.black;
                                    f.lineWidth = 1;
                                    for (q = 1; q < a; q++) r = e + q / v * 100, ja(r, 20 + 2 * d / 3, r, 20 + d);
                                    n === a || !A.points || v !== a && n === v || b.clickables.stat.place(9 - k, e * u, 20 * u, 100 * u, d * u);
                                    w ? (D[k].draw(w, e + 50, 20 + .55 * d, d / 6, l.guiwhite, "center"), D[k].draw(m, e + 50, 20 + .3 * d, d / 6, l.guiwhite, "center")) : D[k].draw(m, e + 50, 20 + .425 * d, d / 6, l.guiwhite, "center");
                                    0 < n && R[k].draw(n >= v ? "MAX" : "+" + n, Math.round(e + 50) + .5, 20 + 1.3 * d, d / 4, t, "center");
                                    f.strokeStyle = l.black;
                                    f.globalAlpha = 1;
                                    f.lineWidth =
                                        3;
                                    ja(e, 20 + 2 * d / 3, e + 100, 20 + 2 * d / 3);
                                    G(e, 20, 100, d, !0);
                                    e += 114 * c;
                                    g++
                                }
                            }), 1 < A.points && p.draw("x" + A.points, Math.round(e) + .5, 40.5, 20, l.guiwhite, "left"))
                        }
                        H(1 / u, !0)
                    }
                }
            })(),
            Ra = (() => {
                var a = w(),
                    e = w(),
                    c = w(),
                    f = w(),
                    k = w(),
                    v = w(),
                    g = w();
                let n = () => {
                        let a = [Math.round(b.finalKills[0].get()), Math.round(b.finalKills[1].get()), Math.round(b.finalKills[2].get())];
                        var c = a[0] + .5 * a[1] + 3 * a[2];
                        let d = (0 === c ? "\ud83c\udf3c" : 4 > c ? "\ud83c\udfaf" : 8 > c ? "\ud83d\udca5" : 15 > c ? "\ud83d\udca2" : 25 > c ? "\ud83d\udd25" : 50 > c ? "\ud83d\udca3" : 75 > c ? "\ud83d\udc7a" :
                            100 > c ? "\ud83c\udf36\ufe0f" : "\ud83d\udcaf") + " ";
                        if (0 === c) return d + "A true pacifist";
                        c = [];
                        a[0] && c.push(a[0] + " kills");
                        a[1] && c.push(a[1] + " assists");
                        a[2] && c.push(a[2] + " visitors defeated");
                        return d + c.join(" and ")
                    },
                    r = () => b.finalKillers.length ? "\ud83d\udd2a Succumbed to " + b.finalKillers.map(b => I.addArticle(M[b].name)).join(" and ") : "\ud83e\udd37 Well that was kinda dumb huh";
                return () => {
                    F(l.black, .25);
                    let d = b.screenWidth / 2,
                        h = b.screenHeight / 2 - 50;
                    var u = C(A.type, A.color);
                    let t = M[A.type].position,
                        q = 140 / t.axis;
                    ba(b.screenWidth / 2 - q * t.middle.x * .707 - 190 - 70, b.screenHeight / 2 - 35 + q * t.middle.x * .707 - 10, u, 1.5, 1, .5 * q / u.realSize, -Math.PI / 4, !0);
                    a.draw("oof", d, h - 80, 8, l.guiwhite, "center");
                    e.draw("Level " + A.__s.getLevel() + " " + M[A.type].name, d - 170, h - 30, 24, l.guiwhite);
                    c.draw("Final score: " + I.formatLargeNumber(Math.round(b.finalScore.get())), d - 170, h + 25, 50, l.guiwhite);
                    f.draw("\u231a Survived for " + I.timeForHumans(Math.round(b.finalLifetime.get())), d - 170, h + 55, 16, l.guiwhite);
                    k.draw(n(), d - 170, h + 77, 16, l.guiwhite);
                    v.draw(r(),
                        d - 170, h + 99, 16, l.guiwhite);
                    u = Math.ceil((b.respawnOn - Date.now()) / 1E3);
                    g.draw(0 < u ? `You may respawn in ${u} second${1===u?"":"s"}` : "joysticks" === U.control ? "Tap to respawn!" : "Press enter to respawn!", d, h + 125, 16, l.guiwhite, "center")
                }
            })();
        window.onbeforeunload = () => b.isInGame && !b.died ? !0 : null;
        window.$createProfile = (() => {
            var b = w();
            w();
            return (a, c = -1, d = 200, k = -Math.PI / 4) => {
                let h = f.canvas.width,
                    g = f.canvas.height,
                    v = f.canvas.width = d;
                d = f.canvas.height = d; - 1 === c ? f.clearRect(0, 0, v, d) : (f.fillStyle = l.white, f.fillRect(0,
                    0, v, d), f.globalAlpha = .5, f.fillStyle = e(c + 10), G(0, 0, v, d), f.globalAlpha = .1, f.fillStyle = e(c), G(0, 0, v, .6 * d), f.fillStyle = l.black, G(0, .6 * d, v, .4 * d), f.globalAlpha = 1);
                let n = C(a, A.color);
                a = M[a].position;
                let u = .6 * v / a.axis;
                ba(.5 * v - u * a.middle.x * Math.cos(k), .5 * d - u * a.middle.x * Math.sin(k), n, 1, 1, u / n.size, k, !0); - 1 !== c && (b.draw(n.name, .9 * v / 2, d - 6, d / 8 - 3, l.guiwhite, "center"), f.strokeStyle = l.black, f.globalAlpha = 1, f.lineWidth = 3, G(0, 0, v, d, !0));
                c = f.canvas.toDataURL();
                f.canvas.width = h;
                f.canvas.height = g;
                return c
            }
        })();
        const Qa =
            (() => {
                var a = w(),
                    e = w();
                w();
                var c = [ //You can change the tips lol
                    ["Tip: You can view and edit your keybinds in the options menu.", "Tip: You can play on mobile by just going to arras.io on your phone!"],
                    ["Tip: You can have the shield and health bar be separated by going to the options menu.", "Tip: If Arras is having a low frame rate, you can try enabling low graphics in the options menu.", "Tip: You can make traps rounded with the classic trap setting in the options menu."
                    ],
                    ["Teaming in FFA or FFA Maze is frowned upon, but when taken to the extremes, you can be punished.", "Witch hunting is when you continuously target someone and follow them. This is frowned upon, but when taken to the extremes, you can be punished.", "Multiboxing is when you use a script to control multiple tanks at the same time. This is considered CHEATING and will result in a ban."]
                ];
                c = c[Math.floor(Math.random() *
                    c.length)];
                let f = c[Math.floor(Math.random() * c.length)];
                return () => {
                    F(l.white, .5);
                    a.draw("Connecting...", b.screenWidth / 2, b.screenHeight / 2, 30, l.guiwhite, "center");
                    e.draw(b.message, b.screenWidth / 2, b.screenHeight / 2 + 30, 15, l.lgreen, "center");
                    e.draw(f, b.screenWidth / 2, b.screenHeight / 2 + 75, 15, l.guiwhite, "center")
                }
            })(),
            Sa = (() => {
                var a = w(),
                    e = w();
                return () => {
                    F(T(l.red, l.guiblack, .3), .25);
                    a.draw("\ud83d\udc80 Disconnected \ud83d\udc80", b.screenWidth / 2, b.screenHeight / 2, 30, l.guiwhite, "center");
                    e.draw(b.message, b.screenWidth /
                        2, b.screenHeight / 2 + 30, 15, l.orange, "center")
                }
            })();
        let Ma = b.mobile ? 0 : Math.max(0, 1 - Math.abs(Date.now() - new Date(2019, 11, 25)) / 20736E5);
        if (Ma) {
            let a = document.createElement("canvas");
            a.style.position = "absolute";
            a.style.top = "0";
            document.body.insertBefore(a, document.body.firstChild);
            let e = a.getContext("2d"),
                c = [],
                f = () => {
                    a.width !== window.innerWidth && (a.width = window.innerWidth);
                    a.height !== window.innerHeight && (a.height = window.innerHeight);
                    e.clearRect(0, 0, a.width, a.height);
                    e.fillStyle = "#ffffff";
                    for (let b of c) {
                        b.x +=
                            5 / b.r + Math.random();
                        b.y += 12.5 / b.r + Math.random();
                        let c = 2 * Math.min(.4, .9 - b.y / a.height);
                        0 < c ? (e.globalAlpha = c, e.beginPath(), e.arc(b.x, b.y, b.r, 0, 2 * Math.PI), e.fill()) : b.gone = !0
                    }
                    .001 * a.width * Ma > Math.random() && c.push({
                        x: a.width * (1.5 * Math.random() - .5),
                        y: -50 - 100 * Math.random(),
                        r: 2 + Math.random() * Math.random() * 4
                    });
                    b.gameStart ? a.remove() : requestAnimationFrame(f)
                };
            setInterval(() => {
                c = c.filter(a => !a.gone)
            }, 2E3);
            f()
        }
        let ca = new Date,
            bb = "en-US" === navigator.language && -7 <= b.timezone && -4 >= b.timezone,
            cb = 6 === ca.getMonth() &&
            4 === ca.getDate(),
            db = 11 === ca.getMonth() && 31 === ca.getDate() || 0 === ca.getMonth() && 3 >= ca.getDate();
        if (!b.mobile && (cb && bb || db)) {
            let a = document.createElement("canvas");
            a.style.position = "absolute";
            a.style.top = "0";
            document.body.insertBefore(a, document.body.firstChild);
            let e = a.getContext("2d"),
                c = [
                    [164, 14, 14],
                    [230, 80, 0],
                    [230, 119, 0],
                    [47, 127, 51],
                    [23, 78, 166],
                    [123, 31, 163]
                ],
                f = [],
                k = () => {
                    if (a.width !== window.innerWidth || a.height !== window.innerHeight) a.width = window.innerWidth, a.height = window.innerHeight, f.length = 0, e.clearRect(0,
                        0, a.width, a.height), e.fillStyle = "rgba(255, 255, 255, 0.01)", e.fillRect(0, 0, a.width, a.height), e.lineWidth = 2.5, e.lineCap = "round";
                    e.globalCompositeOperation = "destination-out";
                    e.fillStyle = "rgba(0, 0, 0, 0.15)";
                    e.fillRect(0, 0, a.width, a.height);
                    e.globalCompositeOperation = "lighter";
                    for (let a of f) {
                        var d = a.x,
                            g = a.y;
                        a.vy += .2;
                        a.x += a.vx;
                        a.y += a.vy;
                        a.vy *= .99;
                        a.vx *= .99;
                        a.time--;
                        var h = 0 < a.time ? a.primary ? 1 : 10 <= a.time ? 1 : a.time / 10 : 0;
                        if (0 < h) e.strokeStyle = `rgba(${a.color[0]}, ${a.color[1]}, ${a.color[2]}, ${h})`, e.beginPath(),
                            e.moveTo(d, g), e.lineTo(a.x, a.y), e.stroke();
                        else {
                            if (a.primary && !a.gone) {
                                d = Math.floor(5 * Math.random()) + 30;
                                g = .5 * Math.random() + 3;
                                h = 25 + 5 * Math.random();
                                for (let b of [c[Math.floor(Math.random() * c.length)], c[Math.floor(Math.random() * c.length)]])
                                    for (let c = 0; c < d; c++) {
                                        let e = (c + Math.random()) / d * Math.PI * 2,
                                            k = g + .5 * Math.random();
                                        f.push({
                                            color: b,
                                            x: a.x,
                                            y: a.y,
                                            vx: Math.cos(e) * k,
                                            vy: -.8 + Math.sin(e) * k,
                                            time: h + 2 * Math.random()
                                        })
                                    }
                            }
                            a.gone = !0
                        }
                    }
                    3E-5 * a.width > Math.random() && f.push({
                        color: c[Math.floor(Math.random() * c.length)],
                        x: a.width *
                            Math.random(),
                        y: a.height - 10,
                        vx: 4 * Math.random() - 2,
                        vy: 5 * Math.random() - 15,
                        time: 30 + 10 * Math.random(),
                        primary: !0
                    });
                    b.gameStart ? a.remove() : requestAnimationFrame(k)
                };
            setInterval(() => {
                f = f.filter(a => !a.gone)
            }, 2E3);
            k()
        }
    }, function(p) {
        const m = {
            openshift: (a, e) => `n-${a}-${e}.7e14.starter-us-west-2.openshiftapps.com`,
            glitch: a => `${a}.glitch.me`,
            heroku: a => `${a}.herokuapp.com`, //searches for your project on these platforms
            arras: (a, e = 5E3) => `ip-${a}.arras.io:${e}`
        };
        var x = (new Date).getDate();
        const a = 25 <= x ? 3 : 0;
        x = 25 <= x ? 0 : 3;
        const e = {
            help: {
                KEY_CHOOSE_1: "Y",
                KEY_CHOOSE_2: "U",
                KEY_CHOOSE_3: "I",
                KEY_CHOOSE_4: "H",
                KEY_CHOOSE_5: "J",
                KEY_CHOOSE_6: "K"
            },
            KEY_AUTO_FIRE: 69,
            KEY_AUTO_SPIN: 67,
            KEY_OVER_RIDE: 82,
            KEY_LEVEL_UP: 78,
            KEY_REVERSE_TANK: 220,
            KEY_REVERSE_MOUSE: 221,
            KEY_SCREENSHOT: 81,
            KEY_UPGRADE_MAX: 77,
            KEY_LOL: 84,
            KEY_RECORD: 90,
            KEY_UP: 87,
            KEY_PING: 76,
            KEY_LEFT: 65,
            KEY_DOWN: 83,
            KEY_RIGHT: 68,
            KEY_CHOOSE_1: 89,
            KEY_CHOOSE_2: 85,
            KEY_CHOOSE_3: 73,
            KEY_CHOOSE_4: 72,
            KEY_CHOOSE_5: 74,
            KEY_CHOOSE_6: 75,
            KEY_CHOOSE_7: -1,
            KEY_CHOOSE_8: -1,
            KEY_CHOOSE_9: -1,
            KEY_ENTER: 13,
            KEY_SPAWN: 13,
            KEY_LEFT_ARROW: 37,
            KEY_UP_ARROW: 38,
            KEY_RIGHT_ARROW: 39,
            KEY_DOWN_ARROW: 40,
            KEY_UPGRADE_ATK: 49,
            KEY_UPGRADE_HTL: 50,
            KEY_UPGRADE_SPD: 51,
            KEY_UPGRADE_STR: 52,
            KEY_UPGRADE_PEN: 53,
            KEY_UPGRADE_DAM: 54,
            KEY_UPGRADE_RLD: 55,
            KEY_UPGRADE_MOB: 56,
            KEY_UPGRADE_RGN: 57,
            KEY_UPGRADE_SHI: 48,
            KEY_MOUSE_0: 32,
            KEY_MOUSE_1: 9,
            KEY_MOUSE_2: 16,
            KEY_FUCK_YOU: 192,
            KEY_KILL_YOURSELF: 79,
            KEY_NO_U: 88,
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            gameWidth: 0,
            gameHeight: 0,
            gameStart: !1,
            disconnected: !1,
            died: !1,
            showDebug: !1,
            showTree: !1,
            isChatMode: true,
            server: null,
            codeTable: [{
                    z: "Private",
                    local: "Local",
                    glitch: "Glitch",
                    os: "OpenShift",
                    linode: "Linode",
                    vultr: "Vultr",
                    buyvm: "BuyVM",
                    extravm: "ExtraVM",
                    ovh: "OVH",
                    exc: "ExC's Server",
                }, {
                    unknown: ["Unknown", null],
                    local: ["Local", null],
                    sv: ["US West", -7],
                    la: ["US West", -7],
                    1: ["US East", 2],   
                    singapore: ["Asia", 8],
                    
                  
                },
                [ //Gamemode Names
                    [{
                        id: "p",
                        to: "Private"
                    }],
                    [{
                        id: "e",
                        dynamic: "word"
                    }],
                    [{
                        id: "w",
                        dynamic: "words"
                    }],
                    [{
                        id: "o",
                        to: "Open 3TDM"
                    }],
                    [{
                        id: "m",
                        to: "Maze",
                        delay: !0,
                        remove: "f"
                    }],
                    [{
                        id: "f",
                        to: "FFA"
                    }, {
                      id: "1",
                        to: "1 Team",
                        end: "1TDM"
                    }, {
                        id: "2",
                        to: "2 Team",
                        end: "2TDM"
                    }, {
                        id: "3",
                        to: "3 Team",
                        end: "3TDM"
                    }, {
                        id: "4",
                        to: "4 Team",
                        end: "4TDM"
                    }],
                    [{
                        id: "d",
                        to: "Domination"
                    }, {
                        id: "m",
                        to: "Mothership",
                        remove: "2"
                    }, {
                        id: "a",
                        to: "Assault",
                        remove: "2"
                    }]
                ]
            ],
            timezone: (new Date).getTimezoneOffset() / -60,
            servers: [{ //The glitch servers that it connects to (The one with id: z is for private servers that you can connect to it.)
                    id: "z",
                    type: "0unk",
                    code: "z-unknown-pe6server",
                    at: "private",
                    untrusted: !0,
                    secure: -1
                }, {
                    visible: 0,
                    id: "a",
                    type: "FFA",
                    code: "exc-1-ffa",
                    at: m.heroku("exc10"),
                    untrusted: !0,
                    secure: -1,
                    prefer: !0,
                    //featured: !0 (Add this if you want the server to show golden on the menu)
                },
            ].map((a,
                e) => ({
                data: a,
                i: e
            })).sort((a, e) => a.data.type < e.data.type ? -1 : e.data.type > a.data.type ? 1 : a.i - e.i).map(({
                data: a
            }) => a),
            partyLink: 0,
            mobile: /android|mobi/i.test(navigator.userAgent),
            showInvisible: !1
        };
        window.Arras = (a = !0) => a || e;
        p.exports = e
    }, function(p, m) {
        let x = window.localStorage || {};
        m.submitToLocalStorage = a => {
            x[a + "Value"] = document.getElementById(a).value || "";
            x[a + "Checked"] = document.getElementById(a).checked || "false";
            return !1
        };
        m.retrieveFromLocalStorage = (a, e = !1) => {
            document.getElementById(a).value = x[a + "Value"] ||
                "";
            document.getElementById(a).checked = "true" === (x[a + "Checked"] || e.toString());
            return !1
        };
        m.handleLargeNumber = (a, e = !1) => e && 0 >= a ? "" : 1E3 > a ? a.toFixed(0) + "" : 1E6 > a ? (a / 1E3).toFixed(2) + "K" : 1E9 > a ? (a / 1E6).toFixed(2) + "M" : 1E12 > a ? (a / 1E9).toFixed(2) + "B" : 1E15 > a ? (a / 1E12).toFixed(2) + "T" : 1E18 > a ? (a / 1E15).toFixed(2) + "Q" : 1E21 > a ? (a / 1E18).toFixed(2) + "Qi" : 1E24 > a ? (a / 1E21).toFixed(2) + "S" : 1E27 > a ? (a / 1E24).toFixed(2) + "St" : 1E30 > a ? (a / 1E27).toFixed(2) + "O" : 1E33 > a ? (a / 1E30).toFixed(2) + "N" : 1E36 > a ? (a / 1E33).toFixed(2) + "D" : "\u221e";
        m.timeForHumans = a => {
            function e(a, e) {
                a && (C = C + ("" === C ? "" : ", ") + a + " " + e + (1 < a ? "s" : ""))
            }
            let m = a % 60;
            a = Math.floor(a / 60);
            let v = a % 60;
            a = Math.floor(a / 60);
            let k = a % 24;
            a = Math.floor(a / 24);
            let C = "";
            if (300 < a) return "omg thats so long";
            e(a, "day");
            e(k, "hour");
            e(v, "minute");
            e(m, "second");
            "" === C && (C = "less than a second");
            return C
        };
        m.addArticle = a => /^\s*[aeiouAEIOU]/.test(a) ? "an " + a : "a " + a;
        m.formatLargeNumber = a => 1E36 > a ? a.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "\u221e";
        m.pullJSON = a => {
            if (window.fetch) return fetch(a, {
                cache: "no-cache"
            }).then(a => a.json());
            let e = new XMLHttpRequest;
            console.log("Loading JSON from " + a);
            e.responseType = "json";
            return new Promise((m, v) => {
                e.open("GET", a);
                e.onload = () => {
                    m(e.response);
                    console.log("JSON load complete.")
                };
                e.onerror = () => {
                    v(e.statusText);
                    console.log("JSON load failed.");
                    console.log(e.statusText)
                };
                e.send()
            })
        }
    }, function(p, m) {
        (function(x) {
            function a(a) {
                function e() {
                    setTimeout(function() {
                        !0 === v._options.checkOnLoad && (!0 === v._options.debug && v._log("onload->eventCallback", "A check loading is launched"), null === v._var.bait && v._creatBait(), setTimeout(function() {
                            v.check()
                        }, 1))
                    }, 1)
                }
                this._options = {
                    checkOnLoad: !1,
                    resetOnEnd: !1,
                    loopCheckTime: 50,
                    loopMaxNumber: 5,
                    baitClass: "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",
                    baitStyle: "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;",
                    debug: !1
                };
                this._var = {
                    version: "3.2.1",
                    bait: null,
                    checking: !1,
                    loop: null,
                    loopNumber: 0,
                    event: {
                        detected: [],
                        notDetected: []
                    }
                };
                void 0 !== a && this.setOption(a);
                var v = this;
                void 0 !== x.addEventListener ? x.addEventListener("load", e, !1) : x.attachEvent("onload", e)
            }
            a.prototype._options = null;
            a.prototype._var = null;
            a.prototype._bait = null;
            a.prototype._log = function(a, m) {
                console.log("[BlockAdBlock][" +
                    a + "] " + m)
            };
            a.prototype.setOption = function(a, m) {
                if (void 0 !== m) {
                    var e = a;
                    a = {};
                    a[e] = m
                }
                for (var k in a) this._options[k] = a[k], !0 === this._options.debug && this._log("setOption", 'The option "' + k + '" he was assigned to "' + a[k] + '"');
                return this
            };
            a.prototype._creatBait = function() {
                var a = document.createElement("div");
                a.setAttribute("class", this._options.baitClass);
                a.setAttribute("style", this._options.baitStyle);
                this._var.bait = x.document.body.appendChild(a);
                this._var.bait.offsetParent;
                this._var.bait.offsetHeight;
                this._var.bait.offsetLeft;
                this._var.bait.offsetTop;
                this._var.bait.offsetWidth;
                this._var.bait.clientHeight;
                this._var.bait.clientWidth;
                !0 === this._options.debug && this._log("_creatBait", "Bait has been created")
            };
            a.prototype._destroyBait = function() {
                x.document.body.removeChild(this._var.bait);
                this._var.bait = null;
                !0 === this._options.debug && this._log("_destroyBait", "Bait has been removed")
            };
            a.prototype.check = function(a) {
                void 0 === a && (a = !0);
                !0 === this._options.debug && this._log("check", "An audit was requested " + (!0 === a ? "with a" : "without") +
                    " loop");
                if (!0 === this._var.checking) return !0 === this._options.debug && this._log("check", "A check was canceled because there is already an ongoing"), !1;
                this._var.checking = !0;
                null === this._var.bait && this._creatBait();
                var e = this;
                this._var.loopNumber = 0;
                !0 === a && (this._var.loop = setInterval(function() {
                    e._checkBait(a)
                }, this._options.loopCheckTime));
                setTimeout(function() {
                    e._checkBait(a)
                }, 1);
                !0 === this._options.debug && this._log("check", "A check is in progress ...");
                return !0
            };
            a.prototype._checkBait = function(a) {
                var e = !1;
                null === this._var.bait && this._creatBait();
                if (null !== x.document.body.getAttribute("abp") || null === this._var.bait.offsetParent || 0 == this._var.bait.offsetHeight || 0 == this._var.bait.offsetLeft || 0 == this._var.bait.offsetTop || 0 == this._var.bait.offsetWidth || 0 == this._var.bait.clientHeight || 0 == this._var.bait.clientWidth) e = !0;
                if (void 0 !== x.getComputedStyle) {
                    var v = x.getComputedStyle(this._var.bait, null);
                    !v || "none" != v.getPropertyValue("display") && "hidden" != v.getPropertyValue("visibility") || (e = !0)
                }!0 === this._options.debug &&
                    this._log("_checkBait", "A check (" + (this._var.loopNumber + 1) + "/" + this._options.loopMaxNumber + " ~" + (1 + this._var.loopNumber * this._options.loopCheckTime) + "ms) was conducted and detection is " + (!0 === e ? "positive" : "negative"));
                !0 === a && (this._var.loopNumber++, this._var.loopNumber >= this._options.loopMaxNumber && this._stopLoop());
                if (!0 === e) this._stopLoop(), this._destroyBait(), this.emitEvent(!0), !0 === a && (this._var.checking = !1);
                else if (null === this._var.loop || !1 === a) this._destroyBait(), this.emitEvent(!1), !0 ===
                    a && (this._var.checking = !1)
            };
            a.prototype._stopLoop = function() {
                clearInterval(this._var.loop);
                this._var.loop = null;
                this._var.loopNumber = 0;
                !0 === this._options.debug && this._log("_stopLoop", "A loop has been stopped")
            };
            a.prototype.emitEvent = function(a) {
                !0 === this._options.debug && this._log("emitEvent", "An event with a " + (!0 === a ? "positive" : "negative") + " detection was called");
                a = this._var.event[!0 === a ? "detected" : "notDetected"];
                for (var e in a)
                    if (!0 === this._options.debug && this._log("emitEvent", "Call function " +
                            (parseInt(e) + 1) + "/" + a.length), a.hasOwnProperty(e)) a[e]();
                !0 === this._options.resetOnEnd && this.clearEvent();
                return this
            };
            a.prototype.clearEvent = function() {
                this._var.event.detected = [];
                this._var.event.notDetected = [];
                !0 === this._options.debug && this._log("clearEvent", "The event list has been cleared")
            };
            a.prototype.on = function(a, m) {
                this._var.event[!0 === a ? "detected" : "notDetected"].push(m);
                !0 === this._options.debug && this._log("on", 'A type of event "' + (!0 === a ? "detected" : "notDetected") + '" was added');
                return this
            };
            a.prototype.onDetected = function(a) {
                return this.on(!0, a)
            };
            a.prototype.onNotDetected = function(a) {
                return this.on(!1, a)
            };
            m.BlockAdBlock = a;
            m.blockAdBlock = new a({
                checkOnLoad: !0,
                resetOnEnd: !0
            })
        })(window)
    }, function(p) {
        const m = class {
            static now() {
                return Math.min(Math.floor(Date.now() / 2E3) - 757382400, 268435455)
            }
            constructor() {
                this.reset();
                setInterval(() => {
                    this.logOnLine(!!navigator.onLine)
                }, 2E3)
            }
            reset() {
                function a() {}
                this.startTime = m.now();
                this.event = {
                    die: 0,
                    disconnect: 0
                };
                this.mouse = {
                    status: !0,
                    updates: [0, 0, 0, 0,
                        0, 0, 0
                    ]
                };
                this.onLine = {
                    status: !!navigator.onLine,
                    updates: [0, 0, 0, 0]
                };
                this.consoleOpened = this.closeCall = !1;
                let e = new Image;
                Object.defineProperty(e, "id", {
                    get: () => {
                        this.consoleOpened = !0;
                        return ""
                    }
                });
                a.toString = () => {
                    this.consoleOpened = !0;
                    return "function() {}"
                };
                setTimeout(console.log.bind(null, "%c", a, e))
            }
            time() {
                return Math.min(m.now() - this.startTime, 65535)
            }
            logEvent(a) {
                this.event[a] = this.time()
            }
            logMouse(a) {
                this.mouse.status !== a && (this.mouse.status = a, this.mouse.updates.shift(), this.mouse.updates.push(this.time()))
            }
            logOnLine(a) {
                this.onLine.status !==
                    a && (this.onLine.status = a, this.onLine.updates.shift(), this.onLine.updates.push(this.time()))
            }
            logCloseCall() {
                this.closeCall = !0
            }
            toBits() {
                let a = [this.mouse.status, this.onLine.status, this.closeCall, this.consoleOpened];
                var e = this.startTime;
                for (let m = 0; 28 > m; m++) a.push(!!(e & 1)), e >>= 1;
                for (let m of [this.event.die, this.event.disconnect, ...this.mouse.updates, ...this.onLine.updates, this.time()])
                    for (e = 0; 16 > e; e++) a.push(!!(m & 1)), m >>= 1;
                return a
            }
            drawCanvas(a) {
                let {
                    width: e,
                    height: m
                } = a.canvas, v = a.getImageData(0, 0, e,
                    m), {
                    data: k
                } = v, C = this.toBits(), x = [];
                for (var n = 0; 16 > n; n++) {
                    var p = !1;
                    for (var z = 0; 16 > z; z++) C[n + 16 * z] && (p = !p);
                    x.push(p)
                }
                n = [];
                for (p = 0; 16 > p; p++) {
                    z = !1;
                    for (var r = 0; 16 > r; r++) C[r + 16 * p] && (z = !z);
                    n.push(z)
                }
                p = !0;
                for (z = 0; 256 > z; z++) C[z] && (p = !p);
                z = -Math.floor(8 * Math.random());
                for (r = z; r < e; r += 4)
                    for (let a = z; a < e; a += 4) {
                        let v = Math.floor(r / 4) % 32,
                            m = Math.floor(a / 4) % 32;
                        17 < v || 17 < m || (33 !== v + m && (16 === v || 16 === m || (17 === v ? 17 === m ? p : n[m] : 17 === m ? x[v] : C[v + 16 * m])) ? (k[r + a * e << 2 | 0] |= 1, k[r + a * e << 2 | 1] |= 1, k[r + a * e << 2 | 2] &= -2, k[r + 1 + a * e << 2 | 0] |= 1,
                            k[r + 1 + a * e << 2 | 1] |= 1, k[r + 1 + a * e << 2 | 2] &= -2, k[r + a * e + e << 2 | 0] |= 1, k[r + a * e + e << 2 | 1] |= 1, k[r + a * e + e << 2 | 2] &= -2, k[r + 1 + a * e + e << 2 | 0] |= 1, k[r + 1 + a * e + e << 2 | 1] |= 1, k[r + 1 + a * e + e << 2 | 2] &= -2) : (k[r + a * e << 2 | 0] &= -2, k[r + a * e << 2 | 1] &= -2, k[r + a * e << 2 | 2] |= 1, k[r + 1 + a * e << 2 | 0] &= -2, k[r + 1 + a * e << 2 | 1] &= -2, k[r + 1 + a * e << 2 | 2] |= 1, k[r + a * e + e << 2 | 0] &= -2, k[r + a * e + e << 2 | 1] &= -2, k[r + a * e + e << 2 | 2] |= 1, k[r + 1 + a * e + e << 2 | 0] &= -2, k[r + 1 + a * e + e << 2 | 1] &= -2, k[r + 1 + a * e + e << 2 | 2] |= 1))
                    }
                a.putImageData(v, 0, 0)
            }
        };
        let x = new m;
        x.Tracker = m;
        p.exports = x
    }, function(p, m, x) {
        let a = x(1),
            e = x(4);
        class D {
            constructor() {
                this.target = {
                    x: 0,
                    y: 0
                };
                this.socket = null;
                this.statMaxing = !1;
                let e = document.getElementById("gameCanvas");
                e.width = a.screenWidth;
                e.height = a.screenHeight;
                this.cv = e
            }
            init(a, e) {
                this.control = a;
                this.socket = e;
                e = this.cv;
                "joysticks" === a ? (this.movementTouch = this.controlTouch = null, this.movementRight = this.movementLeft = this.movementBottom = this.movementTop = !1, e.addEventListener("touchstart", a => this.touchStart(a), !1), e.addEventListener("touchmove", a => this.touchMove(a), !1), e.addEventListener("touchend", a => this.touchEnd(a), !1), e.addEventListener("touchcancel",
                    a => this.touchEnd(a), !1)) : (e.addEventListener("mousedown", a => this.mouseDown(a), !1), e.addEventListener("mousemove", a => this.mouseMove(a), !1), e.addEventListener("mouseup", a => this.mouseUp(a), !1));
                e.addEventListener("keydown", a => this.keyboardDown(a), !1);
                e.addEventListener("keyup", a => this.keyboardUp(a), !1);
                this.autoUpgrade()
            }
            autoUpgrade() {
                if (a.autoLevel) var e = 60,
                    k = setInterval(() => {
                        this.socket.talk("L");
                        0 >= --e && clearInterval(k)
                    }, 100)
            }
            emit(a) {
                this.socket.talk(a)
            }
            talk(a, e) {
                this.socket.talk(a, e)
            }
            spawn(a) {
                this.socket.talk("s",
                    a, -1);
                e.reset();
                this.autoUpgrade()
            }
            set(a, e) {
                this.socket.cmd.set(a, e)
            }
            setPosition(a, e) {
                this.target.x = a;
                this.target.y = e;
                this.socket.cmd.setPosition(a, e)
            }
            keyboardDown(e) {
                switch (e.keyCode) {
                    case a.KEY_SPAWN:
                        if (a.died && (a.respawnOn <= Date.now() || e.shiftKey) && (this.spawn(a.playerName), a.died = !1, !a.mobile)) {
                            window.aiptag.cmd.display.push(function() {
                                window.aipDisplayTag.clear("arras-io_728x90")
                            });
                            var k = document.getElementById("respawn-banner");
                            k && (k.style.display = "none")
                        }
                        break;
        // ========================================================================
        // Chat System
        // ========================================================================                 
        // Key "H". Text input for in-game chat. Does not freeze the game.
        case 0: //72
            if (!a.died)
            {               
                if (a.isChatMode === true)                         
                {
                    // Chat input textbox.
                    let chatInput = document.createElement('input');
                    chatInput.id = 'chatInput';
                    chatInput.tabindex = 4;
                    chatInput.style.font = 'bold 18px Consolas';
                    chatInput.maxlength = '100';
                    chatInput.placeholder = 'Enter to send.Esc to cancel.';

                    // Chat input wrapper div.
                    let chatInputWrapper = document.createElement('div');                        
                    chatInputWrapper.style.position = 'absolute';                            
                    chatInputWrapper.style.width = '720px';                        

                    chatInputWrapper.style.left = '50%';
                    chatInputWrapper.style.bottom = '100px';
                    chatInputWrapper.style.transform = 'translate(-50%, -50%)';
                    chatInputWrapper.style.margin = '0 auto';
                    chatInputWrapper.style.visibility = 'hidden';

                    chatInputWrapper.appendChild(chatInput);  
                    document.body.appendChild(chatInputWrapper);   
                    
                    // Sending chat.
                    chatInput.addEventListener('keydown', function(event) 
                    {
                        if (event.key === 'Enter' || event.keyCode === 13) 
                        {   
                            // ============================================================                             
                            // Check again if the player died, otherwise, it hangs the client.
                            // There will be an error saying that "color is undefined" in app.js file.
                            // ============================================================
                            if (e.died)
                            {
                                e.socket.talk('s', e.playerName, 0); 
                                e.died = false;
                            }
                            else 
                            {
                                let chatMessage = chatInput.value;

                                if (chatMessage)
                                {
                                    let maxLen = 100; 
                                    let trimmedMessage = chatMessage.length > maxLen ? chatMessage.substring(0, maxLen - 3) + "..." : chatMessage.substring(0, maxLen); 

                                    a.socket.talk('h', trimmedMessage, 1);

                                    chatInputWrapper.removeChild(chatInput);
                                    document.body.removeChild(chatInputWrapper);
                                                                        
                                    let gameCanvas = document.getElementById('gameCanvas');
                                    gameCanvas.focus();
                                    
                                    a.isChatMode = true;                                    
                                }  
                            }                                   
                        }
                    });

                    // Cancelling chat.
                    chatInput.addEventListener('keydown', function(event) 
                    {
                        if (event.key === 'Esc' || event.keyCode === 27) 
                        {                                
                            chatInputWrapper.removeChild(chatInput);
                            document.body.removeChild(chatInputWrapper);

                            let gameCanvas = document.getElementById('gameCanvas');
                            gameCanvas.focus();                            

                            a.isChatMode = false; 
                        }
                    });
                    
                    a.isChatMode = true;

                    // To remove initial "i" letter.                        
                    setTimeout(() => {
                        chatInput.value = '';
                        chatInputWrapper.style.visibility = 'visible';                            
                        chatInput.focus();
                    }, 10);
                }
                else 
                {   // Already in chat mode, focus the chat input textbox.
                    let existingChatInput = document.getElementById('chatInput');
                    if (existingChatInput)
                    {
                        // Remove 'h' from the input.
                        let oldValue = existingChatInput.value;                        
                        existingChatInput.value = '';
                        existingChatInput.focus();                            
                        existingChatInput.value = oldValue;
                    }
                }                    
            }

            break;
                    case a.KEY_UP_ARROW:
                    case a.KEY_UP:
                        this.set(0,
                            !0);
                        break;
                    case a.KEY_DOWN_ARROW:
                    case a.KEY_DOWN:
                        this.set(1, !0);
                        break;
                    case a.KEY_LEFT_ARROW:
                    case a.KEY_LEFT:
                        this.set(2, !0);
                        break;
                    case a.KEY_RIGHT_ARROW:
                    case a.KEY_RIGHT:
                        this.set(3, !0);
                        break;
                    case a.KEY_MOUSE_0:
                        this.set(4, !0);
                        break;
                    case a.KEY_MOUSE_1:
                        this.set(5, !0);
                        break;
                    case a.KEY_MOUSE_2:
                        this.set(6, !0);
                        break;
                    case a.KEY_LEVEL_UP:
                        this.emit("L")
                        break;               
                     }
                
                    
                if (!e.ctrlKey && !e.altKey) {
                    if (a.canSkill) {
                        k = this.statMaxing ? 12 : 1;
                        do switch (e.keyCode) {
                            case a.KEY_UPGRADE_ATK:
                                this.talk("x", 0);
                                break;
                            case a.KEY_UPGRADE_HTL:
                                this.talk("x",
                                    1);
                                break;
                            case a.KEY_UPGRADE_SPD:
                                this.talk("x", 2);
                                break;
                            case a.KEY_UPGRADE_STR:
                                this.talk("x", 3);
                                break;
                            case a.KEY_UPGRADE_PEN:
                                this.talk("x", 4);
                                break;
                            case a.KEY_UPGRADE_DAM:
                                this.talk("x", 5);
                                break;
                            case a.KEY_UPGRADE_RLD:
                                this.talk("x", 6);
                                break;
                            case a.KEY_UPGRADE_MOB:
                                this.talk("x", 7);
                                break;
                            case a.KEY_UPGRADE_RGN:
                                this.talk("x", 8);
                                break;
                            case a.KEY_UPGRADE_SHI:
                                this.talk("x", 9)
                        }
                        while (--k)
                    }
                    if (!e.repeat) {
                        switch (e.keyCode) {
                            case a.KEY_AUTO_SPIN:
                                this.talk("t", 0);
                                break;
                            case a.KEY_AUTO_FIRE:
                                this.talk("t", 1);
                                break;
                            case a.KEY_OVER_RIDE:
                                this.talk("t", 2);
                                break;
                            case a.KEY_REVERSE_MOUSE:
                                this.talk("t", 3);
                                break;
                            case a.KEY_REVERSE_TANK:
                                this.talk("t", 4);
                                break;
                            case a.KEY_UPGRADE_MAX:
                                this.statMaxing = !0;
                                break;
                            case a.KEY_FUCK_YOU:
                                this.emit("0");
                                break;
                            case a.KEY_KILL_YOURSELF:
                                this.emit("K");
                                break;
                            case a.KEY_PING:
                                a.showDebug = !0;
                                break;
                            case a.KEY_LOL:
                                this.emit("n");
                                break;
                            case a.KEY_NO_U:
                                this.emit("u");
                                break;
                            case a.KEY_RECORD:
                                if (this.cv.captureStream && window.MediaRecorder)
                                    if (this.videoRecorder) switch (this.videoRecorder.state) {
                                        case "inactive":
                                            a.messages.push({
                                                text: "Recorder started!",
                                                status: 2,
                                                alpha: 0,
                                                time: Date.now()
                                            });
                                            this.videoRecorder.start();
                                            break;
                                        case "recording":
                                            a.messages.push({
                                                text: "Recorder stopped! Saving file...",
                                                status: 2,
                                                alpha: 0,
                                                time: Date.now()
                                            }), this.videoRecorder.stop()
                                    } else {
                                        let e = [];
                                        var options = {
                                          mimeType: "video/mp4"
                                        }
                                        this.videoRecorder = new MediaRecorder(this.cv.captureStream(60), options);
                                        this.videoRecorder.ondataavailable = a => e.push(a.data);
                                        this.videoRecorder.onstop = () => {
                                            let a = new Blob(e, {
                                                type: this.videoRecorder.mimeType
                                            });
                                            e.length = 0;
                                            let k = URL.createObjectURL(a),
                                                n = document.createElement("a");
                                            n.style.display =
                                                "none";
                                            n.setAttribute("download", "arras.mp4");
                                            n.setAttribute("href", k);
                                            document.body.appendChild(n);
                                            setTimeout(() => {
                                                URL.revokeObjectURL(k);
                                                document.body.removeChild(n)
                                            }, 100);
                                            n.click()
                                        };
                                        a.messages.push({
                                            text: "Recorder initiated and started!",
                                            status: 2,
                                            alpha: 0,
                                            time: Date.now()
                                        });
                                        this.videoRecorder.start()
                                    } else a.messages.push({
                                        text: "Media recorder not supported in this browser!",
                                        status: 2,
                                        alpha: 0,
                                        time: Date.now()
                                    });
                                break;
                            case a.KEY_SCREENSHOT:
                                var m = this.cv.toDataURL();
                                k = atob(m.split(",")[1]);
                                m = m.split(",")[0].split(":")[1].split(";")[0];
                                let v = new Uint8Array(k.length);
                                for (let a = 0; a < k.length; a++) v[a] = k.charCodeAt(a);
                                let n = URL.createObjectURL(new Blob([v], {
                                        type: m
                                    })),
                                    x = document.createElement("a");
                                x.style.display = "none";
                                x.setAttribute("download", "screenshot.png");
                                x.setAttribute("href", n);
                                document.body.appendChild(x);
                                setTimeout(() => {
                                    URL.revokeObjectURL(n);
                                    document.body.removeChild(x)
                                }, 100);
                                x.click()
                        }
                        if (a.canUpgrade) switch (e.keyCode) {
                            case a.KEY_CHOOSE_1:
                                this.talk("U", 0);
                                break;
                            case a.KEY_CHOOSE_2:
                                this.talk("U", 1);
                                break;
                            case a.KEY_CHOOSE_3:
                                this.talk("U",
                                    2);
                                break;
                            case a.KEY_CHOOSE_4:
                                this.talk("U", 3);
                                break;
                            case a.KEY_CHOOSE_5:
                                this.talk("U", 4);
                                break;
                            case a.KEY_CHOOSE_6:
                                this.talk("U", 5);
                                break;
                            case a.KEY_CHOOSE_7:
                                this.talk("U", 6);
                                break;
                            case a.KEY_CHOOSE_8:
                                this.talk("U", 7);
                                break;
                            case a.KEY_CHOOSE_9:
                                this.talk("U", 8)
                        }
                    }
                }
            }
            keyboardUp(e) {
                switch (e.keyCode) {
                    case a.KEY_UP_ARROW:
                    case a.KEY_UP:
                        this.set(0, !1);
                        break;
                    case a.KEY_DOWN_ARROW:
                    case a.KEY_DOWN:
                        this.set(1, !1);
                        break;
                    case a.KEY_LEFT_ARROW:
                    case a.KEY_LEFT:
                        this.set(2, !1);
                        break;
                    case a.KEY_RIGHT_ARROW:
                    case a.KEY_RIGHT:
                        this.set(3,
                            !1);
                        break;
                    case a.KEY_MOUSE_0:
                        this.set(4, !1);
                        break;
                    case a.KEY_MOUSE_1:
                        this.set(5, !1);
                        break;
                    case a.KEY_MOUSE_2:
                        this.set(6, !1);
                        break;
                    case a.KEY_UPGRADE_MAX:
                        this.statMaxing = !1;
                        break;
                    case a.KEY_PING:
                        a.showDebug = !1;
                        break;
                    case a.KEY_CLASS_TREE:
                        a.showTree = !1
                }
            }
            mouseDown(e) {
                switch (e.button) {
                    case 0:
                        e = {
                            x: e.clientX,
                            y: e.clientY
                        };
                        let k = a.clickables.stat.check(e); - 1 !== k ? this.talk("x", k) : -1 !== a.clickables.skipUpgrades.check(e) ? a.clearUpgrades() : (e = a.clickables.upgrade.check(e), -1 !== e ? this.talk("U", e) : this.set(4, !0));
                        break;
                    case 1:
                        this.set(5, !0);
                        break;
                    case 2:
                        this.set(6, !0)
                }
            }
            mouseMove(e) {
                null !== a.player.x && this.setPosition(e.clientX - a.player.x, e.clientY - a.player.y);
                a.statHover = 0 === a.clickables.hover.check({
                    x: e.clientX,
                    y: e.clientY
                })
            }
            mouseUp(a) {
                switch (a.button) {
                    case 0:
                        this.set(4, !1);
                        break;
                    case 1:
                        this.set(5, !1);
                        break;
                    case 2:
                        this.set(6, !1)
                }
            }
            touchStart(e) {
                e.preventDefault();
                if (a.died && a.respawnOn <= Date.now()) this.spawn(a.playerName), a.died = !1;
                else {
                    for (let v of e.changedTouches) {
                        var k = {
                            x: v.clientX,
                            y: v.clientY
                        };
                        let e =
                            v.identifier;
                        var m = a.clickables.stat.check(k); - 1 !== m ? this.talk("x", m) : -1 !== a.clickables.skipUpgrades.check(k) ? a.clearUpgrades() : (m = a.clickables.upgrade.check(k), -1 !== m ? this.talk("U", m) : (k = k.x < this.cv.width / 2, null === this.movementTouch && k ? this.movementTouch = e : null !== this.controlTouch || k || (this.controlTouch = e, this.set(4, !0))))
                    }
                    this.touchMove(e)
                }
            }
            touchMove(a) {
                a.preventDefault();
                for (let k of a.changedTouches) {
                    var e = k.clientX;
                    a = k.clientY;
                    var m = k.identifier;
                    this.movementTouch === m ? (e -= 1 * this.cv.width / 6, a -=
                        2 * this.cv.height / 3, m = Math.sqrt(e * e + a * a), e /= m, a /= m, -.3826834323650898 > a !== this.movementTop && this.set(0, this.movementTop = -.3826834323650898 > a), .3826834323650898 < a !== this.movementBottom && this.set(1, this.movementBottom = .3826834323650898 < a), -.3826834323650898 > e !== this.movementLeft && this.set(2, this.movementLeft = -.3826834323650898 > e), .3826834323650898 < e !== this.movementRight && this.set(3, this.movementRight = .3826834323650898 < e)) : this.controlTouch === m && this.setPosition(4 * (e - 5 * this.cv.width / 6), 4 * (a - 2 * this.cv.height /
                        3))
                }
            }
            touchEnd(a) {
                a.preventDefault();
                for (let e of a.changedTouches) a = e.identifier, this.movementTouch === a ? (this.movementTouch = null, this.movementTop && this.set(0, this.movementTop = !1), this.movementBottom && this.set(1, this.movementBottom = !1), this.movementLeft && this.set(2, this.movementLeft = !1), this.movementRight && this.set(3, this.movementRight = !1)) : this.controlTouch === a && (this.controlTouch = null, this.set(4, !1))
            }
        }
        p.exports = D
    }, function(p, m) {
        let x = new Uint32Array(1),
            a = new Uint8Array(x.buffer),
            e = new Float32Array(x.buffer),
            D = new Uint16Array(1),
            v = new Uint8Array(D.buffer);
        m.encode = k => {
            let m = [];
            var p = [],
                n = 0,
                E = 15,
                z = 0;
            for (var r of k) {
                var F = 0;
                if (0 === r || !1 === r) F = 0;
                else if (1 === r || !0 === r) F = 1;
                else if ("number" === typeof r) !Number.isInteger(r) || -4294967296 > r || 4294967296 <= r ? (F = 8, n += 4) : 0 <= r ? 256 > r ? (F = 2, n++) : 65536 > r ? (F = 4, n += 2) : 4294967296 > r && (F = 6, n += 4) : -256 <= r ? (F = 3, n++) : -65536 <= r ? (F = 5, n += 2) : -4294967296 <= r && (F = 7, n += 4);
                else if ("string" === typeof r) {
                    F = !1;
                    for (let a = 0; a < r.length; a++)
                        if ("\u00ff" < r.charAt(a)) F = !0;
                        else if ("\x00" === r.charAt(a)) throw console.error("Null containing string",
                        r), Error("Null containing string");
                    !F && 1 >= r.length ? (F = 9, n++) : F ? (F = 11, n += 2 * r.length + 2) : (F = 10, n += r.length + 1)
                } else throw console.error("Unencodable data type", k), Error("Unencodable data type");
                m.push(F);
                if (F === E) z++;
                else {
                    p.push(E);
                    if (1 <= z) {
                        for (; 19 < z;) p.push(14), p.push(15), z -= 19;
                        1 === z ? p.push(E) : 2 === z ? p.push(12) : 3 === z ? p.push(13) : 20 > z && (p.push(14), p.push(z - 4))
                    }
                    z = 0;
                    E = F
                }
            }
            p.push(E);
            if (1 <= z) {
                for (; 19 < z;) p.push(14), p.push(15), z -= 19;
                1 === z ? p.push(E) : 2 === z ? p.push(12) : 3 === z ? p.push(13) : 20 > z && (p.push(14), p.push(z -
                    4))
            }
            p.push(15);
            1 === p.length % 2 && p.push(15);
            n = new Uint8Array((p.length >> 1) + n);
            for (E = 0; E < p.length; E += 2) n[E >> 1] = p[E] << 4 | p[E + 1];
            p = p.length >> 1;
            for (E = 0; E < m.length; E++) switch (z = k[E], m[E]) {
                case 2:
                case 3:
                    n[p++] = z;
                    break;
                case 4:
                case 5:
                    D[0] = z;
                    n.set(v, p);
                    p += 2;
                    break;
                case 6:
                case 7:
                    x[0] = z;
                    n.set(a, p);
                    p += 4;
                    break;
                case 8:
                    e[0] = z;
                    n.set(a, p);
                    p += 4;
                    break;
                case 9:
                    z = 0 === z.length ? 0 : z.charCodeAt(0);
                    n[p++] = z;
                    break;
                case 10:
                    for (r = 0; r < z.length; r++) n[p++] = z.charCodeAt(r);
                    n[p++] = 0;
                    break;
                case 11:
                    for (r = 0; r < z.length; r++) F = z.charCodeAt(r),
                        n[p++] = F & 255, n[p++] = F >> 8;
                    n[p++] = 0;
                    n[p++] = 0
            }
            return n
        };
        m.decode = k => {
            k = new Uint8Array(k);
            if (15 !== k[0] >> 4) return null;
            var m = [],
                p = 15;
            let n = 0;
            for (var E = !0;;) {
                if (n >= k.length) return null;
                var z = k[n];
                E ? (z &= 15, n++) : z >>= 4;
                E = !E;
                if (12 === (z & 12)) {
                    if (15 === z) {
                        E && n++;
                        break
                    }
                    let a = z - 10;
                    if (14 === z) {
                        if (n >= k.length) return null;
                        z = k[n];
                        E ? (z &= 15, n++) : z >>= 4;
                        E = !E;
                        a += z
                    }
                    for (z = 0; z < a; z++) m.push(p)
                } else m.push(z), p = z
            }
            p = [];
            for (let r of m) switch (r) {
                case 0:
                    p.push(0);
                    break;
                case 1:
                    p.push(1);
                    break;
                case 2:
                    p.push(k[n++]);
                    break;
                case 3:
                    p.push(k[n++] -
                        256);
                    break;
                case 4:
                    v[0] = k[n++];
                    v[1] = k[n++];
                    p.push(D[0]);
                    break;
                case 5:
                    v[0] = k[n++];
                    v[1] = k[n++];
                    p.push(D[0] - 65536);
                    break;
                case 6:
                    a[0] = k[n++];
                    a[1] = k[n++];
                    a[2] = k[n++];
                    a[3] = k[n++];
                    p.push(x[0]);
                    break;
                case 7:
                    a[0] = k[n++];
                    a[1] = k[n++];
                    a[2] = k[n++];
                    a[3] = k[n++];
                    p.push(x[0] - 4294967296);
                    break;
                case 8:
                    a[0] = k[n++];
                    a[1] = k[n++];
                    a[2] = k[n++];
                    a[3] = k[n++];
                    p.push(Number.isNaN(e[0]) ? -1 : e[0]);
                    break;
                case 9:
                    m = k[n++];
                    p.push(0 === m ? "" : String.fromCharCode(m));
                    break;
                case 10:
                    for (m = ""; E = k[n++];) m += String.fromCharCode(E);
                    p.push(m);
                    break;
                case 11:
                    for (m = ""; E = k[n++] | k[n++] << 8;) m += String.fromCharCode(E);
                    p.push(m)
            }
            return p
        }
    }, function(p) {
        p.exports = { //Themes
            normal: {
                teal: "#7ADBBC",
                lgreen: "#B9E87E",
                orange: "#E7896D",
                yellow: "#FDF380",
                lavender: "#B58EFD",
                pink: "#EF99C3",
                vlgrey: "#E8EBF7",
                lgrey: "#AA9F9E",
                guiwhite: "#FFFFFF",
                black: "#484848",
                blue: "#3CA4CB",
                green: "#8ABC3F",
                red: "#E03E41",
                gold: "#EFC74B",
                purple: "#8D6ADF",
                magenta: "#CC669C",
                grey: "#A7A7AF",
                dgrey: "#726F6F",
                white: "#DBDBDB",
                guiblack: "#000000",
                dgreen: "#026600",
                navy: "#000C66",
              ice: "#00F7FF",
            orang: "#FF8000",
                paletteSize: 10,
                border: .65
            },
            classic: {
                teal: "#8EFFFB",
                lgreen: "#85E37D",
                orange: "#FC7676",
                yellow: "#FFEB8E",
                lavender: "#B58EFF",
                pink: "#F177DD",
                vlgrey: "#CDCDCD",
                lgrey: "#999999",
                guiwhite: "#FFFFFF",
                black: "#525252",
                blue: "#00B0E1",
                green: "#00E06C",
                red: "#F04F54",
                gold: "#FFE46B",
                purple: "#768CFC",
                magenta: "#BE7FF5",
                grey: "#999999",
                dgrey: "#545454",
                white: "#C0C0C0",
                guiblack: "#000000",
              dgreen: "#026600",
            navy: "#000C66",
              ice: "#00F7FF",
            orang: "#FF8000",
                paletteSize: 10,
                border: .5
            },
            dark: {
                teal: "#8975B7",
                lgreen: "#0C491D",
                orange: "#C46748",
                yellow: "#B2B224",
                lavender: "#7D56C5",
                pink: "#B24FAE",
                vlgrey: "#1E1E1E",
                lgrey: "#3C3A3A",
                guiwhite: "#000000",
                black: "#E5E5E5",
                blue: "#379FC6",
                green: "#30B53B",
                red: "#FF6C6E",
                gold: "#FFC665",
                purple: "#9673E8",
                magenta: "#C8679B",
                grey: "#635F5F",
                dgrey: "#73747A",
                white: "#11110F",
                guiblack: "#FFFFFF",
              dgreen: "#026600",
            navy: "#000C66",
              ice: "#00F7FF",
            orang: "#FF8000",
                paletteSize: 10,
                border: .15
            },
            natural: {
                teal: "#76C1BB",
                lgreen: "#AAD35D",
                orange: "#E09545",
                yellow: "#FFD993",
                lavender: "#939FFF",
                pink: "#D87FB2",
                vlgrey: "#C4B6B6",
                lgrey: "#7F7F7F",
                guiwhite: "#FFFFFF",
                black: "#373834",
                blue: "#4F93B5",
                green: "#00B659",
                red: "#E14F65",
                gold: "#E5BF42",
                purple: "#8053A0",
                magenta: "#B67CAA",
                grey: "#998F8F",
                dgrey: "#494954",
                white: "#A5B2A5",
                guiblack: "#000000",
              dgreen: "#026600",
            navy: "#000C66",
              ice: "#00F7FF",
            orang: "#FF8000",
                paletteSize: 10,
                border: .2
            },
            pumpkin: {
                teal: "#721970",
                lgreen: "#ff6347",
                orange: "#1b713a",
                yellow: "#fdf380",
                lavender: "#941100",
                pink: "#194417",
                vlgrey: "#1b713a",
                lgrey: "#aa9f9e",
                guiwhite: "#fed8b1",
                black: "#484848",
                blue: "#3ca4cb",
                green: "#76EEC6",
                red: "#F04F54",
                gold: "#1b713a",
                purple: "#1b713a",
                magenta: "#cc669c",
                grey: "#ffffff",
                dgrey: "#726f6f",
                white: "#ff9b58",
                guiblack: "#000000",
              dgreen: "#026600",
            navy: "#000C66",
              ice: "#00F7FF",
            orang: "#FF8000",
                paletteSize: 10,
                border: 3.3
            },
            forest: {
                teal: "#884AA5",
                lgreen: "#8C9B3E",
                orange: "#D16A80",
                yellow: "#97596D",
                lavender: "#499855",
                pink: "#60294F",
                vlgrey: "#DDC6B8",
                lgrey: "#7E949E",
                guiwhite: "#FFFFE8",
                black: "#665750",
                blue: "#807BB6",
                green: "#A1BE55",
                red: "#E5B05B",
                gold: "#FF4747",
                purple: "#BAC674",
                magenta: "#BA78D1",
                grey: "#998866",
                dgrey: "#529758",
                white: "#7DA060",
                guiblack: "#000000",
              dgreen: "#026600",
            navy: "#000C66",
              ice: "#00F7FF",
            orang: "#FF8000",
                paletteSize: 10,
                border: .7
            },
            midnight: {
                teal: "#2B9098",
                lgreen: "#4BAA5D",
                orange: "#345678",
                yellow: "#CDC684",
                lavender: "#89778E",
                pink: "#A85C90",
                vlgrey: "#CCCCCC",
                lgrey: "#A7B2B7",
                guiwhite: "#BAC6FF",
                black: "#091F28",
                blue: "#123455",
                green: "#098765",
                red: "#000013",
                gold: "#566381",
                purple: "#743784",
                magenta: "#B29098",
                grey: "#555555",
                dgrey: "#649EB7",
                white: "#444444",
                guiblack: "#000000",
              dgreen: "#026600",
            navy: "#000C66",
              ice: "#00F7FF",
            orang: "#FF8000",
                paletteSize: 10,
                border: .6
            },
            pastel: {
                teal: "#89BFBA",
                lgreen: "#B5D17D",
                orange: "#E5E0E0",
                yellow: "#B5BBE5",
                lavender: "#939FFF",
                pink: "#646DE5",
                vlgrey: "#B2B2B2",
                lgrey: "#7F7F7F",
                guiwhite: "#FFFFFF",
                black: "#383835",
                blue: "#AEAEFF",
                green: "#AEFFAE",
                red: "#FFAEAE",
                gold: "#FFFFFF",
                purple: "#C3C3D8",
                magenta: "#FFB5FF",
                grey: "#CCCCCC",
                dgrey: "#A0A0B2",
                white: "#F2F2F2",
                guiblack: "#000000",
              dgreen: "#026600",
            navy: "#000C66",
              ice: "#00F7FF",
            orang: "#FF8000",
                paletteSize: 10,
                border: .35
            },
            space: {
                teal: "#4788F3",
                lgreen: "#AF1010",
                orange: "#FF0000",
                yellow: "#82F850",
                lavender: "#FFFFFF",
                pink: "#57006C",
                vlgrey: "#FFFFFF",
                lgrey: "#272727",
                guiwhite: "#000000",
                black: "#7F7F7F",
                blue: "#0E1B92",
                green: "#0AEB80",
                red: "#C2B90A",
                gold: "#3E7E8C",
                purple: "#285911",
                magenta: "#A9707E",
                grey: "#6F6A68",
                dgrey: "#2D0738",
                white: "#000000",
                guiblack: "#FFFFFF",
              dgreen: "#026600",
            navy: "#000C66",
              ice: "#00F7FF",
            orang: "#FF8000",
                paletteSize: 10,
                border: .25
            },
            nebula: {
                teal: "#38B06E",
                lgreen: "#22882E",
                orange: "#D28E7F",
                yellow: "#D5D879",
                lavender: "#E084EB",
                pink: "#DF3E3E",
                vlgrey: "#F0F2CC",
                lgrey: "#7D7D7D",
                guiwhite: "#C2C5EF",
                black: "#161616",
                blue: "#9274E6",
                green: "#89F470",
                red: "#E08E5D",
                gold: "#ECDC58",
                purple: "#58CBEC",
                magenta: "#EA58EC",
                grey: "#7E5713",
                dgrey: "#303030",
                white: "#555555",
                guiblack: "#EAEAEA",
              dgreen: "#026600",
            navy: "#000C66",
              ice: "#00F7FF",
            orang: "#FF8000",
                paletteSize: 10,
                border: .5
            },
            bleach: {
                teal: "#00FFFF",
                lgreen: "#00FF00",
                orange: "#FF3200",
                yellow: "#FFEC00",
                lavender: "#FF24A7",
                pink: "#FF3CBD",
                vlgrey: "#FFF186",
                lgrey: "#918181",
                guiwhite: "#F1F1F1",
                black: "#5F5F5F",
                blue: "#0025FF",
                green: "#00FF00",
                red: "#FF0000",
                gold: "#FFFA23",
                purple: "#3100FF",
                magenta: "#D4D3D3",
                grey: "#838383",
                dgrey: "#4C4C4C",
                white: "#FFFEFE",
                guiblack: "#080808",
              dgreen: "#026600",
            navy: "#000C66",
              ice: "#00F7FF",
            orang: "#FF8000",
                paletteSize: 10,
                border: .4
            },
            ocean: {
                teal: "#76EEC6",
                lgreen: "#41AA78",
                orange: "#FF7F50",
                yellow: "#FFD250",
                lavender: "#DC3388",
                pink: "#FA8072",
                vlgrey: "#8B8886",
                lgrey: "#BFC1C2",
                guiwhite: "#FFFFFF",
                black: "#12466B",
                blue: "#4200AE",
                green: "#0D6338",
                red: "#DC4333",
                gold: "#FEA904",
                purple: "#7B4BAB",
                magenta: "#5C246E",
                grey: "#656884",
                dgrey: "#D4D7D9",
                white: "#3283BC",
                guiblack: "#000000",
              dgreen: "#026600",
            navy: "#000C66",
              ice: "#00F7FF",
            orang: "#FF8000",
                paletteSize: 10,
                border: .3
            },
            badlands: {
                teal: "#F9CB9C",
                lgreen: "#F1C232",
                orange: "#38761D",
                yellow: "#E69138",
                lavender: "#B7B7B7",
                pink: "#78866B",
                vlgrey: "#6AA84F",
                lgrey: "#B7B7B7",
                guiwhite: "#A4C2F4",
                black: "#000000",
                blue: "#0C5A9E",
                green: "#6E8922",
                red: "#5B0000",
                gold: "#783F04",
                purple: "#591C77",
                magenta: "#20124D",
                grey: "#2F1C16",
                dgrey: "#999999",
                white: "#543517",
                guiblack: "#CFE2F3",
              dgreen: "#026600",
            navy: "#000C66",
              ice: "#00F7FF",
            orang: "#FF8000",
                paletteSize: 10,
                border: .4
            },
            custom: {
                teal: "#7ADBBC",
                lgreen: "#B9E87E",
                orange: "#E7896D",
                yellow: "#FDF380",
                lavender: "#B58EFD",
                pink: "#EF99C3",
                vlgrey: "#E8EBF7",
                lgrey: "#AA9F9E",
                guiwhite: "#FFFFFF",
                black: "#484848",
                blue: "#3CA4CB",
                green: "#8ABC3F",
                red: "#E03E41",
                gold: "#EFC74B",
                purple: "#8D6ADF",
                magenta: "#CC669C",
                grey: "#A7A7AF",
                dgrey: "#726F6F",
                white: "#DBDBDB",
                guiblack: "#000000",
              dgreen: "#026600",
            navy: "#000C66",
              ice: "#00F7FF",
            orang: "#FF8000",
                paletteSize: 10,
                border: .65
            }
        }
    }]);
}.call(this)