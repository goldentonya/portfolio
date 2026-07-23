import wrenHome from "@/assets/The Wrens Hollow/homepage-comparison.jpg";
import wrenAbout from "@/assets/The Wrens Hollow/about-comparison.jpg";
import wrenBookSeries from "@/assets/The Wrens Hollow/book-series-comparison.jpg";
import wrenBookPage from "@/assets/The Wrens Hollow/book-page-comparison.jpg";
import wrenShop from "@/assets/The Wrens Hollow/shop-comparison.jpg";
import wrenProduct from "@/assets/The Wrens Hollow/product-comparison.jpg";
import wrenWriting from "@/assets/The Wrens Hollow/writing-comparison.jpg";
import wrenEvents from "@/assets/The Wrens Hollow/events-comparison.jpg";

import overboardHome from "@/assets/Overboard Art/homepage-comparison.jpg";
import overboardPortfolio from "@/assets/Overboard Art/portfolio-collections-new.jpg";
import overboardSingleWork from "@/assets/Overboard Art/single-portfolio-comparison.jpg";
import overboardAbout from "@/assets/Overboard Art/about-new.jpg";
import overboardContact from "@/assets/Overboard Art/contact-new.jpg";

export type Holobuild = {
  slug: string;
  title: string;
  tagline: string;
  url: string;
  role: string;
  stack: string[];
  year: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  images: { src: string; label: string }[];
};

export const holobuilds: Holobuild[] = [
  {
    slug: "the-wrens-hollow",
    title: "The Wren's Hollow",
    tagline: "A romance & fantasy author's site, rebuilt to match the world she writes.",
    url: "#",
    role: "Design + Build (Custom WordPress Theme)",
    stack: ["WordPress", "PHP", "WooCommerce"],
    year: "2026",
    images: [
      { src: wrenHome, label: "Home Page" },
      { src: wrenAbout, label: "About Page" },
      { src: wrenBookSeries, label: "Book Series Page" },
      { src: wrenBookPage, label: "Individual Book Page" },
      { src: wrenShop, label: "Shop Page" },
      { src: wrenProduct, label: "Product Page" },
      { src: wrenWriting, label: "On the Horizon Page" },
      { src: wrenEvents, label: "Events Page" },
    ],
    summary:
      "A full redesign of indie author Ali Wren's WordPress site, giving her two book series distinct visual identities and turning a generic template into a site that actually sells books and grows her readership.",
    problem:
      "The original site ran on an unstyled WordPress theme. The content was solid, with two active series, a working shop, and an events calendar, but the presentation undercut it. Everything looked the same regardless of genre, the homepage buried books and events under dense text, and there was no visual hierarchy guiding a visitor from \"curious\" to \"buying a signed copy.\"",
    approach:
      "Built a fully custom WordPress theme from scratch rather than customizing an off-the-shelf template, giving full control over layout and each book series' visual identity (moody fae fantasy art for The Veiled Prophecy, grounded military tones for Whiskey Tango Foxtrot). Rebuilt the homepage around a clear hierarchy: hero → book highlights → reviews → author bio → newsletter → events. Redesigned the shop and product pages with cleaner layouts and stronger calls to action around signed copies. Added a \"Currently Writing\" section so readers can follow upcoming releases. Reformatted the About and Events pages for scannability instead of long unbroken paragraphs.",
    outcome:
      "A site that reads as a real author brand instead of a default template, with genre-appropriate visuals, a clearer path to purchase and subscribe, and every existing feature (shop, events, series pages) preserved and elevated rather than stripped out.",
  },
  {
    slug: "overboard-art",
    title: "Overboard Art",
    tagline: "From an unstyled WordPress blog to a gallery-grade marine art portfolio.",
    url: "#",
    role: "Design + Build (Custom WordPress Theme)",
    stack: ["WordPress", "PHP", "Lovable", "Claude Code"],
    year: "2026",
    images: [
      { src: overboardHome, label: "Home Page" },
      { src: overboardPortfolio, label: "Portfolio Collections Page" },
      { src: overboardSingleWork, label: "Single Work Page" },
      { src: overboardAbout, label: "About Page" },
      { src: overboardContact, label: "Contact Page" },
    ],
    summary:
      "A ground-up rebuild of a marine artist's site, replacing a flat, default WordPress blog with an organized, browsable portfolio, plus new About and Contact pages the business never had, delivered as a fully custom WordPress theme.",
    problem:
      "The original site was essentially a default WordPress blog: a single unstyled page with a couple of stacked photos, a paragraph of body copy, and individual works formatted like chronological journal entries rather than a body of work. There was no way to browse by category, no dedicated About or Contact page, and nothing that reflected the caliber of hand-painted, high-end yacht work being showcased.",
    approach:
      "Prototyped the new design and content structure in Lovable, then rebuilt it from scratch as a fully custom WordPress theme using Claude Code, with no starter template, giving the artist a production-grade, easily editable site. Designed a premium \"marine atelier\" brand identity suited to a luxury yacht clientele. Organized 150+ individual works into seven browsable collections (Faux Teak, Gold Leaf, Yacht Lettering & Transoms, Marlins & Sailfish, Pyrography, Signage, Airbrush & Detail). Built a proper homepage with hero imagery, a specialty ticker, and a portfolio preview. Added an About page establishing the artist's story and credibility, and a Contact page with a real inquiry form. Replaced the old sidebar-driven blog navigation with clear, persistent site navigation across every page.",
    outcome:
      "A site that positions the artist as a premium craftsperson rather than a hobbyist blogger, makes the full body of work discoverable by category, and gives prospective clients (boat owners, captains, shipyards) a clear way to browse and get in touch, backed by a custom theme built for long-term editability.",
  },
];