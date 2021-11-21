import { Story, Meta } from "@storybook/react/types-6-0";
import { Section, SectionProps } from "../Section";

export default {
  title: "Util/Section",
  component: Section,
  argTypes: {
    testId: { control: "none" },
  },
} as Meta;

const MetaComp: Story<SectionProps> = (args) => <Section {...args} />;

export const Light = MetaComp.bind({});
Light.args = {
  theme: "light",
  children: <p>Hello There</p>,
};

export const Dark = MetaComp.bind({});
Dark.args = {
  theme: "dark",
  children: <p>Hello There</p>,
};
Dark.parameters = {
  backgrounds: { default: "dark" },
};
