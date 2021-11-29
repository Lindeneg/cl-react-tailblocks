import { action } from "@storybook/addon-actions";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PricingDynamic, PricingDynamicProps } from "../PricingDynamic";
import { MOCK_DATA_CARDS } from "./mock-data";

export default {
  title: "Pricing/PricingDynamic",
  component: PricingDynamic,
  argTypes: {},
} as Meta;

const MetaComp: Story<PricingDynamicProps> = (args) => (
  <PricingDynamic {...args} />
);

export const Items = MetaComp.bind({});
Items.args = {
  theme: "light",
  color: "indigo",
  selectedCardLabel: "pro",
  ...MOCK_DATA_CARDS,
  data: MOCK_DATA_CARDS.data.map((e) => ({
    ...e,
    onClick: (e) => {
      action("onClick")(e);
    },
  })),
};
