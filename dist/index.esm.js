import { jsxs as g, jsx as a } from "react/jsx-runtime";
import { useState as N, useMemo as C } from "react";
const D = ({
  variant: r = "primary",
  size: t = "medium",
  disabled: e = !1,
  loading: o = !1,
  onClick: l,
  type: n = "button",
  className: s = "",
  children: c
}) => {
  const h = "medbai-button", d = `medbai-button--${r}`, b = `medbai-button--${t}`, p = [
    h,
    d,
    b,
    e ? "medbai-button--disabled" : "",
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ g(
    "button",
    {
      type: n,
      className: p,
      disabled: e || o,
      onClick: l,
      children: [
        o && /* @__PURE__ */ a("div", { className: "medbai-spinner medbai-spinner--small" }),
        c
      ]
    }
  );
}, L = ({
  label: r,
  required: t = !1,
  error: e,
  help: o,
  disabled: l = !1,
  id: n,
  children: s,
  errorId: c,
  helpId: h
}) => {
  const d = `${n}-label`, b = c || `${n}-error`, f = h || `${n}-help`;
  return /* @__PURE__ */ g("div", { className: "medbai-form-group", children: [
    /* @__PURE__ */ a(
      "label",
      {
        htmlFor: n,
        id: d,
        className: `medbai-form-label ${t ? "medbai-form-label--required" : ""}`,
        children: r
      }
    ),
    s,
    e && /* @__PURE__ */ a(
      "div",
      {
        id: b,
        className: "medbai-form-error",
        role: "alert",
        "aria-live": "polite",
        children: e
      }
    ),
    o && !e && /* @__PURE__ */ a("div", { id: f, className: "medbai-form-help", children: o })
  ] });
}, S = ({
  type: r = "text",
  value: t,
  onChange: e,
  placeholder: o,
  autoComplete: l,
  maxLength: n,
  minLength: s,
  pattern: c,
  error: h,
  disabled: d,
  id: b,
  ...f
}) => {
  const p = [
    "medbai-form-input",
    h ? "medbai-form-input--error" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a(
    L,
    {
      ...f,
      id: b,
      error: h,
      disabled: d,
      children: /* @__PURE__ */ a(
        "input",
        {
          id: b,
          type: r,
          value: t,
          onChange: (u) => e(u.target.value),
          placeholder: o,
          autoComplete: l,
          maxLength: n,
          minLength: s,
          pattern: c,
          disabled: d,
          className: p,
          "aria-invalid": !!h,
          "aria-describedby": [
            h ? `${b}-error` : "",
            f.help ? `${b}-help` : ""
          ].filter(Boolean).join(" ") || void 0
        }
      )
    }
  );
}, F = ({
  type: r = "info",
  message: t,
  onRetry: e,
  retryLoading: o = !1,
  dismissible: l = !1,
  onDismiss: n,
  className: s = ""
}) => {
  const c = () => {
    switch (r) {
      case "info":
        return "ℹ️";
      case "warning":
        return "⚠️";
      case "error":
        return "❌";
      case "success":
        return "✅";
      default:
        return "ℹ️";
    }
  };
  return /* @__PURE__ */ a("div", { className: `medbai-status-banner medbai-status-banner--${r} ${s}`, role: "alert", children: /* @__PURE__ */ g("div", { className: "medbai-status-banner-content", children: [
    /* @__PURE__ */ a("span", { className: "medbai-status-banner-icon", "aria-hidden": "true", children: c() }),
    /* @__PURE__ */ a("span", { className: "medbai-status-banner-message", children: t }),
    /* @__PURE__ */ g("div", { className: "medbai-status-banner-actions", children: [
      e && /* @__PURE__ */ a(
        "button",
        {
          onClick: e,
          disabled: o,
          className: "medbai-button medbai-button--small medbai-button--secondary",
          "aria-label": "Retry action",
          children: o ? "Retrying..." : "Retry"
        }
      ),
      l && n && /* @__PURE__ */ a(
        "button",
        {
          onClick: n,
          className: "medbai-button medbai-button--small medbai-button--secondary",
          "aria-label": "Dismiss message",
          children: "✕"
        }
      )
    ] })
  ] }) });
}, x = ({
  data: r,
  columns: t,
  emptyMessage: e = "No data available",
  loading: o = !1,
  sortable: l = !1,
  onSort: n,
  className: s = ""
}) => {
  const [c, h] = N(null), [d, b] = N("asc"), f = (i) => {
    if (!l) return;
    const m = c === i && d === "asc" ? "desc" : "asc";
    h(i), b(m), n?.(i, m);
  }, p = C(() => !c || !l ? r : [...r].sort((i, m) => {
    const v = i[c], y = m[c];
    if (v === y) return 0;
    const $ = v < y ? -1 : 1;
    return d === "asc" ? $ : -$;
  }), [r, c, d, l]), u = (i, m) => i.render ? i.render(m[i.key], m) : m[i.key];
  return o ? /* @__PURE__ */ a("div", { className: `medbai-table-container ${s}`, children: /* @__PURE__ */ g("div", { className: "medbai-table-empty", children: [
    /* @__PURE__ */ a("div", { className: "medbai-spinner" }),
    /* @__PURE__ */ a("span", { style: { marginLeft: "8px" }, children: "Loading..." })
  ] }) }) : p.length === 0 ? /* @__PURE__ */ a("div", { className: `medbai-table-container ${s}`, children: /* @__PURE__ */ a("div", { className: "medbai-table-empty", children: e }) }) : /* @__PURE__ */ a("div", { className: `medbai-table-container ${s}`, children: /* @__PURE__ */ g("table", { className: "medbai-table", children: [
    /* @__PURE__ */ a("thead", { children: /* @__PURE__ */ a("tr", { children: t.map((i) => /* @__PURE__ */ g(
      "th",
      {
        className: `medbai-table-header ${i.sortable ? "medbai-table-header--sortable" : ""} ${i.className || ""}`,
        onClick: () => i.sortable && f(String(i.key)),
        children: [
          i.label,
          c === i.key && /* @__PURE__ */ a("span", { style: { marginLeft: "4px" }, children: d === "asc" ? "↑" : "↓" })
        ]
      },
      String(i.key)
    )) }) }),
    /* @__PURE__ */ a("tbody", { children: p.map((i, m) => /* @__PURE__ */ a("tr", { className: "medbai-table-row", children: t.map((v) => /* @__PURE__ */ a(
      "td",
      {
        className: `medbai-table-cell ${v.className || ""}`,
        children: u(v, i)
      },
      String(v.key)
    )) }, m)) })
  ] }) });
};
function I(r) {
  return r ? r.replace(/[<>]/g, "").replace(/[&"']/g, "").replace(/[/\\]/g, "").trim() : "";
}
function k(r) {
  return r ? r.replace(/[<>]/g, "").replace(/[&"']/g, "").replace(/[/\\]/g, "").replace(/[^\w\s-]/g, "").trim() : "";
}
function E(r) {
  return r ? r.replace(/[<>]/g, "").replace(/[&"']/g, "").replace(/[/\\]/g, "").replace(/[^\w\s.-]/g, "").trim() : "";
}
function T(r) {
  return r ? r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;") : "";
}
const j = ({
  onSubmit: r,
  disabled: t = !1,
  loading: e = !1,
  className: o = ""
}) => {
  const [l, n] = N({
    name: "",
    title: ""
  }), [s, c] = N({}), h = () => {
    const u = {};
    return l.name.trim() || (u.name = "Name is required"), c(u), Object.keys(u).length === 0;
  }, d = (u) => {
    if (u.preventDefault(), !h())
      return;
    const i = {
      name: k(l.name.trim()),
      title: E(l.title.trim())
    };
    r(i);
  }, b = (u) => (i) => {
    n((m) => ({ ...m, [u]: i })), s[u] && c((m) => ({ ...m, [u]: void 0 }));
  }, f = l.name.trim().length > 0, p = t || e || !f;
  return /* @__PURE__ */ g("form", { onSubmit: d, className: `medbai-form ${o}`, children: [
    /* @__PURE__ */ a(
      S,
      {
        id: "name",
        label: "Name",
        required: !0,
        value: l.name,
        onChange: b("name"),
        placeholder: "Enter your name",
        disabled: t || e,
        error: s.name
      }
    ),
    /* @__PURE__ */ a(
      S,
      {
        id: "title",
        label: "Title",
        value: l.title,
        onChange: b("title"),
        placeholder: "Enter your title (optional)",
        disabled: t || e,
        help: "Optional title or position"
      }
    ),
    /* @__PURE__ */ a(
      D,
      {
        type: "submit",
        disabled: p,
        loading: e,
        className: "medbai-button--primary",
        children: e ? "Submitting..." : "Submit"
      }
    ),
    p && !e && /* @__PURE__ */ a("div", { className: "medbai-form-help", children: "Please enter a name to submit" })
  ] });
}, O = ({ data: r, className: t = "" }) => {
  const e = C(() => [...r].sort((n, s) => s.count !== n.count ? s.count - n.count : n.name.localeCompare(s.name)), [r]), o = (n) => {
    try {
      return new Date(n).toLocaleString();
    } catch {
      return "Invalid date";
    }
  };
  return /* @__PURE__ */ a(
    x,
    {
      data: e,
      columns: [
        {
          key: "name",
          label: "Name",
          render: (n, s) => /* @__PURE__ */ g("div", { children: [
            s.title && /* @__PURE__ */ a("span", { className: "medbai-text-muted", style: { marginRight: "4px" }, children: s.title }),
            /* @__PURE__ */ a("span", { className: "medbai-text-primary", children: s.name })
          ] })
        },
        {
          key: "count",
          label: "Count",
          render: (n) => /* @__PURE__ */ a("div", { className: "medbai-text-center", style: { fontWeight: "600", color: "var(--medbai-primary)" }, children: n })
        },
        {
          key: "lastHelloAt",
          label: "Last Hello At",
          render: (n) => /* @__PURE__ */ a("div", { className: "medbai-text-muted", style: { fontSize: "var(--medbai-font-size-sm)" }, children: o(n) })
        }
      ],
      emptyMessage: "No statistics available yet. Submit a greeting to get started!",
      className: t
    }
  );
};
class w {
  constructor(t = "info", e = !1) {
    this.level = t, this.isDevelopment = e;
  }
  shouldLog(t) {
    const e = {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3
    };
    return e[t] >= e[this.level];
  }
  formatMessage(t, e, o) {
    const l = (/* @__PURE__ */ new Date()).toISOString(), n = {
      level: t,
      message: e,
      timestamp: l,
      context: o
    };
    if (this.isDevelopment) {
      const s = t === "debug" ? "log" : t, c = `[${l}] [${t.toUpperCase()}]`;
      return console[s](`${c} ${e}`, o || ""), e;
    }
    return JSON.stringify(n);
  }
  debug(t, e) {
    this.shouldLog("debug") && this.formatMessage("debug", t, e);
  }
  info(t, e) {
    this.shouldLog("info") && this.formatMessage("info", t, e);
  }
  warn(t, e) {
    this.shouldLog("warn") && this.formatMessage("warn", t, e);
  }
  error(t, e) {
    this.shouldLog("error") && this.formatMessage("error", t, e);
  }
  setLevel(t) {
    this.level = t;
  }
}
const B = new w(
  process.env.REACT_APP_LOG_LEVEL || "info",
  process.env.NODE_ENV === "development"
);
export {
  D as Button,
  L as FormField,
  j as GreetingForm,
  S as Input,
  O as StatsTable,
  F as StatusBanner,
  x as Table,
  B as logger,
  T as sanitizeHTML,
  k as sanitizeName,
  I as sanitizeString,
  E as sanitizeTitle
};
