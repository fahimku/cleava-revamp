import { Link } from "@/i18n/navigation";
import { MotionSection } from "@/components/motion/MotionSection";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

const slugs = ["home-cleaning", "moving-cleaning", "office-cleaning"] as const;
type ServiceSlug = (typeof slugs)[number];

function isServiceSlug(value: string): value is ServiceSlug {
  return (slugs as readonly string[]).includes(value);
}

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isServiceSlug(slug)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "ServiceDetails" });
  const title = t(`${slug}.title`);
  const subtitle = t(`${slug}.subtitle`);
  const description = t(`${slug}.description`);
  const includes = t.raw(`${slug}.includes`) as string[];

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <MotionSection className="max-w-3xl">
        <Link
          href="/services"
          className="inline-flex rounded-full border border-[#000033]/15 bg-white px-4 py-2 text-sm font-semibold text-[#000033]/80 transition hover:bg-[#00E5FF]/10 hover:text-[#000033]"
        >
          {t("backToServices")}
        </Link>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#000033] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-xl text-[#000033]/75">{subtitle}</p>
        <p className="mt-6 text-base leading-relaxed text-[#000033]/65">
          {description}
        </p>
      </MotionSection>

      <MotionSection delay={0.06} className="mt-12">
        <div className="rounded-2xl border border-[#000033]/10 bg-[#f8fbff] p-8">
          <h2 className="text-xl font-semibold text-[#000033]">
            {t("includesTitle")}
          </h2>
          <ul className="mt-5 space-y-3">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#000033]/75">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#00E5FF]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </MotionSection>

      <MotionSection delay={0.1} className="mt-10">
        <div className="rounded-2xl bg-gradient-to-r from-[#000033] to-[#003d7a] p-8 text-white">
          <h3 className="text-2xl font-bold">{t("ctaTitle")}</h3>
          <p className="mt-3 text-white/85">{t("ctaBody")}</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-[#00E5FF] px-6 py-3 text-sm font-bold text-[#000033] transition hover:bg-[#6ef2ff]"
          >
            {t("ctaButton")}
          </Link>
        </div>
      </MotionSection>
    </div>
  );
}
