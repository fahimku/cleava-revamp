import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { MotionSection } from "@/components/motion/MotionSection";
import { BLOG_POSTS, BLOG_SLUGS } from "@/data/blogPosts";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export default async function BlogSinglePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "BlogsPage" });
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const isFi = locale === "fi";
  const content = isFi ? post.fi : post.en;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <MotionSection>
        <Link
          href="/blogs"
          className="inline-flex rounded-full border border-[#000033]/15 bg-white px-4 py-2 text-sm font-semibold text-[#000033]/80 transition hover:bg-[#00E5FF]/10 hover:text-[#000033]"
        >
          {t("backToBlog")}
        </Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-[#00a3bd]">
          {content.category}
        </p>
        <h1 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-[#000033] sm:text-5xl">
          {content.title}
        </h1>
        <p className="mt-4 text-sm text-[#000033]/55">
          {post.date} · {post.readingTime}
        </p>
      </MotionSection>

      <MotionSection delay={0.08} className="mt-8">
        <div className="relative h-64 overflow-hidden rounded-2xl sm:h-80">
          <Image
            src={post.coverImage}
            alt={content.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
        </div>
      </MotionSection>

      <MotionSection delay={0.12} className="mt-10">
        <article className="space-y-5 text-base leading-relaxed text-[#000033]/75">
          {content.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </MotionSection>
    </div>
  );
}
