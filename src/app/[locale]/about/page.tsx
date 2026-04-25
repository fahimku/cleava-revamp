import { getTranslations } from "next-intl/server";
import { MotionSection } from "@/components/motion/MotionSection";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About" });

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <MotionSection>
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
    </div>
  );
}
