import { action } from "@storybook/addon-actions";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PricingDynamic, PricingDynamicProps } from "../PricingDynamic";

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
  data: [
    {
      features: [
        "Vexillologist pitchfork",
        "Tumeric plaid portland",
        "Mixtape chillwave tumeric",
      ],
      bottomText: "Literally you probably haven't heard of them jean shorts.",
      label: "PRO",
      pricing: "$12",
      per: "/mo",
      selected: false,
    },
    {
      features: [
        "Vexillologist pitchfork",
        "Tumeric plaid portland",
        "Mixtape chillwave tumeric",
        "Vexillologist pitchfork",
        "Tumeric plaid portland",
        "Mixtape chillwave tumeric",
      ],
      bottomText: "Literally you probably haven't heard of them jean shorts.",
      label: "PRO",
      pricing: "$12",
      per: "/mo",
      selected: true,
    },
  ],
  description:
    "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.",
  title: "Pricing",
  theme: "light",
  color: "indigo",
  options: ["Monthly", "Annually"],
};
