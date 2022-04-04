import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.pancakeswap.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://pancakeswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.pancakeswap.finance/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.pancakeswap.finance/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://pancakeswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.pancakeswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.pancakeswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.pancakeswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Documentation",
        href: "https://docs.pancakeswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const policies = [
  {
    label: "Terms of Service",
    href: "#"
  },
  {
    label: "Privacy Policy",
    href: "#"
  },
  {
    label: "Return Policy",
    href: "#"
  }
]

export const socials = [
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/Hkp5QdPpcV",
  },
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/coin_utility?t=0OcFB69ilMXDf6Yg-ULrGQ&s=09",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    href: "https://t.me/UtilityNFTCoin"
  },
  // {
  //   label: "Reddit",
  //   icon: "Reddit",
  //   href: "#",
  // },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://www.instagram.com/unc.io/",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/unsea-defi",
  },

];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
