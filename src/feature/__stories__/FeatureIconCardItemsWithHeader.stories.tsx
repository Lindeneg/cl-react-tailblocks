import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import {
  FeatureIconCardItemsWithHeader,
  FeatureIconCardItemsWithHeaderProps,
} from "../FeatureIconCardItemsWithHeader";
import { MOCK_DATA_WITH_ICON_BIG_ENTRIES } from "./mock-data";

export default {
  title: "Feature/FeatureIconCardItemsWithHeader",
  component: FeatureIconCardItemsWithHeader,
} as Meta;

const MetaComp: Story<FeatureIconCardItemsWithHeaderProps> = (args) => (
  <FeatureIconCardItemsWithHeader {...args} />
);

export const Light = MetaComp.bind({});
Light.args = {
  data: MOCK_DATA_WITH_ICON_BIG_ENTRIES.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onClick")(e);
    },
  })),
  label: "ROOF PARTY POLAROID",
  title: "Master Cleanse Reliac Heirloom",
  theme: "light",
  color: "indigo",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  data: MOCK_DATA_WITH_ICON_BIG_ENTRIES.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onClick")(e);
    },
  })),
  label: "ROOF PARTY POLAROID",
  title: "Master Cleanse Reliac Heirloom",
  theme: "dark",
  color: "indigo",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
