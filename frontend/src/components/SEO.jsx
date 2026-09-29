import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CONTACT, PUBLIC_PAGES, SITE_NAME, SITE_URL } from "../lib/site.js";

function upsertMeta(attribute, name, content) {
  if (!content) return;
  let node = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!node) { node = document.createElement("meta"); node.setAttribute(attribute, name); document.head.append(node); }
  node.content = content;
}

export default function SEO({ title, description, image, noindex = false, article, schema = [] }) {
  const { pathname } = useLocation();
  useEffect(() => {
    const privatePage = pathname.startsWith("/admin");
    const page = PUBLIC_PAGES[pathname] || PUBLIC_PAGES["/blog"];
    const pageTitle = title || (privatePage ? "Admin | MACSTUDIOS" : page.title);
    const pageDescription = description || page.description;
    const canonical = `${SITE_URL}${pathname}`;
    const shareImage = image ? (/^https?:/.test(image) ? image : `${SITE_URL}${image.startsWith("/") ? "" : "/"}${image}`) : `${SITE_URL}/MACSTUDIOS%20AD1.jpg.jpeg`;
    document.title = pageTitle;
    upsertMeta("name", "description", pageDescription);
    upsertMeta("name", "robots", noindex || privatePage ? "noindex,nofollow" : "index,follow");
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.append(link); }
    link.href = canonical;
    [["og:title", pageTitle], ["og:description", pageDescription], ["og:type", article ? "article" : "website"], ["og:url", canonical], ["og:image", shareImage], ["og:site_name", SITE_NAME], ["twitter:card", "summary_large_image"], ["twitter:title", pageTitle], ["twitter:description", pageDescription], ["twitter:image", shareImage]].forEach(([key, value]) => upsertMeta("property", key, value));
    const organization = { "@context": "https://schema.org", "@type": "Organization", name: SITE_NAME, url: SITE_URL, email: CONTACT.email, telephone: CONTACT.phone, areaServed: { "@type": "Country", name: CONTACT.area }, contactPoint: { "@type": "ContactPoint", telephone: CONTACT.phone, email: CONTACT.email, contactType: "customer enquiries" } };
    const website = { "@context": "https://schema.org", "@type": "WebSite", name: SITE_NAME, url: SITE_URL };
    const webpage = { "@context": "https://schema.org", "@type": "WebPage", name: pageTitle, description: pageDescription, url: canonical, isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL } };
    const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: pathname.split("/").filter(Boolean).map((part, i, all) => ({ "@type": "ListItem", position: i + 1, name: part === "blog" && article ? "Blog" : part.replaceAll("-", " ").replace(/^./, (c) => c.toUpperCase()), item: `${SITE_URL}/${all.slice(0, i + 1).join("/")}` })) };
    const nodes = [...(privatePage ? [] : [organization, website, webpage, ...(pathname === "/services" ? [{ "@context": "https://schema.org", "@type": "Service", name: "Creative production services", provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL }, areaServed: "Ghana", serviceType: ["Photography", "Videography", "Content creation", "Commercials", "Design and printing", "Social media management", "YouTube content and channel management"] }] : []), ...(article ? [{ "@context": "https://schema.org", "@type": "BlogPosting", headline: title, description, image: shareImage, datePublished: article.publishedAt, dateModified: article.updatedAt, author: { "@type": "Person", name: article.author || SITE_NAME }, publisher: { "@type": "Organization", name: SITE_NAME }, mainEntityOfPage: canonical }] : []), breadcrumb]), ...schema];
    document.head.querySelectorAll('script[data-macstudios-schema="true"]').forEach((node) => node.remove());
    nodes.forEach((item) => { const node = document.createElement("script"); node.type = "application/ld+json"; node.dataset.macstudiosSchema = "true"; node.textContent = JSON.stringify(item); document.head.append(node); });
    return () => document.head.querySelectorAll('script[data-macstudios-schema="true"]').forEach((node) => node.remove());
  }, [pathname, title, description, image, noindex, article, schema]);
  return null;
}
