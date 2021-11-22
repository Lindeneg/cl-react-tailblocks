import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import {
  FeatureIconCardItems,
  FeatureIconCardItemsProps,
} from "../FeatureIconCardItems";
import { MOCK_DATA_WITH_ICON_CARD_ENTRIES } from "./mock-data";

export default {
  title: "Feature/FeatureIconCardItems",
  component: FeatureIconCardItems,
} as Meta;

const MetaComp: Story<FeatureIconCardItemsProps> = (args) => (
  <FeatureIconCardItems {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  data: MOCK_DATA_WITH_ICON_CARD_ENTRIES.map((e) => ({
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
  data: MOCK_DATA_WITH_ICON_CARD_ENTRIES.map((e) => ({
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
