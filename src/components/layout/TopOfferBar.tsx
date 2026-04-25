"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";

export function TopOfferBar() {
  const t = useTranslations("OfferBar");
  const reduce = useReducedMotion();

  return (
    <div className="relative z-[60] border-b border-[#001a7a]/30 bg-gradient-to-r from-[#0a1d8f] via-[#1327a8] to-[#0a1d8f] px-3 py-2.5 text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-sm font-bold sm:text-base">
        <motion.span
          animate={
            reduce
              ? undefined
              : { opacity: [1, 0.45, 1], textShadow: ["0 0 0px #7bf1ff", "0 0 10px #7bf1ff", "0 0 0px #7bf1ff"] }
          }
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#7bf1ff]"
        >
          {t("offer")}
        </motion.span>
        <span>{t("ctaLabel")}</span>
        <a
          href="tel:0451878083"
          className="rounded-md px-1 font-extrabold underline decoration-white/80 underline-offset-4 transition hover:text-[#7bf1ff]"
        >
          0451878083
        </a>
      </div>
    </div>
  );
}
