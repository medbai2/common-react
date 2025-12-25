import { jsxs as b, jsx as r, Fragment as w } from "react/jsx-runtime";
import { useState as y, useMemo as k } from "react";
import { Auth0Provider as S, useAuth0 as C } from "@auth0/auth0-react";
const L = ({
  variant: t = "primary",
  size: e = "medium",
  disabled: a = !1,
  loading: l = !1,
  onClick: i,
  type: n = "button",
  className: s = "",
  children: c
}) => {
  const m = "medbai-button", d = `medbai-button--${t}`, h = `medbai-button--${e}`, u = [
    m,
    d,
    h,
    a ? "medbai-button--disabled" : "",
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ b(
    "button",
    {
      type: n,
      className: u,
      disabled: a || l,
      onClick: i,
      children: [
        l && /* @__PURE__ */ r("div", { className: "medbai-spinner medbai-spinner--small" }),
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
  id: n,
  children: s,
  errorId: c,
  helpId: m
}) => {
  const d = `${n}-label`, h = c || `${n}-error`, f = m || `${n}-help`;
  return /* @__PURE__ */ b("div", { className: "medbai-form-group", children: [
    /* @__PURE__ */ r(
      "label",
      {
        htmlFor: n,
        id: d,
        className: `medbai-form-label ${e ? "medbai-form-label--required" : ""}`,
        children: t
      }
    ),
    s,
    a && /* @__PURE__ */ r(
      "div",
      {
        id: h,
        className: "medbai-form-error",
        role: "alert",
        "aria-live": "polite",
        children: a
      }
    ),
    l && !a && /* @__PURE__ */ r("div", { id: f, className: "medbai-form-help", children: l })
  ] });
}, A = ({
  type: t = "text",
  value: e,
  onChange: a,
  placeholder: l,
  autoComplete: i,
  maxLength: n,
  minLength: s,
  pattern: c,
  error: m,
  disabled: d,
  id: h,
  ...f
}) => {
  const u = [
    "medbai-form-input",
    m ? "medbai-form-input--error" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r(
    $,
    {
      ...f,
      id: h,
      error: m,
      disabled: d,
      children: /* @__PURE__ */ r(
        "input",
        {
          id: h,
          type: t,
          value: e,
          onChange: (p) => a(p.target.value),
          placeholder: l,
          autoComplete: i,
          maxLength: n,
          minLength: s,
          pattern: c,
          disabled: d,
          className: u,
          "aria-invalid": !!m,
          "aria-describedby": [
            m ? `${h}-error` : "",
            f.help ? `${h}-help` : ""
          ].filter(Boolean).join(" ") || void 0
        }
      )
    }
  );
}, z = ({
  type: t = "info",
  message: e,
  onRetry: a,
  retryLoading: l = !1,
  dismissible: i = !1,
  onDismiss: n,
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
  return /* @__PURE__ */ r("div", { className: `medbai-status-banner medbai-status-banner--${t} ${s}`, role: "alert", children: /* @__PURE__ */ b("div", { className: "medbai-status-banner-content", children: [
    /* @__PURE__ */ r("span", { className: "medbai-status-banner-icon", "aria-hidden": "true", children: c() }),
    /* @__PURE__ */ r("span", { className: "medbai-status-banner-message", children: e }),
    /* @__PURE__ */ b("div", { className: "medbai-status-banner-actions", children: [
      a && /* @__PURE__ */ r(
        "button",
        {
          onClick: a,
          disabled: l,
          className: "medbai-button medbai-button--small medbai-button--secondary",
          "aria-label": "Retry action",
          children: l ? "Retrying..." : "Retry"
        }
      ),
      i && n && /* @__PURE__ */ r(
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
}, E = ({
  data: t,
  columns: e,
  emptyMessage: a = "No data available",
  loading: l = !1,
  sortable: i = !1,
  onSort: n,
  className: s = ""
}) => {
  const [c, m] = y(null), [d, h] = y("asc"), f = (o) => {
    if (!i) return;
    const g = c === o && d === "asc" ? "desc" : "asc";
    m(o), h(g), n?.(o, g);
  }, u = k(() => !c || !i ? t : [...t].sort((o, g) => {
    const v = o[c], T = g[c];
    if (v === T) return 0;
    const N = v < T ? -1 : 1;
    return d === "asc" ? N : -N;
  }), [t, c, d, i]), p = (o, g) => o.render ? o.render(g[o.key], g) : g[o.key];
  return l ? /* @__PURE__ */ r("div", { className: `medbai-table-container ${s}`, children: /* @__PURE__ */ b("div", { className: "medbai-table-empty", children: [
    /* @__PURE__ */ r("div", { className: "medbai-spinner" }),
    /* @__PURE__ */ r("span", { style: { marginLeft: "8px" }, children: "Loading..." })
  ] }) }) : u.length === 0 ? /* @__PURE__ */ r("div", { className: `medbai-table-container ${s}`, children: /* @__PURE__ */ r("div", { className: "medbai-table-empty", children: a }) }) : /* @__PURE__ */ r("div", { className: `medbai-table-container ${s}`, children: /* @__PURE__ */ b("table", { className: "medbai-table", children: [
    /* @__PURE__ */ r("thead", { children: /* @__PURE__ */ r("tr", { children: e.map((o) => /* @__PURE__ */ b(
      "th",
      {
        className: `medbai-table-header ${o.sortable ? "medbai-table-header--sortable" : ""} ${o.className || ""}`,
        onClick: () => o.sortable && f(String(o.key)),
        children: [
          o.label,
          c === o.key && /* @__PURE__ */ r("span", { style: { marginLeft: "4px" }, children: d === "asc" ? "↑" : "↓" })
        ]
      },
      String(o.key)
    )) }) }),
    /* @__PURE__ */ r("tbody", { children: u.map((o, g) => /* @__PURE__ */ r("tr", { className: "medbai-table-row", children: e.map((v) => /* @__PURE__ */ r(
      "td",
      {
        className: `medbai-table-cell ${v.className || ""}`,
        children: p(v, o)
      },
      String(v.key)
    )) }, g)) })
  ] }) });
};
function F(t) {
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
  const [i, n] = y({
    name: "",
    title: ""
  }), [s, c] = y({}), m = () => {
    const u = {};
    return i.name && !i.name.trim() && (u.name = "Name cannot be empty"), c(u), Object.keys(u).length === 0;
  }, d = (u) => {
    if (u.preventDefault(), !m())
      return;
    const p = {
      ...i.name && { name: _(i.name.trim()) },
      ...i.title && { title: H(i.title.trim()) }
    };
    t(p);
  }, h = (u) => (p) => {
    n((o) => ({ ...o, [u]: p })), s[u] && c((o) => ({ ...o, [u]: void 0 }));
  }, f = e || a;
  return /* @__PURE__ */ b("form", { onSubmit: d, className: `medbai-form ${l}`, children: [
    /* @__PURE__ */ r(
      A,
      {
        id: "name",
        label: "Name",
        value: i.name || "",
        onChange: h("name"),
        placeholder: "Enter your name (optional if authenticated)",
        disabled: e || a,
        error: s.name,
        help: "Optional - will use authenticated user name if available"
      }
    ),
    /* @__PURE__ */ r(
      A,
      {
        id: "title",
        label: "Title",
        value: i.title || "",
        onChange: h("title"),
        placeholder: "Enter your title (optional)",
        disabled: e || a,
        help: "Optional title or position"
      }
    ),
    /* @__PURE__ */ r(
      L,
      {
        type: "submit",
        disabled: f,
        loading: a,
        className: "medbai-button--primary",
        children: a ? "Submitting..." : "Submit"
      }
    )
  ] });
}, j = ({ data: t, className: e = "" }) => {
  const a = k(() => [...t].sort((n, s) => s.count !== n.count ? s.count - n.count : n.name.localeCompare(s.name)), [t]), l = (n) => {
    try {
      return new Date(n).toLocaleString();
    } catch {
      return "Invalid date";
    }
  };
  return /* @__PURE__ */ r(
    E,
    {
      data: a,
      columns: [
        {
          key: "name",
          label: "Name",
          render: (n, s) => /* @__PURE__ */ b("div", { children: [
            s.title && /* @__PURE__ */ r("span", { className: "medbai-text-muted", style: { marginRight: "4px" }, children: s.title }),
            /* @__PURE__ */ r("span", { className: "medbai-text-primary", children: s.name })
          ] })
        },
        {
          key: "count",
          label: "Count",
          render: (n) => /* @__PURE__ */ r("div", { className: "medbai-text-center", style: { fontWeight: "600", color: "var(--medbai-primary)" }, children: n })
        },
        {
          key: "lastHelloAt",
          label: "Last Hello At",
          render: (n) => /* @__PURE__ */ r("div", { className: "medbai-text-muted", style: { fontSize: "var(--medbai-font-size-sm)" }, children: l(n) })
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
const B = ({ children: t, config: e }) => D() ? /* @__PURE__ */ r(
  S,
  {
    domain: e.domain,
    clientId: e.clientId,
    authorizationParams: {
      redirect_uri: e.redirectUri || window.location.origin + "/callback",
      audience: e.audience,
      // Include offline_access scope to enable refresh tokens
      // This allows the SDK to obtain and use refresh tokens for silent authentication
      // Default scope includes: openid (required), profile, email, offline_access (for refresh tokens)
      scope: e.scope || "openid profile email offline_access"
    },
    cacheLocation: "localstorage",
    useRefreshTokens: !0,
    children: t
  }
) : (console.warn(
  "⚠️  Auth0 disabled: App is running on HTTP (non-localhost). Auth0 requires HTTPS or localhost. The app will work without authentication."
), /* @__PURE__ */ r(w, { children: t }));
function x() {
  if (typeof window > "u")
    return !1;
  const t = window.location.origin;
  return t.startsWith("https://") || t.startsWith("http://localhost") || t.startsWith("http://127.0.0.1");
}
function P() {
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
async function q(t) {
  try {
    return await t();
  } catch (e) {
    if ((e instanceof Error ? e.message : String(e)).includes("Missing Refresh Token"))
      throw console.error(
        "❌ Missing Refresh Token: Please clear your browser storage and log in again. The refresh token is required for silent authentication. This usually happens if you logged in before the offline_access scope was enabled."
      ), new Error(
        "Missing Refresh Token. Please clear your browser storage (localStorage) and log in again to obtain a refresh token."
      );
    return console.error("Failed to get access token:", e), null;
  }
}
const V = () => {
  const { isAuthenticated: t, user: e, loginWithRedirect: a, logout: l } = P();
  if (t && e) {
    const i = e.name || e.nickname || e.email || "User";
    return /* @__PURE__ */ b("div", { className: "auth-button", children: [
      /* @__PURE__ */ b("div", { className: "auth-button__user-info", children: [
        e.picture && /* @__PURE__ */ r(
          "img",
          {
            src: e.picture,
            alt: i,
            className: "auth-button__avatar"
          }
        ),
        /* @__PURE__ */ b("div", { className: "auth-button__user-details", children: [
          /* @__PURE__ */ r("span", { className: "auth-button__user-name", children: i }),
          e.email && /* @__PURE__ */ r("span", { className: "auth-button__user-email", children: e.email })
        ] })
      ] }),
      /* @__PURE__ */ r(
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
  return /* @__PURE__ */ r(
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
  const { isAuthenticated: a, isLoading: l } = P();
  return l ? /* @__PURE__ */ r("div", { children: "Loading..." }) : a ? /* @__PURE__ */ r(w, { children: t }) : /* @__PURE__ */ r(w, { children: e });
};
class M {
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
    const i = (/* @__PURE__ */ new Date()).toISOString(), n = {
      level: e,
      message: a,
      timestamp: i,
      context: l
    };
    if (this.isDevelopment) {
      const s = e === "debug" ? "log" : e, c = `[${i}] [${e.toUpperCase()}]`;
      return console[s](`${c} ${a}`, l || ""), a;
    }
    return JSON.stringify(n);
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
const K = new M(
  process.env.REACT_APP_LOG_LEVEL || "info",
  process.env.NODE_ENV === "development"
);
export {
  V as AuthButton,
  B as AuthProvider,
  L as Button,
  $ as FormField,
  U as GreetingForm,
  A as Input,
  G as ProtectedRoute,
  j as StatsTable,
  z as StatusBanner,
  E as Table,
  q as getAccessToken,
  K as logger,
  O as sanitizeHTML,
  _ as sanitizeName,
  F as sanitizeString,
  H as sanitizeTitle,
  P as useAuth0
};
