"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { ReactNode } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsPatchCheckFill } from "react-icons/bs";
import type { GoogleReviewCard } from "./googleReviewsTypes";
import {
  CLEAVA_REVIEWS_EN,
  CLEAVA_REVIEWS_FI,
  getGoogleReviewsPageUrl,
  getListingHeadlineStats,
} from "@/data/cleavaReviews";

const PREVIEW_LEN = 200;

type TagId = "all" | "ontime" | "punctual" | "cleaning" | "results" | "regular";
type SortId = "relevant" | "newest" | "highest" | "lowest";

const TAG_ORDER: Exclude<TagId, "all">[] = [
  "ontime",
  "punctual",
  "cleaning",
  "results",
  "regular",
];

const TAG_LABEL_KEY: Record<
  Exclude<TagId, "all">,
  | "tagOntime"
  | "tagPunctual"
  | "tagCleaning"
  | "tagResults"
  | "tagRegular"
> = {
  ontime: "tagOntime",
  punctual: "tagPunctual",
  cleaning: "tagCleaning",
  results: "tagResults",
  regular: "tagRegular",
};

const TAG_MATCH: Record<Exclude<TagId, "all">, RegExp> = {
  ontime:
    /on time|ajallaan|ajoissa|täsmäll|sovittu aika|exactly on time|schedule|aikataulu/i,
  punctual: /punctual|punctuality|deadline|ajallaan|täsmällisyys|myöhässä|late/i,
  cleaning: /cleaning|siivous|siivottiin|clean(ed)?\b|puhdas/i,
  results: /result|tulos|loppu|outstanding|excellent|huippu|edustava/i,
  regular: /regular|säännöllis|weekly|kuukaus|toistuva|contract/i,
};

function initials(name: string) {
  const p = name.trim().split(/\s+/)[0];
  return p ? p[0]!.toUpperCase() : "?";
}

function StarRow({
  value,
  size = "md",
}: {
  value: number;
  size?: "sm" | "md" | "lg";
}) {
  const v = Math.min(5, Math.max(0, value));
  const full = Math.floor(v);
  const half = v - full >= 0.5;
  const sz =
    size === "lg"
      ? "h-7 w-7 sm:h-8 sm:w-8"
      : size === "sm"
        ? "h-3.5 w-3.5"
        : "h-5 w-5 sm:h-6 sm:w-6";
  const nodes: ReactNode[] = [];
  for (let i = 0; i < full; i++) {
    nodes.push(
      <FaStar key={`f${i}`} className={`${sz} text-amber-400`} aria-hidden />
    );
  }
  if (half) {
    nodes.push(
      <FaStarHalfAlt key="h" className={`${sz} text-amber-400`} aria-hidden />
    );
  }
  while (nodes.length < 5) {
    nodes.push(
      <FaRegStar
        key={`e${nodes.length}`}
        className={`${sz} text-amber-200`}
        aria-hidden
      />
    );
  }
  return <div className="flex items-center gap-0.5">{nodes}</div>;
}

