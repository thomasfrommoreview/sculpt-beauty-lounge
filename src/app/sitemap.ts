import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.domain,
      lastModified: new Date("2026-07-03"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
