import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import {
  FeatureWithIconSmall,
  FeatureWithIconSmallProps,
} from "../FeatureWithIconSmall";
import { MOCK_DATA_WITH_ICON_ENTRIES } from "./mock-data";

export default {
  title: "Feature/FeatureWithIconSmall",
  component: FeatureWithIconSmall,
} as Meta;

const MetaComp: Story<FeatureWithIconSmallProps> = (args) => (
  <FeatureWithIconSmall {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  title: "Raw Denim Heirloom Man Braid Selfies Wayfarers",
  data: MOCK_DATA_WITH_ICON_ENTRIES.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onClick")(e);
    },
  })),
  theme: "light",
  color: "indigo",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  title: "Raw Denim Heirloom Man Braid Selfies Wayfarers",
  data: MOCK_DATA_WITH_ICON_ENTRIES.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onClick")(e);
    },
  })),
  theme: "dark",
  color: "indigo",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
