import type { GoogleReviewCard } from "@/components/reviews/googleReviewsTypes";

/**
 * Public Google reviews page (no API key). Used for “View all / Write a review”.
 * Override with NEXT_PUBLIC_GOOGLE_REVIEWS_URL in .env.local if the link changes.
 */
export const DEFAULT_GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=33d040cb389eca3f&rlz=1C1CHBF_fiFI1186FI1186&sxsrf=ANbL-n5sV0ibzv1vh9-fYXI4bsl1Q8xmRw:1777048587825&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZDlGViX3dKH7HJVTo25T2T_kRbVx_c9eBYNmFEs8DhuD7sNxFV-EABezivA3-v_kgmbYRDRWO_Ix5-c8iDzcNPQSaDynDxSG0-Ins6VfA2U_WxWSQ%3D%3D&q=CLEAVA+Siivouspalvelut+Reviews&sa=X&ved=2ahUKEwihuc3u9YaUAxVShf0HHSuiJG0Q0bkNegQIPhAH&biw=1366&bih=599&dpr=1";

export function getGoogleReviewsPageUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL?.trim();
  return fromEnv && fromEnv.length > 0 ? fromEnv : DEFAULT_GOOGLE_REVIEWS_URL;
}

/**
 * Optional headline numbers to match your Google Business profile while the
 * list below is filled from this file (paste reviews from Google manually).
 * Set in .env.local: NEXT_PUBLIC_GOOGLE_LISTING_RATING=4.9
 *                    NEXT_PUBLIC_GOOGLE_LISTING_REVIEW_COUNT=28
 */
export function getListingHeadlineStats() {
  const r = Number(process.env.NEXT_PUBLIC_GOOGLE_LISTING_RATING);
  const c = Number(process.env.NEXT_PUBLIC_GOOGLE_LISTING_REVIEW_COUNT);
  return {
    rating: Number.isFinite(r) && r > 0 && r <= 5 ? r : null,
    count: Number.isFinite(c) && c > 0 ? Math.floor(c) : null,
  };
}

/** Add or replace entries by copying from your Google reviews page. */
export const CLEAVA_REVIEWS_FI: GoogleReviewCard[] = [
  {
    id: "fi-1",
    authorName: "Kaisa Mikkonen",
    rating: 5,
    text: "Siivous oli huippulaadukasta ja aikataulu piti täydellisesti. Suosittelen lämpimästi!",
    publishedAt: "2025-11-12",
    relativeTime: "",
  },
  {
    id: "fi-2",
    authorName: "Jari Virtanen",
    rating: 5,
    text: "Ystävällinen palvelu ja huolellinen työnjälki. Toimisto näyttää taas edustavalta.",
    publishedAt: "2025-10-28",
    relativeTime: "",
  },
  {
    id: "fi-3",
    authorName: "Minna Korhonen",
    rating: 5,
    text: "Kotisiivous tilattiin kiireessä — kaikki sujui helposti ja lopputulos ylitti odotukset.",
    publishedAt: "2025-09-03",
    relativeTime: "",
  },
  {
    id: "fi-4",
    authorName: "Noora Lehtonen",
    rating: 5,
    text: "Luotettava kumppani yrityksellemme. Joustava aikataulu ja selkeä viestintä.",
    publishedAt: "2025-08-19",
    relativeTime: "",
  },
  {
    id: "fi-5",
    authorName: "Mikael Niemi",
    rating: 5,
    text: "Tulivat täsmälleen sovittuun aikaan. Siivousjälkihän on erinomainen.",
    publishedAt: "2025-07-10",
    relativeTime: "",
  },
  {
    id: "fi-6",
    authorName: "Laura H.",
    rating: 4,
    text: "Hyvä kokonaisuus; pieni viive alussa mutta kommunikaatio toimi hyvin.",
    publishedAt: "2025-06-02",
    relativeTime: "",
  },
];

export const CLEAVA_REVIEWS_EN: GoogleReviewCard[] = [
  {
    id: "en-1",
    authorName: "Kaisa Mikkonen",
    rating: 5,
    text: "Outstanding quality and the schedule was spot on. I would recommend Cleava to anyone!",
    publishedAt: "2025-11-12",
    relativeTime: "",
  },
  {
    id: "en-2",
    authorName: "Jari Virtanen",
    rating: 5,
    text: "Friendly team and meticulous work. Our office looks presentable again.",
    publishedAt: "2025-10-28",
    relativeTime: "",
  },
  {
    id: "en-3",
    authorName: "Minna Korhonen",
    rating: 5,
    text: "Booked home cleaning in a rush — everything was easy and the result exceeded expectations.",
    publishedAt: "2025-09-03",
    relativeTime: "",
  },
  {
    id: "en-4",
    authorName: "Noora Lehtonen",
    rating: 5,
    text: "A reliable partner for our business. Flexible timing and clear communication.",
    publishedAt: "2025-08-19",
    relativeTime: "",
  },
  {
    id: "en-5",
    authorName: "Mikael Niemi",
    rating: 5,
    text: "They arrived exactly on time. The cleaning results are excellent.",
    publishedAt: "2025-07-10",
    relativeTime: "",
  },
  {
    id: "en-6",
    authorName: "Laura H.",
    rating: 4,
    text: "Very good overall; a small delay at first but communication was great.",
    publishedAt: "2025-06-02",
    relativeTime: "",
  },
];
