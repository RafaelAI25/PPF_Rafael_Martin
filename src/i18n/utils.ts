import { ui, defaultLang, type Lang } from "./ui";

export type TranslateFn = (key: string) => string;

export function useTranslations(lang: Lang): TranslateFn {
  const locale: Lang = lang in ui ? lang : defaultLang;
  const dict = ui[locale];

  return function t(key: string): string {
    const parts = key.split(".");
    let value: unknown = dict;

    for (const part of parts) {
      if (value == null) break;
      if (Array.isArray(value)) {
        const idx = Number(part);
        if (!Number.isInteger(idx)) return key;
        value = value[idx];
      } else if (typeof value === "object") {
        value = (value as Record<string, unknown>)[part];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };
}
