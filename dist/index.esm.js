import { jsxs as b, jsx as n, Fragment as w } from "react/jsx-runtime";
import { useState as y, useMemo as P } from "react";
import { Auth0Provider as k, useAuth0 as C } from "@auth0/auth0-react";
const L = ({
  variant: t = "primary",
  size: e = "medium",
  disabled: a = !1,
  loading: l = !1,
  onClick: i,
  type: r = "button",
  className: s = "",
  children: c
}) => {
  const h = "medbai-button", d = `medbai-button--${t}`, m = `medbai-button--${e}`, u = [
    h,
    d,
    m,
    a ? "medbai-button--disabled" : "",
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ b(
    "button",
    {
      type: r,
      className: u,
      disabled: a || l,
      onClick: i,
      children: [
        l && /* @__PURE__ */ n("div", { className: "medbai-spinner medbai-spinner--small" }),
        c
      ]
    }
  );
}, $ = ({
  label: t,
  required: e = !1,
  error: a,
  help: l,
  disabled: i = !1,
  id: r,
  children: s,
  errorId: c,
  helpId: h
}) => {
  const d = `${r}-label`, m = c || `${r}-error`, p = h || `${r}-help`;
  return /* @__PURE__ */ b("div", { className: "medbai-form-group", children: [
    /* @__PURE__ */ n(
      "label",
      {
        htmlFor: r,
        id: d,
        className: `medbai-form-label ${e ? "medbai-form-label--required" : ""}`,
        children: t
      }
    ),
    s,
    a && /* @__PURE__ */ n(
      "div",
      {
        id: m,
        className: "medbai-form-error",
        role: "alert",
        "aria-live": "polite",
        children: a
      }
    ),
    l && !a && /* @__PURE__ */ n("div", { id: p, className: "medbai-form-help", children: l })
  ] });
}, A = ({
  type: t = "text",
  value: e,
  onChange: a,
  placeholder: l,
  autoComplete: i,
  maxLength: r,
  minLength: s,
  pattern: c,
  error: h,
  disabled: d,
  id: m,
  ...p
}) => {
  const u = [
    "medbai-form-input",
    h ? "medbai-form-input--error" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n(
    $,
    {
      ...p,
      id: m,
      error: h,
      disabled: d,
      children: /* @__PURE__ */ n(
        "input",
        {
          id: m,
          type: t,
          value: e,
          onChange: (f) => a(f.target.value),
          placeholder: l,
          autoComplete: i,
          maxLength: r,
          minLength: s,
          pattern: c,
          disabled: d,
          className: u,
          "aria-invalid": !!h,
          "aria-describedby": [
            h ? `${m}-error` : "",
            p.help ? `${m}-help` : ""
          ].filter(Boolean).join(" ") || void 0
        }
      )
    }
  );
}, F = ({
  type: t = "info",
  message: e,
  onRetry: a,
  retryLoading: l = !1,
  dismissible: i = !1,
  onDismiss: r,
  className: s = ""
}) => {
  const c = () => {
    switch (t) {
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
  return /* @__PURE__ */ n("div", { className: `medbai-status-banner medbai-status-banner--${t} ${s}`, role: "alert", children: /* @__PURE__ */ b("div", { className: "medbai-status-banner-content", children: [
    /* @__PURE__ */ n("span", { className: "medbai-status-banner-icon", "aria-hidden": "true", children: c() }),
    /* @__PURE__ */ n("span", { className: "medbai-status-banner-message", children: e }),
    /* @__PURE__ */ b("div", { className: "medbai-status-banner-actions", children: [
      a && /* @__PURE__ */ n(
        "button",
        {
          onClick: a,
          disabled: l,
          className: "medbai-button medbai-button--small medbai-button--secondary",
          "aria-label": "Retry action",
          children: l ? "Retrying..." : "Retry"
        }
      ),
      i && r && /* @__PURE__ */ n(
        "button",
        {
          onClick: r,
          className: "medbai-button medbai-button--small medbai-button--secondary",
          "aria-label": "Dismiss message",
          children: "✕"
        }
      )
    ] })
  ] }) });
}, E = ({
  data: t,
  columns: e,
  emptyMessage: a = "No data available",
  loading: l = !1,
  sortable: i = !1,
  onSort: r,
  className: s = ""
}) => {
  const [c, h] = y(null), [d, m] = y("asc"), p = (o) => {
    if (!i) return;
    const g = c === o && d === "asc" ? "desc" : "asc";
    h(o), m(g), r?.(o, g);
  }, u = P(() => !c || !i ? t : [...t].sort((o, g) => {
    const v = o[c], N = g[c];
    if (v === N) return 0;
    const T = v < N ? -1 : 1;
    return d === "asc" ? T : -T;
  }), [t, c, d, i]), f = (o, g) => o.render ? o.render(g[o.key], g) : g[o.key];
  return l ? /* @__PURE__ */ n("div", { className: `medbai-table-container ${s}`, children: /* @__PURE__ */ b("div", { className: "medbai-table-empty", children: [
    /* @__PURE__ */ n("div", { className: "medbai-spinner" }),
    /* @__PURE__ */ n("span", { style: { marginLeft: "8px" }, children: "Loading..." })
  ] }) }) : u.length === 0 ? /* @__PURE__ */ n("div", { className: `medbai-table-container ${s}`, children: /* @__PURE__ */ n("div", { className: "medbai-table-empty", children: a }) }) : /* @__PURE__ */ n("div", { className: `medbai-table-container ${s}`, children: /* @__PURE__ */ b("table", { className: "medbai-table", children: [
    /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ n("tr", { children: e.map((o) => /* @__PURE__ */ b(
      "th",
      {
        className: `medbai-table-header ${o.sortable ? "medbai-table-header--sortable" : ""} ${o.className || ""}`,
        onClick: () => o.sortable && p(String(o.key)),
        children: [
          o.label,
          c === o.key && /* @__PURE__ */ n("span", { style: { marginLeft: "4px" }, children: d === "asc" ? "↑" : "↓" })
        ]
      },
      String(o.key)
    )) }) }),
    /* @__PURE__ */ n("tbody", { children: u.map((o, g) => /* @__PURE__ */ n("tr", { className: "medbai-table-row", children: e.map((v) => /* @__PURE__ */ n(
      "td",
      {
        className: `medbai-table-cell ${v.className || ""}`,
        children: f(v, o)
      },
      String(v.key)
    )) }, g)) })
  ] }) });
};
function M(t) {
  return t ? t.replace(/[<>]/g, "").replace(/[&"']/g, "").replace(/[/\\]/g, "").trim() : "";
}
function _(t) {
  return t ? t.replace(/[<>]/g, "").replace(/[&"']/g, "").replace(/[/\\]/g, "").replace(/[^\w\s-]/g, "").trim() : "";
}
function H(t) {
  return t ? t.replace(/[<>]/g, "").replace(/[&"']/g, "").replace(/[/\\]/g, "").replace(/[^\w\s.-]/g, "").trim() : "";
}
function O(t) {
  return t ? t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;") : "";
}
const U = ({
  onSubmit: t,
  disabled: e = !1,
  loading: a = !1,
  className: l = ""
}) => {
  const [i, r] = y({
    name: "",
    title: ""
  }), [s, c] = y({}), h = () => {
    const u = {};
    return i.name && !i.name.trim() && (u.name = "Name cannot be empty"), c(u), Object.keys(u).length === 0;
  }, d = (u) => {
    if (u.preventDefault(), !h())
      return;
    const f = {
      ...i.name && { name: _(i.name.trim()) },
      ...i.title && { title: H(i.title.trim()) }
    };
    t(f);
  }, m = (u) => (f) => {
    r((o) => ({ ...o, [u]: f })), s[u] && c((o) => ({ ...o, [u]: void 0 }));
  }, p = e || a;
  return /* @__PURE__ */ b("form", { onSubmit: d, className: `medbai-form ${l}`, children: [
    /* @__PURE__ */ n(
      A,
      {
        id: "name",
        label: "Name",
        value: i.name || "",
        onChange: m("name"),
        placeholder: "Enter your name (optional if authenticated)",
        disabled: e || a,
        error: s.name,
        help: "Optional - will use authenticated user name if available"
      }
    ),
    /* @__PURE__ */ n(
      A,
      {
        id: "title",
        label: "Title",
        value: i.title || "",
        onChange: m("title"),
        placeholder: "Enter your title (optional)",
        disabled: e || a,
        help: "Optional title or position"
      }
    ),
    /* @__PURE__ */ n(
      L,
      {
        type: "submit",
        disabled: p,
        loading: a,
        className: "medbai-button--primary",
        children: a ? "Submitting..." : "Submit"
      }
    )
  ] });
}, j = ({ data: t, className: e = "" }) => {
  const a = P(() => [...t].sort((r, s) => s.count !== r.count ? s.count - r.count : r.name.localeCompare(s.name)), [t]), l = (r) => {
    try {
      return new Date(r).toLocaleString();
    } catch {
      return "Invalid date";
    }
  };
  return /* @__PURE__ */ n(
    E,
    {
      data: a,
      columns: [
        {
          key: "name",
          label: "Name",
          render: (r, s) => /* @__PURE__ */ b("div", { children: [
            s.title && /* @__PURE__ */ n("span", { className: "medbai-text-muted", style: { marginRight: "4px" }, children: s.title }),
            /* @__PURE__ */ n("span", { className: "medbai-text-primary", children: s.name })
          ] })
        },
        {
          key: "count",
          label: "Count",
          render: (r) => /* @__PURE__ */ n("div", { className: "medbai-text-center", style: { fontWeight: "600", color: "var(--medbai-primary)" }, children: r })
        },
        {
          key: "lastHelloAt",
          label: "Last Hello At",
          render: (r) => /* @__PURE__ */ n("div", { className: "medbai-text-muted", style: { fontSize: "var(--medbai-font-size-sm)" }, children: l(r) })
        }
      ],
      emptyMessage: "No statistics available yet. Submit a greeting to get started!",
      className: e
    }
  );
};
function D() {
  if (typeof window > "u")
    return !1;
  const t = window.location.origin;
  return !!(t.startsWith("https://") || t.startsWith("http://localhost") || t.startsWith("http://127.0.0.1"));
}
const B = ({ children: t, config: e }) => D() ? /* @__PURE__ */ n(
  k,
  {
    domain: e.domain,
    clientId: e.clientId,
    authorizationParams: {
      redirect_uri: e.redirectUri || window.location.origin + "/callback",
      audience: e.audience
    },
    cacheLocation: "localstorage",
    useRefreshTokens: !0,
    children: t
  }
) : (console.warn(
  "⚠️  Auth0 disabled: App is running on HTTP (non-localhost). Auth0 requires HTTPS or localhost. The app will work without authentication."
), /* @__PURE__ */ n(w, { children: t }));
function x() {
  if (typeof window > "u")
    return !1;
  const t = window.location.origin;
  return t.startsWith("https://") || t.startsWith("http://localhost") || t.startsWith("http://127.0.0.1");
}
function S() {
  if (!x())
    return {
      isAuthenticated: !1,
      isLoading: !1,
      user: void 0,
      error: void 0,
      getAccessTokenSilently: async () => {
        throw new Error("Auth0 is not available on HTTP (non-localhost). Use HTTPS or localhost.");
      },
      getAccessTokenWithPopup: async () => {
        throw new Error("Auth0 is not available on HTTP (non-localhost). Use HTTPS or localhost.");
      },
      getIdTokenClaims: async () => {
      },
      loginWithRedirect: () => {
        console.warn("Auth0 login is not available on HTTP (non-localhost). Use HTTPS or localhost.");
      },
      loginWithPopup: async () => {
        throw new Error("Auth0 is not available on HTTP (non-localhost). Use HTTPS or localhost.");
      },
      logout: () => {
        console.warn("Auth0 logout is not available on HTTP (non-localhost). Use HTTPS or localhost.");
      },
      handleRedirectCallback: async () => {
        throw new Error("Auth0 is not available on HTTP (non-localhost). Use HTTPS or localhost.");
      }
    };
  try {
    const t = C();
    return {
      ...t,
      user: t.user
    };
  } catch {
    return console.warn("Auth0Provider not found, returning mock context"), {
      isAuthenticated: !1,
      isLoading: !1,
      user: void 0,
      error: void 0,
      getAccessTokenSilently: async () => {
        throw new Error("Auth0Provider is not available");
      },
      getAccessTokenWithPopup: async () => {
        throw new Error("Auth0Provider is not available");
      },
      getIdTokenClaims: async () => {
      },
      loginWithRedirect: () => {
        console.warn("Auth0Provider is not available");
      },
      loginWithPopup: async () => {
        throw new Error("Auth0Provider is not available");
      },
      logout: () => {
        console.warn("Auth0Provider is not available");
      },
      handleRedirectCallback: async () => {
        throw new Error("Auth0Provider is not available");
      }
    };
  }
}
async function V(t) {
  try {
    return await t();
  } catch (e) {
    return console.error("Failed to get access token:", e), null;
  }
}
const q = () => {
  const { isAuthenticated: t, user: e, loginWithRedirect: a, logout: l } = S();
  if (t && e) {
    const i = e.name || e.nickname || e.email || "User";
    return /* @__PURE__ */ b("div", { className: "auth-button", children: [
      /* @__PURE__ */ b("div", { className: "auth-button__user-info", children: [
        e.picture && /* @__PURE__ */ n(
          "img",
          {
            src: e.picture,
            alt: i,
            className: "auth-button__avatar"
          }
        ),
        /* @__PURE__ */ b("div", { className: "auth-button__user-details", children: [
          /* @__PURE__ */ n("span", { className: "auth-button__user-name", children: i }),
          e.email && /* @__PURE__ */ n("span", { className: "auth-button__user-email", children: e.email })
        ] })
      ] }),
      /* @__PURE__ */ n(
        "button",
        {
          className: "auth-button__logout",
          onClick: () => l({ logoutParams: { returnTo: window.location.origin } }),
          "aria-label": "Logout",
          children: "Logout"
        }
      )
    ] });
  }
  return /* @__PURE__ */ n(
    "button",
    {
      className: "auth-button__login",
      onClick: () => a(),
      "aria-label": "Login",
      children: "Login"
    }
  );
}, G = ({
  children: t,
  fallback: e = null
}) => {
  const { isAuthenticated: a, isLoading: l } = S();
  return l ? /* @__PURE__ */ n("div", { children: "Loading..." }) : a ? /* @__PURE__ */ n(w, { children: t }) : /* @__PURE__ */ n(w, { children: e });
};
class W {
  constructor(e = "info", a = !1) {
    this.level = e, this.isDevelopment = a;
  }
  shouldLog(e) {
    const a = {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3
    };
    return a[e] >= a[this.level];
  }
  formatMessage(e, a, l) {
    const i = (/* @__PURE__ */ new Date()).toISOString(), r = {
      level: e,
      message: a,
      timestamp: i,
      context: l
    };
    if (this.isDevelopment) {
      const s = e === "debug" ? "log" : e, c = `[${i}] [${e.toUpperCase()}]`;
      return console[s](`${c} ${a}`, l || ""), a;
    }
    return JSON.stringify(r);
  }
  debug(e, a) {
    this.shouldLog("debug") && this.formatMessage("debug", e, a);
  }
  info(e, a) {
    this.shouldLog("info") && this.formatMessage("info", e, a);
  }
  warn(e, a) {
    this.shouldLog("warn") && this.formatMessage("warn", e, a);
  }
  error(e, a) {
    this.shouldLog("error") && this.formatMessage("error", e, a);
  }
  setLevel(e) {
    this.level = e;
  }
}
const K = new W(
  process.env.REACT_APP_LOG_LEVEL || "info",
  process.env.NODE_ENV === "development"
);
export {
  q as AuthButton,
  B as AuthProvider,
  L as Button,
  $ as FormField,
  U as GreetingForm,
  A as Input,
  G as ProtectedRoute,
  j as StatsTable,
  F as StatusBanner,
  E as Table,
  V as getAccessToken,
  K as logger,
  O as sanitizeHTML,
  _ as sanitizeName,
  M as sanitizeString,
  H as sanitizeTitle,
  S as useAuth0
};
