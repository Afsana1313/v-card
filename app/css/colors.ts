// colors.ts

export const colors = {
  light: {
    background: "#f8f9f9",
    cardBg: "#fdfefe",
    text: "#1a1a1a",
    primary: "#4f46e5"
  },
  dark: {
    background: "#0f172a",
    cardBg: "#fdfefe",
    text: "#f8fafc",
    primary: "#6366f1"
  }
};

export type ThemeType = keyof typeof colors; // 'light' | 'dark'
