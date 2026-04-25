"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";

const labels: Record<string, string> = { fi: "FI", en: "EN" };

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div
      className="flex rounded-full border border-[#000033]/10 bg-white/80 p-0.5 shadow-sm backdrop-blur"
      role="navigation"
      aria-label="Language"
    >
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <Link
            key={loc}
            href={pathname}
            locale={loc}
            className={`relative rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors ${
              active
                ? "text-[#000033]"
                : "text-[#000033]/45 hover:text-[#000033]/75"
            }`}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-[#00E5FF]/20"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{labels[loc]}</span>
          </Link>
        );
      })}
    </div>
  );
}
