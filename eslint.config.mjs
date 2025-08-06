import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Next.js + TypeScript presets
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ✅ Global rule overrides
  {
    rules: {
      // disable the apostrophe‑escaping rule everywhere
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
