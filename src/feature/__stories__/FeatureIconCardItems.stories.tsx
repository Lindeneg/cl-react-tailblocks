import { Story, Meta } from "@storybook/react/types-6-0";
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
  data: MOCK_DATA_WITH_ICON_CARD_ENTRIES,
  theme: "light",
  color: "indigo",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  data: MOCK_DATA_WITH_ICON_CARD_ENTRIES,
  theme: "dark",
  color: "indigo",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
