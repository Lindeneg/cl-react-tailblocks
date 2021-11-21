import { Story, Meta } from "@storybook/react/types-6-0";
import { LearnMore, LearnMoreProps } from "../LearnMore";

export default {
  title: "Util/LearnMore",
  component: LearnMore,
  argTypes: {
    onClick: { action: "onClick" },
  },
} as Meta;

const MetaComp: Story<LearnMoreProps> = (args) => <LearnMore {...args} />;

export const Light = MetaComp.bind({});
Light.args = {
  theme: "light",
  color: "indigo",
  linkText: "Learn More",
};

export const Dark = MetaComp.bind({});
Dark.args = {
  theme: "dark",
  color: "indigo",
  linkText: "Learn More",
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
