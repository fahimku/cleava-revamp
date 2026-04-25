import { MotionSection } from "@/components/motion/MotionSection";
import { getTranslations } from "next-intl/server";

export default async function StoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "StoryPage" });

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <MotionSection className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-[#000033] sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-6 text-xl font-medium text-[#000033]/80">{t("lead")}</p>
        <p className="mt-6 text-base leading-relaxed text-[#000033]/65">
          {t("p1")}
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#000033]/65">
          {t("p2")}
        </p>
      </MotionSection>

      <MotionSection delay={0.08} className="mt-12">
        <div className="rounded-2xl border border-[#000033]/10 bg-[#f8fbff] p-8">
          <h2 className="text-2xl font-semibold text-[#000033]">
            {t("valuesTitle")}
          </h2>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3 text-[#000033]/75">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#00E5FF]" />
              {t("values.quality")}
            </li>
            <li className="flex items-start gap-3 text-[#000033]/75">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#00E5FF]" />
              {t("values.trust")}
            </li>
            <li className="flex items-start gap-3 text-[#000033]/75">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#00E5FF]" />
              {t("values.speed")}
            </li>
          </ul>
        </div>
      </MotionSection>
    </div>
  );
}
