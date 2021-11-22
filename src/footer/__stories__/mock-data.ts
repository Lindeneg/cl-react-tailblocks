export const MOCK_DATA_LINKS = {
  links: [
    {
      title: "PROCESSORS",
      links: [
        {
          label: "POPULAR",
        },
        {
          label: "AMD",
        },
        {
          label: "INTEL",
        },
        {
          label: "ARM",
        },
      ],
    },
    {
      title: "GRAPHICS CARDS",
      links: [
        {
          label: "POPULAR",
        },
        {
          label: "NVIDIA",
        },
        {
          label: "AMD",
        },
        {
          label: "SAPPHIRE",
        },
      ],
    },
    {
      title: "STORAGE",
      links: [
        {
          label: "POPULAR",
        },
        {
          label: "SEAGATE",
        },
        {
          label: "WESTERN-DIGITAL",
        },
        {
          label: "SANDISK",
        },
      ],
    },
    {
      title: "MEMORY",
      links: [
        {
          label: "POPULAR",
        },
        {
          label: "CRUCIAL",
        },
        {
          label: "CORSAIR",
        },
        {
          label: "G.SKILL",
        },
      ],
    },
  ],
};

export const MOCK_FOOTER = {
  name: "Tailblocks",
  description: "Air plant banjo lyft occupy retro adaptogen indego",
  socials: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedIn: "https://linkedin.com",
  },
  credit: {
    year: "2021",
    label: "@lindeneg",
    aProps: {
      href: "https://github.com/lindeneg",
      target: "_blank",
      rel: "no-referrer",
    },
  },
  ...MOCK_DATA_LINKS,
};