function Histogram({ reviews }: { reviews: GoogleReviewCard[] }) {
  const byStar = useMemo(() => {
    const m: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    for (const r of reviews) {
      const k = Math.min(5, Math.max(1, Math.round(r.rating)));
      m[k] += 1;
    }
    return m;
  }, [reviews]);

  const max = Math.max(1, ...Object.values(byStar));

  return (
    <div className="min-w-0 space-y-2">
      {[5, 4, 3, 2, 1].map((star) => {
        const n = byStar[star] ?? 0;
        const pct = (n / max) * 100;
        return (
          <div key={star} className="flex items-center gap-2 sm:gap-3">
            <span className="w-3 text-right text-sm tabular-nums text-slate-600">
              {star}
            </span>
            <FaStar className="h-3.5 w-3.5 shrink-0 text-amber-400" aria-hidden />
            <div className="h-2.5 min-w-0 flex-1 overflow-hidden rounded-full bg-slate-200">
              <motion.div
                className="h-full rounded-full bg-amber-400"
                initial={false}
                animate={{ width: `${pct}%` }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              />
            </div>
            <span className="w-6 text-right text-xs tabular-nums text-slate-500">
              {n}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function ReviewCard({
  review,
  expanded,
  onToggle,
}: {
  review: GoogleReviewCard;
  expanded: boolean;
  onToggle: () => void;
}) {
  const t = useTranslations("Reviews");
  const long = review.text.length > PREVIEW_LEN;
  const shown =
    expanded || !long ? review.text : `${review.text.slice(0, PREVIEW_LEN)}…`;

  return (
    <article className="w-full rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 gap-3">
          {review.authorPhotoUrl ? (
            <Image
              src={review.authorPhotoUrl}
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 rounded-full object-cover"
              unoptimized
            />
          ) : (
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#000033] text-base font-bold text-white">
              {initials(review.authorName)}
            </div>
          )}
          <div className="min-w-0">
            <p className="truncate font-semibold text-slate-900">
              {review.authorName}
            </p>
            <p className="text-xs text-slate-500">
              {review.publishedAt || review.relativeTime || "—"}
            </p>
          </div>
        </div>
        <FcGoogle className="h-6 w-6 shrink-0" title="Google" />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <StarRow value={review.rating} size="sm" />
        <BsPatchCheckFill
          className="h-4 w-4 text-sky-600"
          aria-label={t("verified")}
        />
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">{shown}</p>

      {long ? (
        <button
          type="button"
          onClick={onToggle}
          className="mt-2 text-xs font-medium text-slate-500 underline decoration-slate-300 underline-offset-2 hover:text-slate-800"
        >
          {expanded ? t("readLess") : t("readMore")}
        </button>
      ) : null}
    </article>
  );
}

export function GoogleReviewsClient() {
  const t = useTranslations("Reviews");
  const locale = useLocale();
  const googleUrl = getGoogleReviewsPageUrl();
  const headline = getListingHeadlineStats();

  const baseReviews = useMemo(
    () => (locale === "fi" ? CLEAVA_REVIEWS_FI : CLEAVA_REVIEWS_EN),
    [locale]
  );

  const [activeTag, setActiveTag] = useState<TagId>("all");
  const [sort, setSort] = useState<SortId>("relevant");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const tagCounts = useMemo(() => {
    const counts: Record<Exclude<TagId, "all">, number> = {
      ontime: 0,
      punctual: 0,
      cleaning: 0,
      results: 0,
      regular: 0,
    };
    for (const r of baseReviews) {
      for (const id of TAG_ORDER) {
        if (TAG_MATCH[id].test(r.text)) counts[id] += 1;
      }
    }
    return counts;
  }, [baseReviews]);

  const filtered = useMemo(() => {
    if (activeTag === "all") return [...baseReviews];
    return baseReviews.filter((r) => TAG_MATCH[activeTag].test(r.text));
  }, [activeTag, baseReviews]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    const tsec = (s: string) => {
      const x = new Date(s).getTime();
      return Number.isNaN(x) ? 0 : x;
    };
    switch (sort) {
      case "newest":
        arr.sort((a, b) => tsec(b.publishedAt) - tsec(a.publishedAt));
        break;
      case "highest":
        arr.sort((a, b) => b.rating - a.rating);
        break;
      case "lowest":
        arr.sort((a, b) => a.rating - b.rating);
        break;
      default:
        break;
    }
    return arr;
  }, [filtered, sort]);

  const computedAvg =
    baseReviews.length > 0
      ? Math.round(
          (baseReviews.reduce((a, r) => a + r.rating, 0) / baseReviews.length) *
            10
        ) / 10
      : 0;

  const avgDisplay =
    headline.rating != null ? headline.rating : computedAvg || 5;

  const countDisplay =
    headline.count != null ? headline.count : baseReviews.length;

  const showMismatch =
    headline.count != null && headline.count > baseReviews.length;

  return (
    <section className="bg-[#f4f5f7] py-16 sm:py-24" id="reviews">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700/80">
            {t("eyebrow")}
          </p>
          <h2 className="font-display mt-4 text-4xl font-normal italic leading-tight text-slate-900 sm:text-5xl">
            {t("displayTitle")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            <span className="text-slate-800">&ldquo;</span>
            {t("featuredQuote")}
            <span className="text-slate-800">&rdquo;</span>
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-800 underline decoration-slate-400 underline-offset-4 transition hover:text-sky-800"
          >
            {t("contactCta")}
          </Link>
        </header>

        <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-8">
          <div className="flex flex-col gap-3 border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-semibold text-slate-900">
              {t("summaryTitle")}
            </h3>
            <a
              href={googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-800 transition hover:bg-slate-50"
            >
              {t("writeReview")}
            </a>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_minmax(200px,260px)] lg:items-center">
            <Histogram reviews={baseReviews} />
            <div className="flex flex-col items-center gap-2 lg:items-end">
              <span className="text-5xl font-medium tabular-nums text-slate-900 sm:text-6xl">
                {avgDisplay.toFixed(1)}
              </span>
              <StarRow value={avgDisplay} size="lg" />
              <p className="text-sm text-slate-600">
                {t("basedOn", { count: countDisplay })}
              </p>
              <FcGoogle className="mt-2 h-12 w-12" aria-hidden />
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-slate-500 lg:text-left">
            {t("histogramCaption")}
          </p>

          {showMismatch ? (
            <p className="mt-2 text-center text-xs text-amber-800 lg:text-left">
              {t("listingMismatch", { google: headline.count ?? 0 })}
            </p>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-2 border-t border-slate-100 pt-6">
            <button
              type="button"
              onClick={() => setActiveTag("all")}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                activeTag === "all"
                  ? "bg-sky-700 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {t("tagAll")}
            </button>
            {TAG_ORDER.map((id) => {
              const c = tagCounts[id];
              if (c === 0) return null;
              const label = t(TAG_LABEL_KEY[id]);
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveTag(id)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                    activeTag === id
                      ? "bg-sky-700 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {label}{" "}
                  <span className="opacity-80">({c})</span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-slate-500">
              {t("sortLabel")}:
            </span>
            {(
              [
                ["relevant", "sortRelevant"],
                ["newest", "sortNewest"],
                ["highest", "sortHighest"],
                ["lowest", "sortLowest"],
              ] as const
            ).map(([id, key]) => (
              <button
                key={id}
                type="button"
                onClick={() => setSort(id)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  sort === id
                    ? "bg-sky-700 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {t(key)}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-4">
          {sorted.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
              expanded={Boolean(expanded[review.id])}
              onToggle={() =>
                setExpanded((m) => ({ ...m, [review.id]: !m[review.id] }))
              }
            />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-slate-500">
          {t("manualNote")}
        </p>
        <p className="mt-4 text-center">
          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-sky-800 underline underline-offset-2 hover:text-sky-950"
          >
            {t("viewAll")}
          </a>
        </p>
      </div>
    </section>
  );
}
