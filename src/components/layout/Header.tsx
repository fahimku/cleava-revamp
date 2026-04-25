"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const paths = {
  home: "/",
  services: "/services",
  story: "/story",
  blog: "/blogs",
  contact: "/contact",
} as const;

export function Header() {
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const reduce = useReducedMotion();
  const servicesRef = useRef<HTMLDivElement>(null);

  const serviceItems = [
    { href: "/services/home-cleaning", label: t("homeCleaning") },
    { href: "/services/moving-cleaning", label: t("movingCleaning") },
    { href: "/services/office-cleaning", label: t("officeCleaning") },
  ] as const;

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node;
      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#000033]/6 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-[5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:h-[6rem] sm:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0 rounded-md px-1 py-1">
          <Image
            src="/cleava-logo.png"
            alt="Cleava"
            width={280}
            height={90}
            className="h-14 w-auto sm:h-16 lg:h-[4.75rem]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href={paths.home}
            className="rounded-full px-3 py-2 text-sm font-medium text-[#000033]/75 transition-colors hover:bg-[#00E5FF]/10 hover:text-[#000033]"
          >
            {t("home")}
          </Link>
          <div className="relative" ref={servicesRef}>
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-[#000033]/80 transition-colors hover:bg-[#00E5FF]/10 hover:text-[#000033]"
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
            >
              {t("services")}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.16 }}
                  className="absolute left-0 top-[calc(100%+0.4rem)] min-w-[15rem] overflow-hidden rounded-2xl border border-[#000033]/10 bg-white p-2 shadow-xl shadow-[#000033]/10"
                  role="menu"
                >
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                      className="block rounded-xl px-3 py-2.5 text-sm font-medium text-[#000033]/80 transition hover:bg-[#00E5FF]/10 hover:text-[#000033]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            href={paths.story}
            className="rounded-full px-3 py-2 text-sm font-medium text-[#000033]/75 transition-colors hover:bg-[#00E5FF]/10 hover:text-[#000033]"
          >
            {t("ourStory")}
          </Link>
          <Link
            href={paths.blog}
            className="rounded-full px-3 py-2 text-sm font-medium text-[#000033]/75 transition-colors hover:bg-[#00E5FF]/10 hover:text-[#000033]"
          >
            {t("blog")}
          </Link>
          <Link
            href={paths.contact}
            className="rounded-full px-3 py-2 text-sm font-medium text-[#000033]/75 transition-colors hover:bg-[#00E5FF]/10 hover:text-[#000033]"
          >
            {t("contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="hidden rounded-full bg-[#000033] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#000033]/15 transition hover:bg-[#001a4d] sm:inline-flex"
          >
            {t("quote")}
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#000033]/10 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <motion.span
                animate={
                  open
                    ? { rotate: 45, y: 6 }
                    : { rotate: 0, y: 0 }
                }
                className="block h-0.5 w-5 rounded-full bg-[#000033]"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-5 rounded-full bg-[#000033]"
              />
              <motion.span
                animate={
                  open
                    ? { rotate: -45, y: -6 }
                    : { rotate: 0, y: 0 }
                }
                className="block h-0.5 w-5 rounded-full bg-[#000033]"
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            className="border-t border-[#000033]/6 bg-white md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              <Link
                href={paths.home}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-[#000033]"
              >
                {t("home")}
              </Link>
              <div className="rounded-xl border border-[#000033]/8 bg-[#f8fbff] px-2 py-2">
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-base font-medium text-[#000033]"
                >
                  {t("services")}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={reduce ? false : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={reduce ? undefined : { opacity: 0, height: 0 }}
                      className="overflow-hidden pl-2"
                    >
                      {serviceItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => {
                            setOpen(false);
                            setServicesOpen(false);
                          }}
                          className="block rounded-lg px-2 py-2 text-sm font-medium text-[#000033]/80"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link
                href={paths.story}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-[#000033]"
              >
                {t("ourStory")}
              </Link>
              <Link
                href={paths.blog}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-[#000033]"
              >
                {t("blog")}
              </Link>
              <Link
                href={paths.contact}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-[#000033]"
              >
                {t("contact")}
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-[#00E5FF]/25 px-4 py-3 text-center text-sm font-semibold text-[#000033]"
              >
                {t("quote")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
