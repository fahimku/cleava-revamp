import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export async function Footer() {
  const t = await getTranslations("Footer");
  const n = await getTranslations("Nav");
  const locale = await getLocale();

  const isFi = locale === "fi";
  const contactTitle = isFi ? "Yhteystiedot" : "Contact Information";
  const companyTitle = isFi ? "Cleava" : "Cleava";
  const hoursTitle = isFi ? "Aukioloajat" : "Opening Hours";
  const servicesTitle = isFi ? "Palvelut" : "Services";
  const monFri = isFi ? "Maanantai - Perjantai: 09.00 - 17.00" : "Monday - Friday: 09.00 - 17.00";
  const satSun = isFi ? "Lauantai - Sunnuntai: Suljettu" : "Saturday - Sunday: Closed";
  const emailLabel = isFi ? "Sähköposti" : "Email";
  const companyLegal = isFi
    ? "Yrityksen virallinen nimi: Bioomhive"
    : "Official company name: Bioomhive";
  const rightsLine = isFi
    ? "Cleava Helsinki. Kaikki oikeudet pidätetään."
    : "Cleava Helsinki. All rights reserved.";

  return (
    <footer className="border-t border-[#000033]/10 bg-[linear-gradient(180deg,#f7fbff_0%,#ecf6ff_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="mb-10 flex items-center justify-center sm:justify-start">
          <Image
            src="/cleava-logo.png"
            alt="Cleava"
            width={280}
            height={90}
            className="h-16 w-auto sm:h-[4.5rem]"
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-base font-bold text-[#000033]">{contactTitle}</h3>
            <div className="mt-3 space-y-1.5 text-sm text-[#000033]/75">
              <p>
                Phone:{" "}
                <a
                  href="tel:0451878083"
                  className="font-semibold text-[#000033] underline underline-offset-2 hover:text-[#003d7a]"
                >
                  0451878083
                </a>
              </p>
              <p>
                {emailLabel}:{" "}
                <a
                  href="mailto:info@cleava.fi"
                  className="font-semibold text-[#000033] underline underline-offset-2 hover:text-[#003d7a]"
                >
                  info@cleava.fi
                </a>
              </p>
              <p>Holmankorpi 3F, 02210 Espoo</p>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#000033]">{companyTitle}</h3>
            <div className="mt-3 space-y-1.5 text-sm text-[#000033]/75">
              <p>Business ID: 3567546-2</p>
              <p>{companyLegal}</p>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#000033]">{hoursTitle}</h3>
            <div className="mt-3 space-y-1.5 text-sm text-[#000033]/75">
              <p>{monFri}</p>
              <p>{satSun}</p>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#000033]">{servicesTitle}</h3>
            <div className="mt-3 flex flex-col gap-1.5 text-sm text-[#000033]/75">
              <Link href="/services/home-cleaning" className="hover:text-[#000033]">
                {isFi ? "Kotisiivous" : "Home Cleaning"}
              </Link>
              <Link href="/services/office-cleaning" className="hover:text-[#000033]">
                {isFi ? "Toimistosiivous" : "Office Cleaning"}
              </Link>
              <Link href="/services/moving-cleaning" className="hover:text-[#000033]">
                {isFi ? "Muuttosiivous" : "Move-Out Cleaning"}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 sm:justify-start">
          <a
            href="https://www.facebook.com/share/17CDTxnHJu/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#000033]/15 bg-white text-[#000033]/80 shadow-sm transition hover:-translate-y-0.5 hover:text-[#000033]"
            aria-label="Facebook"
          >
            <FaFacebookF className="h-4 w-4" />
          </a>
          <a
            href="https://www.instagram.com/cleava.helsinki?igsh=MW96cXg4NzFucGpybg==&utm_source=ig_contact_invite"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#000033]/15 bg-white text-[#000033]/80 shadow-sm transition hover:-translate-y-0.5 hover:text-[#000033]"
            aria-label="Instagram"
          >
            <FaInstagram className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-[#000033]/10 py-4 text-center text-xs text-[#000033]/50">
        © {new Date().getFullYear()} {rightsLine}
      </div>
    </footer>
  );
}
