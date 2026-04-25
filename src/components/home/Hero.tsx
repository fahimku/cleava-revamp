"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
export function Hero() {
  const t = useTranslations("Hero");
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,229,255,0.14),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(0,0,51,0.06),_transparent_45%)]" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <motion.p
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#000033]/10 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#000033]/70"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF]" />
            {t("eyebrow")}
          </motion.p>
          <motion.h1
            className="text-4xl font-bold leading-tight tracking-tight text-[#000033] sm:text-5xl lg:text-[3.25rem]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            {t("title")}{" "}
            <span className="bg-gradient-to-r from-[#000033] via-[#004d99] to-[#00E5FF] bg-clip-text text-transparent">
              {t("titleAccent")}
            </span>
          </motion.h1>
          <motion.p
            className="mt-5 max-w-xl text-lg text-[#000033]/65"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            {t("subtitle")}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#000033] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#000033]/20 transition hover:bg-[#001a4d]"
            >
              {t("primaryCta")}
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-[#000033]/15 bg-white px-6 py-3 text-sm font-semibold text-[#000033] transition hover:border-[#00E5FF]/50 hover:bg-[#00E5FF]/5"
            >
              {t("secondaryCta")}
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-lg lg:mx-0"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#000033]/8 bg-[#f1f5f9] shadow-xl shadow-[#000033]/10">
            <Image
              src="/images/hero-cleaning-hero.png"
              alt=""
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#000033]/25 to-transparent" />
          </div>
          <motion.div
            className="absolute -left-4 -bottom-4 hidden sm:block"
            animate={
              reduce
                ? undefined
                : { y: [0, -6, 0], rotate: [0, 4, 0] }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden
          >
            <img
              src="/assets/images/sparkle-cluster.svg"
              alt=""
              className="h-24 w-24 drop-shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
