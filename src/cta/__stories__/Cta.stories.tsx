import { Story, Meta } from "@storybook/react/types-6-0";
import { Cta, CtaProps } from "../Cta";

export default {
  title: "Cta/Cta",
  component: Cta,
  argTypes: {
    onClick: { control: "none" },
  },
} as Meta;

const MetaComp: Story<CtaProps> = (args) => <Cta {...args} />;

export const Item = MetaComp.bind({});
Item.args = {
  theme: "light",
  color: "indigo",
  title:
    "Slow-carb next level shoinddgoitch ethical authentic, scenester sriracha forage.",
};
