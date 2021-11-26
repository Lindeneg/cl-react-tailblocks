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

export const Item = MetaComp.bind({});
Item.args = {
  theme: "light",
  color: "indigo",
  ...MOCK_DATA_CARDS,
};
