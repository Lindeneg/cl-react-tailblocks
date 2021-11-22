import { IconConstraints } from "../../util/Icon";

// TODO all feature tests

export const MOCK_DATA_WITH_ICON_ENTRIES: {
  title: string;
  description: string;
  icon: IconConstraints;
}[] = [
  {
    title: "Shooting Stars",
    description:
      "Bottle Crucifix blue vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.",
    icon: "graph",
  },
  {
    title: "The Catalyzer",
    description:
      "Post-ironic four dollar toast vegan taxidermy blue bottle crucifix vinyl. Try-hard gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS ugh iceland kickstarter tumblr live-edge tilde.",
    icon: "scissor",
  },
  {
    title: "Neptune",
    description:
      "Ramps microdosing banh mi pug VHS gastropub indxgo juice poutine, try-hard ugh iceland kickstarter tumblr live-edge tilde. Four dollar blue bottle crucifix vinyl post-ironic toast vegan taxidermy.",
    icon: "person",
  },
];

export const MOCK_DATA_WITH_ICON_ENTRY = MOCK_DATA_WITH_ICON_ENTRIES[0];

export const MOCK_DATA_WITH_ICON_BIG_ENTRIES = [
  {
    ...MOCK_DATA_WITH_ICON_ENTRIES[0],
    description:
      "Taxidermy gastropub indxgo juice poutin. Ramps blue bottle crucifix vinyl post-ironic four dollar toast VHS try-hard vegan t microdosing banh mi pug.",
  },
  {
    ...MOCK_DATA_WITH_ICON_ENTRIES[1],
    description:
      "Gastropub indxgo juice poutine, ramps blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Microdosing banh mi pug VHS try-hard.",
  },
  {
    ...MOCK_DATA_WITH_ICON_ENTRIES[2],
    description:
      "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Microdosing banh mi pug VHS try-hard gastropub indxgo juice poutine ramps.",
  },
];

export const MOCK_DATA_WITH_ICON_BIG_ENTRY = MOCK_DATA_WITH_ICON_BIG_ENTRIES[0];

export const MOCK_DATA_WITH_IMAGE_ENTRIES = [
  {
    ...MOCK_DATA_WITH_ICON_ENTRIES[0],
    description:
      "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
  },
  {
    ...MOCK_DATA_WITH_ICON_ENTRIES[1],
    description:
      "Vinyl post-ironic four dollar blue bottle indxgo juice poutine Gastropub. Crucifix toast vegan taxidermy.",
  },
  {
    ...MOCK_DATA_WITH_ICON_ENTRIES[2],
    description:
      "Toast vegan taxidermy blue bottle crucifix vinyl post-ironic four dollar. VHS try-hard gastropub indxgo juice poutine ramps microdosing banh mi pug.",
  },
];

export const MOCK_DATA_WITH_ICON_CARD_ENTRIES = [
  MOCK_DATA_WITH_IMAGE_ENTRIES[0],
  MOCK_DATA_WITH_IMAGE_ENTRIES[1],
];

export const MOCK_DATA_WITH_ICON_CARD_ENTRY =
  MOCK_DATA_WITH_ICON_CARD_ENTRIES[0];
