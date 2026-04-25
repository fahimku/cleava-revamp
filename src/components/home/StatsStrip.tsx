"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";

export function StatsStrip() {
  const t = useTranslations("Stats");
  const reduce = useReducedMotion();

  const items = [
    { label: t("happy"), value: "500+" },
    { label: t("bookings"), value: "2k+" },
    { label: t("response"), value: "< 24h" },
  ];

  return (
    <section className="border-y border-[#000033]/6 bg-[#f8fafc] py-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3 sm:px-6">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            className="text-center"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
          >
            <p className="text-3xl font-bold tracking-tight text-[#000033] sm:text-4xl">
              {item.value}
            </p>
            <p className="mt-1 text-sm font-medium text-[#000033]/55">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
