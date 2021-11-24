import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import {
  FeatureWithIconSmall,
  FeatureWithIconSmallProps,
} from "../FeatureWithIconSmall";
import { MOCK_DATA_WITH_ICON_ENTRIES } from "./mock-data";

export default {
  title: "Feature/WithIconSmall",
  component: FeatureWithIconSmall,
  argTypes: {
    onClick: { control: "none" },
    linkNode: { control: "none" },
    iconNode: { control: "none" },
  },
} as Meta;

const MetaComp: Story<FeatureWithIconSmallProps> = (args) => (
  <FeatureWithIconSmall {...args} />
);

export const Items = MetaComp.bind({});
Items.args = {
  theme: "light",
  color: "indigo",
  title: "Raw Denim Heirloom Man Braid Selfies Wayfarers",
  data: MOCK_DATA_WITH_ICON_ENTRIES.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onClick")(e);
    },
  })),
};
