import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import {
  FeatureIconCardItemsWithHeader,
  FeatureIconCardItemsWithHeaderProps,
} from "../FeatureIconCardItemsWithHeader";
import { MOCK_DATA_WITH_ICON_BIG_ENTRIES } from "./mock-data";

export default {
  title: "Feature/WithCardIcon",
  component: FeatureIconCardItemsWithHeader,
} as Meta;

const MetaComp: Story<FeatureIconCardItemsWithHeaderProps> = (args) => (
  <FeatureIconCardItemsWithHeader {...args} />
);

export const HeaderItems = MetaComp.bind({});
HeaderItems.args = {
  theme: "light",
  color: "indigo",
  data: MOCK_DATA_WITH_ICON_BIG_ENTRIES.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onClick")(e);
    },
  })),
  label: "ROOF PARTY POLAROID",
  title: "Master Cleanse Reliac Heirloom",
};
