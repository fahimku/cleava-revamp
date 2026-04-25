"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

export function ContactForm() {
  const t = useTranslations("Contact");
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <motion.div
      layout
      className="rounded-2xl border border-[#000033]/10 bg-white p-6 shadow-lg shadow-[#000033]/5 sm:p-8"
    >
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.p
            key="ok"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="py-8 text-center text-lg font-medium text-[#000033]"
          >
            {t("success")}
          </motion.p>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={onSubmit}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-[#000033]"
              >
                {t("serviceType")}
              </label>
              <select
                id="service"
                name="service"
                required
                className="mt-1.5 w-full rounded-xl border border-[#000033]/15 bg-[#fafbfc] px-3 py-2.5 text-sm outline-none ring-[#00E5FF]/40 focus:ring-2"
                defaultValue=""
              >
                <option value="" disabled>
                  —
                </option>
                <option value="home">{t("residential")}</option>
                <option value="biz">{t("commercial")}</option>
              </select>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#000033]"
                >
                  {t("name")} *
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder={t("placeholders.name")}
                  className="mt-1.5 w-full rounded-xl border border-[#000033]/15 bg-[#fafbfc] px-3 py-2.5 text-sm outline-none ring-[#00E5FF]/40 focus:ring-2"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#000033]"
                >
                  {t("email")} *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={t("placeholders.email")}
                  className="mt-1.5 w-full rounded-xl border border-[#000033]/15 bg-[#fafbfc] px-3 py-2.5 text-sm outline-none ring-[#00E5FF]/40 focus:ring-2"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#000033]"
                >
                  {t("phone")} *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder={t("placeholders.phone")}
                  className="mt-1.5 w-full rounded-xl border border-[#000033]/15 bg-[#fafbfc] px-3 py-2.5 text-sm outline-none ring-[#00E5FF]/40 focus:ring-2"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#000033]"
                >
                  {t("message")} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder={t("placeholders.message")}
                  className="mt-1.5 w-full resize-y rounded-xl border border-[#000033]/15 bg-[#fafbfc] px-3 py-2.5 text-sm outline-none ring-[#00E5FF]/40 focus:ring-2"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-[#000033] py-3 text-sm font-semibold text-white transition hover:bg-[#001a4d] sm:w-auto sm:px-10"
            >
              {t("submit")}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
