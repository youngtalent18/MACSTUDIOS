export const SITE_NAME = "MACSTUDIOS";
export const SITE_URL = (import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "")).replace(/\/$/, "");
export const CONTACT = { phone: "020 362 9223", email: "info@macstudios.com", area: "Ghana" };
export const PUBLIC_PAGES = {
  "/": { title: "MACSTUDIOS | Creative Production & Visual Storytelling", description: "MACSTUDIOS creates photography, videography, content, design and digital media for brands, businesses, creators and events." },
  "/about": { title: "About MACSTUDIOS | Creative Team & Approach", description: "Meet the creative team behind MACSTUDIOS and learn how photography, film, design and digital creativity come together." },
  "/services": { title: "Creative Production Services | MACSTUDIOS", description: "Explore photography, videography, content creation, commercials, design, printing, social media and YouTube services from MACSTUDIOS." },
  "/portfolio": { title: "Creative Portfolio | MACSTUDIOS", description: "Explore selected photography, video, content and digital projects from MACSTUDIOS." },
  "/reviews": { title: "Client Reviews | MACSTUDIOS", description: "Read client feedback about working with MACSTUDIOS on creative production and visual storytelling." },
  "/blog": { title: "Stories & Updates | MACSTUDIOS Blog", description: "Read stories, ideas and updates about creative production, photography, video and digital media from MACSTUDIOS." },
  "/booking": { title: "Book a Creative Project | MACSTUDIOS", description: "Tell MACSTUDIOS about your photography, video, content or design project and request a creative production booking." },
  "/contact": { title: "Contact MACSTUDIOS | Ghana", description: "Contact MACSTUDIOS in Ghana about photography, video production, content creation, design and digital media." },
};
