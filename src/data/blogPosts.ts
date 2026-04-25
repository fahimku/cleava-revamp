export type LocalizedBlogPost = {
  title: string;
  excerpt: string;
  category: string;
  content: string[];
};

export type BlogPost = {
  slug: string;
  coverImage: string;
  date: string;
  readingTime: string;
  fi: LocalizedBlogPost;
  en: LocalizedBlogPost;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-often-should-you-clean-home",
    coverImage: "/images/section-professional-clean.png",
    date: "2026-03-20",
    readingTime: "4 min",
    en: {
      title: "How Often Should You Clean Different Areas at Home?",
      excerpt:
        "A practical weekly and monthly rhythm to keep your home fresh without stress.",
      category: "Home Cleaning",
      content: [
        "A cleaner home does not mean deep cleaning everything every day. The key is a simple rhythm: high-touch zones weekly, deeper tasks monthly.",
        "In most homes, kitchens and bathrooms need attention every week. Living areas and bedrooms can follow a weekly maintenance routine with dusting, vacuuming, and floor cleaning.",
        "Monthly, you can rotate heavier tasks like oven cleaning, cabinet fronts, and window sills. This keeps the home in control without weekend burnout.",
      ],
    },
    fi: {
      title: "Kuinka usein kodin eri tilat kannattaa siivota?",
      excerpt:
        "Selkeä viikko- ja kuukausirytmi, jolla koti pysyy raikkaana ilman stressiä.",
      category: "Kotisiivous",
      content: [
        "Puhdas koti ei tarkoita sitä, että kaikki pitäisi siivota perusteellisesti joka päivä. Toimiva rytmi riittää: paljon käytetyt alueet viikoittain, syvempi siivous kuukausittain.",
        "Useimmissa kodeissa keittiö ja kylpyhuone tarvitsevat viikoittaista huomiota. Oleskelu- ja makuutiloissa riittää ylläpitorytmi: pölyjen pyyhintä, imurointi ja lattioiden pesu.",
        "Kuukausittain voi kierrättää raskaampia tehtäviä, kuten uunin, kaappien pintojen ja ikkunalautojen puhdistusta.",
      ],
    },
  },
  {
    slug: "office-cleaning-productivity-benefits",
    coverImage: "/images/hero-cleaning-hero.png",
    date: "2026-03-08",
    readingTime: "5 min",
    en: {
      title: "Why Regular Office Cleaning Improves Productivity",
      excerpt:
        "Clean workspaces improve focus, first impressions, and daily team wellbeing.",
      category: "Office Cleaning",
      content: [
        "Office cleaning is not only visual. A tidy workspace reduces distractions and helps teams focus better during the day.",
        "Shared areas, meeting rooms, and kitchen corners quickly collect clutter and dust. Scheduled cleaning keeps these spaces consistently usable.",
        "For companies, the biggest gain is predictability: employees and visitors always walk into an environment that feels organized and professional.",
      ],
    },
    fi: {
      title: "Miksi säännöllinen toimistosiivous parantaa tuottavuutta?",
      excerpt:
        "Siisti työympäristö tukee keskittymistä, ensivaikutelmaa ja arjen hyvinvointia.",
      category: "Toimistosiivous",
      content: [
        "Toimistosiivous ei ole vain ulkonäköä. Siisti ympäristö vähentää häiriötekijöitä ja auttaa keskittymään paremmin päivän aikana.",
        "Yhteiset tilat, neuvotteluhuoneet ja keittiönurkkaukset keräävät nopeasti pölyä ja epäjärjestystä. Säännöllinen siivous pitää tilat jatkuvasti käyttökelpoisina.",
        "Yritykselle suurin hyöty on ennakoitavuus: työntekijät ja asiakkaat saapuvat aina huoliteltuun ja ammattimaiseen ympäristöön.",
      ],
    },
  },
  {
    slug: "moving-cleaning-checklist",
    coverImage: "/images/section-professional-clean.png",
    date: "2026-02-24",
    readingTime: "6 min",
    en: {
      title: "Move-Out Cleaning Checklist Before Key Handover",
      excerpt:
        "Use this final checklist to avoid missed spots and hand over the property confidently.",
      category: "Moving Cleaning",
      content: [
        "Moving days are hectic, so a simple checklist helps. Start with kitchen surfaces, cabinet fronts, and appliance exteriors.",
        "Bathrooms should include mirror cleaning, sink and faucet descaling, floor washing, and a final sanitation pass.",
        "Finish with floors, handles, and light switches across all rooms. A final walkthrough from the entrance to each room catches missed details.",
      ],
    },
    fi: {
      title: "Muuttosiivouksen tarkistuslista ennen avainten luovutusta",
      excerpt:
        "Tällä loppulistalla vältät unohtuneet kohdat ja luovutat asunnon huoletta.",
      category: "Muuttosiivous",
      content: [
        "Muuttopäivä on usein kiireinen, joten selkeä lista auttaa. Aloita keittiöstä: tasot, kaappien pinnat ja kodinkoneiden ulkopinnat.",
        "Kylpyhuoneessa tärkeää ovat peilit, allas ja hanat, kalkinpoisto, lattian pesu sekä lopuksi desinfiointi.",
        "Viimeistele koko asunto: lattiat, ovenkahvat ja valokatkaisijat. Lopputarkistus huone huoneelta varmistaa, ettei mitään jää väliin.",
      ],
    },
  },
];

export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug);
