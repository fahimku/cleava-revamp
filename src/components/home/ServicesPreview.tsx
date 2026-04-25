"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MotionSection } from "@/components/motion/MotionSection";
import { motion } from "framer-motion";

const icons = [
  "/assets/images/icon-home-clean.svg",
  "/assets/images/icon-office-clean.svg",
  "/assets/images/icon-deep-clean.svg",
  "/assets/images/icon-calendar.svg",
];

const keys = ["residential", "commercial", "deep", "recurring"] as const;

export function ServicesPreview() {
  const t = useTranslations("Services");

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <MotionSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#000033] sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-[#000033]/65">{t("subtitle")}</p>
        </MotionSection>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {keys.map((key, i) => (
            <MotionSection key={key} delay={i * 0.06}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="flex h-full flex-col rounded-2xl border border-[#000033]/8 bg-[#fafbfc] p-6 shadow-sm shadow-[#000033]/5"
              >
                <img
                  src={icons[i]}
                  alt=""
                  className="mb-4 h-12 w-12"
                  width={48}
                  height={48}
                />
                <h3 className="text-lg font-semibold text-[#000033]">
                  {t(`${key}.title`)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#000033]/60">
                  {t(`${key}.desc`)}
                </p>
              </motion.article>
            </MotionSection>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex rounded-full border border-[#000033]/15 px-5 py-2.5 text-sm font-semibold text-[#000033] transition hover:border-[#00E5FF]/60 hover:bg-[#00E5FF]/8"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
