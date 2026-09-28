export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: { colors: {
    bg: "rgb(var(--bg) / <alpha-value>)", fg: "rgb(var(--fg) / <alpha-value>)", accent: "rgb(var(--accent) / <alpha-value>)",
    muted: "var(--muted)", line: "var(--line)", card: "var(--card)" },
    fontFamily: { sans: ["Inter", "system-ui", "sans-serif"], display: ["Fraunces", "Georgia", "serif"] } } },
};
