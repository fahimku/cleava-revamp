import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { MotionSection } from "@/components/motion/MotionSection";
import { getTranslations } from "next-intl/server";
import { BLOG_POSTS } from "@/data/blogPosts";

export default async function BlogsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "BlogsPage" });
  const isFi = locale === "fi";

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <MotionSection className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-[#000033] sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-[#000033]/65">{t("subtitle")}</p>
      </MotionSection>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((post, i) => {
          const content = isFi ? post.fi : post.en;
          return (
            <MotionSection key={post.slug} delay={i * 0.04}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#000033]/10 bg-white shadow-sm">
                <div className="relative h-48">
                  <Image
                    src={post.coverImage}
                    alt={content.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#00a3bd]">
                    {content.category}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold leading-snug text-[#000033]">
                    {content.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#000033]/65">
                    {content.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-[#000033]/50">
                      {post.date} · {post.readingTime}
                    </span>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="rounded-full border border-[#000033]/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#000033]/75 transition hover:border-[#00E5FF]/60 hover:bg-[#00E5FF]/8 hover:text-[#000033]"
                    >
                      {t("readMore")}
                    </Link>
                  </div>
                </div>
              </article>
            </MotionSection>
          );
        })}
      </div>
    </div>
  );
}
