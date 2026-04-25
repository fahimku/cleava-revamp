import { getTranslations } from "next-intl/server";
import { MotionSection } from "@/components/motion/MotionSection";
import { ContactForm } from "@/components/contact/ContactForm";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact" });

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
      <MotionSection>
        <h1 className="text-4xl font-bold tracking-tight text-[#000033] sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-[#000033]/65">{t("intro")}</p>
      </MotionSection>
      <MotionSection delay={0.08} className="mt-10">
        <ContactForm />
      </MotionSection>
    </div>
  );
}
