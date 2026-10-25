// Gemensamma klasser för knappar och länkar så att utseendet hålls enhetligt.

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-bold no-underline transition-colors";

export const buttonPrimary = `${base} bg-spruce text-paper hover:bg-spruce-dark`;

export const buttonSecondary = `${base} border-2 border-spruce bg-paper text-spruce hover:bg-sage`;

export const textLink =
  "font-bold text-spruce underline decoration-2 underline-offset-4 hover:text-spruce-dark hover:decoration-clay";

export const container = "mx-auto w-full max-w-5xl px-4 sm:px-6";
