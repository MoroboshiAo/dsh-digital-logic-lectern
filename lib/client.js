/**
 * dsh-digital-logic-lectern —— 客户端入口（浏览器侧）
 *
 * 把数字逻辑辅助学习插件接进 DSH 界面：
 * - 侧栏图标 + 主页面板：点开后整页嵌入 ui/index.html（由 lib/index.js 挂在
 *   /dsh-digital-logic-lectern/ 下），页面原样运行，错题本等本地数据照旧。
 * - 斜杠命令 /logic-lectern：从输入框直接唤出面板。
 * - 插件行配置：在「插件」页里给默认难度与侧栏入口两个选项。
 *
 * 这个文件不参与构建，直接手写；宿主用 __ModuleLoader__ 加载。
 */

window.__ModuleLoader__.load({
	id: "dsh-digital-logic-lectern",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;

		const react = require("react");
		const jsx = require("react/jsx-runtime");

		const PANEL_ID = "dsh-digital-logic-lectern";
		const PAGE_PATH = "dsh-digital-logic-lectern/index.html";
		const OPTIONS_KEY = "dll-options";
		const LEVELS = [
			{ id: 1, label: "简单" },
			{ id: 2, label: "普通" },
			{ id: 3, label: "困难" },
		];
		const DEFAULT_OPTIONS = { level: 2, sidebar: true };

		const CSS = [
			".dll-card{font-family:-apple-system,\"PingFang SC\",\"Microsoft YaHei\",\"Segoe UI\",system-ui,sans-serif;display:flex;flex-direction:column;gap:12px;padding:14px 16px;border:1px solid rgba(0,0,0,.08);border-radius:12px;background:rgba(255,255,255,.6)}",
			".dll-head{display:flex;align-items:center;gap:10px}",
			".dll-mark{width:28px;height:28px;flex:0 0 auto;display:grid;place-items:center;border-radius:8px;background:#e9f9dc;color:#46a302}",
			".dll-mark svg{width:17px;height:17px}",
			".dll-title{flex:1;font-size:14px;font-weight:600;color:inherit}",
			".dll-open{border:1px solid rgba(0,0,0,.12);border-radius:9px;background:transparent;color:inherit;font:inherit;font-size:13px;padding:6px 12px;cursor:pointer}",
			".dll-open:hover{background:rgba(0,0,0,.04)}",
			".dll-row{display:flex;align-items:center;gap:12px;font-size:13px}",
			".dll-label{min-width:64px;opacity:.6}",
			".dll-chips{display:flex;gap:6px;flex-wrap:wrap}",
			".dll-chip{border:1px solid rgba(0,0,0,.12);border-radius:8px;background:transparent;color:inherit;font:inherit;font-size:12.5px;padding:5px 11px;cursor:pointer}",
			".dll-chip.on{border-color:#1cb0f6;background:rgba(28,176,246,.12);color:#0b7fb3;font-weight:600}",
			".dll-switch{position:relative;width:38px;height:22px;flex:0 0 auto;border:none;border-radius:999px;background:rgba(0,0,0,.18);cursor:pointer;padding:0}",
			".dll-switch i{position:absolute;top:3px;left:3px;width:16px;height:16px;border-radius:50%;background:#fff;transition:transform .15s ease}",
			".dll-switch.on{background:#58cc02}",
			".dll-switch.on i{transform:translateX(16px)}",
			".dll-page{height:100%;min-height:0;display:flex}",
			".dll-frame{flex:1;width:100%;height:100%;border:0;background:#f7f8fa}",
			"@media (prefers-color-scheme:dark){.dll-card{border-color:rgba(255,255,255,.12);background:rgba(30,30,32,.6)}.dll-open:hover{background:rgba(255,255,255,.08)}.dll-chip.on{color:#5cc8ff}}",
		].join("");

		const ICON_GATE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8.5h4M3 15.5h4M18 12h3"/><path d="M7 5.5h4.5a6.5 6.5 0 0 1 0 13H7z"/></svg>';

		/** 页面的绝对地址；按宿主页面的 base 解析，反代前缀也能带上。 */
		function pageUrl() {
			try {
				return new URL(PAGE_PATH, document.baseURI).toString();
			} catch {
				return "/" + PAGE_PATH;
			}
		}

		function readOptions() {
			try {
				const raw = localStorage.getItem(OPTIONS_KEY);
				const parsed = raw === null ? null : JSON.parse(raw);
				if (parsed === null || typeof parsed !== "object") return { ...DEFAULT_OPTIONS };
				const level = LEVELS.some((item) => item.id === parsed.level) ? parsed.level : DEFAULT_OPTIONS.level;
				return { level, sidebar: parsed.sidebar !== false };
			} catch {
				return { ...DEFAULT_OPTIONS };
			}
		}

		let currentOptions = readOptions();
		/** 由 apply 填上，供按钮和命令共用。 */
		let host = { openPanel: () => false };
		/** 由 apply 注入，搜题时用来切回对话面板。 */
		let layoutService = null;

		function writeOptions(next) {
			currentOptions = next;
			try {
				localStorage.setItem(OPTIONS_KEY, JSON.stringify(next));
			} catch {
				// 隐私模式下写不进去，本次会话仍然生效。
			}
		}

		function installCss() {
			if (typeof document === "undefined") return;
			const tagId = "dsh-digital-logic-lectern/client.css";
			if (document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") !== null) return;
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-digital-logic-lectern";
			tag.dataset.pluginCss = tagId;
			tag.textContent = CSS;
			document.head.appendChild(tag);
		}

		function openInBrowser() {
			try {
				window.open(pageUrl(), "_blank", "noopener");
			} catch {
				// 弹窗被拦时什么也不做，面板按钮本身已经够用。
			}
		}

		function LecternPage() {
			return jsx.jsx("div", {
				className: "dll-page",
				children: jsx.jsx("iframe", {
					className: "dll-frame",
					src: pageUrl(),
					title: "数字逻辑辅助学习插件",
				}),
			});
		}

		function SidebarIcon() {
			return jsx.jsx("svg", {
				width: 18,
				height: 18,
				viewBox: "0 0 24 24",
				fill: "none",
				"aria-hidden": "true",
				children: [
					jsx.jsx("path", { d: "M3 8.5h4M3 15.5h4M18 12h3", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }, "wires"),
					jsx.jsx("path", { d: "M7 5.5h4.5a6.5 6.5 0 0 1 0 13H7z", stroke: "currentColor", strokeWidth: "1.8", strokeLinejoin: "round" }, "gate"),
				],
			});
		}

		function LecternCard() {
			const [options, setOptions] = react.useState(currentOptions);
			const update = (patch) => {
				const next = { ...currentOptions, ...patch };
				writeOptions(next);
				setOptions(next);
				if ("sidebar" in patch) host.syncSidebar();
			};
			const open = () => {
				if (!host.openPanel()) openInBrowser();
			};
			return jsx.jsxs("div", {
				className: "dll-card",
				children: [
					jsx.jsxs("div", {
						className: "dll-head",
						children: [
							jsx.jsx("span", { className: "dll-mark", dangerouslySetInnerHTML: { __html: ICON_GATE } }),
							jsx.jsx("span", { className: "dll-title", children: "数字逻辑辅助学习插件" }),
							jsx.jsx("button", { type: "button", className: "dll-open", onClick: open, children: "在应用内打开" }),
						],
					}),
					jsx.jsxs("div", {
						className: "dll-row",
						children: [
							jsx.jsx("span", { className: "dll-label", children: "默认难度" }),
							jsx.jsx("div", {
								className: "dll-chips",
								children: LEVELS.map((level) =>
									jsx.jsx("button", {
										type: "button",
										className: "dll-chip" + (options.level === level.id ? " on" : ""),
										"aria-pressed": options.level === level.id,
										onClick: () => update({ level: level.id }),
										children: level.label,
									}, level.id)
								),
							}),
						],
					}),
					jsx.jsxs("div", {
						className: "dll-row",
						children: [
							jsx.jsx("span", { className: "dll-label", children: "侧栏入口" }),
							jsx.jsx("button", {
								type: "button",
								role: "switch",
								"aria-checked": options.sidebar,
								className: "dll-switch" + (options.sidebar ? " on" : ""),
								onClick: () => update({ sidebar: !options.sidebar }),
								children: jsx.jsx("i", {}),
							}),
						],
					}),
				],
			});
		}

		const inject = ["slots", "commandUi", "sessions"];

		function apply(ctx) {
			installCss();

			ctx.inject(["layout"], (sctx) => {
				layoutService = sctx.get("layout") || sctx.layout || null;
			});

			/** 把题干填进当前会话的输入框并切回对话；失败返回 false 由页面复制兜底。 */
			function askInChat(text) {
				if (typeof text !== "string" || text.trim() === "") return false;
				const sessions = ctx.sessions;
				if (sessions === void 0 || sessions === null) return false;
				let id;
				try {
					const snapshot = sessions.list.getSnapshot();
					id = snapshot.current;
					if (id === undefined || id === null || id === "") {
						const rows = Object.keys(snapshot.byId || {})
							.map((key) => snapshot.byId[key])
							.filter((row) => row && row.retainedBy && row.retainedBy.mainView > 0);
						if (rows.length === 1) id = rows[0].id;
					}
				} catch (error) {
					return false;
				}
				if (id === undefined || id === null || id === "") return false;
				try {
					const scope = sessions.scope(id);
					const conversation = ctx.get("conversation");
					if (scope === undefined || conversation === void 0 || conversation === null) return false;
					const input = conversation.input.for(scope);
					input.setDraft(text);
					if (layoutService !== null && typeof layoutService.selectPanel === "function") {
						layoutService.selectPanel(null);
					}
					setTimeout(() => {
						try {
							if (typeof input.focus === "function") input.focus();
						} catch (error) {
							// 焦点交给宿主处理。
						}
					}, 80);
					return true;
				} catch (error) {
					return false;
				}
			}

			const installBridge = () => {
				window.__DLL_ASK__ = askInChat;
				return () => {
					if (window.__DLL_ASK__ === askInChat) delete window.__DLL_ASK__;
				};
			};
			if (typeof ctx.effect === "function") {
				ctx.effect(installBridge, "dsh-digital-logic-lectern: ask bridge");
			} else {
				installBridge();
			}

			host.openPanel = () => {
				try {
					const layout = ctx.get("layout");
					if (layout && typeof layout.selectPanel === "function") {
						layout.selectPanel(PANEL_ID);
						return true;
					}
				} catch {
					// 旧宿主没有 layout 服务。
				}
				return false;
			};

			// 侧栏图标按选项挂载；关掉之后仍可从 /logic-lectern 或插件行打开。
			let seatReady = false;
			let entryDispose = null;
			const syncSidebar = () => {
				if (!seatReady) return;
				if (currentOptions.sidebar && entryDispose === null) {
					entryDispose = ctx.slots.register(
						{ name: "sidebar.panellist", id: PANEL_ID, order: 35, label: () => "数字逻辑" },
						SidebarIcon
					);
				} else if (!currentOptions.sidebar && entryDispose !== null) {
					entryDispose();
					entryDispose = null;
				}
			};
			host.syncSidebar = syncSidebar;

			ctx.slots.inject("sidebar.panellist", () => {
				seatReady = true;
				syncSidebar();
				return () => {
					seatReady = false;
					if (entryDispose !== null) {
						entryDispose();
						entryDispose = null;
					}
				};
			});

			ctx.slots.inject("main", () =>
				ctx.slots.register({ name: "main", key: PANEL_ID }, LecternPage)
			);

			ctx.slots.inject("plugins.row.config", () =>
				ctx.slots.register(
					{ name: "plugins.row.config", key: "dsh-digital-logic-lectern#digital-logic-lectern" },
					LecternCard
				)
			);

			ctx.slots.inject("plugins.bundle.config", () =>
				ctx.slots.register(
					{ name: "plugins.bundle.config", key: "dsh-digital-logic-lectern" },
					LecternCard
				)
			);

			ctx.inject(["commandUi"], (sctx) => {
				sctx.effect(() => {
					const dispose = sctx.get("commandUi").register({
						name: "logic-lectern",
						description: () => "打开数字逻辑辅助学习插件",
						available: () => true,
						ui: { kind: "action", run: () => { host.openPanel(); } },
					});
					return () => dispose();
				}, "dsh-digital-logic-lectern: slash command");
			});
		}

		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	},
});
