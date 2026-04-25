import { getTranslations } from "next-intl/server";
import { MotionSection } from "@/components/motion/MotionSection";
import { Link } from "@/i18n/navigation";

const keys = ["residential", "commercial", "deep", "recurring"] as const;
const detailPaths: Partial<Record<(typeof keys)[number], string>> = {
  residential: "/services/home-cleaning",
  commercial: "/services/office-cleaning",
  deep: "/services/moving-cleaning",
};

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Services" });
  const p = await getTranslations({ locale, namespace: "ServicesPage" });

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <MotionSection className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-[#000033] sm:text-5xl">
          {p("title")}
        </h1>
        <p className="mt-4 text-lg text-[#000033]/65">{p("intro")}</p>
      </MotionSection>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {keys.map((key, i) => (
          <MotionSection key={key} delay={i * 0.05}>
            <article className="h-full rounded-2xl border border-[#000033]/8 bg-[#fafbfc] p-8">
              <h2 className="text-xl font-semibold text-[#000033]">
                {t(`${key}.title`)}
              </h2>
              <p className="mt-3 text-[#000033]/65">{t(`${key}.desc`)}</p>
              <p className="mt-6 text-sm font-medium text-[#00E5FF]">
                {p("included")}
              </p>
              {detailPaths[key] ? (
                <Link
                  href={detailPaths[key]}
                  className="mt-5 inline-flex rounded-full border border-[#000033]/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#000033]/70 transition hover:border-[#00E5FF]/60 hover:bg-[#00E5FF]/8 hover:text-[#000033]"
                >
                  {p("details")}
                </Link>
              ) : null}
            </article>
          </MotionSection>
        ))}
      </div>
    </div>
  );
}
