import { Story, Meta } from "@storybook/react/types-6-0";
import { PricingStatic, PricingStaticProps } from "../PricingStatic";

export default {
  title: "Pricing/PricingStatic",
  component: PricingStatic,
  argTypes: {
    onLearnMore: { control: "none" },
    onClick: { control: "none" },
  },
} as Meta;

const MetaComp: Story<PricingStaticProps> = (args) => (
  <PricingStatic {...args} />
);

export const Items = MetaComp.bind({});
Items.args = {
  theme: "light",
  color: "indigo",
  title: "Pricing",
  description:
    "Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee",
  headers: ["Plan", "Speed", "Storage", "Price"],
  data: [
    ["Start", "5 Mb/s", "15 GB", "Free"],
    ["Pro", "25 Mb/s", "25 GB", "$24"],
    ["Business", "36 Mb/s", "40 GB", "$50"],
    ["Exclusive", "48 Mb/s", "120 GB", "$72"],
  ],
};
