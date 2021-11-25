import { action } from "@storybook/addon-actions";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PricingCard, PricingCardProps } from "../PricingCard";

export default {
  title: "Pricing/Card",
  component: PricingCard,
  argTypes: {},
} as Meta;

const MetaComp: Story<PricingCardProps> = (args) => <PricingCard {...args} />;

export const Item = MetaComp.bind({});
Item.args = {
  features: [
    "Vexillologist pitchfork",
    "Tumeric plaid portland",
    "Mixtape chillwave tumeric",
  ],
  bottomText: "Literally you probably haven't heard of them jean shorts.",
  label: "PRO",
  pricing: "$12",
  per: "/mo",
  theme: "light",
  color: "indigo",
  selected: false,
};
