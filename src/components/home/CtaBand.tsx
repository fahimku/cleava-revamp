"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, useReducedMotion } from "framer-motion";

export function CtaBand() {
  const t = useTranslations("Cta");
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#000033] via-[#001a4d] to-[#003d7a]" />
      <motion.div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#00E5FF]/25 blur-3xl"
        animate={
          reduce
            ? undefined
            : { scale: [1, 1.15, 1], opacity: [0.35, 0.5, 0.35] }
        }
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-lg text-white/80">{t("subtitle")}</p>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-[#00E5FF] px-8 py-3.5 text-sm font-bold text-[#000033] shadow-lg shadow-black/20 transition hover:bg-[#66f0ff]"
        >
          {t("button")}
        </Link>
      </div>
    </section>
  );
}
