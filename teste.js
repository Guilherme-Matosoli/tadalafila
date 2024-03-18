(function(w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({
				'gtm.start': new Date().getTime(),
				event: 'gtm.js'
			});
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s),
				dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src =
				'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-PSMT33J');
	</script>
	<script async="" src="https://www.googleoptimize.com/optimize.js?id=OPT-MPD98VM"></script>
	<link href="https://assets.democracynow.org" rel="dns-prefetch" />
	<link href="https://publish.dvlabs.com" rel="dns-prefetch" />
	<title>Donate Now | Democracy Now!</title>
	<link rel="stylesheet" media="all" href="https://assets.democracynow.org/assets/application-6c8fdadc1aa1174a978190628984b01fe925a945d7bde6820e67c91d64ca73ed.css" />
	<script src="https://assets.democracynow.org/assets/application-bb04de04e052792cb22c92cb0f790ca73a4df124c6b3faa20cb3dc461430bf69.js" async="async"></script>
	<script>
		(function(i, s, o, g, r, a, m) {
			i['GoogleAnalyticsObject'] = r;
			i[r] = i[r] || function() {
				(i[r].q = i[r].q || []).push(arguments)
			}, i[r].l = 1 * new Date();
			a = s.createElement(o),
				m = s.getElementsByTagName(o)[0];
			a.async = 1;
			a.src = g;
			m.parentNode.insertBefore(a, m)
		})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

		ga('create', 'UA-57393677-1', {
			'cookieDomain': 'democracynow.org'
		});
		ga('send', 'pageview');
	</script>
	<script>
		var clicky_site_ids = clicky_site_ids || [];
		clicky_site_ids.push(236902);
		(function() {
			var s = document.createElement('script');
			s.type = 'text/javascript';
			s.async = true;
			s.src = '//static.getclicky.com/js';
			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(s);
		})();
	</script>
	<meta content="Please donate today! Your support is vital to sustain and grow Democracy Now!" property="og:title" />
	<meta content="A daily independent global news hour with Amy Goodman &amp; Juan González" property="og:description" />
	<meta content="https://assets.democracynow.org/assets/amy_goodman_at_standing_rock_10162016-23efac5874766a05218dff111fccac64c1d8c9e4378afa6a9bdaa4d5f7977dc5.jpg" property="og:image" />
	<meta content="article" property="og:type" />
	<meta content="https://www.democracynow.org/donate" property="og:url" />
	<meta content="Democracy Now!" property="og:site_name" />
	<meta content="summary_large_image" name="twitter:card" />
	<meta content="@democracynow" name="twitter:site" />
	<link href="/search/opensearch.xml" rel="search" title="Democracy Now! Search" type="application/opensearchdescription+xml" />
	<meta name="csrf-param" content="authenticity_token" />
	<meta name="csrf-token" content="OStpHC7OpVFF0+N6Rjd2uAvYBVpRZRnbjfF/McgdZd0Z5aZXc6yE/YS/IR807EJaUWYr/cYhQ76oDp8IoTKAVg==" />
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<script type="text/javascript">
		window.NREUM || (NREUM = {});
		NREUM.info = {
			"beacon": "bam.nr-data.net",
			"errorBeacon": "bam.nr-data.net",
			"licenseKey": "675b32802f",
			"applicationID": "11193475",
			"transactionName": "cQoKRkNaWlxUShkCXFwEEFteW0UfWFZSA0s=",
			"queueTime": 0,
			"applicationTime": 599,
			"agent": ""
		}
	</script>
	<script type="text/javascript">
		(window.NREUM || (NREUM = {})).init = {
			privacy: {
				cookies_enabled: false
			},
			ajax: {
				deny_list: ["bam.nr-data.net"]
			}
		};
		(window.NREUM || (NREUM = {})).loader_config = {
			xpid: "Ug8EUVdACQIBXVJWAAQ=",
			licenseKey: "675b32802f",
			applicationID: "11193475"
		};; /*! For license information please see nr-loader-full-1.253.0.min.js.LICENSE.txt */
		(() => {
			var e, t, r = {
					234: (e, t, r) => {
						"use strict";
						r.d(t, {
							P_: () => v,
							Mt: () => b,
							C5: () => s,
							DL: () => A,
							OP: () => D,
							lF: () => O,
							Yu: () => E,
							Dg: () => m,
							CX: () => c,
							GE: () => w,
							sU: () => C
						});
						var n = r(8632),
							o = r(9567);
						const i = {
								beacon: n.ce.beacon,
								errorBeacon: n.ce.errorBeacon,
								licenseKey: void 0,
								applicationID: void 0,
								sa: void 0,
								queueTime: void 0,
								applicationTime: void 0,
								ttGuid: void 0,
								user: void 0,
								account: void 0,
								product: void 0,
								extra: void 0,
								jsAttributes: {},
								userAttributes: void 0,
								atts: void 0,
								transactionName: void 0,
								tNamePlain: void 0
							},
							a = {};

						function s(e) {
							if (!e) throw new Error("All info objects require an agent identifier!");
							if (!a[e]) throw new Error("Info for ".concat(e, " was never set"));
							return a[e]
						}

						function c(e, t) {
							if (!e) throw new Error("All info objects require an agent identifier!");
							a[e] = (0, o.D)(t, i);
							const r = (0, n.ek)(e);
							r && (r.info = a[e])
						}
						const d = e => {
							if (!e || "string" != typeof e) return !1;
							try {
								document.createDocumentFragment().querySelector(e)
							} catch {
								return !1
							}
							return !0
						};
						var u = r(7056),
							l = r(50);
						const f = "[data-nr-mask]",
							h = () => {
								const e = {
									mask_selector: "*",
									block_selector: "[data-nr-block]",
									mask_input_options: {
										color: !1,
										date: !1,
										"datetime-local": !1,
										email: !1,
										month: !1,
										number: !1,
										range: !1,
										search: !1,
										tel: !1,
										text: !1,
										time: !1,
										url: !1,
										week: !1,
										textarea: !1,
										select: !1,
										password: !0
									}
								};
								return {
									feature_flags: [],
									proxy: {
										assets: void 0,
										beacon: void 0
									},
									privacy: {
										cookies_enabled: !0
									},
									ajax: {
										deny_list: void 0,
										block_internal: !0,
										enabled: !0,
										harvestTimeSeconds: 10,
										autoStart: !0
									},
									distributed_tracing: {
										enabled: void 0,
										exclude_newrelic_header: void 0,
										cors_use_newrelic_header: void 0,
										cors_use_tracecontext_headers: void 0,
										allowed_origins: void 0
									},
									session: {
										domain: void 0,
										expiresMs: u.oD,
										inactiveMs: u.Hb
									},
									ssl: void 0,
									obfuscate: void 0,
									jserrors: {
										enabled: !0,
										harvestTimeSeconds: 10,
										autoStart: !0
									},
									metrics: {
										enabled: !0,
										autoStart: !0
									},
									page_action: {
										enabled: !0,
										harvestTimeSeconds: 30,
										autoStart: !0
									},
									page_view_event: {
										enabled: !0,
										autoStart: !0
									},
									page_view_timing: {
										enabled: !0,
										harvestTimeSeconds: 30,
										long_task: !1,
										autoStart: !0
									},
									session_trace: {
										enabled: !0,
										harvestTimeSeconds: 10,
										autoStart: !0
									},
									harvest: {
										tooManyRequestsDelay: 60
									},
									session_replay: {
										autoStart: !0,
										enabled: !1,
										harvestTimeSeconds: 60,
										preload: !1,
										sampling_rate: 10,
										error_sampling_rate: 100,
										collect_fonts: !1,
										inline_images: !1,
										inline_stylesheet: !0,
										mask_all_inputs: !0,
										get mask_text_selector() {
											return e.mask_selector
										},
										set mask_text_selector(t) {
											d(t) ? e.mask_selector = "".concat(t, ",").concat(f) : "" === t || null === t ? e.mask_selector = f : (0, l.Z)("An invalid session_replay.mask_selector was provided. '*' will be used.", t)
										},
										get block_class() {
											return "nr-block"
										},
										get ignore_class() {
											return "nr-ignore"
										},
										get mask_text_class() {
											return "nr-mask"
										},
										get block_selector() {
											return e.block_selector
										},
										set block_selector(t) {
											d(t) ? e.block_selector += ",".concat(t) : "" !== t && (0, l.Z)("An invalid session_replay.block_selector was provided and will not be used", t)
										},
										get mask_input_options() {
											return e.mask_input_options
										},
										set mask_input_options(t) {
											t && "object" == typeof t ? e.mask_input_options = {
												...t,
												password: !0
											} : (0, l.Z)("An invalid session_replay.mask_input_option was provided and will not be used", t)
										}
									},
									spa: {
										enabled: !0,
										harvestTimeSeconds: 10,
										autoStart: !0
									},
									soft_navigations: {
										enabled: !0,
										harvestTimeSeconds: 10,
										autoStart: !0
									}
								}
							},
							p = {},
							g = "All configuration objects require an agent identifier!";

						function v(e) {
							if (!e) throw new Error(g);
							if (!p[e]) throw new Error("Configuration for ".concat(e, " was never set"));
							return p[e]
						}

						function m(e, t) {
							if (!e) throw new Error(g);
							p[e] = (0, o.D)(t, h());
							const r = (0, n.ek)(e);
							r && (r.init = p[e])
						}

						function b(e, t) {
							if (!e) throw new Error(g);
							var r = v(e);
							if (r) {
								for (var n = t.split("."), o = 0; o < n.length - 1; o++)
									if ("object" != typeof(r = r[n[o]])) return;
								r = r[n[n.length - 1]]
							}
							return r
						}
						const y = {
								accountID: void 0,
								trustKey: void 0,
								agentID: void 0,
								licenseKey: void 0,
								applicationID: void 0,
								xpid: void 0
							},
							x = {};

						function A(e) {
							if (!e) throw new Error("All loader-config objects require an agent identifier!");
							if (!x[e]) throw new Error("LoaderConfig for ".concat(e, " was never set"));
							return x[e]
						}

						function w(e, t) {
							if (!e) throw new Error("All loader-config objects require an agent identifier!");
							x[e] = (0, o.D)(t, y);
							const r = (0, n.ek)(e);
							r && (r.loader_config = x[e])
						}
						const E = (0, n.mF)().o;
						var _ = r(385),
							S = r(6818);
						const R = {
								buildEnv: S.Re,
								customTransaction: void 0,
								disabled: !1,
								distMethod: S.gF,
								isolatedBacklog: !1,
								loaderType: void 0,
								maxBytes: 3e4,
								offset: Math.floor(_._A?.performance?.timeOrigin || _._A?.performance?.timing?.navigationStart || Date.now()),
								onerror: void 0,
								origin: "" + _._A.location,
								ptid: void 0,
								releaseIds: {},
								session: void 0,
								xhrWrappable: "function" == typeof _._A.XMLHttpRequest?.prototype?.addEventListener,
								version: S.q4,
								denyList: void 0
							},
							T = {};

						function D(e) {
							if (!e) throw new Error("All runtime objects require an agent identifier!");
							if (!T[e]) throw new Error("Runtime for ".concat(e, " was never set"));
							return T[e]
						}

						function C(e, t) {
							if (!e) throw new Error("All runtime objects require an agent identifier!");
							T[e] = (0, o.D)(t, R);
							const r = (0, n.ek)(e);
							r && (r.runtime = T[e])
						}

						function O(e) {
							return function(e) {
								try {
									const t = s(e);
									return !!t.licenseKey && !!t.errorBeacon && !!t.applicationID
								} catch (e) {
									return !1
								}
							}(e)
						}
					},
					9567: (e, t, r) => {
						"use strict";
						r.d(t, {
							D: () => o
						});
						var n = r(50);

						function o(e, t) {
							try {
								if (!e || "object" != typeof e) return (0, n.Z)("Setting a Configurable requires an object as input");
								if (!t || "object" != typeof t) return (0, n.Z)("Setting a Configurable requires a model to set its initial properties");
								const r = Object.create(Object.getPrototypeOf(t), Object.getOwnPropertyDescriptors(t)),
									i = 0 === Object.keys(r).length ? e : r;
								for (let a in i)
									if (void 0 !== e[a]) try {
										Array.isArray(e[a]) && Array.isArray(t[a]) ? r[a] = Array.from(new Set([...e[a], ...t[a]])) : "object" == typeof e[a] && "object" == typeof t[a] ? r[a] = o(e[a], t[a]) : r[a] = e[a]
									} catch (e) {
										(0, n.Z)("An error occurred while setting a property of a Configurable", e)
									}
								return r
							} catch (e) {
								(0, n.Z)("An error occured while setting a Configurable", e)
							}
						}
					},
					6818: (e, t, r) => {
						"use strict";
						r.d(t, {
							Re: () => o,
							gF: () => i,
							lF: () => a,
							q4: () => n
						});
						const n = "1.253.0",
							o = "PROD",
							i = "CDN",
							a = "2.0.0-alpha.11"
					},
					385: (e, t, r) => {
						"use strict";
						r.d(t, {
							FN: () => s,
							IF: () => u,
							Nk: () => f,
							Tt: () => c,
							_A: () => i,
							cv: () => h,
							iS: () => a,
							il: () => n,
							ux: () => d,
							v6: () => o,
							w1: () => l
						});
						const n = "undefined" != typeof window && !!window.document,
							o = "undefined" != typeof WorkerGlobalScope && ("undefined" != typeof self && self instanceof WorkerGlobalScope && self.navigator instanceof WorkerNavigator || "undefined" != typeof globalThis && globalThis instanceof WorkerGlobalScope && globalThis.navigator instanceof WorkerNavigator),
							i = n ? window : "undefined" != typeof WorkerGlobalScope && ("undefined" != typeof self && self instanceof WorkerGlobalScope && self || "undefined" != typeof globalThis && globalThis instanceof WorkerGlobalScope && globalThis),
							a = Boolean("hidden" === i?.document?.visibilityState),
							s = "" + i?.location,
							c = /iPad|iPhone|iPod/.test(i.navigator?.userAgent),
							d = c && "undefined" == typeof SharedWorker,
							u = (() => {
								const e = i.navigator?.userAgent?.match(/Firefox[/\s](\d+\.\d+)/);
								return Array.isArray(e) && e.length >= 2 ? +e[1] : 0
							})(),
							l = Boolean(n && window.document.documentMode),
							f = !!i.navigator?.sendBeacon,
							h = Math.floor(i?.performance?.timeOrigin || i?.performance?.timing?.navigationStart || Date.now())
					},
					9907: (e, t, r) => {
						"use strict";
						r.d(t, {
							A: () => n
						});
						class n {
							constructor(e) {
								this.contextId = e
							}
						}
					},
					8929: (e, t, r) => {
						"use strict";
						r.d(t, {
							v: () => a
						});
						var n = r(8632);
						const o = (0, r(4402).Rl)();
						var i = r(9907);
						class a {
							static contextId = "nr@context:".concat(o);
							static contextOriginalId = "nr@original:".concat(o);
							static contextWrappedId = "nr@wrapped:".concat(a.contextId);
							static getObservationContextByAgentIdentifier(e) {
								const t = (0, n.fP)();
								return Object.keys(t?.initializedAgents || {}).indexOf(e) > -1 ? t.initializedAgents[e].observationContext : void 0
							}
							#e = new WeakMap;
							getCreateContext(e) {
								return this.#e.has(e) || this.#e.set(e, new i.A), this.#e.get(e)
							}
							setContext(e, t) {
								return this.#e.set(e, t), this.#e.get(e)
							}
						}
					},
					1117: (e, t, r) => {
						"use strict";
						r.d(t, {
							w: () => i
						});
						var n = r(50);
						const o = {
							agentIdentifier: "",
							ee: void 0
						};
						class i {
							constructor(e) {
								try {
									if ("object" != typeof e) return (0, n.Z)("shared context requires an object as input");
									this.sharedContext = {}, Object.assign(this.sharedContext, o), Object.entries(e).forEach((e => {
										let [t, r] = e;
										Object.keys(o).includes(t) && (this.sharedContext[t] = r)
									}))
								} catch (e) {
									(0, n.Z)("An error occured while setting SharedContext", e)
								}
							}
						}
					},
					8e3: (e, t, r) => {
						"use strict";
						r.d(t, {
							L: () => u,
							R: () => c
						});
						var n = r(2177),
							o = r(1284),
							i = r(4322),
							a = r(3325);
						const s = {};

						function c(e, t) {
							const r = {
								staged: !1,
								priority: a.p[t] || 0
							};
							d(e), s[e].get(t) || s[e].set(t, r)
						}

						function d(e) {
							e && (s[e] || (s[e] = new Map))
						}

						function u() {
							let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
								t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "feature",
								r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
							if (d(e), !e || !s[e].get(t) || r) return c(t);
							s[e].get(t).staged = !0;
							const a = [...s[e]];

							function c(t) {
								const r = e ? n.ee.get(e) : n.ee,
									a = i.X.handlers;
								if (r.backlog && a) {
									var s = r.backlog[t],
										c = a[t];
									if (c) {
										for (var d = 0; s && d < s.length; ++d) l(s[d], c);
										(0, o.D)(c, (function(e, t) {
											(0, o.D)(t, (function(t, r) {
												r[0].on(e, r[1])
											}))
										}))
									}
									delete a[t], r.backlog[t] = null, r.emit("drain-" + t, [])
								}
							}
							a.every((e => {
								let [t, r] = e;
								return r.staged
							})) && (a.sort(((e, t) => e[1].priority - t[1].priority)), a.forEach((t => {
								let [r] = t;
								s[e].delete(r), c(r)
							})))
						}

						function l(e, t) {
							var r = e[1];
							(0, o.D)(t[r], (function(t, r) {
								var n = e[0];
								if (r[0] === n) {
									var o = r[1],
										i = e[3],
										a = e[2];
									o.apply(i, a)
								}
							}))
						}
					},
					2177: (e, t, r) => {
						"use strict";
						r.d(t, {
							ee: () => c
						});
						var n = r(8632),
							o = r(2210),
							i = r(234),
							a = r(9907),
							s = r(8929);
						const c = function e(t, r) {
								var n = {},
									d = {},
									l = {},
									f = !1;
								try {
									f = 16 === r.length && (0, i.OP)(r).isolatedBacklog
								} catch (e) {}
								var h = {
									on: g,
									addEventListener: g,
									removeEventListener: function(e, t) {
										var r = n[e];
										if (!r) return;
										for (var o = 0; o < r.length; o++) r[o] === t && r.splice(o, 1)
									},
									emit: function(e, r, n, o, i) {
										!1 !== i && (i = !0);
										if (c.aborted && !o) return;
										t && i && t.emit(e, r, n);
										for (var a = p(n), s = v(e), u = s.length, l = 0; l < u; l++) s[l].apply(a, r);
										var f = b()[d[e]];
										f && f.push([h, e, r, a]);
										return a
									},
									get: m,
									listeners: v,
									context: p,
									buffer: function(e, t) {
										const r = b();
										if (t = t || "feature", h.aborted) return;
										Object.entries(e || {}).forEach((e => {
											let [n, o] = e;
											d[o] = t, t in r || (r[t] = [])
										}))
									},
									abort: u,
									aborted: !1,
									isBuffering: function(e) {
										return !!b()[d[e]]
									},
									debugId: r,
									backlog: f ? {} : t && "object" == typeof t.backlog ? t.backlog : {},
									observationContextManager: null
								};
								return h;

								function p(e) {
									return e && e instanceof a.A ? e : e ? (0, o.X)(e, s.v.contextId, (() => h.observationContextManager ? h.observationContextManager.getCreateContext(e) : new a.A(s.v.contextId))) : h.observationContextManager ? h.observationContextManager.getCreateContext({}) : new a.A(s.v.contextId)
								}

								function g(e, t) {
									n[e] = v(e).concat(t)
								}

								function v(e) {
									return n[e] || []
								}

								function m(t) {
									const r = l[t] = l[t] || e(h, t);
									return !r.observationContextManager && h.observationContextManager && (r.observationContextManager = h.observationContextManager), r
								}

								function b() {
									return h.backlog
								}
							}(void 0, "globalEE"),
							d = (0, n.fP)();

						function u() {
							c.aborted = !0, Object.keys(c.backlog).forEach((e => {
								delete c.backlog[e]
							}))
						}
						d.ee || (d.ee = c)
					},
					5546: (e, t, r) => {
						"use strict";
						r.d(t, {
							E: () => n,
							p: () => o
						});
						var n = r(2177).ee.get("handle");

						function o(e, t, r, o, i) {
							i ? (i.buffer([e], o), i.emit(e, t, r)) : (n.buffer([e], o), n.emit(e, t, r))
						}
					},
					4322: (e, t, r) => {
						"use strict";
						r.d(t, {
							X: () => i
						});
						var n = r(5546);
						i.on = a;
						var o = i.handlers = {};

						function i(e, t, r, i) {
							a(i || n.E, o, e, t, r)
						}

						function a(e, t, r, o, i) {
							i || (i = "feature"), e || (e = n.E);
							var a = t[i] = t[i] || {};
							(a[r] = a[r] || []).push([e, o])
						}
					},
					3239: (e, t, r) => {
						"use strict";
						r.d(t, {
							bP: () => s,
							iz: () => c,
							m$: () => a
						});
						var n = r(385);
						let o = !1,
							i = !1;
						try {
							const e = {
								get passive() {
									return o = !0, !1
								},
								get signal() {
									return i = !0, !1
								}
							};
							n._A.addEventListener("test", null, e), n._A.removeEventListener("test", null, e)
						} catch (e) {}

						function a(e, t) {
							return o || i ? {
								capture: !!e,
								passive: o,
								signal: t
							} : !!e
						}

						function s(e, t) {
							let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
								n = arguments.length > 3 ? arguments[3] : void 0;
							window.addEventListener(e, t, a(r, n))
						}

						function c(e, t) {
							let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
								n = arguments.length > 3 ? arguments[3] : void 0;
							document.addEventListener(e, t, a(r, n))
						}
					},
					4402: (e, t, r) => {
						"use strict";
						r.d(t, {
							Ht: () => d,
							M: () => c,
							Rl: () => a,
							ky: () => s
						});
						var n = r(385);
						const o = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";

						function i(e, t) {
							return e ? 15 & e[t] : 16 * Math.random() | 0
						}

						function a() {
							const e = n._A?.crypto || n._A?.msCrypto;
							let t, r = 0;
							return e && e.getRandomValues && (t = e.getRandomValues(new Uint8Array(30))), o.split("").map((e => "x" === e ? i(t, r++).toString(16) : "y" === e ? (3 & i() | 8).toString(16) : e)).join("")
						}

						function s(e) {
							const t = n._A?.crypto || n._A?.msCrypto;
							let r, o = 0;
							t && t.getRandomValues && (r = t.getRandomValues(new Uint8Array(e)));
							const a = [];
							for (var s = 0; s < e; s++) a.push(i(r, o++).toString(16));
							return a.join("")
						}

						function c() {
							return s(16)
						}

						function d() {
							return s(32)
						}
					},
					7056: (e, t, r) => {
						"use strict";
						r.d(t, {
							Bq: () => n,
							Hb: () => a,
							IK: () => d,
							K4: () => o,
							oD: () => i,
							uT: () => c,
							wO: () => s
						});
						const n = "NRBA",
							o = "SESSION",
							i = 144e5,
							a = 18e5,
							s = {
								PAUSE: "session-pause",
								RESET: "session-reset",
								RESUME: "session-resume",
								UPDATE: "session-update"
							},
							c = {
								SAME_TAB: "same-tab",
								CROSS_TAB: "cross-tab"
							},
							d = {
								OFF: 0,
								FULL: 1,
								ERROR: 2
							}
					},
					7894: (e, t, r) => {
						"use strict";

						function n() {
							return Math.floor(performance.now())
						}
						r.d(t, {
							z: () => n
						})
					},
					7243: (e, t, r) => {
						"use strict";
						r.d(t, {
							e: () => o
						});
						var n = r(385);

						function o(e) {
							if (0 === (e || "").indexOf("data:")) return {
								protocol: "data"
							};
							try {
								const t = new URL(e, location.href),
									r = {
										port: t.port,
										hostname: t.hostname,
										pathname: t.pathname,
										search: t.search,
										protocol: t.protocol.slice(0, t.protocol.indexOf(":")),
										sameOrigin: t.protocol === n._A?.location?.protocol && t.host === n._A?.location?.host
									};
								return r.port && "" !== r.port || ("http:" === t.protocol && (r.port = "80"), "https:" === t.protocol && (r.port = "443")), r.pathname && "" !== r.pathname ? r.pathname.startsWith("/") || (r.pathname = "/".concat(r.pathname)) : r.pathname = "/", r
							} catch (e) {
								return {}
							}
						}
					},
					50: (e, t, r) => {
						"use strict";

						function n(e, t) {
							"function" == typeof console.warn && (console.warn("New Relic: ".concat(e)), t && console.warn(t))
						}
						r.d(t, {
							Z: () => n
						})
					},
					2825: (e, t, r) => {
						"use strict";
						r.d(t, {
							N: () => u,
							T: () => l
						});
						var n = r(2177),
							o = r(5546),
							i = r(3325),
							a = r(385);
						const s = "newrelic";
						const c = {
								stn: [i.D.sessionTrace],
								err: [i.D.jserrors, i.D.metrics],
								ins: [i.D.pageAction],
								spa: [i.D.spa, i.D.softNav],
								sr: [i.D.sessionReplay, i.D.sessionTrace]
							},
							d = new Set;

						function u(e, t) {
							const r = n.ee.get(t);
							e && "object" == typeof e && (d.has(t) || (Object.entries(e).forEach((e => {
								let [t, n] = e;
								c[t] ? c[t].forEach((e => {
									n ? (0, o.p)("feat-" + t, [], void 0, e, r) : (0, o.p)("block-" + t, [], void 0, e, r), (0, o.p)("rumresp-" + t, [Boolean(n)], void 0, e, r)
								})) : n && (0, o.p)("feat-" + t, [], void 0, void 0, r), l[t] = Boolean(n)
							})), Object.keys(c).forEach((e => {
								void 0 === l[e] && (c[e]?.forEach((t => (0, o.p)("rumresp-" + e, [!1], void 0, t, r))), l[e] = !1)
							})), d.add(t), function() {
								let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
								try {
									a._A.dispatchEvent(new CustomEvent(s, {
										detail: e
									}))
								} catch (e) {}
							}({
								loaded: !0
							})))
						}
						const l = {}
					},
					2210: (e, t, r) => {
						"use strict";
						r.d(t, {
							X: () => o
						});
						var n = Object.prototype.hasOwnProperty;

						function o(e, t, r) {
							if (n.call(e, t)) return e[t];
							var o = r();
							if (Object.defineProperty && Object.keys) try {
								return Object.defineProperty(e, t, {
									value: o,
									writable: !0,
									enumerable: !1
								}), o
							} catch (e) {}
							return e[t] = o, o
						}
					},
					1284: (e, t, r) => {
						"use strict";
						r.d(t, {
							D: () => n
						});
						const n = (e, t) => Object.entries(e || {}).map((e => {
							let [r, n] = e;
							return t(r, n)
						}))
					},
					4351: (e, t, r) => {
						"use strict";
						r.d(t, {
							P: () => i
						});
						var n = r(2177);
						const o = () => {
							const e = new WeakSet;
							return (t, r) => {
								if ("object" == typeof r && null !== r) {
									if (e.has(r)) return;
									e.add(r)
								}
								return r
							}
						};

						function i(e) {
							try {
								return JSON.stringify(e, o())
							} catch (e) {
								try {
									n.ee.emit("internal-error", [e])
								} catch (e) {}
							}
						}
					},
					3960: (e, t, r) => {
						"use strict";
						r.d(t, {
							KB: () => a,
							b2: () => i
						});
						var n = r(3239);

						function o() {
							return "undefined" == typeof document || "complete" === document.readyState
						}

						function i(e, t) {
							if (o()) return e();
							(0, n.bP)("load", e, t)
						}

						function a(e) {
							if (o()) return e();
							(0, n.iz)("DOMContentLoaded", e)
						}
					},
					8632: (e, t, r) => {
						"use strict";
						r.d(t, {
							EZ: () => u,
							ce: () => i,
							ek: () => d,
							fP: () => a,
							gG: () => l,
							h5: () => c,
							mF: () => s
						});
						var n = r(7894),
							o = r(385);
						const i = {
							beacon: "bam.nr-data.net",
							errorBeacon: "bam.nr-data.net"
						};

						function a() {
							return o._A.NREUM || (o._A.NREUM = {}), void 0 === o._A.newrelic && (o._A.newrelic = o._A.NREUM), o._A.NREUM
						}

						function s() {
							let e = a();
							return e.o || (e.o = {
								ST: o._A.setTimeout,
								SI: o._A.setImmediate,
								CT: o._A.clearTimeout,
								XHR: o._A.XMLHttpRequest,
								REQ: o._A.Request,
								EV: o._A.Event,
								PR: o._A.Promise,
								MO: o._A.MutationObserver,
								FETCH: o._A.fetch
							}), e
						}

						function c(e, t) {
							let r = a();
							r.initializedAgents ??= {}, t.initializedAt = {
								ms: (0, n.z)(),
								date: new Date
							}, r.initializedAgents[e] = t
						}

						function d(e) {
							let t = a();
							return t.initializedAgents?.[e]
						}

						function u(e, t) {
							a()[e] = t
						}

						function l() {
							return function() {
									let e = a();
									const t = e.info || {};
									e.info = {
										beacon: i.beacon,
										errorBeacon: i.errorBeacon,
										...t
									}
								}(),
								function() {
									let e = a();
									const t = e.init || {};
									e.init = {
										...t
									}
								}(), s(),
								function() {
									let e = a();
									const t = e.loader_config || {};
									e.loader_config = {
										...t
									}
								}(), a()
						}
					},
					7956: (e, t, r) => {
						"use strict";
						r.d(t, {
							N: () => o
						});
						var n = r(3239);

						function o(e) {
							let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
								r = arguments.length > 2 ? arguments[2] : void 0,
								o = arguments.length > 3 ? arguments[3] : void 0;
							(0, n.iz)("visibilitychange", (function() {
								if (t) return void("hidden" === document.visibilityState && e());
								e(document.visibilityState)
							}), r, o)
						}
					},
					7806: (e, t, r) => {
						"use strict";
						r.d(t, {
							em: () => v,
							u5: () => S,
							QU: () => D,
							Kf: () => P
						});
						var n = r(2177),
							o = r(8929),
							i = Object.prototype.hasOwnProperty,
							a = !1;

						function s(e, t) {
							return e || (e = n.ee), r.inPlace = function(e, t, n, o, i) {
								n || (n = "");
								const a = "-" === n.charAt(0);
								for (let s = 0; s < t.length; s++) {
									const c = t[s],
										u = e[c];
									d(u) || (e[c] = r(u, a ? c + n : n, o, c, i))
								}
							}, r.flag = o.v.contextOriginalId, r;

							function r(t, r, n, a, u) {
								return d(t) ? t : (r || (r = ""), nrWrapper[o.v.contextOriginalId] = t, function(e, t, r) {
									if (Object.defineProperty && Object.keys) try {
										return Object.keys(e).forEach((function(r) {
											Object.defineProperty(t, r, {
												get: function() {
													return e[r]
												},
												set: function(t) {
													return e[r] = t, t
												}
											})
										})), t
									} catch (e) {
										c([e], r)
									}
									for (var n in e) i.call(e, n) && (t[n] = e[n])
								}(t, nrWrapper, e), nrWrapper);

								function nrWrapper() {
									var o, i, d, l;
									try {
										i = this, o = [...arguments], d = "function" == typeof n ? n(o, i) : n || {}
									} catch (t) {
										c([t, "", [o, i, a], d], e)
									}
									s(r + "start", [o, i, a], d, u);
									try {
										return l = t.apply(i, o)
									} catch (e) {
										throw s(r + "err", [o, i, e], d, u), e
									} finally {
										s(r + "end", [o, i, l], d, u)
									}
								}
							}

							function s(r, n, o, i) {
								if (!a || t) {
									var s = a;
									a = !0;
									try {
										e.emit(r, n, o, t, i)
									} catch (t) {
										c([t, r, n, o], e)
									}
									a = s
								}
							}
						}

						function c(e, t) {
							t || (t = n.ee);
							try {
								t.emit("internal-error", e)
							} catch (e) {}
						}

						function d(e) {
							return !(e && "function" == typeof e && e.apply && !e[o.v.contextOriginalId])
						}
						var u = r(2210),
							l = r(385);
						const f = {},
							h = l._A.XMLHttpRequest,
							p = "addEventListener",
							g = "removeEventListener";

						function v(e) {
							var t = function(e) {
								return (e || n.ee).get("events")
							}(e);
							if (f[t.debugId]++) return t;
							f[t.debugId] = 1;
							var r = s(t, !0);

							function i(e) {
								r.inPlace(e, [p, g], "-", a)
							}

							function a(e, t) {
								return e[1]
							}
							return "getPrototypeOf" in Object && (l.il && m(document, i), m(l._A, i), m(h.prototype, i)), t.on(p + "-start", (function(e, t) {
								var n = e[1];
								if (null !== n && ("function" == typeof n || "object" == typeof n)) {
									var i = (0, u.X)(n, o.v.contextWrappedId, (function() {
										var e = {
											object: function() {
												if ("function" != typeof n.handleEvent) return;
												return n.handleEvent.apply(n, arguments)
											},
											function: n
										} [typeof n];
										return e ? r(e, "fn-", null, e.name || "anonymous") : n
									}));
									this.wrapped = e[1] = i
								}
							})), t.on(g + "-start", (function(e) {
								e[1] = this.wrapped || e[1]
							})), t
						}

						function m(e, t) {
							let r = e;
							for (;
								"object" == typeof r && !Object.prototype.hasOwnProperty.call(r, p);) r = Object.getPrototypeOf(r);
							for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) o[i - 2] = arguments[i];
							r && t(r, ...o)
						}
						var b = "fetch-",
							y = b + "body-",
							x = ["arrayBuffer", "blob", "json", "text", "formData"],
							A = l._A.Request,
							w = l._A.Response,
							E = "prototype";
						const _ = {};

						function S(e) {
							const t = function(e) {
								return (e || n.ee).get("fetch")
							}(e);
							if (!(A && w && l._A.fetch)) return t;
							if (_[t.debugId]++) return t;

							function r(e, r, n) {
								var i = e[r];
								"function" == typeof i && (e[r] = function() {
									var e, r = [...arguments],
										a = {};
									t.emit(n + "before-start", [r], a), a[o.v.contextId] && a[o.v.contextId].dt && (e = a[o.v.contextId].dt);
									var s = i.apply(this, r);
									return t.emit(n + "start", [r, e], s), s.then((function(e) {
										return t.emit(n + "end", [null, e], s), e
									}), (function(e) {
										throw t.emit(n + "end", [e], s), e
									}))
								})
							}
							return _[t.debugId] = 1, x.forEach((e => {
								r(A[E], e, y), r(w[E], e, y)
							})), r(l._A, "fetch", b), t.on(b + "end", (function(e, r) {
								var n = this;
								if (r) {
									var o = r.headers.get("content-length");
									null !== o && (n.rxSize = o), t.emit(b + "done", [null, r], n)
								} else t.emit(b + "done", [e], n)
							})), t
						}
						const R = {},
							T = ["pushState", "replaceState"];

						function D(e) {
							const t = function(e) {
								return (e || n.ee).get("history")
							}(e);
							return !l.il || R[t.debugId]++ || (R[t.debugId] = 1, s(t).inPlace(window.history, T, "-")), t
						}
						var C = r(3239);
						var O = r(50);
						const I = {},
							j = ["open", "send"];

						function P(e) {
							var t = e || n.ee;
							const r = function(e) {
								return (e || n.ee).get("xhr")
							}(t);
							if (I[r.debugId]++) return r;
							I[r.debugId] = 1, v(t);
							var o = s(r),
								i = l._A.XMLHttpRequest,
								a = l._A.MutationObserver,
								c = l._A.Promise,
								d = l._A.setInterval,
								u = "readystatechange",
								f = ["onload", "onerror", "onabort", "onloadstart", "onloadend", "onprogress", "ontimeout"],
								h = [],
								p = l._A.XMLHttpRequest = function(e) {
									const t = new i(e),
										n = r.context(t);
									try {
										r.emit("new-xhr", [t], n), t.addEventListener(u, (a = n, function() {
											var e = this;
											e.readyState > 3 && !a.resolved && (a.resolved = !0, r.emit("xhr-resolved", [], e)), o.inPlace(e, f, "fn-", A)
										}), (0, C.m$)(!1))
									} catch (e) {
										(0, O.Z)("An error occurred while intercepting XHR", e);
										try {
											r.emit("internal-error", [e])
										} catch (e) {}
									}
									var a;
									return t
								};

							function g(e, t) {
								o.inPlace(t, ["onreadystatechange"], "fn-", A)
							}
							if (function(e, t) {
									for (var r in e) t[r] = e[r]
								}(i, p), p.prototype = i.prototype, o.inPlace(p.prototype, j, "-xhr-", A), r.on("send-xhr-start", (function(e, t) {
									g(e, t),
										function(e) {
											h.push(e), a && (m ? m.then(x) : d ? d(x) : (b = -b, y.data = b))
										}(t)
								})), r.on("open-xhr-start", g), a) {
								var m = c && c.resolve();
								if (!d && !c) {
									var b = 1,
										y = document.createTextNode(b);
									new a(x).observe(y, {
										characterData: !0
									})
								}
							} else t.on("fn-end", (function(e) {
								e[0] && e[0].type === u || x()
							}));

							function x() {
								for (var e = 0; e < h.length; e++) g(0, h[e]);
								h.length && (h = [])
							}

							function A(e, t) {
								return t
							}
							return r
						}
					},
					7825: (e, t, r) => {
						"use strict";
						r.d(t, {
							t: () => n
						});
						const n = r(3325).D.ajax
					},
					6660: (e, t, r) => {
						"use strict";
						r.d(t, {
							t: () => n
						});
						const n = r(3325).D.jserrors
					},
					3081: (e, t, r) => {
						"use strict";
						r.d(t, {
							gF: () => i,
							mY: () => o,
							t9: () => n,
							vz: () => s,
							xS: () => a
						});
						const n = r(3325).D.metrics,
							o = "sm",
							i = "cm",
							a = "storeSupportabilityMetrics",
							s = "storeEventMetrics"
					},
					4649: (e, t, r) => {
						"use strict";
						r.d(t, {
							t: () => n
						});
						const n = r(3325).D.pageAction
					},
					7633: (e, t, r) => {
						"use strict";
						r.d(t, {
							t: () => n
						});
						const n = r(3325).D.pageViewEvent
					},
					9251: (e, t, r) => {
						"use strict";
						r.d(t, {
							t: () => n
						});
						const n = r(3325).D.pageViewTiming
					},
					7144: (e, t, r) => {
						"use strict";
						r.d(t, {
							Ef: () => i,
							J0: () => f,
							Mi: () => l,
							Vb: () => a,
							Ye: () => c,
							fm: () => d,
							i9: () => s,
							t9: () => o,
							u0: () => u
						});
						var n = r(7056);
						const o = r(3325).D.sessionReplay,
							i = {
								RECORD: "recordReplay",
								PAUSE: "pauseReplay"
							},
							a = .12,
							s = {
								DomContentLoaded: 0,
								Load: 1,
								FullSnapshot: 2,
								IncrementalSnapshot: 3,
								Meta: 4,
								Custom: 5
							},
							c = 1e6,
							d = 64e3,
							u = {
								[n.IK.ERROR]: 15e3,
								[n.IK.FULL]: 3e5,
								[n.IK.OFF]: 0
							},
							l = {
								RESET: {
									message: "Session was reset",
									sm: "Reset"
								},
								IMPORT: {
									message: "Recorder failed to import",
									sm: "Import"
								},
								TOO_MANY: {
									message: "429: Too Many Requests",
									sm: "Too-Many"
								},
								TOO_BIG: {
									message: "Payload was too large",
									sm: "Too-Big"
								},
								CROSS_TAB: {
									message: "Session Entity was set to OFF on another tab",
									sm: "Cross-Tab"
								},
								ENTITLEMENTS: {
									message: "Session Replay is not allowed and will not be started",
									sm: "Entitlement"
								}
							},
							f = 5e3
					},
					3614: (e, t, r) => {
						"use strict";
						r.d(t, {
							BST_RESOURCE: () => o,
							END: () => s,
							FEATURE_NAME: () => n,
							FN_END: () => d,
							FN_START: () => c,
							PUSH_STATE: () => u,
							RESOURCE: () => i,
							START: () => a
						});
						const n = r(3325).D.sessionTrace,
							o = "bstResource",
							i = "resource",
							a = "-start",
							s = "-end",
							c = "fn" + a,
							d = "fn" + s,
							u = "pushState"
					},
					5938: (e, t, r) => {
						"use strict";
						r.d(t, {
							W: () => o
						});
						var n = r(2177);
						class o {
							constructor(e, t, r) {
								this.agentIdentifier = e, this.aggregator = t, this.ee = n.ee.get(e), this.featureName = r, this.blocked = !1
							}
						}
					},
					8862: (e, t, r) => {
						"use strict";
						r.d(t, {
							j: () => A
						});
						var n = r(3325),
							o = r(234),
							i = r(5546),
							a = r(2177),
							s = r(7894),
							c = r(8e3),
							d = r(3960),
							u = r(385),
							l = r(50),
							f = r(3081),
							h = r(8632),
							p = r(7144);
						const g = ["setErrorHandler", "finished", "addToTrace", "addRelease", "addPageAction", "setCurrentRouteName", "setPageViewName", "setCustomAttribute", "interaction", "noticeError", "setUserId", "setApplicationVersion", "start", "recordReplay", "pauseReplay", p.Ef.RECORD, p.Ef.PAUSE],
							v = ["setErrorHandler", "finished", "addToTrace", "addRelease"];

						function m() {
							const e = (0, h.gG)();
							g.forEach((t => {
								e[t] = function() {
									for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
									return function(t) {
										for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
										let i = [];
										return Object.values(e.initializedAgents).forEach((e => {
											e.exposed && e.api[t] && i.push(e.api[t](...n))
										})), i.length > 1 ? i : i[0]
									}(t, ...n)
								}
							}))
						}
						var b = r(2825);
						const y = e => {
							const t = e.startsWith("http");
							e += "/", r.p = t ? e : "https://" + e
						};
						let x = !1;

						function A(e) {
							let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								g = arguments.length > 2 ? arguments[2] : void 0,
								A = arguments.length > 3 ? arguments[3] : void 0,
								{
									init: w,
									info: E,
									loader_config: _,
									runtime: S = {
										loaderType: g
									},
									exposed: R = !0
								} = t;
							const T = (0, h.gG)();
							E || (w = T.init, E = T.info, _ = T.loader_config), (0, o.Dg)(e.agentIdentifier, w || {}), (0, o.GE)(e.agentIdentifier, _ || {}), E.jsAttributes ??= {}, u.v6 && (E.jsAttributes.isWorker = !0), (0, o.CX)(e.agentIdentifier, E);
							const D = (0, o.P_)(e.agentIdentifier),
								C = [E.beacon, E.errorBeacon];
							x || (D.proxy.assets && (y(D.proxy.assets), C.push(D.proxy.assets)), D.proxy.beacon && C.push(D.proxy.beacon), m(), (0, h.EZ)("activatedFeatures", b.T), e.runSoftNavOverSpa &&= !0 === D.soft_navigations.enabled && D.feature_flags.includes("soft_nav")), S.denyList = [...D.ajax.deny_list || [], ...D.ajax.block_internal ? C : []], (0, o.sU)(e.agentIdentifier, S), void 0 === e.api && (e.api = function(e, t) {
								let h = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
								t || (0, c.R)(e, "api");
								const g = {};
								var m = a.ee.get(e),
									b = m.get("tracer"),
									y = "api-",
									x = y + "ixn-";

								function A(t, r, n, i) {
									const a = (0, o.C5)(e);
									return null === r ? delete a.jsAttributes[t] : (0, o.CX)(e, {
										...a,
										jsAttributes: {
											...a.jsAttributes,
											[t]: r
										}
									}), _(y, n, !0, i || null === r ? "session" : void 0)(t, r)
								}

								function w() {}
								v.forEach((e => {
									g[e] = _(y, e, !0, "api")
								})), g.addPageAction = _(y, "addPageAction", !0, n.D.pageAction), g.setPageViewName = function(t, r) {
									if ("string" == typeof t) return "/" !== t.charAt(0) && (t = "/" + t), (0, o.OP)(e).customTransaction = (r || "http://custom.transaction") + t, _(y, "setPageViewName", !0)()
								}, g.setCustomAttribute = function(e, t) {
									let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
									if ("string" == typeof e) {
										if (["string", "number", "boolean"].includes(typeof t) || null === t) return A(e, t, "setCustomAttribute", r);
										(0, l.Z)("Failed to execute setCustomAttribute.\nNon-null value must be a string, number or boolean type, but a type of <".concat(typeof t, "> was provided."))
									} else(0, l.Z)("Failed to execute setCustomAttribute.\nName must be a string type, but a type of <".concat(typeof e, "> was provided."))
								}, g.setUserId = function(e) {
									if ("string" == typeof e || null === e) return A("enduser.id", e, "setUserId", !0);
									(0, l.Z)("Failed to execute setUserId.\nNon-null value must be a string type, but a type of <".concat(typeof e, "> was provided."))
								}, g.setApplicationVersion = function(e) {
									if ("string" == typeof e || null === e) return A("application.version", e, "setApplicationVersion", !1);
									(0, l.Z)("Failed to execute setApplicationVersion. Expected <String | null>, but got <".concat(typeof e, ">."))
								}, g.start = e => {
									try {
										const t = e ? "defined" : "undefined";
										(0, i.p)(f.xS, ["API/start/".concat(t, "/called")], void 0, n.D.metrics, m);
										const r = Object.values(n.D);
										if (void 0 === e) e = r;
										else {
											if ((e = Array.isArray(e) && e.length ? e : [e]).some((e => !r.includes(e)))) return (0, l.Z)("Invalid feature name supplied. Acceptable feature names are: ".concat(r));
											e.includes(n.D.pageViewEvent) || e.push(n.D.pageViewEvent)
										}
										e.forEach((e => {
											m.emit("".concat(e, "-opt-in"))
										}))
									} catch (e) {
										(0, l.Z)("An unexpected issue occurred", e)
									}
								}, g[p.Ef.RECORD] = function() {
									(0, i.p)(f.xS, ["API/recordReplay/called"], void 0, n.D.metrics, m), (0, i.p)(p.Ef.RECORD, [], void 0, n.D.sessionReplay, m)
								}, g[p.Ef.PAUSE] = function() {
									(0, i.p)(f.xS, ["API/pauseReplay/called"], void 0, n.D.metrics, m), (0, i.p)(p.Ef.PAUSE, [], void 0, n.D.sessionReplay, m)
								}, g.interaction = function(e) {
									return (new w).get("object" == typeof e ? e : {})
								};
								const E = w.prototype = {
									createTracer: function(e, t) {
										var r = {},
											o = this,
											a = "function" == typeof t;
										return (0, i.p)(f.xS, ["API/createTracer/called"], void 0, n.D.metrics, m), h || (0, i.p)(x + "tracer", [(0, s.z)(), e, r], o, n.D.spa, m),
											function() {
												if (b.emit((a ? "" : "no-") + "fn-start", [(0, s.z)(), o, a], r), a) try {
													return t.apply(this, arguments)
												} catch (e) {
													throw b.emit("fn-err", [arguments, this, e], r), e
												} finally {
													b.emit("fn-end", [(0, s.z)()], r)
												}
											}
									}
								};

								function _(e, t, r, o) {
									return function() {
										return (0, i.p)(f.xS, ["API/" + t + "/called"], void 0, n.D.metrics, m), o && (0, i.p)(e + t, [(0, s.z)(), ...arguments], r ? null : this, o, m), r ? void 0 : this
									}
								}

								function S() {
									r.e(63).then(r.bind(r, 7438)).then((t => {
										let {
											setAPI: r
										} = t;
										r(e), (0, c.L)(e, "api")
									})).catch((() => {
										(0, l.Z)("Downloading runtime APIs failed..."), (0, c.L)(e, "api", !0)
									}))
								}
								return ["actionText", "setName", "setAttribute", "save", "ignore", "onEnd", "getContext", "end", "get"].forEach((e => {
									E[e] = _(x, e, void 0, h ? n.D.softNav : n.D.spa)
								})), g.setCurrentRouteName = h ? _(x, "routeName", void 0, n.D.softNav) : _(y, "routeName", !0, n.D.spa), g.noticeError = function(e, t) {
									"string" == typeof e && (e = new Error(e)), (0, i.p)(f.xS, ["API/noticeError/called"], void 0, n.D.metrics, m), (0, i.p)("err", [e, (0, s.z)(), !1, t], void 0, n.D.jserrors, m)
								}, u.il ? (0, d.b2)((() => S()), !0) : S(), g
							}(e.agentIdentifier, A, e.runSoftNavOverSpa)), void 0 === e.exposed && (e.exposed = R), x = !0
						}
					},
					1926: (e, t, r) => {
						r.nc = (() => {
							try {
								return document?.currentScript?.nonce
							} catch (e) {}
							return ""
						})()
					},
					3325: (e, t, r) => {
						"use strict";
						r.d(t, {
							D: () => n,
							p: () => o
						});
						const n = {
								ajax: "ajax",
								jserrors: "jserrors",
								metrics: "metrics",
								pageAction: "page_action",
								pageViewEvent: "page_view_event",
								pageViewTiming: "page_view_timing",
								sessionReplay: "session_replay",
								sessionTrace: "session_trace",
								softNav: "soft_navigations",
								spa: "spa"
							},
							o = {
								[n.pageViewEvent]: 1,
								[n.pageViewTiming]: 2,
								[n.metrics]: 3,
								[n.jserrors]: 4,
								[n.ajax]: 5,
								[n.sessionTrace]: 6,
								[n.pageAction]: 7,
								[n.spa]: 8,
								[n.softNav]: 9,
								[n.sessionReplay]: 10
							}
					}
				},
				n = {};

			function o(e) {
				var t = n[e];
				if (void 0 !== t) return t.exports;
				var i = n[e] = {
					exports: {}
				};
				return r[e](i, i.exports, o), i.exports
			}
			o.m = r, o.d = (e, t) => {
				for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, {
					enumerable: !0,
					get: t[r]
				})
			}, o.f = {}, o.e = e => Promise.all(Object.keys(o.f).reduce(((t, r) => (o.f[r](e, t), t)), [])), o.u = e => ({
				63: "nr-full",
				110: "nr-full-compressor",
				379: "nr-full-recorder"
			} [e] + "-1.253.0.min.js"), o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, t = "NRBA-1.253.0.PROD:", o.l = (r, n, i, a) => {
				if (e[r]) e[r].push(n);
				else {
					var s, c;
					if (void 0 !== i)
						for (var d = document.getElementsByTagName("script"), u = 0; u < d.length; u++) {
							var l = d[u];
							if (l.getAttribute("src") == r || l.getAttribute("data-webpack") == t + i) {
								s = l;
								break
							}
						}
					if (!s) {
						c = !0;
						var f = {
							63: "sha512-j+7ibjVKvz4TaznW3oG21bC+my3ErAHEw+iLhjg6JF4GkA+JUsl27HO4n5H27nNBpNza6/00FZDictaoaofnzg==",
							379: "sha512-oJwGDU774Z+Kfq7rQ6dqhvDHoklX/TmRgGKNMRPFmT6mZ9sPKEJb8RrgN2IDfWRYESxVOpAJt8VemBmD2qWt4w==",
							110: "sha512-v+WAs9pS7SzevyYMqbI2l1ML7kONdL1DCwww+7dFnJg2iNt0zd0v62EehYAcvyFOogG5Nn663Y0P4vnTrZKc9w=="
						};
						(s = document.createElement("script")).charset = "utf-8", s.timeout = 120, o.nc && s.setAttribute("nonce", o.nc), s.setAttribute("data-webpack", t + i), s.src = r, 0 !== s.src.indexOf(window.location.origin + "/") && (s.crossOrigin = "anonymous"), f[a] && (s.integrity = f[a])
					}
					e[r] = [n];
					var h = (t, n) => {
							s.onerror = s.onload = null, clearTimeout(p);
							var o = e[r];
							if (delete e[r], s.parentNode && s.parentNode.removeChild(s), o && o.forEach((e => e(n))), t) return t(n)
						},
						p = setTimeout(h.bind(null, void 0, {
							type: "timeout",
							target: s
						}), 12e4);
					s.onerror = h.bind(null, s.onerror), s.onload = h.bind(null, s.onload), c && document.head.appendChild(s)
				}
			}, o.r = e => {
				"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
					value: "Module"
				}), Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}, o.p = "https://js-agent.newrelic.com/", (() => {
				var e = {
					29: 0,
					789: 0
				};
				o.f.j = (t, r) => {
					var n = o.o(e, t) ? e[t] : void 0;
					if (0 !== n)
						if (n) r.push(n[2]);
						else {
							var i = new Promise(((r, o) => n = e[t] = [r, o]));
							r.push(n[2] = i);
							var a = o.p + o.u(t),
								s = new Error;
							o.l(a, (r => {
								if (o.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
									var i = r && ("load" === r.type ? "missing" : r.type),
										a = r && r.target && r.target.src;
									s.message = "Loading chunk " + t + " failed.\n(" + i + ": " + a + ")", s.name = "ChunkLoadError", s.type = i, s.request = a, n[1](s)
								}
							}), "chunk-" + t, t)
						}
				};
				var t = (t, r) => {
						var n, i, [a, s, c] = r,
							d = 0;
						if (a.some((t => 0 !== e[t]))) {
							for (n in s) o.o(s, n) && (o.m[n] = s[n]);
							if (c) c(o)
						}
						for (t && t(r); d < a.length; d++) i = a[d], o.o(e, i) && e[i] && e[i][0](), e[i] = 0
					},
					r = self["webpackChunk:NRBA-1.253.0.PROD"] = self["webpackChunk:NRBA-1.253.0.PROD"] || [];
				r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
			})(), (() => {
				"use strict";
				o(1926);
				var e = o(50),
					t = o(7144),
					r = o(8929),
					n = o(4402),
					i = o(2177);
				class a {
					agentIdentifier;
					observationContext = new r.v;
					constructor() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, n.ky)(16);
						this.agentIdentifier = e;
						i.ee.get(e).observationContext = this.observationContext
					}
					#t(t) {
						for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
						if ("function" == typeof this.api?.[t]) return this.api[t](...n);
						(0, e.Z)("Call to agent api ".concat(t, " failed. The API is not currently initialized."))
					}
					addPageAction(e, t) {
						return this.#t("addPageAction", e, t)
					}
					setPageViewName(e, t) {
						return this.#t("setPageViewName", e, t)
					}
					setCustomAttribute(e, t, r) {
						return this.#t("setCustomAttribute", e, t, r)
					}
					noticeError(e, t) {
						return this.#t("noticeError", e, t)
					}
					setUserId(e) {
						return this.#t("setUserId", e)
					}
					setApplicationVersion(e) {
						return this.#t("setApplicationVersion", e)
					}
					setErrorHandler(e) {
						return this.#t("setErrorHandler", e)
					}
					finished(e) {
						return this.#t("finished", e)
					}
					addRelease(e, t) {
						return this.#t("addRelease", e, t)
					}
					start(e) {
						return this.#t("start", e)
					}
					recordReplay() {
						return this.#t(t.Ef.RECORD)
					}
					pauseReplay() {
						return this.#t(t.Ef.PAUSE)
					}
					addToTrace(e) {
						return this.#t("addToTrace", e)
					}
					setCurrentRouteName(e) {
						return this.#t("setCurrentRouteName", e)
					}
					interaction() {
						return this.#t("interaction")
					}
				}
				var s = o(3325),
					c = o(234);
				const d = Object.values(s.D);

				function u(e) {
					const t = {};
					return d.forEach((r => {
						t[r] = function(e, t) {
							return !0 === (0, c.Mt)(t, "".concat(e, ".enabled"))
						}(r, e)
					})), t
				}
				var l = o(8862);
				var f = o(8e3),
					h = o(5938),
					p = o(3960),
					g = o(385);
				const v = e => g.il && !0 === (0, c.Mt)(e, "privacy.cookies_enabled");

				function m(e) {
					return c.Yu.MO && v && !0 === (0, c.Mt)(e, "session_trace.enabled")
				}

				function b(e) {
					return !0 === (0, c.Mt)(e, "session_replay.preload") && m(e)
				}
				class y extends h.W {
					constructor(e, t, r) {
						let n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
						super(e, t, r), this.auto = n, this.abortHandler = void 0, this.featAggregate = void 0, this.onAggregateImported = void 0, !1 === (0, c.Mt)(this.agentIdentifier, "".concat(this.featureName, ".autoStart")) && (this.auto = !1), this.auto && (0, f.R)(e, r)
					}
					importAggregator() {
						let t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						if (this.featAggregate) return;
						if (!this.auto) return void this.ee.on("".concat(this.featureName, "-opt-in"), (() => {
							(0, f.R)(this.agentIdentifier, this.featureName), this.auto = !0, this.importAggregator()
						}));
						this.onAggregateImported = new Promise((e => {
							t = e
						}));
						const n = async () => {
							let n;
							try {
								if (v(this.agentIdentifier)) {
									const {
										setupAgentSession: e
									} = await o.e(63).then(o.bind(o, 1656));
									n = e(this.agentIdentifier)
								}
							} catch (t) {
								(0, e.Z)("A problem occurred when starting up session manager. This page will not start or extend any session.", t), this.featureName === s.D.sessionReplay && this.abortHandler?.()
							}
							try {
								if (!this.#r(this.featureName, n)) return (0, f.L)(this.agentIdentifier, this.featureName), void t(!1);
								const {
									lazyFeatureLoader: e
								} = await o.e(63).then(o.bind(o, 8582)), {
									Aggregate: i
								} = await e(this.featureName, "aggregate");
								this.featAggregate = new i(this.agentIdentifier, this.aggregator, r), t(!0)
							} catch (r) {
								(0, e.Z)("Downloading and initializing ".concat(this.featureName, " failed..."), r), this.abortHandler?.(), (0, f.L)(this.agentIdentifier, this.featureName, !0), t(!1)
							}
						};
						g.il ? (0, p.b2)((() => n()), !0) : n()
					}
					#r(e, t) {
						return e !== s.D.sessionReplay || (r = this.agentIdentifier, n = t, !(!m(r) || !n?.isNew && !n?.state.sessionReplayMode));
						var r, n
					}
				}
				var x = o(7633);
				class A extends y {
					static featureName = x.t;
					constructor(e, t) {
						let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
						super(e, t, x.t, r), this.importAggregator()
					}
				}
				var w = o(1117),
					E = o(1284);
				class _ extends w.w {
					constructor(e) {
						super(e), this.aggregatedData = {}
					}
					store(e, t, r, n, o) {
						var i = this.getBucket(e, t, r, o);
						return i.metrics = function(e, t) {
							t || (t = {
								count: 0
							});
							return t.count += 1, (0, E.D)(e, (function(e, r) {
								t[e] = S(r, t[e])
							})), t
						}(n, i.metrics), i
					}
					merge(e, t, r, n, o) {
						var i = this.getBucket(e, t, n, o);
						if (i.metrics) {
							var a = i.metrics;
							a.count += r.count, (0, E.D)(r, (function(e, t) {
								if ("count" !== e) {
									var n = a[e],
										o = r[e];
									o && !o.c ? a[e] = S(o.t, n) : a[e] = function(e, t) {
										if (!t) return e;
										t.c || (t = R(t.t));
										return t.min = Math.min(e.min, t.min), t.max = Math.max(e.max, t.max), t.t += e.t, t.sos += e.sos, t.c += e.c, t
									}(o, a[e])
								}
							}))
						} else i.metrics = r
					}
					storeMetric(e, t, r, n) {
						var o = this.getBucket(e, t, r);
						return o.stats = S(n, o.stats), o
					}
					getBucket(e, t, r, n) {
						this.aggregatedData[e] || (this.aggregatedData[e] = {});
						var o = this.aggregatedData[e][t];
						return o || (o = this.aggregatedData[e][t] = {
							params: r || {}
						}, n && (o.custom = n)), o
					}
					get(e, t) {
						return t ? this.aggregatedData[e] && this.aggregatedData[e][t] : this.aggregatedData[e]
					}
					take(e) {
						for (var t = {}, r = "", n = !1, o = 0; o < e.length; o++) t[r = e[o]] = Object.values(this.aggregatedData[r] || {}), t[r].length && (n = !0), delete this.aggregatedData[r];
						return n ? t : null
					}
				}

				function S(e, t) {
					return null == e ? function(e) {
						e ? e.c++ : e = {
							c: 1
						};
						return e
					}(t) : t ? (t.c || (t = R(t.t)), t.c += 1, t.t += e, t.sos += e * e, e > t.max && (t.max = e), e < t.min && (t.min = e), t) : {
						t: e
					}
				}

				function R(e) {
					return {
						t: e,
						min: e,
						max: e,
						sos: e * e,
						c: 1
					}
				}
				var T = o(8632),
					D = o(4351);
				var C = o(5546),
					O = o(7956),
					I = o(3239),
					j = o(7894),
					P = o(9251);
				class N extends y {
					static featureName = P.t;
					constructor(e, t) {
						let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
						super(e, t, P.t, r), g.il && ((0, O.N)((() => (0, C.p)("docHidden", [(0, j.z)()], void 0, P.t, this.ee)), !0), (0, I.bP)("pagehide", (() => (0, C.p)("winPagehide", [(0, j.z)()], void 0, P.t, this.ee))), this.importAggregator())
					}
				}
				var k = o(3081);
				class M extends y {
					static featureName = k.t9;
					constructor(e, t) {
						let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
						super(e, t, k.t9, r), this.importAggregator()
					}
				}
				var H = o(6660);
				class z {
					constructor(e, t, r, n) {
						this.name = "UncaughtError", this.message = e, this.sourceURL = t, this.line = r, this.column = n
					}
				}
				class L extends y {
					static featureName = H.t;
					#n = new Set;
					constructor(e, t) {
						let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
						super(e, t, H.t, r);
						try {
							this.removeOnAbort = new AbortController
						} catch (e) {}
						this.ee.on("fn-err", ((e, t, r) => {
							this.abortHandler && !this.#n.has(r) && (this.#n.add(r), (0, C.p)("err", [this.#o(r), (0, j.z)()], void 0, s.D.jserrors, this.ee))
						})), this.ee.on("internal-error", (e => {
							this.abortHandler && (0, C.p)("ierr", [this.#o(e), (0, j.z)(), !0], void 0, s.D.jserrors, this.ee)
						})), g._A.addEventListener("unhandledrejection", (e => {
							this.abortHandler && (0, C.p)("err", [this.#i(e), (0, j.z)(), !1, {
								unhandledPromiseRejection: 1
							}], void 0, s.D.jserrors, this.ee)
						}), (0, I.m$)(!1, this.removeOnAbort?.signal)), g._A.addEventListener("error", (e => {
							this.abortHandler && (this.#n.has(e.error) ? this.#n.delete(e.error) : (0, C.p)("err", [this.#a(e), (0, j.z)()], void 0, s.D.jserrors, this.ee))
						}), (0, I.m$)(!1, this.removeOnAbort?.signal)), this.abortHandler = this.#s, this.importAggregator()
					}
					#s() {
						this.removeOnAbort?.abort(), this.#n.clear(), this.abortHandler = void 0
					}
					#o(e) {
						return e instanceof Error ? e : void 0 !== e?.message ? new z(e.message, e.filename || e.sourceURL, e.lineno || e.line, e.colno || e.col) : new z("string" == typeof e ? e : (0, D.P)(e))
					}
					#i(e) {
						let t = "Unhandled Promise Rejection: ";
						if (e?.reason instanceof Error) try {
							return e.reason.message = t + e.reason.message, e.reason
						} catch (t) {
							return e.reason
						}
						if (void 0 === e.reason) return new z(t);
						const r = this.#o(e.reason);
						return r.message = t + r.message, r
					}
					#a(e) {
						if (e.error instanceof SyntaxError && !/:\d+$/.test(e.error.stack?.trim())) {
							const t = new z(e.message, e.filename, e.lineno, e.colno);
							return t.name = SyntaxError.name, t
						}
						return e.error instanceof Error ? e.error : new z(e.message, e.filename, e.lineno, e.colno)
					}
				}
				var U = o(2210);
				let F = 1;
				const B = "nr@id";

				function q(e) {
					const t = typeof e;
					return !e || "object" !== t && "function" !== t ? -1 : e === g._A ? 0 : (0, U.X)(e, B, (function() {
						return F++
					}))
				}

				function V(e) {
					if ("string" == typeof e && e.length) return e.length;
					if ("object" == typeof e) {
						if ("undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer && e.byteLength) return e.byteLength;
						if ("undefined" != typeof Blob && e instanceof Blob && e.size) return e.size;
						if (!("undefined" != typeof FormData && e instanceof FormData)) try {
							return (0, D.P)(e).length
						} catch (e) {
							return
						}
					}
				}
				var Z = o(7806),
					W = o(7243);
				class G {
					constructor(e) {
						this.agentIdentifier = e
					}
					generateTracePayload(e) {
						if (!this.shouldGenerateTrace(e)) return null;
						var t = (0, c.DL)(this.agentIdentifier);
						if (!t) return null;
						var r = (t.accountID || "").toString() || null,
							o = (t.agentID || "").toString() || null,
							i = (t.trustKey || "").toString() || null;
						if (!r || !o) return null;
						var a = (0, n.M)(),
							s = (0, n.Ht)(),
							d = Date.now(),
							u = {
								spanId: a,
								traceId: s,
								timestamp: d
							};
						return (e.sameOrigin || this.isAllowedOrigin(e) && this.useTraceContextHeadersForCors()) && (u.traceContextParentHeader = this.generateTraceContextParentHeader(a, s), u.traceContextStateHeader = this.generateTraceContextStateHeader(a, d, r, o, i)), (e.sameOrigin && !this.excludeNewrelicHeader() || !e.sameOrigin && this.isAllowedOrigin(e) && this.useNewrelicHeaderForCors()) && (u.newrelicHeader = this.generateTraceHeader(a, s, d, r, o, i)), u
					}
					generateTraceContextParentHeader(e, t) {
						return "00-" + t + "-" + e + "-01"
					}
					generateTraceContextStateHeader(e, t, r, n, o) {
						return o + "@nr=0-1-" + r + "-" + n + "-" + e + "----" + t
					}
					generateTraceHeader(e, t, r, n, o, i) {
						if (!("function" == typeof g._A?.btoa)) return null;
						var a = {
							v: [0, 1],
							d: {
								ty: "Browser",
								ac: n,
								ap: o,
								id: e,
								tr: t,
								ti: r
							}
						};
						return i && n !== i && (a.d.tk = i), btoa((0, D.P)(a))
					}
					shouldGenerateTrace(e) {
						return this.isDtEnabled() && this.isAllowedOrigin(e)
					}
					isAllowedOrigin(e) {
						var t = !1,
							r = {};
						if ((0, c.Mt)(this.agentIdentifier, "distributed_tracing") && (r = (0, c.P_)(this.agentIdentifier).distributed_tracing), e.sameOrigin) t = !0;
						else if (r.allowed_origins instanceof Array)
							for (var n = 0; n < r.allowed_origins.length; n++) {
								var o = (0, W.e)(r.allowed_origins[n]);
								if (e.hostname === o.hostname && e.protocol === o.protocol && e.port === o.port) {
									t = !0;
									break
								}
							}
						return t
					}
					isDtEnabled() {
						var e = (0, c.Mt)(this.agentIdentifier, "distributed_tracing");
						return !!e && !!e.enabled
					}
					excludeNewrelicHeader() {
						var e = (0, c.Mt)(this.agentIdentifier, "distributed_tracing");
						return !!e && !!e.exclude_newrelic_header
					}
					useNewrelicHeaderForCors() {
						var e = (0, c.Mt)(this.agentIdentifier, "distributed_tracing");
						return !!e && !1 !== e.cors_use_newrelic_header
					}
					useTraceContextHeadersForCors() {
						var e = (0, c.Mt)(this.agentIdentifier, "distributed_tracing");
						return !!e && !!e.cors_use_tracecontext_headers
					}
				}
				var K = o(7825),
					X = ["load", "error", "abort", "timeout"],
					Y = X.length,
					Q = c.Yu.REQ,
					J = c.Yu.XHR;
				class ee extends y {
					static featureName = K.t;
					constructor(e, t) {
						let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
						if (super(e, t, K.t, r), (0, c.OP)(e).xhrWrappable) {
							this.dt = new G(e), this.handler = (e, t, r, n) => (0, C.p)(e, t, r, n, this.ee);
							try {
								const e = {
									xmlhttprequest: "xhr",
									fetch: "fetch",
									beacon: "beacon"
								};
								g._A?.performance?.getEntriesByType("resource").forEach((t => {
									if (t.initiatorType in e && 0 !== t.responseStatus) {
										const r = {
												status: t.responseStatus
											},
											n = {
												rxSize: t.transferSize,
												duration: Math.floor(t.duration),
												cbTime: 0
											};
										te(r, t.name), this.handler("xhr", [r, n, t.startTime, t.responseEnd, e[t.initiatorType]], void 0, s.D.ajax)
									}
								}))
							} catch (e) {}(0, Z.u5)(this.ee), (0, Z.Kf)(this.ee),
							function(e, t, r, n) {
								function o(e) {
									var t = this;
									t.totalCbs = 0, t.called = 0, t.cbTime = 0, t.end = w, t.ended = !1, t.xhrGuids = {}, t.lastSize = null, t.loadCaptureCalled = !1, t.params = this.params || {}, t.metrics = this.metrics || {}, e.addEventListener("load", (function(r) {
										E(t, e)
									}), (0, I.m$)(!1)), g.IF || e.addEventListener("progress", (function(e) {
										t.lastSize = e.loaded
									}), (0, I.m$)(!1))
								}

								function i(e) {
									this.params = {
										method: e[0]
									}, te(this, e[1]), this.metrics = {}
								}

								function a(t, r) {
									var o = (0, c.DL)(e);
									o.xpid && this.sameOrigin && r.setRequestHeader("X-NewRelic-ID", o.xpid);
									var i = n.generateTracePayload(this.parsedOrigin);
									if (i) {
										var a = !1;
										i.newrelicHeader && (r.setRequestHeader("newrelic", i.newrelicHeader), a = !0), i.traceContextParentHeader && (r.setRequestHeader("traceparent", i.traceContextParentHeader), i.traceContextStateHeader && r.setRequestHeader("tracestate", i.traceContextStateHeader), a = !0), a && (this.dt = i)
									}
								}

								function d(e, r) {
									var n = this.metrics,
										o = e[0],
										i = this;
									if (n && o) {
										var a = V(o);
										a && (n.txSize = a)
									}
									this.startTime = (0, j.z)(), this.body = o, this.listener = function(e) {
										try {
											"abort" !== e.type || i.loadCaptureCalled || (i.params.aborted = !0), ("load" !== e.type || i.called === i.totalCbs && (i.onloadCalled || "function" != typeof r.onload) && "function" == typeof i.end) && i.end(r)
										} catch (e) {
											try {
												t.emit("internal-error", [e])
											} catch (e) {}
										}
									};
									for (var s = 0; s < Y; s++) r.addEventListener(X[s], this.listener, (0, I.m$)(!1))
								}

								function u(e, t, r) {
									this.cbTime += e, t ? this.onloadCalled = !0 : this.called += 1, this.called !== this.totalCbs || !this.onloadCalled && "function" == typeof r.onload || "function" != typeof this.end || this.end(r)
								}

								function l(e, t) {
									var r = "" + q(e) + !!t;
									this.xhrGuids && !this.xhrGuids[r] && (this.xhrGuids[r] = !0, this.totalCbs += 1)
								}

								function f(e, t) {
									var r = "" + q(e) + !!t;
									this.xhrGuids && this.xhrGuids[r] && (delete this.xhrGuids[r], this.totalCbs -= 1)
								}

								function h() {
									this.endTime = (0, j.z)()
								}

								function p(e, r) {
									r instanceof J && "load" === e[0] && t.emit("xhr-load-added", [e[1], e[2]], r)
								}

								function v(e, r) {
									r instanceof J && "load" === e[0] && t.emit("xhr-load-removed", [e[1], e[2]], r)
								}

								function m(e, t, r) {
									t instanceof J && ("onload" === r && (this.onload = !0), ("load" === (e[0] && e[0].type) || this.onload) && (this.xhrCbStart = (0, j.z)()))
								}

								function b(e, r) {
									this.xhrCbStart && t.emit("xhr-cb-time", [(0, j.z)() - this.xhrCbStart, this.onload, r], r)
								}

								function y(e) {
									var t, r = e[1] || {};
									if ("string" == typeof e[0] ? 0 === (t = e[0]).length && g.il && (t = "" + g._A.location.href) : e[0] && e[0].url ? t = e[0].url : g._A?.URL && e[0] && e[0] instanceof URL ? t = e[0].href : "function" == typeof e[0].toString && (t = e[0].toString()), "string" == typeof t && 0 !== t.length) {
										t && (this.parsedOrigin = (0, W.e)(t), this.sameOrigin = this.parsedOrigin.sameOrigin);
										var o = n.generateTracePayload(this.parsedOrigin);
										if (o && (o.newrelicHeader || o.traceContextParentHeader))
											if (e[0] && e[0].headers) s(e[0].headers, o) && (this.dt = o);
											else {
												var i = {};
												for (var a in r) i[a] = r[a];
												i.headers = new Headers(r.headers || {}), s(i.headers, o) && (this.dt = o), e.length > 1 ? e[1] = i : e.push(i)
											}
									}

									function s(e, t) {
										var r = !1;
										return t.newrelicHeader && (e.set("newrelic", t.newrelicHeader), r = !0), t.traceContextParentHeader && (e.set("traceparent", t.traceContextParentHeader), t.traceContextStateHeader && e.set("tracestate", t.traceContextStateHeader), r = !0), r
									}
								}

								function x(e, t) {
									this.params = {}, this.metrics = {}, this.startTime = (0, j.z)(), this.dt = t, e.length >= 1 && (this.target = e[0]), e.length >= 2 && (this.opts = e[1]);
									var r, n = this.opts || {},
										o = this.target;
									"string" == typeof o ? r = o : "object" == typeof o && o instanceof Q ? r = o.url : g._A?.URL && "object" == typeof o && o instanceof URL && (r = o.href), te(this, r);
									var i = ("" + (o && o instanceof Q && o.method || n.method || "GET")).toUpperCase();
									this.params.method = i, this.body = n.body, this.txSize = V(n.body) || 0
								}

								function A(e, t) {
									var n;
									this.endTime = (0, j.z)(), this.params || (this.params = {}), this.params.status = t ? t.status : 0, "string" == typeof this.rxSize && this.rxSize.length > 0 && (n = +this.rxSize);
									var o = {
										txSize: this.txSize,
										rxSize: n,
										duration: (0, j.z)() - this.startTime
									};
									r("xhr", [this.params, o, this.startTime, this.endTime, "fetch"], this, s.D.ajax)
								}

								function w(e) {
									var t = this.params,
										n = this.metrics;
									if (!this.ended) {
										this.ended = !0;
										for (var o = 0; o < Y; o++) e.removeEventListener(X[o], this.listener, !1);
										t.aborted || (n.duration = (0, j.z)() - this.startTime, this.loadCaptureCalled || 4 !== e.readyState ? null == t.status && (t.status = 0) : E(this, e), n.cbTime = this.cbTime, r("xhr", [t, n, this.startTime, this.endTime, "xhr"], this, s.D.ajax))
									}
								}

								function E(e, r) {
									e.params.status = r.status;
									var n = function(e, t) {
										var r = e.responseType;
										return "json" === r && null !== t ? t : "arraybuffer" === r || "blob" === r || "json" === r ? V(e.response) : "text" === r || "" === r || void 0 === r ? V(e.responseText) : void 0
									}(r, e.lastSize);
									if (n && (e.metrics.rxSize = n), e.sameOrigin) {
										var o = r.getResponseHeader("X-NewRelic-App-Data");
										o && ((0, C.p)(k.mY, ["Ajax/CrossApplicationTracing/Header/Seen"], void 0, s.D.metrics, t), e.params.cat = o.split(", ").pop())
									}
									e.loadCaptureCalled = !0
								}
								t.on("new-xhr", o), t.on("open-xhr-start", i), t.on("open-xhr-end", a), t.on("send-xhr-start", d), t.on("xhr-cb-time", u), t.on("xhr-load-added", l), t.on("xhr-load-removed", f), t.on("xhr-resolved", h), t.on("addEventListener-end", p), t.on("removeEventListener-end", v), t.on("fn-end", b), t.on("fetch-before-start", y), t.on("fetch-start", x), t.on("fn-start", m), t.on("fetch-done", A)
							}(e, this.ee, this.handler, this.dt), this.importAggregator()
						}
					}
				}

				function te(e, t) {
					var r = (0, W.e)(t),
						n = e.params || e;
					n.hostname = r.hostname, n.port = r.port, n.protocol = r.protocol, n.host = r.hostname + ":" + r.port, n.pathname = r.pathname, e.parsedOrigin = r, e.sameOrigin = r.sameOrigin
				}
				var re = o(3614);
				const {
					BST_RESOURCE: ne,
					RESOURCE: oe,
					START: ie,
					END: ae,
					FEATURE_NAME: se,
					FN_END: ce,
					FN_START: de,
					PUSH_STATE: ue
				} = re;
				var le = o(7056);
				class fe extends y {
					static featureName = t.t9;
					constructor(e, r) {
						let n, o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
						super(e, r, t.t9, o);
						try {
							n = JSON.parse(localStorage.getItem("".concat(le.Bq, "_").concat(le.K4)))
						} catch (e) {}
						this.#c(n) ? this.#d(n?.sessionReplayMode) : this.importAggregator()
					}
					#c(e) {
						return e && (e.sessionReplayMode === le.IK.FULL || e.sessionReplayMode === le.IK.ERROR) || b(this.agentIdentifier)
					}
					async #d(e) {
						const {
							Recorder: t
						} = await Promise.all([o.e(63), o.e(379)]).then(o.bind(o, 4136));
						this.recorder = new t({
							mode: e,
							agentIdentifier: this.agentIdentifier
						}), this.recorder.startRecording(), this.abortHandler = this.recorder.stopRecording, this.importAggregator({
							recorder: this.recorder
						})
					}
				}
				var he = o(4649);
				class pe extends y {
					static featureName = he.t;
					constructor(e, t) {
						let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
						super(e, t, he.t, r), this.importAggregator()
					}
				}
				new class extends a {
					constructor(t, r) {
						super(r), g._A ? (this.sharedAggregator = new _({
							agentIdentifier: this.agentIdentifier
						}), this.features = {}, (0, T.h5)(this.agentIdentifier, this), this.desiredFeatures = new Set(t.features || []), this.desiredFeatures.add(A), this.runSoftNavOverSpa = [...this.desiredFeatures].some((e => e.featureName === s.D.softNav)), (0, l.j)(this, t, t.loaderType || "agent"), this.run()) : (0, e.Z)("Failed to initial the agent. Could not determine the runtime environment.")
					}
					get config() {
						return {
							info: this.info,
							init: this.init,
							loader_config: this.loader_config,
							runtime: this.runtime
						}
					}
					run() {
						try {
							const t = u(this.agentIdentifier),
								r = [...this.desiredFeatures];
							r.sort(((e, t) => s.p[e.featureName] - s.p[t.featureName])), r.forEach((r => {
								if (!t[r.featureName] && r.featureName !== s.D.pageViewEvent) return;
								if (this.runSoftNavOverSpa && r.featureName === s.D.spa) return;
								if (!this.runSoftNavOverSpa && r.featureName === s.D.softNav) return;
								const n = function(e) {
									switch (e) {
										case s.D.ajax:
											return [s.D.jserrors];
										case s.D.sessionTrace:
											return [s.D.ajax, s.D.pageViewEvent];
										case s.D.sessionReplay:
											return [s.D.sessionTrace];
										case s.D.pageViewTiming:
											return [s.D.pageViewEvent];
										default:
											return []
									}
								}(r.featureName);
								n.every((e => e in this.features)) || (0, e.Z)("".concat(r.featureName, " is enabled but one or more dependent features has not been initialized (").concat((0, D.P)(n), "). This may cause unintended consequences or missing data...")), this.features[r.featureName] = new r(this.agentIdentifier, this.sharedAggregator)
							}))
						} catch (t) {
							(0, e.Z)("Failed to initialize all enabled instrument classes (agent aborted) -", t);
							for (const e in this.features) this.features[e].abortHandler?.();
							const r = (0, T.fP)();
							return delete r.initializedAgents[this.agentIdentifier]?.api, delete r.initializedAgents[this.agentIdentifier]?.features, delete this.sharedAggregator, r.ee?.abort(), delete r.ee?.get(this.agentIdentifier), !1
						}
					}
				}({
					features: [A, N, class extends y {
						static featureName = se;
						constructor(e, t) {
							if (super(e, t, se, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]), !g.il) return;
							const r = this.ee;
							let n;
							(0, Z.QU)(r), this.eventsEE = (0, Z.em)(r), this.eventsEE.on(de, (function(e, t) {
								this.bstStart = (0, j.z)()
							})), this.eventsEE.on(ce, (function(e, t) {
								(0, C.p)("bst", [e[0], t, this.bstStart, (0, j.z)()], void 0, s.D.sessionTrace, r)
							})), r.on(ue + ie, (function(e) {
								this.time = (0, j.z)(), this.startPath = location.pathname + location.hash
							})), r.on(ue + ae, (function(e) {
								(0, C.p)("bstHist", [location.pathname + location.hash, this.startPath, this.time], void 0, s.D.sessionTrace, r)
							}));
							try {
								n = new PerformanceObserver((e => {
									const t = e.getEntries();
									(0, C.p)(ne, [t], void 0, s.D.sessionTrace, r)
								})), n.observe({
									type: oe,
									buffered: !0
								})
							} catch (e) {}
							this.importAggregator({
								resourceObserver: n
							})
						}
					}, fe, ee, M, pe, L],
					loaderType: "pro"
				})
			})()
		})();
