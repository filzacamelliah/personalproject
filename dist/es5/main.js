"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function () {
  var t = {
      349: function _(t) {
        function e() {
          return e = Object.assign ? Object.assign.bind() : function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
            }
            return t;
          }, e.apply(this, arguments);
        }
        var n = {
            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
            stringsElement: null,
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            smartBackspace: !0,
            shuffle: !1,
            backDelay: 700,
            fadeOut: !1,
            fadeOutClass: "typed-fade-out",
            fadeOutDelay: 500,
            loop: !1,
            loopCount: 1 / 0,
            showCursor: !0,
            cursorChar: "|",
            autoInsertCss: !0,
            attr: null,
            bindInputFocusEvents: !1,
            contentType: "html",
            onBegin: function onBegin(t) {},
            onComplete: function onComplete(t) {},
            preStringTyped: function preStringTyped(t, e) {},
            onStringTyped: function onStringTyped(t, e) {},
            onLastStringBackspaced: function onLastStringBackspaced(t) {},
            onTypingPaused: function onTypingPaused(t, e) {},
            onTypingResumed: function onTypingResumed(t, e) {},
            onReset: function onReset(t) {},
            onStop: function onStop(t, e) {},
            onStart: function onStart(t, e) {},
            onDestroy: function onDestroy(t) {}
          },
          s = new (function () {
            function t() {}
            var s = t.prototype;
            return s.load = function (t, s, i) {
              if (t.el = "string" == typeof i ? document.querySelector(i) : i, t.options = e({}, n, s), t.isInput = "input" === t.el.tagName.toLowerCase(), t.attr = t.options.attr, t.bindInputFocusEvents = t.options.bindInputFocusEvents, t.showCursor = !t.isInput && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0, t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed, t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay, t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings = t.options.strings.map(function (t) {
                return t.trim();
              }), t.stringsElement = "string" == typeof t.options.stringsElement ? document.querySelector(t.options.stringsElement) : t.options.stringsElement, t.stringsElement) {
                t.strings = [], t.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";
                var r = Array.prototype.slice.apply(t.stringsElement.children),
                  a = r.length;
                if (a) for (var o = 0; o < a; o += 1) t.strings.push(r[o].innerHTML.trim());
              }
              for (var l in t.strPos = 0, t.currentElContent = this.getCurrentElContent(t), t.currentElContent && t.currentElContent.length > 0 && (t.strPos = t.currentElContent.length - 1, t.strings.unshift(t.currentElContent)), t.sequence = [], t.strings) t.sequence[l] = l;
              t.arrayPos = 0, t.stopNum = 0, t.loop = t.options.loop, t.loopCount = t.options.loopCount, t.curLoop = 0, t.shuffle = t.options.shuffle, t.pause = {
                status: !1,
                typewrite: !0,
                curString: "",
                curStrPos: 0
              }, t.typingComplete = !1, t.autoInsertCss = t.options.autoInsertCss, t.autoInsertCss && (this.appendCursorAnimationCss(t), this.appendFadeOutAnimationCss(t));
            }, s.getCurrentElContent = function (t) {
              return t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent;
            }, s.appendCursorAnimationCss = function (t) {
              var e = "data-typed-js-cursor-css";
              if (t.showCursor && !document.querySelector("[" + e + "]")) {
                var n = document.createElement("style");
                n.setAttribute(e, "true"), n.innerHTML = "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ", document.body.appendChild(n);
              }
            }, s.appendFadeOutAnimationCss = function (t) {
              var e = "data-typed-fadeout-js-css";
              if (t.fadeOut && !document.querySelector("[" + e + "]")) {
                var n = document.createElement("style");
                n.setAttribute(e, "true"), n.innerHTML = "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ", document.body.appendChild(n);
              }
            }, t;
          }())(),
          i = new (function () {
            function t() {}
            var e = t.prototype;
            return e.typeHtmlChars = function (t, e, n) {
              if ("html" !== n.contentType) return e;
              var s = t.substring(e).charAt(0);
              if ("<" === s || "&" === s) {
                var i;
                for (i = "<" === s ? ">" : ";"; t.substring(e + 1).charAt(0) !== i && !(1 + ++e > t.length););
                e++;
              }
              return e;
            }, e.backSpaceHtmlChars = function (t, e, n) {
              if ("html" !== n.contentType) return e;
              var s = t.substring(e).charAt(0);
              if (">" === s || ";" === s) {
                var i;
                for (i = ">" === s ? "<" : "&"; t.substring(e - 1).charAt(0) !== i && !(--e < 0););
                e--;
              }
              return e;
            }, t;
          }())();
        t.exports = function () {
          function t(t, e) {
            s.load(this, e, t), this.begin();
          }
          var e = t.prototype;
          return e.toggle = function () {
            this.pause.status ? this.start() : this.stop();
          }, e.stop = function () {
            this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this));
          }, e.start = function () {
            this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
          }, e.destroy = function () {
            this.reset(!1), this.options.onDestroy(this);
          }, e.reset = function (t) {
            void 0 === t && (t = !0), clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin());
          }, e.begin = function () {
            var t = this;
            this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function () {
              0 === t.strPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos) : t.backspace(t.strings[t.sequence[t.arrayPos]], t.strPos);
            }, this.startDelay);
          }, e.typewrite = function (t, e) {
            var n = this;
            this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
            var s = this.humanizer(this.typeSpeed),
              r = 1;
            !0 !== this.pause.status ? this.timeout = setTimeout(function () {
              e = i.typeHtmlChars(t, e, n);
              var s = 0,
                a = t.substring(e);
              if ("^" === a.charAt(0) && /^\^\d+/.test(a)) {
                var o = 1;
                o += (a = /\d+/.exec(a)[0]).length, s = parseInt(a), n.temporaryPause = !0, n.options.onTypingPaused(n.arrayPos, n), t = t.substring(0, e) + t.substring(e + o), n.toggleBlinking(!0);
              }
              if ("`" === a.charAt(0)) {
                for (; "`" !== t.substring(e + r).charAt(0) && (r++, !(e + r > t.length)););
                var l = t.substring(0, e),
                  u = t.substring(l.length + 1, e + r),
                  c = t.substring(e + r + 1);
                t = l + u + c, r--;
              }
              n.timeout = setTimeout(function () {
                n.toggleBlinking(!1), e >= t.length ? n.doneTyping(t, e) : n.keepTyping(t, e, r), n.temporaryPause && (n.temporaryPause = !1, n.options.onTypingResumed(n.arrayPos, n));
              }, s);
            }, s) : this.setPauseStatus(t, e, !0);
          }, e.keepTyping = function (t, e, n) {
            0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this));
            var s = t.substring(0, e += n);
            this.replaceText(s), this.typewrite(t, e);
          }, e.doneTyping = function (t, e) {
            var n = this;
            this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function () {
              n.backspace(t, e);
            }, this.backDelay));
          }, e.backspace = function (t, e) {
            var n = this;
            if (!0 !== this.pause.status) {
              if (this.fadeOut) return this.initFadeOut();
              this.toggleBlinking(!1);
              var s = this.humanizer(this.backSpeed);
              this.timeout = setTimeout(function () {
                e = i.backSpaceHtmlChars(t, e, n);
                var s = t.substring(0, e);
                if (n.replaceText(s), n.smartBackspace) {
                  var r = n.strings[n.arrayPos + 1];
                  n.stopNum = r && s === r.substring(0, e) ? e : 0;
                }
                e > n.stopNum ? (e--, n.backspace(t, e)) : e <= n.stopNum && (n.arrayPos++, n.arrayPos === n.strings.length ? (n.arrayPos = 0, n.options.onLastStringBackspaced(), n.shuffleStringsIfNeeded(), n.begin()) : n.typewrite(n.strings[n.sequence[n.arrayPos]], e));
              }, s);
            } else this.setPauseStatus(t, e, !1);
          }, e.complete = function () {
            this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0;
          }, e.setPauseStatus = function (t, e, n) {
            this.pause.typewrite = n, this.pause.curString = t, this.pause.curStrPos = e;
          }, e.toggleBlinking = function (t) {
            this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
          }, e.humanizer = function (t) {
            return Math.round(Math.random() * t / 2) + t;
          }, e.shuffleStringsIfNeeded = function () {
            this.shuffle && (this.sequence = this.sequence.sort(function () {
              return Math.random() - .5;
            }));
          }, e.initFadeOut = function () {
            var t = this;
            return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function () {
              t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0);
            }, this.fadeOutDelay);
          }, e.replaceText = function (t) {
            this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t;
          }, e.bindFocusEvents = function () {
            var t = this;
            this.isInput && (this.el.addEventListener("focus", function (e) {
              t.stop();
            }), this.el.addEventListener("blur", function (e) {
              t.el.value && 0 !== t.el.value.length || t.start();
            }));
          }, e.insertCursor = function () {
            this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", !0), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
          }, t;
        }();
      },
      685: function _(t, e, n) {
        "use strict";

        n.r(e), n.d(e, {
          create: function create() {
            return r;
          },
          "default": function _default() {
            return i;
          }
        });
        var s = {};
        !function t(e, n, s, i) {
          var r = !!(e.Worker && e.Blob && e.Promise && e.OffscreenCanvas && e.OffscreenCanvasRenderingContext2D && e.HTMLCanvasElement && e.HTMLCanvasElement.prototype.transferControlToOffscreen && e.URL && e.URL.createObjectURL),
            a = "function" == typeof Path2D && "function" == typeof DOMMatrix,
            o = function () {
              if (!e.OffscreenCanvas) return !1;
              var t = new OffscreenCanvas(1, 1),
                n = t.getContext("2d");
              n.fillRect(0, 0, 1, 1);
              var s = t.transferToImageBitmap();
              try {
                n.createPattern(s, "no-repeat");
              } catch (t) {
                return !1;
              }
              return !0;
            }();
          function l() {}
          function u(t) {
            var s = n.exports.Promise,
              i = void 0 !== s ? s : e.Promise;
            return "function" == typeof i ? new i(t) : (t(l, l), null);
          }
          var c,
            h,
            p,
            d,
            f,
            g,
            m,
            y,
            b,
            v,
            w,
            C = (c = o, h = new Map(), {
              transform: function transform(t) {
                if (c) return t;
                if (h.has(t)) return h.get(t);
                var e = new OffscreenCanvas(t.width, t.height);
                return e.getContext("2d").drawImage(t, 0, 0), h.set(t, e), e;
              },
              clear: function clear() {
                h.clear();
              }
            }),
            M = (f = Math.floor(1e3 / 60), g = {}, m = 0, "function" == typeof requestAnimationFrame && "function" == typeof cancelAnimationFrame ? (p = function p(t) {
              var e = Math.random();
              return g[e] = requestAnimationFrame(function n(s) {
                m === s || m + f - 1 < s ? (m = s, delete g[e], t()) : g[e] = requestAnimationFrame(n);
              }), e;
            }, d = function d(t) {
              g[t] && cancelAnimationFrame(g[t]);
            }) : (p = function p(t) {
              return setTimeout(t, f);
            }, d = function d(t) {
              return clearTimeout(t);
            }), {
              frame: p,
              cancel: d
            }),
            x = (v = {}, function () {
              if (y) return y;
              if (!s && r) {
                var e = ["var CONFETTI, SIZE = {}, module = {};", "(" + t.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI && CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join("\n");
                try {
                  y = new Worker(URL.createObjectURL(new Blob([e])));
                } catch (t) {
                  return void 0 !== (typeof console === "undefined" ? "undefined" : _typeof(console)) && "function" == typeof console.warn && console.warn("🎊 Could not load worker", t), null;
                }
                !function (t) {
                  function e(e, n) {
                    t.postMessage({
                      options: e || {},
                      callback: n
                    });
                  }
                  t.init = function (e) {
                    var n = e.transferControlToOffscreen();
                    t.postMessage({
                      canvas: n
                    }, [n]);
                  }, t.fire = function (n, s, i) {
                    if (b) return e(n, null), b;
                    var r = Math.random().toString(36).slice(2);
                    return b = u(function (s) {
                      function a(e) {
                        e.data.callback === r && (delete v[r], t.removeEventListener("message", a), b = null, C.clear(), i(), s());
                      }
                      t.addEventListener("message", a), e(n, r), v[r] = a.bind(null, {
                        data: {
                          callback: r
                        }
                      });
                    });
                  }, t.reset = function () {
                    for (var e in t.postMessage({
                      reset: !0
                    }), v) v[e](), delete v[e];
                  };
                }(y);
              }
              return y;
            }),
            k = {
              particleCount: 50,
              angle: 90,
              spread: 45,
              startVelocity: 45,
              decay: .9,
              gravity: 1,
              drift: 0,
              ticks: 200,
              x: .5,
              y: .5,
              shapes: ["square", "circle"],
              zIndex: 100,
              colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"],
              disableForReducedMotion: !1,
              scalar: 1
            };
          function S(t, e, n) {
            return function (t, e) {
              return e ? e(t) : t;
            }(t && null != t[e] ? t[e] : k[e], n);
          }
          function P(t) {
            return t < 0 ? 0 : Math.floor(t);
          }
          function T(t) {
            return parseInt(t, 16);
          }
          function E(t) {
            return t.map(I);
          }
          function I(t) {
            var e = String(t).replace(/[^0-9a-f]/gi, "");
            return e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), {
              r: T(e.substring(0, 2)),
              g: T(e.substring(2, 4)),
              b: T(e.substring(4, 6))
            };
          }
          function O(t) {
            t.width = document.documentElement.clientWidth, t.height = document.documentElement.clientHeight;
          }
          function B(t) {
            var e = t.getBoundingClientRect();
            t.width = e.width, t.height = e.height;
          }
          function A(t, n) {
            var o,
              l = !t,
              c = !!S(n || {}, "resize"),
              h = !1,
              p = S(n, "disableForReducedMotion", Boolean),
              d = r && S(n || {}, "useWorker") ? x() : null,
              f = l ? O : B,
              g = !(!t || !d || !t.__confetti_initialized),
              m = "function" == typeof matchMedia && matchMedia("(prefers-reduced-motion)").matches;
            function y(e, n, r) {
              for (var l, c, h, p, d = S(e, "particleCount", P), g = S(e, "angle", Number), m = S(e, "spread", Number), y = S(e, "startVelocity", Number), b = S(e, "decay", Number), v = S(e, "gravity", Number), w = S(e, "drift", Number), x = S(e, "colors", E), k = S(e, "ticks", Number), T = S(e, "shapes"), I = S(e, "scalar"), O = !!S(e, "flat"), B = function (t) {
                  var e = S(t, "origin", Object);
                  return e.x = S(e, "x", Number), e.y = S(e, "y", Number), e;
                }(e), A = d, L = [], N = t.width * B.x, D = t.height * B.y; A--;) L.push((void 0, void 0, c = (l = {
                x: N,
                y: D,
                angle: g,
                spread: m,
                startVelocity: y,
                color: x[A % x.length],
                shape: T[(0, p = T.length, Math.floor(Math.random() * (p - 0)) + 0)],
                ticks: k,
                decay: b,
                gravity: v,
                drift: w,
                scalar: I,
                flat: O
              }).angle * (Math.PI / 180), h = l.spread * (Math.PI / 180), {
                x: l.x,
                y: l.y,
                wobble: 10 * Math.random(),
                wobbleSpeed: Math.min(.11, .1 * Math.random() + .05),
                velocity: .5 * l.startVelocity + Math.random() * l.startVelocity,
                angle2D: -c + (.5 * h - Math.random() * h),
                tiltAngle: (.5 * Math.random() + .25) * Math.PI,
                color: l.color,
                shape: l.shape,
                tick: 0,
                totalTicks: l.ticks,
                decay: l.decay,
                drift: l.drift,
                random: Math.random() + 2,
                tiltSin: 0,
                tiltCos: 0,
                wobbleX: 0,
                wobbleY: 0,
                gravity: 3 * l.gravity,
                ovalScalar: .6,
                scalar: l.scalar,
                flat: l.flat
              }));
              return o ? o.addFettis(L) : (o = function (t, e, n, r, o) {
                var l,
                  c,
                  h = e.slice(),
                  p = t.getContext("2d"),
                  d = u(function (e) {
                    function u() {
                      l = c = null, p.clearRect(0, 0, r.width, r.height), C.clear(), o(), e();
                    }
                    l = M.frame(function e() {
                      !s || r.width === i.width && r.height === i.height || (r.width = t.width = i.width, r.height = t.height = i.height), r.width || r.height || (n(t), r.width = t.width, r.height = t.height), p.clearRect(0, 0, r.width, r.height), (h = h.filter(function (t) {
                        return function (t, e) {
                          e.x += Math.cos(e.angle2D) * e.velocity + e.drift, e.y += Math.sin(e.angle2D) * e.velocity + e.gravity, e.velocity *= e.decay, e.flat ? (e.wobble = 0, e.wobbleX = e.x + 10 * e.scalar, e.wobbleY = e.y + 10 * e.scalar, e.tiltSin = 0, e.tiltCos = 0, e.random = 1) : (e.wobble += e.wobbleSpeed, e.wobbleX = e.x + 10 * e.scalar * Math.cos(e.wobble), e.wobbleY = e.y + 10 * e.scalar * Math.sin(e.wobble), e.tiltAngle += .1, e.tiltSin = Math.sin(e.tiltAngle), e.tiltCos = Math.cos(e.tiltAngle), e.random = Math.random() + 2);
                          var n = e.tick++ / e.totalTicks,
                            s = e.x + e.random * e.tiltCos,
                            i = e.y + e.random * e.tiltSin,
                            r = e.wobbleX + e.random * e.tiltCos,
                            o = e.wobbleY + e.random * e.tiltSin;
                          if (t.fillStyle = "rgba(" + e.color.r + ", " + e.color.g + ", " + e.color.b + ", " + (1 - n) + ")", t.beginPath(), a && "path" === e.shape.type && "string" == typeof e.shape.path && Array.isArray(e.shape.matrix)) t.fill(function (t, e, n, s, i, r, a) {
                            var o = new Path2D(t),
                              l = new Path2D();
                            l.addPath(o, new DOMMatrix(e));
                            var u = new Path2D();
                            return u.addPath(l, new DOMMatrix([Math.cos(a) * i, Math.sin(a) * i, -Math.sin(a) * r, Math.cos(a) * r, n, s])), u;
                          }(e.shape.path, e.shape.matrix, e.x, e.y, .1 * Math.abs(r - s), .1 * Math.abs(o - i), Math.PI / 10 * e.wobble));else if ("bitmap" === e.shape.type) {
                            var l = Math.PI / 10 * e.wobble,
                              u = .1 * Math.abs(r - s),
                              c = .1 * Math.abs(o - i),
                              h = e.shape.bitmap.width * e.scalar,
                              p = e.shape.bitmap.height * e.scalar,
                              d = new DOMMatrix([Math.cos(l) * u, Math.sin(l) * u, -Math.sin(l) * c, Math.cos(l) * c, e.x, e.y]);
                            d.multiplySelf(new DOMMatrix(e.shape.matrix));
                            var f = t.createPattern(C.transform(e.shape.bitmap), "no-repeat");
                            f.setTransform(d), t.globalAlpha = 1 - n, t.fillStyle = f, t.fillRect(e.x - h / 2, e.y - p / 2, h, p), t.globalAlpha = 1;
                          } else if ("circle" === e.shape) t.ellipse ? t.ellipse(e.x, e.y, Math.abs(r - s) * e.ovalScalar, Math.abs(o - i) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI) : function (t, e, n, s, i, r, a, o, l) {
                            t.save(), t.translate(e, n), t.rotate(r), t.scale(s, i), t.arc(0, 0, 1, 0, o, void 0), t.restore();
                          }(t, e.x, e.y, Math.abs(r - s) * e.ovalScalar, Math.abs(o - i) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI);else if ("star" === e.shape) for (var g = Math.PI / 2 * 3, m = 4 * e.scalar, y = 8 * e.scalar, b = e.x, v = e.y, w = 5, M = Math.PI / w; w--;) b = e.x + Math.cos(g) * y, v = e.y + Math.sin(g) * y, t.lineTo(b, v), g += M, b = e.x + Math.cos(g) * m, v = e.y + Math.sin(g) * m, t.lineTo(b, v), g += M;else t.moveTo(Math.floor(e.x), Math.floor(e.y)), t.lineTo(Math.floor(e.wobbleX), Math.floor(i)), t.lineTo(Math.floor(r), Math.floor(o)), t.lineTo(Math.floor(s), Math.floor(e.wobbleY));
                          return t.closePath(), t.fill(), e.tick < e.totalTicks;
                        }(p, t);
                      })).length ? l = M.frame(e) : u();
                    }), c = u;
                  });
                return {
                  addFettis: function addFettis(t) {
                    return h = h.concat(t), d;
                  },
                  canvas: t,
                  promise: d,
                  reset: function reset() {
                    l && M.cancel(l), c && c();
                  }
                };
              }(t, L, f, n, r), o.promise);
            }
            function b(n) {
              var s = p || S(n, "disableForReducedMotion", Boolean),
                i = S(n, "zIndex", Number);
              if (s && m) return u(function (t) {
                t();
              });
              l && o ? t = o.canvas : l && !t && (t = function (t) {
                var e = document.createElement("canvas");
                return e.style.position = "fixed", e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", e.style.zIndex = t, e;
              }(i), document.body.appendChild(t)), c && !g && f(t);
              var r = {
                width: t.width,
                height: t.height
              };
              function a() {
                if (d) {
                  var e = {
                    getBoundingClientRect: function getBoundingClientRect() {
                      if (!l) return t.getBoundingClientRect();
                    }
                  };
                  return f(e), void d.postMessage({
                    resize: {
                      width: e.width,
                      height: e.height
                    }
                  });
                }
                r.width = r.height = null;
              }
              function b() {
                o = null, c && (h = !1, e.removeEventListener("resize", a)), l && t && (document.body.removeChild(t), t = null, g = !1);
              }
              return d && !g && d.init(t), g = !0, d && (t.__confetti_initialized = !0), c && !h && (h = !0, e.addEventListener("resize", a, !1)), d ? d.fire(n, r, b) : y(n, r, b);
            }
            return b.reset = function () {
              d && d.reset(), o && o.reset();
            }, b;
          }
          function L() {
            return w || (w = A(null, {
              useWorker: !0,
              resize: !0
            })), w;
          }
          n.exports = function () {
            return L().apply(this, arguments);
          }, n.exports.reset = function () {
            L().reset();
          }, n.exports.create = A, n.exports.shapeFromPath = function (t) {
            if (!a) throw new Error("path confetti are not supported in this browser");
            var e, n;
            "string" == typeof t ? e = t : (e = t.path, n = t.matrix);
            var s = new Path2D(e),
              i = document.createElement("canvas").getContext("2d");
            if (!n) {
              for (var r, o, l = 1e3, u = l, c = l, h = 0, p = 0, d = 0; d < l; d += 2) for (var f = 0; f < l; f += 2) i.isPointInPath(s, d, f, "nonzero") && (u = Math.min(u, d), c = Math.min(c, f), h = Math.max(h, d), p = Math.max(p, f));
              r = h - u, o = p - c;
              var g = Math.min(10 / r, 10 / o);
              n = [g, 0, 0, g, -Math.round(r / 2 + u) * g, -Math.round(o / 2 + c) * g];
            }
            return {
              type: "path",
              path: e,
              matrix: n
            };
          }, n.exports.shapeFromText = function (t) {
            var e,
              n = 1,
              s = "#000000",
              i = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
            "string" == typeof t ? e = t : (e = t.text, n = "scalar" in t ? t.scalar : n, i = "fontFamily" in t ? t.fontFamily : i, s = "color" in t ? t.color : s);
            var r = 10 * n,
              a = r + "px " + i,
              o = new OffscreenCanvas(r, r),
              l = o.getContext("2d");
            l.font = a;
            var u = l.measureText(e),
              c = Math.ceil(u.actualBoundingBoxRight + u.actualBoundingBoxLeft),
              h = Math.ceil(u.actualBoundingBoxAscent + u.actualBoundingBoxDescent),
              p = u.actualBoundingBoxLeft + 2,
              d = u.actualBoundingBoxAscent + 2;
            c += 4, h += 4, (l = (o = new OffscreenCanvas(c, h)).getContext("2d")).font = a, l.fillStyle = s, l.fillText(e, p, d);
            var f = 1 / n;
            return {
              type: "bitmap",
              bitmap: o.transferToImageBitmap(),
              matrix: [f, 0, 0, f, -c * f / 2, -h * f / 2]
            };
          };
        }(function () {
          return "undefined" != typeof window ? window : "undefined" != typeof self ? self : this || {};
        }(), s, !1);
        var i = s.exports;
        var r = s.exports.create;
      }
    },
    e = {};
  function n(s) {
    var i = e[s];
    if (void 0 !== i) return i.exports;
    var r = e[s] = {
      exports: {}
    };
    return t[s](r, r.exports, n), r.exports;
  }
  n.d = function (t, e) {
    for (var s in e) n.o(e, s) && !n.o(t, s) && Object.defineProperty(t, s, {
      enumerable: !0,
      get: e[s]
    });
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function () {
    new (n(349))("#message", {
      strings: ["Here is", "a little thing about me..."],
      typespeed: 30,
      loop: !0
    });
    var t = document.getElementById("email"),
      e = document.getElementById("subsBtn"),
      s = n(685);
    e.addEventListener("click", function () {
      "" === t.value || (t.value = " ");
      var e = document.createElement("canvas");
      e.style.width = "70vw", e.style.height = "70vh", e.style.inset = 0, e.style.zIndex = 9999, e.style.position = "fixed", document.body.appendChild(e), s.create(e, {
        resize: !0,
        particleCount: 100
      })(), e.remove;
    });
    var i = document.querySelectorAll("header nav a"),
      r = document.querySelectorAll("main .card");
    i.forEach(function (t) {
      t.addEventListener("click", function () {
        var e = document.querySelector(".linkActive");
        if (e && e.classList.remove("linkActive"), t.classList.contains("linkActive") || t.classList.add("linkActive"), r.forEach(function (e) {
          e.classList.add("blur-sm"), t.textContent.includes("All") && e.classList.toggle("blur-sm");
        }), t.textContent.includes("About")) {
          var _t = document.getElementById("about");
          _t && _t.classList.toggle("blur-sm");
        }
        if (t.textContent.includes("Project")) {
          var _e = document.getElementById("github");
          if (_e && _e.classList.toggle("blur-sm"), t.textContent.includes("Media")) {
            var _t2 = document.getElementById("insta");
            _t2 && _t2.classList.toggle("blur-sm");
          }
        }
      });
    });
  }();
})();