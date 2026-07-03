import type { CSSProperties } from "react";
import type { SiteConfig } from "@/features/config/site-config.schema";

export function getMizukiThemeStyle(siteConfig: SiteConfig): CSSProperties {
  return {
    "--fuwari-hue": String(siteConfig.theme.fuwari?.primaryHue ?? 220),
  } as CSSProperties;
}
