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

export const Items = MetaComp.bind({});
Items.args = {
  theme: "light",
  color: "indigo",
  data: MOCK_DATA_WITH_ICON_CARD_ENTRIES.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onClick")(e);
    },
  })),
};
