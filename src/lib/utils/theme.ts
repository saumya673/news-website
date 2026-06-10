export const THEME_STORAGE_KEY = "theme";

export type ThemeMode = "light" | "dark";

export const themeScript = `(() => {
  try {
    const storedTheme = localStorage.getItem("${THEME_STORAGE_KEY}");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const theme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : systemTheme;
    document.documentElement.dataset.theme = theme;
  } catch (error) {
    document.documentElement.dataset.theme = "light";
  }
})();`;
