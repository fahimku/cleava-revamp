import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("Nav");

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
      <p className="text-6xl font-bold text-[#00E5FF]/80">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-[#000033]">
        Page not found
      </h1>
      <Link
        href="/"
        className="mt-8 rounded-full bg-[#000033] px-6 py-3 text-sm font-semibold text-white"
      >
        {t("home")}
      </Link>
    </div>
  );
}
