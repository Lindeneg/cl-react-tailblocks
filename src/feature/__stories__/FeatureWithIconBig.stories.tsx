import { Story, Meta } from "@storybook/react/types-6-0";
import {
  FeatureWithIconBig,
  FeatureWithIconBigProps,
} from "../FeatureWithIconBig";
import { MOCK_DATA_WITH_ICON_BIG_ENTRIES } from "./mock-data";

export default {
  title: "Feature/FeatureWithIconBig",
  component: FeatureWithIconBig,
  argTypes: {
    onClick: { control: "none" },
  },
} as Meta;

const MetaComp: Story<FeatureWithIconBigProps> = (args) => (
  <FeatureWithIconBig {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  data: MOCK_DATA_WITH_ICON_BIG_ENTRIES,
  title: "Raw Denim Heirloom Man Braid",
  description:
    "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.",
  theme: "light",
  color: "indigo",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  data: MOCK_DATA_WITH_ICON_BIG_ENTRIES,
  title: "Raw Denim Heirloom Man Braid",
  description:
    "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.",
  theme: "dark",
  color: "indigo",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
