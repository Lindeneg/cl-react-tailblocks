import { Story, Meta } from "@storybook/react/types-6-0";
import { PricingCard, PricingCardProps } from "../PricingCard";
import { MOCK_DATA_CARD } from "./mock-data";

export default {
  title: "Pricing/Card",
  component: PricingCard,
  argTypes: {},
} as Meta;

const MetaComp: Story<PricingCardProps> = (args) => <PricingCard {...args} />;

export const Item = MetaComp.bind({});
Item.args = {
  theme: "light",
  color: "indigo",
  ...MOCK_DATA_CARD,
};
