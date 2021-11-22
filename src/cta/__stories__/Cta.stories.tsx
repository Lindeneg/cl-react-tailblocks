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

export const Light = MetaComp.bind({});
Light.args = {
  theme: "light",
  color: "indigo",
  title:
    "Slow-carb next level shoinddgoitch ethical authentic, scenester sriracha forage.",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  theme: "dark",
  color: "indigo",
  title:
    "Slow-carb next level shoinddgoitch ethical authentic, scenester sriracha forage.",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
