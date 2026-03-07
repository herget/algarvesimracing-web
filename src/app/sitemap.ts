import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://macmagic-ai.github.io/algarvesimracing-web",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
