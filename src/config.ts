import type { AstroSeoProps } from "@astrolib/seo";

type Config = {
  siteURL: string;
  analyticsId: string;
  seo: AstroSeoProps;
};

export const CONFIG: Config = {
  siteURL: "https://buhartr.com",
  analyticsId: "G-ETLKRG7TBX",
  seo: {
    canonical: "https://buhartr.com",
    title: "BuharTR, Steam'in Türkçesi",
    description:
      "Oyun dünyasına gönül vermiş bir grup gencin kurduğu BuharTR sayesinde, 14 yıldır Steam platformu Türkçe olarak hizmet veriyor. BuharTR, Steam'in Türkçesi.",
    openGraph: {
      type: "website",
      url: "https://buhartr.com",
      site_name: "BuharTR",
      title: "BuharTR, Steam'in Türkçesi",
      description:
        "Oyun dünyasına gönül vermiş bir grup gencin kurduğu BuharTR sayesinde, 14 yıldır Steam platformu Türkçe olarak hizmet veriyor. BuharTR, Steam'in Türkçesi.",
      images: [
        {
          url: "https://buhartr.com/buhartr-card.webp",
          width: 1200,
          height: 675,
          alt: "BuharTR, Steam'in Türkçesi",
        },
      ],
    },
    twitter: {
      handle: "@buhartr",
      site: "@site",
      cardType: "summary_large_image",
    },
  },
};
