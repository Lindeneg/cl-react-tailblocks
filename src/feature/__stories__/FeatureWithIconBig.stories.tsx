import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import {
  FeatureWithIconBig,
  FeatureWithIconBigProps,
} from "../FeatureWithIconBig";
import { MOCK_DATA_WITH_ICON_BIG_ENTRIES } from "./mock-data";

export default {
  title: "Feature/WithIconBig",
  component: FeatureWithIconBig,
  argTypes: {
    onClick: { control: "none" },
  },
} as Meta;

const MetaComp: Story<FeatureWithIconBigProps> = (args) => (
  <FeatureWithIconBig {...args} />
);

export const Items = MetaComp.bind({});
Items.args = {
  theme: "light",
  color: "indigo",
  data: MOCK_DATA_WITH_ICON_BIG_ENTRIES.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onLearnMore")(e);
    },
  })),
  buttonText: "Button",
  title: "Raw Denim Heirloom Man Braid",
  description:
    "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.",
};
