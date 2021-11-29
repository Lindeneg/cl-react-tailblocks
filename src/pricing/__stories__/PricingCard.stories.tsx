import { Story, Meta } from "@storybook/react/types-6-0";
import { PricingCard, PricingCardProps } from "../PricingCard";
import { MOCK_DATA_CARD } from "./mock-data";

export default {
  title: "Pricing/PricingCard",
  component: PricingCard,
  argTypes: {
    theme: { control: "none" },
    onClick: { control: "none" },
  },
} as Meta;

const MetaComp: Story<PricingCardProps> = (args) => <PricingCard {...args} />;

export const Light = MetaComp.bind({});
Light.args = {
  theme: "light",
  color: "indigo",
  ...MOCK_DATA_CARD,
};

export const Dark = MetaComp.bind({});
Dark.args = {
  theme: "dark",
  color: "indigo",
  ...MOCK_DATA_CARD,
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
