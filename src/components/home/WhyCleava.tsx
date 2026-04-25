"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { MotionSection } from "@/components/motion/MotionSection";

const itemKeys = ["verified", "flex", "eco"] as const;

export function WhyCleava() {
  const t = useTranslations("Why");

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 opacity-60"
        aria-hidden
      >
        <img
          src="/assets/images/wave-decoration.svg"
          alt=""
          className="h-full w-full object-cover object-bottom"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <MotionSection>
            <h2 className="text-3xl font-bold tracking-tight text-[#000033] sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-3 max-w-md text-[#000033]/65">{t("subtitle")}</p>
            <ul className="mt-10 space-y-6">
              {itemKeys.map((key) => (
                <li key={key} className="flex gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00E5FF]/25 text-sm font-bold text-[#000033]">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-[#000033]">
                      {t(`items.${key}.title`)}
                    </p>
                    <p className="mt-1 text-sm text-[#000033]/60">
                      {t(`items.${key}.desc`)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </MotionSection>

          <MotionSection delay={0.1} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#000033]/8 shadow-xl shadow-[#000033]/10">
              <Image
                src="/images/section-professional-clean.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
