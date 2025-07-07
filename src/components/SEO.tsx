import {
  generatePersonStructuredData,
  generateWebsiteStructuredData,
} from "@/utils/structuredData";
import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  siteName?: string;
}

const SEO = ({
  title = "Deren Tanaphan - Software Engineer | Blockchain | Cybersecurity | Machine Learning",
  description = "Passionate software engineer specializing in blockchain, cybersecurity, and machine learning. Building scalable, secure systems with clean code and real-world impact.",
  keywords = "deren tanaphan, software engineer, blockchain, cybersecurity, machine learning, full stack developer, universitas gadjah mada, levireg",
  image = "https://derentanaphan.pages.dev/profile-picture.png",
  url = "https://derentanaphan.pages.dev",
  type = "website",
  siteName = "Deren Tanaphan Portfolio",
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    // Update canonical link
    const updateCanonical = (href: string) => {
      let canonical = document.querySelector("link[rel='canonical']");

      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }

      canonical.setAttribute("href", href);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("robots", "index, follow");
    updateMetaTag("author", "Deren Tanaphan");

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:site_name", siteName, true);

    // Twitter tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);

    // Update canonical link
    updateCanonical(url);

    // Add structured data
    const addStructuredData = (data: object, id: string) => {
      let script = document.getElementById(id) as HTMLScriptElement;

      if (!script) {
        script = document.createElement("script");
        script.id = id;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(data);
    };

    // Add structured data for homepage
    if (url == "https://derentanaphan.pages.dev" || url.endsWith("/")) {
      addStructuredData(
        generatePersonStructuredData(),
        "person-structured-data"
      );
      addStructuredData(
        generateWebsiteStructuredData(),
        "website-structured-data"
      );
    }
  }, [title, description, keywords, image, url, type, siteName]);

  return null;
};

export default SEO;
