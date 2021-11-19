const MOCK_AVATARS = [
  {
    imgSrc: "https://dummyimage.com/104x104",
    height: 12,
    width: 12,
    name: "Holden Caulfield",
    role: "DESIGNER",
  },
  {
    imgSrc: "https://dummyimage.com/104x104",
    height: 12,
    width: 12,
    name: "Miles Davis",
    role: "DEVELOPER",
  },
];

export const MOCK_ENTRIES = [
  {
    label: "CATEGORY",
    title: "The Catalyzer",
    content:
      "Cold-pressed photo booth fam kinfolk sriracha leggings jianbing microdosing tousled waistcoat.",
    views: 1200,
    comments: 6,
  },
  {
    label: "CATEGORY",
    title: "The 400 Blows",
    content:
      "Photo booth kinfolk fam jianbing cold-leggings-pressed microdosing tousled waistcoat sriracha.",
    views: 25210,
    comments: 256,
  },
  {
    label: "CATEGORY",
    title: "Shooting Stars",
    content:
      "Booth kinfolk leggings fam cold-pressed sriracha photo jianbing microdosing waistcoat tousled.",
    views: 7592,
    comments: 45,
  },
];

export const MOCK_ENTRY = MOCK_ENTRIES[0];

export const MOCK_ENTRIES_WITH_IMG = MOCK_ENTRIES.map((e) => ({
  ...e,
  imgSrc: "https://dummyimage.com/720x400",
}));

export const MOCK_ENTRY_WITH_IMG = MOCK_ENTRIES_WITH_IMG[0];

export const MOCK_ENTRIES_WITH_AVATAR = [MOCK_ENTRIES[0], MOCK_ENTRIES[1]].map(
  (e, i) => ({
    ...e,
    ...MOCK_AVATARS[i],
  })
);

export const MOCK_ENTRY_WITH_AVATAR = MOCK_ENTRIES_WITH_AVATAR[0];
